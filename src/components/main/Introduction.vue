
<template>
    <div class="wrap dialog" id="introduction">
        <h2
            v-scroll-reveal.reset="{ delay: 200, origin:'bottom', duration: 500, easing:'ease-out'}"
        >
            {{ greeting }}<span>.</span>
        </h2>
        <div id="navigation--intro">
            <ul
                v-scroll-reveal.reset="{ delay: 200, origin:'bottom', duration: 500, easing:'ease-out'}"
            >
                <li>
                    <a
                        class="nav-link"
                        href="javascript:void(0)"
                        v-scroll-to="'#portfolio'"
                    >portfolio</a>
                </li>
                <li>
                    <router-link class="nav-link" to="/stack">stack</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/resume">résumé</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/contact">contact</router-link>
                </li>
            </ul>
        </div>
        <div class="dividerline--animated"></div>
        <div class="dividerline--mask"></div>
    </div>
</template>

<script>
import greetings from '../../data/greetings.json'

export default {
    name: 'Introduction',
    data() {
        return {
            animatelock: false,
            lastScrollTop: 0,
            windowheight: 0,
            direction: '',
        }
    },
    computed: {
        greeting() {
            const key = String(this.$route.query.for || '')
                .trim()
                .toLowerCase()
            return greetings[key] || greetings.default
        },
    },
    components: {},
    created() {},
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            var st = window.scrollY
            if (st > this.lastScrollTop) {
                this.direction = 'down'
            } else {
                this.direction = 'up'
            }
            this.lastScrollTop = st

            if (
                window.scrollY > $(window).height() / 2 &&
                this.direction == 'down'
            ) {
                if (!this.animatelock) {
                    this.windowheight = $(window).height()
                    this.animatelock = true
                    $('.dividerline--animated').addClass('animate')
                }
            }

            if (
                window.scrollY < this.windowheight / 2 &&
                this.direction == 'up'
            ) {
                if (this.animatelock) {
                    this.animatelock = false
                    $('.dividerline--animated').removeClass('animate')
                }
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>
<style scoped lang="scss">
.wrap.dialog {
    position: relative;
    z-index: 300;
    height: 100vh;
    width: 100vw;
    background: #fff;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;

    a.nav-link {
        color: #fb2662;
        font-size: 18px;
    }
    a:hover {
        text-decoration: underline;
    }
    ul {
        list-style: none;
        padding-left: 0;
        li {
            display: inline-block;
        }
    }
    h2 {
        font-family: 'proxima_novablack';
        letter-spacing: -0.8px;
        margin: 0 auto;
        width: 650px;
        min-height: 210px;
        height: auto;
        padding: 15px;
        text-align: center;
        font-size: 55px;
        line-height: 1em;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        z-index: 302;
        span {
            color: #fb2662;
        }
    }
    #navigation--intro {
        z-index: 302;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        width: 100vw;
        text-align: center;
    }
    .dividerline--animated {
        width: 1px;
        height: 0;
        position: absolute;
        z-index: 300;
        left: 50%;
        top: 0;
        background-color: #252324;
        transition: height 1.5s;
        transition-timing-function: ease-in;
        &.animate {
            height: 100vh;
        }
    }
    .dividerline--mask {
        display: block;
        position: absolute;
        z-index: 301;
        left: calc(50% - 10px);
        top: calc(50vh - 155px);
        width: 20px;
        height: 310px;
        background-color: white;
    }
}

@media (max-width: 599px) {
    .wrap.dialog {
        h2 {
            margin: 0 15px;
            width: calc(100vw - 30px);
            text-align: center;
            min-height: 160px !important;
            height: auto !important;
            font-size: 40px;
        }
        .dividerline--mask {
            top: calc(50vh - 140px) !important;
            height: 260px !important;
        }
    }
}

@media (min-width: 600px) and (max-width: 939px) {
    .wrap.dialog {
        h2 {
            margin: 0 auto;
            width: 500px;
            text-align: center;
            min-height: 260px !important;
            height: auto !important;
        }

        .dividerline--mask {
            top: calc(50vh - 185px) !important;
            height: 360px !important;
        }
    }
}
</style>
