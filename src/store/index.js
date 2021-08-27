import { createStore } from 'vuex';
export default createStore({
    state:{
        message: "Bandidox"
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