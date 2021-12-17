// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '@/components/Post/PostDetail'
import PostWrite from '@/components/Post/PostWrite'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/loginpage',
    component: () => import('../views/Member/Login.vue')
  }, 
  { 
    path: '/board',
    component: () => import('../views/Board/Board.vue')
  },
  {
    path: '/boardwrite',
    component: () => import('../views/Post/PostWriter.vue')
  },
  {
    path: '/postdetail',
    component: () => import('../views/Post/BoardClick.vue')
  },
  {
    path: '/boardwrite/:valueIndex',
    component: PostWrite
  },
  {
    path: '/postdetail/:valueIndex',
    component: PostDetail
  },
  {
    path: '/membertable',
    component: () => import('../views/Member/Member.vue')
  },
  {
    path: '/memberdetail',
    component: () => import('../views/Member/MemberInfo.vue')
  },
  {
    path: '/findid',
    component: () => import('../views/Member/LoginId.vue')
  },
  {
    path: '/findpassword',
    component: () => import('../views/Member/LoginPassword.vue')
  },
  {
    path: '/signuppage',
    component: () => import('../views/Member/Signup.vue')
  },
  {
    path: '/contactuspage',
    name: 'Contactus',
    component: () => import('../views/Member/Contactus.vue')
  },
  {
    path: '/memberupdatepage',
    component: () => import('../views/Member/MemberUpdate.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
