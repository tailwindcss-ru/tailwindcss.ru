webpackHotUpdate_N_E("pages/docs/installation",{

/***/ "./src/pages/docs/installation.mdx":
/*!*****************************************!*\
  !*** ./src/pages/docs/installation.mdx ***!
  \*****************************************/
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
/* harmony import */ var _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/DocumentationLayout */ "./src/layouts/DocumentationLayout.js");
/* harmony import */ var _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/ContentsLayout */ "./src/layouts/ContentsLayout.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/List */ "./src/components/List.js");
/* harmony import */ var _components_IntegrationGuides__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/IntegrationGuides */ "./src/components/IntegrationGuides.js");
/* harmony import */ var _utils_stats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/stats */ "./src/utils/stats.js");
/* harmony import */ var _utils_stats__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_stats__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\pages\\docs\\installation.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */










var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_6__["DocumentationLayout"];
var meta = {
  "title": "Установка",
  "description": "Узнайте, как запустить Tailwind CSS в своем проекте."
};
var tableOfContents = [{
  "title": "Руководство по интеграции",
  "slug": "rukovodstvo-po-integraczii",
  "children": []
}, {
  "title": "Установка Tailwind CSS в качестве плагина PostCSS",
  "slug": "ustanovka-tailwind-css-v-kachestve-plagina-post-css",
  "children": [{
    "title": "Установить Tailwind через npm",
    "slug": "ustanovit-tailwind-cherez-npm"
  }, {
    "title": "Добавить Tailwind как плагин PostCSS",
    "slug": "dobavit-tailwind-kak-plagin-post-css"
  }, {
    "title": "Create your configuration file",
    "slug": "create-your-configuration-file"
  }, {
    "title": "Include Tailwind in your CSS",
    "slug": "include-tailwind-in-your-css"
  }, {
    "title": "Building your CSS",
    "slug": "building-your-css"
  }]
}, {
  "title": "Using Tailwind without PostCSS",
  "slug": "using-tailwind-without-post-css",
  "children": [{
    "title": "Using a custom CSS file",
    "slug": "using-a-custom-css-file"
  }, {
    "title": "Customizing your configuration",
    "slug": "customizing-your-configuration"
  }, {
    "title": "Building for production",
    "slug": "building-for-production"
  }]
}, {
  "title": "Using Tailwind via CDN",
  "slug": "using-tailwind-via-cdn",
  "children": []
}, {
  "title": "HTML starter template",
  "slug": "html-starter-template",
  "children": []
}, {
  "title": "PostCSS 7 compatibility build",
  "slug": "post-css-7-compatibility-build",
  "children": []
}];
var layoutProps = {
  Layout: Layout,
  meta: meta,
  tableOfContents: tableOfContents
};
var MDXLayout = _layouts_ContentsLayout__WEBPACK_IMPORTED_MODULE_7__["ContentsLayout"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "rukovodstvo-po-integraczii",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 Tailwind CSS \u043C\u043E\u0436\u0435\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438/\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_IntegrationGuides__WEBPACK_IMPORTED_MODULE_9__["IntegrationGuides"], {
    mdxType: "IntegrationGuides",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "\u041D\u0435 \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435? \u041C\u044B \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u043D\u043E\u0432\u044B\u043C\u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u043C\u0438, \u043D\u043E \u043F\u043E\u043A\u0430 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u043C \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#installing-tailwind-css-as-a-post-css-plugin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 149
    }
  }), "\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 Tailwind CSS \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 PostCSS"), " \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "ustanovka-tailwind-css-v-kachestve-plagina-post-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 Tailwind CSS \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 PostCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "\u0414\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Tailwind \u043A\u0430\u043A \u043F\u043B\u0430\u0433\u0438\u043D PostCSS. \u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 PostCSS \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C, \u0438 \u0435\u0441\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0438\u043B\u0438 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B PostCSS, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/postcss/autoprefixer"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 291
    }
  }), "autoprefixer"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0438 \u043E PostCSS \u0438\u043B\u0438 \u0412\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E, \u0447\u0435\u043C \u043E\u043D \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0442\u0430\u043A\u0438\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043A\u0430\u043A Sass, \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/using-with-preprocessors#using-post-css-as-your-preprocessor",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 150
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 240
    }
  }, "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E PostCSS \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430")), " \u0434\u043B\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0412\u0430\u043C \u043D\u0435\u043F\u043E\u0441\u0438\u043B\u044C\u043D\u044B\u043C \u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C Tailwind \u0431\u0435\u0437 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 PostCSS, \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043D\u0430\u0448\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#using-tailwind-without-post-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 144
    }
  }), "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E Tailwind \u0431\u0435\u0437 PostCSS"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "ustanovit-tailwind-cherez-npm",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Tailwind \u0447\u0435\u0440\u0435\u0437 npm"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "\u0414\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 (\u0438 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Tailwind), \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Tailwind \u0438 \u0435\u0433\u043E \u043E\u0434\u043D\u043E\u0440\u0430\u043D\u0433\u043E\u0432\u044B\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 npm."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 14
    }
  }), "npm"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 35
    }
  }), "install"), " tailwindcss postcss autoprefixer"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 Tailwind ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/browser-support#vendor-prefixes",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 94
    }
  }, "\u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432")), " \u0432 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439 \u0438\u043C CSS, \u043C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/postcss/autoprefixer"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 213
    }
  }), "autoprefixer"), " \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u044D\u0442\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0434\u043B\u044F \u0412\u0430\u0441, \u043A\u0430\u043A \u043C\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u043B\u0438 \u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0432\u044B\u0448\u0435 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0435 Tailwind \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0431\u043E\u043B\u0435\u0435 \u0441\u0442\u0430\u0440\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 PostCSS, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0442\u0430\u043A\u0443\u044E \u043E\u0448\u0438\u0431\u043A\u0443:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 12
    }
  }), "\u041E\u0448\u0438\u0431\u043A\u0430: \u041F\u043B\u0430\u0433\u0438\u043D PostCSS tailwindcss \u0442\u0440\u0435\u0431\u0443\u0435\u0442 PostCSS ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 69
    }
  }), "8"), "."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, "\u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0412\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#post-css-7-compatibility-build"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 53
    }
  }), "\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0431\u043E\u0440\u043A\u0443 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438 \u0441 PostCSS 7"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "dobavit-tailwind-kak-plagin-post-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C Tailwind \u043A\u0430\u043A \u043F\u043B\u0430\u0433\u0438\u043D PostCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, "tailwindcss"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 85
    }
  }, "autoprefixer"), " \u0432 \u0412\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E PostCSS. \u0412 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u044D\u0442\u043E \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 206
    }
  }, "postcss.config.js"), " \u0432 \u043A\u043E\u0440\u043D\u0435 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043D\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 325
    }
  }, ".postcssrc"), " \u0438\u043B\u0438 \u043A\u043B\u044E\u0447 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 393
    }
  }, "postcss"), " \u0432 \u0412\u0430\u0448\u0435\u043C \u0444\u0430\u0439\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 463
    }
  }, "package.json"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 140,
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
      lineNumber: 142,
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
      lineNumber: 144,
      columnNumber: 14
    }
  }), "// postcss.config.js"), "\nmodule", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 149,
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
      lineNumber: 151,
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
      lineNumber: 153,
      columnNumber: 33
    }
  }), "{"), "\n  plugins", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 12
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }), "{"), "\n    tailwindcss", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 18
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 28
    }
  }), ","), "\n    autoprefixer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 179,
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
      lineNumber: 182,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, "If you aren't sure where PostCSS plugins are configured for the tools you're using, you'll want to refer to the documentation for those tools to learn where this should go. A search for \"configure postcss {my tool}\" will get you the answer pretty fast, too."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, "If you're using any other PostCSS plugins, you should read our documentation on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/using-with-preprocessors",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 94
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 148
    }
  }, "using PostCSS as your preprocessor")), " for more details about the best way to order them with Tailwind."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "create-your-configuration-file",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, "Create your configuration file"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "If you'd like to customize your Tailwind installation, generate a config file for your project using the Tailwind CLI utility included when you install the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 170
    }
  }, "tailwindcss"), " npm package:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 12
    }
  }), "npx tailwindcss init"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, "This will create a minimal ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }, "tailwind.config.js"), " file at the root of your project:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 199,
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
      lineNumber: 201,
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
      lineNumber: 203,
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
      lineNumber: 206,
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
      lineNumber: 208,
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
      lineNumber: 210,
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
      lineNumber: 212,
      columnNumber: 33
    }
  }), "{"), "\n  purge", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 217,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 28
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 28
    }
  }), ","), "\n  darkMode", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 33
    }
  }), "false"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 32
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 33
    }
  }), "// or 'media' or 'class'"), "\n  theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 235,
      columnNumber: 33
    }
  }), "{"), "\n    extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
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
      lineNumber: 247,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 28
    }
  }), ","), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 28
    }
  }), ","), "\n  plugins", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 12
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 28
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, "Learn more about configuring Tailwind in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuration",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 59
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 102
    }
  }, "configuration documentation")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "include-tailwind-in-your-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, "Include Tailwind in your CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, "Create a CSS file if you don't already have one, and use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 75
    }
  }, "@tailwind"), " directive to inject Tailwind's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 164
    }
  }, "base"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 218
    }
  }, "components"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 282
    }
  }, "utilities"), " styles:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 282,
      columnNumber: 14
    }
  }), "/* ./your-css-folder/styles.css */"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 16
    }
  }), "@tailwind"), " base", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 47
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 16
    }
  }), "@tailwind"), " components", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 53
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 16
    }
  }), "@tailwind"), " utilities", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 52
    }
  }), ";"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }
  }, "Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, "If you're using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 30
    }
  }, "postcss-import"), " (or a tool that uses it under the hood, such as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/rails/webpacker"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 141
    }
  }), "Webpacker"), " for Rails), use our imports instead of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 77
    }
  }, "@tailwind"), " directive to avoid issues when importing any of your own additional files:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 16
    }
  }), "@import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 41
    }
  }), "\"tailwindcss/base\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 47
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 16
    }
  }), "@import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 41
    }
  }), "\"tailwindcss/components\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 53
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 16
    }
  }), "@import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 41
    }
  }), "\"tailwindcss/utilities\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 52
    }
  }), ";"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 7
    }
  }, "If you're working in a JavaScript framework like React or Vue that supports directly importing CSS files into your JS, you can also skip creating a CSS file altogether and import ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 193
    }
  }, "tailwindcss/tailwind.css"), " instead which has all of these directives already in place:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
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
      lineNumber: 346,
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
      lineNumber: 348,
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
      lineNumber: 350,
      columnNumber: 14
    }
  }), "// app.js"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword module"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 3
    }
  }), "import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 38
    }
  }), "\"tailwindcss/tailwind.css\"")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "building-your-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 7
    }
  }, "Building your CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 7
    }
  }, "How you actually build your project will depend on the tools that you're using. Your framework may include a command like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 136
    }
  }, "npm run dev"), " to start a development server that compiles your CSS in the background, you may be running ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 287
    }
  }, "webpack"), " yourself, or maybe you're using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 375
    }
  }, "postcss-cli"), " and running a command like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 462
    }
  }, "postcss styles.css -o compiled.css"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }
  }, "If you're already familiar with PostCSS you probably know what you need to do, if not refer to the documentation for the tool you are using."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, "When building for production, be sure to configure the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 69
    }
  }, "purge"), " option to remove any unused classes for the smallest file size:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-diff-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-diff-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token unchanged language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 16
    }
  }), " "), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 35
    }
  }), "// tailwind.config.js"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 3
    }
  }), " "), " module", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 41
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token property-access"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 30
    }
  }), "exports"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 41
    }
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 35
    }
  }), "{"), "\n"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token inserted-sign inserted language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix inserted"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 16
    }
  }), "+"), "   purge", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 42
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 35
    }
  }), "["), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix inserted"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 3
    }
  }), "+"), "     ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 39
    }
  }), "'./src/**/*.html'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 46
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix inserted"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 3
    }
  }), "+"), "     ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 39
    }
  }), "'./src/**/*.js'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 44
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix inserted"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 3
    }
  }), "+"), "   ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 37
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 30
    }
  }), ","), "\n"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token unchanged language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 16
    }
  }), " "), "   darkMode", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 45
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token boolean"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 35
    }
  }), "false"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 34
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 35
    }
  }), "// or 'media' or 'class'"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 3
    }
  }), " "), "   theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 42
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 35
    }
  }), "{"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 3
    }
  }), " "), "     extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 45
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 35
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 30
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 30
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 3
    }
  }), " "), "   ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 37
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 30
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 3
    }
  }), " "), "   variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 45
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 35
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 30
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 30
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 3
    }
  }), " "), "   plugins", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 44
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 35
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 30
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 30
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token prefix unchanged"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 3
    }
  }), " "), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 35
    }
  }), "}"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 7
    }
  }, "Read our separate guide on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 41
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 96
    }
  }, "optimizing for production")), " to learn more about tree-shaking unused styles for best performance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 7
    }
  }, "If you're integrating Tailwind with a tool that relies on an older version of PostCSS, you may see an error like this when trying to build your CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 12
    }
  }), "Error: PostCSS plugin tailwindcss requires PostCSS ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 69
    }
  }), "8"), "."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 7
    }
  }, "In this case, you should ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#post-css-7-compatibility-build"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 39
    }
  }), "switch to our PostCSS 7 compatibility build"), " instead."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "using-tailwind-without-post-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 7
    }
  }, "Using Tailwind without PostCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 7
    }
  }, "For simple projects or just giving Tailwind a spin, you can use the Tailwind CLI tool to generate your CSS without configuring PostCSS or even installing Tailwind as a dependency if you don't want to."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 18
    }
  }, "npx"), " which is a tool that is automatically installed alongside ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 128
    }
  }, "npm"), " to generate a fully compiled Tailwind CSS file:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 12
    }
  }), "npx tailwindcss-cli@latest build -o tailwind.css"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }
  }, "This will create a file called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 45
    }
  }, "tailwind.css"), " generated based on Tailwind's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://unpkg.com/browse/tailwindcss@%5E2/stubs/defaultConfig.stub.js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 136
    }
  }), "default configuration"), ", and automatically add any necessary vendor prefixes using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/postcss/autoprefixer"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 105
    }
  }), "autoprefixer"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 7
    }
  }, "Now you can pull this file into your HTML just like any other stylesheet:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
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
      lineNumber: 514,
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
      lineNumber: 516,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token doctype"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 14
    }
  }), "<!doctype html>"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
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
      lineNumber: 523,
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
      lineNumber: 525,
      columnNumber: 18
    }
  }), "<"), "html"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 47
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
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
      lineNumber: 532,
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
      lineNumber: 534,
      columnNumber: 18
    }
  }), "<"), "head"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 47
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 5
    }
  }), "<!-- ... -->"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
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
      lineNumber: 546,
      columnNumber: 18
    }
  }), "<"), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 52
    }
  }), "charset"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 36
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 554,
      columnNumber: 32
    }
  }), "\""), "UTF-8", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 41
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 44
    }
  }), "/>")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
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
      lineNumber: 565,
      columnNumber: 18
    }
  }), "<"), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 52
    }
  }), "name"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 33
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
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
      lineNumber: 573,
      columnNumber: 32
    }
  }), "\""), "viewport", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 44
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 44
    }
  }), "content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 36
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
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
      lineNumber: 583,
      columnNumber: 32
    }
  }), "\""), "width=device-width, initial-scale=1.0", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 73
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 44
    }
  }), "/>")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
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
      lineNumber: 594,
      columnNumber: 18
    }
  }), "<"), "link"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 52
    }
  }), "href"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 33
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
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
      lineNumber: 602,
      columnNumber: 32
    }
  }), "\""), "/tailwind.css", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 49
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 44
    }
  }), "rel"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
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
      lineNumber: 610,
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
      lineNumber: 612,
      columnNumber: 32
    }
  }), "\""), "stylesheet", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 46
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 39
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
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
      lineNumber: 621,
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
      lineNumber: 623,
      columnNumber: 18
    }
  }), "</"), "head"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 48
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
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
      lineNumber: 630,
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
      lineNumber: 632,
      columnNumber: 18
    }
  }), "<"), "body"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 47
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
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
      lineNumber: 640,
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
      lineNumber: 642,
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
      lineNumber: 644,
      columnNumber: 18
    }
  }), "</"), "body"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 48
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
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
      lineNumber: 651,
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
      lineNumber: 653,
      columnNumber: 18
    }
  }), "</"), "html"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 48
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "using-a-custom-css-file",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 7
    }
  }, "Using a custom CSS file"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 7
    }
  }, "If you'd like to process any custom CSS alongside the default styles Tailwind generates, create a CSS file wherever you normally would and use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 161
    }
  }, "@tailwind"), " directive to including Tailwind's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 253
    }
  }, "base"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 307
    }
  }, "components"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 371
    }
  }, "utilities"), " styles:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
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
      lineNumber: 666,
      columnNumber: 14
    }
  }), "/* ./src/tailwind.css */"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 16
    }
  }), "@tailwind"), " base", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 47
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 16
    }
  }), "@tailwind"), " components", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 53
    }
  }), ";")), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 16
    }
  }), ".btn")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 45
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule atapply"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 16
    }
  }), "@apply"), " px-4 py-2 bg-", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 53
    }
  }), "blue"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 33
    }
  }), "-600"), " text-", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 43
    }
  }), "white"), " rounded", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 46
    }
  }), ";")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 3
    }
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 3
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 16
    }
  }), "@tailwind"), " utilities", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 52
    }
  }), ";"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 7
    }
  }, "Then include the path to that file when building your CSS with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 77
    }
  }, "npx tailwindcss build"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 12
    }
  }), "npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 7
    }
  }, "Read about ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-base-styles",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 25
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 73
    }
  }, "adding base styles")), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/extracting-components",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 116
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 167
    }
  }, "extracting components")), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-new-utilities",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 217
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 267
    }
  }, "adding new utilities")), " to learn more about adding custom CSS on top of Tailwind."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "customizing-your-configuration",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 7
    }
  }, "Customizing your configuration"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 7
    }
  }, "If you'd like to customize what Tailwind generates, create a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 75
    }
  }, "tailwind.config.js"), " file using the Tailwind CLI tool:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 12
    }
  }), "npx tailwindcss-cli@latest init"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 7
    }
  }, "This will create a minimal ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 41
    }
  }, "tailwind.config.js"), " file at the root of your project:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
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
      lineNumber: 736,
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
      lineNumber: 738,
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
      lineNumber: 740,
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
      lineNumber: 743,
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
      lineNumber: 745,
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
      lineNumber: 747,
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
      lineNumber: 749,
      columnNumber: 33
    }
  }), "{"), "\n  purge", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
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
      lineNumber: 754,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 28
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 28
    }
  }), ","), "\n  darkMode", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 33
    }
  }), "false"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 32
    }
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 33
    }
  }), "// or 'media' or 'class'"), "\n  theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
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
      lineNumber: 772,
      columnNumber: 33
    }
  }), "{"), "\n    extend", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
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
      lineNumber: 784,
      columnNumber: 5
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 28
    }
  }), ","), "\n  variants", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 13
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 33
    }
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 28
    }
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 28
    }
  }), ","), "\n  plugins", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 12
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 33
    }
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
      columnNumber: 28
    }
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 28
    }
  }), ","), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 7
    }
  }, "This file will automatically be read when building your CSS with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 79
    }
  }, "npx tailwindcss build"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 12
    }
  }), "npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 7
    }
  }, "If you'd like to keep your config file in a different location or give it a different name, pass the config file path using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 142
    }
  }, "-c"), " option when building your CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 12
    }
  }), "npx tailwindcss-cli@latest build ./src/tailwind.css -c ./.config/tailwind.config.js -o ./dist/tailwind.css"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 7
    }
  }, "Learn more about configuring Tailwind in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuration",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 59
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 102
    }
  }, "configuration documentation")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "building-for-production",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 7
    }
  }, "Building for production"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 7
    }
  }, "When building for production, set ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 48
    }
  }, "NODE_ENV=production"), " on the command line when building your CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token assign-left variable"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835,
      columnNumber: 14
    }
  }), "NODE_ENV"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 35
    }
  }), "="), "production npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 7
    }
  }, "This will make sure Tailwind removes any unused CSS and minifies the CSS file for best performance. Read our separate guide on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 141
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 196
    }
  }, "optimizing for production")), " to learn more."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "using-tailwind-via-cdn",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 7
    }
  }, "Using Tailwind via CDN"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 7
    }
  }, "Before using the CDN build, please note that many of the features that make Tailwind CSS great are not available without incorporating Tailwind into your build process.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["List"], {
    mdxType: "List",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 3
    }
  }, "You can't customize Tailwind's default theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 3
    }
  }, "You can't use any ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "/docs/functions-and-directives",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 56
    }
  }, "directives"), " like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 117
    }
  }, "@apply"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 138
    }
  }, "@variants"), ", etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 3
    }
  }, "You can't enable additional variants like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "/docs/hover-focus-and-other-states#group-focus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 80
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 137
    }
  }, "group-focus"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 3
    }
  }, "You can't install third-party plugins"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 3
    }
  }, "You can't tree-shake unused styles")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 7
    }
  }, "To get the most out of Tailwind, you really should ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#installing-tailwind-as-a-post-css-plugin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 65
    }
  }), "install it as a PostCSS plugin"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 7
    }
  }, "To pull in Tailwind for quick demos or just giving the framework a spin, grab the latest default configuration build via CDN:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
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
      lineNumber: 859,
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
      lineNumber: 861,
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
      lineNumber: 863,
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
      lineNumber: 865,
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
      lineNumber: 867,
      columnNumber: 18
    }
  }), "<"), "link"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 52
    }
  }), "href"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 33
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
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
      lineNumber: 875,
      columnNumber: 32
    }
  }), "\""), "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 90
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 44
    }
  }), "rel"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
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
      lineNumber: 883,
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
      lineNumber: 885,
      columnNumber: 32
    }
  }), "\""), "stylesheet", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 46
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 39
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 7
    }
  }, "Note that while the CDN build is large ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 42
    }
  }, "(", _utils_stats__WEBPACK_IMPORTED_MODULE_10___default.a.default.brotlified, " compressed, ", _utils_stats__WEBPACK_IMPORTED_MODULE_10___default.a.default.minified, " raw)"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 122
    }
  }, "it's not representative of the sizes you see when including Tailwind as part of your build process"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 7
    }
  }, "Sites that follow our ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 36
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 91
    }
  }, "best practices")), " are almost always under 10kb compressed."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "html-starter-template",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 7
    }
  }, "HTML starter template"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 7
    }
  }, "For Tailwind's styles to work as expected, you'll want to use the HTML5 doctype and include the responsive viewport meta tag to properly handle responsive styles on all devices."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
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
      lineNumber: 901,
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
      lineNumber: 903,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token doctype"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 14
    }
  }), "<!doctype html>"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
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
      lineNumber: 910,
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
      lineNumber: 912,
      columnNumber: 18
    }
  }), "<"), "html"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 47
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
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
      lineNumber: 919,
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
      lineNumber: 921,
      columnNumber: 18
    }
  }), "<"), "head"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 47
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
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
      lineNumber: 930,
      columnNumber: 18
    }
  }), "<"), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 52
    }
  }), "charset"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 36
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
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
      lineNumber: 938,
      columnNumber: 32
    }
  }), "\""), "UTF-8", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 41
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 44
    }
  }), "/>")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
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
      lineNumber: 949,
      columnNumber: 18
    }
  }), "<"), "meta"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 52
    }
  }), "name"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 33
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
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
      lineNumber: 957,
      columnNumber: 32
    }
  }), "\""), "viewport", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 44
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 44
    }
  }), "content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 36
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
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
      lineNumber: 967,
      columnNumber: 32
    }
  }), "\""), "width=device-width, initial-scale=1.0", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 73
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 44
    }
  }), "/>")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
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
      lineNumber: 978,
      columnNumber: 18
    }
  }), "<"), "link"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 52
    }
  }), "href"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 33
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
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
      lineNumber: 986,
      columnNumber: 32
    }
  }), "\""), "/path/to/tailwind.css", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 57
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 44
    }
  }), "rel"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
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
      lineNumber: 994,
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
      lineNumber: 996,
      columnNumber: 32
    }
  }), "\""), "stylesheet", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 46
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
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
      lineNumber: 1003,
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
      lineNumber: 1006,
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
      lineNumber: 1008,
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
      lineNumber: 1010,
      columnNumber: 18
    }
  }), "</"), "head"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 48
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
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
      lineNumber: 1017,
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
      lineNumber: 1019,
      columnNumber: 18
    }
  }), "<"), "body"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 47
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
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
      lineNumber: 1027,
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
      lineNumber: 1029,
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
      lineNumber: 1031,
      columnNumber: 18
    }
  }), "</"), "body"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 48
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
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
      lineNumber: 1038,
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
      lineNumber: 1040,
      columnNumber: 18
    }
  }), "</"), "html"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 48
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 7
    }
  }, "Many front-end frameworks like Next.js, vue-cli and others do all this for you behind the scenes automatically, so depending on what you're building you might not need to set this up."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "post-css-7-compatibility-build",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
      columnNumber: 7
    }
  }, "PostCSS 7 compatibility build"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 7
    }
  }, "As of v2.0, Tailwind CSS depends on PostCSS 8. Because PostCSS 8 is only a few months old, many other tools in the ecosystem haven't updated yet, which means you might see an error like this in your terminal after installing Tailwind and trying to compile your CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 12
    }
  }), "Error: PostCSS plugin tailwindcss requires PostCSS ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 69
    }
  }), "8"), "."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 7
    }
  }, "To help bridge the gap until everyone has updated, we also publish a PostCSS 7 compatibility build under the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 123
    }
  }, "compat"), " channel on npm."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 7
    }
  }, "If you run into the error mentioned above, uninstall Tailwind and re-install using the compatibility build instead:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 14
    }
  }), "npm"), " uninstall tailwindcss postcss autoprefixer\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 3
    }
  }), "npm"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071,
      columnNumber: 35
    }
  }), "install"), " tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 7
    }
  }, "The compatibility build is identical to the main build in every way, so you aren't missing out on any features or anything like that."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 7
    }
  }, "Once the rest of your tools have added support for PostCSS 8, you can move off of the compatibility build by re-installing Tailwind and its peer-dependencies using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 182
    }
  }, "latest"), " tag:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "div"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-shell"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 14
    }
  }), "npm"), " uninstall tailwindcss @tailwindcss/postcss7-compat\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 3
    }
  }), "npm"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 35
    }
  }), "install"), " tailwindcss@latest postcss@latest autoprefixer@latest")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5zdGFsbGF0aW9uLm1keCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJfTGF5b3V0IiwibWV0YSIsInRhYmxlT2ZDb250ZW50cyIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiX0RlZmF1bHQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwic3RhdHMiLCJkZWZhdWx0IiwiYnJvdGxpZmllZCIsIm1pbmlmaWVkIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLGdGQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1gsV0FBUyxXQURFO0FBRVgsaUJBQWU7QUFGSixDQUFiO0FBSUEsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUywyQkFEYztBQUV2QixVQUFRLDRCQUZlO0FBR3ZCLGNBQVk7QUFIVyxDQUFELEVBSXJCO0FBQ0QsV0FBUyxtREFEUjtBQUVELFVBQVEscURBRlA7QUFHRCxjQUFZLENBQUM7QUFDWCxhQUFTLCtCQURFO0FBRVgsWUFBUTtBQUZHLEdBQUQsRUFHVDtBQUNELGFBQVMsc0NBRFI7QUFFRCxZQUFRO0FBRlAsR0FIUyxFQU1UO0FBQ0QsYUFBUyxnQ0FEUjtBQUVELFlBQVE7QUFGUCxHQU5TLEVBU1Q7QUFDRCxhQUFTLDhCQURSO0FBRUQsWUFBUTtBQUZQLEdBVFMsRUFZVDtBQUNELGFBQVMsbUJBRFI7QUFFRCxZQUFRO0FBRlAsR0FaUztBQUhYLENBSnFCLEVBdUJyQjtBQUNELFdBQVMsZ0NBRFI7QUFFRCxVQUFRLGlDQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyx5QkFERTtBQUVYLFlBQVE7QUFGRyxHQUFELEVBR1Q7QUFDRCxhQUFTLGdDQURSO0FBRUQsWUFBUTtBQUZQLEdBSFMsRUFNVDtBQUNELGFBQVMseUJBRFI7QUFFRCxZQUFRO0FBRlAsR0FOUztBQUhYLENBdkJxQixFQW9DckI7QUFDRCxXQUFTLHdCQURSO0FBRUQsVUFBUSx3QkFGUDtBQUdELGNBQVk7QUFIWCxDQXBDcUIsRUF3Q3JCO0FBQ0QsV0FBUyx1QkFEUjtBQUVELFVBQVEsdUJBRlA7QUFHRCxjQUFZO0FBSFgsQ0F4Q3FCLEVBNENyQjtBQUNELFdBQVMsK0JBRFI7QUFFRCxVQUFRLGdDQUZQO0FBR0QsY0FBWTtBQUhYLENBNUNxQixDQUF4QjtBQWtEQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJKLFFBQU0sRUFBTkEsTUFEa0I7QUFFcEJFLE1BQUksRUFBSkEsSUFGb0I7QUFHcEJDLGlCQUFlLEVBQWZBO0FBSG9CLENBQXBCO0FBS0EsSUFBTUUsU0FBUyxHQUFHQyxzRUFBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFMO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBQyw0QkFBdkI7QUFBb0QsT0FBRyxFQUFFLElBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0pBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9rQ0FGRixDQVJLLEVBWUwsMERBQUMsK0VBQUQ7QUFBbUIsV0FBTyxFQUFDLG1CQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkssRUFhTDtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFzQkFBOEk7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNoSyxZQUFRO0FBRHdKLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUxBQTlJLCtTQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsMERBQUMsMkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFDLHFEQUF2QjtBQUE2RSxPQUFHLEVBQUUsSUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTEFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOHlDQUE0UjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzlTLFlBQVE7QUFEc1MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNVIsTUFORixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscW9CQUErSSwwREFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxvRUFBWjtBQUFpRixZQUFRLE1BQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxT0FBMUYsQ0FBL0ksMEVBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNtQkFBeUk7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUMzSixZQUFRO0FBRG1KLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkhBQXpJLE1BVkYsRUFhRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsK0JBQXZCO0FBQXVELE9BQUcsRUFBRSxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdIQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxneEJBZEYsRUFlRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsT0FJdUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEQsaUJBQWE7QUFEbUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKdkIsc0NBRkYsQ0FGSCxDQWZGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBQTBCLDBEQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLHVDQUFaO0FBQW9ELFlBQVEsTUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhRQUE3RCxDQUExQixnUEFBOE07QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNoTyxZQUFRO0FBRHdOLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlNLGdhQTFCRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhpQkE3QkYsRUE4QkUsb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0SkFFeUQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEYsaUJBQWE7QUFEcUUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZ6RCxNQUZGLENBRkgsQ0E5QkYsRUF1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnTkFBOEM7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNoRSxZQUFRO0FBRHdELEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsME1BQTlDLE1BdkNGLEVBMENFLDBEQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBQyxzQ0FBdkI7QUFBOEQsT0FBRyxFQUFFLElBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUlBMUNGLEVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBQWdCO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWhCLGNBQThFO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTlFLDBSQUF1TTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF2TSw4UUFBOFQ7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBOVQsbURBQWtZO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbFksNEVBQXdjO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXhjLE1BM0NGLEVBNENFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsY0FLSDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN0QixpQkFBYTtBQURTLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMRyxFQU9nQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBoQixPQVMyQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNwRCxpQkFBYTtBQUR1QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVDNCLE9BV3FCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFYckIsaUJBY0E7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekIsaUJBQWE7QUFEWSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBZEEsT0FnQnFCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoQnJCLHVCQW1CTTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvQixpQkFBYTtBQURrQixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbkJOLE9BcUJxQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBckJyQixFQXVCZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZCaEIsRUF5QmdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF6QmhCLHdCQTRCTztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQyxpQkFBYTtBQURtQixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBNUJQLE9BOEJxQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBOUJyQixFQWdDZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWhDaEIsRUFrQ2dCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFsQ2hCLFVBcUNQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xCLGlCQUFhO0FBREssR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXJDTyxRQXdDVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF4Q1MsQ0FGRixDQUZILENBNUNGLEVBMkZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMlFBM0ZGLEVBNEZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUZBQXVGLDBEQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLGdDQUFaO0FBQTZDLFlBQVEsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUF0RCxDQUF2RixzRUE1RkYsRUE2RkUsMERBQUMsMkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFDLGdDQUF2QjtBQUF3RCxPQUFHLEVBQUUsSUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0E3RkYsRUE4RkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxS0FBbUs7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBbkssa0JBOUZGLEVBK0ZFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsQ0FGSCxDQS9GRixFQXNHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUFrQztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFsQyx1Q0F0R0YsRUF1R0Usb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRixjQUtIO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3RCLGlCQUFhO0FBRFMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxHLEVBT2dCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUGhCLE9BUzJCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3BELGlCQUFhO0FBRHVDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFUM0IsT0FXcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVhyQixlQWNGO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZCLGlCQUFhO0FBRFUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWRFLE9BZ0JxQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBaEJyQixFQWtCZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWxCaEIsRUFvQmdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFwQmhCLGtCQXVCQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxQixpQkFBYTtBQURhLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF2QkQsT0F5QnFCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QnJCLEVBMkJvQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM3QyxpQkFBYTtBQURnQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBM0JwQixPQTZCcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E3QnJCLGVBZ0NGO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZCLGlCQUFhO0FBRFUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWhDRSxPQWtDcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWxDckIsa0JBcUNDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzFCLGlCQUFhO0FBRGEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXJDRCxPQXVDcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZDckIsRUF5Q2dCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF6Q2hCLEVBMkNnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBM0NoQixVQThDUDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsQixpQkFBYTtBQURLLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUE5Q08sRUFnRGdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoRGhCLGtCQW1EQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxQixpQkFBYTtBQURhLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFuREQsT0FxRHFCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFyRHJCLEVBdURnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdkRoQixFQXlEZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXpEaEIsaUJBNERBO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pCLGlCQUFhO0FBRFksR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTVEQSxPQThEcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTlEckIsRUFnRWdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoRWhCLEVBa0VnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbEVoQixRQXFFVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFyRVMsQ0FGRixDQUZILENBdkdGLEVBbUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBQW9ELDBEQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLHFCQUFaO0FBQWtDLFlBQVEsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUEzQyxDQUFwRCxNQW5MRixFQW9MRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsOEJBQXZCO0FBQXNELE9BQUcsRUFBRSxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQXBMRixFQXFMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUFvRTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFwRSxzQ0FBNko7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE3SixRQUFtTjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFuTixZQUFtUjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFuUixhQXJMRixFQXNMRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUZGLFFBS1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZiLFdBSTRDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzFELGlCQUFhO0FBRDZDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKNUMsQ0FMUyxRQVlUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGYixpQkFJa0Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEUsaUJBQWE7QUFEbUQsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpsRCxDQVpTLFFBbUJUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGYixnQkFJaUQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDL0QsaUJBQWE7QUFEa0QsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpqRCxDQW5CUyxDQUZGLENBRkgsQ0F0TEYsRUFvTkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SUFwTkYsRUFxTkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBdUI7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBdkIsdURBQXNJO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDeEosWUFBUTtBQURnSixHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF0SSxrREFFc0U7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGdEUsZ0ZBck5GLEVBd05FLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsT0FJMkI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDcEQsaUJBQWE7QUFEdUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKM0IsRUFNaUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDMUQsaUJBQWE7QUFENkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5qQyxDQUZGLFFBV1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZiLE9BSXNDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3BELGlCQUFhO0FBRHVDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSnRDLEVBTWtEO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hFLGlCQUFhO0FBRG1ELEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFObEQsQ0FYUyxRQW9CVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmIsT0FJc0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDcEQsaUJBQWE7QUFEdUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FKdEMsRUFNaUQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDL0QsaUJBQWE7QUFEa0QsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5qRCxDQXBCUyxDQUZGLENBRkgsQ0F4TkYsRUF5UEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0TEFBMEw7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBMUwsaUVBelBGLEVBMFBFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsUUFLVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMUyxPQU8wQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNuRCxpQkFBYTtBQURzQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQVAxQixDQUZGLENBRkgsQ0ExUEYsRUF3UUUsMERBQUMsMkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFDLG1CQUF2QjtBQUEyQyxPQUFHLEVBQUUsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4UUYsRUF5UUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSUFBaUk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBakksa0dBQXdSO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeFIsdUNBQWdYO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWhYLGtDQUF1YztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUF2YyxNQXpRRixFQTBRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9KQTFRRixFQTJRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQUE4RDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTlELHFFQTNRRixFQTRRRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsT0FJcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKckIsUUFPWDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNkLGlCQUFhO0FBREMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBXLGFBUzJCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3BELGlCQUFhO0FBRHVDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFUM0IsRUFXZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYaEIsT0FhMkI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDcEQsaUJBQWE7QUFEdUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWIzQixPQWVxQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBZnJCLE9BRkYsRUFvQkY7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkIsaUJBQWE7QUFEVSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRU07QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk4sY0FJZ0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDckQsaUJBQWE7QUFEd0MsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpoQyxPQU15QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTnpCLFFBU1A7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDZCxpQkFBYTtBQURDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFUTyxXQVc2QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsRCxpQkFBYTtBQURxQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVg3QixFQWFvQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6RCxpQkFBYTtBQUQ0QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBYnBDLFFBZ0JQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2QsaUJBQWE7QUFEQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBaEJPLFdBa0I2QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsRCxpQkFBYTtBQURxQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWxCN0IsRUFvQmtDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFwQmxDLFFBdUJQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2QsaUJBQWE7QUFEQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdkJPLFNBeUIyQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoRCxpQkFBYTtBQURtQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBekIzQixFQTJCb0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTNCcEIsT0FwQkUsRUFrREY7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkIsaUJBQWE7QUFEVSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRU07QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk4saUJBSW1DO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3hELGlCQUFhO0FBRDJDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKbkMsT0FNeUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU56QixFQVF3QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM3QyxpQkFBYTtBQURnQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUnhCLE9BVXlCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVnpCLFFBYVA7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDZCxpQkFBYTtBQURDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFiTyxjQWVnQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNyRCxpQkFBYTtBQUR3QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBZmhDLE9BaUJ5QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBakJ6QixRQW9CUDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNkLGlCQUFhO0FBREMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXBCTyxpQkFzQm1DO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3hELGlCQUFhO0FBRDJDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF0Qm5DLE9Bd0J5QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBeEJ6QixFQTBCb0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTFCcEIsRUE0Qm9CO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUE1QnBCLFFBK0JQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2QsaUJBQWE7QUFEQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBL0JPLFNBaUMyQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoRCxpQkFBYTtBQURtQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBakMzQixFQW1Db0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQW5DcEIsUUFzQ1A7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDZCxpQkFBYTtBQURDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF0Q08saUJBd0NtQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN4RCxpQkFBYTtBQUQyQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBeENuQyxPQTBDeUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTFDekIsRUE0Q29CO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUE1Q3BCLEVBOENvQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBOUNwQixRQWlEUDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNkLGlCQUFhO0FBREMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWpETyxnQkFtRGtDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFuRGxDLE9BcUR5QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBckR6QixFQXVEb0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZEcEIsRUF5RG9CO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF6RHBCLFFBNERQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2QsaUJBQWE7QUFEQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBNURPLE9BOER5QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBOUR6QixDQWxERSxDQUZGLENBRkgsQ0E1UUYsRUFtWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBa0MsMERBQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsaUNBQVo7QUFBOEMsWUFBUSxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQXZELENBQWxDLDBFQW5ZRixFQW9ZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRKQXBZRixFQXFZRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUV5RDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsRixpQkFBYTtBQURxRSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRnpELE1BRkYsQ0FGSCxDQXJZRixFQThZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFnQztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ2xELFlBQVE7QUFEMEMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBaEMsY0E5WUYsRUFpWkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpaRixFQWtaRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsaUNBQXZCO0FBQXlELE9BQUcsRUFBRSxJQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQWxaRixFQW1aRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdOQW5aRixFQW9aRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVc7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFYLGlFQUF5SDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXpILHFEQXBaRixFQXFaRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUZGLENBRkgsQ0FyWkYsRUE0WkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FBc0M7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdEMscUNBQWlJO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDbkosWUFBUTtBQUQySSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFqSSxrRUFFa0c7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNwSCxZQUFRO0FBRDRHLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRmxHLE1BNVpGLEVBaWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUZBamFGLEVBa2FFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsUUFLVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixTQUZiLEVBTTRDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzFELGlCQUFhO0FBRDZDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFONUMsQ0FMUyxRQWNUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLFNBRmIsRUFNNEM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDMUQsaUJBQWE7QUFENkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU41QyxDQWRTLFVBdUJQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xCLGlCQUFhO0FBREssR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2Qk8sVUEwQlA7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRVc7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGWCxPQU0rQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvRCxpQkFBYTtBQURrRCxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU4vQyxFQVErQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvQyxpQkFBYTtBQURrQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWxCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZrQixFQUlKO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSSxXQU1LO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xELGlCQUFhO0FBRHFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOTCxDQVIvQixPQWdCdUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWhCdkMsQ0ExQk8sVUE2Q1A7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRVc7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGWCxPQU0rQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvRCxpQkFBYTtBQURrRCxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTi9DLEVBUTRCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzVDLGlCQUFhO0FBRCtCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFZjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGZSxFQUlEO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKQyxjQU1XO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3JELGlCQUFhO0FBRHdDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOWCxDQVI1QixPQWdCdUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQnZDLEVBa0IrQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvQyxpQkFBYTtBQURrQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWxCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZrQixFQUlKO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSSwyQ0FNcUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEYsaUJBQWE7QUFEcUUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5yQyxDQWxCL0IsT0EwQnVDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0ExQnZDLENBN0NPLFVBMEVQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xCLGlCQUFhO0FBREssR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVXO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLFNBRlgsT0FNK0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDL0QsaUJBQWE7QUFEa0QsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU4vQyxFQVE0QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM1QyxpQkFBYTtBQUQrQixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWY7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRmUsRUFJRDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkMsbUJBTWdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzFELGlCQUFhO0FBRDZDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOaEIsQ0FSNUIsT0FnQnVDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQnZDLEVBa0IyQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQyxpQkFBYTtBQUQ4QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRmMsRUFJQTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkEsZ0JBTWM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5kLENBbEIzQixFQTBCa0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEQsaUJBQWE7QUFEcUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTFCbEMsQ0ExRU8sUUF1R1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsU0FGYixFQU02QztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzRCxpQkFBYTtBQUQ4QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTjdDLENBdkdTLFFBZ0hUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLFNBRmIsRUFNNEM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDMUQsaUJBQWE7QUFENkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU41QyxDQWhIUyxVQXlIUDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsQixpQkFBYTtBQURLLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekhPLFFBNEhUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLFNBRmIsRUFNNkM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0QsaUJBQWE7QUFEOEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU43QyxDQTVIUyxRQXFJVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixTQUZiLEVBTTZDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNELGlCQUFhO0FBRDhDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFON0MsQ0FySVMsQ0FGRixDQUZILENBbGFGLEVBb2pCRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMseUJBQXZCO0FBQWlELE9BQUcsRUFBRSxJQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXBqQkYsRUFxakJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBQTBKO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTFKLHlDQUFzUDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXRQLFFBQTRTO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVTLFlBQTRXO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTVXLGFBcmpCRixFQXNqQkUsb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixRQUtUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGYixXQUk0QztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxRCxpQkFBYTtBQUQ2QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSjVDLENBTFMsUUFZVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRmIsaUJBSWtEO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hFLGlCQUFhO0FBRG1ELEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFKbEQsQ0FaUyxVQW9CVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGYixDQXBCUyxPQXdCaUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDMUQsaUJBQWE7QUFENkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXhCakMsVUEyQlA7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRVc7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlgsb0JBSWdEO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hFLGlCQUFhO0FBRG1ELEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKaEQsRUFNNEI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDNUMsaUJBQWE7QUFEK0IsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU41QixZQVFzQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN0RCxpQkFBYTtBQUR5QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUnRDLGNBVXlDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pELGlCQUFhO0FBRDRDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWekMsQ0EzQk8sUUF3Q1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBeENTLFVBNENUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGYixnQkFJaUQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDL0QsaUJBQWE7QUFEa0QsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpqRCxDQTVDUyxDQUZGLENBRkgsQ0F0akJGLEVBNm1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQUFzRTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF0RSxNQTdtQkYsRUE4bUJFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUZBRkYsQ0FGSCxDQTltQkYsRUFxbkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWtCLDBEQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLDBCQUFaO0FBQXVDLFlBQVEsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFoRCxDQUFsQixRQUE2RywwREFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyw2QkFBWjtBQUEwQyxZQUFRLE1BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBbkQsQ0FBN0csWUFBa04sMERBQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsNEJBQVo7QUFBeUMsWUFBUSxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQWxELENBQWxOLCtEQXJuQkYsRUFzbkJFLDBEQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBQyxnQ0FBdkI7QUFBd0QsT0FBRyxFQUFFLElBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBdG5CRixFQXVuQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFBb0U7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBcEUsdUNBdm5CRixFQXduQkUsb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FGRixDQUZILENBeG5CRixFQStuQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBa0M7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBbEMsdUNBL25CRixFQWdvQkUsb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRixjQUtIO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3RCLGlCQUFhO0FBRFMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxHLEVBT2dCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUGhCLE9BUzJCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3BELGlCQUFhO0FBRHVDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFUM0IsT0FXcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVhyQixlQWNGO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZCLGlCQUFhO0FBRFUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWRFLE9BZ0JxQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM5QyxpQkFBYTtBQURpQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBaEJyQixFQWtCZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWxCaEIsRUFvQmdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFwQmhCLGtCQXVCQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxQixpQkFBYTtBQURhLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF2QkQsT0F5QnFCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QnJCLEVBMkJvQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM3QyxpQkFBYTtBQURnQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBM0JwQixPQTZCcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E3QnJCLGVBZ0NGO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZCLGlCQUFhO0FBRFUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWhDRSxPQWtDcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWxDckIsa0JBcUNDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzFCLGlCQUFhO0FBRGEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXJDRCxPQXVDcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZDckIsRUF5Q2dCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF6Q2hCLEVBMkNnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBM0NoQixVQThDUDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsQixpQkFBYTtBQURLLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUE5Q08sRUFnRGdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoRGhCLGtCQW1EQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxQixpQkFBYTtBQURhLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFuREQsT0FxRHFCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzlDLGlCQUFhO0FBRGlDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFyRHJCLEVBdURnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdkRoQixFQXlEZ0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXpEaEIsaUJBNERBO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pCLGlCQUFhO0FBRFksR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTVEQSxPQThEcUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDOUMsaUJBQWE7QUFEaUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTlEckIsRUFnRWdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoRWhCLEVBa0VnQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbEVoQixRQXFFVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFyRVMsQ0FGRixDQUZILENBaG9CRixFQTRzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFBd0U7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBeEUsTUE1c0JGLEVBNnNCRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1GQUZGLENBRkgsQ0E3c0JGLEVBb3RCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlJQUF1STtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXZJLG9DQXB0QkYsRUFxdEJFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUhBRkYsQ0FGSCxDQXJ0QkYsRUE0dEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBQW9ELDBEQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLHFCQUFaO0FBQWtDLFlBQVEsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUEzQyxDQUFwRCxNQTV0QkYsRUE2dEJFLDBEQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBQyx5QkFBdkI7QUFBaUQsT0FBRyxFQUFFLElBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBN3RCRixFQTh0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FBeUM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBekMsaURBOXRCRixFQSt0QkUsb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUl1QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoRCxpQkFBYTtBQURtQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSnZCLDBGQUZGLENBRkgsQ0EvdEJGLEVBMHVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdJQUFzSSwwREFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxpQ0FBWjtBQUE4QyxZQUFRLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBdkQsQ0FBdEksb0JBMXVCRixFQTJ1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTN1QkYsRUE0dUJFLDBEQUFDLDJEQUFEO0FBQVUsU0FBSyxFQUFFLENBQWpCO0FBQW9CLE1BQUUsRUFBQyx3QkFBdkI7QUFBZ0QsT0FBRyxFQUFFLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBNXVCRixFQTZ1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnTEE3dUJGLENBYkssRUE0dkJMLDBEQUFDLHFEQUFEO0FBQU0sV0FBTyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLDBEQUFDLDREQUFEO0FBQWEsV0FBTyxFQUFDLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREUsRUFFRiwwREFBQyw0REFBRDtBQUFhLFdBQU8sRUFBQyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFxRDtBQUFHLFFBQUksRUFBQyxnQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFyRCxZQUFrSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWxILFFBQXVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXZJLFdBRkUsRUFHRiwwREFBQyw0REFBRDtBQUFhLFdBQU8sRUFBQyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUE2RTtBQUFHLFFBQUksRUFBQyxnREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpELENBQTdFLENBSEUsRUFJRiwwREFBQyw0REFBRDtBQUFhLFdBQU8sRUFBQyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUpFLEVBS0YsMERBQUMsNERBQUQ7QUFBYSxXQUFPLEVBQUMsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FMRSxDQTV2QkssRUFtd0JMO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBQTBEO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDNUUsWUFBUTtBQURvRSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUExRCxNQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSUFKRixFQUtFLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixTQUZGLE9BTXNDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQy9ELGlCQUFhO0FBRGtELEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOdEMsRUFRbUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDNUMsaUJBQWE7QUFEK0IsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVmO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZlLEVBSUQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpDLDREQU15RDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNuRyxpQkFBYTtBQURzRixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTnpELENBUm5CLE9BZ0I4QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN2RCxpQkFBYTtBQUQwQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEI5QixFQWtCa0I7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0MsaUJBQWE7QUFEOEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVkO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZjLEVBSUE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDekMsaUJBQWE7QUFENEIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpBLGdCQU1jO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOZCxDQWxCbEIsRUEwQnlCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xELGlCQUFhO0FBRHFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUExQnpCLENBRkYsQ0FGRixDQUZILENBTEYsRUF3Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFDbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFNRSxvREFBSyxDQUFDQyxPQUFOLENBQWNDLFVBQXBCLG1CQUE2Q0Ysb0RBQUssQ0FBQ0MsT0FBTixDQUFjRSxRQUEzRCxVQURuQyxRQUNtSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQURuSCxNQXhDRixFQTJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUE2QiwwREFBQyxnREFBRDtBQUFPLFFBQUksRUFBQyxpQ0FBWjtBQUE4QyxZQUFRLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBdkQsQ0FBN0IsOENBM0NGLEVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0YsRUE2Q0UsMERBQUMsMkRBQUQ7QUFBVSxTQUFLLEVBQUUsQ0FBakI7QUFBb0IsTUFBRSxFQUFDLHVCQUF2QjtBQUErQyxPQUFHLEVBQUUsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkE3Q0YsRUE4Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5TEE5Q0YsRUErQ0Usb0pBQVM7QUFDUCxpQkFBYTtBQUROLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVHO0FBQUssY0FBVSxFQUFDO0FBQWhCLEtBQTBCO0FBQ3pCLGlCQUFhO0FBRFksR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzFCLGlCQUFhO0FBRGEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixRQUtUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLFNBRmIsRUFNNEM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDMUQsaUJBQWE7QUFENkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU41QyxDQUxTLFFBY1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGYixFQU00QztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxRCxpQkFBYTtBQUQ2QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTjVDLENBZFMsVUF1QlA7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRVc7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGWCxPQU0rQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvRCxpQkFBYTtBQURrRCxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU4vQyxFQVErQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvQyxpQkFBYTtBQURrQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWxCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZrQixFQUlKO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSSxXQU1LO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xELGlCQUFhO0FBRHFDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOTCxDQVIvQixPQWdCdUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWhCdkMsQ0F2Qk8sVUEwQ1A7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRVc7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGWCxPQU0rQztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvRCxpQkFBYTtBQURrRCxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTi9DLEVBUTRCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzVDLGlCQUFhO0FBRCtCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFZjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGZSxFQUlEO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKQyxjQU1XO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3JELGlCQUFhO0FBRHdDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOWCxDQVI1QixPQWdCdUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQnZDLEVBa0IrQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMvQyxpQkFBYTtBQURrQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWxCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZrQixFQUlKO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3pDLGlCQUFhO0FBRDRCLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSSwyQ0FNcUM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEYsaUJBQWE7QUFEcUUsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5yQyxDQWxCL0IsT0EwQnVDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0ExQnZDLENBMUNPLFVBdUVQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xCLGlCQUFhO0FBREssR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVXO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLFNBRlgsT0FNK0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDL0QsaUJBQWE7QUFEa0QsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU4vQyxFQVE0QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUM1QyxpQkFBYTtBQUQrQixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWY7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRmUsRUFJRDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkMsMkJBTXdCO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xFLGlCQUFhO0FBRHFELEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FOeEIsQ0FSNUIsT0FnQnVDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ3ZELGlCQUFhO0FBRDBDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQnZDLEVBa0IyQjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQyxpQkFBYTtBQUQ4QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRmMsRUFJQTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUN6QyxpQkFBYTtBQUQ0QixHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkEsZ0JBTWM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDdkQsaUJBQWE7QUFEMEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5kLENBbEIzQixFQTBCa0M7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEQsaUJBQWE7QUFEcUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTFCbEMsQ0F2RU8sVUFvR1A7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDbEIsaUJBQWE7QUFESyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBHTyxRQXVHVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixTQUZiLEVBTTZDO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNELGlCQUFhO0FBRDhDLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFON0MsQ0F2R1MsUUFnSFQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsU0FGYixFQU00QztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMxRCxpQkFBYTtBQUQ2QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTjVDLENBaEhTLFVBeUhQO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2xCLGlCQUFhO0FBREssR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6SE8sUUE0SFQ7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWE7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsU0FGYixFQU02QztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzRCxpQkFBYTtBQUQ4QyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTjdDLENBNUhTLFFBcUlUO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQ2hCLGlCQUFhO0FBREcsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVhO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVFO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTRCO0FBQzNCLGlCQUFhO0FBRGMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLFNBRmIsRUFNNkM7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0QsaUJBQWE7QUFEOEMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU43QyxDQXJJUyxDQUZGLENBRkgsQ0EvQ0YsRUFpTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTEFqTUYsRUFrTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxNRixFQW1NRSwwREFBQywyREFBRDtBQUFVLFNBQUssRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUMsZ0NBQXZCO0FBQXdELE9BQUcsRUFBRSxJQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQW5NRixFQW9NRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlSQXBNRixFQXFNRSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUV5RDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNsRixpQkFBYTtBQURxRSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRnpELE1BRkYsQ0FGSCxDQXJNRixFQThNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNIQUFvSDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXBILHFCQTlNRixFQStNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJIQS9NRixFQWdORSxvSkFBUztBQUNQLGlCQUFhO0FBRE4sR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUc7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBMEI7QUFDekIsaUJBQWE7QUFEWSxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDMUIsaUJBQWE7QUFEYSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDM0IsaUJBQWE7QUFEYyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsbURBS1Q7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEIsaUJBQWE7QUFERyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTFMsT0FPdUI7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBNEI7QUFDaEQsaUJBQWE7QUFEbUMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQdkIsNkVBRkYsQ0FGSCxDQWhORixFQThORTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZJQTlORixFQStORTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlMQUErSztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQS9LLFVBL05GLEVBZ09FLG9KQUFTO0FBQ1AsaUJBQWE7QUFETixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRztBQUFLLGNBQVUsRUFBQztBQUFoQixLQUEwQjtBQUN6QixpQkFBYTtBQURZLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUMxQixpQkFBYTtBQURhLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUMzQixpQkFBYTtBQURjLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRiwyREFLVDtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoQixpQkFBYTtBQURHLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMUyxPQU91QjtBQUFNLGNBQVUsRUFBQztBQUFqQixLQUE0QjtBQUNoRCxpQkFBYTtBQURtQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVB2QiwyREFGRixDQUZILENBaE9GLENBbndCSyxDQUFQO0FBcS9CRDtLQXovQnVCTixVO0FBMi9CeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCO0FBQ0FQLFVBQVUsQ0FBQ0gsV0FBWCxHQUF5QkEsV0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9pbnN0YWxsYXRpb24uYmIyM2U3YTExM2FmZTEyZGNmZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBfTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWFkaW5nIGFzIF9IZWFkaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0hlYWRpbmcnXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IGFzIF9MYXlvdXQgfSBmcm9tICdAL2xheW91dHMvRG9jdW1lbnRhdGlvbkxheW91dCdcbmltcG9ydCB7IENvbnRlbnRzTGF5b3V0IGFzIF9EZWZhdWx0IH0gZnJvbSAnQC9sYXlvdXRzL0NvbnRlbnRzTGF5b3V0J1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW1CYWQgfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IEludGVncmF0aW9uR3VpZGVzIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludGVncmF0aW9uR3VpZGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0YXRzIGZyb20gJ0AvdXRpbHMvc3RhdHMnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LrQsFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwi0KPQt9C90LDQudGC0LUsINC60LDQuiDQt9Cw0L/Rg9GB0YLQuNGC0YwgVGFpbHdpbmQgQ1NTINCyINGB0LLQvtC10Lwg0L/RgNC+0LXQutGC0LUuXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0KDRg9C60L7QstC+0LTRgdGC0LLQviDQv9C+INC40L3RgtC10LPRgNCw0YbQuNC4XCIsXG4gIFwic2x1Z1wiOiBcInJ1a292b2RzdHZvLXBvLWludGVncmFjemlpXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LrQsCBUYWlsd2luZCBDU1Mg0LIg0LrQsNGH0LXRgdGC0LLQtSDQv9C70LDQs9C40L3QsCBQb3N0Q1NTXCIsXG4gIFwic2x1Z1wiOiBcInVzdGFub3ZrYS10YWlsd2luZC1jc3Mtdi1rYWNoZXN0dmUtcGxhZ2luYS1wb3N0LWNzc1wiLFxuICBcImNoaWxkcmVuXCI6IFt7XG4gICAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LjRgtGMIFRhaWx3aW5kINGH0LXRgNC10LcgbnBtXCIsXG4gICAgXCJzbHVnXCI6IFwidXN0YW5vdml0LXRhaWx3aW5kLWNoZXJlei1ucG1cIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcItCU0L7QsdCw0LLQuNGC0YwgVGFpbHdpbmQg0LrQsNC6INC/0LvQsNCz0LjQvSBQb3N0Q1NTXCIsXG4gICAgXCJzbHVnXCI6IFwiZG9iYXZpdC10YWlsd2luZC1rYWstcGxhZ2luLXBvc3QtY3NzXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCJDcmVhdGUgeW91ciBjb25maWd1cmF0aW9uIGZpbGVcIixcbiAgICBcInNsdWdcIjogXCJjcmVhdGUteW91ci1jb25maWd1cmF0aW9uLWZpbGVcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcIkluY2x1ZGUgVGFpbHdpbmQgaW4geW91ciBDU1NcIixcbiAgICBcInNsdWdcIjogXCJpbmNsdWRlLXRhaWx3aW5kLWluLXlvdXItY3NzXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCJCdWlsZGluZyB5b3VyIENTU1wiLFxuICAgIFwic2x1Z1wiOiBcImJ1aWxkaW5nLXlvdXItY3NzXCJcbiAgfV1cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIlVzaW5nIFRhaWx3aW5kIHdpdGhvdXQgUG9zdENTU1wiLFxuICBcInNsdWdcIjogXCJ1c2luZy10YWlsd2luZC13aXRob3V0LXBvc3QtY3NzXCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwiVXNpbmcgYSBjdXN0b20gQ1NTIGZpbGVcIixcbiAgICBcInNsdWdcIjogXCJ1c2luZy1hLWN1c3RvbS1jc3MtZmlsZVwiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwiQ3VzdG9taXppbmcgeW91ciBjb25maWd1cmF0aW9uXCIsXG4gICAgXCJzbHVnXCI6IFwiY3VzdG9taXppbmcteW91ci1jb25maWd1cmF0aW9uXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCJCdWlsZGluZyBmb3IgcHJvZHVjdGlvblwiLFxuICAgIFwic2x1Z1wiOiBcImJ1aWxkaW5nLWZvci1wcm9kdWN0aW9uXCJcbiAgfV1cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIlVzaW5nIFRhaWx3aW5kIHZpYSBDRE5cIixcbiAgXCJzbHVnXCI6IFwidXNpbmctdGFpbHdpbmQtdmlhLWNkblwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJIVE1MIHN0YXJ0ZXIgdGVtcGxhdGVcIixcbiAgXCJzbHVnXCI6IFwiaHRtbC1zdGFydGVyLXRlbXBsYXRlXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIlBvc3RDU1MgNyBjb21wYXRpYmlsaXR5IGJ1aWxkXCIsXG4gIFwic2x1Z1wiOiBcInBvc3QtY3NzLTctY29tcGF0aWJpbGl0eS1idWlsZFwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIExheW91dCxcbm1ldGEsXG50YWJsZU9mQ29udGVudHNcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBfRGVmYXVsdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwicnVrb3ZvZHN0dm8tcG8taW50ZWdyYWN6aWlcIiB0b2M9e3RydWV9PtCg0YPQutC+0LLQvtC00YHRgtCy0L4g0L/QviDQuNC90YLQtdCz0YDQsNGG0LjQuDwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCf0YDQvtGG0LXRgdGBINGD0YHRgtCw0L3QvtCy0LrQuCBUYWlsd2luZCBDU1Mg0LzQvtC20LXRgiDQvdC10LzQvdC+0LPQviDQvtGC0LvQuNGH0LDRgtGM0YHRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YLQvtCz0L4sINC60LDQutC40LUg0LTRgNGD0LPQuNC1INGE0YDQtdC50LzQstC+0YDQutC4L9C40L3RgdGC0YDRg9C80LXQvdGC0Ysg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1LCDQv9C+0Y3RgtC+0LzRgyDQvNGLINGB0L7RgdGC0LDQstC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0YDRg9C60L7QstC+0LTRgdGC0LIsINC60L7RgtC+0YDRi9C1INC+0YXQstCw0YLRi9Cy0LDRjtGCINC/0L7Qv9GD0LvRj9GA0L3Ri9C1INC90LDRgdGC0YDQvtC50LrQuC5gfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8SW50ZWdyYXRpb25HdWlkZXMgbWR4VHlwZT1cIkludGVncmF0aW9uR3VpZGVzXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8cD57YNCd0LUg0LLQuNC00LjRgtC1INGB0LLQvtC5INC70Y7QsdC40LzRi9C5INC40L3RgdGC0YDRg9C80LXQvdGCINCyINGB0L/QuNGB0LrQtT8g0JzRiyDQv9C+0YHRgtC+0Y/QvdC90L4g0YDQsNCx0L7RgtCw0LXQvCDQvdCw0LQg0L3QvtCy0YvQvNC4INGA0YPQutC+0LLQvtC00YHRgtCy0LDQvNC4LCDQvdC+INC/0L7QutCwINCS0Ysg0LzQvtC20LXRgtC1INGB0LvQtdC00L7QstCw0YLRjCDQuNC90YHRgtGA0YPQutGG0LjRj9C8INC/0L4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2luc3RhbGxpbmctdGFpbHdpbmQtY3NzLWFzLWEtcG9zdC1jc3MtcGx1Z2luXCJcbiAgICAgICAgfX0+e2DRg9GB0YLQsNC90L7QstC60LUgVGFpbHdpbmQgQ1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/Qu9Cw0LPQuNC90LAgUG9zdENTU2B9PC9hPntgINCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0L3QsNGB0YLRgNC+0LXQvSDQsiDQutGA0LDRgtGH0LDQudGI0LjQtSDRgdGA0L7QutC4LmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwidXN0YW5vdmthLXRhaWx3aW5kLWNzcy12LWthY2hlc3R2ZS1wbGFnaW5hLXBvc3QtY3NzXCIgdG9jPXt0cnVlfT7Qo9GB0YLQsNC90L7QstC60LAgVGFpbHdpbmQgQ1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/Qu9Cw0LPQuNC90LAgUG9zdENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCU0LvRjyDQsdC+0LvRjNGI0LjQvdGB0YLQstCwINGA0LXQsNC70YzQvdGL0YUg0L/RgNC+0LXQutGC0L7QsiDQvNGLINGA0LXQutC+0LzQtdC90LTRg9C10Lwg0YPRgdGC0LDQvdC+0LLQuNGC0YwgVGFpbHdpbmQg0LrQsNC6INC/0LvQsNCz0LjQvSBQb3N0Q1NTLiDQkdC+0LvRjNGI0LjQvdGB0YLQstC+INGB0L7QstGA0LXQvNC10L3QvdGL0YUg0YTRgNC10LnQvNCy0L7RgNC60L7QsiDRg9C20LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YIgUG9zdENTUyDQv9C+0LQg0LrQsNC/0L7RgtC+0LwsINC4INC10YHRgtGMINCx0L7Qu9GM0YjQsNGPINCy0LXRgNC+0Y/RgtC90L7RgdGC0YwsINGH0YLQviDQktGLINC40YHQv9C+0LvRjNC30L7QstCw0LvQuCDQuNC70Lgg0LIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8g0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDQtNGA0YPQs9C40LUg0L/Qu9Cw0LPQuNC90YsgUG9zdENTUywg0YLQsNC60LjQtSDQutCw0LogYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyXCJcbiAgICAgICAgfX0+e2BhdXRvcHJlZml4ZXJgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxwPntg0JXRgdC70Lgg0JLRiyDQvdC40LrQvtCz0LTQsCDQvdC1INGB0LvRi9GI0LDQu9C4INC+IFBvc3RDU1Mg0LjQu9C4INCS0LDQvCDQuNC90YLQtdGA0LXRgdC90L4sINGH0LXQvCDQvtC9INC+0YLQu9C40YfQsNC10YLRgdGPINC+0YIg0YLQsNC60LjRhSDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LIsINC60LDQuiBTYXNzLCDQv9GA0L7Rh9GC0LjRgtC1INC90LDRiNC1INGA0YPQutC+0LLQvtC00YHRgtCy0L4g0L/QviBgfTxfTGluayBocmVmPVwiL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzI3VzaW5nLXBvc3QtY3NzLWFzLXlvdXItcHJlcHJvY2Vzc29yXCIgcGFzc0hyZWY+PGE+e2DQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjiBQb3N0Q1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/RgNC10L/RgNC+0YbQtdGB0YHQvtGA0LBgfTwvYT48L19MaW5rPntgINC00LvRjyDQstCy0LXQtNC10L3QuNGPLmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDRjdGC0L4g0LrQsNC20LXRgtGB0Y8g0JLQsNC8INC90LXQv9C+0YHQuNC70YzQvdGL0Lwg0Lgg0JLRiyDRhdC+0YLQuNGC0LUg0L/QvtC/0YDQvtCx0L7QstCw0YLRjCBUYWlsd2luZCDQsdC10Lcg0L3QsNGB0YLRgNC+0LnQutC4IFBvc3RDU1MsINC/0YDQvtGH0YLQuNGC0LUg0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0L3QsNGI0Lgg0LjQvdGB0YLRgNGD0LrRhtC40Lgg0L/QviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjdXNpbmctdGFpbHdpbmQtd2l0aG91dC1wb3N0LWNzc1wiXG4gICAgICAgIH19Pntg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y4gVGFpbHdpbmQg0LHQtdC3IFBvc3RDU1NgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJ1c3Rhbm92aXQtdGFpbHdpbmQtY2hlcmV6LW5wbVwiIHRvYz17dHJ1ZX0+0KPRgdGC0LDQvdC+0LLQuNGC0YwgVGFpbHdpbmQg0YfQtdGA0LXQtyBucG08L19IZWFkaW5nPlxuICAgICAgPHA+e2DQlNC70Y8g0LHQvtC70YzRiNC40L3RgdGC0LLQsCDQv9GA0L7QtdC60YLQvtCyICjQuCDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LLQvtGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINCy0L7Qt9C80L7QttC90L7RgdGC0Y/QvNC4INC90LDRgdGC0YDQvtC50LrQuCBUYWlsd2luZCksINCS0LDQvCDQvdGD0LbQvdC+INGD0YHRgtCw0L3QvtCy0LjRgtGMIFRhaWx3aW5kINC4INC10LPQviDQvtC00L3QvtGA0LDQvdCz0L7QstGL0LUg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDRh9C10YDQtdC3IG5wbS5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgbnBtYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BpbnN0YWxsYH08L3NwYW4+e2AgdGFpbHdpbmRjc3MgcG9zdGNzcyBhdXRvcHJlZml4ZXJgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDIFRhaWx3aW5kIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9icm93c2VyLXN1cHBvcnQjdmVuZG9yLXByZWZpeGVzXCIgcGFzc0hyZWY+PGE+e2DQvdC1INC00L7QsdCw0LLQu9GP0LXRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9GA0LXRhNC40LrRgdGLINC/0L7RgdGC0LDQstGJ0LjQutC+0LJgfTwvYT48L19MaW5rPntgINCyINGB0L7Qt9C00LDQstCw0LXQvNGL0Lkg0LjQvCBDU1MsINC80Ysg0YDQtdC60L7QvNC10L3QtNGD0LXQvCDRg9GB0YLQsNC90L7QstC40YLRjCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXJcIlxuICAgICAgICB9fT57YGF1dG9wcmVmaXhlcmB9PC9hPntgINC00LvRjyDRgNC10YjQtdC90LjRjyDRjdGC0L7QuSDQv9GA0L7QsdC70LXQvNGLINC00LvRjyDQktCw0YEsINC60LDQuiDQvNGLINC/0L7QutCw0LfQsNC70Lgg0LIg0L/RgNC40LLQtdC00LXQvdC90L7QvCDQstGL0YjQtSDRhNGA0LDQs9C80LXQvdGC0LUuYH08L3A+XG4gICAgICA8cD57YNCV0YHQu9C4INCS0Ysg0LjQvdGC0LXQs9GA0LjRgNGD0LXRgtC1IFRhaWx3aW5kINGBINC40L3RgdGC0YDRg9C80LXQvdGC0L7QvCwg0L7RgdC90L7QstCw0L3QvdGL0Lwg0L3QsCDQsdC+0LvQtdC1INGB0YLQsNGA0L7QuSDQstC10YDRgdC40LggUG9zdENTUywg0JLRiyDQvNC+0LbQtdGC0LUg0YPQstC40LTQtdGC0Ywg0YLQsNC60YPRjiDQvtGI0LjQsdC60YM6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19Pntg0J7RiNC40LHQutCwOiDQn9C70LDQs9C40L0gUG9zdENTUyB0YWlsd2luZGNzcyDRgtGA0LXQsdGD0LXRgiBQb3N0Q1NTIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDhgfTwvc3Bhbj57YC5gfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JIg0Y3RgtC+0Lwg0YHQu9GD0YfQsNC1INCS0LDQvCDRgdC70LXQtNGD0LXRgiDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjcG9zdC1jc3MtNy1jb21wYXRpYmlsaXR5LWJ1aWxkXCJcbiAgICAgICAgfX0+e2DRg9GB0YLQsNC90L7QstC40YLRjCDRgdCx0L7RgNC60YMg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0Lgg0YEgUG9zdENTUyA3YH08L2E+e2AuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwiZG9iYXZpdC10YWlsd2luZC1rYWstcGxhZ2luLXBvc3QtY3NzXCIgdG9jPXt0cnVlfT7QlNC+0LHQsNCy0LjRgtGMIFRhaWx3aW5kINC60LDQuiDQv9C70LDQs9C40L0gUG9zdENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCU0L7QsdCw0LLRjNGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmRjc3NgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BhdXRvcHJlZml4ZXJgfTwvaW5saW5lQ29kZT57YCDQsiDQktCw0YjRgyDQutC+0L3RhNC40LPRg9GA0LDRhtC40Y4gUG9zdENTUy4g0JIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC70YPRh9Cw0LXQsiDRjdGC0L4g0YTQsNC50LsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcy5jb25maWcuanNgfTwvaW5saW5lQ29kZT57YCDQsiDQutC+0YDQvdC1INCS0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsCwg0L3QviDRjdGC0L4g0YLQsNC60LbQtSDQvNC+0LbQtdGCINCx0YvRgtGMINGE0LDQudC7IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YC5wb3N0Y3NzcmNgfTwvaW5saW5lQ29kZT57YCDQuNC70Lgg0LrQu9GO0YcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzc2B9PC9pbmxpbmVDb2RlPntgINCyINCS0LDRiNC10Lwg0YTQsNC50LvQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWNrYWdlLmpzb25gfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyBwb3N0Y3NzLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHBsdWdpbnNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIHRhaWx3aW5kY3NzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGF1dG9wcmVmaXhlcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgSWYgeW91IGFyZW4ndCBzdXJlIHdoZXJlIFBvc3RDU1MgcGx1Z2lucyBhcmUgY29uZmlndXJlZCBmb3IgdGhlIHRvb2xzIHlvdSdyZSB1c2luZywgeW91J2xsIHdhbnQgdG8gcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRob3NlIHRvb2xzIHRvIGxlYXJuIHdoZXJlIHRoaXMgc2hvdWxkIGdvLiBBIHNlYXJjaCBmb3IgXCJjb25maWd1cmUgcG9zdGNzcyB7bXkgdG9vbH1cIiB3aWxsIGdldCB5b3UgdGhlIGFuc3dlciBwcmV0dHkgZmFzdCwgdG9vLmB9PC9wPlxuICAgICAgPHA+e2BJZiB5b3UncmUgdXNpbmcgYW55IG90aGVyIFBvc3RDU1MgcGx1Z2lucywgeW91IHNob3VsZCByZWFkIG91ciBkb2N1bWVudGF0aW9uIG9uIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy91c2luZy13aXRoLXByZXByb2Nlc3NvcnNcIiBwYXNzSHJlZj48YT57YHVzaW5nIFBvc3RDU1MgYXMgeW91ciBwcmVwcm9jZXNzb3JgfTwvYT48L19MaW5rPntgIGZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIGJlc3Qgd2F5IHRvIG9yZGVyIHRoZW0gd2l0aCBUYWlsd2luZC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJjcmVhdGUteW91ci1jb25maWd1cmF0aW9uLWZpbGVcIiB0b2M9e3RydWV9PkNyZWF0ZSB5b3VyIGNvbmZpZ3VyYXRpb24gZmlsZTwvX0hlYWRpbmc+XG4gICAgICA8cD57YElmIHlvdSdkIGxpa2UgdG8gY3VzdG9taXplIHlvdXIgVGFpbHdpbmQgaW5zdGFsbGF0aW9uLCBnZW5lcmF0ZSBhIGNvbmZpZyBmaWxlIGZvciB5b3VyIHByb2plY3QgdXNpbmcgdGhlIFRhaWx3aW5kIENMSSB1dGlsaXR5IGluY2x1ZGVkIHdoZW4geW91IGluc3RhbGwgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRhaWx3aW5kY3NzYH08L2lubGluZUNvZGU+e2AgbnBtIHBhY2thZ2U6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzIGluaXRgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgVGhpcyB3aWxsIGNyZWF0ZSBhIG1pbmltYWwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY29uZmlnLmpzYH08L2lubGluZUNvZGU+e2AgZmlsZSBhdCB0aGUgcm9vdCBvZiB5b3VyIHByb2plY3Q6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gdGFpbHdpbmQuY29uZmlnLmpzYH08L3NwYW4+e2Bcbm1vZHVsZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eS1hY2Nlc3NcIlxuICAgICAgICAgICAgfX0+e2BleHBvcnRzYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgcHVyZ2VgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGRhcmtNb2RlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYm9vbGVhblwiXG4gICAgICAgICAgICB9fT57YGZhbHNlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyBvciAnbWVkaWEnIG9yICdjbGFzcydgfTwvc3Bhbj57YFxuICB0aGVtZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgZXh0ZW5kYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIHBsdWdpbnNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YExlYXJuIG1vcmUgYWJvdXQgY29uZmlndXJpbmcgVGFpbHdpbmQgaW4gdGhlIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9jb25maWd1cmF0aW9uXCIgcGFzc0hyZWY+PGE+e2Bjb25maWd1cmF0aW9uIGRvY3VtZW50YXRpb25gfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cImluY2x1ZGUtdGFpbHdpbmQtaW4teW91ci1jc3NcIiB0b2M9e3RydWV9PkluY2x1ZGUgVGFpbHdpbmQgaW4geW91ciBDU1M8L19IZWFkaW5nPlxuICAgICAgPHA+e2BDcmVhdGUgYSBDU1MgZmlsZSBpZiB5b3UgZG9uJ3QgYWxyZWFkeSBoYXZlIG9uZSwgYW5kIHVzZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgQHRhaWx3aW5kYH08L2lubGluZUNvZGU+e2AgZGlyZWN0aXZlIHRvIGluamVjdCBUYWlsd2luZCdzIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGJhc2VgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29tcG9uZW50c2B9PC9pbmxpbmVDb2RlPntgLCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXRpbGl0aWVzYH08L2lubGluZUNvZGU+e2Agc3R5bGVzOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyogLi95b3VyLWNzcy1mb2xkZXIvc3R5bGVzLmNzcyAqL2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQHRhaWx3aW5kYH08L3NwYW4+e2AgYmFzZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCBjb21wb25lbnRzYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIHV0aWxpdGllc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUYWlsd2luZCB3aWxsIHN3YXAgdGhlc2UgZGlyZWN0aXZlcyBvdXQgYXQgYnVpbGQtdGltZSB3aXRoIGFsbCBvZiB0aGUgc3R5bGVzIGl0IGdlbmVyYXRlcyBiYXNlZCBvbiB5b3VyIGNvbmZpZ3VyZWQgZGVzaWduIHN5c3RlbS5gfTwvcD5cbiAgICAgIDxwPntgSWYgeW91J3JlIHVzaW5nIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3Rjc3MtaW1wb3J0YH08L2lubGluZUNvZGU+e2AgKG9yIGEgdG9vbCB0aGF0IHVzZXMgaXQgdW5kZXIgdGhlIGhvb2QsIHN1Y2ggYXMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3JhaWxzL3dlYnBhY2tlclwiXG4gICAgICAgIH19PntgV2VicGFja2VyYH08L2E+e2AgZm9yIFJhaWxzKSwgdXNlIG91ciBpbXBvcnRzIGluc3RlYWQgb2YgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEB0YWlsd2luZGB9PC9pbmxpbmVDb2RlPntgIGRpcmVjdGl2ZSB0byBhdm9pZCBpc3N1ZXMgd2hlbiBpbXBvcnRpbmcgYW55IG9mIHlvdXIgb3duIGFkZGl0aW9uYWwgZmlsZXM6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAaW1wb3J0YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgICB9fT57YFwidGFpbHdpbmRjc3MvYmFzZVwiYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAaW1wb3J0YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgICB9fT57YFwidGFpbHdpbmRjc3MvY29tcG9uZW50c1wiYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAaW1wb3J0YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgICB9fT57YFwidGFpbHdpbmRjc3MvdXRpbGl0aWVzXCJgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YElmIHlvdSdyZSB3b3JraW5nIGluIGEgSmF2YVNjcmlwdCBmcmFtZXdvcmsgbGlrZSBSZWFjdCBvciBWdWUgdGhhdCBzdXBwb3J0cyBkaXJlY3RseSBpbXBvcnRpbmcgQ1NTIGZpbGVzIGludG8geW91ciBKUywgeW91IGNhbiBhbHNvIHNraXAgY3JlYXRpbmcgYSBDU1MgZmlsZSBhbHRvZ2V0aGVyIGFuZCBpbXBvcnQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzYH08L2lubGluZUNvZGU+e2AgaW5zdGVhZCB3aGljaCBoYXMgYWxsIG9mIHRoZXNlIGRpcmVjdGl2ZXMgYWxyZWFkeSBpbiBwbGFjZTpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyBhcHAuanNgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4ga2V5d29yZCBtb2R1bGVcIlxuICAgICAgICAgICAgfX0+e2BpbXBvcnRgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2BcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiYH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cImJ1aWxkaW5nLXlvdXItY3NzXCIgdG9jPXt0cnVlfT5CdWlsZGluZyB5b3VyIENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YEhvdyB5b3UgYWN0dWFsbHkgYnVpbGQgeW91ciBwcm9qZWN0IHdpbGwgZGVwZW5kIG9uIHRoZSB0b29scyB0aGF0IHlvdSdyZSB1c2luZy4gWW91ciBmcmFtZXdvcmsgbWF5IGluY2x1ZGUgYSBjb21tYW5kIGxpa2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnBtIHJ1biBkZXZgfTwvaW5saW5lQ29kZT57YCB0byBzdGFydCBhIGRldmVsb3BtZW50IHNlcnZlciB0aGF0IGNvbXBpbGVzIHlvdXIgQ1NTIGluIHRoZSBiYWNrZ3JvdW5kLCB5b3UgbWF5IGJlIHJ1bm5pbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2VicGFja2B9PC9pbmxpbmVDb2RlPntgIHlvdXJzZWxmLCBvciBtYXliZSB5b3UncmUgdXNpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcy1jbGlgfTwvaW5saW5lQ29kZT57YCBhbmQgcnVubmluZyBhIGNvbW1hbmQgbGlrZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0Y3NzIHN0eWxlcy5jc3MgLW8gY29tcGlsZWQuY3NzYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgICA8cD57YElmIHlvdSdyZSBhbHJlYWR5IGZhbWlsaWFyIHdpdGggUG9zdENTUyB5b3UgcHJvYmFibHkga25vdyB3aGF0IHlvdSBuZWVkIHRvIGRvLCBpZiBub3QgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSB0b29sIHlvdSBhcmUgdXNpbmcuYH08L3A+XG4gICAgICA8cD57YFdoZW4gYnVpbGRpbmcgZm9yIHByb2R1Y3Rpb24sIGJlIHN1cmUgdG8gY29uZmlndXJlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwdXJnZWB9PC9pbmxpbmVDb2RlPntgIG9wdGlvbiB0byByZW1vdmUgYW55IHVudXNlZCBjbGFzc2VzIGZvciB0aGUgc21hbGxlc3QgZmlsZSBzaXplOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWRpZmYtanNcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtZGlmZi1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHVuY2hhbmdlZCBsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggdW5jaGFuZ2VkXCJcbiAgICAgICAgICAgICAgfX0+e2AgYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgICAgfX0+e2AvLyB0YWlsd2luZC5jb25maWcuanNgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggdW5jaGFuZ2VkXCJcbiAgICAgICAgICAgICAgfX0+e2AgYH08L3NwYW4+e2AgbW9kdWxlYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5LWFjY2Vzc1wiXG4gICAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBpbnNlcnRlZC1zaWduIGluc2VydGVkIGxhbmd1YWdlLWpzXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCBpbnNlcnRlZFwiXG4gICAgICAgICAgICAgIH19PntgK2B9PC9zcGFuPntgICAgcHVyZ2VgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCBpbnNlcnRlZFwiXG4gICAgICAgICAgICAgIH19PntgK2B9PC9zcGFuPntgICAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICAgIH19PntgJy4vc3JjLyoqLyouaHRtbCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCBpbnNlcnRlZFwiXG4gICAgICAgICAgICAgIH19PntgK2B9PC9zcGFuPntgICAgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICAgIH19PntgJy4vc3JjLyoqLyouanMnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggaW5zZXJ0ZWRcIlxuICAgICAgICAgICAgICB9fT57YCtgfTwvc3Bhbj57YCAgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdW5jaGFuZ2VkIGxhbmd1YWdlLWpzXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCB1bmNoYW5nZWRcIlxuICAgICAgICAgICAgICB9fT57YCBgfTwvc3Bhbj57YCAgIGRhcmtNb2RlYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYm9vbGVhblwiXG4gICAgICAgICAgICAgIH19PntgZmFsc2VgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICAgIH19PntgLy8gb3IgJ21lZGlhJyBvciAnY2xhc3MnYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgdGhlbWVgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCB1bmNoYW5nZWRcIlxuICAgICAgICAgICAgICB9fT57YCBgfTwvc3Bhbj57YCAgICAgZXh0ZW5kYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggdW5jaGFuZ2VkXCJcbiAgICAgICAgICAgICAgfX0+e2AgYH08L3NwYW4+e2AgICBwbHVnaW5zYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BSZWFkIG91ciBzZXBhcmF0ZSBndWlkZSBvbiBgfTxfTGluayBocmVmPVwiL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvblwiIHBhc3NIcmVmPjxhPntgb3B0aW1pemluZyBmb3IgcHJvZHVjdGlvbmB9PC9hPjwvX0xpbms+e2AgdG8gbGVhcm4gbW9yZSBhYm91dCB0cmVlLXNoYWtpbmcgdW51c2VkIHN0eWxlcyBmb3IgYmVzdCBwZXJmb3JtYW5jZS5gfTwvcD5cbiAgICAgIDxwPntgSWYgeW91J3JlIGludGVncmF0aW5nIFRhaWx3aW5kIHdpdGggYSB0b29sIHRoYXQgcmVsaWVzIG9uIGFuIG9sZGVyIHZlcnNpb24gb2YgUG9zdENTUywgeW91IG1heSBzZWUgYW4gZXJyb3IgbGlrZSB0aGlzIHdoZW4gdHJ5aW5nIHRvIGJ1aWxkIHlvdXIgQ1NTOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT57YEVycm9yOiBQb3N0Q1NTIHBsdWdpbiB0YWlsd2luZGNzcyByZXF1aXJlcyBQb3N0Q1NTIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDhgfTwvc3Bhbj57YC5gfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgSW4gdGhpcyBjYXNlLCB5b3Ugc2hvdWxkIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNwb3N0LWNzcy03LWNvbXBhdGliaWxpdHktYnVpbGRcIlxuICAgICAgICB9fT57YHN3aXRjaCB0byBvdXIgUG9zdENTUyA3IGNvbXBhdGliaWxpdHkgYnVpbGRgfTwvYT57YCBpbnN0ZWFkLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwidXNpbmctdGFpbHdpbmQtd2l0aG91dC1wb3N0LWNzc1wiIHRvYz17dHJ1ZX0+VXNpbmcgVGFpbHdpbmQgd2l0aG91dCBQb3N0Q1NTPC9fSGVhZGluZz5cbiAgICAgIDxwPntgRm9yIHNpbXBsZSBwcm9qZWN0cyBvciBqdXN0IGdpdmluZyBUYWlsd2luZCBhIHNwaW4sIHlvdSBjYW4gdXNlIHRoZSBUYWlsd2luZCBDTEkgdG9vbCB0byBnZW5lcmF0ZSB5b3VyIENTUyB3aXRob3V0IGNvbmZpZ3VyaW5nIFBvc3RDU1Mgb3IgZXZlbiBpbnN0YWxsaW5nIFRhaWx3aW5kIGFzIGEgZGVwZW5kZW5jeSBpZiB5b3UgZG9uJ3Qgd2FudCB0by5gfTwvcD5cbiAgICAgIDxwPntgVXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5weGB9PC9pbmxpbmVDb2RlPntgIHdoaWNoIGlzIGEgdG9vbCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgaW5zdGFsbGVkIGFsb25nc2lkZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BucG1gfTwvaW5saW5lQ29kZT57YCB0byBnZW5lcmF0ZSBhIGZ1bGx5IGNvbXBpbGVkIFRhaWx3aW5kIENTUyBmaWxlOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT57YG5weCB0YWlsd2luZGNzcy1jbGlAbGF0ZXN0IGJ1aWxkIC1vIHRhaWx3aW5kLmNzc2B9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUaGlzIHdpbGwgY3JlYXRlIGEgZmlsZSBjYWxsZWQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY3NzYH08L2lubGluZUNvZGU+e2AgZ2VuZXJhdGVkIGJhc2VkIG9uIFRhaWx3aW5kJ3MgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL3RhaWx3aW5kY3NzQCU1RTIvc3R1YnMvZGVmYXVsdENvbmZpZy5zdHViLmpzXCJcbiAgICAgICAgfX0+e2BkZWZhdWx0IGNvbmZpZ3VyYXRpb25gfTwvYT57YCwgYW5kIGF1dG9tYXRpY2FsbHkgYWRkIGFueSBuZWNlc3NhcnkgdmVuZG9yIHByZWZpeGVzIHVzaW5nIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlclwiXG4gICAgICAgIH19PntgYXV0b3ByZWZpeGVyYH08L2E+e2AuYH08L3A+XG4gICAgICA8cD57YE5vdyB5b3UgY2FuIHB1bGwgdGhpcyBmaWxlIGludG8geW91ciBIVE1MIGp1c3QgbGlrZSBhbnkgb3RoZXIgc3R5bGVzaGVldDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBkb2N0eXBlXCJcbiAgICAgICAgICAgIH19PntgPCFkb2N0eXBlIGh0bWw+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGh0bWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgaGVhZGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2A8IS0tIC4uLiAtLT5gfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BtZXRhYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNoYXJzZXRgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgVVRGLThgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLz5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgbWV0YWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BuYW1lYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHZpZXdwb3J0YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2Bjb250ZW50YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHdpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgLz5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgbGlua2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BocmVmYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YC90YWlsd2luZC5jc3NgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YHJlbGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2BzdHlsZXNoZWV0YH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgaGVhZGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2Bib2R5YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YDwhLS0gLi4uIC0tPmB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgYm9keWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgaHRtbGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJ1c2luZy1hLWN1c3RvbS1jc3MtZmlsZVwiIHRvYz17dHJ1ZX0+VXNpbmcgYSBjdXN0b20gQ1NTIGZpbGU8L19IZWFkaW5nPlxuICAgICAgPHA+e2BJZiB5b3UnZCBsaWtlIHRvIHByb2Nlc3MgYW55IGN1c3RvbSBDU1MgYWxvbmdzaWRlIHRoZSBkZWZhdWx0IHN0eWxlcyBUYWlsd2luZCBnZW5lcmF0ZXMsIGNyZWF0ZSBhIENTUyBmaWxlIHdoZXJldmVyIHlvdSBub3JtYWxseSB3b3VsZCBhbmQgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BAdGFpbHdpbmRgfTwvaW5saW5lQ29kZT57YCBkaXJlY3RpdmUgdG8gaW5jbHVkaW5nIFRhaWx3aW5kJ3MgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgYmFzZWB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bjb21wb25lbnRzYH08L2lubGluZUNvZGU+e2AsIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1dGlsaXRpZXNgfTwvaW5saW5lQ29kZT57YCBzdHlsZXM6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvKiAuL3NyYy90YWlsd2luZC5jc3MgKi9gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIGJhc2VgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQHRhaWx3aW5kYH08L3NwYW4+e2AgY29tcG9uZW50c2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5idG5gfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlIGF0YXBwbHlcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGFwcGx5YH08L3NwYW4+e2AgcHgtNCBweS0yIGJnLWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29sb3JcIlxuICAgICAgICAgICAgICB9fT57YGJsdWVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBudW1iZXJcIlxuICAgICAgICAgICAgICB9fT57YC02MDBgfTwvc3Bhbj57YCB0ZXh0LWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29sb3JcIlxuICAgICAgICAgICAgICB9fT57YHdoaXRlYH08L3NwYW4+e2Agcm91bmRlZGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCB1dGlsaXRpZXNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgVGhlbiBpbmNsdWRlIHRoZSBwYXRoIHRvIHRoYXQgZmlsZSB3aGVuIGJ1aWxkaW5nIHlvdXIgQ1NTIHdpdGggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnB4IHRhaWx3aW5kY3NzIGJ1aWxkYH08L2lubGluZUNvZGU+e2A6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1vIC4vZGlzdC90YWlsd2luZC5jc3NgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgUmVhZCBhYm91dCBgfTxfTGluayBocmVmPVwiL2RvY3MvYWRkaW5nLWJhc2Utc3R5bGVzXCIgcGFzc0hyZWY+PGE+e2BhZGRpbmcgYmFzZSBzdHlsZXNgfTwvYT48L19MaW5rPntgLCBgfTxfTGluayBocmVmPVwiL2RvY3MvZXh0cmFjdGluZy1jb21wb25lbnRzXCIgcGFzc0hyZWY+PGE+e2BleHRyYWN0aW5nIGNvbXBvbmVudHNgfTwvYT48L19MaW5rPntgLCBhbmQgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2FkZGluZy1uZXctdXRpbGl0aWVzXCIgcGFzc0hyZWY+PGE+e2BhZGRpbmcgbmV3IHV0aWxpdGllc2B9PC9hPjwvX0xpbms+e2AgdG8gbGVhcm4gbW9yZSBhYm91dCBhZGRpbmcgY3VzdG9tIENTUyBvbiB0b3Agb2YgVGFpbHdpbmQuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwiY3VzdG9taXppbmcteW91ci1jb25maWd1cmF0aW9uXCIgdG9jPXt0cnVlfT5DdXN0b21pemluZyB5b3VyIGNvbmZpZ3VyYXRpb248L19IZWFkaW5nPlxuICAgICAgPHA+e2BJZiB5b3UnZCBsaWtlIHRvIGN1c3RvbWl6ZSB3aGF0IFRhaWx3aW5kIGdlbmVyYXRlcywgY3JlYXRlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY29uZmlnLmpzYH08L2lubGluZUNvZGU+e2AgZmlsZSB1c2luZyB0aGUgVGFpbHdpbmQgQ0xJIHRvb2w6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgaW5pdGB9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUaGlzIHdpbGwgY3JlYXRlIGEgbWluaW1hbCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0YWlsd2luZC5jb25maWcuanNgfTwvaW5saW5lQ29kZT57YCBmaWxlIGF0IHRoZSByb290IG9mIHlvdXIgcHJvamVjdDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyB0YWlsd2luZC5jb25maWcuanNgfTwvc3Bhbj57YFxubW9kdWxlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AuYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5LWFjY2Vzc1wiXG4gICAgICAgICAgICB9fT57YGV4cG9ydHNgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICBwdXJnZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgZGFya01vZGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBib29sZWFuXCJcbiAgICAgICAgICAgIH19PntgZmFsc2VgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIG9yICdtZWRpYScgb3IgJ2NsYXNzJ2B9PC9zcGFuPntgXG4gIHRoZW1lYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBleHRlbmRgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICB2YXJpYW50c2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgcGx1Z2luc2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgVGhpcyBmaWxlIHdpbGwgYXV0b21hdGljYWxseSBiZSByZWFkIHdoZW4gYnVpbGRpbmcgeW91ciBDU1Mgd2l0aCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BucHggdGFpbHdpbmRjc3MgYnVpbGRgfTwvaW5saW5lQ29kZT57YDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+e2BucHggdGFpbHdpbmRjc3MtY2xpQGxhdGVzdCBidWlsZCAuL3NyYy90YWlsd2luZC5jc3MgLW8gLi9kaXN0L3RhaWx3aW5kLmNzc2B9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BJZiB5b3UnZCBsaWtlIHRvIGtlZXAgeW91ciBjb25maWcgZmlsZSBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiBvciBnaXZlIGl0IGEgZGlmZmVyZW50IG5hbWUsIHBhc3MgdGhlIGNvbmZpZyBmaWxlIHBhdGggdXNpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YC1jYH08L2lubGluZUNvZGU+e2Agb3B0aW9uIHdoZW4gYnVpbGRpbmcgeW91ciBDU1M6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1jIC4vLmNvbmZpZy90YWlsd2luZC5jb25maWcuanMgLW8gLi9kaXN0L3RhaWx3aW5kLmNzc2B9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BMZWFybiBtb3JlIGFib3V0IGNvbmZpZ3VyaW5nIFRhaWx3aW5kIGluIHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvY29uZmlndXJhdGlvblwiIHBhc3NIcmVmPjxhPntgY29uZmlndXJhdGlvbiBkb2N1bWVudGF0aW9uYH08L2E+PC9fTGluaz57YC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJidWlsZGluZy1mb3ItcHJvZHVjdGlvblwiIHRvYz17dHJ1ZX0+QnVpbGRpbmcgZm9yIHByb2R1Y3Rpb248L19IZWFkaW5nPlxuICAgICAgPHA+e2BXaGVuIGJ1aWxkaW5nIGZvciBwcm9kdWN0aW9uLCBzZXQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTk9ERV9FTlY9cHJvZHVjdGlvbmB9PC9pbmxpbmVDb2RlPntgIG9uIHRoZSBjb21tYW5kIGxpbmUgd2hlbiBidWlsZGluZyB5b3VyIENTUzpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGFzc2lnbi1sZWZ0IHZhcmlhYmxlXCJcbiAgICAgICAgICAgIH19PntgTk9ERV9FTlZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2Bwcm9kdWN0aW9uIG5weCB0YWlsd2luZGNzcy1jbGlAbGF0ZXN0IGJ1aWxkIC4vc3JjL3RhaWx3aW5kLmNzcyAtbyAuL2Rpc3QvdGFpbHdpbmQuY3NzYH08L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFRoaXMgd2lsbCBtYWtlIHN1cmUgVGFpbHdpbmQgcmVtb3ZlcyBhbnkgdW51c2VkIENTUyBhbmQgbWluaWZpZXMgdGhlIENTUyBmaWxlIGZvciBiZXN0IHBlcmZvcm1hbmNlLiBSZWFkIG91ciBzZXBhcmF0ZSBndWlkZSBvbiBgfTxfTGluayBocmVmPVwiL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvblwiIHBhc3NIcmVmPjxhPntgb3B0aW1pemluZyBmb3IgcHJvZHVjdGlvbmB9PC9hPjwvX0xpbms+e2AgdG8gbGVhcm4gbW9yZS5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cInVzaW5nLXRhaWx3aW5kLXZpYS1jZG5cIiB0b2M9e3RydWV9PlVzaW5nIFRhaWx3aW5kIHZpYSBDRE48L19IZWFkaW5nPlxuICAgICAgPHA+e2BCZWZvcmUgdXNpbmcgdGhlIENETiBidWlsZCwgcGxlYXNlIG5vdGUgdGhhdCBtYW55IG9mIHRoZSBmZWF0dXJlcyB0aGF0IG1ha2UgVGFpbHdpbmQgQ1NTIGdyZWF0IGFyZSBub3QgYXZhaWxhYmxlIHdpdGhvdXQgaW5jb3Jwb3JhdGluZyBUYWlsd2luZCBpbnRvIHlvdXIgYnVpbGQgcHJvY2Vzcy5gfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8TGlzdCBtZHhUeXBlPVwiTGlzdFwiPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+WW91IGNhbid0IGN1c3RvbWl6ZSBUYWlsd2luZCdzIGRlZmF1bHQgdGhlbWU8L0xpc3RJdGVtQmFkPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+WW91IGNhbid0IHVzZSBhbnkgPGEgaHJlZj1cIi9kb2NzL2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlc1wiPmRpcmVjdGl2ZXM8L2E+IGxpa2UgPGNvZGU+QGFwcGx5PC9jb2RlPiwgPGNvZGU+QHZhcmlhbnRzPC9jb2RlPiwgZXRjLjwvTGlzdEl0ZW1CYWQ+XG4gIDxMaXN0SXRlbUJhZCBtZHhUeXBlPVwiTGlzdEl0ZW1CYWRcIj5Zb3UgY2FuJ3QgZW5hYmxlIGFkZGl0aW9uYWwgdmFyaWFudHMgbGlrZSA8YSBocmVmPVwiL2RvY3MvaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyNncm91cC1mb2N1c1wiPjxjb2RlPmdyb3VwLWZvY3VzPC9jb2RlPjwvYT48L0xpc3RJdGVtQmFkPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+WW91IGNhbid0IGluc3RhbGwgdGhpcmQtcGFydHkgcGx1Z2luczwvTGlzdEl0ZW1CYWQ+XG4gIDxMaXN0SXRlbUJhZCBtZHhUeXBlPVwiTGlzdEl0ZW1CYWRcIj5Zb3UgY2FuJ3QgdHJlZS1zaGFrZSB1bnVzZWQgc3R5bGVzPC9MaXN0SXRlbUJhZD5cbiAgICA8L0xpc3Q+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPHA+e2BUbyBnZXQgdGhlIG1vc3Qgb3V0IG9mIFRhaWx3aW5kLCB5b3UgcmVhbGx5IHNob3VsZCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjaW5zdGFsbGluZy10YWlsd2luZC1hcy1hLXBvc3QtY3NzLXBsdWdpblwiXG4gICAgICAgIH19PntgaW5zdGFsbCBpdCBhcyBhIFBvc3RDU1MgcGx1Z2luYH08L2E+e2AuYH08L3A+XG4gICAgICA8cD57YFRvIHB1bGwgaW4gVGFpbHdpbmQgZm9yIHF1aWNrIGRlbW9zIG9yIGp1c3QgZ2l2aW5nIHRoZSBmcmFtZXdvcmsgYSBzcGluLCBncmFiIHRoZSBsYXRlc3QgZGVmYXVsdCBjb25maWd1cmF0aW9uIGJ1aWxkIHZpYSBDRE46YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgbGlua2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BocmVmYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YGh0dHBzOi8vdW5wa2cuY29tL3RhaWx3aW5kY3NzQF4yL2Rpc3QvdGFpbHdpbmQubWluLmNzc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgcmVsYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHN0eWxlc2hlZXRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+XG4gIE5vdGUgdGhhdCB3aGlsZSB0aGUgQ0ROIGJ1aWxkIGlzIGxhcmdlIDxlbT4oe3N0YXRzLmRlZmF1bHQuYnJvdGxpZmllZH0gY29tcHJlc3NlZCwge3N0YXRzLmRlZmF1bHQubWluaWZpZWR9IHJhdyk8L2VtPiwgPHN0cm9uZz5pdCdzIG5vdCByZXByZXNlbnRhdGl2ZSBvZiB0aGUgc2l6ZXMgeW91IHNlZSB3aGVuIGluY2x1ZGluZyBUYWlsd2luZCBhcyBwYXJ0IG9mIHlvdXIgYnVpbGQgcHJvY2Vzczwvc3Ryb25nPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPntgU2l0ZXMgdGhhdCBmb2xsb3cgb3VyIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9vcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uXCIgcGFzc0hyZWY+PGE+e2BiZXN0IHByYWN0aWNlc2B9PC9hPjwvX0xpbms+e2AgYXJlIGFsbW9zdCBhbHdheXMgdW5kZXIgMTBrYiBjb21wcmVzc2VkLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiaHRtbC1zdGFydGVyLXRlbXBsYXRlXCIgdG9jPXt0cnVlfT5IVE1MIHN0YXJ0ZXIgdGVtcGxhdGU8L19IZWFkaW5nPlxuICAgICAgPHA+e2BGb3IgVGFpbHdpbmQncyBzdHlsZXMgdG8gd29yayBhcyBleHBlY3RlZCwgeW91J2xsIHdhbnQgdG8gdXNlIHRoZSBIVE1MNSBkb2N0eXBlIGFuZCBpbmNsdWRlIHRoZSByZXNwb25zaXZlIHZpZXdwb3J0IG1ldGEgdGFnIHRvIHByb3Blcmx5IGhhbmRsZSByZXNwb25zaXZlIHN0eWxlcyBvbiBhbGwgZGV2aWNlcy5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBkb2N0eXBlXCJcbiAgICAgICAgICAgIH19PntgPCFkb2N0eXBlIGh0bWw+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGh0bWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgaGVhZGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YG1ldGFgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2hhcnNldGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2BVVEYtOGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BtZXRhYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YG5hbWVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgdmlld3BvcnRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNvbnRlbnRgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BsaW5rYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGhyZWZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgL3BhdGgvdG8vdGFpbHdpbmQuY3NzYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2ByZWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgc3R5bGVzaGVldGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BoZWFkYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGJvZHlgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2Bib2R5YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BodG1sYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BNYW55IGZyb250LWVuZCBmcmFtZXdvcmtzIGxpa2UgTmV4dC5qcywgdnVlLWNsaSBhbmQgb3RoZXJzIGRvIGFsbCB0aGlzIGZvciB5b3UgYmVoaW5kIHRoZSBzY2VuZXMgYXV0b21hdGljYWxseSwgc28gZGVwZW5kaW5nIG9uIHdoYXQgeW91J3JlIGJ1aWxkaW5nIHlvdSBtaWdodCBub3QgbmVlZCB0byBzZXQgdGhpcyB1cC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cInBvc3QtY3NzLTctY29tcGF0aWJpbGl0eS1idWlsZFwiIHRvYz17dHJ1ZX0+UG9zdENTUyA3IGNvbXBhdGliaWxpdHkgYnVpbGQ8L19IZWFkaW5nPlxuICAgICAgPHA+e2BBcyBvZiB2Mi4wLCBUYWlsd2luZCBDU1MgZGVwZW5kcyBvbiBQb3N0Q1NTIDguIEJlY2F1c2UgUG9zdENTUyA4IGlzIG9ubHkgYSBmZXcgbW9udGhzIG9sZCwgbWFueSBvdGhlciB0b29scyBpbiB0aGUgZWNvc3lzdGVtIGhhdmVuJ3QgdXBkYXRlZCB5ZXQsIHdoaWNoIG1lYW5zIHlvdSBtaWdodCBzZWUgYW4gZXJyb3IgbGlrZSB0aGlzIGluIHlvdXIgdGVybWluYWwgYWZ0ZXIgaW5zdGFsbGluZyBUYWlsd2luZCBhbmQgdHJ5aW5nIHRvIGNvbXBpbGUgeW91ciBDU1M6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgRXJyb3I6IFBvc3RDU1MgcGx1Z2luIHRhaWx3aW5kY3NzIHJlcXVpcmVzIFBvc3RDU1MgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gbnVtYmVyXCJcbiAgICAgICAgICAgIH19PntgOGB9PC9zcGFuPntgLmB9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUbyBoZWxwIGJyaWRnZSB0aGUgZ2FwIHVudGlsIGV2ZXJ5b25lIGhhcyB1cGRhdGVkLCB3ZSBhbHNvIHB1Ymxpc2ggYSBQb3N0Q1NTIDcgY29tcGF0aWJpbGl0eSBidWlsZCB1bmRlciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29tcGF0YH08L2lubGluZUNvZGU+e2AgY2hhbm5lbCBvbiBucG0uYH08L3A+XG4gICAgICA8cD57YElmIHlvdSBydW4gaW50byB0aGUgZXJyb3IgbWVudGlvbmVkIGFib3ZlLCB1bmluc3RhbGwgVGFpbHdpbmQgYW5kIHJlLWluc3RhbGwgdXNpbmcgdGhlIGNvbXBhdGliaWxpdHkgYnVpbGQgaW5zdGVhZDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgbnBtYH08L3NwYW4+e2AgdW5pbnN0YWxsIHRhaWx3aW5kY3NzIHBvc3Rjc3MgYXV0b3ByZWZpeGVyXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YG5wbWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgaW5zdGFsbGB9PC9zcGFuPntgIHRhaWx3aW5kY3NzQG5wbTpAdGFpbHdpbmRjc3MvcG9zdGNzczctY29tcGF0IHBvc3Rjc3NAXjcgYXV0b3ByZWZpeGVyQF45YH08L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFRoZSBjb21wYXRpYmlsaXR5IGJ1aWxkIGlzIGlkZW50aWNhbCB0byB0aGUgbWFpbiBidWlsZCBpbiBldmVyeSB3YXksIHNvIHlvdSBhcmVuJ3QgbWlzc2luZyBvdXQgb24gYW55IGZlYXR1cmVzIG9yIGFueXRoaW5nIGxpa2UgdGhhdC5gfTwvcD5cbiAgICAgIDxwPntgT25jZSB0aGUgcmVzdCBvZiB5b3VyIHRvb2xzIGhhdmUgYWRkZWQgc3VwcG9ydCBmb3IgUG9zdENTUyA4LCB5b3UgY2FuIG1vdmUgb2ZmIG9mIHRoZSBjb21wYXRpYmlsaXR5IGJ1aWxkIGJ5IHJlLWluc3RhbGxpbmcgVGFpbHdpbmQgYW5kIGl0cyBwZWVyLWRlcGVuZGVuY2llcyB1c2luZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbGF0ZXN0YH08L2lubGluZUNvZGU+e2AgdGFnOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BucG1gfTwvc3Bhbj57YCB1bmluc3RhbGwgdGFpbHdpbmRjc3MgQHRhaWx3aW5kY3NzL3Bvc3Rjc3M3LWNvbXBhdFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BucG1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YGluc3RhbGxgfTwvc3Bhbj57YCB0YWlsd2luZGNzc0BsYXRlc3QgcG9zdGNzc0BsYXRlc3QgYXV0b3ByZWZpeGVyQGxhdGVzdGB9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9