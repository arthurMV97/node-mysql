import Vue from 'vue';
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        pushToken(state, token) {
            state.token = token 
        },
        deleteToken(state) {
            state.token = ''
        }
    },
    actions: {
        getToken(context, token) {
            context.commit("pushToken", token)
        },
        DELETE_TOKEN(context) {
            context.commit("deleteToken")
        }
    },
    getters: {

    },
    plugins: [createPersistedState()]
})