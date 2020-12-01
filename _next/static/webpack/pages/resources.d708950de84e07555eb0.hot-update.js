webpackHotUpdate_N_E("pages/resources",{

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
  }, "Playground"), __jsx(TopLevelLink, {
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
  }, "News"), __jsx(TopLevelLink, {
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
  }, "Resources"), __jsx(TopLevelLink, {
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
  }, "Screencasts"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvU2lkZWJhckxheW91dC5qcyJdLCJuYW1lcyI6WyJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJOYXZJdGVtIiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJjaGlsZHJlbiIsImlzQWN0aXZlIiwiaXNQdWJsaXNoZWQiLCJmYWxsYmFja0hyZWYiLCJjbHN4IiwiTmF2IiwibmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlSXRlbVJlZiIsInVzZVJlZiIsInNjcm9sbFJlZiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFjdGl2ZUl0ZW1SZWN0Iiwic2Nyb2xsVG9wIiwidG9wIiwiaGVpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNhdGVnb3J5IiwicHVibGlzaGVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwicHVibGlzaGVkIiwibGVuZ3RoIiwiaSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2hvcnRUaXRsZSIsInRpdGxlIiwiQm9vbGVhbiIsIlRvcExldmVsQW5jaG9yIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJjb2xvciIsImdyYWRpZW50cyIsIlRvcExldmVsTGluayIsImFzIiwicHJvcHMiLCJ0ZXN0IiwiVG9wTGV2ZWxOYXYiLCJzcGxpdCIsIlNpZGViYXJMYXlvdXQiLCJuYXZJc09wZW4iLCJzZXROYXZJc09wZW4iLCJzaWRlYmFyIiwiaGlkZGVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDO0FBRVAsSUFBTUMsT0FBTyxnQkFBR0Msd0RBQVUsTUFB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L3BhZ2VzL3Jlc291cmNlcy5kNzA4OTUwZGU4NGUwNzU1NWViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBWZXJzaW9uU3dpdGNoZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvVmVyc2lvblN3aXRjaGVyJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgZm9yd2FyZFJlZiwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnQC9ob29rcy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0J1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcbmltcG9ydCB7IGdyYWRpZW50cyB9IGZyb20gJ0AvdXRpbHMvZ3JhZGllbnRzJ1xuXG5leHBvcnQgY29uc3QgU2lkZWJhckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgTmF2SXRlbSA9IGZvcndhcmRSZWYoKHsgaHJlZiwgY2hpbGRyZW4sIGlzQWN0aXZlLCBpc1B1Ymxpc2hlZCwgZmFsbGJhY2tIcmVmIH0sIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSByZWY9e3JlZn0+XG4gICAgICA8TGluayBocmVmPXtpc1B1Ymxpc2hlZCA/IGhyZWYgOiBmYWxsYmFja0hyZWZ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncHgtMyBweS0yIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByZWxhdGl2ZSBibG9jaycsIHtcbiAgICAgICAgICAgICd0ZXh0LWN5YW4tNzAwJzogaXNBY3RpdmUsXG4gICAgICAgICAgICAnaG92ZXI6dGV4dC1ncmF5LTkwMCB0ZXh0LWdyYXktNTAwJzogIWlzQWN0aXZlICYmIGlzUHVibGlzaGVkLFxuICAgICAgICAgICAgJ3RleHQtZ3JheS00MDAnOiAhaXNBY3RpdmUgJiYgIWlzUHVibGlzaGVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncm91bmRlZC1tZCBhYnNvbHV0ZSBpbnNldC0wIGJnLWN5YW4tNTAnLCB7XG4gICAgICAgICAgICAgICdvcGFjaXR5LTUwJzogaXNBY3RpdmUsXG4gICAgICAgICAgICAgICdvcGFjaXR5LTAnOiAhaXNBY3RpdmUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gIClcbn0pXG5cbmZ1bmN0aW9uIE5hdih7IG5hdiwgY2hpbGRyZW4sIGZhbGxiYWNrSHJlZiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFjdGl2ZUl0ZW1SZWYgPSB1c2VSZWYoKVxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYoKVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVJdGVtUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFJlY3QgPSBzY3JvbGxSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgYWN0aXZlSXRlbVJlY3QgPSBhY3RpdmVJdGVtUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9XG4gICAgICAgIGFjdGl2ZUl0ZW1SZWN0LnRvcCAtIHNjcm9sbFJlY3QudG9wIC0gc2Nyb2xsUmVjdC5oZWlnaHQgLyAyICsgYWN0aXZlSXRlbVJlY3QuaGVpZ2h0IC8gMlxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBpZD1cIm5hdlwiXG4gICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgIGNsYXNzTmFtZT1cInB4LTEgcHQtNiBvdmVyZmxvdy15LWF1dG8gZm9udC1tZWRpdW0gdGV4dC1iYXNlIHNtOnB4LTMgeGw6cHgtNSBsZzp0ZXh0LXNtIHBiLTEwIGxnOnB0LTEwIGxnOnBiLTE2IHN0aWNreT9sZzpoLShzY3JlZW4tMTgpXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbWItOCBweC0zIGxnOmhpZGRlblwiPlxuICAgICAgICA8VmVyc2lvblN3aXRjaGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAgPFRvcExldmVsTmF2IC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge25hdiAmJlxuICAgICAgICAgIE9iamVjdC5rZXlzKG5hdilcbiAgICAgICAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwdWJsaXNoZWRJdGVtcyA9IG5hdltjYXRlZ29yeV0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnB1Ymxpc2hlZCAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgIGlmIChwdWJsaXNoZWRJdGVtcy5sZW5ndGggPT09IDAgJiYgIWZhbGxiYWNrSHJlZikgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgICAncHgtMyBtYi0zIGxnOm1iLTMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGxnOnRleHQteHMnLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktOTAwJzogcHVibGlzaGVkSXRlbXMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWdyYXktNDAwJzogcHVibGlzaGVkSXRlbXMubGVuZ3RoID09PSAwLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgeyhmYWxsYmFja0hyZWYgPyBuYXZbY2F0ZWdvcnldIDogcHVibGlzaGVkSXRlbXMpLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17aXRlbS5ocmVmID09PSByb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2l0ZW0uaHJlZiA9PT0gcm91dGVyLnBhdGhuYW1lID8gYWN0aXZlSXRlbVJlZiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkPXtpdGVtLnB1Ymxpc2hlZCAhPT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFja0hyZWY9e2ZhbGxiYWNrSHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zaG9ydFRpdGxlIHx8IGl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbil9XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmNvbnN0IFRvcExldmVsQW5jaG9yID0gZm9yd2FyZFJlZihcbiAgKHsgY2hpbGRyZW4sIGhyZWYsIGNsYXNzTmFtZSwgaWNvbiwgaXNBY3RpdmUsIG9uQ2xpY2ssIGNvbG9yIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxhXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICdmbGV4IGl0ZW1zLWNlbnRlciBweC0zIGhvdmVyOnRleHQtZ3JheS05MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ3RleHQtZ3JheS05MDAnOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btci0zIHJvdW5kZWQtbWQgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudHNbY29sb3JdWzBdfWB9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTYgdy02XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbilcblxuZnVuY3Rpb24gVG9wTGV2ZWxMaW5rKHsgaHJlZiwgYXMsIC4uLnByb3BzIH0pIHtcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChocmVmKSkge1xuICAgIHJldHVybiA8VG9wTGV2ZWxBbmNob3IgaHJlZj17aHJlZn0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfSBhcz17YXN9IHBhc3NIcmVmPlxuICAgICAgPFRvcExldmVsQW5jaG9yIHsuLi5wcm9wc30gLz5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZnVuY3Rpb24gVG9wTGV2ZWxOYXYoKSB7XG4gIGxldCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuICBsZXQgY3VycmVudCA9IHBhdGhuYW1lLnNwbGl0KCcvJylbMV1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9wTGV2ZWxMaW5rXG4gICAgICAgIGhyZWY9XCIvZG9jc1wiXG4gICAgICAgIGlzQWN0aXZlPXtjdXJyZW50ID09PSAnJyB8fCBjdXJyZW50ID09PSAnZG9jcyd9XG4gICAgICAgIGNvbG9yPVwicGlua1wiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk05IDZDMTAuMDkyOSA2IDExLjExNzUgNi4yOTIxOCAxMiA2LjgwMjY5VjE2LjgwMjdDMTEuMTE3NSAxNi4yOTIyIDEwLjA5MjkgMTYgOSAxNkM3LjkwNzE0IDE2IDYuODgyNTIgMTYuMjkyMiA2IDE2LjgwMjdWNi44MDI2OUM2Ljg4MjUyIDYuMjkyMTggNy45MDcxNCA2IDkgNlpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0ZGRjFGMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xNSA2QzE2LjA5MjkgNiAxNy4xMTc1IDYuMjkyMTggMTggNi44MDI2OVYxNi44MDI3QzE3LjExNzUgMTYuMjkyMiAxNi4wOTI5IDE2IDE1IDE2QzEzLjkwNzEgMTYgMTIuODgyNSAxNi4yOTIyIDEyIDE2LjgwMjdWNi44MDI2OUMxMi44ODI1IDYuMjkyMTggMTMuOTA3MSA2IDE1IDZaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGRUNERDNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICDQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y9cbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9jb21wb25lbnRzP3V0bV9zb3VyY2U9dGFpbHdpbmRjc3MmdXRtX21lZGl1bT1uYXZpZ2F0aW9uXCJcbiAgICAgICAgY29sb3I9XCJ2aW9sZXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA5bDYtMyA2IDN2NmwtNiAzLTYtM1Y5elwiIGZpbGw9XCIjRjVGM0ZGXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA5bDYgM3Y2bC02LTNWOXpcIiBmaWxsPVwiI0RERDZGRVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDlsLTYgM3Y2bDYtM1Y5elwiIGZpbGw9XCIjQzRCNUZEXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICDQmtC+0LzQv9C+0L3QtdC90YLRi1xuICAgICAgPC9Ub3BMZXZlbExpbms+XG4gICAgICA8VG9wTGV2ZWxMaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL3BsYXkudGFpbHdpbmRjc3MuY29tXCJcbiAgICAgICAgY29sb3I9XCJhbWJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xMy4xOTYgNi4wMmExIDEgMCAwMS43ODUgMS4xNzZsLTIgMTBhMSAxIDAgMDEtMS45NjEtLjM5MmwyLTEwYTEgMSAwIDAxMS4xNzYtLjc4NHpcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0ZERTY4QVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk0xNS4yOTMgOS4yOTNhMSAxIDAgMDExLjQxNCAwbDIgMmExIDEgMCAwMTAgMS40MTRsLTIgMmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNi41ODYgMTJsLTEuMjkzLTEuMjkzYTEgMSAwIDAxMC0xLjQxNHpNOC43MDcgOS4yOTNhMSAxIDAgMDEwIDEuNDE0TDcuNDE0IDEybDEuMjkzIDEuMjkzYTEgMSAwIDExLTEuNDE0IDEuNDE0bC0yLTJhMSAxIDAgMDEwLTEuNDE0bDItMmExIDEgMCAwMTEuNDE0IDB6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGREY0RkZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBQbGF5Z3JvdW5kXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb21cIlxuICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNOCA5YTEgMSAwIDAxMS0xaDhhMSAxIDAgMDExIDF2Ny41YTEuNSAxLjUgMCAwMS0xLjUgMS41aC03QTEuNSAxLjUgMCAwMTggMTYuNVY5elwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjNkVFN0I3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTE1IDdhMSAxIDAgMDAtMS0xSDdhMSAxIDAgMDAtMSAxdjkuNUExLjUgMS41IDAgMDA3LjUgMThIMTZ2LS4wODVhMS41IDEuNSAwIDAxLTEtMS40MTVWN3pcIlxuICAgICAgICAgICAgICBmaWxsPVwiI0VDRkRGNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNBN0YzRDBcIiBkPVwiTTggOGg1djRIOHpNOCAxNGg1djJIOHpcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIE5ld3NcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiL3Jlc291cmNlc1wiXG4gICAgICAgIGlzQWN0aXZlPXtjdXJyZW50ID09PSAncmVzb3VyY2VzJ31cbiAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3IDEzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxSDguNWEyLjUgMi41IDAgMDEwLTVIMTd6XCIgZmlsbD1cIiM5M0M1RkRcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0xMi43NDMgNy43MjJhMSAxIDAgMDExLjQxNCAwbDIuMTIyIDIuMTIxYTEgMSAwIDAxMCAxLjQxNGwtNi4wMSA2LjAxYTIuNSAyLjUgMCAxMS0zLjUzNi0zLjUzNmw2LjAxLTYuMDF6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNCRkRCRkVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNiA3YTEgMSAwIDAxMS0xaDNhMSAxIDAgMDExIDF2OC41YTIuNSAyLjUgMCAwMS01IDBWN3pcIiBmaWxsPVwiI0VGRjZGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNSAxNS41YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIiBmaWxsPVwiIzYwQTVGQVwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgUmVzb3VyY2VzXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3RhaWx3aW5kbGFic1wiXG4gICAgICAgIGNvbG9yPVwicHVycGxlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMTBcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI3XCIgZmlsbD1cIiNGM0U4RkZcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0xNC41MiAxMS4xMzZhMSAxIDAgMDEwIDEuNzI4bC0zLjAxNiAxLjc1OUExIDEgMCAwMTEwIDEzLjc1OXYtMy41MThhMSAxIDAgMDExLjUwNC0uODY0bDMuMDE1IDEuNzZ6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNDMDg0RkNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBTY3JlZW5jYXN0c1xuICAgICAgPC9Ub3BMZXZlbExpbms+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJMYXlvdXQoeyBjaGlsZHJlbiwgbmF2SXNPcGVuLCBzZXROYXZJc09wZW4sIG5hdiwgc2lkZWJhciwgZmFsbGJhY2tIcmVmIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbmF2LCBuYXZJc09wZW4sIHNldE5hdklzT3BlbiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTh4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwic2lkZWJhclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnZml4ZWQgei00MCBpbnNldC0wIGZsZXgtbm9uZSBoLWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS0yNSB3LWZ1bGwgbGc6Ymctd2hpdGUgbGc6c3RhdGljIGxnOmgtYXV0byBsZzpvdmVyZmxvdy15LXZpc2libGUgbGc6cHQtMCBsZzp3LTYwIHhsOnctNzIgbGc6YmxvY2snLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGlkZGVuOiAhbmF2SXNPcGVuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJuYXZXcmFwcGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBvdmVyZmxvdy15LWF1dG8gc2Nyb2xsaW5nLXRvdWNoIGxnOmgtYXV0byBsZzpibG9jayBsZzpyZWxhdGl2ZSBsZzpzdGlja3kgbGc6YmctdHJhbnNwYXJlbnQgb3ZlcmZsb3ctaGlkZGVuIGxnOnRvcC0xOCBiZy13aGl0ZSBtci0yNCBsZzptci0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgaC0xMiBwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXgtMCB6LTEwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDxOYXYgbmF2PXtuYXZ9IGZhbGxiYWNrSHJlZj17ZmFsbGJhY2tIcmVmfT5cbiAgICAgICAgICAgICAgICB7c2lkZWJhcn1cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cImNvbnRlbnQtd3JhcHBlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICdtaW4tdy0wIHctZnVsbCBmbGV4LWF1dG8gbGc6c3RhdGljIGxnOm1heC1oLWZ1bGwgbGc6b3ZlcmZsb3ctdmlzaWJsZScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnb3ZlcmZsb3ctaGlkZGVuIG1heC1oLXNjcmVlbiBmaXhlZCc6IG5hdklzT3BlbixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TaWRlYmFyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==