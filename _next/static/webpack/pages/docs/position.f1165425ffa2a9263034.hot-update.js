webpackHotUpdate_N_E("pages/docs/position",{

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
  }, "Properties")), preview && __jsx("th", {
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

/***/ }),

/***/ "./src/layouts/ContentsLayout.js":
/*!***************************************!*\
  !*** ./src/layouts/ContentsLayout.js ***!
  \***************************************/
/*! exports provided: ContentsContext, ContentsLayoutOuter, ContentsLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsContext", function() { return ContentsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsLayoutOuter", function() { return ContentsLayoutOuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsLayout", function() { return ContentsLayout; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ClassTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ClassTable */ "./src/components/ClassTable.js");
/* harmony import */ var _hooks_usePrevNext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/usePrevNext */ "./src/hooks/usePrevNext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/SidebarLayout */ "./src/layouts/SidebarLayout.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");




var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\layouts\\ContentsLayout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var ContentsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();

function TableOfContents(_ref) {
  _s();

  var _this = this;

  var tableOfContents = _ref.tableOfContents,
      currentSection = _ref.currentSection;
  var sidebarContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_7__["SidebarContext"]);
  var isMainNav = Boolean(sidebarContext);

  function closeNav() {
    if (isMainNav) {
      sidebarContext.setNavIsOpen(false);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h5", {
    className: "text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "\u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435"), __jsx("ul", {
    className: "overflow-x-hidden text-gray-500 font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, tableOfContents.map(function (section) {
    var sectionIsActive = currentSection === section.slug || section.children.findIndex(function (_ref2) {
      var slug = _ref2.slug;
      return slug === currentSection;
    }) > -1;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      key: section.slug,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "#".concat(section.slug),
      onClick: closeNav,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('block transform transition-colors duration-200 py-2 hover:text-gray-900', {
        'text-gray-900': sectionIsActive
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, section.title)), section.children.map(function (subsection) {
      var subsectionIsActive = currentSection === subsection.slug;
      return __jsx("li", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])({
          'ml-4': isMainNav,
          'ml-2': !isMainNav
        }),
        key: subsection.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: "#".concat(subsection.slug),
        onClick: closeNav,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])('block py-2 transition-colors duration-200 hover:text-gray-900 font-medium', {
          'text-gray-900': subsectionIsActive
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, subsection.title));
    }));
  })));
}

_s(TableOfContents, "ylJWv5OjNXm/fShIxf55en5nH4o=");

_c = TableOfContents;

function useTableOfContents(tableOfContents) {
  _s2();

  var _tableOfContents$;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])((_tableOfContents$ = tableOfContents[0]) === null || _tableOfContents$ === void 0 ? void 0 : _tableOfContents$.slug),
      currentSection = _useState[0],
      setCurrentSection = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      headings = _useState2[0],
      setHeadings = _useState2[1];

  var registerHeading = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (id, top) {
    setHeadings(function (headings) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(headings.filter(function (h) {
        return id !== h.id;
      })), [{
        id: id,
        top: top
      }]);
    });
  }, []);
  var unregisterHeading = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (id) {
    setHeadings(function (headings) {
      return headings.filter(function (h) {
        return id !== h.id;
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (tableOfContents.length === 0 || headings.length === 0) return;

    function onScroll() {
      var y = window.pageYOffset;
      var windowHeight = window.innerHeight;
      var sortedHeadings = headings.concat([]).sort(function (a, b) {
        return a.top - b.top;
      });

      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id);
        return;
      }

      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id);
        return;
      }

      var middle = y + windowHeight / 2;
      var current = sortedHeadings[0].id;

      for (var i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }

      setCurrentSection(current);
    }

    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true
    });
    onScroll();
    return function () {
      return window.removeEventListener('scroll', onScroll, true);
    };
  }, [headings, tableOfContents]);
  return {
    currentSection: currentSection,
    registerHeading: registerHeading,
    unregisterHeading: unregisterHeading
  };
}

_s2(useTableOfContents, "omP4XtVx1vDQ0DIyW7F7E68XVEA=");

