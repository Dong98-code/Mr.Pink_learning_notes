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

// 加入购入车 请求 post方法

export const reqAddorUpdateSku = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
})

// 购物车 列表数据接口

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

//删除某一个商品的接口
export const reqDeleteCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});


//修改某一个商品的勾选的状态

export const reqUpdateChecked = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

// 获取验证码

export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

//注册的接口
export const reqRegister = (data)=>requests({url:`/user/passport/register`,method:'post',data});

//登录的接口:请求体携带参数 phone&&password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,method:'post',data});

//获取用户登录成功以后用户信息的接口
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'});


//退出登录业务
export const reqUserLogout = ()=>requests({url:`/user/passport/logout`,method:'get'});


//获取用户地址信息
export const reqAddressInfo = ()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'});


//获取商品清单数据
export const reqShopInfo = ()=>requests({url:`/order/auth/trade`,method:'get'});


//提交订单接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});

//获取支付信息接口
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//查询支付结果
export const reqPayResult = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});


//获取我的订单
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});