import { login, logout, getInfo } from '@/api/user' // 登录 退出登录 获取信息
import { getToken, setToken, removeToken } from '@/utils/auth' // 获取设置 删除tocken
import { resetRouter, anyRoutes, asyncRoutes, constantRoutes } from '@/router'
import router from '@/router';
import cloneDeep from 'lodash/cloneDeep'
//计算异步路由
const computedAsyncRoutes = (asyncRoutes, routes) => {
  //过滤出当前用户【超级管理|普通员工】需要展示的异步路由
  return asyncRoutes.filter(item=>{
    //数组当中没有这个元素返回索引值-1，如果有这个元素返回的索引值一定不是-1 
   if(routes.indexOf(item.name)!=-1){
     //递归:别忘记还有2、3、4、5、6级路由
     if(item.children&&item.children.length){
         item.children = computedAsyncRoutes(item.children,routes);
     }
     return true;
   }
})
}


const getDefaultState = () => {
  // console.log("获取默认状态");
  return {
    token: getToken(),
    name: '',
    avatar: '',
    //服务器返回的菜单信息【根据不同的角色：返回的标记信息，数组里面的元素是字符串】
    routes:[],
    //角色信息
    roles:[],
    //按钮权限的信息
    buttons: [],
    //对比之后【项目中已有的异步路由，与服务器返回的标记信息进行对比最终需要展示的理由】
    resultAsyncRoutes:[],
    //用户最终需要展示全部路由
    resultAllRputes: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 登录成功 存储tocken
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  // 存储用户信息
  SET_USERINFO: (state, userInfo) => {
    // 存储全部信息
    state.name = userInfo.name;
    //用户头像
    state.avatar = userInfo.avatar;
    //菜单权限标记
    state.routes = userInfo.routes;
    //按钮权限标记
    state.buttons = userInfo.buttons;
    //角色
    state.roles = userInfo.roles;
  },
  SET_RESULTASYNCROUTES: (state, asyncRoutes) => {
    // asyncRoutes为计算出来的异步路由
    //vuex保存当前用户的异步路由，注意，一个用户需要展示完成路由：常量、异步、任意路由
    // resetRouter()
    // console.log(router);
    state.resultAsyncRoutes = asyncRoutes;
    // sessionStorage.setItem(USER_ASYNCROUTES, JSON.stringify(asyncRoutes))

    //计算出当前用户需要展示所有路由
    state.resultAllRoutes = constantRoutes.concat(state.resultAsyncRoutes, anyRoutes);
    
    //给路由器添加新的路由
    // console.log("111",state.resultAllRoutes);
    router.addRoutes(state.resultAllRoutes)
    //
    // console.log(router);
    console.log(router);
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    // console.log(username);
    let res = await login({ username: username.trim(), password: password });
  //  console.log(res.code)
    if (res.code == 20000) {
      console.log("登录，设置token");
      commit('SET_TOKEN', res.data.token)
      setToken(res.data.token)
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'))
    }
    // new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        // 获取 用户信息 返回数据包含：用户名name 用户头像 avatar routes 返回的标志 不同的用户 应该展示 哪些 菜单的标记
        // buttons按钮权限的信息
        
        const { data } = response

        // if (!data) {
        //   return reject('Verification failed, please Login again.')
        // }

        // const { name, avatar } = data

        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        //vuex存储用户全部的信息
        console.log("获取到用户信息了，存储信息");
        commit('SET_USERINFO',data);
        commit('SET_RESULTASYNCROUTES',computedAsyncRoutes(cloneDeep(asyncRoutes),data.routes));
        resolve(data)
        // resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        
        sessionStorage.clear() // 退出清除异步路由
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

