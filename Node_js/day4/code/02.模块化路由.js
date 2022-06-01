const express = require('express') // express模块
const app = express() // 实例对象

// app.use('/files', express.static('./files'))

// 1. 导入路由模块
const router = require('./03.router')
// 2. 注册路由模块, use函数
app.use('/api', router)

// 注意： app.use() 函数的作用，就是来注册全局中间件
// 启动服务器
app.listen(80, () => {
  console.log('http://127.0.0.1')
})
