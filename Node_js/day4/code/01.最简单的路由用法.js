const express = require('express')
const app = express() // 返回一个服务器的实例

// 挂载路由， 在服务器实例身上使用get方法
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
