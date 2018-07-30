import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history' 
})

// Router.beforeEach((to,     from, next) => {
//   if (to.path === '/login') {
//     next()
//     return
//   }

//   next({path: '/login'})
// })

export default Router
