webpackHotUpdate_N_E("pages/docs/responsive-design",{

/***/ "./src/pages/docs/responsive-design.mdx":
/*!**********************************************!*\
  !*** ./src/pages/docs/responsive-design.mdx ***!
  \**********************************************/
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
/* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Tip */ "./src/components/Tip.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\pages\\docs\\responsive-design.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */








var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_7__["DocumentationLayout"];
var meta = {
  "title": "Адаптивный дизайн",
  "description": "Использование адаптивных вариантов утилит для создания адаптивных пользовательских интерфейсов."
};
var tableOfContents = [{
  "title": "Обзор",
  "slug": "obzor",
  "children": []
}, {
  "title": "Сначала мобильные",
  "slug": "snachala-mobilnye",
  "children": [{
    "title": "Ориентация на мобильные экраны",
    "slug": "orientacziya-na-mobilnye-ekrany"
  }, {
    "title": "Targeting a single breakpoint",
    "slug": "targeting-a-single-breakpoint"
  }]
}, {
  "title": "Customizing breakpoints",
  "slug": "customizing-breakpoints",
  "children": []
}];
var layoutProps = {
  Layout: Layout,
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
      lineNumber: 49,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "obzor",
    toc: true,
    hidden: true,
    mdxType: "Heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "\u041E\u0431\u0437\u043E\u0440"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u0432 Tailwind \u043C\u043E\u0436\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u0447\u043A\u0430\u0445, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432, \u043D\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u044F \u0441\u0432\u043E\u0435\u0433\u043E HTML."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u044F\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u0447\u0435\u043A, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u043E\u0431\u0449\u0438\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("thead", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "thead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), "\u041F\u0440\u0435\u0444\u0438\u043A\u0441 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), "CSS"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tbody", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 16
    }
  }, "sm")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), "640px"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }
  }, "@media (min-width: 640px) { ... }"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 16
    }
  }, "md")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), "768px"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 16
    }
  }, "@media (min-width: 768px) { ... }"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 16
    }
  }, "lg")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), "1024px"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 16
    }
  }, "@media (min-width: 1024px) { ... }"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 16
    }
  }, "xl")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), "1280px"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 16
    }
  }, "@media (min-width: 1280px) { ... }"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 16
    }
  }, "2xl")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), "1536px"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 16
    }
  }, "@media (min-width: 1536px) { ... }"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0442\u0438\u043B\u0438\u0442\u0443, \u043D\u043E \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u0432\u0441\u0442\u0443\u043F\u0438\u043B\u0430 \u0432 \u0441\u0438\u043B\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435, \u0432\u0441\u0435, \u0447\u0442\u043E \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u044D\u0442\u043E \u043F\u0440\u0435\u0444\u0438\u043A\u0441 \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438, \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u0438\u043C\u0432\u043E\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 210
    }
  }, ":"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 137,
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
      lineNumber: 139,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 14
    }
  }), "<!-- \u0428\u0438\u0440\u0438\u043D\u0430 16 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, 32 \u043D\u0430 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438 48 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445. -->"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 146,
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
      lineNumber: 148,
      columnNumber: 18
    }
  }), "<"), "img"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 152,
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
      lineNumber: 154,
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
      lineNumber: 156,
      columnNumber: 32
    }
  }), "\""), "w-16 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "code-highlight bg-code-highlight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 41
    }
  }), "md:w-32"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "code-highlight bg-code-highlight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 43
    }
  }), "lg:w-48"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 38
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 44
    }
  }), "src"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 170,
      columnNumber: 32
    }
  }), "\""), "...", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 39
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 39
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, "\u042D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 31
    }
  }, "\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435"), ", \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 - \u0434\u0430\u0436\u0435 \u0442\u0430\u043A\u0438\u0435 \u0432\u0435\u0449\u0438, \u043A\u0430\u043A \u043C\u0435\u0436\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0438\u043B\u0438 \u0441\u0442\u0438\u043B\u0438 \u043A\u0443\u0440\u0441\u043E\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, "\u0412\u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043D\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0430 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 170
    }
  }, "(\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438)"), ":")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <div class=\"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl\">\n    <div class=\"md:flex\">\n      <div class=\"md:flex-shrink-0\">\n        <img class=\"h-48 w-full object-cover md:w-48\" src=\"https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80\" width=\"448\" height=\"299\" alt=\"Man looking at item at a store\">\n      </div>\n      <div class=\"p-8\">\n        <div class=\"uppercase tracking-wide text-sm text-indigo-500 font-semibold\">Case study</div>\n        <a href=\"#\" class=\"block mt-1 text-lg leading-tight font-medium text-black hover:underline\">Finding customers for your new business</a>\n        <p class=\"mt-2 text-gray-500\">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>\n      </div>\n    </div>\n  </div>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden <span class=\"code-highlight bg-code-highlight\">md:max-w-2xl</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">md:flex</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">md:flex-shrink-0</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>h-48 w-full object-cover <span class=\"code-highlight bg-code-highlight\">md:w-48</span><span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/img/store.jpg<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Man looking at item at a store<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>p-8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>uppercase tracking-wide text-sm text-indigo-500 font-semibold<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Case study<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>block mt-1 text-lg leading-tight font-medium text-black hover:underline<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Finding customers for your new business<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mt-2 text-gray-500<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>",
    previewClassName: "px-6 py-8",
    color: "indigo",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, "\u0412\u043E\u0442 \u043A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u043D\u0435\u0448\u043D\u0438\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 54
    }
  }, "div"), " - \u044D\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 113
    }
  }, "display: block"), ", \u043D\u043E \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0443\u0442\u0438\u043B\u0438\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 204
    }
  }, "md:flex"), ", \u043E\u043D \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 276
    }
  }, "display: flex"), " \u043D\u0430 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0433\u0438\u0431\u043A\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u043C, \u043C\u044B \u0445\u043E\u0442\u0438\u043C \u0443\u0431\u0435\u0434\u0438\u0442\u044C\u0441\u044F, \u0447\u0442\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u0436\u0438\u043C\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 167
    }
  }, "md:flex-shrink-0"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0441\u0436\u0430\u0442\u0438\u0435 \u043D\u0430 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445. \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438 \u043C\u044B \u043C\u043E\u0433\u043B\u0438 \u0431\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 342
    }
  }, "flex-shrink-0"), ", \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430, \u043D\u043E \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u043E \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 521
    }
  }, "md"), ", \u043D\u0435\u043F\u043B\u043E\u0445\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u0447\u0435\u0442\u043A\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0442\u043E \u0432 \u0438\u043C\u0435\u043D\u0438 \u043A\u043B\u0430\u0441\u0441\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, "\u041D\u0430 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0448\u0438\u0440\u0438\u043D\u043D\u044B\u043C. \u041D\u0430 \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438 \u0432\u044B\u0448\u0435 \u043C\u044B \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u043B\u0438 \u044D\u0442\u0443 \u0448\u0438\u0440\u0438\u043D\u0443 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 203
    }
  }, "md:w-48"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "\u0412 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0434\u043D\u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u043D\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u044B \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 179
    }
  }, "sm"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 231
    }
  }, "lg"), " \u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 286
    }
  }, "xl"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "snachala-mobilnye",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Tailwind \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u0435\u0440\u0432\u043E\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438, \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u0443\u044E \u0442\u043E\u0439, \u043A \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0412\u044B, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0440\u0438\u0432\u044B\u043A\u043B\u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0430\u0445, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A Bootstrap."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, "\u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0431\u0435\u0437 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043E\u0432 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 77
    }
  }, "uppercase"), ") \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u0445 \u044D\u043A\u0440\u0430\u043D\u0430, \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0441 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043E\u043C (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 229
    }
  }, "md:uppercase"), ") \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 338
    }
  }, "\u0438 \u0432\u044B\u0448\u0435"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "orientacziya-na-mobilnye-ekrany",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, "\u041E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u044D\u043A\u0440\u0430\u043D\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, "\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u044D\u0442\u043E\u0442 \u043F\u043E\u0434\u0445\u043E\u0434 \u0443\u0434\u0438\u0432\u043B\u044F\u0435\u0442 \u043B\u044E\u0434\u0435\u0439 \u0442\u0435\u043C, \u0447\u0442\u043E \u0434\u043B\u044F \u0441\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0435\u0433\u043E-\u043B\u0438\u0431\u043E \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0431\u0435\u0437 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u0430, \u0430 \u043D\u0435 \u0432\u0435\u0440\u0441\u0438\u044E \u0441 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043E\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 186
    }
  }, "sm:"), ". \u041D\u0435 \u0434\u0443\u043C\u0430\u0439\u0442\u0435, \u0447\u0442\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 255
    }
  }, "sm:"), " \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \xAB\u043D\u0430 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445\xBB, \u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u043A\u0430\u043A \xAB\u0432 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 373
    }
  }, "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435"), "\xBB.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Tip__WEBPACK_IMPORTED_MODULE_9__["TipBad"], {
    mdxType: "TipBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    className: "text-sm font-bold text-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 45
    }
  }, "sm:"), " \u0434\u043B\u044F \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 200,
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
      lineNumber: 202,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 14
    }
  }), "<!-- \u042D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 640 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0438 \u0448\u0438\u0440\u0435, \u043D\u043E \u043D\u0435 \u043D\u0430 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 -->"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 209,
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
      lineNumber: 211,
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
      lineNumber: 213,
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
      lineNumber: 215,
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
      lineNumber: 217,
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
      lineNumber: 219,
      columnNumber: 32
    }
  }), "\""), "sm:text-center", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 50
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 39
    }
  }), ">")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 37
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
      lineNumber: 229,
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
      lineNumber: 231,
      columnNumber: 47
    }
  }), ">")))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Tip__WEBPACK_IMPORTED_MODULE_9__["TipGood"], {
    mdxType: "TipGood",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0431\u0435\u0437 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043E\u0432 \u0434\u043B\u044F \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u0438 \u043F\u0435\u0440\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0438\u0445 \u043F\u0440\u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u0447\u043A\u0430\u0445"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
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
      lineNumber: 239,
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
      lineNumber: 241,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 14
    }
  }), "<!-- \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0438 \u0432\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u0435\u0433\u043E \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 640 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439 \u0438 \u0448\u0438\u0440\u0435 -->"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
      lineNumber: 248,
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
      lineNumber: 250,
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
      lineNumber: 252,
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
      lineNumber: 254,
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
      lineNumber: 256,
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
      lineNumber: 258,
      columnNumber: 32
    }
  }), "\""), "text-center sm:text-left", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 60
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 39
    }
  }), ">")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
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
      lineNumber: 268,
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
      lineNumber: 270,
      columnNumber: 47
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, "For this reason, it's often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 151
    }
  }, "sm"), " screens, followed by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 223
    }
  }, "md"), " screens, etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "targeting-a-single-breakpoint",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, "Targeting a single breakpoint"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, "Tailwind's breakpoints only include a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 52
    }
  }, "min-width"), " and don't include a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 130
    }
  }, "max-width"), ", which means any utilities you add at a smaller breakpoint will also be applied at larger breakpoints."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }, "If you'd like to apply a utility at one breakpoint only, the solution is to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 90
    }
  }, "undo"), " that utility at larger sizes by adding another utility that counteracts it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, "Here is an example where the background color is red at the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 74
    }
  }, "md"), " breakpoint, but teal at every other breakpoint:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
      lineNumber: 280,
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
      lineNumber: 282,
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
      lineNumber: 284,
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
      lineNumber: 286,
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
      lineNumber: 288,
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
      lineNumber: 290,
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
      lineNumber: 292,
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
      lineNumber: 294,
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
      lineNumber: 296,
      columnNumber: 32
    }
  }), "\""), "bg-teal-500 md:bg-red-500 lg:bg-teal-500", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 76
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 303,
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
      lineNumber: 306,
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
      lineNumber: 308,
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
      lineNumber: 310,
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
      lineNumber: 312,
      columnNumber: 47
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }, "Notice that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 26
    }
  }, "we did not"), " have to specify a background color for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 120
    }
  }, "sm"), " breakpoint or the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 189
    }
  }, "xl"), " breakpoint \u2014 you only need to specify when a utility should ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 300
    }
  }, "start"), " taking effect, not when it should stop."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "customizing-breakpoints",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 7
    }
  }, "Customizing breakpoints"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 7
    }
  }, "You can completely customize your breakpoints in your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 68
    }
  }, "tailwind.config.js"), " file:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 14
    }
  }), "// tailwind.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 9
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 28
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 39
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 33
    }
  }), "{"), "\n  theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 10
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 33
    }
  }), "{"), "\n    screens", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 14
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 33
    }
  }), "{"), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  }), "'tablet'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 35
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 33
    }
  }), "'640px'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 34
    }
  }), ","), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 9
    }
  }), "// => @media (min-width: 640px) { ... }"), "\n\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }), "'laptop'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 35
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 33
    }
  }), "'1024px'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 35
    }
  }), ","), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 9
    }
  }), "// => @media (min-width: 1024px) { ... }"), "\n\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }), "'desktop'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 36
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 33
    }
  }), "'1280px'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 35
    }
  }), ","), "\n      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }), "// => @media (min-width: 1280px) { ... }"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 7
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 28
    }
  }), ","), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 5
    }
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }
  }, "Learn more in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/breakpoints",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 32
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 73
    }
  }, "customizing breakpoints documentation")), ".")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvcmVzcG9uc2l2ZS1kZXNpZ24ubWR4Il0sIm5hbWVzIjpbIkxheW91dCIsIl9MYXlvdXQiLCJtZXRhIiwidGFibGVPZkNvbnRlbnRzIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJfRGVmYXVsdCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsZ0ZBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUc7QUFDWCxXQUFTLG1CQURFO0FBRVgsaUJBQWU7QUFGSixDQUFiO0FBSUEsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUyxPQURjO0FBRXZCLFVBQVEsT0FGZTtBQUd2QixjQUFZO0FBSFcsQ0FBRCxFQUlyQjtBQUNELFdBQVMsbUJBRFI7QUFFRCxVQUFRLG1CQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyxnQ0FERTtBQUVYLFlBQVE7QUFGRyxHQUFELEVBR1Q7QUFDRCxhQUFTLCtCQURSO0FBRUQsWUFBUTtBQUZQLEdBSFM7QUFIWCxDQUpxQixFQWNyQjtBQUNELFdBQVMseUJBRFI7QUFFRCxVQUFRLHlCQUZQO0FBR0QsY0FBWTtBQUhYLENBZHFCLENBQXhCO0FBb0JBLElBQU1DLFdBQVcsR0FBRztBQUNsQkosUUFBTSxFQUFOQSxNQURrQjtBQUVwQkUsTUFBSSxFQUFKQSxJQUZvQjtBQUdwQkMsaUJBQWUsRUFBZkE7QUFIb0IsQ0FBcEI7QUFLQSxJQUFNRSxTQUFTLEdBQUdDLHNFQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU0w7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMkRBQUQ7QUFBUyxTQUFLLEVBQUUsQ0FBaEI7QUFBbUIsTUFBRSxFQUFDLE9BQXRCO0FBQThCLE9BQUcsRUFBRSxJQUFuQztBQUF5QyxVQUFNLE1BQS9DO0FBQWdELFdBQU8sRUFBQyxTQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0eUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdlQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sY0FBVSxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGNBQVUsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGNBQVUsRUFBQztBQUFmLEtBQXdCO0FBQ3RCLGFBQVM7QUFEYSxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFKQURGLEVBSUU7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSEFKRixFQU9FO0FBQUksY0FBVSxFQUFDO0FBQWYsS0FBd0I7QUFDdEIsYUFBUztBQURhLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixDQURGLENBREYsRUFjRTtBQUFPLGNBQVUsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQVksY0FBVSxFQUFDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSCxDQURGLEVBSUU7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLEVBT0U7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQVksY0FBVSxFQUFDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBRkgsQ0FQRixDQURGLEVBWUU7QUFBSSxjQUFVLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQVksY0FBVSxFQUFDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSCxDQURGLEVBSUU7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLEVBT0U7QUFBSSxjQUFVLEVBQUM7QUFBZixLQUF3QjtBQUN0QixhQUFTO0FBRGEsR0FBeEI7QUFBQTtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTlESyxFQWdFZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWhFaEIsVUFtRVA7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbkVPLFFBc0VUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXRFUyxDQUZGLENBRkgsQ0FuRkYsRUFnS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBeUIsMERBQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsbUJBQVo7QUFBZ0MsWUFBUSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQXpDLENBQXpCLE1BaEtGLENBM0xLLENBQVA7QUFnV0Q7S0FwV3VCSCxVO0FBc1d4QjtBQUNBQSxVQUFVLENBQUNJLGNBQVgsR0FBNEIsSUFBNUI7QUFDQUosVUFBVSxDQUFDSCxXQUFYLEdBQXlCQSxXQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3Jlc3BvbnNpdmUtZGVzaWduLmZkN2NiOGMzMWFhNGI3ZDI4M2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgX0xpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgSGVhZGluZyBhcyBfSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgQ29kZVNhbXBsZSBhcyBfQ29kZVNhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlU2FtcGxlJ1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkxheW91dCBhcyBfTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBDb250ZW50c0xheW91dCBhcyBfRGVmYXVsdCB9IGZyb20gJ0AvbGF5b3V0cy9Db250ZW50c0xheW91dCdcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGluZydcbmltcG9ydCB7IFRpcEdvb2QsIFRpcEJhZCB9IGZyb20gJ0AvY29tcG9uZW50cy9UaXAnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcItCQ0LTQsNC/0YLQuNCy0L3Ri9C5INC00LjQt9Cw0LnQvVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwi0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LDQtNCw0L/RgtC40LLQvdGL0YUg0LLQsNGA0LjQsNC90YLQvtCyINGD0YLQuNC70LjRgiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQsNC00LDQv9GC0LjQstC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjRhSDQuNC90YLQtdGA0YTQtdC50YHQvtCyLlwiXG59O1xuY29uc3QgdGFibGVPZkNvbnRlbnRzID0gW3tcbiAgXCJ0aXRsZVwiOiBcItCe0LHQt9C+0YBcIixcbiAgXCJzbHVnXCI6IFwib2J6b3JcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwi0KHQvdCw0YfQsNC70LAg0LzQvtCx0LjQu9GM0L3Ri9C1XCIsXG4gIFwic2x1Z1wiOiBcInNuYWNoYWxhLW1vYmlsbnllXCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwi0J7RgNC40LXQvdGC0LDRhtC40Y8g0L3QsCDQvNC+0LHQuNC70YzQvdGL0LUg0Y3QutGA0LDQvdGLXCIsXG4gICAgXCJzbHVnXCI6IFwib3JpZW50YWN6aXlhLW5hLW1vYmlsbnllLWVrcmFueVwiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwiVGFyZ2V0aW5nIGEgc2luZ2xlIGJyZWFrcG9pbnRcIixcbiAgICBcInNsdWdcIjogXCJ0YXJnZXRpbmctYS1zaW5nbGUtYnJlYWtwb2ludFwiXG4gIH1dXG59LCB7XG4gIFwidGl0bGVcIjogXCJDdXN0b21pemluZyBicmVha3BvaW50c1wiLFxuICBcInNsdWdcIjogXCJjdXN0b21pemluZy1icmVha3BvaW50c1wiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIExheW91dCxcbm1ldGEsXG50YWJsZU9mQ29udGVudHNcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBfRGVmYXVsdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxIZWFkaW5nIGxldmVsPXsyfSBpZD1cIm9iem9yXCIgdG9jPXt0cnVlfSBoaWRkZW4gbWR4VHlwZT1cIkhlYWRpbmdcIj7QntCx0LfQvtGAPC9IZWFkaW5nPlxuICAgICAgPHA+e2DQmtCw0LbQtNGL0Lkg0YHQu9GD0LbQtdCx0L3Ri9C5INC60LvQsNGB0YEg0LIgVGFpbHdpbmQg0LzQvtC20L3QviDRg9GB0LvQvtCy0L3QviDQv9GA0LjQvNC10L3Rj9GC0Ywg0LIg0YDQsNC30L3Ri9GFINC60L7QvdGC0YDQvtC70YzQvdGL0YUg0YLQvtGH0LrQsNGFLCDRh9GC0L4g0YPQv9GA0L7RidCw0LXRgiDRgdC+0LfQtNCw0L3QuNC1INGB0LvQvtC20L3Ri9GFINCw0LTQsNC/0YLQuNCy0L3Ri9GFINC40L3RgtC10YDRhNC10LnRgdC+0LIsINC90LUg0L/QvtC60LjQtNCw0Y8g0YHQstC+0LXQs9C+IEhUTUwuYH08L3A+XG4gICAgICA8cD57YNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGB0YPRidC10YHRgtCy0YPQtdGCINC/0Y/RgtGMINC60L7QvdGC0YDQvtC70YzQvdGL0YUg0YLQvtGH0LXQuiwg0L7RgdC90L7QstCw0L3QvdGL0YUg0L3QsCDQvtCx0YnQuNGFINGA0LDQt9GA0LXRiNC10L3QuNGP0YUg0YPRgdGC0YDQvtC50YHRgtCyOmB9PC9wPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQgcGFyZW50TmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0aGVhZFwiPlxuICAgICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2DQn9GA0LXRhNC40LrRgSDQutC+0L3RgtGA0L7Qu9GM0L3QvtC5INGC0L7Rh9C60LhgfTwvdGg+XG4gICAgICAgICAgICA8dGggcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YNCc0LjQvdC40LzQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwYH08L3RoPlxuICAgICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2BDU1NgfTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHBhcmVudE5hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgc21gfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2A2NDBweGB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7IC4uLiB9YH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgbWRgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2A3NjhweGB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IC4uLiB9YH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgbGdgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+e2AxMDI0cHhgfTwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsgLi4uIH1gfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2B4bGB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YDEyODBweGB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgeyAuLi4gfWB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YDJ4bGB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgICB9fT57YDE1MzZweGB9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkgeyAuLi4gfWB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8cD57YNCn0YLQvtCx0Ysg0LTQvtCx0LDQstC40YLRjCDRg9GC0LjQu9C40YLRgywg0L3QviDRh9GC0L7QsdGLINC+0L3QsCDQstGB0YLRg9C/0LjQu9CwINCyINGB0LjQu9GDINGC0L7Qu9GM0LrQviDQsiDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0LrQvtC90YLRgNC+0LvRjNC90L7QuSDRgtC+0YfQutC1LCDQstGB0LUsINGH0YLQviDQktCw0Lwg0L3Rg9C20L3QviDRgdC00LXQu9Cw0YLRjCwg0Y3RgtC+INC/0YDQtdGE0LjQutGBINGD0YLQuNC70LjRgtGLINGBINC40LzQtdC90LXQvCDQutC+0L3RgtGA0L7Qu9GM0L3QvtC5INGC0L7Rh9C60LgsINC30LAg0LrQvtGC0L7RgNGL0Lwg0YHQu9C10LTRg9C10YIg0YHQuNC80LLQvtC7IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDpgfTwvaW5saW5lQ29kZT57YDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSDQqNC40YDQuNC90LAgMTYg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sIDMyINC90LAg0YHRgNC10LTQvdC40YUg0Y3QutGA0LDQvdCw0YUg0LggNDgg0L3QsCDQsdC+0LvRjNGI0LjRhSDRjdC60YDQsNC90LDRhS4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGltZ2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BjbGFzc2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2B3LTE2IGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFwiXG4gICAgICAgICAgICAgICAgfX0+e2BtZDp3LTMyYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XCJcbiAgICAgICAgICAgICAgICB9fT57YGxnOnctNDhgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BzcmNgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgLi4uYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0K3RgtC+INGA0LDQsdC+0YLQsNC10YIg0LTQu9GPIGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntg0LrQsNC20LTQvtCz0L4g0YHQu9GD0LbQtdCx0L3QvtCz0L4g0LrQu9Cw0YHRgdCwINCyINGB0YLRgNGD0LrRgtGD0YDQtWB9PC9zdHJvbmc+e2AsINGH0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0JLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDQsdGD0LrQstCw0LvRjNC90L4g0YfRgtC+INGD0LPQvtC00L3QviDQsiDQt9Cw0LTQsNC90L3QvtC5INC60L7QvdGC0YDQvtC70YzQvdC+0Lkg0YLQvtGH0LrQtSAtINC00LDQttC1INGC0LDQutC40LUg0LLQtdGJ0LgsINC60LDQuiDQvNC10LbQsdGD0LrQstC10L3QvdGL0Lkg0LjQvdGC0LXRgNCy0LDQuyDQuNC70Lgg0YHRgtC40LvQuCDQutGD0YDRgdC+0YDQsC5gfTwvcD5cbiAgICAgIDxwPntg0JLQvtGCINC/0YDQvtGB0YLQvtC5INC/0YDQuNC80LXRgCDQutC+0LzQv9C+0L3QtdC90YLQsCDQvNCw0YDQutC10YLQuNC90LPQvtCy0L7QuSDRgdGC0YDQsNC90LjRhtGLLCDQsiDQutC+0YLQvtGA0L7QvCDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0YHQvtGB0YLQsNCy0L3QvtC5INC80LDQutC10YIg0L3QsCDQvNCw0LvQtdC90YzQutC40YUg0Y3QutGA0LDQvdCw0YUg0Lgg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSDQvNCw0LrQtdGCINC90LAg0LHQvtC70YzRiNC40YUg0Y3QutGA0LDQvdCw0YUgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YCjQuNC30LzQtdC90LjRgtC1INGA0LDQt9C80LXRgCDQsdGA0LDRg9C30LXRgNCwLCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC10LPQviDQsiDQtNC10LnRgdGC0LLQuNC4KWB9PC9lbT57YDpgfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8X0NvZGVTYW1wbGUgcHJldmlldz17XCJcXG4gIDxkaXYgY2xhc3M9XFxcIm1heC13LW1kIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm1heC13LTJ4bFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kOmZsZXhcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1kOmZsZXgtc2hyaW5rLTBcXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiaC00OCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG1kOnctNDhcXFwiIHNyYz1cXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTU3MTE2NjA4MTEtNDg4MzJhNGM2ZjY5P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00NDgmcT04MFxcXCIgd2lkdGg9XFxcIjQ0OFxcXCIgaGVpZ2h0PVxcXCIyOTlcXFwiIGFsdD1cXFwiTWFuIGxvb2tpbmcgYXQgaXRlbSBhdCBhIHN0b3JlXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwLThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbSB0ZXh0LWluZGlnby01MDAgZm9udC1zZW1pYm9sZFxcXCI+Q2FzZSBzdHVkeTwvZGl2PlxcbiAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJsb2NrIG10LTEgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgaG92ZXI6dW5kZXJsaW5lXFxcIj5GaW5kaW5nIGN1c3RvbWVycyBmb3IgeW91ciBuZXcgYnVzaW5lc3M8L2E+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibXQtMiB0ZXh0LWdyYXktNTAwXFxcIj5HZXR0aW5nIGEgbmV3IGJ1c2luZXNzIG9mZiB0aGUgZ3JvdW5kIGlzIGEgbG90IG9mIGhhcmQgd29yay4gSGVyZSBhcmUgZml2ZSBpZGVhcyB5b3UgY2FuIHVzZSB0byBmaW5kIHlvdXIgZmlyc3QgY3VzdG9tZXJzLjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cIn0gc3JjPXt1bmRlZmluZWR9IHNuaXBwZXQ9e1wiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+bWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gPHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5tZDptYXgtdy0yeGw8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5tZDpmbGV4PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmRpdjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5tZDpmbGV4LXNocmluay0wPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5oLTQ4IHctZnVsbCBvYmplY3QtY292ZXIgPHNwYW4gY2xhc3M9XFxcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XFxcIj5tZDp3LTQ4PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPnNyYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj4vaW1nL3N0b3JlLmpwZzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmFsdDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5NYW4gbG9va2luZyBhdCBpdGVtIGF0IGEgc3RvcmU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Ozwvc3Bhbj5kaXY8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPnAtODxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+ZGl2PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj51cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNtIHRleHQtaW5kaWdvLTUwMCBmb250LXNlbWlib2xkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkNhc2Ugc3R1ZHk8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPmRpdjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Ozwvc3Bhbj5hPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5ocmVmPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPiM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5ibG9jayBtdC0xIHRleHQtbGcgbGVhZGluZy10aWdodCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGhvdmVyOnVuZGVybGluZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5GaW5kaW5nIGN1c3RvbWVycyBmb3IgeW91ciBuZXcgYnVzaW5lc3M8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPmE8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+cDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+bXQtMiB0ZXh0LWdyYXktNTAwPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkdldHRpbmcgYSBuZXcgYnVzaW5lc3Mgb2ZmIHRoZSBncm91bmQgaXMgYSBsb3Qgb2YgaGFyZCB3b3JrLiBIZXJlIGFyZSBmaXZlIGlkZWFzIHlvdSBjYW4gdXNlIHRvIGZpbmQgeW91ciBmaXJzdCBjdXN0b21lcnMuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7Lzwvc3Bhbj5wPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPmRpdjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Oy88L3NwYW4+ZGl2PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e1wicHgtNiBweS04XCJ9IGNvbG9yPXtcImluZGlnb1wifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxwPntg0JLQvtGCINC60LDQuiDRgNCw0LHQvtGC0LDQtdGCINC/0YDQuNCy0LXQtNC10L3QvdGL0Lkg0LLRi9GI0LUg0L/RgNC40LzQtdGAOmB9PC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2DQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQstC90LXRiNC90LjQuSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgZGl2YH08L2lubGluZUNvZGU+e2AgLSDRjdGC0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGRpc3BsYXk6IGJsb2NrYH08L2lubGluZUNvZGU+e2AsINC90L4g0L/RgNC4INC00L7QsdCw0LLQu9C10L3QuNC4INGD0YLQuNC70LjRgtGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BtZDpmbGV4YH08L2lubGluZUNvZGU+e2AsINC+0L0g0YHRgtCw0L3QvtCy0LjRgtGB0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGRpc3BsYXk6IGZsZXhgfTwvaW5saW5lQ29kZT57YCDQvdCwINGB0YDQtdC00L3QuNGFINC4INCx0L7Qu9GM0YjQuNGFINGN0LrRgNCw0L3QsNGFLmB9PC9saT5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntg0JrQvtCz0LTQsCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0Y/QstC70Y/QtdGC0YHRjyDQs9C40LHQutC40Lwg0LrQvtC90YLQtdC50L3QtdGA0L7QvCwg0LzRiyDRhdC+0YLQuNC8INGD0LHQtdC00LjRgtGM0YHRjywg0YfRgtC+INC40LfQvtCx0YDQsNC20LXQvdC40LUg0L3QuNC60L7Qs9C00LAg0L3QtSDRgdC20LjQvNCw0LXRgtGB0Y8sINC/0L7RjdGC0L7QvNGDINC80Ysg0LTQvtCx0LDQstC40LvQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgbWQ6ZmxleC1zaHJpbmstMGB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINGB0LbQsNGC0LjQtSDQvdCwINGB0YDQtdC00L3QuNGFINGN0LrRgNCw0L3QsNGFINC4INCx0L7Qu9GM0YjQuNGFINGN0LrRgNCw0L3QsNGFLiDQotC10YXQvdC40YfQtdGB0LrQuCDQvNGLINC80L7Qs9C70Lgg0LHRiyDQv9GA0L7RgdGC0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BmbGV4LXNocmluay0wYH08L2lubGluZUNvZGU+e2AsINC/0L7RgdC60L7Qu9GM0LrRgyDQvtC9INC90LjRh9C10LPQviDQvdC1INCx0YPQtNC10YIg0LTQtdC70LDRgtGMINC90LAg0Y3QutGA0LDQvdCw0YUg0LzQtdC90YzRiNC10LPQviDRgNCw0LfQvNC10YDQsCwg0L3QviDQv9C+0YHQutC+0LvRjNC60YMg0Y3RgtC+INC40LzQtdC10YIg0LfQvdCw0YfQtdC90LjQtSDRgtC+0LvRjNC60L4g0L3QsCDRjdC60YDQsNC90LDRhSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgbWRgfTwvaW5saW5lQ29kZT57YCwg0L3QtdC/0LvQvtGF0L4g0LHRi9C70L4g0LHRiyDRh9C10YLQutC+INGD0LrQsNC30LDRgtGMINGN0YLQviDQsiDQuNC80LXQvdC4INC60LvQsNGB0YHQsC5gfTwvbGk+XG4gICAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YNCd0LAg0LzQsNC70LXQvdGM0LrQuNGFINGN0LrRgNCw0L3QsNGFINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/QvtC70L3QvtGI0LjRgNC40L3QvdGL0LwuINCd0LAg0YHRgNC10LTQvdC40YUg0Y3QutGA0LDQvdCw0YUg0Lgg0LLRi9GI0LUg0LzRiyDQvtCz0YDQsNC90LjRh9C40LvQuCDRjdGC0YMg0YjQuNGA0LjQvdGDINGE0LjQutGB0LjRgNC+0LLQsNC90L3Ri9C8INGA0LDQt9C80LXRgNC+0Lwg0YEg0L/QvtC80L7RidGM0Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YG1kOnctNDhgfTwvaW5saW5lQ29kZT57YC5gfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+e2DQkiDRjdGC0L7QvCDQv9GA0LjQvNC10YDQtSDQvNGLINC40YHQv9C+0LvRjNC30L7QstCw0LvQuCDRgtC+0LvRjNC60L4g0L7QtNC90YMg0LrQvtC90YLRgNC+0LvRjNC90YPRjiDRgtC+0YfQutGDLCDQvdC+INCS0Ysg0LzQvtC20LXRgtC1INC70LXQs9C60L4g0L3QsNGB0YLRgNC+0LjRgtGMINGN0YLQvtGCINC60L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0LTRgNGD0LPQuNGFINGA0LDQt9C80LXRgNC+0LIsINC40YHQv9C+0LvRjNC30YPRjyDRgtCw0LrQttC1INC/0YDQtdGE0LjQutGB0Ysg0YDQtdCw0LPQuNGA0L7QstCw0L3QuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNtYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGxnYH08L2lubGluZUNvZGU+e2Ag0LjQu9C4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHhsYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgICA8aHI+PC9ocj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJzbmFjaGFsYS1tb2JpbG55ZVwiIHRvYz17dHJ1ZX0+0KHQvdCw0YfQsNC70LAg0LzQvtCx0LjQu9GM0L3Ri9C1PC9fSGVhZGluZz5cbiAgICAgIDxwPntg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4gVGFpbHdpbmQg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0YHQuNGB0YLQtdC80YMg0LzQvtCx0LjQu9GM0L3QvtC5INC/0LXRgNCy0L7QuSDQutC+0L3RgtGA0L7Qu9GM0L3QvtC5INGC0L7Rh9C60LgsINCw0L3QsNC70L7Qs9C40YfQvdGD0Y4g0YLQvtC5LCDQuiDQutC+0YLQvtGA0L7QuSDQktGLLCDQstC+0LfQvNC+0LbQvdC+LCDQv9GA0LjQstGL0LrQu9C4INCyINC00YDRg9Cz0LjRhSDRhNGA0LXQudC80LLQvtGA0LrQsNGFLCDRgtCw0LrQuNGFINC60LDQuiBCb290c3RyYXAuYH08L3A+XG4gICAgICA8cD57YNCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0YHQu9GD0LbQtdCx0L3Ri9C1INC/0YDQvtCz0YDQsNC80LzRiyDQsdC10Lcg0L/RgNC10YTQuNC60YHQvtCyICjQvdCw0L/RgNC40LzQtdGALCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1cHBlcmNhc2VgfTwvaW5saW5lQ29kZT57YCkg0LTQtdC50YHRgtCy0YPRjtGCINC90LAg0LLRgdC10YUg0YDQsNC30LzQtdGA0LDRhSDRjdC60YDQsNC90LAsINCyINGC0L4g0LLRgNC10LzRjyDQutCw0Log0YHQu9GD0LbQtdCx0L3Ri9C1INC/0YDQvtCz0YDQsNC80LzRiyDRgSDQv9GA0LXRhNC40LrRgdC+0LwgKNC90LDQv9GA0LjQvNC10YAsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG1kOnVwcGVyY2FzZWB9PC9pbmxpbmVDb2RlPntgKSDQtNC10LnRgdGC0LLRg9GO0YIg0YLQvtC70YzQutC+INCyINGD0LrQsNC30LDQvdC90L7QuSDQutC+0L3RgtGA0L7Qu9GM0L3QvtC5INGC0L7Rh9C60LUgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YNC4INCy0YvRiNC1YH08L2VtPntgLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cIm9yaWVudGFjeml5YS1uYS1tb2JpbG55ZS1la3JhbnlcIiB0b2M9e3RydWV9PtCe0YDQuNC10L3RgtCw0YbQuNGPINC90LAg0LzQvtCx0LjQu9GM0L3Ri9C1INGN0LrRgNCw0L3RizwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCn0LDRidC1INCy0YHQtdCz0L4g0Y3RgtC+0YIg0L/QvtC00YXQvtC0INGD0LTQuNCy0LvRj9C10YIg0LvRjtC00LXQuSDRgtC10LwsINGH0YLQviDQtNC70Y8g0YHRgtC40LvQuNC30LDRhtC40Lgg0YfQtdCz0L4t0LvQuNCx0L4g0LTQu9GPINC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LIg0JLQsNC8INC90YPQttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCy0LXRgNGB0LjRjiDRg9GC0LjQu9C40YLRiyDQsdC10Lcg0L/RgNC10YTQuNC60YHQsCwg0LAg0L3QtSDQstC10YDRgdC40Y4g0YEg0L/RgNC10YTQuNC60YHQvtC8IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNtOmB9PC9pbmxpbmVDb2RlPntgLiDQndC1INC00YPQvNCw0LnRgtC1LCDRh9GC0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc206YH08L2lubGluZUNvZGU+e2Ag0L7Qt9C90LDRh9Cw0LXRgiDCq9C90LAg0LzQsNC70LXQvdGM0LrQuNGFINGN0LrRgNCw0L3QsNGFwrssINC00YPQvNCw0LnRgtC1INC+0LEg0Y3RgtC+0Lwg0LrQsNC6IMKr0LIg0LzQsNC70LXQvdGM0LrQvtC5IGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2DQutC+0L3RgtGA0L7Qu9GM0L3QvtC5INGC0L7Rh9C60LVgfTwvZW0+e2DCuy5gfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8VGlwQmFkIG1keFR5cGU9XCJUaXBCYWRcIj7QndC1INC40YHQv9C+0LvRjNC30YPQudGC0LUgPGNvZGUgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPnNtOjwvY29kZT4g0LTQu9GPINGC0LDRgNCz0LXRgtC40L3Qs9CwINC80L7QsdC40LvRjNC90YvRhSDRg9GB0YLRgNC+0LnRgdGC0LI8L1RpcEJhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YDwhLS0g0K3RgtC+INCx0YPQtNC10YIg0YbQtdC90YLRgNC40YDQvtCy0LDRgtGMINGC0LXQutGB0YIg0YLQvtC70YzQutC+INC90LAg0Y3QutGA0LDQvdCw0YUgNjQwINC/0LjQutGB0LXQu9C10Lkg0Lgg0YjQuNGA0LUsINC90L4g0L3QtSDQvdCwINC80LDQu9C10L3RjNC60LjRhSDRjdC60YDQsNC90LDRhSAtLT5gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgZGl2YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNsYXNzYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHNtOnRleHQtY2VudGVyYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgZGl2YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxUaXBHb29kIG1keFR5cGU9XCJUaXBHb29kXCI+0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDRg9GC0LjQu9C40YLRiyDQsdC10Lcg0L/RgNC10YTQuNC60YHQvtCyINC00LvRjyDRgtCw0YDQs9C10YLQuNC90LPQsCDQvNC+0LHQuNC70YzQvdGL0YUg0YPRgdGC0YDQvtC50YHRgtCyINC4INC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9C50YLQtSDQuNGFINC/0YDQuCDQsdC+0LvRjNGI0LjRhSDQutC+0L3RgtGA0L7Qu9GM0L3Ri9GFINGC0L7Rh9C60LDRhTwvVGlwR29vZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YDwhLS0g0K3RgtC+INC/0L7Qt9Cy0L7Qu9C40YIg0YbQtdC90YLRgNC40YDQvtCy0LDRgtGMINGC0LXQutGB0YIg0L3QsCDQvNC+0LHQuNC70YzQvdC+0Lwg0YPRgdGC0YDQvtC50YHRgtCy0LUg0Lgg0LLRi9GA0L7QstC90Y/RgtGMINC10LPQviDQv9C+INC70LXQstC+0LzRgyDQutGA0LDRjiDQvdCwINGN0LrRgNCw0L3QsNGFIDY0MCDQv9C40LrRgdC10LvQtdC5INC4INGI0LjRgNC1IC0tPmB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BkaXZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2xhc3NgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgZGl2YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BGb3IgdGhpcyByZWFzb24sIGl0J3Mgb2Z0ZW4gYSBnb29kIGlkZWEgdG8gaW1wbGVtZW50IHRoZSBtb2JpbGUgbGF5b3V0IGZvciBhIGRlc2lnbiBmaXJzdCwgdGhlbiBsYXllciBvbiBhbnkgY2hhbmdlcyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNtYH08L2lubGluZUNvZGU+e2Agc2NyZWVucywgZm9sbG93ZWQgYnkgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbWRgfTwvaW5saW5lQ29kZT57YCBzY3JlZW5zLCBldGMuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwidGFyZ2V0aW5nLWEtc2luZ2xlLWJyZWFrcG9pbnRcIiB0b2M9e3RydWV9PlRhcmdldGluZyBhIHNpbmdsZSBicmVha3BvaW50PC9fSGVhZGluZz5cbiAgICAgIDxwPntgVGFpbHdpbmQncyBicmVha3BvaW50cyBvbmx5IGluY2x1ZGUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BtaW4td2lkdGhgfTwvaW5saW5lQ29kZT57YCBhbmQgZG9uJ3QgaW5jbHVkZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG1heC13aWR0aGB9PC9pbmxpbmVDb2RlPntgLCB3aGljaCBtZWFucyBhbnkgdXRpbGl0aWVzIHlvdSBhZGQgYXQgYSBzbWFsbGVyIGJyZWFrcG9pbnQgd2lsbCBhbHNvIGJlIGFwcGxpZWQgYXQgbGFyZ2VyIGJyZWFrcG9pbnRzLmB9PC9wPlxuICAgICAgPHA+e2BJZiB5b3UnZCBsaWtlIHRvIGFwcGx5IGEgdXRpbGl0eSBhdCBvbmUgYnJlYWtwb2ludCBvbmx5LCB0aGUgc29sdXRpb24gaXMgdG8gYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YHVuZG9gfTwvZW0+e2AgdGhhdCB1dGlsaXR5IGF0IGxhcmdlciBzaXplcyBieSBhZGRpbmcgYW5vdGhlciB1dGlsaXR5IHRoYXQgY291bnRlcmFjdHMgaXQuYH08L3A+XG4gICAgICA8cD57YEhlcmUgaXMgYW4gZXhhbXBsZSB3aGVyZSB0aGUgYmFja2dyb3VuZCBjb2xvciBpcyByZWQgYXQgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG1kYH08L2lubGluZUNvZGU+e2AgYnJlYWtwb2ludCwgYnV0IHRlYWwgYXQgZXZlcnkgb3RoZXIgYnJlYWtwb2ludDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BkaXZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2xhc3NgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgYmctdGVhbC01MDAgbWQ6YmctcmVkLTUwMCBsZzpiZy10ZWFsLTUwMGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BkaXZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YE5vdGljZSB0aGF0IGB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgd2UgZGlkIG5vdGB9PC9zdHJvbmc+e2AgaGF2ZSB0byBzcGVjaWZ5IGEgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNtYH08L2lubGluZUNvZGU+e2AgYnJlYWtwb2ludCBvciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgeGxgfTwvaW5saW5lQ29kZT57YCBicmVha3BvaW50IOKAlCB5b3Ugb25seSBuZWVkIHRvIHNwZWNpZnkgd2hlbiBhIHV0aWxpdHkgc2hvdWxkIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2BzdGFydGB9PC9lbT57YCB0YWtpbmcgZWZmZWN0LCBub3Qgd2hlbiBpdCBzaG91bGQgc3RvcC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImN1c3RvbWl6aW5nLWJyZWFrcG9pbnRzXCIgdG9jPXt0cnVlfT5DdXN0b21pemluZyBicmVha3BvaW50czwvX0hlYWRpbmc+XG4gICAgICA8cD57YFlvdSBjYW4gY29tcGxldGVseSBjdXN0b21pemUgeW91ciBicmVha3BvaW50cyBpbiB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9pbmxpbmVDb2RlPntgIGZpbGU6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gdGFpbHdpbmQuY29uZmlnLmpzYH08L3NwYW4+e2Bcbm1vZHVsZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eS1hY2Nlc3NcIlxuICAgICAgICAgICAgfX0+e2BleHBvcnRzYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgdGhlbWVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIHNjcmVlbnNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJ3RhYmxldCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgIH19PntgJzY0MHB4J2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vID0+IEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkgeyAuLi4gfWB9PC9zcGFuPntgXG5cbiAgICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdsYXB0b3AnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCcxMDI0cHgnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gICAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gPT4gQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyAuLi4gfWB9PC9zcGFuPntgXG5cbiAgICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YCdkZXNrdG9wJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnMTI4MHB4J2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vID0+IEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHsgLi4uIH1gfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BMZWFybiBtb3JlIGluIHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvYnJlYWtwb2ludHNcIiBwYXNzSHJlZj48YT57YGN1c3RvbWl6aW5nIGJyZWFrcG9pbnRzIGRvY3VtZW50YXRpb25gfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9