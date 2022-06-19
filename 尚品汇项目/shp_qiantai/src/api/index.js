// 同一管理api接口
import requests from './request';
import mockAjax from './ajaxMock.js'


// 分别暴漏
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})


// 获取广告轮播列表
export const reqBanners = ()=> mockAjax.get('/banner')

// 获取首页楼层列表
export const reqFloors = ()=> mockAjax.get('/floor')


// 获取搜索模块的数据, post请求，
// 带参数 /api/list

export const reqGetSearchInfo = (params) => requests({
    // 
    url: '/list', // api baseUrl
    method: 'post',
    data: params
})

// 后去产品详情数据： URL : api/item/{skuID}

export const reqGetGoodsInfo = (skuId) => requests({
    // 
    url: `/item/${skuId}`, // api baseUrL
    method: 'get'
})