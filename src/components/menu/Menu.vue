<template>
  <div class="menu">
    <ul >
        <li v-for="i in menuList" :class="i.checked?'z-ck':null">
            <router-link :to="i.path" @click="">{{i.name}}</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: 'Menus',
  computed:mapState({
    menuList:state=>{
        return state.nvaModuel.mentList 
    }
  })
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../sass/color.scss';
ul {
  
  list-style-type: none;
  padding: 0;
  overflow:hidden;
}
.menu{
  width:100%;
  border-right:#ededed solid 1px;
  padding-bottom:5px;
  height:100%;
  text-align:center;
  background:#35495e;
}
li {
  // float:left;
  color:#fff;
  a{
    display:inline-block;
    width:100%;
    padding:10px 0;
    cursor:pointer;
    text-decoration:none;
    color:#fff;
    transition:all .3s;
    &:hover{
      color:$green;
      background:$gray;
      // border-radius:6px;
    }
  }
  &.z-ck{
    >a{
      color:$green;
    }
  }
}
</style>
