const express = require('express');

const app = express();

app.get('/home', (request, response)=>{
    //响应一个页面
    // 绝对路径 __dirname + 文件名称
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response)=>{
    response.send('用户数据');
});

app.listen(9000, ()=>{
    console.log("服务已经启动9000...");
});