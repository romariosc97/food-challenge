import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Orders from '../views/Orders.vue';
import Food from '../views/Food.vue';
import Coach from '../views/Coach.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/coach',
    name: 'coach',
    component: Coach
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
