import Vue from 'vue'
import Vuex from 'vuex'	// 引入Vuex

Vue.use(Vuex)	// 应用Vuex插件

// const actions = {}		// 准备actions——用于响应组件中的动作
// const mutations = {}	// 准备mutations——用于操作数据（state）
// const state = {}			// 准备state——用于存储数据

// const getters = {}

// 创建并暴露store

import home from './Home'
import search from './Search'
import detail from './Detail'
import shopcart from './ShopCart'
import users from './Users'
import trade from './Trade'
// 模块开发
export default new Vuex.Store({
	modules: {
		home,
		search,
		detail,
		shopcart,
		users,
		trade
	}
})