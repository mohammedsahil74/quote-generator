import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import QuoteGenerator from '../views/QuoteGenerator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: QuoteGenerator
    }
  ]
})

export default router