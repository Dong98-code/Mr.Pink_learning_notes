<template><h1 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h1>
<p>在开始使用 <code>Webpack</code> 之前，我们需要对 <code>Webpack</code> 的配置有一定的认识。</p>
<h2 id="_5-大核心概念" tabindex="-1"><a class="header-anchor" href="#_5-大核心概念" aria-hidden="true">#</a> 5 大核心概念</h2>
<ol>
<li>entry（入口）</li>
</ol>
<p>指示 Webpack 从哪个文件开始打包</p>
<ol start="2">
<li>output（输出）</li>
</ol>
<p>指示 Webpack 打包完的文件输出到哪里去，如何命名等</p>
<ol start="3">
<li>loader（加载器）</li>
</ol>
<p>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析</p>
<ol start="4">
<li>plugins（插件）</li>
</ol>
<p>扩展 Webpack 的功能</p>
<ol start="5">
<li>mode（模式）</li>
</ol>
<p>主要由两种模式：</p>
<ul>
<li>开发模式：development</li>
<li>生产模式：production</li>
</ul>
<h2 id="准备-webpack-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-webpack-配置文件" aria-hidden="true">#</a> 准备 Webpack 配置文件</h2>
<p>在项目根目录下新建文件：<code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范</p>
<h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2>
<ol>
<li>配置文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Node.js的核心模块，专门用来处理文件路径</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token comment">// 相对路径和绝对路径都行</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// path: 文件输出目录，必须是绝对路径</span>
    <span class="token comment">// path.resolve()方法返回一个绝对路径</span>
    <span class="token comment">// __dirname 当前文件的文件夹绝对路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// filename: 输出文件名</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"main.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="2">
<li>运行指令</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack
</code></pre></div><p>此时功能和之前一样，也不能处理样式资源</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 Webpack 的功能</p>
<p>我们后面会以两个模式来分别搭建 Webpack 的配置，先进行开发模式，再完成生产模式</p>
</template>
