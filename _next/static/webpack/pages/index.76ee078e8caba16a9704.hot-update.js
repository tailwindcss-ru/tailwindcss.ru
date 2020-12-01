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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9QZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6WyJEVVJBVElPTiIsIkJBU0VfUkFOR0UiLCJDb3VudGVyIiwiZnJvbSIsInRvIiwicm91bmQiLCJwcm9ncmVzcyIsInJlZiIsInVzZVJlZiIsInZhbHVlIiwidXNlVHJhbnNmb3JtIiwiY2xhbXAiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0TnVtYmVyIiwiZm9ybWF0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJ2IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJkYXRhIiwiTWF0aCIsInRvRml4ZWQiLCJnZXQiLCJsaW5lcyIsImFkZENsYXNzVG9rZW5zMiIsImFsbENsYXNzZXMiLCJzcGxpdCIsInVzZWRDbGFzc2VzIiwic2h1ZmZsZVNlZWQiLCJzaHVmZmxlIiwidW51c2VkQ2xhc3NlcyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsIlBlcmZvcm1hbmNlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlldyIsImFuaW1hdGUiLCJ0eXBlIiwiZGFtcGluZyIsImdyYWRpZW50cyIsInRlYWwiLCJwYXRoTGVuZ3RoIiwic3Ryb2tlV2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJkZWxheSIsImZpbGwiLCJwIiwibWF4SGVpZ2h0IiwibWFwIiwiaSIsImNsc3giLCJhbmltYXRpb25EZWxheSIsImxlbmd0aCIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0eXBlcyIsImNvbnRlbnQiLCJnZXRDbGFzc05hbWVGb3JUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7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LEVBVUFBLDBELEVBVUFBLDBELEVBVUFBLDBEOzs7TUF2SWhCNkIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmVlMDc4ZThjYWJhMTZhOTcwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkNvbnRhaW5lciwgQ2FwdGlvbiwgQmlnVGV4dCwgUGFyYWdyYXBoLCBMaW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvY29tbW9uJ1xuaW1wb3J0IHsgR3JhZGllbnRMb2NrdXAgfSBmcm9tICdAL2NvbXBvbmVudHMvR3JhZGllbnRMb2NrdXAnXG5pbXBvcnQgeyBDb2RlV2luZG93LCBnZXRDbGFzc05hbWVGb3JUb2tlbiB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlV2luZG93J1xuaW1wb3J0IHsgZ3JhZGllbnRzIH0gZnJvbSAnQC91dGlscy9ncmFkaWVudHMnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uIH0gZnJvbSAnQC9pbWcvaWNvbnMvaG9tZS9wZXJmb3JtYW5jZS5zdmcnXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgYW5pbWF0ZSwgdXNlTW90aW9uVmFsdWUsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXG5pbXBvcnQgeyB0b2tlbml6ZVdpdGhMaW5lcyB9IGZyb20gJy4uLy4uL21hY3Jvcy90b2tlbml6ZS5tYWNybydcbmltcG9ydCB7IGFkZENsYXNzVG9rZW5zMiB9IGZyb20gJ0AvdXRpbHMvYWRkQ2xhc3NUb2tlbnMnXG5pbXBvcnQgc2h1ZmZsZVNlZWQgZnJvbSAnQC91dGlscy9zaHVmZmxlU2VlZCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmNvbnN0IERVUkFUSU9OID0gNi41XG5jb25zdCBCQVNFX1JBTkdFID0gWzAsIDUwMDBdXG5cbmZ1bmN0aW9uIENvdW50ZXIoeyBmcm9tLCB0bywgcm91bmQgPSAwLCBwcm9ncmVzcyB9KSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IHZhbHVlID0gdXNlVHJhbnNmb3JtKHByb2dyZXNzLCBCQVNFX1JBTkdFLCBbZnJvbSwgdG9dLCB7IGNsYW1wOiBmYWxzZSB9KVxuICBjb25zdCB7IGZvcm1hdDogZm9ybWF0TnVtYmVyIH0gPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodW5kZWZpbmVkLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiByb3VuZCxcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHJvdW5kLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlLm9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICByZWYuY3VycmVudC5maXJzdENoaWxkLmRhdGEgPSBmb3JtYXROdW1iZXIocm91bmQgPT09IDAgPyBNYXRoLnJvdW5kKHYpIDogdi50b0ZpeGVkKHJvdW5kKSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gPHNwYW4gcmVmPXtyZWZ9Pntmb3JtYXROdW1iZXIodmFsdWUuZ2V0KCkpfTwvc3Bhbj5cbn1cblxuY29uc3QgeyBsaW5lcyB9ID0gdG9rZW5pemVXaXRoTGluZXMuaHRtbChcbiAgYDxkaXYgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTQgcHktNiBwb2ludGVyLWV2ZW50cy1ub25lIHNtOnAtNiBzbTppdGVtcy1zdGFydCBzbTpqdXN0aWZ5LWVuZFwiPlxuICA8ZGl2IGNsYXNzPVwibWF4LXctc20gdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHBvaW50ZXItZXZlbnRzLWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1sZyBzaGFkb3cteHMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJoLTYgdy02IHRleHQtZ3JlZW4tNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtMyB3LTAgZmxleC0xIHB0LTAuNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAg0KPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdC+IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICDQotC10L/QtdGA0Ywg0LvRjtCx0L7QuSwg0YMg0LrQvtCz0L4g0LXRgdGC0Ywg0YHRgdGL0LvQutCwLCDQvNC+0LbQtdGCINC/0YDQvtGB0LzQvtGC0YDQtdGC0Ywg0Y3RgtC+0YIg0YTQsNC50LsuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTQgZmxleC1zaHJpbmstMCBmbGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5saW5lLWZsZXggdGV4dC1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC01IHctNVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmBcbilcblxuYWRkQ2xhc3NUb2tlbnMyKGxpbmVzKVxuXG5jb25zdCBhbGxDbGFzc2VzID0gJ2ZpeGVkIGZsZXgtY29sIHJvdW5kZWQtc20gc2hhZG93IHB4LTQganVzdGlmeS1jb250ZW50IHRleHQtY2VudGVyIGZsZXgtc2hyaW5rLTAgbWQ6dGV4dC1sZWZ0IGgtMTYgdy0xNiBtZDpoLTI0IG1kOnctMjQgcm91bmRlZC1mdWxsIG14LWF1dG8gdGV4dC1sZyB0ZXh0LXB1cnBsZS01MDAgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS02MDAgdGV4dC1ncmVlbi00MDAgdGV4dC1ibHVlLTUwMCByb3VuZGVkLXBpbGwgcC00IG1heC13LXNjcmVlbi14bCBtdC01IGxlYWRpbmctNyB3aGl0ZXNwYWNlLW5vd3JhcCBzbTpnYXAtNiBsZzptYXgtdy00eGwgbGc6bXgtYXV0byB4bDptYXgtdy1ub25lIGZsZXgtMSB4bDpteC0wIHhsOmdyaWQtY29scy00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC00eGwgbGVhZGluZy02IGxlYWRpbmctMTAgZm9udC1leHRyYWJvbGQgIGxlYWRpbmctNSBoLTUgdy01IHRleHQtZ3JlZW4tNTAwIHRleHQtNXhsIGxlYWRpbmctbm9uZSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIHRyYWNraW5nLXRpZ2h0IGJvcmRlci10IHRleHQtc20gYm9yZGVyLWluZGlnby02MDAgcHktNCBmb250LW1lZGl1bSBweC01IGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyB0ZXh0LWJhc2UgbGVhZGluZy02IHRleHQtd2hpdGUgYWJzb2x1dGUgcmlnaHQtZnVsbCBtbC00IGJvdHRvbS0wIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHB5LTMgbXgtNCB3LWZ1bGwgZHVyYXRpb24tMTUwIGgtZnVsbCB0cmFuc2l0aW9uIHB5LTAgcGwtNCBwci04IGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCB0ZXh0LWdyYXktNTAwIHB4LTUgcHktMyBhcHBlYXJhbmNlLW5vbmUgdW5kZXJsaW5lIGJnLWluZGlnby03MDAgbWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgaXRlbXMtYmFzZWxpbmUgdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCcuc3BsaXQoXG4gICcgJ1xuKVxuXG5jb25zdCB1c2VkQ2xhc3NlcyA9IHNodWZmbGVTZWVkLnNodWZmbGUoXG4gICdmaXhlZCBweC00IGZsZXgtc2hyaW5rLTAgdGV4dC1ncmVlbi00MDAgcC00IGZsZXgtMSBsZWFkaW5nLTUgdGV4dC1zbSBmb250LW1lZGl1bSBtbC00IHRyYW5zaXRpb24nLnNwbGl0KFxuICAgICcgJ1xuICApLFxuICAxXG4pXG5cbmNvbnN0IHVudXNlZENsYXNzZXMgPSBzaHVmZmxlU2VlZC5zaHVmZmxlKFxuICBhbGxDbGFzc2VzLmZpbHRlcigoYykgPT4gIXVzZWRDbGFzc2VzLmluY2x1ZGVzKGMpKSxcbiAgMVxuKVxuXG5leHBvcnQgZnVuY3Rpb24gUGVyZm9ybWFuY2UoKSB7XG4gIGNvbnN0IHByb2dyZXNzID0gdXNlTW90aW9uVmFsdWUoMClcbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5WaWV3KSByZXR1cm5cbiAgICBhbmltYXRlKHByb2dyZXNzLCBCQVNFX1JBTkdFWzFdLCB7XG4gICAgICB0eXBlOiAnc3ByaW5nJyxcbiAgICAgIGRhbXBpbmc6IDUwLFxuICAgIH0pXG4gIH0sIFtpblZpZXddKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwZXJmb3JtYW5jZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbWQ6cHgtOCBtYi0xMCBzbTptYi0xNiBtZDptYi0yMFwiPlxuICAgICAgICA8SWNvbkNvbnRhaW5lciBjbGFzc05hbWU9e2Ake2dyYWRpZW50cy50ZWFsWzBdfSBtYi04YH0+XG4gICAgICAgICAgPEljb24gLz5cbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICA8Q2FwdGlvbiBhcz1cImgyXCIgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTUwMCBtYi0zXCI+XG4gICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgPC9DYXB0aW9uPlxuICAgICAgICA8QmlnVGV4dCBjbGFzc05hbWU9XCJtYi04XCI+SXTigJlzIHRpbnkgaW4gcHJvZHVjdGlvbi48L0JpZ1RleHQ+XG4gICAgICAgIDxQYXJhZ3JhcGggY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIFRhaWx3aW5kIGF1dG9tYXRpY2FsbHkgcmVtb3ZlcyBhbGwgdW51c2VkIENTUyB3aGVuIGJ1aWxkaW5nIGZvciBwcm9kdWN0aW9uLCB3aGljaCBtZWFuc1xuICAgICAgICAgIHlvdXIgZmluYWwgQ1NTIGJ1bmRsZSBpcyB0aGUgc21hbGxlc3QgaXQgY291bGQgcG9zc2libHkgYmUuIEluIGZhY3QsIG1vc3QgVGFpbHdpbmRcbiAgICAgICAgICBwcm9qZWN0cyBzaGlwIGxlc3MgdGhhbiAxMEtCIG9mIENTUyB0byB0aGUgY2xpZW50LlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL29wdGltaXppbmctZm9yLXByb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIGhvdmVyOnRleHQtdGVhbC03MDBcIj5cbiAgICAgICAgICBMZWFybiBtb3JlIC0mZ3Q7XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdyYWRpZW50TG9ja3VwXG4gICAgICAgIGNvbG9yPVwidGVhbFwiXG4gICAgICAgIHJvdGF0ZT17MX1cbiAgICAgICAgcGluPVwicmlnaHRcIlxuICAgICAgICBsZWZ0PXtcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcm91bmRlZC10bC14bCBzbTpyb3VuZGVkLXQteGwgbGc6cm91bmRlZC14bCBzaGFkb3ctbGcgbGc6LW1yLTggdGFidWxhci1udW1zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtdGwteGwgc206cm91bmRlZC10LXhsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbGVmdC00IHNtOnRvcC02IHNtOmxlZnQtNiB3LTE0IGgtMTQgc206dy0xNiBzbTpoLTE2IGJnLWdyZWVuLTEwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDY0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCB0ZXh0LWdyZWVuLTQwMFwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTApIHNjYWxlKDEgLTEpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk02LDMyYTI2LDI2IDAgMSwwIDUyLDBhMjYsMjYgMCAxLDAgLTUyLDBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjAgMVwiXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgcGF0aExlbmd0aDogMCwgc3Ryb2tlV2lkdGg6IDYgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBwYXRoTGVuZ3RoOiAxLCBzdHJva2VXaWR0aDogMTIgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBEVVJBVElPTixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgdy0xMCBoLTEwIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi42NjggMzMuMzMzbDUuMzMzIDUuMzM0IDEzLjMzNC0xMy4zMzRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyMkM1NUVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMCAxXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBwYXRoTGVuZ3RoOiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHsgcGF0aExlbmd0aDogMSwgb3BhY2l0eTogMSB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aExlbmd0aDogeyBkZWxheTogRFVSQVRJT04gLSAwLjUsIGR1cmF0aW9uOiAwLjMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7IGRlbGF5OiBEVVJBVElPTiAtIDAuNSwgZHVyYXRpb246IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwicC00IHBiLTAgc206cC02IHNtOnBiLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSB3LWZ1bGwgcGwtMTggc206cGwtMjAgc206cHktMC41XCI+XG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlByb2R1Y3Rpb24gYnVpbGQ8L2R0PlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXIgZnJvbT17MjQxMy40fSB0bz17OC43fSByb3VuZD17MX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICBLQlxuICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10IGJvcmRlci1ncmF5LTEwMCAtbXgtNCBzbTotbXgtNiBtdC00IHNtOm10LTYgcHgtNCBzbTpweC02IHB5LTMgZm9udC1tb25vIHRleHQteHMgbGVhZGluZy01XCI+XG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmVcIj5QdXJnZWQgPC9kdD5cbiAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXIgZnJvbT17MH0gdG89ezIwMTQ0fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+IHVudXNlZCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDAgaGlkZGVuIHNtOmZsZXggbGc6aGlkZGVuIHhsOmZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIC08Q291bnRlciBmcm9tPXswfSB0bz17MTYwMjE1fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+IGxpbmVzXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDgyIDEyXCIgd2lkdGg9XCI4MlwiIGhlaWdodD1cIjEyXCIgY2xhc3NOYW1lPVwiZmxleC1ub25lIG1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmNDNmNWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdXNlVHJhbnNmb3JtKHByb2dyZXNzLCAocCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID49IEJBU0VfUkFOR0VbMV0gKiAwLjM1ID8gJyNmNDNmNWUnIDogJyNlNGU0ZTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5yZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIChwKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPj0gQkFTRV9SQU5HRVsxXSAqIDAuNzUgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC45ID8gJyNmNDNmNWUnIDogJyNlNGU0ZTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5yZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIChwKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPj0gQkFTRV9SQU5HRVsxXSAqIDAuOTkgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB4PVwiNTZcIiBmaWxsPVwiI2U0ZTRlN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgeD1cIjcwXCIgZmlsbD1cIiNlNGU0ZTdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctdGVhbC03MDAgbGc6cm91bmRlZC1iLXhsIG92ZXJmbG93LWhpZGRlbiBwLTRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IDI1MSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktNzUgYWJzb2x1dGUgaW5zZXQtMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZm9udC1tb25vIHRleHQteHMgc206dGV4dC1zbSB0ZXh0LXRlYWwtMjAwXCI+XG4gICAgICAgICAgICAgICAge2FsbENsYXNzZXMubWFwKChjLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgdXNlZENsYXNzZXMuaW5jbHVkZXMoYykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NvZGUtaGlnaGxpZ2h0IHdoaXRlc3BhY2Utbm93cmFwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZS1mbGFzaC1jb2RlLXNsb3cnOiBpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRFVSQVRJT04gLyB1c2VkQ2xhc3Nlcy5sZW5ndGgpICogdXNlZENsYXNzZXMuaW5kZXhPZihjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9c2AsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgndHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwIHdoaXRlc3BhY2Utbm93cmFwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC10ZWFsLTIwMCc6ICFpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXRlYWwtOTAwJzogaW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChEVVJBVElPTiAvIHVudXNlZENsYXNzZXMubGVuZ3RoKSAqIHVudXNlZENsYXNzZXMuaW5kZXhPZihjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9c2AsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGgtMTYgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNCwgMzAsIDI4LCAxKSwgcmdiYSg0LCAzMCwgMjgsIDApKScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHJpZ2h0PXtcbiAgICAgICAgICA8Q29kZVdpbmRvdyBjbGFzc05hbWU9XCJiZy1jeWFuLTUwMFwiPlxuICAgICAgICAgICAgPENvZGVXaW5kb3cuQ29kZTIgbGluZXM9e2xpbmVzLmxlbmd0aH0+XG4gICAgICAgICAgICAgIHtsaW5lcy5tYXAoKHRva2VucywgbGluZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17bGluZUluZGV4fT5cbiAgICAgICAgICAgICAgICAgIHt0b2tlbnMubWFwKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgdG9rZW4udHlwZXNbdG9rZW4udHlwZXMubGVuZ3RoIC0gMV0gPT09ICdjbGFzcycgJiZcbiAgICAgICAgICAgICAgICAgICAgICB1c2VkQ2xhc3Nlcy5pbmNsdWRlcyh0b2tlbi5jb250ZW50KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0b2tlbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2NvZGUtaGlnaGxpZ2h0JywgZ2V0Q2xhc3NOYW1lRm9yVG9rZW4odG9rZW4pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGUtZmxhc2gtY29kZS1zbG93JzogaW5WaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRFVSQVRJT04gLyB1c2VkQ2xhc3Nlcy5sZW5ndGgpICogdXNlZENsYXNzZXMuaW5kZXhPZih0b2tlbi5jb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1zYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3Rva2VuSW5kZXh9IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lRm9yVG9rZW4odG9rZW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2tlbi5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICB7J1xcbid9XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0NvZGVXaW5kb3cuQ29kZTI+XG4gICAgICAgICAgPC9Db2RlV2luZG93PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==