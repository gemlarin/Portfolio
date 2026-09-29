const HASHNODE_GQL = 'https://gql-beta.hashnode.com/'
export const HASHNODE_HOST = 'front-end-fieldnotes.hashnode.dev'
export const HASHNODE_BLOG_URL = 'https://front-end-fieldnotes.hashnode.dev/'

const POSTS_QUERY = `
  query PublicationPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      title
      url
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
          }
        }
      }
    }
  }
`

/**
 * @returns {Promise<{ title: string, url: string, posts: Array<{ id: string, title: string, brief: string, slug: string, url: string, publishedAt: string }> }>}
 */
export async function fetchHashnodePublication(first = 50) {
    const res = await fetch(HASHNODE_GQL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            query: POSTS_QUERY,
            variables: { host: HASHNODE_HOST, first },
        }),
    })

    if (!res.ok) {
        throw new Error('Hashnode request failed (' + res.status + ')')
    }

    const json = await res.json()
    if (json.errors && json.errors.length) {
        throw new Error(json.errors[0].message || 'Hashnode GraphQL error')
    }

    const publication = json.data && json.data.publication
    if (!publication) {
        throw new Error('Publication not found')
    }

    const edges =
        (publication.posts && publication.posts.edges) || []
    const posts = edges.map((edge) => edge.node).filter(Boolean)

    return {
        title: publication.title,
        url: publication.url || HASHNODE_BLOG_URL,
        posts,
    }
}
