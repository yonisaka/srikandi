import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Register_nakes from '../views/Nakes/Register.vue'

import Home_admin from '../views/Admin/Home.vue'
import Artikel_admin from '../views/Admin/Artikel.vue'
import Add_artikel from '../views/Admin/Add_artikel.vue'
import Detail_artikel from '../views/Admin/Detail_artikel.vue'
import Video_admin from '../views/Admin/Video.vue'
import Add_video from '../views/Admin/Add_video.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/nakes/register',
    name: 'Register_nakes',
    component: Register_nakes
  },
  {
    path: '/admin/home',
    name: 'Home_admin',
    component: Home_admin
  },
  {
    path: '/admin/add_video',
    name: 'Add_video',
    component: Add_video
  },
  {
    path: '/admin/list_video',
    name: 'Video_admin',
    component: Video_admin
  },
  {
    path: '/admin/add_artikel',
    name: 'Add_artikel',
    component: Add_artikel
  },
  {
    path: '/admin/list_artikel',
    name: 'Artikel_admin',
    component: Artikel_admin
  },
  {
    path: '/admin/detail_artikel/:id/:title',
    name: 'Detail_artikel',
    component: Detail_artikel
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
