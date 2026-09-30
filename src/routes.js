import Index from './views/Index.vue'

const PageNotFound = () => import('./views/PageNotFound.vue')
const Stack = () => import('./views/Stack.vue')
const Contact = () => import('./views/Contact.vue')
const Resume = () => import('./views/Resume.vue')
const Blog = () => import('./views/Blog.vue')
const BlogPost = () => import('./views/BlogPost.vue')
const Thanks = () => import('./views/Thanks.vue')
const ProjectOneDetails = () => import('./views/ProjectOneDetails.vue')
const ProjectTwoDetails = () => import('./views/ProjectTwoDetails.vue')
const ProjectThreeDetails = () => import('./views/ProjectThreeDetails.vue')
const ProjectFourDetails = () => import('./views/ProjectFourDetails.vue')
const ProjectFiveDetails = () => import('./views/ProjectFiveDetails.vue')
const ProjectSixDetails = () => import('./views/ProjectSixDetails.vue')

export const routes = [
    { path: '/', component: Index },
    { path: '/stack', component: Stack },
    { path: '/contact', component: Contact },
    { path: '/resume', component: Resume },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogPost },
    { path: '/thanks', component: Thanks },
    { path: '/project-one-details', component: ProjectOneDetails },
    { path: '/project-two-details', component: ProjectTwoDetails },
    { path: '/project-three-details', component: ProjectThreeDetails },
    { path: '/project-four-details', component: ProjectFourDetails },
    { path: '/project-five-details', component: ProjectFiveDetails },
    { path: '/project-six-details', component: ProjectSixDetails },
    { path: '*', component: PageNotFound, meta: { scrollToTop: true } },
]
