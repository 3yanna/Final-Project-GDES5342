import { createRouter, createWebHistory } from 'vue-router'

import Overview from '@/views/Overview.vue'
import Experience from '@/views/Experience.vue'
import Portfolio from '@/views/Portfolio.vue'
import Skills from '@/views/Skills.vue'
import Extracurriculars from '@/views/Extracurriculars.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'overview',
            component: Overview,
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills,
        },
        {
            path: '/extracurriculars',
            name: 'extracurriculars',
            component: Extracurriculars,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        }
    ]
})

export default router
