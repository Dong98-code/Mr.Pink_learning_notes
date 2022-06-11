import Vue from 'vue'
import Vuex from 'vuex'	// 引入Vuex

Vue.use(Vuex)	// 应用Vuex插件

// const actions = {}		// 准备actions——用于响应组件中的动作
// const mutations = {}	// 准备mutations——用于操作数据（state）
// const state = {}			// 准备state——用于存储数据

// const getters = {}

// 创建并暴露store

import home from './Home'
// export default new Vuex.Store({
// 	actions,
// 	mutations,
// 	state,
// 	getters
// })

// 模块开发
export default new Vuex.Store({
	modules: {
		home,
		
	}
})