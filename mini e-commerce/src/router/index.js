import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/categories',
        name: 'categories',
        component: () => import(/* webpackChunkName: "about" */ "../views/CategoriesView")
    },

    {
        path: '/categories/:name',
        name: 'product_category',
        component: () => import(/* webpackChunkName: "about" */ "../views/ProductsView")
    },

    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ "../views/SearchedProducts")
    },

    {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "about" */ "../views/ProductView")
    },

    {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ "../views/CartView")
    },

    {
        path: '/:pathMatch(.*)*', 
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ "../components/404")
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

  export default router