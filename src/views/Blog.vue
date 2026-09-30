<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close blog"
                @click="$router.push({ path: '/', hash: '#introduction' })"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div ref="listScroll" class="wrap--centering blog-list">
                <h2>Frontend Field Notes</h2>
                <p class="lede">
                    <span class="lede-blurb"
                        >Practical notes on UI, Vue, TypeScript, and
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

                <p v-if="loading" class="status" role="status">Loading posts…</p>
                <p v-else-if="error" class="status error" role="alert">
                    {{ error }}
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
                <template v-else>
                    <ul class="post-list">
                        <li v-for="post in posts" :key="post.id">
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
                        </li>
                    </ul>
                    <div v-if="hasNextPage" class="load-more-wrap">
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
                        </p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import {
    fetchHashnodePublication,
    HASHNODE_BLOG_URL,
    BLOG_PAGE_SIZE,
} from './../utils/hashnode'

export default {
    name: 'Blog',
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
    metaInfo: {
        title: 'Frontend Field Notes',
    },
}
</script>

<style lang="scss" scoped>
.nav-wrap--solid {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 72px;
    padding: 28px 8px 20px;
    box-sizing: border-box;
    background: linear-gradient(
        to top,
        #fff 0%,
        #fff 72%,
        rgba(255, 255, 255, 0)
    );
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.wrap--stack {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    box-sizing: border-box;
}
.wrap--centering {
    width: min(720px, 88vw);
    max-height: 80vh;
    overflow: auto;
    padding: 28px 20px 84px;
    background-color: white;
    box-sizing: border-box;
}
h2 {
    font-family: 'proxima_novablack';
    font-size: 28px;
    color: #222;
    margin: 0 0 8px;
}
.lede {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    color: #222;
    margin: 0 0 40px;
    line-height: 1.5;
}
.lede-blurb {
    font-family: 'AvenirLTStdBlack';
    font-size: 15px;
    line-height: 1.5;
}
.lede-hashnode {
    color: #fb2662;
    text-decoration: none;
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    font-weight: normal;
    line-height: 1.5;
    position: relative;
    top: 1px;
    &:hover {
        text-decoration: underline;
    }
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
.post-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.post-list li {
    margin-bottom: 32px;
}
.post-list li:last-child {
    margin-bottom: 0;
}
.post-link {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    text-decoration: none;
    color: #222;
    &:hover .post-title {
        color: #fb2662;
    }
}
.post-thumb-wrap {
    flex: 0 0 88px;
    width: 88px;
    height: 88px;
    overflow: hidden;
    background: #f4f4f4;
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
    font-size: 20px;
    color: #222;
    transition: color 0.15s ease;
}
.post-date {
    display: block;
    font-family: 'AvenirLTStdLight';
    font-size: 12px;
    color: #666;
    margin-top: 4px;
}
.post-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    color: #222;
    margin-top: 6px;
    line-height: 1.5;
}
.load-more-wrap {
    margin-top: 34px;
    text-align: center;
}
button.cta-link.load-more {
    color: #fb2662;
    font-size: 14px;
    margin-top: 0;
    margin-right: 0;
    display: inline-block;
    border-top: 3px solid #fb2662;
    border-left: 3px solid #fb2662;
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
        padding-bottom: 98px;
    }
    .post-thumb-wrap {
        display: none;
    }
}
</style>
