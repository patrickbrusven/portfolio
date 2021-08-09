import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#top',
    name: 'Top',
    component: Home
  },
  {
    path: '/#projects',
    name: 'Projects',
    component: Home
  },
  {
    path: '/#contact',
    name: 'Contact',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {

      const element = document.getElementById(to.hash.replace(/#/, ''))
      element.scrollIntoView({ behavior: "smooth",
                                block: 'start'});
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

export default router
