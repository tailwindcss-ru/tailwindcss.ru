(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{72461:function(n,a,e){"use strict";e.d(a,{X:function(){return h},f:function(){return N}});var t=e(92809),s=e(67294),p=e(86010),o=e(6805),l=e(85893);function r(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function c(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){(0,t.Z)(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},d={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function k(n){const a=(0,s.useRef)(),{0:e,1:t}=(0,s.useState)(!1),{0:p,1:o}=(0,s.useState)({});return(0,s.useEffect)((()=>{if(!e)return;function n(){o({height:a.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(n);return n(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}),[e]),(0,l.jsx)("iframe",c(c({},n),{},{ref:a,onLoad:()=>t(!0),style:p}))}function g({color:n,snippet:a}){return(0,l.jsx)("div",{className:(0,p.Z)("overflow-hidden rounded-b-xl",i[n],{"bg-gray-800":!i[n]}),children:(0,l.jsx)("pre",{className:(0,p.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[n]}),children:(0,l.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})})})}function h({preview:n,src:a,snippet:e,previewClassName:t,color:s="gray"}){return(0,l.jsxs)("div",{className:"relative overflow-hidden mb-8",children:[n?(0,l.jsx)("div",{className:(0,p.Z)("rounded-t-xl overflow-hidden",u[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}):(0,l.jsx)(k,{src:a,className:(0,p.Z)("w-full rounded-t-xl",u[s])}),(0,l.jsx)(g,{color:s,snippet:e})]})}function N({preview:n,src:a,previewClassName:e,snippet:t,color:r="gray",min:c=!1}){const i=(0,s.useRef)(),h=(0,o.c$)(0),N=(0,s.useRef)(),{0:f,1:x}=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const n=new window.ResizeObserver((()=>{h.set(0)}));return n.observe(i.current),()=>{n.disconnect()}}),[]),(0,l.jsxs)("div",{className:"relative mb-8",children:[(0,l.jsxs)("div",{ref:i,className:`relative rounded-t-xl ${d[r]}`,children:[(0,l.jsx)("div",{className:c?"md:w-88":void 0,children:(0,l.jsx)(o.ww.div,{className:"relative",style:{marginRight:(0,o.Hm)(h,(n=>-n))},children:n?(0,l.jsx)("div",{className:(0,p.Z)("rounded-t-xl",e,u[r],{"p-10":!e}),dangerouslySetInnerHTML:{__html:n}}):(0,l.jsx)(k,{src:a,className:(0,p.Z)("w-full rounded-t-xl",u[r],{"pointer-events-none":f})})})}),(0,l.jsx)("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none",children:(0,l.jsx)(o.ww.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(c?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)},children:(0,l.jsx)("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"},children:(0,l.jsx)("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[r]}`,style:{width:"0.4375rem"},children:(0,l.jsx)("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})})})})})]}),(0,l.jsx)(g,{color:r,snippet:t})]})}},97250:function(n,a,e){"use strict";e.d(a,{g:function(){return c}});e(94110);var t=e(67294),s=e(85114),p=e(86010),o=e(85893);function l({value:n}){return"string"===typeof n?(0,o.jsxs)("span",{className:"token string",children:["'",n,"'"]}):Array.isArray(n)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"token punctuation",children:"["}),n.map(((a,e)=>(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)(l,{value:a}),e===n.length-1?null:(0,o.jsx)("span",{className:"token punctuation",children:", "})]},e))),(0,o.jsx)("span",{className:"token punctuation",children:"]"})]}):"boolean"===typeof n?(0,o.jsx)("span",{className:"token boolean",children:n.toString()}):n.toString()}function r({edits:n,indent:a="",type:e="inserted"}){return(0,o.jsx)("span",{className:(0,p.Z)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e}),children:Object.keys(n).map(((s,r)=>{return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)("span",{className:(0,p.Z)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e}),children:"inserted"===e?"+":"-"})," ",a,(c=s,/^[a-z_$][a-z0-9_$]*$/i.test(c)?c:`'${c}'`),(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)(l,{value:n[s]}),(0,o.jsx)("span",{className:"token punctuation",children:","}),"\n"]},r);var c}))})}function c({path:n,add:a,remove:e,before:p,after:l}){return n="string"===typeof n?n.split("."):n,(0,o.jsx)("div",{className:"prose",children:(0,o.jsx)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800",children:(0,o.jsx)("pre",{className:"language-diff",children:(0,o.jsxs)("code",{className:"language-diff",children:[(0,o.jsxs)("span",{className:"token unchanged",children:["  ",(0,o.jsx)("span",{className:"token comment",children:"// tailwind.config.js"}),"\n","  module",(0,o.jsx)("span",{className:"token punctuation",children:"."}),(0,o.jsx)("span",{className:"token property-access",children:"exports"})," ",(0,o.jsx)("span",{className:"token operator",children:"="})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n",n.map(((n,a)=>(0,o.jsxs)(t.Fragment,{children:["  ","  ".repeat(a+1),n,(0,o.jsx)("span",{className:"token operator",children:":"})," ",(0,o.jsx)("span",{className:"token punctuation",children:"{"}),"\n"]},a))),p&&(0,s.X)(p).map(((a,e)=>(0,o.jsxs)(t.Fragment,{children:["  ".repeat(n.length+2),(0,o.jsx)("span",{className:"token comment",children:`// ${a}`}),"\n"]},e)))]}),e&&(0,o.jsx)(r,{edits:e,type:"deleted",indent:"  ".repeat(n.length+1)}),a&&(0,o.jsx)(r,{edits:a,type:"inserted",indent:"  ".repeat(n.length+1)}),(0,o.jsxs)("span",{className:"token unchanged",children:[l&&(0,s.X)(l).map((a=>`${"  ".repeat(n.length+2)}${a}\n`)),n.map(((a,e)=>(0,o.jsxs)(t.Fragment,{children:["  ","  ".repeat(n.length-e),"}\n"]},e))),"  }"]})]})})})})}},14532:function(n,a,e){"use strict";e.d(a,{S:function(){return i}});var t=e(92809),s=e(97250),p=e(85114),o=e(37192),l=e(85893);function r(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function c(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){(0,t.Z)(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function i({plugin:n,name:a}){const e=(0,p.X)(n);return a=a||n.replace(/([a-z])([A-Z])/g,((n,a,e)=>`${a} ${e.toLowerCase()}`)),(0,l.jsxs)("div",{className:"prose",children:[(0,l.jsxs)("p",{children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:(0,o.X)(e.map((n=>`<code>${n}</code>`)))}})," ",e.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.jsx)("code",{children:"false"})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",(0,l.jsx)("code",{children:"corePlugins"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,l.jsx)(s.g,{path:"corePlugins",before:"...",add:e.reduce(((n,a)=>c(c({},n),{},{[a]:!1})),{})})]})}},87912:function(n,a,e){"use strict";e.d(a,{t:function(){return l}});var t=e(27907),s=e(37192),p=e(97250),o=e(85893);function l({plugin:n,name:a}){const e=t.defaultConfig.variants[n]||["responsive"];a=a||n.replace(/([a-z])([A-Z])/g,((n,a,e)=>`${a} ${e.toLowerCase()}`));const l=["responsive","hover","focus","active","group-hover"].filter((n=>!e.includes(n))).slice(0,2),r=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${e.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${(0,s.X)(e).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${a}.`;return(0,o.jsxs)("div",{className:"prose",children:[(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:r}}),(0,o.jsxs)("p",{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",(0,o.jsx)("code",{children:n})," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,o.jsx)("code",{children:"variants"})," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",(0,o.jsx)("code",{children:"tailwind.config.js"}),"."]}),(0,o.jsxs)("p",{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",e.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",(0,s.X)(l),":"]}),(0,o.jsx)(p.g,{path:"variants.extend",before:"...",add:{[n]:l}})]})}},37192:function(n,a,e){"use strict";function t(n){return n.reduce(((a,e,t)=>0===t?e:t===n.length-1?`${a} \u0438 ${e}`:`${a}, ${e}`),"")}e.d(a,{X:function(){return t}})},14714:function(n,a,e){"use strict";e.r(a),e.d(a,{default:function(){return N}});var t=e(159),s=e(10219),p=(e(67294),e(3905)),o=e(41664),l=e(34304),r=e(72461),c=e(39557),i=e(27688),u=e(37834),d=e(87912),m=e(14532);const k=["components"],g={Layout:c.L,classes:{plugin:u.Z},meta:{title:"\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0448\u0440\u0438\u0444\u0442\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0440\u043d\u043e\u0441\u0442\u044c\u044e \u0448\u0440\u0438\u0444\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!0,hover:!0,focus:!1}},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0435\u0441\u0430 \u0448\u0440\u0438\u0444\u0442\u043e\u0432",slug:"vesa-shriftov"},{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},h=i.X_;function N(n){let{components:a}=n,e=(0,s.Z)(n,k);return(0,p.kt)(h,(0,t.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(l.X,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,p.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0442\u043e\u043b\u0449\u0438\u043d\u043e\u0439 \u0448\u0440\u0438\u0444\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0442\u0438\u043b\u0438\u0442 ",(0,p.kt)("inlineCode",{parentName:"p"},"font-{weight}"),".")),(0,p.kt)(r.X,{preview:'\n  <dl class="text-light-blue-600 space-y-6">\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">thin</dt>\n      <dd class="text-xl font-thin">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">extralight</dt>\n      <dd class="text-xl font-extralight">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">light</dt>\n      <dd class="text-xl font-light">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">normal</dt>\n      <dd class="text-xl font-normal">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">medium</dt>\n      <dd class="text-xl font-medium">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">semibold</dt>\n      <dd class="text-xl font-semibold">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">bold</dt>\n      <dd class="text-xl font-bold">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">extrabold</dt>\n      <dd class="text-xl font-extrabold">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n    <div class="flex items-start">\n      <dt class="w-32 text-right pr-6 flex-shrink-0 text-sm text-light-blue-600 text-opacity-50 font-mono leading-7">black</dt>\n      <dd class="text-xl font-black">\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.</dd>\n    </div>\n  </dl>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-thin</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-extralight</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-light</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-medium</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-semibold</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-bold</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-extrabold</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">font-black</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(l.X,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),(0,p.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0435\u0441 \u0448\u0440\u0438\u0444\u0442\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,p.kt)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0432\u0435\u0441\u0430 \u0448\u0440\u0438\u0444\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"md:font-bold"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"font-bold")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),(0,p.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,p.kt)("pre",{parentName:"div",className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"p")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"font-normal ",(0,p.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"md:font-bold")," ...",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\u0411\u044b\u0441\u0442\u0440\u0430\u044f, \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043b\u0438\u0441\u0430, \u043f\u0435\u0440\u0435\u043f\u0440\u044b\u0433\u043d\u0443\u043b\u0430 \u0447\u0435\u0440\u0435\u0437 \u043b\u0435\u043d\u0438\u0432\u043e\u0433\u043e \u043f\u0441\u0430.",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"p"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,p.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",(0,p.kt)(o.default,{href:"/docs/responsive-design",passHref:!0},(0,p.kt)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),(0,p.kt)(l.X,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,p.kt)(l.X,{level:3,id:"vesa-shriftov",toc:!0},"\u0412\u0435\u0441\u0430 \u0448\u0440\u0438\u0444\u0442\u043e\u0432"),(0,p.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Tailwind \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 10 \u0443\u0442\u0438\u043b\u0438\u0442 ",(0,p.kt)("inlineCode",{parentName:"p"},"font-weight"),". \u0412\u044b \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442\u0435, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0435 \u0438\u0445, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u044f \u0440\u0430\u0437\u0434\u0435\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.fontWeight")," \u0412\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Tailwind."),(0,p.kt)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},(0,p.kt)("pre",{parentName:"div",className:"language-diff-js"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," ",(0,p.kt)("span",{parentName:"span",className:"token comment"},"// tailwind.config.js"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," module",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,p.kt)("span",{parentName:"span",className:"token property-access"},"exports")," ",(0,p.kt)("span",{parentName:"span",className:"token operator"},"=")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"   theme",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"     fontWeight",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"{"),"\n"),(0,p.kt)("span",{parentName:"code",className:"token deleted-sign deleted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix deleted"},"-"),"       hairline",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"100"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token inserted-sign inserted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix inserted"},"+"),"       ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'extra-light'"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"100"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token deleted-sign deleted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix deleted"},"-"),"       thin",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"200"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       light",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"300"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       normal",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"400"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       medium",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"500"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token deleted-sign deleted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix deleted"},"-"),"       semibold",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"600"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       bold",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"700"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token deleted-sign deleted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix deleted"},"-"),"       extrabold",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"800"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token inserted-sign inserted language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix inserted"},"+"),"       ",(0,p.kt)("span",{parentName:"span",className:"token string"},"'extra-bold'"),(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"800"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n"),(0,p.kt)("span",{parentName:"code",className:"token unchanged language-js"},(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"       black",(0,p.kt)("span",{parentName:"span",className:"token operator"},":")," ",(0,p.kt)("span",{parentName:"span",className:"token number"},"900"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},","),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"     ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," "),"   ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n",(0,p.kt)("span",{parentName:"span",className:"token prefix unchanged"}," ")," ",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"}"))))),(0,p.kt)(l.X,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),(0,p.kt)(d.t,{plugin:"fontWeight",mdxType:"Variants"}),(0,p.kt)("div",{className:"prose"},(0,p.kt)(l.X,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),(0,p.kt)(m.S,{plugin:"fontWeight",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=g},78548:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-weight",function(){return e(14714)}])},37834:function(n,a,e){"use strict";a.Z=function(){return(0,s.default)("fontWeight",[["font",["fontWeight"]]],{resolveArbitraryValue:p.asLookupValue})};var t,s=(t=e(3440))&&t.__esModule?t:{default:t},p=e(78511)},22868:function(){},95574:function(){},14777:function(){},99830:function(){},70209:function(){}},function(n){n.O(0,[9774,3430,3662,7991,5855,541,3440,7598,7907,4380,2888,179],(function(){return a=78548,n(n.s=a);var a}));var a=n.O();_N_E=a}]);