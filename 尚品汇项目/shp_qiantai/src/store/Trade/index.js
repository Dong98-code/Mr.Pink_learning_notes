import { reqAddressInfo, reqShopInfo, reqSubmitOrder } from "@/api";

const actions = {
    //获取用户信息地址
    async getAddress({ commit, state, dispatch }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETADDRESS', result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //获取商品清单
    async getShopInfo({ commit, state, dispatch }) {
        let result = await reqShopInfo();
        if (result.code == 200) {
            commit('GETSHOPINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //提交订单:tradeNO 交易编码   data:付款人信息
    async submitInfo({ commit, state, dispatch }, { tradeNo, data }) {
        //提交订单的时候：返回一个很重要数据->订单ID【这笔交易唯一标识符:付款人、收款人】
        let result = await reqSubmitOrder(tradeNo, data);
        if (result.code == 200) {
            commit('SUBMITINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    }

};
const mutations = {
    GETADDRESS(state, address) {
        state.address = address;
    },
    GETSHOPINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo;
    },
    SUBMITINFO(state,payId){
        state.payId = payId;
    }
};
const state = {
    address: [],
    tradeInfo: {},
    payId:''
};


const getters = {};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}