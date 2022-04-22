import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'Index',
        component: () => import( '../views/Index.vue')
      },
      {
        path: '/ren',
        name: 'Ren',
        component: () => import( '../views/Ren.vue')
      },
      {
        path: '/cont',
        name: 'Cont',
        component: () => import( '../views/Cont.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import( '../views/My.vue')
      },
    ]
  },
  {
    path: '/xinren',
    name: 'Xinren',
    component: () => import( '../views/Xinren.vue')
  },
  {
    path: '/qianyue',
    name: 'Qianyue',
    component: () => import( '../views/Qianyue.vue')
  },
  {
    path: '/fuwu',
    name: 'Fuwu',
    component: () => import( '../views/Fuwu.vue')
  },
  {
    path: '/guanlian',
    name: 'Guanlian',
    component: () => import( '../views/Guanlian.vue')
  },
  {
    path: '/tuan',
    name: 'Tuan',
    component: () => import( '../views/Tuan.vue')
  },
  {
    path: '/shezhi',
    name: 'Shezhi',
    component: () => import( '../views/Shezhi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
