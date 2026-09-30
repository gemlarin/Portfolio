<template>
    <div class="stack-page">
        <div class="nav-wrap nav-wrap--solid">
            <navi :activepage="page"></navi>
        </div>
        <div class="wrap--stack">
            <button
                type="button"
                class="close-control"
                aria-label="Close stack (Escape)"
                @click="closePage"
            >
                <span class="mfp-close" aria-hidden="true">×</span>
            </button>
            <div class="wrap--centering">
                <h1 class="sr-only">Stack</h1>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 listing">
                        <p class="stack-name">VUE 2/3</p>
                        <p class="stack-name">VUEX</p>
                        <p class="stack-name">PINIA</p>
                        <p class="stack-name">VITEST</p>
                        <p class="stack-name">TAILWIND</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 subcopy">
                        <p>
                            This is my primary front-end stack today — Vue for
                            product UI, Pinia or Vuex for state, Vitest for
                            tests, and Tailwind for styling. I’m also building
                            fluency in React where the role calls for it. My
                            design and UX tooling includes FIGMA and Adobe CC.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './../components/main/navs/IntroNav.vue'
import escapeClose from './../mixins/escapeClose'
export default {
    name: 'Stack',
    mixins: [escapeClose],
    data() {
        return {
            page: 'stack',
        }
    },
    created() {},
    components: {
        Navi: Nav,
    },
    methods: {
        closePage() {
            this.$router.push({ path: '/', hash: '#introduction' })
        },
    },
}
</script>
<style lang="scss" scoped>
.stack-page {
    max-width: 100%;
    overflow-x: hidden;
}
h2,
.stack-name {
    font-family: 'proxima_novablack';
    color: var(--color-heading-soft);
    font-size: var(--font-page-title);
    margin-bottom: 5px;
    line-height: 1;
    padding-right: 5px;
}
.stack-name {
    margin-top: 0;
    padding-top: 0;
}
.wrapper--postion-nav {
    margin-top: 60px;
}
.positioner {
    width: 100vw;
    position: absolute;
    z-index: 301;
    bottom: 40px;
    text-align: center;
}
p {
    font-family: 'AvenirLTStdBook';
    font-size: var(--font-body);
    line-height: 1.74em;
    padding-top: 0;
    padding-left: 5px;
    color: var(--color-foreground);
}
.subcopy {
    max-width: 265px;
    text-align: left;
}
.subcopy p {
    margin-top: 0;
    padding-top: 0;
}
.listing {
    text-align: right;
}
.wrap--centering ::v-deep .row {
    align-items: flex-start;
}
.wrap--stack {
    height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
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
}
.nav-link {
    position: absolute;
    right: 0;
    top: 0;
}
.mfp-close {
    font-size: var(--font-page-title);
    right: 10px;
    top: 10px;
}
.wrap--centering {
    width: 70vw;
    height: 360px;
    background-color: white;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    img {
        display: inline-block;
        height: 20px;
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
    }
    img:nth-child(2) {
        height: 35px;
    }
    ul {
        padding: 0;
        text-decoration: none;
        li {
            display: block;
            font-size: var(--font-h2);
            font-family: 'proxima_novablack';
            p {
                margin-bottom: 0;
                line-height: 1em;
            }
            .subtext {
                font-size: var(--font-caption);
                margin-top: 5px;
                padding-top: 0;
                color: var(--color-accent);
                margin-bottom: 20px;
                font-family: 'AvenirLTStdBook';
            }
        }
    }
}
@media (max-width: 768px) {
    .mfp-close {
        font-size: var(--font-page-title-sm);
    }
    .wrap--stack {
        height: 100dvh;
        box-sizing: border-box;
        padding: 56px 0 72px;
        align-items: center;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .wrap--centering {
        width: 100%;
        max-width: 100%;
        height: auto;
        min-height: 0;
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    .wrap--centering ::v-deep .row {
        margin-left: 0;
        margin-right: 0;
    }
    .wrap--centering ::v-deep [class*='col-'] {
        padding-left: 0;
        padding-right: 0;
    }
    .subcopy {
        max-width: 400px;
        padding-top: 20px;
        text-align: center;
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
        max-width: 80%;
    }
    .listing {
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
    }
    .stack-name {
        line-height: 1;
        font-size: var(--font-page-title-sm);
        display: inline;
        padding-left: 15px;
        padding-right: 15px;
    }
    .subcopy p {
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media (max-width: 768px) and (min-width: 695px) {
    .wrap--centering {
        width: 100%;
        height: auto;
    }
}
</style>
