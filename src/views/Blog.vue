<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close blog (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div ref="listScroll" class="wrap--centering blog-list">
                <h2>Frontend Field Notes</h2>
                <p class="lede">
                    <span class="lede-blurb"
                        >Practical notes on frontend engineering, design, and
                        shipping.</span
                    >
                    <a
                        class="lede-hashnode"
                        :href="blogUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read on Hashnode (opens in new tab)"
                        >Read on Hashnode ↗</a
                    >
                </p>

                <p
                    v-if="activeTag"
                    class="tag-filter"
                    role="status"
                >
                    Showing
                    <span class="tag-filter-name">#{{ activeTagLabel }}</span>
                    <button
                        type="button"
                        class="tag-filter-clear"
                        @click="clearTagFilter"
                    >
                        Clear
                    </button>
                </p>

                <p v-if="loading" class="status" role="status">Loading posts…</p>
                <p v-else-if="error" class="status error" role="alert">
                    {{ error }}
                    <button
                        type="button"
                        class="status-action"
                        @click="loadPosts"
                    >
                        Retry
                    </button>
                    <a
                        :href="blogUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Open Hashnode</a
                    >
                </p>
                <p v-else-if="!posts.length" class="status">
                    No posts published yet. Check back soon, or visit
                    <a
                        :href="blogUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Frontend Field Notes</a
                    >.
                </p>
                <p
                    v-else-if="activeTag && !visiblePosts.length"
                    class="status"
                    role="status"
                >
                    No loaded posts match
                    <span class="tag-filter-name">#{{ activeTagLabel }}</span>.
                    <button
                        type="button"
                        class="status-action"
                        @click="clearTagFilter"
                    >
                        Clear filter
                    </button>
                    <button
                        v-if="hasNextPage"
                        type="button"
                        class="status-action"
                        :disabled="loadingMore"
                        @click="loadMore"
                    >
                        {{ loadingMore ? 'Loading…' : 'Load more' }}
                    </button>
                </p>
                <template v-else>
                    <ul class="post-list">
                        <li
                            v-for="post in visiblePosts"
                            :key="post.id"
                            class="post-item"
                        >
                            <router-link
                                class="post-link"
                                :to="'/blog/' + post.slug"
                            >
                                <span
                                    v-if="post.coverImage"
                                    class="post-thumb-wrap"
                                >
                                    <img
                                        class="post-thumb"
                                        :src="post.coverImage"
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>
                                <span class="post-copy">
                                    <span class="post-title">{{
                                        post.title
                                    }}</span>
                                    <span
                                        v-if="post.publishedAt"
                                        class="post-date"
                                        >{{
                                            formatDate(post.publishedAt)
                                        }}</span
                                    >
                                    <span
                                        v-if="post.brief"
                                        class="post-desc"
                                        >{{ formatBrief(post.brief) }}</span
                                    >
                                </span>
                            </router-link>
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
                        </li>
                    </ul>
                    <div v-if="showLoadMore" class="load-more-wrap">
                        <button
                            type="button"
                            class="cta-link load-more"
                            :disabled="loadingMore"
                            :aria-busy="loadingMore ? 'true' : 'false'"
                            @click="loadMore"
                        >
                            {{
                                loadingMore
                                    ? 'Loading…'
                                    : 'Load more'
                            }}<span
                                v-if="!loadingMore"
                                class="load-more-arrow"
                                aria-hidden="true"
                                >&darr;</span
                            >
                        </button>
                        <p
                            v-if="loadMoreError"
                            class="status error load-more-error"
                            role="alert"
                        >
                            {{ loadMoreError }}
                            <button
                                type="button"
                                class="status-action"
                                :disabled="loadingMore"
                                @click="loadMore"
                            >
                                Retry
                            </button>
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'
import {
    fetchHashnodePublication,
    HASHNODE_BLOG_URL,
    BLOG_PAGE_SIZE,
} from './../utils/hashnode'

export default {
    name: 'Blog',
    mixins: [escapeClose],
    components: {
        Navi: Nav,
    },
    data() {
        return {
            page: 'blog',
            blogUrl: HASHNODE_BLOG_URL,
            posts: [],
            loading: true,
            loadingMore: false,
            error: '',
            loadMoreError: '',
            hasNextPage: false,
            endCursor: null,
            savedScrollTop: 0,
        }
    },
    computed: {
        activeTag() {
            const tag = this.$route.query && this.$route.query.tag
            return tag ? String(tag) : ''
        },
        activeTagLabel() {
            if (!this.activeTag) return ''
            for (let i = 0; i < this.posts.length; i++) {
                const tags = this.posts[i].tags || []
                for (let j = 0; j < tags.length; j++) {
                    if (tags[j].slug === this.activeTag) {
                        return tags[j].name || this.activeTag
                    }
                }
            }
            return this.activeTag
        },
        visiblePosts() {
            if (!this.activeTag) return this.posts
            const slug = this.activeTag
            return this.posts.filter(function (post) {
                const tags = post.tags || []
                return tags.some(function (tag) {
                    return tag.slug === slug
                })
            })
        },
        showLoadMore() {
            return (
                this.hasNextPage &&
                this.visiblePosts.length >= BLOG_PAGE_SIZE
            )
        },
    },
    created() {
        this.loadPosts()
    },
    activated() {
        this.restoreListScroll()
    },
    beforeRouteLeave(to, from, next) {
        this.saveListScroll()
        next()
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
        clearTagFilter() {
            this.$router.push({ path: '/blog' })
        },
        saveListScroll() {
            const el = this.$refs.listScroll
            this.savedScrollTop = el ? el.scrollTop : 0
        },
        restoreListScroll() {
            const top = this.savedScrollTop
            if (typeof top !== 'number') return
            this.$nextTick(() => {
                const el = this.$refs.listScroll
                if (el) el.scrollTop = top
            })
        },
        async loadPosts() {
            this.loading = true
            this.error = ''
            this.loadMoreError = ''
            try {
                const data = await fetchHashnodePublication({
                    first: BLOG_PAGE_SIZE,
                })
                this.posts = data.posts
                this.hasNextPage = data.hasNextPage
                this.endCursor = data.endCursor
                if (data.url) this.blogUrl = data.url
            } catch (err) {
                this.error =
                    (err && err.message) ||
                    'Could not load posts from Hashnode.'
                this.posts = []
                this.hasNextPage = false
                this.endCursor = null
            } finally {
                this.loading = false
            }
        },
        async loadMore() {
            if (!this.hasNextPage || this.loadingMore || !this.endCursor) {
                return
            }
            this.loadingMore = true
            this.loadMoreError = ''
            try {
                const data = await fetchHashnodePublication({
                    first: BLOG_PAGE_SIZE,
                    after: this.endCursor,
                })
                this.posts = this.posts.concat(data.posts)
                this.hasNextPage = data.hasNextPage
                this.endCursor = data.endCursor
            } catch (err) {
                this.loadMoreError =
                    (err && err.message) || 'Could not load more posts.'
            } finally {
                this.loadingMore = false
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
        formatBrief(brief) {
            const text = String(brief || '').trim()
            if (!text) return ''
            if (/[.…!?]$/.test(text)) return text
            return text + '…'
        },
    },
    metaInfo() {
        const tag = this.activeTagLabel
        return {
            title: tag
                ? 'Frontend Field Notes · #' + tag
                : 'Frontend Field Notes',
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
h2 {
    font-family: 'proxima_novablack';
    font-size: 28px;
    color: var(--color-foreground);
    margin: 0 0 8px;
}
.lede {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    color: var(--color-foreground);
    margin: 0 0 40px;
    line-height: 1.5;
}
.lede-blurb {
    font-family: 'AvenirLTStdBlack';
    font-size: 15px;
    line-height: 1.5;
}
.lede-hashnode {
    color: var(--color-accent);
    text-decoration: none;
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    font-weight: normal;
    line-height: 1.5;
    position: relative;
    top: 1px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
.status {
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
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
    margin-left: 8px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: var(--color-accent);
    cursor: pointer;
    text-decoration: underline;
    &:disabled {
        opacity: 0.6;
        cursor: wait;
    }
}
.tag-filter {
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    color: var(--color-muted);
    margin: 0 0 20px;
}
.tag-filter-name {
    font-family: 'AvenirLTStdMedium';
    color: var(--color-foreground);
}
.tag-filter-clear {
    margin-left: 10px;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: var(--color-accent);
    cursor: pointer;
    text-decoration: underline;
}
.post-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.post-item {
    margin-bottom: 28px;
    border-bottom: 1px dashed var(--color-border);
    padding-bottom: 15px;
}
.post-item:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
}
.post-link {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    text-decoration: none;
    color: var(--color-foreground);
    &:hover .post-title {
        color: var(--color-accent);
    }
}
.post-thumb-wrap {
    flex: 0 0 88px;
    width: 88px;
    height: 88px;
    overflow: hidden;
    background: var(--color-surface);
    margin-top: 4px;
}
.post-thumb {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.post-copy {
    flex: 1 1 auto;
    min-width: 0;
    display: block;
}
.post-title {
    display: block;
    font-family: 'proxima_novablack';
    font-size: 18px;
    line-height: 1.1;
    color: var(--color-foreground);
    transition: color 0.15s ease;
}
.post-tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    margin: 8px 0 0;
    padding: 0;
    li {
        margin: 0;
        padding: 0;
        font-family: 'AvenirLTStdMedium';
        font-size: 12px;
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
@media (min-width: 768px) {
    .post-item .post-tags {
        padding-left: 108px;
    }
}
.post-date {
    display: block;
    font-family: 'AvenirLTStdLight';
    font-size: 12px;
    color: var(--color-muted);
    margin-top: 6px;
}
.post-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    color: var(--color-foreground);
    margin-top: 6px;
    line-height: 1.5;
}
.load-more-wrap {
    margin-top: 34px;
    text-align: center;
}
button.cta-link.load-more {
    color: var(--color-accent);
    font-size: 14px;
    margin-top: 0;
    margin-right: 0;
    display: inline-block;
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    border-right: 0;
    border-bottom: 0;
    padding: 5px 12px;
    text-decoration: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
    text-align: left;
    &:hover:not(:disabled) {
        padding-left: 20px;
    }
    &:disabled {
        opacity: 0.6;
        cursor: wait;
    }
}
.load-more-arrow {
    margin-left: 5px;
}
.load-more-error {
    margin: 12px 0 0;
}
@media (max-width: 767px) {
    .wrap--centering {
        max-height: none;
        height: auto;
        margin-top: 80px;
        padding-bottom: 108px;
    }
    .post-thumb-wrap {
        display: none;
    }
}
</style>
