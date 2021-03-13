webpackHotUpdate_N_E("pages/docs/box-sizing",{

/***/ "./src/components/Variants.js":
/*!************************************!*\
  !*** ./src/components/Variants.js ***!
  \************************************/
/*! exports provided: Variants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variants", function() { return Variants; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/defaultConfig */ "./src/utils/defaultConfig.js");
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/joinWithAnd */ "./src/utils/joinWithAnd.js");
/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ConfigSample */ "./src/components/ConfigSample.js");

var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\Variants.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Variants(_ref) {
  var plugin = _ref.plugin,
      name = _ref.name;
  var variants = _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"].variants[plugin] || ['responsive'];
  name = name || plugin.replace(/([a-z])([A-Z])/g, function (m, p1, p2) {
    return "".concat(p1, " ").concat(p2.toLowerCase());
  });
  var extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover'].filter(function (x) {
    return !variants.includes(x);
  }).slice(0, 2);
  var opening = "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, ".concat(variants.length ? "only ".concat(Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(variants).replace('dark', 'dark mode <em>(if enabled)</em>')) : 'no', " variants are generated for ").concat(name, " utilities.");
  return __jsx("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: opening
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442 ", name, " \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, plugin), " \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "variants"), " \u0412\u0430\u0448\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "tailwind.config.js"), "."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u044D\u0442\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F ", variants.length > 0 ? 'также ' : '', "generate", ' ', Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(extraVariants), " \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__["ConfigSample"], {
    path: "variants.extend",
    before: "...",
    add: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, plugin, extraVariants),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
}
_c = Variants;

var _c;

