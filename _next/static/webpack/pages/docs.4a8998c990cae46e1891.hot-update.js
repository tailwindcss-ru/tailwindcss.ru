webpackHotUpdate_N_E("pages/docs",{

/***/ "./src/components/VersionSwitcher.js":
/*!*******************************************!*\
  !*** ./src/components/VersionSwitcher.js ***!
  \*******************************************/
/*! exports provided: VersionSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionSwitcher", function() { return VersionSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_tailwindVersion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/tailwindVersion */ "./src/utils/tailwindVersion.js");
/* harmony import */ var _utils_tailwindVersion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_tailwindVersion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\VersionSwitcher.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function VersionSwitcher(_ref) {
  _s();

  var className = _ref.className;
  var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  function submit(e) {
    e.preventDefault();

    if (selectRef.current.value === 'v1') {
      window.location = 'https://v1.tailwindcss.com/';
    }
  }

  return __jsx("form", {
    onSubmit: submit,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('relative', className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Tailwind CSS Version"), __jsx("select", {
    ref: selectRef,
    className: "appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",
    onChange: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "v2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "v", _utils_tailwindVersion__WEBPACK_IMPORTED_MODULE_1__["tailwindVersion"]))), __jsx("svg", {
    className: "w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
}

_s(VersionSwitcher, "ZWT7gh/OJFBnpMPAzZjffIz5LQw=");

_c = VersionSwitcher;

var _c;

$RefreshReg$(_c, "VersionSwitcher");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmVyc2lvblN3aXRjaGVyLmpzIl0sIm5hbWVzIjpbIlZlcnNpb25Td2l0Y2hlciIsImNsYXNzTmFtZSIsInNlbGVjdFJlZiIsInVzZVJlZiIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiY2xzeCIsInRhaWx3aW5kVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGVBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0MsTUFBSUMsU0FBUyxHQUFHQyxvREFBTSxFQUF0Qjs7QUFFQSxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNqQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlKLFNBQVMsQ0FBQ0ssT0FBVixDQUFrQkMsS0FBbEIsS0FBNEIsSUFBaEMsRUFBc0M7QUFDcENDLFlBQU0sQ0FBQ0MsUUFBUCxHQUFrQiw2QkFBbEI7QUFDRDtBQUNGOztBQUVELFNBQ0U7QUFBTSxZQUFRLEVBQUVOLE1BQWhCO0FBQXdCLGFBQVMsRUFBRU8sb0RBQUksQ0FBQyxVQUFELEVBQWFWLFNBQWIsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUU7QUFDRSxPQUFHLEVBQUVDLFNBRFA7QUFFRSxhQUFTLEVBQUMsd0pBRlo7QUFHRSxZQUFRLEVBQUVFLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQVEsU0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFxQlEsc0VBQXJCLENBTEYsQ0FGRixDQURGLEVBWUU7QUFDRSxhQUFTLEVBQUMsNEVBRFo7QUFFRSxRQUFJLEVBQUMsY0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxZQUFRLEVBQUMsU0FEWDtBQUVFLFlBQVEsRUFBQyxTQUZYO0FBR0UsS0FBQyxFQUFDLG9IQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQVpGLENBREY7QUF5QkQ7O0dBbkNlWixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MuNGE4OTk4Yzk5MGNhZTQ2ZTE4OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhaWx3aW5kVmVyc2lvbiB9IGZyb20gJ0AvdXRpbHMvdGFpbHdpbmRWZXJzaW9uJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gVmVyc2lvblN3aXRjaGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgbGV0IHNlbGVjdFJlZiA9IHVzZVJlZigpXG5cbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoc2VsZWN0UmVmLmN1cnJlbnQudmFsdWUgPT09ICd2MScpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL3YxLnRhaWx3aW5kY3NzLmNvbS8nXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0fSBjbGFzc05hbWU9e2Nsc3goJ3JlbGF0aXZlJywgY2xhc3NOYW1lKX0+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5UYWlsd2luZCBDU1MgVmVyc2lvbjwvc3Bhbj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHJlZj17c2VsZWN0UmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayBiZy10cmFuc3BhcmVudCBwci03IHB5LTEgdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3N1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2MlwiPnZ7dGFpbHdpbmRWZXJzaW9ufTwvb3B0aW9uPlxuICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwidjFcIj52MS45LjY8L29wdGlvbj4gKi99XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWdyYXktNDAwIGFic29sdXRlIHRvcC0xLzIgcmlnaHQtMCAtbXQtMi41IHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=