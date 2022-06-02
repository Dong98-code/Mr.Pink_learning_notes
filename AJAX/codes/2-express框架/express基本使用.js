//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response)=>{
    //设置响应
    //设置响应头部
    response.setHeader('Access-Control-Allow-Origin','*')//值为“*”
    // 请求行的url需要/serve
    response.send('HELLO EXPRESS');
});
// all 请求
// app.all()
app.all('/json-server', (request, response)=>{
    //设置响应
    //设置响应头部
    response.setHeader('Access-Control-Allow-Origin','*')//值为“*”
    // 请求行的url需要/serve
    response.setHeader('Access-Control-Allow-Headers', '*');// 允许所有的请求头信息


    // 转换对象
    const data = {
        name:'atguigu'
    }
    let res_str = JSON.stringify(data);
    // response.send('HELLO EXPRESS POST');
    response.send(res_str);
    
});

// ie缓存
app.get('/IE-delay', (request, response)=>{
    //设置响应
    //设置响应头部
    response.setHeader('Access-Control-Allow-Origin','*')//值为“*”
    // 请求行的url需要/serve
    setTimeout(() => {
        response.send('HELLO EXPRESS IE -2');
    }, 3000);
    
});
//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, http://127.0.0.1:8000        端口监听中....");
});