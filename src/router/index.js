import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/saved',
    name: 'SavedMovies',
    component: () => import('../views/SavedMoviesView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
