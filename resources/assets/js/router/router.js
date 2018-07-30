import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/login',
    name: 'login',
    component: () => import('./views/Login')
  },
  { 
    path: '/forum',
    name: 'forum',
    component: () => import('./views/Forum')
  },
  { 
    path: '/question',
    name: 'question',
    component: () => import('./views/Question')
  },
  { 
    path: '/category',
    name: 'category',
    component: () => import('./views/Category')
  }
]

const router = new VueRouter ({
  routes
})