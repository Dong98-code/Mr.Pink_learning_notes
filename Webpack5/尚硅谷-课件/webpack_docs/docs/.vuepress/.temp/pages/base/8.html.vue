<template><h1 id="处理图片资源" tabindex="-1"><a class="header-anchor" href="#处理图片资源" aria-hidden="true">#</a> 处理图片资源</h1>
<p>过去在 Webpack4 时，我们处理图片资源通过 <code>file-loader</code> 和 <code>url-loader</code> 进行处理</p>
<p>现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源</p>
<h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置" aria-hidden="true">#</a> 1. 配置</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"main.js"</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token comment">// 省略之前的 Loader</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_2-添加图片资源" tabindex="-1"><a class="header-anchor" href="#_2-添加图片资源" aria-hidden="true">#</a> 2. 添加图片资源</h2>
<ul>
<li>src/imgs/1.png</li>
<li>src/imgs/2.gif</li>
<li>src/imgs/3.jpeg</li>
</ul>
<h2 id="_3-使用图片资源" tabindex="-1"><a class="header-anchor" href="#_3-使用图片资源" aria-hidden="true">#</a> 3. 使用图片资源</h2>
<ul>
<li>src/less/index.less</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box2</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../imgs/2.gif"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>src/sass/index.sass</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>.box3
  <span class="token property">width</span><span class="token punctuation">:</span> 100px
  <span class="token property">height</span><span class="token punctuation">:</span> 100px
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../imgs/1.png"</span><span class="token punctuation">)</span></span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>src/styl/index.styl</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>.box5
	width 100px
	height 100px
	background-image <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../imgs/3.jpeg"</span><span class="token punctuation">)</span></span>
	background-size cover
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_4-运行指令" tabindex="-1"><a class="header-anchor" href="#_4-运行指令" aria-hidden="true">#</a> 4. 运行指令</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack
</code></pre></div><p>打开 index.html 页面查看效果</p>
<h2 id="_5-输出资源情况" tabindex="-1"><a class="header-anchor" href="#_5-输出资源情况" aria-hidden="true">#</a> 5. 输出资源情况</h2>
<p>此时如果查看 dist 目录的话，会发现多了三张图片资源</p>
<p>因为 Webpack 会将所有打包好的资源输出到 dist 目录下</p>
<ul>
<li>为什么样式资源没有呢？</li>
</ul>
<p>因为经过 <code>style-loader</code> 的处理，样式资源打包到 main.js 里面去了，所以没有额外输出出来</p>
<h2 id="_6-对图片资源进行优化" tabindex="-1"><a class="header-anchor" href="#_6-对图片资源进行优化" aria-hidden="true">#</a> 6. 对图片资源进行优化</h2>
<p>将小于某个大小的图片转化成 data URI 形式（Base64 格式）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">// 小于40kb的图片会被base64处理</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>优点：减少请求数量</li>
<li>缺点：体积变得更大</li>
</ul>
<p>此时输出的图片文件就只有一张，其他图片以 data URI 形式内置到 js 中了
（注意：需要将上次打包生成的文件清空，再重新打包才有效果）</p>
</template>
