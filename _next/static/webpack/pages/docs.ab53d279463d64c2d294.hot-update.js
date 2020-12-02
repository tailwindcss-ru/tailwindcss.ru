webpackHotUpdate_N_E("pages/docs",{

/***/ "./src/pages/docs/index.js":
/*!*********************************!*\
  !*** ./src/pages/docs/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsLandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/DocumentationLayout */ "./src/layouts/DocumentationLayout.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var _img_screencasts_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/img/screencasts.svg */ "./src/img/screencasts.svg");
/* harmony import */ var _img_guides_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/img/guides.svg */ "./src/img/guides.svg");
/* harmony import */ var _img_play_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/img/play.svg */ "./src/img/play.svg");
/* harmony import */ var _img_tailwind_ui_logo_on_dark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/img/tailwind-ui-logo-on-dark.svg */ "./src/img/tailwind-ui-logo-on-dark.svg");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var tinytime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinytime */ "./node_modules/tinytime/dist/tinytime.js");
/* harmony import */ var tinytime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinytime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Community__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Community */ "./src/components/Community.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.module.css */ "./src/pages/docs/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Widont__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Widont */ "./src/components/Widont.js");
/* harmony import */ var _img_tailwind_ui_bundle_logo_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/img/tailwind-ui-bundle-logo.svg */ "./src/img/tailwind-ui-bundle-logo.svg");
/* harmony import */ var _img_refactoring_ui_complete_logo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/img/refactoring-ui-complete-logo.svg */ "./src/img/refactoring-ui-complete-logo.svg");
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\pages\\docs\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var whatsNew = [{
  title: 'Утилиты кольца фокусировки',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/focus-ring.svg */ "./src/img/docs/focus-ring.svg").ReactComponent,
  href: '/docs/ring-width'
}, {
  title: 'Темный режим',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/dark-mode.svg */ "./src/img/docs/dark-mode.svg").ReactComponent,
  href: '/docs/dark-mode'
}, {
  title: 'Расширенная цветовая палитра',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/color-palette.svg */ "./src/img/docs/color-palette.svg").ReactComponent,
  href: '/docs/customizing-colors#color-palette-reference'
}, {
  title: 'Расширенные варианты',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/extend-variants.svg */ "./src/img/docs/extend-variants.svg").ReactComponent,
  href: '/docs/configuring-variants#enabling-extra-variants'
}, {
  title: 'Extra Wide Breakpoint',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/breakpoint.svg */ "./src/img/docs/breakpoint.svg").ReactComponent,
  href: '/docs/breakpoints'
}, {
  title: 'Shareable Presets',
  image: __webpack_require__(/*! @/img/docs/shareable-presets.svg */ "./src/img/docs/shareable-presets.svg").ReactComponent,
  href: '/docs/presets'
}, {
  title: 'Gradients',
  image: __webpack_require__(/*! @/img/docs/gradients.svg */ "./src/img/docs/gradients.svg").ReactComponent,
  href: '/docs/gradient-color-stops'
}, {
  title: 'Animations',
  image: __webpack_require__(/*! @/img/docs/animations.svg */ "./src/img/docs/animations.svg").ReactComponent,
  href: '/docs/animation'
}];
var latestUpdates = [{
  title: 'Tailwind CSS v2.0',
  date: '2020-11-18T17:45:00.000Z',
  url: 'https://blog.tailwindcss.com/tailwindcss-v2',
  description: "Today we're finally releasing Tailwind CSS v2.0, including an all-new color palette, dark mode support, and tons more!"
}, {
  title: 'Tailwind CSS v1.9.0',
  date: '2020-10-13T18:30:00.000Z',
  url: 'https://blog.tailwindcss.com/tailwindcss-1-9',
  description: 'We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS grid utilities, extended border radius, rotate, and skew scales, helpful accessibility improvements, and more!'
}, {
  title: 'Introducing Tailwind Play',
  date: '2020-10-07T13:00:00.000Z',
  url: 'https://blog.tailwindcss.com/introducing-tailwind-play',
  description: "Today we're excited to release the first version of Tailwind Play, an advanced online playground for Tailwind CSS that lets you use all of Tailwind's build-time features directly in the browser."
}, {
  title: 'Headless UI: Unstyled, Accessible UI Components',
  date: '2020-10-06T18:30:00.000Z',
  url: 'https://blog.tailwindcss.com/headless-ui-unstyled-accessible-ui-components',
  description: 'Headless UI is a set of completely unstyled, fully accessible UI components for React, Vue, and Alpine.js that make it easy to build fully accessible custom UI components, without sacrificing the ability to style them from scratch with simple utility classes.'
}];
var formatDate = tinytime__WEBPACK_IMPORTED_MODULE_9___default()('{MM} {DD}, {YYYY}').render;
function DocsLandingPage() {
  var _this = this;

  return __jsx("div", {
    className: "px-4 sm:px-6 xl:px-8 pt-10 pb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0441 Tailwind CSS"), __jsx("p", {
    className: "text-2xl tracking-tight mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 Tailwind \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0441\u0442\u0438\u043B\u044E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F."), __jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full flex md:flex-col bg-gradient-to-br ".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].violet[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-xl font-semibold mb-2 text-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "\u0427\u0442\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438"), __jsx("p", {
    className: "font-medium text-violet-100 text-shadow mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435, \u043A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C Tailwind \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/docs/installation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"))), __jsx("div", {
    className: "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.image, " relative md:pl-6 xl:pl-8 hidden sm:block"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(_img_guides_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], {
    className: "absolute top-6 left-6 md:static overflow-visible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "absolute bottom-0 left-0 right-0 h-20 hidden sm:block",
    style: {
      background: 'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full flex md:flex-col bg-gradient-to-br ".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].pink[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-xl font-semibold mb-2 text-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435"), __jsx("p", {
    className: "font-medium text-rose-100 text-shadow mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "\u041F\u043E\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0441 Tailwind \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435."), __jsx("a", {
    href: "https://play.tailwindcss.com/",
    className: "mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E")), __jsx("div", {
    className: "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.image, " relative md:pl-6 xl:pl-8 hidden sm:block"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(_img_play_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], {
    className: "absolute top-6 left-6 md:static overflow-visible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full flex md:flex-col bg-gradient-to-br ".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].amber[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-xl font-semibold mb-2 text-shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"), __jsx("p", {
    className: "font-medium text-amber-100 text-shadow mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E Tailwind \u043F\u0440\u044F\u043C\u043E \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u0435."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "https://www.youtube.com/tailwindlabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mt-auto bg-amber-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"))), __jsx("div", {
    className: "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.image, " relative hidden sm:block"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "absolute left-2 bottom-3 xl:bottom-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_img_screencasts_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], {
    className: "overflow-visible",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-500 hidden sm:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "md:col-span-3 flex flex-wrap md:flex-nowrap items-center bg-gray-800 shadow-lg rounded-2xl py-6 md:py-4 px-6 md:pr-5 space-y-4 md:space-y-0 md:space-x-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "flex-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, "Tailwind UI"), __jsx(_img_tailwind_ui_logo_on_dark_svg__WEBPACK_IMPORTED_MODULE_6__["ReactComponent"], {
    className: "w-40 h-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })), __jsx("p", {
    className: "flex-auto text-white text-lg font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(_components_Widont__WEBPACK_IMPORTED_MODULE_12__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u043E\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u0435\u0439 Tailwind CSS.")), __jsx("a", {
    href: "https://tailwindui.com/components",
    className: "flex-none bg-white hover:bg-gray-100 transition-colors duration-200 text-gray-900 font-semibold rounded-lg py-3 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "\u041E\u0431\u0437\u043E\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0432 Tailwind"), __jsx("ul", {
    className: "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, whatsNew.map(function (item) {
    return __jsx("li", {
      key: item.title,
      className: "flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }, item.image && __jsx(item.image, {
      className: "h-auto max-w-full mx-auto mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 34
      }
    }), item.title, item.version && __jsx("span", {
      className: "absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, item.version))));
  }))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "flex items-center justify-between mt-16 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-3xl tracking-tight font-extrabold text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, "Latest Updates"), __jsx("a", {
    href: "https://blog.tailwindcss.com",
    className: "font-medium text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, "View all the latest updates")), __jsx("ul", {
    className: "bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, latestUpdates.map(function (item, i) {
    return __jsx("li", {
      key: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx("article", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: item.url,
      className: "grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 19
      }
    }, item.title), __jsx("time", {
      dateTime: item.date,
      className: "md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 19
      }
    }, __jsx("svg", {
      viewBox: "0 0 12 12",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])('w-3 h-3 mr-6 overflow-visible', {
        'text-gray-300': i !== 0,
        'text-cyan-400': i === 0
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 21
      }
    }, __jsx("circle", {
      cx: "6",
      cy: "6",
      r: "6",
      fill: "currentColor",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 23
      }
    }), i === 0 && __jsx("circle", {
      cx: "6",
      cy: "6",
      r: "11",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }), i !== 0 && __jsx("path", {
      d: "M 6 -6 V -30",
      fill: "none",
      strokeWidth: "2",
      stroke: "currentColor",
      className: "text-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }
    }), i !== latestUpdates.length - 1 && __jsx("path", {
      d: "M 6 18 V 500",
      fill: "none",
      strokeWidth: "2",
      stroke: "currentColor",
      className: "text-gray-200",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    })), formatDate(new Date(item.date))), __jsx("p", {
      className: "md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 19
      }
    }, item.description))));
  }))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 9
    }
  }, "Get involved"), __jsx(_components_Community__WEBPACK_IMPORTED_MODULE_10__["Community"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  })));
}
_c = DocsLandingPage;
DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation'
  },
  Layout: _layouts_DocumentationLayout__WEBPACK_IMPORTED_MODULE_1__["DocumentationLayout"]
};

