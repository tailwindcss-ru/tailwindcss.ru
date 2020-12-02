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
  title: 'Расширить варианты',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsid2hhdHNOZXciLCJ0aXRsZSIsInZlcnNpb24iLCJpbWFnZSIsInJlcXVpcmUiLCJSZWFjdENvbXBvbmVudCIsImhyZWYiLCJsYXRlc3RVcGRhdGVzIiwiZGF0ZSIsInVybCIsImRlc2NyaXB0aW9uIiwiZm9ybWF0RGF0ZSIsInRpbnl0aW1lIiwicmVuZGVyIiwiRG9jc0xhbmRpbmdQYWdlIiwiZ3JhZGllbnRzIiwidmlvbGV0Iiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBpbmsiLCJhbWJlciIsIm1hcCIsIml0ZW0iLCJpIiwiY2xzeCIsImxlbmd0aCIsIkRhdGUiLCJsYXlvdXRQcm9wcyIsIm1ldGEiLCJMYXlvdXQiLCJEb2N1bWVudGF0aW9uTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSw0QkFEVDtBQUVFQyxTQUFPLEVBQUUsTUFGWDtBQUdFQyxPQUFLLEVBQUVDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUFxQ0MsY0FIOUM7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQW9DQyxjQUg3QztBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLEVBYWY7QUFDRUwsT0FBSyxFQUFFLDhCQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQXdDQyxjQUhqRDtBQUlFQyxNQUFJLEVBQUU7QUFK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LGdGQUFtQkE7QUFKQyxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLmNiN2ZkODFkZGExMmM3NGUyYjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFNjcmVlbmNhc3RzSW1hZ2UgfSBmcm9tICdAL2ltZy9zY3JlZW5jYXN0cy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBHdWlkZXNJbWFnZSB9IGZyb20gJ0AvaW1nL2d1aWRlcy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBQbGF5SW1hZ2UgfSBmcm9tICdAL2ltZy9wbGF5LnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFR1aUxvZ28gfSBmcm9tICdAL2ltZy90YWlsd2luZC11aS1sb2dvLW9uLWRhcmsuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0aW55dGltZSBmcm9tICd0aW55dGltZSdcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db21tdW5pdHknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCB7IFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9XaWRvbnQnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBUdWlCdW5kbGVMb2dvIH0gZnJvbSAnQC9pbWcvdGFpbHdpbmQtdWktYnVuZGxlLWxvZ28uc3ZnJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgUmVmYWN0b3JpbmdVaUNvbXBsZXRlTG9nbyB9IGZyb20gJ0AvaW1nL3JlZmFjdG9yaW5nLXVpLWNvbXBsZXRlLWxvZ28uc3ZnJ1xuXG5jb25zdCB3aGF0c05ldyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0KPRgtC40LvQuNGC0Ysg0LrQvtC70YzRhtCwINGE0L7QutGD0YHQuNGA0L7QstC60LgnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9mb2N1cy1yaW5nLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9yaW5nLXdpZHRoJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KLQtdC80L3Ri9C5INGA0LXQttC40LwnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9kYXJrLW1vZGUuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2RhcmstbW9kZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Cg0LDRgdGI0LjRgNC10L3QvdCw0Y8g0YbQstC10YLQvtCy0LDRjyDQv9Cw0LvQuNGC0YDQsCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2NvbG9yLXBhbGV0dGUuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2N1c3RvbWl6aW5nLWNvbG9ycyNjb2xvci1wYWxldHRlLXJlZmVyZW5jZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Cg0LDRgdGI0LjRgNC40YLRjCDQstCw0YDQuNCw0L3RgtGLJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZXh0ZW5kLXZhcmlhbnRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9jb25maWd1cmluZy12YXJpYW50cyNlbmFibGluZy1leHRyYS12YXJpYW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0V4dHJhIFdpZGUgQnJlYWtwb2ludCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2JyZWFrcG9pbnQuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2JyZWFrcG9pbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2hhcmVhYmxlIFByZXNldHMnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL3NoYXJlYWJsZS1wcmVzZXRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9wcmVzZXRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR3JhZGllbnRzJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9ncmFkaWVudHMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQW5pbWF0aW9ucycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvYW5pbWF0aW9ucy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvYW5pbWF0aW9uJyxcbiAgfSxcbl1cblxuY29uc3QgbGF0ZXN0VXBkYXRlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVGFpbHdpbmQgQ1NTIHYyLjAnLFxuICAgIGRhdGU6ICcyMDIwLTExLTE4VDE3OjQ1OjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUb2RheSB3ZSdyZSBmaW5hbGx5IHJlbGVhc2luZyBUYWlsd2luZCBDU1MgdjIuMCwgaW5jbHVkaW5nIGFuIGFsbC1uZXcgY29sb3IgcGFsZXR0ZSwgZGFyayBtb2RlIHN1cHBvcnQsIGFuZCB0b25zIG1vcmUhXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RhaWx3aW5kIENTUyB2MS45LjAnLFxuICAgIGRhdGU6ICcyMDIwLTEwLTEzVDE4OjMwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtMS05JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdXZSBqdXN0IHJlbGVhc2VkIFRhaWx3aW5kIENTUyB2MS45IHdoaWNoIGFkZHMgc3VwcG9ydCBmb3IgY29uZmlndXJhdGlvbiBwcmVzZXRzLCB1c2VmdWwgbmV3IENTUyBncmlkIHV0aWxpdGllcywgZXh0ZW5kZWQgYm9yZGVyIHJhZGl1cywgcm90YXRlLCBhbmQgc2tldyBzY2FsZXMsIGhlbHBmdWwgYWNjZXNzaWJpbGl0eSBpbXByb3ZlbWVudHMsIGFuZCBtb3JlIScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ludHJvZHVjaW5nIFRhaWx3aW5kIFBsYXknLFxuICAgIGRhdGU6ICcyMDIwLTEwLTA3VDEzOjAwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vaW50cm9kdWNpbmctdGFpbHdpbmQtcGxheScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRvZGF5IHdlJ3JlIGV4Y2l0ZWQgdG8gcmVsZWFzZSB0aGUgZmlyc3QgdmVyc2lvbiBvZiBUYWlsd2luZCBQbGF5LCBhbiBhZHZhbmNlZCBvbmxpbmUgcGxheWdyb3VuZCBmb3IgVGFpbHdpbmQgQ1NTIHRoYXQgbGV0cyB5b3UgdXNlIGFsbCBvZiBUYWlsd2luZCdzIGJ1aWxkLXRpbWUgZmVhdHVyZXMgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hlYWRsZXNzIFVJOiBVbnN0eWxlZCwgQWNjZXNzaWJsZSBVSSBDb21wb25lbnRzJyxcbiAgICBkYXRlOiAnMjAyMC0xMC0wNlQxODozMDowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL2hlYWRsZXNzLXVpLXVuc3R5bGVkLWFjY2Vzc2libGUtdWktY29tcG9uZW50cycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSGVhZGxlc3MgVUkgaXMgYSBzZXQgb2YgY29tcGxldGVseSB1bnN0eWxlZCwgZnVsbHkgYWNjZXNzaWJsZSBVSSBjb21wb25lbnRzIGZvciBSZWFjdCwgVnVlLCBhbmQgQWxwaW5lLmpzIHRoYXQgbWFrZSBpdCBlYXN5IHRvIGJ1aWxkIGZ1bGx5IGFjY2Vzc2libGUgY3VzdG9tIFVJIGNvbXBvbmVudHMsIHdpdGhvdXQgc2FjcmlmaWNpbmcgdGhlIGFiaWxpdHkgdG8gc3R5bGUgdGhlbSBmcm9tIHNjcmF0Y2ggd2l0aCBzaW1wbGUgdXRpbGl0eSBjbGFzc2VzLicsXG4gIH0sXG5dXG5cbmNvbnN0IGZvcm1hdERhdGUgPSB0aW55dGltZSgne01NfSB7RER9LCB7WVlZWX0nKS5yZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jc0xhbmRpbmdQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IHhsOnB4LTggcHQtMTAgcGItMTZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBsZWFkaW5nLW5vbmUgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCB0cmFja2luZy10aWdodCBtYi00XCI+XG4gICAgICAgINCd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0Ysg0YEgVGFpbHdpbmQgQ1NTXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdHJhY2tpbmctdGlnaHQgbWItMTBcIj5cbiAgICAgICAg0JjQt9GD0YfQuNGC0LUgVGFpbHdpbmQg0YHQv9C+0YHQvtCx0L7QvCwg0LrQvtGC0L7RgNGL0Lkg0LvRg9GH0YjQtSDQstGB0LXQs9C+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINCy0LDRiNC10LzRgyDRgdGC0LjQu9GOINC+0LHRg9GH0LXQvdC40Y8uXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTYgeGw6Z2FwLThcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIHRleHQtd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGZsZXggc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IG1kOmZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnRzLnZpb2xldFswXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPtCn0YLQtdC90LjQtSDQtNC+0LrRg9C80LXQvdGC0LDRhtC40Lg8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtdmlvbGV0LTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICDQo9C30L3QsNC50YLQtSwg0LrQsNC6INC90LDRgdGC0YDQvtC40YLRjCBUYWlsd2luZCDQsiDRgdCy0L7QtdC8INC/0YDQvtC10LrRgtC1LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvY3MvaW5zdGFsbGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtdC1hdXRvIGJnLXZpb2xldC04MDAgYmctb3BhY2l0eS01MCBob3ZlcjpiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDQvtCx0YPRh9C10L3QuNC1XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgbWQ6cGwtNiB4bDpwbC04IGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxHdWlkZXNJbWFnZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiBsZWZ0LTYgbWQ6c3RhdGljIG92ZXJmbG93LXZpc2libGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTIwIGhpZGRlbiBzbTpibG9ja1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigxMzUsIDk0LCAyNDUpLCByZ2JhKDEzNSwgOTQsIDI0NSwgMCkpJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIHRleHQtd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGZsZXggc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IG1kOmZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnRzLnBpbmtbMF19YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc20gc206ZmxleC1ub25lIG1kOnctYXV0byBtZDpmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCByZWxhdGl2ZSB6LTEwIHAtNiB4bDpwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1zaGFkb3dcIj7Qn9C+0L/RgNC+0LHQvtCy0LDRgtGMINCyINCx0YDQsNGD0LfQtdGA0LU8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtcm9zZS0xMDAgdGV4dC1zaGFkb3cgbWItNFwiPlxuICAgICAgICAgICAgICAgICAg0J/QvtGB0YLRgNC+0LnRgtC1INGH0YLQvi3QvdC40LHRg9C00Ywg0YEgVGFpbHdpbmQg0L3QsCDQvdCw0YjQtdC5INC40LPRgNC+0LLQvtC5INC/0LvQvtGJ0LDQtNC60LUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5LnRhaWx3aW5kY3NzLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtYXV0byBiZy1yb3NlLTkwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQvlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1hZ2V9IHJlbGF0aXZlIG1kOnBsLTYgeGw6cGwtOCBoaWRkZW4gc206YmxvY2tgfT5cbiAgICAgICAgICAgICAgICA8UGxheUltYWdlIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IGxlZnQtNiBtZDpzdGF0aWMgb3ZlcmZsb3ctdmlzaWJsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXJvc2UtNTAwIGhpZGRlbiBzbTpibG9ja1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIHRleHQtd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGZsZXggc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IG1kOmZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnRzLmFtYmVyWzBdfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1heC13LXNtIHNtOmZsZXgtbm9uZSBtZDp3LWF1dG8gbWQ6ZmxleC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcmVsYXRpdmUgei0xMCBwLTYgeGw6cC04XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yIHRleHQtc2hhZG93XCI+0KHQvNC+0YLRgNC10YLRjCDRgdC60YDQuNC90LrQsNGB0YLRizwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1hbWJlci0xMDAgdGV4dC1zaGFkb3cgbWItNFwiPlxuICAgICAgICAgICAgICAgICAg0KPQt9C90LDQudGC0LUg0LHQvtC70YzRiNC1INC+IFRhaWx3aW5kINC/0YDRj9C80L4g0L7RgiDQutC+0LzQsNC90LTRiyDQvdCwINC90LDRiNC10Lwg0LrQsNC90LDQu9C1LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdGFpbHdpbmRsYWJzXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtdC1hdXRvIGJnLWFtYmVyLTkwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINC/0YDQvtGB0LzQvtGC0YBcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfSByZWxhdGl2ZSBoaWRkZW4gc206YmxvY2tgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiBib3R0b20tMyB4bDpib3R0b20tNVwiPlxuICAgICAgICAgICAgICAgICAgPFNjcmVlbmNhc3RzSW1hZ2UgY2xhc3NOYW1lPVwib3ZlcmZsb3ctdmlzaWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLW9yYW5nZS01MDAgaGlkZGVuIHNtOmJsb2NrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIGZsZXggZmxleC13cmFwIG1kOmZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTgwMCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgcHktNiBtZDpweS00IHB4LTYgbWQ6cHItNSBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5UYWlsd2luZCBVSTwvc3Bhbj5cbiAgICAgICAgICAgIDxUdWlMb2dvIGNsYXNzTmFtZT1cInctNDAgaC1hdXRvXCIgLz5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtYXV0byB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIDxXaWRvbnQ+0JrRgNCw0YHQuNCy0YvQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7Qs9C+INC40L3RgtC10YDRhNC10LnRgdCwLCDQvtGCINGB0L7Qt9C00LDRgtC10LvQtdC5IFRhaWx3aW5kIENTUy48L1dpZG9udD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2NvbXBvbmVudHNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ub25lIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBweS0zIHB4LTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgINCe0LHQt9C+0YAg0LrQvtC80L/QvtC90LXQvdGC0L7QslxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbXQtMTYgbWItOFwiPlxuICAgICAgICAgINCn0YLQviDQvdC+0LLQvtCz0L4g0LIgVGFpbHdpbmRcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTQgc206Z2FwLTYgeGw6Z2FwLTggZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3doYXRzTmV3Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQteGwgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgc2hhZG93LXNtIHctZnVsbCBwdC04IHBiLTYgcHgtNlwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uaW1hZ2UgJiYgPGl0ZW0uaW1hZ2UgY2xhc3NOYW1lPVwiaC1hdXRvIG1heC13LWZ1bGwgbXgtYXV0byBtYi0zXCIgLz59XG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnZlcnNpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIGJnLWZ1Y2hzaWEtMTAwIHRleHQtZnVjaHNpYS02MDAgcm91bmRlZC1mdWxsIHRleHQteHMgcHktMC41IHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0xNiBtYi04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5MYXRlc3QgVXBkYXRlczwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb21cIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBWaWV3IGFsbCB0aGUgbGF0ZXN0IHVwZGF0ZXNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLTN4bCBwLTIgc206cC01IHhsOnAtNlwiPlxuICAgICAgICAgIHtsYXRlc3RVcGRhdGVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTggeGw6Z3JpZC1jb2xzLTkgaXRlbXMtc3RhcnQgcmVsYXRpdmUgcm91bmRlZC14bCBwLTMgc206cC01IHhsOnAtNiBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6Ymctd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbWQ6Y29sLXN0YXJ0LTMgbWQ6Y29sLXNwYW4tNiB4bDpjb2wtc3RhcnQtMyB4bDpjb2wtc3Bhbi03IG1iLTEgbWwtOSBtZDptbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDx0aW1lXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmNvbC1zdGFydC0xIG1kOmNvbC1zcGFuLTIgcm93LXN0YXJ0LTEgbWQ6cm93LWVuZC0zIGZsZXggaXRlbXMtY2VudGVyIGZvbnQtbWVkaXVtIG1iLTEgbWQ6bWItMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyIDEyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3ctMyBoLTMgbXItNiBvdmVyZmxvdy12aXNpYmxlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS0zMDAnOiBpICE9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtY3lhbi00MDAnOiBpID09PSAwLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtpID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjExXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHtpICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDYgLTYgViAtMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIHtpICE9PSBsYXRlc3RVcGRhdGVzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gNiAxOCBWIDUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShuZXcgRGF0ZShpdGVtLmRhdGUpKX1cbiAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1kOmNvbC1zdGFydC0zIG1kOmNvbC1zcGFuLTYgeGw6Y29sLXNwYW4tNyBtbC05IG1kOm1sLTBcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIG10LTE2IG1iLThcIj5cbiAgICAgICAgICBHZXQgaW52b2x2ZWRcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPENvbW11bml0eSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkRvY3NMYW5kaW5nUGFnZS5sYXlvdXRQcm9wcyA9IHtcbiAgbWV0YToge1xuICAgIHRpdGxlOiAnRG9jdW1lbnRhdGlvbicsXG4gIH0sXG4gIExheW91dDogRG9jdW1lbnRhdGlvbkxheW91dCxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=