import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/Index.vue')
  },
  {
    path: '/layout',
    component: () => import('../components/layout/Index.vue'),
    children: [
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
