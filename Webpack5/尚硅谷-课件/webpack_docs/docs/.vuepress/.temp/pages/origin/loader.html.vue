<template><h1 id="loader-原理" tabindex="-1"><a class="header-anchor" href="#loader-原理" aria-hidden="true">#</a> Loader 原理</h1>
<h2 id="loader-概念" tabindex="-1"><a class="header-anchor" href="#loader-概念" aria-hidden="true">#</a> loader 概念</h2>
<p>帮助 webpack 将不同类型的文件转换为 webpack 可识别的模块。</p>
<h2 id="loader-执行顺序" tabindex="-1"><a class="header-anchor" href="#loader-执行顺序" aria-hidden="true">#</a> loader 执行顺序</h2>
<ol>
<li>分类</li>
</ol>
<ul>
<li>pre： 前置 loader</li>
<li>normal： 普通 loader</li>
<li>inline： 内联 loader</li>
<li>post： 后置 loader</li>
</ul>
<ol start="2">
<li>执行顺序</li>
</ol>
<ul>
<li>4 类 loader 的执行优级为：<code>pre &gt; normal &gt; inline &gt; post</code> 。</li>
<li>相同优先级的 loader 执行顺序为：<code>从右到左，从下到上</code>。</li>
</ul>
<p>例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 此时loader执行顺序：loader3 - loader2 - loader1</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader1"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader2"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader3"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 此时loader执行顺序：loader1 - loader2 - loader3</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">"pre"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader1"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 没有enforce就是normal</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader2"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"loader3"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol start="3">
<li>使用 loader 的方式</li>
</ol>
<ul>
<li>配置方式：在 <code>webpack.config.js</code> 文件中指定 loader。（pre、normal、post loader）</li>
<li>内联方式：在每个 <code>import</code> 语句中显式指定 loader。（inline loader）</li>
</ul>
<ol start="4">
<li>inline loader</li>
</ol>
<p>用法：<code>import Styles from 'style-loader!css-loader?modules!./styles.css';</code></p>
<p>含义：</p>
<ul>
<li>使用 <code>css-loader</code> 和 <code>style-loader</code> 处理 <code>styles.css</code> 文件</li>
<li>通过 <code>!</code> 将资源中的 loader 分开</li>
</ul>
<p><code>inline loader</code> 可以通过添加不同前缀，跳过其他类型 loader。</p>
<ul>
<li><code>!</code> 跳过 normal loader。</li>
</ul>
<p><code>import Styles from '!style-loader!css-loader?modules!./styles.css';</code></p>
<ul>
<li><code>-!</code> 跳过 pre 和 normal loader。</li>
</ul>
<p><code>import Styles from '-!style-loader!css-loader?modules!./styles.css';</code></p>
<ul>
<li><code>!!</code> 跳过 pre、 normal 和 post loader。</li>
</ul>
<p><code>import Styles from '!!style-loader!css-loader?modules!./styles.css';</code></p>
<h2 id="开发一个-loader" tabindex="-1"><a class="header-anchor" href="#开发一个-loader" aria-hidden="true">#</a> 开发一个 loader</h2>
<h3 id="_1-最简单的-loader" tabindex="-1"><a class="header-anchor" href="#_1-最简单的-loader" aria-hidden="true">#</a> 1. 最简单的 loader</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// loaders/loader1.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">loader1</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello loader"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>它接受要处理的源码作为参数，输出转换后的 js 代码。</p>
<h3 id="_2-loader-接受的参数" tabindex="-1"><a class="header-anchor" href="#_2-loader-接受的参数" aria-hidden="true">#</a> 2. loader 接受的参数</h3>
<ul>
<li><code>content</code> 源文件的内容</li>
<li><code>map</code> SourceMap 数据</li>
<li><code>meta</code> 数据，可以是任何内容</li>
</ul>
<h2 id="loader-分类" tabindex="-1"><a class="header-anchor" href="#loader-分类" aria-hidden="true">#</a> loader 分类</h2>
<h3 id="_1-同步-loader" tabindex="-1"><a class="header-anchor" href="#_1-同步-loader" aria-hidden="true">#</a> 1. 同步 loader</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>this.callback</code> 方法则更灵活，因为它允许传递多个参数，而不仅仅是 <code>content</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 传递map，让source-map不中断</span>
  <span class="token comment">// 传递meta，让下一个loader接收到其他参数</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 当调用 callback() 函数时，总是返回 undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-异步-loader" tabindex="-1"><a class="header-anchor" href="#_2-异步-loader" aria-hidden="true">#</a> 2. 异步 loader</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 进行异步操作</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>由于同步计算过于耗时，在 Node.js 这样的单线程环境下进行此操作并不是好的方案，我们建议尽可能地使你的 loader 异步化。但如果计算量很小，同步 loader 也是可以的。</p>
