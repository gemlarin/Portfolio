import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/theme.css'
import Meta from 'vue-meta'
import './vendors/magnific-popup/magnific-popup.css'
import './vendors/magnific-popup/magnific-popup'
import VueScrollReveal from 'vue-scroll-reveal'

// Magnific defaults to absolute + document-height overlay on mobile (probablyMobile),
// which makes the zoom backdrop scroll for the full page. Keep it viewport-locked.
$.magnificPopup.defaults.fixedContentPos = true
$.magnificPopup.defaults.fixedBgPos = true
$.magnificPopup.defaults.overflowY = 'hidden'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: -40,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
})

const isCoarsePointer =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            const samePage = from.path === to.path
            if (samePage) {
                // Detail "more" links and other in-page anchors
                const el = document.querySelector(to.hash)
                if (!el) return false

                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur()
                }

                if (isCoarsePointer) {
                    // Phones/tablets: instant window scroll (body + smooth often fails)
                    const top =
                        el.getBoundingClientRect().top + window.pageYOffset - 40
                    window.scrollTo({ top, left: 0, behavior: 'auto' })
                } else {
                    VueScrollTo.scrollTo(to.hash, 600, { offset: -40 })
                }
                return false
            }
            // Returning to a portfolio item from another route — land instantly
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        selector: to.hash,
                        offset: { x: 0, y: 40 },
                    })
                }, 50)
            })
        }
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    },
    base: '/',
    mode: 'history',
})

// Keep cover-letter targeting (?for=nex) on every in-app URL for this page load.
let stickyFor = null

router.beforeEach((to, from, next) => {
    const incoming = to.query.for || from.query.for
    if (incoming) {
        stickyFor = String(incoming).trim().toLowerCase()
    }

    if (stickyFor && String(to.query.for || '').toLowerCase() !== stickyFor) {
        next({
            path: to.path,
            hash: to.hash,
            params: to.params,
            query: { ...to.query, for: stickyFor },
            replace: true,
        })
        return
    }
    next()
})

Vue.use(Meta)
Vue.use(VueRouter)
Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal',
    duration: 1000,
    origin: 'left',
    scale: 0,
    distance: '50px',
    mobile: false,
})

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
})
