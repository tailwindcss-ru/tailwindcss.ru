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
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ", name, ", \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0445, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430", ' ', __jsx("span", {
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
  }), ' ', plugins.length > 1 ? 'properties' : 'property', " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 67
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlzYWJsaW5nLmpzIl0sIm5hbWVzIjpbIkRpc2FibGluZyIsInBsdWdpbiIsIm5hbWUiLCJwbHVnaW5zIiwiY2FzdEFycmF5IiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJfX2h0bWwiLCJqb2luV2l0aEFuZCIsIm1hcCIsInAiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBcUM7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFDLE1BQU1DLE9BQU8sR0FBR0Msa0VBQVMsQ0FBQ0gsTUFBRCxDQUF6QjtBQUNBQyxNQUFJLEdBQUdBLElBQUksSUFBSUQsTUFBTSxDQUFDSSxPQUFQLENBQWUsaUJBQWYsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVFDLEVBQVI7QUFBQSxxQkFBa0JELEVBQWxCLGNBQXdCQyxFQUFFLENBQUNDLFdBQUgsRUFBeEI7QUFBQSxHQUFsQyxDQUFmO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdZQUMwRVAsSUFEMUUsZ1RBQzBJLEdBRDFJLEVBRUU7QUFDRSwyQkFBdUIsRUFBRTtBQUN2QlEsWUFBTSxFQUFFQyxzRUFBVyxDQUFDUixPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsK0JBQWdCQSxDQUFoQjtBQUFBLE9BQVosQ0FBRDtBQURJLEtBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1LLEdBTkwsRUFPR1YsT0FBTyxDQUFDVyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLFlBQXJCLEdBQW9DLFVBUHZDLHdEQU80RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUDVELHdEQU95RixHQVB6RixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsbUpBREYsRUFZRSxNQUFDLHFFQUFEO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxVQUFNLEVBQUMsS0FGVDtBQUdFLE9BQUcsRUFBRVgsT0FBTyxDQUFDWSxNQUFSLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsNkNBQW9CRCxHQUFwQixxR0FBMEJDLEdBQTFCLEVBQWdDLEtBQWhDO0FBQUEsS0FBZixFQUF5RCxFQUF6RCxDQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGO0FBb0JEO0tBeEJlakIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL2JveC1zaXppbmcuNTc1YjIzNGY5Yzk5ZWJlZTI0OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ1NhbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Db25maWdTYW1wbGUnXHJcbmltcG9ydCB7IGNhc3RBcnJheSB9IGZyb20gJ0AvdXRpbHMvY2FzdEFycmF5J1xyXG5pbXBvcnQgeyBqb2luV2l0aEFuZCB9IGZyb20gJ0AvdXRpbHMvam9pbldpdGhBbmQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlzYWJsaW5nKHsgcGx1Z2luLCBuYW1lIH0pIHtcclxuICBjb25zdCBwbHVnaW5zID0gY2FzdEFycmF5KHBsdWdpbilcclxuICBuYW1lID0gbmFtZSB8fCBwbHVnaW4ucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgKG0sIHAxLCBwMikgPT4gYCR7cDF9ICR7cDIudG9Mb3dlckNhc2UoKX1gKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9zZVwiPlxyXG4gICAgICA8cD5cclxuICAgICAg0JXRgdC70Lgg0JLRiyDQvdC1INC/0LvQsNC90LjRgNGD0LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDRgdCy0L7QtdC8INC/0YDQvtC10LrRgtC1INGD0YLQuNC70LjRgtGLINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8ge25hbWV9LCDQktGLINC80L7QttC10YLQtSDQv9C+0LvQvdC+0YHRgtGM0Y4g0L7RgtC60LvRjtGH0LjRgtGMINC40YUsINGD0YHRgtCw0L3QvtCy0LjQsiDQtNC70Y8g0YHQstC+0LnRgdGC0LLQsHsnICd9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogam9pbldpdGhBbmQocGx1Z2lucy5tYXAoKHApID0+IGA8Y29kZT4ke3B9PC9jb2RlPmApKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz57JyAnfVxyXG4gICAgICAgIHtwbHVnaW5zLmxlbmd0aCA+IDEgPyAncHJvcGVydGllcycgOiAncHJvcGVydHknfSDQt9C90LDRh9C10L3QuNC1IDxjb2RlPmZhbHNlPC9jb2RlPiDQsiDRgNCw0LfQtNC10LvQtXsnICd9XHJcbiAgICAgICAgPGNvZGU+Y29yZVBsdWdpbnM8L2NvZGU+INCS0LDRiNC10LPQviDRhNCw0LnQu9CwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuDpcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPENvbmZpZ1NhbXBsZVxyXG4gICAgICAgIHBhdGg9XCJjb3JlUGx1Z2luc1wiXHJcbiAgICAgICAgYmVmb3JlPVwiLi4uXCJcclxuICAgICAgICBhZGQ9e3BsdWdpbnMucmVkdWNlKChhY2MsIGN1cikgPT4gKHsgLi4uYWNjLCBbY3VyXTogZmFsc2UgfSksIHt9KX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9