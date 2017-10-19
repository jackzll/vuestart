// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import comp from './components/compoment';
import store from './store/store';
Vue.config.productionTip = false


/* eslint-disable no-new */

var app1=new Vue({
  el: '#app',
  router,
  store,
  template: "<App/>",
  components: {App}
})