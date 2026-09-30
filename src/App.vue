  <template>
    <div id="app">
        <a
            class="skip-link"
            href="#introduction"
            @click.prevent="skipToContent"
            >Skip to content</a
        >
        <div id="site-content">
            <keep-alive include="Blog">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',

    data() {
        return {
            counter: 0,
            len: 0,
        }
    },
    components: {},
    computed: {
        isShowLoader: function () {
            return this.$store.getters.getShowLoader
        },
    },
    methods: {
        skipToContent() {
            const target =
                document.getElementById('introduction') ||
                document.querySelector('.wrap--stack') ||
                document.querySelector('[id$="-details"]') ||
                document.getElementById('site-content')

            if (!target) return

            if (!target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '-1')
            }

            const top =
                target.getBoundingClientRect().top + window.pageYOffset - 16
            window.scrollTo({ top, left: 0, behavior: 'auto' })
            this.$nextTick(() => {
                target.focus({ preventScroll: true })
            })
        },
        dismissBootSplash() {
            const boot = document.getElementById('boot-splash')
            if (!boot || boot.classList.contains('is-hiding')) return
            boot.classList.add('is-hiding')
            window.setTimeout(() => {
                if (boot.parentNode) boot.parentNode.removeChild(boot)
            }, 400)
        },
        revealApp() {
            this.$store.dispatch('hideLoader')
            this.dismissBootSplash()
            this.$nextTick(() => {
                if (!window.location.hash) {
                    window.scrollTo(0, 0)
                    return
                }
                const el = document.querySelector(window.location.hash)
                if (!el) return
                const top = el.getBoundingClientRect().top + window.pageYOffset - 40
                window.scrollTo(0, top)
            })
        },
    },
    mounted() {
        // Hold splash until custom fonts are ready so the landing never flashes a fallback face.
        const reveal = () => {
            this.$nextTick(() => {
                window.requestAnimationFrame(() => this.revealApp())
            })
        }
        const fontsReady =
            document.fonts && document.fonts.ready
                ? document.fonts.ready
                : Promise.resolve()
        Promise.race([
            fontsReady,
            new Promise((resolve) => window.setTimeout(resolve, 1200)),
        ]).then(reveal)

        // Safety: never leave the splash up if something stalls.
        window.setTimeout(() => {
            if (this.isShowLoader) {
                this.$store.dispatch('hideLoader')
            }
            this.dismissBootSplash()
        }, 2500)
    },
    metaInfo: {
        title: 'Danny Gibas', // set a main global title
        titleTemplate: '%s - Welcome', // set your default global subtitle
        htmlAttrs: {
            lang: 'en',
            amp: undefined, // "amp" has no value
        },
        link: [
            { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
            { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { rel: 'shortcut icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: '/apple-icon-57x57.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: '/apple-icon-72x72.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: '/apple-icon-114x114.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: '/apple-icon-144x144.png',
            },
        ],
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1',
            },
            { equiv: 'x-ua-compatible', content: 'ie=edge' },
            {
                property: 'og:image',
                content: '',
            },
            { property: 'og:type', content: 'website' },
            {
                property: 'og:title',
                content: 'Danny Gibas - Front End Engineer',
            },
            {
                property: 'og:description',
                content: 'Portfolio.',
            },
            { property: 'og:url', content: '' },
            {
                property: 'og:site_name',
                content: 'Danny Gibas - Front End Engineer',
            },
            { property: 'og:locale', content: 'en_US' },
        ],
    },
}
</script>

<style lang="scss">
$brand-primary: #fc5356 !default;
$color-white: var(--color-background) !default;

