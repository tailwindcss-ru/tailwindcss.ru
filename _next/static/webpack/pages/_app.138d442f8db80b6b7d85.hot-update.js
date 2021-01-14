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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIkFDVElPTl9LRVlfREVGQVVMVCIsIkFDVElPTl9LRVlfQVBQTEUiLCJIaXQiLCJoaXQiLCJjaGlsZHJlbiIsInVybCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VhcmNoQnV0dG9uUmVmIiwidXNlUmVmIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0SW5pdGlhbFF1ZXJ5IiwiYWN0aW9uS2V5Iiwic2V0QWN0aW9uS2V5Iiwib25PcGVuIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwib25JbnB1dCIsImUiLCJrZXkiLCJ1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImNyZWF0ZVBvcnRhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJmYWNldEZpbHRlcnMiLCJkaXN0aW5jdCIsIm5hdmlnYXRlIiwic3VnZ2VzdGlvblVybCIsInB1c2giLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImhhc2giLCJwYXRobmFtZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUQsRUFBTSxTQUFOLENBQXpCOztBQUVBLFNBQVNDLEdBQVQsT0FBZ0M7QUFBQSxNQUFqQkMsR0FBaUIsUUFBakJBLEdBQWlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzlCLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsR0FBRyxD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QUFBQSxZQUFqQkMsYUFBaUIsU0FBakJBLGFBQWlCO0FBQzFCeEIsaUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUosY0FBTSxDQUFDNkIsSUFBUCxDQUFZRCxhQUFaO0FBQ0Q7QUFKUSxLQVhiO0FBaUJFLGdCQUFZLEVBQUVqQyxHQWpCaEI7QUFrQkUsa0JBQWMsRUFBRSx3QkFBQ21DLEtBQUQsRUFBVztBQUN6QixhQUFPQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDekI7QUFDQTtBQUNBLFlBQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQVY7QUFDQUYsU0FBQyxDQUFDRyxJQUFGLEdBQVNKLElBQUksQ0FBQ2xDLEdBQWQ7QUFFQSxZQUFNdUMsSUFBSSxHQUFHSixDQUFDLENBQUNJLElBQUYsS0FBVyxrQkFBWCxHQUFnQyxFQUFoQyxHQUFxQ0osQ0FBQyxDQUFDSSxJQUFwRDtBQUVBLCtDQUNLTCxJQURMO0FBRUVsQyxhQUFHLFlBQUttQyxDQUFDLENBQUNLLFFBQVAsU0FBa0JELElBQWxCO0FBRkw7QUFJRCxPQVpNLENBQVA7QUFhRCxLQWhDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFUsRUFtQ1ZILFFBQVEsQ0FBQ0ssSUFuQ0MsQ0ExQ2hCLENBREY7QUFrRkQ7O0dBM0hleEMsTTtVQUNDRSxxRCxFQXNCZmdCLDJFOzs7TUF2QmNsQixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTM4ZDQ0MmY4ZGI4MGI2YjdkODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgRG9jU2VhcmNoTW9kYWwsIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCdcblxuY29uc3QgQUNUSU9OX0tFWV9ERUZBVUxUID0gWydDdHJsICcsICdDb250cm9sJ11cbmNvbnN0IEFDVElPTl9LRVlfQVBQTEUgPSBbJ+KMmCcsICdDb21tYW5kJ11cblxuZnVuY3Rpb24gSGl0KHsgaGl0LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aGl0LnVybH0+XG4gICAgICA8YT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHNlYXJjaEJ1dHRvblJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IFtpbml0aWFsUXVlcnksIHNldEluaXRpYWxRdWVyeV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYWN0aW9uS2V5LCBzZXRBY3Rpb25LZXldID0gdXNlU3RhdGUoKVxuXG4gIGNvbnN0IG9uT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSlcbiAgfSwgW3NldElzT3Blbl0pXG5cbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH0sIFtzZXRJc09wZW5dKVxuXG4gIGNvbnN0IG9uSW5wdXQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0SXNPcGVuKHRydWUpXG4gICAgICBzZXRJbml0aWFsUXVlcnkoZS5rZXkpXG4gICAgfSxcbiAgICBbc2V0SXNPcGVuLCBzZXRJbml0aWFsUXVlcnldXG4gIClcblxuICB1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyh7XG4gICAgaXNPcGVuLFxuICAgIG9uT3BlbixcbiAgICBvbkNsb3NlLFxuICAgIG9uSW5wdXQsXG4gICAgc2VhcmNoQnV0dG9uUmVmLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoLyhNYWN8aVBob25lfGlQb2R8aVBhZCkvaS50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpIHtcbiAgICAgICAgc2V0QWN0aW9uS2V5KEFDVElPTl9LRVlfQVBQTEUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRBY3Rpb25LZXkoQUNUSU9OX0tFWV9ERUZBVUxUKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9CSDREOU9EMTZBLWRzbi5hbGdvbGlhLm5ldFwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByZWY9e3NlYXJjaEJ1dHRvblJlZn1cbiAgICAgICAgb25DbGljaz17b25PcGVufVxuICAgICAgICBjbGFzc05hbWU9XCJncm91cCBsZWFkaW5nLTYgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHNtOnNwYWNlLXgtNCBob3Zlcjp0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBRdWljayBzZWFyY2g8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+IGZvciBhbnl0aGluZzwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7YWN0aW9uS2V5ICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2sgdGV4dC1ncmF5LTQwMCB0ZXh0LXNtIGxlYWRpbmctNSBweS0wLjUgcHgtMS41IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXNzIDwvc3Bhbj5cbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgIDxhYmJyIHRpdGxlPXthY3Rpb25LZXlbMV19IGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIHthY3Rpb25LZXlbMF19XG4gICAgICAgICAgICAgIDwvYWJicj5cbiAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPiBhbmQgPC9zcGFuPlxuICAgICAgICAgICAgPGtiZCBjbGFzc05hbWU9XCJmb250LXNhbnNcIj5LPC9rYmQ+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+IHRvIHNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtpc09wZW4gJiZcbiAgICAgICAgY3JlYXRlUG9ydGFsKFxuICAgICAgICAgIDxEb2NTZWFyY2hNb2RhbFxuICAgICAgICAgICAgaW5pdGlhbFF1ZXJ5PXtpbml0aWFsUXVlcnl9XG4gICAgICAgICAgICBpbml0aWFsU2Nyb2xsWT17d2luZG93LnNjcm9sbFl9XG4gICAgICAgICAgICBzZWFyY2hQYXJhbWV0ZXJzPXt7XG4gICAgICAgICAgICAgIGZhY2V0RmlsdGVyczogJ3ZlcnNpb246djInLFxuICAgICAgICAgICAgICBkaXN0aW5jdDogMSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgaW5kZXhOYW1lPVwidGFpbHdpbmRjc3MtcnVcIlxuICAgICAgICAgICAgYXBpS2V5PVwiY2MzZjUwM2YyNmI0YWNhYTYyM2M0NjNlNWRiNGZlZjlcIlxuICAgICAgICAgICAgYXBwSWQ9XCJCSDREOU9EMTZBXCJcbiAgICAgICAgICAgIG5hdmlnYXRvcj17e1xuICAgICAgICAgICAgICBuYXZpZ2F0ZSh7IHN1Z2dlc3Rpb25VcmwgfSkge1xuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChzdWdnZXN0aW9uVXJsKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGhpdENvbXBvbmVudD17SGl0fVxuICAgICAgICAgICAgdHJhbnNmb3JtSXRlbXM9eyhpdGVtcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV2UgdHJhbnNmb3JtIHRoZSBhYnNvbHV0ZSBVUkwgaW50byBhIHJlbGF0aXZlIFVSTCB0b1xuICAgICAgICAgICAgICAgIC8vIGxldmVyYWdlIE5leHQncyBwcmVsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBpdGVtLnVybFxuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGEuaGFzaCA9PT0gJyNjb250ZW50LXdyYXBwZXInID8gJycgOiBhLmhhc2hcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgICAgdXJsOiBgJHthLnBhdGhuYW1lfSR7aGFzaH1gLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9