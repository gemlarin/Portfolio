<template>
    <div id="main">
        <div
            class="main__navbar"
            :class="{ 'nav-is-open': navOpen, alt: navScrolled }"
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
                                        v-scroll-to="'#portfolio'"
                                        @click="closeNav"
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-wrapper">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="main__navbar--logo--container">
                            <a href="#" aria-label="Danny Gibas — home">
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
                            </a>
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
                                            <div class="icon">
                                                <a
                                                    href="https://www.linkedin.com/in/dannygibas/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="LinkedIn (opens in new tab)"
                                                    :tabindex="
                                                        drawerOpen ? 0 : -1
                                                    "
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
                                                            enable-background: new
                                                                0 0 512 512;
                                                        "
                                                        xml:space="preserve"
                                                    >
                                                        <g>
                                                            <path
                                                                class="svgicon"
                                                                d="M255.196,3C115.0327,3,1.392,116.6407,1.392,256.804s113.6407,253.804,253.804,253.804
                                        S509,396.9673,509,256.804C509,116.6094,395.3593,3,255.196,3z M191.745,379.7402h-63.451v-222.079h63.451V379.7402z
                                        M161.9862,144.0514c-16.4339,0-29.7265-13.3249-29.7265-29.7588s13.3249-29.7588,29.7265-29.7588
                                        c16.4339,0.0313,29.7588,13.3562,29.7588,29.7588C191.745,130.7265,178.4201,144.0514,161.9862,144.0514z M413.823,379.7402
                                        h-63.451V242.4323c0-16.0853-4.6003-27.347-24.3654-27.347c-32.7728,0-39.0856,27.347-39.0856,27.347v137.3079H223.47v-222.079
                                        h63.451v21.2241c9.0732-6.9474,31.7249-21.1928,63.451-21.1928c20.5583,0,63.451,12.3095,63.451,86.6736L413.823,379.7402
                                        L413.823,379.7402z"
                                                            />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="icon">
                                                <a
                                                    href="https://github.com/gemlarin"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="GitHub (opens in new tab)"
                                                    :tabindex="
                                                        drawerOpen ? 0 : -1
                                                    "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                    >
                                                        <path
                                                            class="svgicon"
                                                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="icon">
                                                <a
                                                    href="https://medium.com/@gemarin"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Medium (opens in new tab)"
                                                    :tabindex="
                                                        drawerOpen ? 0 : -1
                                                    "
                                                >
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style="
                                                            padding-bottom: 2px;
                                                        "
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 256 256"
                                                        xml:space="preserve"
                                                    >
                                                        <g>
                                                            <path
                                                                class="svgicon"
                                                                d="M32,96c0.3-3.1-0.9-6.2-3.2-8.3L5.1,59.3V55h73.4l56.7,124.4L185.2,55h70v4.3l-20.2,19.4 c-1.7,1.3-2.6,3.5-2.2,5.7v142.4c-0.4,2.2,0.5,4.3,2.2,5.7l19.7,19.4v4.3h-99.3v-4.3l20.4-19.9c2-2,2-2.6,2-5.7V111.1L121,255.5 h-7.7L47.1,111.1v96.8c-0.6,4.1,0.8,8.2,3.7,11.1l26.6,32.3v4.3H1.9v-4.3L28.5,219c2.8-2.9,4.1-7.1,3.4-11.1V96z"
                                                            />
                                                        </g>
                                                    </svg>
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

        <!-- container for the BG image in the hero. Set in _theme.scss -->
        <header class="main__masthead">
            <div class="main__masthead--content">
                <div class="wrap--hero-copy">
                    <div class="welcome-block">
                        <h1 id="firstname">
                            <span>d</span>
                            <span>a</span>
                            <span>n</span>
                        </h1>
                        <h1 id="lastname">
                            <span>g</span>
                            <span>i</span>
                            <span>b</span>
                            <span>a</span>
                            <span>s</span>
                        </h1>
                        <div class="tagline">
                            Front End Developer. UX/UI Designer.
                        </div>
                    </div>
                </div>
                <div class="sd-container scroll-down svg" id="home-scroll-down">
                    <button
                        type="button"
                        class="scroll-down-btn"
                        aria-label="Scroll to introduction"
                        v-scroll-to="'#introduction'"
                    >
                        <svg
                            class="dot"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Layer_2"
                            x="0px"
                            y="0px"
                            viewBox="0 0 25.166666 37.8704414"
                            enable-background="new 0 0 25.166666 37.8704414"
                            xml:space="preserve"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path
                                class="stroke"
                                fill="none"
                                stroke="#ffffff"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
                            ></path>
                            <path
                                class="scroller"
                                fill="#ffffff"
                                d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
                            ></path>
                        </svg>
                        <div class="darr" aria-hidden="true">&darr;</div>
                    </button>
                </div>
            </div>
        </header>
        <!--<div class="main__image--top--overlay"></div>-->

        <div class="main__image--top"></div>
    </div>
