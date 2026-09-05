  <template>
    <div id="app">
        <keep-alive include="Index">
            <router-view></router-view>
        </keep-alive>
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
$color-white: #fff !default;

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
    font-size: 16px;
    line-height: 1;
    color: #666;
    font-family: 'AvenirLTStdMedium';
}

.field-wrapper label.openup {
    transform: translateY(-27px);
    font-size: 14px;
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
    font-size: 18px;
    line-height: 1.2;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 0;
    background: white;
    color: #222;
    font-weight: 400;
    box-shadow: none;
    font-family: 'AvenirLTStdBook';
    resize: none;
    overflow: hidden;
    box-sizing: border-box;
}

#contact-form .form-control:focus,
#contact-form textarea.form-control:focus {
    color: #222;
    border-bottom: 1px solid #fb2662;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
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
    background-color: #222;
    border: none;
    padding: 8px 40px;
    margin-top: 15px;
}

.btn-secondary:hover,
.btn-secondary:focus {
    background-color: #fb2662;
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
    color: #fb2662;
}

.nav-wrap {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100vw;
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

img.responsive {
    width: 100%;
    height: auto;
    padding: 2px !important;
}

*:focus {
    outline: none !important;
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
        max-width: 100%;
    }
}
</style>
