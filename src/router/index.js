import { createRouter, createWebHistory } from 'vue-router';
import Today from '../views/Today.vue';
import Orders from '../views/Orders.vue';
import Food from '../views/Food.vue';
import Coach from '../views/Coach.vue';
import Dishes from '../views/Dishes.vue';
import DishDetail from '../views/DishDetail.vue';
import UnsupportedDevice from '../views/UnsupportedDevice.vue';

const routes = [
  {
    path: '/today',
    name: 'Today',
    component: Today
  },
  {
    path: '/',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/dishes',
    name: 'Dishes',
    component: Dishes
  },
  {
    path: '/dish/:id',
    name: 'Dish detail',
    component: DishDetail
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/coach',
    name: 'Coach',
    component: Coach
  },
  {
    path: '/unsupported-device',
    name: 'Unsupported device',
    component: UnsupportedDevice
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