</template>

<script>
import './../../assets/hero__img--home.webp'
import './../../assets/scrolldown.svg'
import './../../assets/share.svg'
import Parallax from 'vue-parallaxy'
export default {
    data: function () {
        return {
            open: true,
            navScrolled: false,
            drawerOpen: false,
            navOpen: false,
        }
    },
    components: {
        Parallax,
    },
    computed: {
        isOpen() {
            return this.drawerOpen
        },
        windowHeight() {
            return window.innerHeight
        },
        offset() {
            var off = (window.scrollY / window.innerHeight) * 5
            if (off > 1) {
                off = 1
            } else if (off < 0) {
                off = 0
            }
            return off
        },
    },
    created: function () {},
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll)
        this.handleScroll()

        setTimeout(function () {
            //$('h1#firstname span').removeClass("alter");
            //$('h1#lastname span').removeClass("alter");
            $('.scrolldown').addClass('grow')
            $('.dot').addClass('show')
            $('.scroll-text').addClass('show')
            $('.tagline').addClass('reveal')
        }, 300)

        // navbar starts closed; opened via keyboard-accessible burger
        //init navbar opacity
        $('#side__navbar__list--group').css(
            'background-color',
            'rgba(0,0,0,' + this.offset
        )
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
            this.navOpen = false
            this.$nextTick(() => {
                if (this.$refs.navBurger) this.$refs.navBurger.focus()
            })
        },
        go(path) {
            this.navOpen = false
            this.$router.push(path)
        },
        toggleOpen: function () {
            this.drawerOpen = !this.drawerOpen
        },
        handleScroll: function () {
            const scrolled = window.scrollY > 60
            this.navScrolled = scrolled
            this.open = !scrolled
        },
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style lang="scss">
//== Colors
$gray-base: #000 !default;
$gray-darker: lighten($gray-base, 13.5%) !default; // #222
$gray-dark: lighten($gray-base, 20%) !default; // #333
$gray: lighten($gray-base, 33.5%) !default; // #555
$gray-light: lighten($gray-base, 66.7%) !default; // #777
$gray-light-alt: lighten($gray-base, 80.5%) !default; //
$gray-lighter: lighten($gray-base, 93.5%) !default; // #eee
$brand-primary: #535250 !default;
$brand-secondary: $gray-darker !default;
$brand-tertiary: #fb2662 !default;
$color-gold: #dea110 !default;
$color-white: #fff !default;
$color-offwhite: #fafafa !default;

.color-white {
    color: $color-white;
}
//== Scaffolding
//
//## Settings for some of the most global styles.
//** Background color for `<body>`.
$body-bg: #fff !default;
//** Global text color on `<body>`.
$text-color: $gray-dark !default;
//** Global textual link color.
$link-color: $brand-primary !default;
//** Link hover color set via `darken()` function.
$link-hover-color: darken($link-color, 15%) !default;
//** Link hover decoration.
$link-hover-decoration: underline !default;

svg.dot {
    display: block;
    margin: 0 auto;
    height: 30px;
    width: 25px;
}

