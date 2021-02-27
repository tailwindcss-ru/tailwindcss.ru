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
  container: 'Конфигурация плагина `container`',
  inset: 'Значения свойств `top`, `right`, `bottom` и `left`',
  placeholderColor: 'Значения для плагина `placeholderColor`',
  placeholderOpacity: 'Значения для плагина `placeholderOpacity`',
  rotate: 'Значения для плагина `rotate`',
  scale: 'Значения для плагина `scale`',
  skew: 'Значения для плагина `skew`',
  space: 'Значения для плагина `space`',
  textOpacity: 'Значения для плагина `textOpacity`',
  translate: 'Значения для плагина `translate`'
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
    })) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, key.replace(/([a-z])([A-Z])/g, function (_m, p1, p2) {
      return "".concat(p1, "-").concat(p2.toLowerCase());
    })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwic2NyZWVucyIsImNvbG9ycyIsInNwYWNpbmciLCJjb250YWluZXIiLCJpbnNldCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJyb3RhdGUiLCJzY2FsZSIsInNrZXciLCJzcGFjZSIsInRleHRPcGFjaXR5IiwidHJhbnNsYXRlIiwiVGhlbWVSZWZlcmVuY2UiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdENvbmZpZyIsInRoZW1lIiwibWFwIiwia2V5Iiwic3BsaXQiLCJzZWdtZW50IiwiaSIsInJlcGxhY2UiLCJfbSIsInAxIiwicDIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsNkNBRFU7QUFFbkJDLFFBQU0sRUFBRSxpQ0FGVztBQUduQkMsU0FBTyxFQUFFLGlDQUhVO0FBSW5CQyxXQUFTLEVBQUUsa0NBSlE7QUFLbkJDLE9BQUssRUFBRSxvREFMWTtBQU1uQkMsa0JBQWdCLEVBQUUseUNBTkM7QUFPbkJDLG9CQUFrQixFQUFFLDJDQVBEO0FBUW5CQyxRQUFNLEVBQUUsK0JBUlc7QUFTbkJDLE9BQUssRUFBRSw4QkFUWTtBQVVuQkMsTUFBSSxFQUFFLDZCQVZhO0FBV25CQyxPQUFLLEVBQUUsOEJBWFk7QUFZbkJDLGFBQVcsRUFBRSxvQ0FaTTtBQWFuQkMsV0FBUyxFQUFFO0FBYlEsQ0FBckI7QUFnQk8sU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUMvQixTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsa0VBQWEsQ0FBQ0MsS0FBMUIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUNDLEdBQUQ7QUFBQTs7QUFBQSxXQUNwQztBQUFJLFNBQUcsRUFBRUEsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0EsR0FBUCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csc0JBQUFwQixZQUFZLENBQUNvQixHQUFELENBQVosd0VBQ0dDLEtBREgsQ0FDUyxXQURULEVBRUVGLEdBRkYsQ0FFTSxVQUFDRyxPQUFELEVBQVVDLENBQVY7QUFBQSxhQUNIQSxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBY0QsT0FBZCxHQUF3QjtBQUFNLFdBQUcsRUFBRUMsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWVELE9BQWYsQ0FEckI7QUFBQSxLQUZOLE1BS0MscUxBQ3VCLEdBRHZCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixHQUFHLENBQUNJLE9BQUosQ0FBWSxpQkFBWixFQUErQixVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVDtBQUFBLHVCQUFtQkQsRUFBbkIsY0FBeUJDLEVBQUUsQ0FBQ0MsV0FBSCxFQUF6QjtBQUFBLEtBQS9CLENBREgsQ0FGRixDQU5KLENBSkYsQ0FEb0M7QUFBQSxHQUFyQyxDQURILENBUEYsQ0FERixDQURGO0FBbUNEO0tBcENlZCxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvdGhlbWUuODI3NDAzOGNjZTVmYjBmN2M5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICdAL3V0aWxzL2RlZmF1bHRDb25maWcnXHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbnMgPSB7XHJcbiAgc2NyZWVuczogXCLQkNC00LDQv9GC0LjQstC90YvQtSDQutC+0L3RgtGA0L7Qu9GM0L3Ri9C1INGC0L7Rh9C60Lgg0JLQsNGI0LXQs9C+INC/0YDQvtC10LrRgtCwXCIsXHJcbiAgY29sb3JzOiBcItCm0LLQtdGC0L7QstCw0Y8g0L/QsNC70LjRgtGA0LAg0LLQsNGI0LXQs9C+INC/0YDQvtC10LrRgtCwXCIsXHJcbiAgc3BhY2luZzogXCLQqNC60LDQu9CwINC40L3RgtC10YDQstCw0LvQvtCyINCy0LDRiNC10LPQviDQv9GA0L7QtdC60YLQsFwiLFxyXG4gIGNvbnRhaW5lcjogJ9Ca0L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDQv9C70LDQs9C40L3QsCBgY29udGFpbmVyYCcsXHJcbiAgaW5zZXQ6ICfQl9C90LDRh9C10L3QuNGPINGB0LLQvtC50YHRgtCyIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCDQuCBgbGVmdGAnLFxyXG4gIHBsYWNlaG9sZGVyQ29sb3I6ICfQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9C70LDQs9C40L3QsCBgcGxhY2Vob2xkZXJDb2xvcmAnLFxyXG4gIHBsYWNlaG9sZGVyT3BhY2l0eTogJ9CX0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC/0LvQsNCz0LjQvdCwIGBwbGFjZWhvbGRlck9wYWNpdHlgJyxcclxuICByb3RhdGU6ICfQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9C70LDQs9C40L3QsCBgcm90YXRlYCcsXHJcbiAgc2NhbGU6ICfQl9C90LDRh9C10L3QuNGPINC00LvRjyDQv9C70LDQs9C40L3QsCBgc2NhbGVgJyxcclxuICBza2V3OiAn0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/Qu9Cw0LPQuNC90LAgYHNrZXdgJyxcclxuICBzcGFjZTogJ9CX0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC/0LvQsNCz0LjQvdCwIGBzcGFjZWAnLFxyXG4gIHRleHRPcGFjaXR5OiAn0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/Qu9Cw0LPQuNC90LAgYHRleHRPcGFjaXR5YCcsXHJcbiAgdHJhbnNsYXRlOiAn0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0L/Qu9Cw0LPQuNC90LAgYHRyYW5zbGF0ZWAnLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVSZWZlcmVuY2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPktleTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge09iamVjdC5rZXlzKGRlZmF1bHRDb25maWcudGhlbWUpLm1hcCgoa2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+e2tleX08L2NvZGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb25zW2tleV1cclxuICAgICAgICAgICAgICAgICAgPy5zcGxpdCgvYChbXmBdKylgLylcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoc2VnbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpICUgMiA9PT0gMCA/IHNlZ21lbnQgOiA8Y29kZSBrZXk9e2l9PntzZWdtZW50fTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0YHQstC+0LnRgdGC0LJ7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2tleS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAoX20sIHAxLCBwMikgPT4gYCR7cDF9LSR7cDIudG9Mb3dlckNhc2UoKX1gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9