@font-face {
    font-family: 'proxima_novablack';
    src: url('./assets/fonts/pxoxima-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

@font-face {
    font-family: 'AvenirLTStdLight';
    src: url('./assets/fonts/AvenirLTStdLight.woff2') format('woff2');
    font-display: block;
}

@font-face {
    font-family: 'AvenirLTStdBook';
    src: url('./assets/fonts/AvenirLTStdBook.woff2') format('woff2');
    font-display: block;
}

@font-face {
    font-family: 'AvenirLTStdMedium';
    src: url('./assets/fonts/AvenirLTStdMedium.woff2') format('woff2');
    font-display: block;
}

@font-face {
    font-family: 'AvenirLTStdBlack';
    src: url('./assets/fonts/AvenirLTStdBlack.woff2') format('woff2');
    font-display: block;
}

html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* WebKit, Blink, Edge */
.form-control::-webkit-input-placeholder {
    color: black;
}
/* Mozilla Firefox 4 to 18 */
.form-control:-moz-placeholder {
    color: black;
}
/* Mozilla Firefox 19+ */
.form-control::-moz-placeholder {
    color: black;
}
/* Internet Explorer 10-11 */
.form-control:-ms-input-placeholder {
    color: black;
}
/* Microsoft Edge */
.form-control::-ms-input-placeholder {
    color: black;
}

*:focus {
    outline: none;
    outline-style: none;
}

*:focus:not(:focus-visible) {
    outline: none !important;
    box-shadow: none !important;
}

select.form-control.wide:not([multiple]),
select.form-control:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: 95% 50%;
    background-repeat: no-repeat;
    padding: 0.5em 1em 0.5em 0.5em;
    padding-left: 0;
    background-size: 8px;
}

select.form-control:not([size]):not([multiple]) {
    height: calc(2.25rem + 15px);
    color: black;
    font-weight: 400;
}

@media only screen and (max-width: 768px) {
    #contact-form .form-control {
        margin-bottom: 0;
    }
}

.field-wrapper {
    position: relative;
    margin-bottom: 28px;
}

.field-wrapper label {
    position: absolute;
    top: 14px;
    left: 0;
    margin: 0;
    pointer-events: none;
    -webkit-transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out, color 0.2s ease-in-out;
    transform-origin: left top;
    font-size: 1rem;
    line-height: 1;
    color: var(--color-muted);
    font-family: 'AvenirLTStdMedium';
}

.field-wrapper label.openup {
    transform: translateY(-27px);
    font-size: 0.875rem;
}

#contact-form .form-control,
#contact-form textarea.form-control {
    display: block;
    width: 100%;
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    padding: 14px 0 8px;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.2;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 0;
    background: white;
    color: var(--color-foreground);
    font-weight: 400;
    box-shadow: none;
    font-family: 'AvenirLTStdBook';
    resize: none;
    overflow: hidden;
    box-sizing: border-box;
}

#contact-form .form-control:focus,
#contact-form textarea.form-control:focus,
#contact-form .form-control:focus-visible,
#contact-form textarea.form-control:focus-visible {
    color: var(--color-foreground);
    border-bottom: 1px solid grey;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none !important;
}

#btnSubmit {
    margin-top: 30px;
}

.full-height {
    display: flex;
    align-items: stretch;
    height: 100%;
}

.background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 200;
}

.accent-dot {
    height: 6px;
    width: 6px;
    margin: 0 auto 30px auto;
    background-color: $brand-primary;
}

.bg-light {
    background-color: $color-white !important;
}
.navlist {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
}
.btn-secondary {
    border-radius: 0;
    background-color: var(--color-foreground);
    border: none;
    padding: 8px 40px;
    margin-top: 15px;
}

.btn-secondary:hover,
.btn-secondary:focus {
    background-color: var(--color-accent);
    transition: 0s;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none;
}

.mfp-close {
    opacity: 1;
}
.mfp-close:hover,
.mfp-close:focus {
    color: var(--color-accent);
}

/* Lightbox stays viewport-tall — no page-length scroll behind the image */
.mfp-bg {
    position: fixed !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    height: 100dvh !important;
    max-height: 100dvh !important;
    overflow: hidden !important;
}

.mfp-wrap {
    position: fixed !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    height: 100dvh !important;
    max-height: 100dvh !important;
    overflow: hidden !important;
}

.mfp-container {
    height: 100% !important;
    max-height: 100dvh !important;
    overflow: hidden !important;
}

