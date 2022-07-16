<template><h1 id="处理其他资源" tabindex="-1"><a class="header-anchor" href="#处理其他资源" aria-hidden="true">#</a> 处理其他资源</h1>
<p>开发中可能还存在一些其他资源，如音视频等，我们也一起处理了</p>
<h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置" aria-hidden="true">#</a> 1. 配置</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(ttf|woff2?|map4|map3|avi)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"static/media/[hash:8][ext][query]"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>就是在处理字体图标资源基础上增加其他文件类型，统一处理即可</p>
<h2 id="_2-运行指令" tabindex="-1"><a class="header-anchor" href="#_2-运行指令" aria-hidden="true">#</a> 2. 运行指令</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>npx webpack
</code></pre></div><p>打开 index.html 页面查看效果</p>
</template>
