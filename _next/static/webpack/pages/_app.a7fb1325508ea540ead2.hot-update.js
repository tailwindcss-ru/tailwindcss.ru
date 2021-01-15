webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _docsearch_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @docsearch/react */ "./node_modules/@docsearch/react/dist/esm/index.js");


var _jsxFileName = "C:\\OSPanel\\projects\\tailwindcss.su\\src\\components\\Search.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ACTION_KEY_DEFAULT = ['Ctrl ', 'Control'];
var ACTION_KEY_APPLE = ['⌘', 'Command'];

function Hit(_ref) {
  var hit = _ref.hit,
      children = _ref.children;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: hit.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, children));
}

_c = Hit;
function Search() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var searchButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      initialQuery = _useState2[0],
      setInitialQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      actionKey = _useState3[0],
      setActionKey = _useState3[1];

  var onOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsOpen(true);
  }, [setIsOpen]);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsOpen(false);
  }, [setIsOpen]);
  var onInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setIsOpen(true);
    setInitialQuery(e.key);
  }, [setIsOpen, setInitialQuery]);
  Object(_docsearch_react__WEBPACK_IMPORTED_MODULE_6__["useDocSearchKeyboardEvents"])({
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    onInput: onInput,
    searchButtonRef: searchButtonRef
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof navigator !== 'undefined') {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_APPLE);
      } else {
        setActionKey(ACTION_KEY_DEFAULT);
      }
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "preconnect",
    href: "https://BH4D9OD16A-dsn.algolia.net",
    crossOrigin: "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx("button", {
    type: "button",
    ref: searchButtonRef,
    onClick: onOpen,
    className: "group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    className: "text-gray-400 group-hover:text-gray-500 transition-colors duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u043E\u0438\u0441\u043A", __jsx("span", {
    className: "hidden sm:inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 24
    }
  }, " \u0447\u0435\u0433\u043E \u0443\u0433\u043E\u0434\u043D\u043E")), actionKey && __jsx("span", {
    className: "hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Press "), __jsx("kbd", {
    className: "font-sans",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("abbr", {
    title: actionKey[1],
    className: "no-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, actionKey[0])), __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, " and "), __jsx("kbd", {
    className: "font-sans",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "K"), __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, " to search"))), isOpen && /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(__jsx(_docsearch_react__WEBPACK_IMPORTED_MODULE_6__["DocSearchModal"], {
    initialQuery: initialQuery,
    initialScrollY: window.scrollY,
    onClose: onClose,
    indexName: "tailwindcss-ru",
    apiKey: "cc3f503f26b4acaa623c463e5db4fef9",
    appId: "BH4D9OD16A",
    navigator: {
      navigate: function navigate(_ref2) {
        var suggestionUrl = _ref2.suggestionUrl;
        setIsOpen(false);
        router.push(suggestionUrl);
      }
    },
    hitComponent: Hit,
    transformItems: function transformItems(items) {
      return items.map(function (item) {
        // We transform the absolute URL into a relative URL to
        // leverage Next's preloading.
        var a = document.createElement('a');
        a.href = item.url;
        var hash = a.hash === '#content-wrapper' ? '' : a.hash;
        return _objectSpread(_objectSpread({}, item), {}, {
          url: "".concat(a.pathname).concat(hash)
        });
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), document.body));
}

_s(Search, "w6ANdaTTuByvp0k4gjZdR3kuLYk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _docsearch_react__WEBPACK_IMPORTED_MODULE_6__["useDocSearchKeyboardEvents"]];
});

_c2 = Search;

var _c, _c2;

$RefreshReg$(_c, "Hit");
$RefreshReg$(_c2, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIkFDVElPTl9LRVlfREVGQVVMVCIsIkFDVElPTl9LRVlfQVBQTEUiLCJIaXQiLCJoaXQiLCJjaGlsZHJlbiIsInVybCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VhcmNoQnV0dG9uUmVmIiwidXNlUmVmIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0SW5pdGlhbFF1ZXJ5IiwiYWN0aW9uS2V5Iiwic2V0QWN0aW9uS2V5Iiwib25PcGVuIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwib25JbnB1dCIsImUiLCJrZXkiLCJ1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImNyZWF0ZVBvcnRhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJuYXZpZ2F0ZSIsInN1Z2dlc3Rpb25VcmwiLCJwdXNoIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJoYXNoIiwicGF0aG5hbWUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxDQUFDLE9BQUQsRUFBVSxTQUFWLENBQTNCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFELEVBQU0sU0FBTixDQUF6Qjs7QUFFQSxTQUFTQyxHQUFULE9BQWdDO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM5QixTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELEdBQUcsQ0FBQ0UsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUQsUUFBSixDQURGLENBREY7QUFLRDs7S0FOUUYsRztBQVFGLFNBQVNJLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsa0JBRUtDLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFaEJDLE1BRmdCO0FBQUEsTUFFUkMsU0FGUTs7QUFHdkIsTUFBTUMsZUFBZSxHQUFHQyxvREFBTSxFQUE5Qjs7QUFIdUIsbUJBSWlCSixzREFBUSxDQUFDLElBQUQsQ0FKekI7QUFBQSxNQUloQkssWUFKZ0I7QUFBQSxNQUlGQyxlQUpFOztBQUFBLG1CQUtXTixzREFBUSxFQUxuQjtBQUFBLE1BS2hCTyxTQUxnQjtBQUFBLE1BS0xDLFlBTEs7O0FBT3ZCLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CUixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FGeUIsRUFFdkIsQ0FBQ0EsU0FBRCxDQUZ1QixDQUExQjtBQUlBLE1BQU1TLE9BQU8sR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQ2hDUixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGMEIsRUFFeEIsQ0FBQ0EsU0FBRCxDQUZ3QixDQUEzQjtBQUlBLE1BQU1VLE9BQU8sR0FBR0YseURBQVcsQ0FDekIsVUFBQ0csQ0FBRCxFQUFPO0FBQ0xYLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUksbUJBQWUsQ0FBQ08sQ0FBQyxDQUFDQyxHQUFILENBQWY7QUFDRCxHQUp3QixFQUt6QixDQUFDWixTQUFELEVBQVlJLGVBQVosQ0FMeUIsQ0FBM0I7QUFRQVMscUZBQTBCLENBQUM7QUFDekJkLFVBQU0sRUFBTkEsTUFEeUI7QUFFekJRLFVBQU0sRUFBTkEsTUFGeUI7QUFHekJFLFdBQU8sRUFBUEEsT0FIeUI7QUFJekJDLFdBQU8sRUFBUEEsT0FKeUI7QUFLekJULG1CQUFlLEVBQWZBO0FBTHlCLEdBQUQsQ0FBMUI7QUFRQWEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDLFVBQUksMEJBQTBCQyxJQUExQixDQUErQkQsU0FBUyxDQUFDRSxRQUF6QyxDQUFKLEVBQXdEO0FBQ3REWCxvQkFBWSxDQUFDaEIsZ0JBQUQsQ0FBWjtBQUNELE9BRkQsTUFFTztBQUNMZ0Isb0JBQVksQ0FBQ2pCLGtCQUFELENBQVo7QUFDRDtBQUNGO0FBQ0YsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsb0NBQTVCO0FBQWlFLGVBQVcsRUFBQyxNQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxPQUFHLEVBQUVZLGVBRlA7QUFHRSxXQUFPLEVBQUVNLE1BSFg7QUFJRSxhQUFTLEVBQUMseUhBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsU0FBSyxFQUFDLElBRFI7QUFFRSxVQUFNLEVBQUMsSUFGVDtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsYUFBUyxFQUFDLHdFQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLEtBQUMsRUFBQyw2Q0FESjtBQUVFLFVBQU0sRUFBQyxjQUZUO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxpQkFBYSxFQUFDLE9BSmhCO0FBS0Usa0JBQWMsRUFBQyxPQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FORixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtGQUNlO0FBQU0sYUFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQURmLENBcEJGLEVBdUJHRixTQUFTLElBQ1I7QUFBTSxhQUFTLEVBQUMsaUdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRUEsU0FBUyxDQUFDLENBQUQsQ0FBdEI7QUFBMkIsYUFBUyxFQUFDLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsU0FBUyxDQUFDLENBQUQsQ0FEWixDQURGLENBRkYsRUFPRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsRUFRRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FSRixFQVNFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsQ0F4QkosQ0FKRixFQXlDR04sTUFBTSxpQkFDTG1CLDhEQUFZLENBQ1YsTUFBQywrREFBRDtBQUNFLGdCQUFZLEVBQUVmLFlBRGhCO0FBRUUsa0JBQWMsRUFBRWdCLE1BQU0sQ0FBQ0MsT0FGekI7QUFHRSxXQUFPLEVBQUVYLE9BSFg7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxVQUFNLEVBQUMsa0NBTFQ7QUFNRSxTQUFLLEVBQUMsWUFOUjtBQU9FLGFBQVMsRUFBRTtBQUNUWSxjQURTLDJCQUNtQjtBQUFBLFlBQWpCQyxhQUFpQixTQUFqQkEsYUFBaUI7QUFDMUJ0QixpQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSixjQUFNLENBQUMyQixJQUFQLENBQVlELGFBQVo7QUFDRDtBQUpRLEtBUGI7QUFhRSxnQkFBWSxFQUFFL0IsR0FiaEI7QUFjRSxrQkFBYyxFQUFFLHdCQUFDaUMsS0FBRCxFQUFXO0FBQ3pCLGFBQU9BLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUN6QjtBQUNBO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNBRixTQUFDLENBQUNHLElBQUYsR0FBU0osSUFBSSxDQUFDaEMsR0FBZDtBQUVBLFlBQU1xQyxJQUFJLEdBQUdKLENBQUMsQ0FBQ0ksSUFBRixLQUFXLGtCQUFYLEdBQWdDLEVBQWhDLEdBQXFDSixDQUFDLENBQUNJLElBQXBEO0FBRUEsK0NBQ0tMLElBREw7QUFFRWhDLGFBQUcsWUFBS2lDLENBQUMsQ0FBQ0ssUUFBUCxTQUFrQkQsSUFBbEI7QUFGTDtBQUlELE9BWk0sQ0FBUDtBQWFELEtBNUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEVSxFQStCVkgsUUFBUSxDQUFDSyxJQS9CQyxDQTFDaEIsQ0FERjtBQThFRDs7R0F2SGV0QyxNO1VBQ0NFLHFELEVBc0JmZ0IsMkU7OztNQXZCY2xCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hN2ZiMTMyNTUwOGVhNTQwZWFkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRG9jU2VhcmNoTW9kYWwsIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCdcclxuXHJcbmNvbnN0IEFDVElPTl9LRVlfREVGQVVMVCA9IFsnQ3RybCAnLCAnQ29udHJvbCddXHJcbmNvbnN0IEFDVElPTl9LRVlfQVBQTEUgPSBbJ+KMmCcsICdDb21tYW5kJ11cclxuXHJcbmZ1bmN0aW9uIEhpdCh7IGhpdCwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtoaXQudXJsfT5cclxuICAgICAgPGE+e2NoaWxkcmVufTwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uUmVmID0gdXNlUmVmKClcclxuICBjb25zdCBbaW5pdGlhbFF1ZXJ5LCBzZXRJbml0aWFsUXVlcnldID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbYWN0aW9uS2V5LCBzZXRBY3Rpb25LZXldID0gdXNlU3RhdGUoKVxyXG5cclxuICBjb25zdCBvbk9wZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSlcclxuICB9LCBbc2V0SXNPcGVuXSlcclxuXHJcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICB9LCBbc2V0SXNPcGVuXSlcclxuXHJcbiAgY29uc3Qgb25JbnB1dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0SXNPcGVuKHRydWUpXHJcbiAgICAgIHNldEluaXRpYWxRdWVyeShlLmtleSlcclxuICAgIH0sXHJcbiAgICBbc2V0SXNPcGVuLCBzZXRJbml0aWFsUXVlcnldXHJcbiAgKVxyXG5cclxuICB1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyh7XHJcbiAgICBpc09wZW4sXHJcbiAgICBvbk9wZW4sXHJcbiAgICBvbkNsb3NlLFxyXG4gICAgb25JbnB1dCxcclxuICAgIHNlYXJjaEJ1dHRvblJlZixcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGlmICgvKE1hY3xpUGhvbmV8aVBvZHxpUGFkKS9pLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSkge1xyXG4gICAgICAgIHNldEFjdGlvbktleShBQ1RJT05fS0VZX0FQUExFKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFjdGlvbktleShBQ1RJT05fS0VZX0RFRkFVTFQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9CSDREOU9EMTZBLWRzbi5hbGdvbGlhLm5ldFwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIHJlZj17c2VhcmNoQnV0dG9uUmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cclxuICAgICAgICBjbGFzc05hbWU9XCJncm91cCBsZWFkaW5nLTYgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHNtOnNwYWNlLXgtNCBob3Zlcjp0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAg0JHRi9GB0YLRgNGL0Lkg0L/QvtC40YHQujxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmVcIj4g0YfQtdCz0L4g0YPQs9C+0LTQvdC+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB7YWN0aW9uS2V5ICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayB0ZXh0LWdyYXktNDAwIHRleHQtc20gbGVhZGluZy01IHB5LTAuNSBweC0xLjUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmVzcyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+XHJcbiAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9e2FjdGlvbktleVsxXX0gY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICB7YWN0aW9uS2V5WzBdfVxyXG4gICAgICAgICAgICAgIDwvYWJicj5cclxuICAgICAgICAgICAgPC9rYmQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4gYW5kIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGtiZCBjbGFzc05hbWU9XCJmb250LXNhbnNcIj5LPC9rYmQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4gdG8gc2VhcmNoPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgPERvY1NlYXJjaE1vZGFsXHJcbiAgICAgICAgICAgIGluaXRpYWxRdWVyeT17aW5pdGlhbFF1ZXJ5fVxyXG4gICAgICAgICAgICBpbml0aWFsU2Nyb2xsWT17d2luZG93LnNjcm9sbFl9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIGluZGV4TmFtZT1cInRhaWx3aW5kY3NzLXJ1XCJcclxuICAgICAgICAgICAgYXBpS2V5PVwiY2MzZjUwM2YyNmI0YWNhYTYyM2M0NjNlNWRiNGZlZjlcIlxyXG4gICAgICAgICAgICBhcHBJZD1cIkJINEQ5T0QxNkFcIlxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I9e3tcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZSh7IHN1Z2dlc3Rpb25VcmwgfSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goc3VnZ2VzdGlvblVybClcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBoaXRDb21wb25lbnQ9e0hpdH1cclxuICAgICAgICAgICAgdHJhbnNmb3JtSXRlbXM9eyhpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIHRyYW5zZm9ybSB0aGUgYWJzb2x1dGUgVVJMIGludG8gYSByZWxhdGl2ZSBVUkwgdG9cclxuICAgICAgICAgICAgICAgIC8vIGxldmVyYWdlIE5leHQncyBwcmVsb2FkaW5nLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgICAgICAgICAgICAgYS5ocmVmID0gaXRlbS51cmxcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gYS5oYXNoID09PSAnI2NvbnRlbnQtd3JhcHBlcicgPyAnJyA6IGEuaGFzaFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIHVybDogYCR7YS5wYXRobmFtZX0ke2hhc2h9YCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz4sXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9