<template>
<div
    class="main__navbar"
    :class="{ 'nav-is-open': navOpen, alt: headerSolid }"
>
    <div
        id="primary-nav"
        ref="primaryNav"
        class="navbar__hidden--top"
        :hidden="!navOpen"
        @keydown.esc.prevent="closeNav"
    >
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul>
                        <li>
                            <button
                                type="button"
                                @click="goPortfolio"
                            >
                                PORTFOLIO
                            </button>
                        </li>
                        <li>
                            <button type="button" @click="go('/stack')">
                                STACK
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="go('/resume')"
                            >
                                RÉSUMÉ
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="go('/contact')"
                            >
                                CONTACT
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="go('/blog')"
                            >
                                BLOG
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-wrapper">
        <div class="row">
            <div class="col-sm-12">
                <div class="main__navbar--logo--container">
                    <router-link to="/" aria-label="Danny Gibas — home">
                        <svg
                            version="1.1"
                            id="Logo"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 49.612 50"
                            style="enable-background: new 0 0 49.612 50"
                            xml:space="preserve"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path
                                class="logo__background-color"
                                d="M49.461,16.105c0-8.985-7.038-16.023-15.874-16.023H16.288c-0.95,0-1.72,0.77-1.72,1.72v12.881H1.8
         c-0.95,0-1.72,0.77-1.72,1.72v17.448c0,8.985,7.038,16.023,15.874,16.023h17.299c0.95,0,1.72-0.77,1.72-1.72V35.273h12.769
         c0.95,0,1.72-0.77,1.72-1.72V16.105z M44.369,30.238l-14.233,0.011H29.88v0L19.66,30.257v-5.498h-5.092v8.681
         c0,1.013,0.821,1.834,1.834,1.834H29.88v9.659c0,0-3.594,0-13.852,0c-7.937,0-10.857-7.095-10.857-10.614c0-3.519,0-14.601,0-14.601
         l9.397-0.007v0.003h5.092v-0.007l10.221-0.008v5.504h5.092v-8.97c0-0.856-0.694-1.551-1.551-1.551H19.66V5.023c0,0,3.594,0,13.852,0
         c7.937,0,10.857,7.095,10.857,10.614C44.369,19.156,44.369,30.238,44.369,30.238z"
                            />
                        </svg>
                    </router-link>
                </div>
                <ul>
                    <li>
                        <div class="social-media">
                            <div id="open-icon-text">social</div>
                            <div id="open-icon">
                                <button
                                    type="button"
                                    class="social-toggle"
                                    :aria-expanded="
                                        drawerOpen ? 'true' : 'false'
                                    "
                                    aria-controls="slide"
                                    aria-label="Toggle social links"
                                    @click="toggleOpen"
                                >
                                    <svg
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        style="
                                            enable-background: new 0 0
                                                512 512;
                                        "
                                        xml:space="preserve"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <g>
                                            <path
                                                class="social-icon"
                                                d="M412.854,314c-34.299,0-64.576,17.535-82.348,44.109l-122.541-56.533
                    c6.419-13.874,10.008-29.313,10.008-45.577c0-16.775-3.815-32.674-10.618-46.881l122.35-56.444
                    C347.359,179.929,378.034,198,412.854,198c54.589,0,99-44.411,99-99s-44.411-99-99-99s-99,44.411-99,99
                    c0,9.107,1.242,17.927,3.555,26.309L190.554,183.83c-19.968-22.522-49.099-36.744-81.495-36.744
                    C49.004,147.086,0.146,195.945,0.146,256S49.004,364.914,109.06,364.914c32.935,0,62.5-14.696,82.488-37.872l126.259,58.247
                    c-2.569,8.797-3.953,18.095-3.953,27.711c0,54.589,44.411,99,99,99s99-44.411,99-99S467.443,314,412.854,314z M412.854,30
                    c38.047,0,69,30.953,69,69s-30.953,69-69,69s-69-30.953-69-69S374.807,30,412.854,30z M109.06,334.914
                    c-43.513,0-78.914-35.4-78.914-78.914s35.4-78.914,78.914-78.914s78.914,35.4,78.914,78.914S152.573,334.914,109.06,334.914z
                    M412.854,482c-38.047,0-69-30.953-69-69s30.953-69,69-69s69,30.953,69,69S450.901,482,412.854,482z"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <div id="drawer">
                                <div
                                    id="slide"
                                    :class="{ expand: drawerOpen }"
                                    :aria-hidden="
                                        drawerOpen ? 'false' : 'true'
                                    "
                                >
                                    <div
                                        v-for="link in socialLinks"
                                        :key="link.id"
                                        class="icon"
                                    >
                                        <a
                                            :href="link.url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            :aria-label="
                                                link.label +
                                                    ' (opens in new tab)'
                                            "
                                            :tabindex="
                                                drawerOpen ? 0 : -1
                                            "
                                        >
                                            <social-icon
                                                :name="link.id"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="main__navbar--item--wrapper">
                            <button
                                ref="navBurger"
                                type="button"
                                id="main__navbar--burger--wrapper"
                                class="nav-burger"
                                :aria-expanded="
                                    navOpen ? 'true' : 'false'
                                "
                                aria-controls="primary-nav"
                                aria-label="Menu"
                                @click="toggleNav"
                            >
                                <div
                                    class="burger__bar burger__bar--top"
                                    :class="{ open: navOpen }"
                                ></div>
                                <div class="flip--wrapper">
                                    <div
                                        class="burger__bar burger__bar--top--flip"
                                        :class="{ open: navOpen }"
                                    ></div>
                                    <div
                                        class="burger__bar burger__bar--bottom--flip"
                                        :class="{ open: navOpen }"
                                    ></div>
                                </div>
                                <div
                                    class="burger__bar burger__bar--bottom"
                                    :class="{ open: navOpen }"
                                ></div>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /container -->
</div>

</template>

<script>
import SocialIcon from './SocialIcon.vue'
import { socialLinks } from '../data/social'

export default {
    name: 'SiteHeader',
    components: {
        SocialIcon,
    },
    data() {
        return {
            navScrolled: false,
            drawerOpen: false,
            navOpen: false,
            socialLinks,
        }
    },
    computed: {
        headerSolid() {
            return this.$route.path !== '/' || this.navScrolled
        },
    },
    watch: {
        $route() {
            this.navOpen = false
            this.drawerOpen = false
            this.handleScroll()
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        this.handleScroll()
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        toggleNav() {
            if (this.navOpen) {
                this.closeNav()
            } else {
                this.openNav()
            }
        },
        openNav() {
            this.navOpen = true
            this.$nextTick(() => {
                const first =
                    this.$refs.primaryNav &&
                    this.$refs.primaryNav.querySelector('button, a')
                if (first) first.focus()
            })
        },
        closeNav() {
            const wasOpen = this.navOpen
            this.navOpen = false
            if (!wasOpen) return
            this.$nextTick(() => {
                if (this.$refs.navBurger) this.$refs.navBurger.focus()
            })
        },
        go(path) {
            this.navOpen = false
            if (this.$route.path === path) return
            this.$router.push(path)
        },
        goPortfolio() {
            this.navOpen = false
            if (this.$route.path === '/') {
                this.$scrollTo('#portfolio')
                return
            }
            this.$router.push({ path: '/', hash: '#portfolio' })
        },
        toggleOpen() {
            this.drawerOpen = !this.drawerOpen
        },
        handleScroll() {
            this.navScrolled = window.scrollY > 60
        },
    },
}
</script>
