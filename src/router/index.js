import { createRouter, createWebHistory } from 'vue-router'
import styleView from '../Views/style-guide.vue'
import homeView from '../Views/homeView.vue'
import mentionslegalesView from '../Views/mentionslegalesView.vue'
import artisteView from '../Views/artisteView.vue' 
import concertView from '../Views/concertView.vue' 
import contactView from '../Views/contactView.vue' 
import festivalView from '../Views/festivalView.vue' 
import lesartistesView from '../Views/lesartistesView.vue' 
import programmeView from '../Views/programmeView.vue' 
import newsletterpopupView from '../Views/newsletter_popup.vue' 
import errorView from '../Views/errorView.vue' 
import loginView from '../Views/loginView.vue' 
import adminView from '../Views/adminView.vue' 

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/style-guide', name: 'styleView', component: styleView},
        {path: '/mentionslegales', name: 'mentionslegalesView', component: mentionslegalesView},
        {path: '/artiste/:id', name: 'artisteView', component: artisteView},
        {path: '/concert/:id', name: 'concertView', component: concertView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/festival', name: 'festivalView', component: festivalView},
        {path: '/lesartistes', name: 'lesartistesView', component: lesartistesView},
        {path: '/programmation', name: 'programmeView', component: programmeView},
        {path: '/newsletterpopup', name: 'newsletterpopupView', component: newsletterpopupView},
        {path: '/login', name: 'loginView', component: loginView},
        {path: '/admin', name: 'adminView', component: adminView},
        { path: '/:pathMatch(.*)*', name: 'errorView', component: errorView },
    ]
})

export default router