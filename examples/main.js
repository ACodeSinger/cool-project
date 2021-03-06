import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import MessageBox from '../packages/index';

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$alert.config = {
  // confirmButtonText: '好的！',
  // confirmButtonTextColor: 'green',
};
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$confirm.config = {};

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
