<template><h1 id="plugin-原理" tabindex="-1"><a class="header-anchor" href="#plugin-原理" aria-hidden="true">#</a> Plugin 原理</h1>
<h2 id="plugin-的作用" tabindex="-1"><a class="header-anchor" href="#plugin-的作用" aria-hidden="true">#</a> Plugin 的作用</h2>
<p>通过插件我们可以扩展 webpack，加入自定义的构建行为，使 webpack 可以执行更广泛的任务，拥有更强的构建能力。</p>
<h2 id="plugin-工作原理" tabindex="-1"><a class="header-anchor" href="#plugin-工作原理" aria-hidden="true">#</a> Plugin 工作原理</h2>
<blockquote>
<p>webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。
插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。webpack 通过 Tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。
webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。
——「深入浅出 Webpack」</p>
</blockquote>
<p>站在代码逻辑的角度就是：webpack 在编译代码过程中，会触发一系列 <code>Tapable</code> 钩子事件，插件所做的，就是找到相应的钩子，往上面挂上自己的任务，也就是注册事件，这样，当 webpack 构建的时候，插件注册的事件就会随着钩子的触发而执行了。</p>
<h2 id="webpack-内部的钩子" tabindex="-1"><a class="header-anchor" href="#webpack-内部的钩子" aria-hidden="true">#</a> Webpack 内部的钩子</h2>
<h3 id="什么是钩子" tabindex="-1"><a class="header-anchor" href="#什么是钩子" aria-hidden="true">#</a> 什么是钩子</h3>
<p>钩子的本质就是：事件。为了方便我们直接介入和控制编译过程，webpack 把编译过程中触发的各类关键事件封装成事件接口暴露了出来。这些接口被很形象地称做：<code>hooks</code>（钩子）。开发插件，离不开这些钩子。</p>
<h3 id="tapable" tabindex="-1"><a class="header-anchor" href="#tapable" aria-hidden="true">#</a> Tapable</h3>
<p><code>Tapable</code> 为 webpack 提供了统一的插件接口（钩子）类型定义，它是 webpack 的核心功能库。webpack 中目前有十种 <code>hooks</code>，在 <code>Tapable</code> 源码中可以看到，他们是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// https://github.com/webpack/tapable/blob/master/lib/index.js</span>
exports<span class="token punctuation">.</span>SyncHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./SyncHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>SyncBailHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./SyncBailHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>SyncWaterfallHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./SyncWaterfallHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>SyncLoopHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./SyncLoopHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncParallelHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncParallelHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncParallelBailHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncParallelBailHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncSeriesHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncSeriesHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncSeriesBailHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncSeriesBailHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncSeriesLoopHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncSeriesLoopHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>AsyncSeriesWaterfallHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./AsyncSeriesWaterfallHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>HookMap <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./HookMap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>MultiHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./MultiHook"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>Tapable</code> 还统一暴露了三个方法给插件，用于注入不同类型的自定义构建行为：</p>
<ul>
<li><code>tap</code>：可以注册同步钩子和异步钩子。</li>
<li><code>tapAsync</code>：回调方式注册异步钩子。</li>
<li><code>tapPromise</code>：Promise 方式注册异步钩子。</li>
</ul>
<h2 id="plugin-构建对象" tabindex="-1"><a class="header-anchor" href="#plugin-构建对象" aria-hidden="true">#</a> Plugin 构建对象</h2>
<h3 id="compiler" tabindex="-1"><a class="header-anchor" href="#compiler" aria-hidden="true">#</a> Compiler</h3>
<p>compiler 对象中保存着完整的 Webpack 环境配置，每次启动 webpack 构建时它都是一个独一无二，仅仅会创建一次的对象。</p>
<p>这个对象会在首次启动 Webpack 时创建，我们可以通过 compiler 对象上访问到 Webapck 的主环境配置，比如 loader 、 plugin 等等配置信息。</p>
<p>它有以下主要属性：</p>
<ul>
<li><code>compiler.options</code> 可以访问本次启动 webpack 时候所有的配置文件，包括但不限于 loaders 、 entry 、 output 、 plugin 等等完整配置信息。</li>
<li><code>compiler.inputFileSystem</code> 和 <code>compiler.outputFileSystem</code> 可以进行文件操作，相当于 Nodejs 中 fs。</li>
<li><code>compiler.hooks</code> 可以注册 tapable 的不同种类 Hook，从而可以在 compiler 生命周期中植入不同的逻辑。</li>
</ul>
<blockquote>
<p><a href="https://webpack.docschina.org/api/compiler-hooks/" target="_blank" rel="noopener noreferrer">compiler hooks 文档<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="compilation" tabindex="-1"><a class="header-anchor" href="#compilation" aria-hidden="true">#</a> Compilation</h3>
<p>compilation 对象代表一次资源的构建，compilation 实例能够访问所有的模块和它们的依赖。</p>
<p>一个 compilation 对象会对构建依赖图中所有模块，进行编译。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。</p>
<p>它有以下主要属性：</p>
<ul>
<li><code>compilation.modules</code> 可以访问所有模块，打包的每一个文件都是一个模块。</li>
<li><code>compilation.chunks</code> chunk 即是多个 modules 组成而来的一个代码块。入口文件引入的资源组成一个 chunk，通过代码分割的模块又是另外的 chunk。</li>
<li><code>compilation.assets</code> 可以访问本次打包生成所有文件的结果。</li>
<li><code>compilation.hooks</code> 可以注册 tapable 的不同种类 Hook，用于在 compilation 编译模块阶段进行逻辑添加以及修改。</li>
</ul>
<blockquote>
<p><a href="https://webpack.docschina.org/api/compilation-hooks/" target="_blank" rel="noopener noreferrer">compilation hooks 文档<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="生命周期简图" tabindex="-1"><a class="header-anchor" href="#生命周期简图" aria-hidden="true">#</a> 生命周期简图</h3>
<p><img src="/imgs/source/plugin.jpg" alt="Webpack 插件生命周期"></p>
<h2 id="开发一个插件" tabindex="-1"><a class="header-anchor" href="#开发一个插件" aria-hidden="true">#</a> 开发一个插件</h2>
<h3 id="最简单的插件" tabindex="-1"><a class="header-anchor" href="#最简单的插件" aria-hidden="true">#</a> 最简单的插件</h3>
<ul>
<li>plugins/test-plugin.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TestPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"TestPlugin constructor()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法</span>
  <span class="token comment">// 2. webpack创建 compiler 对象</span>
  <span class="token comment">// 3. 遍历所有插件，调用插件的 apply 方法</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"TestPlugin apply()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> TestPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="注册-hook" tabindex="-1"><a class="header-anchor" href="#注册-hook" aria-hidden="true">#</a> 注册 hook</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TestPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"TestPlugin constructor()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法</span>
  <span class="token comment">// 2. webpack创建 compiler 对象</span>
  <span class="token comment">// 3. 遍历所有插件，调用插件的 apply 方法</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"TestPlugin apply()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 从文档可知, compile hook 是 SyncHook, 也就是同步钩子, 只能用tap注册</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilationParams</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.compile()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 从文档可知, make 是 AsyncParallelHook, 也就是异步并行钩子, 特点就是异步任务同时执行</span>
    <span class="token comment">// 可以使用 tap、tapAsync、tapPromise 注册。</span>
    <span class="token comment">// 如果使用tap注册的话，进行异步操作是不会等待异步操作执行完成的。</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.make() 111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用tapAsync、tapPromise注册，进行异步操作会等异步操作做完再继续往下执行</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.make() 222"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 必须调用</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">tapPromise</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.make() 333"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 必须返回promise</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 从文档可知, emit 是 AsyncSeriesHook, 也就是异步串行钩子，特点就是异步任务顺序执行</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.emit() 111"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.emit() 222"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"TestPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"compiler.emit() 333"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> TestPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h3 id="启动调试" tabindex="-1"><a class="header-anchor" href="#启动调试" aria-hidden="true">#</a> 启动调试</h3>
