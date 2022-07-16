<template><h1 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h1>
<h2 id="路径别名" tabindex="-1"><a class="header-anchor" href="#路径别名" aria-hidden="true">#</a> 路径别名</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>开发时当组件层级太深时，我们引入其他目录下文件需要回退很多层目录，很麻烦。</p>
<p>路径别名则提供另外一种写路径的方式，或者说路径简写，让我们可以从根路径出发直接写路径，简单方便。</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// tsconfig.extend.json</span>
<span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
		<span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"@api/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/api/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"@assets/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/assets/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"@comps/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/components/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"@utils/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/utils/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token property">"@pages/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/pages/*"</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>内部还做了两件事：</p>
<ol>
<li>实现功能：通过插件将上述配置加载到 <code>craco.config.js</code> , 最终会修改 <code>React</code> 脚手架配置，所以就可以项目中使用上述路径别名。</li>
<li>路径提示：通过extends将上述配置加载到 <code>tsconfig.json</code> 中，此时在 <code>VSCode</code> 写代码才会有路径提示。</li>
</ol>
<p>我们将来如果要添加新的路径别名，只需要修改 <code>tsconfig.extend.json</code> 即可。</p>
<h2 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h2>
<h3 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h3>
<p>代理服务器可以解决开发时的跨域问题。</p>
<h3 id="原理图" tabindex="-1"><a class="header-anchor" href="#原理图" aria-hidden="true">#</a> 原理图</h3>
<p><img src="/imgs/intro/proxy.png" alt="代理服务器"></p>
<h3 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h3>
<p>激活开发服务器代理功能，就要进行代理服务武配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// craco.config.js</span>
<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"craco-less"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CracoAlias <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"craco-alias"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./mock"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token comment">// 自定义主题</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">plugin</span><span class="token operator">:</span> CracoLessPlugin<span class="token punctuation">,</span>
			<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">lessLoaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token comment">// modifyVars: { "@primary-color": "#1DA57A" },</span>
						<span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 路径别名</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">plugin</span><span class="token operator">:</span> CracoAlias<span class="token punctuation">,</span>
			<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"tsconfig"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">tsConfigPath</span><span class="token operator">:</span> <span class="token string">"./tsconfig.extend.json"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token comment">// 开发服务器配置</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 激活代理服务器</span>
		<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// 将来以/dev-api开头的请求，就会被开发服务器转发到目标服务器去。</span>
			<span class="token string-property property">"/dev-api"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 需要转发的请求前缀</span>
				<span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">"http://syt-api.atguigu.cn"</span><span class="token punctuation">,</span> <span class="token comment">// 目标服务器地址 </span>
				<span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span>
				<span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 路径重写</span>
					<span class="token string-property property">"^/dev-api"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// mock服务配置</span>
		<span class="token function-variable function">onAfterSetupMiddleware</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">devServer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">mock</span><span class="token punctuation">(</span>devServer<span class="token punctuation">.</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>需要注意的是，一旦生产环境打包项目，服务器以及相关配置并不会打包进去，所以如果运行打包后的项目，还会产生跨域问题。</p>
<p>最终还是需要服务端来解决，将来我们会学习 <code>nginx</code> 来解决此问题。</p>
</template>
