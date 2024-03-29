import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'
import PageNotFound from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/Projects',
      name: 'Projects ',
      component: ProjectsView
    },
    {
      path: '/Contact',
      name: 'Contact ',
      component: ContactView
    },
    {
      path: '/:pathMatch(.)',
      name: '404',
      component: PageNotFound
    }

  ]
})

export default router
