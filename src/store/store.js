import Vue from 'vue';
import Vuex from 'vuex';
import nvaModuel from './moduels/nav';
import indexModuel from './moduels/index';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
	nvaModuel,
	indexModuel
  }
});

export default store;
