webpackHotUpdate_N_E("pages/docs/configuration",{

/***/ "./src/components/CorePluginReference.js":
/*!***********************************************!*\
  !*** ./src/components/CorePluginReference.js ***!
  \***********************************************/
/*! exports provided: CorePluginReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorePluginReference", function() { return CorePluginReference; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_corePluginsWithExamples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/corePluginsWithExamples */ "./src/utils/corePluginsWithExamples.js");
/* harmony import */ var _utils_corePluginsWithExamples__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_corePluginsWithExamples__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\CorePluginReference.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var descriptions = {
  preflight: "Tailwind стили base/reset",
  container: 'Компонент `container`',
  accessibility: 'Утилиты `sr-only` и `not-sr-only`',
  backgroundOpacity: 'Утилиты opacity `background-color`, такие как `bg-opacity-25`',
  borderOpacity: 'Утилиты opacity `border-color`, такие как `border-opacity-25`',
  divideColor: 'Утилиты между элементами `border-color`, например, `divide-gray-500`',
  divideWidth: 'Утилиты между элементами `border-width`, например, `divide-x-2`',
  placeholderColor: 'Утилиты placeholder `color`, такие как `placeholder-red-600`',
  placeholderOpacity: 'Утилиты placeholder `color`, такие как `placeholder-opacity-25`',
  space: 'Утилиты "space-between", например, `space-x-4`',
  transform: 'Утилиты `transform` (для включения функций преобразования)'
};
function CorePluginReference() {
  var _this = this;

  return __jsx("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "\u041F\u043B\u0430\u0433\u0438\u043D \u042F\u0434\u0440\u0430"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, _utils_corePluginsWithExamples__WEBPACK_IMPORTED_MODULE_1__["corePluginsWithExamples"].map(function (_ref) {
    var _descriptions$plugin;

    var plugin = _ref.plugin,
        example = _ref.example;
    return __jsx("tr", {
      key: plugin,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, plugin)), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, ((_descriptions$plugin = descriptions[plugin]) === null || _descriptions$plugin === void 0 ? void 0 : _descriptions$plugin.split(/`([^`]+)`/).map(function (segment, i) {
      return i % 2 === 0 ? segment : __jsx("code", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 45
        }
      }, segment);
    })) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u0423\u0442\u0438\u043B\u0438\u0442\u044B", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, plugin.replace(/([a-z])([A-Z])/g, function (_m, p1, p2) {
      return "".concat(p1, "-").concat(p2.toLowerCase());
    })), ' ', ", \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 33
      }
    }, example))));
  }))));
}
_c = CorePluginReference;

var _c;

$RefreshReg$(_c, "CorePluginReference");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVBsdWdpblJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJkZXNjcmlwdGlvbnMiLCJwcmVmbGlnaHQiLCJjb250YWluZXIiLCJhY2Nlc3NpYmlsaXR5IiwiYmFja2dyb3VuZE9wYWNpdHkiLCJib3JkZXJPcGFjaXR5IiwiZGl2aWRlQ29sb3IiLCJkaXZpZGVXaWR0aCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJzcGFjZSIsInRyYW5zZm9ybSIsIkNvcmVQbHVnaW5SZWZlcmVuY2UiLCJjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcyIsIm1hcCIsInBsdWdpbiIsImV4YW1wbGUiLCJzcGxpdCIsInNlZ21lbnQiLCJpIiwicmVwbGFjZSIsIl9tIiwicDEiLCJwMiIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSwyQkFEUTtBQUVuQkMsV0FBUyxFQUFFLHVCQUZRO0FBR25CQyxlQUFhLEVBQUUsbUNBSEk7QUFJbkJDLG1CQUFpQixFQUFFLCtEQUpBO0FBS25CQyxlQUFhLEVBQUUsK0RBTEk7QUFNbkJDLGFBQVcsRUFBRSxzRUFOTTtBQU9uQkMsYUFBVyxFQUFFLGlFQVBNO0FBUW5CQyxrQkFBZ0IsRUFBRSw4REFSQztBQVNuQkMsb0JBQWtCLEVBQUUsaUVBVEQ7QUFVbkJDLE9BQUssRUFBRSxnREFWWTtBQVduQkMsV0FBUyxFQUFFO0FBWFEsQ0FBckI7QUFjTyxTQUFTQyxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUZGLENBREYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msc0ZBQXVCLENBQUNDLEdBQXhCLENBQTRCO0FBQUE7O0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsT0FBWCxRQUFXQSxPQUFYO0FBQUEsV0FDM0I7QUFBSSxTQUFHLEVBQUVELE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9BLE1BQVAsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLHlCQUFBZixZQUFZLENBQUNlLE1BQUQsQ0FBWiw4RUFDR0UsS0FESCxDQUNTLFdBRFQsRUFFRUgsR0FGRixDQUVNLFVBQUNJLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLGFBQ0hBLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBVixHQUFjRCxPQUFkLEdBQXdCO0FBQU0sV0FBRyxFQUFFQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZUQsT0FBZixDQURyQjtBQUFBLEtBRk4sTUFLQyxpSEFDVSxHQURWLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNLLE9BQVAsQ0FDQyxpQkFERCxFQUVDLFVBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFUO0FBQUEsdUJBQW1CRCxFQUFuQixjQUF5QkMsRUFBRSxDQUFDQyxXQUFILEVBQXpCO0FBQUEsS0FGRCxDQURILENBRkYsRUFPVSxHQVBWLDBEQVFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT1IsT0FBUCxDQVJkLENBTkosQ0FKRixDQUQyQjtBQUFBLEdBQTVCLENBREgsQ0FQRixDQURGLENBREY7QUF1Q0Q7S0F4Q2VKLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvY29uZmlndXJhdGlvbi4xZDZkZGJmMDdlODQzYzA1OGE3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29yZVBsdWdpbnNXaXRoRXhhbXBsZXMgfSBmcm9tICdAL3V0aWxzL2NvcmVQbHVnaW5zV2l0aEV4YW1wbGVzJ1xyXG5cclxuY29uc3QgZGVzY3JpcHRpb25zID0ge1xyXG4gIHByZWZsaWdodDogXCJUYWlsd2luZCDRgdGC0LjQu9C4IGJhc2UvcmVzZXRcIixcclxuICBjb250YWluZXI6ICfQmtC+0LzQv9C+0L3QtdC90YIgYGNvbnRhaW5lcmAnLFxyXG4gIGFjY2Vzc2liaWxpdHk6ICfQo9GC0LjQu9C40YLRiyBgc3Itb25seWAg0LggYG5vdC1zci1vbmx5YCcsXHJcbiAgYmFja2dyb3VuZE9wYWNpdHk6ICfQo9GC0LjQu9C40YLRiyBvcGFjaXR5IGBiYWNrZ3JvdW5kLWNvbG9yYCwg0YLQsNC60LjQtSDQutCw0LogYGJnLW9wYWNpdHktMjVgJyxcclxuICBib3JkZXJPcGFjaXR5OiAn0KPRgtC40LvQuNGC0Ysgb3BhY2l0eSBgYm9yZGVyLWNvbG9yYCwg0YLQsNC60LjQtSDQutCw0LogYGJvcmRlci1vcGFjaXR5LTI1YCcsXHJcbiAgZGl2aWRlQ29sb3I6ICfQo9GC0LjQu9C40YLRiyDQvNC10LbQtNGDINGN0LvQtdC80LXQvdGC0LDQvNC4IGBib3JkZXItY29sb3JgLCDQvdCw0L/RgNC40LzQtdGALCBgZGl2aWRlLWdyYXktNTAwYCcsXHJcbiAgZGl2aWRlV2lkdGg6ICfQo9GC0LjQu9C40YLRiyDQvNC10LbQtNGDINGN0LvQtdC80LXQvdGC0LDQvNC4IGBib3JkZXItd2lkdGhgLCDQvdCw0L/RgNC40LzQtdGALCBgZGl2aWRlLXgtMmAnLFxyXG4gIHBsYWNlaG9sZGVyQ29sb3I6ICfQo9GC0LjQu9C40YLRiyBwbGFjZWhvbGRlciBgY29sb3JgLCDRgtCw0LrQuNC1INC60LDQuiBgcGxhY2Vob2xkZXItcmVkLTYwMGAnLFxyXG4gIHBsYWNlaG9sZGVyT3BhY2l0eTogJ9Cj0YLQuNC70LjRgtGLIHBsYWNlaG9sZGVyIGBjb2xvcmAsINGC0LDQutC40LUg0LrQsNC6IGBwbGFjZWhvbGRlci1vcGFjaXR5LTI1YCcsXHJcbiAgc3BhY2U6ICfQo9GC0LjQu9C40YLRiyBcInNwYWNlLWJldHdlZW5cIiwg0L3QsNC/0YDQuNC80LXRgCwgYHNwYWNlLXgtNGAnLFxyXG4gIHRyYW5zZm9ybTogJ9Cj0YLQuNC70LjRgtGLIGB0cmFuc2Zvcm1gICjQtNC70Y8g0LLQutC70Y7Rh9C10L3QuNGPINGE0YPQvdC60YbQuNC5INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8pJyxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvcmVQbHVnaW5SZWZlcmVuY2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPtCf0LvQsNCz0LjQvSDQr9C00YDQsDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD7QntC/0LjRgdCw0L3QuNC1PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Y29yZVBsdWdpbnNXaXRoRXhhbXBsZXMubWFwKCh7IHBsdWdpbiwgZXhhbXBsZSB9KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3BsdWdpbn0+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+e3BsdWdpbn08L2NvZGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb25zW3BsdWdpbl1cclxuICAgICAgICAgICAgICAgICAgPy5zcGxpdCgvYChbXmBdKylgLylcclxuICAgICAgICAgICAgICAgICAgLm1hcCgoc2VnbWVudCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBpICUgMiA9PT0gMCA/IHNlZ21lbnQgOiA8Y29kZSBrZXk9e2l9PntzZWdtZW50fTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAg0KPRgtC40LvQuNGC0Yt7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BsdWdpbi5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKFthLXpdKShbQS1aXSkvZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9tLCBwMSwgcDIpID0+IGAke3AxfS0ke3AyLnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAsINGC0LDQutC40LUg0LrQsNC6IDxjb2RlPntleGFtcGxlfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=