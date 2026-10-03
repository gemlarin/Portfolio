<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
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
                    <p
                        id="code-copy-status"
                        class="sr-only"
                        role="status"
                        aria-live="polite"
                    >
                        {{ copyStatus }}
                    </p>
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
                            aria-label="View on Hashnode (opens in new tab)"
                            >View on Hashnode <external-arrow /></a
                        >
                    </p>
                    <img
                        v-if="post.coverImage"
                        class="cover"
                        :src="post.coverImage"
                        alt=""
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
                            aria-label="View on Hashnode (opens in new tab)"
                            >View on Hashnode <external-arrow /></a
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
                    <giscus-comments
                        v-if="post.slug"
                        :term="post.slug"
                    />
                    <p class="subscribe">
                        <a
                            :href="rssUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Subscribe via RSS (opens in new tab)"
                            >Subscribe via RSS <external-arrow /></a
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
import ExternalArrow from './../components/ExternalArrow.vue'
import GiscusComments from './../components/GiscusComments.vue'
import escapeClose from './../mixins/escapeClose'
import {
    fetchHashnodePost,
    fetchHashnodePublication,
    pickRelatedPosts,
    HASHNODE_RSS_URL,
    RELATED_CANDIDATE_SIZE,
} from './../utils/hashnode'
import { formatDate } from './../utils/formatDate'

