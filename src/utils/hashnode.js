const HASHNODE_GQL = 'https://gql-beta.hashnode.com/'
export const HASHNODE_HOST = 'front-end-fieldnotes.hashnode.dev'
export const HASHNODE_BLOG_URL = 'https://front-end-fieldnotes.hashnode.dev/'
export const BLOG_PAGE_SIZE = 5

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
        html: (post.content && post.content.html) || '',
        publicationUrl: publication.url || HASHNODE_BLOG_URL,
    }
}
