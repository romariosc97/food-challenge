import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import TopBarDetail from '../../src/components/dishes/TopBarDetail.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Prueba unitaria de: Me gusta',
        component: TopBarDetail,
    }
  ]
});

const store = createStore({
  state() {
    return {
        like: {}
    }
  },
  mutations: {
    updateLike(state, payload){
        state.like = {...state.like, ...payload};
    }
  }
});

const dish = {
    id: 2,
    title: "Alitas de pollo"
};

test('Vuex: Marcar como favorito un plato', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(TopBarDetail, {
        props: {
            data: dish
        },
        global: {
            plugins: [store, router]
        }
    });
  
    await wrapper.find('img[alt="Like"]').trigger('click');
  
    expect(store.state.like).toHaveProperty((dish.id).toString());
});