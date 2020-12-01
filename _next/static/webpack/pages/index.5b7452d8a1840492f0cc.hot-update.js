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
  }, __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_13__["Search"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex space-x-6 sm:space-x-10",
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
  }, "Adam Wathan"), __jsx("div", {
    className: "text-light-blue-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "Creator of Tailwind CSS"))))), __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_1__["Testimonials"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5wbUluc3RhbGxCdXR0b24iLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImNhdGNoIiwid2luZG93Iiwic2V0VGltZW91dCIsIkhvbWUiLCJib3hTaGFkb3ciLCJyZXF1aXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxNQUFELENBRFI7QUFBQSxNQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUcxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBQ0EsUUFBSUgsS0FBSyxLQUFLLFNBQWQsRUFBeUI7QUFDdkJJLGVBQVMsQ0FBQ0MsU0FBVixDQUNHQyxTQURILENBQ2EseUJBRGIsRUFFR0MsSUFGSCxDQUVRLFlBQU07QUFDVixZQUFJSixPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxRQUFELENBQVI7QUFDRDtBQUNGLE9BTkgsRUFPR08sS0FQSCxDQU9TLFlBQU07QUFDWCxZQUFJTCxPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxPQUFELENBQVI7QUFDRDtBQUNGLE9BWEg7QUFZRCxLQWJELE1BYU8sSUFBSUQsS0FBSyxLQUFLLFFBQVYsSUFBc0JBLEtBQUssS0FBSyxPQUFwQyxFQUE2QztBQUNsRFMsWUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07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QUEsSUFORixFQU9FLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyx5RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0F0R0YsRUFtSEUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkhGLENBREY7QUF1SEQ7TUF4SHVCSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViNzQ1MmQ4YTE4NDA0OTJmMGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0aW1vbmlhbHMgfSBmcm9tICdAL2NvbXBvbmVudHMvVGVzdGltb25pYWxzJ1xuaW1wb3J0IHsgRGFya01vZGUgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9EYXJrTW9kZSdcbmltcG9ydCB7IENvbnN0cmFpbnRCYXNlZCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0NvbnN0cmFpbnRCYXNlZCdcbmltcG9ydCB7IEJ1aWxkQW55dGhpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9CdWlsZEFueXRoaW5nJ1xuaW1wb3J0IHsgUGVyZm9ybWFuY2UgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9QZXJmb3JtYW5jZSdcbmltcG9ydCB7IE1vYmlsZUZpcnN0IH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvTW9iaWxlRmlyc3QnXG5pbXBvcnQgeyBTdGF0ZVZhcmlhbnRzIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvU3RhdGVWYXJpYW50cydcbmltcG9ydCB7IENvbXBvbmVudERyaXZlbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0NvbXBvbmVudERyaXZlbidcbmltcG9ydCB7IEN1c3RvbWl6YXRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9DdXN0b21pemF0aW9uJ1xuaW1wb3J0IHsgTW9kZXJuRmVhdHVyZXMgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9Nb2Rlcm5GZWF0dXJlcydcbmltcG9ydCB7IEVkaXRvclRvb2xzIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvRWRpdG9yVG9vbHMnXG5pbXBvcnQgeyBSZWFkeU1hZGVDb21wb25lbnRzIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvUmVhZHlNYWRlQ29tcG9uZW50cydcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2gnXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvSGVybydcbmltcG9ydCB7IEJpZ1RleHQsIElubGluZUNvZGUsIExpbmssIFBhcmFncmFwaCwgV2lkb250IH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvY29tbW9uJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvRm9vdGVyJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZnVuY3Rpb24gTnBtSW5zdGFsbEJ1dHRvbigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnaWRsZScpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHRydWVcbiAgICBpZiAoc3RhdGUgPT09ICdjb3B5aW5nJykge1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgICAud3JpdGVUZXh0KCducG0gaW5zdGFsbCB0YWlsd2luZGNzcycpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgICAgc2V0U3RhdGUoJ2NvcGllZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSgnZXJyb3InKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAnY29waWVkJyB8fCBzdGF0ZSA9PT0gJ2Vycm9yJykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIHNldFN0YXRlKCdpZGxlJylcbiAgICAgICAgfVxuICAgICAgfSwgMjAwMClcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IChjdXJyZW50ID0gZmFsc2UpXG4gIH0sIFtzdGF0ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gZmxleC1ub25lIGJnLWdyYXktNTAgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvbnQtbW9ubyBsZWFkaW5nLTYgcHktMyBzbTpweC02IGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTIgc206c3BhY2UteC00IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LXdoaXRlIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSgnY29weWluZycpfVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZSB0ZXh0LWdyYXktNTAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgJHsnICd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgbnBtIGluc3RhbGwgdGFpbHdpbmRjc3NcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY2xpY2sgdG8gY29weSB0byBjbGlwYm9hcmQpPC9zcGFuPlxuICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjV9PlxuICAgICAgICA8cGF0aCBkPVwiTTggMTZjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNEM5LjE3MiAyMCAxMC4xMTQgMjAgMTIgMjBoNGMxLjg4NiAwIDIuODI4IDAgMy40MTQtLjU4NkMyMCAxOC44MjggMjAgMTcuODg2IDIwIDE2di00YzAtMS44ODYgMC0yLjgyOC0uNTg2LTMuNDE0QzE4LjgyOCA4IDE3Ljg4NiA4IDE2IDhtLTggOGg0YzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2QzE2IDE0LjgyOCAxNiAxMy44ODYgMTYgMTJWOG0tOCA4Yy0xLjg4NiAwLTIuODI4IDAtMy40MTQtLjU4NkM0IDE0LjgyOCA0IDEzLjg4NiA0IDEyVjhjMC0xLjg4NiAwLTIuODI4LjU4Ni0zLjQxNEM1LjE3MiA0IDYuMTE0IDQgOCA0aDRjMS44ODYgMCAyLjgyOCAwIDMuNDE0LjU4NkMxNiA1LjE3MiAxNiA2LjExNCAxNiA4XCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIwIHNtOnNwYWNlLXktMzIgbWQ6c3BhY2UteS00MCBsZzpzcGFjZS15LTQ0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAga2V5PVwidHdpdHRlcjp0aXRsZVwiXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUYWlsd2luZCBDU1MgLSDQsdGL0YHRgtGA0L4g0YHQvtC30LTQsNCy0LDQudGC0LUg0YHQvtCy0YDQtdC80LXQvdC90YvQtSDQstC10LEt0YHQsNC50YLRiywg0L3QtSDQstGL0YXQvtC00Y8g0LjQtyBIVE1MLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAga2V5PVwib2c6dGl0bGVcIlxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUYWlsd2luZCBDU1MgLSDQsdGL0YHRgtGA0L4g0YHQvtC30LTQsNCy0LDQudGC0LUg0YHQvtCy0YDQtdC80LXQvdC90YvQtSDQstC10LEt0YHQsNC50YLRiywg0L3QtSDQstGL0YXQvtC00Y8g0LjQtyBIVE1MLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT5UYWlsd2luZCBDU1MgLSDQsdGL0YHRgtGA0L4g0YHQvtC30LTQsNCy0LDQudGC0LUg0YHQvtCy0YDQtdC80LXQvdC90YvQtSDQstC10LEt0YHQsNC50YLRiywg0L3QtSDQstGL0YXQvtC00Y8g0LjQtyBIVE1MLjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbWF4LXctc2NyZWVuLWxnIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTggbWItMTQgc206bWItMjAgeGw6bWItOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB5LTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTE2IHNtOm1iLTIwIC1teC00IHB4LTQgc206bXgtMCBzbTpweC0wXCI+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IHNtOnNwYWNlLXgtMTBcIj5cbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZG9jc1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLTYgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPtCU0L7QutC4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRhaWx3aW5kIENTUyDQvdCwIEdpdEh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMDAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TG9nbyBjbGFzc05hbWU9XCJ3LWF1dG8gaC03IHNtOmgtOFwiIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHNtOnRleHQtNnhsIGxnOnRleHQtN3hsIGxlYWRpbmctbm9uZSBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG10LTEwIG1iLTggc206bXQtMTQgc206bWItMTBcIj5cbiAgICAgICAgICAgINCR0YvRgdGC0YDQviDRgdC+0LfQtNCw0LLQsNC50YLQtSDRgdC+0LLRgNC10LzQtdC90L3Ri9C1INCy0LXQsS3RgdCw0LnRgtGLLCDQvdC1INC/0L7QutC40LTQsNGPINGB0LLQvtC10LPQviBIVE1MLlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIHRleHQtbGcgc206dGV4dC0yeGwgc206bGVhZGluZy0xMCBmb250LW1lZGl1bSBtYi0xMCBzbTptYi0xMVwiPlxuICAgICAgICAgICAgQ1NTLdGE0YDQtdC50LzQstC+0YDQuiwg0L7RgNC40LXQvdGC0LjRgNC+0LLQsNC90L3Ri9C5INC90LAg0L/QvtC70LXQt9C90YvQtSDRhNGD0L3QutGG0LjQuCDQuCDRgdC+0LTQtdGA0LbQsNGJ0LjQuSDQutC70LDRgdGB0Ysg0LLRgNC+0LTQtSA8SW5saW5lQ29kZT5mbGV4PC9JbmxpbmVDb2RlPix7JyAnfVxuICAgICAgICAgICAgPElubGluZUNvZGU+cHQtNDwvSW5saW5lQ29kZT4sIDxJbmxpbmVDb2RlPnRleHQtY2VudGVyPC9JbmxpbmVDb2RlPiDQuHsnICd9XG4gICAgICAgICAgICA8SW5saW5lQ29kZT5yb3RhdGUtOTA8L0lubGluZUNvZGU+LCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INGB0L7RgdGC0LDQstC70Y/RgtGMINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC70Y7QsdC+0LPQviDQtNC40LfQsNC50L3QsCDQv9GA0Y/QvNC+INCyINGA0LDQt9C80LXRgtC60LUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgc3BhY2UteS00IHNtOnNwYWNlLXktMCBzbTpzcGFjZS14LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2RvY3NcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBmbGV4LW5vbmUgYmctZ3JheS05MDAgaG92ZXI6YmctZ3JheS03MDAgdGV4dC13aGl0ZSB0ZXh0LWxnIGxlYWRpbmctNiBmb250LXNlbWlib2xkIHB5LTMgcHgtNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQteGwgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtd2hpdGUgZm9jdXM6cmluZy1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICA8TnBtSW5zdGFsbEJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlcm8gLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCB0ZXh0LWNlbnRlciBtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtOFwiPlxuICAgICAgICAgIDxCaWdUZXh0IGFzPVwiaDJcIiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICA8V2lkb250PsKr0JvRg9GH0YjQuNC1INC/0YDQsNC60YLQuNC60LjCuyDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L3QtSDRgNCw0LHQvtGC0LDRjtGCLjwvV2lkb250PlxuICAgICAgICAgIDwvQmlnVGV4dD5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGggY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgICAgINCvINC90LDQv9C40YHQsNC7eycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWRhbXdhdGhhbi5tZS9jc3MtdXRpbGl0eS1jbGFzc2VzLWFuZC1zZXBhcmF0aW9uLW9mLWNvbmNlcm5zL1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LWJsdWUtNjAwIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgICAgICAgICdpbnNldCAwIC0wLjE2NjY2NjY2NjdlbSAwIDAgI2ZmZiwgaW5zZXQgMCAtMC4zMzMzMzMzMzMzZW0gMCAwICNiYWU2ZmQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQvdC10YHQutC+0LvRjNC60L4g0YLRi9GB0Y/RhyDRgdC70L7QslxuICAgICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAgIDxXaWRvbnQ+XG4gICAgICAgICAgICAgICAgICDQviDRgtC+0LwsINC/0L7Rh9C10LzRgyDRgtGA0LDQtNC40YbQuNC+0L3QvdGL0LUgwqvRgdC10LzQsNC90YLQuNGH0LXRgdC60LjQtSDQuNC80LXQvdCwINC60LvQsNGB0YHQvtCywrsg0Y/QstC70Y/RjtGC0YHRjyDQv9GA0LjRh9C40L3QvtC5LCDQv9C+INC60L7RgtC+0YDQvtC5IENTUyDRgtGA0YPQtNC90L5cbiAgICAgICAgICAgICAgICAgINC/0L7QtNC00LXRgNC20LjQstCw0YLRjCwg0L3QviDQv9GA0LDQstC00LAg0LIg0YLQvtC8LCDRh9GC0L4g0JLRiyDQvdC40LrQvtCz0LTQsCDQvdC1INC/0L7QstC10YDQuNGC0LUg0LzQvdC1LCDQv9C+0LrQsCDQvdC1INC/0L7Qv9GA0L7QsdGD0LXRgtC1INGN0YLQviDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUuXG4gICAgICAgICAgICAgICAgICDQldGB0LvQuCDQktGLINC80L7QttC10YLQtSDQv9C+0LTQsNCy0LjRgtGMINC20LXQu9Cw0L3QuNC1INGA0LLQsNGC0Ywg0LTQvtGB0YLQsNGC0L7Rh9C90L4g0LTQvtC70LPQviwg0YfRgtC+0LHRiyDQtNCw0YLRjCDQtdC80YMg0YjQsNC90YEsINGPINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INC00YPQvNCw0Y4sXG4gICAgICAgICAgICAgICAgICDQktGLINGD0LTQuNCy0LjRgtC10YHRjCwg0LrQsNC6INCS0Ysg0LrQvtCz0LTQsC3Qu9C40LHQviDRgNCw0LHQvtGC0LDQu9C4INGBIENTUyDQutCw0LrQuNC8LdC70LjQsdC+INC00YDRg9Cz0LjQvCDRgdC/0L7RgdC+0LHQvtC8LlxuICAgICAgICAgICAgICAgIDwvV2lkb250PlxuICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cInNtOnRleHQteGwgZm9udC1tZWRpdW0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEgYm9yZGVyLTIgYm9yZGVyLWxpZ2h0LWJsdWUtNDAwIHJvdW5kZWQtZnVsbCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCdAL2ltZy9hZGFtLmpwZycpLmRlZmF1bHR9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1saWdodC1ibHVlLTEwMFwiXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPkFkYW0gV2F0aGFuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodC1ibHVlLTYwMFwiPkNyZWF0b3Igb2YgVGFpbHdpbmQgQ1NTPC9kaXY+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gc3BhY2UteS0yMCBzbTpzcGFjZS15LTMyIG1kOnNwYWNlLXktNDAgbGc6c3BhY2UteS00NFwiPlxuICAgICAgICA8Q29uc3RyYWludEJhc2VkIC8+XG4gICAgICAgIDxCdWlsZEFueXRoaW5nIC8+XG4gICAgICAgIDxQZXJmb3JtYW5jZSAvPlxuICAgICAgICA8TW9iaWxlRmlyc3QgLz5cbiAgICAgICAgPFN0YXRlVmFyaWFudHMgLz5cbiAgICAgICAgPENvbXBvbmVudERyaXZlbiAvPlxuICAgICAgICA8RGFya01vZGUgLz5cbiAgICAgICAgPEN1c3RvbWl6YXRpb24gLz5cbiAgICAgICAgPE1vZGVybkZlYXR1cmVzIC8+XG4gICAgICAgIDxFZGl0b3JUb29scyAvPlxuICAgICAgICA8UmVhZHlNYWRlQ29tcG9uZW50cyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=