(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6940],{46841:function(e,t){"use strict";t.Z=e=>Object.getOwnPropertySymbols(e).filter((t=>Object.prototype.propertyIsEnumerable.call(e,t)))},64290:function(e){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},37777:function(e){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},72461:function(e,t,s){"use strict";s.d(t,{X:function(){return f},f:function(){return h}});var a=s(92809),n=s(67294),i=s(86010),l=s(6805),r=s(85893);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},m={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){const t=(0,n.useRef)(),{0:s,1:a}=(0,n.useState)(!1),{0:i,1:l}=(0,n.useState)({});return(0,n.useEffect)((()=>{if(!s)return;function e(){l({height:t.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(t.current.contentDocument.body),()=>{a.disconnect()}}),[s]),(0,r.jsx)("iframe",c(c({},e),{},{ref:t,onLoad:()=>a(!0),style:i}))}function v({color:e,snippet:t}){return(0,r.jsx)("div",{className:(0,i.Z)("overflow-hidden rounded-b-xl",o[e],{"bg-gray-800":!o[e]}),children:(0,r.jsx)("pre",{className:(0,i.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[e]}),children:(0,r.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})})})}function f({preview:e,src:t,snippet:s,previewClassName:a,color:n="gray"}){return(0,r.jsxs)("div",{className:"relative overflow-hidden mb-8",children:[e?(0,r.jsx)("div",{className:(0,i.Z)("rounded-t-xl overflow-hidden",p[n],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):(0,r.jsx)(g,{src:t,className:(0,i.Z)("w-full rounded-t-xl",p[n])}),(0,r.jsx)(v,{color:n,snippet:s})]})}function h({preview:e,src:t,previewClassName:s,snippet:a,color:u="gray",min:c=!1}){const o=(0,n.useRef)(),f=(0,l.c$)(0),h=(0,n.useRef)(),{0:k,1:b}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(o.current),()=>{e.disconnect()}}),[]),(0,r.jsxs)("div",{className:"relative mb-8",children:[(0,r.jsxs)("div",{ref:o,className:`relative rounded-t-xl ${m[u]}`,children:[(0,r.jsx)("div",{className:c?"md:w-88":void 0,children:(0,r.jsx)(l.ww.div,{className:"relative",style:{marginRight:(0,l.Hm)(f,(e=>-e))},children:e?(0,r.jsx)("div",{className:(0,i.Z)("rounded-t-xl",s,p[u],{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):(0,r.jsx)(g,{src:t,className:(0,i.Z)("w-full rounded-t-xl",p[u],{"pointer-events-none":k})})})}),(0,r.jsx)("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none",children:(0,r.jsx)(l.ww.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(c?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),b(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),b(!1)},children:(0,r.jsx)("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"},children:(0,r.jsx)("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[u]}`,style:{width:"0.4375rem"},children:(0,r.jsx)("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})})})})})]}),(0,r.jsx)(v,{color:u,snippet:a})]})}},97250:function(e,t,s){"use strict";s.d(t,{g:function(){return c}});s(94110);var a=s(67294),n=s(85114),i=s(86010),l=s(85893);function r({value:e}){return"string"===typeof e?(0,l.jsxs)("span",{className:"token string",children:["'",e,"'"]}):Array.isArray(e)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"token punctuation",children:"["}),e.map(((t,s)=>(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(r,{value:t}),s===e.length-1?null:(0,l.jsx)("span",{className:"token punctuation",children:", "})]},s))),(0,l.jsx)("span",{className:"token punctuation",children:"]"})]}):"boolean"===typeof e?(0,l.jsx)("span",{className:"token boolean",children:e.toString()}):e.toString()}function u({edits:e,indent:t="",type:s="inserted"}){return(0,l.jsx)("span",{className:(0,i.Z)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s}),children:Object.keys(e).map(((n,u)=>{return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("span",{className:(0,i.Z)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s}),children:"inserted"===s?"+":"-"})," ",t,(c=n,/^[a-z_$][a-z0-9_$]*$/i.test(c)?c:`'${c}'`),(0,l.jsx)("span",{className:"token operator",children:":"})," ",(0,l.jsx)(r,{value:e[n]}),(0,l.jsx)("span",{className:"token punctuation",children:","}),"\n"]},u);var c}))})}function c({path:e,add:t,remove:s,before:i,after:r}){return e="string"===typeof e?e.split("."):e,(0,l.jsx)("div",{className:"prose",children:(0,l.jsx)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800",children:(0,l.jsx)("pre",{className:"language-diff",children:(0,l.jsxs)("code",{className:"language-diff",children:[(0,l.jsxs)("span",{className:"token unchanged",children:["  ",(0,l.jsx)("span",{className:"token comment",children:"// tailwind.config.js"}),"\n","  module",(0,l.jsx)("span",{className:"token punctuation",children:"."}),(0,l.jsx)("span",{className:"token property-access",children:"exports"})," ",(0,l.jsx)("span",{className:"token operator",children:"="})," ",(0,l.jsx)("span",{className:"token punctuation",children:"{"}),"\n",e.map(((e,t)=>(0,l.jsxs)(a.Fragment,{children:["  ","  ".repeat(t+1),e,(0,l.jsx)("span",{className:"token operator",children:":"})," ",(0,l.jsx)("span",{className:"token punctuation",children:"{"}),"\n"]},t))),i&&(0,n.X)(i).map(((t,s)=>(0,l.jsxs)(a.Fragment,{children:["  ".repeat(e.length+2),(0,l.jsx)("span",{className:"token comment",children:`// ${t}`}),"\n"]},s)))]}),s&&(0,l.jsx)(u,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&(0,l.jsx)(u,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),(0,l.jsxs)("span",{className:"token unchanged",children:[r&&(0,n.X)(r).map((t=>`${"  ".repeat(e.length+2)}${t}\n`)),e.map(((t,s)=>(0,l.jsxs)(a.Fragment,{children:["  ","  ".repeat(e.length-s),"}\n"]},s))),"  }"]})]})})})})}},14532:function(e,t,s){"use strict";s.d(t,{S:function(){return o}});var a=s(92809),n=s(97250),i=s(85114),l=s(37192),r=s(85893);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o({plugin:e,name:t}){const s=(0,i.X)(e);return t=t||e.replace(/([a-z])([A-Z])/g,((e,t,s)=>`${t} ${s.toLowerCase()}`)),(0,r.jsxs)("div",{className:"prose",children:[(0,r.jsxs)("p",{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,l.X)(s.map((e=>`<code>${e}</code>`)))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.jsx)("code",{children:"false"})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",(0,r.jsx)("code",{children:"corePlugins"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,r.jsx)(n.g,{path:"corePlugins",before:"...",add:s.reduce(((e,t)=>c(c({},e),{},{[t]:!1})),{})})]})}},87912:function(e,t,s){"use strict";s.d(t,{t:function(){return r}});var a=s(27907),n=s(37192),i=s(97250),l=s(85893);function r({plugin:e,name:t}){const s=a.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,((e,t,s)=>`${t} ${s.toLowerCase()}`));const r=["responsive","hover","focus","active","group-hover"].filter((e=>!s.includes(e))).slice(0,2),u=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${s.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${(0,n.X)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${t}.`;return(0,l.jsxs)("div",{className:"prose",children:[(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:u}}),(0,l.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",(0,l.jsx)("code",{children:e})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.jsx)("code",{children:"variants"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",(0,l.jsx)("code",{children:"tailwind.config.js"}),"."]}),(0,l.jsxs)("p",{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",(0,n.X)(r),":"]}),(0,l.jsx)(i.g,{path:"variants.extend",before:"...",add:{[e]:r}})]})}},37192:function(e,t,s){"use strict";function a(e){return e.reduce(((t,s,a)=>0===a?s:a===e.length-1?`${t} \u0438 ${s}`:`${t}, ${s}`),"")}s.d(t,{X:function(){return a}})},62025:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var a=s(159),n=s(10219),i=(s(67294),s(3905)),l=s(41664),r=s(34304),u=s(72461),c=s(39557),o=s(27688),p=s(66857),m=s(87912),d=s(14532);const g=["components"],v={Layout:c.L,classes:{plugin:p.Z},meta:{title:"\u0421\u0431\u0440\u043e\u0441",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u043e\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0432\u043e\u043a\u0440\u0443\u0433 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."},tableOfContents:[{title:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043b\u0435\u0432\u0430",slug:"sbrosit-sleva",children:[]},{title:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u0430",slug:"sbrosit-sprava",children:[]},{title:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0431\u0430",slug:"sbrosit-oba",children:[]},{title:"\u041d\u0435 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u044c",slug:"ne-sbrasyvat",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},f=o.X_;function h(e){let{components:t}=e,s=(0,n.Z)(e,g);return(0,i.kt)(f,(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:2,id:"sbrosit-sleva",toc:!0},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043b\u0435\u0432\u0430"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear-left"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u0434 \u043b\u044e\u0431\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u043e\u0431\u0442\u0435\u043a\u0430\u044e\u0449\u0438\u043c\u0438 \u0441\u043b\u0435\u0432\u0430.")),(0,i.kt)(u.X,{preview:'\n  <img class="float-left mr-4 my-2 h-24" src="/img/placeholder-fuchsia.svg">\n  <img class="float-right ml-4 my-2 h-32" src="/img/placeholder-fuchsia.svg">\n  <p class="clear-left font-flow text-justify text-fuchsia-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-left ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-right ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">clear-left</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:2,id:"sbrosit-sprava",toc:!0},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u0430"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear-right"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u0434 \u043b\u044e\u0431\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u043e\u0431\u0442\u0435\u043a\u0430\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u0440\u0430\u0432\u0430.")),(0,i.kt)(u.X,{preview:'\n  <img class="float-left mr-4 my-2 h-24" src="/img/placeholder-light-blue.svg">\n  <img class="float-right ml-4 my-2 h-32" src="/img/placeholder-light-blue.svg">\n  <p class="clear-right font-flow text-light-blue-500 text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-left ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-right ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">clear-right</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:2,id:"sbrosit-oba",toc:!0},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0431\u0430"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear-both"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043f\u043e\u0434 \u0432\u0441\u0435\u043c\u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\u0438 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0438\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438.")),(0,i.kt)(u.X,{preview:'\n  <img class="float-left mr-4 my-2 h-24" src="/img/placeholder-emerald.svg">\n  <img class="float-right ml-4 my-2 h-32" src="/img/placeholder-emerald.svg">\n  <p class="clear-both font-flow text-emerald-500 text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-left ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-right ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">clear-both</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:2,id:"ne-sbrasyvat",toc:!0},"\u041d\u0435 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u044c"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear-none"),", \u0447\u0442\u043e\u0431\u044b \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u043e\u0435 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443. \u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear"),".")),(0,i.kt)(u.X,{preview:'\n  <img class="float-left mr-4 my-2 h-24" src="/img/placeholder-amber.svg">\n  <img class="float-right ml-4 my-2 h-32" src="/img/placeholder-amber.svg">\n  <p class="clear-none font-flow text-amber-500 text-justify font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-left ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>float-right ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/image.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">clear-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"md:clear-left"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"clear-left")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),(0,i.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,i.kt)("pre",{parentName:"div",className:"language-html"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},(0,i.kt)("span",{parentName:"code",className:"token tag"},(0,i.kt)("span",{parentName:"span",className:"token tag"},(0,i.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"p")," ",(0,i.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,i.kt)("span",{parentName:"span",className:"token attr-value"},(0,i.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,i.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"clear-right ",(0,i.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"md:clear-left")," ...",(0,i.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,i.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,i.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,i.kt)("span",{parentName:"code",className:"token tag"},(0,i.kt)("span",{parentName:"span",className:"token tag"},(0,i.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"p"),(0,i.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,i.kt)(l.default,{href:"/docs/responsive-design",passHref:!0},(0,i.kt)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),(0,i.kt)(r.X,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,i.kt)(r.X,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),(0,i.kt)(m.t,{plugin:"clear",mdxType:"Variants"}),(0,i.kt)("div",{className:"prose"},(0,i.kt)(r.X,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)(d.S,{plugin:"clear",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v},96281:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/clear",function(){return s(62025)}])},94110:function(e,t,s){"use strict";const a=s(37777),n=s(64290),i=s(46841).Z;e.exports=(e,t,s)=>{const l=[];return function e(t,s,r){let u;(s=s||{}).indent=s.indent||"\t",r=r||"",u=void 0===s.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+s.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===s.inlineCharacterLimit)return e;const t=e.replace(new RegExp(u.newLine,"g"),"").replace(new RegExp(u.newLineOrSpace,"g")," ").replace(new RegExp(u.pad+"|"+u.indent,"g"),"");return t.length<=s.inlineCharacterLimit?t:e.replace(new RegExp(u.newLine+"|"+u.newLineOrSpace,"g"),"\n").replace(new RegExp(u.pad,"g"),r).replace(new RegExp(u.indent,"g"),r+s.indent)};if(-1!==l.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";l.push(t);const a="["+u.newLine+t.map(((a,n)=>{const i=t.length-1===n?u.newLine:","+u.newLineOrSpace;let l=e(a,s,r+s.indent);return s.transform&&(l=s.transform(t,n,l)),u.indent+l+i})).join("")+u.pad+"]";return l.pop(),c(a)}if(n(t)){let a=Object.keys(t).concat(i(t));if(s.filter&&(a=a.filter((e=>s.filter(t,e)))),0===a.length)return"{}";l.push(t);const n="{"+u.newLine+a.map(((n,i)=>{const l=a.length-1===i?u.newLine:","+u.newLineOrSpace,c="symbol"===typeof n,o=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(n),p=c||o?n:e(n,s);let m=e(t[n],s,r+s.indent);return s.transform&&(m=s.transform(t,n,m)),u.indent+String(p)+": "+m+l})).join("")+u.pad+"}";return l.pop(),c(n)}return t=String(t).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===s.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,s)}},66857:function(e,t){"use strict";t.Z=function(){return function({addUtilities:e,variants:t}){e({".clear-left":{clear:"left"},".clear-right":{clear:"right"},".clear-both":{clear:"both"},".clear-none":{clear:"none"}},t("clear"))}}}},function(e){e.O(0,[9774,3430,7991,5855,7598,7907,4380,2888,179],(function(){return t=96281,e(e.s=t);var t}));var t=e.O();_N_E=t}]);