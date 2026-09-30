<template>
    <div class="privacy-page">
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close privacy policy (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering">
                <h1>Privacy Policy</h1>
                <p class="updated">Last updated: September 30, 2026</p>

                <p>
                    This site is Danny Gibas’s personal portfolio
                    (gemlarin.github.io). This policy explains what information
                    is collected when you visit and how it’s used.
                </p>

                <h2>Analytics</h2>
                <p>
                    This site uses Google Analytics 4 (via Google Tag Manager /
                    the Google tag) to understand how people use the site —
                    for example which pages are viewed, roughly where visitors
                    are located, and basic device or browser information.
                    Google processes this data under its own terms and privacy
                    policy. You can limit analytics via browser settings,
                    extensions, or
                    <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Google’s Analytics opt-out</a
                    >.
                </p>

                <h2>Contact form</h2>
                <p>
                    If you send a message through the contact form, your name,
                    email, and message are delivered to me via Web3Forms so I
                    can reply. That information is used only to respond to you
                    and is not sold or used for advertising.
                </p>

                <h2>Cookies and similar tech</h2>
                <p>
                    Analytics tools may set cookies or use similar storage to
                    distinguish visits. Essential site function does not depend
                    on those cookies.
                </p>

                <h2>Third-party links</h2>
                <p>
                    Links to other sites (including project demos, Hashnode, or
                    Google) are governed by those sites’ own policies.
                </p>

                <h2>Contact</h2>
                <p>
                    Questions about this policy:
                    <a href="mailto:dfgibas@gmail.com">dfgibas@gmail.com</a>
                    or the
                    <router-link to="/contact">contact form</router-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'

export default {
    name: 'Privacy',
    mixins: [escapeClose],
    components: {
        Navi: Nav,
    },
    data() {
        return {
            page: '',
        }
    },
    metaInfo: {
        title: 'Privacy Policy',
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
    },
}
</script>

<style lang="scss" scoped>
.privacy-page {
    max-width: 100%;
    overflow-x: hidden;
}

.wrap--stack {
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: var(--close-clearance) 24px 72px;
    overflow-y: auto;
}

.mfp-close {
    font-size: var(--font-page-title);
    right: 10px;
    top: 10px;
}

.wrap--centering {
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    text-align: left;
    background-color: var(--color-background);
    font-family: 'AvenirLTStdBook', sans-serif;
}

h1 {
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--font-h1);
    color: var(--color-foreground);
    margin: 0 0 8px;
    line-height: 1.15;
}

h2 {
    font-family: 'proxima_novablack', sans-serif;
    font-size: var(--font-h3);
    color: var(--color-foreground);
    margin: 28px 0 8px;
    line-height: 1.2;
}

.updated {
    margin: 0 0 24px;
    font-size: var(--font-meta);
    color: var(--color-ink-muted);
}

p {
    margin: 0 0 12px;
    font-size: var(--font-body);
    line-height: 1.7;
    color: var(--color-foreground);
}

a {
    color: var(--color-ink);
    text-decoration: underline;
}

@media (max-width: 768px) {
    .mfp-close {
        font-size: var(--font-page-title-sm);
    }

    .wrap--stack {
        min-height: 100dvh;
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
