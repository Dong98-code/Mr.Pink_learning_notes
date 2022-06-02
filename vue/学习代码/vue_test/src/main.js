import Vue from 'vue'
// 所有组件的父组件
import App from './App.vue'

// import plugins from './plugins'
Vue.config.productionTip = false


// 创建实例对象
new Vue({
  el:"#app",
  // 将App组件 放入容器中
  // render 为箭头函数的缩写
  render: h => h(App),
})
