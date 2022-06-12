import {
    reqBanners,
    reqCategoryList,
    reqFloors
} from "@/api"
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

    },

    async getBannerList(contex, value) {
        let res = await reqBanners()
        console.log(res);

        if (res.code === 200) {
            // 获取成功
            // contex.commit('')
            console.log(res);
            contex.commit('GETBANNERS', res.data)

        }
    }
}
// 准备mutations——用于操作数据（state）	
const mutations = {
    CATEGORYLIST(state, value) {
        // 传入两个参数， state，，和要传送的数据
        state.categoryList = value;
    },
    GETBANNERS(state, value) {
        state.banner = value
    }
}
// 准备state——用于存储数据
const state = {
    categoryList: [], // 默认空数组
    banner: [],
    floor: []
}

const getters = {}

// 创建并暴露store

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}