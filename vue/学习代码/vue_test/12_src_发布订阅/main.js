//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// const demo = Vue.extend({})  // vc,

// const d = new demo();



// $on 
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this; // this在这里指的是这个新创建的Vue, 安装全局事件总线, bus总线；全局所有的VM和vc都能看到 bus
	}
})