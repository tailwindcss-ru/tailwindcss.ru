_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"8+N+":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customizing-spacing",function(){return t("EXfC")}])},EXfC:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),r=t("YFqc"),m=t.n(r),l=t("tc9R"),i=t("vRWG"),b=t("I6Nb"),j=t("98BF"),O=o.a.createElement,N=Object.keys(j.defaultConfig.theme.spacing).map((function(e){return{name:e,size:j.defaultConfig.theme.spacing[e],pixels:parseFloat(j.defaultConfig.theme.spacing[e])*(String(j.defaultConfig.theme.spacing[e]).endsWith("rem")?16:1)}})).sort((function(e,a){return e.pixels-a.pixels}));function d(){return O("div",{className:"prose"},O("table",null,O("thead",null,O("tr",null,O("th",null,"Name"),O("th",null,"Size"),O("th",null,"Pixels"),O("th",{className:"hidden sm:table-cell"},O("span",{className:"sr-only"},"Preview")))),O("tbody",null,N.map((function(e){var a=e.name,t=e.size,n=e.pixels;return O("tr",{key:a},O("td",null,a),O("td",null,t),O("td",null,n,"px"),O("td",{className:"hidden sm:table-cell"},O("div",{className:"h-4 bg-cyan-400",style:{width:t}})))})))))}o.a.createElement;var u={Layout:i.DocumentationLayout,meta:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430",description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0438 \u0448\u043a\u0430\u043b\u044b \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0412\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."},tableOfContents:[{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0448\u043a\u0430\u043b\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",slug:"rasshirenie-shkaly-intervalov-po-umolchaniyu",children:[]},{title:"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c \u0448\u043a\u0430\u043b\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",slug:"perezapis-shkaly-intervalov-po-umolchaniyu",children:[]},{title:"\u0428\u043a\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",slug:"shkala-intervalov-po-umolchaniyu",children:[]}]},k=b.ContentsLayout;function g(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(p.a)(k,Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u044e\u0447 ",Object(p.a)("inlineCode",{parentName:"p"},"spacing")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"theme")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),", \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c Tailwind ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"#shkala-intervalov-po-umolchaniyu"}),"\u0448\u043a\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432/\u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),"."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'1'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'8px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'2'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'12px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'16px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'4'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'5'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'32px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'6'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'48px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0448\u043a\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u044f\u0434\u0440\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"padding"),", ",Object(p.a)("inlineCode",{parentName:"p"},"margin"),", ",Object(p.a)("inlineCode",{parentName:"p"},"width"),", ",Object(p.a)("inlineCode",{parentName:"p"},"height"),", ",Object(p.a)("inlineCode",{parentName:"p"},"maxHeight"),", ",Object(p.a)("inlineCode",{parentName:"p"},"gap"),", ",Object(p.a)("inlineCode",{parentName:"p"},"inset"),", ",Object(p.a)("inlineCode",{parentName:"p"},"space")," \u0438 ",Object(p.a)("inlineCode",{parentName:"p"},"translate"),"."),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"rasshirenie-shkaly-intervalov-po-umolchaniyu",toc:!0},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0448\u043a\u0430\u043b\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),Object(p.a)("p",null,"\u041a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",Object(p.a)(m.a,{href:"/docs/theme#rasshirenie-temy-po-umolchaniyu",passHref:!0},Object(p.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0442\u0435\u043c\u044b")),", \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0448\u043a\u0430\u043b\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u0434\u0435\u043b ",Object(p.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," \u0432 \u0412\u0430\u0448\u0435\u043c \u0444\u0430\u0439\u043b\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),":"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'13'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3.25rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'15'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'3.75rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'128'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'32rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'144'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'36rem'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"\u042d\u0442\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u043a\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u043a\u0430\u043a ",Object(p.a)("inlineCode",{parentName:"p"},"p-13"),", ",Object(p.a)("inlineCode",{parentName:"p"},"m-15")," \u0438 ",Object(p.a)("inlineCode",{parentName:"p"},"h-128"),", \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e \u0432\u0441\u0435\u043c \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c Tailwind \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f/\u0440\u0430\u0437\u043c\u0435\u0440\u0430."),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"perezapis-shkaly-intervalov-po-umolchaniyu",toc:!0},"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044c \u0448\u043a\u0430\u043b\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),Object(p.a)("p",null,"\u041a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",Object(p.a)(m.a,{href:"/docs/theme#zamena-temy-po-umolchaniyu",passHref:!0},Object(p.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0442\u0435\u043c\u044b")),", \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0448\u043a\u0430\u043b\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0440\u0430\u0437\u0434\u0435\u043b ",Object(p.a)("inlineCode",{parentName:"p"},"theme.spacing")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),":"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    spacing",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      sm",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'8px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      md",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'12px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      lg",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'16px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      xl",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'24px'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"\u042d\u0442\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0443\u044e \u0448\u043a\u0430\u043b\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 Tailwind \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u043a\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u043a\u0430\u043a ",Object(p.a)("inlineCode",{parentName:"p"},"p-sm"),", ",Object(p.a)("inlineCode",{parentName:"p"},"m-md"),", ",Object(p.a)("inlineCode",{parentName:"p"},"w-lg")," \u0438 ",Object(p.a)("inlineCode",{parentName:"p"},"h-xl"),"."),Object(p.a)("hr",null),Object(p.a)(l.a,{level:2,id:"shkala-intervalov-po-umolchaniyu",toc:!0},"\u0428\u043a\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),Object(p.a)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Tailwind \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0431\u0448\u0438\u0440\u043d\u0443\u044e \u0438 \u0438\u0441\u0447\u0435\u0440\u043f\u044b\u0432\u0430\u044e\u0449\u0443\u044e \u0447\u0438\u0441\u043b\u043e\u0432\u0443\u044e \u0448\u043a\u0430\u043b\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b, \u043f\u043e\u044d\u0442\u043e\u043c\u0443, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(p.a)("inlineCode",{parentName:"p"},"16")," \u0432 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430, \u0447\u0435\u043c ",Object(p.a)("inlineCode",{parentName:"p"},"8"),". \u041e\u0434\u043d\u0430 \u0435\u0434\u0438\u043d\u0438\u0446\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0440\u0430\u0432\u043d\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"0.25rem"),", \u0447\u0442\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",Object(p.a)("inlineCode",{parentName:"p"},"4px"),".")),Object(p.a)(d,{mdxType:"SpacingScale"}))}g.isMDXComponent=!0,g.layoutProps=u},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),o=t.n(s),p=c.a.createElement;function r(e){var a=e.suffix,t=e.children+(a?" - ".concat(a):"");return p(o.a,null,p("title",{key:"title"},t),p("meta",{key:"twitter:title",name:"twitter:title",content:t}),p("meta",{key:"og:title",property:"og:title",content:t}))}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return j}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),o=t("ekQu"),p=t("8Kt/"),r=t.n(p),m=t("nOHt"),l=t("ap0H"),i=t("1Q1k"),b=s.a.createElement;function j(e){var a=Object(m.useRouter)();return b(s.a.Fragment,null,b(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),b(r.a,null,b("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),b("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),b(o.b,Object(n.a)({nav:i.a},e)))}}},[["8+N+",0,2,1,3,4,5]]]);