/* Keep lightbox images inside the viewport so the close control stays reachable */
.mfp-image-holder .mfp-content {
    max-width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
    max-height: calc(100dvh - 16px);
}

.mfp-figure {
    line-height: 0;
    max-width: 100%;
    max-height: inherit;
}

img.mfp-img {
    width: auto !important;
    height: auto !important;
    max-width: min(1200px, calc(100vw - 16px)) !important;
    max-height: calc(100vh - 16px) !important;
    max-height: calc(100dvh - 16px) !important;
    object-fit: contain;
    box-sizing: border-box;
    padding: 40px 0;
}

/* Beat Magnific's width:100% / text-align:right close button */
.mfp-wrap .mfp-image-holder .mfp-close,
.mfp-wrap .mfp-iframe-holder .mfp-close {
    position: fixed !important;
    top: 12px !important;
    right: 10px !important;
    left: auto !important;
    width: 56px !important;
    height: 56px !important;
    line-height: 56px !important;
    font-size: 2.625rem !important;
    padding: 0 !important;
    text-align: center !important;
    z-index: 1051 !important;
    cursor: pointer !important;
}

.mfp-wrap .mfp-image-holder .mfp-close:hover,
.mfp-wrap .mfp-image-holder .mfp-close:focus,
.mfp-wrap .mfp-iframe-holder .mfp-close:hover,
.mfp-wrap .mfp-iframe-holder .mfp-close:focus {
    color: var(--color-accent) !important;
    opacity: 1 !important;
    cursor: pointer !important;
}

.mfp-wrap .mfp-image-holder .mfp-close:active,
.mfp-wrap .mfp-iframe-holder .mfp-close:active {
    top: 12px !important;
}

.nav-wrap {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 80px;
    background: transparent;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

/* Shared bottom nav fade for Stack / Resume / Contact / Blog */
.nav-wrap.nav-wrap--solid {
    position: fixed;
    bottom: 0 !important;
    left: 0;
    z-index: 1050;
    width: 100%;
    max-width: 100%;
    height: 120px !important;
    min-height: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
    background: linear-gradient(
        to top,
        var(--color-background) 0,
        var(--color-background) 58px,
        rgba(255, 255, 255, 0.55) 78px,
        rgba(255, 255, 255, 0) 98px
    ) !important;
    display: flex;
    justify-content: center;
    align-items: flex-end !important;
    pointer-events: none;
}
.nav-wrap.nav-wrap--solid ul {
    pointer-events: auto;
    margin: 0 0 22px !important;
    align-self: flex-end;
}
.nav-wrap.nav-wrap--solid button {
    pointer-events: auto;
}

@media (max-width: 768px) {
    .nav-wrap {
        position: fixed;
        bottom: 10px;
        height: auto;
        min-height: 44px;
        z-index: 1050;
        padding: 0 8px;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
    }
}

img.responsive {
    width: 100%;
    height: auto;
    padding: 2px !important;
}

*:focus {
    outline: none;
}

*:focus:not(:focus-visible) {
    outline: none !important;
    box-shadow: none !important;
}

:focus-visible {
    outline: 2px solid var(--color-accent) !important;
    outline-offset: 3px !important;
}

/* Contact fields use underline focus, not the pink box ring */
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
.form-control:focus-visible {
    outline: none !important;
    outline-offset: 0 !important;
}

/* Kill native button focus ring on mouse click; keep keyboard ring via :focus-visible */
button:focus,
button.internal:focus,
button.cta-link:focus {
    outline: none !important;
}

button:focus-visible,
button.internal:focus-visible,
button.cta-link:focus-visible {
    outline: 2px solid var(--color-accent) !important;
    outline-offset: 3px !important;
}

.skip-link {
    position: absolute;
    left: 12px;
    top: 12px;
    z-index: 10000;
    padding: 10px 14px;
    background: var(--color-background);
    color: #212529;
    font-family: 'AvenirLTStdMedium', sans-serif;
    font-size: 0.875rem;
    text-decoration: none;
    border: 2px solid var(--color-accent);
    transform: translateY(-200%);
}

.skip-link:focus,
.skip-link:focus-visible {
    transform: translateY(0);
}

/* Skip targets are programmatically focused; don't paint a huge page ring */
#introduction:focus,
.wrap--stack:focus,
[id$='-details']:focus,
#site-content:focus {
    outline: none;
}

