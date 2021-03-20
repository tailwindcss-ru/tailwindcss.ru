webpackHotUpdate_N_E("pages/docs/top-right-bottom-left",{

/***/ "./src/components/ClassTable.js":
/*!**************************************!*\
  !*** ./src/components/ClassTable.js ***!
  \**************************************/
/*! exports provided: ClassTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTable", function() { return ClassTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dlv */ "./node_modules/dlv/dist/dlv.umd.js");
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dlv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/defaultConfig */ "./src/utils/defaultConfig.js");
/* harmony import */ var _utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/isObject */ "./src/utils/isObject.js");
/* harmony import */ var _utils_castArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/castArray */ "./src/utils/castArray.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Heading */ "./src/components/Heading.js");
var _this = undefined,
    _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\ClassTable.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var normalizeProperties = function normalizeProperties(input) {
  if (typeof input !== 'object') return input;
  if (Array.isArray(input)) return input.map(normalizeProperties);
  return Object.keys(input).reduce(function (newObj, key) {
    var val = input[key];
    var newVal = typeof val === 'object' ? normalizeProperties(val) : val;
    newObj[key.replace(/([a-z])([A-Z])/g, function (m, p1, p2) {
      return "".concat(p1, "-").concat(p2.toLowerCase());
    })] = newVal;
    return newObj;
  }, {});
};

function getUtilities(plugin) {
  if (!plugin) return {};
  var utilities = {};
  plugin()({
    addUtilities: function addUtilities(utils) {
      utils = Array.isArray(utils) ? utils : [utils];

      for (var i = 0; i < utils.length; i++) {
        for (var prop in utils[i]) {
          utilities[prop] = normalizeProperties(utils[i][prop]);
        }
      }
    },
    config: function config() {
      return {
        future: 'all'
      };
    },
    theme: function theme(path, defaultValue) {
      return dlv__WEBPACK_IMPORTED_MODULE_1___default()(_utils_defaultConfig__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"].theme, path, defaultValue);
    },
    variants: function variants() {
      return [];
    },
    e: function e(x) {
      return x.replace(/([:.])/g, '\\$1');
    },
    corePlugins: function corePlugins() {
      return true;
    }
  });
  return utilities;
}

function stringifyProperties(properties) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? function () {
    return true;
  } : _ref$filter,
      _ref$transformValue = _ref.transformValue,
      transformValue = _ref$transformValue === void 0 ? function (x) {
    return x;
  } : _ref$transformValue,
      _ref$indent = _ref.indent,
      indent = _ref$indent === void 0 ? 0 : _ref$indent;

  var lines = [];
  Object.keys(properties).forEach(function (property) {
    if (Object(_utils_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(properties[property])) {
      lines.push("".concat(property, " {"));
      lines.push(stringifyProperties(properties[property], {
        filter: filter,
        transformValue: transformValue,
        indent: indent + 1
      }));
      lines.push('}');
    } else {
      Object(_utils_castArray__WEBPACK_IMPORTED_MODULE_4__["castArray"])(properties[property]).forEach(function (value, i) {
        if (!filter(property, value, properties)) return;
        lines.push("".concat('  '.repeat(indent)).concat(property, ": ").concat(transformValue(value), ";"));
      });
    }
  });
  return lines.join('\n');
}

var ClassTable = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = function _c(_ref2) {
  var plugin = _ref2.plugin,
      filterProperties = _ref2.filterProperties,
      preview = _ref2.preview,
      _ref2$sort = _ref2.sort,
      sort = _ref2$sort === void 0 ? function (x) {
    return x;
  } : _ref2$sort,
      _ref2$transformSelect = _ref2.transformSelector,
      transformSelector = _ref2$transformSelect === void 0 ? function (x) {
    return x.length === 1 ? x : x.slice(1).replace(/\\/g, '');
  } : _ref2$transformSelect,
      _ref2$transformProper = _ref2.transformProperties,
      transformProperties = _ref2$transformProper === void 0 ? function (_ref3) {
    var properties = _ref3.properties;
    return properties;
  } : _ref2$transformProper,
      transformValue = _ref2.transformValue,
      custom = _ref2.custom;
  var utilities = {};
  Object(_utils_castArray__WEBPACK_IMPORTED_MODULE_4__["castArray"])(plugin).forEach(function (p) {
    Object.assign(utilities, getUtilities(p));
  });
  return __jsx("div", {
    className: "border-b border-gray-200 overflow-hidden relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    level: 2,
    id: "class-reference",
    toc: true,
    className: "relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u043A\u043B\u0430\u0441\u0441\u043E\u0432 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E")), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch', {
      'lg:max-h-sm': Object.keys(utilities).length > 12
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, custom || __jsx("table", {
    className: "w-full text-left border-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: "z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "pb-2 pr-2 border-b border-gray-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "\u041A\u043B\u0430\u0441\u0441")), __jsx("th", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0', {
      'hidden sm:table-cell': preview
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('pb-2 pl-2 border-b border-gray-200', {
      'pr-2': preview
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430")), preview && __jsx("th", {
    className: "z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "pb-2 pl-2 border-b border-gray-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"), "\xA0")))), __jsx("tbody", {
    className: "align-baseline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, sort(Object.keys(utilities)).map(function (utility, i) {
    var selector = utility;
    var properties = utilities[selector];
    return __jsx("tr", {
      key: utility,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, __jsx("td", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap', {
        'border-t border-gray-200': i !== 0
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    }, transformSelector(selector)), __jsx("td", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])('py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre', {
        'border-t border-gray-200': i !== 0,
        'hidden sm:table-cell sm:pr-2': preview
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 23
      }
    }, stringifyProperties(transformProperties({
      selector: selector,
      properties: properties
    }), {
      filter: filterProperties,
      transformValue: transformValue
    })), preview && preview(properties, {
      className: i === 0 ? '' : 'border-t border-gray-200'
    }));
  })))));
});
_c2 = ClassTable;

