const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	// console.log('请求来自于',request.get('Host'));
	// console.log('请求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
	]
	response.send(students)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})
