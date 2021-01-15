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
  }, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 "), __jsx("kbd", {
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
  }, " \u0438 "), __jsx("kbd", {
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
  }, " \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430"))), isOpen && /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(__jsx(_docsearch_react__WEBPACK_IMPORTED_MODULE_6__["DocSearchModal"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm5hbWVzIjpbIkFDVElPTl9LRVlfREVGQVVMVCIsIkFDVElPTl9LRVlfQVBQTEUiLCJIaXQiLCJoaXQiLCJjaGlsZHJlbiIsInVybCIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VhcmNoQnV0dG9uUmVmIiwidXNlUmVmIiwiaW5pdGlhbFF1ZXJ5Iiwic2V0SW5pdGlhbFF1ZXJ5IiwiYWN0aW9uS2V5Iiwic2V0QWN0aW9uS2V5Iiwib25PcGVuIiwidXNlQ2FsbGJhY2siLCJvbkNsb3NlIiwib25JbnB1dCIsImUiLCJrZXkiLCJ1c2VEb2NTZWFyY2hLZXlib2FyZEV2ZW50cyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImNyZWF0ZVBvcnRhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJuYXZpZ2F0ZSIsInN1Z2dlc3Rpb25VcmwiLCJwdXNoIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJoYXNoIiwicGF0aG5hbWUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxDQUFDLE9BQUQsRUFBVSxTQUFWLENBQTNCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFELEVBQU0sU0FBTixDQUF6Qjs7QUFFQSxTQUFTQyxHQUFULE9BQWdDO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM5QixTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELEdBQUcsQ0FBQ0UsR0FBaEI7QUFBQTtBQUFBO0FBQUE7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WjtBQUNEO0FBSlEsS0FQYjtBQWFFLGdCQUFZLEVBQUUvQixHQWJoQjtBQWNFLGtCQUFjLEVBQUUsd0JBQUNpQyxLQUFELEVBQVc7QUFDekIsYUFBT0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCO0FBQ0E7QUFDQSxZQUFNQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFWO0FBQ0FGLFNBQUMsQ0FBQ0csSUFBRixHQUFTSixJQUFJLENBQUNoQyxHQUFkO0FBRUEsWUFBTXFDLElBQUksR0FBR0osQ0FBQyxDQUFDSSxJQUFGLEtBQVcsa0JBQVgsR0FBZ0MsRUFBaEMsR0FBcUNKLENBQUMsQ0FBQ0ksSUFBcEQ7QUFFQSwrQ0FDS0wsSUFETDtBQUVFaEMsYUFBRyxZQUFLaUMsQ0FBQyxDQUFDSyxRQUFQLFNBQWtCRCxJQUFsQjtBQUZMO0FBSUQsT0FaTSxDQUFQO0FBYUQsS0E1Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURVLEVBK0JWSCxRQUFRLENBQUNLLElBL0JDLENBMUNoQixDQURGO0FBOEVEOztHQXZIZXRDLE07VUFDQ0UscUQsRUFzQmZnQiwyRTs7O01BdkJjbEIsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEyNGQzYjI0OGZkMGI3MTRkYTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBEb2NTZWFyY2hNb2RhbCwgdXNlRG9jU2VhcmNoS2V5Ym9hcmRFdmVudHMgfSBmcm9tICdAZG9jc2VhcmNoL3JlYWN0J1xyXG5cclxuY29uc3QgQUNUSU9OX0tFWV9ERUZBVUxUID0gWydDdHJsICcsICdDb250cm9sJ11cclxuY29uc3QgQUNUSU9OX0tFWV9BUFBMRSA9IFsn4oyYJywgJ0NvbW1hbmQnXVxyXG5cclxuZnVuY3Rpb24gSGl0KHsgaGl0LCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hpdC51cmx9PlxyXG4gICAgICA8YT57Y2hpbGRyZW59PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBzZWFyY2hCdXR0b25SZWYgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IFtpbml0aWFsUXVlcnksIHNldEluaXRpYWxRdWVyeV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthY3Rpb25LZXksIHNldEFjdGlvbktleV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IG9uT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzT3Blbih0cnVlKVxyXG4gIH0sIFtzZXRJc09wZW5dKVxyXG5cclxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH0sIFtzZXRJc09wZW5dKVxyXG5cclxuICBjb25zdCBvbklucHV0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBzZXRJc09wZW4odHJ1ZSlcclxuICAgICAgc2V0SW5pdGlhbFF1ZXJ5KGUua2V5KVxyXG4gICAgfSxcclxuICAgIFtzZXRJc09wZW4sIHNldEluaXRpYWxRdWVyeV1cclxuICApXHJcblxyXG4gIHVzZURvY1NlYXJjaEtleWJvYXJkRXZlbnRzKHtcclxuICAgIGlzT3BlbixcclxuICAgIG9uT3BlbixcclxuICAgIG9uQ2xvc2UsXHJcbiAgICBvbklucHV0LFxyXG4gICAgc2VhcmNoQnV0dG9uUmVmLFxyXG4gIH0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kudGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7XHJcbiAgICAgICAgc2V0QWN0aW9uS2V5KEFDVElPTl9LRVlfQVBQTEUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QWN0aW9uS2V5KEFDVElPTl9LRVlfREVGQVVMVClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL0JINEQ5T0QxNkEtZHNuLmFsZ29saWEubmV0XCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgcmVmPXtzZWFyY2hCdXR0b25SZWZ9XHJcbiAgICAgICAgb25DbGljaz17b25PcGVufVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGxlYWRpbmctNiBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgc206c3BhY2UteC00IGhvdmVyOnRleHQtZ3JheS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICDQkdGL0YHRgtGA0YvQuSDQv9C+0LjRgdC6PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPiDRh9C10LPQviDRg9Cz0L7QtNC90L48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHthY3Rpb25LZXkgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrIHRleHQtZ3JheS00MDAgdGV4dC1zbSBsZWFkaW5nLTUgcHktMC41IHB4LTEuNSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPtCd0LDQttC80LjRgtC1IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGtiZCBjbGFzc05hbWU9XCJmb250LXNhbnNcIj5cclxuICAgICAgICAgICAgICA8YWJiciB0aXRsZT17YWN0aW9uS2V5WzFdfSBjbGFzc05hbWU9XCJuby11bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIHthY3Rpb25LZXlbMF19XHJcbiAgICAgICAgICAgICAgPC9hYmJyPlxyXG4gICAgICAgICAgICA8L2tiZD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPiDQuCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+Szwva2JkPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+INC00LvRjyDQv9C+0LjRgdC60LA8L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICA8RG9jU2VhcmNoTW9kYWxcclxuICAgICAgICAgICAgaW5pdGlhbFF1ZXJ5PXtpbml0aWFsUXVlcnl9XHJcbiAgICAgICAgICAgIGluaXRpYWxTY3JvbGxZPXt3aW5kb3cuc2Nyb2xsWX1cclxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgaW5kZXhOYW1lPVwidGFpbHdpbmRjc3MtcnVcIlxyXG4gICAgICAgICAgICBhcGlLZXk9XCJjYzNmNTAzZjI2YjRhY2FhNjIzYzQ2M2U1ZGI0ZmVmOVwiXHJcbiAgICAgICAgICAgIGFwcElkPVwiQkg0RDlPRDE2QVwiXHJcbiAgICAgICAgICAgIG5hdmlnYXRvcj17e1xyXG4gICAgICAgICAgICAgIG5hdmlnYXRlKHsgc3VnZ2VzdGlvblVybCB9KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChzdWdnZXN0aW9uVXJsKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGhpdENvbXBvbmVudD17SGl0fVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1JdGVtcz17KGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJhbnNmb3JtIHRoZSBhYnNvbHV0ZSBVUkwgaW50byBhIHJlbGF0aXZlIFVSTCB0b1xyXG4gICAgICAgICAgICAgICAgLy8gbGV2ZXJhZ2UgTmV4dCdzIHByZWxvYWRpbmcuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBpdGVtLnVybFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhLmhhc2ggPT09ICcjY29udGVudC13cmFwcGVyJyA/ICcnIDogYS5oYXNoXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBgJHthLnBhdGhuYW1lfSR7aGFzaH1gLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPixcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHlcclxuICAgICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=