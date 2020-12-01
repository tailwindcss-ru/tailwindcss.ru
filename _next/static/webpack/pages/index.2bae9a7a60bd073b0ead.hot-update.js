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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwidGl0bGUiLCJocmVmIiwiRm9vdGVyIiwic3R5bGVzIiwibmF2IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNlY3Rpb24iLCJpIiwiY2xzeCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEIsbUJBQWlCO0FBQ2ZDLGFBQVMsRUFBRSxZQURJO0FBRWZDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsZUFBRDtBQUZSLEdBREQ7QUFLaEIsd0JBQXNCO0FBQ3BCRixhQUFTLEVBQUUsWUFEUztBQUVwQkMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxvQkFBRDtBQUZILEdBTE47QUFTaEIsZUFBYTtBQUNYRixhQUFTLEVBQUUsWUFEQTtBQUVYQyxTQUFLLEVBQUVDLG9FQUFnQixDQUFDLFdBQUQ7QUFGWixHQVRHO0FBYWhCLGdCQUFjO0FBQ1pELFNBQUssRUFBRSxDQUNMO0FBQUVFLFdBQUssRUFBRSxRQUFUO0FBQW1CQyxVQUFJLEVBQUU7QUFBekIsS0FESyxFQUVMO0FBQUVELFdBQUssRUFBRSxTQUFUO0FBQW9CQyxVQUFJLEVBQUU7QUFBMUIsS0FGSyxFQUdMO0FBQUVELFdBQUssRUFBRSxTQUFUO0FBQW9CQyxVQUFJLEVBQUU7QUFBMUIsS0FISyxFQUlMO0FBQUVELFdBQUssRUFBRSxTQUFUO0FBQW9CQyxVQUFJLEVBQUU7QUFBMUIsS0FKSztBQURLO0FBYkUsQ0FBbEI7QUF1Qk8sU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUN2QixTQUNFO0FBQVEsYUFBUyxFQUFDLDREQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxZQUFLQyx5REFBTSxDQUFDQyxHQUFaLG1HQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlWLFNBQVosRUFBdUJXLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLFdBQzFCO0FBQUksU0FBRyxFQUFFRCxPQUFUO0FBQWtCLGVBQVMsRUFBRUUsb0RBQUksQ0FBQyxXQUFELEVBQWNkLFNBQVMsQ0FBQ1ksT0FBRCxDQUFULENBQW1CWCxTQUFqQyxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsNkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVyxPQURILENBREYsRUFJRTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1osU0FBUyxDQUFDWSxPQUFELENBQVQsQ0FBbUJWLEtBQW5CLENBQXlCUyxHQUF6QixDQUE2QixVQUFDSSxJQUFEO0FBQUEsYUFDNUI7QUFBSSxXQUFHLEVBQUVBLElBQUksQ0FBQ1YsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRVUsSUFBSSxDQUFDVixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLG9EQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1UsSUFBSSxDQUFDWCxLQURSLENBREYsQ0FERixDQUQ0QjtBQUFBLEtBQTdCLENBREgsQ0FKRixDQUQwQjtBQUFBLEdBQTNCLENBSEgsQ0FERixFQXVCRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxLQUFaO0FBQWtCLFVBQU0sRUFBQyxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F2QkYsQ0FERixDQURGO0FBK0JEO0tBaENlRSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiYWU5YTdhNjBiZDA3M2IwZWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBkb2N1bWVudGF0aW9uTmF2IH0gZnJvbSAnQC9uYXZzL2RvY3VtZW50YXRpb24nXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJ0AvY29tcG9uZW50cy9Mb2dvJ1xuXG5jb25zdCBmb290ZXJOYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzoge1xuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJ10sXG4gIH0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnXSxcbiAgfSxcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IHtcbiAgICBjbGFzc05hbWU6ICdyb3ctc3Bhbi0yJyxcbiAgICBpdGVtczogZG9jdW1lbnRhdGlvbk5hdlsn0J3QsNGB0YLRgNC+0LnQutCwJ10sXG4gIH0sXG4gICfQodC+0L7QsdGJ0LXRgdGC0LLQvic6IHtcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogJ0dpdEh1YicsIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzJyB9LFxuICAgICAgeyB0aXRsZTogJ0Rpc2NvcmQnLCBocmVmOiAnL2Rpc2NvcmQnIH0sXG4gICAgICB7IHRpdGxlOiAnVHdpdHRlcicsIGhyZWY6ICdodHRwczovL3R3aXR0ZXIuY29tL3RhaWx3aW5kY3NzJyB9LFxuICAgICAgeyB0aXRsZTogJ1lvdVR1YmUnLCBocmVmOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vdGFpbHdpbmRsYWJzJyB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHB0LTE2IHBiLTEyIHNtOnB0LTIwIG1kOnB0LTI0IHhsOnB0LTMyIHNtOnBiLTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgcHgtNCBzbTpweC02IG1kOnB4LThcIj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2fSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHBiLTE0IHNtOnBiLTIwIGdyaWQgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLXktMTBgfVxuICAgICAgICA+XG4gICAgICAgICAge09iamVjdC5rZXlzKGZvb3Rlck5hdikubWFwKChzZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzZWN0aW9ufSBjbGFzc05hbWU9e2Nsc3goJ3NwYWNlLXktNScsIGZvb3Rlck5hdltzZWN0aW9uXS5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIHRleHQtZ3JheS05MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAge3NlY3Rpb259XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyTmF2W3NlY3Rpb25dLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBzbTpwdC0xMlwiPlxuICAgICAgICAgIDxMb2dvIHdpZHRoPVwiMjA4XCIgaGVpZ2h0PVwiMjZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9