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
  }, "Rapidly build modern websites without ever leaving your HTML."), __jsx("p", {
    className: "max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "A utility-first CSS framework packed with classes like ", __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 68
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
  }, "text-center"), " and", ' ', __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["InlineCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "rotate-90"), " that can be composed to build any design, directly in your markup."), __jsx("div", {
    className: "flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/docs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "Get started")), __jsx(NpmInstallButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }))), __jsx(_components_home_Hero__WEBPACK_IMPORTED_MODULE_14__["Hero"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["BigText"], {
    as: "h2",
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "\u201CBest practices\u201D don\u2019t actually work.")), __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Paragraph"], {
    className: "max-w-4xl mx-auto mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, "I\u2019ve written", ' ', __jsx("a", {
    href: "https://adamwathan.me/css-utility-classes-and-separation-of-concerns/",
    className: "text-light-blue-600 font-semibold",
    style: {
      boxShadow: 'inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #bae6fd'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "a few thousand words"), ' ', __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_15__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "on why traditional \u201Csemantic class names\u201D are the reason CSS is hard to maintain, but the truth is you\u2019re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way."))), __jsx("figcaption", {
    className: "sm:text-xl font-medium flex flex-col items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "p-1 border-2 border-light-blue-400 rounded-full mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "Adam Wathan"), __jsx("div", {
    className: "text-light-blue-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, "Creator of Tailwind CSS"))))), __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_1__["Testimonials"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx(_components_home_ConstraintBased__WEBPACK_IMPORTED_MODULE_3__["ConstraintBased"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx(_components_home_BuildAnything__WEBPACK_IMPORTED_MODULE_4__["BuildAnything"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }), __jsx(_components_home_Performance__WEBPACK_IMPORTED_MODULE_5__["Performance"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }), __jsx(_components_home_MobileFirst__WEBPACK_IMPORTED_MODULE_6__["MobileFirst"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx(_components_home_StateVariants__WEBPACK_IMPORTED_MODULE_7__["StateVariants"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), __jsx(_components_home_ComponentDriven__WEBPACK_IMPORTED_MODULE_8__["ComponentDriven"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }), __jsx(_components_home_DarkMode__WEBPACK_IMPORTED_MODULE_2__["DarkMode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }), __jsx(_components_home_Customization__WEBPACK_IMPORTED_MODULE_9__["Customization"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }), __jsx(_components_home_ModernFeatures__WEBPACK_IMPORTED_MODULE_10__["ModernFeatures"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx(_components_home_EditorTools__WEBPACK_IMPORTED_MODULE_11__["EditorTools"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }), __jsx(_components_home_ReadyMadeComponents__WEBPACK_IMPORTED_MODULE_12__["ReadyMadeComponents"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  })), __jsx(_components_home_Footer__WEBPACK_IMPORTED_MODULE_17__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5wbUluc3RhbGxCdXR0b24iLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImNhdGNoIiwid2luZG93Iiwic2V0VGltZW91dCIsIkhvbWUiLCJib3hTaGFkb3ciLCJyZXF1aXJlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxNQUFELENBRFI7QUFBQSxNQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUcxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBQ0EsUUFBSUgsS0FBSyxLQUFLLFNBQWQsRUFBeUI7QUFDdkJJLGVBQVMsQ0FBQ0MsU0FBVixDQUNHQyxTQURILENBQ2EseUJBRGIsRUFFR0MsSUFGSCxDQUVRLFlBQU07QUFDVixZQUFJSixPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxRQUFELENBQVI7QUFDRDtBQUNGLE9BTkgsRUFPR08sS0FQSCxDQU9TLFlBQU07QUFDWCxZQUFJTCxPQUFKLEVBQWE7QUFDWEYsa0JBQVEsQ0FBQyxPQUFELENBQVI7QUFDRDtBQUNGLE9BWEg7QUFZRCxLQWJELE1BYU8sSUFBSUQsS0FBSyxLQUFLLFFBQVYsSUFBc0JBLEtBQUssS0FBSyxPQUFwQyxFQUE2QztBQUNsRFMsWUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07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QSxJQU5GLEVBT0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRSxNQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQXZHRixFQW9IRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwSEYsQ0FERjtBQXdIRDtNQXpIdUJILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGI5NGViNTNlYjBhNThjNGM5OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RpbW9uaWFscyB9IGZyb20gJ0AvY29tcG9uZW50cy9UZXN0aW1vbmlhbHMnXG5pbXBvcnQgeyBEYXJrTW9kZSB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0RhcmtNb2RlJ1xuaW1wb3J0IHsgQ29uc3RyYWludEJhc2VkIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvQ29uc3RyYWludEJhc2VkJ1xuaW1wb3J0IHsgQnVpbGRBbnl0aGluZyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0J1aWxkQW55dGhpbmcnXG5pbXBvcnQgeyBQZXJmb3JtYW5jZSB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL1BlcmZvcm1hbmNlJ1xuaW1wb3J0IHsgTW9iaWxlRmlyc3QgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9Nb2JpbGVGaXJzdCdcbmltcG9ydCB7IFN0YXRlVmFyaWFudHMgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9TdGF0ZVZhcmlhbnRzJ1xuaW1wb3J0IHsgQ29tcG9uZW50RHJpdmVuIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvQ29tcG9uZW50RHJpdmVuJ1xuaW1wb3J0IHsgQ3VzdG9taXphdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL0N1c3RvbWl6YXRpb24nXG5pbXBvcnQgeyBNb2Rlcm5GZWF0dXJlcyB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL01vZGVybkZlYXR1cmVzJ1xuaW1wb3J0IHsgRWRpdG9yVG9vbHMgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9FZGl0b3JUb29scydcbmltcG9ydCB7IFJlYWR5TWFkZUNvbXBvbmVudHMgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9SZWFkeU1hZGVDb21wb25lbnRzJ1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaCdcbmltcG9ydCB7IEhlcm8gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9IZXJvJ1xuaW1wb3J0IHsgQmlnVGV4dCwgSW5saW5lQ29kZSwgTGluaywgUGFyYWdyYXBoLCBXaWRvbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9jb21tb24nXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnQC9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9Gb290ZXInXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5mdW5jdGlvbiBOcG1JbnN0YWxsQnV0dG9uKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCdpZGxlJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gdHJ1ZVxuICAgIGlmIChzdGF0ZSA9PT0gJ2NvcHlpbmcnKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgICAgIC53cml0ZVRleHQoJ25wbSBpbnN0YWxsIHRhaWx3aW5kY3NzJylcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRTdGF0ZSgnY29waWVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKCdlcnJvcicpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdjb3BpZWQnIHx8IHN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgc2V0U3RhdGUoJ2lkbGUnKVxuICAgICAgICB9XG4gICAgICB9LCAyMDAwKVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gKGN1cnJlbnQgPSBmYWxzZSlcbiAgfSwgW3N0YXRlXSlcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctYXV0byBmbGV4LW5vbmUgYmctZ3JheS01MCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS05MDAgZm9udC1tb25vIGxlYWRpbmctNiBweS0zIHNtOnB4LTYgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMiBzbTpzcGFjZS14LTQgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtd2hpdGUgZm9jdXM6cmluZy1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKCdjb3B5aW5nJyl9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lIHRleHQtZ3JheS01MDBcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAkeycgJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICBucG0gaW5zdGFsbCB0YWlsd2luZGNzc1xuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjbGljayB0byBjb3B5IHRvIGNsaXBib2FyZCk8L3NwYW4+XG4gICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezEuNX0+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAxNmMwIDEuODg2IDAgMi44MjguNTg2IDMuNDE0QzkuMTcyIDIwIDEwLjExNCAyMCAxMiAyMGg0YzEuODg2IDAgMi44MjggMCAzLjQxNC0uNTg2QzIwIDE4LjgyOCAyMCAxNy44ODYgMjAgMTZ2LTRjMC0xLjg4NiAwLTIuODI4LS41ODYtMy40MTRDMTguODI4IDggMTcuODg2IDggMTYgOG0tOCA4aDRjMS44ODYgMCAyLjgyOCAwIDMuNDE0LS41ODZDMTYgMTQuODI4IDE2IDEzLjg4NiAxNiAxMlY4bS04IDhjLTEuODg2IDAtMi44MjggMC0zLjQxNC0uNTg2QzQgMTQuODI4IDQgMTMuODg2IDQgMTJWOGMwLTEuODg2IDAtMi44MjguNTg2LTMuNDE0QzUuMTcyIDQgNi4xMTQgNCA4IDRoNGMxLjg4NiAwIDIuODI4IDAgMy40MTQuNTg2QzE2IDUuMTcyIDE2IDYuMTE0IDE2IDhcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMjAgc206c3BhY2UteS0zMiBtZDpzcGFjZS15LTQwIGxnOnNwYWNlLXktNDQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBrZXk9XCJ0d2l0dGVyOnRpdGxlXCJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjp0aXRsZVwiXG4gICAgICAgICAgY29udGVudD1cIlRhaWx3aW5kIENTUyAtINCx0YvRgdGC0YDQviDRgdC+0LfQtNCw0LLQsNC50YLQtSDRgdC+0LLRgNC10LzQtdC90L3Ri9C1INCy0LXQsS3RgdCw0LnRgtGLLCDQvdC1INCy0YvRhdC+0LTRjyDQuNC3IEhUTUwuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBrZXk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXG4gICAgICAgICAgY29udGVudD1cIlRhaWx3aW5kIENTUyAtINCx0YvRgdGC0YDQviDRgdC+0LfQtNCw0LLQsNC50YLQtSDRgdC+0LLRgNC10LzQtdC90L3Ri9C1INCy0LXQsS3RgdCw0LnRgtGLLCDQvdC1INCy0YvRhdC+0LTRjyDQuNC3IEhUTUwuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPlRhaWx3aW5kIENTUyAtINCx0YvRgdGC0YDQviDRgdC+0LfQtNCw0LLQsNC50YLQtSDRgdC+0LLRgNC10LzQtdC90L3Ri9C1INCy0LXQsS3RgdCw0LnRgtGLLCDQvdC1INCy0YvRhdC+0LTRjyDQuNC3IEhUTUwuPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtOCBtYi0xNCBzbTptYi0yMCB4bDptYi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHktNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMTYgc206bWItMjAgLW14LTQgcHgtNCBzbTpteC0wIHNtOnB4LTBcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgc206c3BhY2UteC0xMFwiPlxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9kb2NzXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctNiBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206aGlkZGVuXCI+0JTQvtC60Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGFpbHdpbmQgQ1NTINC90LAgR2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwMDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT1cInctYXV0byBoLTcgc206aC04XCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC02eGwgbGc6dGV4dC03eGwgbGVhZGluZy1ub25lIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbXQtMTAgbWItOCBzbTptdC0xNCBzbTptYi0xMFwiPlxuICAgICAgICAgICAgUmFwaWRseSBidWlsZCBtb2Rlcm4gd2Vic2l0ZXMgd2l0aG91dCBldmVyIGxlYXZpbmcgeW91ciBIVE1MLlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIHRleHQtbGcgc206dGV4dC0yeGwgc206bGVhZGluZy0xMCBmb250LW1lZGl1bSBtYi0xMCBzbTptYi0xMVwiPlxuICAgICAgICAgICAgQSB1dGlsaXR5LWZpcnN0IENTUyBmcmFtZXdvcmsgcGFja2VkIHdpdGggY2xhc3NlcyBsaWtlIDxJbmxpbmVDb2RlPmZsZXg8L0lubGluZUNvZGU+LHsnICd9XG4gICAgICAgICAgICA8SW5saW5lQ29kZT5wdC00PC9JbmxpbmVDb2RlPiwgPElubGluZUNvZGU+dGV4dC1jZW50ZXI8L0lubGluZUNvZGU+IGFuZHsnICd9XG4gICAgICAgICAgICA8SW5saW5lQ29kZT5yb3RhdGUtOTA8L0lubGluZUNvZGU+IHRoYXQgY2FuIGJlIGNvbXBvc2VkIHRvIGJ1aWxkIGFueSBkZXNpZ24sIGRpcmVjdGx5IGluXG4gICAgICAgICAgICB5b3VyIG1hcmt1cC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBzcGFjZS15LTQgc206c3BhY2UteS0wIHNtOnNwYWNlLXgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvZG9jc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIGZsZXgtbm9uZSBiZy1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIHRleHQtbGcgbGVhZGluZy02IGZvbnQtc2VtaWJvbGQgcHktMyBweC02IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC14bCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC13aGl0ZSBmb2N1czpyaW5nLWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgPE5wbUluc3RhbGxCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIZXJvIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXIgbWF4LXctc2NyZWVuLWxnIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LThcIj5cbiAgICAgICAgICA8QmlnVGV4dCBhcz1cImgyXCIgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgPFdpZG9udD7igJxCZXN0IHByYWN0aWNlc+KAnSBkb27igJl0IGFjdHVhbGx5IHdvcmsuPC9XaWRvbnQ+XG4gICAgICAgICAgPC9CaWdUZXh0PlxuICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICAgICAgSeKAmXZlIHdyaXR0ZW57JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hZGFtd2F0aGFuLm1lL2Nzcy11dGlsaXR5LWNsYXNzZXMtYW5kLXNlcGFyYXRpb24tb2YtY29uY2VybnMvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlnaHQtYmx1ZS02MDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgJ2luc2V0IDAgLTAuMTY2NjY2NjY2N2VtIDAgMCAjZmZmLCBpbnNldCAwIC0wLjMzMzMzMzMzMzNlbSAwIDAgI2JhZTZmZCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGEgZmV3IHRob3VzYW5kIHdvcmRzXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgICAgPFdpZG9udD5cbiAgICAgICAgICAgICAgICAgIG9uIHdoeSB0cmFkaXRpb25hbCDigJxzZW1hbnRpYyBjbGFzcyBuYW1lc+KAnSBhcmUgdGhlIHJlYXNvbiBDU1MgaXMgaGFyZCB0byBtYWludGFpbixcbiAgICAgICAgICAgICAgICAgIGJ1dCB0aGUgdHJ1dGggaXMgeW914oCZcmUgbmV2ZXIgZ29pbmcgdG8gYmVsaWV2ZSBtZSB1bnRpbCB5b3UgYWN0dWFsbHkgdHJ5IGl0LiBJZlxuICAgICAgICAgICAgICAgICAgeW91IGNhbiBzdXBwcmVzcyB0aGUgdXJnZSB0byByZXRjaCBsb25nIGVub3VnaCB0byBnaXZlIGl0IGEgY2hhbmNlLCBJIHJlYWxseSB0aGlua1xuICAgICAgICAgICAgICAgICAgeW91J2xsIHdvbmRlciBob3cgeW91IGV2ZXIgd29ya2VkIHdpdGggQ1NTIGFueSBvdGhlciB3YXkuXG4gICAgICAgICAgICAgICAgPC9XaWRvbnQ+XG4gICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwic206dGV4dC14bCBmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSBib3JkZXItMiBib3JkZXItbGlnaHQtYmx1ZS00MDAgcm91bmRlZC1mdWxsIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJ0AvaW1nL2FkYW0uanBnJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLWxpZ2h0LWJsdWUtMTAwXCJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+QWRhbSBXYXRoYW48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LWJsdWUtNjAwXCI+Q3JlYXRvciBvZiBUYWlsd2luZCBDU1M8L2Rpdj5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8VGVzdGltb25pYWxzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBzcGFjZS15LTIwIHNtOnNwYWNlLXktMzIgbWQ6c3BhY2UteS00MCBsZzpzcGFjZS15LTQ0XCI+XG4gICAgICAgIDxDb25zdHJhaW50QmFzZWQgLz5cbiAgICAgICAgPEJ1aWxkQW55dGhpbmcgLz5cbiAgICAgICAgPFBlcmZvcm1hbmNlIC8+XG4gICAgICAgIDxNb2JpbGVGaXJzdCAvPlxuICAgICAgICA8U3RhdGVWYXJpYW50cyAvPlxuICAgICAgICA8Q29tcG9uZW50RHJpdmVuIC8+XG4gICAgICAgIDxEYXJrTW9kZSAvPlxuICAgICAgICA8Q3VzdG9taXphdGlvbiAvPlxuICAgICAgICA8TW9kZXJuRmVhdHVyZXMgLz5cbiAgICAgICAgPEVkaXRvclRvb2xzIC8+XG4gICAgICAgIDxSZWFkeU1hZGVDb21wb25lbnRzIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==