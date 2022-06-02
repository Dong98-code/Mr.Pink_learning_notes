# HTTP
超文本传输协议
HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

## 请求报文
重点是格式与参数
```
行      POST  /s?ie=utf-8  HTTP/1.1 
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```

## 响应报文
```
行      HTTP/1.1  200  OK
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行    
体      <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```

![20220601220839](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601220839.png)
## 状态码
* 404
* 403
* 401
* 500
* 200

### 1**

![20220601220921](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601220921.png)

### 2**
![20220601220938](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601220938.png)

### 3**

![20220601221012](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601221012.png)


### 4**

![20220601221033](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601221033.png)


### 5**

![20220601221048](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601221048.png)

## chrome 请求报文和响应报文


# XML

## 特点

![20220601220348](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601220348.png)

json格式 取代了xml格式

json使用双引号


# AJAX

## 基本介绍

![20220601220531](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601220531.png)

跨域问题：

# AJAX基本操作

## GET
1. 创建对象
`const xhr = new XMLHttpRequest();`

ajax

2. 初始化

`xhr.open('GET', 'http://127.0.0.1:8000/server');`


`xhr.onreadystatechange`当 readystate状态 改变的时候

![20220602113425](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602113425.png)

触发四次： 0->1->2->3->4

```js
//判断 (服务端返回了所有的结果)
if(xhr.readyState === 4) // 根据readystate的值来判断
```

```js
// 2xx 成功
if(xhr.status >= 200 && xhr.status < 300)
```

处理结果：

行 头 体
1. 响应行

```js
//响应 
console.log(xhr.status);//态码
console.log(xhr.statusText);//状态字符串
console.log(xgetAllResponseHeaders());//有响应头
console.log(xhr.response)//响应体
```

![20220602114232](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602114232.png)

响应体：

![20220602114327](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602114327.png)

![20220602114405](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602114405.png)

![20220602114439](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602114439.png)

## 设置URL参数

![20220602114620](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602114620.png)

`xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200');`

## POST请求

![20220602115247](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602115247.png)

设置请求头：

```js
// 头名， 头 value
// 请求体 类型： Content-type, application/x-www-form-urlencoded
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// 自定义请求头
xhr.setRequestHeader('name','atguigu');
```

```js
 xhr.responseType = 'json'; // 已经设置过 json格式的响应 就不应该再使用JSON.parse()
```

## IE缓存

ie缓存：

![20220602143517](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602143517.png)

增加事件戳

## 超时

```js
//超时设置 2s 设置,响应延迟3s所以会报错
   xhr.timeout = 2000;
   //超时回调
   xhr.ontimeout = function(){
               alert("网络异常, 请稍后重试!!");
   }
   //网络异常回调
   xhr.onerror = function(){
               alert("你的网络似乎出了一些问题!");
   }
```
`ontimeout`:超时回调；

`onerror`
![20220602143810](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602143810.png)

![20220602144012](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602144012.png)

chrome 设置 `offline`

![20220602144037](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602144037.png)

## AJAX取消请求

```js
<script>
        //获取元素对象
        const btns = document.querySelectorAll('button');
        let x = null;

        btns[0].onclick = function(){
            x = new XMLHttpRequest();
            x.open("GET",'http://127.0.0.1:8000/IE-delay');
            x.send();
        }

        // abort
        btns[1].onclick = function(){
            x.abort();
        }
    </script>
```


## ajax重复请求
根据标识变量`isSending`来判断是否为正在发送请求
```js
<script>
        //获取元素对象
        const btns = document.querySelectorAll('button');
        let x = null;
        //标识变量
        let isSending = false; // 是否正在发送AJAX请求

        btns[0].onclick = function(){
            //判断标识变量
            if(isSending) x.abort();// 如果正在发送, 则取消该请求, 创建一个新的请求
            x = new XMLHttpRequest();
            //修改 标识变量的值
            isSending = true;
            x.open("GET",'http://127.0.0.1:8000/delay');
            x.send();
            x.onreadystatechange = function(){
                if(x.readyState === 4){
                    //修改标识变量
                    // 请求完成 ， 改变状态
                    isSending = false;
                }
            }
        }

        // abort
        btns[1].onclick = function(){
            x.abort();
        }
    </script>
```

## Jqery

`$.ajax({url, parames, type...})` 使用一个对象包装， 键值对的形式使用；
```js
$('button').eq(2).click(function(){
            $.ajax({
                //url
                url: 'http://127.0.0.1:8000/jquery-server',
                //参数
                data: {a:100, b:200},
                //请求类型
                type: 'GET',
                //响应体结果
                dataType: 'json',
                //成功的回调
                success: function(data){
                    console.log(data);
                },
                //超时时间
                timeout: 2000,
                //失败的回调
                error: function(){
                    console.log('出错啦!!');
                },
                //头信息
                headers: {
                    c:300,
                    d:400
                }
            });
        });

```

## Axios

Vue React 工具包

## fetch

[fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

![20220602154015](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602154015.png)

`fetch(url, obj)`
```js
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}




postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

```

## 跨域

### 同源策略

协议 域名 和端口保持一致 

ajax默认 遵循同源策略；

同一个来源， url的地址的区别

### 跨域

违背同源

8000端口向 3000端口请求等；

### JSONP

JSON with Padding

![20220602160329](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602160329.png)

原理：

[JSONP实现跨域](https://blog.csdn.net/badmoonc/article/details/82289252)

网站对srcipt发出的get的请求的响应可以突破同源策略：


![20220602161949](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602161949.png)

实例：
```js
$('#btn').click(function(){	
        var frame = document.createElem('script');// 创建一个srcipt标签
        frame.src = 'http://localhost:30article-list?name=leo&age=callback=func';// 配置一个src地址，	
        $('body').append(frame);});// 添加到body中去
```

为什么要定义callback呢？首先我们知道，这个get请求已经被发出去了，那么我们如何接口请求回来的数据呢，callback=func则可以帮我们做这件事。我们继续看下边的代码 


```js
<button id="btn">点击</button>
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
  <script>
    $('#btn').click(function(){
			var frame = document.createElement('script');
			frame.src = 'http://localhost:3000/article-list?name=leo&age=30&callback=func';
			$('body').append(frame);
		});
		
		function func(res){
                        // res为 data
			alert(res.message+res.name+'你已经'+res.age+'岁了');
		}
  </script>
```

服务器端：

```js
router.get('/article-list', (req, res) => {
  console.log(req.query, '123');
  let data = {
    message: 'success!',
    name: req.query.name,
    age: req.query.age
  }
  data = JSON.stringify(data)
  res.end('func(' + data + ')'); // 返回函数执行的， 浏览器 会将这个语句解析为 js文件， 执行这个函数， 而此时函数实现定义好了， 相当于返回之后 ， 执行了 func()，data 为req
});
```

![20220602162601](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602162601.png)

![20220602163139](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602163139.png)

![20220602163836](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602163836.png)


### cors

![20220602163914](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602163914.png)

cross-origin-resource-sharing:跨域资源共享


直接设置响应头 完成 跨域操作：

![20220602164114](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602164114.png)