<template>
    <div>
        <div class="nav-wrap">
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
            <div class="wrap--centering blog-list">
                <h2>Blog</h2>
                <p class="lede">
                    Frontend Field Notes — practical notes on UI, Vue,
                    TypeScript, and shipping.
                    <a
                        :href="blogUrl"
                        target="_blank"
                        rel="noopener noreferrer"
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
                <ul v-else class="post-list">
                    <li v-for="post in posts" :key="post.id">
                        <router-link
                            class="post-link"
                            :to="'/blog/' + post.slug"
                        >
                            <span class="post-title">{{ post.title }}</span>
                            <span
                                v-if="post.publishedAt"
                                class="post-date"
                                >{{ formatDate(post.publishedAt) }}</span
                            >
                            <span
                                v-if="post.brief"
                                class="post-desc"
                                >{{ post.brief }}</span
                            >
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import {
    fetchHashnodePublication,
    HASHNODE_BLOG_URL,
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
            error: '',
        }
    },
    created() {
        this.loadPosts()
    },
    methods: {
        async loadPosts() {
            this.loading = true
            this.error = ''
            try {
                const data = await fetchHashnodePublication()
                this.posts = data.posts
                if (data.url) this.blogUrl = data.url
            } catch (err) {
                this.error =
                    (err && err.message) ||
                    'Could not load posts from Hashnode.'
                this.posts = []
            } finally {
                this.loading = false
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
    },
    metaInfo: {
        title: 'Blog',
    },
}
</script>

<style lang="scss" scoped>
.wrap--stack {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrap--centering {
    width: min(720px, 88vw);
    max-height: 80vh;
    overflow: auto;
    padding: 28px 20px 20px;
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
    font-family: 'AvenirLTStdBook';
    font-size: 15px;
    color: #222;
    margin: 0 0 28px;
    line-height: 1.5;
    a {
        color: #fb2662;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
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
    margin-bottom: 22px;
}
.post-link {
    display: block;
    text-decoration: none;
    color: #222;
    &:hover .post-title {
        color: #fb2662;
    }
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
    display: block;
    font-family: 'AvenirLTStdBook';
    font-size: 14px;
    color: #222;
    margin-top: 6px;
    line-height: 1.5;
}
@media (max-width: 767px) {
    .wrap--centering {
        max-height: none;
        height: auto;
        margin-top: 80px;
    }
}
</style>
