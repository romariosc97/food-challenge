import { createStore } from 'vuex';
export default createStore({
    state:{
        progressBar: {
            value: "11000",
            percent: "50"
        }
    },
    getters:{

    },
    mutations: {
        updateMessage(state, payload){
            state.message = payload;
        },
    },
    actions:{

    }
})