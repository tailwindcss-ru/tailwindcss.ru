(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4593],{46841:function(e,n){"use strict";n.Z=e=>Object.getOwnPropertySymbols(e).filter((n=>Object.prototype.propertyIsEnumerable.call(e,n)))},64290:function(e){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},37777:function(e){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},72461:function(e,n,t){"use strict";t.d(n,{X:function(){return h},f:function(){return f}});var s=t(92809),a=t(67294),r=t(86010),o=t(6805),i=t(85893);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},d={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const n=(0,a.useRef)(),{0:t,1:s}=(0,a.useState)(!1),{0:r,1:o}=(0,a.useState)({});return(0,a.useEffect)((()=>{if(!t)return;function e(){o({height:n.current.contentDocument.body.scrollHeight})}const s=new window.ResizeObserver(e);return e(),s.observe(n.current.contentDocument.body),()=>{s.disconnect()}}),[t]),(0,i.jsx)("iframe",c(c({},e),{},{ref:n,onLoad:()=>s(!0),style:r}))}function b({color:e,snippet:n}){return(0,i.jsx)("div",{className:(0,r.Z)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]}),children:(0,i.jsx)("pre",{className:(0,r.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]}),children:(0,i.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})})})}function h({preview:e,src:n,snippet:t,previewClassName:s,color:a="gray"}){return(0,i.jsxs)("div",{className:"relative overflow-hidden mb-8",children:[e?(0,i.jsx)("div",{className:(0,r.Z)("rounded-t-xl overflow-hidden",d[a],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):(0,i.jsx)(m,{src:n,className:(0,r.Z)("w-full rounded-t-xl",d[a])}),(0,i.jsx)(b,{color:a,snippet:t})]})}function f({preview:e,src:n,previewClassName:t,snippet:s,color:l="gray",min:c=!1}){const p=(0,a.useRef)(),h=(0,o.c$)(0),f=(0,a.useRef)(),{0:k,1:x}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=new window.ResizeObserver((()=>{h.set(0)}));return e.observe(p.current),()=>{e.disconnect()}}),[]),(0,i.jsxs)("div",{className:"relative mb-8",children:[(0,i.jsxs)("div",{ref:p,className:`relative rounded-t-xl ${u[l]}`,children:[(0,i.jsx)("div",{className:c?"md:w-88":void 0,children:(0,i.jsx)(o.ww.div,{className:"relative",style:{marginRight:(0,o.Hm)(h,(e=>-e))},children:e?(0,i.jsx)("div",{className:(0,r.Z)("rounded-t-xl",t,d[l],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):(0,i.jsx)(m,{src:n,className:(0,r.Z)("w-full rounded-t-xl",d[l],{"pointer-events-none":k})})})}),(0,i.jsx)("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none",children:(0,i.jsx)(o.ww.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(c?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)},children:(0,i.jsx)("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"},children:(0,i.jsx)("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${g[l]}`,style:{width:"0.4375rem"},children:(0,i.jsx)("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})})})})})]}),(0,i.jsx)(b,{color:l,snippet:s})]})}},97250:function(e,n,t){"use strict";t.d(n,{g:function(){return c}});t(94110);var s=t(67294),a=t(85114),r=t(86010),o=t(85893);function i({value:e}){return"string"===typeof e?(0,o.jsxs)("span",{className:"token string",children:["'",e,"'"]}):Array.isArray(e)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"token punctuation",children:"["}),e.map(((n,t)=>(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(i,{value:n}),t===e.length-1?null:(0,o.jsx)("span",{className:"token punctuation",children:", "})]},t))),(0,o.jsx)("span",{className:"token punctuation",children:"]"})]}):"boolean"===typeof e?(0,o.jsx)("span",{className:"token boolean",children:e.toString()}):e.toString()}function l({edits:e,indent:n="",type:t="inserted"}){return(0,o.jsx)("span",{className:(0,r.Z)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t}),children:Object.keys(e).map(((a,l)=>{return(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("span",{className:(0,r.Z)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t}),children:"inserted"===t?"+":"-"})," ",n,(c=a,/^[a-z_$][a-z0-9_$]*$/i.test(c)?c:`'${c}'`),(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)(i,{value:e[a]}),(0,o.jsx)("span",{className:"token punctuation",children:","}),"\n"]},l);var c}))})}function c({path:e,add:n,remove:t,before:r,after:i}){return e="string"===typeof e?e.split("."):e,(0,o.jsx)("div",{className:"prose",children:(0,o.jsx)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800",children:(0,o.jsx)("pre",{className:"language-diff",children:(0,o.jsxs)("code",{className:"language-diff",children:[(0,o.jsxs)("span",{className:"token unchanged",children:["  ",(0,o.jsx)("span",{className:"token comment",children:"// tailwind.config.js"}),"\n","  module",(0,o.jsx)("span",{className:"token punctuation",children:"."}),(0,o.jsx)("span",{className:"token property-access",children:"exports"})," ",(0,o.jsx)("span",{className:"token operator",children:"="})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n",e.map(((e,n)=>(0,o.jsxs)(s.Fragment,{children:["  ","  ".repeat(n+1),e,(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n"]},n))),r&&(0,a.X)(r).map(((n,t)=>(0,o.jsxs)(s.Fragment,{children:["  ".repeat(e.length+2),(0,o.jsx)("span",{className:"token comment",children:`// ${n}`}),"\n"]},t)))]}),t&&(0,o.jsx)(l,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&(0,o.jsx)(l,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),(0,o.jsxs)("span",{className:"token unchanged",children:[i&&(0,a.X)(i).map((n=>`${"  ".repeat(e.length+2)}${n}\n`)),e.map(((n,t)=>(0,o.jsxs)(s.Fragment,{children:["  ","  ".repeat(e.length-t),"}\n"]},t))),"  }"]})]})})})})}},14532:function(e,n,t){"use strict";t.d(n,{S:function(){return p}});var s=t(92809),a=t(97250),r=t(85114),o=t(37192),i=t(85893);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p({plugin:e,name:n}){const t=(0,r.X)(e);return n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`)),(0,i.jsxs)("div",{className:"prose",children:[(0,i.jsxs)("p",{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,o.X)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.jsx)("code",{children:"false"})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",(0,i.jsx)("code",{children:"corePlugins"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,i.jsx)(a.g,{path:"corePlugins",before:"...",add:t.reduce(((e,n)=>c(c({},e),{},{[n]:!1})),{})})]})}},87912:function(e,n,t){"use strict";t.d(n,{t:function(){return i}});var s=t(27907),a=t(37192),r=t(97250),o=t(85893);function i({plugin:e,name:n}){const t=s.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`));const i=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),l=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${(0,a.X)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${n}.`;return(0,o.jsxs)("div",{className:"prose",children:[(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:l}}),(0,o.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",(0,o.jsx)("code",{children:e})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,o.jsx)("code",{children:"variants"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",(0,o.jsx)("code",{children:"tailwind.config.js"}),"."]}),(0,o.jsxs)("p",{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",(0,a.X)(i),":"]}),(0,o.jsx)(r.g,{path:"variants.extend",before:"...",add:{[e]:i}})]})}},37192:function(e,n,t){"use strict";function s(e){return e.reduce(((n,t,s)=>0===s?t:s===e.length-1?`${n} \u0438 ${t}`:`${n}, ${t}`),"")}t.d(n,{X:function(){return s}})},3100:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(159),a=t(10219),r=(t(67294),t(3905)),o=t(41664),i=t(34304),l=t(72461),c=t(39557),p=t(27688),d=t(6693),u=t(87912),g=t(14532);const m=["components"],b={Layout:c.L,classes:{plugin:d.Z},meta:{title:"\u0421\u0442\u0438\u043b\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u044b",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u043c \u0433\u0440\u0430\u043d\u0438\u0446 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},h=p.X_;function f(e){let{components:n}=e,t=(0,a.Z)(e,m);return(0,r.kt)(h,(0,s.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"prose"},(0,r.kt)(i.X,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"border-{style}")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043b\u0435\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),(0,r.kt)(l.X,{preview:'\n  <div class="grid grid-cols-2 gap-2 lg:grid-cols-3">\n    <div class="border-solid h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-solid\n    </div>\n    <div class="border-dashed h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-dashed\n    </div>\n    <div class="border-dotted h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-dotted\n    </div>\n    <div class="border-double h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-double\n    </div>\n    <div class="border-none h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-none\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-solid</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-dashed</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-dotted</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-double</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-none</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),(0,r.kt)("div",{className:"prose"},(0,r.kt)(i.X,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0442\u0438\u043b\u0435\u043c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0441\u0442\u0438\u043b\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"md:border-dotted"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"border-dotted")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),(0,r.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,r.kt)("pre",{parentName:"div",className:"language-html"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,r.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,r.kt)("span",{parentName:"span",className:"token attr-value"},(0,r.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"border-solid ",(0,r.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"md:border-dotted")," ...",(0,r.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">")),(0,r.kt)("span",{parentName:"code",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token tag"},(0,r.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,r.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,r.kt)(o.default,{href:"/docs/responsive-design",passHref:!0},(0,r.kt)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),(0,r.kt)(i.X,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,r.kt)(i.X,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),(0,r.kt)(u.t,{plugin:"borderStyle",mdxType:"Variants"}),(0,r.kt)("div",{className:"prose"},(0,r.kt)(i.X,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)(g.S,{plugin:"borderStyle",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=b},90806:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-style",function(){return t(3100)}])},94110:function(e,n,t){"use strict";const s=t(37777),a=t(64290),r=t(46841).Z;e.exports=(e,n,t)=>{const o=[];return function e(n,t,i){let l;(t=t||{}).indent=t.indent||"\t",i=i||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),i).replace(new RegExp(l.indent,"g"),i+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||s(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const s="["+l.newLine+n.map(((s,a)=>{const r=n.length-1===a?l.newLine:","+l.newLineOrSpace;let o=e(s,t,i+t.indent);return t.transform&&(o=t.transform(n,a,o)),l.indent+o+r})).join("")+l.pad+"]";return o.pop(),c(s)}if(a(n)){let s=Object.keys(n).concat(r(n));if(t.filter&&(s=s.filter((e=>t.filter(n,e)))),0===s.length)return"{}";o.push(n);const a="{"+l.newLine+s.map(((a,r)=>{const o=s.length-1===r?l.newLine:","+l.newLineOrSpace,c="symbol"===typeof a,p=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(a),d=c||p?a:e(a,t);let u=e(n[a],t,i+t.indent);return t.transform&&(u=t.transform(n,a,u)),l.indent+String(d)+": "+u+o})).join("")+l.pad+"}";return o.pop(),c(a)}return n=String(n).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},6693:function(e,n){"use strict";n.Z=function(){return function({addUtilities:e,variants:n}){e({".border-solid":{"border-style":"solid"},".border-dashed":{"border-style":"dashed"},".border-dotted":{"border-style":"dotted"},".border-double":{"border-style":"double"},".border-none":{"border-style":"none"}},n("borderStyle"))}}}},function(e){e.O(0,[9774,3430,7991,5855,7598,7907,4380,2888,179],(function(){return n=90806,e(e.s=n);var n}));var n=e.O();_N_E=n}]);