webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Testimonials */ "./src/components/Testimonials.js");
/* harmony import */ var _components_home_DarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/home/DarkMode */ "./src/components/home/DarkMode.js");
/* harmony import */ var _components_home_ConstraintBased__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/home/ConstraintBased */ "./src/components/home/ConstraintBased.js");
/* harmony import */ var _components_home_BuildAnything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/home/BuildAnything */ "./src/components/home/BuildAnything.js");
/* harmony import */ var _components_home_Performance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/Performance */ "./src/components/home/Performance.js");
/* harmony import */ var _components_home_MobileFirst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/MobileFirst */ "./src/components/home/MobileFirst.js");
/* harmony import */ var _components_home_StateVariants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/StateVariants */ "./src/components/home/StateVariants.js");
/* harmony import */ var _components_home_ComponentDriven__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/home/ComponentDriven */ "./src/components/home/ComponentDriven.js");
/* harmony import */ var _components_home_Customization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/home/Customization */ "./src/components/home/Customization.js");
/* harmony import */ var _components_home_ModernFeatures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/home/ModernFeatures */ "./src/components/home/ModernFeatures.js");
/* harmony import */ var _components_home_EditorTools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/home/EditorTools */ "./src/components/home/EditorTools.js");
/* harmony import */ var _components_home_ReadyMadeComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/home/ReadyMadeComponents */ "./src/components/home/ReadyMadeComponents.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Search */ "./src/components/Search.js");
/* harmony import */ var _components_home_Hero__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/home/Hero */ "./src/components/home/Hero.js");
/* harmony import */ var _components_home_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/home/common */ "./src/components/home/common.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Logo */ "./src/components/Logo.js");
/* harmony import */ var _components_home_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/home/Footer */ "./src/components/home/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





















function NpmInstallButton() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('idle'),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var current = true;

    if (state === 'copying') {
      navigator.clipboard.writeText('npm install tailwindcss').then(function () {
        if (current) {
          setState('copied');
        }
      }).catch(function () {
        if (current) {
          setState('error');
        }
      });
    } else if (state === 'copied' || state === 'error') {
      window.setTimeout(function () {
        if (current) {
          setState('idle');
        }
      }, 2000);
    }

    return function () {
      return current = false;
    };
  }, [state]);
  return __jsx("button", {
    type: "button",
    className: "w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200",
    onClick: function onClick() {
      return setState('copying');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "hidden sm:inline text-gray-500",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "$", ' '), "npm install tailwindcss"), __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "(click to copy to clipboard)"), __jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
}

_s(NpmInstallButton, "p0GvzCG18nV0TIXIMzzi4EhtnSs=");

