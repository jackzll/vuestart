<template>
  <div id="app">
    <div class="left-nav">
     <Menus></Menus>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Menus from './components/menu/Menu.vue';
// import {mapState} from 'vuex';
export default {
  name: 'app',
  components:{
    Menus
  }
}
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>
