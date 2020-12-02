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
  title: 'Extended Color Palette',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/color-palette.svg */ "./src/img/docs/color-palette.svg").ReactComponent,
  href: '/docs/customizing-colors#color-palette-reference'
}, {
  title: 'Extend Variants',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsid2hhdHNOZXciLCJ0aXRsZSIsInZlcnNpb24iLCJpbWFnZSIsInJlcXVpcmUiLCJSZWFjdENvbXBvbmVudCIsImhyZWYiLCJsYXRlc3RVcGRhdGVzIiwiZGF0ZSIsInVybCIsImRlc2NyaXB0aW9uIiwiZm9ybWF0RGF0ZSIsInRpbnl0aW1lIiwicmVuZGVyIiwiRG9jc0xhbmRpbmdQYWdlIiwiZ3JhZGllbnRzIiwidmlvbGV0Iiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBpbmsiLCJhbWJlciIsIm1hcCIsIml0ZW0iLCJpIiwiY2xzeCIsImxlbmd0aCIsIkRhdGUiLCJsYXlvdXRQcm9wcyIsIm1ldGEiLCJMYXlvdXQiLCJEb2N1bWVudGF0aW9uTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSw0QkFEVDtBQUVFQyxTQUFPLEVBQUUsTUFGWDtBQUdFQyxPQUFLLEVBQUVDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUFxQ0MsY0FIOUM7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQW9DQyxjQUg3QztBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLEVBYWY7QUFDRUwsT0FBSyxFQUFFLHdCQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQXdDQyxjQUhqRDtBQUlFQyxNQUFJLEVBQUU7QUFK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LGdGQUFtQkE7QUFKQyxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLjJkNGQzMGRmMDgyMzllOTQ2ZjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFNjcmVlbmNhc3RzSW1hZ2UgfSBmcm9tICdAL2ltZy9zY3JlZW5jYXN0cy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBHdWlkZXNJbWFnZSB9IGZyb20gJ0AvaW1nL2d1aWRlcy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBQbGF5SW1hZ2UgfSBmcm9tICdAL2ltZy9wbGF5LnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFR1aUxvZ28gfSBmcm9tICdAL2ltZy90YWlsd2luZC11aS1sb2dvLW9uLWRhcmsuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0aW55dGltZSBmcm9tICd0aW55dGltZSdcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db21tdW5pdHknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCB7IFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9XaWRvbnQnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBUdWlCdW5kbGVMb2dvIH0gZnJvbSAnQC9pbWcvdGFpbHdpbmQtdWktYnVuZGxlLWxvZ28uc3ZnJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgUmVmYWN0b3JpbmdVaUNvbXBsZXRlTG9nbyB9IGZyb20gJ0AvaW1nL3JlZmFjdG9yaW5nLXVpLWNvbXBsZXRlLWxvZ28uc3ZnJ1xuXG5jb25zdCB3aGF0c05ldyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0KPRgtC40LvQuNGC0Ysg0LrQvtC70YzRhtCwINGE0L7QutGD0YHQuNGA0L7QstC60LgnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9mb2N1cy1yaW5nLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9yaW5nLXdpZHRoJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KLQtdC80L3Ri9C5INGA0LXQttC40LwnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9kYXJrLW1vZGUuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2RhcmstbW9kZScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0V4dGVuZGVkIENvbG9yIFBhbGV0dGUnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9jb2xvci1wYWxldHRlLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9jdXN0b21pemluZy1jb2xvcnMjY29sb3ItcGFsZXR0ZS1yZWZlcmVuY2UnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFeHRlbmQgVmFyaWFudHMnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9leHRlbmQtdmFyaWFudHMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2NvbmZpZ3VyaW5nLXZhcmlhbnRzI2VuYWJsaW5nLWV4dHJhLXZhcmlhbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXh0cmEgV2lkZSBCcmVha3BvaW50JyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvYnJlYWtwb2ludC5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvYnJlYWtwb2ludHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTaGFyZWFibGUgUHJlc2V0cycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3Mvc2hhcmVhYmxlLXByZXNldHMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL3ByZXNldHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdHcmFkaWVudHMnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2dyYWRpZW50cy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvZ3JhZGllbnQtY29sb3Itc3RvcHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBbmltYXRpb25zJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9hbmltYXRpb25zLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9hbmltYXRpb24nLFxuICB9LFxuXVxuXG5jb25zdCBsYXRlc3RVcGRhdGVzID0gW1xuICB7XG4gICAgdGl0bGU6ICdUYWlsd2luZCBDU1MgdjIuMCcsXG4gICAgZGF0ZTogJzIwMjAtMTEtMThUMTc6NDU6MDAuMDAwWicsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy12MicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRvZGF5IHdlJ3JlIGZpbmFsbHkgcmVsZWFzaW5nIFRhaWx3aW5kIENTUyB2Mi4wLCBpbmNsdWRpbmcgYW4gYWxsLW5ldyBjb2xvciBwYWxldHRlLCBkYXJrIG1vZGUgc3VwcG9ydCwgYW5kIHRvbnMgbW9yZSFcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGFpbHdpbmQgQ1NTIHYxLjkuMCcsXG4gICAgZGF0ZTogJzIwMjAtMTAtMTNUMTg6MzA6MDAuMDAwWicsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy0xLTknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1dlIGp1c3QgcmVsZWFzZWQgVGFpbHdpbmQgQ1NTIHYxLjkgd2hpY2ggYWRkcyBzdXBwb3J0IGZvciBjb25maWd1cmF0aW9uIHByZXNldHMsIHVzZWZ1bCBuZXcgQ1NTIGdyaWQgdXRpbGl0aWVzLCBleHRlbmRlZCBib3JkZXIgcmFkaXVzLCByb3RhdGUsIGFuZCBza2V3IHNjYWxlcywgaGVscGZ1bCBhY2Nlc3NpYmlsaXR5IGltcHJvdmVtZW50cywgYW5kIG1vcmUhJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSW50cm9kdWNpbmcgVGFpbHdpbmQgUGxheScsXG4gICAgZGF0ZTogJzIwMjAtMTAtMDdUMTM6MDA6MDAuMDAwWicsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS9pbnRyb2R1Y2luZy10YWlsd2luZC1wbGF5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVG9kYXkgd2UncmUgZXhjaXRlZCB0byByZWxlYXNlIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIFRhaWx3aW5kIFBsYXksIGFuIGFkdmFuY2VkIG9ubGluZSBwbGF5Z3JvdW5kIGZvciBUYWlsd2luZCBDU1MgdGhhdCBsZXRzIHlvdSB1c2UgYWxsIG9mIFRhaWx3aW5kJ3MgYnVpbGQtdGltZSBmZWF0dXJlcyBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlci5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSGVhZGxlc3MgVUk6IFVuc3R5bGVkLCBBY2Nlc3NpYmxlIFVJIENvbXBvbmVudHMnLFxuICAgIGRhdGU6ICcyMDIwLTEwLTA2VDE4OjMwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vaGVhZGxlc3MtdWktdW5zdHlsZWQtYWNjZXNzaWJsZS11aS1jb21wb25lbnRzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdIZWFkbGVzcyBVSSBpcyBhIHNldCBvZiBjb21wbGV0ZWx5IHVuc3R5bGVkLCBmdWxseSBhY2Nlc3NpYmxlIFVJIGNvbXBvbmVudHMgZm9yIFJlYWN0LCBWdWUsIGFuZCBBbHBpbmUuanMgdGhhdCBtYWtlIGl0IGVhc3kgdG8gYnVpbGQgZnVsbHkgYWNjZXNzaWJsZSBjdXN0b20gVUkgY29tcG9uZW50cywgd2l0aG91dCBzYWNyaWZpY2luZyB0aGUgYWJpbGl0eSB0byBzdHlsZSB0aGVtIGZyb20gc2NyYXRjaCB3aXRoIHNpbXBsZSB1dGlsaXR5IGNsYXNzZXMuJyxcbiAgfSxcbl1cblxuY29uc3QgZm9ybWF0RGF0ZSA9IHRpbnl0aW1lKCd7TU19IHtERH0sIHtZWVlZfScpLnJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzTGFuZGluZ1BhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgeGw6cHgtOCBwdC0xMCBwYi0xNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGxlYWRpbmctbm9uZSBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXRpZ2h0IG1iLTRcIj5cbiAgICAgICAg0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyDRgSBUYWlsd2luZCBDU1NcbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0cmFja2luZy10aWdodCBtYi0xMFwiPlxuICAgICAgICDQmNC30YPRh9C40YLQtSBUYWlsd2luZCDRgdC/0L7RgdC+0LHQvtC8LCDQutC+0YLQvtGA0YvQuSDQu9GD0YfRiNC1INCy0YHQtdCz0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LLQsNGI0LXQvNGDINGB0YLQuNC70Y4g0L7QsdGD0YfQtdC90LjRjy5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiB4bDpnYXAtOFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMudmlvbGV0WzBdfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1heC13LXNtIHNtOmZsZXgtbm9uZSBtZDp3LWF1dG8gbWQ6ZmxleC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcmVsYXRpdmUgei0xMCBwLTYgeGw6cC04XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yIHRleHQtc2hhZG93XCI+0KfRgtC10L3QuNC1INC00L7QutGD0LzQtdC90YLQsNGG0LjQuDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC12aW9sZXQtMTAwIHRleHQtc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgINCj0LfQvdCw0LnRgtC1LCDQutCw0Log0L3QsNGB0YLRgNC+0LjRgtGMIFRhaWx3aW5kINCyINGB0LLQvtC10Lwg0L/RgNC+0LXQutGC0LUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9pbnN0YWxsYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctdmlvbGV0LTgwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINC+0LHRg9GH0LXQvdC40LVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfSByZWxhdGl2ZSBtZDpwbC02IHhsOnBsLTggaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPEd1aWRlc0ltYWdlIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IGxlZnQtNiBtZDpzdGF0aWMgb3ZlcmZsb3ctdmlzaWJsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjAgaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzNSwgOTQsIDI0NSksIHJnYmEoMTM1LCA5NCwgMjQ1LCAwKSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMucGlua1swXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPtCf0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0LIg0LHRgNCw0YPQt9C10YDQtTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1yb3NlLTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICDQn9C+0YHRgtGA0L7QudGC0LUg0YfRgtC+LdC90LjQsdGD0LTRjCDRgSBUYWlsd2luZCDQvdCwINC90LDRiNC10Lkg0LjQs9GA0L7QstC+0Lkg0L/Qu9C+0YnQsNC00LrQtS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3BsYXkudGFpbHdpbmRjc3MuY29tL1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC1hdXRvIGJnLXJvc2UtOTAwIGJnLW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstC+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgbWQ6cGwtNiB4bDpwbC04IGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxQbGF5SW1hZ2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgbGVmdC02IG1kOnN0YXRpYyBvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBiZy1ncmFkaWVudC10by10IGZyb20tcm9zZS01MDAgaGlkZGVuIHNtOmJsb2NrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMuYW1iZXJbMF19YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc20gc206ZmxleC1ub25lIG1kOnctYXV0byBtZDpmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCByZWxhdGl2ZSB6LTEwIHAtNiB4bDpwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1zaGFkb3dcIj7QodC80L7RgtGA0LXRgtGMINGB0LrRgNC40L3QutCw0YHRgtGLPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWFtYmVyLTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICDQo9C30L3QsNC50YLQtSDQsdC+0LvRjNGI0LUg0L4gVGFpbHdpbmQg0L/RgNGP0LzQviDQvtGCINC60L7QvNCw0L3QtNGLINC90LAg0L3QsNGI0LXQvCDQutCw0L3QsNC70LUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS90YWlsd2luZGxhYnNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctYW1iZXItOTAwIGJnLW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0Ywg0L/RgNC+0YHQvNC+0YLRgFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1hZ2V9IHJlbGF0aXZlIGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGJvdHRvbS0zIHhsOmJvdHRvbS01XCI+XG4gICAgICAgICAgICAgICAgICA8U2NyZWVuY2FzdHNJbWFnZSBjbGFzc05hbWU9XCJvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBiZy1ncmFkaWVudC10by10IGZyb20tb3JhbmdlLTUwMCBoaWRkZW4gc206YmxvY2tcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTMgZmxleCBmbGV4LXdyYXAgbWQ6ZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyIGJnLWdyYXktODAwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBweS02IG1kOnB5LTQgcHgtNiBtZDpwci01IHNwYWNlLXktNCBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRhaWx3aW5kIFVJPC9zcGFuPlxuICAgICAgICAgICAgPFR1aUxvZ28gY2xhc3NOYW1lPVwidy00MCBoLWF1dG9cIiAvPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC1hdXRvIHRleHQtd2hpdGUgdGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgPFdpZG9udD7QmtGA0LDRgdC40LLRi9C1INC60L7QvNC/0L7QvdC10L3RgtGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0LjQvdGC0LXRgNGE0LXQudGB0LAsINC+0YIg0YHQvtC30LTQsNGC0LXQu9C10LkgVGFpbHdpbmQgQ1NTLjwvV2lkb250PlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vY29tcG9uZW50c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LW5vbmUgYmctd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHB5LTMgcHgtNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J7QsdC30L7RgCDQutC+0LzQv9C+0L3QtdC90YLQvtCyXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAg0KfRgtC+INC90L7QstC+0LPQviDQsiBUYWlsd2luZFxuICAgICAgICA8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAtNCBzbTpnYXAtNiB4bDpnYXAtOCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7d2hhdHNOZXcubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC14bCByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBzaGFkb3ctc20gdy1mdWxsIHB0LTggcGItNiBweC02XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5pbWFnZSAmJiA8aXRlbS5pbWFnZSBjbGFzc05hbWU9XCJoLWF1dG8gbWF4LXctZnVsbCBteC1hdXRvIG1iLTNcIiAvPn1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAge2l0ZW0udmVyc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgYmctZnVjaHNpYS0xMDAgdGV4dC1mdWNoc2lhLTYwMCByb3VuZGVkLWZ1bGwgdGV4dC14cyBweS0wLjUgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTE2IG1iLThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPkxhdGVzdCBVcGRhdGVzPC9oMj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIFZpZXcgYWxsIHRoZSBsYXRlc3QgdXBkYXRlc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJvdW5kZWQtM3hsIHAtMiBzbTpwLTUgeGw6cC02XCI+XG4gICAgICAgICAge2xhdGVzdFVwZGF0ZXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtOCB4bDpncmlkLWNvbHMtOSBpdGVtcy1zdGFydCByZWxhdGl2ZSByb3VuZGVkLXhsIHAtMyBzbTpwLTUgeGw6cC02IG92ZXJmbG93LWhpZGRlbiBob3ZlcjpiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtZDpjb2wtc3RhcnQtMyBtZDpjb2wtc3Bhbi02IHhsOmNvbC1zdGFydC0zIHhsOmNvbC1zcGFuLTcgbWItMSBtbC05IG1kOm1sLTBcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6Y29sLXN0YXJ0LTEgbWQ6Y29sLXNwYW4tMiByb3ctc3RhcnQtMSBtZDpyb3ctZW5kLTMgZmxleCBpdGVtcy1jZW50ZXIgZm9udC1tZWRpdW0gbWItMSBtZDptYi0wXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgndy0zIGgtMyBtci02IG92ZXJmbG93LXZpc2libGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTMwMCc6IGkgIT09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1jeWFuLTQwMCc6IGkgPT09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2kgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByPVwiMTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2kgIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gNiAtNiBWIC0zMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2kgIT09IGxhdGVzdFVwZGF0ZXMubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSA2IDE4IFYgNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5ldyBEYXRlKGl0ZW0uZGF0ZSkpfVxuICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6Y29sLXN0YXJ0LTMgbWQ6Y29sLXNwYW4tNiB4bDpjb2wtc3Bhbi03IG1sLTkgbWQ6bWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbXQtMTYgbWItOFwiPlxuICAgICAgICAgIEdldCBpbnZvbHZlZFxuICAgICAgICA8L2gyPlxuICAgICAgICA8Q29tbXVuaXR5IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuRG9jc0xhbmRpbmdQYWdlLmxheW91dFByb3BzID0ge1xuICBtZXRhOiB7XG4gICAgdGl0bGU6ICdEb2N1bWVudGF0aW9uJyxcbiAgfSxcbiAgTGF5b3V0OiBEb2N1bWVudGF0aW9uTGF5b3V0LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==