.darr {
    display: block;
    width: 100%;
    text-align: center;
    line-height: 1;
}

.scroll-down-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: inherit;
}

.scroll-down {
    position: absolute;
    left: 50%;
    margin-left: -20px;
    width: 40px;
    height: auto;
    bottom: 35px;
    padding-left: 0;
    cursor: pointer;
    z-index: 2;
    color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.scroll-down.svg svg {
    width: 25px;
    opacity: 1;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -ms-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
}
.scroll-down.svg .stroke {
    stroke: #fff;
}
.scroll-down.svg .scroller {
    fill: #fff;
    -webkit-animation: updown 1s infinite;
    -moz-animation: updown 1s infinite;
    -o-animation: updown 1s infinite;
    animation: updown 1s infinite;
}

@-webkit-keyframes updown {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    50% {
        -webkit-transform: translate(0, 5px);
        transform: translate(0, 5px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@-moz-keyframes updown {
    0% {
        -moz-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    50% {
        -moz-transform: translate(0, 5px);
        transform: translate(0, 5px);
    }
    100% {
        -moz-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@-o-keyframes updown {
    0% {
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    50% {
        -o-transform: translate(0, 5px);
        transform: translate(0, 5px);
    }
    100% {
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}
@keyframes updown {
    0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    50% {
        -webkit-transform: translate(0, 5px);
        transform: translate(0, 5px);
    }
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

.logo__background-color {
    fill: $color-white;
    transition: fill 0.6s;
    &.alt {
        fill: $brand-tertiary;
    }
}

.nav-wrapper {
    padding-left: 20px;
    padding-right: 30px;
}
.navbar__hidden--top {
    background-color: #ffffff;
    overflow: hidden;
    color: $body-bg;
    -webkit-box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    -moz-box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    box-shadow: inset 0px -5px 22px 0px rgba(209, 209, 209, 0.23);
    a,
    a:active,
    a:visited,
    button {
        cursor: pointer;
        color: $gray-darker;
        font-size: 0.8em;
        font-family: 'AvenirLTStdBlack';
    }
    a:hover,
    button:hover {
        color: $link-hover-color;
    }
    button {
        background: none;
        border: 0;
        padding: 0;
    }
    @media (max-width: 768px) {
        a {
            font-size: 0.9em;
        }
    }
    ul {
        margin: 0 auto !important;
        padding-top: 25px !important;
        padding-bottom: 20px !important;
        padding-left: 0 !important;
        float: none !important;
        display: block !important;
        width: 100%;
        text-align: center;

        li {
            display: inline;
            cursor: pointer;
            margin-right: 20px;
            float: none;
        }
        @media (max-width: 768px) {
            li {
                margin-right: 10px;
            }
        }
    }
    @media (max-width: 768px) {
        ul {
            display: block !important;
            width: 100%;
            text-align: center;
            padding-left: 0;
            margin-left: 0;
            float: none !important;
        }
    }
}
.social-media {
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: default;
    position: relative;
    min-height: 27px;
    height: auto;
    overflow: visible;
    margin-right: 14px;
    .social-icon {
        fill: $color-white;
        transition: fill 0.6s;
        &.alt {
            fill: $brand-tertiary;
        }
    }
    #Capa_1 {
        position: relative;
        top: 0px;
        display: block;
        width: 20px;
        height: 20px;
    }
    #open-icon-text {
        display: none;
        position: absolute;
        opacity: 0.9;
        top: -10px;
        left: -1px;
        z-index: 200;
        font-size: 9px;
        font-family: 'AvenirLTStdLight';
        color: #fff;
    } //end open-icon-text
    #open-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: relative;
        flex-shrink: 0;
        order: 2;
        opacity: 0.8;
        z-index: 200;
        .social-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
        }
        &:hover {
            opacity: 0.9;
        }
    } //end open-icon-text
    #drawer {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        order: 1;
        height: 24px;
        margin-right: 10px;
        #slide {
            display: flex;
            align-items: center;
            position: relative;
            z-index: 200;
            left: 120px;
            top: 0;
            height: 24px;
            background-color: transparent;
            transition: left 0.3s;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 20px;
                width: 20px;
                line-height: 0;
            }
            &.expand {
                left: 0;
            }
            .icon {
                height: 20px;
                width: 20px;
                margin-left: 7px;
                position: relative;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                &:hover {
                    opacity: 0.8;
                }
                svg {
                    display: block;
                    width: 20px;
                    height: 20px;
                    overflow: visible;
                }
            }
            ._lg {
                width: 27px;
            }
            .svgicon {
                fill: #fff;
                &.alt {
                    fill: $brand-tertiary;
                }
            }
        }
    }
} //end social

#main {
    position: relative;
    height: 100vh;
    width: 100vw;
    .main__image--top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        background: url('./../../assets/hero__img--home.webp') no-repeat center
            center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .main__image--top--overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 300;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.5;
        pointer-events: none;
    }
    .main__navbar {
        position: fixed;
        width: 100%;
        z-index: 1000;
        background-color: transparent;
        transition: background-color 0.6s;
        /* Or border-top-color */
        /* Icon row only — do not target the dropdown link list */
        .nav-wrapper ul {
            padding: 0;
            margin-top: 25px;
            margin-bottom: 15px;
            float: right;
            display: flex;
            align-items: center;
            li {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
        .main__navbar--logo--container {
            display: inline;
            a {
                font-size: 30px;
                font-family: 'AvenirLTStdBlack';
                position: relative;
            }
            svg {
                height: 40px;
                width: auto;
                margin-top: 15px;
                margin-left: 5px;
                opacity: 0.9;
            }
        }
        .main__navbar--item--wrapper {
            position: relative;
            height: 27px;
            width: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $color-white;
            z-index: 1002;
            .main__navbar-item {
                font-size: 30px;
            }
            i {
                font-size: 30px;
            }
        }
        /* Keep the close (X) toggle visible on the white open menu */
        &.nav-is-open {
            .main__navbar--item--wrapper,
            #main__navbar--burger--wrapper {
                z-index: 1003;
            }
            .burger__bar {
                background-color: $brand-tertiary !important;
            }
        }
        /* Scrolled (white bar): keep logo / burger / social visible after open/close */
        &.alt {
            background-color: $color-white;
            box-shadow: 0px 0px 5px 0px rgba(85, 85, 85, 0.25);

            .logo__background-color {
                fill: $brand-tertiary;
            }
            /* !important: burger defaults live under #main__navbar--burger--wrapper */
            .burger__bar {
                background-color: $brand-tertiary !important;
            }
            .svgicon,
            .social-icon {
                fill: $brand-tertiary !important;
            }
            #open-icon-text {
                color: $brand-tertiary;
            }
        }
    }
    .main__masthead {
        .main__masthead--content {
            height: 100vh;
            overflow: hidden;
            .sd-container {
                position: absolute;
                bottom: 30px;
                z-index: 200;
                left: 50vw;
                opacity: 0.9;
                .scrolldown {
                    z-index: 200;
                    position: absolute;
                    bottom: 0;
                    width: 1px;
                    height: 0;
                    background-color: #fff;
                    transition: height 1.5s;
                    transition-delay: 1s;
                    &.grow {
                        height: 200px;
                    }
                }
                .dot {
                    opacity: 0;
                    z-index: 200;
                    cursor: pointer;
                    position: relative;
                    transition: opacity 0.5s;
                    transition-delay: 0.5s;
                    &.show {
                        opacity: 1;
                    }
                    &:hover {
                        filter: brightness(0.6) sepia(1) hue-rotate(300deg)
                            saturate(9);
                    }
                }
                .scroll-text {
                    position: absolute;
                    color: white;
                    z-index: 200;
                    bottom: 100px;
                    top: 70px;
                    transform: rotate(-90deg);
                    font-family: 'proxima_novablack';
                    font-size: 13px;
                    right: 2px;
                    width: 100px;
                    opacity: 0;
                    transition: opacity 0.5s;
                    transition-delay: 2.5s;
                    &.show {
                        opacity: 1;
                    }
                }
            }
        }
        .text__about--link {
            position: absolute;
            z-index: 400;
            bottom: 30px;
            left: 60px;
            color: $color-white;
            a {
                color: $color-white;
                font-size: 12px;
            }
        }
    }
    #main__navbar--burger--wrapper {
        opacity: 0.9;
        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
        min-width: 30px;
        min-height: 22px;
        position: relative;
        z-index: 1003;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:hover {
            opacity: 1;
        }
        .flip--wrapper {
            position: relative;
            height: 2px;
            width: 30px;
        }
        .burger__bar {
            height: 2px;
            background-color: $color-white;
            /* Or border-top-color */
            &.burger__bar--top {
                width: 30px;
                margin-bottom: 5px;
                -webkit-transition: 0.5s ease-in-out;
                -moz-transition: 0.5s ease-in-out;
                -o-transition: 0.5s ease-in-out;
                transition: 0.5s ease-in-out;
                &.open {
                    transform: scale(0);
                }
            }
            &.burger__bar--bottom {
                width: 30px;
                margin-top: 5px;
                -webkit-transition: 0.5s ease-in-out;
                -moz-transition: 0.5s ease-in-out;
                -o-transition: 0.5s ease-in-out;
                transition: 0.5s ease-in-out;
                &.open {
                    transform: scale(0);
                }
            }
            &.burger__bar--top--flip {
                width: 30px;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-transition: 0.5s ease-in-out;
                -moz-transition: 0.5s ease-in-out;
                -o-transition: 0.5s ease-in-out;
                transition: 0.5s ease-in-out;
                &.open {
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }
            &.burger__bar--bottom--flip {
                width: 30px;
                position: absolute;
                top: 0;
                left: 0;
                -webkit-transition: 0.5s ease-in-out;
                -moz-transition: 0.5s ease-in-out;
                -o-transition: 0.5s ease-in-out;
                transition: 0.5s ease-in-out;
                &.open {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
            }
        }
    }
}

@media (max-width: 768px) {
    #main {
        .main__image--top {
            background-attachment: initial;
        }
    }
}

h1.hero-title {
    font-size: 220px;
    font-family: 'proxima_novablack';
    line-height: 1em !important;
    letter-spacing: -3px;
}

.wrap--hero-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    .tagline {
        position: relative;
        z-index: 200;
        font-family: 'AvenirLTStdLight';
        color: white;
        font-size: 16px;
        left: 200px;
        top: 5px;
        letter-spacing: 0.1px;
        display: block;
        opacity: 0;
        transition: opacity 1s;
        transition-timing-function: ease-out;
        transition-delay: 0.5s;
        &.reveal {
            opacity: 1;
        }
    }

    .welcome-block {
        margin: 0 auto;
        position: relative;
        display: block;
        width: 850px;
        height: 150px;
        text-align: center;
        h1 {
            color: rgb(247, 247, 247);
            font-size: 180px;
            letter-spacing: -31px;
            text-shadow: -10px 1px 14px rgba(0, 0, 0, 0.26);
            line-height: 0.7em;
            font-family: 'proxima_novablack';
            opacity: 1;
            transition: opacity 0.6s;
        }
        @media (max-width: 768px) {
        }
        .alt {
            opacity: 0;
        }

        h1#firstname {
            position: relative;
            z-index: 300;
            margin-right: 20px;
            display: inline;

            span:nth-child(1) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.8s;
                opacity: 1;
                &.alter {
                    opacity: 0;
                    margin-right: -90px;
                }
            }
            span:nth-child(2) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.9s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
            span:nth-child(3) {
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 1s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
        }

        h1#lastname {
            position: relative;
            z-index: 300;
            display: inline;

            span:nth-child(1) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.6s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
            span:nth-child(2) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.7s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
            span:nth-child(3) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.8s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
            span:nth-child(4) {
                margin-right: -1px;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 0.9s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
            span:nth-child(5) {
                margin-right: 0;
                transition: opacity 1s;
                transition-timing-function: ease-out;
                transition-delay: 1s;
                opacity: 1;
                &.alter {
                    margin-right: -90px;
                    opacity: 0;
                }
            }
        }
    }
}