<p>通过调试查看 <code>compiler</code> 和 <code>compilation</code> 对象数据情况。</p>
<ol>
<li>package.json 配置指令</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"source"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"debug"</span><span class="token operator">:</span> <span class="token string">"node --inspect-brk ./node_modules/webpack-cli/bin/cli.js"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"xiongjian"</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.17.10"</span><span class="token punctuation">,</span>
    <span class="token property">"@babel/preset-env"</span><span class="token operator">:</span> <span class="token string">"^7.17.10"</span><span class="token punctuation">,</span>
    <span class="token property">"css-loader"</span><span class="token operator">:</span> <span class="token string">"^6.7.1"</span><span class="token punctuation">,</span>
    <span class="token property">"loader-utils"</span><span class="token operator">:</span> <span class="token string">"^3.2.0"</span><span class="token punctuation">,</span>
    <span class="token property">"webpack"</span><span class="token operator">:</span> <span class="token string">"^5.72.0"</span><span class="token punctuation">,</span>
    <span class="token property">"webpack-cli"</span><span class="token operator">:</span> <span class="token string">"^4.9.2"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="2">
<li>运行指令</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run debug
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时控制台输出以下内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS C:\Users\86176\Desktop\source> npm run debug

> source@1.0.0 debug
> node --inspect-brk ./node_modules/webpack-cli/bin/cli.js

