webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/Performance.js":
/*!********************************************!*\
  !*** ./src/components/home/Performance.js ***!
  \********************************************/
/*! exports provided: Performance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return Performance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/common */ "./src/components/home/common.js");
/* harmony import */ var _components_GradientLockup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GradientLockup */ "./src/components/GradientLockup.js");
/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CodeWindow */ "./src/components/CodeWindow.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var _img_icons_home_performance_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/img/icons/home/performance.svg */ "./src/img/icons/home/performance.svg");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _utils_addClassTokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/addClassTokens */ "./src/utils/addClassTokens.js");
/* harmony import */ var _utils_shuffleSeed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/shuffleSeed */ "./src/utils/shuffleSeed.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\home\\Performance.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var DURATION = 6.5;
var BASE_RANGE = [0, 5000];

function Counter(_ref) {
  _s();

  var from = _ref.from,
      to = _ref.to,
      _ref$round = _ref.round,
      round = _ref$round === void 0 ? 0 : _ref$round,
      progress = _ref.progress;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var value = Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(progress, BASE_RANGE, [from, to], {
    clamp: false
  });

  var _Intl$NumberFormat = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: round,
    maximumFractionDigits: round
  }),
      formatNumber = _Intl$NumberFormat.format;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return value.onChange(function (v) {
      ref.current.firstChild.data = formatNumber(round === 0 ? Math.round(v) : v.toFixed(round));
    });
  }, []);
  return __jsx("span", {
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, formatNumber(value.get()));
}

_s(Counter, "Rvq/G3FTltFPmZm5GeN/6iyPvWw=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"]];
});

_c = Counter;
var _lines = {
  "lines": [[{
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "  "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "    "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "rounded-lg shadow-xs overflow-hidden"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "      "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "p-4"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "        "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "flex items-start"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "flex-shrink-0"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "svg"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "h-6 w-6 text-green-400"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "xmlns"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "http://www.w3.org/2000/svg"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "fill"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "none"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "viewBox"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "0 0 24 24"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "stroke"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "currentColor"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "              "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "path"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "stroke-linecap"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "round"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "stroke-linejoin"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "round"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "stroke-width"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "2"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "d"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "punctuation"],
    "content": "/>"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "svg"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "ml-3 w-0 flex-1 pt-0.5"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "p"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "text-sm font-medium text-gray-900"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "              Успешно сохранено!"
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "p"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "p"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "mt-1 text-sm text-gray-500"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "              Anyone with a link can now view this file."
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "p"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "ml-4 flex-shrink-0 flex"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "button"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "              "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "svg"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "class"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "h-5 w-5"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "xmlns"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "http://www.w3.org/2000/svg"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "viewBox"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "0 0 20 20"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "fill"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "currentColor"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "                "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "path"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "fill-rule"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "evenodd"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "d"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "clip-rule"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "evenodd"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "punctuation"],
    "content": "/>"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "              "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "svg"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "            "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "button"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "          "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "        "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "      "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "    "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "  "
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": ""
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "div"
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": ""
  }], [{
    "types": ["plain"],
    "content": "",
    "empty": true
  }]]
},
    lines = _lines.lines;