@media (max-width: 1080px) and (min-width: 881px) {
    .wrap--hero-copy {
        .welcome-block {
            margin: 0 auto;
            position: relative;
            display: block;
            width: 850px;
            height: 150px;
            right: 0;
        }
    }
}

@media (max-width: 900px) and (min-width: 631px) {
    .wrap--hero-copy {
        .welcome-block {
            width: 560px;
            right: 0;
            h1 {
                font-size: 150px;
                letter-spacing: -26px;
            }
            h1#firstname {
            }
            h1#lastname {
            }
        }
        .tagline {
            display: inline-block;
            margin-left: 0;
            left: 173px;
            top: -2px;
            font-size: 13px;
        }
    }
}

@media (max-width: 630px) {
    .wrap--hero-copy {
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow-x: hidden;
        /*
          * Composition is left-aligned (dan / gibas / tagline under “ibas”).
          * Box width matches the widest line so flex-centering is optically correct.
          */
        .welcome-block {
            --hero-comp-width: 327px;
            width: var(--hero-comp-width);
            height: 225px;
            flex-shrink: 0;
            margin: 0;
            left: auto;
            right: auto;
            text-align: left;
            position: relative;
            transform: scale(calc((100vw - 40px) / 327));
            transform-origin: center center;
            h1 {
                font-size: 150px;
                letter-spacing: -26px;
            }
            h1#firstname {
                display: block;
                width: 233px;
                margin: 0;
            }
            h1#lastname {
                display: block;
                position: relative;
                top: -3px;
                width: 327px;
                margin: 0;
            }
        }
        .tagline {
            display: block;
            position: absolute;
            /* Under “ibas” — after the leading “g” of gibas */
            left: 90px;
            top: auto;
            bottom: -10px;
            margin: 0;
            font-size: 13px;
            letter-spacing: 0.02em;
            white-space: nowrap;
        }
    }
}

