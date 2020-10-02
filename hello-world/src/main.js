import Vue from 'vue'
import App from './App.vue'
import routes from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'es6-promise/auto'
import store from './store'
import Vuelidate from 'vuelidate'





const router = new VueRouter({routes}); 

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && store.state.token.length > 0) {
      next()

    } else if (to.matched.some(record => record.meta.requiresAuth) && store.state.token.length === 0) {
      next({path: "/"})
    
  } else {
    next()
  }
})



Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