export default {
    name: 'BlogPost',
    mixins: [escapeClose],
    components: {
        Navi: Nav,
        ExternalArrow,
        GiscusComments,
    },
    data() {
        return {
            page: 'blog',
            post: null,
            relatedPosts: [],
            rssUrl: HASHNODE_RSS_URL,
            loading: true,
            error: '',
            copyStatus: '',
            postGen: 0,
            postAbort: null,
            copyTimers: [],
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
    beforeDestroy() {
        this.abortPostFetch()
        this.clearCopyTimers()
    },
    methods: {
        formatDate,
        closePage() {
            this.$router.push('/blog')
        },
        abortPostFetch() {
            if (this.postAbort) {
                this.postAbort.abort()
                this.postAbort = null
            }
        },
        clearCopyTimers() {
            const timers = this.copyTimers || []
            for (let i = 0; i < timers.length; i++) {
                window.clearTimeout(timers[i])
            }
            this.copyTimers = []
        },
        retryLoad() {
            const slug = this.$route.params.slug
            if (slug) this.loadPost(slug)
        },
        async loadPost(slug) {
            this.abortPostFetch()
            this.clearCopyTimers()
            const gen = ++this.postGen
            const controller =
                typeof AbortController !== 'undefined'
                    ? new AbortController()
                    : null
            this.postAbort = controller
            this.loading = true
            this.error = ''
            this.post = null
            this.relatedPosts = []
            this.$nextTick(() => {
                const el = this.$el && this.$el.querySelector('.blog-post')
                if (el) el.scrollTop = 0
            })
            try {
                this.post = await fetchHashnodePost(slug, {
                    signal: controller ? controller.signal : null,
                })
                if (gen !== this.postGen) return
                await this.loadRelated(this.post, controller)
            } catch (err) {
                if (err && err.name === 'AbortError') return
                if (gen !== this.postGen) return
                this.error =
                    (err && err.message) || 'Could not load this post.'
            } finally {
                if (gen === this.postGen) {
                    this.loading = false
                    this.postAbort = null
                    if (this.post && this.post.html) {
                        this.$nextTick(() => {
                            if (gen === this.postGen) {
                                this.enhanceCodeBlocks()
                            }
                        })
                    }
                }
            }
        },
        enhanceCodeBlocks() {
            const root =
                this.$el && this.$el.querySelector('.post-body')
            if (!root) return

            const copyIcon =
                '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'
            const checkIcon =
                '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>'

            const blocks = root.querySelectorAll('pre')
            for (let i = 0; i < blocks.length; i++) {
                const pre = blocks[i]
                if (
                    pre.parentElement &&
                    pre.parentElement.classList.contains('code-block')
                ) {
                    continue
                }

                const wrap = document.createElement('div')
                wrap.className = 'code-block'
                pre.parentNode.insertBefore(wrap, pre)
                wrap.appendChild(pre)

                const btn = document.createElement('button')
                btn.type = 'button'
                btn.className = 'code-copy'
                btn.setAttribute('aria-label', 'Copy code')
                btn.innerHTML = copyIcon

                btn.addEventListener('click', async () => {
                    const text = pre.innerText || pre.textContent || ''
                    try {
                        if (
                            navigator.clipboard &&
                            navigator.clipboard.writeText
                        ) {
                            await navigator.clipboard.writeText(text)
                        } else {
                            const area = document.createElement('textarea')
                            area.value = text
                            area.setAttribute('readonly', '')
                            area.style.position = 'absolute'
                            area.style.left = '-9999px'
                            document.body.appendChild(area)
                            area.select()
                            document.execCommand('copy')
                            document.body.removeChild(area)
                        }
                        btn.classList.add('is-copied')
                        btn.setAttribute('aria-label', 'Copied')
                        btn.innerHTML = checkIcon
                        this.copyStatus = 'Code copied'
                        const timer = window.setTimeout(() => {
                            btn.classList.remove('is-copied')
                            btn.setAttribute('aria-label', 'Copy code')
                            btn.innerHTML = copyIcon
                            if (this.copyStatus === 'Code copied') {
                                this.copyStatus = ''
                            }
                            this.copyTimers = (
                                this.copyTimers || []
                            ).filter(function (id) {
                                return id !== timer
                            })
                        }, 1600)
                        this.copyTimers = this.copyTimers || []
                        this.copyTimers.push(timer)
                    } catch (err) {
                        btn.setAttribute('aria-label', 'Copy failed')
                        this.copyStatus = 'Copy failed'
                    }
                })

                wrap.appendChild(btn)
            }
        },
        async loadRelated(post, controller) {
            try {
                const data = await fetchHashnodePublication({
                    first: RELATED_CANDIDATE_SIZE,
                    signal: controller ? controller.signal : null,
                })
                this.relatedPosts = pickRelatedPosts(post, data.posts || [])
            } catch (err) {
                if (err && err.name === 'AbortError') return
                this.relatedPosts = []
            }
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
    background-color: var(--color-background);
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
    font-size: var(--font-small);
    color: var(--color-muted);
    a {
        color: var(--color-accent);
    }
    &.error {
        color: var(--color-foreground);
    }
}
.status-action {
    display: inline;
    margin-right: 8px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: var(--color-accent);
    cursor: pointer;
    text-decoration: underline;
}
.back {
    margin: 0 0 16px;
    font-family: 'AvenirLTStdBook';
    font-size: var(--font-meta);
    a {
        color: var(--color-accent);
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
    font-size: var(--font-h1);
    color: var(--color-foreground);
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
        font-size: var(--font-small);
        line-height: 1.2;
    }
}
.tag-link {
    color: var(--color-muted-soft);
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: var(--color-accent);
        text-decoration: underline;
    }
}
.meta {
    font-family: 'AvenirLTStdLight';
    font-size: var(--font-meta);
    color: var(--color-muted);
    margin: 0 0 22px;
    a {
        color: var(--color-accent);
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
    font-size: var(--font-body);
    color: var(--color-foreground);
    line-height: 1.65;
}
.related {
    margin: 36px 0 0;
    padding-top: 24px;
    border-top: 1px dashed var(--color-border);
    h2 {
        font-family: 'proxima_novablack';
        font-size: var(--font-h3);
        color: var(--color-foreground);
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
        font-size: var(--font-body);
        line-height: 1.4;
    }
    a {
        color: var(--color-foreground);
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
    font-size: var(--font-small);
    a {
        color: var(--color-foreground);
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
        color: var(--color-foreground);
        margin: 1.4em 0 0.55em;
        line-height: 1.3;
    }
    h2 {
        font-size: var(--font-article-h2);
    }
    h3 {
        font-size: var(--font-article-h3);
    }
    a {
        color: var(--color-accent);
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
        border-left: 3px solid var(--color-accent);
        color: var(--color-muted);
    }
    pre {
        margin: 0 0 1.2em;
        padding: 14px 16px;
        overflow: auto;
        background: var(--color-surface);
        color: var(--color-foreground);
        font-size: var(--font-code);
        line-height: 1.5;
    }
    .code-block {
        position: relative;
        margin: 0 0 1.2em;
    }
    .code-block pre {
        margin: 0;
        padding-right: 32px;
    }
    .code-copy {
        position: absolute;
        top: 6px;
        right: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        padding: 0;
        border: 0;
        border-radius: 3px;
        background: var(--color-background);
        color: var(--color-muted);
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--color-border);
        svg {
            width: 12px;
            height: 12px;
        }
        &:hover {
            color: var(--color-accent);
        }
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 2px;
        }
        &.is-copied {
            color: var(--color-success);
        }
    }
    code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            monospace;
        font-size: var(--font-code);
        color: var(--color-accent);
    }
    pre code {
        color: inherit;
    }
    :not(pre) > code {
        background: var(--color-surface);
        padding: 0.1em 0.35em;
    }
    hr {
        border: 0;
        border-top: 1px solid var(--color-border);
        margin: 1.6em 0;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0 0 1.2em;
        font-size: var(--font-small);
    }
    th,
    td {
        border: 1px solid var(--color-border);
        padding: 8px 10px;
        text-align: left;
    }
}
@media (max-width: 767px) {
    .wrap--centering {
        max-height: none;
        height: auto;
        margin-top: var(--close-clearance);
        padding-bottom: 108px;
    }
}
</style>
