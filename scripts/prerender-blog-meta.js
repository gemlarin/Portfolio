/**
 * LinkedIn, Slack, and Facebook read the first HTML response and do not run
 * JavaScript. GitHub Pages serves the SPA shell as a 404 for /blog/:slug, so
 * vue-meta never reaches them. This writes a real page per Hashnode post so
 * /blog/<slug>/ returns 200 with Open Graph tags.
 *
 * Host must match HASHNODE_HOST in src/utils/hashnode.js.
 */
const fs = require("fs");
const path = require("path");

const HASHNODE_GQL = "https://gql-beta.hashnode.com/";
const HASHNODE_HOST = "front-end-fieldnotes.hashnode.dev";
const SITE_ORIGIN = "https://www.dannygibas.dev";
const SITE_NAME = "Danny Gibas";
const FALLBACK_DESCRIPTION =
  "Practical notes on frontend engineering, design, and shipping.";
const DIST = path.resolve(__dirname, "../dist");
const PAGE_SIZE = 20;
const MAX_PAGES = 20;

const POSTS_QUERY = `
  query PublicationPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            title
            subtitle
            brief
            slug
            publishedAt
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function meta(vmid, attrName, attrValue, content) {
  return (
    '<meta data-vmid="' +
    escapeHtml(vmid) +
    '" ' +
    attrName +
    '="' +
    escapeHtml(attrValue) +
    '" content="' +
    escapeHtml(content) +
    '">'
  );
}

function plainText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function assertSlug(slug) {
  if (typeof slug !== "string" || !/^[a-z0-9-]{1,120}$/.test(slug)) {
    throw new Error("Refusing unexpected post slug: " + slug);
  }
  return slug;
}

function descriptionFor(post) {
  const text = plainText(post.subtitle) || plainText(post.brief) || FALLBACK_DESCRIPTION;
  if (text.length <= 220) return text;
  return text.slice(0, 217).replace(/\s+\S*$/, "") + "...";
}

function pageUrl(slug) {
  return SITE_ORIGIN + "/blog/" + slug + "/";
}

function headTags(post) {
  const title = plainText(post.title);
  const description = descriptionFor(post);
  const url = pageUrl(post.slug);
  const image = post.coverImage || "";
  const tags = [
    meta("description", "name", "description", description),
    meta("og:site_name", "property", "og:site_name", SITE_NAME),
    meta("og:title", "property", "og:title", title),
    meta("og:description", "property", "og:description", description),
    meta("og:type", "property", "og:type", "article"),
    meta("og:url", "property", "og:url", url),
    meta(
      "twitter:card",
      "name",
      "twitter:card",
      image ? "summary_large_image" : "summary",
    ),
    meta("twitter:title", "name", "twitter:title", title),
    meta("twitter:description", "name", "twitter:description", description),
  ];

  if (image) {
    tags.push(meta("og:image", "property", "og:image", image));
    tags.push(meta("og:image:alt", "property", "og:image:alt", title));
    tags.push(meta("twitter:image", "name", "twitter:image", image));
    tags.push(meta("twitter:image:alt", "name", "twitter:image:alt", title));
  }

  if (post.publishedAt) {
    tags.push(
      meta(
        "article:published_time",
        "property",
        "article:published_time",
        post.publishedAt,
      ),
    );
  }

  return tags.join("\n    ");
}

function inject(html, post) {
  const title = escapeHtml(plainText(post.title));
  if (!/<title>[^<]*<\/title>/.test(html)) {
    throw new Error("dist/index.html is missing <title>");
  }
  if (!html.includes("</head>")) {
    throw new Error("dist/index.html is missing </head>");
  }

  const withTitle = html.replace(/<title>[^<]*<\/title>/, function () {
    return "<title>" + title + "</title>";
  });
  const block = "\n    " + headTags(post) + "\n  ";
  return withTitle.replace("</head>", function () {
    return block + "</head>";
  });
}

async function hashnodeRequest(variables) {
  const res = await fetch(HASHNODE_GQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: POSTS_QUERY, variables: variables }),
  });

  if (!res.ok) {
    throw new Error("Hashnode request failed (" + res.status + ")");
  }

  const json = await res.json();
  if (json.errors && json.errors.length) {
    throw new Error(json.errors[0].message || "Hashnode GraphQL error");
  }

  return json.data;
}

async function fetchAllPosts() {
  const posts = [];
  let after = null;
  let page = 0;

  while (page < MAX_PAGES) {
    page += 1;
    const variables = {
      host: HASHNODE_HOST,
      first: PAGE_SIZE,
    };
    if (after) variables.after = after;

    const data = await hashnodeRequest(variables);
    const publication = data && data.publication;
    if (!publication) {
      throw new Error("Publication not found");
    }

    const connection = publication.posts || {};
    const edges = connection.edges || [];
    for (let i = 0; i < edges.length; i++) {
      const node = edges[i] && edges[i].node;
      if (!node || !node.slug || !node.title) continue;
      posts.push({
        title: node.title,
        subtitle: node.subtitle || "",
        brief: node.brief || "",
        slug: assertSlug(node.slug),
        publishedAt: node.publishedAt || "",
        coverImage: (node.coverImage && node.coverImage.url) || "",
      });
    }

    const pageInfo = connection.pageInfo || {};
    if (!pageInfo.hasNextPage || !pageInfo.endCursor) break;
    after = pageInfo.endCursor;
  }

  return posts;
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error("Missing " + indexPath + ". Run webpack before this script.");
  }

  const shell = fs.readFileSync(indexPath, "utf8");
  const posts = await fetchAllPosts();
  if (!posts.length) {
    throw new Error("Hashnode returned no posts to prerender");
  }

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const dir = path.join(DIST, "blog", post.slug);
    fs.mkdirSync(dir, { recursive: true });
    const html = inject(shell, post);
    fs.writeFileSync(path.join(dir, "index.html"), html);
    if (!post.coverImage) {
      console.warn("No cover image for " + post.slug);
    }
    console.log("Prerendered /blog/" + post.slug + "/");
  }

  console.log("Prerendered " + posts.length + " blog post(s).");
}

main().catch(function (err) {
  console.error(err && err.message ? err.message : err);
  process.exit(1);
});