$RefreshReg$(_c, "Variants");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFyaWFudHMuanMiXSwibmFtZXMiOlsiVmFyaWFudHMiLCJwbHVnaW4iLCJuYW1lIiwidmFyaWFudHMiLCJkZWZhdWx0Q29uZmlnIiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJleHRyYVZhcmlhbnRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwic2xpY2UiLCJvcGVuaW5nIiwibGVuZ3RoIiwiam9pbldpdGhBbmQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFvQztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekMsTUFBTUMsUUFBUSxHQUFHQyxrRUFBYSxDQUFDRCxRQUFkLENBQXVCRixNQUF2QixLQUFrQyxDQUFDLFlBQUQsQ0FBbkQ7QUFDQUMsTUFBSSxHQUFHQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEscUJBQWtCRCxFQUFsQixjQUF3QkMsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsR0FBbEMsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLFFBQWpDLEVBQTJDLGFBQTNDLEVBQ25CQyxNQURtQixDQUNaLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUNULFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkQsQ0FBbEIsQ0FBUjtBQUFBLEdBRFksRUFFbkJFLEtBRm1CLENBRWIsQ0FGYSxFQUVWLENBRlUsQ0FBdEI7QUFJQSxNQUFNQyxPQUFPLGtGQUNYWixRQUFRLENBQUNhLE1BQVQsa0JBQ1lDLHNFQUFXLENBQUNkLFFBQUQsQ0FBWCxDQUFzQkUsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsaUNBQXRDLENBRFosSUFFSSxJQUhPLHlDQUlrQkgsSUFKbEIsZ0JBQWI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsMkJBQXVCLEVBQUU7QUFBRWdCLFlBQU0sRUFBRUg7QUFBVixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdWQUMrRGIsSUFEL0QsaUlBQzRGLEdBRDVGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRCxNQUFQLENBRkYseURBRWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmxDLG1KQUVrRixHQUZsRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsTUFGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBQzRCRSxRQUFRLENBQUNhLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsUUFBdEIsR0FBaUMsRUFEN0QsY0FDeUUsR0FEekUsRUFFR0Msc0VBQVcsQ0FBQ1AsYUFBRCxDQUZkLCtKQVBGLEVBV0UsTUFBQyxxRUFBRDtBQUFjLFFBQUksRUFBQyxpQkFBbkI7QUFBcUMsVUFBTSxFQUFDLEtBQTVDO0FBQWtELE9BQUcsZ0dBQUtULE1BQUwsRUFBY1MsYUFBZCxDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVEO0tBNUJlVixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MvYm94LXNpemluZy5mYjJhZmFhNzkyYjA1NDY3OGIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdENvbmZpZyB9IGZyb20gJ0AvdXRpbHMvZGVmYXVsdENvbmZpZydcclxuaW1wb3J0IHsgam9pbldpdGhBbmQgfSBmcm9tICdAL3V0aWxzL2pvaW5XaXRoQW5kJ1xyXG5pbXBvcnQgeyBDb25maWdTYW1wbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29uZmlnU2FtcGxlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZhcmlhbnRzKHsgcGx1Z2luLCBuYW1lIH0pIHtcclxuICBjb25zdCB2YXJpYW50cyA9IGRlZmF1bHRDb25maWcudmFyaWFudHNbcGx1Z2luXSB8fCBbJ3Jlc3BvbnNpdmUnXVxyXG4gIG5hbWUgPSBuYW1lIHx8IHBsdWdpbi5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAobSwgcDEsIHAyKSA9PiBgJHtwMX0gJHtwMi50b0xvd2VyQ2FzZSgpfWApXHJcbiAgY29uc3QgZXh0cmFWYXJpYW50cyA9IFsncmVzcG9uc2l2ZScsICdob3ZlcicsICdmb2N1cycsICdhY3RpdmUnLCAnZ3JvdXAtaG92ZXInXVxyXG4gICAgLmZpbHRlcigoeCkgPT4gIXZhcmlhbnRzLmluY2x1ZGVzKHgpKVxyXG4gICAgLnNsaWNlKDAsIDIpXHJcblxyXG4gIGNvbnN0IG9wZW5pbmcgPSBg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4sICR7XHJcbiAgICB2YXJpYW50cy5sZW5ndGhcclxuICAgICAgPyBgb25seSAke2pvaW5XaXRoQW5kKHZhcmlhbnRzKS5yZXBsYWNlKCdkYXJrJywgJ2RhcmsgbW9kZSA8ZW0+KGlmIGVuYWJsZWQpPC9lbT4nKX1gXHJcbiAgICAgIDogJ25vJ1xyXG4gIH0gdmFyaWFudHMgYXJlIGdlbmVyYXRlZCBmb3IgJHtuYW1lfSB1dGlsaXRpZXMuYFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG9wZW5pbmcgfX0gLz5cclxuICAgICAgPHA+XHJcbiAgICAgINCS0Ysg0LzQvtC20LXRgtC1INC60L7QvdGC0YDQvtC70LjRgNC+0LLQsNGC0YwsINC60LDQutC40LUg0LLQsNGA0LjQsNC90YLRiyDRgdC+0LfQtNCw0Y7RgtGB0Y8g0LTQu9GPINGD0YLQuNC70LjRgiB7bmFtZX0g0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDRgdCy0L7QudGB0YLQstCweycgJ31cclxuICAgICAgICA8Y29kZT57cGx1Z2lufTwvY29kZT4g0LIg0YDQsNC30LTQtdC70LUgPGNvZGU+dmFyaWFudHM8L2NvZGU+INCS0LDRiNC10LPQviDRhNCw0LnQu9CwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuHsnICd9XHJcbiAgICAgICAgPGNvZGU+dGFpbHdpbmQuY29uZmlnLmpzPC9jb2RlPi5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAg0J3QsNC/0YDQuNC80LXRgCwg0Y3RgtCwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjyB7dmFyaWFudHMubGVuZ3RoID4gMCA/ICfRgtCw0LrQttC1ICcgOiAnJ31nZW5lcmF0ZXsnICd9XHJcbiAgICAgICAge2pvaW5XaXRoQW5kKGV4dHJhVmFyaWFudHMpfSDQsdGD0LTQtdGCINCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQstCw0YDQuNCw0L3RgtGLOlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb25maWdTYW1wbGUgcGF0aD1cInZhcmlhbnRzLmV4dGVuZFwiIGJlZm9yZT1cIi4uLlwiIGFkZD17eyBbcGx1Z2luXTogZXh0cmFWYXJpYW50cyB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=