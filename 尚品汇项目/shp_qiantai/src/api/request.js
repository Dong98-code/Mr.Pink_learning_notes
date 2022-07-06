// 对 axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
// 引入样式
import 'nprogress/nprogress.css'
// 判断是否存在 临时游客的id
import ShopCart from "@/store/ShopCart";
import Users from '@/store/Users'
// 创建 axios实例对象

const requests = axios.create({
    // 配置对象
    baseURL: '/api',
    //请求超时的事件 5s
    timeout: 5000,
    
})

// 请求拦截器， 在请求发出之前 请求拦截器 检测到在请求发出之前做一些事情

requests.interceptors.request.use((config) => {
    // header请求头
    // 进度条开始 
    nprogress.start()
    // return config;
    if (ShopCart.state.USER_ID) {
        // 请求头 添加字段 userTempId 临时id, 生成的临时身份
        config.headers.userTempId = ShopCart.state.USER_ID;
    }

    if(Users.state.token){
        config.headers.token = Users.state.token;
    }
    return config
})

// 响应拦截器

requests.interceptors.response.use((res) => {
    nprogress.done()

    return res.data; // 响应成功的数据
}, (error) => { 
    return Promise.reject(new Error('false')) // 返回 Promise对象
})

export default requests