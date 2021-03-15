import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Index.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../components/layout/Index.vue'),
    children: [
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    store.state.userInfo.id
      ? next()
      : next('/login')
  } else {
    next()
  }
})
export default router
