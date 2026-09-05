import Index from './views/Index.vue'

const PageNotFound = () => import('./views/PageNotFound.vue')
const Stack = () => import('./views/Stack.vue')
const Contact = () => import('./views/Contact.vue')
const Resume = () => import('./views/Resume.vue')
const Thanks = () => import('./views/Thanks.vue')
const ProjectOneDetails = () => import('./views/ProjectOneDetails.vue')
const ProjectTwoDetails = () => import('./views/ProjectTwoDetails.vue')
const ProjectThreeDetails = () => import('./views/ProjectThreeDetails.vue')
const ProjectFiveDetails = () => import('./views/ProjectFiveDetails.vue')

export const routes = [
    { path: '/', component: Index },
    { path: '/stack', component: Stack },
    { path: '/contact', component: Contact },
    { path: '/resume', component: Resume },
    { path: '/thanks', component: Thanks },
    { path: '/project-one-details', component: ProjectOneDetails },
    { path: '/project-two-details', component: ProjectTwoDetails },
    { path: '/project-three-details', component: ProjectThreeDetails },
    { path: '/project-five-details', component: ProjectFiveDetails },
    { path: '*', component: PageNotFound, meta: { scrollToTop: true } },
]