var _c, _c2;

$RefreshReg$(_c, "ClassTable$memo");
$RefreshReg$(_c2, "ClassTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NUYWJsZS5qcyJdLCJuYW1lcyI6WyJub3JtYWxpemVQcm9wZXJ0aWVzIiwiaW5wdXQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwibmV3T2JqIiwia2V5IiwidmFsIiwibmV3VmFsIiwicmVwbGFjZSIsIm0iLCJwMSIsInAyIiwidG9Mb3dlckNhc2UiLCJnZXRVdGlsaXRpZXMiLCJwbHVnaW4iLCJ1dGlsaXRpZXMiLCJhZGRVdGlsaXRpZXMiLCJ1dGlscyIsImkiLCJsZW5ndGgiLCJwcm9wIiwiY29uZmlnIiwiZnV0dXJlIiwidGhlbWUiLCJwYXRoIiwiZGVmYXVsdFZhbHVlIiwiZGx2IiwiZGVmYXVsdENvbmZpZyIsInZhcmlhbnRzIiwiZSIsIngiLCJjb3JlUGx1Z2lucyIsInN0cmluZ2lmeVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZmlsdGVyIiwidHJhbnNmb3JtVmFsdWUiLCJpbmRlbnQiLCJsaW5lcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImlzT2JqZWN0IiwicHVzaCIsImNhc3RBcnJheSIsInZhbHVlIiwicmVwZWF0Iiwiam9pbiIsIkNsYXNzVGFibGUiLCJtZW1vIiwiZmlsdGVyUHJvcGVydGllcyIsInByZXZpZXciLCJzb3J0IiwidHJhbnNmb3JtU2VsZWN0b3IiLCJzbGljZSIsInRyYW5zZm9ybVByb3BlcnRpZXMiLCJjdXN0b20iLCJwIiwiYXNzaWduIiwiY2xzeCIsInV0aWxpdHkiLCJzZWxlY3RvciIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFVQyxLQUFWLEVBQWlCO0FBQ3pDLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUEr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U0FBUyxDQUFDNEMsUUFBRCxDQUExQjtBQUVBLFdBQ0U7QUFBSSxTQUFHLEVBQUVELE9BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFFRCxvREFBSSxDQUNiLCtEQURhLEVBRWI7QUFDRSxvQ0FBNEJ2QyxDQUFDLEtBQUs7QUFEcEMsT0FGYSxDQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUdpQyxpQkFBaUIsQ0FBQ1EsUUFBRCxDQVJwQixDQURGLEVBV0U7QUFDRSxlQUFTLEVBQUVGLG9EQUFJLENBQ2IsZ0VBRGEsRUFFYjtBQUNFLG9DQUE0QnZDLENBQUMsS0FBSyxDQURwQztBQUVFLHdDQUFnQytCO0FBRmxDLE9BRmEsQ0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNHakIsbUJBQW1CLENBQUNxQixtQkFBbUIsQ0FBQztBQUFFTSxjQUFRLEVBQVJBLFFBQUY7QUFBWTFCLGdCQUFVLEVBQVZBO0FBQVosS0FBRCxDQUFwQixFQUFnRDtBQUNsRUMsWUFBTSxFQUFFYyxnQkFEMEQ7QUFFbEViLG9CQUFjLEVBQWRBO0FBRmtFLEtBQWhELENBVHRCLENBWEYsRUF5QkdjLE9BQU8sSUFDTkEsT0FBTyxDQUFDaEIsVUFBRCxFQUFhO0FBQ2xCMkIsZUFBUyxFQUFFMUMsQ0FBQyxLQUFLLENBQU4sR0FBVSxFQUFWLEdBQWU7QUFEUixLQUFiLENBMUJYLENBREY7QUFnQ0QsR0FwQ0EsQ0FESCxDQTdCRixDQVBKLENBSkYsQ0FERjtBQXFGRCxDQXJHMkIsQ0FBdkI7TUFBTTRCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy90b3AtcmlnaHQtYm90dG9tLWxlZnQuMzdjZDVlNjE1YTAxOGUzNDJmN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkbHYgZnJvbSAnZGx2J1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICdAL3V0aWxzL2RlZmF1bHRDb25maWcnXHJcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnQC91dGlscy9pc09iamVjdCdcclxuaW1wb3J0IHsgY2FzdEFycmF5IH0gZnJvbSAnQC91dGlscy9jYXN0QXJyYXknXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGluZydcclxuXHJcbmxldCBub3JtYWxpemVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ29iamVjdCcpIHJldHVybiBpbnB1dFxyXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkgcmV0dXJuIGlucHV0Lm1hcChub3JtYWxpemVQcm9wZXJ0aWVzKVxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhpbnB1dCkucmVkdWNlKChuZXdPYmosIGtleSkgPT4ge1xyXG4gICAgbGV0IHZhbCA9IGlucHV0W2tleV1cclxuICAgIGxldCBuZXdWYWwgPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IG5vcm1hbGl6ZVByb3BlcnRpZXModmFsKSA6IHZhbFxyXG4gICAgbmV3T2JqW2tleS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAobSwgcDEsIHAyKSA9PiBgJHtwMX0tJHtwMi50b0xvd2VyQ2FzZSgpfWApXSA9IG5ld1ZhbFxyXG4gICAgcmV0dXJuIG5ld09ialxyXG4gIH0sIHt9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVdGlsaXRpZXMocGx1Z2luKSB7XHJcbiAgaWYgKCFwbHVnaW4pIHJldHVybiB7fVxyXG4gIGNvbnN0IHV0aWxpdGllcyA9IHt9XHJcbiAgcGx1Z2luKCkoe1xyXG4gICAgYWRkVXRpbGl0aWVzOiAodXRpbHMpID0+IHtcclxuICAgICAgdXRpbHMgPSBBcnJheS5pc0FycmF5KHV0aWxzKSA/IHV0aWxzIDogW3V0aWxzXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV0aWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB1dGlsc1tpXSkge1xyXG4gICAgICAgICAgdXRpbGl0aWVzW3Byb3BdID0gbm9ybWFsaXplUHJvcGVydGllcyh1dGlsc1tpXVtwcm9wXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb25maWc6ICgpID0+ICh7XHJcbiAgICAgIGZ1dHVyZTogJ2FsbCcsXHJcbiAgICB9KSxcclxuICAgIHRoZW1lOiAocGF0aCwgZGVmYXVsdFZhbHVlKSA9PiBkbHYoZGVmYXVsdENvbmZpZy50aGVtZSwgcGF0aCwgZGVmYXVsdFZhbHVlKSxcclxuICAgIHZhcmlhbnRzOiAoKSA9PiBbXSxcclxuICAgIGU6ICh4KSA9PiB4LnJlcGxhY2UoLyhbOi5dKS9nLCAnXFxcXCQxJyksXHJcbiAgICBjb3JlUGx1Z2luczogKCkgPT4gdHJ1ZSxcclxuICB9KVxyXG4gIHJldHVybiB1dGlsaXRpZXNcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5UHJvcGVydGllcyhcclxuICBwcm9wZXJ0aWVzLFxyXG4gIHsgZmlsdGVyID0gKCkgPT4gdHJ1ZSwgdHJhbnNmb3JtVmFsdWUgPSAoeCkgPT4geCwgaW5kZW50ID0gMCB9ID0ge31cclxuKSB7XHJcbiAgbGV0IGxpbmVzID0gW11cclxuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgaWYgKGlzT2JqZWN0KHByb3BlcnRpZXNbcHJvcGVydHldKSkge1xyXG4gICAgICBsaW5lcy5wdXNoKGAke3Byb3BlcnR5fSB7YClcclxuICAgICAgbGluZXMucHVzaChcclxuICAgICAgICBzdHJpbmdpZnlQcm9wZXJ0aWVzKHByb3BlcnRpZXNbcHJvcGVydHldLCB7IGZpbHRlciwgdHJhbnNmb3JtVmFsdWUsIGluZGVudDogaW5kZW50ICsgMSB9KVxyXG4gICAgICApXHJcbiAgICAgIGxpbmVzLnB1c2goJ30nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FzdEFycmF5KHByb3BlcnRpZXNbcHJvcGVydHldKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICAgIGlmICghZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSwgcHJvcGVydGllcykpIHJldHVyblxyXG4gICAgICAgIGxpbmVzLnB1c2goYCR7JyAgJy5yZXBlYXQoaW5kZW50KX0ke3Byb3BlcnR5fTogJHt0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSl9O2ApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbGluZXMuam9pbignXFxuJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENsYXNzVGFibGUgPSBtZW1vKFxyXG4gICh7XHJcbiAgICBwbHVnaW4sXHJcbiAgICBmaWx0ZXJQcm9wZXJ0aWVzLFxyXG4gICAgcHJldmlldyxcclxuICAgIHNvcnQgPSAoeCkgPT4geCxcclxuICAgIHRyYW5zZm9ybVNlbGVjdG9yID0gKHgpID0+ICh4Lmxlbmd0aCA9PT0gMSA/IHggOiB4LnNsaWNlKDEpLnJlcGxhY2UoL1xcXFwvZywgJycpKSxcclxuICAgIHRyYW5zZm9ybVByb3BlcnRpZXMgPSAoeyBwcm9wZXJ0aWVzIH0pID0+IHByb3BlcnRpZXMsXHJcbiAgICB0cmFuc2Zvcm1WYWx1ZSxcclxuICAgIGN1c3RvbSxcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCB1dGlsaXRpZXMgPSB7fVxyXG4gICAgY2FzdEFycmF5KHBsdWdpbikuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHV0aWxpdGllcywgZ2V0VXRpbGl0aWVzKHApKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cclxuICAgICAgICA8SGVhZGluZyBsZXZlbD17Mn0gaWQ9XCJjbGFzcy1yZWZlcmVuY2VcIiB0b2M9e3RydWV9IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+0KHQv9GA0LDQstC+0YfQvdC40Log0LrQu9Cw0YHRgdC+0LIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y48L3NwYW4+XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgJ292ZXJmbG93LXktYXV0byBzY3JvbGxiYXItdy0yIHNjcm9sbGJhci10cmFjay1ncmF5LWxpZ2h0ZXIgc2Nyb2xsYmFyLXRodW1iLXJvdW5kZWQgc2Nyb2xsYmFyLXRodW1iLWdyYXkgc2Nyb2xsaW5nLXRvdWNoJyxcclxuICAgICAgICAgICAgeyAnbGc6bWF4LWgtc20nOiBPYmplY3Qua2V5cyh1dGlsaXRpZXMpLmxlbmd0aCA+IDEyIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2N1c3RvbSB8fCAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IGJvcmRlci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInotMjAgc3RpY2t5IHRvcC0wIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJnLXdoaXRlIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBwci0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPtCa0LvQsNGB0YE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ3otMjAgc3RpY2t5IHRvcC0wIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNjAwIGJnLXdoaXRlIHAtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoaWRkZW4gc206dGFibGUtY2VsbCc6IHByZXZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncGItMiBwbC0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCcsIHsgJ3ByLTInOiBwcmV2aWV3IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINCh0LLQvtC50YHRgtCy0LBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ6LTIwIHN0aWNreSB0b3AtMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBiZy13aGl0ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBwbC0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+0J/RgNC10LTQv9GA0L7RgdC80L7RgtGAPC9zcGFuPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYWxpZ24tYmFzZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIHtzb3J0KE9iamVjdC5rZXlzKHV0aWxpdGllcykpLm1hcCgodXRpbGl0eSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSB1dGlsaXR5XHJcbiAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdXRpbGl0aWVzW3NlbGVjdG9yXVxyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt1dGlsaXR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3B5LTIgcHItMiBmb250LW1vbm8gdGV4dC14cyB0ZXh0LXZpb2xldC02MDAgd2hpdGVzcGFjZS1ub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItdCBib3JkZXItZ3JheS0yMDAnOiBpICE9PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zZm9ybVNlbGVjdG9yKHNlbGVjdG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweS0yIHBsLTIgZm9udC1tb25vIHRleHQteHMgdGV4dC1saWdodC1ibHVlLTYwMCB3aGl0ZXNwYWNlLXByZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci10IGJvcmRlci1ncmF5LTIwMCc6IGkgIT09IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaGlkZGVuIHNtOnRhYmxlLWNlbGwgc206cHItMic6IHByZXZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5naWZ5UHJvcGVydGllcyh0cmFuc2Zvcm1Qcm9wZXJ0aWVzKHsgc2VsZWN0b3IsIHByb3BlcnRpZXMgfSksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGZpbHRlclByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcmV2aWV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXcocHJvcGVydGllcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaSA9PT0gMCA/ICcnIDogJ2JvcmRlci10IGJvcmRlci1ncmF5LTIwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==