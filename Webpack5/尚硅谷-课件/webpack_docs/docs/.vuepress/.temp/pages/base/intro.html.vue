<template><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1>
<p><strong><code>Webpack</code> 是一个静态资源打包工具。</strong></p>
<p>它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。</p>
<p>输出的文件就是编译好的文件，就可以在浏览器段运行了。</p>
<p>我们将 <code>Webpack</code> 输出的文件叫做 <code>bundle</code>。</p>
<h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2>
<p>Webpack 本身功能是有限的:</p>
<ul>
<li>开发模式：仅能编译 JS 中的 <code>ES Module</code> 语法</li>
<li>生产模式：能编译 JS 中的 <code>ES Module</code> 语法，还能压缩 JS 代码</li>
</ul>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2>
<h3 id="_1-资源目录" tabindex="-1"><a class="header-anchor" href="#_1-资源目录" aria-hidden="true">#</a> 1. 资源目录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├── webpack_code # 项目根目录（所有指令必须在这个目录运行）
│   ├── src # 项目源码目录
│   │    ├── js # js文件目录
│   │    │    ├── count.js
│   │    │    └── sum.js
│   │    └── main.js # 项目主文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-创建文件" tabindex="-1"><a class="header-anchor" href="#_2-创建文件" aria-hidden="true">#</a> 2. 创建文件</h3>
<ul>
<li>count.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>sum.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> p <span class="token operator">+</span> c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>main.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> count <span class="token keyword">from</span> <span class="token string">"./js/count"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sum <span class="token keyword">from</span> <span class="token string">"./js/sum"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-下载依赖" tabindex="-1"><a class="header-anchor" href="#_3-下载依赖" aria-hidden="true">#</a> 3. 下载依赖</h3>
<p>打开终端，来到项目根目录。运行以下指令：</p>
<ul>
<li>初始化<code>package.json</code></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时会生成一个基础的 <code>package.json</code> 文件。</p>
<p><strong>需要注意的是 <code>package.json</code> 中 <code>name</code> 字段不能叫做 <code>webpack</code>, 否则下一步会报错</strong></p>
<ul>
<li>下载依赖</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-启用-webpack" tabindex="-1"><a class="header-anchor" href="#_4-启用-webpack" aria-hidden="true">#</a> 4. 启用 Webpack</h3>
<ul>
<li>开发模式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx webpack ./src/main.js --mode=development
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>生产模式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx webpack ./src/main.js --mode=production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npx webpack</code>: 是用来运行本地安装 <code>Webpack</code> 包的。</p>
<p><code>./src/main.js</code>: 指定 <code>Webpack</code> 从 <code>main.js</code> 文件开始打包，不但会打包 <code>main.js</code>，还会将其依赖也一起打包进来。</p>
<p><code>--mode=xxx</code>：指定模式（环境）。</p>
<h3 id="_5-观察输出文件" tabindex="-1"><a class="header-anchor" href="#_5-观察输出文件" aria-hidden="true">#</a> 5. 观察输出文件</h3>
<p>默认 <code>Webpack</code> 会将文件打包输出到 <code>dist</code> 目录下，我们查看 <code>dist</code> 目录下文件情况就好了</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p><code>Webpack</code> 本身功能比较少，只能处理 <code>js</code> 资源，一旦遇到 <code>css</code> 等其他资源就会报错。</p>
<p>所以我们学习 <code>Webpack</code>，就是主要学习如何处理其他资源。</p>
</template>
