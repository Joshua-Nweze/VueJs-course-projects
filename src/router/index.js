import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home Page - Recepe Finder'
        }
    },

    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView"),
        meta: {
            title: 'About Page - Recepe Finder'
        }
    },

    {
        path: '/:pathMatch(.*)*', 
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ "../components/404"),
        meta: {
          title: '404 Page - Recepe Finder'
        }
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

  export default router