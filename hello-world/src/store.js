import Vue from 'vue';
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        data: '',
        contacts: []
    },
    mutations: {
        pushToken(state, token) {
            state.token = token 
        },
        pushData(state, data) {
            state.data = data
        },
        deleteToken(state) {
            state.token = ''
        },
        removeContactList(state) {
            state.contacts = [];
            state.data = ''
        },
        pushContacts(state, contacts) {
            state.contacts = contacts
        },
        addNewContact(state, contact) {
            state.contacts.push(contact)
        },
    },
    actions: {
        getToken(context, token) {
            context.commit("pushToken", token)
        },
        getData(context, data) {
            context.commit("pushData", data)
        },
        DELETE_TOKEN(context) {
            context.commit("deleteToken")
        },
        REMOVE_CONTACTLIST(context) {
            context.commit('removeContactList')
        },
        storeContacts(context, contacts) {
            context.commit('pushContacts', contacts)
        },
        pushNewContacts(context, contact) {
            context.commit('addNewContact', contact)
        }
    },
    getters: {

    },
    plugins: [createPersistedState()]
})