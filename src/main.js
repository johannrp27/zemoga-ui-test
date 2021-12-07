import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import 'bootstrap/dist/js/bootstrap.bundle';
import './scss/custom.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
