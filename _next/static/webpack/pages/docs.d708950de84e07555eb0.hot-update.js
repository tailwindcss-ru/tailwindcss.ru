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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvU2lkZWJhckxheW91dC5qcyJdLCJuYW1lcyI6WyJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJOYXZJdGVtIiwiZm9yd2FyZFJlZiIsInJlZiIsImhyZWYiLCJjaGlsZHJlbiIsImlzQWN0aXZlIiwiaXNQdWJsaXNoZWQiLCJmYWxsYmFja0hyZWYiLCJjbHN4IiwiTmF2IiwibmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlSXRlbVJlZiIsInVzZVJlZiIsInNjcm9sbFJlZiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFjdGl2ZUl0ZW1SZWN0Iiwic2Nyb2xsVG9wIiwidG9wIiwiaGVpZ2h0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNhdGVnb3J5IiwicHVibGlzaGVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwicHVibGlzaGVkIiwibGVuZ3RoIiwiaSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2hvcnRUaXRsZSIsInRpdGxlIiwiQm9vbGVhbiIsIlRvcExldmVsQW5jaG9yIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJjb2xvciIsImdyYWRpZW50cyIsIlRvcExldmVsTGluayIsImFzIiwicHJvcHMiLCJ0ZXN0IiwiVG9wTGV2ZWxOYXYiLCJzcGxpdCIsIlNpZGViYXJMYXlvdXQiLCJuYXZJc09wZW4iLCJzZXROYXZJc09wZW4iLCJzaWRlYmFyIiwiaGlkZGVuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsZ0JBQUdDLDJEQUFhLEVBQXBDO0FBRVAsSUFBTUMsT0FBTyxnQkFBR0Msd0RBQVUsTUFB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L3BhZ2VzL2RvY3MuZDcwODk1MGRlODRlMDc1NTVlYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVmVyc2lvblN3aXRjaGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1ZlcnNpb25Td2l0Y2hlcidcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJ0AvaG9va3MvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IE5hdkl0ZW0gPSBmb3J3YXJkUmVmKCh7IGhyZWYsIGNoaWxkcmVuLCBpc0FjdGl2ZSwgaXNQdWJsaXNoZWQsIGZhbGxiYWNrSHJlZiB9LCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgcmVmPXtyZWZ9PlxuICAgICAgPExpbmsgaHJlZj17aXNQdWJsaXNoZWQgPyBocmVmIDogZmFsbGJhY2tIcmVmfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3B4LTMgcHktMiB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcmVsYXRpdmUgYmxvY2snLCB7XG4gICAgICAgICAgICAndGV4dC1jeWFuLTcwMCc6IGlzQWN0aXZlLFxuICAgICAgICAgICAgJ2hvdmVyOnRleHQtZ3JheS05MDAgdGV4dC1ncmF5LTUwMCc6ICFpc0FjdGl2ZSAmJiBpc1B1Ymxpc2hlZCxcbiAgICAgICAgICAgICd0ZXh0LWdyYXktNDAwJzogIWlzQWN0aXZlICYmICFpc1B1Ymxpc2hlZCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3JvdW5kZWQtbWQgYWJzb2x1dGUgaW5zZXQtMCBiZy1jeWFuLTUwJywge1xuICAgICAgICAgICAgICAnb3BhY2l0eS01MCc6IGlzQWN0aXZlLFxuICAgICAgICAgICAgICAnb3BhY2l0eS0wJzogIWlzQWN0aXZlLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApXG59KVxuXG5mdW5jdGlvbiBOYXYoeyBuYXYsIGNoaWxkcmVuLCBmYWxsYmFja0hyZWYgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBhY3RpdmVJdGVtUmVmID0gdXNlUmVmKClcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKClcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlSXRlbVJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxSZWN0ID0gc2Nyb2xsUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1SZWN0ID0gYWN0aXZlSXRlbVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb3AgPVxuICAgICAgICBhY3RpdmVJdGVtUmVjdC50b3AgLSBzY3JvbGxSZWN0LnRvcCAtIHNjcm9sbFJlY3QuaGVpZ2h0IC8gMiArIGFjdGl2ZUl0ZW1SZWN0LmhlaWdodCAvIDJcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgaWQ9XCJuYXZcIlxuICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICBjbGFzc05hbWU9XCJweC0xIHB0LTYgb3ZlcmZsb3cteS1hdXRvIGZvbnQtbWVkaXVtIHRleHQtYmFzZSBzbTpweC0zIHhsOnB4LTUgbGc6dGV4dC1zbSBwYi0xMCBsZzpwdC0xMCBsZzpwYi0xNiBzdGlja3k/bGc6aC0oc2NyZWVuLTE4KVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IG1iLTggcHgtMyBsZzpoaWRkZW5cIj5cbiAgICAgICAgPFZlcnNpb25Td2l0Y2hlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxUb3BMZXZlbE5hdiAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtuYXYgJiZcbiAgICAgICAgICBPYmplY3Qua2V5cyhuYXYpXG4gICAgICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgcHVibGlzaGVkSXRlbXMgPSBuYXZbY2F0ZWdvcnldLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wdWJsaXNoZWQgIT09IGZhbHNlKVxuICAgICAgICAgICAgICBpZiAocHVibGlzaGVkSXRlbXMubGVuZ3RoID09PSAwICYmICFmYWxsYmFja0hyZWYpIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgJ3B4LTMgbWItMyBsZzptYi0zIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBsZzp0ZXh0LXhzJyxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTkwMCc6IHB1Ymxpc2hlZEl0ZW1zLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1ncmF5LTQwMCc6IHB1Ymxpc2hlZEl0ZW1zLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHsoZmFsbGJhY2tIcmVmID8gbmF2W2NhdGVnb3J5XSA6IHB1Ymxpc2hlZEl0ZW1zKS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2l0ZW0uaHJlZiA9PT0gcm91dGVyLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpdGVtLmhyZWYgPT09IHJvdXRlci5wYXRobmFtZSA/IGFjdGl2ZUl0ZW1SZWYgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1B1Ymxpc2hlZD17aXRlbS5wdWJsaXNoZWQgIT09IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tIcmVmPXtmYWxsYmFja0hyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2hvcnRUaXRsZSB8fCBpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5jb25zdCBUb3BMZXZlbEFuY2hvciA9IGZvcndhcmRSZWYoXG4gICh7IGNoaWxkcmVuLCBocmVmLCBjbGFzc05hbWUsIGljb24sIGlzQWN0aXZlLCBvbkNsaWNrLCBjb2xvciB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8YVxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAnZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBob3Zlcjp0ZXh0LWdyYXktOTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCcsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICd0ZXh0LWdyYXktOTAwJzogaXNBY3RpdmUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXItMyByb3VuZGVkLW1kIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnRzW2NvbG9yXVswXX1gfT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC02IHctNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG4pXG5cbmZ1bmN0aW9uIFRvcExldmVsTGluayh7IGhyZWYsIGFzLCAuLi5wcm9wcyB9KSB7XG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaHJlZikpIHtcbiAgICByZXR1cm4gPFRvcExldmVsQW5jaG9yIGhyZWY9e2hyZWZ9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfSBwYXNzSHJlZj5cbiAgICAgIDxUb3BMZXZlbEFuY2hvciB7Li4ucHJvcHN9IC8+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmZ1bmN0aW9uIFRvcExldmVsTmF2KCkge1xuICBsZXQgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcbiAgbGV0IGN1cnJlbnQgPSBwYXRobmFtZS5zcGxpdCgnLycpWzFdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiL2RvY3NcIlxuICAgICAgICBpc0FjdGl2ZT17Y3VycmVudCA9PT0gJycgfHwgY3VycmVudCA9PT0gJ2RvY3MnfVxuICAgICAgICBjb2xvcj1cInBpbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNOSA2QzEwLjA5MjkgNiAxMS4xMTc1IDYuMjkyMTggMTIgNi44MDI2OVYxNi44MDI3QzExLjExNzUgMTYuMjkyMiAxMC4wOTI5IDE2IDkgMTZDNy45MDcxNCAxNiA2Ljg4MjUyIDE2LjI5MjIgNiAxNi44MDI3VjYuODAyNjlDNi44ODI1MiA2LjI5MjE4IDcuOTA3MTQgNiA5IDZaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGRkYxRjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTUgNkMxNi4wOTI5IDYgMTcuMTE3NSA2LjI5MjE4IDE4IDYuODAyNjlWMTYuODAyN0MxNy4xMTc1IDE2LjI5MjIgMTYuMDkyOSAxNiAxNSAxNkMxMy45MDcxIDE2IDEyLjg4MjUgMTYuMjkyMiAxMiAxNi44MDI3VjYuODAyNjlDMTIuODgyNSA2LjI5MjE4IDEzLjkwNzEgNiAxNSA2WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkVDREQzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAg0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vY29tcG9uZW50cz91dG1fc291cmNlPXRhaWx3aW5kY3NzJnV0bV9tZWRpdW09bmF2aWdhdGlvblwiXG4gICAgICAgIGNvbG9yPVwidmlvbGV0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgOWw2LTMgNiAzdjZsLTYgMy02LTNWOXpcIiBmaWxsPVwiI0Y1RjNGRlwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgOWw2IDN2NmwtNi0zVjl6XCIgZmlsbD1cIiNEREQ2RkVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOCA5bC02IDN2Nmw2LTNWOXpcIiBmaWxsPVwiI0M0QjVGRFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAg0JrQvtC80L/QvtC90LXQvdGC0YtcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgPFRvcExldmVsTGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5LnRhaWx3aW5kY3NzLmNvbVwiXG4gICAgICAgIGNvbG9yPVwiYW1iZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTMuMTk2IDYuMDJhMSAxIDAgMDEuNzg1IDEuMTc2bC0yIDEwYTEgMSAwIDAxLTEuOTYxLS4zOTJsMi0xMGExIDEgMCAwMTEuMTc2LS43ODR6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGREU2OEFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTUuMjkzIDkuMjkzYTEgMSAwIDAxMS40MTQgMGwyIDJhMSAxIDAgMDEwIDEuNDE0bC0yIDJhMSAxIDAgMDEtMS40MTQtMS40MTRMMTYuNTg2IDEybC0xLjI5My0xLjI5M2ExIDEgMCAwMTAtMS40MTR6TTguNzA3IDkuMjkzYTEgMSAwIDAxMCAxLjQxNEw3LjQxNCAxMmwxLjI5MyAxLjI5M2ExIDEgMCAxMS0xLjQxNCAxLjQxNGwtMi0yYTEgMSAwIDAxMC0xLjQxNGwyLTJhMSAxIDAgMDExLjQxNCAwelwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjRkRGNEZGXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgUGxheWdyb3VuZFxuICAgICAgPC9Ub3BMZXZlbExpbms+XG4gICAgICA8VG9wTGV2ZWxMaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tXCJcbiAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgIGljb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTggOWExIDEgMCAwMTEtMWg4YTEgMSAwIDAxMSAxdjcuNWExLjUgMS41IDAgMDEtMS41IDEuNWgtN0ExLjUgMS41IDAgMDE4IDE2LjVWOXpcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzZFRTdCN1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0xNSA3YTEgMSAwIDAwLTEtMUg3YTEgMSAwIDAwLTEgMXY5LjVBMS41IDEuNSAwIDAwNy41IDE4SDE2di0uMDg1YTEuNSAxLjUgMCAwMS0xLTEuNDE1Vjd6XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNFQ0ZERjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjQTdGM0QwXCIgZD1cIk04IDhoNXY0SDh6TTggMTRoNXYySDh6XCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBOZXdzXG4gICAgICA8L1RvcExldmVsTGluaz5cbiAgICAgIDxUb3BMZXZlbExpbmtcbiAgICAgICAgaHJlZj1cIi9yZXNvdXJjZXNcIlxuICAgICAgICBpc0FjdGl2ZT17Y3VycmVudCA9PT0gJ3Jlc291cmNlcyd9XG4gICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICBpY29uPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNyAxM2ExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMUg4LjVhMi41IDIuNSAwIDAxMC01SDE3elwiIGZpbGw9XCIjOTNDNUZEXCIgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMTIuNzQzIDcuNzIyYTEgMSAwIDAxMS40MTQgMGwyLjEyMiAyLjEyMWExIDEgMCAwMTAgMS40MTRsLTYuMDEgNi4wMWEyLjUgMi41IDAgMTEtMy41MzYtMy41MzZsNi4wMS02LjAxelwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjQkZEQkZFXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYgN2ExIDEgMCAwMTEtMWgzYTEgMSAwIDAxMSAxdjguNWEyLjUgMi41IDAgMDEtNSAwVjd6XCIgZmlsbD1cIiNFRkY2RkZcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjUgMTUuNWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6XCIgZmlsbD1cIiM2MEE1RkFcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIFJlc291cmNlc1xuICAgICAgPC9Ub3BMZXZlbExpbms+XG4gICAgICA8VG9wTGV2ZWxMaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS90YWlsd2luZGxhYnNcIlxuICAgICAgICBjb2xvcj1cInB1cnBsZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTEwXCJcbiAgICAgICAgaWNvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiN1wiIGZpbGw9XCIjRjNFOEZGXCIgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMTQuNTIgMTEuMTM2YTEgMSAwIDAxMCAxLjcyOGwtMy4wMTYgMS43NTlBMSAxIDAgMDExMCAxMy43NTl2LTMuNTE4YTEgMSAwIDAxMS41MDQtLjg2NGwzLjAxNSAxLjc2elwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjQzA4NEZDXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgU2NyZWVuY2FzdHNcbiAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyTGF5b3V0KHsgY2hpbGRyZW4sIG5hdklzT3Blbiwgc2V0TmF2SXNPcGVuLCBuYXYsIHNpZGViYXIsIGZhbGxiYWNrSHJlZiB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNpZGViYXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hdiwgbmF2SXNPcGVuLCBzZXROYXZJc09wZW4gfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy04eGwgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXhcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cInNpZGViYXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgJ2ZpeGVkIHotNDAgaW5zZXQtMCBmbGV4LW5vbmUgaC1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgdy1mdWxsIGxnOmJnLXdoaXRlIGxnOnN0YXRpYyBsZzpoLWF1dG8gbGc6b3ZlcmZsb3cteS12aXNpYmxlIGxnOnB0LTAgbGc6dy02MCB4bDp3LTcyIGxnOmJsb2NrJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhpZGRlbjogIW5hdklzT3BlbixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwibmF2V3JhcHBlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvIHNjcm9sbGluZy10b3VjaCBsZzpoLWF1dG8gbGc6YmxvY2sgbGc6cmVsYXRpdmUgbGc6c3RpY2t5IGxnOmJnLXRyYW5zcGFyZW50IG92ZXJmbG93LWhpZGRlbiBsZzp0b3AtMTggYmctd2hpdGUgbXItMjQgbGc6bXItMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtMTIgcG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC14LTAgei0xMCBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8TmF2IG5hdj17bmF2fSBmYWxsYmFja0hyZWY9e2ZhbGxiYWNrSHJlZn0+XG4gICAgICAgICAgICAgICAge3NpZGViYXJ9XG4gICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJjb250ZW50LXdyYXBwZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnbWluLXctMCB3LWZ1bGwgZmxleC1hdXRvIGxnOnN0YXRpYyBsZzptYXgtaC1mdWxsIGxnOm92ZXJmbG93LXZpc2libGUnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ292ZXJmbG93LWhpZGRlbiBtYXgtaC1zY3JlZW4gZml4ZWQnOiBuYXZJc09wZW4sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2lkZWJhckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=