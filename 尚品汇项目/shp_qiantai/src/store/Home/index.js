import { reqCategoryList } from "@/api"
// 准备actions——用于响应组件中的动作
const actions = {
    // 发送请求
    async categoryList(contex, value) {
        // 该函数向服务器发现请求
        let res = await reqCategoryList()
        // console.log(res);//
        if (res.code === 200) {
            // 调用commit中的对应的函数， 传入得到的数据
            contex.commit('CATEGORYLIST', res.data)
        }

    }
}	
// 准备mutations——用于操作数据（state）	
const mutations = {
    CATEGORYLIST(state, value) {
        // 传入两个参数， state，，和要传送的数据
        state.categoryList = value;
    }
}	
// 准备state——用于存储数据
const state = {
    categoryList:[]// 默认空数组
}			

const getters = {}

// 创建并暴露store
export default {
	actions,
	mutations,
	state,
	getters
}