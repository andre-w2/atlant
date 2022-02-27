import { createRouter, createWebHistory } from 'vue-router'
import Home from  '../views/Home.vue'
import ProductView from  '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product_view',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