var _c;

$RefreshReg$(_c, "DocsLandingPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsid2hhdHNOZXciLCJ0aXRsZSIsInZlcnNpb24iLCJpbWFnZSIsInJlcXVpcmUiLCJSZWFjdENvbXBvbmVudCIsImhyZWYiLCJsYXRlc3RVcGRhdGVzIiwiZGF0ZSIsInVybCIsImRlc2NyaXB0aW9uIiwiZm9ybWF0RGF0ZSIsInRpbnl0aW1lIiwicmVuZGVyIiwiRG9jc0xhbmRpbmdQYWdlIiwiZ3JhZGllbnRzIiwidmlvbGV0Iiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBpbmsiLCJhbWJlciIsIm1hcCIsIml0ZW0iLCJpIiwiY2xzeCIsImxlbmd0aCIsIkRhdGUiLCJsYXlvdXRQcm9wcyIsIm1ldGEiLCJMYXlvdXQiLCJEb2N1bWVudGF0aW9uTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSw0QkFEVDtBQUVFQyxTQUFPLEVBQUUsTUFGWDtBQUdFQyxPQUFLLEVBQUVDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUFxQ0MsY0FIOUM7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQW9DQyxjQUg3QztBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLEVBYWY7QUFDRUwsT0FBSyxFQUFFLDhCQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQXdDQyxjQUhqRDtBQUlFQyxNQUFJLEVBQUU7QUFK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LGdGQUFtQkE7QUFKQyxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLmFiNTNkMjc5NDYzZDY0YzJkMjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFNjcmVlbmNhc3RzSW1hZ2UgfSBmcm9tICdAL2ltZy9zY3JlZW5jYXN0cy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBHdWlkZXNJbWFnZSB9IGZyb20gJ0AvaW1nL2d1aWRlcy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBQbGF5SW1hZ2UgfSBmcm9tICdAL2ltZy9wbGF5LnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFR1aUxvZ28gfSBmcm9tICdAL2ltZy90YWlsd2luZC11aS1sb2dvLW9uLWRhcmsuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0aW55dGltZSBmcm9tICd0aW55dGltZSdcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db21tdW5pdHknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCB7IFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9XaWRvbnQnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBUdWlCdW5kbGVMb2dvIH0gZnJvbSAnQC9pbWcvdGFpbHdpbmQtdWktYnVuZGxlLWxvZ28uc3ZnJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgUmVmYWN0b3JpbmdVaUNvbXBsZXRlTG9nbyB9IGZyb20gJ0AvaW1nL3JlZmFjdG9yaW5nLXVpLWNvbXBsZXRlLWxvZ28uc3ZnJ1xuXG5jb25zdCB3aGF0c05ldyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0KPRgtC40LvQuNGC0Ysg0LrQvtC70YzRhtCwINGE0L7QutGD0YHQuNGA0L7QstC60LgnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9mb2N1cy1yaW5nLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9yaW5nLXdpZHRoJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KLQtdC80L3Ri9C5INGA0LXQttC40LwnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9kYXJrLW1vZGUuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2RhcmstbW9kZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Cg0LDRgdGI0LjRgNC10L3QvdCw0Y8g0YbQstC10YLQvtCy0LDRjyDQv9Cw0LvQuNGC0YDQsCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2NvbG9yLXBhbGV0dGUuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2N1c3RvbWl6aW5nLWNvbG9ycyNjb2xvci1wYWxldHRlLXJlZmVyZW5jZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Cg0LDRgdGI0LjRgNC10L3QvdGL0LUg0LLQsNGA0LjQsNC90YLRiycsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2V4dGVuZC12YXJpYW50cy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvY29uZmlndXJpbmctdmFyaWFudHMjZW5hYmxpbmctZXh0cmEtdmFyaWFudHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFeHRyYSBXaWRlIEJyZWFrcG9pbnQnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9icmVha3BvaW50LnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9icmVha3BvaW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NoYXJlYWJsZSBQcmVzZXRzJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9zaGFyZWFibGUtcHJlc2V0cy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvcHJlc2V0cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dyYWRpZW50cycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZ3JhZGllbnRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FuaW1hdGlvbnMnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2FuaW1hdGlvbnMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2FuaW1hdGlvbicsXG4gIH0sXG5dXG5cbmNvbnN0IGxhdGVzdFVwZGF0ZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1RhaWx3aW5kIENTUyB2Mi4wJyxcbiAgICBkYXRlOiAnMjAyMC0xMS0xOFQxNzo0NTowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVG9kYXkgd2UncmUgZmluYWxseSByZWxlYXNpbmcgVGFpbHdpbmQgQ1NTIHYyLjAsIGluY2x1ZGluZyBhbiBhbGwtbmV3IGNvbG9yIHBhbGV0dGUsIGRhcmsgbW9kZSBzdXBwb3J0LCBhbmQgdG9ucyBtb3JlIVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUYWlsd2luZCBDU1MgdjEuOS4wJyxcbiAgICBkYXRlOiAnMjAyMC0xMC0xM1QxODozMDowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLTEtOScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnV2UganVzdCByZWxlYXNlZCBUYWlsd2luZCBDU1MgdjEuOSB3aGljaCBhZGRzIHN1cHBvcnQgZm9yIGNvbmZpZ3VyYXRpb24gcHJlc2V0cywgdXNlZnVsIG5ldyBDU1MgZ3JpZCB1dGlsaXRpZXMsIGV4dGVuZGVkIGJvcmRlciByYWRpdXMsIHJvdGF0ZSwgYW5kIHNrZXcgc2NhbGVzLCBoZWxwZnVsIGFjY2Vzc2liaWxpdHkgaW1wcm92ZW1lbnRzLCBhbmQgbW9yZSEnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdJbnRyb2R1Y2luZyBUYWlsd2luZCBQbGF5JyxcbiAgICBkYXRlOiAnMjAyMC0xMC0wN1QxMzowMDowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL2ludHJvZHVjaW5nLXRhaWx3aW5kLXBsYXknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUb2RheSB3ZSdyZSBleGNpdGVkIHRvIHJlbGVhc2UgdGhlIGZpcnN0IHZlcnNpb24gb2YgVGFpbHdpbmQgUGxheSwgYW4gYWR2YW5jZWQgb25saW5lIHBsYXlncm91bmQgZm9yIFRhaWx3aW5kIENTUyB0aGF0IGxldHMgeW91IHVzZSBhbGwgb2YgVGFpbHdpbmQncyBidWlsZC10aW1lIGZlYXR1cmVzIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIZWFkbGVzcyBVSTogVW5zdHlsZWQsIEFjY2Vzc2libGUgVUkgQ29tcG9uZW50cycsXG4gICAgZGF0ZTogJzIwMjAtMTAtMDZUMTg6MzA6MDAuMDAwWicsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS9oZWFkbGVzcy11aS11bnN0eWxlZC1hY2Nlc3NpYmxlLXVpLWNvbXBvbmVudHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0hlYWRsZXNzIFVJIGlzIGEgc2V0IG9mIGNvbXBsZXRlbHkgdW5zdHlsZWQsIGZ1bGx5IGFjY2Vzc2libGUgVUkgY29tcG9uZW50cyBmb3IgUmVhY3QsIFZ1ZSwgYW5kIEFscGluZS5qcyB0aGF0IG1ha2UgaXQgZWFzeSB0byBidWlsZCBmdWxseSBhY2Nlc3NpYmxlIGN1c3RvbSBVSSBjb21wb25lbnRzLCB3aXRob3V0IHNhY3JpZmljaW5nIHRoZSBhYmlsaXR5IHRvIHN0eWxlIHRoZW0gZnJvbSBzY3JhdGNoIHdpdGggc2ltcGxlIHV0aWxpdHkgY2xhc3Nlcy4nLFxuICB9LFxuXVxuXG5jb25zdCBmb3JtYXREYXRlID0gdGlueXRpbWUoJ3tNTX0ge0REfSwge1lZWVl9JykucmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3NMYW5kaW5nUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiB4bDpweC04IHB0LTEwIHBiLTE2XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbGVhZGluZy1ub25lIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgdHJhY2tpbmctdGlnaHQgbWItNFwiPlxuICAgICAgICDQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLINGBIFRhaWx3aW5kIENTU1xuICAgICAgPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRyYWNraW5nLXRpZ2h0IG1iLTEwXCI+XG4gICAgICAgINCY0LfRg9GH0LjRgtC1IFRhaWx3aW5kINGB0L/QvtGB0L7QsdC+0LwsINC60L7RgtC+0YDRi9C5INC70YPRh9GI0LUg0LLRgdC10LPQviDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDQstCw0YjQtdC80YMg0YHRgtC40LvRjiDQvtCx0YPRh9C10L3QuNGPLlxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IHhsOmdhcC04XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBmbGV4IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBtZDpmbGV4LWNvbCBiZy1ncmFkaWVudC10by1iciAke2dyYWRpZW50cy52aW9sZXRbMF19YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc20gc206ZmxleC1ub25lIG1kOnctYXV0byBtZDpmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCByZWxhdGl2ZSB6LTEwIHAtNiB4bDpwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1zaGFkb3dcIj7Qp9GC0LXQvdC40LUg0LTQvtC60YPQvNC10L3RgtCw0YbQuNC4PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXZpb2xldC0xMDAgdGV4dC1zaGFkb3cgbWItNFwiPlxuICAgICAgICAgICAgICAgICAg0KPQt9C90LDQudGC0LUsINC60LDQuiDQvdCw0YHRgtGA0L7QuNGC0YwgVGFpbHdpbmQg0LIg0YHQstC+0LXQvCDQv9GA0L7QtdC60YLQtS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL2luc3RhbGxhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtYXV0byBiZy12aW9sZXQtODAwIGJnLW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0Ywg0L7QsdGD0YfQtdC90LjQtVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1hZ2V9IHJlbGF0aXZlIG1kOnBsLTYgeGw6cGwtOCBoaWRkZW4gc206YmxvY2tgfT5cbiAgICAgICAgICAgICAgICA8R3VpZGVzSW1hZ2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgbGVmdC02IG1kOnN0YXRpYyBvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBoaWRkZW4gc206YmxvY2tcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMTM1LCA5NCwgMjQ1KSwgcmdiYSgxMzUsIDk0LCAyNDUsIDApKScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBmbGV4IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBtZDpmbGV4LWNvbCBiZy1ncmFkaWVudC10by1iciAke2dyYWRpZW50cy5waW5rWzBdfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1heC13LXNtIHNtOmZsZXgtbm9uZSBtZDp3LWF1dG8gbWQ6ZmxleC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcmVsYXRpdmUgei0xMCBwLTYgeGw6cC04XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yIHRleHQtc2hhZG93XCI+0J/QvtC/0YDQvtCx0L7QstCw0YLRjCDQsiDQsdGA0LDRg9C30LXRgNC1PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXJvc2UtMTAwIHRleHQtc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgINCf0L7RgdGC0YDQvtC50YLQtSDRh9GC0L4t0L3QuNCx0YPQtNGMINGBIFRhaWx3aW5kINC90LAg0L3QsNGI0LXQuSDQuNCz0YDQvtCy0L7QuSDQv9C70L7RidCw0LTQutC1LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcGxheS50YWlsd2luZGNzcy5jb20vXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctcm9zZS05MDAgYmctb3BhY2l0eS01MCBob3ZlcjpiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGlubGluZS1mbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0Ywg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0L5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfSByZWxhdGl2ZSBtZDpwbC02IHhsOnBsLTggaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPFBsYXlJbWFnZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiBsZWZ0LTYgbWQ6c3RhdGljIG92ZXJmbG93LXZpc2libGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTIwIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1yb3NlLTUwMCBoaWRkZW4gc206YmxvY2tcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSB0ZXh0LXdoaXRlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTN4bCBmbGV4IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBtZDpmbGV4LWNvbCBiZy1ncmFkaWVudC10by1iciAke2dyYWRpZW50cy5hbWJlclswXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPtCh0LzQvtGC0YDQtdGC0Ywg0YHQutGA0LjQvdC60LDRgdGC0Ys8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYW1iZXItMTAwIHRleHQtc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgINCj0LfQvdCw0LnRgtC1INCx0L7Qu9GM0YjQtSDQviBUYWlsd2luZCDQv9GA0Y/QvNC+INC+0YIg0LrQvtC80LDQvdC00Ysg0L3QsCDQvdCw0YjQtdC8INC60LDQvdCw0LvQtS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFic1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtYXV0byBiZy1hbWJlci05MDAgYmctb3BhY2l0eS01MCBob3ZlcjpiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDQv9GA0L7RgdC80L7RgtGAXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgYm90dG9tLTMgeGw6Ym90dG9tLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxTY3JlZW5jYXN0c0ltYWdlIGNsYXNzTmFtZT1cIm92ZXJmbG93LXZpc2libGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTIwIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1vcmFuZ2UtNTAwIGhpZGRlbiBzbTpibG9ja1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBmbGV4IGZsZXgtd3JhcCBtZDpmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgYmctZ3JheS04MDAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIHB5LTYgbWQ6cHktNCBweC02IG1kOnByLTUgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmxleC1ub25lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGFpbHdpbmQgVUk8L3NwYW4+XG4gICAgICAgICAgICA8VHVpTG9nbyBjbGFzc05hbWU9XCJ3LTQwIGgtYXV0b1wiIC8+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LWF1dG8gdGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICA8V2lkb250PtCa0YDQsNGB0LjQstGL0LUg0LrQvtC80L/QvtC90LXQvdGC0Ysg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LPQviDQuNC90YLQtdGA0YTQtdC50YHQsCwg0L7RgiDRgdC+0LfQtNCw0YLQtdC70LXQuSBUYWlsd2luZCBDU1MuPC9XaWRvbnQ+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9jb21wb25lbnRzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgcHktMyBweC00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDQntCx0LfQvtGAINC60L7QvNC/0L7QvdC10L3RgtC+0LJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIG10LTE2IG1iLThcIj5cbiAgICAgICAgICDQp9GC0L4g0L3QvtCy0L7Qs9C+INCyIFRhaWx3aW5kXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC00IHNtOmdhcC02IHhsOmdhcC04IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt3aGF0c05ldy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLXhsIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IHNoYWRvdy1zbSB3LWZ1bGwgcHQtOCBwYi02IHB4LTZcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmltYWdlICYmIDxpdGVtLmltYWdlIGNsYXNzTmFtZT1cImgtYXV0byBtYXgtdy1mdWxsIG14LWF1dG8gbWItM1wiIC8+fVxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB7aXRlbS52ZXJzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBiZy1mdWNoc2lhLTEwMCB0ZXh0LWZ1Y2hzaWEtNjAwIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIHB5LTAuNSBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMTYgbWItOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+TGF0ZXN0IFVwZGF0ZXM8L2gyPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgVmlldyBhbGwgdGhlIGxhdGVzdCB1cGRhdGVzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC0zeGwgcC0yIHNtOnAtNSB4bDpwLTZcIj5cbiAgICAgICAgICB7bGF0ZXN0VXBkYXRlcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy04IHhsOmdyaWQtY29scy05IGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHJvdW5kZWQteGwgcC0zIHNtOnAtNSB4bDpwLTYgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1kOmNvbC1zdGFydC0zIG1kOmNvbC1zcGFuLTYgeGw6Y29sLXN0YXJ0LTMgeGw6Y29sLXNwYW4tNyBtYi0xIG1sLTkgbWQ6bWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMSBtZDpjb2wtc3Bhbi0yIHJvdy1zdGFydC0xIG1kOnJvdy1lbmQtMyBmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSBtYi0xIG1kOm1iLTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd3LTMgaC0zIG1yLTYgb3ZlcmZsb3ctdmlzaWJsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMzAwJzogaSAhPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWN5YW4tNDAwJzogaSA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIxMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSA2IC02IFYgLTMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gbGF0ZXN0VXBkYXRlcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDYgMTggViA1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoaXRlbS5kYXRlKSl9XG4gICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMyBtZDpjb2wtc3Bhbi02IHhsOmNvbC1zcGFuLTcgbWwtOSBtZDptbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAgR2V0IGludm9sdmVkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb21tdW5pdHkgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Eb2NzTGFuZGluZ1BhZ2UubGF5b3V0UHJvcHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICB9LFxuICBMYXlvdXQ6IERvY3VtZW50YXRpb25MYXlvdXQsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9