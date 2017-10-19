
//首页
let namespaced = true;
var indexModuel = {
  namespaced,
  state: {
    myMsg: 'Welcome to Your Vue.js App1',
    disabled: false,
    todos: [
      { name: 'app', value: '1' }
    ]
  },
  mutations: {
    myMsgChange(state, value) {
      console.log(state, value);
      state.myMsg = value;
    },
    todosChange(state,lists){
      state.todos=lists;
    }
  },
  actions:{
      todosChange(context,lists){
          context.commit('todosChange',lists);
      }
  }
}

export default indexModuel;