webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/Footer.js":
/*!***************************************!*\
  !*** ./src/components/home/Footer.js ***!
  \***************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navs_documentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/navs/documentation */ "./src/navs/documentation.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.css */ "./src/components/home/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Logo */ "./src/components/Logo.js");
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\home\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var footerNav = {
  'Начало работы': {
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Начало работы']
  },
  'Основные концепции': {
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Основные концепции']
  },
  'Настройка': {
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Настройка']
  },
  'Сообщество': {
    items: [{
      title: 'GitHub',
      href: 'https://github.com/tailwindlabs/tailwindcss'
    }, {
      title: 'Discord',
      href: '/discord'
    }, {
      title: 'Twitter',
      href: 'https://twitter.com/tailwindcss'
    }, {
      title: 'YouTube',
      href: 'https://www.youtube.com/tailwindlabs'
    }]
  }
};
function Footer() {
  var _this = this;

  return __jsx("footer", {
    className: "bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "".concat(_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav, " text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, Object.keys(footerNav).map(function (section, i) {
    return __jsx("li", {
      key: section,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('space-y-5', footerNav[section].className),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "text-xs font-semibold tracking-wide text-gray-900 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, section), __jsx("ul", {
      className: "space-y-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, footerNav[section].items.map(function (item) {
      return __jsx("li", {
        key: item.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: item.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "hover:text-gray-900 transition-colors duration-200",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 23
        }
      }, item.title)));
    })));
  })), __jsx("div", {
    className: "pt-10 sm:pt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["Logo"], {
    width: "208",
    height: "26",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }))));
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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

/***/ }),

/***/ "./src/navs/documentation.js":
/*!***********************************!*\
  !*** ./src/navs/documentation.js ***!
  \***********************************/
/*! exports provided: documentationNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentationNav", function() { return documentationNav; });
/* harmony import */ var _utils_createPageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/createPageList */ "./src/utils/createPageList.js");

