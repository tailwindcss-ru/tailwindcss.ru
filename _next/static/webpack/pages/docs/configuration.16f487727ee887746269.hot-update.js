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
  backgroundOpacity: 'Утилиты прозрачности `background-color`, такие как `bg-opacity-25`',
  borderOpacity: 'Утилиты прозрачности `border-color`, такие как `border-opacity-25`',
  divideColor: 'The between elements `border-color` utilities like `divide-gray-500`',
  divideWidth: 'The between elements `border-width` utilities like `divide-x-2`',
  placeholderColor: 'Утилиты заполнителя `color` utilities like `placeholder-red-600`',
  placeholderOpacity: 'Утилиты заполнителя `color`, такие как `placeholder-opacity-25`',
  space: 'The "space-between" utilities like `space-x-4`',
  transform: 'The `transform` utility (for enabling transform features)'
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
    })) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "The", ' ', __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, plugin.replace(/([a-z])([A-Z])/g, function (_m, p1, p2) {
      return "".concat(p1, "-").concat(p2.toLowerCase());
    })), ' ', "utilities like ", __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 36
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVBsdWdpblJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJkZXNjcmlwdGlvbnMiLCJwcmVmbGlnaHQiLCJjb250YWluZXIiLCJhY2Nlc3NpYmlsaXR5IiwiYmFja2dyb3VuZE9wYWNpdHkiLCJib3JkZXJPcGFjaXR5IiwiZGl2aWRlQ29sb3IiLCJkaXZpZGVXaWR0aCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJzcGFjZSIsInRyYW5zZm9ybSIsIkNvcmVQbHVnaW5SZWZlcmVuY2UiLCJjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcyIsIm1hcCIsInBsdWdpbiIsImV4YW1wbGUiLCJzcGxpdCIsInNlZ21lbnQiLCJpIiwicmVwbGFjZSIsIl9tIiwicDEiLCJwMiIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSwyQkFEUTtBQUVuQkMsV0FBUyxFQUFFLHVCQUZRO0FBR25CQyxlQUFhLEVBQUUsbUNBSEk7QUFJbkJDLG1CQUFpQixFQUFFLG9FQUpBO0FBS25CQyxlQUFhLEVBQUUsb0VBTEk7QUFNbkJDLGFBQVcsRUFBRSxzRUFOTTtBQU9uQkMsYUFBVyxFQUFFLGlFQVBNO0FBUW5CQyxrQkFBZ0IsRUFBRSxrRUFSQztBQVNuQkMsb0JBQWtCLEVBQUUsaUVBVEQ7QUFVbkJDLE9BQUssRUFBRSxnREFWWTtBQVduQkMsV0FBUyxFQUFFO0FBWFEsQ0FBckI7QUFjTyxTQUFTQyxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUZGLENBREYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msc0ZBQXVCLENBQUNDLEdBQXhCLENBQTRCO0FBQUE7O0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsT0FBWCxRQUFXQSxPQUFYO0FBQUEsV0FDM0I7QUFBSSxTQUFHLEVBQUVELE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9BLE1BQVAsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLHlCQUFBZixZQUFZLENBQUNlLE1BQUQsQ0FBWiw4RUFDR0UsS0FESCxDQUNTLFdBRFQsRUFFRUgsR0FGRixDQUVNLFVBQUNJLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLGFBQ0hBLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBVixHQUFjRCxPQUFkLEdBQXdCO0FBQU0sV0FBRyxFQUFFQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZUQsT0FBZixDQURyQjtBQUFBLEtBRk4sTUFLQywwRUFDTSxHQUROLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNLLE9BQVAsQ0FDQyxpQkFERCxFQUVDLFVBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFUO0FBQUEsdUJBQW1CRCxFQUFuQixjQUF5QkMsRUFBRSxDQUFDQyxXQUFILEVBQXpCO0FBQUEsS0FGRCxDQURILENBRkYsRUFPVSxHQVBWLHFCQVFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9SLE9BQVAsQ0FSakIsQ0FOSixDQUpGLENBRDJCO0FBQUEsR0FBNUIsQ0FESCxDQVBGLENBREYsQ0FERjtBQXVDRDtLQXhDZUosbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9jb25maWd1cmF0aW9uLjE2ZjQ4NzcyN2VlODg3NzQ2MjY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcyB9IGZyb20gJ0AvdXRpbHMvY29yZVBsdWdpbnNXaXRoRXhhbXBsZXMnXHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbnMgPSB7XHJcbiAgcHJlZmxpZ2h0OiBcIlRhaWx3aW5kINGB0YLQuNC70LggYmFzZS9yZXNldFwiLFxyXG4gIGNvbnRhaW5lcjogJ9Ca0L7QvNC/0L7QvdC10L3RgiBgY29udGFpbmVyYCcsXHJcbiAgYWNjZXNzaWJpbGl0eTogJ9Cj0YLQuNC70LjRgtGLIGBzci1vbmx5YCDQuCBgbm90LXNyLW9ubHlgJyxcclxuICBiYWNrZ3JvdW5kT3BhY2l0eTogJ9Cj0YLQuNC70LjRgtGLINC/0YDQvtC30YDQsNGH0L3QvtGB0YLQuCBgYmFja2dyb3VuZC1jb2xvcmAsINGC0LDQutC40LUg0LrQsNC6IGBiZy1vcGFjaXR5LTI1YCcsXHJcbiAgYm9yZGVyT3BhY2l0eTogJ9Cj0YLQuNC70LjRgtGLINC/0YDQvtC30YDQsNGH0L3QvtGB0YLQuCBgYm9yZGVyLWNvbG9yYCwg0YLQsNC60LjQtSDQutCw0LogYGJvcmRlci1vcGFjaXR5LTI1YCcsXHJcbiAgZGl2aWRlQ29sb3I6ICdUaGUgYmV0d2VlbiBlbGVtZW50cyBgYm9yZGVyLWNvbG9yYCB1dGlsaXRpZXMgbGlrZSBgZGl2aWRlLWdyYXktNTAwYCcsXHJcbiAgZGl2aWRlV2lkdGg6ICdUaGUgYmV0d2VlbiBlbGVtZW50cyBgYm9yZGVyLXdpZHRoYCB1dGlsaXRpZXMgbGlrZSBgZGl2aWRlLXgtMmAnLFxyXG4gIHBsYWNlaG9sZGVyQ29sb3I6ICfQo9GC0LjQu9C40YLRiyDQt9Cw0L/QvtC70L3QuNGC0LXQu9GPIGBjb2xvcmAgdXRpbGl0aWVzIGxpa2UgYHBsYWNlaG9sZGVyLXJlZC02MDBgJyxcclxuICBwbGFjZWhvbGRlck9wYWNpdHk6ICfQo9GC0LjQu9C40YLRiyDQt9Cw0L/QvtC70L3QuNGC0LXQu9GPIGBjb2xvcmAsINGC0LDQutC40LUg0LrQsNC6IGBwbGFjZWhvbGRlci1vcGFjaXR5LTI1YCcsXHJcbiAgc3BhY2U6ICdUaGUgXCJzcGFjZS1iZXR3ZWVuXCIgdXRpbGl0aWVzIGxpa2UgYHNwYWNlLXgtNGAnLFxyXG4gIHRyYW5zZm9ybTogJ1RoZSBgdHJhbnNmb3JtYCB1dGlsaXR5IChmb3IgZW5hYmxpbmcgdHJhbnNmb3JtIGZlYXR1cmVzKScsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3JlUGx1Z2luUmVmZXJlbmNlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7Qn9C70LDQs9C40L0g0K/QtNGA0LA8L3RoPlxyXG4gICAgICAgICAgICA8dGg+0J7Qv9C40YHQsNC90LjQtTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2NvcmVQbHVnaW5zV2l0aEV4YW1wbGVzLm1hcCgoeyBwbHVnaW4sIGV4YW1wbGUgfSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtwbHVnaW59PlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxjb2RlPntwbHVnaW59PC9jb2RlPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uc1twbHVnaW5dXHJcbiAgICAgICAgICAgICAgICAgID8uc3BsaXQoL2AoW15gXSspYC8pXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHNlZ21lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaSAlIDIgPT09IDAgPyBzZWdtZW50IDogPGNvZGUga2V5PXtpfT57c2VnbWVudH08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGx1Z2luLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8oW2Etel0pKFtBLVpdKS9nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX20sIHAxLCBwMikgPT4gYCR7cDF9LSR7cDIudG9Mb3dlckNhc2UoKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvY29kZT57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxpdGllcyBsaWtlIDxjb2RlPntleGFtcGxlfTwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=