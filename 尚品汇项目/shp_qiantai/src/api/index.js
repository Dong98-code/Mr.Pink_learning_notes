// 同一管理api接口
import requests from './request';

// 分别暴漏
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})