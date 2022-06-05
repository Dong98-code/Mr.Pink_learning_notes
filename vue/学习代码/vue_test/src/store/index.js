// 创建store , 管理 action mutations和。。
//引入Vuex
// import babelConfig from "babel.config";
import Vue from "vue"
import Vuex from "vuex"
// 引入Vuex


Vue.use(Vuex)

const actions = {
    // 响应组件动作
    //func， 传入的为
    a_add: function (context, value) {
        // 上下文， 调用commit
        context.commit('m_add', value);
        // mutaions中的add
    },
    a_dec(context, value) {
        context.commit('m_dec', value);
    },
    a_addOdd(context, value) {
        if (context.state.sum % 2 == 1) {
            //sumde 值判断
            context.commit('m_addOdd', value);

        }
    },
    a_addWait(context, value) {
        setTimeout(() => {
            context.commit('m_add', value)
        },500)
    }
    
}

const mutations = {
    // 操作数据吗state
    m_add: function (state, value) {
        state.sum += value;
    },
    m_dec(state, value) {
        state.sum -= value;
    },
    m_addOdd(state, value) {
        state.sum += value;
    },
    m_addPerson(state, value) {
        state.personsList.unshift(value);
    }
}

const state = {
    // 存储数据
    sum: 0,
    schoolName:"shangguigu",
    className: "Vue",
    personsList: [{id:1, name:"张三"}],
}

const getters = {
    bigData:function (state) {
        return state.sum * 10;
    }
}
// new Store, 创建store
//传入配置对象
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters
})
// 导出/暴露 store 
export default store