(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3140],{46841:function(e,n){"use strict";n.Z=e=>Object.getOwnPropertySymbols(e).filter((n=>Object.prototype.propertyIsEnumerable.call(e,n)))},64290:function(e){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},37777:function(e){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},72461:function(e,n,t){"use strict";t.d(n,{X:function(){return b},f:function(){return h}});var a=t(92809),r=t(67294),s=t(86010),i=t(6805),o=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},d={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const n=(0,r.useRef)(),{0:t,1:a}=(0,r.useState)(!1),{0:s,1:i}=(0,r.useState)({});return(0,r.useEffect)((()=>{if(!t)return;function e(){i({height:n.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(n.current.contentDocument.body),()=>{a.disconnect()}}),[t]),(0,o.jsx)("iframe",l(l({},e),{},{ref:n,onLoad:()=>a(!0),style:s}))}function f({color:e,snippet:n}){return(0,o.jsx)("div",{className:(0,s.Z)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]}),children:(0,o.jsx)("pre",{className:(0,s.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]}),children:(0,o.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})})})}function b({preview:e,src:n,snippet:t,previewClassName:a,color:r="gray"}){return(0,o.jsxs)("div",{className:"relative overflow-hidden mb-8",children:[e?(0,o.jsx)("div",{className:(0,s.Z)("rounded-t-xl overflow-hidden",d[r],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):(0,o.jsx)(m,{src:n,className:(0,s.Z)("w-full rounded-t-xl",d[r])}),(0,o.jsx)(f,{color:r,snippet:t})]})}function h({preview:e,src:n,previewClassName:t,snippet:a,color:c="gray",min:l=!1}){const p=(0,r.useRef)(),b=(0,i.c$)(0),h=(0,r.useRef)(),{0:x,1:k}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=new window.ResizeObserver((()=>{b.set(0)}));return e.observe(p.current),()=>{e.disconnect()}}),[]),(0,o.jsxs)("div",{className:"relative mb-8",children:[(0,o.jsxs)("div",{ref:p,className:`relative rounded-t-xl ${u[c]}`,children:[(0,o.jsx)("div",{className:l?"md:w-88":void 0,children:(0,o.jsx)(i.ww.div,{className:"relative",style:{marginRight:(0,i.Hm)(b,(e=>-e))},children:e?(0,o.jsx)("div",{className:(0,s.Z)("rounded-t-xl",t,d[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):(0,o.jsx)(m,{src:n,className:(0,s.Z)("w-full rounded-t-xl",d[c],{"pointer-events-none":x})})})}),(0,o.jsx)("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none",children:(0,o.jsx)(i.ww.div,{drag:"x",_dragX:b,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:b},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)},children:(0,o.jsx)("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"},children:(0,o.jsx)("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${g[c]}`,style:{width:"0.4375rem"},children:(0,o.jsx)("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})})})})})]}),(0,o.jsx)(f,{color:c,snippet:a})]})}},97250:function(e,n,t){"use strict";t.d(n,{g:function(){return l}});t(94110);var a=t(67294),r=t(85114),s=t(86010),i=t(85893);function o({value:e}){return"string"===typeof e?(0,i.jsxs)("span",{className:"token string",children:["'",e,"'"]}):Array.isArray(e)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"token punctuation",children:"["}),e.map(((n,t)=>(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(o,{value:n}),t===e.length-1?null:(0,i.jsx)("span",{className:"token punctuation",children:", "})]},t))),(0,i.jsx)("span",{className:"token punctuation",children:"]"})]}):"boolean"===typeof e?(0,i.jsx)("span",{className:"token boolean",children:e.toString()}):e.toString()}function c({edits:e,indent:n="",type:t="inserted"}){return(0,i.jsx)("span",{className:(0,s.Z)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t}),children:Object.keys(e).map(((r,c)=>{return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("span",{className:(0,s.Z)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t}),children:"inserted"===t?"+":"-"})," ",n,(l=r,/^[a-z_$][a-z0-9_$]*$/i.test(l)?l:`'${l}'`),(0,i.jsx)("span",{className:"token operator",children:":"})," ",(0,i.jsx)(o,{value:e[r]}),(0,i.jsx)("span",{className:"token punctuation",children:","}),"\n"]},c);var l}))})}function l({path:e,add:n,remove:t,before:s,after:o}){return e="string"===typeof e?e.split("."):e,(0,i.jsx)("div",{className:"prose",children:(0,i.jsx)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800",children:(0,i.jsx)("pre",{className:"language-diff",children:(0,i.jsxs)("code",{className:"language-diff",children:[(0,i.jsxs)("span",{className:"token unchanged",children:["  ",(0,i.jsx)("span",{className:"token comment",children:"// tailwind.config.js"}),"\n","  module",(0,i.jsx)("span",{className:"token punctuation",children:"."}),(0,i.jsx)("span",{className:"token property-access",children:"exports"})," ",(0,i.jsx)("span",{className:"token operator",children:"="})," ",(0,i.jsx)("span",{className:"token punctuation",children:"{"}),"\n",e.map(((e,n)=>(0,i.jsxs)(a.Fragment,{children:["  ","  ".repeat(n+1),e,(0,i.jsx)("span",{className:"token operator",children:":"})," ",(0,i.jsx)("span",{className:"token punctuation",children:"{"}),"\n"]},n))),s&&(0,r.X)(s).map(((n,t)=>(0,i.jsxs)(a.Fragment,{children:["  ".repeat(e.length+2),(0,i.jsx)("span",{className:"token comment",children:`// ${n}`}),"\n"]},t)))]}),t&&(0,i.jsx)(c,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&(0,i.jsx)(c,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),(0,i.jsxs)("span",{className:"token unchanged",children:[o&&(0,r.X)(o).map((n=>`${"  ".repeat(e.length+2)}${n}\n`)),e.map(((n,t)=>(0,i.jsxs)(a.Fragment,{children:["  ","  ".repeat(e.length-t),"}\n"]},t))),"  }"]})]})})})})}},14532:function(e,n,t){"use strict";t.d(n,{S:function(){return p}});var a=t(92809),r=t(97250),s=t(85114),i=t(37192),o=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p({plugin:e,name:n}){const t=(0,s.X)(e);return n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`)),(0,o.jsxs)("div",{className:"prose",children:[(0,o.jsxs)("p",{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,i.X)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.jsx)("code",{children:"false"})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",(0,o.jsx)("code",{children:"corePlugins"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,o.jsx)(r.g,{path:"corePlugins",before:"...",add:t.reduce(((e,n)=>l(l({},e),{},{[n]:!1})),{})})]})}},87912:function(e,n,t){"use strict";t.d(n,{t:function(){return o}});var a=t(27907),r=t(37192),s=t(97250),i=t(85893);function o({plugin:e,name:n}){const t=a.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`));const o=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),c=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${(0,r.X)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${n}.`;return(0,i.jsxs)("div",{className:"prose",children:[(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:c}}),(0,i.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",(0,i.jsx)("code",{children:e})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.jsx)("code",{children:"variants"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",(0,i.jsx)("code",{children:"tailwind.config.js"}),"."]}),(0,i.jsxs)("p",{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",(0,r.X)(o),":"]}),(0,i.jsx)(s.g,{path:"variants.extend",before:"...",add:{[e]:o}})]})}},37192:function(e,n,t){"use strict";function a(e){return e.reduce(((n,t,a)=>0===a?t:a===e.length-1?`${n} \u0438 ${t}`:`${n}, ${t}`),"")}t.d(n,{X:function(){return a}})},26928:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a=t(159),r=t(10219),s=(t(67294),t(3905)),i=t(41664),o=t(34304),c=t(72461),l=t(39557),p=t(27688),d=t(1976),u=t(87912),g=t(14532);const m=["components"],f={Layout:l.L,classes:{plugin:d.Z},meta:{title:"\u0423\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445, \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},b=p.X_;function h(e){let{components:n}=e,t=(0,r.Z)(e,m);return(0,s.kt)(b,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"prose"},(0,s.kt)(o.X,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,s.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,s.kt)("inlineCode",{parentName:"p"},"decoration-slice")," \u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"decoration-clone"),", \u0447\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0442\u0430\u043a\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u0430\u043a ",(0,s.kt)("inlineCode",{parentName:"p"},"background"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"border"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"border-image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"box-shadow"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"clip-page"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"margin")," \u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"padding"),", \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u044b\u043b \u043e\u0434\u043d\u0438\u043c \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u043c \u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0431\u043b\u043e\u043a\u043e\u043c.")),(0,s.kt)(c.X,{preview:'\n  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">\n    <span class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">\n      \u041f\u0440\u0438\u0432\u0435\u0442<br>\n      \u041c\u0438\u0440\n    </span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">decoration-clone</span> bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  \u041f\u0440\u0438\u0432\u0435\u0442<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n  \u041c\u0438\u0440\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),(0,s.kt)("div",{className:"prose"},(0,s.kt)(o.X,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,s.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",(0,s.kt)("inlineCode",{parentName:"p"},"box-decoration-break")," \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,s.kt)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"box-decoration-break"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"md:decoration-slice"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,s.kt)("inlineCode",{parentName:"p"},"decoration-slice")," \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),(0,s.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,s.kt)("pre",{parentName:"div",className:"language-html"},(0,s.kt)("code",{parentName:"pre",className:"language-html"},(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,s.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,s.kt)("span",{parentName:"span",className:"token attr-value"},(0,s.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"decoration-clone ",(0,s.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"md:decoration-slice")," ...",(0,s.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,s.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,s.kt)("span",{parentName:"code",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token tag"},(0,s.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,s.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,s.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,s.kt)(i.default,{href:"/docs/responsive-design",passHref:!0},(0,s.kt)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),(0,s.kt)(o.X,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,s.kt)(o.X,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),(0,s.kt)(u.t,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Variants"}),(0,s.kt)("div",{className:"prose"},(0,s.kt)(o.X,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),(0,s.kt)(g.S,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},38638:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-decoration-break",function(){return t(26928)}])},94110:function(e,n,t){"use strict";const a=t(37777),r=t(64290),s=t(46841).Z;e.exports=(e,n,t)=>{const i=[];return function e(n,t,o){let c;(t=t||{}).indent=t.indent||"\t",o=o||"",c=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+t.indent)};if(-1!==i.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";i.push(n);const a="["+c.newLine+n.map(((a,r)=>{const s=n.length-1===r?c.newLine:","+c.newLineOrSpace;let i=e(a,t,o+t.indent);return t.transform&&(i=t.transform(n,r,i)),c.indent+i+s})).join("")+c.pad+"]";return i.pop(),l(a)}if(r(n)){let a=Object.keys(n).concat(s(n));if(t.filter&&(a=a.filter((e=>t.filter(n,e)))),0===a.length)return"{}";i.push(n);const r="{"+c.newLine+a.map(((r,s)=>{const i=a.length-1===s?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),d=l||p?r:e(r,t);let u=e(n[r],t,o+t.indent);return t.transform&&(u=t.transform(n,r,u)),c.indent+String(d)+": "+u+i})).join("")+c.pad+"}";return i.pop(),l(r)}return n=String(n).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},1976:function(e,n){"use strict";n.Z=function(){return function({addUtilities:e,variants:n}){e({".decoration-slice":{"box-decoration-break":"slice"},".decoration-clone":{"box-decoration-break":"clone"}},n("boxDecorationBreak"))}}}},function(e){e.O(0,[9774,3430,7991,5855,7598,7907,4380,2888,179],(function(){return n=38638,e(e.s=n);var n}));var n=e.O();_N_E=n}]);