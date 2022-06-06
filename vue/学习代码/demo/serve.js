const express = require('express')

const app = express()

const history = require('connect-history-api-fallback')
// 使用中间件
app.use(history)
//在静态资源之前 调用history
app.use(express.static(__dirname + '/static'))
// get
app.get('/person', (req, res) => {
    res.send({
        name: 'tom',
        age: 100
    })

    
})
// 开启窗口

//connect-history


app.listen(5005, (err) => {
    if (!err) {
        console.log('success, http://127.0.0.1:5005');
    }
})