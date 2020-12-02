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
    "title": "Создайте свой файл конфигурации",
    "slug": "sozdajte-svoj-fajl-konfiguraczii"
  }, {
    "title": "Включите Tailwind в свой CSS",
    "slug": "vklyuchite-tailwind-v-svoj-css"
  }, {
    "title": "Создание Вашего CSS",
    "slug": "sozdanie-vashego-css"
  }]
}, {
  "title": "Использование Tailwind без PostCSS",
  "slug": "ispolzovanie-tailwind-bez-post-css",
  "children": [{
    "title": "Использование собственного файла CSS",
    "slug": "ispolzovanie-sobstvennogo-fajla-css"
  }, {
    "title": "Настройка Вашей конфигурации",
    "slug": "nastrojka-vashej-konfiguraczii"
  }, {
    "title": "Сборка для продакшена",
    "slug": "sborka-dlya-prodakshena"
  }]
}, {
  "title": "Использование Tailwind через CDN",
  "slug": "ispolzovanie-tailwind-cherez-cdn",
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
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0433\u0434\u0435 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043B\u0430\u0433\u0438\u043D\u044B PostCSS \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0412\u0430\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u044D\u0442\u0438\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C, \u0433\u0434\u0435 \u044D\u0442\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C. \u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \"configure postcss {my tool}\" \u0442\u043E\u0436\u0435 \u0434\u0430\u0441\u0442 \u0412\u0430\u043C \u043E\u0442\u0432\u0435\u0442 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B PostCSS, \u0412\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043D\u0430\u0448\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/using-with-preprocessors",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 112
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 166
    }
  }, "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E PostCSS \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430")), " \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0445 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Tailwind."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "sozdajte-svoj-fajl-konfiguraczii",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 Tailwind, \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0443\u0442\u0438\u043B\u0438\u0442\u044B Tailwind CLI, \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043F\u0430\u043A\u0435\u0442\u0430 npm ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 177
    }
  }, "tailwindcss"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u042D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 43
    }
  }, "tailwind.config.js"), " \u0432 \u043A\u043E\u0440\u043D\u0435 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }), "// \u0438\u043B\u0438 'media' \u0438\u043B\u0438 'class'"), "\n  theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 Tailwind \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuration",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 52
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 95
    }
  }, "\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "vklyuchite-tailwind-v-svoj-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 Tailwind \u0432 \u0441\u0432\u043E\u0439 CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B CSS, \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0433\u043E \u0435\u0449\u0435 \u043D\u0435\u0442, \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 81
    }
  }, "@tailwind"), " \u0434\u043B\u044F \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 Tailwind ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 169
    }
  }, "base"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 223
    }
  }, "components"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 284
    }
  }, "utilities"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "Tailwind \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u044D\u0442\u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u043D\u0430 \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u043D \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0412\u0430\u0448\u0435\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u0434\u0438\u0437\u0430\u0439\u043D-\u0441\u0438\u0441\u0442\u0435\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 34
    }
  }, "postcss-import"), " (\u0438\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0435\u0433\u043E \u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u043E\u043C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/rails/webpacker"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 159
    }
  }), "Webpacker"), " \u0434\u043B\u044F Rails), \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043D\u0430\u0448 \u0438\u043C\u043F\u043E\u0440\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 86
    }
  }, "@tailwind"), ", \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0435 \u043B\u044E\u0431\u044B\u0445 \u0412\u0430\u0448\u0438\u0445 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435 \u0432 \u0441\u0440\u0435\u0434\u0435 JavaScript, \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u043A React \u0438\u043B\u0438 Vue, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u044F\u043C\u043E\u0439 \u0438\u043C\u043F\u043E\u0440\u0442 \u0444\u0430\u0439\u043B\u043E\u0432 CSS \u0432 \u0412\u0430\u0448 JS, \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430 CSS \u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 221
    }
  }, "tailwindcss/tailwind.css"), ", \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u0441\u0435 \u044D\u0442\u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u043C\u0435\u0441\u0442\u043E:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    id: "sozdanie-vashego-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 7
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0412\u0430\u0448\u0435\u0433\u043E CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 7
    }
  }, "\u0422\u043E, \u043A\u0430\u043A \u0412\u044B \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442, \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044C \u043E\u0442 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435. \u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0442\u0438\u043F\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 160
    }
  }, "npm run dev"), " \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u0442 \u0412\u0430\u0448 CSS \u0432 \u0444\u043E\u043D\u043E\u0432\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 318
    }
  }, "webpack"), " \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E, \u0438\u043B\u0438, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C, \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 422
    }
  }, "postcss-cli"), " \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435 \u0442\u0430\u043A\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443, \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 514
    }
  }, "postcss styles.css -o compiled.css"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u043A\u043E\u043C\u044B \u0441 PostCSS, \u0412\u044B, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, "\u041F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 70
    }
  }, "purge"), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u043A\u043B\u0430\u0441\u0441\u044B \u0434\u043B\u044F \u0444\u0430\u0439\u043B\u0430 \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }), "// \u0438\u043B\u0438 'media' \u0438\u043B\u0438 'class'"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u041F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 53
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 108
    }
  }, "\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0434\u0440\u0435\u0432\u043E\u0432\u0438\u0434\u043D\u044B\u0445 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0441\u0442\u0438\u043B\u044F\u0445 \u0434\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0435 Tailwind \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0431\u043E\u043B\u0435\u0435 \u0441\u0442\u0430\u0440\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 PostCSS, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0442\u0430\u043A\u0443\u044E \u043E\u0448\u0438\u0431\u043A\u0443 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0439 CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }), "\u041E\u0448\u0438\u0431\u043A\u0430: \u041F\u043B\u0430\u0433\u0438\u043D PostCSS tailwindcss \u0442\u0440\u0435\u0431\u0443\u0435\u0442 PostCSS ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0412\u0430\u043C \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#post-css-7-compatibility-build"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 53
    }
  }), "\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u0430\u0448\u0443 \u0441\u0431\u043E\u0440\u043A\u0443 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438 \u0441 PostCSS 7"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "ispolzovanie-tailwind-bez-post-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Tailwind \u0431\u0435\u0437 PostCSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 7
    }
  }, "\u0414\u043B\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C Tailwind, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 Tailwind CLI \u0434\u043B\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 CSS \u0431\u0435\u0437 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 PostCSS \u0438\u043B\u0438 \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 Tailwind \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438, \u0435\u0441\u043B\u0438 \u0412\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 26
    }
  }, "npx"), ", \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 138
    }
  }, "npm"), ", \u0447\u0442\u043E\u0431\u044B \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B CSS Tailwind:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u042D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 40
    }
  }, "tailwind.css"), " , \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://unpkg.com/browse/tailwindcss@%5E2/stubs/defaultConfig.stub.js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 129
    }
  }), "\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Tailwind \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"), ", \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442 \u043B\u044E\u0431\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043E\u0432 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/postcss/autoprefixer"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 142
    }
  }), "autoprefixer"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 7
    }
  }, "\u0422\u0435\u043F\u0435\u0440\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0432 \u0441\u0432\u043E\u0439 HTML, \u043A\u0430\u043A \u0438 \u043B\u044E\u0431\u0443\u044E \u0434\u0440\u0443\u0433\u0443\u044E \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0441\u0442\u0438\u043B\u0435\u0439:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    id: "ispolzovanie-sobstvennogo-fajla-css",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 CSS \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u043E \u0441\u0442\u0438\u043B\u044F\u043C\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 Tailwind, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B CSS \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 181
    }
  }, "@tailwind"), " \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 Tailwind ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 269
    }
  }, "base"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 323
    }
  }, "components"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 384
    }
  }, "utilities"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u0417\u0430\u0442\u0435\u043C \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0443\u0442\u044C \u043A \u044D\u0442\u043E\u043C\u0443 \u0444\u0430\u0439\u043B\u0443 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 CSS \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 74
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
  }, "\u041F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0431\u0430\u0437\u043E\u0432\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439")), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/extracting-components",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 123
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 174
    }
  }, "\u0438\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432")), ", \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-new-utilities",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 223
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 273
    }
  }, "\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u0443\u0442\u0438\u043B\u0438\u0442")), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E CSS \u043F\u043E\u0432\u0435\u0440\u0445 Tailwind."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "nastrojka-vashej-konfiguraczii",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 7
    }
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0412\u0430\u0448\u0435\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u043E, \u0447\u0442\u043E \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442 Tailwind, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 82
    }
  }, "tailwind.config.js"), " \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 Tailwind CLI:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u042D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0441\u0442 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0430\u0439\u043B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 43
    }
  }, "tailwind.config.js"), " \u0432 \u043A\u043E\u0440\u043D\u0435 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }), "// \u0438\u043B\u0438 'media' \u0438\u043B\u0438 'class'"), "\n  theme", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u042D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E CSS \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 87
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
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0438\u043B\u0438 \u0434\u0430\u0442\u044C \u0435\u043C\u0443 \u0434\u0440\u0443\u0433\u043E\u0435 \u0438\u043C\u044F, \u043F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u043F\u0443\u0442\u044C \u043A \u0444\u0430\u0439\u043B\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 153
    }
  }, "-c"), " \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 Tailwind \u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/configuration",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 52
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 95
    }
  }, "\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "sborka-dlya-prodakshena",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 7
    }
  }, "\u0421\u0431\u043E\u0440\u043A\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 7
    }
  }, "\u041F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 53
    }
  }, "NODE_ENV=production"), " \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435 CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "\u042D\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043E Tailwind \u0443\u0434\u0430\u043B\u0438\u0442 \u0432\u0441\u0435 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 CSS \u0438 \u043C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043B CSS \u0434\u043B\u044F \u043B\u0443\u0447\u0448\u0435\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 168
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 223
    }
  }, "\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")), ", \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "ispolzovanie-tailwind-cherez-cdn",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 7
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Tailwind \u0447\u0435\u0440\u0435\u0437 CDN"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 7
    }
  }, "\u041F\u0435\u0440\u0435\u0434 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0431\u043E\u0440\u043A\u0438 CDN \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043C\u043D\u043E\u0433\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0435\u043B\u0430\u044E\u0442 Tailwind CSS \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C, \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0431\u0435\u0437 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F Tailwind \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0441\u0431\u043E\u0440\u043A\u0438.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["List"], {
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
  }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u0435\u043C\u0443 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Tailwind"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 3
    }
  }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "/docs/functions-and-directives",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 70
    }
  }, "\u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B"), ", \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 130
    }
  }, "@apply"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 151
    }
  }, "@variants"), " \u0438 \u0442.\u0434."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 3
    }
  }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "/docs/hover-focus-and-other-states#group-focus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 94
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 151
    }
  }, "group-focus"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 3
    }
  }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u043F\u043B\u0430\u0433\u0438\u043D\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_List__WEBPACK_IMPORTED_MODULE_8__["ListItemBad"], {
    mdxType: "ListItemBad",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 3
    }
  }, "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0441\u0442\u0438\u043B\u0435\u0439")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
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
  }, "\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u043E\u0442 Tailwind, \u0412\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043B\u0435\u0434\u0443\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "#installing-tailwind-as-a-post-css-plugin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 88
    }
  }), "\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043B\u0430\u0433\u0438\u043D PostCSS"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 7
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C Tailwind \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0439 \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0447\u0435\u0440\u0435\u0437 CDN:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, "Not\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E, \u0445\u043E\u0442\u044F \u0441\u0431\u043E\u0440\u043A\u0430 CDN \u0432\u0435\u043B\u0438\u043A\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 53
    }
  }, "(", _utils_stats__WEBPACK_IMPORTED_MODULE_10___default.a.default.brotlified, " \u0432 \u0441\u0436\u0430\u0442\u043E\u043C \u0432\u0438\u0434\u0435, ", _utils_stats__WEBPACK_IMPORTED_MODULE_10___default.a.default.minified, " \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C)"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 143
    }
  }, "\u043E\u043D\u0430 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u0440\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 Tailwind \u043A\u0430\u043A \u0447\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043E\u0440\u043A\u0438."), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 7
    }
  }, "\u0421\u0430\u0439\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0442 \u043D\u0430\u0448\u0438\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/optimizing-for-production",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 43
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 98
    }
  }, "\u043B\u0443\u0447\u0448\u0438\u043C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430\u043C")), ", \u043F\u043E\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u043C\u0435\u044E\u0442 \u043F\u043E\u0441\u043B\u0435 \u0441\u0436\u0430\u0442\u0438\u044F \u043C\u0435\u043D\u0435\u0435 10\u041A\u0411."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5zdGFsbGF0aW9uLm1keCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJfTGF5b3V0IiwibWV0YSIsInRhYmxlT2ZDb250ZW50cyIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiX0RlZmF1bHQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwic3RhdHMiLCJkZWZhdWx0IiwiYnJvdGxpZmllZCIsIm1pbmlmaWVkIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLGdGQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1gsV0FBUyxXQURFO0FBRVgsaUJBQWU7QUFGSixDQUFiO0FBSUEsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUywyQkFEYztBQUV2QixVQUFRLDRCQUZlO0FBR3ZCLGNBQVk7QUFIVyxDQUFELEVBSXJCO0FBQ0QsV0FBUyxtREFEUjtBQUVELFVBQVEscURBRlA7QUFHRCxjQUFZLENBQUM7QUFDWCxhQUFTLCtCQURFO0FBRVgsWUFBUTtBQUZHLEdBQUQsRUFHVDtBQUNELGFBQVMsc0NBRFI7QUFFRCxZQUFRO0FBRlAsR0FIUyxFQU1UO0FBQ0QsYUFBUyxpQ0FEUjtBQUVELFlBQVE7QUFGUCxHQU5TLEVBU1Q7QUFDRCxhQUFTLDhCQURSO0FBRUQsWUFBUTtBQUZQLEdBVFMsRUFZVDtBQUNELGFBQVMscUJBRFI7QUFFRCxZQUFRO0FBRlAsR0FaUztBQUhYLENBSnFCLEVBdUJyQjtBQUNELFdBQVMsb0NBRFI7QUFFRCxVQUFRLG9DQUZQO0FBR0QsY0FBWSxDQUFDO0FBQ1gsYUFBUyxzQ0FERTtBQUVYLFlBQVE7QUFGRyxHQUFELEVBR1Q7QUFDRCxh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REFGRixDQUZILENBaE9GLENBbndCSyxDQUFQO0FBcS9CRDtLQXovQnVCTixVO0FBMi9CeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCO0FBQ0FQLFVBQVUsQ0FBQ0gsV0FBWCxHQUF5QkEsV0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9pbnN0YWxsYXRpb24uNGY1NGUzZmEzNjhmNmM5ZmVmMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBfTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBIZWFkaW5nIGFzIF9IZWFkaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0hlYWRpbmcnXG5pbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IGFzIF9MYXlvdXQgfSBmcm9tICdAL2xheW91dHMvRG9jdW1lbnRhdGlvbkxheW91dCdcbmltcG9ydCB7IENvbnRlbnRzTGF5b3V0IGFzIF9EZWZhdWx0IH0gZnJvbSAnQC9sYXlvdXRzL0NvbnRlbnRzTGF5b3V0J1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW1CYWQgfSBmcm9tICdAL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCB7IEludGVncmF0aW9uR3VpZGVzIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludGVncmF0aW9uR3VpZGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0YXRzIGZyb20gJ0AvdXRpbHMvc3RhdHMnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LrQsFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwi0KPQt9C90LDQudGC0LUsINC60LDQuiDQt9Cw0L/Rg9GB0YLQuNGC0YwgVGFpbHdpbmQgQ1NTINCyINGB0LLQvtC10Lwg0L/RgNC+0LXQutGC0LUuXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0KDRg9C60L7QstC+0LTRgdGC0LLQviDQv9C+INC40L3RgtC10LPRgNCw0YbQuNC4XCIsXG4gIFwic2x1Z1wiOiBcInJ1a292b2RzdHZvLXBvLWludGVncmFjemlpXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LrQsCBUYWlsd2luZCBDU1Mg0LIg0LrQsNGH0LXRgdGC0LLQtSDQv9C70LDQs9C40L3QsCBQb3N0Q1NTXCIsXG4gIFwic2x1Z1wiOiBcInVzdGFub3ZrYS10YWlsd2luZC1jc3Mtdi1rYWNoZXN0dmUtcGxhZ2luYS1wb3N0LWNzc1wiLFxuICBcImNoaWxkcmVuXCI6IFt7XG4gICAgXCJ0aXRsZVwiOiBcItCj0YHRgtCw0L3QvtCy0LjRgtGMIFRhaWx3aW5kINGH0LXRgNC10LcgbnBtXCIsXG4gICAgXCJzbHVnXCI6IFwidXN0YW5vdml0LXRhaWx3aW5kLWNoZXJlei1ucG1cIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcItCU0L7QsdCw0LLQuNGC0YwgVGFpbHdpbmQg0LrQsNC6INC/0LvQsNCz0LjQvSBQb3N0Q1NTXCIsXG4gICAgXCJzbHVnXCI6IFwiZG9iYXZpdC10YWlsd2luZC1rYWstcGxhZ2luLXBvc3QtY3NzXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCLQodC+0LfQtNCw0LnRgtC1INGB0LLQvtC5INGE0LDQudC7INC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuFwiLFxuICAgIFwic2x1Z1wiOiBcInNvemRhanRlLXN2b2otZmFqbC1rb25maWd1cmFjemlpXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCLQktC60LvRjtGH0LjRgtC1IFRhaWx3aW5kINCyINGB0LLQvtC5IENTU1wiLFxuICAgIFwic2x1Z1wiOiBcInZrbHl1Y2hpdGUtdGFpbHdpbmQtdi1zdm9qLWNzc1wiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwi0KHQvtC30LTQsNC90LjQtSDQktCw0YjQtdCz0L4gQ1NTXCIsXG4gICAgXCJzbHVnXCI6IFwic296ZGFuaWUtdmFzaGVnby1jc3NcIlxuICB9XVxufSwge1xuICBcInRpdGxlXCI6IFwi0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUgVGFpbHdpbmQg0LHQtdC3IFBvc3RDU1NcIixcbiAgXCJzbHVnXCI6IFwiaXNwb2x6b3ZhbmllLXRhaWx3aW5kLWJlei1wb3N0LWNzc1wiLFxuICBcImNoaWxkcmVuXCI6IFt7XG4gICAgXCJ0aXRsZVwiOiBcItCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INGB0L7QsdGB0YLQstC10L3QvdC+0LPQviDRhNCw0LnQu9CwIENTU1wiLFxuICAgIFwic2x1Z1wiOiBcImlzcG9sem92YW5pZS1zb2JzdHZlbm5vZ28tZmFqbGEtY3NzXCJcbiAgfSwge1xuICAgIFwidGl0bGVcIjogXCLQndCw0YHRgtGA0L7QudC60LAg0JLQsNGI0LXQuSDQutC+0L3RhNC40LPRg9GA0LDRhtC40LhcIixcbiAgICBcInNsdWdcIjogXCJuYXN0cm9qa2EtdmFzaGVqLWtvbmZpZ3VyYWN6aWlcIlxuICB9LCB7XG4gICAgXCJ0aXRsZVwiOiBcItCh0LHQvtGA0LrQsCDQtNC70Y8g0L/RgNC+0LTQsNC60YjQtdC90LBcIixcbiAgICBcInNsdWdcIjogXCJzYm9ya2EtZGx5YS1wcm9kYWtzaGVuYVwiXG4gIH1dXG59LCB7XG4gIFwidGl0bGVcIjogXCLQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBUYWlsd2luZCDRh9C10YDQtdC3IENETlwiLFxuICBcInNsdWdcIjogXCJpc3BvbHpvdmFuaWUtdGFpbHdpbmQtY2hlcmV6LWNkblwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJIVE1MIHN0YXJ0ZXIgdGVtcGxhdGVcIixcbiAgXCJzbHVnXCI6IFwiaHRtbC1zdGFydGVyLXRlbXBsYXRlXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIlBvc3RDU1MgNyBjb21wYXRpYmlsaXR5IGJ1aWxkXCIsXG4gIFwic2x1Z1wiOiBcInBvc3QtY3NzLTctY29tcGF0aWJpbGl0eS1idWlsZFwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIExheW91dCxcbm1ldGEsXG50YWJsZU9mQ29udGVudHNcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBfRGVmYXVsdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG5cblxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwicnVrb3ZvZHN0dm8tcG8taW50ZWdyYWN6aWlcIiB0b2M9e3RydWV9PtCg0YPQutC+0LLQvtC00YHRgtCy0L4g0L/QviDQuNC90YLQtdCz0YDQsNGG0LjQuDwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCf0YDQvtGG0LXRgdGBINGD0YHRgtCw0L3QvtCy0LrQuCBUYWlsd2luZCBDU1Mg0LzQvtC20LXRgiDQvdC10LzQvdC+0LPQviDQvtGC0LvQuNGH0LDRgtGM0YHRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YLQvtCz0L4sINC60LDQutC40LUg0LTRgNGD0LPQuNC1INGE0YDQtdC50LzQstC+0YDQutC4L9C40L3RgdGC0YDRg9C80LXQvdGC0Ysg0JLRiyDQuNGB0L/QvtC70YzQt9GD0LXRgtC1LCDQv9C+0Y3RgtC+0LzRgyDQvNGLINGB0L7RgdGC0LDQstC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0YDRg9C60L7QstC+0LTRgdGC0LIsINC60L7RgtC+0YDRi9C1INC+0YXQstCw0YLRi9Cy0LDRjtGCINC/0L7Qv9GD0LvRj9GA0L3Ri9C1INC90LDRgdGC0YDQvtC50LrQuC5gfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8SW50ZWdyYXRpb25HdWlkZXMgbWR4VHlwZT1cIkludGVncmF0aW9uR3VpZGVzXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8cD57YNCd0LUg0LLQuNC00LjRgtC1INGB0LLQvtC5INC70Y7QsdC40LzRi9C5INC40L3RgdGC0YDRg9C80LXQvdGCINCyINGB0L/QuNGB0LrQtT8g0JzRiyDQv9C+0YHRgtC+0Y/QvdC90L4g0YDQsNCx0L7RgtCw0LXQvCDQvdCw0LQg0L3QvtCy0YvQvNC4INGA0YPQutC+0LLQvtC00YHRgtCy0LDQvNC4LCDQvdC+INC/0L7QutCwINCS0Ysg0LzQvtC20LXRgtC1INGB0LvQtdC00L7QstCw0YLRjCDQuNC90YHRgtGA0YPQutGG0LjRj9C8INC/0L4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2luc3RhbGxpbmctdGFpbHdpbmQtY3NzLWFzLWEtcG9zdC1jc3MtcGx1Z2luXCJcbiAgICAgICAgfX0+e2DRg9GB0YLQsNC90L7QstC60LUgVGFpbHdpbmQgQ1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/Qu9Cw0LPQuNC90LAgUG9zdENTU2B9PC9hPntgINCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+LCDRh9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0L3QsNGB0YLRgNC+0LXQvSDQsiDQutGA0LDRgtGH0LDQudGI0LjQtSDRgdGA0L7QutC4LmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwidXN0YW5vdmthLXRhaWx3aW5kLWNzcy12LWthY2hlc3R2ZS1wbGFnaW5hLXBvc3QtY3NzXCIgdG9jPXt0cnVlfT7Qo9GB0YLQsNC90L7QstC60LAgVGFpbHdpbmQgQ1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/Qu9Cw0LPQuNC90LAgUG9zdENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCU0LvRjyDQsdC+0LvRjNGI0LjQvdGB0YLQstCwINGA0LXQsNC70YzQvdGL0YUg0L/RgNC+0LXQutGC0L7QsiDQvNGLINGA0LXQutC+0LzQtdC90LTRg9C10Lwg0YPRgdGC0LDQvdC+0LLQuNGC0YwgVGFpbHdpbmQg0LrQsNC6INC/0LvQsNCz0LjQvSBQb3N0Q1NTLiDQkdC+0LvRjNGI0LjQvdGB0YLQstC+INGB0L7QstGA0LXQvNC10L3QvdGL0YUg0YTRgNC10LnQvNCy0L7RgNC60L7QsiDRg9C20LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YIgUG9zdENTUyDQv9C+0LQg0LrQsNC/0L7RgtC+0LwsINC4INC10YHRgtGMINCx0L7Qu9GM0YjQsNGPINCy0LXRgNC+0Y/RgtC90L7RgdGC0YwsINGH0YLQviDQktGLINC40YHQv9C+0LvRjNC30L7QstCw0LvQuCDQuNC70Lgg0LIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8g0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDQtNGA0YPQs9C40LUg0L/Qu9Cw0LPQuNC90YsgUG9zdENTUywg0YLQsNC60LjQtSDQutCw0LogYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyXCJcbiAgICAgICAgfX0+e2BhdXRvcHJlZml4ZXJgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxwPntg0JXRgdC70Lgg0JLRiyDQvdC40LrQvtCz0LTQsCDQvdC1INGB0LvRi9GI0LDQu9C4INC+IFBvc3RDU1Mg0LjQu9C4INCS0LDQvCDQuNC90YLQtdGA0LXRgdC90L4sINGH0LXQvCDQvtC9INC+0YLQu9C40YfQsNC10YLRgdGPINC+0YIg0YLQsNC60LjRhSDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LIsINC60LDQuiBTYXNzLCDQv9GA0L7Rh9GC0LjRgtC1INC90LDRiNC1INGA0YPQutC+0LLQvtC00YHRgtCy0L4g0L/QviBgfTxfTGluayBocmVmPVwiL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzI3VzaW5nLXBvc3QtY3NzLWFzLXlvdXItcHJlcHJvY2Vzc29yXCIgcGFzc0hyZWY+PGE+e2DQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjiBQb3N0Q1NTINCyINC60LDRh9C10YHRgtCy0LUg0L/RgNC10L/RgNC+0YbQtdGB0YHQvtGA0LBgfTwvYT48L19MaW5rPntgINC00LvRjyDQstCy0LXQtNC10L3QuNGPLmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDRjdGC0L4g0LrQsNC20LXRgtGB0Y8g0JLQsNC8INC90LXQv9C+0YHQuNC70YzQvdGL0Lwg0Lgg0JLRiyDRhdC+0YLQuNGC0LUg0L/QvtC/0YDQvtCx0L7QstCw0YLRjCBUYWlsd2luZCDQsdC10Lcg0L3QsNGB0YLRgNC+0LnQutC4IFBvc3RDU1MsINC/0YDQvtGH0YLQuNGC0LUg0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0L3QsNGI0Lgg0LjQvdGB0YLRgNGD0LrRhtC40Lgg0L/QviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjdXNpbmctdGFpbHdpbmQtd2l0aG91dC1wb3N0LWNzc1wiXG4gICAgICAgIH19Pntg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y4gVGFpbHdpbmQg0LHQtdC3IFBvc3RDU1NgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJ1c3Rhbm92aXQtdGFpbHdpbmQtY2hlcmV6LW5wbVwiIHRvYz17dHJ1ZX0+0KPRgdGC0LDQvdC+0LLQuNGC0YwgVGFpbHdpbmQg0YfQtdGA0LXQtyBucG08L19IZWFkaW5nPlxuICAgICAgPHA+e2DQlNC70Y8g0LHQvtC70YzRiNC40L3RgdGC0LLQsCDQv9GA0L7QtdC60YLQvtCyICjQuCDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LLQvtGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINCy0L7Qt9C80L7QttC90L7RgdGC0Y/QvNC4INC90LDRgdGC0YDQvtC50LrQuCBUYWlsd2luZCksINCS0LDQvCDQvdGD0LbQvdC+INGD0YHRgtCw0L3QvtCy0LjRgtGMIFRhaWx3aW5kINC4INC10LPQviDQvtC00L3QvtGA0LDQvdCz0L7QstGL0LUg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDRh9C10YDQtdC3IG5wbS5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgbnBtYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BpbnN0YWxsYH08L3NwYW4+e2AgdGFpbHdpbmRjc3MgcG9zdGNzcyBhdXRvcHJlZml4ZXJgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDIFRhaWx3aW5kIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9icm93c2VyLXN1cHBvcnQjdmVuZG9yLXByZWZpeGVzXCIgcGFzc0hyZWY+PGE+e2DQvdC1INC00L7QsdCw0LLQu9GP0LXRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9GA0LXRhNC40LrRgdGLINC/0L7RgdGC0LDQstGJ0LjQutC+0LJgfTwvYT48L19MaW5rPntgINCyINGB0L7Qt9C00LDQstCw0LXQvNGL0Lkg0LjQvCBDU1MsINC80Ysg0YDQtdC60L7QvNC10L3QtNGD0LXQvCDRg9GB0YLQsNC90L7QstC40YLRjCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXJcIlxuICAgICAgICB9fT57YGF1dG9wcmVmaXhlcmB9PC9hPntgINC00LvRjyDRgNC10YjQtdC90LjRjyDRjdGC0L7QuSDQv9GA0L7QsdC70LXQvNGLINC00LvRjyDQktCw0YEsINC60LDQuiDQvNGLINC/0L7QutCw0LfQsNC70Lgg0LIg0L/RgNC40LLQtdC00LXQvdC90L7QvCDQstGL0YjQtSDRhNGA0LDQs9C80LXQvdGC0LUuYH08L3A+XG4gICAgICA8cD57YNCV0YHQu9C4INCS0Ysg0LjQvdGC0LXQs9GA0LjRgNGD0LXRgtC1IFRhaWx3aW5kINGBINC40L3RgdGC0YDRg9C80LXQvdGC0L7QvCwg0L7RgdC90L7QstCw0L3QvdGL0Lwg0L3QsCDQsdC+0LvQtdC1INGB0YLQsNGA0L7QuSDQstC10YDRgdC40LggUG9zdENTUywg0JLRiyDQvNC+0LbQtdGC0LUg0YPQstC40LTQtdGC0Ywg0YLQsNC60YPRjiDQvtGI0LjQsdC60YM6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19Pntg0J7RiNC40LHQutCwOiDQn9C70LDQs9C40L0gUG9zdENTUyB0YWlsd2luZGNzcyDRgtGA0LXQsdGD0LXRgiBQb3N0Q1NTIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDhgfTwvc3Bhbj57YC5gfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JIg0Y3RgtC+0Lwg0YHQu9GD0YfQsNC1INCS0LDQvCDRgdC70LXQtNGD0LXRgiDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjcG9zdC1jc3MtNy1jb21wYXRpYmlsaXR5LWJ1aWxkXCJcbiAgICAgICAgfX0+e2DRg9GB0YLQsNC90L7QstC40YLRjCDRgdCx0L7RgNC60YMg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0Lgg0YEgUG9zdENTUyA3YH08L2E+e2AuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwiZG9iYXZpdC10YWlsd2luZC1rYWstcGxhZ2luLXBvc3QtY3NzXCIgdG9jPXt0cnVlfT7QlNC+0LHQsNCy0LjRgtGMIFRhaWx3aW5kINC60LDQuiDQv9C70LDQs9C40L0gUG9zdENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCU0L7QsdCw0LLRjNGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmRjc3NgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BhdXRvcHJlZml4ZXJgfTwvaW5saW5lQ29kZT57YCDQsiDQktCw0YjRgyDQutC+0L3RhNC40LPRg9GA0LDRhtC40Y4gUG9zdENTUy4g0JIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC70YPRh9Cw0LXQsiDRjdGC0L4g0YTQsNC50LsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcy5jb25maWcuanNgfTwvaW5saW5lQ29kZT57YCDQsiDQutC+0YDQvdC1INCS0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsCwg0L3QviDRjdGC0L4g0YLQsNC60LbQtSDQvNC+0LbQtdGCINCx0YvRgtGMINGE0LDQudC7IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YC5wb3N0Y3NzcmNgfTwvaW5saW5lQ29kZT57YCDQuNC70Lgg0LrQu9GO0YcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzc2B9PC9pbmxpbmVDb2RlPntgINCyINCS0LDRiNC10Lwg0YTQsNC50LvQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWNrYWdlLmpzb25gfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyBwb3N0Y3NzLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHBsdWdpbnNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIHRhaWx3aW5kY3NzYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICAgIGF1dG9wcmVmaXhlcmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JXRgdC70Lgg0JLRiyDQvdC1INGD0LLQtdGA0LXQvdGLLCDQs9C00LUg0L3QsNGB0YLRgNCw0LjQstCw0Y7RgtGB0Y8g0L/Qu9Cw0LPQuNC90YsgUG9zdENTUyDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINCS0LDQvNC4INC40L3RgdGC0YDRg9C80LXQvdGC0L7Qsiwg0JLQsNC8INC90YPQttC90L4g0L7QsdGA0LDRgtC40YLRjNGB0Y8g0Log0LTQvtC60YPQvNC10L3RgtCw0YbQuNC4INC/0L4g0Y3RgtC40Lwg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNC8LCDRh9GC0L7QsdGLINGD0LfQvdCw0YLRjCwg0LPQtNC1INGN0YLQviDQtNC+0LvQttC90L4g0L/RgNC+0LjRgdGF0L7QtNC40YLRjC4g0J/QvtC40YHQuiDQv9C+INC30LDQv9GA0L7RgdGDIFwiY29uZmlndXJlIHBvc3Rjc3Mge215IHRvb2x9XCIg0YLQvtC20LUg0LTQsNGB0YIg0JLQsNC8INC+0YLQstC10YIg0LTQvtCy0L7Qu9GM0L3QviDQsdGL0YHRgtGA0L4uYH08L3A+XG4gICAgICA8cD57YNCV0YHQu9C4INCS0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDQutCw0LrQuNC1LdC70LjQsdC+INC00YDRg9Cz0LjQtSDQv9C70LDQs9C40L3RiyBQb3N0Q1NTLCDQktCw0Lwg0YHQu9C10LTRg9C10YIg0L/RgNC+0YfQuNGC0LDRgtGMINC90LDRiNGDINC00L7QutGD0LzQtdC90YLQsNGG0LjRjiDQv9C+IGB9PF9MaW5rIGhyZWY9XCIvZG9jcy91c2luZy13aXRoLXByZXByb2Nlc3NvcnNcIiBwYXNzSHJlZj48YT57YNC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGOIFBvc3RDU1Mg0LIg0LrQsNGH0LXRgdGC0LLQtSDQv9GA0LXQv9GA0L7RhtC10YHRgdC+0YDQsGB9PC9hPjwvX0xpbms+e2Ag0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQsdC+0LvQtdC1INC/0L7QtNGA0L7QsdC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgtC+0LwsINC60LDQuiDQu9GD0YfRiNC1INCy0YHQtdCz0L4g0LfQsNC60LDQt9Cw0YLRjCDQuNGFINGBINC/0L7QvNC+0YnRjNGOIFRhaWx3aW5kLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cInNvemRhanRlLXN2b2otZmFqbC1rb25maWd1cmFjemlpXCIgdG9jPXt0cnVlfT7QodC+0LfQtNCw0LnRgtC1INGB0LLQvtC5INGE0LDQudC7INC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuDwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCV0YHQu9C4INCS0Ysg0YXQvtGC0LjRgtC1INC90LDRgdGC0YDQvtC40YLRjCDRg9GB0YLQsNC90L7QstC60YMgVGFpbHdpbmQsINGB0LPQtdC90LXRgNC40YDRg9C50YLQtSDRhNCw0LnQuyDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lgg0LTQu9GPINGB0LLQvtC10LPQviDQv9GA0L7QtdC60YLQsCDRgSDQv9C+0LzQvtGJ0YzRjiDRg9GC0LjQu9C40YLRiyBUYWlsd2luZCBDTEksINCy0LrQu9GO0YfQtdC90L3QvtC5INC/0YDQuCDRg9GB0YLQsNC90L7QstC60LUg0L/QsNC60LXRgtCwIG5wbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0YWlsd2luZGNzc2B9PC9pbmxpbmVDb2RlPntgOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT57YG5weCB0YWlsd2luZGNzcyBpbml0YH08L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCt0YLQviDRgdC+0LfQtNCw0YHRgiDQvNC40L3QuNC80LDQu9GM0L3Ri9C5INGE0LDQudC7IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9pbmxpbmVDb2RlPntgINCyINC60L7RgNC90LUg0JLQsNGI0LXQs9C+INC/0YDQvtC10LrRgtCwOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9zcGFuPntgXG5tb2R1bGVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHktYWNjZXNzXCJcbiAgICAgICAgICAgIH19PntgZXhwb3J0c2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIHB1cmdlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BbYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBkYXJrTW9kZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGJvb2xlYW5cIlxuICAgICAgICAgICAgfX0+e2BmYWxzZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8g0LjQu9C4ICdtZWRpYScg0LjQu9C4ICdjbGFzcydgfTwvc3Bhbj57YFxuICB0aGVtZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgZXh0ZW5kYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIHBsdWdpbnNgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCj0LfQvdCw0LnRgtC1INCx0L7Qu9GM0YjQtSDQviDQvdCw0YHRgtGA0L7QudC60LUgVGFpbHdpbmQg0LIgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2NvbmZpZ3VyYXRpb25cIiBwYXNzSHJlZj48YT57YNC00L7QutGD0LzQtdC90YLQsNGG0LjQuCDQv9C+INC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuGB9PC9hPjwvX0xpbms+e2AuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwidmtseXVjaGl0ZS10YWlsd2luZC12LXN2b2otY3NzXCIgdG9jPXt0cnVlfT7QktC60LvRjtGH0LjRgtC1IFRhaWx3aW5kINCyINGB0LLQvtC5IENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCh0L7Qt9C00LDQudGC0LUg0YTQsNC50LsgQ1NTLCDQtdGB0LvQuCDRgyDQstCw0YEg0LXQs9C+INC10YnQtSDQvdC10YIsINC4INC40YHQv9C+0LvRjNC30YPQudGC0LUg0LTQuNGA0LXQutGC0LjQstGDIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEB0YWlsd2luZGB9PC9pbmxpbmVDb2RlPntgINC00LvRjyDQstC90LXQtNGA0LXQvdC40Y8g0YHRgtC40LvQtdC5IFRhaWx3aW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGJhc2VgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29tcG9uZW50c2B9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHV0aWxpdGllc2B9PC9pbmxpbmVDb2RlPntgOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLyogLi95b3VyLWNzcy1mb2xkZXIvc3R5bGVzLmNzcyAqL2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQHRhaWx3aW5kYH08L3NwYW4+e2AgYmFzZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCBjb21wb25lbnRzYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIHV0aWxpdGllc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUYWlsd2luZCDQt9Cw0LzQtdC90LjRgiDRjdGC0Lgg0LTQuNGA0LXQutGC0LjQstGLINCy0L4g0LLRgNC10LzRjyDRgdCx0L7RgNC60Lgg0L3QsCDQstGB0LUg0YHRgtC40LvQuCwg0LrQvtGC0L7RgNGL0LUg0L7QvSDQs9C10L3QtdGA0LjRgNGD0LXRgiDQvdCwINC+0YHQvdC+0LLQtSDQktCw0YjQtdC5INC90LDRgdGC0YDQvtC10L3QvdC+0Lkg0LTQuNC30LDQudC9LdGB0LjRgdGC0LXQvNGLLmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcy1pbXBvcnRgfTwvaW5saW5lQ29kZT57YCAo0LjQu9C4INC40L3RgdGC0YDRg9C80LXQvdGCLCDQutC+0YLQvtGA0YvQuSDQuNGB0L/QvtC70YzQt9GD0LXRgiDQtdCz0L4g0L/QvtC0INC60LDQv9C+0YLQvtC8LCDQvdCw0L/RgNC40LzQtdGAIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWlscy93ZWJwYWNrZXJcIlxuICAgICAgICB9fT57YFdlYnBhY2tlcmB9PC9hPntgINC00LvRjyBSYWlscyksINC40YHQv9C+0LvRjNC30YPQudGC0LUg0L3QsNGIINC40LzQv9C+0YDRgiDQstC80LXRgdGC0L4g0LTQuNGA0LXQutGC0LjQstGLIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEB0YWlsd2luZGB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINC40LfQsdC10LbQsNGC0Ywg0L/RgNC+0LHQu9C10Lwg0L/RgNC4INC40LzQv9C+0YDRgtC1INC70Y7QsdGL0YUg0JLQsNGI0LjRhSDRgdC+0LHRgdGC0LLQtdC90L3Ri9GFINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0YUg0YTQsNC50LvQvtCyOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGltcG9ydGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgICAgfX0+e2BcInRhaWx3aW5kY3NzL2Jhc2VcImB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGltcG9ydGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgICAgfX0+e2BcInRhaWx3aW5kY3NzL2NvbXBvbmVudHNcImB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGltcG9ydGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc3RyaW5nXCJcbiAgICAgICAgICAgICAgfX0+e2BcInRhaWx3aW5kY3NzL3V0aWxpdGllc1wiYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINGA0LDQsdC+0YLQsNC10YLQtSDQsiDRgdGA0LXQtNC1IEphdmFTY3JpcHQsINGC0LDQutC+0Lkg0LrQsNC6IFJlYWN0INC40LvQuCBWdWUsINC60L7RgtC+0YDQsNGPINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDQv9GA0Y/QvNC+0Lkg0LjQvNC/0L7RgNGCINGE0LDQudC70L7QsiBDU1Mg0LIg0JLQsNGIIEpTLCDQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INC/0L7Qu9C90L7RgdGC0YzRjiDQvtGC0LrQsNC30LDRgtGM0YHRjyDQvtGCINGB0L7Qt9C00LDQvdC40Y8g0YTQsNC50LvQsCBDU1Mg0Lgg0LLQvNC10YHRgtC+INGN0YLQvtCz0L4g0LjQvNC/0L7RgNGC0LjRgNC+0LLQsNGC0YwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzYH08L2lubGluZUNvZGU+e2AsINCyINC60L7RgtC+0YDQvtC8INCy0YHQtSDRjdGC0Lgg0LTQuNGA0LXQutGC0LjQstGLINGD0LbQtSDQtdGB0YLRjCDQsiDQvNC10YHRgtC+OmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8vIGFwcC5qc2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBrZXl3b3JkIG1vZHVsZVwiXG4gICAgICAgICAgICB9fT57YGltcG9ydGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHN0cmluZ1wiXG4gICAgICAgICAgICB9fT57YFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJgfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwic296ZGFuaWUtdmFzaGVnby1jc3NcIiB0b2M9e3RydWV9PtCh0L7Qt9C00LDQvdC40LUg0JLQsNGI0LXQs9C+IENTUzwvX0hlYWRpbmc+XG4gICAgICA8cD57YNCi0L4sINC60LDQuiDQktGLINC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDRgdC+0LfQtNCw0LXRgtC1INGB0LLQvtC5INC/0YDQvtC10LrRgiwg0LHRg9C00LXRgiDQt9Cw0LLQuNGB0LXRgtGMINC+0YIg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUuINCS0LDRiNCwINGB0YLRgNGD0LrRgtGD0YDQsCDQvNC+0LbQtdGCINCy0LrQu9GO0YfQsNGC0Ywg0LrQvtC80LDQvdC00YMg0YLQuNC/0LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnBtIHJ1biBkZXZgfTwvaW5saW5lQ29kZT57YCDQtNC70Y8g0LfQsNC/0YPRgdC60LAg0YHQtdGA0LLQtdGA0LAg0YDQsNC30YDQsNCx0L7RgtC60LgsINC60L7RgtC+0YDRi9C5INC60L7QvNC/0LjQu9C40YDRg9C10YIg0JLQsNGIIENTUyDQsiDRhNC+0L3QvtCy0L7QvCDRgNC10LbQuNC80LUsINCS0Ysg0LzQvtC20LXRgtC1INC30LDQv9GD0YHQutCw0YLRjCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3ZWJwYWNrYH08L2lubGluZUNvZGU+e2Ag0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3Qviwg0LjQu9C4LCDQvNC+0LbQtdGCINCx0YvRgtGMLCDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcy1jbGlgfTwvaW5saW5lQ29kZT57YCDQuCDQt9Cw0L/Rg9GB0LrQsNC10YLQtSDRgtCw0LrRg9GOINC60L7QvNCw0L3QtNGDLCDQutCw0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcG9zdGNzcyBzdHlsZXMuY3NzIC1vIGNvbXBpbGVkLmNzc2B9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINGD0LbQtSDQt9C90LDQutC+0LzRiyDRgSBQb3N0Q1NTLCDQktGLLCDQstC10YDQvtGP0YLQvdC+LCDQt9C90LDQtdGC0LUsINGH0YLQviDQktCw0Lwg0L3Rg9C20L3QviDQtNC10LvQsNGC0YwsINC10YHQu9C4INC90LUg0L7QsdGA0LDRgtC40YLQtdGB0Ywg0Log0LTQvtC60YPQvNC10L3RgtCw0YbQuNC4INC00LvRjyDQuNC90YHRgtGA0YPQvNC10L3RgtCwLCDQutC+0YLQvtGA0YvQuSDQktGLINC40YHQv9C+0LvRjNC30YPQtdGC0LUuYH08L3A+XG4gICAgICA8cD57YNCf0YDQuCDRgdCx0L7RgNC60LUg0LTQu9GPINC/0YDQvtC40LfQstC+0LTRgdGC0LLQsCDQvdC1INC30LDQsdGD0LTRjNGC0LUg0L3QsNGB0YLRgNC+0LjRgtGMINC+0L/RhtC40Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHVyZ2VgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDRg9C00LDQu9C40YLRjCDQstGB0LUg0L3QtdC40YHQv9C+0LvRjNC30YPQtdC80YvQtSDQutC70LDRgdGB0Ysg0LTQu9GPINGE0LDQudC70LAg0L3QsNC40LzQtdC90YzRiNC10LPQviDRgNCw0LfQvNC10YDQsDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1kaWZmLWpzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWRpZmYtanNcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB1bmNoYW5nZWQgbGFuZ3VhZ2UtanNcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICAgIH19PntgLy8gdGFpbHdpbmQuY29uZmlnLmpzYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgIG1vZHVsZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YC5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eS1hY2Nlc3NcIlxuICAgICAgICAgICAgICB9fT57YGV4cG9ydHNgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG5gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gaW5zZXJ0ZWQtc2lnbiBpbnNlcnRlZCBsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggaW5zZXJ0ZWRcIlxuICAgICAgICAgICAgICB9fT57YCtgfTwvc3Bhbj57YCAgIHB1cmdlYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggaW5zZXJ0ZWRcIlxuICAgICAgICAgICAgICB9fT57YCtgfTwvc3Bhbj57YCAgICAgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgICB9fT57YCcuL3NyYy8qKi8qLmh0bWwnYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggaW5zZXJ0ZWRcIlxuICAgICAgICAgICAgICB9fT57YCtgfTwvc3Bhbj57YCAgICAgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgICB9fT57YCcuL3NyYy8qKi8qLmpzJ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IGluc2VydGVkXCJcbiAgICAgICAgICAgICAgfX0+e2ArYH08L3NwYW4+e2AgICBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHVuY2hhbmdlZCBsYW5ndWFnZS1qc1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggdW5jaGFuZ2VkXCJcbiAgICAgICAgICAgICAgfX0+e2AgYH08L3NwYW4+e2AgICBkYXJrTW9kZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGJvb2xlYW5cIlxuICAgICAgICAgICAgICB9fT57YGZhbHNlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgICB9fT57YC8vINC40LvQuCAnbWVkaWEnINC40LvQuCAnY2xhc3MnYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgdGhlbWVgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByZWZpeCB1bmNoYW5nZWRcIlxuICAgICAgICAgICAgICB9fT57YCBgfTwvc3Bhbj57YCAgICAgZXh0ZW5kYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgICAgdmFyaWFudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcmVmaXggdW5jaGFuZ2VkXCJcbiAgICAgICAgICAgICAgfX0+e2AgYH08L3NwYW4+e2AgICBwbHVnaW5zYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgXWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJlZml4IHVuY2hhbmdlZFwiXG4gICAgICAgICAgICAgIH19PntgIGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2DQn9GA0L7Rh9GC0LjRgtC1INC90LDRiNC1INC+0YLQtNC10LvRjNC90L7QtSDRgNGD0LrQvtCy0L7QtNGB0YLQstC+INC/0L4gYH08X0xpbmsgaHJlZj1cIi9kb2NzL29wdGltaXppbmctZm9yLXByb2R1Y3Rpb25cIiBwYXNzSHJlZj48YT57YNC+0L/RgtC40LzQuNC30LDRhtC40Lgg0LTQu9GPINC/0YDQvtC40LfQstC+0LTRgdGC0LLQsGB9PC9hPjwvX0xpbms+e2AsINGH0YLQvtCx0Ysg0YPQt9C90LDRgtGMINCx0L7Qu9GM0YjQtSDQviDQtNGA0LXQstC+0LLQuNC00L3Ri9GFINC90LXQuNGB0L/QvtC70YzQt9GD0LXQvNGL0YUg0YHRgtC40LvRj9GFINC00LvRjyDQu9GD0YfRiNC10Lkg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4LmB9PC9wPlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINC40L3RgtC10LPRgNC40YDRg9C10YLQtSBUYWlsd2luZCDRgSDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LwsINC+0YHQvdC+0LLQsNC90L3Ri9C8INC90LAg0LHQvtC70LXQtSDRgdGC0LDRgNC+0Lkg0LLQtdGA0YHQuNC4IFBvc3RDU1MsINCS0Ysg0LzQvtC20LXRgtC1INGD0LLQuNC00LXRgtGMINGC0LDQutGD0Y4g0L7RiNC40LHQutGDINC/0YDQuCDQv9C+0L/Ri9GC0LrQtSDRgdC+0LfQtNCw0YLRjCDRgdCy0L7QuSBDU1M6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19Pntg0J7RiNC40LHQutCwOiDQn9C70LDQs9C40L0gUG9zdENTUyB0YWlsd2luZGNzcyDRgtGA0LXQsdGD0LXRgiBQb3N0Q1NTIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDhgfTwvc3Bhbj57YC5gfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JIg0Y3RgtC+0Lwg0YHQu9GD0YfQsNC1INCS0LDQvCDRgdC70LXQtNGD0LXRgiDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjcG9zdC1jc3MtNy1jb21wYXRpYmlsaXR5LWJ1aWxkXCJcbiAgICAgICAgfX0+e2DQv9C10YDQtdC60LvRjtGH0LjRgtGM0YHRjyDQvdCwINC90LDRiNGDINGB0LHQvtGA0LrRgyDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuCDRgSBQb3N0Q1NTIDdgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImlzcG9sem92YW5pZS10YWlsd2luZC1iZXotcG9zdC1jc3NcIiB0b2M9e3RydWV9PtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1IFRhaWx3aW5kINCx0LXQtyBQb3N0Q1NTPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0JTQu9GPINC/0YDQvtGB0YLRi9GFINC/0YDQvtC10LrRgtC+0LIg0LjQu9C4INC/0YDQvtGB0YLQviDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L/QvtC/0YDQvtCx0L7QstCw0YLRjCBUYWlsd2luZCwg0JLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC40L3RgdGC0YDRg9C80LXQvdGCIFRhaWx3aW5kIENMSSDQtNC70Y8g0LPQtdC90LXRgNCw0YbQuNC4IENTUyDQsdC10Lcg0L3QsNGB0YLRgNC+0LnQutC4IFBvc3RDU1Mg0LjQu9C4INC00LDQttC1INCx0LXQtyDRg9GB0YLQsNC90L7QstC60LggVGFpbHdpbmQg0LIg0LrQsNGH0LXRgdGC0LLQtSDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4LCDQtdGB0LvQuCDQktGLINGN0YLQvtCz0L4g0L3QtSDRhdC+0YLQuNGC0LUuYH08L3A+XG4gICAgICA8cD57YNCY0YHQv9C+0LvRjNC30YPQudGC0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnB4YH08L2lubGluZUNvZGU+e2AsINC40L3RgdGC0YDRg9C80LXQvdGCLCDQutC+0YLQvtGA0YvQuSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LLQvNC10YHRgtC1INGBIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5wbWB9PC9pbmxpbmVDb2RlPntgLCDRh9GC0L7QsdGLINGB0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjiDRgdC60L7QvNC/0LjQu9C40YDQvtCy0LDQvdC90YvQuSDRhNCw0LnQuyBDU1MgVGFpbHdpbmQ6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLW8gdGFpbHdpbmQuY3NzYH08L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YNCt0YLQviDRgdC+0LfQtNCw0YHRgiDRhNCw0LnQuyDRgSDQuNC80LXQvdC10LwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY3NzYH08L2lubGluZUNvZGU+e2AgLCDRgdCz0LXQvdC10YDQuNGA0L7QstCw0L3QvdGL0Lkg0L3QsCDQvtGB0L3QvtCy0LUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL3RhaWx3aW5kY3NzQCU1RTIvc3R1YnMvZGVmYXVsdENvbmZpZy5zdHViLmpzXCJcbiAgICAgICAgfX0+e2DQutC+0L3RhNC40LPRg9GA0LDRhtC40LggVGFpbHdpbmQg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5gfTwvYT57YCwg0Lgg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LTQvtCx0LDQstC40YIg0LvRjtCx0L7Qs9C+INC90LXQvtCx0YXQvtC00LjQvNC+0LPQviDQv9C+0YHRgtCw0LLRidC40LrQsCDQv9GA0LXRhNC40LrRgdC+0LIg0YEg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LXQvCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXJcIlxuICAgICAgICB9fT57YGF1dG9wcmVmaXhlcmB9PC9hPntgLmB9PC9wPlxuICAgICAgPHA+e2DQotC10L/QtdGA0Ywg0JLRiyDQvNC+0LbQtdGC0LUg0LLRgdGC0LDQstC40YLRjCDRjdGC0L7RgiDRhNCw0LnQuyDQsiDRgdCy0L7QuSBIVE1MLCDQutCw0Log0Lgg0LvRjtCx0YPRjiDQtNGA0YPQs9GD0Y4g0YLQsNCx0LvQuNGG0YMg0YHRgtC40LvQtdC5OmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGRvY3R5cGVcIlxuICAgICAgICAgICAgfX0+e2A8IWRvY3R5cGUgaHRtbD5gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgaHRtbGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BoZWFkYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YDwhLS0gLi4uIC0tPmB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YG1ldGFgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2hhcnNldGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2BVVEYtOGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BtZXRhYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YG5hbWVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgdmlld3BvcnRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNvbnRlbnRgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BsaW5rYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGhyZWZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgL3RhaWx3aW5kLmNzc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgcmVsYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHN0eWxlc2hlZXRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BoZWFkYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGJvZHlgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2Bib2R5YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BodG1sYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cImlzcG9sem92YW5pZS1zb2JzdHZlbm5vZ28tZmFqbGEtY3NzXCIgdG9jPXt0cnVlfT7QmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDRgdC+0LHRgdGC0LLQtdC90L3QvtCz0L4g0YTQsNC50LvQsCBDU1M8L19IZWFkaW5nPlxuICAgICAgPHA+e2DQldGB0LvQuCDQstGLINGF0L7RgtC40YLQtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNGC0Ywg0LvRjtCx0L7QuSDRgdC+0LHRgdGC0LLQtdC90L3Ri9C5IENTUyDQstC80LXRgdGC0LUg0YHQviDRgdGC0LjQu9GP0LzQuCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0LrQvtGC0L7RgNGL0LUg0LPQtdC90LXRgNC40YDRg9C10YIgVGFpbHdpbmQsINGB0L7Qt9C00LDQudGC0LUg0YTQsNC50LsgQ1NTINCyINC70Y7QsdC+0Lwg0LzQtdGB0YLQtSDQuCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC00LjRgNC10LrRgtC40LLRgyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BAdGFpbHdpbmRgfTwvaW5saW5lQ29kZT57YCDQtNC70Y8g0LLQutC70Y7Rh9C10L3QuNGPINGB0YLQuNC70LXQuSBUYWlsd2luZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BiYXNlYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNvbXBvbmVudHNgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1dGlsaXRpZXNgfTwvaW5saW5lQ29kZT57YDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YC8qIC4vc3JjL3RhaWx3aW5kLmNzcyAqL2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGVcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQHRhaWx3aW5kYH08L3NwYW4+e2AgYmFzZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCBjb21wb25lbnRzYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj57YFxuXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjbGFzc1wiXG4gICAgICAgICAgICAgIH19PntgLmJ0bmB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHJ1bGUgYXRhcHBseVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAYXBwbHlgfTwvc3Bhbj57YCBweC00IHB5LTIgYmctYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb2xvclwiXG4gICAgICAgICAgICAgIH19PntgYmx1ZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICAgIH19PntgLTYwMGB9PC9zcGFuPntgIHRleHQtYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb2xvclwiXG4gICAgICAgICAgICAgIH19Pntgd2hpdGVgfTwvc3Bhbj57YCByb3VuZGVkYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIHV0aWxpdGllc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2DQl9Cw0YLQtdC8INGD0LrQsNC20LjRgtC1INC/0YPRgtGMINC6INGN0YLQvtC80YMg0YTQsNC50LvRgyDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCBDU1Mg0YEg0L/QvtC80L7RidGM0Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnB4IHRhaWx3aW5kY3NzIGJ1aWxkYH08L2lubGluZUNvZGU+e2A6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1vIC4vZGlzdC90YWlsd2luZC5jc3NgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0J/RgNC+0YfRgtC40YLQtSDQviBgfTxfTGluayBocmVmPVwiL2RvY3MvYWRkaW5nLWJhc2Utc3R5bGVzXCIgcGFzc0hyZWY+PGE+e2DQtNC+0LHQsNCy0LvQtdC90LjQuCDQsdCw0LfQvtCy0YvRhSDRgdGC0LjQu9C10LlgfTwvYT48L19MaW5rPntgLCBgfTxfTGluayBocmVmPVwiL2RvY3MvZXh0cmFjdGluZy1jb21wb25lbnRzXCIgcGFzc0hyZWY+PGE+e2DQuNC30LLQu9C10YfQtdC90LjQuCDQutC+0LzQv9C+0L3QtdC90YLQvtCyYH08L2E+PC9fTGluaz57YCwg0LggYH08X0xpbmsgaHJlZj1cIi9kb2NzL2FkZGluZy1uZXctdXRpbGl0aWVzXCIgcGFzc0hyZWY+PGE+e2DQtNC+0LHQsNCy0LvQtdC90LjQuCDQvdC+0LLRi9GFINGD0YLQuNC70LjRgmB9PC9hPjwvX0xpbms+e2AsINGH0YLQvtCx0Ysg0YPQt9C90LDRgtGMINCx0L7Qu9GM0YjQtSDQviDQtNC+0LHQsNCy0LvQtdC90LjQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7Qs9C+IENTUyDQv9C+0LLQtdGA0YUgVGFpbHdpbmQuYH08L3A+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwibmFzdHJvamthLXZhc2hlai1rb25maWd1cmFjemlpXCIgdG9jPXt0cnVlfT7QndCw0YHRgtGA0L7QudC60LAg0JLQsNGI0LXQuSDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lg8L19IZWFkaW5nPlxuICAgICAgPHA+e2DQldGB0LvQuCDQktGLINGF0L7RgtC40YLQtSDQvdCw0YHRgtGA0L7QuNGC0Ywg0YLQviwg0YfRgtC+INCz0LXQvdC10YDQuNGA0YPQtdGCIFRhaWx3aW5kLCDRgdC+0LfQtNCw0LnRgtC1INGE0LDQudC7IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRhaWx3aW5kLmNvbmZpZy5qc2B9PC9pbmxpbmVDb2RlPntgINGBINC/0L7QvNC+0YnRjNGOINC40L3RgdGC0YDRg9C80LXQvdGC0LAgVGFpbHdpbmQgQ0xJOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT57YG5weCB0YWlsd2luZGNzcy1jbGlAbGF0ZXN0IGluaXRgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0K3RgtC+INGB0L7Qt9C00LDRgdGCINC80LjQvdC40LzQsNC70YzQvdGL0Lkg0YTQsNC50LsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY29uZmlnLmpzYH08L2lubGluZUNvZGU+e2Ag0LIg0LrQvtGA0L3QtSDQktCw0YjQtdCz0L4g0L/RgNC+0LXQutGC0LA6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgLy8gdGFpbHdpbmQuY29uZmlnLmpzYH08L3NwYW4+e2Bcbm1vZHVsZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eS1hY2Nlc3NcIlxuICAgICAgICAgICAgfX0+e2BleHBvcnRzYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgcHVyZ2VgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YFtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2BdYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGRhcmtNb2RlYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYm9vbGVhblwiXG4gICAgICAgICAgICB9fT57YGZhbHNlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvLyDQuNC70LggJ21lZGlhJyDQuNC70LggJ2NsYXNzJ2B9PC9zcGFuPntgXG4gIHRoZW1lYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gb3BlcmF0b3JcIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgICBleHRlbmRgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgLGB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YCxgfTwvc3Bhbj57YFxuICB2YXJpYW50c2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbiAgcGx1Z2luc2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG9wZXJhdG9yXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgW2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YF1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0K3RgtC+0YIg0YTQsNC50Lsg0LHRg9C00LXRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9GA0L7Rh9C40YLQsNC9INC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INCS0LDRiNC10LPQviBDU1Mg0YEg0L/QvtC80L7RidGM0Y4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnB4IHRhaWx3aW5kY3NzIGJ1aWxkYH08L2lubGluZUNvZGU+e2A6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1vIC4vZGlzdC90YWlsd2luZC5jc3NgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0JXRgdC70Lgg0JLRiyDRhdC+0YLQuNGC0LUg0YHQvtGF0YDQsNC90LjRgtGMINGE0LDQudC7INC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCDQsiDQtNGA0YPQs9C+0Lwg0LzQtdGB0YLQtSDQuNC70Lgg0LTQsNGC0Ywg0LXQvNGDINC00YDRg9Cz0L7QtSDQuNC80Y8sINC/0LXRgNC10LTQsNC50YLQtSDQv9GD0YLRjCDQuiDRhNCw0LnQu9GDINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCwg0LjRgdC/0L7Qu9GM0LfRg9GPINC/0LDRgNCw0LzQtdGC0YAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgLWNgfTwvaW5saW5lQ29kZT57YCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCBDU1M6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1jIC4vLmNvbmZpZy90YWlsd2luZC5jb25maWcuanMgLW8gLi9kaXN0L3RhaWx3aW5kLmNzc2B9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2DQo9C30L3QsNC50YLQtSDQsdC+0LvRjNGI0LUg0L4g0L3QsNGB0YLRgNC+0LnQutC1IFRhaWx3aW5kINCyIGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9jb25maWd1cmF0aW9uXCIgcGFzc0hyZWY+PGE+e2DQtNC+0LrRg9C80LXQvdGC0LDRhtC40Lgg0L/QviDQutC+0L3RhNC40LPRg9GA0LDRhtC40LhgfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXszfSBpZD1cInNib3JrYS1kbHlhLXByb2Rha3NoZW5hXCIgdG9jPXt0cnVlfT7QodCx0L7RgNC60LAg0LTQu9GPINC/0YDQvtC00LDQutGI0LXQvdCwPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0J/RgNC4INGB0LHQvtGA0LrQtSDQtNC70Y8g0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstCwINGD0YHRgtCw0L3QvtCy0LjRgtC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YE5PREVfRU5WPXByb2R1Y3Rpb25gfTwvaW5saW5lQ29kZT57YCDQsiDQutC+0LzQsNC90LTQvdC+0Lkg0YHRgtGA0L7QutC1INC/0YDQuCDRgdCx0L7RgNC60LUgQ1NTOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXNzaWduLWxlZnQgdmFyaWFibGVcIlxuICAgICAgICAgICAgfX0+e2BOT0RFX0VOVmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBvcGVyYXRvclwiXG4gICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj57YHByb2R1Y3Rpb24gbnB4IHRhaWx3aW5kY3NzLWNsaUBsYXRlc3QgYnVpbGQgLi9zcmMvdGFpbHdpbmQuY3NzIC1vIC4vZGlzdC90YWlsd2luZC5jc3NgfTwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntg0K3RgtC+INCz0LDRgNCw0L3RgtC40YDRg9C10YIsINGH0YLQviBUYWlsd2luZCDRg9C00LDQu9C40YIg0LLRgdC1INC90LXQuNGB0L/QvtC70YzQt9GD0LXQvNGL0LUgQ1NTINC4INC80LjQvdC40LzQuNC30LjRgNGD0LXRgiDRhNCw0LnQuyBDU1Mg0LTQu9GPINC70YPRh9GI0LXQuSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0LguINCf0YDQvtGH0YLQuNGC0LUg0L3QsNGI0LUg0L7RgtC00LXQu9GM0L3QvtC1INGA0YPQutC+0LLQvtC00YHRgtCy0L4g0L/QviBgfTxfTGluayBocmVmPVwiL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvblwiIHBhc3NIcmVmPjxhPntg0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCDQtNC70Y8g0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstCwYH08L2E+PC9fTGluaz57YCwg0YfRgtC+0LHRiyDRg9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1LmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiaXNwb2x6b3ZhbmllLXRhaWx3aW5kLWNoZXJlei1jZG5cIiB0b2M9e3RydWV9PtCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1IFRhaWx3aW5kINGH0LXRgNC10LcgQ0ROPC9fSGVhZGluZz5cbiAgICAgIDxwPntg0J/QtdGA0LXQtCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INGB0LHQvtGA0LrQuCBDRE4g0L7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LzQvdC+0LPQuNC1INGE0YPQvdC60YbQuNC4LCDQutC+0YLQvtGA0YvQtSDQtNC10LvQsNGO0YIgVGFpbHdpbmQgQ1NTINC+0YLQu9C40YfQvdGL0LwsINC90LXQtNC+0YHRgtGD0L/QvdGLINCx0LXQtyDQstC60LvRjtGH0LXQvdC40Y8gVGFpbHdpbmQg0LIg0L/RgNC+0YbQtdGB0YEg0YHQsdC+0YDQutC4LmB9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxMaXN0IG1keFR5cGU9XCJMaXN0XCI+XG4gIDxMaXN0SXRlbUJhZCBtZHhUeXBlPVwiTGlzdEl0ZW1CYWRcIj7QktGLINC90LUg0LzQvtC20LXRgtC1INC90LDRgdGC0YDQvtC40YLRjCDRgtC10LzRgyDQv9C+INGD0LzQvtC70YfQsNC90LjRjiBUYWlsd2luZDwvTGlzdEl0ZW1CYWQ+XG4gIDxMaXN0SXRlbUJhZCBtZHhUeXBlPVwiTGlzdEl0ZW1CYWRcIj7QktGLINC90LUg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgtCw0LrQuNC1IDxhIGhyZWY9XCIvZG9jcy9mdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXNcIj7QtNC40YDQtdC60YLQuNCy0Ys8L2E+LCDQutCw0LogPGNvZGU+QGFwcGx5PC9jb2RlPiwgPGNvZGU+QHZhcmlhbnRzPC9jb2RlPiDQuCDRgi7QtC48L0xpc3RJdGVtQmFkPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+0JLRiyDQvdC1INC80L7QttC10YLQtSDQstC60LvRjtGH0LjRgtGMINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0LLQsNGA0LjQsNC90YLRiywg0L3QsNC/0YDQuNC80LXRgCA8YSBocmVmPVwiL2RvY3MvaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyNncm91cC1mb2N1c1wiPjxjb2RlPmdyb3VwLWZvY3VzPC9jb2RlPjwvYT48L0xpc3RJdGVtQmFkPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+0JLRiyDQvdC1INC80L7QttC10YLQtSDRg9GB0YLQsNC90LDQstC70LjQstCw0YLRjCDRgdGC0L7RgNC+0L3QvdC40LUg0L/Qu9Cw0LPQuNC90Ys8L0xpc3RJdGVtQmFkPlxuICA8TGlzdEl0ZW1CYWQgbWR4VHlwZT1cIkxpc3RJdGVtQmFkXCI+0JLRiyDQvdC1INC80L7QttC10YLQtSDQuNC30LHQsNCy0LjRgtGM0YHRjyDQvtGCINC90LXQuNGB0L/QvtC70YzQt9GD0LXQvNGL0YUg0YHRgtC40LvQtdC5PC9MaXN0SXRlbUJhZD5cbiAgICA8L0xpc3Q+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPHA+e2DQp9GC0L7QsdGLINC/0L7Qu9GD0YfQuNGC0Ywg0LzQsNC60YHQuNC80LDQu9GM0L3Rg9GOINC+0YLQtNCw0YfRgyDQvtGCIFRhaWx3aW5kLCDQktCw0Lwg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YHQu9C10LTRg9C10YIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2luc3RhbGxpbmctdGFpbHdpbmQtYXMtYS1wb3N0LWNzcy1wbHVnaW5cIlxuICAgICAgICB9fT57YNGD0YHRgtCw0L3QvtCy0LjRgtGMINC10LPQviDQutCw0Log0L/Qu9Cw0LPQuNC9IFBvc3RDU1NgfTwvYT57YC5gfTwvcD5cbiAgICAgIDxwPntg0KfRgtC+0LHRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgVGFpbHdpbmQg0LTQu9GPINCx0YvRgdGC0YDRi9GFINC00LXQvNC+0L3RgdGC0YDQsNGG0LjQuSDQuNC70Lgg0L/RgNC+0YHRgtC+INC/0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0YTRgNC10LnQvNCy0L7RgNC6LCDQt9Cw0LPRgNGD0LfQuNGC0LUg0L/QvtGB0LvQtdC00L3RjtGOINGB0LHQvtGA0LrRgyDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lgg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YfQtdGA0LXQtyBDRE46YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgbGlua2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BocmVmYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YGh0dHBzOi8vdW5wa2cuY29tL3RhaWx3aW5kY3NzQF4yL2Rpc3QvdGFpbHdpbmQubWluLmNzc2B9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgcmVsYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YHN0eWxlc2hlZXRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+XG4gIE5vdNCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+LCDRhdC+0YLRjyDRgdCx0L7RgNC60LAgQ0ROINCy0LXQu9C40LrQsCA8ZW0+KHtzdGF0cy5kZWZhdWx0LmJyb3RsaWZpZWR9INCyINGB0LbQsNGC0L7QvCDQstC40LTQtSwge3N0YXRzLmRlZmF1bHQubWluaWZpZWR9INCyINC40YHRhdC+0LTQvdC+0LwpPC9lbT4sIDxzdHJvbmc+0L7QvdCwINC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YDQsNC30LzQtdGA0LDQvCwg0LrQvtGC0L7RgNGL0LUg0JLRiyDQstC40LTQuNGC0LUg0L/RgNC4INCy0LrQu9GO0YfQtdC90LjQuCBUYWlsd2luZCDQutCw0Log0YfQsNGB0YLQuCDQv9GA0L7RhtC10YHRgdCwINGB0LHQvtGA0LrQuC48L3N0cm9uZz4uXG4gICAgICA8L3A+XG4gICAgICA8cD57YNCh0LDQudGC0YssINC60L7RgtC+0YDRi9C1INGB0LvQtdC00YPRjtGCINC90LDRiNC40LwgYH08X0xpbmsgaHJlZj1cIi9kb2NzL29wdGltaXppbmctZm9yLXByb2R1Y3Rpb25cIiBwYXNzSHJlZj48YT57YNC70YPRh9GI0LjQvCDQv9GA0LDQutGC0LjQutCw0LxgfTwvYT48L19MaW5rPntgLCDQv9C+0YfRgtC4INCy0YHQtdCz0LTQsCDQuNC80LXRjtGCINC/0L7RgdC70LUg0YHQttCw0YLQuNGPINC80LXQvdC10LUgMTDQmtCRLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiaHRtbC1zdGFydGVyLXRlbXBsYXRlXCIgdG9jPXt0cnVlfT5IVE1MIHN0YXJ0ZXIgdGVtcGxhdGU8L19IZWFkaW5nPlxuICAgICAgPHA+e2BGb3IgVGFpbHdpbmQncyBzdHlsZXMgdG8gd29yayBhcyBleHBlY3RlZCwgeW91J2xsIHdhbnQgdG8gdXNlIHRoZSBIVE1MNSBkb2N0eXBlIGFuZCBpbmNsdWRlIHRoZSByZXNwb25zaXZlIHZpZXdwb3J0IG1ldGEgdGFnIHRvIHByb3Blcmx5IGhhbmRsZSByZXNwb25zaXZlIHN0eWxlcyBvbiBhbGwgZGV2aWNlcy5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1odG1sXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBkb2N0eXBlXCJcbiAgICAgICAgICAgIH19PntgPCFkb2N0eXBlIGh0bWw+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGh0bWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgaGVhZGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YG1ldGFgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2hhcnNldGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2BVVEYtOGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BtZXRhYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YG5hbWVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgdmlld3BvcnRgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNvbnRlbnRgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2AvPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BsaW5rYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGhyZWZgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgL3BhdGgvdG8vdGFpbHdpbmQuY3NzYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2ByZWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgc3R5bGVzaGVldGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BoZWFkYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGJvZHlgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBjb21tZW50XCJcbiAgICAgICAgICAgIH19PntgPCEtLSAuLi4gLS0+YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2Bib2R5YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BodG1sYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BNYW55IGZyb250LWVuZCBmcmFtZXdvcmtzIGxpa2UgTmV4dC5qcywgdnVlLWNsaSBhbmQgb3RoZXJzIGRvIGFsbCB0aGlzIGZvciB5b3UgYmVoaW5kIHRoZSBzY2VuZXMgYXV0b21hdGljYWxseSwgc28gZGVwZW5kaW5nIG9uIHdoYXQgeW91J3JlIGJ1aWxkaW5nIHlvdSBtaWdodCBub3QgbmVlZCB0byBzZXQgdGhpcyB1cC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cInBvc3QtY3NzLTctY29tcGF0aWJpbGl0eS1idWlsZFwiIHRvYz17dHJ1ZX0+UG9zdENTUyA3IGNvbXBhdGliaWxpdHkgYnVpbGQ8L19IZWFkaW5nPlxuICAgICAgPHA+e2BBcyBvZiB2Mi4wLCBUYWlsd2luZCBDU1MgZGVwZW5kcyBvbiBQb3N0Q1NTIDguIEJlY2F1c2UgUG9zdENTUyA4IGlzIG9ubHkgYSBmZXcgbW9udGhzIG9sZCwgbWFueSBvdGhlciB0b29scyBpbiB0aGUgZWNvc3lzdGVtIGhhdmVuJ3QgdXBkYXRlZCB5ZXQsIHdoaWNoIG1lYW5zIHlvdSBtaWdodCBzZWUgYW4gZXJyb3IgbGlrZSB0aGlzIGluIHlvdXIgdGVybWluYWwgYWZ0ZXIgaW5zdGFsbGluZyBUYWlsd2luZCBhbmQgdHJ5aW5nIHRvIGNvbXBpbGUgeW91ciBDU1M6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hlbGxcIlxuICAgICAgICAgIH19PntgRXJyb3I6IFBvc3RDU1MgcGx1Z2luIHRhaWx3aW5kY3NzIHJlcXVpcmVzIFBvc3RDU1MgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gbnVtYmVyXCJcbiAgICAgICAgICAgIH19PntgOGB9PC9zcGFuPntgLmB9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPHA+e2BUbyBoZWxwIGJyaWRnZSB0aGUgZ2FwIHVudGlsIGV2ZXJ5b25lIGhhcyB1cGRhdGVkLCB3ZSBhbHNvIHB1Ymxpc2ggYSBQb3N0Q1NTIDcgY29tcGF0aWJpbGl0eSBidWlsZCB1bmRlciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29tcGF0YH08L2lubGluZUNvZGU+e2AgY2hhbm5lbCBvbiBucG0uYH08L3A+XG4gICAgICA8cD57YElmIHlvdSBydW4gaW50byB0aGUgZXJyb3IgbWVudGlvbmVkIGFib3ZlLCB1bmluc3RhbGwgVGFpbHdpbmQgYW5kIHJlLWluc3RhbGwgdXNpbmcgdGhlIGNvbXBhdGliaWxpdHkgYnVpbGQgaW5zdGVhZDpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaGVsbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgbnBtYH08L3NwYW4+e2AgdW5pbnN0YWxsIHRhaWx3aW5kY3NzIHBvc3Rjc3MgYXV0b3ByZWZpeGVyXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YG5wbWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH19PntgaW5zdGFsbGB9PC9zcGFuPntgIHRhaWx3aW5kY3NzQG5wbTpAdGFpbHdpbmRjc3MvcG9zdGNzczctY29tcGF0IHBvc3Rjc3NAXjcgYXV0b3ByZWZpeGVyQF45YH08L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFRoZSBjb21wYXRpYmlsaXR5IGJ1aWxkIGlzIGlkZW50aWNhbCB0byB0aGUgbWFpbiBidWlsZCBpbiBldmVyeSB3YXksIHNvIHlvdSBhcmVuJ3QgbWlzc2luZyBvdXQgb24gYW55IGZlYXR1cmVzIG9yIGFueXRoaW5nIGxpa2UgdGhhdC5gfTwvcD5cbiAgICAgIDxwPntgT25jZSB0aGUgcmVzdCBvZiB5b3VyIHRvb2xzIGhhdmUgYWRkZWQgc3VwcG9ydCBmb3IgUG9zdENTUyA4LCB5b3UgY2FuIG1vdmUgb2ZmIG9mIHRoZSBjb21wYXRpYmlsaXR5IGJ1aWxkIGJ5IHJlLWluc3RhbGxpbmcgVGFpbHdpbmQgYW5kIGl0cyBwZWVyLWRlcGVuZGVuY2llcyB1c2luZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbGF0ZXN0YH08L2lubGluZUNvZGU+e2AgdGFnOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoZWxsXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BucG1gfTwvc3Bhbj57YCB1bmluc3RhbGwgdGFpbHdpbmRjc3MgQHRhaWx3aW5kY3NzL3Bvc3Rjc3M3LWNvbXBhdFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gZnVuY3Rpb25cIlxuICAgICAgICAgICAgfX0+e2BucG1gfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YGluc3RhbGxgfTwvc3Bhbj57YCB0YWlsd2luZGNzc0BsYXRlc3QgcG9zdGNzc0BsYXRlc3QgYXV0b3ByZWZpeGVyQGxhdGVzdGB9PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9