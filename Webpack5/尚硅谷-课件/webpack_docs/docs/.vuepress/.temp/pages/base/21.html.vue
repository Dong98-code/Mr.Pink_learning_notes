<template><h1 id="css-兼容性处理" tabindex="-1"><a class="header-anchor" href="#css-兼容性处理" aria-hidden="true">#</a> Css 兼容性处理</h1>
<h2 id="_1-下载包" tabindex="-1"><a class="header-anchor" href="#_1-下载包" aria-hidden="true">#</a> 1. 下载包</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm i postcss-loader postcss postcss-preset-env -D
</code></pre></div><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h2>
<ul>
<li>webpack.prod.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"eslint-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/js/main.js"</span><span class="token punctuation">,</span>
		<span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
					<span class="token string">"css-loader"</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
						<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
									<span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// 能解决大多数样式兼容性问题</span>
								<span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
					<span class="token string">"css-loader"</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
						<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
									<span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// 能解决大多数样式兼容性问题</span>
								<span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token string">"less-loader"</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
					<span class="token string">"css-loader"</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
						<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
									<span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// 能解决大多数样式兼容性问题</span>
								<span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token string">"sass-loader"</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
					<span class="token string">"css-loader"</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
						<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
									<span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// 能解决大多数样式兼容性问题</span>
								<span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token string">"stylus-loader"</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/imgs/[hash:8][ext][query]"</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(ttf|woff2?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/media/[hash:8][ext][query]"</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../public/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/css/main.css"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br></div></div><h2 id="_3-合并配置" tabindex="-1"><a class="header-anchor" href="#_3-合并配置" aria-hidden="true">#</a> 3. 合并配置</h2>
<ul>
<li>webpack.prod.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"eslint-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mini-css-extract-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取处理样式的Loaders</span>
<span class="token keyword">const</span> <span class="token function-variable function">getStyleLoaders</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">preProcessor</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>
		MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
		<span class="token string">"css-loader"</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"postcss-loader"</span><span class="token punctuation">,</span>
			<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token string">"postcss-preset-env"</span><span class="token punctuation">,</span> <span class="token comment">// 能解决大多数样式兼容性问题</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		preProcessor<span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/js/main.js"</span><span class="token punctuation">,</span>
		<span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span><span class="token string">"less-loader"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span><span class="token string">"sass-loader"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span><span class="token string">"stylus-loader"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/imgs/[hash:8][ext][query]"</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(ttf|woff2?)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>
				<span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/media/[hash:8][ext][query]"</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
				<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../public/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/css/main.css"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="_4-运行指令" tabindex="-1"><a class="header-anchor" href="#_4-运行指令" aria-hidden="true">#</a> 4. 运行指令</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm run build
</code></pre></div></template>
