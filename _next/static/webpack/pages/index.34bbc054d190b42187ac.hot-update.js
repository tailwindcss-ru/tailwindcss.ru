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
  'Core concepts': {
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Core Concepts']
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
  'Core Concepts': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9uYXZzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwiQ3VzdG9taXphdGlvbiIsIkNvbW11bml0eSIsInRpdGxlIiwiaHJlZiIsIkZvb3RlciIsInN0eWxlcyIsIm5hdiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzZWN0aW9uIiwiaSIsImNsc3giLCJpdGVtIiwicGFnZXMiLCJjcmVhdGVQYWdlTGlzdCIsInJlcXVpcmUiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQixtQkFBaUI7QUFDZkMsYUFBUyxFQUFFLFlBREk7QUFFZkMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxlQUFEO0FBRlIsR0FERDtBQUtoQixtQkFBaUI7QUFDZkYsYUFBUyxFQUFFLFlBREk7QUFFZkMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxlQUFEO0FBRlIsR0FMRDtBQVNoQkMsZUFBYSxFQUFFO0FBQ2JILGFBQVMsRUFBRSxZQURFO0FBRWJDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsZUFBRDtBQUZWLEdBVEM7QUFhaEJFLFdBQVMsRUFBRTtBQUNUSCxTQUFLLEVBQUUsQ0FDTDtBQUFFSSxXQUFLLEVBQUUsUUFBVDtBQUFtQkMsVUFBSSxFQUFFO0FBQXpCLEtBREssRUFFTDtBQUFF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QUMsUUFBRCxDQUZRLEVBR2JBLEtBQUssQ0FBQyxTQUFELENBSFEsRUFJYkEsS0FBSyxDQUFDLGdCQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLFFBQUQsQ0FMUSxFQU1iQSxLQUFLLENBQUMsYUFBRCxDQU5RLENBMUplO0FBa0s5QmUsS0FBRyxFQUFFLENBQUNmLEtBQUssQ0FBQyxNQUFELENBQU4sRUFBZ0JBLEtBQUssQ0FBQyxRQUFELENBQXJCLEVBQWlDQSxLQUFLLENBQUMsY0FBRCxDQUF0QyxDQWxLeUI7QUFtSzlCZ0IsZUFBYSxFQUFFLENBQUNoQixLQUFLLENBQUMsZ0JBQUQsQ0FBTixDQW5LZTtBQW9LOUIsc0JBQW9CLENBQUNBLEtBQUssQ0FBQyxtQkFBRCxDQUFOO0FBcEtVLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0YmJjMDU0ZDE5MGI0MjE4N2FjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBkb2N1bWVudGF0aW9uTmF2IH0gZnJvbSAnQC9uYXZzL2RvY3VtZW50YXRpb24nXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJ1xuXG5jb25zdCBmb290ZXJOYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzoge1xuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJ10sXG4gIH0sXG4gICdDb3JlIGNvbmNlcHRzJzoge1xuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WydDb3JlIENvbmNlcHRzJ10sXG4gIH0sXG4gIEN1c3RvbWl6YXRpb246IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsnQ3VzdG9taXphdGlvbiddLFxuICB9LFxuICBDb21tdW5pdHk6IHtcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogJ0dpdEh1YicsIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzJyB9LFxuICAgICAgeyB0aXRsZTogJ0Rpc2NvcmQnLCBocmVmOiAnL2Rpc2NvcmQnIH0sXG4gICAgICB7IHRpdGxlOiAnVHdpdHRlcicsIGhyZWY6ICdodHRwczovL3R3aXR0ZXIuY29tL3RhaWx3aW5kY3NzJyB9LFxuICAgICAgeyB0aXRsZTogJ1lvdVR1YmUnLCBocmVmOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vdGFpbHdpbmRsYWJzJyB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHB0LTE2IHBiLTEyIHNtOnB0LTIwIG1kOnB0LTI0IHhsOnB0LTMyIHNtOnBiLTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHgtNCBzbTpweC02IG1kOnB4LThcIj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2fSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHBiLTE0IHNtOnBiLTIwIGdyaWQgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLXktMTBgfVxuICAgICAgICA+XG4gICAgICAgICAge09iamVjdC5rZXlzKGZvb3Rlck5hdikubWFwKChzZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzZWN0aW9ufSBjbGFzc05hbWU9e2Nsc3goJ3NwYWNlLXktNScsIGZvb3Rlck5hdltzZWN0aW9uXS5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIHRleHQtZ3JheS05MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAge3NlY3Rpb259XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2W3NlY3Rpb25dLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBzbTpwdC0xMlwiPlxuICAgICAgICAgIDxMb2dvIHdpZHRoPVwiMjA4XCIgaGVpZ2h0PVwiMjZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQYWdlTGlzdCB9IGZyb20gJ0AvdXRpbHMvY3JlYXRlUGFnZUxpc3QnXG5cbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXG4gIHJlcXVpcmUuY29udGV4dChgLi4vcGFnZXMvZG9jcy8/bWV0YT10aXRsZSxzaG9ydFRpdGxlLHB1Ymxpc2hlZGAsIGZhbHNlLCAvXFwubWR4JC8pLFxuICAnZG9jcydcbilcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xuICAgIHBhZ2VzWydpbnN0YWxsYXRpb24nXSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlbGVhc2UgTm90ZXMnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIH0sXG4gICAgcGFnZXNbJ3VwZ3JhZGluZy10by12MiddLFxuICAgIHBhZ2VzWyd1c2luZy13aXRoLXByZXByb2Nlc3NvcnMnXSxcbiAgICBwYWdlc1snb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbiddLFxuICAgIHBhZ2VzWydicm93c2VyLXN1cHBvcnQnXSxcbiAgICBwYWdlc1snaW50ZWxsaXNlbnNlJ10sXG4gIF0sXG4gICdDb3JlIENvbmNlcHRzJzogW1xuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXG4gIF0sXG4gIEN1c3RvbWl6YXRpb246IFtcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0aGVtZSddLFxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcbiAgXSxcbiAgJ0Jhc2UgU3R5bGVzJzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXG4gIExheW91dDogW1xuICAgIHBhZ2VzWydjb250YWluZXInXSxcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxuICAgIHBhZ2VzWydkaXNwbGF5J10sXG4gICAgcGFnZXNbJ2Zsb2F0J10sXG4gICAgcGFnZXNbJ2NsZWFyJ10sXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcbiAgICBwYWdlc1snei1pbmRleCddLFxuICBdLFxuICBGbGV4Ym94OiBbXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxuICAgIHBhZ2VzWydmbGV4J10sXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxuICAgIHBhZ2VzWydvcmRlciddLFxuICBdLFxuICBHcmlkOiBbXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcbiAgICBwYWdlc1snZ2FwJ10sXG4gIF0sXG4gICdCb3ggQWxpZ25tZW50JzogW1xuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxuICBdLFxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXG4gIFNpemluZzogW1xuICAgIHBhZ2VzWyd3aWR0aCddLFxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXG4gICAgcGFnZXNbJ2hlaWdodCddLFxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcbiAgXSxcbiAgVHlwb2dyYXBoeTogW1xuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXG4gIF0sXG4gIEJhY2tncm91bmRzOiBbXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxuICBdLFxuICBCb3JkZXJzOiBbXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxuICBdLFxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxuICBdLFxuICBUcmFuc2Zvcm1zOiBbXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXG4gICAgcGFnZXNbJ3NjYWxlJ10sXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcbiAgICBwYWdlc1snc2tldyddLFxuICBdLFxuICBJbnRlcmFjdGl2aXR5OiBbXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcbiAgICBwYWdlc1snY3Vyc29yJ10sXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcbiAgICBwYWdlc1sncmVzaXplJ10sXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXG4gIF0sXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==