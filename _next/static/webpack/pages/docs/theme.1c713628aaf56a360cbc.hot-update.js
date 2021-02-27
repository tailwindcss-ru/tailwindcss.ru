webpackHotUpdate_N_E("pages/docs/theme",{

/***/ "./src/components/ThemeReference.js":
/*!******************************************!*\
  !*** ./src/components/ThemeReference.js ***!
  \******************************************/
/*! exports provided: ThemeReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeReference", function() { return ThemeReference; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/defaultConfig */ "./src/utils/defaultConfig.js");
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\ThemeReference.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var descriptions = {
  screens: "Адаптивные контрольные точки Вашего проекта",
  colors: "Цветовая палитра вашего проекта",
  spacing: "Шкала интервалов вашего проекта",
  container: 'Configuration for the `container` plugin',
  inset: 'Values for the `top`, `right`, `bottom`, and `left` properties',
  placeholderColor: 'Values for the `placeholderColor` plugin',
  placeholderOpacity: 'Values for the `placeholderOpacity` plugin',
  rotate: 'Values for the `rotate` plugin',
  scale: 'Values for the `scale` plugin',
  skew: 'Values for the `skew` plugin',
  space: 'Values for the `space` plugin',
  textOpacity: 'Values for the `textOpacity` plugin',
  translate: 'Values for the `translate` plugin'
};
function ThemeReference() {
  var _this = this;

  return __jsx("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Key"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Description"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object.keys(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_1__["defaultConfig"].theme).map(function (key) {
    var _descriptions$key;

    return __jsx("tr", {
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, key)), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, ((_descriptions$key = descriptions[key]) === null || _descriptions$key === void 0 ? void 0 : _descriptions$key.split(/`([^`]+)`/).map(function (segment, i) {
      return i % 2 === 0 ? segment : __jsx("code", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 45
        }
      }, segment);
    })) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Values for the", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, key.replace(/([a-z])([A-Z])/g, function (_m, p1, p2) {
      return "".concat(p1, "-").concat(p2.toLowerCase());
    })), ' ', "property")));
  }))));
}
_c = ThemeReference;

var _c;

$RefreshReg$(_c, "ThemeReference");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwic2NyZWVucyIsImNvbG9ycyIsInNwYWNpbmciLCJjb250YWluZXIiLCJpbnNldCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJyb3RhdGUiLCJzY2FsZSIsInNrZXciLCJzcGFjZSIsInRleHRPcGFjaXR5IiwidHJhbnNsYXRlIiwiVGhlbWVSZWZlcmVuY2UiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdENvbmZpZyIsInRoZW1lIiwibWFwIiwia2V5Iiwic3BsaXQiLCJzZWdtZW50IiwiaSIsInJlcGxhY2UiLCJfbSIsInAxIiwicDIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsNkNBRFU7QUFFbkJDLFFBQU0sRUFBRSxpQ0FGVztBQUduQkMsU0FBTyxFQUFFLGlDQUhVO0FBSW5CQyxXQUFTLEVBQUUsMENBSlE7QUFLbkJDLE9BQUssRUFBRSxnRUFMWTtBQU1uQkMsa0JBQWdCLEVBQUUsMENBTkM7QUFPbkJDLG9CQUFrQixFQUFFLDRDQVBEO0FBUW5CQyxRQUFNLEVBQUUsZ0NBUlc7QUFTbkJDLE9BQUssRUFBRSwrQkFUWTtBQVVuQkMsTUFBSSxFQUFFLDhCQVZhO0FBV25CQyxPQUFLLEVBQUUsK0JBWFk7QUFZbkJDLGFBQVcsRUFBRSxxQ0FaTTtBQWFuQkMsV0FBUyxFQUFFO0FBYlEsQ0FBckI7QUFnQk8sU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUMvQixTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsa0VBQWEsQ0FBQ0MsS0FBMUIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxXQUNwQztBQUFJLFNBQUcsRUFBRUEsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0EsR0FBUCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csc0JBQUFwQixZQUFZLENBQUNvQixHQUFELENBQVosd0VBQ0dDLEtBREgsQ0FDUyxXQURULEVBRUVGLEdBRkYsQ0FFTSxVQUFDRyxPQUFELEVBQVVDLENBQVY7QUFBQSxhQUNIQSxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBY0QsT0FBZCxHQUF3QjtBQUFNLFdBQUcsRUFBRUMsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWVELE9BQWYsQ0FEckI7QUFBQSxLQUZOLE1BS0MscUZBQ2lCLEdBRGpCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixHQUFHLENBQUNJLE9BQUosQ0FBWSxpQkFBWixFQUErQixVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVDtBQUFBLHVCQUFtQkQsRUFBbkIsY0FBeUJDLEVBQUUsQ0FBQ0MsV0FBSCxFQUF6QjtBQUFBLEtBQS9CLENBREgsQ0FGRixFQUlVLEdBSlYsYUFOSixDQUpGLENBRG9DO0FBQUEsR0FBckMsQ0FESCxDQVBGLENBREYsQ0FERjtBQW9DRDtLQXJDZWQsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3RoZW1lLjFjNzEzNjI4YWFmNTZhMzYwY2JjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQC91dGlscy9kZWZhdWx0Q29uZmlnJ1xyXG5cclxuY29uc3QgZGVzY3JpcHRpb25zID0ge1xyXG4gIHNjcmVlbnM6IFwi0JDQtNCw0L/RgtC40LLQvdGL0LUg0LrQvtC90YLRgNC+0LvRjNC90YvQtSDRgtC+0YfQutC4INCS0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsFwiLFxyXG4gIGNvbG9yczogXCLQptCy0LXRgtC+0LLQsNGPINC/0LDQu9C40YLRgNCwINCy0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsFwiLFxyXG4gIHNwYWNpbmc6IFwi0KjQutCw0LvQsCDQuNC90YLQtdGA0LLQsNC70L7QsiDQstCw0YjQtdCz0L4g0L/RgNC+0LXQutGC0LBcIixcclxuICBjb250YWluZXI6ICdDb25maWd1cmF0aW9uIGZvciB0aGUgYGNvbnRhaW5lcmAgcGx1Z2luJyxcclxuICBpbnNldDogJ1ZhbHVlcyBmb3IgdGhlIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCwgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzJyxcclxuICBwbGFjZWhvbGRlckNvbG9yOiAnVmFsdWVzIGZvciB0aGUgYHBsYWNlaG9sZGVyQ29sb3JgIHBsdWdpbicsXHJcbiAgcGxhY2Vob2xkZXJPcGFjaXR5OiAnVmFsdWVzIGZvciB0aGUgYHBsYWNlaG9sZGVyT3BhY2l0eWAgcGx1Z2luJyxcclxuICByb3RhdGU6ICdWYWx1ZXMgZm9yIHRoZSBgcm90YXRlYCBwbHVnaW4nLFxyXG4gIHNjYWxlOiAnVmFsdWVzIGZvciB0aGUgYHNjYWxlYCBwbHVnaW4nLFxyXG4gIHNrZXc6ICdWYWx1ZXMgZm9yIHRoZSBgc2tld2AgcGx1Z2luJyxcclxuICBzcGFjZTogJ1ZhbHVlcyBmb3IgdGhlIGBzcGFjZWAgcGx1Z2luJyxcclxuICB0ZXh0T3BhY2l0eTogJ1ZhbHVlcyBmb3IgdGhlIGB0ZXh0T3BhY2l0eWAgcGx1Z2luJyxcclxuICB0cmFuc2xhdGU6ICdWYWx1ZXMgZm9yIHRoZSBgdHJhbnNsYXRlYCBwbHVnaW4nLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVSZWZlcmVuY2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPktleTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKGRlZmF1bHRDb25maWcudGhlbWUpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+e2tleX08L2NvZGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb25zW2tleV1cclxuICAgICAgICAgICAgICAgICAgPy5zcGxpdCgvYChbXmBdKylgLylcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoc2VnbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpICUgMiA9PT0gMCA/IHNlZ21lbnQgOiA8Y29kZSBrZXk9e2l9PntzZWdtZW50fTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsdWVzIGZvciB0aGV7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAoX20sIHAxLCBwMikgPT4gYCR7cDF9LSR7cDIudG9Mb3dlckNhc2UoKX1gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==