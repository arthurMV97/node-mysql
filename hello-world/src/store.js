import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        pushToken(state, token) {
            state.token = token 
        }
    },
    actions: {
        getToken(context, token) {
            context.commit("pushToken", token)
        }
    },
    getters: {

    }
})