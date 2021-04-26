import Vue from "vue";
import Vuex from "vuex";
//导入外部模块组件
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
//  1.安装插件,利用vue的插件机制，使用Vue.use(vuex)时，会调用vuex的install方法，装载vuex
Vue.use(Vuex);

//  2.创建对象
const store = new Vuex.Store({
  // tate是存储的单一状态，是存储的基本数据。
  state: {
    counter: 1000,
    students: [
      {
        id: 110,
        name: "孙悟空",
        age: 18
      },
      {
        id: 111,
        name: "猪八戒",
        age: 24
      },
      {
        id: 112,
        name: "沙和尚",
        age: 32
      },
      {
        id: 113,
        name: "唐僧",
        age: 45
      }
    ]
  },
/*
    getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，
    getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。
*/
  getters,
  // mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）
  mutations,
  // actions像一个装饰器，提交mutation，而不是直接变更状态。（actions可以包含任何异步操作）
  actions,
  // Module是store分割的模块，每个模块拥有自己的state、getters、mutations、actions。
  modules: {
    a: moduleA,
    b: moduleB
  }
});

// 3.导出store对象
export default store;
