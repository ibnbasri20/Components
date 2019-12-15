import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Layout from './layouts/main.vue'
import Siswa from './views/Siswa.vue'
import Siswa_Tambah from './views/Siswa/Tambah.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children:
    [
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/siswa',
        name:'Siswa',
        component:Siswa
      },
      {
        path:'/siswa/tambah',
        name:'tambah_siswa',
        component:Siswa_Tambah
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
