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
  }, "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0443\u0442\u0438\u043B\u0438\u0442\u044B \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ", name, ", you can disable them entirely by setting the", ' ', __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_4__["joinWithAnd"])(plugins.map(function (p) {
        return "<code>".concat(p, "</code>");
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), ' ', plugins.length > 1 ? 'properties' : 'property', " to ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 61
    }
  }, "false"), " in the", ' ', __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "corePlugins"), " section of your config file:"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_2__["ConfigSample"], {
    path: "corePlugins",
    before: "...",
    add: plugins.reduce(function (acc, cur) {
      return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cur, false));
    }, {}),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlzYWJsaW5nLmpzIl0sIm5hbWVzIjpbIkRpc2FibGluZyIsInBsdWdpbiIsIm5hbWUiLCJwbHVnaW5zIiwiY2FzdEFycmF5IiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJfX2h0bWwiLCJqb2luV2l0aEFuZCIsIm1hcCIsInAiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBcUM7QUFBQSxNQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFDLE1BQU1DLE9BQU8sR0FBR0Msa0VBQVMsQ0FBQ0gsTUFBRCxDQUF6QjtBQUNBQyxNQUFJLEdBQUdBLElBQUksSUFBSUQsTUFBTSxDQUFDSSxPQUFQLENBQWUsaUJBQWYsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVFDLEVBQVI7QUFBQSxxQkFBa0JELEVBQWxCLGNBQXdCQyxFQUFFLENBQUNDLFdBQUgsRUFBeEI7QUFBQSxHQUFsQyxDQUFmO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdZQUMwRVAsSUFEMUUsb0RBRWlCLEdBRmpCLEVBR0U7QUFDRSwyQkFBdUIsRUFBRTtBQUN2QlEsWUFBTSxFQUFFQyxzRUFBVyxDQUFDUixPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxDQUFEO0FBQUEsK0JBQWdCQSxDQUFoQjtBQUFBLE9BQVosQ0FBRDtBQURJLEtBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQU9LLEdBUEwsRUFRR1YsT0FBTyxDQUFDVyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLFlBQXJCLEdBQW9DLFVBUnZDLFVBUXNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSdEQsYUFRZ0YsR0FSaEYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGtDQURGLEVBYUUsTUFBQyxxRUFBRDtBQUNFLFFBQUksRUFBQyxhQURQO0FBRUUsVUFBTSxFQUFDLEtBRlQ7QUFHRSxPQUFHLEVBQUVYLE9BQU8sQ0FBQ1ksTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDZDQUFvQkQsR0FBcEIscUdBQTBCQyxHQUExQixFQUFnQyxLQUFoQztBQUFBLEtBQWYsRUFBeUQsRUFBekQsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FERjtBQXFCRDtLQXpCZWpCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9ib3gtc2l6aW5nLjUxY2ExMmVlZWI1MTY1NWUwMWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdTYW1wbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29uZmlnU2FtcGxlJ1xyXG5pbXBvcnQgeyBjYXN0QXJyYXkgfSBmcm9tICdAL3V0aWxzL2Nhc3RBcnJheSdcclxuaW1wb3J0IHsgam9pbldpdGhBbmQgfSBmcm9tICdAL3V0aWxzL2pvaW5XaXRoQW5kJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERpc2FibGluZyh7IHBsdWdpbiwgbmFtZSB9KSB7XHJcbiAgY29uc3QgcGx1Z2lucyA9IGNhc3RBcnJheShwbHVnaW4pXHJcbiAgbmFtZSA9IG5hbWUgfHwgcGx1Z2luLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IGAke3AxfSAke3AyLnRvTG93ZXJDYXNlKCl9YClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cclxuICAgICAgPHA+XHJcbiAgICAgINCV0YHQu9C4INCy0Ysg0L3QtSDQv9C70LDQvdC40YDRg9C10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0YHQstC+0LXQvCDQv9GA0L7QtdC60YLQtSDRg9GC0LjQu9C40YLRiyDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPIHtuYW1lfSwgeW91IGNhbiBkaXNhYmxlIHRoZW0gZW50aXJlbHlcclxuICAgICAgICBieSBzZXR0aW5nIHRoZXsnICd9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogam9pbldpdGhBbmQocGx1Z2lucy5tYXAoKHApID0+IGA8Y29kZT4ke3B9PC9jb2RlPmApKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz57JyAnfVxyXG4gICAgICAgIHtwbHVnaW5zLmxlbmd0aCA+IDEgPyAncHJvcGVydGllcycgOiAncHJvcGVydHknfSB0byA8Y29kZT5mYWxzZTwvY29kZT4gaW4gdGhleycgJ31cclxuICAgICAgICA8Y29kZT5jb3JlUGx1Z2luczwvY29kZT4gc2VjdGlvbiBvZiB5b3VyIGNvbmZpZyBmaWxlOlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8Q29uZmlnU2FtcGxlXHJcbiAgICAgICAgcGF0aD1cImNvcmVQbHVnaW5zXCJcclxuICAgICAgICBiZWZvcmU9XCIuLi5cIlxyXG4gICAgICAgIGFkZD17cGx1Z2lucy5yZWR1Y2UoKGFjYywgY3VyKSA9PiAoeyAuLi5hY2MsIFtjdXJdOiBmYWxzZSB9KSwge30pfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=