Object(_utils_addClassTokens__WEBPACK_IMPORTED_MODULE_8__["addClassTokens2"])(lines);
var allClasses = 'fixed flex-col rounded-sm shadow px-4 justify-content text-center flex-shrink-0 md:text-left h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto text-lg text-purple-500 md:text-left text-gray-600 text-green-400 text-blue-500 rounded-pill p-4 max-w-screen-xl mt-5 leading-7 whitespace-nowrap sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none flex-1 xl:mx-0 xl:grid-cols-4 border border-gray-200 text-4xl leading-6 leading-10 font-extrabold  leading-5 h-5 w-5 text-green-500 text-5xl leading-none font-extrabold text-white tracking-tight border-t text-sm border-indigo-600 py-4 font-medium px-5 flex items-center space-x-3 text-base leading-6 text-white absolute right-full ml-4 bottom-0 transform -translate-x-1/2 py-3 mx-4 w-full duration-150 h-full transition py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 px-5 py-3 appearance-none underline bg-indigo-700 min-w-full divide-y divide-gray-200 items-baseline text-indigo-600 hover:text-indigo-500'.split(' ');
var usedClasses = _utils_shuffleSeed__WEBPACK_IMPORTED_MODULE_9__["default"].shuffle('fixed px-4 flex-shrink-0 text-green-400 p-4 flex-1 leading-5 text-sm font-medium ml-4 transition'.split(' '), 1);
var unusedClasses = _utils_shuffleSeed__WEBPACK_IMPORTED_MODULE_9__["default"].shuffle(allClasses.filter(function (c) {
  return !usedClasses.includes(c);
}), 1);
function Performance() {
  _s2();

  var _this = this;

  var progress = Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"])(0);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["useInView"])({
    threshold: 0.5,
    triggerOnce: true
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!inView) return;
    Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["animate"])(progress, BASE_RANGE[1], {
      type: 'spring',
      damping: 50
    });
  }, [inView]);
  return __jsx("section", {
    id: "performance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["IconContainer"], {
    className: "".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_4__["gradients"].teal[0], " mb-8"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_img_icons_home_performance_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Caption"], {
    as: "h2",
    className: "text-teal-500 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Performance"), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["BigText"], {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "It\u2019s tiny in production."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10KB of CSS to the client."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/docs/optimizing-for-production",
    className: "text-teal-500 hover:text-teal-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, "Learn more ->")), __jsx(_components_GradientLockup__WEBPACK_IMPORTED_MODULE_2__["GradientLockup"], {
    color: "teal",
    rotate: 1,
    pin: "right",
    left: __jsx("div", {
      ref: ref,
      className: "relative z-10 rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 tabular-nums",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "bg-white rounded-tl-xl sm:rounded-t-xl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "absolute top-4 left-4 sm:top-6 sm:left-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx("svg", {
      viewBox: "0 0 64 64",
      className: "absolute inset-0 w-full h-full text-green-400",
      transform: "rotate(90) scale(1 -1)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].path, {
      d: "M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeDasharray: "0 1",
      initial: {
        pathLength: 0,
        strokeWidth: 6
      },
      animate: inView ? {
        pathLength: 1,
        strokeWidth: 12
      } : undefined,
      transition: {
        duration: DURATION
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "relative bg-white rounded-full w-10 h-10 shadow-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }), __jsx("svg", {
      viewBox: "0 0 64 64",
      className: "absolute inset-0 w-full h-full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].path, {
      d: "M22.668 33.333l5.333 5.334 13.334-13.334",
      fill: "none",
      stroke: "#22C55E",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "0 1",
      initial: {
        pathLength: 0,
        opacity: 0
      },
      animate: inView ? {
        pathLength: 1,
        opacity: 1
      } : undefined,
      transition: {
        pathLength: {
          delay: DURATION - 0.5,
          duration: 0.3
        },
        opacity: {
          delay: DURATION - 0.5,
          duration: 0
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }))), __jsx("dl", {
      className: "p-4 pb-0 sm:p-6 sm:pb-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "flex-none w-full pl-18 sm:pl-20 sm:py-0.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }
    }, __jsx("dt", {
      className: "text-sm font-medium",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, "Production build"), __jsx("dd", {
      className: "text-3xl sm:text-4xl font-extrabold text-gray-900",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, __jsx(Counter, {
      from: 2413.4,
      to: 8.7,
      round: 1,
      progress: progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }), "KB")), __jsx("div", {
      className: "flex items-center border-t border-gray-100 -mx-4 sm:-mx-6 mt-4 sm:mt-6 px-4 sm:px-6 py-3 font-mono text-xs leading-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    }, __jsx("dt", {
      className: "whitespace-pre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 19
      }
    }, "Purged "), __jsx("dd", {
      className: "flex-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 19
      }
    }, __jsx(Counter, {
      from: 0,
      to: 20144,
      progress: progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }
    }), " unused classes"), __jsx("dd", {
      className: "text-rose-700 hidden sm:flex lg:hidden xl:flex items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 21
      }
    }, "-", __jsx(Counter, {
      from: 0,
      to: 160215,
      progress: progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 24
      }
    }), " lines"), __jsx("svg", {
      viewBox: "0 0 82 12",
      width: "82",
      height: "12",
      className: "flex-none ml-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].rect, {
      width: "12",
      height: "12",
      fill: "#f43f5e",
      style: {
        fill: Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(progress, function (p) {
          return p >= BASE_RANGE[1] * 0.35 ? '#f43f5e' : '#e4e4e7';
        })
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 23
      }
    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].rect, {
      width: "12",
      height: "12",
      x: "14",
      style: {
        fill: Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(progress, function (p) {
          return p >= BASE_RANGE[1] * 0.75 ? '#f43f5e' : '#e4e4e7';
        })
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 23
      }
    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].rect, {
      width: "12",
      height: "12",
      x: "28",
      style: {
        fill: Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(progress, function (p) {
          return p >= BASE_RANGE[1] * 0.9 ? '#f43f5e' : '#e4e4e7';
        })
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 23
      }
    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].rect, {
      width: "12",
      height: "12",
      x: "42",
      style: {
        fill: Object(framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(progress, function (p) {
          return p >= BASE_RANGE[1] * 0.99 ? '#f43f5e' : '#e4e4e7';
        })
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 23
      }
    }), __jsx("rect", {
      width: "12",
      height: "12",
      x: "56",
      fill: "#e4e4e7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 23
      }
    }), __jsx("rect", {
      width: "12",
      height: "12",
      x: "70",
      fill: "#e4e4e7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 23
      }
    })))))), __jsx("div", {
      className: "relative bg-teal-700 lg:rounded-b-xl overflow-hidden p-4",
      style: {
        maxHeight: 251
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bg-black bg-opacity-75 absolute inset-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "relative font-mono text-xs sm:text-sm text-teal-200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    }, allClasses.map(function (c, i) {
      return usedClasses.includes(c) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('code-highlight whitespace-nowrap', {
          'animate-flash-code-slow': inView
        }),
        style: {
          animationDelay: "".concat(DURATION / usedClasses.length * usedClasses.indexOf(c), "s")
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 23
        }
      }, c), ' ') : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('transition-colors duration-500 whitespace-nowrap', {
          'text-teal-200': !inView,
          'text-teal-900': inView
        }),
        style: {
          transitionDelay: "".concat(DURATION / unusedClasses.length * unusedClasses.indexOf(c), "s")
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 23
        }
      }, c), ' ');
    })), __jsx("div", {
      className: "absolute inset-x-0 bottom-0 h-16 pointer-events-none",
      style: {
        backgroundImage: 'linear-gradient(to top, rgba(4, 30, 28, 1), rgba(4, 30, 28, 0))'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 15
      }
    }))),
    right: __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"], {
      className: "bg-cyan-500",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 11
      }
    }, __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"].Code2, {
      lines: lines.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 13
      }
    }, lines.map(function (tokens, lineIndex) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: lineIndex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 17
        }
      }, tokens.map(function (token, tokenIndex) {
        if (token.types[token.types.length - 1] === 'class' && usedClasses.includes(token.content)) {
          return __jsx("span", {
            key: tokenIndex,
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('code-highlight', Object(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["getClassNameForToken"])(token), {
              'animate-flash-code-slow': inView
            }),
            style: {
              animationDelay: "".concat(DURATION / usedClasses.length * usedClasses.indexOf(token.content), "s")
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 25
            }
          }, token.content);
        }

        return __jsx("span", {
          key: tokenIndex,
          className: Object(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["getClassNameForToken"])(token),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 23
          }
        }, token.content);
      }), '\n');
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }));
}