function ContentsLayoutOuter(_ref3) {
  _s3();

  var children = _ref3.children,
      layoutProps = _ref3.layoutProps,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["children", "layoutProps"]);

  var _useTableOfContents = useTableOfContents(layoutProps.tableOfContents),
      currentSection = _useTableOfContents.currentSection,
      registerHeading = _useTableOfContents.registerHeading,
      unregisterHeading = _useTableOfContents.unregisterHeading;

  return __jsx(_layouts_SidebarLayout__WEBPACK_IMPORTED_MODULE_7__["SidebarLayout"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    sidebar: __jsx("div", {
      className: "mb-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, __jsx(TableOfContents, {
      tableOfContents: layoutProps.tableOfContents,
      currentSection: currentSection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }))
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }), __jsx(ContentsContext.Provider, {
    value: {
      registerHeading: registerHeading,
      unregisterHeading: unregisterHeading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, children));
}

_s3(ContentsLayoutOuter, "51We/xQ/ASc08MCMxoGE1DBsx3k=", false, function () {
  return [useTableOfContents];
});

_c2 = ContentsLayoutOuter;
function ContentsLayout(_ref4) {
  _s4();

  var children = _ref4.children,
      meta = _ref4.meta,
      classes = _ref4.classes,
      tableOfContents = _ref4.tableOfContents;
  var toc = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(classes ? [{
    title: 'Справочник классов по умолчанию',
    slug: 'class-reference',
    children: []
  }] : []), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(tableOfContents));

  var _useTableOfContents2 = useTableOfContents(toc),
      currentSection = _useTableOfContents2.currentSection,
      registerHeading = _useTableOfContents2.registerHeading,
      unregisterHeading = _useTableOfContents2.unregisterHeading;

  var _usePrevNext = Object(_hooks_usePrevNext__WEBPACK_IMPORTED_MODULE_5__["usePrevNext"])(),
      prev = _usePrevNext.prev,
      next = _usePrevNext.next;

  return __jsx("div", {
    id: meta.containerId,
    className: "w-full flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: meta.title,
    description: meta.description,
    badge: {
      key: 'Tailwind CSS version',
      value: meta.featureVersion
    },
    border: !classes && meta.headerSeparator !== false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }), __jsx(ContentsContext.Provider, {
    value: {
      registerHeading: registerHeading,
      unregisterHeading: unregisterHeading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, classes && __jsx(_components_ClassTable__WEBPACK_IMPORTED_MODULE_4__["ClassTable"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(classes) ? {
    custom: classes
  } : classes, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  })), children)), (prev || next) && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("hr", {
    className: "border-gray-200 mt-10 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "flex leading-6 font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, prev && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: prev.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "flex mr-8 transition-colors duration-200 hover:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, "\u2190"), prev.shortTitle || prev.title)), next && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: next.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "flex text-right ml-auto transition-colors duration-200 hover:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, next.shortTitle || next.title, __jsx("span", {
    "aria-hidden": "true",
    className: "ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, "\u2192")))))), __jsx("div", {
    className: "hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pb-6 top-18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, toc.length > 0 && __jsx("div", {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx(TableOfContents, {
    tableOfContents: toc,
    currentSection: currentSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  })))));
}

_s4(ContentsLayout, "7R5k4v1rWbzaHnF3bK+f9hg0fEU=", false, function () {
  return [useTableOfContents, _hooks_usePrevNext__WEBPACK_IMPORTED_MODULE_5__["usePrevNext"]];
});

_c3 = ContentsLayout;

var _c, _c2, _c3;

