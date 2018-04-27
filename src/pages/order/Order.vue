<template>
  <div class="order">
          <form> 
                <div class="row">
                    <Btn-default text="使用.native绑定原生click" @click.native="btnMethod"></Btn-default>
                </div>
                <div class="row">
                      使用.sync：<Text-input :value.sync="descTxt" placeholder="请输入使用说明"></Text-input>
                </div>
                <div class="row">
                  我已阅读并同意该协议<CheckBox v-model="isAggre" value="aggren"></CheckBox>
                </div>
          </form>
  </div>


</template>
<script>
export default {
  name: 'Order',
  props:[],
  data:function(){
    return{
      descTxt:"",
      radioValue:'1',
      isAggre:false
    }
  },
  methods:{
    btnMethod:function(){
      alert('原生点击事件');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./order.scss" scoped lang="scss"></style>
