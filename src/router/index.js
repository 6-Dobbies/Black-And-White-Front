import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoardDetail from '@/components/BoardDetail'
import BoardWrite from '@/components/BoardWrite'
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
    path: '/loginpage',
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
    name: 'BoardClick',
    component: () => import('../views/BoardClick.vue')
  },
  {
    path: '/boardwrite/:valueIndex',
    name: 'BoardWrite',
    component: BoardWrite
  },
  {
    path: '/boarddetail/:valueIndex',
    name: 'BoardDetail',
    component: BoardDetail
  },
  {
    path: '/membertable',
    component: () => import('../views/Member.vue')
  },
  {
    path: '/findid',
    name: 'LoginId',
    component: () => import('../views/LoginId.vue')
  },
  {
    path: '/findpassword',
    name: 'LoginPassword',
    component: () => import('../views/LoginPassword.vue')
  },
  {
    path: '/signuppage',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/contactuspage',
    name: 'Contactus',
    component: () => import('../views/Contactus.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
