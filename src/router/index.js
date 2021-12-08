import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      {
        path: '/cards',
        name: 'Cards',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cards.vue')
      },
      {
        path: '/tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tree.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
