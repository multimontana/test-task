import Vue from 'vue'
import App from './App.vue'
import router from "./routing/router";
import store from "./store";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
