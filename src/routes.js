import PageNotFound from './views/PageNotFound.vue'
import Index from './views/Index.vue'
import Stack from './views/Stack.vue'
import Contact from './views/Contact.vue'
import Resume from './views/Resume.vue'
import Thanks from './views/Thanks.vue'


export const routes = [
    { path: '*/index.html', component: Index},
    { path: '*', component: PageNotFound, meta: { scrollToTop: true }},
    { path: '/', component: Index},
    { path: '/stack', component: Stack},
    { path: '/contact', component: Contact},
    { path: '/resume', component: Resume},
    { path: '/thanks', component: Thanks}  
];