var pages = Object(_utils_createPageList__WEBPACK_IMPORTED_MODULE_0__["createPageList"])(__webpack_require__("./src/pages/docs sync \\.mdx$"), 'docs');
var documentationNav = {
  'Начало работы': [pages['installation'], {
    title: 'Release Notes',
    href: 'https://blog.tailwindcss.com/tailwindcss-v2'
  }, pages['upgrading-to-v2'], pages['using-with-preprocessors'], pages['optimizing-for-production'], pages['browser-support'], pages['intellisense']],
  'Основные концепции': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
  'Настройка': [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
  'Base Styles': [pages['preflight']],
  Layout: [pages['container'], pages['box-sizing'], pages['display'], pages['float'], pages['clear'], pages['object-fit'], pages['object-position'], pages['overflow'], pages['overscroll-behavior'], pages['position'], pages['top-right-bottom-left'], pages['visibility'], pages['z-index']],
  Flexbox: [pages['flex-direction'], pages['flex-wrap'], pages['flex'], pages['flex-grow'], pages['flex-shrink'], pages['order']],
  Grid: [pages['grid-template-columns'], pages['grid-column'], pages['grid-template-rows'], pages['grid-row'], pages['grid-auto-flow'], pages['grid-auto-columns'], pages['grid-auto-rows'], pages['gap']],
  'Box Alignment': [pages['justify-content'], pages['justify-items'], pages['justify-self'], pages['align-content'], pages['align-items'], pages['align-self'], pages['place-content'], pages['place-items'], pages['place-self']],
  Spacing: [pages['padding'], pages['margin'], pages['space']],
  Sizing: [pages['width'], pages['min-width'], pages['max-width'], pages['height'], pages['min-height'], pages['max-height']],
  Typography: [pages['font-family'], pages['font-size'], pages['font-smoothing'], pages['font-style'], pages['font-weight'], pages['font-variant-numeric'], pages['letter-spacing'], pages['line-height'], pages['list-style-type'], pages['list-style-position'], pages['placeholder-color'], pages['placeholder-opacity'], pages['text-align'], pages['text-color'], pages['text-opacity'], pages['text-decoration'], pages['text-transform'], pages['text-overflow'], pages['vertical-align'], pages['whitespace'], pages['word-break']],
  Backgrounds: [pages['background-attachment'], pages['background-clip'], pages['background-color'], pages['background-opacity'], pages['background-position'], pages['background-repeat'], pages['background-size'], pages['background-image'], pages['gradient-color-stops']],
  Borders: [pages['border-radius'], pages['border-width'], pages['border-color'], pages['border-opacity'], pages['border-style'], pages['divide-width'], pages['divide-color'], pages['divide-opacity'], pages['divide-style'], pages['ring-width'], pages['ring-color'], pages['ring-opacity'], pages['ring-offset-width'], pages['ring-offset-color']],
  Effects: [pages['box-shadow'], pages['opacity']],
  Tables: [pages['border-collapse'], pages['table-layout']],
  'Transitions and Animation': [pages['transition-property'], pages['transition-duration'], pages['transition-timing-function'], pages['transition-delay'], pages['animation']],
  Transforms: [pages['transform'], pages['transform-origin'], pages['scale'], pages['rotate'], pages['translate'], pages['skew']],
  Interactivity: [pages['appearance'], pages['cursor'], pages['outline'], pages['pointer-events'], pages['resize'], pages['user-select']],
  SVG: [pages['fill'], pages['stroke'], pages['stroke-width']],
  Accessibility: [pages['screen-readers']],
  'Official Plugins': [pages['typography-plugin']]
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9uYXZzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwidGl0bGUiLCJocmVmIiwiRm9vdGVyIiwic3R5bGVzIiwibmF2IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNlY3Rpb24iLCJpIiwiY2xzeCIsIml0ZW0iLCJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsIkxheW91dCIsIkZsZXhib3giLCJHcmlkIiwiU3BhY2luZyIsIlNpemluZyIsIlR5cG9ncmFwaHkiLCJCYWNrZ3JvdW5kcyIsIkJvcmRlcnMiLCJFZmZlY3RzIiwiVGFibGVzIiwiVHJhbnNmb3JtcyIsIkludGVyYWN0aXZpdHkiLCJTVkciLCJBY2Nlc3NpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCLG1CQUFpQjtBQUNmQyxhQUFTLEVBQUUsWUFESTtBQUVmQyxTQUFLLEVBQUVDLG9FQUFnQixDQUFDLGVBQUQ7QUFGUixHQUREO0FBS2hCLHdCQUFzQjtBQUNwQkYsYUFBUyxFQUFFLFlBRFM7QUFFcEJDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsb0JBQUQ7QUFGSCxHQUxOO0FBU2hCLGVBQWE7QUFDWEYsYUFBUyxFQUFFLFlBREE7QUFFWEMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxXQUFEO0FBRlosR0FURztBQWFoQixnQkFBYztBQUNaRCxTQUFLLEVBQUUsQ0FDTDtBQUFFRSxXQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBSSxFQUFFO0FBQXpCLEtBREssRUFFTDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsVUFBSSxFQUFFO0FB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QUhRLEVBSWJBLEtBQUssQ0FBQyxnQkFBRCxDQUpRLEVBS2JBLEtBQUssQ0FBQyxRQUFELENBTFEsRUFNYkEsS0FBSyxDQUFDLGFBQUQsQ0FOUSxDQTFKZTtBQWtLOUJlLEtBQUcsRUFBRSxDQUFDZixLQUFLLENBQUMsTUFBRCxDQUFOLEVBQWdCQSxLQUFLLENBQUMsUUFBRCxDQUFyQixFQUFpQ0EsS0FBSyxDQUFDLGNBQUQsQ0FBdEMsQ0FsS3lCO0FBbUs5QmdCLGVBQWEsRUFBRSxDQUFDaEIsS0FBSyxDQUFDLGdCQUFELENBQU4sQ0FuS2U7QUFvSzlCLHNCQUFvQixDQUFDQSxLQUFLLENBQUMsbUJBQUQsQ0FBTjtBQXBLVSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MmY5YTliNDQxYjQyZTc3YjBjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZG9jdW1lbnRhdGlvbk5hdiB9IGZyb20gJ0AvbmF2cy9kb2N1bWVudGF0aW9uJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IExvZ28gfSBmcm9tICdAL2NvbXBvbmVudHMvTG9nbydcblxuY29uc3QgZm9vdGVyTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyddLFxuICB9LFxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiB7XG4gICAgY2xhc3NOYW1lOiAncm93LXNwYW4tMicsXG4gICAgaXRlbXM6IGRvY3VtZW50YXRpb25OYXZbJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4J10sXG4gIH0sXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiB7XG4gICAgY2xhc3NOYW1lOiAncm93LXNwYW4tMicsXG4gICAgaXRlbXM6IGRvY3VtZW50YXRpb25OYXZbJ9Cd0LDRgdGC0YDQvtC50LrQsCddLFxuICB9LFxuICAn0KHQvtC+0LHRidC10YHRgtCy0L4nOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6ICdHaXRIdWInLCBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdEaXNjb3JkJywgaHJlZjogJy9kaXNjb3JkJyB9LFxuICAgICAgeyB0aXRsZTogJ1R3aXR0ZXInLCBocmVmOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdZb3VUdWJlJywgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFicycgfSxcbiAgICBdLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBwdC0xNiBwYi0xMiBzbTpwdC0yMCBtZDpwdC0yNCB4bDpwdC0zMiBzbTpwYi0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHB4LTQgc206cHgtNiBtZDpweC04XCI+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdn0gdGV4dC1zbSBmb250LW1lZGl1bSBwYi0xNCBzbTpwYi0yMCBncmlkIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC15LTEwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhmb290ZXJOYXYpLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2VjdGlvbn0gY2xhc3NOYW1lPXtjbHN4KCdzcGFjZS15LTUnLCBmb290ZXJOYXZbc2VjdGlvbl0uY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9ufVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge2Zvb3Rlck5hdltzZWN0aW9uXS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgc206cHQtMTJcIj5cbiAgICAgICAgICA8TG9nbyB3aWR0aD1cIjIwOFwiIGhlaWdodD1cIjI2XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xuXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcbiAgJ2RvY3MnXG4pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcbiAgICBwYWdlc1snaW5zdGFsbGF0aW9uJ10sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHBhZ2VzWyd1cGdyYWRpbmctdG8tdjInXSxcbiAgICBwYWdlc1sndXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJ10sXG4gICAgcGFnZXNbJ29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nXSxcbiAgICBwYWdlc1snYnJvd3Nlci1zdXBwb3J0J10sXG4gICAgcGFnZXNbJ2ludGVsbGlzZW5zZSddLFxuICBdLFxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiBbXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcbiAgICBwYWdlc1snaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyddLFxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXG4gICAgcGFnZXNbJ2V4dHJhY3RpbmctY29tcG9uZW50cyddLFxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcbiAgXSxcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IFtcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0aGVtZSddLFxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcbiAgXSxcbiAgJ0Jhc2UgU3R5bGVzJzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXG4gIExheW91dDogW1xuICAgIHBhZ2VzWydjb250YWluZXInXSxcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxuICAgIHBhZ2VzWydkaXNwbGF5J10sXG4gICAgcGFnZXNbJ2Zsb2F0J10sXG4gICAgcGFnZXNbJ2NsZWFyJ10sXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcbiAgICBwYWdlc1snei1pbmRleCddLFxuICBdLFxuICBGbGV4Ym94OiBbXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxuICAgIHBhZ2VzWydmbGV4J10sXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxuICAgIHBhZ2VzWydvcmRlciddLFxuICBdLFxuICBHcmlkOiBbXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcbiAgICBwYWdlc1snZ2FwJ10sXG4gIF0sXG4gICdCb3ggQWxpZ25tZW50JzogW1xuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxuICBdLFxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXG4gIFNpemluZzogW1xuICAgIHBhZ2VzWyd3aWR0aCddLFxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXG4gICAgcGFnZXNbJ2hlaWdodCddLFxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcbiAgXSxcbiAgVHlwb2dyYXBoeTogW1xuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXG4gIF0sXG4gIEJhY2tncm91bmRzOiBbXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxuICBdLFxuICBCb3JkZXJzOiBbXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxuICBdLFxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxuICBdLFxuICBUcmFuc2Zvcm1zOiBbXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXG4gICAgcGFnZXNbJ3NjYWxlJ10sXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcbiAgICBwYWdlc1snc2tldyddLFxuICBdLFxuICBJbnRlcmFjdGl2aXR5OiBbXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcbiAgICBwYWdlc1snY3Vyc29yJ10sXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcbiAgICBwYWdlc1sncmVzaXplJ10sXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXG4gIF0sXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==