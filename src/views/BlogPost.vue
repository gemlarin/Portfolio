<template>
    <div>
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Back to blog"
                @click="$router.push('/blog')"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering blog-post">
                <p v-if="loading" class="status" role="status">Loading post…</p>
                <p v-else-if="error" class="status error" role="alert">
                    {{ error }}
                    <router-link to="/blog">Back to blog</router-link>
                </p>
                <article v-else-if="post">
                    <p class="back">
                        <router-link to="/blog">← All posts</router-link>
                    </p>
                    <h1>{{ post.title }}</h1>
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
                        class="post-body"
                        v-html="post.html"
                    ></div>
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
import { fetchHashnodePost } from './../utils/hashnode'

export default {
    name: 'BlogPost',
    components: {
        Navi: Nav,
    },
    data() {
        return {
            page: 'blog',
            post: null,
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
        async loadPost(slug) {
            this.loading = true
            this.error = ''
            this.post = null
            this.$nextTick(() => {
                const el = this.$el && this.$el.querySelector('.blog-post')
                if (el) el.scrollTop = 0
            })
            try {
                this.post = await fetchHashnodePost(slug)
            } catch (err) {
                this.error =
                    (err && err.message) || 'Could not load this post.'
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
    metaInfo() {
        return {
            title: (this.post && this.post.title) || 'Blog',
        }
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
    padding: 28px 20px 100px;
    background-color: white;
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
    line-height: 1.25;
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
        padding-bottom: 110px;
    }
    h1 {
        font-size: 24px;
    }
}
</style>
