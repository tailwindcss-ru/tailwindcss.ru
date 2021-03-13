webpackHotUpdate_N_E("pages/docs/preflight",{

/***/ "./src/pages/docs/preflight.mdx":
/*!**************************************!*\
  !*** ./src/pages/docs/preflight.mdx ***!
  \**************************************/
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
/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ConfigSample */ "./src/components/ConfigSample.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\pages\\docs\\preflight.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */







var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_6__["DocumentationLayout"];
var meta = {
  "title": "Preflight",
  "description": "Представление набора базовых стилей для проектов Tailwind.."
};
var tableOfContents = [{
  "title": "Обзор",
  "slug": "obzor",
  "children": []
}, {
  "title": "Default margins are removed",
  "slug": "default-margins-are-removed",
  "children": []
}, {
  "title": "Headings are unstyled",
  "slug": "headings-are-unstyled",
  "children": []
}, {
  "title": "Lists are unstyled",
  "slug": "lists-are-unstyled",
  "children": []
}, {
  "title": "Images are block-level",
  "slug": "images-are-block-level",
  "children": []
}, {
  "title": "Border styles are reset globally",
  "slug": "border-styles-are-reset-globally",
  "children": []
}, {
  "title": "Buttons have a default outline",
  "slug": "buttons-have-a-default-outline",
  "children": []
}, {
  "title": "Extending Preflight",
  "slug": "extending-preflight",
  "children": []
}, {
  "title": "Disabling Preflight",
  "slug": "disabling-preflight",
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
      lineNumber: 66,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 7
    }
  }, "\u041E\u0431\u0437\u043E\u0440"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Preflight, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/sindresorhus/modern-normalize"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }), "modern-normalize"), ", Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Tailwind automatically injects these styles when you include ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 75
    }
  }, "@tailwind base"), " in your CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 82,
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
      lineNumber: 84,
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
      lineNumber: 86,
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
      lineNumber: 88,
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
      lineNumber: 90,
      columnNumber: 47
    }
  }), ";")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 42
    }
  }), "/* Preflight will be injected here */"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 98,
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
      lineNumber: 100,
      columnNumber: 53
    }
  }), ";")), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 106,
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
      lineNumber: 108,
      columnNumber: 52
    }
  }), ";"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "While most of the styles in Preflight are meant to go unnoticed \u2014 they simply make things behave more like you'd expect them to \u2014 some are more opinionated and can be surprising when you first encounter them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "For a complete reference of all the styles applied by Preflight, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://unpkg.com/tailwindcss@%5E2/dist/base.css"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 79
    }
  }), "see the stylesheet"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "default-margins-are-removed",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "Default margins are removed"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "Preflight removes all of the default margins from elements like headings, blockquotes, paragraphs, etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 120,
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
      lineNumber: 122,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 14
    }
  }), "blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 18
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }), "margin"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 28
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, "This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "headings-are-unstyled",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, "Headings are unstyled"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, "All heading elements are completely unstyled by default, and have the same font-size and font-weight as normal text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 159,
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
      lineNumber: 161,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 14
    }
  }), "h1,\nh2,\nh3,\nh4,\nh5,\nh6"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }), "font-size"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 36
    }
  }), ":"), " inherit", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 40
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }), "font-weight"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 38
    }
  }), ":"), " inherit", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 40
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, "The reason for this is two-fold:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "It helps you avoid accidentally deviating from your type scale"), ". By default, the browsers assigns sizes to headings that don't exist in Tailwind's default type scale, and aren't guaranteed to exist in your own type scale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, "In UI development, headings should often be visually de-emphasized"), ". Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, "You can always add default header styles to your project by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-base-styles",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 74
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 122
    }
  }, "adding your own base styles")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, "If you'd like to selectively introduce sensible default heading styles into article-style parts of a page, we recommend the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/typography-plugin/",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 138
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 186
    }
  }, "@tailwindcss/typography plugin")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "lists-are-unstyled",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, "Lists are unstyled"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, "Ordered and unordered lists are unstyled by default, with no bullets/numbers and no margin or padding."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 202,
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
      lineNumber: 204,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 14
    }
  }), "ol,\nul"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }), "list-style"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }), ":"), " none", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 37
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }), "margin"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 33
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 33
    }
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 28
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }), "padding"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 34
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 28
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, "If you'd like to style a list, you can do so using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/list-style-type",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 69
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 114
    }
  }, "list-style-type")), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/list-style-position",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 157
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 206
    }
  }, "list-style-position")), " utilities:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
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
      lineNumber: 243,
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
      lineNumber: 245,
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
      lineNumber: 247,
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
      lineNumber: 249,
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
      lineNumber: 251,
      columnNumber: 18
    }
  }), "<"), "ul"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 50
    }
  }), "class"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 257,
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
      lineNumber: 259,
      columnNumber: 32
    }
  }), "\""), "list-disc list-inside", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 57
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 39
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
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
      lineNumber: 268,
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
      lineNumber: 270,
      columnNumber: 18
    }
  }), "<"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 45
    }
  }), ">")), "One", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 44
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
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
      lineNumber: 278,
      columnNumber: 18
    }
  }), "</"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 46
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 285,
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
      lineNumber: 287,
      columnNumber: 18
    }
  }), "<"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 45
    }
  }), ">")), "Two", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 44
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 295,
      columnNumber: 18
    }
  }), "</"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 46
    }
  }), ">")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 302,
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
      lineNumber: 304,
      columnNumber: 18
    }
  }), "<"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 45
    }
  }), ">")), "Three", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 46
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 312,
      columnNumber: 18
    }
  }), "</"), "li"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 46
    }
  }), ">")), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
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
      lineNumber: 319,
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
      lineNumber: 321,
      columnNumber: 18
    }
  }), "</"), "ul"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 46
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }
  }, "You can always add default list styles to your project by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-base-styles",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 72
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 120
    }
  }, "adding your own base styles")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 7
    }
  }, "If you'd like to selectively introduce default list styles into article-style parts of a page, we recommend the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/typography-plugin/",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 126
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 174
    }
  }, "@tailwindcss/typography plugin")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "images-are-block-level",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }
  }, "Images are block-level"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 7
    }
  }, "Images and other replaced elements (like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 55
    }
  }, "svg"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 108
    }
  }, "video"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 163
    }
  }, "canvas"), ", and others) are ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 235
    }
  }, "display: block"), " by default."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 333,
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
      lineNumber: 335,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 14
    }
  }), "img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 5
    }
  }), "display"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 34
    }
  }), ":"), " block", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 38
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 5
    }
  }), "vertical-align"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 41
    }
  }), ":"), " middle", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 39
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 7
    }
  }, "This helps to avoid unexpected alignment issues that you often run into using the browser default of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 115
    }
  }, "display: inline"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 7
    }
  }, "If you ever need to make one of these elements ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 61
    }
  }, "inline"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 127
    }
  }, "block"), ", simply use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 197
    }
  }, "inline"), " utility:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
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
      lineNumber: 370,
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
      lineNumber: 372,
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
      lineNumber: 374,
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
      lineNumber: 376,
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
      lineNumber: 378,
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
      lineNumber: 380,
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
      lineNumber: 382,
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
      lineNumber: 384,
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
      lineNumber: 386,
      columnNumber: 32
    }
  }), "\""), "inline", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 42
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
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
      lineNumber: 392,
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
      lineNumber: 394,
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
      lineNumber: 396,
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
      lineNumber: 398,
      columnNumber: 39
    }
  }), "\"")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 44
    }
  }), "alt"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
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
      lineNumber: 404,
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
      lineNumber: 406,
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
      lineNumber: 408,
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
      lineNumber: 410,
      columnNumber: 39
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "border-styles-are-reset-globally",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 7
    }
  }, "Border styles are reset globally"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 7
    }
  }, "In order to make it easy to add a border by simply adding the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 76
    }
  }, "border"), " class, Tailwind overrides the default border styles for all elements with the following rules:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
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
      lineNumber: 418,
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
      lineNumber: 420,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 14
    }
  }), "*,\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-element"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 3
    }
  }), "::before"), ",\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-element"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 3
    }
  }), "::after")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 48
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 5
    }
  }), "border-width"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 33
    }
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 28
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 5
    }
  }), "border-style"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 39
    }
  }), ":"), " solid", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 38
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 5
    }
  }), "border-color"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 39
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 33
    }
  }), "theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 32
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 28
    }
  }), "'borderColor.default'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 48
    }
  }), ","), " currentColor", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 45
    }
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 28
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 7
    }
  }, "Since the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 24
    }
  }, "border"), " class only sets the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 99
    }
  }, "border-width"), " property, this reset ensures that adding that class always adds a solid 1px border using your configured default border color."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }
  }, "This can cause some unexpected results when integrating certain third-party libraries, like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tailwindlabs/tailwindcss/issues/484"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 106
    }
  }), "Google maps"), " for example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 7
    }
  }, "When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
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
      lineNumber: 476,
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
      lineNumber: 478,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 16
    }
  }), ".google-map"), " *"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 58
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 5
    }
  }), "border-style"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 39
    }
  }), ":"), " none", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 37
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "buttons-have-a-default-outline",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, "Buttons have a default outline"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 7
    }
  }, "To ensure that we provide accessible styles out of the box, we made sure\nthat buttons have a default outline. You can of course override this by\napplying ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 12
    }
  }, "focus:ring"), " or similar utilities to your buttons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
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
      lineNumber: 504,
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
      lineNumber: 506,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 14
    }
  }), "button", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token pseudo-class"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 26
    }
  }), ":focus")), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 47
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 5
    }
  }), "outline"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 34
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 33
    }
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token unit"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 28
    }
  }), "px"), " dotted", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 40
    }
  }), ";"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token property"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 5
    }
  }), "outline"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 34
    }
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 33
    }
  }), "5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token unit"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 28
    }
  }), "px"), " auto -webkit-focus-ring-color", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 63
    }
  }), ";"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 3
    }
  }), "}")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "extending-preflight",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 7
    }
  }, "Extending Preflight"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 7
    }
  }, "If you'd like to add your own base styles on top of Preflight, simply add them to your CSS within a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 114
    }
  }, "@layer base"), " directive:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
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
      lineNumber: 545,
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
      lineNumber: 547,
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
      lineNumber: 549,
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
      lineNumber: 551,
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
      lineNumber: 553,
      columnNumber: 47
    }
  }), ";")), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
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
      lineNumber: 559,
      columnNumber: 16
    }
  }), "@layer"), " base"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 56
    }
  }), "{"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 5
    }
  }), "h1"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 34
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule atapply"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 16
    }
  }), "@apply"), " text-2", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token unit"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 46
    }
  }), "xl"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 31
    }
  }), ";")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 5
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 5
    }
  }), "h2"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 34
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule atapply"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 16
    }
  }), "@apply"), " text-xl", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 47
    }
  }), ";")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 5
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 5
    }
  }), "h3"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 34
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule atapply"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 16
    }
  }), "@apply"), " text-lg", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 47
    }
  }), ";")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 5
    }
  }), "}"), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token selector"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 5
    }
  }), "a"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 33
    }
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule atapply"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token rule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 16
    }
  }), "@apply"), " text-", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token color"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 45
    }
  }), "blue"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token number"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 33
    }
  }), "-600"), " underline", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 47
    }
  }), ";")), "\n  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
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
      lineNumber: 630,
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
      lineNumber: 634,
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
      lineNumber: 636,
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
      lineNumber: 638,
      columnNumber: 53
    }
  }), ";")), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token atrule"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
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
      lineNumber: 644,
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
      lineNumber: 646,
      columnNumber: 52
    }
  }), ";"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 7
    }
  }, "Learn more in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/adding-base-styles",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 32
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 80
    }
  }, "adding base styles documentation")), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "disabling-preflight",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 7
    }
  }, "Disabling Preflight"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 7
    }
  }, "If you'd like to completely disable Preflight \u2014 perhaps because you're integrating Tailwind into an existing project or because you'd like to provide your own base styles \u2014 all you need to do is set ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 213
    }
  }, "preflight"), " to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 274
    }
  }, "false"), " in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 335
    }
  }, "corePlugins"), " section of your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 411
    }
  }, "tailwind.config.js"), " file:")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_8__["ConfigSample"], {
    path: "corePlugins",
    add: {
      preflight: false
    },
    mdxType: "ConfigSample",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvcHJlZmxpZ2h0Lm1keCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJfTGF5b3V0IiwibWV0YSIsInRhYmxlT2ZDb250ZW50cyIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiX0RlZmF1bHQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwicHJlZmxpZ2h0IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLGdGQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1gsV0FBUyxXQURFO0FBRVgsaUJBQWU7QUFGSixDQUFiO0FBSUEsSUFBTUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsV0FBUyxPQURjO0FBRXZCLFVBQVEsT0FGZTtBQUd2QixjQUFZO0FBSFcsQ0FBRCxFQUlyQjtBQUNELFdBQVMsNkJBRFI7QUFFRCxVQUFRLDZCQUZQO0FBR0QsY0FBWTtBQUhYLENBSnFCLEVBUXJCO0FBQ0QsV0FBUyx1QkFEUjtBQUVELFVBQVEsdUJBRlA7QUFHRCxjQUFZO0FBSFgsQ0FScUIsRUFZckI7QUFDRCxXQUFTLG9CQURSO0FBRUQsVUFBUSxvQkFGUDtBQUdELGNBQVk7QUFIWCxDQVpxQixFQWdCckI7QUFDRCxXQUFTLHdCQURSO0FBRUQsVUFBUSx3QkFGUDtBQUdELGNBQVk7QUFIWCxDQWhCcUIsRUFvQnJCO0FBQ0QsV0FBUyxrQ0FEUjtBQUVELFVBQVEsa0NBRlA7QUFHRCxjQUFZO0FBSFgsQ0FwQnFCLEVBd0JyQjtBQUNELFdBQVMsZ0NBRFI7QUFFRCxVQUFRLGdDQUZQO0FBR0QsY0FBWTtBQUhYLENBeEJxQixFQTRCckI7QUFDRCxXQUFTLHFCQURSO0FBRUQsVUFBUSxxQkFGUDtBQUdELGNBQVk7QUFIWCxDQTVC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QUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF4VSx1QkFBb1o7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBcFosV0Fsa0JGLENBUkssRUE0a0JMLDBEQUFDLHFFQUFEO0FBQWMsUUFBSSxFQUFDLGFBQW5CO0FBQWlDLE9BQUcsRUFBRTtBQUNwQ0UsZUFBUyxFQUFFO0FBRHlCLEtBQXRDO0FBRUcsV0FBTyxFQUFDLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVrQkssQ0FBUDtBQWtsQkQ7S0F0bEJ1QkgsVTtBQXdsQnhCO0FBQ0FBLFVBQVUsQ0FBQ0ksY0FBWCxHQUE0QixJQUE1QjtBQUNBSixVQUFVLENBQUNILFdBQVgsR0FBeUJBLFdBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvcHJlZmxpZ2h0LjU1N2JlYWI0OTc5MTQyNTkxZjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgX0xpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgSGVhZGluZyBhcyBfSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkxheW91dCBhcyBfTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBDb250ZW50c0xheW91dCBhcyBfRGVmYXVsdCB9IGZyb20gJ0AvbGF5b3V0cy9Db250ZW50c0xheW91dCdcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGluZydcbmltcG9ydCB7IENvbmZpZ1NhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db25maWdTYW1wbGUnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcIlByZWZsaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwi0J/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0L3QsNCx0L7RgNCwINCx0LDQt9C+0LLRi9GFINGB0YLQuNC70LXQuSDQtNC70Y8g0L/RgNC+0LXQutGC0L7QsiBUYWlsd2luZC4uXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0J7QsdC30L7RgFwiLFxuICBcInNsdWdcIjogXCJvYnpvclwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJEZWZhdWx0IG1hcmdpbnMgYXJlIHJlbW92ZWRcIixcbiAgXCJzbHVnXCI6IFwiZGVmYXVsdC1tYXJnaW5zLWFyZS1yZW1vdmVkXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIkhlYWRpbmdzIGFyZSB1bnN0eWxlZFwiLFxuICBcInNsdWdcIjogXCJoZWFkaW5ncy1hcmUtdW5zdHlsZWRcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiTGlzdHMgYXJlIHVuc3R5bGVkXCIsXG4gIFwic2x1Z1wiOiBcImxpc3RzLWFyZS11bnN0eWxlZFwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJJbWFnZXMgYXJlIGJsb2NrLWxldmVsXCIsXG4gIFwic2x1Z1wiOiBcImltYWdlcy1hcmUtYmxvY2stbGV2ZWxcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiQm9yZGVyIHN0eWxlcyBhcmUgcmVzZXQgZ2xvYmFsbHlcIixcbiAgXCJzbHVnXCI6IFwiYm9yZGVyLXN0eWxlcy1hcmUtcmVzZXQtZ2xvYmFsbHlcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiQnV0dG9ucyBoYXZlIGEgZGVmYXVsdCBvdXRsaW5lXCIsXG4gIFwic2x1Z1wiOiBcImJ1dHRvbnMtaGF2ZS1hLWRlZmF1bHQtb3V0bGluZVwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJFeHRlbmRpbmcgUHJlZmxpZ2h0XCIsXG4gIFwic2x1Z1wiOiBcImV4dGVuZGluZy1wcmVmbGlnaHRcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiRGlzYWJsaW5nIFByZWZsaWdodFwiLFxuICBcInNsdWdcIjogXCJkaXNhYmxpbmctcHJlZmxpZ2h0XCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgTGF5b3V0LFxubWV0YSxcbnRhYmxlT2ZDb250ZW50c1xufTtcbmNvbnN0IE1EWExheW91dCA9IF9EZWZhdWx0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxIZWFkaW5nIGxldmVsPXsyfSBpZD1cIm9iem9yXCIgdG9jPXt0cnVlfSBoaWRkZW4gbWR4VHlwZT1cIkhlYWRpbmdcIj7QntCx0LfQvtGAPC9IZWFkaW5nPlxuICAgICAgPHA+e2BQcmVmbGlnaHQsINGB0L7Qt9C00LDQvdC90YvQuSDQvdCwINC+0YHQvdC+0LLQtSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemVcIlxuICAgICAgICB9fT57YG1vZGVybi1ub3JtYWxpemVgfTwvYT57YCwgUHJlZmxpZ2h0IGlzIGEgc2V0IG9mIGJhc2Ugc3R5bGVzIGZvciBUYWlsd2luZCBwcm9qZWN0cyB0aGF0IGFyZSBkZXNpZ25lZCB0byBzbW9vdGggb3ZlciBjcm9zcy1icm93c2VyIGluY29uc2lzdGVuY2llcyBhbmQgbWFrZSBpdCBlYXNpZXIgZm9yIHlvdSB0byB3b3JrIHdpdGhpbiB0aGUgY29uc3RyYWludHMgb2YgeW91ciBkZXNpZ24gc3lzdGVtLmB9PC9wPlxuICAgICAgPHA+e2BUYWlsd2luZCBhdXRvbWF0aWNhbGx5IGluamVjdHMgdGhlc2Ugc3R5bGVzIHdoZW4geW91IGluY2x1ZGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgQHRhaWx3aW5kIGJhc2VgfTwvaW5saW5lQ29kZT57YCBpbiB5b3VyIENTUzpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIGJhc2VgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbW1lbnRcIlxuICAgICAgICAgICAgfX0+e2AvKiBQcmVmbGlnaHQgd2lsbCBiZSBpbmplY3RlZCBoZXJlICovYH08L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIGNvbXBvbmVudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCB1dGlsaXRpZXNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgV2hpbGUgbW9zdCBvZiB0aGUgc3R5bGVzIGluIFByZWZsaWdodCBhcmUgbWVhbnQgdG8gZ28gdW5ub3RpY2VkIOKAlCB0aGV5IHNpbXBseSBtYWtlIHRoaW5ncyBiZWhhdmUgbW9yZSBsaWtlIHlvdSdkIGV4cGVjdCB0aGVtIHRvIOKAlCBzb21lIGFyZSBtb3JlIG9waW5pb25hdGVkIGFuZCBjYW4gYmUgc3VycHJpc2luZyB3aGVuIHlvdSBmaXJzdCBlbmNvdW50ZXIgdGhlbS5gfTwvcD5cbiAgICAgIDxwPntgRm9yIGEgY29tcGxldGUgcmVmZXJlbmNlIG9mIGFsbCB0aGUgc3R5bGVzIGFwcGxpZWQgYnkgUHJlZmxpZ2h0LCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3VucGtnLmNvbS90YWlsd2luZGNzc0AlNUUyL2Rpc3QvYmFzZS5jc3NcIlxuICAgICAgICB9fT57YHNlZSB0aGUgc3R5bGVzaGVldGB9PC9hPntgLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiZGVmYXVsdC1tYXJnaW5zLWFyZS1yZW1vdmVkXCIgdG9jPXt0cnVlfT5EZWZhdWx0IG1hcmdpbnMgYXJlIHJlbW92ZWQ8L19IZWFkaW5nPlxuICAgICAgPHA+e2BQcmVmbGlnaHQgcmVtb3ZlcyBhbGwgb2YgdGhlIGRlZmF1bHQgbWFyZ2lucyBmcm9tIGVsZW1lbnRzIGxpa2UgaGVhZGluZ3MsIGJsb2NrcXVvdGVzLCBwYXJhZ3JhcGhzLCBldGMuYH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PntgYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmVgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YG1hcmdpbmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBudW1iZXJcIlxuICAgICAgICAgICAgfX0+e2AwYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFRoaXMgbWFrZXMgaXQgaGFyZGVyIHRvIGFjY2lkZW50YWxseSByZWx5IG9uIG1hcmdpbiB2YWx1ZXMgYXBwbGllZCBieSB0aGUgdXNlci1hZ2VudCBzdHlsZXNoZWV0IHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHlvdXIgc3BhY2luZyBzY2FsZS5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImhlYWRpbmdzLWFyZS11bnN0eWxlZFwiIHRvYz17dHJ1ZX0+SGVhZGluZ3MgYXJlIHVuc3R5bGVkPC9fSGVhZGluZz5cbiAgICAgIDxwPntgQWxsIGhlYWRpbmcgZWxlbWVudHMgYXJlIGNvbXBsZXRlbHkgdW5zdHlsZWQgYnkgZGVmYXVsdCwgYW5kIGhhdmUgdGhlIHNhbWUgZm9udC1zaXplIGFuZCBmb250LXdlaWdodCBhcyBub3JtYWwgdGV4dC5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+e2BoMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDZgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGZvbnQtc2l6ZWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBpbmhlcml0YH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2Bmb250LXdlaWdodGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBpbmhlcml0YH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+e2BcbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgVGhlIHJlYXNvbiBmb3IgdGhpcyBpcyB0d28tZm9sZDpgfTwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2BJdCBoZWxwcyB5b3UgYXZvaWQgYWNjaWRlbnRhbGx5IGRldmlhdGluZyBmcm9tIHlvdXIgdHlwZSBzY2FsZWB9PC9zdHJvbmc+e2AuIEJ5IGRlZmF1bHQsIHRoZSBicm93c2VycyBhc3NpZ25zIHNpemVzIHRvIGhlYWRpbmdzIHRoYXQgZG9uJ3QgZXhpc3QgaW4gVGFpbHdpbmQncyBkZWZhdWx0IHR5cGUgc2NhbGUsIGFuZCBhcmVuJ3QgZ3VhcmFudGVlZCB0byBleGlzdCBpbiB5b3VyIG93biB0eXBlIHNjYWxlLmB9PC9saT5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2BJbiBVSSBkZXZlbG9wbWVudCwgaGVhZGluZ3Mgc2hvdWxkIG9mdGVuIGJlIHZpc3VhbGx5IGRlLWVtcGhhc2l6ZWRgfTwvc3Ryb25nPntgLiBNYWtpbmcgaGVhZGluZ3MgdW5zdHlsZWQgYnkgZGVmYXVsdCBtZWFucyBhbnkgc3R5bGluZyB5b3UgYXBwbHkgdG8gaGVhZGluZ3MgaGFwcGVucyBjb25zY2lvdXNseSBhbmQgZGVsaWJlcmF0ZWx5LmB9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cD57YFlvdSBjYW4gYWx3YXlzIGFkZCBkZWZhdWx0IGhlYWRlciBzdHlsZXMgdG8geW91ciBwcm9qZWN0IGJ5IGB9PF9MaW5rIGhyZWY9XCIvZG9jcy9hZGRpbmctYmFzZS1zdHlsZXNcIiBwYXNzSHJlZj48YT57YGFkZGluZyB5b3VyIG93biBiYXNlIHN0eWxlc2B9PC9hPjwvX0xpbms+e2AuYH08L3A+XG4gICAgICA8cD57YElmIHlvdSdkIGxpa2UgdG8gc2VsZWN0aXZlbHkgaW50cm9kdWNlIHNlbnNpYmxlIGRlZmF1bHQgaGVhZGluZyBzdHlsZXMgaW50byBhcnRpY2xlLXN0eWxlIHBhcnRzIG9mIGEgcGFnZSwgd2UgcmVjb21tZW5kIHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvdHlwb2dyYXBoeS1wbHVnaW4vXCIgcGFzc0hyZWY+PGE+e2BAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeSBwbHVnaW5gfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwibGlzdHMtYXJlLXVuc3R5bGVkXCIgdG9jPXt0cnVlfT5MaXN0cyBhcmUgdW5zdHlsZWQ8L19IZWFkaW5nPlxuICAgICAgPHA+e2BPcmRlcmVkIGFuZCB1bm9yZGVyZWQgbGlzdHMgYXJlIHVuc3R5bGVkIGJ5IGRlZmF1bHQsIHdpdGggbm8gYnVsbGV0cy9udW1iZXJzIGFuZCBubyBtYXJnaW4gb3IgcGFkZGluZy5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+e2BvbCxcbnVsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BsaXN0LXN0eWxlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIG5vbmVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YG1hcmdpbmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBudW1iZXJcIlxuICAgICAgICAgICAgfX0+e2AwYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgcGFkZGluZ2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBudW1iZXJcIlxuICAgICAgICAgICAgfX0+e2AwYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YElmIHlvdSdkIGxpa2UgdG8gc3R5bGUgYSBsaXN0LCB5b3UgY2FuIGRvIHNvIHVzaW5nIHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvbGlzdC1zdHlsZS10eXBlXCIgcGFzc0hyZWY+PGE+e2BsaXN0LXN0eWxlLXR5cGVgfTwvYT48L19MaW5rPntgIGFuZCBgfTxfTGluayBocmVmPVwiL2RvY3MvbGlzdC1zdHlsZS1wb3NpdGlvblwiIHBhc3NIcmVmPjxhPntgbGlzdC1zdHlsZS1wb3NpdGlvbmB9PC9hPjwvX0xpbms+e2AgdXRpbGl0aWVzOmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YHVsYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGNsYXNzYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci12YWx1ZVwiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj57YGxpc3QtZGlzYyBsaXN0LWluc2lkZWB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPjwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8YH08L3NwYW4+e2BsaWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgT25lYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPC9gfTwvc3Bhbj57YGxpYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgPGB9PC9zcGFuPntgbGlgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj57YFR3b2B9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BsaWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGxpYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BUaHJlZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDwvYH08L3NwYW4+e2BsaWB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgdWxgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgPmB9PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFlvdSBjYW4gYWx3YXlzIGFkZCBkZWZhdWx0IGxpc3Qgc3R5bGVzIHRvIHlvdXIgcHJvamVjdCBieSBgfTxfTGluayBocmVmPVwiL2RvY3MvYWRkaW5nLWJhc2Utc3R5bGVzXCIgcGFzc0hyZWY+PGE+e2BhZGRpbmcgeW91ciBvd24gYmFzZSBzdHlsZXNgfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPHA+e2BJZiB5b3UnZCBsaWtlIHRvIHNlbGVjdGl2ZWx5IGludHJvZHVjZSBkZWZhdWx0IGxpc3Qgc3R5bGVzIGludG8gYXJ0aWNsZS1zdHlsZSBwYXJ0cyBvZiBhIHBhZ2UsIHdlIHJlY29tbWVuZCB0aGUgYH08X0xpbmsgaHJlZj1cIi9kb2NzL3R5cG9ncmFwaHktcGx1Z2luL1wiIHBhc3NIcmVmPjxhPntgQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHkgcGx1Z2luYH08L2E+PC9fTGluaz57YC5gfTwvcD5cbiAgICAgIDxocj48L2hyPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImltYWdlcy1hcmUtYmxvY2stbGV2ZWxcIiB0b2M9e3RydWV9PkltYWdlcyBhcmUgYmxvY2stbGV2ZWw8L19IZWFkaW5nPlxuICAgICAgPHA+e2BJbWFnZXMgYW5kIG90aGVyIHJlcGxhY2VkIGVsZW1lbnRzIChsaWtlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN2Z2B9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2aWRlb2B9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjYW52YXNgfTwvaW5saW5lQ29kZT57YCwgYW5kIG90aGVycykgYXJlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRpc3BsYXk6IGJsb2NrYH08L2lubGluZUNvZGU+e2AgYnkgZGVmYXVsdC5gfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+e2BpbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3RgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGRpc3BsYXlgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2AgYmxvY2tgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YHZlcnRpY2FsLWFsaWduYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIG1pZGRsZWB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFRoaXMgaGVscHMgdG8gYXZvaWQgdW5leHBlY3RlZCBhbGlnbm1lbnQgaXNzdWVzIHRoYXQgeW91IG9mdGVuIHJ1biBpbnRvIHVzaW5nIHRoZSBicm93c2VyIGRlZmF1bHQgb2YgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGlzcGxheTogaW5saW5lYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgICA8cD57YElmIHlvdSBldmVyIG5lZWQgdG8gbWFrZSBvbmUgb2YgdGhlc2UgZWxlbWVudHMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5saW5lYH08L2lubGluZUNvZGU+e2AgaW5zdGVhZCBvZiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BibG9ja2B9PC9pbmxpbmVDb2RlPntgLCBzaW1wbHkgdXNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmxpbmVgfTwvaW5saW5lQ29kZT57YCB1dGlsaXR5OmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YGltZ2B9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXR0ci1uYW1lXCJcbiAgICAgICAgICAgICAgfX0+e2BjbGFzc2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2BpbmxpbmVgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YHNyY2B9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2AuLi5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLW5hbWVcIlxuICAgICAgICAgICAgICB9fT57YGFsdGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItdmFsdWVcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YD1gfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YFwiYH08L3NwYW4+e2AuLi5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiYm9yZGVyLXN0eWxlcy1hcmUtcmVzZXQtZ2xvYmFsbHlcIiB0b2M9e3RydWV9PkJvcmRlciBzdHlsZXMgYXJlIHJlc2V0IGdsb2JhbGx5PC9fSGVhZGluZz5cbiAgICAgIDxwPntgSW4gb3JkZXIgdG8gbWFrZSBpdCBlYXN5IHRvIGFkZCBhIGJvcmRlciBieSBzaW1wbHkgYWRkaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bib3JkZXJgfTwvaW5saW5lQ29kZT57YCBjbGFzcywgVGFpbHdpbmQgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGJvcmRlciBzdHlsZXMgZm9yIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBmb2xsb3dpbmcgcnVsZXM6YH08L3A+XG4gICAgICA8ZGl2IHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibXktNiByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTgwMFwiXG4gICAgICB9fT48cHJlIHBhcmVudE5hbWU9XCJkaXZcIiB7Li4ue1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgfX0+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PntgKixcbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHNldWRvLWVsZW1lbnRcIlxuICAgICAgICAgICAgICB9fT57YDo6YmVmb3JlYH08L3NwYW4+e2AsXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHBzZXVkby1lbGVtZW50XCJcbiAgICAgICAgICAgICAgfX0+e2A6OmFmdGVyYH08L3NwYW4+PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgYm9yZGVyLXdpZHRoYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDBgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2Bib3JkZXItc3R5bGVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A6YH08L3NwYW4+e2Agc29saWRgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwcm9wZXJ0eVwiXG4gICAgICAgICAgICB9fT57YGJvcmRlci1jb2xvcmB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDpgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBmdW5jdGlvblwiXG4gICAgICAgICAgICB9fT57YHRoZW1lYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgKGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzdHJpbmdcIlxuICAgICAgICAgICAgfX0+e2AnYm9yZGVyQ29sb3IuZGVmYXVsdCdgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2AsYH08L3NwYW4+e2AgY3VycmVudENvbG9yYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2ApYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj48L2NvZGU+PC9wcmU+PC9kaXY+XG4gICAgICA8cD57YFNpbmNlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bib3JkZXJgfTwvaW5saW5lQ29kZT57YCBjbGFzcyBvbmx5IHNldHMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGJvcmRlci13aWR0aGB9PC9pbmxpbmVDb2RlPntgIHByb3BlcnR5LCB0aGlzIHJlc2V0IGVuc3VyZXMgdGhhdCBhZGRpbmcgdGhhdCBjbGFzcyBhbHdheXMgYWRkcyBhIHNvbGlkIDFweCBib3JkZXIgdXNpbmcgeW91ciBjb25maWd1cmVkIGRlZmF1bHQgYm9yZGVyIGNvbG9yLmB9PC9wPlxuICAgICAgPHA+e2BUaGlzIGNhbiBjYXVzZSBzb21lIHVuZXhwZWN0ZWQgcmVzdWx0cyB3aGVuIGludGVncmF0aW5nIGNlcnRhaW4gdGhpcmQtcGFydHkgbGlicmFyaWVzLCBsaWtlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzQ4NFwiXG4gICAgICAgIH19PntgR29vZ2xlIG1hcHNgfTwvYT57YCBmb3IgZXhhbXBsZS5gfTwvcD5cbiAgICAgIDxwPntgV2hlbiB5b3UgcnVuIGludG8gc2l0dWF0aW9ucyBsaWtlIHRoaXMsIHlvdSBjYW4gd29yayBhcm91bmQgdGhlbSBieSBvdmVycmlkaW5nIHRoZSBQcmVmbGlnaHQgc3R5bGVzIHdpdGggeW91ciBvd24gY3VzdG9tIENTUzpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY2xhc3NcIlxuICAgICAgICAgICAgICB9fT57YC5nb29nbGUtbWFwYH08L3NwYW4+e2AgKmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHByb3BlcnR5XCJcbiAgICAgICAgICAgIH19PntgYm9yZGVyLXN0eWxlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIG5vbmVgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiYnV0dG9ucy1oYXZlLWEtZGVmYXVsdC1vdXRsaW5lXCIgdG9jPXt0cnVlfT5CdXR0b25zIGhhdmUgYSBkZWZhdWx0IG91dGxpbmU8L19IZWFkaW5nPlxuICAgICAgPHA+e2BUbyBlbnN1cmUgdGhhdCB3ZSBwcm92aWRlIGFjY2Vzc2libGUgc3R5bGVzIG91dCBvZiB0aGUgYm94LCB3ZSBtYWRlIHN1cmVcbnRoYXQgYnV0dG9ucyBoYXZlIGEgZGVmYXVsdCBvdXRsaW5lLiBZb3UgY2FuIG9mIGNvdXJzZSBvdmVycmlkZSB0aGlzIGJ5XG5hcHBseWluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bmb2N1czpyaW5nYH08L2lubGluZUNvZGU+e2Agb3Igc2ltaWxhciB1dGlsaXRpZXMgdG8geW91ciBidXR0b25zLmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWNzc1wiXG4gICAgICAgIH19Pjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBzZWxlY3RvclwiXG4gICAgICAgICAgICB9fT57YGJ1dHRvbmB9PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHNldWRvLWNsYXNzXCJcbiAgICAgICAgICAgICAgfX0+e2A6Zm9jdXNgfTwvc3Bhbj48L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BvdXRsaW5lYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDFgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdW5pdFwiXG4gICAgICAgICAgICB9fT57YHB4YH08L3NwYW4+e2AgZG90dGVkYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHJvcGVydHlcIlxuICAgICAgICAgICAgfX0+e2BvdXRsaW5lYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgOmB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIG51bWJlclwiXG4gICAgICAgICAgICB9fT57YDVgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdW5pdFwiXG4gICAgICAgICAgICB9fT57YHB4YH08L3NwYW4+e2AgYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3JgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YDtgfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+PC9jb2RlPjwvcHJlPjwvZGl2PlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiZXh0ZW5kaW5nLXByZWZsaWdodFwiIHRvYz17dHJ1ZX0+RXh0ZW5kaW5nIFByZWZsaWdodDwvX0hlYWRpbmc+XG4gICAgICA8cD57YElmIHlvdSdkIGxpa2UgdG8gYWRkIHlvdXIgb3duIGJhc2Ugc3R5bGVzIG9uIHRvcCBvZiBQcmVmbGlnaHQsIHNpbXBseSBhZGQgdGhlbSB0byB5b3VyIENTUyB3aXRoaW4gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BAbGF5ZXIgYmFzZWB9PC9pbmxpbmVDb2RlPntgIGRpcmVjdGl2ZTpgfTwvcD5cbiAgICAgIDxkaXYgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJteS02IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktODAwXCJcbiAgICAgIH19PjxwcmUgcGFyZW50TmFtZT1cImRpdlwiIHsuLi57XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1jc3NcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtY3NzXCJcbiAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIGJhc2VgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAbGF5ZXJgfTwvc3Bhbj57YCBiYXNlYH08L3NwYW4+e2AgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B7YH08L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gc2VsZWN0b3JcIlxuICAgICAgICAgICAgfX0+e2BoMWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlIGF0YXBwbHlcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGFwcGx5YH08L3NwYW4+e2AgdGV4dC0yYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB1bml0XCJcbiAgICAgICAgICAgICAgfX0+e2B4bGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PntgaDJgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZSBhdGFwcGx5XCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEBhcHBseWB9PC9zcGFuPntgIHRleHQteGxgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PntgaDNgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YHtgfTwvc3Bhbj57YFxuICAgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZSBhdGFwcGx5XCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEBhcHBseWB9PC9zcGFuPntgIHRleHQtbGdgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19PntgfWB9PC9zcGFuPntgXG4gIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHNlbGVjdG9yXCJcbiAgICAgICAgICAgIH19PntgYWB9PC9zcGFuPntgIGB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgIH19Pntge2B9PC9zcGFuPntgXG4gICAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlIGF0YXBwbHlcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcnVsZVwiXG4gICAgICAgICAgICAgIH19PntgQGFwcGx5YH08L3NwYW4+e2AgdGV4dC1gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGNvbG9yXCJcbiAgICAgICAgICAgICAgfX0+e2BibHVlYH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gbnVtYmVyXCJcbiAgICAgICAgICAgICAgfX0+e2AtNjAwYH08L3NwYW4+e2AgdW5kZXJsaW5lYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgIH19PntgO2B9PC9zcGFuPjwvc3Bhbj57YFxuICBgfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICB9fT57YH1gfTwvc3Bhbj57YFxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgfX0+e2B9YH08L3NwYW4+e2BcblxuYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gYXRydWxlXCJcbiAgICAgICAgICAgIH19PjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHJ1bGVcIlxuICAgICAgICAgICAgICB9fT57YEB0YWlsd2luZGB9PC9zcGFuPntgIGNvbXBvbmVudHNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPntgXG5cbmB9PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0cnVsZVwiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBydWxlXCJcbiAgICAgICAgICAgICAgfX0+e2BAdGFpbHdpbmRgfTwvc3Bhbj57YCB1dGlsaXRpZXNgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A7YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgTGVhcm4gbW9yZSBpbiB0aGUgYH08X0xpbmsgaHJlZj1cIi9kb2NzL2FkZGluZy1iYXNlLXN0eWxlc1wiIHBhc3NIcmVmPjxhPntgYWRkaW5nIGJhc2Ugc3R5bGVzIGRvY3VtZW50YXRpb25gfTwvYT48L19MaW5rPntgLmB9PC9wPlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiZGlzYWJsaW5nLXByZWZsaWdodFwiIHRvYz17dHJ1ZX0+RGlzYWJsaW5nIFByZWZsaWdodDwvX0hlYWRpbmc+XG4gICAgICA8cD57YElmIHlvdSdkIGxpa2UgdG8gY29tcGxldGVseSBkaXNhYmxlIFByZWZsaWdodCDigJQgcGVyaGFwcyBiZWNhdXNlIHlvdSdyZSBpbnRlZ3JhdGluZyBUYWlsd2luZCBpbnRvIGFuIGV4aXN0aW5nIHByb2plY3Qgb3IgYmVjYXVzZSB5b3UnZCBsaWtlIHRvIHByb3ZpZGUgeW91ciBvd24gYmFzZSBzdHlsZXMg4oCUIGFsbCB5b3UgbmVlZCB0byBkbyBpcyBzZXQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHJlZmxpZ2h0YH08L2lubGluZUNvZGU+e2AgdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZmFsc2VgfTwvaW5saW5lQ29kZT57YCBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY29yZVBsdWdpbnNgfTwvaW5saW5lQ29kZT57YCBzZWN0aW9uIG9mIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGFpbHdpbmQuY29uZmlnLmpzYH08L2lubGluZUNvZGU+e2AgZmlsZTpgfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8Q29uZmlnU2FtcGxlIHBhdGg9XCJjb3JlUGx1Z2luc1wiIGFkZD17e1xuICAgICAgcHJlZmxpZ2h0OiBmYWxzZVxuICAgIH19IG1keFR5cGU9XCJDb25maWdTYW1wbGVcIiAvPlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9