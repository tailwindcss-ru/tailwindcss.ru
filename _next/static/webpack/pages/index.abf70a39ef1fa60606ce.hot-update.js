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
    prefix: 'docs/',
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Начало работы']
  },
  'Основные концепции': {
    prefix: 'docs/',
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Основные концепции']
  },
  'Настройка': {
    prefix: 'docs/',
    className: 'row-span-2',
    items: _navs_documentation__WEBPACK_IMPORTED_MODULE_2__["documentationNav"]['Настройка']
  },
  'Сообщество': {
    prefix: '',
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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "".concat(_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav, " text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, Object.keys(footerNav).map(function (section, i) {
    return __jsx("li", {
      key: section,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('space-y-5', footerNav[section].className),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "text-xs font-semibold tracking-wide text-gray-900 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, section), __jsx("ul", {
      className: "space-y-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, footerNav[section].items.map(function (item) {
      return __jsx("li", {
        key: item.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: footerNav[section].prefix + item.href,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "hover:text-gray-900 transition-colors duration-200",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 23
        }
      }, item.title)));
    })));
  })), __jsx("div", {
    className: "pt-10 sm:pt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__["Logo"], {
    width: "208",
    height: "26",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Gb290ZXIuanMiXSwibmFtZXMiOlsiZm9vdGVyTmF2IiwicHJlZml4IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJkb2N1bWVudGF0aW9uTmF2IiwidGl0bGUiLCJocmVmIiwiRm9vdGVyIiwic3R5bGVzIiwibmF2IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInNlY3Rpb24iLCJpIiwiY2xzeCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEIsbUJBQWlCO0FBQ2ZDLFVBQU0sRUFBRSxPQURPO0FBRWZDLGFBQVMsRUFBRSxZQUZJO0FBR2ZDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsZUFBRDtBQUhSLEdBREQ7QUFNaEIsd0JBQXNCO0FBQ3BCSCxVQUFNLEVBQUUsT0FEWTtBQUVwQkMsYUFBUyxFQUFFLFlBRlM7QUFHcEJDLFNBQUssRUFBRUMsb0VBQWdCLENBQUMsb0JBQUQ7QUFISCxHQU5OO0FBV2hCLGVBQWE7QUFDWEgsVUFBTSxFQUFFLE9BREc7QUFFWEMsYUFBUyxFQUFFLFlBRkE7QUFHWEMsU0FBSyxFQUFFQyxvRUFBZ0IsQ0FBQyxXQUFEO0FBSFosR0FYRztBQWdCaEIsZ0JBQWM7QUFDWkgsVUFBTSxFQUFFLEVBREk7QUFFWkUsU0FBSyxFQUFFLENBQ0w7QUFBRUUsV0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFVBQUksRUFBRTtBQUF6QixLQURLLEVBRUw7QUFBRUQsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQUksRUFBRTtBQUExQixLQUZLLEVBR0w7QUFBRUQsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQUksRUFBRTtBQUExQixLQUhLLEVBSUw7QUFBRUQsV0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFVBQUksRUFBRTtBQUExQixLQUpLO0FBRks7QUFoQkUsQ0FBbEI7QUEyQk8sU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUN2QixTQUNFO0FBQVEsYUFBUyxFQUFDLDREQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxZQUFLQyx5REFBTSxDQUFDQyxHQUFaLG1HQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlYLFNBQVosRUFBdUJZLEdBQXZCLENBQTJCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLFdBQzFCO0FBQUksU0FBRyxFQUFFRCxPQUFUO0FBQWtCLGVBQVMsRUFBRUUsb0RBQUksQ0FBQyxXQUFELEVBQWNmLFNBQVMsQ0FBQ2EsT0FBRCxDQUFULENBQW1CWCxTQUFqQyxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsNkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVyxPQURILENBREYsRUFJRTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2IsU0FBUyxDQUFDYSxPQUFELENBQVQsQ0FBbUJWLEtBQW5CLENBQXlCUyxHQUF6QixDQUE2QixVQUFDSSxJQUFEO0FBQUEsYUFDNUI7QUFBSSxXQUFHLEVBQUVBLElBQUksQ0FBQ1YsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRU4sU0FBUyxDQUFDYSxPQUFELENBQVQsQ0FBbUJaLE1BQW5CLEdBQTRCZSxJQUFJLENBQUNWLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsb0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVSxJQUFJLENBQUNYLEtBRFIsQ0FERixDQURGLENBRDRCO0FBQUEsS0FBN0IsQ0FESCxDQUpGLENBRDBCO0FBQUEsR0FBM0IsQ0FISCxDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLEtBQVo7QUFBa0IsVUFBTSxFQUFDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXZCRixDQURGLENBREY7QUErQkQ7S0FoQ2VFLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJmNzBhMzllZjFmYTYwNjA2Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGRvY3VtZW50YXRpb25OYXYgfSBmcm9tICdAL25hdnMvZG9jdW1lbnRhdGlvbidcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnQC9jb21wb25lbnRzL0xvZ28nXG5cbmNvbnN0IGZvb3Rlck5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiB7XG4gICAgcHJlZml4OiAnZG9jcy8nLFxuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJ10sXG4gIH0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IHtcbiAgICBwcmVmaXg6ICdkb2NzLycsXG4gICAgY2xhc3NOYW1lOiAncm93LXNwYW4tMicsXG4gICAgaXRlbXM6IGRvY3VtZW50YXRpb25OYXZbJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4J10sXG4gIH0sXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiB7XG4gICAgcHJlZml4OiAnZG9jcy8nLFxuICAgIGNsYXNzTmFtZTogJ3Jvdy1zcGFuLTInLFxuICAgIGl0ZW1zOiBkb2N1bWVudGF0aW9uTmF2WyfQndCw0YHRgtGA0L7QudC60LAnXSxcbiAgfSxcbiAgJ9Ch0L7QvtCx0YnQtdGB0YLQstC+Jzoge1xuICAgIHByZWZpeDogJycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6ICdHaXRIdWInLCBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdEaXNjb3JkJywgaHJlZjogJy9kaXNjb3JkJyB9LFxuICAgICAgeyB0aXRsZTogJ1R3aXR0ZXInLCBocmVmOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS90YWlsd2luZGNzcycgfSxcbiAgICAgIHsgdGl0bGU6ICdZb3VUdWJlJywgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFicycgfSxcbiAgICBdLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBwdC0xNiBwYi0xMiBzbTpwdC0yMCBtZDpwdC0yNCB4bDpwdC0zMiBzbTpwYi0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIHB4LTQgc206cHgtNiBtZDpweC04XCI+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdn0gdGV4dC1zbSBmb250LW1lZGl1bSBwYi0xNCBzbTpwYi0yMCBncmlkIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC15LTEwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhmb290ZXJOYXYpLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2VjdGlvbn0gY2xhc3NOYW1lPXtjbHN4KCdzcGFjZS15LTUnLCBmb290ZXJOYXZbc2VjdGlvbl0uY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIHtzZWN0aW9ufVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAge2Zvb3Rlck5hdltzZWN0aW9uXS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Zvb3Rlck5hdltzZWN0aW9uXS5wcmVmaXggKyBpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHNtOnB0LTEyXCI+XG4gICAgICAgICAgPExvZ28gd2lkdGg9XCIyMDhcIiBoZWlnaHQ9XCIyNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=