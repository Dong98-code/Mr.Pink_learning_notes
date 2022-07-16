<template><h1 id="处理-js-资源" tabindex="-1"><a class="header-anchor" href="#处理-js-资源" aria-hidden="true">#</a> 处理 js 资源</h1>
<p>有人可能会问，js 资源 Webpack 不能已经处理了吗，为什么我们还要处理呢？</p>
<p>原因是 Webpack 对 js 处理是有限的，只能编译 js 中 ES 模块化语法，不能编译其他语法，导致 js 不能在 IE 等浏览器运行，所以我们希望做一些兼容性处理。</p>
<p>其次开发中，团队对代码格式是有严格要求的，我们不能由肉眼去检测代码格式，需要使用专业的工具来检测。</p>
<ul>
<li>针对 js 兼容性处理，我们使用 Babel 来完成</li>
<li>针对代码格式，我们使用 Eslint 来完成</li>
</ul>
<p>我们先完成 Eslint，检测代码格式无误后，在由 Babel 做代码兼容性处理</p>
<h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> Eslint</h2>
<p>可组装的 JavaScript 和 JSX 检查工具。</p>
<p>这句话意思就是：它是用来检测 js 和 jsx 语法的工具，可以配置各项功能</p>
<p>我们使用 Eslint，关键是写 Eslint 配置文件，里面写上各种 rules 规则，将来运行 Eslint 时就会以写的规则对代码进行检查</p>
<h3 id="_1-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-配置文件" aria-hidden="true">#</a> 1. 配置文件</h3>
<p>配置文件由很多种写法：</p>
<ul>
<li><code>.eslintrc.*</code>：新建文件，位于项目根目录
<ul>
<li><code>.eslintrc</code></li>
<li><code>.eslintrc.js</code></li>
<li><code>.eslintrc.json</code></li>
<li>区别在于配置格式不一样</li>
</ul>
</li>
<li><code>package.json</code> 中 <code>eslintConfig</code>：不需要创建文件，在原有文件基础上写</li>
</ul>
<p>ESLint 会查找和自动读取它们，所以以上配置文件只需要存在一个即可</p>
<h3 id="_2-具体配置" tabindex="-1"><a class="header-anchor" href="#_2-具体配置" aria-hidden="true">#</a> 2. 具体配置</h3>
<p>我们以 <code>.eslintrc.js</code> 配置文件为例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解析选项</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 具体检查规则</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 继承其他规则</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol>
<li>parserOptions 解析选项</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// ES 语法版本</span>
  <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span> <span class="token comment">// ES 模块化</span>
  <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// ES 其他特性</span>
    <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 如果是 React 项目，就需要开启 jsx 语法</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li>rules 具体规则</li>
</ol>
<ul>
<li><code>&quot;off&quot;</code> 或 <code>0</code> - 关闭规则</li>
<li><code>&quot;warn&quot;</code> 或 <code>1</code> - 开启规则，使用警告级别的错误：<code>warn</code> (不会导致程序退出)</li>
<li><code>&quot;error&quot;</code> 或 <code>2</code> - 开启规则，使用错误级别的错误：<code>error</code> (当被触发的时候，程序会退出)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token comment">// 禁止使用分号</span>
  <span class="token string-property property">'array-callback-return'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token comment">// 强制数组方法的回调函数中有 return 语句，否则警告</span>
  <span class="token string-property property">'default-case'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token comment">// 要求 switch 语句中有 default 分支，否则警告</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">commentPattern</span><span class="token operator">:</span> <span class="token string">'^no default$'</span> <span class="token punctuation">}</span> <span class="token comment">// 允许在最后注释 no default, 就不会有警告了</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token comment">// 强制使用 === 和 !==，否则警告</span>
    <span class="token string">'smart'</span> <span class="token comment">// https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>更多规则详见：<a href="https://eslint.bootcss.com/docs/rules/" target="_blank" rel="noopener noreferrer">规则文档<ExternalLinkIcon/></a></p>
<ol start="3">
<li>extends 继承</li>
</ol>
<p>开发中一点点写 rules 规则太费劲了，所以有更好的办法，继承现有的规则。</p>
<p>现有以下较为有名的规则：</p>
<ul>
<li><a href="https://eslint.bootcss.com/docs/rules/" target="_blank" rel="noopener noreferrer">Eslint 官方的规则<ExternalLinkIcon/></a>：<code>eslint:recommended</code></li>
<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-eslint" target="_blank" rel="noopener noreferrer">Vue Cli 官方的规则<ExternalLinkIcon/></a>：<code>plugin:vue/essential</code></li>
<li><a href="https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app" target="_blank" rel="noopener noreferrer">React Cli 官方的规则<ExternalLinkIcon/></a>：<code>react-app</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 例如在React项目中，我们可以这样写配置</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react-app"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 我们的规则会覆盖掉react-app的规则</span>
    <span class="token comment">// 所以想要修改规则直接改就是了</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"warn"</span><span class="token punctuation">,</span> <span class="token string">"smart"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-在-webpack-中使用" tabindex="-1"><a class="header-anchor" href="#_3-在-webpack-中使用" aria-hidden="true">#</a> 3. 在 Webpack 中使用</h3>
