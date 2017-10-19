import Vue from 'vue';
// import MenuB from './menu/Menu';
// Vue.component('Menu', {
// 	props:['menus'],
//   	template:'<MenuB :menus="menus"/>',
//   	components:{MenuB},
  
// });
Vue.component('Text-input', {
    props:['value'],
    template:'<input type="text" @input="ValueChange" :value="value"/>',
    methods:{
        ValueChange(e){
        	var v=e.target.value;
          this.$emit('update:value',v);
        }
    }

});
Vue.component('Btn-default', {
    props:['txt'],
    template:'<div class="btn">{{txt}}</div>'
});
Vue.component('RadioGroup',{
	model:{
		// props:'value',
		event:'change'
	},
    props:{
    	value:String,
    	name:String,
    	label:String,
    	checked:Boolean,
    	options:Array,
    },
    methods:{
    	radioChange:function(v){
    		this.$emit('change',v);
    	},
    },
    template:'<div class="radioGroup"><label v-for="i in options"><input type="radio" :name="name" :value="i.value" :checked="value===i.value?true:false" @change="()=>{radioChange(i.value)}"/>{{i.label}}</label></div>'
})
Vue.component('CheckBox',{
	model:{
		prop:'checked',
		event:'change'
	},
    props:{
    	value:String,
    	label:String,
    	checked:Boolean,
    },
    methods:{
    	onChange:function(e){
    		this.$emit('change',e.target.checked);
    	}
    },
    template:'<label><input type="checkbox" :value="value" :checked="checked" @change="onChange"/></label>'
})

Vue.component('Select',{
	// model:{
	// 	prop:'checked',
	// 	event:'change'
	// },
    // props:{
    // 	value:String,
    // 	label:String,
    // 	checked:Boolean,
    // },
    methods:{
    	// onChange:function(e){
    	// 	this.$emit('change',e.target.checked);
    	// }
    },
    template:'<select><slot></slot></select>'
})


Vue.component('Form',{
	// model:{
	// 	prop:'checked',
	// 	event:'change'
	// },
    // props:{
    // 	value:String,
    // 	label:String,
    // 	checked:Boolean,
    // },
    methods:{
    	// onChange:function(e){
    	// 	this.$emit('change',e.target.checked);
    	// }
    },
    template:'<Form><slot></slot></Form>'
})