import navList from '../../router/config.js';
//导航菜单
let namespaced = true;
var nvaModuel = {
  namespaced,
  state: {
    mentList:navList.map((ele)=>{
    	const {meta,path,name,checked}=ele;
    	return {
    		 	meta,
		      	path,
		      	name,
		      	checked
    	}
    })
  },
  mutations:{
  	  getRouter(state, path) {
		    state.mentList.map((ele) => {
		      if (ele.path === path) {
		        ele.checked = true;
		      } else {
		        ele.checked = false;
		      }
		    });
  	}
  }
}
export default nvaModuel;