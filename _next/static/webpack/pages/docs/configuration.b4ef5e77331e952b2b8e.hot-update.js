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
  preflight: "Tailwind стили базовые/сброса",
  container: 'The `container` component',
  accessibility: 'The `sr-only` and `not-sr-only` utilities',
  backgroundOpacity: 'The `background-color` opacity utilities like `bg-opacity-25`',
  borderOpacity: 'The `border-color` opacity utilities like `border-opacity-25`',
  divideColor: 'The between elements `border-color` utilities like `divide-gray-500`',
  divideWidth: 'The between elements `border-width` utilities like `divide-x-2`',
  placeholderColor: 'The placeholder `color` utilities like `placeholder-red-600`',
  placeholderOpacity: 'The placeholder `color` opacity utilities like `placeholder-opacity-25`',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVBsdWdpblJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJkZXNjcmlwdGlvbnMiLCJwcmVmbGlnaHQiLCJjb250YWluZXIiLCJhY2Nlc3NpYmlsaXR5IiwiYmFja2dyb3VuZE9wYWNpdHkiLCJib3JkZXJPcGFjaXR5IiwiZGl2aWRlQ29sb3IiLCJkaXZpZGVXaWR0aCIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZWhvbGRlck9wYWNpdHkiLCJzcGFjZSIsInRyYW5zZm9ybSIsIkNvcmVQbHVnaW5SZWZlcmVuY2UiLCJjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcyIsIm1hcCIsInBsdWdpbiIsImV4YW1wbGUiLCJzcGxpdCIsInNlZ21lbnQiLCJpIiwicmVwbGFjZSIsIl9tIiwicDEiLCJwMiIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSwrQkFEUTtBQUVuQkMsV0FBUyxFQUFFLDJCQUZRO0FBR25CQyxlQUFhLEVBQUUsMkNBSEk7QUFJbkJDLG1CQUFpQixFQUFFLCtEQUpBO0FBS25CQyxlQUFhLEVBQUUsK0RBTEk7QUFNbkJDLGFBQVcsRUFBRSxzRUFOTTtBQU9uQkMsYUFBVyxFQUFFLGlFQVBNO0FBUW5CQyxrQkFBZ0IsRUFBRSw4REFSQztBQVNuQkMsb0JBQWtCLEVBQUUseUVBVEQ7QUFVbkJDLE9BQUssRUFBRSxnREFWWTtBQVduQkMsV0FBUyxFQUFFO0FBWFEsQ0FBckI7QUFjTyxTQUFTQyxtQkFBVCxHQUErQjtBQUFBOztBQUNwQyxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUZGLENBREYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msc0ZBQXVCLENBQUNDLEdBQXhCLENBQTRCO0FBQUE7O0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsT0FBWCxRQUFXQSxPQUFYO0FBQUEsV0FDM0I7QUFBSSxTQUFHLEVBQUVELE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9BLE1BQVAsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLHlCQUFBZixZQUFZLENBQUNlLE1BQUQsQ0FBWiw4RUFDR0UsS0FESCxDQUNTLFdBRFQsRUFFRUgsR0FGRixDQUVNLFVBQUNJLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLGFBQ0hBLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBVixHQUFjRCxPQUFkLEdBQXdCO0FBQU0sV0FBRyxFQUFFQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZUQsT0FBZixDQURyQjtBQUFBLEtBRk4sTUFLQywwRUFDTSxHQUROLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNLLE9BQVAsQ0FDQyxpQkFERCxFQUVDLFVBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFTQyxFQUFUO0FBQUEsdUJBQW1CRCxFQUFuQixjQUF5QkMsRUFBRSxDQUFDQyxXQUFILEVBQXpCO0FBQUEsS0FGRCxDQURILENBRkYsRUFPVSxHQVBWLHFCQVFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9SLE9BQVAsQ0FSakIsQ0FOSixDQUpGLENBRDJCO0FBQUEsR0FBNUIsQ0FESCxDQVBGLENBREYsQ0FERjtBQXVDRDtLQXhDZUosbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9jb25maWd1cmF0aW9uLmI0ZWY1ZTc3MzMxZTk1MmIyYjhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcyB9IGZyb20gJ0AvdXRpbHMvY29yZVBsdWdpbnNXaXRoRXhhbXBsZXMnXHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbnMgPSB7XHJcbiAgcHJlZmxpZ2h0OiBcIlRhaWx3aW5kINGB0YLQuNC70Lgg0LHQsNC30L7QstGL0LUv0YHQsdGA0L7RgdCwXCIsXHJcbiAgY29udGFpbmVyOiAnVGhlIGBjb250YWluZXJgIGNvbXBvbmVudCcsXHJcbiAgYWNjZXNzaWJpbGl0eTogJ1RoZSBgc3Itb25seWAgYW5kIGBub3Qtc3Itb25seWAgdXRpbGl0aWVzJyxcclxuICBiYWNrZ3JvdW5kT3BhY2l0eTogJ1RoZSBgYmFja2dyb3VuZC1jb2xvcmAgb3BhY2l0eSB1dGlsaXRpZXMgbGlrZSBgYmctb3BhY2l0eS0yNWAnLFxyXG4gIGJvcmRlck9wYWNpdHk6ICdUaGUgYGJvcmRlci1jb2xvcmAgb3BhY2l0eSB1dGlsaXRpZXMgbGlrZSBgYm9yZGVyLW9wYWNpdHktMjVgJyxcclxuICBkaXZpZGVDb2xvcjogJ1RoZSBiZXR3ZWVuIGVsZW1lbnRzIGBib3JkZXItY29sb3JgIHV0aWxpdGllcyBsaWtlIGBkaXZpZGUtZ3JheS01MDBgJyxcclxuICBkaXZpZGVXaWR0aDogJ1RoZSBiZXR3ZWVuIGVsZW1lbnRzIGBib3JkZXItd2lkdGhgIHV0aWxpdGllcyBsaWtlIGBkaXZpZGUteC0yYCcsXHJcbiAgcGxhY2Vob2xkZXJDb2xvcjogJ1RoZSBwbGFjZWhvbGRlciBgY29sb3JgIHV0aWxpdGllcyBsaWtlIGBwbGFjZWhvbGRlci1yZWQtNjAwYCcsXHJcbiAgcGxhY2Vob2xkZXJPcGFjaXR5OiAnVGhlIHBsYWNlaG9sZGVyIGBjb2xvcmAgb3BhY2l0eSB1dGlsaXRpZXMgbGlrZSBgcGxhY2Vob2xkZXItb3BhY2l0eS0yNWAnLFxyXG4gIHNwYWNlOiAnVGhlIFwic3BhY2UtYmV0d2VlblwiIHV0aWxpdGllcyBsaWtlIGBzcGFjZS14LTRgJyxcclxuICB0cmFuc2Zvcm06ICdUaGUgYHRyYW5zZm9ybWAgdXRpbGl0eSAoZm9yIGVuYWJsaW5nIHRyYW5zZm9ybSBmZWF0dXJlcyknLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29yZVBsdWdpblJlZmVyZW5jZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+0J/Qu9Cw0LPQuNC9INCv0LTRgNCwPC90aD5cclxuICAgICAgICAgICAgPHRoPtCe0L/QuNGB0LDQvdC40LU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtjb3JlUGx1Z2luc1dpdGhFeGFtcGxlcy5tYXAoKHsgcGx1Z2luLCBleGFtcGxlIH0pID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17cGx1Z2lufT5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT57cGx1Z2lufTwvY29kZT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbnNbcGx1Z2luXVxyXG4gICAgICAgICAgICAgICAgICA/LnNwbGl0KC9gKFteYF0rKWAvKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKChzZWdtZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAwID8gc2VnbWVudCA6IDxjb2RlIGtleT17aX0+e3NlZ21lbnR9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICBUaGV7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BsdWdpbi5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKFthLXpdKShbQS1aXSkvZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9tLCBwMSwgcDIpID0+IGAke3AxfS0ke3AyLnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2NvZGU+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICB1dGlsaXRpZXMgbGlrZSA8Y29kZT57ZXhhbXBsZX08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9