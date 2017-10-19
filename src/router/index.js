import Vue from 'vue';
import Router from 'vue-router';
import routerList from './config.js';
import store from '../store/store';



Vue.use(Router)
var router=new Router({
  routes: [...routerList]
})
//钩子，可以检测是否已经登录；
router.beforeEach((to, from, next) => {
      if(to.meta.needRequest){
          console.log('to',to);
          next();
          // next(false);
      }else{
         next();
      }
     
  }
);
router.afterEach((to,from)=>{
  // console.log(to)
  store.commit("nvaModuel/getRouter",to.path);
})
export default router;