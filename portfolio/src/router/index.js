import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EcarVTCView from '../views/EcarVTCView.vue'
import AnimationsView from '../views/AnimationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/E-carVTC',
      name: 'E-carVTC ',
      component: EcarVTCView
    },
    {
      path: '/Animations',
      name: 'Animations ',
      component: AnimationsView
    },

  ]
})

export default router
