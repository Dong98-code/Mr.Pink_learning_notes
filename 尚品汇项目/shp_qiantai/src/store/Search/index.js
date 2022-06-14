import {
    reqGetSearchInfo
} from "@/api"
// 准备actions——用于响应组件中的动作
const actions = {
    // 发送请求
    async getSearchInfo(contex, value = {}) {
        // value默认为空对象
        // 该函数向服务器发现请求
        let res = await reqGetSearchInfo(value) // 这个函数需要传参， value就时params，当用户派发actions时
        // console.log(res);//
        if (res.code === 200) {
            // 调用commit中的对应的函数， 传入得到的数据
            contex.commit('GETSEARCHLIST', res.data)
        }

    },
}
// 准备mutations——用于操作数据（state）	
const mutations = {
    GETSEARCHLIST(state, value) {
        // 传入两个参数， state，，和要传送的数据
        state.searchList = value
    }
}
// 准备state——用于存储数据
const state = {
    searchList: {},
}

// 为了简化数据而生 ？？？
const getters = {
    // 把将来在组件当中 需要简化的数据
    goodsList(state) {
        // state 局部的state,当前的小仓库 search中的state
        return state.searchList.goodsList || [];
        // state的 
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList|| [];
    },
    
}



// 创建并暴露store
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}