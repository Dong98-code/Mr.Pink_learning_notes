import Vue from "vue";
const actions = {
    async get_movie_detail_info(contex, value) {
        // 该函数向服务器发现请求
        // value为传入数据 skuId
        // console.log(1);
        // console.log(Vue.prototype.$http.get)
        let res = await Vue.prototype.$http.get('/movie/detail?movieId=2')
        // console.log(res)
        if (res.status === 200) {

            // console.log("相应成功，返回数据");
            // console.log(res.data)
            // 调用commit中的对应的函数， 传入得到的数据
            contex.commit('GETMOVIEINFODETAIL', res.data.data)
        }

    },
}

// 准备mutations——用于操作数据（state）	
const mutations = {
    GETMOVIEINFODETAIL(state, value) {
        state.movieDetails = value,
            state.detailList = {
                timeInMinite: value.timeInMinite,
                typeName: value.typeName
            }
        // state.movieDetails
        let showDate = value.detail.showDate;
        state.movieDetails.detail.showDate = showDate.split('-')[0]
        
    }
}
// 准备state——用于存储数据
const state = {
    movieDetails: {},
    detailList: {}
}

const getters = {
    detail(state) {
        return state.movieDetails.detail || {}; // 返回的是一个对象
    },
    actorList(state) {
        return state.movieDetails.actorList || [];
    },
    director(state) {
        return state.movieDetails.director || {};

    },
    tuiImages(state) {
        return state.movieDetails.tuiImages || [];
    },
    tuiVideos(state) {
        return state.movieDetails.tuiVideos || [];
    },
    watchList(state) {
        return state.movieDetails.watchList || [];
    },
    detailList(state) {
        return state.detailList || {};
    }

}

// 创建并暴露store

export default {
    // namespaced:true,
    actions,
    mutations,
    state,
    getters
}