@media (max-width: 400px) {
    .wrap--hero-copy {
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow-x: hidden;
        /*
          * Composition is left-aligned (dan / gibas / tagline under “ibas”).
          * Box width matches the widest line so flex-centering is optically correct.
          */
        .welcome-block {
            --hero-comp-width: 290px;
            width: var(--hero-comp-width);
            height: 210px;
            flex-shrink: 0;
            margin: 0;
            left: auto;
            right: auto;
            text-align: left;
            position: relative;
            transform: scale(calc((100vw - 40px) / 327));
            transform-origin: center center;
            h1 {
                font-size: 140px;
                letter-spacing: -24px;
            }
            h1#firstname {
                display: block;
                width: 220px;
                margin: 0;
            }
            h1#lastname {
                display: block;
                position: relative;
                top: -3px;
                width: 300px;
                margin: 0;
            }
        }
        .tagline {
            display: block;
            position: absolute;
            /* Under “ibas” — after the leading “g” of gibas */
            left: 80px;
            top: auto;
            bottom: -10px;
            margin: 0;
            font-size: 12px;
            letter-spacing: 0.02em;
            white-space: nowrap;
        }
    }
}

.overlay--text--wrapper {
    position: relative;
    text-align: center;
    background-color: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    text-align: center;
    height: 500px;
    z-index: 300;
    .light h1 {
        margin: 0;
        text-transform: uppercase;
        line-height: 1.9;
        color: #000;
        font-family: 'AvenirLTStdBook';
        text-transform: uppercase;
        font-size: 100px;
    }
    .light img {
        position: absolute;
        width: 100%;
        max-height: 350px;
        top: 50px;
        left: -100px;
        mix-blend-mode: lighten;
    }
    .light {
        background: #fff;
    }
}

.list-group-item:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

//BS4 override
.list-group-item,
.list-group-item.active {
    background-color: transparent;
    border: none;
    padding: 0;
}
</style>
