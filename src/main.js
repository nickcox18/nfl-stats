import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: h => h(App),
}).$mount('#app');
