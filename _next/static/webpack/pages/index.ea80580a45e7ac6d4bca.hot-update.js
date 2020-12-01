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
  Customization: {
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Customization']
  },
  Community: {
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
  Customization: [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9uYXZzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwiQ3VzdG9taXphdGlvbiIsIkNvbW11bml0eSIsInRpdGxlIiwiaHJlZiIsIkZvb3RlciIsInN0eWxlcyIsIm5hdiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzZWN0aW9uIiwiaSIsImNsc3giLCJpdGVtIiwicGFnZXMiLCJjcmVhdGVQYWdlTGlzdCIsInJlcXVpcmUiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQixtQkFBaUI7QUFDZkMsYUFBUyxFQUFFLFlBREk7QUFFZkMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxlQUFEO0FBRlIsR0FERDtBQUtoQix3QkFBc0I7QUFDcEJGLGFBQVMsRUFBRSxZQURTO0FBRXBCQyxTQUFLLEVBQUVDLG9FQUFnQixDQUFDLG9CQUFEO0FBRkgsR0FMTjtBQVNoQkMsZUFBYSxFQUFFO0FBQ2JILGFBQVMsRUFBRSxZQURFO0FBRWJDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsZUFBRDtBQUZWLEdBVEM7QUFhaEJFLFdBQVMsRUFBRTtBQUNUSCxTQUFLLEVBQUUsQ0FDTDtBQUFFSSxXQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBSSxFQUFFO0FBQXpCLEtBREssRUFFTDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBRkssRUFHTDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBSEssRUFJTDtBQUFFRCxXQUFLLEVBQUUsU0FBVDtBQUFvQkMsVUFBSSxFQUFFO0FBQTFCLEtBSks7QUFERTtBQWJLLENBQWxCO0FBdUJPLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsU0FDRTtBQUFRLGFBQVMsRUFBQyw0REFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsWUFBS0MseURBQU0sQ0FBQ0MsR0FBWixtR0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZWixTQUFaLEVBQXVCYSxHQUF2QixDQUEyQixVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUMxQjtBQUFJLFNBQUcsRUFBRUQsT0FBVDtBQUFrQixlQUFTLEVBQUVFLG9EQUFJLENBQUMsV0FBRCxFQUFjaEIsU0FBUyxDQUFDYyxPQUFELENBQVQsQ0FBbUJiLFNBQWpDLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyw2REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dhLE9BREgsQ0FERixFQUlFO0FBQUksZUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHZCxTQUFTLENBQUNjLE9BQUQsQ0FBVCxDQUFtQlosS0FBbkIsQ0FBeUJXLEdBQXpCLENBQTZCLFVBQUNJLElBQUQ7QUFBQSxhQUM1QjtBQUFJLFdBQUcsRUFBRUEsSUFBSSxDQUFDVixJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFVSxJQUFJLENBQUNWLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsb0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVSxJQUFJLENBQUNYLEtBRFIsQ0FERixDQURGLENBRDRCO0FBQUEsS0FBN0IsQ0FESCxDQUpGLENBRDBCO0FBQUEsR0FBM0IsQ0FISCxDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLEtBQVo7QUFBa0IsVUFBTSxFQUFDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZCRixDQURGLENBREY7QUErQkQ7S0FoQ2VFLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmhCO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTVUsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTWpCLGdCQUFnQixHQUFHO0FBQzlCLG1CQUFpQixDQUNmZSxLQUFLLENBQUMsY0FBRCxDQURVLEVBRWY7QUFDRVosU0FBSyxFQUFFLGVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FGZSxFQU1mVyxLQUFLLENBQUMsaUJBQUQsQ0FOVSxFQU9mQSxLQUFLLENBQUMsMEJBQUQsQ0FQVSxFQVFmQSxLQUFLLENBQUMsMkJBQUQsQ0FSVSxFQVNmQSxLQUFLLENBQUMsaUJBQUQsQ0FUVSxFQVVmQSxLQUFLLENBQUMsY0FBRCxDQVZVLENBRGE7QUFhOUIsd0JBQXNCLENBQ3BCQSxLQUFLLENBQUMsZUFBRCxDQURlLEVBRXBCQSxLQUFLLENBQUMsbUJBQUQsQ0FGZSxFQUdwQkEsS0FBSyxDQUFDLDhCQUFELENBSGUsRUFJcEJBLEtBQUssQ0FBQyxXQUFELENBSmUsRUFLcEJBLEtBQUssQ0FBQyxvQkFBRCxDQUxlLEVBTXBCQSxLQUFLLENBQUMsdUJBQUQsQ0FOZSxFQU9wQkEsS0FBSyxDQUFDLHNCQUFELENBUGUsRUFRcEJBLEtBQUssQ0FBQywwQkFBRCxDQVJlLENBYlE7QUF1QjlCZCxlQUFhLEVBQUUsQ0FDYmMsS0FBSyxDQUFDLGVBQUQsQ0FEUSxFQUViQSxLQUFLLENBQUMsT0FBRCxDQUZRLEVBR2JBLEtBQUssQ0FBQyxhQUFELENBSFEsRUFJYkEsS0FBSyxDQUFDLG9CQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLHFCQUFELENBTFEsRUFNYkEsS0FBSyxDQUFDLHNCQUFELENBTlEsRUFPYkEsS0FBSyxDQUFDLFNBQUQsQ0FQUSxFQVFiQSxLQUFLLENBQUMsU0FBRCxDQVJRLENBdkJlO0FBaUM5QixpQkFBZSxDQUFDQSxLQUFLLENBQUMsV0FBRCxDQUFOLENBakNlO0FBa0M5QkcsUUFBTSxFQUFFLENBQ05ILEtBQUssQ0FBQyxXQUFELENBREMsRUFFTkEsS0FBSyxDQUFDLFlBQUQsQ0FGQyxFQUdOQSxLQUFLLENBQUMsU0FBRCxDQUhDLEVBSU5BLEtBQUssQ0FBQyxPQUFELENBSkMsRUFLTkEsS0FBSyxDQUFDLE9BQUQsQ0FMQyxFQU1OQSxLQUFLLENBQUMsWUFBRCxDQU5DLEVBT05BLEtBQUssQ0FBQyxpQkFBRCxDQVBDLEVBUU5BLEtBQUssQ0FBQyxVQUFELENBUkMsRUFTTkEsS0FBSyxDQUFDLHFCQUFELENBVEMsRUFVTkEsS0FBSyxDQUFDLFVBQUQsQ0FWQyxFQVdOQSxLQUFLLENBQUMsdUJBQUQsQ0FYQyxFQVlOQSxLQUFLLENBQUMsWUFBRCxDQVpDLEVBYU5BLEtBQUssQ0FBQyxTQUFELENBYkMsQ0FsQ3NCO0FBaUQ5QkksU0FBTyxFQUFFLENBQ1BKLEtBQUssQ0FBQyxnQkFBRCxDQURFLEVBRVBBLEtBQUssQ0FBQyxXQUFELENBRkUsRUFHUEEsS0FBSyxDQUFDLE1BQUQsQ0FIRSxFQUlQQSxLQUFLLENBQUMsV0FBRCxDQUpFLEVBS1BBLEtBQUssQ0FBQyxhQUFELENBTEUsRUFNUEEsS0FBSyxDQUFDLE9BQUQsQ0FORSxDQWpEcUI7QUF5RDlCSyxNQUFJLEVBQUUsQ0FDSkwsS0FBSyxDQUFDLHVCQUFELENBREQsRUFFSkEsS0FBSyxDQUFDLGFBQUQsQ0FGRCxFQUdKQSxLQUFLLENBQUMsb0JBQUQsQ0FIRCxFQUlKQSxLQUFLLENBQUMsVUFBRCxDQUpELEVBS0pBLEtBQUssQ0FBQyxnQkFBRCxDQUxELEVBTUpBLEtBQUssQ0FBQyxtQkFBRCxDQU5ELEVBT0pBLEtBQUssQ0FBQyxnQkFBRCxDQVBELEVBUUpBLEtBQUssQ0FBQyxLQUFELENBUkQsQ0F6RHdCO0FBbUU5QixtQkFBaUIsQ0FDZkEsS0FBSyxDQUFDLGlCQUFELENBRFUsRUFFZkEsS0FBSyxDQUFDLGVBQUQsQ0FGVSxFQUdmQSxLQUFLLENBQUMsY0FBRCxDQUhVLEVBSWZBLEtBQUssQ0FBQyxlQUFELENBSlUsRUFLZkEsS0FBSyxDQUFDLGFBQUQsQ0FMVSxFQU1mQSxLQUFLLENBQUMsWUFBRCxDQU5VLEVBT2ZBLEtBQUssQ0FBQyxlQUFELENBUFUsRUFRZkEsS0FBSyxDQUFDLGFBQUQsQ0FSVSxFQVNmQSxLQUFLLENBQUMsWUFBRCxDQVRVLENBbkVhO0FBOEU5Qk0sU0FBTyxFQUFFLENBQUNOLEtBQUssQ0FBQyxTQUFELENBQU4sRUFBbUJBLEtBQUssQ0FBQyxRQUFELENBQXhCLEVBQW9DQSxLQUFLLENBQUMsT0FBRCxDQUF6QyxDQTlFcUI7QUErRTlCTyxRQUFNLEVBQUUsQ0FDTlAsS0FBSyxDQUFDLE9BQUQsQ0FEQyxFQUVOQSxLQUFLLENBQUMsV0FBRCxDQUZDLEVBR05BLEtBQUssQ0FBQyxXQUFELENBSEMsRUFJTkEsS0FBSyxDQUFDLFFBQUQsQ0FKQyxFQUtOQSxLQUFLLENBQUMsWUFBRCxDQUxDLEVBTU5BLEtBQUssQ0FBQyxZQUFELENBTkMsQ0EvRXNCO0FBdUY5QlEsWUFBVSxFQUFFLENBQ1ZSLEtBQUssQ0FBQyxhQUFELENBREssRUFFVkEsS0FBSyxDQUFDLFdBQUQsQ0FGSyxFQUdWQSxLQUFLLENBQUMsZ0JBQUQsQ0FISyxFQUlWQSxLQUFLLENBQUMsWUFBRCxDQUpLLEVBS1ZBLEtBQUssQ0FBQyxhQUFELENBTEssRUFNVkEsS0FBSyxDQUFDLHNCQUFELENBTkssRUFPVkEsS0FBSyxDQUFDLGdCQUFELENBUEssRUFRVkEsS0FBSyxDQUFDLGFBQUQsQ0FSSyxFQVNWQSxLQUFLLENBQUMsaUJBQUQsQ0FUSyxFQVVWQSxLQUFLLENBQUMscUJBQUQsQ0FWSyxFQVdWQSxLQUFLLENBQUMsbUJBQUQsQ0FYSyxFQVlWQSxLQUFLLENBQUMscUJBQUQsQ0FaSyxFQWFWQSxLQUFLLENBQUMsWUFBRCxDQWJLLEVBY1ZBLEtBQUssQ0FBQyxZQUFELENBZEssRUFlVkEsS0FBSyxDQUFDLGNBQUQsQ0FmSyxFQWdCVkEsS0FBSyxDQUFDLGlCQUFELENBaEJLLEVBaUJWQSxLQUFLLENBQUMsZ0JBQUQsQ0FqQkssRUFrQlZBLEtBQUssQ0FBQyxlQUFELENBbEJLLEVBbUJWQSxLQUFLLENBQUMsZ0JBQUQsQ0FuQkssRUFvQlZBLEtBQUssQ0FBQyxZQUFELENBcEJLLEVBcUJWQSxLQUFLLENBQUMsWUFBRCxDQXJCSyxDQXZGa0I7QUE4RzlCUyxhQUFXLEVBQUUsQ0FDWFQsS0FBSyxDQUFDLHVCQUFELENBRE0sRUFFWEEsS0FBSyxDQUFDLGlCQUFELENBRk0sRUFHWEEsS0FBSyxDQUFDLGtCQUFELENBSE0sRUFJWEEsS0FBSyxDQUFDLG9CQUFELENBSk0sRUFLWEEsS0FBSyxDQUFDLHFCQUFELENBTE0sRUFNWEEsS0FBSyxDQUFDLG1CQUFELENBTk0sRUFPWEEsS0FBSyxDQUFDLGlCQUFELENBUE0sRUFRWEEsS0FBSyxDQUFDLGtCQUFELENBUk0sRUFTWEEsS0FBSyxDQUFDLHNCQUFELENBVE0sQ0E5R2lCO0FBeUg5QlUsU0FBTyxFQUFFLENBQ1BWLEtBQUssQ0FBQyxlQUFELENBREUsRUFFUEEsS0FBSyxDQUFDLGNBQUQsQ0FGRSxFQUdQQSxLQUFLLENBQUMsY0FBRCxDQUhFLEVBSVBBLEtBQUssQ0FBQyxnQkFBRCxDQUpFLEVBS1BBLEtBQUssQ0FBQyxjQUFELENBTEUsRUFNUEEsS0FBSyxDQUFDLGNBQUQsQ0FORSxFQU9QQSxLQUFLLENBQUMsY0FBRCxDQVBFLEVBUVBBLEtBQUssQ0FBQyxnQkFBRCxDQVJFLEVBU1BBLEtBQUssQ0FBQyxjQUFELENBVEUsRUFVUEEsS0FBSyxDQUFDLFlBQUQsQ0FWRSxFQVdQQSxLQUFLLENBQUMsWUFBRCxDQVhFLEVBWVBBLEtBQUssQ0FBQyxjQUFELENBWkUsRUFhUEEsS0FBSyxDQUFDLG1CQUFELENBYkUsRUFjUEEsS0FBSyxDQUFDLG1CQUFELENBZEUsQ0F6SHFCO0FBeUk5QlcsU0FBTyxFQUFFLENBQUNYLEtBQUssQ0FBQyxZQUFELENBQU4sRUFBc0JBLEtBQUssQ0FBQyxTQUFELENBQTNCLENBeklxQjtBQTBJOUJZLFFBQU0sRUFBRSxDQUFDWixLQUFLLENBQUMsaUJBQUQsQ0FBTixFQUEyQkEsS0FBSyxDQUFDLGNBQUQsQ0FBaEMsQ0ExSXNCO0FBMkk5QiwrQkFBNkIsQ0FDM0JBLEtBQUssQ0FBQyxxQkFBRCxDQURzQixFQUUzQkEsS0FBSyxDQUFDLHFCQUFELENBRnNCLEVBRzNCQSxLQUFLLENBQUMsNEJBQUQsQ0FIc0IsRUFJM0JBLEtBQUssQ0FBQyxrQkFBRCxDQUpzQixFQUszQkEsS0FBSyxDQUFDLFdBQUQsQ0FMc0IsQ0EzSUM7QUFrSjlCYSxZQUFVLEVBQUUsQ0FDVmIsS0FBSyxDQUFDLFdBQUQsQ0FESyxFQUVWQSxLQUFLLENBQUMsa0JBQUQsQ0FGSyxFQUdWQSxLQUFLLENBQUMsT0FBRCxDQUhLLEVBSVZBLEtBQUssQ0FBQyxRQUFELENBSkssRUFLVkEsS0FBSyxDQUFDLFdBQUQsQ0FMSyxFQU1WQSxLQUFLLENBQUMsTUFBRCxDQU5LLENBbEprQjtBQTBKOUJjLGVBQWEsRUFBRSxDQUNiZCxLQUFLLENBQUMsWUFBRCxDQURRLEVBRWJBLEtBQUssQ0FBQyxRQUFELENBRlEsRUFHYkEsS0FBSyxDQUFDLFNBQUQsQ0FIUSxFQUliQSxLQUFLLENBQUMsZ0JBQUQsQ0FKUSxFQUtiQSxLQUFLLENBQUMsUUFBRCxDQUxRLEVBTWJBLEtBQUssQ0FBQyxhQUFELENBTlEsQ0ExSmU7QUFrSzlCZSxLQUFHLEVBQUUsQ0FBQ2YsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBbEt5QjtBQW1LOUJnQixlQUFhLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBbktlO0FBb0s5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUFwS1UsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE4MDU4MGE0NWU3YWM2ZDRiY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGRvY3VtZW50YXRpb25OYXYgfSBmcm9tICdAL25hdnMvZG9jdW1lbnRhdGlvbidcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnQC9jb21wb25lbnRzL0xvZ28nXG5cbmNvbnN0IGZvb3Rlck5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiB7XG4gICAgY2xhc3NOYW1lOiAncm93LXNwYW4tMicsXG4gICAgaXRlbXM6IGRvY3VtZW50YXRpb25OYXZbJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnXSxcbiAgfSxcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4Jzoge1xuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCddLFxuICB9LFxuICBDdXN0b21pemF0aW9uOiB7XG4gICAgY2xhc3NOYW1lOiAncm93LXNwYW4tMicsXG4gICAgaXRlbXM6IGRvY3VtZW50YXRpb25OYXZbJ0N1c3RvbWl6YXRpb24nXSxcbiAgfSxcbiAgQ29tbXVuaXR5OiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6ICdHaXRIdWInLCBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdEaXNjb3JkJywgaHJlZjogJy9kaXNjb3JkJyB9LFxuICAgICAgeyB0aXRsZTogJ1R3aXR0ZXInLCBocmVmOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdZb3VUdWJlJywgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFicycgfSxcbiAgICBdLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBwdC0xNiBwYi0xMiBzbTpwdC0yMCBtZDpwdC0yNCB4bDpwdC0zMiBzbTpwYi0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHB4LTQgc206cHgtNiBtZDpweC04XCI+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdn0gdGV4dC1zbSBmb250LW1lZGl1bSBwYi0xNCBzbTpwYi0yMCBncmlkIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC15LTEwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhmb290ZXJOYXYpLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2VjdGlvbn0gY2xhc3NOYW1lPXtjbHN4KCdzcGFjZS15LTUnLCBmb290ZXJOYXZbc2VjdGlvbl0uY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9ufVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge2Zvb3Rlck5hdltzZWN0aW9uXS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgc206cHQtMTJcIj5cbiAgICAgICAgICA8TG9nbyB3aWR0aD1cIjIwOFwiIGhlaWdodD1cIjI2XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xuXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcbiAgJ2RvY3MnXG4pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcbiAgICBwYWdlc1snaW5zdGFsbGF0aW9uJ10sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHBhZ2VzWyd1cGdyYWRpbmctdG8tdjInXSxcbiAgICBwYWdlc1sndXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJ10sXG4gICAgcGFnZXNbJ29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nXSxcbiAgICBwYWdlc1snYnJvd3Nlci1zdXBwb3J0J10sXG4gICAgcGFnZXNbJ2ludGVsbGlzZW5zZSddLFxuICBdLFxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiBbXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcbiAgICBwYWdlc1snaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyddLFxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXG4gICAgcGFnZXNbJ2V4dHJhY3RpbmctY29tcG9uZW50cyddLFxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcbiAgXSxcbiAgQ3VzdG9taXphdGlvbjogW1xuICAgIHBhZ2VzWydjb25maWd1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RoZW1lJ10sXG4gICAgcGFnZXNbJ2JyZWFrcG9pbnRzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLWNvbG9ycyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2NvbmZpZ3VyaW5nLXZhcmlhbnRzJ10sXG4gICAgcGFnZXNbJ3BsdWdpbnMnXSxcbiAgICBwYWdlc1sncHJlc2V0cyddLFxuICBdLFxuICAnQmFzZSBTdHlsZXMnOiBbcGFnZXNbJ3ByZWZsaWdodCddXSxcbiAgTGF5b3V0OiBbXG4gICAgcGFnZXNbJ2NvbnRhaW5lciddLFxuICAgIHBhZ2VzWydib3gtc2l6aW5nJ10sXG4gICAgcGFnZXNbJ2Rpc3BsYXknXSxcbiAgICBwYWdlc1snZmxvYXQnXSxcbiAgICBwYWdlc1snY2xlYXInXSxcbiAgICBwYWdlc1snb2JqZWN0LWZpdCddLFxuICAgIHBhZ2VzWydvYmplY3QtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1snb3ZlcnNjcm9sbC1iZWhhdmlvciddLFxuICAgIHBhZ2VzWydwb3NpdGlvbiddLFxuICAgIHBhZ2VzWyd0b3AtcmlnaHQtYm90dG9tLWxlZnQnXSxcbiAgICBwYWdlc1sndmlzaWJpbGl0eSddLFxuICAgIHBhZ2VzWyd6LWluZGV4J10sXG4gIF0sXG4gIEZsZXhib3g6IFtcbiAgICBwYWdlc1snZmxleC1kaXJlY3Rpb24nXSxcbiAgICBwYWdlc1snZmxleC13cmFwJ10sXG4gICAgcGFnZXNbJ2ZsZXgnXSxcbiAgICBwYWdlc1snZmxleC1ncm93J10sXG4gICAgcGFnZXNbJ2ZsZXgtc2hyaW5rJ10sXG4gICAgcGFnZXNbJ29yZGVyJ10sXG4gIF0sXG4gIEdyaWQ6IFtcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtY29sdW1uJ10sXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtcm93cyddLFxuICAgIHBhZ2VzWydncmlkLXJvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tZmxvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tcm93cyddLFxuICAgIHBhZ2VzWydnYXAnXSxcbiAgXSxcbiAgJ0JveCBBbGlnbm1lbnQnOiBbXG4gICAgcGFnZXNbJ2p1c3RpZnktY29udGVudCddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2p1c3RpZnktc2VsZiddLFxuICAgIHBhZ2VzWydhbGlnbi1jb250ZW50J10sXG4gICAgcGFnZXNbJ2FsaWduLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2FsaWduLXNlbGYnXSxcbiAgICBwYWdlc1sncGxhY2UtY29udGVudCddLFxuICAgIHBhZ2VzWydwbGFjZS1pdGVtcyddLFxuICAgIHBhZ2VzWydwbGFjZS1zZWxmJ10sXG4gIF0sXG4gIFNwYWNpbmc6IFtwYWdlc1sncGFkZGluZyddLCBwYWdlc1snbWFyZ2luJ10sIHBhZ2VzWydzcGFjZSddXSxcbiAgU2l6aW5nOiBbXG4gICAgcGFnZXNbJ3dpZHRoJ10sXG4gICAgcGFnZXNbJ21pbi13aWR0aCddLFxuICAgIHBhZ2VzWydtYXgtd2lkdGgnXSxcbiAgICBwYWdlc1snaGVpZ2h0J10sXG4gICAgcGFnZXNbJ21pbi1oZWlnaHQnXSxcbiAgICBwYWdlc1snbWF4LWhlaWdodCddLFxuICBdLFxuICBUeXBvZ3JhcGh5OiBbXG4gICAgcGFnZXNbJ2ZvbnQtZmFtaWx5J10sXG4gICAgcGFnZXNbJ2ZvbnQtc2l6ZSddLFxuICAgIHBhZ2VzWydmb250LXNtb290aGluZyddLFxuICAgIHBhZ2VzWydmb250LXN0eWxlJ10sXG4gICAgcGFnZXNbJ2ZvbnQtd2VpZ2h0J10sXG4gICAgcGFnZXNbJ2ZvbnQtdmFyaWFudC1udW1lcmljJ10sXG4gICAgcGFnZXNbJ2xldHRlci1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2xpbmUtaGVpZ2h0J10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtdHlwZSddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1hbGlnbiddLFxuICAgIHBhZ2VzWyd0ZXh0LWNvbG9yJ10sXG4gICAgcGFnZXNbJ3RleHQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWRlY29yYXRpb24nXSxcbiAgICBwYWdlc1sndGV4dC10cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndGV4dC1vdmVyZmxvdyddLFxuICAgIHBhZ2VzWyd2ZXJ0aWNhbC1hbGlnbiddLFxuICAgIHBhZ2VzWyd3aGl0ZXNwYWNlJ10sXG4gICAgcGFnZXNbJ3dvcmQtYnJlYWsnXSxcbiAgXSxcbiAgQmFja2dyb3VuZHM6IFtcbiAgICBwYWdlc1snYmFja2dyb3VuZC1hdHRhY2htZW50J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY2xpcCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcmVwZWF0J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtc2l6ZSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWltYWdlJ10sXG4gICAgcGFnZXNbJ2dyYWRpZW50LWNvbG9yLXN0b3BzJ10sXG4gIF0sXG4gIEJvcmRlcnM6IFtcbiAgICBwYWdlc1snYm9yZGVyLXJhZGl1cyddLFxuICAgIHBhZ2VzWydib3JkZXItd2lkdGgnXSxcbiAgICBwYWdlc1snYm9yZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JvcmRlci1zdHlsZSddLFxuICAgIHBhZ2VzWydkaXZpZGUtd2lkdGgnXSxcbiAgICBwYWdlc1snZGl2aWRlLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2RpdmlkZS1zdHlsZSddLFxuICAgIHBhZ2VzWydyaW5nLXdpZHRoJ10sXG4gICAgcGFnZXNbJ3JpbmctY29sb3InXSxcbiAgICBwYWdlc1sncmluZy1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LXdpZHRoJ10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LWNvbG9yJ10sXG4gIF0sXG4gIEVmZmVjdHM6IFtwYWdlc1snYm94LXNoYWRvdyddLCBwYWdlc1snb3BhY2l0eSddXSxcbiAgVGFibGVzOiBbcGFnZXNbJ2JvcmRlci1jb2xsYXBzZSddLCBwYWdlc1sndGFibGUtbGF5b3V0J11dLFxuICAnVHJhbnNpdGlvbnMgYW5kIEFuaW1hdGlvbic6IFtcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1wcm9wZXJ0eSddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZGVsYXknXSxcbiAgICBwYWdlc1snYW5pbWF0aW9uJ10sXG4gIF0sXG4gIFRyYW5zZm9ybXM6IFtcbiAgICBwYWdlc1sndHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RyYW5zZm9ybS1vcmlnaW4nXSxcbiAgICBwYWdlc1snc2NhbGUnXSxcbiAgICBwYWdlc1sncm90YXRlJ10sXG4gICAgcGFnZXNbJ3RyYW5zbGF0ZSddLFxuICAgIHBhZ2VzWydza2V3J10sXG4gIF0sXG4gIEludGVyYWN0aXZpdHk6IFtcbiAgICBwYWdlc1snYXBwZWFyYW5jZSddLFxuICAgIHBhZ2VzWydjdXJzb3InXSxcbiAgICBwYWdlc1snb3V0bGluZSddLFxuICAgIHBhZ2VzWydwb2ludGVyLWV2ZW50cyddLFxuICAgIHBhZ2VzWydyZXNpemUnXSxcbiAgICBwYWdlc1sndXNlci1zZWxlY3QnXSxcbiAgXSxcbiAgU1ZHOiBbcGFnZXNbJ2ZpbGwnXSwgcGFnZXNbJ3N0cm9rZSddLCBwYWdlc1snc3Ryb2tlLXdpZHRoJ11dLFxuICBBY2Nlc3NpYmlsaXR5OiBbcGFnZXNbJ3NjcmVlbi1yZWFkZXJzJ11dLFxuICAnT2ZmaWNpYWwgUGx1Z2lucyc6IFtwYWdlc1sndHlwb2dyYXBoeS1wbHVnaW4nXV0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9