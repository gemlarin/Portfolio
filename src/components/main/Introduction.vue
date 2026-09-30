<template>
    <div class="wrap dialog" id="introduction">
        <div class="dividerline--animated"></div>
        <div class="intro-content">
            <h2
                v-scroll-reveal.reset="{ delay: 200, origin:'bottom', duration: 500, easing:'ease-out'}"
            >
                {{ greeting }}<span>.</span>
            </h2>
            <div id="navigation--intro">
                <ul>
                    <li>
                        <button
                            type="button"
                            class="nav-link"
                            v-scroll-to="'#portfolio'"
                        >
                            portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="nav-link"
                            @click="$router.push('/stack')"
                        >
                            stack
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="nav-link"
                            @click="$router.push('/resume')"
                        >
                            résumé
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="nav-link"
                            @click="$router.push('/contact')"
                        >
                            contact
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="nav-link"
                            @click="$router.push('/blog')"
                        >
                            blog
                        </button>
                    </li>
                </ul>
            </div>
        </div>
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
    background: var(--color-background);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    a.nav-link,
    button.nav-link {
        color: var(--color-accent);
        font-size: var(--text-md); /* 18px desktop */
        background: none;
        border: 0;
        padding: 0;
        margin: 0 16px;
        font-family: inherit;
        cursor: pointer;
    }
    a:hover,
    button.nav-link:hover {
        text-decoration: underline;
    }
    ul {
        list-style: none;
        padding-left: 0;
        li {
            display: inline-block;
        }
    }

    /* Content is the line mask: white band sized to heading + nav */
    .intro-content {
        position: relative;
        z-index: 302;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-background);
        /* Equal clearance above headline and below nav for the line gap */
        padding: 36px 12px;
        box-sizing: border-box;
        max-width: 100%;
    }

    h2 {
        font-family: 'proxima_novablack';
        letter-spacing: -0.8px;
        margin: 0 auto;
        width: 650px;
        max-width: 100%;
        height: auto;
        padding: 0;
        text-align: center;
        font-size: var(--font-intro);
        line-height: 1em;
        z-index: 302;
        span {
            color: var(--color-accent);
        }
    }
    #navigation--intro {
        z-index: 302;
        width: 100%;
        max-width: 100vw;
        text-align: center;
        margin-top: 20px;
        ul {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            margin: 0;
            padding: 0 8px;
        }
        li {
            display: block;
            flex: 0 0 auto;
        }
    }
    .dividerline--animated {
        width: 1px;
        height: 0;
        position: absolute;
        z-index: 300;
        left: 50%;
        top: 0;
        background-color: var(--color-hero-dark);
        transition: height 1.5s;
        transition-timing-function: ease-in;
        &.animate {
            height: 100vh;
        }
    }
}

@media (max-width: 599px) {
    .wrap.dialog {
        h2 {
            margin: 0;
            width: calc(100vw - 30px);
            text-align: center;
            font-size: var(--font-intro-sm);
        }
        a.nav-link,
        button.nav-link {
            font-size: var(--font-helper);
            margin: 0 5px;
        }
        .intro-content {
            padding: 28px 8px;
        }
        #navigation--intro {
            margin-top: 16px;
        }
    }
}

@media (min-width: 600px) and (max-width: 939px) {
    .wrap.dialog {
        h2 {
            margin: 0 auto;
            width: 500px;
            max-width: calc(100vw - 40px);
            text-align: center;
        }
    }
}
</style>
