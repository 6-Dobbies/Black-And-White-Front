import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue')
  },
  {
    path: '/boardwrite',
    name: 'BoardWriter',
    component: () => import('../views/BoardWriter.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
