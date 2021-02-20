import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Register_admin from '../views/Admin/Register.vue'
import Register_nakes from '../views/Nakes/Register.vue'
import Register_pasien from '../views/Pasien/Register.vue'

import Home_admin from '../views/Admin/Home.vue'
import Artikel_admin from '../views/Admin/Artikel.vue'
import Add_artikel from '../views/Admin/Add_artikel.vue'
import Detail_artikel from '../views/Admin/Detail_artikel.vue'
import Video_admin from '../views/Admin/Video.vue'
import Add_video from '../views/Admin/Add_video.vue'

import Home_nakes from '../views/Nakes/Home.vue'
import Add_pasien from '../views/Nakes/Add_pasien.vue'
import Pasien_nakes from '../views/Nakes/Pasien.vue'
import Detail_pasien_nakes from '../views/Nakes/Detail_pasien.vue'

import Home_pasien from '../views/Pasien/Home.vue'
import Artikel_pasien from '../views/Pasien/Artikel.vue'
import Detail_artikel_pasien from '../views/Pasien/Detail_artikel.vue'
import Konsultasi_pasien from '../views/Pasien/Konsultasi.vue'
import Detail_konsultasi from '../views/Pasien/Detail_konsultasi.vue'
import Add_konsultasi from '../views/Pasien/Add_konsultasi.vue'

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
    path: '/admin/register',
    name: 'Register_admin',
    component: Register_admin
  },
  {
    path: '/nakes/register',
    name: 'Register_nakes',
    component: Register_nakes
  },
  {
    path: '/nakes/register',
    name: 'Register_nakes',
    component: Register_nakes
  },
  {
    path: '/pasien/register',
    name: 'Register_pasien',
    component: Register_pasien
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
  {
    path: '/dokter/home',
    name: 'Home_nakes',
    component: Home_nakes
  },
  {
    path: '/dokter/add_pasien',
    name: 'Add_pasien',
    component: Add_pasien
  },
  {
    path: '/dokter/pasien',
    name: 'Pasien_nakes',
    component: Pasien_nakes
  },
  {
    path: '/dokter/detail_pasien/:id',
    name: 'Detail_pasien_nakes',
    component: Detail_pasien_nakes
  },
  {
    path: '/pasien/home',
    name: 'Home_pasien',
    component: Home_pasien
  },
  {
    path: '/pasien/list_artikel',
    name: 'Artikel_pasien',
    component: Artikel_pasien
  },
  {
    path: '/pasien/detail_artikel/:id/:title',
    name: 'Detail_artikel_pasien',
    component: Detail_artikel_pasien
  },
  {
    path: '/pasien/list_konsultasi',
    name: 'Konsultasi_pasien',
    component: Konsultasi_pasien
  },
  {
    path: '/pasien/detail_pasien/:id',
    name: 'Detail_konsultasi',
    component: Detail_konsultasi
  },
  {
    path: '/pasien/add_konsultasi',
    name: 'Add_konsultasi',
    component: Add_konsultasi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
