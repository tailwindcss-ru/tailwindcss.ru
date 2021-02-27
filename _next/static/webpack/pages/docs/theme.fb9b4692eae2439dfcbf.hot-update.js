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
  spacing: "Your project's spacing scale",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwic2NyZWVucyIsImNvbG9ycyIsInNwYWNpbmciLCJjb250YWluZXIiLCJpbnNldCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJyb3RhdGUiLCJzY2FsZSIsInNrZXciLCJzcGFjZSIsInRleHRPcGFjaXR5IiwidHJhbnNsYXRlIiwiVGhlbWVSZWZlcmVuY2UiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdENvbmZpZyIsInRoZW1lIiwibWFwIiwia2V5Iiwic3BsaXQiLCJzZWdtZW50IiwiaSIsInJlcGxhY2UiLCJfbSIsInAxIiwicDIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsNkNBRFU7QUFFbkJDLFFBQU0sRUFBRSxpQ0FGVztBQUduQkMsU0FBTyxFQUFFLDhCQUhVO0FBSW5CQyxXQUFTLEVBQUUsMENBSlE7QUFLbkJDLE9BQUssRUFBRSxnRUFMWTtBQU1uQkMsa0JBQWdCLEVBQUUsMENBTkM7QUFPbkJDLG9CQUFrQixFQUFFLDRDQVBEO0FBUW5CQyxRQUFNLEVBQUUsZ0NBUlc7QUFTbkJDLE9BQUssRUFBRSwrQkFUWTtBQVVuQkMsTUFBSSxFQUFFLDhCQVZhO0FBV25CQyxPQUFLLEVBQUUsK0JBWFk7QUFZbkJDLGFBQVcsRUFBRSxxQ0FaTTtBQWFuQkMsV0FBUyxFQUFFO0FBYlEsQ0FBckI7QUFnQk8sU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUMvQixTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsa0VBQWEsQ0FBQ0MsS0FBMUIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxXQUNwQztBQUFJLFNBQUcsRUFBRUEsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0EsR0FBUCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csc0JBQUFwQixZQUFZLENBQUNvQixHQUFELENBQVosd0VBQ0dDLEtBREgsQ0FDUyxXQURULEVBRUVGLEdBRkYsQ0FFTSxVQUFDRyxPQUFELEVBQVVDLENBQVY7QUFBQSxhQUNIQSxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBY0QsT0FBZCxHQUF3QjtBQUFNLFdBQUcsRUFBRUMsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWVELE9BQWYsQ0FEckI7QUFBQSxLQUZOLE1BS0MscUZBQ2lCLEdBRGpCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixHQUFHLENBQUNJLE9BQUosQ0FBWSxpQkFBWixFQUErQixVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVDtBQUFBLHVCQUFtQkQsRUFBbkIsY0FBeUJDLEVBQUUsQ0FBQ0MsV0FBSCxFQUF6QjtBQUFBLEtBQS9CLENBREgsQ0FGRixFQUlVLEdBSlYsYUFOSixDQUpGLENBRG9DO0FBQUEsR0FBckMsQ0FESCxDQVBGLENBREYsQ0FERjtBQW9DRDtLQXJDZWQsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3RoZW1lLmZiOWI0NjkyZWFlMjQzOWRmY2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQC91dGlscy9kZWZhdWx0Q29uZmlnJ1xyXG5cclxuY29uc3QgZGVzY3JpcHRpb25zID0ge1xyXG4gIHNjcmVlbnM6IFwi0JDQtNCw0L/RgtC40LLQvdGL0LUg0LrQvtC90YLRgNC+0LvRjNC90YvQtSDRgtC+0YfQutC4INCS0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsFwiLFxyXG4gIGNvbG9yczogXCLQptCy0LXRgtC+0LLQsNGPINC/0LDQu9C40YLRgNCwINCy0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsFwiLFxyXG4gIHNwYWNpbmc6IFwiWW91ciBwcm9qZWN0J3Mgc3BhY2luZyBzY2FsZVwiLFxyXG4gIGNvbnRhaW5lcjogJ0NvbmZpZ3VyYXRpb24gZm9yIHRoZSBgY29udGFpbmVyYCBwbHVnaW4nLFxyXG4gIGluc2V0OiAnVmFsdWVzIGZvciB0aGUgYHRvcGAsIGByaWdodGAsIGBib3R0b21gLCBhbmQgYGxlZnRgIHByb3BlcnRpZXMnLFxyXG4gIHBsYWNlaG9sZGVyQ29sb3I6ICdWYWx1ZXMgZm9yIHRoZSBgcGxhY2Vob2xkZXJDb2xvcmAgcGx1Z2luJyxcclxuICBwbGFjZWhvbGRlck9wYWNpdHk6ICdWYWx1ZXMgZm9yIHRoZSBgcGxhY2Vob2xkZXJPcGFjaXR5YCBwbHVnaW4nLFxyXG4gIHJvdGF0ZTogJ1ZhbHVlcyBmb3IgdGhlIGByb3RhdGVgIHBsdWdpbicsXHJcbiAgc2NhbGU6ICdWYWx1ZXMgZm9yIHRoZSBgc2NhbGVgIHBsdWdpbicsXHJcbiAgc2tldzogJ1ZhbHVlcyBmb3IgdGhlIGBza2V3YCBwbHVnaW4nLFxyXG4gIHNwYWNlOiAnVmFsdWVzIGZvciB0aGUgYHNwYWNlYCBwbHVnaW4nLFxyXG4gIHRleHRPcGFjaXR5OiAnVmFsdWVzIGZvciB0aGUgYHRleHRPcGFjaXR5YCBwbHVnaW4nLFxyXG4gIHRyYW5zbGF0ZTogJ1ZhbHVlcyBmb3IgdGhlIGB0cmFuc2xhdGVgIHBsdWdpbicsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVJlZmVyZW5jZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+S2V5PC90aD5cclxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXMoZGVmYXVsdENvbmZpZy50aGVtZSkubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT57a2V5fTwvY29kZT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbnNba2V5XVxyXG4gICAgICAgICAgICAgICAgICA/LnNwbGl0KC9gKFteYF0rKWAvKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChzZWdtZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAwID8gc2VnbWVudCA6IDxjb2RlIGtleT17aX0+e3NlZ21lbnR9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICBWYWx1ZXMgZm9yIHRoZXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChfbSwgcDEsIHAyKSA9PiBgJHtwMX0tJHtwMi50b0xvd2VyQ2FzZSgpfWApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29kZT57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9