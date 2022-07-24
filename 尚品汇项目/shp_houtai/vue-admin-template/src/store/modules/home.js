import mockRequest from '@/utils/mockRequset'
const state = {
     list:{}
};
const mutations = {
    GETDATA(state,list){
        state.list = list;
    }
};
const actions = {
    //发请求获取首页的mock数据
    async getData({ commit }) {
        // console.log(mockRequest);
        let result = await mockRequest.get('/home/list');
        // console.log("mock 数据成功");
        if(result.code==20000){
         commit("GETDATA",result.data);
        }
    }
};
const getters = {};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}