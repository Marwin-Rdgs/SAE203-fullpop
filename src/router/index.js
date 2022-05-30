import { createRouter, createWebHistory } from 'vue-router'
import componentsView from '../Views/componentsView.vue'
import homeView from '../Views/homeView.vue'
import mentionslegalesView from '../Views/mentionslegalesView.vue'
import artisteView from '../Views/artisteView.vue' 
import concertView from '../Views/concertView.vue' 
import contactView from '../Views/contactView.vue' 
import festivalView from '../Views/festivalView.vue' 
import lesartistesView from '../Views/lesartistesView.vue' 
import programmeView from '../Views/programmeView.vue' 
import newsletterpopupView from '../Views/newsletter_popup.vue' 

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/components', name: 'componentsView', component: componentsView},
        {path: '/mentionslegales', name: 'mentionslegalesView', component: mentionslegalesView},
        {path: '/artiste', name: 'artisteView', component: artisteView},
        {path: '/concert', name: 'concertView', component: concertView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/festival', name: 'festivalView', component: festivalView},
        {path: '/lesartistes', name: 'lesartistesView', component: lesartistesView},
        {path: '/programmation', name: 'programmeView', component: programmeView},
        {path: '/newsletterpopup', name: 'newsletterpopupView', component: newsletterpopupView},
    ]
})

export default router