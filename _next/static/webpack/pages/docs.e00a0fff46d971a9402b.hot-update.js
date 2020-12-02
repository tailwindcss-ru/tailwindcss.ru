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
  title: 'Focus Ring Utilities',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/focus-ring.svg */ "./src/img/docs/focus-ring.svg").ReactComponent,
  href: '/docs/ring-width'
}, {
  title: 'Dark Mode',
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
  }, "Learn how to get Tailwind set up in your project."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, "Start learning"))), __jsx("div", {
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
  }, "Try it in the browser"), __jsx("p", {
    className: "font-medium text-rose-100 text-shadow mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "Build something with Tailwind in our online playground."), __jsx("a", {
    href: "https://play.tailwindcss.com/",
    className: "mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "Start building")), __jsx("div", {
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
  }, "Watch the screencasts"), __jsx("p", {
    className: "font-medium text-amber-100 text-shadow mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "Learn more about Tailwind directly from the team on our channel."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, "Start watching"))), __jsx("div", {
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
  }, "Beautiful UI components, crafted by the creators of Tailwind CSS")), __jsx("a", {
    href: "https://tailwindui.com/components",
    className: "flex-none bg-white hover:bg-gray-100 transition-colors duration-200 text-gray-900 font-semibold rounded-lg py-3 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "Browse components"))), __jsx("section", {
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
  }, "What\u2019s new in Tailwind"), __jsx("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsid2hhdHNOZXciLCJ0aXRsZSIsInZlcnNpb24iLCJpbWFnZSIsInJlcXVpcmUiLCJSZWFjdENvbXBvbmVudCIsImhyZWYiLCJsYXRlc3RVcGRhdGVzIiwiZGF0ZSIsInVybCIsImRlc2NyaXB0aW9uIiwiZm9ybWF0RGF0ZSIsInRpbnl0aW1lIiwicmVuZGVyIiwiRG9jc0xhbmRpbmdQYWdlIiwiZ3JhZGllbnRzIiwidmlvbGV0Iiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBpbmsiLCJhbWJlciIsIm1hcCIsIml0ZW0iLCJpIiwiY2xzeCIsImxlbmd0aCIsIkRhdGUiLCJsYXlvdXRQcm9wcyIsIm1ldGEiLCJMYXlvdXQiLCJEb2N1bWVudGF0aW9uTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSxzQkFEVDtBQUVFQyxTQUFPLEVBQUUsTUFGWDtBQUdFQyxPQUFLLEVBQUVDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUFxQ0MsY0FIOUM7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VMLE9BQUssRUFBRSxXQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQW9DQyxjQUg3QztBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLEVBYWY7QUFDRUwsT0FBSyxFQUFFLHdCQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQXdDQyxjQUhqRDtBQUlFQyxNQUFJLEVBQUU7QUFK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LGdGQUFtQkE7QUFKQyxDQUE5QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLmUwMGEwZmZmNDZkOTcxYTk0MDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudGF0aW9uTGF5b3V0IH0gZnJvbSAnQC9sYXlvdXRzL0RvY3VtZW50YXRpb25MYXlvdXQnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFNjcmVlbmNhc3RzSW1hZ2UgfSBmcm9tICdAL2ltZy9zY3JlZW5jYXN0cy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBHdWlkZXNJbWFnZSB9IGZyb20gJ0AvaW1nL2d1aWRlcy5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBQbGF5SW1hZ2UgfSBmcm9tICdAL2ltZy9wbGF5LnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFR1aUxvZ28gfSBmcm9tICdAL2ltZy90YWlsd2luZC11aS1sb2dvLW9uLWRhcmsuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB0aW55dGltZSBmcm9tICd0aW55dGltZSdcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db21tdW5pdHknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCB7IFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9XaWRvbnQnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBUdWlCdW5kbGVMb2dvIH0gZnJvbSAnQC9pbWcvdGFpbHdpbmQtdWktYnVuZGxlLWxvZ28uc3ZnJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgUmVmYWN0b3JpbmdVaUNvbXBsZXRlTG9nbyB9IGZyb20gJ0AvaW1nL3JlZmFjdG9yaW5nLXVpLWNvbXBsZXRlLWxvZ28uc3ZnJ1xuXG5jb25zdCB3aGF0c05ldyA9IFtcbiAge1xuICAgIHRpdGxlOiAnRm9jdXMgUmluZyBVdGlsaXRpZXMnLFxuICAgIHZlcnNpb246ICcyLjArJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9mb2N1cy1yaW5nLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9yaW5nLXdpZHRoJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRGFyayBNb2RlJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZGFyay1tb2RlLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9kYXJrLW1vZGUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFeHRlbmRlZCBDb2xvciBQYWxldHRlJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvY29sb3ItcGFsZXR0ZS5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvY3VzdG9taXppbmctY29sb3JzI2NvbG9yLXBhbGV0dGUtcmVmZXJlbmNlJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXh0ZW5kIFZhcmlhbnRzJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZXh0ZW5kLXZhcmlhbnRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9jb25maWd1cmluZy12YXJpYW50cyNlbmFibGluZy1leHRyYS12YXJpYW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0V4dHJhIFdpZGUgQnJlYWtwb2ludCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2JyZWFrcG9pbnQuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2JyZWFrcG9pbnRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2hhcmVhYmxlIFByZXNldHMnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL3NoYXJlYWJsZS1wcmVzZXRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9wcmVzZXRzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR3JhZGllbnRzJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9ncmFkaWVudHMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQW5pbWF0aW9ucycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvYW5pbWF0aW9ucy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvYW5pbWF0aW9uJyxcbiAgfSxcbl1cblxuY29uc3QgbGF0ZXN0VXBkYXRlcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVGFpbHdpbmQgQ1NTIHYyLjAnLFxuICAgIGRhdGU6ICcyMDIwLTExLTE4VDE3OjQ1OjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUb2RheSB3ZSdyZSBmaW5hbGx5IHJlbGVhc2luZyBUYWlsd2luZCBDU1MgdjIuMCwgaW5jbHVkaW5nIGFuIGFsbC1uZXcgY29sb3IgcGFsZXR0ZSwgZGFyayBtb2RlIHN1cHBvcnQsIGFuZCB0b25zIG1vcmUhXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RhaWx3aW5kIENTUyB2MS45LjAnLFxuICAgIGRhdGU6ICcyMDIwLTEwLTEzVDE4OjMwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtMS05JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdXZSBqdXN0IHJlbGVhc2VkIFRhaWx3aW5kIENTUyB2MS45IHdoaWNoIGFkZHMgc3VwcG9ydCBmb3IgY29uZmlndXJhdGlvbiBwcmVzZXRzLCB1c2VmdWwgbmV3IENTUyBncmlkIHV0aWxpdGllcywgZXh0ZW5kZWQgYm9yZGVyIHJhZGl1cywgcm90YXRlLCBhbmQgc2tldyBzY2FsZXMsIGhlbHBmdWwgYWNjZXNzaWJpbGl0eSBpbXByb3ZlbWVudHMsIGFuZCBtb3JlIScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ludHJvZHVjaW5nIFRhaWx3aW5kIFBsYXknLFxuICAgIGRhdGU6ICcyMDIwLTEwLTA3VDEzOjAwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vaW50cm9kdWNpbmctdGFpbHdpbmQtcGxheScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRvZGF5IHdlJ3JlIGV4Y2l0ZWQgdG8gcmVsZWFzZSB0aGUgZmlyc3QgdmVyc2lvbiBvZiBUYWlsd2luZCBQbGF5LCBhbiBhZHZhbmNlZCBvbmxpbmUgcGxheWdyb3VuZCBmb3IgVGFpbHdpbmQgQ1NTIHRoYXQgbGV0cyB5b3UgdXNlIGFsbCBvZiBUYWlsd2luZCdzIGJ1aWxkLXRpbWUgZmVhdHVyZXMgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hlYWRsZXNzIFVJOiBVbnN0eWxlZCwgQWNjZXNzaWJsZSBVSSBDb21wb25lbnRzJyxcbiAgICBkYXRlOiAnMjAyMC0xMC0wNlQxODozMDowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL2hlYWRsZXNzLXVpLXVuc3R5bGVkLWFjY2Vzc2libGUtdWktY29tcG9uZW50cycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSGVhZGxlc3MgVUkgaXMgYSBzZXQgb2YgY29tcGxldGVseSB1bnN0eWxlZCwgZnVsbHkgYWNjZXNzaWJsZSBVSSBjb21wb25lbnRzIGZvciBSZWFjdCwgVnVlLCBhbmQgQWxwaW5lLmpzIHRoYXQgbWFrZSBpdCBlYXN5IHRvIGJ1aWxkIGZ1bGx5IGFjY2Vzc2libGUgY3VzdG9tIFVJIGNvbXBvbmVudHMsIHdpdGhvdXQgc2FjcmlmaWNpbmcgdGhlIGFiaWxpdHkgdG8gc3R5bGUgdGhlbSBmcm9tIHNjcmF0Y2ggd2l0aCBzaW1wbGUgdXRpbGl0eSBjbGFzc2VzLicsXG4gIH0sXG5dXG5cbmNvbnN0IGZvcm1hdERhdGUgPSB0aW55dGltZSgne01NfSB7RER9LCB7WVlZWX0nKS5yZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jc0xhbmRpbmdQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IHhsOnB4LTggcHQtMTAgcGItMTZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBsZWFkaW5nLW5vbmUgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCB0cmFja2luZy10aWdodCBtYi00XCI+XG4gICAgICAgINCd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0Ysg0YEgVGFpbHdpbmQgQ1NTXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdHJhY2tpbmctdGlnaHQgbWItMTBcIj5cbiAgICAgICAg0JjQt9GD0YfQuNGC0LUgVGFpbHdpbmQg0YHQv9C+0YHQvtCx0L7QvCwg0LrQvtGC0L7RgNGL0Lkg0LvRg9GH0YjQtSDQstGB0LXQs9C+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINCy0LDRiNC10LzRgyDRgdGC0LjQu9GOINC+0LHRg9GH0LXQvdC40Y8uXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTYgeGw6Z2FwLThcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIHRleHQtd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtM3hsIGZsZXggc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctZnVsbCBmbGV4IG1kOmZsZXgtY29sIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnRzLnZpb2xldFswXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPtCn0YLQtdC90LjQtSDQtNC+0LrRg9C80LXQvdGC0LDRhtC40Lg8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtdmlvbGV0LTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICBMZWFybiBob3cgdG8gZ2V0IFRhaWx3aW5kIHNldCB1cCBpbiB5b3VyIHByb2plY3QuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9pbnN0YWxsYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctdmlvbGV0LTgwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgbGVhcm5pbmdcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfSByZWxhdGl2ZSBtZDpwbC02IHhsOnBsLTggaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPEd1aWRlc0ltYWdlIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IGxlZnQtNiBtZDpzdGF0aWMgb3ZlcmZsb3ctdmlzaWJsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjAgaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzNSwgOTQsIDI0NSksIHJnYmEoMTM1LCA5NCwgMjQ1LCAwKSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMucGlua1swXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPlRyeSBpdCBpbiB0aGUgYnJvd3NlcjwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1yb3NlLTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICBCdWlsZCBzb21ldGhpbmcgd2l0aCBUYWlsd2luZCBpbiBvdXIgb25saW5lIHBsYXlncm91bmQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5LnRhaWx3aW5kY3NzLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtYXV0byBiZy1yb3NlLTkwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN0YXJ0IGJ1aWxkaW5nXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgbWQ6cGwtNiB4bDpwbC04IGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxQbGF5SW1hZ2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgbGVmdC02IG1kOnN0YXRpYyBvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBiZy1ncmFkaWVudC10by10IGZyb20tcm9zZS01MDAgaGlkZGVuIHNtOmJsb2NrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMuYW1iZXJbMF19YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc20gc206ZmxleC1ub25lIG1kOnctYXV0byBtZDpmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCByZWxhdGl2ZSB6LTEwIHAtNiB4bDpwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1zaGFkb3dcIj5XYXRjaCB0aGUgc2NyZWVuY2FzdHM8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYW1iZXItMTAwIHRleHQtc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIExlYXJuIG1vcmUgYWJvdXQgVGFpbHdpbmQgZGlyZWN0bHkgZnJvbSB0aGUgdGVhbSBvbiBvdXIgY2hhbm5lbC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFic1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtYXV0byBiZy1hbWJlci05MDAgYmctb3BhY2l0eS01MCBob3ZlcjpiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByb3VuZGVkLXhsIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IHdhdGNoaW5nXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgYm90dG9tLTMgeGw6Ym90dG9tLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxTY3JlZW5jYXN0c0ltYWdlIGNsYXNzTmFtZT1cIm92ZXJmbG93LXZpc2libGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTIwIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1vcmFuZ2UtNTAwIGhpZGRlbiBzbTpibG9ja1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBmbGV4IGZsZXgtd3JhcCBtZDpmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXIgYmctZ3JheS04MDAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIHB5LTYgbWQ6cHktNCBweC02IG1kOnByLTUgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmxleC1ub25lXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGFpbHdpbmQgVUk8L3NwYW4+XG4gICAgICAgICAgICA8VHVpTG9nbyBjbGFzc05hbWU9XCJ3LTQwIGgtYXV0b1wiIC8+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LWF1dG8gdGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICA8V2lkb250PkJlYXV0aWZ1bCBVSSBjb21wb25lbnRzLCBjcmFmdGVkIGJ5IHRoZSBjcmVhdG9ycyBvZiBUYWlsd2luZCBDU1M8L1dpZG9udD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2NvbXBvbmVudHNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ub25lIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBweS0zIHB4LTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJyb3dzZSBjb21wb25lbnRzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAgV2hhdOKAmXMgbmV3IGluIFRhaWx3aW5kXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC00IHNtOmdhcC02IHhsOmdhcC04IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt3aGF0c05ldy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLXhsIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IHNoYWRvdy1zbSB3LWZ1bGwgcHQtOCBwYi02IHB4LTZcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmltYWdlICYmIDxpdGVtLmltYWdlIGNsYXNzTmFtZT1cImgtYXV0byBtYXgtdy1mdWxsIG14LWF1dG8gbWItM1wiIC8+fVxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICB7aXRlbS52ZXJzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBiZy1mdWNoc2lhLTEwMCB0ZXh0LWZ1Y2hzaWEtNjAwIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIHB5LTAuNSBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0udmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMTYgbWItOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+TGF0ZXN0IFVwZGF0ZXM8L2gyPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgVmlldyBhbGwgdGhlIGxhdGVzdCB1cGRhdGVzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC0zeGwgcC0yIHNtOnAtNSB4bDpwLTZcIj5cbiAgICAgICAgICB7bGF0ZXN0VXBkYXRlcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy04IHhsOmdyaWQtY29scy05IGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHJvdW5kZWQteGwgcC0zIHNtOnAtNSB4bDpwLTYgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1kOmNvbC1zdGFydC0zIG1kOmNvbC1zcGFuLTYgeGw6Y29sLXN0YXJ0LTMgeGw6Y29sLXNwYW4tNyBtYi0xIG1sLTkgbWQ6bWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMSBtZDpjb2wtc3Bhbi0yIHJvdy1zdGFydC0xIG1kOnJvdy1lbmQtMyBmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSBtYi0xIG1kOm1iLTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd3LTMgaC0zIG1yLTYgb3ZlcmZsb3ctdmlzaWJsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMzAwJzogaSAhPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWN5YW4tNDAwJzogaSA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIxMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSA2IC02IFYgLTMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gbGF0ZXN0VXBkYXRlcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDYgMTggViA1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoaXRlbS5kYXRlKSl9XG4gICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMyBtZDpjb2wtc3Bhbi02IHhsOmNvbC1zcGFuLTcgbWwtOSBtZDptbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAgR2V0IGludm9sdmVkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb21tdW5pdHkgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Eb2NzTGFuZGluZ1BhZ2UubGF5b3V0UHJvcHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICB9LFxuICBMYXlvdXQ6IERvY3VtZW50YXRpb25MYXlvdXQsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9