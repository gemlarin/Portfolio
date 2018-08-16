import PageNotFound from './views/404.vue'
import Index from './views/Index.vue'


export const routes = [
    { path: '*/index.html', component: Index},
    { path: '*', component: PageNotFound, meta: { scrollToTop: true }},
    { path: '/', component: Index}
];