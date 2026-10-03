<template>
    <section
        v-if="term"
        class="giscus-section"
        aria-labelledby="comments-heading"
    >
        <h2 id="comments-heading">Comments</h2>
        <div ref="host" class="giscus-host" />
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
    watch: {
        term: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$nextTick(() => this.mountGiscus())
                }
            },
        },
    },
    beforeDestroy() {
        this.teardown()
    },
    methods: {
        teardown() {
            const host = this.$refs.host
            if (host) {
                host.innerHTML = ''
            }
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
            script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
            script.setAttribute(
                'data-input-position',
                giscusConfig.inputPosition
            )
            script.setAttribute('data-theme', giscusConfig.theme)
            script.setAttribute('data-lang', giscusConfig.lang)

            host.appendChild(script)
        },
    },
}
</script>

<style scoped lang="scss">
.giscus-section {
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid var(--color-border);
}

h2 {
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--font-h3);
    color: var(--color-foreground);
    margin: 0 0 16px;
    line-height: 1.2;
}

.giscus-host {
    min-height: 120px;
}
</style>