</blockquote>
<h3 id="_3-raw-loader" tabindex="-1"><a class="header-anchor" href="#_3-raw-loader" aria-hidden="true">#</a> 3. Raw Loader</h3>
<p>默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 loader。通过设置 raw 为 true，loader 可以接收原始的 Buffer。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// content是一个Buffer数据</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 开启 Raw Loader</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-pitching-loader" tabindex="-1"><a class="header-anchor" href="#_4-pitching-loader" aria-hidden="true">#</a> 4. Pitching Loader</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">remainingRequest<span class="token punctuation">,</span> precedingRequest<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"do somethings"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>webpack 会先从左到右执行 loader 链中的每个 loader 上的 pitch 方法（如果有），然后再从右到左执行 loader 链中的每个 loader 上的普通 loader 方法。</p>
<p><img src="/imgs/source/loader1.png" alt="loader执行流程"></p>
<p>在这个过程中如果任何 pitch 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 pitch 和 loader，直接进入上一个 loader 。</p>
<p><img src="/imgs/source/loader2.png" alt="loader执行流程"></p>
<h2 id="loader-api" tabindex="-1"><a class="header-anchor" href="#loader-api" aria-hidden="true">#</a> loader API</h2>
<table>
<thead>
<tr>
<th>方法名</th>
<th>含义</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>this.async</td>
<td>异步回调 loader。返回 this.callback</td>
<td>const callback = this.async()</td>
</tr>
<tr>
<td>this.callback</td>
<td>可以同步或者异步调用的并返回多个结果的函数</td>
<td>this.callback(err, content, sourceMap?, meta?)</td>
</tr>
<tr>
<td>this.getOptions(schema)</td>
<td>获取 loader 的 options</td>
<td>this.getOptions(schema)</td>
</tr>
<tr>
<td>this.emitFile</td>
<td>产生一个文件</td>
<td>this.emitFile(name, content, sourceMap)</td>
</tr>
<tr>
<td>this.utils.contextify</td>
<td>返回一个相对路径</td>
<td>this.utils.contextify(context, request)</td>
</tr>
<tr>
<td>this.utils.absolutify</td>
<td>返回一个绝对路径</td>
<td>this.utils.absolutify(context, request)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>更多文档，请查阅 <a href="https://webpack.docschina.org/api/loaders/#the-loader-context" target="_blank" rel="noopener noreferrer">webpack 官方 loader api 文档<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="手写-clean-log-loader" tabindex="-1"><a class="header-anchor" href="#手写-clean-log-loader" aria-hidden="true">#</a> 手写 clean-log-loader</h2>
<p>作用：用来清理 js 代码中的<code>console.log</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// loaders/clean-log-loader.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">cleanLogLoader</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将console.log替换为空</span>
  <span class="token keyword">return</span> content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">console\.log\(.*\);?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="手写-banner-loader" tabindex="-1"><a class="header-anchor" href="#手写-banner-loader" aria-hidden="true">#</a> 手写 banner-loader</h2>
<p>作用：给 js 代码添加文本注释</p>
<ul>
<li>loaders/banner-loader/index.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./schema.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取loader的options，同时对options内容进行校验</span>
  <span class="token comment">// schema是options的校验规则（符合 JSON schema 规则）</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> prefix <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    /*
    * Author: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    */
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prefix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \n </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>loaders/banner-loader/schema.json</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"object"</span><span class="token punctuation">,</span>
  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"additionalProperties"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="手写-babel-loader" tabindex="-1"><a class="header-anchor" href="#手写-babel-loader" aria-hidden="true">#</a> 手写 babel-loader</h2>
