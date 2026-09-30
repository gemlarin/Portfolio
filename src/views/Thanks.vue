<template>
    <div class="thanks">
        <router-link to="/" class="logo-link" aria-label="Home">
            <brand-mark />
        </router-link>
        <h1 class="page-title">Thank you</h1>
        <p class="message">
            Your message is on its way. I usually reply within 48 hours. If you need me sooner, call
            <a href="tel:15854552716">585.455.2716</a>.
        </p>
        <router-link to="/" class="home-link"
            >Back to portfolio<arrow-right /></router-link
        >
    </div>
</template>

<script>
import ArrowRight from './../components/ArrowRight.vue'
import BrandMark from './../components/BrandMark.vue'

export default {
    name: 'thanks',
    components: {
        ArrowRight,
        BrandMark,
    },
    metaInfo: {
        title: 'Thank you',
    },
}
</script>

<style scoped lang="scss">
.thanks {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 24px;
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

.page-title {
    margin: 0 0 12px;
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--font-subhead);
    line-height: 1.15;
    color: var(--color-foreground);
}

.message {
    margin: 0 0 28px;
    max-width: 420px;
    font-size: var(--font-body);
    line-height: 1.7;
    color: var(--color-ink-muted);

    a {
        color: var(--color-ink);
    }
}

.home-link {
    color: var(--color-accent);
    font-size: var(--font-button);
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    padding: 5px 12px;
    text-decoration: none;

    &:hover {
        padding-left: 20px;
    }
}
</style>
