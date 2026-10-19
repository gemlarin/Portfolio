<template>
    <div class="not-found">
        <router-link to="/" class="logo-link" aria-label="Home">
            <brand-mark />
        </router-link>
        <p class="code">404</p>
        <h1 class="page-title">Page not found</h1>
        <p class="message">This route doesn’t exist.</p>
        <router-link to="/" class="home-link"
            >Back home<arrow-right /></router-link
        >
        <div class="nav-wrap nav-wrap--solid">
            <navi variant="close"></navi>
        </div>
    </div>
</template>

<script>
import ArrowRight from './../components/ArrowRight.vue'
import BrandMark from './../components/BrandMark.vue'
import Nav from './../components/main/navs/IntroNav.vue'

export default {
    name: 'PageNotFound',
    components: {
        ArrowRight,
        BrandMark,
        Navi: Nav,
    },
    metaInfo: {
        title: '404',
    },
}
</script>

<style scoped lang="scss">
.not-found {
    min-height: calc(100vh - var(--page-header-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 24px var(--pill-nav-clearance);
    background: var(--color-page);
    font-family: 'AvenirLTStdBook', sans-serif;
}

.logo-link {
    display: inline-block;
    margin-bottom: 32px;

    ::v-deep svg {
        width: 56px;
        height: 56px;
        fill: var(--color-ink);
    }
}

.code {
    margin: 0;
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--text-error);
    line-height: 1;
    color: var(--color-accent);
}

.page-title {
    margin: 12px 0 12px;
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--font-subhead);
    line-height: 1.15;
    color: var(--color-foreground);
}

.message {
    margin: 0 0 28px;
    font-size: var(--font-body);
    color: var(--color-ink-muted);
}

.home-link {
    color: var(--color-accent);
    font-size: var(--font-button);
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    padding: 5px 12px;
    text-decoration: none;

    &:hover {
        color: #000;
        border-top-color: #000;
        border-left-color: #000;
    }
}
</style>
