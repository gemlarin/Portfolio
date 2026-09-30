const HASHNODE_GQL = 'https://gql-beta.hashnode.com/'
export const HASHNODE_HOST = 'front-end-fieldnotes.hashnode.dev'
export const HASHNODE_BLOG_URL = 'https://front-end-fieldnotes.hashnode.dev/'
export const HASHNODE_RSS_URL =
    'https://front-end-fieldnotes.hashnode.dev/rss.xml'
export const BLOG_PAGE_SIZE = 5
export const RELATED_POST_LIMIT = 3
export const RELATED_CANDIDATE_SIZE = 20

const POSTS_QUERY = `
  query PublicationPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      title
      url
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            coverImage {
              url
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`

const POST_QUERY = `
  query PublicationPost($host: String!, $slug: String!) {
    publication(host: $host) {
      url
      post(slug: $slug) {
        id
        title
        brief
        slug
        url
        publishedAt
        coverImage {
          url
        }
        tags {
          name
          slug
        }
        content {
          html
        }
      }
    }
  }
`

async function hashnodeRequest(query, variables) {
    const res = await fetch(HASHNODE_GQL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    })

    if (!res.ok) {
        throw new Error('Hashnode request failed (' + res.status + ')')
    }

    const json = await res.json()
    if (json.errors && json.errors.length) {
        throw new Error(json.errors[0].message || 'Hashnode GraphQL error')
    }

    return json.data
}

function mapTags(tags) {
    if (!Array.isArray(tags)) return []
    return tags
        .filter(function (tag) {
            return tag && tag.name
        })
        .map(function (tag) {
            return {
                name: tag.name,
                slug: tag.slug || tag.name,
            }
        })
}

/**
 * @param {{ first?: number, after?: string | null }} [options]
 * @returns {Promise<{ title: string, url: string, posts: Array<{ id: string, title: string, brief: string, slug: string, url: string, publishedAt: string }>, hasNextPage: boolean, endCursor: string | null }>}
 */
export async function fetchHashnodePublication({
    first = BLOG_PAGE_SIZE,
    after = null,
} = {}) {
    const variables = {
        host: HASHNODE_HOST,
        first,
    }
    if (after) {
        variables.after = after
    }

    const data = await hashnodeRequest(POSTS_QUERY, variables)

    const publication = data && data.publication
    if (!publication) {
        throw new Error('Publication not found')
    }

    const connection = publication.posts || {}
    const edges = connection.edges || []
    const pageInfo = connection.pageInfo || {}
    const posts = edges.map((edge) => edge.node).filter(Boolean).map((node) => ({
        id: node.id,
        title: node.title,
        brief: node.brief || '',
        slug: node.slug,
        url: node.url,
        publishedAt: node.publishedAt,
        coverImage:
            (node.coverImage && node.coverImage.url) || null,
        tags: mapTags(node.tags),
    }))

    return {
        title: publication.title,
        url: publication.url || HASHNODE_BLOG_URL,
        posts,
        hasNextPage: Boolean(pageInfo.hasNextPage),
        endCursor: pageInfo.endCursor || null,
    }
}

/**
 * @param {string} slug
 * @returns {Promise<{ id: string, title: string, brief: string, slug: string, url: string, publishedAt: string, coverImage: string | null, html: string, publicationUrl: string }>}
 */
export async function fetchHashnodePost(slug) {
    const data = await hashnodeRequest(POST_QUERY, {
        host: HASHNODE_HOST,
        slug,
    })

    const publication = data && data.publication
    const post = publication && publication.post
    if (!post) {
        throw new Error('Post not found')
    }

    return {
        id: post.id,
        title: post.title,
        brief: post.brief || '',
        slug: post.slug,
        url: post.url,
        publishedAt: post.publishedAt,
        coverImage:
            (post.coverImage && post.coverImage.url) || null,
        tags: mapTags(post.tags),
        html: (post.content && post.content.html) || '',
        publicationUrl: publication.url || HASHNODE_BLOG_URL,
    }
}

/**
 * Pick related posts: prefer shared tags, else fall back to newest.
 * @param {{ id?: string, slug?: string, tags?: Array<{ slug?: string }> }} current
 * @param {Array<{ id?: string, slug?: string, title: string, tags?: Array<{ slug?: string }> }>} candidates
 * @param {number} [limit]
 * @returns {Array}
 */
export function pickRelatedPosts(
    current,
    candidates,
    limit = RELATED_POST_LIMIT
) {
    if (!current || !Array.isArray(candidates) || !candidates.length) {
        return []
    }

    const currentId = current.id
    const currentSlug = current.slug
    const tagSet = {}
    const tags = current.tags || []
    for (let i = 0; i < tags.length; i++) {
        const slug = tags[i] && tags[i].slug
        if (slug) tagSet[slug] = true
    }

    const others = candidates.filter(function (post) {
        if (!post) return false
        if (currentId && post.id === currentId) return false
        if (currentSlug && post.slug === currentSlug) return false
        return Boolean(post.slug && post.title)
    })

    const scored = others.map(function (post) {
        let score = 0
        const postTags = post.tags || []
        for (let i = 0; i < postTags.length; i++) {
            const slug = postTags[i] && postTags[i].slug
            if (slug && tagSet[slug]) score += 1
        }
        return { post: post, score: score }
    })

    scored.sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score
        const aTime = a.post.publishedAt
            ? new Date(a.post.publishedAt).getTime()
            : 0
        const bTime = b.post.publishedAt
            ? new Date(b.post.publishedAt).getTime()
            : 0
        return bTime - aTime
    })

    return scored.slice(0, limit).map(function (item) {
        return item.post
    })
}
