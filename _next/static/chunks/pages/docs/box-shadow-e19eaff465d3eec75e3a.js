(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6549],{46841:function(n,e){"use strict";e.Z=n=>Object.getOwnPropertySymbols(n).filter((e=>Object.prototype.propertyIsEnumerable.call(n,e)))},64290:function(n){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},37777:function(n){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},72461:function(n,e,a){"use strict";a.d(e,{X:function(){return h},f:function(){return N}});var t=a(92809),s=a(67294),p=a(86010),o=a(6805),r=a(85893);function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){(0,t.Z)(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},d={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){const e=(0,s.useRef)(),{0:a,1:t}=(0,s.useState)(!1),{0:p,1:o}=(0,s.useState)({});return(0,s.useEffect)((()=>{if(!a)return;function n(){o({height:e.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(n);return n(),t.observe(e.current.contentDocument.body),()=>{t.disconnect()}}),[a]),(0,r.jsx)("iframe",c(c({},n),{},{ref:e,onLoad:()=>t(!0),style:p}))}function k({color:n,snippet:e}){return(0,r.jsx)("div",{className:(0,p.Z)("overflow-hidden rounded-b-xl",l[n],{"bg-gray-800":!l[n]}),children:(0,r.jsx)("pre",{className:(0,p.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[n]}),children:(0,r.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})})})}function h({preview:n,src:e,snippet:a,previewClassName:t,color:s="gray"}){return(0,r.jsxs)("div",{className:"relative overflow-hidden mb-8",children:[n?(0,r.jsx)("div",{className:(0,p.Z)("rounded-t-xl overflow-hidden",u[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}):(0,r.jsx)(g,{src:e,className:(0,p.Z)("w-full rounded-t-xl",u[s])}),(0,r.jsx)(k,{color:s,snippet:a})]})}function N({preview:n,src:e,previewClassName:a,snippet:t,color:i="gray",min:c=!1}){const l=(0,s.useRef)(),h=(0,o.c$)(0),N=(0,s.useRef)(),{0:f,1:x}=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const n=new window.ResizeObserver((()=>{h.set(0)}));return n.observe(l.current),()=>{n.disconnect()}}),[]),(0,r.jsxs)("div",{className:"relative mb-8",children:[(0,r.jsxs)("div",{ref:l,className:`relative rounded-t-xl ${d[i]}`,children:[(0,r.jsx)("div",{className:c?"md:w-88":void 0,children:(0,r.jsx)(o.ww.div,{className:"relative",style:{marginRight:(0,o.Hm)(h,(n=>-n))},children:n?(0,r.jsx)("div",{className:(0,p.Z)("rounded-t-xl",a,u[i],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):(0,r.jsx)(g,{src:e,className:(0,p.Z)("w-full rounded-t-xl",u[i],{"pointer-events-none":f})})})}),(0,r.jsx)("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none",children:(0,r.jsx)(o.ww.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(c?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)},children:(0,r.jsx)("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"},children:(0,r.jsx)("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[i]}`,style:{width:"0.4375rem"},children:(0,r.jsx)("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})})})})})]}),(0,r.jsx)(k,{color:i,snippet:t})]})}},97250:function(n,e,a){"use strict";a.d(e,{g:function(){return c}});a(94110);var t=a(67294),s=a(85114),p=a(86010),o=a(85893);function r({value:n}){return"string"===typeof n?(0,o.jsxs)("span",{className:"token string",children:["'",n,"'"]}):Array.isArray(n)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"token punctuation",children:"["}),n.map(((e,a)=>(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)(r,{value:e}),a===n.length-1?null:(0,o.jsx)("span",{className:"token punctuation",children:", "})]},a))),(0,o.jsx)("span",{className:"token punctuation",children:"]"})]}):"boolean"===typeof n?(0,o.jsx)("span",{className:"token boolean",children:n.toString()}):n.toString()}function i({edits:n,indent:e="",type:a="inserted"}){return(0,o.jsx)("span",{className:(0,p.Z)("token",{"inserted-sign inserted":"inserted"===a,"deleted-sign deleted":"inserted"!==a}),children:Object.keys(n).map(((s,i)=>{return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)("span",{className:(0,p.Z)("token prefix",{inserted:"inserted"===a,deleted:"inserted"!==a}),children:"inserted"===a?"+":"-"})," ",e,(c=s,/^[a-z_$][a-z0-9_$]*$/i.test(c)?c:`'${c}'`),(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)(r,{value:n[s]}),(0,o.jsx)("span",{className:"token punctuation",children:","}),"\n"]},i);var c}))})}function c({path:n,add:e,remove:a,before:p,after:r}){return n="string"===typeof n?n.split("."):n,(0,o.jsx)("div",{className:"prose",children:(0,o.jsx)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800",children:(0,o.jsx)("pre",{className:"language-diff",children:(0,o.jsxs)("code",{className:"language-diff",children:[(0,o.jsxs)("span",{className:"token unchanged",children:["  ",(0,o.jsx)("span",{className:"token comment",children:"// tailwind.config.js"}),"\n","  module",(0,o.jsx)("span",{className:"token punctuation",children:"."}),(0,o.jsx)("span",{className:"token property-access",children:"exports"})," ",(0,o.jsx)("span",{className:"token operator",children:"="})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n",n.map(((n,e)=>(0,o.jsxs)(t.Fragment,{children:["  ","  ".repeat(e+1),n,(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n"]},e))),p&&(0,s.X)(p).map(((e,a)=>(0,o.jsxs)(t.Fragment,{children:["  ".repeat(n.length+2),(0,o.jsx)("span",{className:"token comment",children:`// ${e}`}),"\n"]},a)))]}),a&&(0,o.jsx)(i,{edits:a,type:"deleted",indent:"  ".repeat(n.length+1)}),e&&(0,o.jsx)(i,{edits:e,type:"inserted",indent:"  ".repeat(n.length+1)}),(0,o.jsxs)("span",{className:"token unchanged",children:[r&&(0,s.X)(r).map((e=>`${"  ".repeat(n.length+2)}${e}\n`)),n.map(((e,a)=>(0,o.jsxs)(t.Fragment,{children:["  ","  ".repeat(n.length-a),"}\n"]},a))),"  }"]})]})})})})}},14532:function(n,e,a){"use strict";a.d(e,{S:function(){return l}});var t=a(92809),s=a(97250),p=a(85114),o=a(37192),r=a(85893);function i(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){(0,t.Z)(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l({plugin:n,name:e}){const a=(0,p.X)(n);return e=e||n.replace(/([a-z])([A-Z])/g,((n,e,a)=>`${e} ${a.toLowerCase()}`)),(0,r.jsxs)("div",{className:"prose",children:[(0,r.jsxs)("p",{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",e,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,o.X)(a.map((n=>`<code>${n}</code>`)))}})," ",a.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.jsx)("code",{children:"false"})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",(0,r.jsx)("code",{children:"corePlugins"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,r.jsx)(s.g,{path:"corePlugins",before:"...",add:a.reduce(((n,e)=>c(c({},n),{},{[e]:!1})),{})})]})}},87912:function(n,e,a){"use strict";a.d(e,{t:function(){return r}});var t=a(27907),s=a(37192),p=a(97250),o=a(85893);function r({plugin:n,name:e}){const a=t.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,((n,e,a)=>`${e} ${a.toLowerCase()}`));const r=["responsive","hover","focus","active","group-hover"].filter((n=>!a.includes(n))).slice(0,2),i=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${a.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${(0,s.X)(a).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${e}.`;return(0,o.jsxs)("div",{className:"prose",children:[(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:i}}),(0,o.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",e," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",(0,o.jsx)("code",{children:n})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,o.jsx)("code",{children:"variants"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",(0,o.jsx)("code",{children:"tailwind.config.js"}),"."]}),(0,o.jsxs)("p",{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",a.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",(0,s.X)(r),":"]}),(0,o.jsx)(p.g,{path:"variants.extend",before:"...",add:{[n]:r}})]})}},37192:function(n,e,a){"use strict";function t(n){return n.reduce(((e,a,t)=>0===t?a:t===n.length-1?`${e} \u0438 ${a}`:`${e}, ${a}`),"")}a.d(e,{X:function(){return t}})},89973:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return N}});var t=a(159),s=a(10219),p=(a(67294),a(3905)),o=a(41664),r=a(34304),i=a(72461),c=a(39557),l=a(27688),u=a(85636),d=a(87912),m=a(14532);const g=["components"],k={Layout:c.L,classes:{plugin:u.Z},meta:{title:"\u0422\u0435\u043d\u044c",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043d\u044c\u044e \u0431\u043b\u043e\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"\u0412\u043d\u0435\u0448\u043d\u044f\u044f \u0442\u0435\u043d\u044c",slug:"vneshnyaya-ten",children:[]},{title:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0442\u0435\u043d\u044c",slug:"vnutrennyaya-ten",children:[]},{title:"\u0411\u0435\u0437 \u0442\u0435\u043d\u0438",slug:"bez-teni",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0422\u0435\u043d\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430",slug:"teni-elementa"},{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},h=l.X_;function N(n){let{components:e}=n,a=(0,s.Z)(n,g);return(0,p.kt)(h,(0,t.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(r.X,{level:2,id:"vneshnyaya-ten",toc:!0},"\u0412\u043d\u0435\u0448\u043d\u044f\u044f \u0442\u0435\u043d\u044c"),(0,p.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-sm"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-md"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-lg"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-xl")," \u0438\u043b\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-2xl")," \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u043d\u0435\u0439 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443.")),(0,p.kt)(i.X,{preview:'\n  <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">\n    <div class="shadow-sm h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-sm</div>\n    <div class="shadow h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow</div>\n    <div class="shadow-md h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-md</div>\n    <div class="shadow-lg h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-lg</div>\n    <div class="shadow-xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-xl</div>\n    <div class="shadow-2xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-2xl</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-sm</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-md</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-xl</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-2xl</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(r.X,{level:2,id:"vnutrennyaya-ten",toc:!0},"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0442\u0435\u043d\u044c"),(0,p.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-inner"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u0442\u043e\u043d\u043a\u0443\u044e \u0442\u0435\u043d\u044c \u0432\u0441\u0442\u0430\u0432\u043a\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0432\u0435\u0449\u0435\u0439, \u043a\u0430\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0438\u043b\u0438 \u043a\u043e\u043b\u043e\u0434\u0446\u044b.")),(0,p.kt)(i.X,{preview:'\n  <div class="flex justify-center items-center">\n    <div class="shadow-inner h-24 w-40 font-medium bg-purple-200  text-purple-500 rounded-md flex items-center justify-center">.shadow-inner</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-inner</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(r.X,{level:2,id:"bez-teni",toc:!0},"\u0411\u0435\u0437 \u0442\u0435\u043d\u0438"),(0,p.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-none"),", \u0447\u0442\u043e\u0431\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0442\u0435\u043d\u044c \u0431\u043b\u043e\u043a\u0430 \u0438\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u042d\u0442\u043e \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043d\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u0432 \u043c\u0435\u043d\u044c\u0448\u0435\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435.")),(0,p.kt)(i.X,{preview:'\n  <div class="flex justify-center items-center">\n    <div class="shadow-none h-24 w-40 font-medium bg-rose-200 text-rose-500 rounded-md flex items-center justify-center">.shadow-none</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(r.X,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,p.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u0435\u043d\u044c\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,p.kt)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0442\u0435\u043d\u0435\u0432\u043e\u0433\u043e \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"md:shadow-lg"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-lg")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),(0,p.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,p.kt)("pre",{parentName:"div",className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"shadow ",(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"md:shadow-lg")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,p.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,p.kt)(o.default,{href:"/docs/responsive-design",passHref:!0},(0,p.kt)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),(0,p.kt)(r.X,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,p.kt)(r.X,{level:3,id:"teni-elementa",toc:!0},"\u0422\u0435\u043d\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"),(0,p.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Tailwind \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0448\u0435\u0441\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442 \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043d\u0435\u0439, \u043e\u0434\u043d\u0443 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0442\u0435\u043d\u0438 \u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0443 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0442\u0435\u043d\u0435\u0439. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0445, \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.boxShadow")," \u0432 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Tailwind."),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0435\u043d\u044c ",(0,p.kt)("inlineCode",{parentName:"p"},"DEFAULT"),", \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow")," \u0431\u0435\u0437 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u0430. \u041b\u044e\u0431\u044b\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u043b\u044e\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043b\u044e\u0447 ",(0,p.kt)("inlineCode",{parentName:"p"},"'2'")," \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"shadow-2"),"."),(0,p.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,p.kt)("pre",{parentName:"div",className:"language-diff-js"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," ",(0,p.kt)("span",{parentName:"span",className:"token comment"},"// tailwind.config.js"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," module",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,p.kt)("span",{parentName:"span",className:"token property-access"},"exports")," ",(0,p.kt)("span",{parentName:"span",className:"token operator"},"=")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"   theme",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"     boxShadow",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       sm",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 1px 2px 0 rgba(0, 0, 0, 0.05)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       ",(0,p.kt)("span",{parentName:"span",className:"token constant"},"DEFAULT"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       md",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       lg",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       xl",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'2xl'"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 25px 50px -12px rgba(0, 0, 0, 0.25)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token inserted-sign inserted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix inserted"},"+"),"       ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'3xl'"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'0 35px 60px -15px rgba(0, 0, 0, 0.3)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       inner",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       none",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'none'"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"     ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"   ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))))),(0,p.kt)(r.X,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),(0,p.kt)(d.t,{plugin:"boxShadow",mdxType:"Variants"}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(r.X,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),(0,p.kt)(m.S,{plugin:"boxShadow",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=k},41529:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-shadow",function(){return a(89973)}])},94110:function(n,e,a){"use strict";const t=a(37777),s=a(64290),p=a(46841).Z;n.exports=(n,e,a)=>{const o=[];return function n(e,a,r){let i;(a=a||{}).indent=a.indent||"\t",r=r||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=n=>{if(void 0===a.inlineCharacterLimit)return n;const e=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return e.length<=a.inlineCharacterLimit?e:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+a.indent)};if(-1!==o.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||t(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";o.push(e);const t="["+i.newLine+e.map(((t,s)=>{const p=e.length-1===s?i.newLine:","+i.newLineOrSpace;let o=n(t,a,r+a.indent);return a.transform&&(o=a.transform(e,s,o)),i.indent+o+p})).join("")+i.pad+"]";return o.pop(),c(t)}if(s(e)){let t=Object.keys(e).concat(p(e));if(a.filter&&(t=t.filter((n=>a.filter(e,n)))),0===t.length)return"{}";o.push(e);const s="{"+i.newLine+t.map(((s,p)=>{const o=t.length-1===p?i.newLine:","+i.newLineOrSpace,c="symbol"===typeof s,l=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=c||l?s:n(s,a);let d=n(e[s],a,r+a.indent);return a.transform&&(d=a.transform(e,s,d)),i.indent+String(u)+": "+d+o})).join("")+i.pad+"}";return o.pop(),c(s)}return e=String(e).replace(/[\r\n]/g,(n=>"\n"===n?"\\n":"\\r")),!1===a.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,a)}},85636:function(n,e,a){"use strict";var t;e.Z=function(){return function({config:n,matchUtilities:e,addBase:a,addUtilities:t,theme:o,variants:r}){"jit"===n("mode")?a({"@defaults box-shadow":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000"}}):t({"*, ::before, ::after":{"--tw-shadow":"0 0 #0000"}},{respectImportant:!1}),e({shadow:e=>(e=s(e),{..."jit"===n("mode")?{"@defaults box-shadow":{}}:{},"--tw-shadow":"none"===e?"0 0 #0000":e,"box-shadow":p})},{values:o("boxShadow"),variants:r("boxShadow"),type:"lookup"})}};let s=(0,((t=a(37417))&&t.__esModule?t:{default:t}).default)("boxShadow"),p=["var(--tw-ring-offset-shadow, 0 0 #0000)","var(--tw-ring-shadow, 0 0 #0000)","var(--tw-shadow)"].join(", ")},37417:function(n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){if(["fontSize","outline"].includes(n))return n=>Array.isArray(n)?n[0]:n;if(["fontFamily","boxShadow","transitionProperty","transitionDuration","transitionDelay","transitionTimingFunction","backgroundImage","backgroundSize","backgroundColor","cursor","animation"].includes(n))return n=>Array.isArray(n)?n.join(", "):n;if("colors"===n)return n=>"function"===typeof n?n({}):n;return n=>n}}},function(n){n.O(0,[9774,3430,7991,5855,7598,7907,4380,2888,179],(function(){return e=41529,n(n.s=e);var e}));var e=n.O();_N_E=e}]);