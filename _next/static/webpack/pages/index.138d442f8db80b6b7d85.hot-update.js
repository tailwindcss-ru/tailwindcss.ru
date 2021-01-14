webpackHotUpdate_N_E("pages/index",{

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


var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\Search.js",
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
  }, "Quick search", __jsx("span", {
    className: "hidden sm:inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, " for anything")), actionKey && __jsx("span", {
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
    searchParameters: {
      facetFilters: 'version:v2',
      distinct: 1
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIkFDVElPTl9LRVlfREVGQVVMVCIsIkFDVElPTl9LRVlfQVBQTEUiLCJIaXQiLCJoaXQiLCJjaGlsZHJlbiIsInVybCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VhcmNoQnV0dG9uUmVmIiwidXNlUmVmIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0SW5pdGlhbFF1ZXJ5IiwiYWN0aW9uS2V5Iiwic2V0QWN0aW9uS2V5Iiwib25PcGVuIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwib25JbnB1dCIsImUiLCJrZXkiLCJ1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImNyZWF0ZVBvcnRhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJmYWNldEZpbHRlcnMiLCJkaXN0aW5jdCIsIm5hdmlnYXRlIiwic3VnZ2VzdGlvblVybCIsInB1c2giLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImhhc2giLCJwYXRobmFtZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUQsRUFBTSxTQUFOLENBQXpCOztBQUVBLFNBQVNDLEdBQVQsT0FBZ0M7QUFBQSxNQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzlCLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsR0FBRyxD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QUFBQSxZQUFqQkMsYUFBaUIsU0FBakJBLGFBQWlCO0FBQzFCeEIsaUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUosY0FBTSxDQUFDNkIsSUFBUCxDQUFZRCxhQUFaO0FBQ0Q7QUFKUSxLQVhiO0FBaUJFLGdCQUFZLEVBQUVqQyxHQWpCaEI7QUFrQkUsa0JBQWMsRUFBRSx3QkFBQ21DLEtBQUQsRUFBVztBQUN6QixhQUFPQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDekI7QUFDQTtBQUNBLFlBQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQUYsU0FBQyxDQUFDRyxJQUFGLEdBQVNKLElBQUksQ0FBQ2xDLEdBQWQ7QUFFQSxZQUFNdUMsSUFBSSxHQUFHSixDQUFDLENBQUNJLElBQUYsS0FBVyxrQkFBWCxHQUFnQyxFQUFoQyxHQUFxQ0osQ0FBQyxDQUFDSSxJQUFwRDtBQUVBLCtDQUNLTCxJQURMO0FBRUVsQyxhQUFHLFlBQUttQyxDQUFDLENBQUNLLFFBQVAsU0FBa0JELElBQWxCO0FBRkw7QUFJRCxPQVpNLENBQVA7QUFhRCxLQWhDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFUsRUFtQ1ZILFFBQVEsQ0FBQ0ssSUFuQ0MsQ0ExQ2hCLENBREY7QUFrRkQ7O0dBM0hleEMsTTtVQUNDRSxxRCxFQXNCZmdCLDJFOzs7TUF2QmNsQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzOGQ0NDJmOGRiODBiNmI3ZDg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IERvY1NlYXJjaE1vZGFsLCB1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyB9IGZyb20gJ0Bkb2NzZWFyY2gvcmVhY3QnXG5cbmNvbnN0IEFDVElPTl9LRVlfREVGQVVMVCA9IFsnQ3RybCAnLCAnQ29udHJvbCddXG5jb25zdCBBQ1RJT05fS0VZX0FQUExFID0gWyfijJgnLCAnQ29tbWFuZCddXG5cbmZ1bmN0aW9uIEhpdCh7IGhpdCwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hpdC51cmx9PlxuICAgICAgPGE+e2NoaWxkcmVufTwvYT5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzZWFyY2hCdXR0b25SZWYgPSB1c2VSZWYoKVxuICBjb25zdCBbaW5pdGlhbFF1ZXJ5LCBzZXRJbml0aWFsUXVlcnldID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2FjdGlvbktleSwgc2V0QWN0aW9uS2V5XSA9IHVzZVN0YXRlKClcblxuICBjb25zdCBvbk9wZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpXG4gIH0sIFtzZXRJc09wZW5dKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICB9LCBbc2V0SXNPcGVuXSlcblxuICBjb25zdCBvbklucHV0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHNldElzT3Blbih0cnVlKVxuICAgICAgc2V0SW5pdGlhbFF1ZXJ5KGUua2V5KVxuICAgIH0sXG4gICAgW3NldElzT3Blbiwgc2V0SW5pdGlhbFF1ZXJ5XVxuICApXG5cbiAgdXNlRG9jU2VhcmNoS2V5Ym9hcmRFdmVudHMoe1xuICAgIGlzT3BlbixcbiAgICBvbk9wZW4sXG4gICAgb25DbG9zZSxcbiAgICBvbklucHV0LFxuICAgIHNlYXJjaEJ1dHRvblJlZixcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7XG4gICAgICAgIHNldEFjdGlvbktleShBQ1RJT05fS0VZX0FQUExFKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QWN0aW9uS2V5KEFDVElPTl9LRVlfREVGQVVMVClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vQkg0RDlPRDE2QS1kc24uYWxnb2xpYS5uZXRcIiBjcm9zc09yaWdpbj1cInRydWVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgcmVmPXtzZWFyY2hCdXR0b25SZWZ9XG4gICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgbGVhZGluZy02IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBzbTpzcGFjZS14LTQgaG92ZXI6dGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgUXVpY2sgc2VhcmNoPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPiBmb3IgYW55dGhpbmc8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2FjdGlvbktleSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHRleHQtZ3JheS00MDAgdGV4dC1zbSBsZWFkaW5nLTUgcHktMC41IHB4LTEuNSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmVzcyA8L3NwYW4+XG4gICAgICAgICAgICA8a2JkIGNsYXNzTmFtZT1cImZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICA8YWJiciB0aXRsZT17YWN0aW9uS2V5WzFdfSBjbGFzc05hbWU9XCJuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uS2V5WzBdfVxuICAgICAgICAgICAgICA8L2FiYnI+XG4gICAgICAgICAgICA8L2tiZD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4gYW5kIDwvc3Bhbj5cbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+Szwva2JkPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPiB0byBzZWFyY2g8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNPcGVuICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICA8RG9jU2VhcmNoTW9kYWxcbiAgICAgICAgICAgIGluaXRpYWxRdWVyeT17aW5pdGlhbFF1ZXJ5fVxuICAgICAgICAgICAgaW5pdGlhbFNjcm9sbFk9e3dpbmRvdy5zY3JvbGxZfVxuICAgICAgICAgICAgc2VhcmNoUGFyYW1ldGVycz17e1xuICAgICAgICAgICAgICBmYWNldEZpbHRlcnM6ICd2ZXJzaW9uOnYyJyxcbiAgICAgICAgICAgICAgZGlzdGluY3Q6IDEsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIGluZGV4TmFtZT1cInRhaWx3aW5kY3NzLXJ1XCJcbiAgICAgICAgICAgIGFwaUtleT1cImNjM2Y1MDNmMjZiNGFjYWE2MjNjNDYzZTVkYjRmZWY5XCJcbiAgICAgICAgICAgIGFwcElkPVwiQkg0RDlPRDE2QVwiXG4gICAgICAgICAgICBuYXZpZ2F0b3I9e3tcbiAgICAgICAgICAgICAgbmF2aWdhdGUoeyBzdWdnZXN0aW9uVXJsIH0pIHtcbiAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goc3VnZ2VzdGlvblVybClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBoaXRDb21wb25lbnQ9e0hpdH1cbiAgICAgICAgICAgIHRyYW5zZm9ybUl0ZW1zPXsoaXRlbXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdlIHRyYW5zZm9ybSB0aGUgYWJzb2x1dGUgVVJMIGludG8gYSByZWxhdGl2ZSBVUkwgdG9cbiAgICAgICAgICAgICAgICAvLyBsZXZlcmFnZSBOZXh0J3MgcHJlbG9hZGluZy5cbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgYS5ocmVmID0gaXRlbS51cmxcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhLmhhc2ggPT09ICcjY29udGVudC13cmFwcGVyJyA/ICcnIDogYS5oYXNoXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgIHVybDogYCR7YS5wYXRobmFtZX0ke2hhc2h9YCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==