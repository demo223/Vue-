import Vue from 'vue'
// 导入 App.vue根组件，将来要把 App.vue中的模板结构，渲染到 HTML页面中
import App from './App.vue'
// 在main.js中注册全局组件
import Count from './components/Count.vue'
Vue.component("MyCount", Count)

Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
// $mount('#app')和el:"#app"效果一样
