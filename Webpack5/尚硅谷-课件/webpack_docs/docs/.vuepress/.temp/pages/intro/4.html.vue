<template><h1 id="项目代码" tabindex="-1"><a class="header-anchor" href="#项目代码" aria-hidden="true">#</a> 项目代码</h1>
<h2 id="项目基础模板" tabindex="-1"><a class="header-anchor" href="#项目基础模板" aria-hidden="true">#</a> 项目基础模板</h2>
<p>详见<code>syt-admin-base</code>项目</p>
<h2 id="项目目录文件介绍" tabindex="-1"><a class="header-anchor" href="#项目目录文件介绍" aria-hidden="true">#</a> 项目目录文件介绍</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── mock # 模拟请求返回数据的文件夹
│   ├── index.js # 配置文件
│   └── user.js # 模拟登录请求的文件
├── public # 公共静态资源目录
│   ├── favicon.ico # 网站图标
│   ├── index.html # 主页面
│   ├── logo192.png # app图标
│   ├── logo512.png # app图标
│   ├── manifest.json # app配置文件
│   └── robots.txt # 网站跟爬虫间的协议
├── src # 主目录
│   ├── api # 接口文件
│   ├── app # redux配置文件
│   ├── components # 公共组件
│   │   ├── Loading # loading组件
│   │   ├── Redirect # 重定向组件
│   │   └── withAuthorization # 权限认证组件
│   ├── layouts # 主要布局组件
│   ├── pages # 路由组件
│   ├── routes # 路由配置
│   ├── styles # 全局/公共样式
│   ├── utils # 工具函数
│   │   └── http # 封装请求函数
│   ├── App.tsx # App组件
│   ├── index.ts # 主入口
│   ├── react-app-env.d.ts # 类型文件，在编译时会引入额外文件
│   ├── reportWebVitals.ts # 基于Google的网站性能分析文件
│   └── setupTests.ts # 安装测试
├── .env.development # 开发环境加载的环境变量配置
├── .env.production # 生产环境加载的环境变量配置
├── .gitignore # git忽略文件
├── craco.config.js # react脚手架配置文件
├── package.json # 包文件
├── README.MD # 项目说明文件
├── tsconfig.extend.json # 路径别名配置文件
├── tsconfig.json # ts配置文件
└── yarn.lock # yarn下载包的缓存文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></template>
