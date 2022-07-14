import Vue from "vue";
const actions = {
    async get_movie_list_info(contex, value) {
        // 该函数向服务器发现请求
        // value为传入数据 skuId
        // console.log(1);
        // console.log(Vue.prototype.$http.get)
        
        let res = await Vue.prototype.$http.get('movie/list/ajax/load', {
            params: {"regionId":0, "type":0,"movieDate":1,"sortType":1,"watchType":0, "page":1}
        })
        // console.log(res)
        if (res.status === 200 && res.data.errorCode == 1) {

            // console.log("相应成功，返回数据");
            // console.log(res)
            console.log(res.data.data)
            // 调用commit中的对应的函数， 传入得到的数据
            contex.commit('GETMOVIELIST', res.data.data)
        }

    },
}

// 准备mutations——用于操作数据（state）	
const mutations = {
    GETMOVIELIST(state, value) {
        state.movieList = value
    }
}
// 准备state——用于存储数据
const state = {
    movieList: []
}

const getters = {
    
    movieList(state) {
        return state.movieList || [];
    },
}

// 创建并暴露store

export default {
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}