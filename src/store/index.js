import { createStore } from 'vuex';
export default createStore({
    state:{
        progressBar: {
            value: 0,
            percent: 0,
            max: 22000
        },
        order: {
            currentDay: {text: "", number: 0},
            currentFood: 2,
        },
        food: []
    },
    getters:{

    },
    mutations: {
        createOrderFood(state, payload){
            state.order[state.order.currentDay.number] = payload;
        },
        updateOrderDay(state, payload){
            state.order = payload;
        },
        updateDishes(state, payload){
            state.order[state.order.currentDay.number][state.order.currentFood].dishes = payload;
        },
        updateProgressBar(state, payload){
            state.progressBar = payload;
        },
        updateFood(state, payload){
            state.food = payload;
        },
    },
    actions:{

    }
})