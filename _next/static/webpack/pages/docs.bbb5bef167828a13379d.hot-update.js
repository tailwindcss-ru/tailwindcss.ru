webpackHotUpdate_N_E("pages/docs",{

/***/ "./src/layouts/SidebarLayout.js":
/*!**************************************!*\
  !*** ./src/layouts/SidebarLayout.js ***!
  \**************************************/
/*! exports provided: SidebarContext, SidebarLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContext", function() { return SidebarContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLayout", function() { return SidebarLayout; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_VersionSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/VersionSwitcher */ "./src/components/VersionSwitcher.js");
/* harmony import */ var _hooks_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useIsomorphicLayoutEffect */ "./src/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");



var _this = undefined,
    _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\layouts\\SidebarLayout.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var SidebarContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var NavItem = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(_c = function _c(_ref, ref) {
  var href = _ref.href,
      children = _ref.children,
      isActive = _ref.isActive,
      isPublished = _ref.isPublished,
      fallbackHref = _ref.fallbackHref;
  return __jsx("li", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: isPublished ? href : fallbackHref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('px-3 py-2 transition-colors duration-200 relative block', {
      'text-cyan-700': isActive,
      'hover:text-gray-900 text-gray-500': !isActive && isPublished,
      'text-gray-400': !isActive && !isPublished
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('rounded-md absolute inset-0 bg-cyan-50', {
      'opacity-50': isActive,
      'opacity-0': !isActive
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, children))));
});
_c2 = NavItem;

function Nav(_ref2) {
  _s();

  var _this2 = this;

  var nav = _ref2.nav,
      children = _ref2.children,
      fallbackHref = _ref2.fallbackHref;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var activeItemRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(_hooks_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    if (activeItemRef.current) {
      var scrollRect = scrollRef.current.getBoundingClientRect();
      var activeItemRect = activeItemRef.current.getBoundingClientRect();
      scrollRef.current.scrollTop = activeItemRect.top - scrollRect.top - scrollRect.height / 2 + activeItemRect.height / 2;
    }
  }, []);
  return __jsx("nav", {
    id: "nav",
    ref: scrollRef,
    className: "px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative flex mb-8 px-3 lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_components_VersionSwitcher__WEBPACK_IMPORTED_MODULE_5__["VersionSwitcher"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(TopLevelNav, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), children, nav && Object.keys(nav).map(function (category) {
    var publishedItems = nav[category].filter(function (item) {
      return item.published !== false;
    });
    if (publishedItems.length === 0 && !fallbackHref) return null;
    return __jsx("li", {
      key: category,
      className: "mt-8",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx("h5", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs', {
        'text-gray-900': publishedItems.length > 0,
        'text-gray-400': publishedItems.length === 0
      }),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, category), __jsx("ul", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, (fallbackHref ? nav[category] : publishedItems).map(function (item, i) {
      return __jsx(NavItem, {
        key: i,
        href: item.href,
        isActive: item.href === router.pathname,
        ref: item.href === router.pathname ? activeItemRef : undefined,
        isPublished: item.published !== false,
        fallbackHref: fallbackHref,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 23
        }
      }, item.shortTitle || item.title);
    })));
  }).filter(Boolean)));
}

_s(Nav, "tNRbfCkHj7tbHpcwRpGCGy60Jl8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _hooks_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"]];
});

_c3 = Nav;
var TopLevelAnchor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(_c4 = function _c4(_ref3, ref) {
  var children = _ref3.children,
      href = _ref3.href,
      className = _ref3.className,
      icon = _ref3.icon,
      isActive = _ref3.isActive,
      onClick = _ref3.onClick,
      color = _ref3.color;
  return __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("a", {
    ref: ref,
    href: href,
    onClick: onClick,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('flex items-center px-3 hover:text-gray-900 transition-colors duration-200', className, {
      'text-gray-900': isActive
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mr-3 rounded-md bg-gradient-to-br ".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_8__["gradients"][color][0]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("svg", {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, icon)), children));
});
_c5 = TopLevelAnchor;

function TopLevelLink(_ref4) {
  var href = _ref4.href,
      as = _ref4.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["href", "as"]);

  if (/^https?:\/\//.test(href)) {
    return __jsx(TopLevelAnchor, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      href: href
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 12
      }
    }));
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    as: as,
    passHref: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(TopLevelAnchor, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  })));
}

