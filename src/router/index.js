import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myPageInfo',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue')
  }, 
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
  },
  {
    path: '/boarddetail',
    name: 'BoardDetail',
    component: () => import('../views/BoardClick.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
