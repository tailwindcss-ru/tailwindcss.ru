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
  title: 'Расширение вариантов',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/extend-variants.svg */ "./src/img/docs/extend-variants.svg").ReactComponent,
  href: '/docs/configuring-variants#enabling-extra-variants'
}, {
  title: 'Очень широкая контрольная точка',
  version: '2.0+',
  image: __webpack_require__(/*! @/img/docs/breakpoint.svg */ "./src/img/docs/breakpoint.svg").ReactComponent,
  href: '/docs/breakpoints'
}, {
  title: 'Общие пресеты',
  image: __webpack_require__(/*! @/img/docs/shareable-presets.svg */ "./src/img/docs/shareable-presets.svg").ReactComponent,
  href: '/docs/presets'
}, {
  title: 'Градиенты',
  image: __webpack_require__(/*! @/img/docs/gradients.svg */ "./src/img/docs/gradients.svg").ReactComponent,
  href: '/docs/gradient-color-stops'
}, {
  title: 'Анимация',
  image: __webpack_require__(/*! @/img/docs/animations.svg */ "./src/img/docs/animations.svg").ReactComponent,
  href: '/docs/animation'
}];
var latestUpdates = [{
  title: 'Tailwind CSS v2.0',
  date: '2020-11-18T17:45:00.000Z',
  url: 'https://blog.tailwindcss.com/tailwindcss-v2',
  description: "Сегодня мы наконец-то выпускаем Tailwind CSS v2.0, включая совершенно новую цветовую палитру, поддержку темного режима и многое другое!"
}, {
  title: 'Tailwind CSS v1.9.0',
  date: '2020-10-13T18:30:00.000Z',
  url: 'https://blog.tailwindcss.com/tailwindcss-1-9',
  description: 'Мы только что выпустили Tailwind CSS v1.9, в котором добавлена поддержка предустановок конфигурации, новые полезные утилиты сетки CSS, расширенный радиус границы, масштаб вращения и наклона, полезные улучшения доступности и многое другое!'
}, {
  title: 'Представляем Tailwind Play',
  date: '2020-10-07T13:00:00.000Z',
  url: 'https://blog.tailwindcss.com/introducing-tailwind-play',
  description: "Сегодня мы рады выпустить первую версию Tailwind Play, расширенной онлайн-площадки для Tailwind CSS, которая позволяет Вам использовать все функции времени сборки Tailwind прямо в браузере."
}, {
  title: 'Headless UI: не стилизованные, доступные компоненты пользовательского интерфейса',
  date: '2020-10-06T18:30:00.000Z',
  url: 'https://blog.tailwindcss.com/headless-ui-unstyled-accessible-ui-components',
  description: 'Безголовый пользовательский интерфейс - это набор полностью не стилизованных, полностью доступных компонентов пользовательского интерфейса для React, Vue и Alpine.js, которые позволяют легко создавать полностью доступные пользовательские компоненты пользовательского интерфейса, не жертвуя возможностью стилизовать их с нуля с помощью простых служебных классов.'
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
  }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"), __jsx("a", {
    href: "https://blog.tailwindcss.com",
    className: "font-medium text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F")), __jsx("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RvY3MvaW5kZXguanMiXSwibmFtZXMiOlsid2hhdHNOZXciLCJ0aXRsZSIsInZlcnNpb24iLCJpbWFnZSIsInJlcXVpcmUiLCJSZWFjdENvbXBvbmVudCIsImhyZWYiLCJsYXRlc3RVcGRhdGVzIiwiZGF0ZSIsInVybCIsImRlc2NyaXB0aW9uIiwiZm9ybWF0RGF0ZSIsInRpbnl0aW1lIiwicmVuZGVyIiwiRG9jc0xhbmRpbmdQYWdlIiwiZ3JhZGllbnRzIiwidmlvbGV0Iiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBpbmsiLCJhbWJlciIsIm1hcCIsIml0ZW0iLCJpIiwiY2xzeCIsImxlbmd0aCIsIkRhdGUiLCJsYXlvdXRQcm9wcyIsIm1ldGEiLCJMYXlvdXQiLCJEb2N1bWVudGF0aW9uTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSw0QkFEVDtBQUVFQyxTQUFPLEVBQUUsTUFGWDtBQUdFQyxPQUFLLEVBQUVDLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDQUFxQ0MsY0FIOUM7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FEZSxFQU9mO0FBQ0VMLE9BQUssRUFBRSxjQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyw4REFBRCxDQUFQLENBQW9DQyxjQUg3QztBQUlFQyxNQUFJLEVBQUU7QUFKUixDQVBlLEVBYWY7QUFDRUwsT0FBSyxFQUFFLDhCQURUO0FBRUVDLFNBQU8sRUFBRSxNQUZYO0FBR0VDLE9BQUssRUFBRUMsbUJBQU8sQ0FBQyxzRUFBRCxDQUFQLENBQXdDQyxjQUhqRDtBQUlFQyxNQUFJLEVBQUU7QUFK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Z0ZBQW1CQTtBQUpDLENBQTlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MuYmUxMTdiMzhkYWMyYzY4NjczOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50YXRpb25MYXlvdXQgfSBmcm9tICdAL2xheW91dHMvRG9jdW1lbnRhdGlvbkxheW91dCdcbmltcG9ydCB7IGdyYWRpZW50cyB9IGZyb20gJ0AvdXRpbHMvZ3JhZGllbnRzJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgU2NyZWVuY2FzdHNJbWFnZSB9IGZyb20gJ0AvaW1nL3NjcmVlbmNhc3RzLnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEd1aWRlc0ltYWdlIH0gZnJvbSAnQC9pbWcvZ3VpZGVzLnN2ZydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFBsYXlJbWFnZSB9IGZyb20gJ0AvaW1nL3BsYXkuc3ZnJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgVHVpTG9nbyB9IGZyb20gJ0AvaW1nL3RhaWx3aW5kLXVpLWxvZ28tb24tZGFyay5zdmcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHRpbnl0aW1lIGZyb20gJ3Rpbnl0aW1lJ1xuaW1wb3J0IHsgQ29tbXVuaXR5IH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbW11bml0eSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgV2lkb250IH0gZnJvbSAnQC9jb21wb25lbnRzL1dpZG9udCdcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFR1aUJ1bmRsZUxvZ28gfSBmcm9tICdAL2ltZy90YWlsd2luZC11aS1idW5kbGUtbG9nby5zdmcnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBSZWZhY3RvcmluZ1VpQ29tcGxldGVMb2dvIH0gZnJvbSAnQC9pbWcvcmVmYWN0b3JpbmctdWktY29tcGxldGUtbG9nby5zdmcnXG5cbmNvbnN0IHdoYXRzTmV3ID0gW1xuICB7XG4gICAgdGl0bGU6ICfQo9GC0LjQu9C40YLRiyDQutC+0LvRjNGG0LAg0YTQvtC60YPRgdC40YDQvtCy0LrQuCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2ZvY3VzLXJpbmcuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL3Jpbmctd2lkdGgnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQotC10LzQvdGL0Lkg0YDQtdC20LjQvCcsXG4gICAgdmVyc2lvbjogJzIuMCsnLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2RhcmstbW9kZS5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvZGFyay1tb2RlJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KDQsNGB0YjQuNGA0LXQvdC90LDRjyDRhtCy0LXRgtC+0LLQsNGPINC/0LDQu9C40YLRgNCwJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvY29sb3ItcGFsZXR0ZS5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvY3VzdG9taXppbmctY29sb3JzI2NvbG9yLXBhbGV0dGUtcmVmZXJlbmNlJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KDQsNGB0YjQuNGA0LXQvdC40LUg0LLQsNGA0LjQsNC90YLQvtCyJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZXh0ZW5kLXZhcmlhbnRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9jb25maWd1cmluZy12YXJpYW50cyNlbmFibGluZy1leHRyYS12YXJpYW50cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ce0YfQtdC90Ywg0YjQuNGA0L7QutCw0Y8g0LrQvtC90YLRgNC+0LvRjNC90LDRjyDRgtC+0YfQutCwJyxcbiAgICB2ZXJzaW9uOiAnMi4wKycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvYnJlYWtwb2ludC5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvYnJlYWtwb2ludHMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQntCx0YnQuNC1INC/0YDQtdGB0LXRgtGLJyxcbiAgICBpbWFnZTogcmVxdWlyZSgnQC9pbWcvZG9jcy9zaGFyZWFibGUtcHJlc2V0cy5zdmcnKS5SZWFjdENvbXBvbmVudCxcbiAgICBocmVmOiAnL2RvY3MvcHJlc2V0cycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CT0YDQsNC00LjQtdC90YLRiycsXG4gICAgaW1hZ2U6IHJlcXVpcmUoJ0AvaW1nL2RvY3MvZ3JhZGllbnRzLnN2ZycpLlJlYWN0Q29tcG9uZW50LFxuICAgIGhyZWY6ICcvZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CQ0L3QuNC80LDRhtC40Y8nLFxuICAgIGltYWdlOiByZXF1aXJlKCdAL2ltZy9kb2NzL2FuaW1hdGlvbnMuc3ZnJykuUmVhY3RDb21wb25lbnQsXG4gICAgaHJlZjogJy9kb2NzL2FuaW1hdGlvbicsXG4gIH0sXG5dXG5cbmNvbnN0IGxhdGVzdFVwZGF0ZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1RhaWx3aW5kIENTUyB2Mi4wJyxcbiAgICBkYXRlOiAnMjAyMC0xMS0xOFQxNzo0NTowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi0KHQtdCz0L7QtNC90Y8g0LzRiyDQvdCw0LrQvtC90LXRhi3RgtC+INCy0YvQv9GD0YHQutCw0LXQvCBUYWlsd2luZCBDU1MgdjIuMCwg0LLQutC70Y7Rh9Cw0Y8g0YHQvtCy0LXRgNGI0LXQvdC90L4g0L3QvtCy0YPRjiDRhtCy0LXRgtC+0LLRg9GOINC/0LDQu9C40YLRgNGDLCDQv9C+0LTQtNC10YDQttC60YMg0YLQtdC80L3QvtCz0L4g0YDQtdC20LjQvNCwINC4INC80L3QvtCz0L7QtSDQtNGA0YPQs9C+0LUhXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RhaWx3aW5kIENTUyB2MS45LjAnLFxuICAgIGRhdGU6ICcyMDIwLTEwLTEzVDE4OjMwOjAwLjAwMFonLFxuICAgIHVybDogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtMS05JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICfQnNGLINGC0L7Qu9GM0LrQviDRh9GC0L4g0LLRi9C/0YPRgdGC0LjQu9C4IFRhaWx3aW5kIENTUyB2MS45LCDQsiDQutC+0YLQvtGA0L7QvCDQtNC+0LHQsNCy0LvQtdC90LAg0L/QvtC00LTQtdGA0LbQutCwINC/0YDQtdC00YPRgdGC0LDQvdC+0LLQvtC6INC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCwg0L3QvtCy0YvQtSDQv9C+0LvQtdC30L3Ri9C1INGD0YLQuNC70LjRgtGLINGB0LXRgtC60LggQ1NTLCDRgNCw0YHRiNC40YDQtdC90L3Ri9C5INGA0LDQtNC40YPRgSDQs9GA0LDQvdC40YbRiywg0LzQsNGB0YjRgtCw0LEg0LLRgNCw0YnQtdC90LjRjyDQuCDQvdCw0LrQu9C+0L3QsCwg0L/QvtC70LXQt9C90YvQtSDRg9C70YPRh9GI0LXQvdC40Y8g0LTQvtGB0YLRg9C/0L3QvtGB0YLQuCDQuCDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1IScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Cf0YDQtdC00YHRgtCw0LLQu9GP0LXQvCBUYWlsd2luZCBQbGF5JyxcbiAgICBkYXRlOiAnMjAyMC0xMC0wN1QxMzowMDowMC4wMDBaJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL2ludHJvZHVjaW5nLXRhaWx3aW5kLXBsYXknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCLQodC10LPQvtC00L3RjyDQvNGLINGA0LDQtNGLINCy0YvQv9GD0YHRgtC40YLRjCDQv9C10YDQstGD0Y4g0LLQtdGA0YHQuNGOIFRhaWx3aW5kIFBsYXksINGA0LDRgdGI0LjRgNC10L3QvdC+0Lkg0L7QvdC70LDQudC9LdC/0LvQvtGJ0LDQtNC60Lgg0LTQu9GPIFRhaWx3aW5kIENTUywg0LrQvtGC0L7RgNCw0Y8g0L/QvtC30LLQvtC70Y/QtdGCINCS0LDQvCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LLRgdC1INGE0YPQvdC60YbQuNC4INCy0YDQtdC80LXQvdC4INGB0LHQvtGA0LrQuCBUYWlsd2luZCDQv9GA0Y/QvNC+INCyINCx0YDQsNGD0LfQtdGA0LUuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0hlYWRsZXNzIFVJOiDQvdC1INGB0YLQuNC70LjQt9C+0LLQsNC90L3Ri9C1LCDQtNC+0YHRgtGD0L/QvdGL0LUg0LrQvtC80L/QvtC90LXQvdGC0Ysg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LPQviDQuNC90YLQtdGA0YTQtdC50YHQsCcsXG4gICAgZGF0ZTogJzIwMjAtMTAtMDZUMTg6MzA6MDAuMDAwWicsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS9oZWFkbGVzcy11aS11bnN0eWxlZC1hY2Nlc3NpYmxlLXVpLWNvbXBvbmVudHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ9CR0LXQt9Cz0L7Qu9C+0LLRi9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC5INC40L3RgtC10YDRhNC10LnRgSAtINGN0YLQviDQvdCw0LHQvtGAINC/0L7Qu9C90L7RgdGC0YzRjiDQvdC1INGB0YLQuNC70LjQt9C+0LLQsNC90L3Ri9GFLCDQv9C+0LvQvdC+0YHRgtGM0Y4g0LTQvtGB0YLRg9C/0L3Ri9GFINC60L7QvNC/0L7QvdC10L3RgtC+0LIg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC+0LPQviDQuNC90YLQtdGA0YTQtdC50YHQsCDQtNC70Y8gUmVhY3QsIFZ1ZSDQuCBBbHBpbmUuanMsINC60L7RgtC+0YDRi9C1INC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQu9C10LPQutC+INGB0L7Qt9C00LDQstCw0YLRjCDQv9C+0LvQvdC+0YHRgtGM0Y4g0LTQvtGB0YLRg9C/0L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC60L7QvNC/0L7QvdC10L3RgtGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0LjQvdGC0LXRgNGE0LXQudGB0LAsINC90LUg0LbQtdGA0YLQstGD0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjNGOINGB0YLQuNC70LjQt9C+0LLQsNGC0Ywg0LjRhSDRgSDQvdGD0LvRjyDRgSDQv9C+0LzQvtGJ0YzRjiDQv9GA0L7RgdGC0YvRhSDRgdC70YPQttC10LHQvdGL0YUg0LrQu9Cw0YHRgdC+0LIuJyxcbiAgfSxcbl1cblxuY29uc3QgZm9ybWF0RGF0ZSA9IHRpbnl0aW1lKCd7TU19IHtERH0sIHtZWVlZfScpLnJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NzTGFuZGluZ1BhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgeGw6cHgtOCBwdC0xMCBwYi0xNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGxlYWRpbmctbm9uZSBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXRpZ2h0IG1iLTRcIj5cbiAgICAgICAg0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyDRgSBUYWlsd2luZCBDU1NcbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0cmFja2luZy10aWdodCBtYi0xMFwiPlxuICAgICAgICDQmNC30YPRh9C40YLQtSBUYWlsd2luZCDRgdC/0L7RgdC+0LHQvtC8LCDQutC+0YLQvtGA0YvQuSDQu9GD0YfRiNC1INCy0YHQtdCz0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LLQsNGI0LXQvNGDINGB0YLQuNC70Y4g0L7QsdGD0YfQtdC90LjRjy5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiB4bDpnYXAtOFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMudmlvbGV0WzBdfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1heC13LXNtIHNtOmZsZXgtbm9uZSBtZDp3LWF1dG8gbWQ6ZmxleC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcmVsYXRpdmUgei0xMCBwLTYgeGw6cC04XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yIHRleHQtc2hhZG93XCI+0KfRgtC10L3QuNC1INC00L7QutGD0LzQtdC90YLQsNGG0LjQuDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC12aW9sZXQtMTAwIHRleHQtc2hhZG93IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgINCj0LfQvdCw0LnRgtC1LCDQutCw0Log0L3QsNGB0YLRgNC+0LjRgtGMIFRhaWx3aW5kINCyINGB0LLQvtC10Lwg0L/RgNC+0LXQutGC0LUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9pbnN0YWxsYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctdmlvbGV0LTgwMCBiZy1vcGFjaXR5LTUwIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQteGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINC+0LHRg9GH0LXQvdC40LVcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfSByZWxhdGl2ZSBtZDpwbC02IHhsOnBsLTggaGlkZGVuIHNtOmJsb2NrYH0+XG4gICAgICAgICAgICAgICAgPEd1aWRlc0ltYWdlIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC02IGxlZnQtNiBtZDpzdGF0aWMgb3ZlcmZsb3ctdmlzaWJsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjAgaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiKDEzNSwgOTQsIDI0NSksIHJnYmEoMTM1LCA5NCwgMjQ1LCAwKSknLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMucGlua1swXX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTptYXgtdy1zbSBzbTpmbGV4LW5vbmUgbWQ6dy1hdXRvIG1kOmZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHotMTAgcC02IHhsOnAtOFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiB0ZXh0LXNoYWRvd1wiPtCf0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0LIg0LHRgNCw0YPQt9C10YDQtTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1yb3NlLTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICDQn9C+0YHRgtGA0L7QudGC0LUg0YfRgtC+LdC90LjQsdGD0LTRjCDRgSBUYWlsd2luZCDQvdCwINC90LDRiNC10Lkg0LjQs9GA0L7QstC+0Lkg0L/Qu9C+0YnQsNC00LrQtS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3BsYXkudGFpbHdpbmRjc3MuY29tL1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC1hdXRvIGJnLXJvc2UtOTAwIGJnLW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstC+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX0gcmVsYXRpdmUgbWQ6cGwtNiB4bDpwbC04IGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxQbGF5SW1hZ2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgbGVmdC02IG1kOnN0YXRpYyBvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBiZy1ncmFkaWVudC10by10IGZyb20tcm9zZS01MDAgaGlkZGVuIHNtOmJsb2NrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmUgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0zeGwgZmxleCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggbWQ6ZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHMuYW1iZXJbMF19YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc20gc206ZmxleC1ub25lIG1kOnctYXV0byBtZDpmbGV4LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCByZWxhdGl2ZSB6LTEwIHAtNiB4bDpwLThcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1zaGFkb3dcIj7QodC80L7RgtGA0LXRgtGMINGB0LrRgNC40L3QutCw0YHRgtGLPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWFtYmVyLTEwMCB0ZXh0LXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICDQo9C30L3QsNC50YLQtSDQsdC+0LvRjNGI0LUg0L4gVGFpbHdpbmQg0L/RgNGP0LzQviDQvtGCINC60L7QvNCw0L3QtNGLINC90LAg0L3QsNGI0LXQvCDQutCw0L3QsNC70LUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS90YWlsd2luZGxhYnNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctYW1iZXItOTAwIGJnLW9wYWNpdHktNTAgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcm91bmRlZC14bCBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0Ywg0L/RgNC+0YHQvNC+0YLRgFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1hZ2V9IHJlbGF0aXZlIGhpZGRlbiBzbTpibG9ja2B9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGJvdHRvbS0zIHhsOmJvdHRvbS01XCI+XG4gICAgICAgICAgICAgICAgICA8U2NyZWVuY2FzdHNJbWFnZSBjbGFzc05hbWU9XCJvdmVyZmxvdy12aXNpYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0yMCBiZy1ncmFkaWVudC10by10IGZyb20tb3JhbmdlLTUwMCBoaWRkZW4gc206YmxvY2tcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTMgZmxleCBmbGV4LXdyYXAgbWQ6ZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyIGJnLWdyYXktODAwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBweS02IG1kOnB5LTQgcHgtNiBtZDpwci01IHNwYWNlLXktNCBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC04XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZsZXgtbm9uZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRhaWx3aW5kIFVJPC9zcGFuPlxuICAgICAgICAgICAgPFR1aUxvZ28gY2xhc3NOYW1lPVwidy00MCBoLWF1dG9cIiAvPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC1hdXRvIHRleHQtd2hpdGUgdGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgPFdpZG9udD7QmtGA0LDRgdC40LLRi9C1INC60L7QvNC/0L7QvdC10L3RgtGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0LjQvdGC0LXRgNGE0LXQudGB0LAsINC+0YIg0YHQvtC30LTQsNGC0LXQu9C10LkgVGFpbHdpbmQgQ1NTLjwvV2lkb250PlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vY29tcG9uZW50c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LW5vbmUgYmctd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHB5LTMgcHgtNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg0J7QsdC30L7RgCDQutC+0LzQv9C+0L3QtdC90YLQvtCyXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAg0KfRgtC+INC90L7QstC+0LPQviDQsiBUYWlsd2luZFxuICAgICAgICA8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAtNCBzbTpnYXAtNiB4bDpnYXAtOCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7d2hhdHNOZXcubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC14bCByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBzaGFkb3ctc20gdy1mdWxsIHB0LTggcGItNiBweC02XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5pbWFnZSAmJiA8aXRlbS5pbWFnZSBjbGFzc05hbWU9XCJoLWF1dG8gbWF4LXctZnVsbCBteC1hdXRvIG1iLTNcIiAvPn1cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAge2l0ZW0udmVyc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgYmctZnVjaHNpYS0xMDAgdGV4dC1mdWNoc2lhLTYwMCByb3VuZGVkLWZ1bGwgdGV4dC14cyBweS0wLjUgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTE2IG1iLThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPtCf0L7RgdC70LXQtNC90LjQtSDQvtCx0L3QvtCy0LvQtdC90LjRjzwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb21cIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjCDQstGB0LUg0L/QvtGB0LvQtdC00L3QuNC1INC+0LHQvdC+0LLQu9C10L3QuNGPXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcm91bmRlZC0zeGwgcC0yIHNtOnAtNSB4bDpwLTZcIj5cbiAgICAgICAgICB7bGF0ZXN0VXBkYXRlcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy04IHhsOmdyaWQtY29scy05IGl0ZW1zLXN0YXJ0IHJlbGF0aXZlIHJvdW5kZWQteGwgcC0zIHNtOnAtNSB4bDpwLTYgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOmJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIG1kOmNvbC1zdGFydC0zIG1kOmNvbC1zcGFuLTYgeGw6Y29sLXN0YXJ0LTMgeGw6Y29sLXNwYW4tNyBtYi0xIG1sLTkgbWQ6bWwtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMSBtZDpjb2wtc3Bhbi0yIHJvdy1zdGFydC0xIG1kOnJvdy1lbmQtMyBmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSBtYi0xIG1kOm1iLTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd3LTMgaC0zIG1yLTYgb3ZlcmZsb3ctdmlzaWJsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktMzAwJzogaSAhPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWN5YW4tNDAwJzogaSA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7aSA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIxMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSA2IC02IFYgLTMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aSAhPT0gbGF0ZXN0VXBkYXRlcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDYgMTggViA1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUobmV3IERhdGUoaXRlbS5kYXRlKSl9XG4gICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMyBtZDpjb2wtc3Bhbi02IHhsOmNvbC1zcGFuLTcgbWwtOSBtZDptbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtdC0xNiBtYi04XCI+XG4gICAgICAgICAgR2V0IGludm9sdmVkXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxDb21tdW5pdHkgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Eb2NzTGFuZGluZ1BhZ2UubGF5b3V0UHJvcHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0aXRsZTogJ0RvY3VtZW50YXRpb24nLFxuICB9LFxuICBMYXlvdXQ6IERvY3VtZW50YXRpb25MYXlvdXQsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9