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
  }, "Tailwind UI - \u044D\u0442\u043E \u043D\u0430\u0431\u043E\u0440 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0445, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0445 \u043D\u0430\u043C\u0438, \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044F\u043C\u0438 Tailwind CSS. \u0423 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0441\u043E\u0442\u043D\u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440, \u0438 \u043E\u043D \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u043C \u043D\u0430\u0439\u0442\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043E\u0442\u043F\u0440\u0430\u0432\u043D\u0443\u044E \u0442\u043E\u0447\u043A\u0443 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://tailwindui.com/",
    className: "text-violet-600 hover:text-violet-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 ->")), __jsx(_components_GradientLockup__WEBPACK_IMPORTED_MODULE_5__["GradientLockup"], {
    color: "violet",
    rotate: -2,
    left: __jsx("div", {
      className: "-mx-8",
      ref: inViewRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
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
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("svg", {
      className: "absolute inset-0 w-full h-full",
      viewBox: "0 0 3771 1811",
      fill: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("clipPath", {
      id: "foo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 50,
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
        lineNumber: 51,
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
        lineNumber: 52,
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
        lineNumber: 53,
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
        lineNumber: 54,
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
        lineNumber: 55,
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
        lineNumber: 56,
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
        lineNumber: 57,
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
        lineNumber: 58,
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
        lineNumber: 59,
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
        lineNumber: 62,
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
        lineNumber: 69,
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
        lineNumber: 81,
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
        lineNumber: 93,
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
        lineNumber: 105,
        columnNumber: 15
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9SZWFkeU1hZGVDb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGVkSW1hZ2UiLCJpbml0aWFsIiwiaW5WaWV3IiwicHJvcHMiLCJvcGFjaXR5IiwieSIsIngiLCJkdXJhdGlvbiIsIlJlYWR5TWFkZUNvbXBvbmVudHMiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlld1JlZiIsInJlZiIsImdyYWRpZW50cyIsInZpb2xldCIsInBhZGRpbmdUb3AiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBMkQ7QUFBQSwwQkFBbENDLE9BQWtDO0FBQUEsTUFBbENBLE9BQWtDLDZCQUF4QixFQUF3QjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFUQyxLQUFTOztBQUN6RCxTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFLEtBRFg7QUFFRSxXQUFPLEVBQUVELE1BQU0sR0FBRztBQUFFRSxhQUFPLEVBQUUsQ0FBWDtBQUFjQyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLE9BQUMsRUFBRTtBQUF2QixLQUFIO0FBQWtDRixhQUFPLEVBQUU7QUFBM0MsT0FBaURILE9BQWpELENBRmpCO0FBR0UsY0FBVSxFQUFFO0FBQUVNLGNBQVEsRUFBRTtBQUFaO0FBSGQsS0FJTUosS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFRRDs7S0FUUUgsYTtBQVdGLFNBQVNRLG1CQUFULEdBQStCO0FBQUE7O0FBQUEsbUJBQ0RDLDZFQUFTLENBQUM7QUFBRUMsYUFBUyxF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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQ29udGFpbmVyLCBDYXB0aW9uLCBCaWdUZXh0LCBQYXJhZ3JhcGgsIExpbmssIFdpZG9udCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL2NvbW1vbidcbmltcG9ydCB7IEdyYWRpZW50TG9ja3VwIH0gZnJvbSAnQC9jb21wb25lbnRzL0dyYWRpZW50TG9ja3VwJ1xuaW1wb3J0IHsgZ3JhZGllbnRzIH0gZnJvbSAnQC91dGlscy9ncmFkaWVudHMnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uIH0gZnJvbSAnQC9pbWcvaWNvbnMvaG9tZS9yZWFkeS1tYWRlLWNvbXBvbmVudHMuc3ZnJ1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZnVuY3Rpb24gQW5pbWF0ZWRJbWFnZSh7IGluaXRpYWwgPSB7fSwgaW5WaWV3LCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5pbWdcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBvcGFjaXR5OiAxLCB5OiAwLCB4OiAwIH0gOiB7IG9wYWNpdHk6IDAsIC4uLmluaXRpYWwgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWFkeU1hZGVDb21wb25lbnRzKCkge1xuICBjb25zdCB7IHJlZjogaW5WaWV3UmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7IHRocmVzaG9sZDogMC41LCB0cmlnZ2VyT25jZTogdHJ1ZSB9KVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJyZWFkeS1tYWRlLWNvbXBvbmVudHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTggbWItMTAgc206bWItMTYgbWQ6bWItMjBcIj5cbiAgICAgICAgPEljb25Db250YWluZXIgY2xhc3NOYW1lPXtgJHtncmFkaWVudHMudmlvbGV0WzBdfSBtYi04YH0+XG4gICAgICAgICAgPEljb24gLz5cbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICA8Q2FwdGlvbiBhcz1cImgyXCIgY2xhc3NOYW1lPVwidGV4dC12aW9sZXQtNjAwIG1iLTNcIj5cbiAgICAgICAgICDQk9C+0YLQvtCy0YvQtSDQutC+0LzQv9C+0L3QtdC90YLRi1xuICAgICAgICA8L0NhcHRpb24+XG4gICAgICAgIDxCaWdUZXh0IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICA8V2lkb250PtCU0LLQuNCz0LDQudGC0LXRgdGMINC10YnQtSDQsdGL0YHRgtGA0LXQtSDRgSDQv9C+0LzQvtGJ0YzRjiDQuNC90YLQtdGA0YTQtdC50YHQsCBUYWlsd2luZC48L1dpZG9udD5cbiAgICAgICAgPC9CaWdUZXh0PlxuICAgICAgICA8UGFyYWdyYXBoIGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICBUYWlsd2luZCBVSSAtINGN0YLQviDQvdCw0LHQvtGAINC60YDQsNGB0LjQstGL0YUsINC/0L7Qu9C90L7RgdGC0YzRjiDQvtGC0LfRi9Cy0YfQuNCy0YvRhSDQutC+0LzQv9C+0L3QtdC90YLQvtCyINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0LjQvdGC0LXRgNGE0LXQudGB0LAsINGB0L/RgNC+0LXQutGC0LjRgNC+0LLQsNC90L3Ri9GFINC4INGA0LDQt9GA0LDQsdC+0YLQsNC90L3Ri9GFINC90LDQvNC4LCDRgdC+0LfQtNCw0YLQtdC70Y/QvNC4IFRhaWx3aW5kIENTUy4g0KMg0L3QtdCz0L4g0LXRgdGC0Ywg0YHQvtGC0L3QuCDQs9C+0YLQvtCy0YvRhSDQv9GA0LjQvNC10YDQvtCyINC90LAg0LLRi9Cx0L7RgCwg0Lgg0L7QvSDQs9Cw0YDQsNC90YLQuNGA0L7QstCw0L3QvdC+INC/0L7QvNC+0LbQtdGCINCS0LDQvCDQvdCw0LnRgtC4INC40LTQtdCw0LvRjNC90YPRjiDQvtGC0L/RgNCw0LLQvdGD0Y4g0YLQvtGH0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQviDQktGLINGF0L7RgtC40YLQtSDRgdC+0LfQtNCw0YLRjC5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL1wiIGNsYXNzTmFtZT1cInRleHQtdmlvbGV0LTYwMCBob3Zlcjp0ZXh0LXZpb2xldC04MDBcIj5cbiAgICAgICAgICDQo9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1IC0mZ3Q7XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdyYWRpZW50TG9ja3VwXG4gICAgICAgIGNvbG9yPVwidmlvbGV0XCJcbiAgICAgICAgcm90YXRlPXstMn1cbiAgICAgICAgbGVmdD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXgtOFwiIHJlZj17aW5WaWV3UmVmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBgJHsoMTgxMSAvIDM3NzEpICogMTAwfSVgIH19PlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbFwiIHZpZXdCb3g9XCIwIDAgMzc3MSAxODExXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImZvb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjAyOFwiIHk9XCIxMjE0XCIgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCI1MDBcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTcxNlwiIHk9XCIxMDMwXCIgd2lkdGg9XCIyODBcIiBoZWlnaHQ9XCI1MzVcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMTcxNlwiIHk9XCI5MzRcIiB3aWR0aD1cIjEyNzZcIiBoZWlnaHQ9XCI2NFwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyMDI4XCIgeT1cIjEwMzBcIiB3aWR0aD1cIjM4MFwiIGhlaWdodD1cIjE1MlwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyNDI4XCIgeT1cIjEwMzBcIiB3aWR0aD1cIjM4MFwiIGhlaWdodD1cIjE1MlwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyODI4XCIgeT1cIjEwMzBcIiB3aWR0aD1cIjM4MFwiIGhlaWdodD1cIjE1MlwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI3OTlcIiB5PVwiMzA3XCIgd2lkdGg9XCI4ODVcIiBoZWlnaHQ9XCI1OTVcIiByeD1cIjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMjQ0XCIgeT1cIjkzNFwiIHdpZHRoPVwiMTQ0MFwiIGhlaWdodD1cIjc3OFwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIyODA4XCIgeT1cIjEyMTRcIiB3aWR0aD1cIjg4MFwiIGhlaWdodD1cIjM2MVwiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxNzE2XCIgeT1cIjQ0OVwiIHdpZHRoPVwiMTQ0MFwiIGhlaWdodD1cIjQ1M1wiIHJ4PVwiOFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICAgIGNsaXBQYXRoPVwidXJsKCNmb28pXCJcbiAgICAgICAgICAgICAgICAgIHhsaW5rSHJlZj17cmVxdWlyZSgnQC9pbWcvdGFpbHdpbmR1aS5qcGcnKS5kZWZhdWx0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNzcxXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4MTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnQC9pbWcvdGFpbHdpbmR1aS10YWJsZS5wbmcnKS5kZWZhdWx0fVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgc2hhZG93LTJ4bCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgbGVmdDogYCR7KDEzNTYgLyAzNzcxKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoMTQxMCAvIDM3NzEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAnLTIwJScgfX1cbiAgICAgICAgICAgICAgICBpblZpZXc9e2luVmlld31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEFuaW1hdGVkSW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoJ0AvaW1nL3RhaWx3aW5kdWktd29ya2NhdGlvbi5wbmcnKS5kZWZhdWx0fVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgc2hhZG93LTJ4bCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICB0b3A6IGAkeygzNzcgLyAxODExKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoODE5IC8gMzc3MSkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6ICcxMCUnIH19XG4gICAgICAgICAgICAgICAgaW5WaWV3PXtpblZpZXd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxBbmltYXRlZEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCdAL2ltZy90YWlsd2luZHVpLWZvcm0ucG5nJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNoYWRvdy0yeGwgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGAkeygyMzAwIC8gMzc3MSkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KDY5MCAvIDM3NzEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAnMTUlJyB9fVxuICAgICAgICAgICAgICAgIGluVmlldz17aW5WaWV3fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QW5pbWF0ZWRJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnQC9pbWcvdGFpbHdpbmR1aS1wcm9qZWN0cy5wbmcnKS5kZWZhdWx0fVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgc2hhZG93LTJ4bCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogYCR7KDQ2MiAvIDE4MTEpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeygxMDU3IC8gMzc3MSkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6ICctMTAlJyB9fVxuICAgICAgICAgICAgICAgIGluVmlldz17aW5WaWV3fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9