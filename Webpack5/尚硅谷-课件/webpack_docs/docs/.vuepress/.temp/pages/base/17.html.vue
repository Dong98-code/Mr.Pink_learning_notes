<template><h1 id="开发服务器-自动化" tabindex="-1"><a class="header-anchor" href="#开发服务器-自动化" aria-hidden="true">#</a> 开发服务器&amp;自动化</h1>
<p>每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化</p>
<h2 id="_1-下载包" tabindex="-1"><a class="header-anchor" href="#_1-下载包" aria-hidden="true">#</a> 1. 下载包</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm i webpack-dev-server -D
</code></pre></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2>
<ul>
<li>webpack.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// 其他省略</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器域名</span>
		<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">"3000"</span><span class="token punctuation">,</span> <span class="token comment">// 启动服务器端口号</span>
		<span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动打开浏览器</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_3-运行指令" tabindex="-1"><a class="header-anchor" href="#_3-运行指令" aria-hidden="true">#</a> 3. 运行指令</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack serve
</code></pre></div><p><strong>注意运行指令发生了变化</strong></p>
<p>并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。</p>
<p>开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我们并不需要知道。</p>
</template>
