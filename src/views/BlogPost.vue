<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Back to blog (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering blog-post">
                <p v-if="loading" class="status" role="status">Loading post…</p>
                <p v-else-if="error" class="status error" role="alert">
                    {{ error }}
                    <button
                        type="button"
                        class="status-action"
                        @click="retryLoad"
                    >
                        Retry
                    </button>
                    <router-link to="/blog">Back to blog</router-link>
                </p>
                <article v-else-if="post">
                    <p class="back">
                        <router-link to="/blog">← All posts</router-link>
                    </p>
                    <h1>{{ post.title }}</h1>
                    <ul
                        v-if="post.tags && post.tags.length"
                        class="post-tags"
                    >
                        <li
                            v-for="tag in post.tags"
                            :key="tag.slug"
                        >
                            <router-link
                                class="tag-link"
                                :to="{
                                    path: '/blog',
                                    query: { tag: tag.slug },
                                }"
                                >#{{ tag.name }}</router-link
                            >
                        </li>
                    </ul>
                    <p v-if="post.publishedAt" class="meta">
                        <time :datetime="post.publishedAt">{{
                            formatDate(post.publishedAt)
                        }}</time>
                        <span aria-hidden="true"> · </span>
                        <a
                            :href="post.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            >View on Hashnode ↗</a
                        >
                    </p>
                    <img
                        v-if="post.coverImage"
                        class="cover"
                        :src="post.coverImage"
                        :alt="post.title"
                    />
                    <div
                        v-if="post.html"
                        class="post-body"
                        v-html="post.html"
                    ></div>
                    <p
                        v-else
                        class="status"
                        role="status"
                    >
                        This post has no body content yet.
                        <a
                            v-if="post.url"
                            :href="post.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            >View on Hashnode ↗</a
                        >
                    </p>
                    <section
                        v-if="relatedPosts.length"
                        class="related"
                        aria-labelledby="related-heading"
                    >
                        <h2 id="related-heading">Related posts</h2>
                        <ul class="related-list">
                            <li
                                v-for="item in relatedPosts"
                                :key="item.id || item.slug"
                            >
                                <router-link :to="'/blog/' + item.slug">{{
                                    item.title
                                }}</router-link>
                            </li>
                        </ul>
                    </section>
                    <p class="subscribe">
                        <a
                            :href="rssUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Subscribe via RSS ↗</a
                        >
                    </p>
                    <p class="back back--footer">
                        <router-link to="/blog">← All posts</router-link>
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'
import {
    fetchHashnodePost,
    fetchHashnodePublication,
    pickRelatedPosts,
    HASHNODE_RSS_URL,
    RELATED_CANDIDATE_SIZE,
} from './../utils/hashnode'

export default {
    name: 'BlogPost',
    mixins: [escapeClose],
    components: {
        Navi: Nav,
    },
    data() {
        return {
            page: 'blog',
            post: null,
            relatedPosts: [],
            rssUrl: HASHNODE_RSS_URL,
            loading: true,
            error: '',
        }
    },
    watch: {
        '$route.params.slug': {
            immediate: true,
            handler(slug) {
                if (slug) this.loadPost(slug)
            },
        },
    },
    methods: {
        closePage() {
            this.$router.push('/blog')
        },
        retryLoad() {
            const slug = this.$route.params.slug
            if (slug) this.loadPost(slug)
        },
        async loadPost(slug) {
            this.loading = true
            this.error = ''
            this.post = null
            this.relatedPosts = []
            this.$nextTick(() => {
                const el = this.$el && this.$el.querySelector('.blog-post')
                if (el) el.scrollTop = 0
            })
            try {
                this.post = await fetchHashnodePost(slug)
                await this.loadRelated(this.post)
            } catch (err) {
                this.error =
                    (err && err.message) || 'Could not load this post.'
            } finally {
                this.loading = false
            }
        },
        async loadRelated(post) {
            try {
                const data = await fetchHashnodePublication({
                    first: RELATED_CANDIDATE_SIZE,
                })
                this.relatedPosts = pickRelatedPosts(post, data.posts || [])
            } catch (err) {
                this.relatedPosts = []
            }
        },
        formatDate(value) {
            const d = new Date(value)
            if (Number.isNaN(d.getTime())) return value
            return d.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })
        },
        absolutePostUrl() {
            if (typeof window !== 'undefined' && window.location) {
                return window.location.href
            }
            const slug = (this.post && this.post.slug) || ''
            return 'https://gemlarin.github.io/blog/' + slug
        },
    },
    metaInfo() {
        if (!this.post) {
            return {
                title: this.error ? 'Post unavailable' : 'Blog',
            }
        }
        const title = this.post.title
        const description =
            this.post.brief ||
            'Practical notes on frontend engineering, design, and shipping.'
        const image = this.post.coverImage || ''
        const pageUrl = this.absolutePostUrl()
        const meta = [
            {
                vmid: 'description',
                name: 'description',
                content: description,
            },
            {
                vmid: 'og:title',
                property: 'og:title',
                content: title,
            },
            {
                vmid: 'og:description',
                property: 'og:description',
                content: description,
            },
            {
                vmid: 'og:type',
                property: 'og:type',
                content: 'article',
            },
            {
                vmid: 'og:url',
                property: 'og:url',
                content: pageUrl,
            },
            {
                vmid: 'twitter:card',
                name: 'twitter:card',
                content: image ? 'summary_large_image' : 'summary',
            },
            {
                vmid: 'twitter:title',
                name: 'twitter:title',
                content: title,
            },
            {
                vmid: 'twitter:description',
                name: 'twitter:description',
                content: description,
            },
        ]
        if (image) {
            meta.push({
                vmid: 'og:image',
                property: 'og:image',
                content: image,
            })
            meta.push({
                vmid: 'twitter:image',
                name: 'twitter:image',
                content: image,
            })
        }
        const link = []
        if (this.post.url) {
            link.push({
                vmid: 'canonical',
                rel: 'canonical',
                href: this.post.url,
            })
        }
        return {
            title: title,
            meta: meta,
            link: link,
        }
    },
}
</script>

