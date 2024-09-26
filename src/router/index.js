import { createRouter, createWebHistory } from '@ionic/vue-router';
import Memo from '../pages/Memo.vue'
const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component:Memo
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