_c6 = TopLevelLink;

function TopLevelNav() {
  _s2();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname;

  var current = pathname.split('/')[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(TopLevelLink, {
    href: "/docs",
    isActive: current === '' || current === 'docs',
    color: "pink",
    className: "mb-4",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z",
      fill: "#FFF1F2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }
    }), __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z",
      fill: "#FECDD3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"), __jsx(TopLevelLink, {
    href: "https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation",
    color: "violet",
    className: "mb-4",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("path", {
      d: "M6 9l6-3 6 3v6l-6 3-6-3V9z",
      fill: "#F5F3FF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M6 9l6 3v6l-6-3V9z",
      fill: "#DDD6FE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M18 9l-6 3v6l6-3V9z",
      fill: "#C4B5FD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"), __jsx(TopLevelLink, {
    href: "https://play.tailwindcss.com",
    color: "amber",
    className: "mb-4",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z",
      fill: "#FDE68A",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }
    }), __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z",
      fill: "#FDF4FF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }
  }, "\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430"), __jsx(TopLevelLink, {
    href: "https://blog.tailwindcss.com",
    color: "teal",
    className: "mb-4",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("path", {
      d: "M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z",
      fill: "#6EE7B7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z",
      fill: "#ECFDF5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }), __jsx("path", {
      fill: "#A7F3D0",
      d: "M8 8h5v4H8zM8 14h5v2H8z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), __jsx(TopLevelLink, {
    href: "/resources",
    isActive: current === 'resources',
    color: "blue",
    className: "mb-4",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("path", {
      d: "M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z",
      fill: "#93C5FD",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z",
      fill: "#BFDBFE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z",
      fill: "#EFF6FF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z",
      fill: "#60A5FA",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, "\u0420\u0435\u0441\u0443\u0440\u0441\u044B"), __jsx(TopLevelLink, {
    href: "https://www.youtube.com/tailwindlabs",
    color: "purple",
    className: "mb-10",
    icon: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("circle", {
      cx: "12",
      cy: "12",
      r: "7",
      fill: "#F3E8FF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }
    }), __jsx("path", {
      d: "M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z",
      fill: "#C084FC",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"));
}

_s2(TopLevelNav, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c7 = TopLevelNav;
function SidebarLayout(_ref5) {
  var children = _ref5.children,
      navIsOpen = _ref5.navIsOpen,
      setNavIsOpen = _ref5.setNavIsOpen,
      nav = _ref5.nav,
      sidebar = _ref5.sidebar,
      fallbackHref = _ref5.fallbackHref;
  return __jsx(SidebarContext.Provider, {
    value: {
      nav: nav,
      navIsOpen: navIsOpen,
      setNavIsOpen: setNavIsOpen
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full max-w-8xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg:flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "sidebar",
    onClick: function onClick() {
      return setNavIsOpen(false);
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block', {
      hidden: !navIsOpen
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "navWrapper",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  }), __jsx(Nav, {
    nav: nav,
    fallbackHref: fallbackHref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }, sidebar))), __jsx("div", {
    id: "content-wrapper",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])('min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible', {
      'overflow-hidden max-h-screen fixed': navIsOpen
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, children))));
}
_c8 = SidebarLayout;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "NavItem$forwardRef");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "Nav");
$RefreshReg$(_c4, "TopLevelAnchor$forwardRef");
$RefreshReg$(_c5, "TopLevelAnchor");
$RefreshReg$(_c6, "TopLevelLink");
$RefreshReg$(_c7, "TopLevelNav");
$RefreshReg$(_c8, "SidebarLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvU2lkZWJhckxheW91dC5qcyJdLCJuYW1lcyI6WyJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJOYXZJdGVtIiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJjaGlsZHJlbiIsImlzQWN0aXZlIiwiaXNQdWJsaXNoZWQiLCJmYWxsYmFja0hyZWYiLCJjbHN4IiwiTmF2IiwibmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlSXRlbVJlZiIsInVzZVJlZiIsInNjcm9sbFJlZiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFjdGl2ZUl0ZW1SZWN0Iiwic2Nyb2xsVG9wIiwidG9wIiwiaGVpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNhdGVnb3J5IiwicHVibGlzaGVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwicHVibGlzaGVkIiwibGVuZ3RoIiwiaSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2hvcnRUaXRsZSIsInRpdGxlIiwiQm9vbGVhbiIsIlRvcExldmVsQW5jaG9yIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJjb2xvciIsImdyYWRpZW50cyIsIlRvcExldmVsTGluayIsImFzIiwicHJvcHMiLCJ0ZXN0IiwiVG9wTGV2ZWxOYXYiLCJzcGxpdCIsIlNpZGViYXJMYXlvdXQiLCJuYXZJc09wZW4iLCJzZXROYXZJc09wZW4iLCJzaWRlYmFyIiwiaGlkZGVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDO0FBRVAsSUFBTUMsT0FBTyxnQkFBR0Msd0RBQVUsTUFB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ay9wYWdlcy9kb2NzLmJiYjViZWYxNjc4MjhhMTMzNzlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFZlcnNpb25Td2l0Y2hlciB9IGZyb20gJ0AvY29tcG9uZW50cy9WZXJzaW9uU3dpdGNoZXInXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBmb3J3YXJkUmVmLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICdAL2hvb2tzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgZ3JhZGllbnRzIH0gZnJvbSAnQC91dGlscy9ncmFkaWVudHMnXG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBOYXZJdGVtID0gZm9yd2FyZFJlZigoeyBocmVmLCBjaGlsZHJlbiwgaXNBY3RpdmUsIGlzUHVibGlzaGVkLCBmYWxsYmFja0hyZWYgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIHJlZj17cmVmfT5cbiAgICAgIDxMaW5rIGhyZWY9e2lzUHVibGlzaGVkID8gaHJlZiA6IGZhbGxiYWNrSHJlZn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdweC0zIHB5LTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJlbGF0aXZlIGJsb2NrJywge1xuICAgICAgICAgICAgJ3RleHQtY3lhbi03MDAnOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgICdob3Zlcjp0ZXh0LWdyYXktOTAwIHRleHQtZ3JheS01MDAnOiAhaXNBY3RpdmUgJiYgaXNQdWJsaXNoZWQsXG4gICAgICAgICAgICAndGV4dC1ncmF5LTQwMCc6ICFpc0FjdGl2ZSAmJiAhaXNQdWJsaXNoZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdyb3VuZGVkLW1kIGFic29sdXRlIGluc2V0LTAgYmctY3lhbi01MCcsIHtcbiAgICAgICAgICAgICAgJ29wYWNpdHktNTAnOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgJ29wYWNpdHktMCc6ICFpc0FjdGl2ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKVxufSlcblxuZnVuY3Rpb24gTmF2KHsgbmF2LCBjaGlsZHJlbiwgZmFsbGJhY2tIcmVmIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYWN0aXZlSXRlbVJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZigpXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZUl0ZW1SZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsUmVjdCA9IHNjcm9sbFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBhY3RpdmVJdGVtUmVjdCA9IGFjdGl2ZUl0ZW1SZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID1cbiAgICAgICAgYWN0aXZlSXRlbVJlY3QudG9wIC0gc2Nyb2xsUmVjdC50b3AgLSBzY3JvbGxSZWN0LmhlaWdodCAvIDIgKyBhY3RpdmVJdGVtUmVjdC5oZWlnaHQgLyAyXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGlkPVwibmF2XCJcbiAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgY2xhc3NOYW1lPVwicHgtMSBwdC02IG92ZXJmbG93LXktYXV0byBmb250LW1lZGl1bSB0ZXh0LWJhc2Ugc206cHgtMyB4bDpweC01IGxnOnRleHQtc20gcGItMTAgbGc6cHQtMTAgbGc6cGItMTYgc3RpY2t5P2xnOmgtKHNjcmVlbi0xOClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBtYi04IHB4LTMgbGc6aGlkZGVuXCI+XG4gICAgICAgIDxWZXJzaW9uU3dpdGNoZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICA8VG9wTGV2ZWxOYXYgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7bmF2ICYmXG4gICAgICAgICAgT2JqZWN0LmtleXMobmF2KVxuICAgICAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHB1Ymxpc2hlZEl0ZW1zID0gbmF2W2NhdGVnb3J5XS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucHVibGlzaGVkICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgaWYgKHB1Ymxpc2hlZEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhZmFsbGJhY2tIcmVmKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fSBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICAgICAgICA8aDVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICdweC0zIG1iLTMgbGc6bWItMyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHRleHQtc20gbGc6dGV4dC14cycsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS05MDAnOiBwdWJsaXNoZWRJdGVtcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtZ3JheS00MDAnOiBwdWJsaXNoZWRJdGVtcy5sZW5ndGggPT09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7KGZhbGxiYWNrSHJlZiA/IG5hdltjYXRlZ29yeV0gOiBwdWJsaXNoZWRJdGVtcykubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpdGVtLmhyZWYgPT09IHJvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aXRlbS5ocmVmID09PSByb3V0ZXIucGF0aG5hbWUgPyBhY3RpdmVJdGVtUmVmIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQdWJsaXNoZWQ9e2l0ZW0ucHVibGlzaGVkICE9PSBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrSHJlZj17ZmFsbGJhY2tIcmVmfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNob3J0VGl0bGUgfHwgaXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKX1cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuY29uc3QgVG9wTGV2ZWxBbmNob3IgPSBmb3J3YXJkUmVmKFxuICAoeyBjaGlsZHJlbiwgaHJlZiwgY2xhc3NOYW1lLCBpY29uLCBpc0FjdGl2ZSwgb25DbGljaywgY29sb3IgfSwgcmVmKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaT5cbiAgICAgICAgPGFcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIHB4LTMgaG92ZXI6dGV4dC1ncmF5LTkwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAnLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAndGV4dC1ncmF5LTkwMCc6IGlzQWN0aXZlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1yLTMgcm91bmRlZC1tZCBiZy1ncmFkaWVudC10by1iciAke2dyYWRpZW50c1tjb2xvcl1bMF19YH0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImgtNiB3LTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxuKVxuXG5mdW5jdGlvbiBUb3BMZXZlbExpbmsoeyBocmVmLCBhcywgLi4ucHJvcHMgfSkge1xuICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGhyZWYpKSB7XG4gICAgcmV0dXJuIDxUb3BMZXZlbEFuY2hvciBocmVmPXtocmVmfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXthc30gcGFzc0hyZWY+XG4gICAgICA8VG9wTGV2ZWxBbmNob3Igey4uLnByb3BzfSAvPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5mdW5jdGlvbiBUb3BMZXZlbE5hdigpIHtcbiAgbGV0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG4gIGxldCBjdXJyZW50ID0gcGF0aG5hbWUuc3BsaXQoJy8nKVsxXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cIi9kb2NzXCJcbiAgICAgICAgaXNBY3RpdmU9e2N1cnJlbnQgPT09ICcnIHx8IGN1cnJlbnQgPT09ICdkb2NzJ31cbiAgICAgICAgY29sb3I9XCJwaW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTkgNkMxMC4wOTI5IDYgMTEuMTE3NSA2LjI5MjE4IDEyIDYuODAyNjlWMTYuODAyN0MxMS4xMTc1IDE2LjI5MjIgMTAuMDkyOSAxNiA5IDE2QzcuOTA3MTQgMTYgNi44ODI1MiAxNi4yOTIyIDYgMTYuODAyN1Y2LjgwMjY5QzYuODgyNTIgNi4yOTIxOCA3LjkwNzE0IDYgOSA2WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkZGMUYyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTE1IDZDMTYuMDkyOSA2IDE3LjExNzUgNi4yOTIxOCAxOCA2LjgwMjY5VjE2LjgwMjdDMTcuMTE3NSAxNi4yOTIyIDE2LjA5MjkgMTYgMTUgMTZDMTMuOTA3MSAxNiAxMi44ODI1IDE2LjI5MjIgMTIgMTYuODAyN1Y2LjgwMjY5QzEyLjg4MjUgNi4yOTIxOCAxMy45MDcxIDYgMTUgNlpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0ZFQ0REM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgINCU0L7QutGD0LzQtdC90YLQsNGG0LjRj1xuICAgICAgPC9Ub3BMZXZlbExpbms+XG4gICAgICA8VG9wTGV2ZWxMaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2NvbXBvbmVudHM/dXRtX3NvdXJjZT10YWlsd2luZGNzcyZ1dG1fbWVkaXVtPW5hdmlnYXRpb25cIlxuICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk02IDlsNi0zIDYgM3Y2bC02IDMtNi0zVjl6XCIgZmlsbD1cIiNGNUYzRkZcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02IDlsNiAzdjZsLTYtM1Y5elwiIGZpbGw9XCIjRERENkZFXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggOWwtNiAzdjZsNi0zVjl6XCIgZmlsbD1cIiNDNEI1RkRcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgINCa0L7QvNC/0L7QvdC10L3RgtGLXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vcGxheS50YWlsd2luZGNzcy5jb21cIlxuICAgICAgICBjb2xvcj1cImFtYmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTEzLjE5NiA2LjAyYTEgMSAwIDAxLjc4NSAxLjE3NmwtMiAxMGExIDEgMCAwMS0xLjk2MS0uMzkybDItMTBhMSAxIDAgMDExLjE3Ni0uNzg0elwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkRFNjhBXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTE1LjI5MyA5LjI5M2ExIDEgMCAwMTEuNDE0IDBsMiAyYTEgMSAwIDAxMCAxLjQxNGwtMiAyYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE2LjU4NiAxMmwtMS4yOTMtMS4yOTNhMSAxIDAgMDEwLTEuNDE0ek04LjcwNyA5LjI5M2ExIDEgMCAwMTAgMS40MTRMNy40MTQgMTJsMS4yOTMgMS4yOTNhMSAxIDAgMTEtMS40MTQgMS40MTRsLTItMmExIDEgMCAwMTAtMS40MTRsMi0yYTEgMSAwIDAxMS40MTQgMHpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0ZERjRGRlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgINCY0LPRgNC+0LLQsNGPINC/0LvQvtGJ0LDQtNC60LBcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbVwiXG4gICAgICAgIGNvbG9yPVwidGVhbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk04IDlhMSAxIDAgMDExLTFoOGExIDEgMCAwMTEgMXY3LjVhMS41IDEuNSAwIDAxLTEuNSAxLjVoLTdBMS41IDEuNSAwIDAxOCAxNi41Vjl6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM2RUU3QjdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMTUgN2ExIDEgMCAwMC0xLTFIN2ExIDEgMCAwMC0xIDF2OS41QTEuNSAxLjUgMCAwMDcuNSAxOEgxNnYtLjA4NWExLjUgMS41IDAgMDEtMS0xLjQxNVY3elwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjRUNGREY1XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0E3RjNEMFwiIGQ9XCJNOCA4aDV2NEg4ek04IDE0aDV2Mkg4elwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAg0J3QvtCy0L7RgdGC0LhcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiL3Jlc291cmNlc1wiXG4gICAgICAgIGlzQWN0aXZlPXtjdXJyZW50ID09PSAncmVzb3VyY2VzJ31cbiAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3IDEzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxSDguNWEyLjUgMi41IDAgMDEwLTVIMTd6XCIgZmlsbD1cIiM5M0M1RkRcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0xMi43NDMgNy43MjJhMSAxIDAgMDExLjQxNCAwbDIuMTIyIDIuMTIxYTEgMSAwIDAxMCAxLjQxNGwtNi4wMSA2LjAxYTIuNSAyLjUgMCAxMS0zLjUzNi0zLjUzNmw2LjAxLTYuMDF6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNCRkRCRkVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA3YTEgMSAwIDAxMS0xaDNhMSAxIDAgMDExIDF2OC41YTIuNSAyLjUgMCAwMS01IDBWN3pcIiBmaWxsPVwiI0VGRjZGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNSAxNS41YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIiBmaWxsPVwiIzYwQTVGQVwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAg0KDQtdGB0YPRgNGB0YtcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vdGFpbHdpbmRsYWJzXCJcbiAgICAgICAgY29sb3I9XCJwdXJwbGVcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYi0xMFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjdcIiBmaWxsPVwiI0YzRThGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTE0LjUyIDExLjEzNmExIDEgMCAwMTAgMS43MjhsLTMuMDE2IDEuNzU5QTEgMSAwIDAxMTAgMTMuNzU5di0zLjUxOGExIDEgMCAwMTEuNTA0LS44NjRsMy4wMTUgMS43NnpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0MwODRGQ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgINCh0LrRgNC40L3QutCw0YHRgtGLXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckxheW91dCh7IGNoaWxkcmVuLCBuYXZJc09wZW4sIHNldE5hdklzT3BlbiwgbmF2LCBzaWRlYmFyLCBmYWxsYmFja0hyZWYgfSkge1xuICByZXR1cm4gKFxuICAgIDxTaWRlYmFyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBuYXYsIG5hdklzT3Blbiwgc2V0TmF2SXNPcGVuIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctOHhsIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJzaWRlYmFyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdklzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICdmaXhlZCB6LTQwIGluc2V0LTAgZmxleC1ub25lIGgtZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IHctZnVsbCBsZzpiZy13aGl0ZSBsZzpzdGF0aWMgbGc6aC1hdXRvIGxnOm92ZXJmbG93LXktdmlzaWJsZSBsZzpwdC0wIGxnOnctNjAgeGw6dy03MiBsZzpibG9jaycsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoaWRkZW46ICFuYXZJc09wZW4sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cIm5hdldyYXBwZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIG92ZXJmbG93LXktYXV0byBzY3JvbGxpbmctdG91Y2ggbGc6aC1hdXRvIGxnOmJsb2NrIGxnOnJlbGF0aXZlIGxnOnN0aWNreSBsZzpiZy10cmFuc3BhcmVudCBvdmVyZmxvdy1oaWRkZW4gbGc6dG9wLTE4IGJnLXdoaXRlIG1yLTI0IGxnOm1yLTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLTEyIHBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteC0wIHotMTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPE5hdiBuYXY9e25hdn0gZmFsbGJhY2tIcmVmPXtmYWxsYmFja0hyZWZ9PlxuICAgICAgICAgICAgICAgIHtzaWRlYmFyfVxuICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwiY29udGVudC13cmFwcGVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgJ21pbi13LTAgdy1mdWxsIGZsZXgtYXV0byBsZzpzdGF0aWMgbGc6bWF4LWgtZnVsbCBsZzpvdmVyZmxvdy12aXNpYmxlJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdvdmVyZmxvdy1oaWRkZW4gbWF4LWgtc2NyZWVuIGZpeGVkJzogbmF2SXNPcGVuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9