<style lang="scss" scoped>
.wrap--stack {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    box-sizing: border-box;
}
.wrap--centering {
    width: min(720px, 88vw);
    flex: 1 1 auto;
    max-height: none;
    height: auto;
    overflow: auto;
    padding: 28px 20px 108px;
    background-color: transparent;
    box-sizing: border-box;
}
.status {
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    color: #666;
    a {
        color: #fb2662;
    }
    &.error {
        color: #222;
    }
}
.status-action {
    display: inline;
    margin-right: 8px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: #fb2662;
    cursor: pointer;
    text-decoration: underline;
}
.back {
    margin: 0 0 16px;
    font-family: 'AvenirLTStdBook';
    font-size: 13px;
    a {
        color: #fb2662;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}
.back--footer {
    margin: 36px 0 0;
}
h1 {
    font-family: 'proxima_novablack';
    font-size: 28px;
    color: #222;
    margin: 0 0 10px;
    line-height: 1.15;
}
.post-tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 12px;
    margin: 0 0 12px;
    padding: 0;
    li {
        margin: 0;
        padding: 0;
        font-family: 'AvenirLTStdMedium';
        font-size: 13px;
        line-height: 1.2;
    }
}
.tag-link {
    color: #888;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #fb2662;
        text-decoration: underline;
    }
}
.meta {
    font-family: 'AvenirLTStdLight';
    font-size: 13px;
    color: #666;
    margin: 0 0 22px;
    a {
        color: #fb2662;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
}
.cover {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 24px;
}
.post-body {
    font-family: 'AvenirLTStdBook';
    font-size: 16px;
    color: #222;
    line-height: 1.65;
}
.related {
    margin: 36px 0 0;
    padding-top: 24px;
    border-top: 1px dashed #d8d8d8;
    h2 {
        font-family: 'proxima_novablack';
        font-size: 18px;
        color: #222;
        margin: 0 0 12px;
    }
}
.related-list {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        margin: 0 0 10px;
        font-family: 'AvenirLTStdBook';
        font-size: 15px;
        line-height: 1.4;
    }
    a {
        color: #222;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
.subscribe {
    margin: 24px 0 0;
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    a {
        color: #222;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
}
.post-body ::v-deep {
    p {
        margin: 0 0 1.1em;
    }
    h2,
    h3,
    h4 {
        font-family: 'proxima_novablack';
        color: #222;
        margin: 1.4em 0 0.55em;
        line-height: 1.3;
    }
    h2 {
        font-size: 22px;
    }
    h3 {
        font-size: 18px;
    }
    a {
        color: #fb2662;
    }
    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1.2em 0;
    }
    ul,
    ol {
        margin: 0 0 1.1em;
        padding-left: 1.3em;
    }
    li {
        margin-bottom: 0.35em;
    }
    blockquote {
        margin: 0 0 1.1em;
        padding: 0.2em 0 0.2em 1em;
        border-left: 3px solid #fb2662;
        color: #444;
    }
    pre {
        margin: 0 0 1.2em;
        padding: 14px 16px;
        overflow: auto;
        background: #f4f4f4;
        font-size: 13px;
        line-height: 1.5;
    }
    code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            monospace;
        font-size: 0.9em;
    }
    :not(pre) > code {
        background: #f4f4f4;
        padding: 0.1em 0.35em;
    }
    hr {
        border: 0;
        border-top: 1px solid #ddd;
        margin: 1.6em 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0 0 1.2em;
        font-size: 14px;
    }
    th,
    td {
        border: 1px solid #ddd;
        padding: 8px 10px;
        text-align: left;
    }
}
@media (max-width: 767px) {
    .wrap--centering {
        max-height: none;
        height: auto;
        margin-top: 80px;
        padding-bottom: 108px;
    }
    h1 {
        font-size: 24px;
    }
}
</style>
