import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

import Home_admin from '../views/Admin/Home.vue'
import Artikel_admin from '../views/Admin/Artikel.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/home',
    name: 'Home_admin',
    component: Home_admin
  },
  {
    path: '/admin/list_artikel',
    name: 'Artikel_admin',
    component: Artikel_admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