_c = NpmInstallButton;
function Home() {
  return __jsx("div", {
    className: "space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("meta", {
    key: "twitter:title",
    name: "twitter:title",
    content: "Tailwind CSS - \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u0438\u0437 HTML.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("meta", {
    key: "og:title",
    property: "og:title",
    content: "Tailwind CSS - \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u0438\u0437 HTML.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Tailwind CSS - \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B, \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u044F \u0438\u0437 HTML.")), __jsx("header", {
    className: "relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "border-b border-gray-200 py-6 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex space-x-6 sm:space-x-10 ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/docs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "sm:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "\u0414\u043E\u043A\u0438"), __jsx("span", {
    className: "hidden sm:inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"))), __jsx("a", {
    href: "https://github.com/tailwindlabs/tailwindcss",
    className: "text-gray-400 hover:text-gray-500 transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Tailwind CSS \u043D\u0430 GitHub"), __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }))))), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_16__["Logo"], {
    className: "w-auto h-7 sm:h-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }), __jsx("h1", {
    className: "text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B, \u043D\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u044F \u0441\u0432\u043E\u0435\u0433\u043E HTML."), __jsx("p", {
    className: "max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "CSS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043A\u043B\u0430\u0441\u0441\u044B \u0432\u0440\u043E\u0434\u0435 ", __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 90
    }
  }, "flex"), ",", ' ', __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "pt-4"), ", ", __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 44
    }
  }, "text-center"), " \u0438", ' ', __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "rotate-90"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043F\u0440\u044F\u043C\u043E \u0432 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435."), __jsx("div", {
    className: "flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/docs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "\u041D\u0430\u0447\u0430\u0442\u044C")), __jsx(NpmInstallButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }))), __jsx(_components_home_Hero__WEBPACK_IMPORTED_MODULE_14__["Hero"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["BigText"], {
    as: "h2",
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "\xAB\u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438\xBB \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442.")), __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Paragraph"], {
    className: "max-w-4xl mx-auto mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "\u042F \u043D\u0430\u043F\u0438\u0441\u0430\u043B", ' ', __jsx("a", {
    href: "https://adamwathan.me/css-utility-classes-and-separation-of-concerns/",
    className: "text-light-blue-600 font-semibold",
    style: {
      boxShadow: 'inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #bae6fd'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u044B\u0441\u044F\u0447 \u0441\u043B\u043E\u0432"), ' ', __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, "\u043E \u0442\u043E\u043C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \xAB\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u0430 \u043A\u043B\u0430\u0441\u0441\u043E\u0432\xBB \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u0439, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u0439 CSS \u0442\u0440\u0443\u0434\u043D\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C, \u043D\u043E \u043F\u0440\u0430\u0432\u0434\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0412\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u043C\u043D\u0435, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u0442\u0435 \u044D\u0442\u043E \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435. \u0415\u0441\u043B\u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u0430\u0432\u0438\u0442\u044C \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u0440\u0432\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043E\u043B\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0434\u0430\u0442\u044C \u0435\u043C\u0443 \u0448\u0430\u043D\u0441, \u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u0443\u043C\u0430\u044E, \u0412\u044B \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u0441\u044C, \u043A\u0430\u043A \u0412\u044B \u043A\u043E\u0433\u0434\u0430-\u043B\u0438\u0431\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0441 CSS \u043A\u0430\u043A\u0438\u043C-\u043B\u0438\u0431\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C."))), __jsx("figcaption", {
    className: "sm:text-xl font-medium flex flex-col items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "p-1 border-2 border-light-blue-400 rounded-full mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: __webpack_require__(/*! @/img/adam.jpg */ "./src/img/adam.jpg").default,
    alt: "",
    className: "w-10 h-10 rounded-full bg-light-blue-100",
    loading: "lazy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, "\u0410\u0434\u0430\u043C \u0423\u043E\u0442\u0430\u043D"), __jsx("div", {
    className: "text-light-blue-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C Tailwind CSS"))))), __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_1__["Testimonials"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx(_components_home_ConstraintBased__WEBPACK_IMPORTED_MODULE_3__["ConstraintBased"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }), __jsx(_components_home_BuildAnything__WEBPACK_IMPORTED_MODULE_4__["BuildAnything"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx(_components_home_Performance__WEBPACK_IMPORTED_MODULE_5__["Performance"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }), __jsx(_components_home_MobileFirst__WEBPACK_IMPORTED_MODULE_6__["MobileFirst"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }), __jsx(_components_home_StateVariants__WEBPACK_IMPORTED_MODULE_7__["StateVariants"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx(_components_home_ComponentDriven__WEBPACK_IMPORTED_MODULE_8__["ComponentDriven"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), __jsx(_components_home_DarkMode__WEBPACK_IMPORTED_MODULE_2__["DarkMode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }), __jsx(_components_home_Customization__WEBPACK_IMPORTED_MODULE_9__["Customization"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }), __jsx(_components_home_ModernFeatures__WEBPACK_IMPORTED_MODULE_10__["ModernFeatures"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }), __jsx(_components_home_EditorTools__WEBPACK_IMPORTED_MODULE_11__["EditorTools"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx(_components_home_ReadyMadeComponents__WEBPACK_IMPORTED_MODULE_12__["ReadyMadeComponents"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  })), __jsx(_components_home_Footer__WEBPACK_IMPORTED_MODULE_17__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }));
}
_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "NpmInstallButton");
$RefreshReg$(_c2, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5wbUluc3RhbGxCdXR0b24iLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImNhdGNoIiwid2luZG93Iiwic2V0VGltZW91dCIsIkhvbWUiLCJib3hTaGFkb3ciLCJyZXF1aXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxNQUFELENBRFI7QUFBQSxNQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUcxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBQ0EsUUFBSUgsS0FBSyxLQUFLLFNBQWQsRUFBeUI7QUFDdkJJLGVBQVMsQ0FBQ0MsU0FBVixDQUNHQyxTQURILENBQ2EseUJBRGIsRUFFR0MsSUFGSCxDQUVRLFlBQU07QUFDVixZQUFJSixPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxRQUFELENBQVI7QUFDRDtBQUNGLE9BTkgsRUFPR08sS0FQSCxDQU9TLFlBQU07QUFDWCxZQUFJTCxPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxPQUFELENBQVI7QUFDRDtBQUNGLE9BWEg7QUFZRCxLQWJELE1BYU8sSUFBSUQsS0FBSyxLQUFLLFFBQVYsSUFBc0JBLEtBQUssS0FBSyxPQUFwQyxFQUE2QztBQUNsRFMsWUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07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QUEsSUFQRixFQVFFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMseUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBdEdGLEVBbUhFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5IRixDQURGO0FBdUhEO01BeEh1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjMwNjI4YmU4N2UwNGUzYTM3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSAnQC9jb21wb25lbnRzL1Rlc3RpbW9uaWFscydcbmltcG9ydCB7IERhcmtNb2RlIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvRGFya01vZGUnXG5pbXBvcnQgeyBDb25zdHJhaW50QmFzZWQgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9Db25zdHJhaW50QmFzZWQnXG5pbXBvcnQgeyBCdWlsZEFueXRoaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvQnVpbGRBbnl0aGluZydcbmltcG9ydCB7IFBlcmZvcm1hbmNlIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvUGVyZm9ybWFuY2UnXG5pbXBvcnQgeyBNb2JpbGVGaXJzdCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL01vYmlsZUZpcnN0J1xuaW1wb3J0IHsgU3RhdGVWYXJpYW50cyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL1N0YXRlVmFyaWFudHMnXG5pbXBvcnQgeyBDb21wb25lbnREcml2ZW4gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9Db21wb25lbnREcml2ZW4nXG5pbXBvcnQgeyBDdXN0b21pemF0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvQ3VzdG9taXphdGlvbidcbmltcG9ydCB7IE1vZGVybkZlYXR1cmVzIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvTW9kZXJuRmVhdHVyZXMnXG5pbXBvcnQgeyBFZGl0b3JUb29scyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0VkaXRvclRvb2xzJ1xuaW1wb3J0IHsgUmVhZHlNYWRlQ29tcG9uZW50cyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL1JlYWR5TWFkZUNvbXBvbmVudHMnXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAL2NvbXBvbmVudHMvU2VhcmNoJ1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0hlcm8nXG5pbXBvcnQgeyBCaWdUZXh0LCBJbmxpbmVDb2RlLCBMaW5rLCBQYXJhZ3JhcGgsIFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL2NvbW1vbidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExvZ28gfSBmcm9tICdAL2NvbXBvbmVudHMvTG9nbydcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0Zvb3RlcidcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmZ1bmN0aW9uIE5wbUluc3RhbGxCdXR0b24oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoJ2lkbGUnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0cnVlXG4gICAgaWYgKHN0YXRlID09PSAnY29weWluZycpIHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgICAgLndyaXRlVGV4dCgnbnBtIGluc3RhbGwgdGFpbHdpbmRjc3MnKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKCdjb3BpZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgc2V0U3RhdGUoJ2Vycm9yJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ2NvcGllZCcgfHwgc3RhdGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRTdGF0ZSgnaWRsZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDIwMDApXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiAoY3VycmVudCA9IGZhbHNlKVxuICB9LCBbc3RhdGVdKVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGZsZXgtbm9uZSBiZy1ncmF5LTUwIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb250LW1vbm8gbGVhZGluZy02IHB5LTMgc206cHgtNiBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yIHNtOnNwYWNlLXgtNCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC13aGl0ZSBmb2N1czpyaW5nLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoJ2NvcHlpbmcnKX1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUgdGV4dC1ncmF5LTUwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICR7JyAnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIG5wbSBpbnN0YWxsIHRhaWx3aW5kY3NzXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGNsaWNrIHRvIGNvcHkgdG8gY2xpcGJvYXJkKTwvc3Bhbj5cbiAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17MS41fT5cbiAgICAgICAgPHBhdGggZD1cIk04IDE2YzAgMS44ODYgMCAyLjgyOC41ODYgMy40MTRDOS4xNzIgMjAgMTAuMTE0IDIwIDEyIDIwaDRjMS44ODYgMCAyLjgyOCAwIDMuNDE0LS41ODZDMjAgMTguODI4IDIwIDE3Ljg4NiAyMCAxNnYtNGMwLTEuODg2IDAtMi44MjgtLjU4Ni0zLjQxNEMxOC44MjggOCAxNy44ODYgOCAxNiA4bS04IDhoNGMxLjg4NiAwIDIuODI4IDAgMy40MTQtLjU4NkMxNiAxNC44MjggMTYgMTMuODg2IDE2IDEyVjhtLTggOGMtMS44ODYgMC0yLjgyOCAwLTMuNDE0LS41ODZDNCAxNC44MjggNCAxMy44ODYgNCAxMlY4YzAtMS44ODYgMC0yLjgyOC41ODYtMy40MTRDNS4xNzIgNCA2LjExNCA0IDggNGg0YzEuODg2IDAgMi44MjggMCAzLjQxNC41ODZDMTYgNS4xNzIgMTYgNi4xMTQgMTYgOFwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yMCBzbTpzcGFjZS15LTMyIG1kOnNwYWNlLXktNDAgbGc6c3BhY2UteS00NCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIGtleT1cInR3aXR0ZXI6dGl0bGVcIlxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCJcbiAgICAgICAgICBjb250ZW50PVwiVGFpbHdpbmQgQ1NTIC0g0LHRi9GB0YLRgNC+INGB0L7Qt9C00LDQstCw0LnRgtC1INGB0L7QstGA0LXQvNC10L3QvdGL0LUg0LLQtdCxLdGB0LDQudGC0YssINC90LUg0LLRi9GF0L7QtNGPINC40LcgSFRNTC5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIGtleT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcbiAgICAgICAgICBjb250ZW50PVwiVGFpbHdpbmQgQ1NTIC0g0LHRi9GB0YLRgNC+INGB0L7Qt9C00LDQstCw0LnRgtC1INGB0L7QstGA0LXQvNC10L3QvdGL0LUg0LLQtdCxLdGB0LDQudGC0YssINC90LUg0LLRi9GF0L7QtNGPINC40LcgSFRNTC5cIlxuICAgICAgICAvPlxuICAgICAgICA8dGl0bGU+VGFpbHdpbmQgQ1NTIC0g0LHRi9GB0YLRgNC+INGB0L7Qt9C00LDQstCw0LnRgtC1INGB0L7QstGA0LXQvNC10L3QvdGL0LUg0LLQtdCxLdGB0LDQudGC0YssINC90LUg0LLRi9GF0L7QtNGPINC40LcgSFRNTC48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIG1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC04IG1iLTE0IHNtOm1iLTIwIHhsOm1iLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweS02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xNiBzbTptYi0yMCAtbXgtNCBweC00IHNtOm14LTAgc206cHgtMFwiPlxuICAgICAgICAgICAgey8qIDxTZWFyY2ggLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IHNtOnNwYWNlLXgtMTAgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9kb2NzXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctNiBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206aGlkZGVuXCI+0JTQvtC60Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGFpbHdpbmQgQ1NTINC90LAgR2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwMDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT1cInctYXV0byBoLTcgc206aC04XCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgbGVhZGluZy1ub25lIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbXQtMTAgbWItOCBzbTptdC0xNCBzbTptYi0xMFwiPlxuICAgICAgICAgICAg0JHRi9GB0YLRgNC+INGB0L7Qt9C00LDQstCw0LnRgtC1INGB0L7QstGA0LXQvNC10L3QvdGL0LUg0LLQtdCxLdGB0LDQudGC0YssINC90LUg0L/QvtC60LjQtNCw0Y8g0YHQstC+0LXQs9C+IEhUTUwuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgdGV4dC1sZyBzbTp0ZXh0LTJ4bCBzbTpsZWFkaW5nLTEwIGZvbnQtbWVkaXVtIG1iLTEwIHNtOm1iLTExXCI+XG4gICAgICAgICAgICBDU1Mt0YTRgNC10LnQvNCy0L7RgNC6LCDQvtGA0LjQtdC90YLQuNGA0L7QstCw0L3QvdGL0Lkg0L3QsCDQv9C+0LvQtdC30L3Ri9C1INGE0YPQvdC60YbQuNC4INC4INGB0L7QtNC10YDQttCw0YnQuNC5INC60LvQsNGB0YHRiyDQstGA0L7QtNC1IDxJbmxpbmVDb2RlPmZsZXg8L0lubGluZUNvZGU+LHsnICd9XG4gICAgICAgICAgICA8SW5saW5lQ29kZT5wdC00PC9JbmxpbmVDb2RlPiwgPElubGluZUNvZGU+dGV4dC1jZW50ZXI8L0lubGluZUNvZGU+INC4eycgJ31cbiAgICAgICAgICAgIDxJbmxpbmVDb2RlPnJvdGF0ZS05MDwvSW5saW5lQ29kZT4sINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0YHQvtGB0YLQsNCy0LvRj9GC0Ywg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LvRjtCx0L7Qs9C+INC00LjQt9Cw0LnQvdCwINC/0YDRj9C80L4g0LIg0YDQsNC30LzQtdGC0LrQtS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBzcGFjZS15LTQgc206c3BhY2UteS0wIHNtOnNwYWNlLXgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZG9jc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGZsZXgtbm9uZSBiZy1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIHRleHQtbGcgbGVhZGluZy02IGZvbnQtc2VtaWJvbGQgcHktMyBweC02IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC14bCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC13aGl0ZSBmb2N1czpyaW5nLWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICDQndCw0YfQsNGC0YxcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDxOcG1JbnN0YWxsQnV0dG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVybyAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIHRleHQtY2VudGVyIG1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC04XCI+XG4gICAgICAgICAgPEJpZ1RleHQgYXM9XCJoMlwiIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIDxXaWRvbnQ+wqvQm9GD0YfRiNC40LUg0L/RgNCw0LrRgtC40LrQuMK7INC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDQvdC1INGA0LDQsdC+0YLQsNGO0YIuPC9XaWRvbnQ+XG4gICAgICAgICAgPC9CaWdUZXh0PlxuICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICAgICAg0K8g0L3QsNC/0LjRgdCw0Lt7JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hZGFtd2F0aGFuLm1lL2Nzcy11dGlsaXR5LWNsYXNzZXMtYW5kLXNlcGFyYXRpb24tb2YtY29uY2VybnMvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlnaHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgJ2luc2V0IDAgLTAuMTY2NjY2NjY2N2VtIDAgMCAjZmZmLCBpbnNldCAwIC0wLjMzMzMzMzMzMzNlbSAwIDAgI2JhZTZmZCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINC90LXRgdC60L7Qu9GM0LrQviDRgtGL0YHRj9GHINGB0LvQvtCyXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgPFdpZG9udD5cbiAgICAgICAgICAgICAgICAgINC+INGC0L7QvCwg0L/QvtGH0LXQvNGDINGC0YDQsNC00LjRhtC40L7QvdC90YvQtSDCq9GB0LXQvNCw0L3RgtC40YfQtdGB0LrQuNC1INC40LzQtdC90LAg0LrQu9Cw0YHRgdC+0LLCuyDRj9Cy0LvRj9GO0YLRgdGPINC/0YDQuNGH0LjQvdC+0LksINC/0L4g0LrQvtGC0L7RgNC+0LkgQ1NTINGC0YDRg9C00L3QvlxuICAgICAgICAgICAgICAgICAg0L/QvtC00LTQtdGA0LbQuNCy0LDRgtGMLCDQvdC+INC/0YDQsNCy0LTQsCDQsiDRgtC+0LwsINGH0YLQviDQktGLINC90LjQutC+0LPQtNCwINC90LUg0L/QvtCy0LXRgNC40YLQtSDQvNC90LUsINC/0L7QutCwINC90LUg0L/QvtC/0YDQvtCx0YPQtdGC0LUg0Y3RgtC+INC90LAg0YHQsNC80L7QvCDQtNC10LvQtS5cbiAgICAgICAgICAgICAgICAgINCV0YHQu9C4INCS0Ysg0LzQvtC20LXRgtC1INC/0L7QtNCw0LLQuNGC0Ywg0LbQtdC70LDQvdC40LUg0YDQstCw0YLRjCDQtNC+0YHRgtCw0YLQvtGH0L3QviDQtNC+0LvQs9C+LCDRh9GC0L7QsdGLINC00LDRgtGMINC10LzRgyDRiNCw0L3RgSwg0Y8g0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0LTRg9C80LDRjixcbiAgICAgICAgICAgICAgICAgINCS0Ysg0YPQtNC40LLQuNGC0LXRgdGMLCDQutCw0Log0JLRiyDQutC+0LPQtNCwLdC70LjQsdC+INGA0LDQsdC+0YLQsNC70Lgg0YEgQ1NTINC60LDQutC40Lwt0LvQuNCx0L4g0LTRgNGD0LPQuNC8INGB0L/QvtGB0L7QsdC+0LwuXG4gICAgICAgICAgICAgICAgPC9XaWRvbnQ+XG4gICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwic206dGV4dC14bCBmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSBib3JkZXItMiBib3JkZXItbGlnaHQtYmx1ZS00MDAgcm91bmRlZC1mdWxsIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJ0AvaW1nL2FkYW0uanBnJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLWxpZ2h0LWJsdWUtMTAwXCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+0JDQtNCw0Lwg0KPQvtGC0LDQvTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGlnaHQtYmx1ZS02MDBcIj7QodC+0LfQtNCw0YLQtdC70YwgVGFpbHdpbmQgQ1NTPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gc3BhY2UteS0yMCBzbTpzcGFjZS15LTMyIG1kOnNwYWNlLXktNDAgbGc6c3BhY2UteS00NFwiPlxuICAgICAgICA8Q29uc3RyYWludEJhc2VkIC8+XG4gICAgICAgIDxCdWlsZEFueXRoaW5nIC8+XG4gICAgICAgIDxQZXJmb3JtYW5jZSAvPlxuICAgICAgICA8TW9iaWxlRmlyc3QgLz5cbiAgICAgICAgPFN0YXRlVmFyaWFudHMgLz5cbiAgICAgICAgPENvbXBvbmVudERyaXZlbiAvPlxuICAgICAgICA8RGFya01vZGUgLz5cbiAgICAgICAgPEN1c3RvbWl6YXRpb24gLz5cbiAgICAgICAgPE1vZGVybkZlYXR1cmVzIC8+XG4gICAgICAgIDxFZGl0b3JUb29scyAvPlxuICAgICAgICA8UmVhZHlNYWRlQ29tcG9uZW50cyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=