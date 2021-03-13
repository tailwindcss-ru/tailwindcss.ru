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
  var opening = "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, ".concat(variants.length ? "\u0442\u043E\u043B\u044C\u043A\u043E ".concat(Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(variants).replace('dark', 'темный режим <em>(если включен)</em>')) : 'нет', " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u0442\u0438\u043B\u0438\u0442 ").concat(name, ".");
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
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u044D\u0442\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F ", variants.length > 0 ? 'также ' : '', "\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B", ' ', Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(extraVariants), ":"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__["ConfigSample"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFyaWFudHMuanMiXSwibmFtZXMiOlsiVmFyaWFudHMiLCJwbHVnaW4iLCJuYW1lIiwidmFyaWFudHMiLCJkZWZhdWx0Q29uZmlnIiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJleHRyYVZhcmlhbnRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwic2xpY2UiLCJvcGVuaW5nIiwibGVuZ3RoIiwiam9pbldpdGhBbmQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFvQztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekMsTUFBTUMsUUFBUSxHQUFHQyxrRUFBYSxDQUFDRCxRQUFkLENBQXVCRixNQUF2QixLQUFrQyxDQUFDLFlBQUQsQ0FBbkQ7QUFDQUMsTUFBSSxHQUFHQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEscUJBQWtCRCxFQUFsQixjQUF3QkMsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsR0FBbEMsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLFFBQWpDLEVBQTJDLGFBQTNDLEVBQ25CQyxNQURtQixDQUNaLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUNULFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkQsQ0FBbEIsQ0FBUjtBQUFBLEdBRFksRUFFbkJFLEtBRm1CLENBRWIsQ0FGYSxFQUVWLENBRlUsQ0FBdEI7QUFJQSxNQUFNQyxPQUFPLGtGQUNYWixRQUFRLENBQUNhLE1BQVQsa0RBQ2NDLHNFQUFXLENBQUNkLFFBQUQsQ0FBWCxDQUFzQkUsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0Msc0NBQXRDLENBRGQsSUFFSSxLQUhPLDhLQUlxQkgsSUFKckIsTUFBYjtBQU1BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRywyQkFBdUIsRUFBRTtBQUFFZ0IsWUFBTSxFQUFFSDtBQUFWLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ1ZBQytEYixJQUQvRCxpSUFDNEYsR0FENUYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ELE1BQVAsQ0FGRix5REFFa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGbEMsbUpBRWtGLEdBRmxGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRixNQUZGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SkFDNEJFLFFBQVEsQ0FBQ2EsTUFBVCxHQUFrQixDQUFsQixHQUFzQixRQUF0QixHQUFpQyxFQUQ3RCw4SkFDNEYsR0FENUYsRUFFR0Msc0VBQVcsQ0FBQ1AsYUFBRCxDQUZkLE1BUEYsRUFXRSxNQUFDLHFFQUFEO0FBQWMsUUFBSSxFQUFDLGlCQUFuQjtBQUFxQyxVQUFNLEVBQUMsS0FBNUM7QUFBa0QsT0FBRyxnR0FBS1QsTUFBTCxFQUFjUyxhQUFkLENBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGO0FBZUQ7S0E1QmVWLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9ib3gtc2l6aW5nLmZjMDFkMmFlZDA5ZWQxYWE1NDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQC91dGlscy9kZWZhdWx0Q29uZmlnJ1xyXG5pbXBvcnQgeyBqb2luV2l0aEFuZCB9IGZyb20gJ0AvdXRpbHMvam9pbldpdGhBbmQnXHJcbmltcG9ydCB7IENvbmZpZ1NhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db25maWdTYW1wbGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFyaWFudHMoeyBwbHVnaW4sIG5hbWUgfSkge1xyXG4gIGNvbnN0IHZhcmlhbnRzID0gZGVmYXVsdENvbmZpZy52YXJpYW50c1twbHVnaW5dIHx8IFsncmVzcG9uc2l2ZSddXHJcbiAgbmFtZSA9IG5hbWUgfHwgcGx1Z2luLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IGAke3AxfSAke3AyLnRvTG93ZXJDYXNlKCl9YClcclxuICBjb25zdCBleHRyYVZhcmlhbnRzID0gWydyZXNwb25zaXZlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdncm91cC1ob3ZlciddXHJcbiAgICAuZmlsdGVyKCh4KSA9PiAhdmFyaWFudHMuaW5jbHVkZXMoeCkpXHJcbiAgICAuc2xpY2UoMCwgMilcclxuXHJcbiAgY29uc3Qgb3BlbmluZyA9IGDQn9C+INGD0LzQvtC70YfQsNC90LjRjiwgJHtcclxuICAgIHZhcmlhbnRzLmxlbmd0aFxyXG4gICAgICA/IGDRgtC+0LvRjNC60L4gJHtqb2luV2l0aEFuZCh2YXJpYW50cykucmVwbGFjZSgnZGFyaycsICfRgtC10LzQvdGL0Lkg0YDQtdC20LjQvCA8ZW0+KNC10YHQu9C4INCy0LrQu9GO0YfQtdC9KTwvZW0+Jyl9YFxyXG4gICAgICA6ICfQvdC10YInXHJcbiAgfSDQstCw0YDQuNCw0L3RgtGLINGB0L7Qt9C00LDRjtGC0YHRjyDQtNC70Y8g0YPRgtC40LvQuNGCICR7bmFtZX0uYFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG9wZW5pbmcgfX0gLz5cclxuICAgICAgPHA+XHJcbiAgICAgINCS0Ysg0LzQvtC20LXRgtC1INC60L7QvdGC0YDQvtC70LjRgNC+0LLQsNGC0YwsINC60LDQutC40LUg0LLQsNGA0LjQsNC90YLRiyDRgdC+0LfQtNCw0Y7RgtGB0Y8g0LTQu9GPINGD0YLQuNC70LjRgiB7bmFtZX0g0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDRgdCy0L7QudGB0YLQstCweycgJ31cclxuICAgICAgICA8Y29kZT57cGx1Z2lufTwvY29kZT4g0LIg0YDQsNC30LTQtdC70LUgPGNvZGU+dmFyaWFudHM8L2NvZGU+INCS0LDRiNC10LPQviDRhNCw0LnQu9CwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuHsnICd9XHJcbiAgICAgICAgPGNvZGU+dGFpbHdpbmQuY29uZmlnLmpzPC9jb2RlPi5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAg0J3QsNC/0YDQuNC80LXRgCwg0Y3RgtCwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjyB7dmFyaWFudHMubGVuZ3RoID4gMCA/ICfRgtCw0LrQttC1ICcgOiAnJ33QsdGD0LTQtdGCINCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQstCw0YDQuNCw0L3RgtGLeycgJ31cclxuICAgICAgICB7am9pbldpdGhBbmQoZXh0cmFWYXJpYW50cyl9OlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb25maWdTYW1wbGUgcGF0aD1cInZhcmlhbnRzLmV4dGVuZFwiIGJlZm9yZT1cIi4uLlwiIGFkZD17eyBbcGx1Z2luXTogZXh0cmFWYXJpYW50cyB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=