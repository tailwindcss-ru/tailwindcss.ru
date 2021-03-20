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
  "title": "Авто",
  "slug": "avto",
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
    id: "avto",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "\u0410\u0432\u0442\u043E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 18
    }
  }, "overscroll-auto"), " to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
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
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 18
    }
  }, "overscroll-contain"), " to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve \"bounce\" effects when scrolling past the end of the container in operating systems that support it.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
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
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 18
    }
  }, "overscroll-none"), " to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent \"bounce\" effects when scrolling past the end of the container.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
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
  }, "To control the overscroll-behavior property at a specific breakpoint, add a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 90
    }
  }, "{screen}:"), " prefix to any existing overscroll-behavior utility. For example, use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 217
    }
  }, "md:overscroll-contain"), " to apply the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 300
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3Mvb3ZlcnNjcm9sbC1iZWhhdmlvci5tZHgiXSwibmFtZXMiOlsiTGF5b3V0IiwiX0xheW91dCIsImNsYXNzZXMiLCJwbHVnaW4iLCJtZXRhIiwidGFibGVPZkNvbnRlbnRzIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJfRGVmYXVsdCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxnRkFBZjtBQUNBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxRQUFNLEVBQU5BLGlGQUFNQTtBQURRLENBQWhCO0FBR0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1gsV0FBUyw0QkFERTtBQUVYLGdCQUFjLHFCQUZIO0FBR1gsaUJBQWU7QUFISixDQUFiO0FBS0EsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUyxNQURjO0FBRXZCLFVBQVEsTUFGZTtBQUd2QixjQUFZO0FBSFcsQ0FBRCxFQUlyQjtBQUNELFdBQVMsU0FEUjtBQUVELFVBQVEsU0FGUDtBQUdELGNBQVk7QUFIWCxDQUpxQixFQVFyQjtBQUNELFdBQVMsTUFEUjtBQUVELFVBQVEsTUFGUDtBQUdELGNBQVk7QUFIWCxDQVJxQixFQVlyQjtBQUNELFdBQVMsY0FEUjtBQUVELFVBQVEsYUFGUDtBQUdELGNBQVk7QUFIWCxDQVpxQixFQWdCckI7QUFDRCxXQUFTLGNBRFI7QUFFRCxVQUFRLGdCQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyxVQURFO0FBRVgsWUFBUTtBQUZHLEdBQUQsRUFHVDtBQUNELGFBQVMsWUFEUjtBQUVELFlBQVE7QUFGUCxHQUhTO0FB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MERBQUMsOERBQUQ7QUFBVSxVQUFNLEVBQUMsb0JBQWpCO0FBQXNDLFFBQUksRUFBQyxxQkFBM0M7QUFBaUUsV0FBTyxFQUFDLFVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2RUssRUF3RUw7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFDLGNBQXZCO0FBQXNDLE9BQUcsRUFBRSxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQURGLENBeEVLLEVBMkVMLDBEQUFDLGdFQUFEO0FBQVcsVUFBTSxFQUFDLG9CQUFsQjtBQUF1QyxRQUFJLEVBQUMscUJBQTVDO0FBQWtFLFdBQU8sRUFBQyxXQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0VLLENBQVA7QUErRUQ7S0FuRnVCSCxVO0FBcUZ4QjtBQUNBQSxVQUFVLENBQUNJLGNBQVgsR0FBNEIsSUFBNUI7QUFDQUosVUFBVSxDQUFDSCxXQUFYLEdBQXlCQSxXQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL292ZXJzY3JvbGwtYmVoYXZpb3IuNDNkZDI4MWI0ODFkYzZkNzU2ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBfTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWFkaW5nIGFzIF9IZWFkaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0hlYWRpbmcnXG5pbXBvcnQgeyBDb2RlU2FtcGxlIGFzIF9Db2RlU2FtcGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvZGVTYW1wbGUnXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IGFzIF9MYXlvdXQgfSBmcm9tICdAL2xheW91dHMvRG9jdW1lbnRhdGlvbkxheW91dCdcbmltcG9ydCB7IENvbnRlbnRzTGF5b3V0IGFzIF9EZWZhdWx0IH0gZnJvbSAnQC9sYXlvdXRzL0NvbnRlbnRzTGF5b3V0J1xuaW1wb3J0IHBsdWdpbiBmcm9tICd0YWlsd2luZGNzcy9saWIvcGx1Z2lucy9vdmVyc2Nyb2xsQmVoYXZpb3InXG5pbXBvcnQgeyBWYXJpYW50cyB9IGZyb20gJ0AvY29tcG9uZW50cy9WYXJpYW50cydcbmltcG9ydCB7IERpc2FibGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9EaXNhYmxpbmcnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgY2xhc3NlcyA9IHtcbiAgcGx1Z2luXG59O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcItCf0L7QstC10LTQtdC90LjQtSDQv9GA0Lgg0L/QtdGA0LXQv9C+0LvQvdC10L3QuNC4XCIsXG4gIFwic2hvcnRUaXRsZVwiOiBcIk92ZXJzY3JvbGwgQmVoYXZpb3JcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcItCj0YLQuNC70LjRgtGLINC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQv9C+0LLQtdC00LXQvdC40LXQvCDQsdGA0LDRg9C30LXRgNCwINC/0YDQuCDQtNC+0YHRgtC40LbQtdC90LjQuCDQs9GA0LDQvdC40YbRiyDQvtCx0LvQsNGB0YLQuCDQv9GA0L7QutGA0YPRgtC60LguXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0JDQstGC0L5cIixcbiAgXCJzbHVnXCI6IFwiYXZ0b1wiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJDb250YWluXCIsXG4gIFwic2x1Z1wiOiBcImNvbnRhaW5cIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiTm9uZVwiLFxuICBcInNsdWdcIjogXCJub25lXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcItCQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjFwiLFxuICBcInNsdWdcIjogXCJhZGFwdGl2bm9zdFwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCLQmtCw0YHRgtC+0LzQuNC30LDRhtC40Y9cIixcbiAgXCJzbHVnXCI6IFwia2FzdG9taXphY3ppeWFcIixcbiAgXCJjaGlsZHJlblwiOiBbe1xuICAgIFwidGl0bGVcIjogXCLQktCw0YDQuNCw0L3RgtGLXCIsXG4gICAgXCJzbHVnXCI6IFwidmFyaWFudHlcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcItCe0YLQutC70Y7Rh9C10L3QuNC1XCIsXG4gICAgXCJzbHVnXCI6IFwib3RrbHl1Y2hlbmllXCJcbiAgfV1cbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgTGF5b3V0LFxuY2xhc3Nlcyxcbm1ldGEsXG50YWJsZU9mQ29udGVudHNcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBfRGVmYXVsdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImF2dG9cIiB0b2M9e3RydWV9PtCQ0LLRgtC+PC9fSGVhZGluZz5cbiAgICAgIDxwPntgVXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG92ZXJzY3JvbGwtYXV0b2B9PC9pbmxpbmVDb2RlPntgIHRvIG1ha2UgaXQgcG9zc2libGUgZm9yIHRoZSB1c2VyIHRvIGNvbnRpbnVlIHNjcm9sbGluZyBhIHBhcmVudCBzY3JvbGwgYXJlYSB3aGVuIHRoZXkgcmVhY2ggdGhlIGJvdW5kYXJ5IG9mIHRoZSBwcmltYXJ5IHNjcm9sbCBhcmVhLmB9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxfQ29kZVNhbXBsZSBwcmV2aWV3PXtcIlxcbiAgPGRpdiBjbGFzcz1cXFwib3ZlcnNjcm9sbC1hdXRvIG92ZXJmbG93LWF1dG8gaC0zMiBiZy1lbWVyYWxkLTIwMCB0ZXh0LWVtZXJhbGQtNTAwIHB4LTYgcHktNCBmb250LW1lZGl1bSBmb250LWZsb3cgcm91bmRlZC1sZ1xcXCI+XFxuICAgIDxwPlxcbiAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBlbGVpZmVuZCBydXRydW0gYXVjdG9yLiBQaGFzZWxsdXMgY29udmFsbGlzIHNhZ2l0dGlzIGF1Z3VlIHV0IG9ybmFyZS4gVmVzdGlidWx1bSBldCBncmF2aWRhIGxlY3R1cywgc2VkIHVsdHJpY2VzIHNhcGllbi4gTnVsbGFtIGFsaXF1ZXQgZWxpdCBkdWksIHZpdGFlIGhlbmRyZXJpdCBsZWN0dXMgdm9sdXRwYXQgZWdldC4gSW4gcG9ydHRpdG9yIHRpbmNpZHVudCBlZ2VzdGFzLiBQZWxsZW50ZXNxdWUgbGFvcmVldCBsaWd1bGEgYXQgZXN0IHZ1bHB1dGF0ZSBmYWNpbGlzaXMuIEV0aWFtIHRyaXN0aXF1ZSBqdXN0byB1dCBvZGlvIHBsYWNlcmF0IG9ybmFyZS4gQ3JhcyBiaWJlbmR1bSwgb3JjaSBhdCBvcm5hcmUgdGluY2lkdW50LCBsYWN1cyBudW5jIGdyYXZpZGEgZW5pbSwgc2l0IGFtZXQgZXVpc21vZCBudW5jIGxlY3R1cyBpbiBsZWN0dXMuIFV0IGRpY3R1bSBudWxsYSBldCBhcmN1IGFsaXF1ZXQgb3JuYXJlLiBBbGlxdWFtIGV0IGRhcGlidXMgbGVjdHVzLiBBZW5lYW4gbWF0dGlzIGVsaXQgbWksIHNlZCB1bHRyaWNpZXMgYXVndWUgY29uc2VjdGV0dXIgaWQuIFNlZCBpZCBtYWduYSBtYWxlc3VhZGEsIGx1Y3R1cyB1cm5hIGEsIGJpYmVuZHVtIHRvcnRvci4gQ3JhcyBjdXJzdXMgY3Vyc3VzIGV4LiBOdWxsYSBmcmluZ2lsbGEgZWxpdCB2aXRhZSBpbXBlcmRpZXQgc2NlbGVyaXNxdWUuIERvbmVjIGFjIHNlbSBldSBkaWFtIGNvbnZhbGxpcyBtb2xsaXMgYSBzZWQgbGVvLiBQcm9pbiBjb25ndWUgYXVndWUgdHVycGlzLCBlZ2V0IHJ1dHJ1bSBkb2xvciB1bHRyaWNpZXMgbm9uLiBOdWxsYSBibGFuZGl0IHZlbmVuYXRpcyBkYXBpYnVzLiBTZWQgdGluY2lkdW50IG1vbGxpcyBlbGl0LCBxdWlzIHN1c2NpcGl0IG5pYmggZWxlaWZlbmQgcXVpcy4gRG9uZWMgZXggbG9yZW0sIGF1Y3RvciBldSBydXRydW0gaW4sIGJsYW5kaXQgaWQgZG9sb3IuIE51bGxhIG1vbGVzdGllIGFyY3UgdHVycGlzLiBJbiBpZCBmZWxpcyB2dWxwdXRhdGUsIHRlbXBvciBtYXNzYSBlZ2V0LCBtYWxlc3VhZGEgbWF1cmlzLiBRdWlzcXVlIGZyaW5naWxsYSBjb25zZXF1YXQgbWV0dXMsIGx1Y3R1cyBzY2VsZXJpc3F1ZSBsZW8gZnJpbmdpbGxhIHZlbC5cXG4gICAgPC9wPlxcbiAgPC9kaXY+XFxuXCJ9IHNyYz17dW5kZWZpbmVkfSBzbmlwcGV0PXtcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Ozwvc3Bhbj5kaXY8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFxcXCI+b3ZlcnNjcm9sbC1hdXRvPC9zcGFuPiAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPmRpdjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlwifSBwcmV2aWV3Q2xhc3NOYW1lPXt1bmRlZmluZWR9IGNvbG9yPXtcImVtZXJhbGRcIn0gbWluPXtmYWxzZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiY29udGFpblwiIHRvYz17dHJ1ZX0+Q29udGFpbjwvX0hlYWRpbmc+XG4gICAgICA8cD57YFVzZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvdmVyc2Nyb2xsLWNvbnRhaW5gfTwvaW5saW5lQ29kZT57YCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgdGFyZ2V0IGFyZWEgZnJvbSB0cmlnZ2VyaW5nIHNjcm9sbGluZyBpbiB0aGUgcGFyZW50IGVsZW1lbnQsIGJ1dCBwcmVzZXJ2ZSBcImJvdW5jZVwiIGVmZmVjdHMgd2hlbiBzY3JvbGxpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBjb250YWluZXIgaW4gb3BlcmF0aW5nIHN5c3RlbXMgdGhhdCBzdXBwb3J0IGl0LmB9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxfQ29kZVNhbXBsZSBwcmV2aWV3PXtcIlxcbiAgPGRpdiBjbGFzcz1cXFwib3ZlcnNjcm9sbC1jb250YWluIG92ZXJmbG93LWF1dG8gaC0zMiBiZy1saWdodC1ibHVlLTIwMCB0ZXh0LWxpZ2h0LWJsdWUtNTAwIHB4LTYgcHktNCBmb250LW1lZGl1bSBmb250LWZsb3cgcm91bmRlZC1sZ1xcXCI+XFxuICAgIDxwPlxcbiAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hdXJpcyBlbGVpZmVuZCBydXRydW0gYXVjdG9yLiBQaGFzZWxsdXMgY29udmFsbGlzIHNhZ2l0dGlzIGF1Z3VlIHV0IG9ybmFyZS4gVmVzdGlidWx1bSBldCBncmF2aWRhIGxlY3R1cywgc2VkIHVsdHJpY2VzIHNhcGllbi4gTnVsbGFtIGFsaXF1ZXQgZWxpdCBkdWksIHZpdGFlIGhlbmRyZXJpdCBsZWN0dXMgdm9sdXRwYXQgZWdldC4gSW4gcG9ydHRpdG9yIHRpbmNpZHVudCBlZ2VzdGFzLiBQZWxsZW50ZXNxdWUgbGFvcmVldCBsaWd1bGEgYXQgZXN0IHZ1bHB1dGF0ZSBmYWNpbGlzaXMuIEV0aWFtIHRyaXN0aXF1ZSBqdXN0byB1dCBvZGlvIHBsYWNlcmF0IG9ybmFyZS4gQ3JhcyBiaWJlbmR1bSwgb3JjaSBhdCBvcm5hcmUgdGluY2lkdW50LCBsYWN1cyBudW5jIGdyYXZpZGEgZW5pbSwgc2l0IGFtZXQgZXVpc21vZCBudW5jIGxlY3R1cyBpbiBsZWN0dXMuIFV0IGRpY3R1bSBudWxsYSBldCBhcmN1IGFsaXF1ZXQgb3JuYXJlLiBBbGlxdWFtIGV0IGRhcGlidXMgbGVjdHVzLiBBZW5lYW4gbWF0dGlzIGVsaXQgbWksIHNlZCB1bHRyaWNpZXMgYXVndWUgY29uc2VjdGV0dXIgaWQuIFNlZCBpZCBtYWduYSBtYWxlc3VhZGEsIGx1Y3R1cyB1cm5hIGEsIGJpYmVuZHVtIHRvcnRvci4gQ3JhcyBjdXJzdXMgY3Vyc3VzIGV4LiBOdWxsYSBmcmluZ2lsbGEgZWxpdCB2aXRhZSBpbXBlcmRpZXQgc2NlbGVyaXNxdWUuIERvbmVjIGFjIHNlbSBldSBkaWFtIGNvbnZhbGxpcyBtb2xsaXMgYSBzZWQgbGVvLiBQcm9pbiBjb25ndWUgYXVndWUgdHVycGlzLCBlZ2V0IHJ1dHJ1bSBkb2xvciB1bHRyaWNpZXMgbm9uLiBOdWxsYSBibGFuZGl0IHZlbmVuYXRpcyBkYXBpYnVzLiBTZWQgdGluY2lkdW50IG1vbGxpcyBlbGl0LCBxdWlzIHN1c2NpcGl0IG5pYmggZWxlaWZlbmQgcXVpcy4gRG9uZWMgZXggbG9yZW0sIGF1Y3RvciBldSBydXRydW0gaW4sIGJsYW5kaXQgaWQgZG9sb3IuIE51bGxhIG1vbGVzdGllIGFyY3UgdHVycGlzLiBJbiBpZCBmZWxpcyB2dWxwdXRhdGUsIHRlbXBvciBtYXNzYSBlZ2V0LCBtYWxlc3VhZGEgbWF1cmlzLiBRdWlzcXVlIGZyaW5naWxsYSBjb25zZXF1YXQgbWV0dXMsIGx1Y3R1cyBzY2VsZXJpc3F1ZSBsZW8gZnJpbmdpbGxhIHZlbC5cXG4gICAgPC9wPlxcbiAgPC9kaXY+XFxuXCJ9IHNyYz17dW5kZWZpbmVkfSBzbmlwcGV0PXtcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Ozwvc3Bhbj5kaXY8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFxcXCI+b3ZlcnNjcm9sbC1jb250YWluPC9zcGFuPiAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPmRpdjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlwifSBwcmV2aWV3Q2xhc3NOYW1lPXt1bmRlZmluZWR9IGNvbG9yPXtcImxpZ2h0Qmx1ZVwifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJub25lXCIgdG9jPXt0cnVlfT5Ob25lPC9fSGVhZGluZz5cbiAgICAgIDxwPntgVXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG92ZXJzY3JvbGwtbm9uZWB9PC9pbmxpbmVDb2RlPntgIHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSB0YXJnZXQgYXJlYSBmcm9tIHRyaWdnZXJpbmcgc2Nyb2xsaW5nIGluIHRoZSBwYXJlbnQgZWxlbWVudCwgYW5kIGFsc28gcHJldmVudCBcImJvdW5jZVwiIGVmZmVjdHMgd2hlbiBzY3JvbGxpbmcgcGFzdCB0aGUgZW5kIG9mIHRoZSBjb250YWluZXIuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8ZGl2IGNsYXNzPVxcXCJvdmVyc2Nyb2xsLW5vbmUgb3ZlcmZsb3ctYXV0byBoLTMyIGJnLWFtYmVyLTIwMCB0ZXh0LWFtYmVyLTUwMCBweC02IHB5LTQgZm9udC1tZWRpdW0gZm9udC1mbG93IHJvdW5kZWQtbGdcXFwiPlxcbiAgICA8cD5cXG4gICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYXVyaXMgZWxlaWZlbmQgcnV0cnVtIGF1Y3Rvci4gUGhhc2VsbHVzIGNvbnZhbGxpcyBzYWdpdHRpcyBhdWd1ZSB1dCBvcm5hcmUuIFZlc3RpYnVsdW0gZXQgZ3JhdmlkYSBsZWN0dXMsIHNlZCB1bHRyaWNlcyBzYXBpZW4uIE51bGxhbSBhbGlxdWV0IGVsaXQgZHVpLCB2aXRhZSBoZW5kcmVyaXQgbGVjdHVzIHZvbHV0cGF0IGVnZXQuIEluIHBvcnR0aXRvciB0aW5jaWR1bnQgZWdlc3Rhcy4gUGVsbGVudGVzcXVlIGxhb3JlZXQgbGlndWxhIGF0IGVzdCB2dWxwdXRhdGUgZmFjaWxpc2lzLiBFdGlhbSB0cmlzdGlxdWUganVzdG8gdXQgb2RpbyBwbGFjZXJhdCBvcm5hcmUuIENyYXMgYmliZW5kdW0sIG9yY2kgYXQgb3JuYXJlIHRpbmNpZHVudCwgbGFjdXMgbnVuYyBncmF2aWRhIGVuaW0sIHNpdCBhbWV0IGV1aXNtb2QgbnVuYyBsZWN0dXMgaW4gbGVjdHVzLiBVdCBkaWN0dW0gbnVsbGEgZXQgYXJjdSBhbGlxdWV0IG9ybmFyZS4gQWxpcXVhbSBldCBkYXBpYnVzIGxlY3R1cy4gQWVuZWFuIG1hdHRpcyBlbGl0IG1pLCBzZWQgdWx0cmljaWVzIGF1Z3VlIGNvbnNlY3RldHVyIGlkLiBTZWQgaWQgbWFnbmEgbWFsZXN1YWRhLCBsdWN0dXMgdXJuYSBhLCBiaWJlbmR1bSB0b3J0b3IuIENyYXMgY3Vyc3VzIGN1cnN1cyBleC4gTnVsbGEgZnJpbmdpbGxhIGVsaXQgdml0YWUgaW1wZXJkaWV0IHNjZWxlcmlzcXVlLiBEb25lYyBhYyBzZW0gZXUgZGlhbSBjb252YWxsaXMgbW9sbGlzIGEgc2VkIGxlby4gUHJvaW4gY29uZ3VlIGF1Z3VlIHR1cnBpcywgZWdldCBydXRydW0gZG9sb3IgdWx0cmljaWVzIG5vbi4gTnVsbGEgYmxhbmRpdCB2ZW5lbmF0aXMgZGFwaWJ1cy4gU2VkIHRpbmNpZHVudCBtb2xsaXMgZWxpdCwgcXVpcyBzdXNjaXBpdCBuaWJoIGVsZWlmZW5kIHF1aXMuIERvbmVjIGV4IGxvcmVtLCBhdWN0b3IgZXUgcnV0cnVtIGluLCBibGFuZGl0IGlkIGRvbG9yLiBOdWxsYSBtb2xlc3RpZSBhcmN1IHR1cnBpcy4gSW4gaWQgZmVsaXMgdnVscHV0YXRlLCB0ZW1wb3IgbWFzc2EgZWdldCwgbWFsZXN1YWRhIG1hdXJpcy4gUXVpc3F1ZSBmcmluZ2lsbGEgY29uc2VxdWF0IG1ldHVzLCBsdWN0dXMgc2NlbGVyaXNxdWUgbGVvIGZyaW5naWxsYSB2ZWwuXFxuICAgIDwvcD5cXG4gIDwvZGl2PlxcblwifSBzcmM9e3VuZGVmaW5lZH0gc25pcHBldD17XCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+ZGl2PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiY29kZS1oaWdobGlnaHQgYmctY29kZS1oaWdobGlnaHRcXFwiPm92ZXJzY3JvbGwtbm9uZTwvc3Bhbj4gLi4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7Lzwvc3Bhbj5kaXY8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cIn0gcHJldmlld0NsYXNzTmFtZT17dW5kZWZpbmVkfSBjb2xvcj17XCJhbWJlclwifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJhZGFwdGl2bm9zdFwiIHRvYz17dHJ1ZX0+0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMPC9fSGVhZGluZz5cbiAgICAgIDxwPntgVG8gY29udHJvbCB0aGUgb3ZlcnNjcm9sbC1iZWhhdmlvciBwcm9wZXJ0eSBhdCBhIHNwZWNpZmljIGJyZWFrcG9pbnQsIGFkZCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHtzY3JlZW59OmB9PC9pbmxpbmVDb2RlPntgIHByZWZpeCB0byBhbnkgZXhpc3Rpbmcgb3ZlcnNjcm9sbC1iZWhhdmlvciB1dGlsaXR5LiBGb3IgZXhhbXBsZSwgdXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG1kOm92ZXJzY3JvbGwtY29udGFpbmB9PC9pbmxpbmVDb2RlPntgIHRvIGFwcGx5IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvdmVyc2Nyb2xsLWNvbnRhaW5gfTwvaW5saW5lQ29kZT57YCB1dGlsaXR5IGF0IG9ubHkgbWVkaXVtIHNjcmVlbiBzaXplcyBhbmQgYWJvdmUuYH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgZGl2YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNsYXNzYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YG92ZXJzY3JvbGwtYXV0byBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwiY29kZS1oaWdobGlnaHQgYmctY29kZS1oaWdobGlnaHRcIlxuICAgICAgICAgICAgICAgIH19PntgbWQ6b3ZlcnNjcm9sbC1jb250YWluIGxnOm92ZXJzY3JvbGwtbm9uZWB9PC9zcGFuPntgIC4uLmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BkaXZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCU0LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRhNGD0L3QutGG0LjRj9GFINCw0LTQsNC/0YLQuNCy0L3QvtCz0L4g0LTQuNC30LDQudC90LAgVGFpbHdpbmQg0L7Qt9C90LDQutC+0LzRjNGC0LXRgdGMINGBINC00L7QutGD0LzQtdC90YLQsNGG0LjQtdC5IGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9yZXNwb25zaXZlLWRlc2lnblwiIHBhc3NIcmVmPjxhPntg0JDQtNCw0L/RgtC40LLQvdC+0LPQviDQtNC40LfQsNC50L3QsGB9PC9hPjwvX0xpbms+e2AuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwia2FzdG9taXphY3ppeWFcIiB0b2M9e3RydWV9PtCa0LDRgdGC0L7QvNC40LfQsNGG0LjRjzwvX0hlYWRpbmc+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwidmFyaWFudHlcIiB0b2M9e3RydWV9PtCS0LDRgNC40LDQvdGC0Ys8L19IZWFkaW5nPlxuICAgIDwvZGl2PlxuICAgIDxWYXJpYW50cyBwbHVnaW49XCJvdmVyc2Nyb2xsQmVoYXZpb3JcIiBuYW1lPVwib3ZlcnNjcm9sbC1iZWhhdmlvclwiIG1keFR5cGU9XCJWYXJpYW50c1wiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cIm90a2x5dWNoZW5pZVwiIHRvYz17dHJ1ZX0+0J7RgtC60LvRjtGH0LXQvdC40LU8L19IZWFkaW5nPlxuICAgIDwvZGl2PlxuICAgIDxEaXNhYmxpbmcgcGx1Z2luPVwib3ZlcnNjcm9sbEJlaGF2aW9yXCIgbmFtZT1cIm92ZXJzY3JvbGwtYmVoYXZpb3JcIiBtZHhUeXBlPVwiRGlzYWJsaW5nXCIgLz5cblxuXG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbk1EWENvbnRlbnQubGF5b3V0UHJvcHMgPSBsYXlvdXRQcm9wc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==