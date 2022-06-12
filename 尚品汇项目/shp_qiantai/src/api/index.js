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

