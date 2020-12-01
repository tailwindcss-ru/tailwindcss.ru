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
    "content": "              Теперь любой, у кого есть ссылка, может просмотреть этот файл."
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
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["BigText"], {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "\u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u043E\u043D \u043A\u0440\u043E\u0448\u0435\u0447\u043D\u044B\u0439."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Tailwind \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0434\u0430\u043B\u044F\u0435\u0442 \u0432\u0435\u0441\u044C \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 CSS \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438, \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u0430\u0448 \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 CSS \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0438\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445. \u0424\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 Tailwind \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043C\u0435\u043D\u0435\u0435 10 \u041A\u0411 CSS."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/docs/optimizing-for-production",
    className: "text-teal-500 hover:text-teal-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 ->")), __jsx(_components_GradientLockup__WEBPACK_IMPORTED_MODULE_2__["GradientLockup"], {
    color: "teal",
    rotate: 1,
    pin: "right",
    left: __jsx("div", {
      ref: ref,
      className: "relative z-10 rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-lg lg:-mr-8 tabular-nums",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "bg-white rounded-tl-xl sm:rounded-t-xl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "absolute top-4 left-4 sm:top-6 sm:left-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, __jsx("svg", {
      viewBox: "0 0 64 64",
      className: "absolute inset-0 w-full h-full text-green-400",
      transform: "rotate(90) scale(1 -1)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 134,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "relative bg-white rounded-full w-10 h-10 shadow-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }), __jsx("svg", {
      viewBox: "0 0 64 64",
      className: "absolute inset-0 w-full h-full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
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
        lineNumber: 149,
        columnNumber: 19
      }
    }))), __jsx("dl", {
      className: "p-4 pb-0 sm:p-6 sm:pb-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "flex-none w-full pl-18 sm:pl-20 sm:py-0.5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, __jsx("dt", {
      className: "text-sm font-medium",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, "\u041F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D \u0431\u0438\u043B\u0434"), __jsx("dd", {
      className: "text-3xl sm:text-4xl font-extrabold text-gray-900",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
        lineNumber: 170,
        columnNumber: 21
      }
    }), "KB")), __jsx("div", {
      className: "flex items-center border-t border-gray-100 -mx-4 sm:-mx-6 mt-4 sm:mt-6 px-4 sm:px-6 py-3 font-mono text-xs leading-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, __jsx("dt", {
      className: "whitespace-pre",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 19
      }
    }, "Purged "), __jsx("dd", {
      className: "flex-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    }, __jsx(Counter, {
      from: 0,
      to: 20144,
      progress: progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }), " unused classes"), __jsx("dd", {
      className: "text-rose-700 hidden sm:flex lg:hidden xl:flex items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 21
      }
    }, "-", __jsx(Counter, {
      from: 0,
      to: 160215,
      progress: progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
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
        lineNumber: 183,
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
        lineNumber: 184,
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
        lineNumber: 194,
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
        lineNumber: 204,
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
        lineNumber: 214,
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
        lineNumber: 224,
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
        lineNumber: 225,
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
        lineNumber: 231,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bg-black bg-opacity-75 absolute inset-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "relative font-mono text-xs sm:text-sm text-teal-200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 15
      }
    }, allClasses.map(function (c, i) {
      return usedClasses.includes(c) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
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
          lineNumber: 240,
          columnNumber: 23
        }
      }, c), ' ') : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
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
          lineNumber: 255,
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
        lineNumber: 272,
        columnNumber: 15
      }
    }))),
    right: __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"], {
      className: "bg-cyan-500",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 11
      }
    }, __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"].Code2, {
      lines: lines.length,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 13
      }
    }, lines.map(function (tokens, lineIndex) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: lineIndex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
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
              lineNumber: 293,
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
            lineNumber: 310,
            columnNumber: 23
          }
        }, token.content);
      }), '\n');
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9QZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6WyJEVVJBVElPTiIsIkJBU0VfUkFOR0UiLCJDb3VudGVyIiwiZnJvbSIsInRvIiwicm91bmQiLCJwcm9ncmVzcyIsInJlZiIsInVzZVJlZiIsInZhbHVlIiwidXNlVHJhbnNmb3JtIiwiY2xhbXAiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0TnVtYmVyIiwiZm9ybWF0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJ2IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJkYXRhIiwiTWF0aCIsInRvRml4ZWQiLCJnZXQiLCJsaW5lcyIsImFkZENsYXNzVG9rZW5zMiIsImFsbENsYXNzZXMiLCJzcGxpdCIsInVzZWRDbGFzc2VzIiwic2h1ZmZsZVNlZWQiLCJzaHVmZmxlIiwidW51c2VkQ2xhc3NlcyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsIlBlcmZvcm1hbmNlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlldyIsImFuaW1hdGUiLCJ0eXBlIiwiZGFtcGluZyIsImdyYWRpZW50cyIsInRlYWwiLCJwYXRoTGVuZ3RoIiwic3Ryb2tlV2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJkZWxheSIsImZpbGwiLCJwIiwibWF4SGVpZ2h0IiwibWFwIiwiaSIsImNsc3giLCJhbmltYXRpb25EZWxheSIsImxlbmd0aCIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0eXBlcyIsImNvbnRlbnQiLCJnZXRDbGFzc05hbWVGb3JUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7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RCxFQVVBQSwwRCxFQVVBQSwwRCxFQVVBQSwwRDs7O01BckloQjZCLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM5YjBmYmQwOTc2YzVkYjE5M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25Db250YWluZXIsIENhcHRpb24sIEJpZ1RleHQsIFBhcmFncmFwaCwgTGluayB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL2NvbW1vbidcbmltcG9ydCB7IEdyYWRpZW50TG9ja3VwIH0gZnJvbSAnQC9jb21wb25lbnRzL0dyYWRpZW50TG9ja3VwJ1xuaW1wb3J0IHsgQ29kZVdpbmRvdywgZ2V0Q2xhc3NOYW1lRm9yVG9rZW4gfSBmcm9tICdAL2NvbXBvbmVudHMvQ29kZVdpbmRvdydcbmltcG9ydCB7IGdyYWRpZW50cyB9IGZyb20gJ0AvdXRpbHMvZ3JhZGllbnRzJ1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgSWNvbiB9IGZyb20gJ0AvaW1nL2ljb25zL2hvbWUvcGVyZm9ybWFuY2Uuc3ZnJ1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIGFuaW1hdGUsIHVzZU1vdGlvblZhbHVlLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuaW1wb3J0IHsgdG9rZW5pemVXaXRoTGluZXMgfSBmcm9tICcuLi8uLi9tYWNyb3MvdG9rZW5pemUubWFjcm8nXG5pbXBvcnQgeyBhZGRDbGFzc1Rva2VuczIgfSBmcm9tICdAL3V0aWxzL2FkZENsYXNzVG9rZW5zJ1xuaW1wb3J0IHNodWZmbGVTZWVkIGZyb20gJ0AvdXRpbHMvc2h1ZmZsZVNlZWQnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5jb25zdCBEVVJBVElPTiA9IDYuNVxuY29uc3QgQkFTRV9SQU5HRSA9IFswLCA1MDAwXVxuXG5mdW5jdGlvbiBDb3VudGVyKHsgZnJvbSwgdG8sIHJvdW5kID0gMCwgcHJvZ3Jlc3MgfSkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICBjb25zdCB2YWx1ZSA9IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgQkFTRV9SQU5HRSwgW2Zyb20sIHRvXSwgeyBjbGFtcDogZmFsc2UgfSlcbiAgY29uc3QgeyBmb3JtYXQ6IGZvcm1hdE51bWJlciB9ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHVuZGVmaW5lZCwge1xuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogcm91bmQsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiByb3VuZCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiB2YWx1ZS5vbkNoYW5nZSgodikgPT4ge1xuICAgICAgcmVmLmN1cnJlbnQuZmlyc3RDaGlsZC5kYXRhID0gZm9ybWF0TnVtYmVyKHJvdW5kID09PSAwID8gTWF0aC5yb3VuZCh2KSA6IHYudG9GaXhlZChyb3VuZCkpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxzcGFuIHJlZj17cmVmfT57Zm9ybWF0TnVtYmVyKHZhbHVlLmdldCgpKX08L3NwYW4+XG59XG5cbmNvbnN0IHsgbGluZXMgfSA9IHRva2VuaXplV2l0aExpbmVzLmh0bWwoXG4gIGA8ZGl2IGNsYXNzPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTYgcG9pbnRlci1ldmVudHMtbm9uZSBzbTpwLTYgc206aXRlbXMtc3RhcnQgc206anVzdGlmeS1lbmRcIj5cbiAgPGRpdiBjbGFzcz1cIm1heC13LXNtIHctZnVsbCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwb2ludGVyLWV2ZW50cy1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtbGcgc2hhZG93LXhzIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC02IHctNiB0ZXh0LWdyZWVuLTQwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTMgdy0wIGZsZXgtMSBwdC0wLjVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgINCj0YHQv9C10YjQvdC+INGB0L7RhdGA0LDQvdC10L3QviFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAg0KLQtdC/0LXRgNGMINC70Y7QsdC+0LksINGDINC60L7Qs9C+INC10YHRgtGMINGB0YHRi9C70LrQsCwg0LzQvtC20LXRgiDQv9GA0L7RgdC80L7RgtGA0LXRgtGMINGN0YLQvtGCINGE0LDQudC7LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC00IGZsZXgtc2hyaW5rLTAgZmxleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImlubGluZS1mbGV4IHRleHQtZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtZ3JheS01MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTBcIj5cbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImgtNSB3LTVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gXG4pXG5cbmFkZENsYXNzVG9rZW5zMihsaW5lcylcblxuY29uc3QgYWxsQ2xhc3NlcyA9ICdmaXhlZCBmbGV4LWNvbCByb3VuZGVkLXNtIHNoYWRvdyBweC00IGp1c3RpZnktY29udGVudCB0ZXh0LWNlbnRlciBmbGV4LXNocmluay0wIG1kOnRleHQtbGVmdCBoLTE2IHctMTYgbWQ6aC0yNCBtZDp3LTI0IHJvdW5kZWQtZnVsbCBteC1hdXRvIHRleHQtbGcgdGV4dC1wdXJwbGUtNTAwIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktNjAwIHRleHQtZ3JlZW4tNDAwIHRleHQtYmx1ZS01MDAgcm91bmRlZC1waWxsIHAtNCBtYXgtdy1zY3JlZW4teGwgbXQtNSBsZWFkaW5nLTcgd2hpdGVzcGFjZS1ub3dyYXAgc206Z2FwLTYgbGc6bWF4LXctNHhsIGxnOm14LWF1dG8geGw6bWF4LXctbm9uZSBmbGV4LTEgeGw6bXgtMCB4bDpncmlkLWNvbHMtNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtNHhsIGxlYWRpbmctNiBsZWFkaW5nLTEwIGZvbnQtZXh0cmFib2xkICBsZWFkaW5nLTUgaC01IHctNSB0ZXh0LWdyZWVuLTUwMCB0ZXh0LTV4bCBsZWFkaW5nLW5vbmUgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodCBib3JkZXItdCB0ZXh0LXNtIGJvcmRlci1pbmRpZ28tNjAwIHB5LTQgZm9udC1tZWRpdW0gcHgtNSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgdGV4dC1iYXNlIGxlYWRpbmctNiB0ZXh0LXdoaXRlIGFic29sdXRlIHJpZ2h0LWZ1bGwgbWwtNCBib3R0b20tMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiBweS0zIG14LTQgdy1mdWxsIGR1cmF0aW9uLTE1MCBoLWZ1bGwgdHJhbnNpdGlvbiBweS0wIHBsLTQgcHItOCBib3JkZXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTUwMCBweC01IHB5LTMgYXBwZWFyYW5jZS1ub25lIHVuZGVybGluZSBiZy1pbmRpZ28tNzAwIG1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGl0ZW1zLWJhc2VsaW5lIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDAnLnNwbGl0KFxuICAnICdcbilcblxuY29uc3QgdXNlZENsYXNzZXMgPSBzaHVmZmxlU2VlZC5zaHVmZmxlKFxuICAnZml4ZWQgcHgtNCBmbGV4LXNocmluay0wIHRleHQtZ3JlZW4tNDAwIHAtNCBmbGV4LTEgbGVhZGluZy01IHRleHQtc20gZm9udC1tZWRpdW0gbWwtNCB0cmFuc2l0aW9uJy5zcGxpdChcbiAgICAnICdcbiAgKSxcbiAgMVxuKVxuXG5jb25zdCB1bnVzZWRDbGFzc2VzID0gc2h1ZmZsZVNlZWQuc2h1ZmZsZShcbiAgYWxsQ2xhc3Nlcy5maWx0ZXIoKGMpID0+ICF1c2VkQ2xhc3Nlcy5pbmNsdWRlcyhjKSksXG4gIDFcbilcblxuZXhwb3J0IGZ1bmN0aW9uIFBlcmZvcm1hbmNlKCkge1xuICBjb25zdCBwcm9ncmVzcyA9IHVzZU1vdGlvblZhbHVlKDApXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcgfSA9IHVzZUluVmlldyh7XG4gICAgdGhyZXNob2xkOiAwLjUsXG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWluVmlldykgcmV0dXJuXG4gICAgYW5pbWF0ZShwcm9ncmVzcywgQkFTRV9SQU5HRVsxXSwge1xuICAgICAgdHlwZTogJ3NwcmluZycsXG4gICAgICBkYW1waW5nOiA1MCxcbiAgICB9KVxuICB9LCBbaW5WaWV3XSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicGVyZm9ybWFuY2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTggbWItMTAgc206bWItMTYgbWQ6bWItMjBcIj5cbiAgICAgICAgPEljb25Db250YWluZXIgY2xhc3NOYW1lPXtgJHtncmFkaWVudHMudGVhbFswXX0gbWItOGB9PlxuICAgICAgICAgIDxJY29uIC8+XG4gICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgPENhcHRpb24gYXM9XCJoMlwiIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgbWItM1wiPlxuICAgICAgICAgINCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GM0L3QvtGB0YLRjFxuICAgICAgICA8L0NhcHRpb24+XG4gICAgICAgIDxCaWdUZXh0IGNsYXNzTmFtZT1cIm1iLThcIj7QkiDQv9GA0L7QtNCw0LrRiNC10L3QtSDQvtC9INC60YDQvtGI0LXRh9C90YvQuS48L0JpZ1RleHQ+XG4gICAgICAgIDxQYXJhZ3JhcGggY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIFRhaWx3aW5kINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0LTQsNC70Y/QtdGCINCy0LXRgdGMINC90LXQuNGB0L/QvtC70YzQt9GD0LXQvNGL0LkgQ1NTINC/0YDQuCDRgdCx0L7RgNC60LUg0LTQu9GPINGA0LDQsdC+0YfQtdC5INCy0LXRgNGB0LjQuCwg0YfRgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQktCw0Ygg0L7QutC+0L3Rh9Cw0YLQtdC70YzQvdGL0Lkg0L3QsNCx0L7RgCBDU1Mg0Y/QstC70Y/QtdGC0YHRjyDQvNC40L3QuNC80LDQu9GM0L3Ri9C8INC40Lcg0LLQvtC30LzQvtC20L3Ri9GFLiDQpNCw0LrRgtC40YfQtdGB0LrQuCwg0LHQvtC70YzRiNC40L3RgdGC0LLQviDQv9GA0L7QtdC60YLQvtCyIFRhaWx3aW5kINC+0YLQv9GA0LDQstC70Y/RjtGCINC60LvQuNC10L3RgtGDINC80LXQvdC10LUgMTAg0JrQkSBDU1MuXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICA8TGluayBocmVmPVwiL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgaG92ZXI6dGV4dC10ZWFsLTcwMFwiPlxuICAgICAgICAgINCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LUgLSZndDtcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8R3JhZGllbnRMb2NrdXBcbiAgICAgICAgY29sb3I9XCJ0ZWFsXCJcbiAgICAgICAgcm90YXRlPXsxfVxuICAgICAgICBwaW49XCJyaWdodFwiXG4gICAgICAgIGxlZnQ9e1xuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCByb3VuZGVkLXRsLXhsIHNtOnJvdW5kZWQtdC14bCBsZzpyb3VuZGVkLXhsIHNoYWRvdy1sZyBsZzotbXItOCB0YWJ1bGFyLW51bXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC10bC14bCBzbTpyb3VuZGVkLXQteGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgc206dG9wLTYgc206bGVmdC02IHctMTQgaC0xNCBzbTp3LTE2IHNtOmgtMTYgYmctZ3JlZW4tMTAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIHRleHQtZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCkgc2NhbGUoMSAtMSlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTYsMzJhMjYsMjYgMCAxLDAgNTIsMGEyNiwyNiAwIDEsMCAtNTIsMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMCAxXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBwYXRoTGVuZ3RoOiAwLCBzdHJva2VXaWR0aDogNiB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtpblZpZXcgPyB7IHBhdGhMZW5ndGg6IDEsIHN0cm9rZVdpZHRoOiAxMiB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IERVUkFUSU9OLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCB3LTEwIGgtMTAgc2hhZG93LXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIyLjY2OCAzMy4zMzNsNS4zMzMgNS4zMzQgMTMuMzM0LTEzLjMzNFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzIyQzU1RVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCIwIDFcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHBhdGhMZW5ndGg6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBwYXRoTGVuZ3RoOiAxLCBvcGFjaXR5OiAxIH0gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoTGVuZ3RoOiB7IGRlbGF5OiBEVVJBVElPTiAtIDAuNSwgZHVyYXRpb246IDAuMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHsgZGVsYXk6IERVUkFUSU9OIC0gMC41LCBkdXJhdGlvbjogMCB9LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJwLTQgcGItMCBzbTpwLTYgc206cGItMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctZnVsbCBwbC0xOCBzbTpwbC0yMCBzbTpweS0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+0J/RgNC+0LTQsNC60YjQtdC9INCx0LjQu9C0PC9kdD5cbiAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGVyIGZyb209ezI0MTMuNH0gdG89ezguN30gcm91bmQ9ezF9IHByb2dyZXNzPXtwcm9ncmVzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgS0JcbiAgICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdCBib3JkZXItZ3JheS0xMDAgLW14LTQgc206LW14LTYgbXQtNCBzbTptdC02IHB4LTQgc206cHgtNiBweS0zIGZvbnQtbW9ubyB0ZXh0LXhzIGxlYWRpbmctNVwiPlxuICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlXCI+UHVyZ2VkIDwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGVyIGZyb209ezB9IHRvPXsyMDE0NH0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSAvPiB1bnVzZWQgY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNzAwIGhpZGRlbiBzbTpmbGV4IGxnOmhpZGRlbiB4bDpmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAtPENvdW50ZXIgZnJvbT17MH0gdG89ezE2MDIxNX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSAvPiBsaW5lc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA4MiAxMlwiIHdpZHRoPVwiODJcIiBoZWlnaHQ9XCIxMlwiIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5yZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZjQzZjVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC4zNSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdXNlVHJhbnNmb3JtKHByb2dyZXNzLCAocCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID49IEJBU0VfUkFOR0VbMV0gKiAwLjc1ID8gJyNmNDNmNWUnIDogJyNlNGU0ZTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5yZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIyOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIChwKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPj0gQkFTRV9SQU5HRVsxXSAqIDAuOSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiNDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdXNlVHJhbnNmb3JtKHByb2dyZXNzLCAocCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID49IEJBU0VfUkFOR0VbMV0gKiAwLjk5ID8gJyNmNDNmNWUnIDogJyNlNGU0ZTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgeD1cIjU2XCIgZmlsbD1cIiNlNGU0ZTdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHg9XCI3MFwiIGZpbGw9XCIjZTRlNGU3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXRlYWwtNzAwIGxnOnJvdW5kZWQtYi14bCBvdmVyZmxvdy1oaWRkZW4gcC00XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAyNTEgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTc1IGFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZvbnQtbW9ubyB0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC10ZWFsLTIwMFwiPlxuICAgICAgICAgICAgICAgIHthbGxDbGFzc2VzLm1hcCgoYywgaSkgPT5cbiAgICAgICAgICAgICAgICAgIHVzZWRDbGFzc2VzLmluY2x1ZGVzKGMpID8gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjb2RlLWhpZ2hsaWdodCB3aGl0ZXNwYWNlLW5vd3JhcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGUtZmxhc2gtY29kZS1zbG93JzogaW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKERVUkFUSU9OIC8gdXNlZENsYXNzZXMubGVuZ3RoKSAqIHVzZWRDbGFzc2VzLmluZGV4T2YoYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3RyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCB3aGl0ZXNwYWNlLW5vd3JhcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtdGVhbC0yMDAnOiAhaW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC10ZWFsLTkwMCc6IGluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRFVSQVRJT04gLyB1bnVzZWRDbGFzc2VzLmxlbmd0aCkgKiB1bnVzZWRDbGFzc2VzLmluZGV4T2YoYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y31cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBoLTE2IHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDQsIDMwLCAyOCwgMSksIHJnYmEoNCwgMzAsIDI4LCAwKSknLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICByaWdodD17XG4gICAgICAgICAgPENvZGVXaW5kb3cgY2xhc3NOYW1lPVwiYmctY3lhbi01MDBcIj5cbiAgICAgICAgICAgIDxDb2RlV2luZG93LkNvZGUyIGxpbmVzPXtsaW5lcy5sZW5ndGh9PlxuICAgICAgICAgICAgICB7bGluZXMubWFwKCh0b2tlbnMsIGxpbmVJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2xpbmVJbmRleH0+XG4gICAgICAgICAgICAgICAgICB7dG9rZW5zLm1hcCgodG9rZW4sIHRva2VuSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRva2VuLnR5cGVzW3Rva2VuLnR5cGVzLmxlbmd0aCAtIDFdID09PSAnY2xhc3MnICYmXG4gICAgICAgICAgICAgICAgICAgICAgdXNlZENsYXNzZXMuaW5jbHVkZXModG9rZW4uY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dG9rZW5JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdjb2RlLWhpZ2hsaWdodCcsIGdldENsYXNzTmFtZUZvclRva2VuKHRva2VuKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhbmltYXRlLWZsYXNoLWNvZGUtc2xvdyc6IGluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKERVUkFUSU9OIC8gdXNlZENsYXNzZXMubGVuZ3RoKSAqIHVzZWRDbGFzc2VzLmluZGV4T2YodG9rZW4uY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9c2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0b2tlbkluZGV4fSBjbGFzc05hbWU9e2dldENsYXNzTmFtZUZvclRva2VuKHRva2VuKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgeydcXG4nfVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Db2RlV2luZG93LkNvZGUyPlxuICAgICAgICAgIDwvQ29kZVdpbmRvdz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=