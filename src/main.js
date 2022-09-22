import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  Vuex,
  render: (h) => h(App),
}).$mount('#app');
