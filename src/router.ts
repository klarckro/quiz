import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/quiz',
      component: () => import('@/views/Quiz.vue'),
    },
    {
      path: '/start',
      component: () => import('@/views/Start.vue'),
    },
    {
      path: '/teams',
      component: () => import('@/views/Teams.vue'),
    },
    {
      path: '/final',
      component: () => import('@/views/Final.vue'),
    }
  ],
})
