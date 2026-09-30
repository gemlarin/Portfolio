<template>
    <div id="page-wrap">
        <div id="to-top"></div>
        <Hero></Hero>
        <introduction></introduction>
        <portfolio></portfolio>
        <div id="portfolio"></div>
        <project-one></project-one>
        <project-two></project-two>
        <project-three></project-three>
        <project-four></project-four>
        <project-five></project-five>
        <!-- <project-six></project-six> -->

        <foot></foot>
    </div>
</template>

<script>
import Hero from './../components/main/Hero'
import Introduction from './../components/main/Introduction'
import Portfolio from './../components/main/Portfolio'
import ProjectOne from './../components/main/projects/ProjectOne'
import ProjectTwo from './../components/main/projects/ProjectTwo'
import ProjectThree from './../components/main/projects/ProjectThree'
import ProjectFour from './../components/main/projects/ProjectFour'
import ProjectFive from './../components/main/projects/ProjectFive'
// import ProjectSix from './../components/main/projects/ProjectSix'
import Foot from './../components/main/Footer'
export default {
    name: 'Index',
    data: function () {
        return {
            TIMEOUT: 1,
        }
    },
    components: {
        Hero,
        Introduction,
        Portfolio,
        ProjectOne,
        ProjectTwo,
        ProjectThree,
        ProjectFour,
        ProjectFive,
        // ProjectSix,
        Foot,
    },
    computed: {},
    mounted() {
        this.jumpToHash()
    },
    beforeRouteLeave(to, from, next) {
        try {
            sessionStorage.setItem('portfolioScrollY', String(window.scrollY))
        } catch (e) {
            /* ignore */
        }
        next()
    },
    methods: {
        jumpToHash() {
            const hash = this.$route.hash
            this.$nextTick(() => {
                if (hash) {
                    const el = document.querySelector(hash)
                    if (el) {
                        const top =
                            el.getBoundingClientRect().top + window.pageYOffset - 40
                        window.scrollTo(0, top)
                    }
                } else {
                    try {
                        const saved = sessionStorage.getItem('portfolioScrollY')
                        if (saved != null) {
                            window.scrollTo(0, Number(saved))
                            sessionStorage.removeItem('portfolioScrollY')
                        }
                    } catch (e) {
                        /* ignore */
                    }
                }
                // Instant scroll skips ScrollReveal's scroll listener — resync so
                // in-view project images aren't left at opacity 0.
                this.$nextTick(() => {
                    if (this.$sr && typeof this.$sr.sync === 'function') {
                        this.$sr.sync()
                    }
                })
            })
        },
    },
}
</script>

<style>
#page-wrap {
}

/* Selected works only — zoom on the img; ScrollReveal owns the wrapper transform */
#page-wrap .preview--zoom {
    display: block;
    max-width: 100%;
    border: 0;
    background: transparent;
    padding: 0;
    width: 100%;
    cursor: zoom-in;
    text-align: left;
}

#page-wrap .preview--zoom .preview--img,
#page-wrap .preview--zoom .detail-image__img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.4s ease;
    transform-origin: center center;
}

#page-wrap .preview--zoom:hover .preview--img,
#page-wrap .preview--zoom:hover .detail-image__img.is-loaded {
    transform: scale(1.03);
}

.preview--zoom:focus-visible .preview--img,
.preview--zoom:focus-visible .detail-image__img {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
}

/* Text CTAs that must stay in Tab order (Safari skips <a> by default) */
#page-wrap button.cta-link {
    background: none;
    border: 0;
    font: inherit;
    cursor: pointer;
    color: var(--color-accent);
    font-size: var(--font-button);
    margin-top: 15px;
    margin-right: 12px;
    display: inline-flex;
    align-items: center;
    border-top: 3px solid var(--color-accent);
    border-left: 3px solid var(--color-accent);
    padding: 5px 12px;
    text-align: left;
}

#page-wrap button.cta-link:hover {
    padding-left: 20px;
}

/* Tech logos: name on hover, never a pointer cursor */
#page-wrap .technology img {
    cursor: default;
}

#page-wrap .technology .tech-tip {
    position: relative;
    display: inline-block;
    cursor: default;
    vertical-align: middle;
}

#page-wrap .technology .tech-tip::after {
    content: attr(data-tip);
    position: absolute;
    left: 50%;
    bottom: calc(100% + 6px);
    transform: translateX(-50%);
    padding: 4px 8px;
    white-space: nowrap;
    font-size: var(--font-caption);
    font-family: 'AvenirLTStdBook', sans-serif;
    line-height: 1.2;
    color: var(--color-background);
    background: var(--color-ink);
    border-radius: 3px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 5;
}

#page-wrap .technology .tech-tip:hover::after,
#page-wrap .technology .tech-tip:focus-within::after {
    opacity: 1;
}
</style>
