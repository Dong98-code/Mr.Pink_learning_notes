import {
    reqGetGoodsInfo,
    reqAddorUpdateSku
} from "@/api"
// 准备actions——用于响应组件中的动作
const actions = {
    // 发送请求
    async getGoodsInfo(contex, value) {
        // 该函数向服务器发现请求
        // value为传入数据 skuId
        // console.log(1);
        let res = await reqGetGoodsInfo(value)
        if (res.code === 200) {
            // 调用commit中的对应的函数， 传入得到的数据
            contex.commit('GETGOODINFO', res.data)
        }

    },
    async addorUpdateSku(contex, { skuId, skuNum }) {
        // console.log({ skuId, skuNum });
        let res = await reqAddorUpdateSku(skuId, skuNum);
        // console.log(res);
        if (res.code === 200) {
            // console.log('调用成功');
            return 'ok'
        } else {
            return Promise.reject('fail');
        }
    }

    
}
// 准备mutations——用于操作数据（state）	
const mutations = {
    GETGOODINFO(state, value) {
        // 传入两个参数， state，，和要传送的数据
        state.goodInfo = value;
    },
    
}
// 准备state——用于存储数据
const state = {
    // 初始值新对象
    goodInfo: {},
    uuid_token: {}
}

const getters = {
    categoryView(state) {
        // 返回之前 判断 state.goodInfo
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
}

// 创建并暴露store

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}