$RefreshReg$(_c, "TableOfContents");
$RefreshReg$(_c2, "ContentsLayoutOuter");
$RefreshReg$(_c3, "ContentsLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2xhc3NUYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvQ29udGVudHNMYXlvdXQuanMiXSwibmFtZXMiOlsibm9ybWFsaXplUHJvcGVydGllcyIsImlucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm5ld09iaiIsImtleSIsInZhbCIsIm5ld1ZhbCIsInJlcGxhY2UiLCJtIiwicDEiLCJwMiIsInRvTG93ZXJDYXNlIiwiZ2V0VXRpbGl0aWVzIiwicGx1Z2luIiwidXRpbGl0aWVzIiwiYWRkVXRpbGl0aWVzIiwidXRpbHMiLCJpIiwibGVuZ3RoIiwicHJvcCIsImNvbmZpZyIsImZ1dHVyZSIsInRoZW1lIiwicGF0aCIsImRlZmF1bHRWYWx1ZSIsImRsdiIsImRlZmF1bHRDb25maWciLCJ2YXJpYW50cyIsImUiLCJ4IiwiY29yZVBsdWdpbnMiLCJzdHJpbmdpZnlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImZpbHRlciIsInRyYW5zZm9ybVZhbHVlIiwiaW5kZW50IiwibGluZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJpc09iamVjdCIsInB1c2giLCJjYXN0QXJyYXkiLCJ2YWx1ZSIsInJlcGVhdCIsImpvaW4iLCJDbGFzc1RhYmxlIiwibWVtbyIsImZpbHRlclByb3BlcnRpZXMiLCJwcmV2aWV3Iiwic29ydCIsInRyYW5zZm9ybVNlbGVjdG9yIiwic2xpY2UiLCJ0cmFuc2Zvcm1Qcm9wZXJ0aWVzIiwiY3VzdG9tIiwicCIsImFzc2lnbiIsImNsc3giLCJ1dGlsaXR5Iiwic2VsZWN0b3IiLCJjbGFzc05hbWUiLCJDb250ZW50c0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVGFibGVPZkNvbnRlbnRzIiwidGFibGVPZkNvbnRlbnRzIiwiY3VycmVudFNlY3Rpb24iLCJzaWRlYmFyQ29udGV4dCIsInVzZUNvbnRleHQiLCJTaWRlYmFyQ29udGV4dCIsImlzTWFpbk5hdiIsIkJvb2xlYW4iLCJjbG9zZU5hdiIsInNldE5hdklzT3BlbiIsInNlY3Rpb24iLCJzZWN0aW9uSXNBY3RpdmUiLCJzbHVnIiwiY2hpbGRyZW4iLCJmaW5kSW5kZXgiLCJ0aXRsZSIsInN1YnNlY3Rpb24iLCJzdWJzZWN0aW9uSXNBY3RpdmUiLCJ1c2VUYWJsZU9mQ29udGVudHMiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRTZWN0aW9uIiwiaGVhZGluZ3MiLCJzZXRIZWFkaW5ncyIsInJlZ2lzdGVySGVhZGluZyIsInVzZUNhbGxiYWNrIiwiaWQiLCJ0b3AiLCJoIiwidW5yZWdpc3RlckhlYWRpbmciLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsInkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0Iiwic29ydGVkSGVhZGluZ3MiLCJjb25jYXQiLCJhIiwiYiIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIm1pZGRsZSIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29udGVudHNMYXlvdXRPdXRlciIsImxheW91dFByb3BzIiwicHJvcHMiLCJDb250ZW50c0xheW91dCIsIm1ldGEiLCJjbGFzc2VzIiwidG9jIiwidXNlUHJldk5leHQiLCJwcmV2IiwibmV4dCIsImNvbnRhaW5lcklkIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlVmVyc2lvbiIsImhlYWRlclNlcGFyYXRvciIsImlzVmFsaWRFbGVtZW50IiwiaHJlZiIsInNob3J0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBVUMsS0FBVixFQUFpQjtBQUN6QyxNQUFJLE9BQU9BLEtBQVAsS0FB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QUFJLENBQUNPLFVBQUwsSUFBbUJQLElBQUksQ0FBQzNDLEtBRDNCLEVBRUU7QUFBTSxtQkFBWSxNQUFsQjtBQUF5QixhQUFTLEVBQUMsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBREYsQ0FaSixDQUZGLENBaEJKLENBREYsRUE0Q0U7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDBGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3dDLEdBQUcsQ0FBQ25HLE1BQUosR0FBYSxDQUFiLElBQ0M7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQWlCLG1CQUFlLEVBQUVtRyxHQUFsQztBQUF1QyxrQkFBYyxFQUFFckQsY0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosQ0FERixDQTVDRixDQURGO0FBd0REOztJQW5FZWtELGM7VUFRaURsQyxrQixFQUMxQ3NDLDhEOzs7TUFUUEosYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3Bvc2l0aW9uLmYxMTY1NDI1ZmZhMmE5MjYzMDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGx2IGZyb20gJ2RsdidcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnQC91dGlscy9kZWZhdWx0Q29uZmlnJ1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ0AvdXRpbHMvaXNPYmplY3QnXHJcbmltcG9ydCB7IGNhc3RBcnJheSB9IGZyb20gJ0AvdXRpbHMvY2FzdEFycmF5J1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQC9jb21wb25lbnRzL0hlYWRpbmcnXHJcblxyXG5sZXQgbm9ybWFsaXplUHJvcGVydGllcyA9IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdvYmplY3QnKSByZXR1cm4gaW5wdXRcclxuICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHJldHVybiBpbnB1dC5tYXAobm9ybWFsaXplUHJvcGVydGllcylcclxuICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpLnJlZHVjZSgobmV3T2JqLCBrZXkpID0+IHtcclxuICAgIGxldCB2YWwgPSBpbnB1dFtrZXldXHJcbiAgICBsZXQgbmV3VmFsID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyBub3JtYWxpemVQcm9wZXJ0aWVzKHZhbCkgOiB2YWxcclxuICAgIG5ld09ialtrZXkucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgKG0sIHAxLCBwMikgPT4gYCR7cDF9LSR7cDIudG9Mb3dlckNhc2UoKX1gKV0gPSBuZXdWYWxcclxuICAgIHJldHVybiBuZXdPYmpcclxuICB9LCB7fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXRpbGl0aWVzKHBsdWdpbikge1xyXG4gIGlmICghcGx1Z2luKSByZXR1cm4ge31cclxuICBjb25zdCB1dGlsaXRpZXMgPSB7fVxyXG4gIHBsdWdpbigpKHtcclxuICAgIGFkZFV0aWxpdGllczogKHV0aWxzKSA9PiB7XHJcbiAgICAgIHV0aWxzID0gQXJyYXkuaXNBcnJheSh1dGlscykgPyB1dGlscyA6IFt1dGlsc11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1dGlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdXRpbHNbaV0pIHtcclxuICAgICAgICAgIHV0aWxpdGllc1twcm9wXSA9IG5vcm1hbGl6ZVByb3BlcnRpZXModXRpbHNbaV1bcHJvcF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29uZmlnOiAoKSA9PiAoe1xyXG4gICAgICBmdXR1cmU6ICdhbGwnLFxyXG4gICAgfSksXHJcbiAgICB0aGVtZTogKHBhdGgsIGRlZmF1bHRWYWx1ZSkgPT4gZGx2KGRlZmF1bHRDb25maWcudGhlbWUsIHBhdGgsIGRlZmF1bHRWYWx1ZSksXHJcbiAgICB2YXJpYW50czogKCkgPT4gW10sXHJcbiAgICBlOiAoeCkgPT4geC5yZXBsYWNlKC8oWzouXSkvZywgJ1xcXFwkMScpLFxyXG4gICAgY29yZVBsdWdpbnM6ICgpID0+IHRydWUsXHJcbiAgfSlcclxuICByZXR1cm4gdXRpbGl0aWVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVByb3BlcnRpZXMoXHJcbiAgcHJvcGVydGllcyxcclxuICB7IGZpbHRlciA9ICgpID0+IHRydWUsIHRyYW5zZm9ybVZhbHVlID0gKHgpID0+IHgsIGluZGVudCA9IDAgfSA9IHt9XHJcbikge1xyXG4gIGxldCBsaW5lcyA9IFtdXHJcbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgIGlmIChpc09iamVjdChwcm9wZXJ0aWVzW3Byb3BlcnR5XSkpIHtcclxuICAgICAgbGluZXMucHVzaChgJHtwcm9wZXJ0eX0ge2ApXHJcbiAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgc3RyaW5naWZ5UHJvcGVydGllcyhwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgeyBmaWx0ZXIsIHRyYW5zZm9ybVZhbHVlLCBpbmRlbnQ6IGluZGVudCArIDEgfSlcclxuICAgICAgKVxyXG4gICAgICBsaW5lcy5wdXNoKCd9JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhc3RBcnJheShwcm9wZXJ0aWVzW3Byb3BlcnR5XSkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICBpZiAoIWZpbHRlcihwcm9wZXJ0eSwgdmFsdWUsIHByb3BlcnRpZXMpKSByZXR1cm5cclxuICAgICAgICBsaW5lcy5wdXNoKGAkeycgICcucmVwZWF0KGluZGVudCl9JHtwcm9wZXJ0eX06ICR7dHJhbnNmb3JtVmFsdWUodmFsdWUpfTtgKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDbGFzc1RhYmxlID0gbWVtbyhcclxuICAoe1xyXG4gICAgcGx1Z2luLFxyXG4gICAgZmlsdGVyUHJvcGVydGllcyxcclxuICAgIHByZXZpZXcsXHJcbiAgICBzb3J0ID0gKHgpID0+IHgsXHJcbiAgICB0cmFuc2Zvcm1TZWxlY3RvciA9ICh4KSA9PiAoeC5sZW5ndGggPT09IDEgPyB4IDogeC5zbGljZSgxKS5yZXBsYWNlKC9cXFxcL2csICcnKSksXHJcbiAgICB0cmFuc2Zvcm1Qcm9wZXJ0aWVzID0gKHsgcHJvcGVydGllcyB9KSA9PiBwcm9wZXJ0aWVzLFxyXG4gICAgdHJhbnNmb3JtVmFsdWUsXHJcbiAgICBjdXN0b20sXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgdXRpbGl0aWVzID0ge31cclxuICAgIGNhc3RBcnJheShwbHVnaW4pLmZvckVhY2goKHApID0+IHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih1dGlsaXRpZXMsIGdldFV0aWxpdGllcyhwKSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPEhlYWRpbmcgbGV2ZWw9ezJ9IGlkPVwiY2xhc3MtcmVmZXJlbmNlXCIgdG9jPXt0cnVlfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPtCh0L/RgNCw0LLQvtGH0L3QuNC6INC60LvQsNGB0YHQvtCyINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOPC9zcGFuPlxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICdvdmVyZmxvdy15LWF1dG8gc2Nyb2xsYmFyLXctMiBzY3JvbGxiYXItdHJhY2stZ3JheS1saWdodGVyIHNjcm9sbGJhci10aHVtYi1yb3VuZGVkIHNjcm9sbGJhci10aHVtYi1ncmF5IHNjcm9sbGluZy10b3VjaCcsXHJcbiAgICAgICAgICAgIHsgJ2xnOm1heC1oLXNtJzogT2JqZWN0LmtleXModXRpbGl0aWVzKS5sZW5ndGggPiAxMiB9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjdXN0b20gfHwgKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBib3JkZXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ6LTIwIHN0aWNreSB0b3AtMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBiZy13aGl0ZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgcHItMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj7QmtC70LDRgdGBPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICd6LTIwIHN0aWNreSB0b3AtMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTYwMCBiZy13aGl0ZSBwLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGlkZGVuIHNtOnRhYmxlLWNlbGwnOiBwcmV2aWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3BiLTIgcGwtMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAnLCB7ICdwci0yJzogcHJldmlldyB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiei0yMCBzdGlja3kgdG9wLTAgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgYmctd2hpdGUgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTIgcGwtMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPtCf0YDQtdC00L/RgNC+0YHQvNC+0YLRgDwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImFsaWduLWJhc2VsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICB7c29ydChPYmplY3Qua2V5cyh1dGlsaXRpZXMpKS5tYXAoKHV0aWxpdHksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gdXRpbGl0eVxyXG4gICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHV0aWxpdGllc1tzZWxlY3Rvcl1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17dXRpbGl0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdweS0yIHByLTIgZm9udC1tb25vIHRleHQteHMgdGV4dC12aW9sZXQtNjAwIHdoaXRlc3BhY2Utbm93cmFwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwJzogaSAhPT0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2Zvcm1TZWxlY3RvcihzZWxlY3Rvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAncHktMiBwbC0yIGZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtbGlnaHQtYmx1ZS02MDAgd2hpdGVzcGFjZS1wcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItdCBib3JkZXItZ3JheS0yMDAnOiBpICE9PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hpZGRlbiBzbTp0YWJsZS1jZWxsIHNtOnByLTInOiBwcmV2aWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ2lmeVByb3BlcnRpZXModHJhbnNmb3JtUHJvcGVydGllcyh7IHNlbGVjdG9yLCBwcm9wZXJ0aWVzIH0pLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJldmlldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3KHByb3BlcnRpZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGkgPT09IDAgPyAnJyA6ICdib3JkZXItdCBib3JkZXItZ3JheS0yMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4pXHJcbiIsImltcG9ydCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgRnJhZ21lbnQsXHJcbiAgdXNlQ2FsbGJhY2ssXHJcbiAgaXNWYWxpZEVsZW1lbnQsXHJcbiAgdXNlQ29udGV4dCxcclxufSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2xhc3NUYWJsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9DbGFzc1RhYmxlJ1xyXG5pbXBvcnQgeyB1c2VQcmV2TmV4dCB9IGZyb20gJ0AvaG9va3MvdXNlUHJldk5leHQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgU2lkZWJhckxheW91dCwgU2lkZWJhckNvbnRleHQgfSBmcm9tICdAL2xheW91dHMvU2lkZWJhckxheW91dCdcclxuaW1wb3J0IHsgUGFnZUhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9QYWdlSGVhZGVyJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZnVuY3Rpb24gVGFibGVPZkNvbnRlbnRzKHsgdGFibGVPZkNvbnRlbnRzLCBjdXJyZW50U2VjdGlvbiB9KSB7XHJcbiAgbGV0IHNpZGViYXJDb250ZXh0ID0gdXNlQ29udGV4dChTaWRlYmFyQ29udGV4dClcclxuICBsZXQgaXNNYWluTmF2ID0gQm9vbGVhbihzaWRlYmFyQ29udGV4dClcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VOYXYoKSB7XHJcbiAgICBpZiAoaXNNYWluTmF2KSB7XHJcbiAgICAgIHNpZGViYXJDb250ZXh0LnNldE5hdklzT3BlbihmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIG1iLTMgdGV4dC1zbSBsZzp0ZXh0LXhzXCI+XHJcbiAgICAgICAgICDQndCwINGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0LVcclxuICAgICAgPC9oNT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIHRleHQtZ3JheS01MDAgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICB7dGFibGVPZkNvbnRlbnRzLm1hcCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgbGV0IHNlY3Rpb25Jc0FjdGl2ZSA9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uID09PSBzZWN0aW9uLnNsdWcgfHxcclxuICAgICAgICAgICAgc2VjdGlvbi5jaGlsZHJlbi5maW5kSW5kZXgoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSBjdXJyZW50U2VjdGlvbikgPiAtMVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e3NlY3Rpb24uc2x1Z30+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3NlY3Rpb24uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU5hdn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9jayB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHB5LTIgaG92ZXI6dGV4dC1ncmF5LTkwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS05MDAnOiBzZWN0aW9uSXNBY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtzZWN0aW9uLmNoaWxkcmVuLm1hcCgoc3Vic2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YnNlY3Rpb25Jc0FjdGl2ZSA9IGN1cnJlbnRTZWN0aW9uID09PSBzdWJzZWN0aW9uLnNsdWdcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ21sLTQnOiBpc01haW5OYXYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnbWwtMic6ICFpc01haW5OYXYsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJzZWN0aW9uLnNsdWd9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke3N1YnNlY3Rpb24uc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VOYXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvbnQtbWVkaXVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktOTAwJzogc3Vic2VjdGlvbklzQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJzZWN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlVGFibGVPZkNvbnRlbnRzKHRhYmxlT2ZDb250ZW50cykge1xyXG4gIGxldCBbY3VycmVudFNlY3Rpb24sIHNldEN1cnJlbnRTZWN0aW9uXSA9IHVzZVN0YXRlKHRhYmxlT2ZDb250ZW50c1swXT8uc2x1ZylcclxuICBsZXQgW2hlYWRpbmdzLCBzZXRIZWFkaW5nc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJIZWFkaW5nID0gdXNlQ2FsbGJhY2soKGlkLCB0b3ApID0+IHtcclxuICAgIHNldEhlYWRpbmdzKChoZWFkaW5ncykgPT4gWy4uLmhlYWRpbmdzLmZpbHRlcigoaCkgPT4gaWQgIT09IGguaWQpLCB7IGlkLCB0b3AgfV0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHVucmVnaXN0ZXJIZWFkaW5nID0gdXNlQ2FsbGJhY2soKGlkKSA9PiB7XHJcbiAgICBzZXRIZWFkaW5ncygoaGVhZGluZ3MpID0+IGhlYWRpbmdzLmZpbHRlcigoaCkgPT4gaWQgIT09IGguaWQpKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRhYmxlT2ZDb250ZW50cy5sZW5ndGggPT09IDAgfHwgaGVhZGluZ3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBsZXQgeSA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgIGxldCBzb3J0ZWRIZWFkaW5ncyA9IGhlYWRpbmdzLmNvbmNhdChbXSkuc29ydCgoYSwgYikgPT4gYS50b3AgLSBiLnRvcClcclxuICAgICAgaWYgKHkgPD0gMCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRTZWN0aW9uKHNvcnRlZEhlYWRpbmdzWzBdLmlkKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmICh5ICsgd2luZG93SGVpZ2h0ID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlY3Rpb24oc29ydGVkSGVhZGluZ3Nbc29ydGVkSGVhZGluZ3MubGVuZ3RoIC0gMV0uaWQpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWlkZGxlID0geSArIHdpbmRvd0hlaWdodCAvIDJcclxuICAgICAgbGV0IGN1cnJlbnQgPSBzb3J0ZWRIZWFkaW5nc1swXS5pZFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEhlYWRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1pZGRsZSA+PSBzb3J0ZWRIZWFkaW5nc1tpXS50b3ApIHtcclxuICAgICAgICAgIGN1cnJlbnQgPSBzb3J0ZWRIZWFkaW5nc1tpXS5pZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDdXJyZW50U2VjdGlvbihjdXJyZW50KVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7XHJcbiAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgb25TY3JvbGwoKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgdHJ1ZSlcclxuICB9LCBbaGVhZGluZ3MsIHRhYmxlT2ZDb250ZW50c10pXHJcblxyXG4gIHJldHVybiB7IGN1cnJlbnRTZWN0aW9uLCByZWdpc3RlckhlYWRpbmcsIHVucmVnaXN0ZXJIZWFkaW5nIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRlbnRzTGF5b3V0T3V0ZXIoeyBjaGlsZHJlbiwgbGF5b3V0UHJvcHMsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCB7IGN1cnJlbnRTZWN0aW9uLCByZWdpc3RlckhlYWRpbmcsIHVucmVnaXN0ZXJIZWFkaW5nIH0gPSB1c2VUYWJsZU9mQ29udGVudHMoXHJcbiAgICBsYXlvdXRQcm9wcy50YWJsZU9mQ29udGVudHNcclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZWJhckxheW91dFxyXG4gICAgICBzaWRlYmFyPXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgIDxUYWJsZU9mQ29udGVudHNcclxuICAgICAgICAgICAgdGFibGVPZkNvbnRlbnRzPXtsYXlvdXRQcm9wcy50YWJsZU9mQ29udGVudHN9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uPXtjdXJyZW50U2VjdGlvbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGVudHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHJlZ2lzdGVySGVhZGluZywgdW5yZWdpc3RlckhlYWRpbmcgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRlbnRzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvU2lkZWJhckxheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb250ZW50c0xheW91dCh7IGNoaWxkcmVuLCBtZXRhLCBjbGFzc2VzLCB0YWJsZU9mQ29udGVudHMgfSkge1xyXG4gIGNvbnN0IHRvYyA9IFtcclxuICAgIC4uLihjbGFzc2VzXHJcbiAgICAgID8gW3sgdGl0bGU6ICfQodC/0YDQsNCy0L7Rh9C90LjQuiDQutC70LDRgdGB0L7QsiDQv9C+INGD0LzQvtC70YfQsNC90LjRjicsIHNsdWc6ICdjbGFzcy1yZWZlcmVuY2UnLCBjaGlsZHJlbjogW10gfV1cclxuICAgICAgOiBbXSksXHJcbiAgICAuLi50YWJsZU9mQ29udGVudHMsXHJcbiAgXVxyXG5cclxuICBjb25zdCB7IGN1cnJlbnRTZWN0aW9uLCByZWdpc3RlckhlYWRpbmcsIHVucmVnaXN0ZXJIZWFkaW5nIH0gPSB1c2VUYWJsZU9mQ29udGVudHModG9jKVxyXG4gIGxldCB7IHByZXYsIG5leHQgfSA9IHVzZVByZXZOZXh0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e21ldGEuY29udGFpbmVySWR9IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMCBmbGV4LWF1dG8gcHgtNCBzbTpweC02IHhsOnB4LTggcHQtMTAgcGItMjQgbGc6cGItMTZcIj5cclxuICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgdGl0bGU9e21ldGEudGl0bGV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIGJhZGdlPXt7IGtleTogJ1RhaWx3aW5kIENTUyB2ZXJzaW9uJywgdmFsdWU6IG1ldGEuZmVhdHVyZVZlcnNpb24gfX1cclxuICAgICAgICAgIGJvcmRlcj17IWNsYXNzZXMgJiYgbWV0YS5oZWFkZXJTZXBhcmF0b3IgIT09IGZhbHNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbnRlbnRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyByZWdpc3RlckhlYWRpbmcsIHVucmVnaXN0ZXJIZWFkaW5nIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NsYXNzZXMgJiYgKFxyXG4gICAgICAgICAgICAgIDxDbGFzc1RhYmxlIHsuLi4oaXNWYWxpZEVsZW1lbnQoY2xhc3NlcykgPyB7IGN1c3RvbTogY2xhc3NlcyB9IDogY2xhc3Nlcyl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGVudHNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIHsocHJldiB8fCBuZXh0KSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMjAwIG10LTEwIG1iLTRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGVhZGluZy02IGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAge3ByZXYgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJldi5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBtci04IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4oaQXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2LnNob3J0VGl0bGUgfHwgcHJldi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge25leHQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bmV4dC5ocmVmfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXJpZ2h0IG1sLWF1dG8gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmV4dC5zaG9ydFRpdGxlIHx8IG5leHQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4oaSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4geGw6dGV4dC1zbSB4bDpibG9jayBmbGV4LW5vbmUgdy02NCBwbC04IG1yLThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXktYXV0byBzdGlja3kgbWF4LWgtKHNjcmVlbi0xOCkgcHQtMTAgcGItNiB0b3AtMThcIj5cclxuICAgICAgICAgIHt0b2MubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgIDxUYWJsZU9mQ29udGVudHMgdGFibGVPZkNvbnRlbnRzPXt0b2N9IGN1cnJlbnRTZWN0aW9uPXtjdXJyZW50U2VjdGlvbn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9