<ol>
<li>下载包</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm i eslint-webpack-plugin eslint -D
</code></pre></div><ol start="2">
<li>定义 Eslint 配置文件</li>
</ol>
<ul>
<li>.eslintrc.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承 Eslint 规则</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint:recommended"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 启用node中全局变量</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"no-var"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 不能使用 var 定义变量</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3">
<li>修改 js 文件代码</li>
</ol>
<ul>
<li>main.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./math"</span><span class="token punctuation">;</span>
<span class="token comment">// 引入 Css 资源，Webpack才会对其打包</span>
<span class="token keyword">import</span> <span class="token string">"./css/index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./css/iconfont.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./less/index.less"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./sass/index.sass"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./sass/index.scss"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styl/index.styl"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"世纪难题：1 + 1 = "</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4">
<li>配置</li>
</ol>
<ul>
<li>webpack.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"eslint-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/js/main.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 省略</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定检查文件的根目录</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="5">
<li>运行指令</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack
</code></pre></div><p>在控制台查看 Eslint 检查效果</p>
<h3 id="_4-vscode-eslint-插件" tabindex="-1"><a class="header-anchor" href="#_4-vscode-eslint-插件" aria-hidden="true">#</a> 4. VSCode Eslint 插件</h3>
<p>打开 VSCode，下载 Eslint 插件，即可不用编译就能看到错误，可以提前解决</p>
<h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h2>
<p>JavaScript 编译器。</p>
<p>主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中</p>
<h3 id="_1-配置文件-1" tabindex="-1"><a class="header-anchor" href="#_1-配置文件-1" aria-hidden="true">#</a> 1. 配置文件</h3>
<p>配置文件由很多种写法：</p>
<ul>
<li><code>babel.config.*</code>：新建文件，位于项目根目录
<ul>
<li><code>babel.config.js</code></li>
<li><code>babel.config.json</code></li>
</ul>
</li>
<li><code>.babelrc.*</code>：新建文件，位于项目根目录
<ul>
<li><code>.babelrc</code></li>
<li><code>.babelrc.js</code></li>
<li><code>.babelrc.json</code></li>
</ul>
</li>
<li><code>package.json</code> 中 <code>babel</code>：不需要创建文件，在原有文件基础上写</li>
</ul>
<p>Babel 会查找和自动读取它们，所以以上配置文件只需要存在一个即可</p>
<h3 id="_2-具体配置-1" tabindex="-1"><a class="header-anchor" href="#_2-具体配置-1" aria-hidden="true">#</a> 2. 具体配置</h3>
<p>我们以 <code>babel.config.js</code> 配置文件为例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 预设</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol>
<li>presets 预设</li>
</ol>
<p>简单理解：就是一组 Babel 插件, 扩展 Babel 功能</p>
<ul>
<li><code>@babel/preset-env</code>: 一个智能预设，允许您使用最新的 JavaScript。</li>
<li><code>@babel/preset-react</code>：一个用来编译 React jsx 语法的预设</li>
<li><code>@babel/preset-typescript</code>：一个用来编译 TypeScript 语法的预设</li>
</ul>
<h3 id="_3-在-webpack-中使用-1" tabindex="-1"><a class="header-anchor" href="#_3-在-webpack-中使用-1" aria-hidden="true">#</a> 3. 在 Webpack 中使用</h3>
<ol>
<li>下载包</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npm i babel-loader @babel/core @babel/preset-env -D
</code></pre></div><ol start="2">
<li>定义 Babel 配置文件</li>
</ol>
<ul>
<li>babel.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>修改 js 文件代码</li>
</ol>
<ul>
<li>main.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./math"</span><span class="token punctuation">;</span>
<span class="token comment">// 引入 Css 资源，Webpack才会对其打包</span>
<span class="token keyword">import</span> <span class="token string">"./css/index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./css/iconfont.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./less/index.less"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./sass/index.sass"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./sass/index.scss"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styl/index.styl"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"世纪难题：1 + 1 = "</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4">
<li>配置</li>
</ol>
<ul>
<li>webpack.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"eslint-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/main.js"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/js/main.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 省略</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 排除node_modules代码不编译</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定检查文件的根目录</span>
      <span class="token literal-property property">context</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="5">
<li>运行指令</li>
</ol>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack
</code></pre></div><p>打开打包后的 <code>dist/static/js/main.js</code> 文件查看，会发现箭头函数等 ES6 语法已经转换了</p>
</template>
