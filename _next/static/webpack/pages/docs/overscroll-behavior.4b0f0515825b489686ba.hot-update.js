webpackHotUpdate_N_E("pages/docs/overscroll-behavior",{

/***/ "./src/pages/docs/overscroll-behavior.mdx":
/*!************************************************!*\
  !*** ./src/pages/docs/overscroll-behavior.mdx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Heading */ "./src/components/Heading.js");
/* harmony import */ var _components_CodeSample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CodeSample */ "./src/components/CodeSample.js");
/* harmony import */ var _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/DocumentationLayout */ "./src/layouts/DocumentationLayout.js");
/* harmony import */ var _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/layouts/ContentsLayout */ "./src/layouts/ContentsLayout.js");
/* harmony import */ var tailwindcss_lib_plugins_overscrollBehavior__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tailwindcss/lib/plugins/overscrollBehavior */ "./node_modules/tailwindcss/lib/plugins/overscrollBehavior.js");
/* harmony import */ var tailwindcss_lib_plugins_overscrollBehavior__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_lib_plugins_overscrollBehavior__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Variants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Variants */ "./src/components/Variants.js");
/* harmony import */ var _components_Disabling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Disabling */ "./src/components/Disabling.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\pages\\docs\\overscroll-behavior.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */









var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_7__["DocumentationLayout"];
var classes = {
  plugin: tailwindcss_lib_plugins_overscrollBehavior__WEBPACK_IMPORTED_MODULE_9___default.a
};
var meta = {
  "title": "Поведение при переполнении",
  "shortTitle": "Overscroll Behavior",
  "description": "Утилиты для управления поведением браузера при достижении границы области прокрутки."
};
var tableOfContents = [{
  "title": "Auto",
  "slug": "auto",
  "children": []
}, {
  "title": "Contain",
  "slug": "contain",
  "children": []
}, {
  "title": "None",
  "slug": "none",
  "children": []
}, {
  "title": "Адаптивность",
  "slug": "adaptivnost",
  "children": []
}, {
  "title": "Кастомизация",
  "slug": "kastomizacziya",
  "children": [{
    "title": "Варианты",
    "slug": "varianty"
  }, {
    "title": "Отключение",
    "slug": "otklyuchenie"
  }]
}];
var layoutProps = {
  Layout: Layout,
  classes: classes,
  meta: meta,
  tableOfContents: tableOfContents
};
var MDXLayout = _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_8__["ContentsLayout"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "auto",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Auto"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 26
    }
  }, "overscroll-auto"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0433 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <div class=\"overscroll-auto overflow-auto h-32 bg-emerald-200 text-emerald-500 px-6 py-4 font-medium font-flow rounded-lg\">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">overscroll-auto</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet...<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "emerald",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "contain",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Contain"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 26
    }
  }, "overscroll-contain"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u0432 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u043B\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0435, \u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u044B \xAB\u043E\u0442\u0441\u043A\u043E\u043A\u0430\xBB \u043F\u0440\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0435 \u0437\u0430 \u043A\u043E\u043D\u0435\u0446 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <div class=\"overscroll-contain overflow-auto h-32 bg-light-blue-200 text-light-blue-500 px-6 py-4 font-medium font-flow rounded-lg\">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">overscroll-contain</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet...<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "lightBlue",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "none",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "None"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 26
    }
  }, "overscroll-none"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u0432 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u043B\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0443 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u043B\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u044B \xAB\u043E\u0442\u0441\u043A\u043E\u043A\u0430\xBB \u043F\u0440\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0435 \u0437\u0430 \u043A\u043E\u043D\u0435\u0446 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <div class=\"overscroll-none overflow-auto h-32 bg-amber-200 text-amber-500 px-6 py-4 font-medium font-flow rounded-lg\">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">overscroll-none</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet...<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "amber",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "adaptivnost",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E\u043C overscroll-behavior \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0430, \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0440\u0435\u0444\u0438\u043A\u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 108
    }
  }, "{screen}:"), " prefix to any existing overscroll-behavior utility. For example, use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 235
    }
  }, "md:overscroll-contain"), " to apply the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 318
    }
  }, "overscroll-contain"), " utility at only medium screen sizes and above."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-html"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 18
    }
  }), "<"), "div"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 51
    }
  }), "class"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 18
    }
  }), "="), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 32
    }
  }), "\""), "overscroll-auto ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "code-highlight bg-code-highlight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 52
    }
  }), "md:overscroll-contain lg:overscroll-none"), " ...", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 79
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 39
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }), "<!-- ... -->"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 18
    }
  }), "</"), "div"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 47
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u0445 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 Tailwind \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0435\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/responsive-design",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 123
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 170
    }
  }, "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "kastomizacziya",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, "\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "varianty",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Variants__WEBPACK_IMPORTED_MODULE_10__["Variants"], {
    plugin: "overscrollBehavior",
    name: "overscroll-behavior",
    mdxType: "Variants",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "otklyuchenie",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Disabling__WEBPACK_IMPORTED_MODULE_11__["Disabling"], {
    plugin: "overscrollBehavior",
    name: "overscroll-behavior",
    mdxType: "Disabling",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;

var _c;

$RefreshReg$(_c, "MDXContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3Mvb3ZlcnNjcm9sbC1iZWhhdmlvci5tZHgiXSwibmFtZXMiOlsiTGF5b3V0IiwiX0xheW91dCIsImNsYXNzZXMiLCJwbHVnaW4iLCJtZXRhIiwidGFibGVPZkNvbnRlbnRzIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJfRGVmYXVsdCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxnRkFBZjtBQUNBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxRQUFNLEVBQU5BLGlGQUFNQTtBQURRLENBQWhCO0FBR0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1gsV0FBUyw0QkFERTtBQUVYLGdCQUFjLHFCQUZIO0FBR1gsaUJBQWU7QUFISixDQUFiO0FBS0EsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUyxNQURjO0FBRXZCLFVBQVEsTUFGZTtBQUd2QixjQUFZO0FBSFcsQ0FBRCxFQUlyQjtBQUNELFdBQVMsU0FEUjtBQUVELFVBQVEsU0FGUDtBQUdELGNBQVk7QUFIWCxDQUpxQixFQVFyQjtBQUNELFdBQVMsTUFEUjtBQUVELFVBQVEsTUFGUDtBQUdELGNBQVk7QUFIWCxDQVJxQixFQVlyQjtBQUNELFdBQVMsY0FEUjtBQUVELFVBQVEsYUFGUDtBQUdELGNBQVk7QUFIWCxDQVpxQixFQWdCckI7QUFDRCxXQUFTLGNBRFI7QUFFRCxVQUFRLGdCQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyxVQURFO0FBRVgsWUFBUTtBQUZHLEdBQUQsRUFHVDtBQUNELGFBQVMsWUFEUjtBQUVELFlBQVE7QUFGUCxHQUhTO0FB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QXpCSyxFQXVFTCwwREFBQyw4REFBRDtBQUFVLFVBQU0sRUFBQyxvQkFBakI7QUFBc0MsUUFBSSxFQUFDLHFCQUEzQztBQUFpRSxXQUFPLEVBQUMsVUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZFSyxFQXdFTDtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsY0FBdkI7QUFBc0MsT0FBRyxFQUFFLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBREYsQ0F4RUssRUEyRUwsMERBQUMsZ0VBQUQ7QUFBVyxVQUFNLEVBQUMsb0JBQWxCO0FBQXVDLFFBQUksRUFBQyxxQkFBNUM7QUFBa0UsV0FBTyxFQUFDLFdBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRUssQ0FBUDtBQStFRDtLQW5GdUJILFU7QUFxRnhCO0FBQ0FBLFVBQVUsQ0FBQ0ksY0FBWCxHQUE0QixJQUE1QjtBQUNBSixVQUFVLENBQUNILFdBQVgsR0FBeUJBLFdBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3Mvb3ZlcnNjcm9sbC1iZWhhdmlvci40YjBmMDUxNTgyNWI0ODk2ODZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IF9MaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEhlYWRpbmcgYXMgX0hlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGluZydcbmltcG9ydCB7IENvZGVTYW1wbGUgYXMgX0NvZGVTYW1wbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29kZVNhbXBsZSdcbmltcG9ydCB7IERvY3VtZW50YXRpb25MYXlvdXQgYXMgX0xheW91dCB9IGZyb20gJ0AvbGF5b3V0cy9Eb2N1bWVudGF0aW9uTGF5b3V0J1xuaW1wb3J0IHsgQ29udGVudHNMYXlvdXQgYXMgX0RlZmF1bHQgfSBmcm9tICdAL2xheW91dHMvQ29udGVudHNMYXlvdXQnXG5pbXBvcnQgcGx1Z2luIGZyb20gJ3RhaWx3aW5kY3NzL2xpYi9wbHVnaW5zL292ZXJzY3JvbGxCZWhhdmlvcidcbmltcG9ydCB7IFZhcmlhbnRzIH0gZnJvbSAnQC9jb21wb25lbnRzL1ZhcmlhbnRzJ1xuaW1wb3J0IHsgRGlzYWJsaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0Rpc2FibGluZydcbmNvbnN0IExheW91dCA9IF9MYXlvdXQ7XG5jb25zdCBjbGFzc2VzID0ge1xuICBwbHVnaW5cbn07XG5jb25zdCBtZXRhID0ge1xuICBcInRpdGxlXCI6IFwi0J/QvtCy0LXQtNC10L3QuNC1INC/0YDQuCDQv9C10YDQtdC/0L7Qu9C90LXQvdC40LhcIixcbiAgXCJzaG9ydFRpdGxlXCI6IFwiT3ZlcnNjcm9sbCBCZWhhdmlvclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwi0KPRgtC40LvQuNGC0Ysg0LTQu9GPINGD0L/RgNCw0LLQu9C10L3QuNGPINC/0L7QstC10LTQtdC90LjQtdC8INCx0YDQsNGD0LfQtdGA0LAg0L/RgNC4INC00L7RgdGC0LjQttC10L3QuNC4INCz0YDQsNC90LjRhtGLINC+0LHQu9Cw0YHRgtC4INC/0YDQvtC60YDRg9GC0LrQuC5cIlxufTtcbmNvbnN0IHRhYmxlT2ZDb250ZW50cyA9IFt7XG4gIFwidGl0bGVcIjogXCJBdXRvXCIsXG4gIFwic2x1Z1wiOiBcImF1dG9cIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiQ29udGFpblwiLFxuICBcInNsdWdcIjogXCJjb250YWluXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIk5vbmVcIixcbiAgXCJzbHVnXCI6IFwibm9uZVwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCLQkNC00LDQv9GC0LjQstC90L7RgdGC0YxcIixcbiAgXCJzbHVnXCI6IFwiYWRhcHRpdm5vc3RcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwi0JrQsNGB0YLQvtC80LjQt9Cw0YbQuNGPXCIsXG4gIFwic2x1Z1wiOiBcImthc3RvbWl6YWN6aXlhXCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwi0JLQsNGA0LjQsNC90YLRi1wiLFxuICAgIFwic2x1Z1wiOiBcInZhcmlhbnR5XCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCLQntGC0LrQu9GO0YfQtdC90LjQtVwiLFxuICAgIFwic2x1Z1wiOiBcIm90a2x5dWNoZW5pZVwiXG4gIH1dXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIExheW91dCxcbmNsYXNzZXMsXG5tZXRhLFxudGFibGVPZkNvbnRlbnRzXG59O1xuY29uc3QgTURYTGF5b3V0ID0gX0RlZmF1bHRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuXG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJhdXRvXCIgdG9jPXt0cnVlfT5BdXRvPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvdmVyc2Nyb2xsLWF1dG9gfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LzQvtCzINC/0YDQvtC00L7Qu9C20LjRgtGMINC/0YDQvtC60YDRg9GC0LrRgyDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0Lkg0L7QsdC70LDRgdGC0Lgg0L/RgNC+0LrRgNGD0YLQutC4LCDQutC+0LPQtNCwINC+0L3QuCDQtNC+0YHRgtC40LPQvdGD0YIg0LPRgNCw0L3QuNGG0Ysg0L7RgdC90L7QstC90L7QuSDQvtCx0LvQsNGB0YLQuCDQv9GA0L7QutGA0YPRgtC60LguYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8ZGl2IGNsYXNzPVxcXCJvdmVyc2Nyb2xsLWF1dG8gb3ZlcmZsb3ctYXV0byBoLTMyIGJnLWVtZXJhbGQtMjAwIHRleHQtZW1lcmFsZC01MDAgcHgtNiBweS00IGZvbnQtbWVkaXVtIGZvbnQtZmxvdyByb3VuZGVkLWxnXFxcIj5cXG4gICAgPHA+XFxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIGVsZWlmZW5kIHJ1dHJ1bSBhdWN0b3IuIFBoYXNlbGx1cyBjb252YWxsaXMgc2FnaXR0aXMgYXVndWUgdXQgb3JuYXJlLiBWZXN0aWJ1bHVtIGV0IGdyYXZpZGEgbGVjdHVzLCBzZWQgdWx0cmljZXMgc2FwaWVuLiBOdWxsYW0gYWxpcXVldCBlbGl0IGR1aSwgdml0YWUgaGVuZHJlcml0IGxlY3R1cyB2b2x1dHBhdCBlZ2V0LiBJbiBwb3J0dGl0b3IgdGluY2lkdW50IGVnZXN0YXMuIFBlbGxlbnRlc3F1ZSBsYW9yZWV0IGxpZ3VsYSBhdCBlc3QgdnVscHV0YXRlIGZhY2lsaXNpcy4gRXRpYW0gdHJpc3RpcXVlIGp1c3RvIHV0IG9kaW8gcGxhY2VyYXQgb3JuYXJlLiBDcmFzIGJpYmVuZHVtLCBvcmNpIGF0IG9ybmFyZSB0aW5jaWR1bnQsIGxhY3VzIG51bmMgZ3JhdmlkYSBlbmltLCBzaXQgYW1ldCBldWlzbW9kIG51bmMgbGVjdHVzIGluIGxlY3R1cy4gVXQgZGljdHVtIG51bGxhIGV0IGFyY3UgYWxpcXVldCBvcm5hcmUuIEFsaXF1YW0gZXQgZGFwaWJ1cyBsZWN0dXMuIEFlbmVhbiBtYXR0aXMgZWxpdCBtaSwgc2VkIHVsdHJpY2llcyBhdWd1ZSBjb25zZWN0ZXR1ciBpZC4gU2VkIGlkIG1hZ25hIG1hbGVzdWFkYSwgbHVjdHVzIHVybmEgYSwgYmliZW5kdW0gdG9ydG9yLiBDcmFzIGN1cnN1cyBjdXJzdXMgZXguIE51bGxhIGZyaW5naWxsYSBlbGl0IHZpdGFlIGltcGVyZGlldCBzY2VsZXJpc3F1ZS4gRG9uZWMgYWMgc2VtIGV1IGRpYW0gY29udmFsbGlzIG1vbGxpcyBhIHNlZCBsZW8uIFByb2luIGNvbmd1ZSBhdWd1ZSB0dXJwaXMsIGVnZXQgcnV0cnVtIGRvbG9yIHVsdHJpY2llcyBub24uIE51bGxhIGJsYW5kaXQgdmVuZW5hdGlzIGRhcGlidXMuIFNlZCB0aW5jaWR1bnQgbW9sbGlzIGVsaXQsIHF1aXMgc3VzY2lwaXQgbmliaCBlbGVpZmVuZCBxdWlzLiBEb25lYyBleCBsb3JlbSwgYXVjdG9yIGV1IHJ1dHJ1bSBpbiwgYmxhbmRpdCBpZCBkb2xvci4gTnVsbGEgbW9sZXN0aWUgYXJjdSB0dXJwaXMuIEluIGlkIGZlbGlzIHZ1bHB1dGF0ZSwgdGVtcG9yIG1hc3NhIGVnZXQsIG1hbGVzdWFkYSBtYXVyaXMuIFF1aXNxdWUgZnJpbmdpbGxhIGNvbnNlcXVhdCBtZXR1cywgbHVjdHVzIHNjZWxlcmlzcXVlIGxlbyBmcmluZ2lsbGEgdmVsLlxcbiAgICA8L3A+XFxuICA8L2Rpdj5cXG5cIn0gc3JjPXt1bmRlZmluZWR9IHNuaXBwZXQ9e1wiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5vdmVyc2Nyb2xsLWF1dG88L3NwYW4+IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wiZW1lcmFsZFwifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJjb250YWluXCIgdG9jPXt0cnVlfT5Db250YWluPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvdmVyc2Nyb2xsLWNvbnRhaW5gfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9GA0L7QutGA0YPRgtC60LAg0LIg0YbQtdC70LXQstC+0Lkg0L7QsdC70LDRgdGC0Lgg0L3QtSDQt9Cw0L/Rg9GB0LrQsNC70LAg0L/RgNC+0LrRgNGD0YLQutGDINCyINGA0L7QtNC40YLQtdC70YzRgdC60L7QvCDRjdC70LXQvNC10L3RgtC1LCDQvdC+INGB0L7RhdGA0LDQvdGP0LvQsCDRjdGE0YTQtdC60YLRiyDCq9C+0YLRgdC60L7QutCwwrsg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQt9CwINC60L7QvdC10YYg0LrQvtC90YLQtdC50L3QtdGA0LAg0LIg0L7Qv9C10YDQsNGG0LjQvtC90L3Ri9GFINGB0LjRgdGC0LXQvNCw0YUsINC60L7RgtC+0YDRi9C1INC10LPQviDQv9C+0LTQtNC10YDQttC40LLQsNGO0YIuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8ZGl2IGNsYXNzPVxcXCJvdmVyc2Nyb2xsLWNvbnRhaW4gb3ZlcmZsb3ctYXV0byBoLTMyIGJnLWxpZ2h0LWJsdWUtMjAwIHRleHQtbGlnaHQtYmx1ZS01MDAgcHgtNiBweS00IGZvbnQtbWVkaXVtIGZvbnQtZmxvdyByb3VuZGVkLWxnXFxcIj5cXG4gICAgPHA+XFxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIGVsZWlmZW5kIHJ1dHJ1bSBhdWN0b3IuIFBoYXNlbGx1cyBjb252YWxsaXMgc2FnaXR0aXMgYXVndWUgdXQgb3JuYXJlLiBWZXN0aWJ1bHVtIGV0IGdyYXZpZGEgbGVjdHVzLCBzZWQgdWx0cmljZXMgc2FwaWVuLiBOdWxsYW0gYWxpcXVldCBlbGl0IGR1aSwgdml0YWUgaGVuZHJlcml0IGxlY3R1cyB2b2x1dHBhdCBlZ2V0LiBJbiBwb3J0dGl0b3IgdGluY2lkdW50IGVnZXN0YXMuIFBlbGxlbnRlc3F1ZSBsYW9yZWV0IGxpZ3VsYSBhdCBlc3QgdnVscHV0YXRlIGZhY2lsaXNpcy4gRXRpYW0gdHJpc3RpcXVlIGp1c3RvIHV0IG9kaW8gcGxhY2VyYXQgb3JuYXJlLiBDcmFzIGJpYmVuZHVtLCBvcmNpIGF0IG9ybmFyZSB0aW5jaWR1bnQsIGxhY3VzIG51bmMgZ3JhdmlkYSBlbmltLCBzaXQgYW1ldCBldWlzbW9kIG51bmMgbGVjdHVzIGluIGxlY3R1cy4gVXQgZGljdHVtIG51bGxhIGV0IGFyY3UgYWxpcXVldCBvcm5hcmUuIEFsaXF1YW0gZXQgZGFwaWJ1cyBsZWN0dXMuIEFlbmVhbiBtYXR0aXMgZWxpdCBtaSwgc2VkIHVsdHJpY2llcyBhdWd1ZSBjb25zZWN0ZXR1ciBpZC4gU2VkIGlkIG1hZ25hIG1hbGVzdWFkYSwgbHVjdHVzIHVybmEgYSwgYmliZW5kdW0gdG9ydG9yLiBDcmFzIGN1cnN1cyBjdXJzdXMgZXguIE51bGxhIGZyaW5naWxsYSBlbGl0IHZpdGFlIGltcGVyZGlldCBzY2VsZXJpc3F1ZS4gRG9uZWMgYWMgc2VtIGV1IGRpYW0gY29udmFsbGlzIG1vbGxpcyBhIHNlZCBsZW8uIFByb2luIGNvbmd1ZSBhdWd1ZSB0dXJwaXMsIGVnZXQgcnV0cnVtIGRvbG9yIHVsdHJpY2llcyBub24uIE51bGxhIGJsYW5kaXQgdmVuZW5hdGlzIGRhcGlidXMuIFNlZCB0aW5jaWR1bnQgbW9sbGlzIGVsaXQsIHF1aXMgc3VzY2lwaXQgbmliaCBlbGVpZmVuZCBxdWlzLiBEb25lYyBleCBsb3JlbSwgYXVjdG9yIGV1IHJ1dHJ1bSBpbiwgYmxhbmRpdCBpZCBkb2xvci4gTnVsbGEgbW9sZXN0aWUgYXJjdSB0dXJwaXMuIEluIGlkIGZlbGlzIHZ1bHB1dGF0ZSwgdGVtcG9yIG1hc3NhIGVnZXQsIG1hbGVzdWFkYSBtYXVyaXMuIFF1aXNxdWUgZnJpbmdpbGxhIGNvbnNlcXVhdCBtZXR1cywgbHVjdHVzIHNjZWxlcmlzcXVlIGxlbyBmcmluZ2lsbGEgdmVsLlxcbiAgICA8L3A+XFxuICA8L2Rpdj5cXG5cIn0gc3JjPXt1bmRlZmluZWR9IHNuaXBwZXQ9e1wiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5vdmVyc2Nyb2xsLWNvbnRhaW48L3NwYW4+IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wibGlnaHRCbHVlXCJ9IG1pbj17ZmFsc2V9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cIm5vbmVcIiB0b2M9e3RydWV9Pk5vbmU8L19IZWFkaW5nPlxuICAgICAgPHA+e2DQmNGB0L/QvtC70YzQt9GD0LnRgtC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG92ZXJzY3JvbGwtbm9uZWB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC/0YDQvtC60YDRg9GC0LrQsCDQsiDRhtC10LvQtdCy0L7QuSDQvtCx0LvQsNGB0YLQuCDQvdC1INC30LDQv9GD0YHQutCw0LvQsCDQv9GA0L7QutGA0YPRgtC60YMg0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQvtC8INGN0LvQtdC80LXQvdGC0LUsINCwINGC0LDQutC20LUg0L/RgNC10LTQvtGC0LLRgNCw0YnQsNC70LAg0Y3RhNGE0LXQutGC0YsgwqvQvtGC0YHQutC+0LrQsMK7INC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LfQsCDQutC+0L3QtdGGINC60L7QvdGC0LXQudC90LXRgNCwLmB9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxfQ29kZVNhbXBsZSBwcmV2aWV3PXtcIlxcbiAgPGRpdiBjbGFzcz1cXFwib3ZlcnNjcm9sbC1ub25lIG92ZXJmbG93LWF1dG8gaC0zMiBiZy1hbWJlci0yMDAgdGV4dC1hbWJlci01MDAgcHgtNiBweS00IGZvbnQtbWVkaXVtIGZvbnQtZmxvdyByb3VuZGVkLWxnXFxcIj5cXG4gICAgPHA+XFxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWF1cmlzIGVsZWlmZW5kIHJ1dHJ1bSBhdWN0b3IuIFBoYXNlbGx1cyBjb252YWxsaXMgc2FnaXR0aXMgYXVndWUgdXQgb3JuYXJlLiBWZXN0aWJ1bHVtIGV0IGdyYXZpZGEgbGVjdHVzLCBzZWQgdWx0cmljZXMgc2FwaWVuLiBOdWxsYW0gYWxpcXVldCBlbGl0IGR1aSwgdml0YWUgaGVuZHJlcml0IGxlY3R1cyB2b2x1dHBhdCBlZ2V0LiBJbiBwb3J0dGl0b3IgdGluY2lkdW50IGVnZXN0YXMuIFBlbGxlbnRlc3F1ZSBsYW9yZWV0IGxpZ3VsYSBhdCBlc3QgdnVscHV0YXRlIGZhY2lsaXNpcy4gRXRpYW0gdHJpc3RpcXVlIGp1c3RvIHV0IG9kaW8gcGxhY2VyYXQgb3JuYXJlLiBDcmFzIGJpYmVuZHVtLCBvcmNpIGF0IG9ybmFyZSB0aW5jaWR1bnQsIGxhY3VzIG51bmMgZ3JhdmlkYSBlbmltLCBzaXQgYW1ldCBldWlzbW9kIG51bmMgbGVjdHVzIGluIGxlY3R1cy4gVXQgZGljdHVtIG51bGxhIGV0IGFyY3UgYWxpcXVldCBvcm5hcmUuIEFsaXF1YW0gZXQgZGFwaWJ1cyBsZWN0dXMuIEFlbmVhbiBtYXR0aXMgZWxpdCBtaSwgc2VkIHVsdHJpY2llcyBhdWd1ZSBjb25zZWN0ZXR1ciBpZC4gU2VkIGlkIG1hZ25hIG1hbGVzdWFkYSwgbHVjdHVzIHVybmEgYSwgYmliZW5kdW0gdG9ydG9yLiBDcmFzIGN1cnN1cyBjdXJzdXMgZXguIE51bGxhIGZyaW5naWxsYSBlbGl0IHZpdGFlIGltcGVyZGlldCBzY2VsZXJpc3F1ZS4gRG9uZWMgYWMgc2VtIGV1IGRpYW0gY29udmFsbGlzIG1vbGxpcyBhIHNlZCBsZW8uIFByb2luIGNvbmd1ZSBhdWd1ZSB0dXJwaXMsIGVnZXQgcnV0cnVtIGRvbG9yIHVsdHJpY2llcyBub24uIE51bGxhIGJsYW5kaXQgdmVuZW5hdGlzIGRhcGlidXMuIFNlZCB0aW5jaWR1bnQgbW9sbGlzIGVsaXQsIHF1aXMgc3VzY2lwaXQgbmliaCBlbGVpZmVuZCBxdWlzLiBEb25lYyBleCBsb3JlbSwgYXVjdG9yIGV1IHJ1dHJ1bSBpbiwgYmxhbmRpdCBpZCBkb2xvci4gTnVsbGEgbW9sZXN0aWUgYXJjdSB0dXJwaXMuIEluIGlkIGZlbGlzIHZ1bHB1dGF0ZSwgdGVtcG9yIG1hc3NhIGVnZXQsIG1hbGVzdWFkYSBtYXVyaXMuIFF1aXNxdWUgZnJpbmdpbGxhIGNvbnNlcXVhdCBtZXR1cywgbHVjdHVzIHNjZWxlcmlzcXVlIGxlbyBmcmluZ2lsbGEgdmVsLlxcbiAgICA8L3A+XFxuICA8L2Rpdj5cXG5cIn0gc3JjPXt1bmRlZmluZWR9IHNuaXBwZXQ9e1wiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5vdmVyc2Nyb2xsLW5vbmU8L3NwYW4+IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wiYW1iZXJcIn0gbWluPXtmYWxzZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiYWRhcHRpdm5vc3RcIiB0b2M9e3RydWV9PtCQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjDwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCn0YLQvtCx0Ysg0YPQv9GA0LDQstC70Y/RgtGMINGB0LLQvtC50YHRgtCy0L7QvCBvdmVyc2Nyb2xsLWJlaGF2aW9yINCyINC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDRgtC+0YfQutC1INC+0YHRgtCw0L3QvtCy0LAsINC00L7QsdCw0LLRjNGC0LUg0L/RgNC10YTQuNC60YEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntge3NjcmVlbn06YH08L2lubGluZUNvZGU+e2AgcHJlZml4IHRvIGFueSBleGlzdGluZyBvdmVyc2Nyb2xsLWJlaGF2aW9yIHV0aWxpdHkuIEZvciBleGFtcGxlLCB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbWQ6b3ZlcnNjcm9sbC1jb250YWluYH08L2lubGluZUNvZGU+e2AgdG8gYXBwbHkgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG92ZXJzY3JvbGwtY29udGFpbmB9PC9pbmxpbmVDb2RlPntgIHV0aWxpdHkgYXQgb25seSBtZWRpdW0gc2NyZWVuIHNpemVzIGFuZCBhYm92ZS5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BkaXZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2xhc3NgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgb3ZlcnNjcm9sbC1hdXRvIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFwiXG4gICAgICAgICAgICAgICAgfX0+e2BtZDpvdmVyc2Nyb2xsLWNvbnRhaW4gbGc6b3ZlcnNjcm9sbC1ub25lYH08L3NwYW4+e2AgLi4uYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2A8IS0tIC4uLiAtLT5gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPC9gfTwvc3Bhbj57YGRpdmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGE0YPQvdC60YbQuNGP0YUg0LDQtNCw0L/RgtC40LLQvdC+0LPQviDQtNC40LfQsNC50L3QsCBUYWlsd2luZCDQvtC30L3QsNC60L7QvNGM0YLQtdGB0Ywg0YEg0LTQvtC60YPQvNC10L3RgtCw0YbQuNC10LkgYH08X0xpbmsgaHJlZj1cIi9kb2NzL3Jlc3BvbnNpdmUtZGVzaWduXCIgcGFzc0hyZWY+PGE+e2DQkNC00LDQv9GC0LjQstC90L7Qs9C+INC00LjQt9Cw0LnQvdCwYH08L2E+PC9fTGluaz57YC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJrYXN0b21pemFjeml5YVwiIHRvYz17dHJ1ZX0+0JrQsNGB0YLQvtC80LjQt9Cw0YbQuNGPPC9fSGVhZGluZz5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJ2YXJpYW50eVwiIHRvYz17dHJ1ZX0+0JLQsNGA0LjQsNC90YLRizwvX0hlYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPFZhcmlhbnRzIHBsdWdpbj1cIm92ZXJzY3JvbGxCZWhhdmlvclwiIG5hbWU9XCJvdmVyc2Nyb2xsLWJlaGF2aW9yXCIgbWR4VHlwZT1cIlZhcmlhbnRzXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwib3RrbHl1Y2hlbmllXCIgdG9jPXt0cnVlfT7QntGC0LrQu9GO0YfQtdC90LjQtTwvX0hlYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPERpc2FibGluZyBwbHVnaW49XCJvdmVyc2Nyb2xsQmVoYXZpb3JcIiBuYW1lPVwib3ZlcnNjcm9sbC1iZWhhdmlvclwiIG1keFR5cGU9XCJEaXNhYmxpbmdcIiAvPlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9