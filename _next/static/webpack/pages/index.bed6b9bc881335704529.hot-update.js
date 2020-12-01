webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/ReadyMadeComponents.js":
/*!****************************************************!*\
  !*** ./src/components/home/ReadyMadeComponents.js ***!
  \****************************************************/
/*! exports provided: ReadyMadeComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyMadeComponents", function() { return ReadyMadeComponents; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_home_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/home/common */ "./src/components/home/common.js");
/* harmony import */ var _components_GradientLockup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/GradientLockup */ "./src/components/GradientLockup.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var _img_icons_home_ready_made_components_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/img/icons/home/ready-made-components.svg */ "./src/img/icons/home/ready-made-components.svg");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");




var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\home\\ReadyMadeComponents.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function AnimatedImage(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      inView = _ref.inView,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["initial", "inView"]);

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].img, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    initial: false,
    animate: inView ? {
      opacity: 1,
      y: 0,
      x: 0
    } : _objectSpread({
      opacity: 0
    }, initial),
    transition: {
      duration: 1
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }));
}

_c = AnimatedImage;
function ReadyMadeComponents() {
  _s();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"])({
    threshold: 0.5,
    triggerOnce: true
  }),
      inViewRef = _useInView.ref,
      inView = _useInView.inView;

  return __jsx("section", {
    id: "ready-made-components",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["IconContainer"], {
    className: "".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_6__["gradients"].violet[0], " mb-8"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_img_icons_home_ready_made_components_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["Caption"], {
    as: "h2",
    className: "text-violet-600 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B"), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["BigText"], {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["Widont"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "\u0414\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044C \u0435\u0449\u0435 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 Tailwind.")), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://tailwindui.com/",
    className: "text-violet-600 hover:text-violet-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Learn more ->")), __jsx(_components_GradientLockup__WEBPACK_IMPORTED_MODULE_5__["GradientLockup"], {
    color: "violet",
    rotate: -2,
    left: __jsx("div", {
      className: "-mx-8",
      ref: inViewRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "relative",
      style: {
        paddingTop: "".concat(1811 / 3771 * 100, "%")
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("svg", {
      className: "absolute inset-0 w-full h-full",
      viewBox: "0 0 3771 1811",
      fill: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("clipPath", {
      id: "foo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, __jsx("rect", {
      x: "2028",
      y: "1214",
      width: "256",
      height: "500",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "1716",
      y: "1030",
      width: "280",
      height: "535",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "1716",
      y: "934",
      width: "1276",
      height: "64",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "2028",
      y: "1030",
      width: "380",
      height: "152",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "2428",
      y: "1030",
      width: "380",
      height: "152",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "2828",
      y: "1030",
      width: "380",
      height: "152",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "799",
      y: "307",
      width: "885",
      height: "595",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "244",
      y: "934",
      width: "1440",
      height: "778",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "2808",
      y: "1214",
      width: "880",
      height: "361",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx("rect", {
      x: "1716",
      y: "449",
      width: "1440",
      height: "453",
      rx: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }))), __jsx("image", {
      clipPath: "url(#foo)",
      xlinkHref: __webpack_require__(/*! @/img/tailwindui.jpg */ "./src/img/tailwindui.jpg").default,
      width: "3771",
      height: "1811",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    })), __jsx(AnimatedImage, {
      src: __webpack_require__(/*! @/img/tailwindui-table.png */ "./src/img/tailwindui-table.png").default,
      alt: "",
      className: "absolute shadow-2xl rounded-md",
      style: {
        top: 0,
        left: "".concat(1356 / 3771 * 100, "%"),
        width: "".concat(1410 / 3771 * 100, "%")
      },
      initial: {
        y: '-20%'
      },
      inView: inView,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }), __jsx(AnimatedImage, {
      src: __webpack_require__(/*! @/img/tailwindui-workcation.png */ "./src/img/tailwindui-workcation.png").default,
      alt: "",
      className: "absolute shadow-2xl rounded-md",
      style: {
        right: 0,
        top: "".concat(377 / 1811 * 100, "%"),
        width: "".concat(819 / 3771 * 100, "%")
      },
      initial: {
        x: '10%'
      },
      inView: inView,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }), __jsx(AnimatedImage, {
      src: __webpack_require__(/*! @/img/tailwindui-form.png */ "./src/img/tailwindui-form.png").default,
      alt: "",
      className: "absolute shadow-2xl rounded-md",
      style: {
        bottom: 0,
        left: "".concat(2300 / 3771 * 100, "%"),
        width: "".concat(690 / 3771 * 100, "%")
      },
      initial: {
        y: '15%'
      },
      inView: inView,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }), __jsx(AnimatedImage, {
      src: __webpack_require__(/*! @/img/tailwindui-projects.png */ "./src/img/tailwindui-projects.png").default,
      alt: "",
      className: "absolute shadow-2xl rounded-md",
      style: {
        left: 0,
        top: "".concat(462 / 1811 * 100, "%"),
        width: "".concat(1057 / 3771 * 100, "%")
      },
      initial: {
        x: '-10%'
      },
      inView: inView,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }));
}

_s(ReadyMadeComponents, "sCmNOtWNv6mhimDHsjxUqXvkIYg=", false, function () {
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"]];
});

_c2 = ReadyMadeComponents;

var _c, _c2;

$RefreshReg$(_c, "AnimatedImage");
$RefreshReg$(_c2, "ReadyMadeComponents");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9SZWFkeU1hZGVDb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGVkSW1hZ2UiLCJpbml0aWFsIiwiaW5WaWV3IiwicHJvcHMiLCJvcGFjaXR5IiwieSIsIngiLCJkdXJhdGlvbiIsIlJlYWR5TWFkZUNvbXBvbmVudHMiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlld1JlZiIsInJlZiIsImdyYWRpZW50cyIsInZpb2xldCIsInBhZGRpbmdUb3AiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBMkQ7QUFBQSwwQkFBbENDLE9BQWtDO0FBQUEsTUFBbENBLE9BQWtDLDZCQUF4QixFQUF3QjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFUQyxLQUFTOztBQUN6RCxTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFLEtBRFg7QUFFRSxXQUFPLEVBQUVELE1BQU0sR0FBRztBQUFFRSxhQUFPLEVBQUUsQ0FBWDtBQUFjQyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUFIO0FBQWtDRixhQUFPLEVBQUU7QUFBM0MsT0FBaURILE9BQWpELENBRmpCO0FBR0UsY0FBVSxFQUFFO0FBQUVNLGNBQVEsRUFBRTtBQUFaO0FBSGQsS0FJTUosS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFRRDs7S0FUUUgsYTtBQVdGLFNBQVNRLG1CQUFULEdBQStCO0FBQUE7O0FBQUEsbUJBQ0RDLDZFQUFTLENBQUM7QUFBRUMsYUFBUyxF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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkNvbnRhaW5lciwgQ2FwdGlvbiwgQmlnVGV4dCwgUGFyYWdyYXBoLCBMaW5rLCBXaWRvbnQgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9jb21tb24nXG5pbXBvcnQgeyBHcmFkaWVudExvY2t1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9HcmFkaWVudExvY2t1cCdcbmltcG9ydCB7IGdyYWRpZW50cyB9IGZyb20gJ0AvdXRpbHMvZ3JhZGllbnRzJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgSWNvbiB9IGZyb20gJ0AvaW1nL2ljb25zL2hvbWUvcmVhZHktbWFkZS1jb21wb25lbnRzLnN2ZydcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmZ1bmN0aW9uIEFuaW1hdGVkSW1hZ2UoeyBpbml0aWFsID0ge30sIGluVmlldywgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uaW1nXG4gICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgIGFuaW1hdGU9e2luVmlldyA/IHsgb3BhY2l0eTogMSwgeTogMCwgeDogMCB9IDogeyBvcGFjaXR5OiAwLCAuLi5pbml0aWFsIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVhZHlNYWRlQ29tcG9uZW50cygpIHtcbiAgY29uc3QgeyByZWY6IGluVmlld1JlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAuNSwgdHJpZ2dlck9uY2U6IHRydWUgfSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicmVhZHktbWFkZS1jb21wb25lbnRzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC04IG1iLTEwIHNtOm1iLTE2IG1kOm1iLTIwXCI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyIGNsYXNzTmFtZT17YCR7Z3JhZGllbnRzLnZpb2xldFswXX0gbWItOGB9PlxuICAgICAgICAgIDxJY29uIC8+XG4gICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgPENhcHRpb24gYXM9XCJoMlwiIGNsYXNzTmFtZT1cInRleHQtdmlvbGV0LTYwMCBtYi0zXCI+XG4gICAgICAgICAg0JPQvtGC0L7QstGL0LUg0LrQvtC80L/QvtC90LXQvdGC0YtcbiAgICAgICAgPC9DYXB0aW9uPlxuICAgICAgICA8QmlnVGV4dCBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPFdpZG9udD7QlNCy0LjQs9Cw0LnRgtC10YHRjCDQtdGJ0LUg0LHRi9GB0YLRgNC10LUg0YEg0L/QvtC80L7RidGM0Y4g0LjQvdGC0LXRgNGE0LXQudGB0LAgVGFpbHdpbmQuPC9XaWRvbnQ+XG4gICAgICAgIDwvQmlnVGV4dD5cbiAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgVGFpbHdpbmQgVUkgaXMgYSBjb2xsZWN0aW9uIG9mIGJlYXV0aWZ1bCwgZnVsbHkgcmVzcG9uc2l2ZSBVSSBjb21wb25lbnRzLCBkZXNpZ25lZCBhbmRcbiAgICAgICAgICBkZXZlbG9wZWQgYnkgdXMsIHRoZSBjcmVhdG9ycyBvZiBUYWlsd2luZCBDU1MuIEl0J3MgZ290IGh1bmRyZWRzIG9mIHJlYWR5LXRvLXVzZSBleGFtcGxlc1xuICAgICAgICAgIHRvIGNob29zZSBmcm9tLCBhbmQgaXMgZ3VhcmFudGVlZCB0byBoZWxwIHlvdSBmaW5kIHRoZSBwZXJmZWN0IHN0YXJ0aW5nIHBvaW50IGZvciB3aGF0IHlvdVxuICAgICAgICAgIHdhbnQgdG8gYnVpbGQuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWlsd2luZHVpLmNvbS9cIiBjbGFzc05hbWU9XCJ0ZXh0LXZpb2xldC02MDAgaG92ZXI6dGV4dC12aW9sZXQtODAwXCI+XG4gICAgICAgICAgTGVhcm4gbW9yZSAtJmd0O1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxHcmFkaWVudExvY2t1cFxuICAgICAgICBjb2xvcj1cInZpb2xldFwiXG4gICAgICAgIHJvdGF0ZT17LTJ9XG4gICAgICAgIGxlZnQ9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LThcIiByZWY9e2luVmlld1JlZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogYCR7KDE4MTEgLyAzNzcxKSAqIDEwMH0lYCB9fT5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiB2aWV3Qm94PVwiMCAwIDM3NzEgMTgxMVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJmb29cIj5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjIwMjhcIiB5PVwiMTIxNFwiIHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiNTAwXCIgcng9XCI4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE3MTZcIiB5PVwiMTAzMFwiIHdpZHRoPVwiMjgwXCIgaGVpZ2h0PVwiNTM1XCIgcng9XCI4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjE3MTZcIiB5PVwiOTM0XCIgd2lkdGg9XCIxMjc2XCIgaGVpZ2h0PVwiNjRcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjAyOFwiIHk9XCIxMDMwXCIgd2lkdGg9XCIzODBcIiBoZWlnaHQ9XCIxNTJcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjQyOFwiIHk9XCIxMDMwXCIgd2lkdGg9XCIzODBcIiBoZWlnaHQ9XCIxNTJcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjgyOFwiIHk9XCIxMDMwXCIgd2lkdGg9XCIzODBcIiBoZWlnaHQ9XCIxNTJcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiNzk5XCIgeT1cIjMwN1wiIHdpZHRoPVwiODg1XCIgaGVpZ2h0PVwiNTk1XCIgcng9XCI4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD1cIjI0NFwiIHk9XCI5MzRcIiB3aWR0aD1cIjE0NDBcIiBoZWlnaHQ9XCI3NzhcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjgwOFwiIHk9XCIxMjE0XCIgd2lkdGg9XCI4ODBcIiBoZWlnaHQ9XCIzNjFcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTcxNlwiIHk9XCI0NDlcIiB3aWR0aD1cIjE0NDBcIiBoZWlnaHQ9XCI0NTNcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICBjbGlwUGF0aD1cInVybCgjZm9vKVwiXG4gICAgICAgICAgICAgICAgICB4bGlua0hyZWY9e3JlcXVpcmUoJ0AvaW1nL3RhaWx3aW5kdWkuanBnJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzc3MVwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxODExXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPEFuaW1hdGVkSW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJ0AvaW1nL3RhaWx3aW5kdWktdGFibGUucG5nJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNoYWRvdy0yeGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGAkeygxMzU2IC8gMzc3MSkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KDE0MTAgLyAzNzcxKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogJy0yMCUnIH19XG4gICAgICAgICAgICAgICAgaW5WaWV3PXtpblZpZXd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBbmltYXRlZEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCdAL2ltZy90YWlsd2luZHVpLXdvcmtjYXRpb24ucG5nJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNoYWRvdy0yeGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgdG9wOiBgJHsoMzc3IC8gMTgxMSkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KDgxOSAvIDM3NzEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAnMTAlJyB9fVxuICAgICAgICAgICAgICAgIGluVmlldz17aW5WaWV3fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnQC9pbWcvdGFpbHdpbmR1aS1mb3JtLnBuZycpLmRlZmF1bHR9XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBzaGFkb3ctMnhsIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBgJHsoMjMwMCAvIDM3NzEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyg2OTAgLyAzNzcxKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogJzE1JScgfX1cbiAgICAgICAgICAgICAgICBpblZpZXc9e2luVmlld31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFuaW1hdGVkSW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJ0AvaW1nL3RhaWx3aW5kdWktcHJvamVjdHMucG5nJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNoYWRvdy0yeGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IGAkeyg0NjIgLyAxODExKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoMTA1NyAvIDM3NzEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAnLTEwJScgfX1cbiAgICAgICAgICAgICAgICBpblZpZXc9e2luVmlld31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==