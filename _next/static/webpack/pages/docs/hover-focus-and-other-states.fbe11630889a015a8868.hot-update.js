webpackHotUpdate_N_E("pages/docs/hover-focus-and-other-states",{

/***/ "./src/components/VariantEnabledList.js":
/*!**********************************************!*\
  !*** ./src/components/VariantEnabledList.js ***!
  \**********************************************/
/*! exports provided: VariantEnabledList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantEnabledList", function() { return VariantEnabledList; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/defaultConfig */ "./src/utils/defaultConfig.js");
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ConfigSample */ "./src/components/ConfigSample.js");

var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\VariantEnabledList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var variantListInverted = Object.entries(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"].variants).reduce(function (reduced, _ref) {
  var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      plugin = _ref2[0],
      variants = _ref2[1];

  variants.forEach(function (variant) {
    if (reduced[variant]) {
      reduced[variant].push(plugin);
    } else {
      reduced[variant] = [plugin];
    }
  });
  return reduced;
}, {});
function VariantEnabledList(_ref3) {
  var _this = this;

  var variant = _ref3.variant;

  if (!variantListInverted[variant]) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u0430\u0440\u0438\u0430\u043D\u0442 ", __jsx("code", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 32
      }
    }, variant), " variant is not enabled for any core plugins"), ".");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432\u0430\u0440\u0438\u0430\u043D\u0442 ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 30
    }
  }, variant), " variant is enabled for the following core plugins:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, variantListInverted[variant].map(function (plugin) {
    return __jsx("li", {
      key: plugin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, plugin));
  })));
}
_c = VariantEnabledList;

var _c;

$RefreshReg$(_c, "VariantEnabledList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFyaWFudEVuYWJsZWRMaXN0LmpzIl0sIm5hbWVzIjpbInZhcmlhbnRMaXN0SW52ZXJ0ZWQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZGVmYXVsdENvbmZpZyIsInZhcmlhbnRzIiwicmVkdWNlIiwicmVkdWNlZCIsInBsdWdpbiIsImZvckVhY2giLCJ2YXJpYW50IiwicHVzaCIsIlZhcmlhbnRFbmFibGVkTGlzdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVDLGtFQUFhLENBQUNDLFFBQTdCLEVBQXVDQyxNQUF2QyxDQUMxQixVQUFDQyxPQUFELFFBQWlDO0FBQUE7QUFBQSxNQUF0QkMsTUFBc0I7QUFBQSxNQUFkSCxRQUFjOztBQUMvQkEsVUFBUSxDQUFDSSxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixRQUFJSCxPQUFPLENBQUNHLE9BQUQsQ0FBWCxFQUFzQjtBQUNwQkgsYUFBTyxDQUFDRyxPQUFELENBQVAsQ0FBaUJDLElBQWpCLENBQXNCSCxNQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMRCxhQUFPLENBQUNHLE9BQUQsQ0FBUCxHQUFtQixDQUFDRixNQUFELENBQW5CO0FBQ0Q7QUFDRixHQU5EO0FBT0EsU0FBT0QsT0FBUDtBQUNELENBVnlCLEVBVzFCLEVBWDBCLENBQTVCO0FBY08sU0FBU0ssa0JBQVQsUUFBeUM7QUFBQTs7QUFBQSxNQUFYRixPQUFXLFNBQVhBLE9BQVc7O0FBQzlDLE1BQUksQ0FBQ1QsbUJBQW1CLENBQUNTLE9BQUQsQ0FBeEIsRUFBbUM7QUFDakMsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwSEFDdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPQSxPQUFQLENBRHZCLGlEQURGLE1BREY7QUFRRDs7QUFFRCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0hBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsT0FBUCxDQUR2Qix3REFERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsbUJBQW1CLENBQUNTLE9BQUQsQ0FBbkIsQ0FBNkJHLEdBQTdCLENBQWlDLFVBQUNMLE1BQUQ7QUFBQSxXQUNoQztBQUFJLFNBQUcsRUFBRUEsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPQSxNQUFQLENBREYsQ0FEZ0M7QUFBQSxHQUFqQyxDQURILENBTEYsQ0FERjtBQWVEO0tBM0JlSSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMuZmJlMTE2MzA4ODlhMDE1YTg4NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICdAL3V0aWxzL2RlZmF1bHRDb25maWcnXHJcbmltcG9ydCB7IENvbmZpZ1NhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db25maWdTYW1wbGUnXHJcblxyXG5jb25zdCB2YXJpYW50TGlzdEludmVydGVkID0gT2JqZWN0LmVudHJpZXMoZGVmYXVsdENvbmZpZy52YXJpYW50cykucmVkdWNlKFxyXG4gIChyZWR1Y2VkLCBbcGx1Z2luLCB2YXJpYW50c10pID0+IHtcclxuICAgIHZhcmlhbnRzLmZvckVhY2goKHZhcmlhbnQpID0+IHtcclxuICAgICAgaWYgKHJlZHVjZWRbdmFyaWFudF0pIHtcclxuICAgICAgICByZWR1Y2VkW3ZhcmlhbnRdLnB1c2gocGx1Z2luKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlZHVjZWRbdmFyaWFudF0gPSBbcGx1Z2luXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlZHVjZWRcclxuICB9LFxyXG4gIHt9XHJcbilcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYXJpYW50RW5hYmxlZExpc3QoeyB2YXJpYW50IH0pIHtcclxuICBpZiAoIXZhcmlhbnRMaXN0SW52ZXJ0ZWRbdmFyaWFudF0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQstCw0YDQuNCw0L3RgiA8Y29kZT57dmFyaWFudH08L2NvZGU+IHZhcmlhbnQgaXMgbm90IGVuYWJsZWQgZm9yIGFueSBjb3JlIHBsdWdpbnNcclxuICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAuXHJcbiAgICAgIDwvcD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5cclxuICAgICAgICDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQstCw0YDQuNCw0L3RgiA8Y29kZT57dmFyaWFudH08L2NvZGU+IHZhcmlhbnQgaXMgZW5hYmxlZCBmb3IgdGhlIGZvbGxvd2luZyBjb3JlIHBsdWdpbnM6XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dmFyaWFudExpc3RJbnZlcnRlZFt2YXJpYW50XS5tYXAoKHBsdWdpbikgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cGx1Z2lufT5cclxuICAgICAgICAgICAgPGNvZGU+e3BsdWdpbn08L2NvZGU+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=