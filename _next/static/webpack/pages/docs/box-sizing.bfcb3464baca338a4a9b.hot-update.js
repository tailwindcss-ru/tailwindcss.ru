webpackHotUpdate_N_E("pages/docs/box-sizing",{

/***/ "./src/components/Disabling.js":
/*!*************************************!*\
  !*** ./src/components/Disabling.js ***!
  \*************************************/
/*! exports provided: Disabling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disabling", function() { return Disabling; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConfigSample */ "./src/components/ConfigSample.js");
/* harmony import */ var _utils_castArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/castArray */ "./src/utils/castArray.js");
/* harmony import */ var _utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/joinWithAnd */ "./src/utils/joinWithAnd.js");

var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\Disabling.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Disabling(_ref) {
  var plugin = _ref.plugin,
      name = _ref.name;
  var plugins = Object(_utils_castArray__WEBPACK_IMPORTED_MODULE_3__["castArray"])(plugin);
  name = name || plugin.replace(/([a-z])([A-Z])/g, function (m, p1, p2) {
    return "".concat(p1, " ").concat(p2.toLowerCase());
  });
  return __jsx("div", {
    className: "prose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ", name, ", \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0445, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F ", ' ', __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_4__["joinWithAnd"])(plugins.map(function (p) {
        return "<code>".concat(p, "</code>");
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), ' ', plugins.length > 1 ? 'характеристики' : 'свойство', " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 71
    }
  }, "false"), " \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "corePlugins"), " \u0412\u0430\u0448\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_2__["ConfigSample"], {
    path: "corePlugins",
    before: "...",
    add: plugins.reduce(function (acc, cur) {
      return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cur, false));
    }, {}),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
}
_c = Disabling;

var _c;

$RefreshReg$(_c, "Disabling");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlzYWJsaW5nLmpzIl0sIm5hbWVzIjpbIkRpc2FibGluZyIsInBsdWdpbiIsIm5hbWUiLCJwbHVnaW5zIiwiY2FzdEFycmF5IiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJfX2h0bWwiLCJqb2luV2l0aEFuZCIsIm1hcCIsInAiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBcUM7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFDLE1BQU1DLE9BQU8sR0FBR0Msa0VBQVMsQ0FBQ0gsTUFBRCxDQUF6QjtBQUNBQyxNQUFJLEdBQUdBLElBQUksSUFBSUQsTUFBTSxDQUFDSSxPQUFQLENBQWUsaUJBQWYsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVFDLEVBQVI7QUFBQSxxQkFBa0JELEVBQWxCLGNBQXdCQyxFQUFFLENBQUNDLFdBQUgsRUFBeEI7QUFBQSxHQUFsQyxDQUFmO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdZQUMwRVAsSUFEMUUsZ1FBQ2tJLEdBRGxJLEVBRUU7QUFDRSwyQkFBdUIsRUFBRTtBQUN2QlEsWUFBTSxFQUFFQyxzRUFBVyxDQUFDUixPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsK0JBQWdCQSxDQUFoQjtBQUFBLE9BQVosQ0FBRDtBQURJLEtBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1LLEdBTkwsRUFPR1YsT0FBTyxDQUFDVyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLGdCQUFyQixHQUF3QyxVQVAzQyx3REFPZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBoRSx3REFPNkYsR0FQN0YsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLG1KQURGLEVBWUUsTUFBQyxxRUFBRDtBQUNFLFFBQUksRUFBQyxhQURQO0FBRUUsVUFBTSxFQUFDLEtBRlQ7QUFHRSxPQUFHLEVBQUVYLE9BQU8sQ0FBQ1ksTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDZDQUFvQkQsR0FBcEIscUdBQTBCQyxHQUExQixFQUFnQyxLQUFoQztBQUFBLEtBQWYsRUFBeUQsRUFBekQsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FERjtBQW9CRDtLQXhCZWpCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9ib3gtc2l6aW5nLmJmY2IzNDY0YmFjYTMzOGE0YTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdTYW1wbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29uZmlnU2FtcGxlJ1xyXG5pbXBvcnQgeyBjYXN0QXJyYXkgfSBmcm9tICdAL3V0aWxzL2Nhc3RBcnJheSdcclxuaW1wb3J0IHsgam9pbldpdGhBbmQgfSBmcm9tICdAL3V0aWxzL2pvaW5XaXRoQW5kJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERpc2FibGluZyh7IHBsdWdpbiwgbmFtZSB9KSB7XHJcbiAgY29uc3QgcGx1Z2lucyA9IGNhc3RBcnJheShwbHVnaW4pXHJcbiAgbmFtZSA9IG5hbWUgfHwgcGx1Z2luLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IGAke3AxfSAke3AyLnRvTG93ZXJDYXNlKCl9YClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHA+XHJcbiAgICAgINCV0YHQu9C4INCS0Ysg0L3QtSDQv9C70LDQvdC40YDRg9C10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0YHQstC+0LXQvCDQv9GA0L7QtdC60YLQtSDRg9GC0LjQu9C40YLRiyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPIHtuYW1lfSwg0JLRiyDQvNC+0LbQtdGC0LUg0L/QvtC70L3QvtGB0YLRjNGOINC+0YLQutC70Y7Rh9C40YLRjCDQuNGFLCDRg9GB0YLQsNC90L7QstC40LIg0LTQu9GPIHsnICd9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogam9pbldpdGhBbmQocGx1Z2lucy5tYXAoKHApID0+IGA8Y29kZT4ke3B9PC9jb2RlPmApKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz57JyAnfVxyXG4gICAgICAgIHtwbHVnaW5zLmxlbmd0aCA+IDEgPyAn0YXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQuCcgOiAn0YHQstC+0LnRgdGC0LLQvid9INC30L3QsNGH0LXQvdC40LUgPGNvZGU+ZmFsc2U8L2NvZGU+INCyINGA0LDQt9C00LXQu9C1eycgJ31cclxuICAgICAgICA8Y29kZT5jb3JlUGx1Z2luczwvY29kZT4g0JLQsNGI0LXQs9C+INGE0LDQudC70LAg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4OlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8Q29uZmlnU2FtcGxlXHJcbiAgICAgICAgcGF0aD1cImNvcmVQbHVnaW5zXCJcclxuICAgICAgICBiZWZvcmU9XCIuLi5cIlxyXG4gICAgICAgIGFkZD17cGx1Z2lucy5yZWR1Y2UoKGFjYywgY3VyKSA9PiAoeyAuLi5hY2MsIFtjdXJdOiBmYWxzZSB9KSwge30pfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=