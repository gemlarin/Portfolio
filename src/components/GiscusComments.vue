<template>
    <section
        v-if="term"
        class="giscus-section"
        aria-labelledby="comments-heading"
    >
        <h2 id="comments-heading">
            <button
                type="button"
                class="comments-toggle"
                :aria-expanded="open ? 'true' : 'false'"
                aria-controls="comments-panel"
                @click="toggle"
            >
                <span class="comments-label">
                    Comments<span class="comments-count">
                        ({{ reactionCount }})</span
                    >
                </span>
                <span
                    class="comments-caret"
                    :class="{ 'is-open': open }"
                    aria-hidden="true"
                ></span>
            </button>
        </h2>
        <div
            id="comments-panel"
            v-show="open"
            ref="host"
            class="giscus-host"
        />
    </section>
</template>

<script>
import { giscusConfig } from './../data/giscus'

export default {
    name: 'GiscusComments',
    props: {
        /** Discussion term — use the post slug */
        term: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            open: false,
            mounted: false,
            reactionCount: 0,
        }
    },
    watch: {
        term(value) {
            this.open = false
            this.reactionCount = 0
            this.teardown()
            if (value) {
                this.$nextTick(() => this.mountGiscus())
            }
        },
    },
    mounted() {
        window.addEventListener('message', this.onGiscusMessage)
        if (this.term) {
            this.$nextTick(() => this.mountGiscus())
        }
    },
    beforeDestroy() {
        window.removeEventListener('message', this.onGiscusMessage)
        this.teardown()
    },
    methods: {
        onGiscusMessage(event) {
            if (event.origin !== 'https://giscus.app') return
            const data = event.data
            if (!data || typeof data !== 'object' || !data.giscus) return
            const discussion = data.giscus.discussion
            if (!discussion || typeof discussion.reactionCount !== 'number') {
                return
            }
            this.reactionCount = discussion.reactionCount
        },
        toggle() {
            this.open = !this.open
            if (this.open && !this.mounted) {
                this.$nextTick(() => this.mountGiscus())
            }
        },
        teardown() {
            const host = this.$refs.host
            if (host) {
                host.innerHTML = ''
            }
            this.mounted = false
        },
        mountGiscus() {
            const host = this.$refs.host
            const term = this.term
            if (!host || !term) return

            this.teardown()

            const script = document.createElement('script')
            script.src = 'https://giscus.app/client.js'
            script.async = true
            script.crossOrigin = 'anonymous'
            script.setAttribute('data-repo', giscusConfig.repo)
            script.setAttribute('data-repo-id', giscusConfig.repoId)
            script.setAttribute('data-category', giscusConfig.category)
            script.setAttribute('data-category-id', giscusConfig.categoryId)
            script.setAttribute('data-mapping', giscusConfig.mapping)
            script.setAttribute('data-term', term)
            script.setAttribute('data-strict', '0')
            script.setAttribute(
                'data-reactions-enabled',
                giscusConfig.reactionsEnabled
            )
            script.setAttribute('data-emit-metadata', '1')
            script.setAttribute(
                'data-input-position',
                giscusConfig.inputPosition
            )
            script.setAttribute('data-theme', giscusConfig.theme)
            script.setAttribute('data-lang', giscusConfig.lang)

            host.appendChild(script)
            this.mounted = true
        },
    },
}
</script>

<style scoped lang="scss">
.giscus-section {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid var(--color-border);
}

h2 {
    font-family: 'AvenirLTStdBlack', sans-serif;
    font-weight: normal;
    font-synthesis: none;
    font-size: var(--font-h3);
    color: var(--color-foreground);
    margin: 0;
    line-height: 1.2;
}

.comments-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.45em;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: inherit;
    cursor: pointer;

    &:hover {
        color: var(--color-accent);
    }
}

.comments-count {
    font-family: 'AvenirLTStdBook', sans-serif;
    font-size: 0.8em;
    font-weight: 400;
    font-synthesis: none;
}

.comments-caret {
    display: inline-block;
    width: calc(0.42em - 2px);
    height: calc(0.42em - 2px);
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: translateY(-0.12em) rotate(45deg);
}

.comments-caret.is-open {
    transform: translateY(0.12em) rotate(-135deg);
}

.giscus-host {
    margin-top: 16px;
    min-height: 120px;
}
</style>
