<template>
  <div class="hello">
    <img src="../../assets/logo.png" v-if="true">
     <h1 :title='"应用名称"'>应用名称</h1>
    <label :style="{margin:'8px 0',display:'inline-block'}">
      <input type="text" @input="myMsgChange" :value="myMsg" :disabled="disabled"/>
    </label>
    <div :style="{margin:'30px 0'}">
      <button @click="ansycOptions" class="btn">异步操作</button>
    </div>
    
    <ul>
      <li v-for="data in todos">
        <span class="name">{{data.name}}</span>
        <i>{{data.value}}</i>
      </li>
    </ul>
   
  </div>
</template>
<script>
import {mapState,createNamespacedHelpers} from 'vuex';
const {mapActions}=createNamespacedHelpers('indexModuel');
export default {
  name: 'index',
  data:function(){
    return {}
  },
  computed:mapState({
    myMsg:state=>{
        // var path=this.$route.path;
        return state.indexModuel.myMsg 
    },
    disabled:state=>{
      return state.indexModuel.disabled;
    },
    todos:state=>{
      return state.indexModuel.todos
    }
  }),
  methods:{
     myMsgChange: function(e){
      this.$store.commit('indexModuel/myMsgChange',e.target.value);
     },
     ...mapActions([
        'todosChange'
      ]),
     checkTxt(){

     },
     ansycOptions(){
        setTimeout(()=>{
            var v=Math.floor(Math.random()*10);
            this.todosChange([
                      {
                        name:`app${v}`,
                        value:v,
                      },
                      {
                        name:'app2',
                        value:'2'
                      }
            ])
        },1000)
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./index.scss"></style>
