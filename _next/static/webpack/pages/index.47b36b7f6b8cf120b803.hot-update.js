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
  Настройка: [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9uYXZzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwiQ29tbXVuaXR5IiwidGl0bGUiLCJocmVmIiwiRm9vdGVyIiwic3R5bGVzIiwibmF2IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNlY3Rpb24iLCJpIiwiY2xzeCIsIml0ZW0iLCJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsItCd0LDRgdGC0YDQvtC50LrQsCIsIkxheW91dCIsIkZsZXhib3giLCJHcmlkIiwiU3BhY2luZyIsIlNpemluZyIsIlR5cG9ncmFwaHkiLCJCYWNrZ3JvdW5kcyIsIkJvcmRlcnMiLCJFZmZlY3RzIiwiVGFibGVzIiwiVHJhbnNmb3JtcyIsIkludGVyYWN0aXZpdHkiLCJTVkciLCJBY2Nlc3NpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCLG1CQUFpQjtBQUNmQyxhQUFTLEVBQUUsWUFESTtBQUVmQyxTQUFLLEVBQUVDLG9FQUFnQixDQUFDLGVBQUQ7QUFGUixHQUREO0FBS2hCLHdCQUFzQjtBQUNwQkYsYUFBUyxFQUFFLFlBRFM7QUFFcEJDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsb0JBQUQ7QUFGSCxHQUxOO0FBU2hCLGVBQWE7QUFDWEYsYUFBUyxFQUFFLFlBREE7QUFFWEMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxXQUFEO0FBRlosR0FURztBQWFoQkMsV0FBUyxFQUFFO0FBQ1RGLFNBQUssRUFBRSxDQUNMO0FBQUVHLFdBQUssRUFBRSxRQUFUO0FBQW1CQyxVQUFJLEVBQUU7QUFBekIsS0FESyxFQUVMO0FB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YkEsS0FBSyxDQUFDLFFBQUQsQ0FGUSxFQUdiQSxLQUFLLENBQUMsU0FBRCxDQUhRLEVBSWJBLEtBQUssQ0FBQyxnQkFBRCxDQUpRLEVBS2JBLEtBQUssQ0FBQyxRQUFELENBTFEsRUFNYkEsS0FBSyxDQUFDLGFBQUQsQ0FOUSxDQTFKZTtBQWtLOUJnQixLQUFHLEVBQUUsQ0FBQ2hCLEtBQUssQ0FBQyxNQUFELENBQU4sRUFBZ0JBLEtBQUssQ0FBQyxRQUFELENBQXJCLEVBQWlDQSxLQUFLLENBQUMsY0FBRCxDQUF0QyxDQWxLeUI7QUFtSzlCaUIsZUFBYSxFQUFFLENBQUNqQixLQUFLLENBQUMsZ0JBQUQsQ0FBTixDQW5LZTtBQW9LOUIsc0JBQW9CLENBQUNBLEtBQUssQ0FBQyxtQkFBRCxDQUFOO0FBcEtVLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3YjM2YjdmNmI4Y2YxMjBiODAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBkb2N1bWVudGF0aW9uTmF2IH0gZnJvbSAnQC9uYXZzL2RvY3VtZW50YXRpb24nXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJ1xuXG5jb25zdCBmb290ZXJOYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzoge1xuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJ10sXG4gIH0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnXSxcbiAgfSxcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsn0J3QsNGB0YLRgNC+0LnQutCwJ10sXG4gIH0sXG4gIENvbW11bml0eToge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiAnR2l0SHViJywgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MnIH0sXG4gICAgICB7IHRpdGxlOiAnRGlzY29yZCcsIGhyZWY6ICcvZGlzY29yZCcgfSxcbiAgICAgIHsgdGl0bGU6ICdUd2l0dGVyJywgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vdGFpbHdpbmRjc3MnIH0sXG4gICAgICB7IHRpdGxlOiAnWW91VHViZScsIGhyZWY6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS90YWlsd2luZGxhYnMnIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcHQtMTYgcGItMTIgc206cHQtMjAgbWQ6cHQtMjQgeGw6cHQtMzIgc206cGItMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBweC00IHNtOnB4LTYgbWQ6cHgtOFwiPlxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZ9IHRleHQtc20gZm9udC1tZWRpdW0gcGItMTQgc206cGItMjAgZ3JpZCBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAteS0xMGB9XG4gICAgICAgID5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoZm9vdGVyTmF2KS5tYXAoKHNlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3NlY3Rpb259IGNsYXNzTmFtZT17Y2xzeCgnc3BhY2UteS01JywgZm9vdGVyTmF2W3NlY3Rpb25dLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICB7c2VjdGlvbn1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIHtmb290ZXJOYXZbc2VjdGlvbl0uaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHNtOnB0LTEyXCI+XG4gICAgICAgICAgPExvZ28gd2lkdGg9XCIyMDhcIiBoZWlnaHQ9XCIyNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcblxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXG4gICdkb2NzJ1xuKVxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRhdGlvbk5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXG4gICAgcGFnZXNbJ2luc3RhbGxhdGlvbiddLFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUmVsZWFzZSBOb3RlcycsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy12MicsXG4gICAgfSxcbiAgICBwYWdlc1sndXBncmFkaW5nLXRvLXYyJ10sXG4gICAgcGFnZXNbJ3VzaW5nLXdpdGgtcHJlcHJvY2Vzc29ycyddLFxuICAgIHBhZ2VzWydvcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJ10sXG4gICAgcGFnZXNbJ2Jyb3dzZXItc3VwcG9ydCddLFxuICAgIHBhZ2VzWydpbnRlbGxpc2Vuc2UnXSxcbiAgXSxcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXG4gIF0sXG4gINCd0LDRgdGC0YDQvtC50LrQsDogW1xuICAgIHBhZ2VzWydjb25maWd1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RoZW1lJ10sXG4gICAgcGFnZXNbJ2JyZWFrcG9pbnRzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLWNvbG9ycyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2NvbmZpZ3VyaW5nLXZhcmlhbnRzJ10sXG4gICAgcGFnZXNbJ3BsdWdpbnMnXSxcbiAgICBwYWdlc1sncHJlc2V0cyddLFxuICBdLFxuICAnQmFzZSBTdHlsZXMnOiBbcGFnZXNbJ3ByZWZsaWdodCddXSxcbiAgTGF5b3V0OiBbXG4gICAgcGFnZXNbJ2NvbnRhaW5lciddLFxuICAgIHBhZ2VzWydib3gtc2l6aW5nJ10sXG4gICAgcGFnZXNbJ2Rpc3BsYXknXSxcbiAgICBwYWdlc1snZmxvYXQnXSxcbiAgICBwYWdlc1snY2xlYXInXSxcbiAgICBwYWdlc1snb2JqZWN0LWZpdCddLFxuICAgIHBhZ2VzWydvYmplY3QtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1snb3ZlcnNjcm9sbC1iZWhhdmlvciddLFxuICAgIHBhZ2VzWydwb3NpdGlvbiddLFxuICAgIHBhZ2VzWyd0b3AtcmlnaHQtYm90dG9tLWxlZnQnXSxcbiAgICBwYWdlc1sndmlzaWJpbGl0eSddLFxuICAgIHBhZ2VzWyd6LWluZGV4J10sXG4gIF0sXG4gIEZsZXhib3g6IFtcbiAgICBwYWdlc1snZmxleC1kaXJlY3Rpb24nXSxcbiAgICBwYWdlc1snZmxleC13cmFwJ10sXG4gICAgcGFnZXNbJ2ZsZXgnXSxcbiAgICBwYWdlc1snZmxleC1ncm93J10sXG4gICAgcGFnZXNbJ2ZsZXgtc2hyaW5rJ10sXG4gICAgcGFnZXNbJ29yZGVyJ10sXG4gIF0sXG4gIEdyaWQ6IFtcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtY29sdW1uJ10sXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtcm93cyddLFxuICAgIHBhZ2VzWydncmlkLXJvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tZmxvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tcm93cyddLFxuICAgIHBhZ2VzWydnYXAnXSxcbiAgXSxcbiAgJ0JveCBBbGlnbm1lbnQnOiBbXG4gICAgcGFnZXNbJ2p1c3RpZnktY29udGVudCddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2p1c3RpZnktc2VsZiddLFxuICAgIHBhZ2VzWydhbGlnbi1jb250ZW50J10sXG4gICAgcGFnZXNbJ2FsaWduLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2FsaWduLXNlbGYnXSxcbiAgICBwYWdlc1sncGxhY2UtY29udGVudCddLFxuICAgIHBhZ2VzWydwbGFjZS1pdGVtcyddLFxuICAgIHBhZ2VzWydwbGFjZS1zZWxmJ10sXG4gIF0sXG4gIFNwYWNpbmc6IFtwYWdlc1sncGFkZGluZyddLCBwYWdlc1snbWFyZ2luJ10sIHBhZ2VzWydzcGFjZSddXSxcbiAgU2l6aW5nOiBbXG4gICAgcGFnZXNbJ3dpZHRoJ10sXG4gICAgcGFnZXNbJ21pbi13aWR0aCddLFxuICAgIHBhZ2VzWydtYXgtd2lkdGgnXSxcbiAgICBwYWdlc1snaGVpZ2h0J10sXG4gICAgcGFnZXNbJ21pbi1oZWlnaHQnXSxcbiAgICBwYWdlc1snbWF4LWhlaWdodCddLFxuICBdLFxuICBUeXBvZ3JhcGh5OiBbXG4gICAgcGFnZXNbJ2ZvbnQtZmFtaWx5J10sXG4gICAgcGFnZXNbJ2ZvbnQtc2l6ZSddLFxuICAgIHBhZ2VzWydmb250LXNtb290aGluZyddLFxuICAgIHBhZ2VzWydmb250LXN0eWxlJ10sXG4gICAgcGFnZXNbJ2ZvbnQtd2VpZ2h0J10sXG4gICAgcGFnZXNbJ2ZvbnQtdmFyaWFudC1udW1lcmljJ10sXG4gICAgcGFnZXNbJ2xldHRlci1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2xpbmUtaGVpZ2h0J10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtdHlwZSddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1hbGlnbiddLFxuICAgIHBhZ2VzWyd0ZXh0LWNvbG9yJ10sXG4gICAgcGFnZXNbJ3RleHQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWRlY29yYXRpb24nXSxcbiAgICBwYWdlc1sndGV4dC10cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndGV4dC1vdmVyZmxvdyddLFxuICAgIHBhZ2VzWyd2ZXJ0aWNhbC1hbGlnbiddLFxuICAgIHBhZ2VzWyd3aGl0ZXNwYWNlJ10sXG4gICAgcGFnZXNbJ3dvcmQtYnJlYWsnXSxcbiAgXSxcbiAgQmFja2dyb3VuZHM6IFtcbiAgICBwYWdlc1snYmFja2dyb3VuZC1hdHRhY2htZW50J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY2xpcCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcmVwZWF0J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtc2l6ZSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWltYWdlJ10sXG4gICAgcGFnZXNbJ2dyYWRpZW50LWNvbG9yLXN0b3BzJ10sXG4gIF0sXG4gIEJvcmRlcnM6IFtcbiAgICBwYWdlc1snYm9yZGVyLXJhZGl1cyddLFxuICAgIHBhZ2VzWydib3JkZXItd2lkdGgnXSxcbiAgICBwYWdlc1snYm9yZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JvcmRlci1zdHlsZSddLFxuICAgIHBhZ2VzWydkaXZpZGUtd2lkdGgnXSxcbiAgICBwYWdlc1snZGl2aWRlLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2RpdmlkZS1zdHlsZSddLFxuICAgIHBhZ2VzWydyaW5nLXdpZHRoJ10sXG4gICAgcGFnZXNbJ3JpbmctY29sb3InXSxcbiAgICBwYWdlc1sncmluZy1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LXdpZHRoJ10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LWNvbG9yJ10sXG4gIF0sXG4gIEVmZmVjdHM6IFtwYWdlc1snYm94LXNoYWRvdyddLCBwYWdlc1snb3BhY2l0eSddXSxcbiAgVGFibGVzOiBbcGFnZXNbJ2JvcmRlci1jb2xsYXBzZSddLCBwYWdlc1sndGFibGUtbGF5b3V0J11dLFxuICAnVHJhbnNpdGlvbnMgYW5kIEFuaW1hdGlvbic6IFtcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1wcm9wZXJ0eSddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZGVsYXknXSxcbiAgICBwYWdlc1snYW5pbWF0aW9uJ10sXG4gIF0sXG4gIFRyYW5zZm9ybXM6IFtcbiAgICBwYWdlc1sndHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RyYW5zZm9ybS1vcmlnaW4nXSxcbiAgICBwYWdlc1snc2NhbGUnXSxcbiAgICBwYWdlc1sncm90YXRlJ10sXG4gICAgcGFnZXNbJ3RyYW5zbGF0ZSddLFxuICAgIHBhZ2VzWydza2V3J10sXG4gIF0sXG4gIEludGVyYWN0aXZpdHk6IFtcbiAgICBwYWdlc1snYXBwZWFyYW5jZSddLFxuICAgIHBhZ2VzWydjdXJzb3InXSxcbiAgICBwYWdlc1snb3V0bGluZSddLFxuICAgIHBhZ2VzWydwb2ludGVyLWV2ZW50cyddLFxuICAgIHBhZ2VzWydyZXNpemUnXSxcbiAgICBwYWdlc1sndXNlci1zZWxlY3QnXSxcbiAgXSxcbiAgU1ZHOiBbcGFnZXNbJ2ZpbGwnXSwgcGFnZXNbJ3N0cm9rZSddLCBwYWdlc1snc3Ryb2tlLXdpZHRoJ11dLFxuICBBY2Nlc3NpYmlsaXR5OiBbcGFnZXNbJ3NjcmVlbi1yZWFkZXJzJ11dLFxuICAnT2ZmaWNpYWwgUGx1Z2lucyc6IFtwYWdlc1sndHlwb2dyYXBoeS1wbHVnaW4nXV0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9