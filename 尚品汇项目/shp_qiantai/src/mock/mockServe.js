// 引入mock
import Mock from 'mockjs'
// 引入数据

import banner from './banner.json'
import floor from './floor.json'

// mock 数据 ： （请求地址， 请求数据）

Mock.mock('/mock/banner', {
    code: 200,
    data: banner
})

Mock.mock('/mock/floor', {
    code: 200,
    data: floor
})