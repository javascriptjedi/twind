import{o as n,c as t,a,b as e,t as s,d as o}from"./app.4ddadaaa.js";const p='{"title":"Overwriting Styles","description":"Learn how to overwrite styles in your Twind project.","frontmatter":{"title":"Overwriting Styles","editLink":true,"navbar":true,"sidebar":true,"head":[["meta",{"name":"description","content":"Learn how to overwrite styles in your Twind project."}],["meta",{"name":"keywords","content":"twind tailwind css-in-js"}]]},"headers":[{"level":2,"title":"The apply function (recommended)","slug":"the-apply-function-recommended"},{"level":2,"title":"The override directive","slug":"the-override-directive"},{"level":2,"title":"The !important directive","slug":"the-important-directive"}],"relativePath":"handbook/overwriting-styles.md","lastUpdated":1618986787681}',i={},c={id:"frontmatter-title"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=o('<p>Twind provides three primary ways to overwrite styles:</p><ul><li><a href="#the-apply-function-recommended">The <code>apply</code> function (recommended)</a></li><li><a href="#the-override-directive">The <code>override</code> directive</a></li><li><a href="#the-important-directive">The <code>!important</code> directive</a></li></ul><h2 id="the-apply-function-recommended"><a class="header-anchor" href="#the-apply-function-recommended" aria-hidden="true">#</a> The <code>apply</code> function (recommended)</h2><p>The Twind module exposes an <code>apply</code> function, which can be used to define a collection of Twind classes that can later be overwritten in a <code>tw</code> call.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apply<span class="token punctuation">,</span> tw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind&#39;</span>\n\n<span class="token keyword">const</span> userSuppliedClassName <span class="token operator">=</span> <span class="token string">&#39;text-blue-800&#39;</span>\n<span class="token keyword">const</span> appliedClassName <span class="token operator">=</span> apply<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">text-gray-800</span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">const</span> classNames <span class="token operator">=</span> <span class="token function">tw</span><span class="token punctuation">(</span>appliedClassName<span class="token punctuation">,</span> userSuppliedClassName<span class="token punctuation">)</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  &lt;p class=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>classNames<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;\n    This text will be blue\n  &lt;/p&gt;\n</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div><p>Any class names passed into the <code>apply</code> function will be merged into a single class name like <code>tw-****</code>. Once passed into a <code>tw</code> call, all of the styles will be merged and any styles defined outside of the <code>apply</code> call will take precedence. You can think of any classes inside of an <code>apply</code> function to be default values that can be overwritten at runtime.</p><blockquote><p>Note: The <code>apply</code> function does not apply any styles to the document until it is passed into a <code>tw</code> call.</p></blockquote><h2 id="the-override-directive"><a class="header-anchor" href="#the-override-directive" aria-hidden="true">#</a> The <code>override</code> directive</h2><p>The <code>override</code> directive allows you to write styles directly inside of a <code>tw</code> call that can be overwritten.</p><p>When to use: When you can&#39;t use <code>apply</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;twind&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> userSuppliedClassNames <span class="token operator">=</span> <span class="token string">&quot;text-blue-800&quot;</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  &lt;p class=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tw<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userSuppliedClassNames<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> override:(text-gray-800)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;\n    This text will be blue\n  &lt;/p&gt;\n</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div><h2 id="the-important-directive"><a class="header-anchor" href="#the-important-directive" aria-hidden="true">#</a> The <code>!important</code> directive</h2><p>You can also apply the CSS <code>!important</code> to a style by appending classes with an exclamation mark (<code>!</code>).</p><p>When to use: Last resort. Only when you can&#39;t use <code>apply</code> or <code>override</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> tw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;twind&quot;</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  &lt;p class=</span><span class="token template-punctuation string">`</span></span>$<span class="token punctuation">{</span>tw<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">text-gray-800 text-blue-800!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&gt;\n    This text will be blue\n  &lt;/p&gt;\n</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div>',15);i.render=function(o,p,i,d,u,k){return n(),t("div",null,[a("h1",c,[l,e(" "+s(o.$frontmatter.title),1)]),r])};export default i;export{p as __pageData};
