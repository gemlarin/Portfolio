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
        <!-- <project-five></project-five> -->

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
// import ProjectFive from './../components/main/projects/ProjectFive'
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
        // ProjectFive,
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
}

#page-wrap .preview--zoom .preview--img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.4s ease;
    transform-origin: center center;
}

#page-wrap .preview--zoom:hover .preview--img {
    transform: scale(1.03);
}
</style>
