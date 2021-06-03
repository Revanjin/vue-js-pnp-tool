import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/bosses',
    name: 'Bosses',
    component: () => import('../views/Bosses.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