<p>作用：编译 js 代码，将 ES6+语法编译成 ES5-语法。</p>
<ul>
<li>下载依赖</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i @babel/core @babel/preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>loaders/babel-loader/index.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./schema.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用异步loader</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用babel对js代码进行编译</span>
  babel<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> result<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>loaders/banner-loader/schema.json</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"object"</span><span class="token punctuation">,</span>
  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"array"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"additionalProperties"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="手写-file-loader" tabindex="-1"><a class="header-anchor" href="#手写-file-loader" aria-hidden="true">#</a> 手写 file-loader</h2>
<p>作用：将文件原封不动输出出去</p>
<ul>
<li>下载包</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i loader-utils -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>loaders/file-loader.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> loaderUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"loader-utils"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fileLoader</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 根据文件内容生产一个新的文件名称</span>
  <span class="token keyword">const</span> filename <span class="token operator">=</span> loaderUtils<span class="token punctuation">.</span><span class="token function">interpolateName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">"[hash].[ext]"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    content<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出文件</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 暴露出去，给js引用。</span>
  <span class="token comment">// 记得加上''</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export default '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">'</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// loader 解决的是二进制的内容</span>
<span class="token comment">// 图片是 Buffer 数据</span>
fileLoader<span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> fileLoader<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>loader 配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"./loaders/file-loader.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"javascript/auto"</span><span class="token punctuation">,</span> <span class="token comment">// 解决图片重复打包问题</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="手写-style-loader" tabindex="-1"><a class="header-anchor" href="#手写-style-loader" aria-hidden="true">#</a> 手写 style-loader</h2>
<p>作用：动态创建 style 标签，插入 js 中的样式代码，使样式生效。</p>
<ul>
<li>loaders/style-loader.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">styleLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

styleLoader<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">remainingRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
    remainingRequest: C:\Users\86176\Desktop\source\node_modules\css-loader\dist\cjs.js!C:\Users\86176\Desktop\source\src\css\index.css
      这里是inline loader用法，代表后面还有一个css-loader等待处理

    最终我们需要将remainingRequest中的路径转化成相对路径，webpack才能处理
      希望得到：../../node_modules/css-loader/dist/cjs.js!./index.css

    所以：需要将绝对路径转化成相对路径
    要求：
      1. 必须是相对路径
      2. 相对路径必须以 ./ 或 ../ 开头
      3. 相对路径的路径分隔符必须是 / ，不能是 \
  */</span>
  <span class="token keyword">const</span> relativeRequest <span class="token operator">=</span> remainingRequest
    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"!"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">part</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 将路径转化为相对路径</span>
      <span class="token keyword">const</span> relativePath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">contextify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">,</span> part<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> relativePath<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/*
    !!${relativeRequest} 
      relativeRequest：../../node_modules/css-loader/dist/cjs.js!./index.css
      relativeRequest是inline loader用法，代表要处理的index.css资源, 使用css-loader处理
      !!代表禁用所有配置的loader，只使用inline loader。（也就是外面我们style-loader和css-loader）,它们被禁用了，只是用我们指定的inline loader，也就是css-loader

    import style from "!!${relativeRequest}"
      引入css-loader处理后的css文件
      为什么需要css-loader处理css文件，不是我们直接读取css文件使用呢？
      因为可能存在@import导入css语法，这些语法就要通过css-loader解析才能变成一个css文件，否则我们引入的css资源会缺少
    const styleEl = document.createElement('style')
      动态创建style标签
    styleEl.innerHTML = style
      将style标签内容设置为处理后的css代码
    document.head.appendChild(styleEl)
      添加到head中生效
  */</span>
  <span class="token keyword">const</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    import style from "!!</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>relativeRequest<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"
    const styleEl = document.createElement('style')
    styleEl.innerHTML = style
    document.head.appendChild(styleEl)
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token comment">// style-loader是第一个loader, 由于return导致熔断，所以其他loader不执行了（不管是normal还是pitch）</span>
  <span class="token keyword">return</span> script<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> styleLoader<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div></template>
