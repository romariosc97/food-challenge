import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Calendar from '../../src/components/orders/Calendar.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Prueba unitaria de: Cambio de día de hoy a mañana',
        component: Calendar,
    }
  ]
});

const store = createStore({
  state() {
    return {
      order: {
        currentDay: {text: "", number: 0},
        currentFood: 2
      },
      food: []
    }
  },
  mutations: {
    updateOrderDay(state, payload){
      state.order = payload;
    },
    createOrderFood(state, payload){
      state.order[state.order.currentDay.number] = payload;
    }
  }
});

test('Vuex: Cambiar el día del pedido al siguiente', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(Calendar, {
        global: {
            plugins: [store, router]
        }
    });

    let date = new Date();
    date.setDate(date.getDate() + 1);
  
    await wrapper.findAll('.card')[1].trigger('click');
  
    expect(store.state.order.currentDay.number).toBe(date.getDate());
});