Debugger listening on ws://127.0.0.1:9229/629ea097-7b52-4011-93a7-02f83c75c797
For help, see: https://nodejs.org/en/docs/inspecto
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li>打开 Chrome 浏览器，F12 打开浏览器调试控制台。</li>
</ol>
<p>此时控制台会显示一个绿色的图标</p>
<p><img src="/imgs/source/debug.png" alt="调试控制台"></p>
<ol start="4">
<li>
<p>点击绿色的图标进入调试模式。</p>
</li>
<li>
<p>在需要调试代码处用 <code>debugger</code> 打断点，代码就会停止运行，从而调试查看数据情况。</p>
</li>
</ol>
<h2 id="bannerwebpackplugin" tabindex="-1"><a class="header-anchor" href="#bannerwebpackplugin" aria-hidden="true">#</a> BannerWebpackPlugin</h2>
<ol>
<li>
<p>作用：给打包输出文件添加注释。</p>
</li>
<li>
<p>开发思路:</p>
</li>
</ol>
<ul>
<li>需要打包输出前添加注释：需要使用 <code>compiler.hooks.emit</code> 钩子, 它是打包输出前触发。</li>
<li>如何获取打包输出的资源？<code>compilation.assets</code> 可以获取所有即将输出的资源文件。</li>
</ul>
<ol start="3">
<li>实现：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// plugins/banner-webpack-plugin.js</span>
<span class="token keyword">class</span> <span class="token class-name">BannerWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需要处理文件</span>
    <span class="token keyword">const</span> extensions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"css"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// emit是异步串行钩子</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"BannerWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// compilation.assets包含所有即将输出的资源</span>
      <span class="token comment">// 通过过滤只保留需要处理的文件</span>
      <span class="token keyword">const</span> assetPaths <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> splitted <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> extensions<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>splitted<span class="token punctuation">[</span>splitted<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      assetPaths<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">assetPath</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> asset <span class="token operator">=</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>assetPath<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/*
* Author: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
*/\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>asset<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

        <span class="token comment">// 覆盖资源</span>
        compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>assetPath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token comment">// 资源内容</span>
          <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> source<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 资源大小</span>
          <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> source<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> BannerWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="cleanwebpackplugin" tabindex="-1"><a class="header-anchor" href="#cleanwebpackplugin" aria-hidden="true">#</a> CleanWebpackPlugin</h2>
<ol>
<li>
<p>作用：在 webpack 打包输出前将上次打包内容清空。</p>
</li>
<li>
<p>开发思路：</p>
</li>
</ol>
<ul>
<li>如何在打包输出前执行？需要使用 <code>compiler.hooks.emit</code> 钩子, 它是打包输出前触发。</li>
<li>如何清空上次打包内容？
<ul>
<li>获取打包输出目录：通过 compiler 对象。</li>
<li>通过文件操作清空内容：通过 <code>compiler.outputFileSystem</code> 操作文件。</li>
</ul>
</li>
</ul>
<ol start="3">
<li>实现：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// plugins/clean-webpack-plugin.js</span>
<span class="token keyword">class</span> <span class="token class-name">CleanWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取操作文件的对象</span>
    <span class="token keyword">const</span> fs <span class="token operator">=</span> compiler<span class="token punctuation">.</span>outputFileSystem<span class="token punctuation">;</span>
    <span class="token comment">// emit是异步串行钩子</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">"CleanWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取输出文件目录</span>
      <span class="token keyword">const</span> outputPath <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">;</span>
      <span class="token comment">// 删除目录所有文件</span>
      <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeFiles</span><span class="token punctuation">(</span>fs<span class="token punctuation">,</span> outputPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 执行成功err为undefined，执行失败err就是错误原因</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeFiles</span><span class="token punctuation">(</span><span class="token parameter">fs<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 读取当前目录下所有文件</span>
      <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 遍历文件，删除</span>
      files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取文件完整路径</span>
        <span class="token keyword">const</span> filePath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token comment">// 分析文件</span>
        <span class="token keyword">const</span> fileStat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断是否是文件夹</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileStat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 是文件夹需要递归遍历删除下面所有文件</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeFiles</span><span class="token punctuation">(</span>fs<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不是文件夹就是文件，直接删除</span>
          fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 最后删除当前目录</span>
      fs<span class="token punctuation">.</span><span class="token function">rmdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将产生的错误返回出去</span>
      <span class="token keyword">return</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CleanWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="analyzewebpackplugin" tabindex="-1"><a class="header-anchor" href="#analyzewebpackplugin" aria-hidden="true">#</a> AnalyzeWebpackPlugin</h2>
<ol>
<li>作用：分析 webpack 打包资源大小，并输出分析文件。</li>
<li>开发思路:</li>
</ol>
<ul>
<li>在哪做? <code>compiler.hooks.emit</code>, 它是在打包输出前触发，我们需要分析资源大小同时添加上分析后的 md 文件。</li>
</ul>
<ol start="3">
<li>实现：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// plugins/analyze-webpack-plugin.js</span>
<span class="token keyword">class</span> <span class="token class-name">AnalyzeWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// emit是异步串行钩子</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"AnalyzeWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// Object.entries将对象变成二维数组。二维数组中第一项值是key，第二项值是value</span>
      <span class="token keyword">const</span> assets <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token string">"# 分析打包资源大小 \n| 名称 | 大小 |\n| --- | --- |"</span><span class="token punctuation">;</span>

      assets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>filename<span class="token punctuation">,</span> file<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        source <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n| </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> |</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 添加资源</span>
      compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">"analyze.md"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> source<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> source<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> AnalyzeWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="inlinechunkwebpackplugin" tabindex="-1"><a class="header-anchor" href="#inlinechunkwebpackplugin" aria-hidden="true">#</a> InlineChunkWebpackPlugin</h2>
<ol>
<li>作用：webpack 打包生成的 runtime 文件太小了，额外发送请求性能不好，所以需要将其内联到 js 中，从而减少请求数量。</li>
<li>开发思路:</li>
</ol>
<ul>
<li>我们需要借助 <code>html-webpack-plugin</code> 来实现
<ul>
<li>在 <code>html-webpack-plugin</code> 输出 index.html 前将内联 runtime 注入进去</li>
<li>删除多余的 runtime 文件</li>
</ul>
</li>
<li>如何操作 <code>html-webpack-plugin</code>？<a href="https://github.com/jantimon/html-webpack-plugin/#afteremit-hook" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></li>
</ul>
<ol start="3">
<li>实现：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// plugins/inline-chunk-webpack-plugin.js</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"safe-require"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">InlineChunkWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">tests</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tests <span class="token operator">=</span> tests<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"InlineChunkWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hooks <span class="token operator">=</span> HtmlWebpackPlugin<span class="token punctuation">.</span><span class="token function">getHooks</span><span class="token punctuation">(</span>compilation<span class="token punctuation">)</span><span class="token punctuation">;</span>

      hooks<span class="token punctuation">.</span>alterAssetTagGroups<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"InlineChunkWebpackPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">assets</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        assets<span class="token punctuation">.</span>headTags <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getInlineTag</span><span class="token punctuation">(</span>assets<span class="token punctuation">.</span>headTags<span class="token punctuation">,</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">;</span>
        assets<span class="token punctuation">.</span>bodyTags <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getInlineTag</span><span class="token punctuation">(</span>assets<span class="token punctuation">.</span>bodyTags<span class="token punctuation">,</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      hooks<span class="token punctuation">.</span>afterEmit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">"InlineChunkHtmlPlugin"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">assetName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tests<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">test</span><span class="token punctuation">)</span> <span class="token operator">=></span> assetName<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">delete</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>assetName<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getInlineTag</span><span class="token punctuation">(</span><span class="token parameter">tags<span class="token punctuation">,</span> assets</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tag<span class="token punctuation">.</span>tagName <span class="token operator">!==</span> <span class="token string">"script"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> tag<span class="token punctuation">;</span>

      <span class="token keyword">const</span> scriptName <span class="token operator">=</span> tag<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>src<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>tests<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">test</span><span class="token punctuation">)</span> <span class="token operator">=></span> scriptName<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> tag<span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">"script"</span><span class="token punctuation">,</span> <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> assets<span class="token punctuation">[</span>scriptName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">closeTag</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> InlineChunkWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></template>