_s2(Performance, "e342gXn/SFZegQHJAGtedy1BE/k=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["useInView"], framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"], framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"], framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"], framer_motion__WEBPACK_IMPORTED_MODULE_6__["useTransform"]];
});

_c2 = Performance;

var _c, _c2;

$RefreshReg$(_c, "Counter");
$RefreshReg$(_c2, "Performance");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9QZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6WyJEVVJBVElPTiIsIkJBU0VfUkFOR0UiLCJDb3VudGVyIiwiZnJvbSIsInRvIiwicm91bmQiLCJwcm9ncmVzcyIsInJlZiIsInVzZVJlZiIsInZhbHVlIiwidXNlVHJhbnNmb3JtIiwiY2xhbXAiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0TnVtYmVyIiwiZm9ybWF0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJ2IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJkYXRhIiwiTWF0aCIsInRvRml4ZWQiLCJnZXQiLCJsaW5lcyIsImFkZENsYXNzVG9rZW5zMiIsImFsbENsYXNzZXMiLCJzcGxpdCIsInVzZWRDbGFzc2VzIiwic2h1ZmZsZVNlZWQiLCJzaHVmZmxlIiwidW51c2VkQ2xhc3NlcyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsIlBlcmZvcm1hbmNlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlldyIsImFuaW1hdGUiLCJ0eXBlIiwiZGFtcGluZyIsImdyYWRpZW50cyIsInRlYWwiLCJwYXRoTGVuZ3RoIiwic3Ryb2tlV2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJkZWxheSIsImZpbGwiLCJwIiwibWF4SGVpZ2h0IiwibWFwIiwiaSIsImNsc3giLCJhbmltYXRpb25EZWxheSIsImxlbmd0aCIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0eXBlcyIsImNvbnRlbnQiLCJnZXRDbGFzc05hbWVGb3JUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7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LEVBVUFBLDBELEVBVUFBLDBELEVBVUFBLDBEOzs7TUF2SWhCNkIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzFhZGY4OGYwNmJmYjhmMDgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkNvbnRhaW5lciwgQ2FwdGlvbiwgQmlnVGV4dCwgUGFyYWdyYXBoLCBMaW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvY29tbW9uJ1xuaW1wb3J0IHsgR3JhZGllbnRMb2NrdXAgfSBmcm9tICdAL2NvbXBvbmVudHMvR3JhZGllbnRMb2NrdXAnXG5pbXBvcnQgeyBDb2RlV2luZG93LCBnZXRDbGFzc05hbWVGb3JUb2tlbiB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlV2luZG93J1xuaW1wb3J0IHsgZ3JhZGllbnRzIH0gZnJvbSAnQC91dGlscy9ncmFkaWVudHMnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uIH0gZnJvbSAnQC9pbWcvaWNvbnMvaG9tZS9wZXJmb3JtYW5jZS5zdmcnXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgYW5pbWF0ZSwgdXNlTW90aW9uVmFsdWUsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXG5pbXBvcnQgeyB0b2tlbml6ZVdpdGhMaW5lcyB9IGZyb20gJy4uLy4uL21hY3Jvcy90b2tlbml6ZS5tYWNybydcbmltcG9ydCB7IGFkZENsYXNzVG9rZW5zMiB9IGZyb20gJ0AvdXRpbHMvYWRkQ2xhc3NUb2tlbnMnXG5pbXBvcnQgc2h1ZmZsZVNlZWQgZnJvbSAnQC91dGlscy9zaHVmZmxlU2VlZCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmNvbnN0IERVUkFUSU9OID0gNi41XG5jb25zdCBCQVNFX1JBTkdFID0gWzAsIDUwMDBdXG5cbmZ1bmN0aW9uIENvdW50ZXIoeyBmcm9tLCB0bywgcm91bmQgPSAwLCBwcm9ncmVzcyB9KSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IHZhbHVlID0gdXNlVHJhbnNmb3JtKHByb2dyZXNzLCBCQVNFX1JBTkdFLCBbZnJvbSwgdG9dLCB7IGNsYW1wOiBmYWxzZSB9KVxuICBjb25zdCB7IGZvcm1hdDogZm9ybWF0TnVtYmVyIH0gPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodW5kZWZpbmVkLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiByb3VuZCxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHJvdW5kLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlLm9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICByZWYuY3VycmVudC5maXJzdENoaWxkLmRhdGEgPSBmb3JtYXROdW1iZXIocm91bmQgPT09IDAgPyBNYXRoLnJvdW5kKHYpIDogdi50b0ZpeGVkKHJvdW5kKSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pntmb3JtYXROdW1iZXIodmFsdWUuZ2V0KCkpfTwvc3Bhbj5cbn1cblxuY29uc3QgeyBsaW5lcyB9ID0gdG9rZW5pemVXaXRoTGluZXMuaHRtbChcbiAgYDxkaXYgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTQgcHktNiBwb2ludGVyLWV2ZW50cy1ub25lIHNtOnAtNiBzbTppdGVtcy1zdGFydCBzbTpqdXN0aWZ5LWVuZFwiPlxuICA8ZGl2IGNsYXNzPVwibWF4LXctc20gdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHBvaW50ZXItZXZlbnRzLWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1sZyBzaGFkb3cteHMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJoLTYgdy02IHRleHQtZ3JlZW4tNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMyB3LTAgZmxleC0xIHB0LTAuNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAg0KPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdC+IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBBbnlvbmUgd2l0aCBhIGxpbmsgY2FuIG5vdyB2aWV3IHRoaXMgZmlsZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtNCBmbGV4LXNocmluay0wIGZsZXhcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmxpbmUtZmxleCB0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJoLTUgdy01XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxuKVxuXG5hZGRDbGFzc1Rva2VuczIobGluZXMpXG5cbmNvbnN0IGFsbENsYXNzZXMgPSAnZml4ZWQgZmxleC1jb2wgcm91bmRlZC1zbSBzaGFkb3cgcHgtNCBqdXN0aWZ5LWNvbnRlbnQgdGV4dC1jZW50ZXIgZmxleC1zaHJpbmstMCBtZDp0ZXh0LWxlZnQgaC0xNiB3LTE2IG1kOmgtMjQgbWQ6dy0yNCByb3VuZGVkLWZ1bGwgbXgtYXV0byB0ZXh0LWxnIHRleHQtcHVycGxlLTUwMCBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTYwMCB0ZXh0LWdyZWVuLTQwMCB0ZXh0LWJsdWUtNTAwIHJvdW5kZWQtcGlsbCBwLTQgbWF4LXctc2NyZWVuLXhsIG10LTUgbGVhZGluZy03IHdoaXRlc3BhY2Utbm93cmFwIHNtOmdhcC02IGxnOm1heC13LTR4bCBsZzpteC1hdXRvIHhsOm1heC13LW5vbmUgZmxleC0xIHhsOm14LTAgeGw6Z3JpZC1jb2xzLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LTR4bCBsZWFkaW5nLTYgbGVhZGluZy0xMCBmb250LWV4dHJhYm9sZCAgbGVhZGluZy01IGgtNSB3LTUgdGV4dC1ncmVlbi01MDAgdGV4dC01eGwgbGVhZGluZy1ub25lIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHQgYm9yZGVyLXQgdGV4dC1zbSBib3JkZXItaW5kaWdvLTYwMCBweS00IGZvbnQtbWVkaXVtIHB4LTUgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHRleHQtYmFzZSBsZWFkaW5nLTYgdGV4dC13aGl0ZSBhYnNvbHV0ZSByaWdodC1mdWxsIG1sLTQgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgcHktMyBteC00IHctZnVsbCBkdXJhdGlvbi0xNTAgaC1mdWxsIHRyYW5zaXRpb24gcHktMCBwbC00IHByLTggYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgcHgtNSBweS0zIGFwcGVhcmFuY2Utbm9uZSB1bmRlcmxpbmUgYmctaW5kaWdvLTcwMCBtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBpdGVtcy1iYXNlbGluZSB0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwJy5zcGxpdChcbiAgJyAnXG4pXG5cbmNvbnN0IHVzZWRDbGFzc2VzID0gc2h1ZmZsZVNlZWQuc2h1ZmZsZShcbiAgJ2ZpeGVkIHB4LTQgZmxleC1zaHJpbmstMCB0ZXh0LWdyZWVuLTQwMCBwLTQgZmxleC0xIGxlYWRpbmctNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1sLTQgdHJhbnNpdGlvbicuc3BsaXQoXG4gICAgJyAnXG4gICksXG4gIDFcbilcblxuY29uc3QgdW51c2VkQ2xhc3NlcyA9IHNodWZmbGVTZWVkLnNodWZmbGUoXG4gIGFsbENsYXNzZXMuZmlsdGVyKChjKSA9PiAhdXNlZENsYXNzZXMuaW5jbHVkZXMoYykpLFxuICAxXG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBQZXJmb3JtYW5jZSgpIHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIHRocmVzaG9sZDogMC41LFxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpblZpZXcpIHJldHVyblxuICAgIGFuaW1hdGUocHJvZ3Jlc3MsIEJBU0VfUkFOR0VbMV0sIHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgZGFtcGluZzogNTAsXG4gICAgfSlcbiAgfSwgW2luVmlld10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInBlcmZvcm1hbmNlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC04IG1iLTEwIHNtOm1iLTE2IG1kOm1iLTIwXCI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyIGNsYXNzTmFtZT17YCR7Z3JhZGllbnRzLnRlYWxbMF19IG1iLThgfT5cbiAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICAgIDxDYXB0aW9uIGFzPVwiaDJcIiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIG1iLTNcIj5cbiAgICAgICAgICBQZXJmb3JtYW5jZVxuICAgICAgICA8L0NhcHRpb24+XG4gICAgICAgIDxCaWdUZXh0IGNsYXNzTmFtZT1cIm1iLThcIj5JdOKAmXMgdGlueSBpbiBwcm9kdWN0aW9uLjwvQmlnVGV4dD5cbiAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgVGFpbHdpbmQgYXV0b21hdGljYWxseSByZW1vdmVzIGFsbCB1bnVzZWQgQ1NTIHdoZW4gYnVpbGRpbmcgZm9yIHByb2R1Y3Rpb24sIHdoaWNoIG1lYW5zXG4gICAgICAgICAgeW91ciBmaW5hbCBDU1MgYnVuZGxlIGlzIHRoZSBzbWFsbGVzdCBpdCBjb3VsZCBwb3NzaWJseSBiZS4gSW4gZmFjdCwgbW9zdCBUYWlsd2luZFxuICAgICAgICAgIHByb2plY3RzIHNoaXAgbGVzcyB0aGFuIDEwS0Igb2YgQ1NTIHRvIHRoZSBjbGllbnQuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8TGluayBocmVmPVwiL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgaG92ZXI6dGV4dC10ZWFsLTcwMFwiPlxuICAgICAgICAgIExlYXJuIG1vcmUgLSZndDtcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8R3JhZGllbnRMb2NrdXBcbiAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgcm90YXRlPXsxfVxuICAgICAgICBwaW49XCJyaWdodFwiXG4gICAgICAgIGxlZnQ9e1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCByb3VuZGVkLXRsLXhsIHNtOnJvdW5kZWQtdC14bCBsZzpyb3VuZGVkLXhsIHNoYWRvdy1sZyBsZzotbXItOCB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC10bC14bCBzbTpyb3VuZGVkLXQteGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgc206dG9wLTYgc206bGVmdC02IHctMTQgaC0xNCBzbTp3LTE2IHNtOmgtMTYgYmctZ3JlZW4tMTAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIHRleHQtZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCkgc2NhbGUoMSAtMSlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTYsMzJhMjYsMjYgMCAxLDAgNTIsMGEyNiwyNiAwIDEsMCAtNTIsMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMCAxXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBwYXRoTGVuZ3RoOiAwLCBzdHJva2VXaWR0aDogNiB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7IHBhdGhMZW5ndGg6IDEsIHN0cm9rZVdpZHRoOiAxMiB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IERVUkFUSU9OLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgc2hhZG93LXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIyLjY2OCAzMy4zMzNsNS4zMzMgNS4zMzQgMTMuMzM0LTEzLjMzNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzIyQzU1RVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCIwIDFcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHBhdGhMZW5ndGg6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBwYXRoTGVuZ3RoOiAxLCBvcGFjaXR5OiAxIH0gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoTGVuZ3RoOiB7IGRlbGF5OiBEVVJBVElPTiAtIDAuNSwgZHVyYXRpb246IDAuMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZGVsYXk6IERVUkFUSU9OIC0gMC41LCBkdXJhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJwLTQgcGItMCBzbTpwLTYgc206cGItMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctZnVsbCBwbC0xOCBzbTpwbC0yMCBzbTpweS0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+UHJvZHVjdGlvbiBidWlsZDwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlciBmcm9tPXsyNDEzLjR9IHRvPXs4Ljd9IHJvdW5kPXsxfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIEtCXG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwIC1teC00IHNtOi1teC02IG10LTQgc206bXQtNiBweC00IHNtOnB4LTYgcHktMyBmb250LW1vbm8gdGV4dC14cyBsZWFkaW5nLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZVwiPlB1cmdlZCA8L2R0PlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cImZsZXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlciBmcm9tPXswfSB0bz17MjAxNDR9IHByb2dyZXNzPXtwcm9ncmVzc30gLz4gdW51c2VkIGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1yb3NlLTcwMCBoaWRkZW4gc206ZmxleCBsZzpoaWRkZW4geGw6ZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgLTxDb3VudGVyIGZyb209ezB9IHRvPXsxNjAyMTV9IHByb2dyZXNzPXtwcm9ncmVzc30gLz4gbGluZXNcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgODIgMTJcIiB3aWR0aD1cIjgyXCIgaGVpZ2h0PVwiMTJcIiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2Y0M2Y1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIChwKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPj0gQkFTRV9SQU5HRVsxXSAqIDAuMzUgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC43NSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdXNlVHJhbnNmb3JtKHByb2dyZXNzLCAocCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID49IEJBU0VfUkFOR0VbMV0gKiAwLjkgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC45OSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHg9XCI1NlwiIGZpbGw9XCIjZTRlNGU3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB4PVwiNzBcIiBmaWxsPVwiI2U0ZTRlN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy10ZWFsLTcwMCBsZzpyb3VuZGVkLWIteGwgb3ZlcmZsb3ctaGlkZGVuIHAtNFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMjUxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS03NSBhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LW1vbm8gdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtdGVhbC0yMDBcIj5cbiAgICAgICAgICAgICAgICB7YWxsQ2xhc3Nlcy5tYXAoKGMsIGkpID0+XG4gICAgICAgICAgICAgICAgICB1c2VkQ2xhc3Nlcy5pbmNsdWRlcyhjKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29kZS1oaWdobGlnaHQgd2hpdGVzcGFjZS1ub3dyYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhbmltYXRlLWZsYXNoLWNvZGUtc2xvdyc6IGluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChEVVJBVElPTiAvIHVzZWRDbGFzc2VzLmxlbmd0aCkgKiB1c2VkQ2xhc3Nlcy5pbmRleE9mKGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1zYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi01MDAgd2hpdGVzcGFjZS1ub3dyYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXRlYWwtMjAwJzogIWluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtdGVhbC05MDAnOiBpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKERVUkFUSU9OIC8gdW51c2VkQ2xhc3Nlcy5sZW5ndGgpICogdW51c2VkQ2xhc3Nlcy5pbmRleE9mKGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1zYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTAgaC0xNiBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg0LCAzMCwgMjgsIDEpLCByZ2JhKDQsIDMwLCAyOCwgMCkpJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcmlnaHQ9e1xuICAgICAgICAgIDxDb2RlV2luZG93IGNsYXNzTmFtZT1cImJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICA8Q29kZVdpbmRvdy5Db2RlMiBsaW5lcz17bGluZXMubGVuZ3RofT5cbiAgICAgICAgICAgICAge2xpbmVzLm1hcCgodG9rZW5zLCBsaW5lSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtsaW5lSW5kZXh9PlxuICAgICAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbi50eXBlc1t0b2tlbi50eXBlcy5sZW5ndGggLSAxXSA9PT0gJ2NsYXNzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgIHVzZWRDbGFzc2VzLmluY2x1ZGVzKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rva2VuSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29kZS1oaWdobGlnaHQnLCBnZXRDbGFzc05hbWVGb3JUb2tlbih0b2tlbiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZS1mbGFzaC1jb2RlLXNsb3cnOiBpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChEVVJBVElPTiAvIHVzZWRDbGFzc2VzLmxlbmd0aCkgKiB1c2VkQ2xhc3Nlcy5pbmRleE9mKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dG9rZW5JbmRleH0gY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVGb3JUb2tlbih0b2tlbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHsnXFxuJ31cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ29kZVdpbmRvdy5Db2RlMj5cbiAgICAgICAgICA8L0NvZGVXaW5kb3c+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9