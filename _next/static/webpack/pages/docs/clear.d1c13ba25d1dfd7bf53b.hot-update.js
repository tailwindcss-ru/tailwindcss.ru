webpackHotUpdate_N_E("pages/docs/clear",{

/***/ "./src/pages/docs/clear.mdx":
/*!**********************************!*\
  !*** ./src/pages/docs/clear.mdx ***!
  \**********************************/
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
/* harmony import */ var tailwindcss_lib_plugins_clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tailwindcss/lib/plugins/clear */ "./node_modules/tailwindcss/lib/plugins/clear.js");
/* harmony import */ var tailwindcss_lib_plugins_clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_lib_plugins_clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Variants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Variants */ "./src/components/Variants.js");
/* harmony import */ var _components_Disabling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Disabling */ "./src/components/Disabling.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\pages\\docs\\clear.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsxRuntime classic */

/* @jsx mdx */









var Layout = _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_7__["DocumentationLayout"];
var classes = {
  plugin: tailwindcss_lib_plugins_clear__WEBPACK_IMPORTED_MODULE_9___default.a
};
var meta = {
  "title": "Очистка",
  "shortTitle": "Clear",
  "description": "Утилиты для управления переносом содержимого вокруг элемента."
};
var tableOfContents = [{
  "title": "Очистить слева",
  "slug": "ochistit-sleva",
  "children": []
}, {
  "title": "Очистить справа",
  "slug": "ochistit-sprava",
  "children": []
}, {
  "title": "Clear both",
  "slug": "clear-both",
  "children": []
}, {
  "title": "Don't clear",
  "slug": "don-t-clear",
  "children": []
}, {
  "title": "Responsive",
  "slug": "responsive",
  "children": []
}, {
  "title": "Customizing",
  "slug": "customizing",
  "children": [{
    "title": "Variants",
    "slug": "variants"
  }, {
    "title": "Disabling",
    "slug": "disabling"
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
      lineNumber: 67,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "ochistit-sleva",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 18
    }
  }, "clear-left"), " to position an element below any preceding left-floated elements.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <img class=\"float-left mr-4 my-2 h-24\" src=\"/img/placeholder-fuchsia.svg\">\n  <img class=\"float-right ml-4 my-2 h-32\" src=\"/img/placeholder-fuchsia.svg\">\n  <p class=\"clear-left font-flow text-justify text-fuchsia-500 font-medium\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-left ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-right ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">clear-left</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "fuchsia",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "ochistit-sprava",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 18
    }
  }, "clear-right"), " to position an element below any preceding right-floated elements.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <img class=\"float-left mr-4 my-2 h-24\" src=\"/img/placeholder-light-blue.svg\">\n  <img class=\"float-right ml-4 my-2 h-32\" src=\"/img/placeholder-light-blue.svg\">\n  <p class=\"clear-right font-flow text-light-blue-500 text-justify font-medium\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-left ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-right ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">clear-right</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "lightBlue",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "clear-both",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "Clear both"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 18
    }
  }, "clear-both"), " to position an element below all preceding floated elements.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <img class=\"float-left mr-4 my-2 h-24\" src=\"/img/placeholder-emerald.svg\">\n  <img class=\"float-right ml-4 my-2 h-32\" src=\"/img/placeholder-emerald.svg\">\n  <p class=\"clear-both font-flow text-emerald-500 text-justify font-medium\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-left ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-right ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">clear-both</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "emerald",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "don-t-clear",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Don't clear"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 18
    }
  }, "clear-none"), " to reset any clears that are applied to an element. This is the default value for the clear property.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_CodeSample__WEBPACK_IMPORTED_MODULE_6__["CodeSample"], {
    preview: "\n  <img class=\"float-left mr-4 my-2 h-24\" src=\"/img/placeholder-amber.svg\">\n  <img class=\"float-right ml-4 my-2 h-32\" src=\"/img/placeholder-amber.svg\">\n  <p class=\"clear-none font-flow text-amber-500 text-justify font-medium\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>\n",
    src: undefined,
    snippet: "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-left ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>float-right ...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>path/to/image.jpg<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"code-highlight bg-code-highlight\">clear-none</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>",
    previewClassName: undefined,
    color: "amber",
    min: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "responsive",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "Responsive"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "To control the clear property of an element at a specific breakpoint, add a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 90
    }
  }, "{screen}:"), " prefix to any existing clear utility. For example, use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 203
    }
  }, "md:clear-left"), " to apply the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 278
    }
  }, "clear-left"), " utility at only medium screen sizes and above."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "className": "my-6 rounded-xl overflow-hidden bg-gray-800"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 102,
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
      lineNumber: 104,
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
      lineNumber: 106,
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
      lineNumber: 108,
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
      lineNumber: 110,
      columnNumber: 18
    }
  }), "<"), "p"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }), "class"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-value"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
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
      lineNumber: 118,
      columnNumber: 32
    }
  }), "\""), "clear-right ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "code-highlight bg-code-highlight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 48
    }
  }), "md:clear-left"), " ...", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 52
    }
  }), "\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 127,
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
      lineNumber: 130,
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
      lineNumber: 132,
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
      lineNumber: 134,
      columnNumber: 18
    }
  }), "</"), "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }), ">"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "For more information about Tailwind's responsive design features, check out the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/docs/responsive-design",
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 94
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 141
    }
  }, "Responsive Design")), " documentation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 2,
    id: "customizing",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, "Customizing"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "variants",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, "Variants")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Variants__WEBPACK_IMPORTED_MODULE_10__["Variants"], {
    plugin: "clear",
    mdxType: "Variants",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Heading__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    level: 3,
    id: "disabling",
    toc: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, "Disabling")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Disabling__WEBPACK_IMPORTED_MODULE_11__["Disabling"], {
    plugin: "clear",
    mdxType: "Disabling",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvY2xlYXIubWR4Il0sIm5hbWVzIjpbIkxheW91dCIsIl9MYXlvdXQiLCJjbGFzc2VzIiwicGx1Z2luIiwibWV0YSIsInRhYmxlT2ZDb250ZW50cyIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiX0RlZmF1bHQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwidW5kZWZpbmVkIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsZ0ZBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsUUFBTSxFQUFOQSxvRUFBTUE7QUFEUSxDQUFoQjtBQUdBLElBQU1DLElBQUksR0FBRztBQUNYLFdBQVMsU0FERTtBQUVYLGdCQUFjLE9BRkg7QUFHWCxpQkFBZTtBQUhKLENBQWI7QUFLQSxJQUFNQyxlQUFlLEdBQUcsQ0FBQztBQUN2QixXQUFTLGdCQURjO0FBRXZCLFVBQVEsZ0JBRmU7QUFHdkIsY0FBWTtBQUhXLENBQUQsRUFJckI7QUFDRCxXQUFTLGlCQURSO0FBRUQsVUFBUSxpQkFGUDtBQUdELGNBQVk7QUFIWCxDQUpxQixFQVFyQjtBQUNELFdBQVMsWUFEUjtBQUVELFVBQVEsWUFGUDtBQUdELGNBQVk7QUFIWCxDQVJxQixFQVlyQjtBQUNELFdBQVMsYUFEUjtBQUVELFVBQVEsYUFGUDtBQUdELGNBQVk7QUFIWCxDQVpxQixFQWdCckI7QUFDRCxXQUFTLFlBRFI7QUFFRCxVQUFRLFlBRlA7QUFHRCxjQUFZO0FBSFgsQ0FoQnFCLEVBb0JyQjtBQUNELFdBQVMsYUFEUjtBQUVELFVBQVEsYUFGUDtBQUdELGNBQVksQ0FBQztBQUNYLGFBQVMsVUFERTtBQUVYLFlBQVE7QUFGRyxH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QUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZLLENBQVA7QUFvRkQ7S0F4RnVCSCxVO0FBMEZ4QjtBQUNBQSxVQUFVLENBQUNJLGNBQVgsR0FBNEIsSUFBNUI7QUFDQUosVUFBVSxDQUFDSCxXQUFYLEdBQXlCQSxXQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL2NsZWFyLmQxYzEzYmEyNWQxZGZkN2JmNTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgX0xpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgSGVhZGluZyBhcyBfSGVhZGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9IZWFkaW5nJ1xuaW1wb3J0IHsgQ29kZVNhbXBsZSBhcyBfQ29kZVNhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlU2FtcGxlJ1xuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbkxheW91dCBhcyBfTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBDb250ZW50c0xheW91dCBhcyBfRGVmYXVsdCB9IGZyb20gJ0AvbGF5b3V0cy9Db250ZW50c0xheW91dCdcbmltcG9ydCBwbHVnaW4gZnJvbSAndGFpbHdpbmRjc3MvbGliL3BsdWdpbnMvY2xlYXInXG5pbXBvcnQgeyBWYXJpYW50cyB9IGZyb20gJ0AvY29tcG9uZW50cy9WYXJpYW50cydcbmltcG9ydCB7IERpc2FibGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9EaXNhYmxpbmcnXG5jb25zdCBMYXlvdXQgPSBfTGF5b3V0O1xuY29uc3QgY2xhc3NlcyA9IHtcbiAgcGx1Z2luXG59O1xuY29uc3QgbWV0YSA9IHtcbiAgXCJ0aXRsZVwiOiBcItCe0YfQuNGB0YLQutCwXCIsXG4gIFwic2hvcnRUaXRsZVwiOiBcIkNsZWFyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCLQo9GC0LjQu9C40YLRiyDQtNC70Y8g0YPQv9GA0LDQstC70LXQvdC40Y8g0L/QtdGA0LXQvdC+0YHQvtC8INGB0L7QtNC10YDQttC40LzQvtCz0L4g0LLQvtC60YDRg9CzINGN0LvQtdC80LXQvdGC0LAuXCJcbn07XG5jb25zdCB0YWJsZU9mQ29udGVudHMgPSBbe1xuICBcInRpdGxlXCI6IFwi0J7Rh9C40YHRgtC40YLRjCDRgdC70LXQstCwXCIsXG4gIFwic2x1Z1wiOiBcIm9jaGlzdGl0LXNsZXZhXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcItCe0YfQuNGB0YLQuNGC0Ywg0YHQv9GA0LDQstCwXCIsXG4gIFwic2x1Z1wiOiBcIm9jaGlzdGl0LXNwcmF2YVwiLFxuICBcImNoaWxkcmVuXCI6IFtdXG59LCB7XG4gIFwidGl0bGVcIjogXCJDbGVhciBib3RoXCIsXG4gIFwic2x1Z1wiOiBcImNsZWFyLWJvdGhcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiRG9uJ3QgY2xlYXJcIixcbiAgXCJzbHVnXCI6IFwiZG9uLXQtY2xlYXJcIixcbiAgXCJjaGlsZHJlblwiOiBbXVxufSwge1xuICBcInRpdGxlXCI6IFwiUmVzcG9uc2l2ZVwiLFxuICBcInNsdWdcIjogXCJyZXNwb25zaXZlXCIsXG4gIFwiY2hpbGRyZW5cIjogW11cbn0sIHtcbiAgXCJ0aXRsZVwiOiBcIkN1c3RvbWl6aW5nXCIsXG4gIFwic2x1Z1wiOiBcImN1c3RvbWl6aW5nXCIsXG4gIFwiY2hpbGRyZW5cIjogW3tcbiAgICBcInRpdGxlXCI6IFwiVmFyaWFudHNcIixcbiAgICBcInNsdWdcIjogXCJ2YXJpYW50c1wiXG4gIH0sIHtcbiAgICBcInRpdGxlXCI6IFwiRGlzYWJsaW5nXCIsXG4gICAgXCJzbHVnXCI6IFwiZGlzYWJsaW5nXCJcbiAgfV1cbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgTGF5b3V0LFxuY2xhc3Nlcyxcbm1ldGEsXG50YWJsZU9mQ29udGVudHNcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBfRGVmYXVsdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cIm9jaGlzdGl0LXNsZXZhXCIgdG9jPXt0cnVlfT7QntGH0LjRgdGC0LjRgtGMINGB0LvQtdCy0LA8L19IZWFkaW5nPlxuICAgICAgPHA+e2BVc2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2xlYXItbGVmdGB9PC9pbmxpbmVDb2RlPntgIHRvIHBvc2l0aW9uIGFuIGVsZW1lbnQgYmVsb3cgYW55IHByZWNlZGluZyBsZWZ0LWZsb2F0ZWQgZWxlbWVudHMuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8aW1nIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IG1yLTQgbXktMiBoLTI0XFxcIiBzcmM9XFxcIi9pbWcvcGxhY2Vob2xkZXItZnVjaHNpYS5zdmdcXFwiPlxcbiAgPGltZyBjbGFzcz1cXFwiZmxvYXQtcmlnaHQgbWwtNCBteS0yIGgtMzJcXFwiIHNyYz1cXFwiL2ltZy9wbGFjZWhvbGRlci1mdWNoc2lhLnN2Z1xcXCI+XFxuICA8cCBjbGFzcz1cXFwiY2xlYXItbGVmdCBmb250LWZsb3cgdGV4dC1qdXN0aWZ5IHRleHQtZnVjaHNpYS01MDAgZm9udC1tZWRpdW1cXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPC9wPlxcblwifSBzcmM9e3VuZGVmaW5lZH0gc25pcHBldD17XCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1sZWZ0IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPnNyYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5wYXRoL3RvL2ltYWdlLmpwZzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1yaWdodCAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5zcmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+cGF0aC90by9pbWFnZS5qcGc8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPnA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFxcXCI+Y2xlYXItbGVmdDwvc3Bhbj4gLi4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7Lzwvc3Bhbj5wPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wiZnVjaHNpYVwifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJvY2hpc3RpdC1zcHJhdmFcIiB0b2M9e3RydWV9PtCe0YfQuNGB0YLQuNGC0Ywg0YHQv9GA0LDQstCwPC9fSGVhZGluZz5cbiAgICAgIDxwPntgVXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNsZWFyLXJpZ2h0YH08L2lubGluZUNvZGU+e2AgdG8gcG9zaXRpb24gYW4gZWxlbWVudCBiZWxvdyBhbnkgcHJlY2VkaW5nIHJpZ2h0LWZsb2F0ZWQgZWxlbWVudHMuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8aW1nIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IG1yLTQgbXktMiBoLTI0XFxcIiBzcmM9XFxcIi9pbWcvcGxhY2Vob2xkZXItbGlnaHQtYmx1ZS5zdmdcXFwiPlxcbiAgPGltZyBjbGFzcz1cXFwiZmxvYXQtcmlnaHQgbWwtNCBteS0yIGgtMzJcXFwiIHNyYz1cXFwiL2ltZy9wbGFjZWhvbGRlci1saWdodC1ibHVlLnN2Z1xcXCI+XFxuICA8cCBjbGFzcz1cXFwiY2xlYXItcmlnaHQgZm9udC1mbG93IHRleHQtbGlnaHQtYmx1ZS01MDAgdGV4dC1qdXN0aWZ5IGZvbnQtbWVkaXVtXFxcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gdmVuZW5hdGlzIGV0IGxvcmVtIHNpdCBhbWV0IHZlaGljdWxhLiBFdGlhbSB2ZWwgbmliaCBuZWMgbmlzaSBldWlzbW9kIG1vbGxpcyB1bHRyaWNlcyBjb25kaW1lbnR1bSB2ZWxpdC4gUHJvaW4gdmVsaXQgbGliZXJvLCBpbnRlcmR1bSBhYyByaG9uY3VzIHNpdCBhbWV0LCBwZWxsZW50ZXNxdWUgYWMgdHVycGlzLiBRdWlzcXVlIGFjIGx1Y3R1cyB0dXJwaXMsIHZlbCBlZmZpY2l0dXIgYW50ZS4gQ3JhcyBjb252YWxsaXMgcmlzdXMgdmVsIHZlaGljdWxhIGRhcGlidXMuIERvbmVjIGVnZXQgbmVxdWUgZnJpbmdpbGxhLCBmYXVjaWJ1cyBtaSBxdWlzLCBwb3J0dGl0b3IgbWFnbmEuIENyYXMgcGVsbGVudGVzcXVlIGxlbyBlc3QsIGV0IGx1Y3R1cyBuZXF1ZSBydXRydW0gZXUuIEFsaXF1YW0gY29uc2VxdWF0IHZlbGl0IHNlZCBzZW0gcG9zdWVyZSwgdml0YWUgc29sbGljaXR1ZGluIG1pIGNvbnNlcXVhdC4gTWF1cmlzIGVnZXQgaXBzdW0gc2VkIGR1aSBydXRydW0gZnJpbmdpbGxhLiBEb25lYyB2YXJpdXMgdmVoaWN1bGEgbWFnbmEgc2l0IGFtZXQgYXVjdG9yLiBVdCBjb25ndWUgdmVoaWN1bGEgbGVjdHVzIGluIGJsYW5kaXQuIFZpdmFtdXMgc3VzY2lwaXQgZWxlaWZlbmQgdHVycGlzLCBuZWMgc29kYWxlcyBzZW0gdnVscHV0YXRlIGEuIEN1cmFiaXR1ciBwdWx2aW5hciBsaWJlcm8gdml2ZXJyYSwgZWZmaWNpdHVyIG9kaW8gZXUsIGZpbmlidXMganVzdG8uIEV0aWFtIGV1IHZlaGljdWxhIGZlbGlzLjwvcD5cXG5cIn0gc3JjPXt1bmRlZmluZWR9IHNuaXBwZXQ9e1wiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmltZzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+ZmxvYXQtbGVmdCAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5zcmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+cGF0aC90by9pbWFnZS5qcGc8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPmltZzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+Y2xhc3M8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+ZmxvYXQtcmlnaHQgLi4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCI+c3JjPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPnBhdGgvdG8vaW1hZ2UuanBnPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Jmx0Ozwvc3Bhbj5wPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiY29kZS1oaWdobGlnaHQgYmctY29kZS1oaWdobGlnaHRcXFwiPmNsZWFyLXJpZ2h0PC9zcGFuPiAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIHZlbmVuYXRpcyBldCBsb3JlbSBzaXQgYW1ldCB2ZWhpY3VsYS4gRXRpYW0gdmVsIG5pYmggbmVjIG5pc2kgZXVpc21vZCBtb2xsaXMgdWx0cmljZXMgY29uZGltZW50dW0gdmVsaXQuIFByb2luIHZlbGl0IGxpYmVybywgaW50ZXJkdW0gYWMgcmhvbmN1cyBzaXQgYW1ldCwgcGVsbGVudGVzcXVlIGFjIHR1cnBpcy4gUXVpc3F1ZSBhYyBsdWN0dXMgdHVycGlzLCB2ZWwgZWZmaWNpdHVyIGFudGUuIENyYXMgY29udmFsbGlzIHJpc3VzIHZlbCB2ZWhpY3VsYSBkYXBpYnVzLiBEb25lYyBlZ2V0IG5lcXVlIGZyaW5naWxsYSwgZmF1Y2lidXMgbWkgcXVpcywgcG9ydHRpdG9yIG1hZ25hLiBDcmFzIHBlbGxlbnRlc3F1ZSBsZW8gZXN0LCBldCBsdWN0dXMgbmVxdWUgcnV0cnVtIGV1LiBBbGlxdWFtIGNvbnNlcXVhdCB2ZWxpdCBzZWQgc2VtIHBvc3VlcmUsIHZpdGFlIHNvbGxpY2l0dWRpbiBtaSBjb25zZXF1YXQuIE1hdXJpcyBlZ2V0IGlwc3VtIHNlZCBkdWkgcnV0cnVtIGZyaW5naWxsYS4gRG9uZWMgdmFyaXVzIHZlaGljdWxhIG1hZ25hIHNpdCBhbWV0IGF1Y3Rvci4gVXQgY29uZ3VlIHZlaGljdWxhIGxlY3R1cyBpbiBibGFuZGl0LiBWaXZhbXVzIHN1c2NpcGl0IGVsZWlmZW5kIHR1cnBpcywgbmVjIHNvZGFsZXMgc2VtIHZ1bHB1dGF0ZSBhLiBDdXJhYml0dXIgcHVsdmluYXIgbGliZXJvIHZpdmVycmEsIGVmZmljaXR1ciBvZGlvIGV1LCBmaW5pYnVzIGp1c3RvLiBFdGlhbSBldSB2ZWhpY3VsYSBmZWxpcy48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDsvPC9zcGFuPnA8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cIn0gcHJldmlld0NsYXNzTmFtZT17dW5kZWZpbmVkfSBjb2xvcj17XCJsaWdodEJsdWVcIn0gbWluPXtmYWxzZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiY2xlYXItYm90aFwiIHRvYz17dHJ1ZX0+Q2xlYXIgYm90aDwvX0hlYWRpbmc+XG4gICAgICA8cD57YFVzZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjbGVhci1ib3RoYH08L2lubGluZUNvZGU+e2AgdG8gcG9zaXRpb24gYW4gZWxlbWVudCBiZWxvdyBhbGwgcHJlY2VkaW5nIGZsb2F0ZWQgZWxlbWVudHMuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8aW1nIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IG1yLTQgbXktMiBoLTI0XFxcIiBzcmM9XFxcIi9pbWcvcGxhY2Vob2xkZXItZW1lcmFsZC5zdmdcXFwiPlxcbiAgPGltZyBjbGFzcz1cXFwiZmxvYXQtcmlnaHQgbWwtNCBteS0yIGgtMzJcXFwiIHNyYz1cXFwiL2ltZy9wbGFjZWhvbGRlci1lbWVyYWxkLnN2Z1xcXCI+XFxuICA8cCBjbGFzcz1cXFwiY2xlYXItYm90aCBmb250LWZsb3cgdGV4dC1lbWVyYWxkLTUwMCB0ZXh0LWp1c3RpZnkgZm9udC1tZWRpdW1cXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPC9wPlxcblwifSBzcmM9e3VuZGVmaW5lZH0gc25pcHBldD17XCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1sZWZ0IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPnNyYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5wYXRoL3RvL2ltYWdlLmpwZzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1yaWdodCAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5zcmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+cGF0aC90by9pbWFnZS5qcGc8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPnA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFxcXCI+Y2xlYXItYm90aDwvc3Bhbj4gLi4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7Lzwvc3Bhbj5wPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wiZW1lcmFsZFwifSBtaW49e2ZhbHNlfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJkb24tdC1jbGVhclwiIHRvYz17dHJ1ZX0+RG9uJ3QgY2xlYXI8L19IZWFkaW5nPlxuICAgICAgPHA+e2BVc2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY2xlYXItbm9uZWB9PC9pbmxpbmVDb2RlPntgIHRvIHJlc2V0IGFueSBjbGVhcnMgdGhhdCBhcmUgYXBwbGllZCB0byBhbiBlbGVtZW50LiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgY2xlYXIgcHJvcGVydHkuYH08L3A+XG4gICAgPC9kaXY+XG4gICAgPF9Db2RlU2FtcGxlIHByZXZpZXc9e1wiXFxuICA8aW1nIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IG1yLTQgbXktMiBoLTI0XFxcIiBzcmM9XFxcIi9pbWcvcGxhY2Vob2xkZXItYW1iZXIuc3ZnXFxcIj5cXG4gIDxpbWcgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IG1sLTQgbXktMiBoLTMyXFxcIiBzcmM9XFxcIi9pbWcvcGxhY2Vob2xkZXItYW1iZXIuc3ZnXFxcIj5cXG4gIDxwIGNsYXNzPVxcXCJjbGVhci1ub25lIGZvbnQtZmxvdyB0ZXh0LWFtYmVyLTUwMCB0ZXh0LWp1c3RpZnkgZm9udC1tZWRpdW1cXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPC9wPlxcblwifSBzcmM9e3VuZGVmaW5lZH0gc25pcHBldD17XCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1sZWZ0IC4uLjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPnNyYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5wYXRoL3RvL2ltYWdlLmpwZzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4+PC9zcGFuPjwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPiZsdDs8L3NwYW4+aW1nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5jbGFzczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+XFxcIjwvc3Bhbj5mbG9hdC1yaWdodCAuLi48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIj5zcmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+cGF0aC90by9pbWFnZS5qcGc8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7PC9zcGFuPnA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiPmNsYXNzPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJjb2RlLWhpZ2hsaWdodCBiZy1jb2RlLWhpZ2hsaWdodFxcXCI+Y2xlYXItbm9uZTwvc3Bhbj4gLi4uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiPj48L3NwYW4+PC9zcGFuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSB2ZW5lbmF0aXMgZXQgbG9yZW0gc2l0IGFtZXQgdmVoaWN1bGEuIEV0aWFtIHZlbCBuaWJoIG5lYyBuaXNpIGV1aXNtb2QgbW9sbGlzIHVsdHJpY2VzIGNvbmRpbWVudHVtIHZlbGl0LiBQcm9pbiB2ZWxpdCBsaWJlcm8sIGludGVyZHVtIGFjIHJob25jdXMgc2l0IGFtZXQsIHBlbGxlbnRlc3F1ZSBhYyB0dXJwaXMuIFF1aXNxdWUgYWMgbHVjdHVzIHR1cnBpcywgdmVsIGVmZmljaXR1ciBhbnRlLiBDcmFzIGNvbnZhbGxpcyByaXN1cyB2ZWwgdmVoaWN1bGEgZGFwaWJ1cy4gRG9uZWMgZWdldCBuZXF1ZSBmcmluZ2lsbGEsIGZhdWNpYnVzIG1pIHF1aXMsIHBvcnR0aXRvciBtYWduYS4gQ3JhcyBwZWxsZW50ZXNxdWUgbGVvIGVzdCwgZXQgbHVjdHVzIG5lcXVlIHJ1dHJ1bSBldS4gQWxpcXVhbSBjb25zZXF1YXQgdmVsaXQgc2VkIHNlbSBwb3N1ZXJlLCB2aXRhZSBzb2xsaWNpdHVkaW4gbWkgY29uc2VxdWF0LiBNYXVyaXMgZWdldCBpcHN1bSBzZWQgZHVpIHJ1dHJ1bSBmcmluZ2lsbGEuIERvbmVjIHZhcml1cyB2ZWhpY3VsYSBtYWduYSBzaXQgYW1ldCBhdWN0b3IuIFV0IGNvbmd1ZSB2ZWhpY3VsYSBsZWN0dXMgaW4gYmxhbmRpdC4gVml2YW11cyBzdXNjaXBpdCBlbGVpZmVuZCB0dXJwaXMsIG5lYyBzb2RhbGVzIHNlbSB2dWxwdXRhdGUgYS4gQ3VyYWJpdHVyIHB1bHZpbmFyIGxpYmVybyB2aXZlcnJhLCBlZmZpY2l0dXIgb2RpbyBldSwgZmluaWJ1cyBqdXN0by4gRXRpYW0gZXUgdmVoaWN1bGEgZmVsaXMuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCI+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIj4mbHQ7Lzwvc3Bhbj5wPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCI+Pjwvc3Bhbj48L3NwYW4+XCJ9IHByZXZpZXdDbGFzc05hbWU9e3VuZGVmaW5lZH0gY29sb3I9e1wiYW1iZXJcIn0gbWluPXtmYWxzZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwicmVzcG9uc2l2ZVwiIHRvYz17dHJ1ZX0+UmVzcG9uc2l2ZTwvX0hlYWRpbmc+XG4gICAgICA8cD57YFRvIGNvbnRyb2wgdGhlIGNsZWFyIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgYXQgYSBzcGVjaWZpYyBicmVha3BvaW50LCBhZGQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B7c2NyZWVufTpgfTwvaW5saW5lQ29kZT57YCBwcmVmaXggdG8gYW55IGV4aXN0aW5nIGNsZWFyIHV0aWxpdHkuIEZvciBleGFtcGxlLCB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbWQ6Y2xlYXItbGVmdGB9PC9pbmxpbmVDb2RlPntgIHRvIGFwcGx5IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjbGVhci1sZWZ0YH08L2lubGluZUNvZGU+e2AgdXRpbGl0eSBhdCBvbmx5IG1lZGl1bSBzY3JlZW4gc2l6ZXMgYW5kIGFib3ZlLmB9PC9wPlxuICAgICAgPGRpdiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcIm15LTYgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS04MDBcIlxuICAgICAgfX0+PHByZSBwYXJlbnROYW1lPVwiZGl2XCIgey4uLntcbiAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWh0bWxcIlxuICAgICAgICB9fT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtaHRtbFwiXG4gICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cImNvZGVcIiB7Li4ue1xuICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHRhZ1wiXG4gICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgICB9fT48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgICB9fT57YDxgfTwvc3Bhbj57YHBgfTwvc3Bhbj57YCBgfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIGF0dHItbmFtZVwiXG4gICAgICAgICAgICAgIH19PntgY2xhc3NgfTwvc3Bhbj48c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBhdHRyLXZhbHVlXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A9YH08L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2BcImB9PC9zcGFuPntgY2xlYXItcmlnaHQgYH08c3BhbiBwYXJlbnROYW1lPVwic3BhblwiIHsuLi57XG4gICAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcImNvZGUtaGlnaGxpZ2h0IGJnLWNvZGUtaGlnaGxpZ2h0XCJcbiAgICAgICAgICAgICAgICB9fT57YG1kOmNsZWFyLWxlZnRgfTwvc3Bhbj57YCAuLi5gfTxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICAgIH19PntgXCJgfTwvc3Bhbj48L3NwYW4+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gcHVuY3R1YXRpb25cIlxuICAgICAgICAgICAgICB9fT57YD5gfTwvc3Bhbj48L3NwYW4+e2BcbiAgYH08c3BhbiBwYXJlbnROYW1lPVwiY29kZVwiIHsuLi57XG4gICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gY29tbWVudFwiXG4gICAgICAgICAgICB9fT57YDwhLS0gLi4uIC0tPmB9PC9zcGFuPntgXG5gfTxzcGFuIHBhcmVudE5hbWU9XCJjb2RlXCIgey4uLntcbiAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiB0YWdcIlxuICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IFwidG9rZW4gdGFnXCJcbiAgICAgICAgICAgICAgfX0+PHNwYW4gcGFyZW50TmFtZT1cInNwYW5cIiB7Li4ue1xuICAgICAgICAgICAgICAgICAgXCJjbGFzc05hbWVcIjogXCJ0b2tlbiBwdW5jdHVhdGlvblwiXG4gICAgICAgICAgICAgICAgfX0+e2A8L2B9PC9zcGFuPntgcGB9PC9zcGFuPjxzcGFuIHBhcmVudE5hbWU9XCJzcGFuXCIgey4uLntcbiAgICAgICAgICAgICAgICBcImNsYXNzTmFtZVwiOiBcInRva2VuIHB1bmN0dWF0aW9uXCJcbiAgICAgICAgICAgICAgfX0+e2A+YH08L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT48L2Rpdj5cbiAgICAgIDxwPntgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgVGFpbHdpbmQncyByZXNwb25zaXZlIGRlc2lnbiBmZWF0dXJlcywgY2hlY2sgb3V0IHRoZSBgfTxfTGluayBocmVmPVwiL2RvY3MvcmVzcG9uc2l2ZS1kZXNpZ25cIiBwYXNzSHJlZj48YT57YFJlc3BvbnNpdmUgRGVzaWduYH08L2E+PC9fTGluaz57YCBkb2N1bWVudGF0aW9uLmB9PC9wPlxuICAgICAgPF9IZWFkaW5nIGxldmVsPXsyfSBpZD1cImN1c3RvbWl6aW5nXCIgdG9jPXt0cnVlfT5DdXN0b21pemluZzwvX0hlYWRpbmc+XG4gICAgICA8X0hlYWRpbmcgbGV2ZWw9ezN9IGlkPVwidmFyaWFudHNcIiB0b2M9e3RydWV9PlZhcmlhbnRzPC9fSGVhZGluZz5cbiAgICA8L2Rpdj5cbiAgICA8VmFyaWFudHMgcGx1Z2luPVwiY2xlYXJcIiBtZHhUeXBlPVwiVmFyaWFudHNcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgICAgIDxfSGVhZGluZyBsZXZlbD17M30gaWQ9XCJkaXNhYmxpbmdcIiB0b2M9e3RydWV9PkRpc2FibGluZzwvX0hlYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPERpc2FibGluZyBwbHVnaW49XCJjbGVhclwiIG1keFR5cGU9XCJEaXNhYmxpbmdcIiAvPlxuXG5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuTURYQ29udGVudC5sYXlvdXRQcm9wcyA9IGxheW91dFByb3BzXG4iXSwic291cmNlUm9vdCI6IiJ9