@media (min-width: 1200px) {
    .container {
        max-width: 95%;
    }
}

.load--wrapper {
    height: 100vh;
    width: 100vw;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    transition: height 0.5s ease-out 0.4s;
    z-index: 1001;
    &.hide {
        height: 0;
    }
    .white--overlay {
        height: 100vh;
        width: 100vw;
        background: white;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1002;
        transition: height 0.5s ease-out 0.4s;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        img {
            display: block;
            -ms-flex-order: 0;
            order: 0;
            -webkit-flex: 0 1 auto;
            -ms-flex: 0 1 auto;
            flex: 0 1 auto;
            -webkit-align-self: auto;
            -ms-flex-item-align: auto;
            align-self: auto;
            &.hide {
                display: none;
            }
        }
        &.hide {
            height: 0;
        }
    }
}

@media (max-width: 767px) {
    img.mfp-img {
        max-width: calc(100vw - 16px) !important;
        padding: 24px 0;
    }
}

/* Image above text when project columns stack — same 20px gap on preview + details */
@media (max-width: 991px) {
    [id$='-details'] .row > [class*='col-lg-8'],
    #page-wrap .row > [class*='col-lg-8'] {
        margin-bottom: 20px;
    }

    [id$='-details'] .row > [class*='col-lg-8'] {
        padding-left: 0;
        padding-right: 0;
    }

    [id$='-details'] .detail-image,
    [id$='-details'] .detail-image:has(.mobile-shot),
    [id$='-details'] .detail-image:has(.brief-shot),
    [id$='-details'] .detail-image:has(.wireframe-shot) {
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    [id$='-details'] .text-container {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    #page-wrap .text-container {
        margin-top: 0;
    }

    /* Avoid heading margins adding to the 20px stack gap */
    #page-wrap .text-container > h2:first-child,
    [id$='-details'] .text-container > h2:first-child,
    [id$='-details'] .text-container > h4:first-child,
    [id$='-details'] .text-container > h5:first-child {
        margin-top: 0 !important;
    }
}

/* Shared edge gutter for details pages — close X is centered in this strip */
[id$='-details'] {
    --details-gutter: 30px;
    --close-size: 48px;
}

@media (max-width: 767px) {
    /* Bootstrap .row −15px margins eat container padding otherwise */
    [id$='-details'] {
        padding-left: var(--details-gutter) !important;
        padding-right: var(--details-gutter) !important;
    }

    [id$='-details'] .row {
        margin-left: 0;
        margin-right: 0;
    }

    [id$='-details'] .row > [class*='col-'] {
        padding-left: 0;
        padding-right: 0;
    }
}

/* Details / overlay close controls — button is the hit + focus target */
.close-control {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: var(--close-size, 48px);
    height: var(--close-size, 48px);
    min-width: var(--close-size, 48px);
    min-height: var(--close-size, 48px);
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}

/* Same inset on every project details page */
[id$='-details'] .close-control {
    right: 10px;
}

.close-control,
.close-control:hover,
.close-control:focus,
.close-control .mfp-close,
.close-control:hover .mfp-close,
.close-control:focus .mfp-close {
    cursor: pointer !important;
}

.close-control .mfp-close {
    position: static !important;
    top: auto !important;
    right: auto !important;
    left: auto !important;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 2.75rem !important;
    line-height: 1 !important;
    display: block;
    color: var(--color-foreground);
    cursor: pointer !important;
    transition: color 0.15s ease;
    pointer-events: none;
}

@media (hover: hover) and (pointer: fine) {
    .close-control:hover .mfp-close {
        color: var(--color-accent) !important;
    }
}

.close-control:focus-visible .mfp-close {
    color: var(--color-accent) !important;
}

.close-control:focus-visible {
    outline: 2px solid var(--color-accent) !important;
    outline-offset: 2px !important;
}
</style>
