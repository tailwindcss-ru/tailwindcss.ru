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
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u044D\u0442\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F ", variants.length > 0 ? 'также ' : '', "\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C", ' ', Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_3__["joinWithAnd"])(extraVariants), " \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_4__["ConfigSample"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmFyaWFudHMuanMiXSwibmFtZXMiOlsiVmFyaWFudHMiLCJwbHVnaW4iLCJuYW1lIiwidmFyaWFudHMiLCJkZWZhdWx0Q29uZmlnIiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJleHRyYVZhcmlhbnRzIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwic2xpY2UiLCJvcGVuaW5nIiwibGVuZ3RoIiwiam9pbldpdGhBbmQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsUUFBVCxPQUFvQztBQUFBLE1BQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDekMsTUFBTUMsUUFBUSxHQUFHQyxrRUFBYSxDQUFDRCxRQUFkLENBQXVCRixNQUF2QixLQUFrQyxDQUFDLFlBQUQsQ0FBbkQ7QUFDQUMsTUFBSSxHQUFHQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEscUJBQWtCRCxFQUFsQixjQUF3QkMsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsR0FBbEMsQ0FBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLFFBQWpDLEVBQTJDLGFBQTNDLEVBQ25CQyxNQURtQixDQUNaLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUNULFFBQVEsQ0FBQ1UsUUFBVCxDQUFrQkQsQ0FBbEIsQ0FBUjtBQUFBLEdBRFksRUFFbkJFLEtBRm1CLENBRWIsQ0FGYSxFQUVWLENBRlUsQ0FBdEI7QUFJQSxNQUFNQyxPQUFPLGtGQUNYWixRQUFRLENBQUNhLE1BQVQsa0JBQ1lDLHNFQUFXLENBQUNkLFFBQUQsQ0FBWCxDQUFzQkUsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsaUNBQXRDLENBRFosSUFFSSxJQUhPLHlDQUlrQkgsSUFKbEIsZ0JBQWI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsMkJBQXVCLEVBQUU7QUFBRWdCLFlBQU0sRUFBRUg7QUFBVixLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdWQUMrRGIsSUFEL0QsaUlBQzRGLEdBRDVGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRCxNQUFQLENBRkYseURBRWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmxDLG1KQUVrRixHQUZsRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEYsTUFGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUpBQzRCRSxRQUFRLENBQUNhLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsUUFBdEIsR0FBaUMsRUFEN0QsNkdBQ21GLEdBRG5GLEVBRUdDLHNFQUFXLENBQUNQLGFBQUQsQ0FGZCx1REFQRixFQVdFLE1BQUMscUVBQUQ7QUFBYyxRQUFJLEVBQUMsaUJBQW5CO0FBQXFDLFVBQU0sRUFBQyxLQUE1QztBQUFrRCxPQUFHLGdHQUFLVCxNQUFMLEVBQWNTLGFBQWQsQ0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFlRDtLQTVCZVYsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL2JveC1zaXppbmcuYjI0ZmM4ZTNhNmNlNWYwYjM4MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICdAL3V0aWxzL2RlZmF1bHRDb25maWcnXHJcbmltcG9ydCB7IGpvaW5XaXRoQW5kIH0gZnJvbSAnQC91dGlscy9qb2luV2l0aEFuZCdcclxuaW1wb3J0IHsgQ29uZmlnU2FtcGxlIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbmZpZ1NhbXBsZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYXJpYW50cyh7IHBsdWdpbiwgbmFtZSB9KSB7XHJcbiAgY29uc3QgdmFyaWFudHMgPSBkZWZhdWx0Q29uZmlnLnZhcmlhbnRzW3BsdWdpbl0gfHwgWydyZXNwb25zaXZlJ11cclxuICBuYW1lID0gbmFtZSB8fCBwbHVnaW4ucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgKG0sIHAxLCBwMikgPT4gYCR7cDF9ICR7cDIudG9Mb3dlckNhc2UoKX1gKVxyXG4gIGNvbnN0IGV4dHJhVmFyaWFudHMgPSBbJ3Jlc3BvbnNpdmUnLCAnaG92ZXInLCAnZm9jdXMnLCAnYWN0aXZlJywgJ2dyb3VwLWhvdmVyJ11cclxuICAgIC5maWx0ZXIoKHgpID0+ICF2YXJpYW50cy5pbmNsdWRlcyh4KSlcclxuICAgIC5zbGljZSgwLCAyKVxyXG5cclxuICBjb25zdCBvcGVuaW5nID0gYNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLCAke1xyXG4gICAgdmFyaWFudHMubGVuZ3RoXHJcbiAgICAgID8gYG9ubHkgJHtqb2luV2l0aEFuZCh2YXJpYW50cykucmVwbGFjZSgnZGFyaycsICdkYXJrIG1vZGUgPGVtPihpZiBlbmFibGVkKTwvZW0+Jyl9YFxyXG4gICAgICA6ICdubydcclxuICB9IHZhcmlhbnRzIGFyZSBnZW5lcmF0ZWQgZm9yICR7bmFtZX0gdXRpbGl0aWVzLmBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBvcGVuaW5nIH19IC8+XHJcbiAgICAgIDxwPlxyXG4gICAgICDQktGLINC80L7QttC10YLQtSDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDRgtGMLCDQutCw0LrQuNC1INCy0LDRgNC40LDQvdGC0Ysg0YHQvtC30LTQsNGO0YLRgdGPINC00LvRjyDRg9GC0LjQu9C40YIge25hbWV9INC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0YHQstC+0LnRgdGC0LLQsHsnICd9XHJcbiAgICAgICAgPGNvZGU+e3BsdWdpbn08L2NvZGU+INCyINGA0LDQt9C00LXQu9C1IDxjb2RlPnZhcmlhbnRzPC9jb2RlPiDQktCw0YjQtdCz0L4g0YTQsNC50LvQsCDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lh7JyAnfVxyXG4gICAgICAgIDxjb2RlPnRhaWx3aW5kLmNvbmZpZy5qczwvY29kZT4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgINCd0LDQv9GA0LjQvNC10YAsINGN0YLQsCDQutC+0L3RhNC40LPRg9GA0LDRhtC40Y8ge3ZhcmlhbnRzLmxlbmd0aCA+IDAgPyAn0YLQsNC60LbQtSAnIDogJyd90LHRg9C00LXRgiDQs9C10L3QtdGA0LjRgNC+0LLQsNGC0Yx7JyAnfVxyXG4gICAgICAgIHtqb2luV2l0aEFuZChleHRyYVZhcmlhbnRzKX0g0LLQsNGA0LjQsNC90YLRizpcclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29uZmlnU2FtcGxlIHBhdGg9XCJ2YXJpYW50cy5leHRlbmRcIiBiZWZvcmU9XCIuLi5cIiBhZGQ9e3sgW3BsdWdpbl06IGV4dHJhVmFyaWFudHMgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9