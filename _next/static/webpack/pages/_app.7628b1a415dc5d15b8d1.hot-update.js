webpackHotUpdate_N_E("pages/_app",{

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

    if (selectRef.current.value === 'v0') {
      window.location = 'https://tailwindcss-v0.netlify.app/';
    }

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
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Tailwind CSS Version"), __jsx("select", {
    ref: selectRef,
    className: "appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",
    onChange: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "v2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "v", _utils_tailwindVersion__WEBPACK_IMPORTED_MODULE_1__["tailwindVersion"]), __jsx("option", {
    value: "v1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "v1.9.6"))), __jsx("svg", {
    className: "w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmVyc2lvblN3aXRjaGVyLmpzIl0sIm5hbWVzIjpbIlZlcnNpb25Td2l0Y2hlciIsImNsYXNzTmFtZSIsInNlbGVjdFJlZiIsInVzZVJlZiIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiY2xzeCIsInRhaWx3aW5kVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGVBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDN0MsTUFBSUMsU0FBUyxHQUFHQyxvREFBTSxFQUF0Qjs7QUFFQSxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNqQkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlKLFNBQVMsQ0FBQ0ssT0FBVixDQUFrQkMsS0FBbEIsS0FBNEIsSUFBaEMsRUFBc0M7QUFDcENDLFlBQU0sQ0FBQ0MsUUFBUCxHQUFrQixxQ0FBbEI7QUFDRDs7QUFDRCxRQUFJUixTQUFTLENBQUNLLE9BQVYsQ0FBa0JDLEtBQWxCLEtBQTRCLElBQWhDLEVBQXNDO0FBQ3BDQyxZQUFNLENBQUNDLFFBQVAsR0FBa0IsNkJBQWxCO0FBQ0Q7QUFDRjs7QUFFRCxTQUNFO0FBQU0sWUFBUSxFQUFFTixNQUFoQjtBQUF3QixhQUFTLEVBQUVPLG9EQUFJLENBQUMsVUFBRCxFQUFhVixTQUFiLENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFO0FBQ0UsT0FBRyxFQUFFQyxTQURQO0FBRUUsYUFBUyxFQUFDLHdKQUZaO0FBR0UsWUFBUSxFQUFFRSxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBcUJRLHNFQUFyQixDQUxGLEVBTUU7QUFBUSxTQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsQ0FGRixDQURGLEVBWUU7QUFDRSxhQUFTLEVBQUMsNEVBRFo7QUFFRSxRQUFJLEVBQUMsY0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxZQUFRLEVBQUMsU0FEWDtBQUVFLFlBQVEsRUFBQyxTQUZYO0FBR0UsS0FBQyxFQUFDLG9IQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQVpGLENBREY7QUF5QkQ7O0dBdENlWixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzYyOGIxYTQxNWRjNWQxNWI4ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhaWx3aW5kVmVyc2lvbiB9IGZyb20gJ0AvdXRpbHMvdGFpbHdpbmRWZXJzaW9uJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gVmVyc2lvblN3aXRjaGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgbGV0IHNlbGVjdFJlZiA9IHVzZVJlZigpXG5cbiAgZnVuY3Rpb24gc3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoc2VsZWN0UmVmLmN1cnJlbnQudmFsdWUgPT09ICd2MCcpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL3RhaWx3aW5kY3NzLXYwLm5ldGxpZnkuYXBwLydcbiAgICB9XG4gICAgaWYgKHNlbGVjdFJlZi5jdXJyZW50LnZhbHVlID09PSAndjEnKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSAnaHR0cHM6Ly92MS50YWlsd2luZGNzcy5jb20vJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdH0gY2xhc3NOYW1lPXtjbHN4KCdyZWxhdGl2ZScsIGNsYXNzTmFtZSl9PlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGFpbHdpbmQgQ1NTIFZlcnNpb248L3NwYW4+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICByZWY9e3NlbGVjdFJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgYmctdHJhbnNwYXJlbnQgcHItNyBweS0xIHRleHQtZ3JheS01MDAgZm9udC1tZWRpdW0gdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtzdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidjJcIj52e3RhaWx3aW5kVmVyc2lvbn08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidjFcIj52MS45LjY8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS00MDAgYWJzb2x1dGUgdG9wLTEvMiByaWdodC0wIC1tdC0yLjUgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==