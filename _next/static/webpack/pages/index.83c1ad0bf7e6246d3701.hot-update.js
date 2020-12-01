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
    }, "\u041E\u0447\u0438\u0449\u0435\u043D\u043E "), __jsx("dd", {
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
    }), " \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u043A\u043B\u0430\u0441\u0441\u043E\u0432"), __jsx("dd", {
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
    }), " \u0441\u0442\u0440\u043E\u043A"), __jsx("svg", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9QZXJmb3JtYW5jZS5qcyJdLCJuYW1lcyI6WyJEVVJBVElPTiIsIkJBU0VfUkFOR0UiLCJDb3VudGVyIiwiZnJvbSIsInRvIiwicm91bmQiLCJwcm9ncmVzcyIsInJlZiIsInVzZVJlZiIsInZhbHVlIiwidXNlVHJhbnNmb3JtIiwiY2xhbXAiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwidW5kZWZpbmVkIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0TnVtYmVyIiwiZm9ybWF0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJ2IiwiY3VycmVudCIsImZpcnN0Q2hpbGQiLCJkYXRhIiwiTWF0aCIsInRvRml4ZWQiLCJnZXQiLCJsaW5lcyIsImFkZENsYXNzVG9rZW5zMiIsImFsbENsYXNzZXMiLCJzcGxpdCIsInVzZWRDbGFzc2VzIiwic2h1ZmZsZVNlZWQiLCJzaHVmZmxlIiwidW51c2VkQ2xhc3NlcyIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsIlBlcmZvcm1hbmNlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VJblZpZXciLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImluVmlldyIsImFuaW1hdGUiLCJ0eXBlIiwiZGFtcGluZyIsImdyYWRpZW50cyIsInRlYWwiLCJwYXRoTGVuZ3RoIiwic3Ryb2tlV2lkdGgiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJkZWxheSIsImZpbGwiLCJwIiwibWF4SGVpZ2h0IiwibWFwIiwiaSIsImNsc3giLCJhbmltYXRpb25EZWxheSIsImxlbmd0aCIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0eXBlcyIsImNvbnRlbnQiLCJnZXRDbGFzc05hbWVGb3JUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7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MEQsRUFVQUEsMEQsRUFVQUEsMEQsRUFVQUEsMEQ7OztNQXJJaEI2QixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzYzFhZDBiZjdlNjI0NmQzNzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQ29udGFpbmVyLCBDYXB0aW9uLCBCaWdUZXh0LCBQYXJhZ3JhcGgsIExpbmsgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9jb21tb24nXG5pbXBvcnQgeyBHcmFkaWVudExvY2t1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9HcmFkaWVudExvY2t1cCdcbmltcG9ydCB7IENvZGVXaW5kb3csIGdldENsYXNzTmFtZUZvclRva2VuIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvZGVXaW5kb3cnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEljb24gfSBmcm9tICdAL2ltZy9pY29ucy9ob21lL3BlcmZvcm1hbmNlLnN2ZydcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBhbmltYXRlLCB1c2VNb3Rpb25WYWx1ZSwgdXNlVHJhbnNmb3JtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCB7IHRva2VuaXplV2l0aExpbmVzIH0gZnJvbSAnLi4vLi4vbWFjcm9zL3Rva2VuaXplLm1hY3JvJ1xuaW1wb3J0IHsgYWRkQ2xhc3NUb2tlbnMyIH0gZnJvbSAnQC91dGlscy9hZGRDbGFzc1Rva2VucydcbmltcG9ydCBzaHVmZmxlU2VlZCBmcm9tICdAL3V0aWxzL3NodWZmbGVTZWVkJ1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcblxuY29uc3QgRFVSQVRJT04gPSA2LjVcbmNvbnN0IEJBU0VfUkFOR0UgPSBbMCwgNTAwMF1cblxuZnVuY3Rpb24gQ291bnRlcih7IGZyb20sIHRvLCByb3VuZCA9IDAsIHByb2dyZXNzIH0pIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKClcbiAgY29uc3QgdmFsdWUgPSB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIEJBU0VfUkFOR0UsIFtmcm9tLCB0b10sIHsgY2xhbXA6IGZhbHNlIH0pXG4gIGNvbnN0IHsgZm9ybWF0OiBmb3JtYXROdW1iZXIgfSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh1bmRlZmluZWQsIHtcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHJvdW5kLFxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogcm91bmQsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gdmFsdWUub25DaGFuZ2UoKHYpID0+IHtcbiAgICAgIHJlZi5jdXJyZW50LmZpcnN0Q2hpbGQuZGF0YSA9IGZvcm1hdE51bWJlcihyb3VuZCA9PT0gMCA/IE1hdGgucm91bmQodikgOiB2LnRvRml4ZWQocm91bmQpKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiA8c3BhbiByZWY9e3JlZn0+e2Zvcm1hdE51bWJlcih2YWx1ZS5nZXQoKSl9PC9zcGFuPlxufVxuXG5jb25zdCB7IGxpbmVzIH0gPSB0b2tlbml6ZVdpdGhMaW5lcy5odG1sKFxuICBgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgcHgtNCBweS02IHBvaW50ZXItZXZlbnRzLW5vbmUgc206cC02IHNtOml0ZW1zLXN0YXJ0IHNtOmp1c3RpZnktZW5kXCI+XG4gIDxkaXYgY2xhc3M9XCJtYXgtdy1zbSB3LWZ1bGwgYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcG9pbnRlci1ldmVudHMtYXV0b1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWxnIHNoYWRvdy14cyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImgtNiB3LTYgdGV4dC1ncmVlbi00MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTkgMTJsMiAyIDQtNG02IDJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0zIHctMCBmbGV4LTEgcHQtMC41XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICDQo9GB0L/QtdGI0L3QviDRgdC+0YXRgNCw0L3QtdC90L4hXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgINCi0LXQv9C10YDRjCDQu9GO0LHQvtC5LCDRgyDQutC+0LPQviDQtdGB0YLRjCDRgdGB0YvQu9C60LAsINC80L7QttC10YIg0L/RgNC+0YHQvNC+0YLRgNC10YLRjCDRjdGC0L7RgiDRhNCw0LnQuy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtNCBmbGV4LXNocmluay0wIGZsZXhcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmxpbmUtZmxleCB0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCI+XG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJoLTUgdy01XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxuKVxuXG5hZGRDbGFzc1Rva2VuczIobGluZXMpXG5cbmNvbnN0IGFsbENsYXNzZXMgPSAnZml4ZWQgZmxleC1jb2wgcm91bmRlZC1zbSBzaGFkb3cgcHgtNCBqdXN0aWZ5LWNvbnRlbnQgdGV4dC1jZW50ZXIgZmxleC1zaHJpbmstMCBtZDp0ZXh0LWxlZnQgaC0xNiB3LTE2IG1kOmgtMjQgbWQ6dy0yNCByb3VuZGVkLWZ1bGwgbXgtYXV0byB0ZXh0LWxnIHRleHQtcHVycGxlLTUwMCBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTYwMCB0ZXh0LWdyZWVuLTQwMCB0ZXh0LWJsdWUtNTAwIHJvdW5kZWQtcGlsbCBwLTQgbWF4LXctc2NyZWVuLXhsIG10LTUgbGVhZGluZy03IHdoaXRlc3BhY2Utbm93cmFwIHNtOmdhcC02IGxnOm1heC13LTR4bCBsZzpteC1hdXRvIHhsOm1heC13LW5vbmUgZmxleC0xIHhsOm14LTAgeGw6Z3JpZC1jb2xzLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LTR4bCBsZWFkaW5nLTYgbGVhZGluZy0xMCBmb250LWV4dHJhYm9sZCAgbGVhZGluZy01IGgtNSB3LTUgdGV4dC1ncmVlbi01MDAgdGV4dC01eGwgbGVhZGluZy1ub25lIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHQgYm9yZGVyLXQgdGV4dC1zbSBib3JkZXItaW5kaWdvLTYwMCBweS00IGZvbnQtbWVkaXVtIHB4LTUgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHRleHQtYmFzZSBsZWFkaW5nLTYgdGV4dC13aGl0ZSBhYnNvbHV0ZSByaWdodC1mdWxsIG1sLTQgYm90dG9tLTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgcHktMyBteC00IHctZnVsbCBkdXJhdGlvbi0xNTAgaC1mdWxsIHRyYW5zaXRpb24gcHktMCBwbC00IHByLTggYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgcHgtNSBweS0zIGFwcGVhcmFuY2Utbm9uZSB1bmRlcmxpbmUgYmctaW5kaWdvLTcwMCBtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBpdGVtcy1iYXNlbGluZSB0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwJy5zcGxpdChcbiAgJyAnXG4pXG5cbmNvbnN0IHVzZWRDbGFzc2VzID0gc2h1ZmZsZVNlZWQuc2h1ZmZsZShcbiAgJ2ZpeGVkIHB4LTQgZmxleC1zaHJpbmstMCB0ZXh0LWdyZWVuLTQwMCBwLTQgZmxleC0xIGxlYWRpbmctNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1sLTQgdHJhbnNpdGlvbicuc3BsaXQoXG4gICAgJyAnXG4gICksXG4gIDFcbilcblxuY29uc3QgdW51c2VkQ2xhc3NlcyA9IHNodWZmbGVTZWVkLnNodWZmbGUoXG4gIGFsbENsYXNzZXMuZmlsdGVyKChjKSA9PiAhdXNlZENsYXNzZXMuaW5jbHVkZXMoYykpLFxuICAxXG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBQZXJmb3JtYW5jZSgpIHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIHRocmVzaG9sZDogMC41LFxuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpblZpZXcpIHJldHVyblxuICAgIGFuaW1hdGUocHJvZ3Jlc3MsIEJBU0VfUkFOR0VbMV0sIHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgZGFtcGluZzogNTAsXG4gICAgfSlcbiAgfSwgW2luVmlld10pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInBlcmZvcm1hbmNlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBtZDpweC04IG1iLTEwIHNtOm1iLTE2IG1kOm1iLTIwXCI+XG4gICAgICAgIDxJY29uQ29udGFpbmVyIGNsYXNzTmFtZT17YCR7Z3JhZGllbnRzLnRlYWxbMF19IG1iLThgfT5cbiAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICAgIDxDYXB0aW9uIGFzPVwiaDJcIiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIG1iLTNcIj5cbiAgICAgICAgICDQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0YxcbiAgICAgICAgPC9DYXB0aW9uPlxuICAgICAgICA8QmlnVGV4dCBjbGFzc05hbWU9XCJtYi04XCI+0JIg0L/RgNC+0LTQsNC60YjQtdC90LUg0L7QvSDQutGA0L7RiNC10YfQvdGL0LkuPC9CaWdUZXh0PlxuICAgICAgICA8UGFyYWdyYXBoIGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICBUYWlsd2luZCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRg9C00LDQu9GP0LXRgiDQstC10YHRjCDQvdC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C5IENTUyDQv9GA0Lgg0YHQsdC+0YDQutC1INC00LvRjyDRgNCw0LHQvtGH0LXQuSDQstC10YDRgdC40LgsINGH0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0JLQsNGIINC+0LrQvtC90YfQsNGC0LXQu9GM0L3Ri9C5INC90LDQsdC+0YAgQ1NTINGP0LLQu9GP0LXRgtGB0Y8g0LzQuNC90LjQvNCw0LvRjNC90YvQvCDQuNC3INCy0L7Qt9C80L7QttC90YvRhS4g0KTQsNC60YLQuNGH0LXRgdC60LgsINCx0L7Qu9GM0YjQuNC90YHRgtCy0L4g0L/RgNC+0LXQutGC0L7QsiBUYWlsd2luZCDQvtGC0L/RgNCw0LLQu9GP0Y7RgiDQutC70LjQtdC90YLRgyDQvNC10L3QtdC1IDEwINCa0JEgQ1NTLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL29wdGltaXppbmctZm9yLXByb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIGhvdmVyOnRleHQtdGVhbC03MDBcIj5cbiAgICAgICAgICDQo9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1IC0mZ3Q7XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdyYWRpZW50TG9ja3VwXG4gICAgICAgIGNvbG9yPVwidGVhbFwiXG4gICAgICAgIHJvdGF0ZT17MX1cbiAgICAgICAgcGluPVwicmlnaHRcIlxuICAgICAgICBsZWZ0PXtcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcm91bmRlZC10bC14bCBzbTpyb3VuZGVkLXQteGwgbGc6cm91bmRlZC14bCBzaGFkb3ctbGcgbGc6LW1yLTggdGFidWxhci1udW1zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtdGwteGwgc206cm91bmRlZC10LXhsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbGVmdC00IHNtOnRvcC02IHNtOmxlZnQtNiB3LTE0IGgtMTQgc206dy0xNiBzbTpoLTE2IGJnLWdyZWVuLTEwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDY0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCB0ZXh0LWdyZWVuLTQwMFwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTApIHNjYWxlKDEgLTEpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk02LDMyYTI2LDI2IDAgMSwwIDUyLDBhMjYsMjYgMCAxLDAgLTUyLDBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjAgMVwiXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgcGF0aExlbmd0aDogMCwgc3Ryb2tlV2lkdGg6IDYgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aW5WaWV3ID8geyBwYXRoTGVuZ3RoOiAxLCBzdHJva2VXaWR0aDogMTIgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBEVVJBVElPTixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgdy0xMCBoLTEwIHNoYWRvdy1zbVwiIC8+XG4gICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi42NjggMzMuMzMzbDUuMzMzIDUuMzM0IDEzLjMzNC0xMy4zMzRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyMkM1NUVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMCAxXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBwYXRoTGVuZ3RoOiAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2luVmlldyA/IHsgcGF0aExlbmd0aDogMSwgb3BhY2l0eTogMSB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aExlbmd0aDogeyBkZWxheTogRFVSQVRJT04gLSAwLjUsIGR1cmF0aW9uOiAwLjMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7IGRlbGF5OiBEVVJBVElPTiAtIDAuNSwgZHVyYXRpb246IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwicC00IHBiLTAgc206cC02IHNtOnBiLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSB3LWZ1bGwgcGwtMTggc206cGwtMjAgc206cHktMC41XCI+XG4gICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPtCf0YDQvtC00LDQutGI0LXQvSDQsdC40LvQtDwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRlciBmcm9tPXsyNDEzLjR9IHRvPXs4Ljd9IHJvdW5kPXsxfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIEtCXG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwIC1teC00IHNtOi1teC02IG10LTQgc206bXQtNiBweC00IHNtOnB4LTYgcHktMyBmb250LW1vbm8gdGV4dC14cyBsZWFkaW5nLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZVwiPtCe0YfQuNGJ0LXQvdC+IDwvZHQ+XG4gICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGVyIGZyb209ezB9IHRvPXsyMDE0NH0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSAvPiDQvdC10LjRgdC/0L7Qu9GM0LfRg9C10LzRi9GFINC60LvQsNGB0YHQvtCyXG4gICAgICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cInRleHQtcm9zZS03MDAgaGlkZGVuIHNtOmZsZXggbGc6aGlkZGVuIHhsOmZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIC08Q291bnRlciBmcm9tPXswfSB0bz17MTYwMjE1fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+INGB0YLRgNC+0LpcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgODIgMTJcIiB3aWR0aD1cIjgyXCIgaGVpZ2h0PVwiMTJcIiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2Y0M2Y1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB1c2VUcmFuc2Zvcm0ocHJvZ3Jlc3MsIChwKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPj0gQkFTRV9SQU5HRVsxXSAqIDAuMzUgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC43NSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdXNlVHJhbnNmb3JtKHByb2dyZXNzLCAocCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID49IEJBU0VfUkFOR0VbMV0gKiAwLjkgPyAnI2Y0M2Y1ZScgOiAnI2U0ZTRlNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHVzZVRyYW5zZm9ybShwcm9ncmVzcywgKHApID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA+PSBCQVNFX1JBTkdFWzFdICogMC45OSA/ICcjZjQzZjVlJyA6ICcjZTRlNGU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHg9XCI1NlwiIGZpbGw9XCIjZTRlNGU3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB4PVwiNzBcIiBmaWxsPVwiI2U0ZTRlN1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy10ZWFsLTcwMCBsZzpyb3VuZGVkLWIteGwgb3ZlcmZsb3ctaGlkZGVuIHAtNFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMjUxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS03NSBhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LW1vbm8gdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtdGVhbC0yMDBcIj5cbiAgICAgICAgICAgICAgICB7YWxsQ2xhc3Nlcy5tYXAoKGMsIGkpID0+XG4gICAgICAgICAgICAgICAgICB1c2VkQ2xhc3Nlcy5pbmNsdWRlcyhjKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29kZS1oaWdobGlnaHQgd2hpdGVzcGFjZS1ub3dyYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhbmltYXRlLWZsYXNoLWNvZGUtc2xvdyc6IGluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChEVVJBVElPTiAvIHVzZWRDbGFzc2VzLmxlbmd0aCkgKiB1c2VkQ2xhc3Nlcy5pbmRleE9mKGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1zYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi01MDAgd2hpdGVzcGFjZS1ub3dyYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LXRlYWwtMjAwJzogIWluVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtdGVhbC05MDAnOiBpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKERVUkFUSU9OIC8gdW51c2VkQ2xhc3Nlcy5sZW5ndGgpICogdW51c2VkQ2xhc3Nlcy5pbmRleE9mKGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1zYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTAgaC0xNiBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg0LCAzMCwgMjgsIDEpLCByZ2JhKDQsIDMwLCAyOCwgMCkpJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcmlnaHQ9e1xuICAgICAgICAgIDxDb2RlV2luZG93IGNsYXNzTmFtZT1cImJnLWN5YW4tNTAwXCI+XG4gICAgICAgICAgICA8Q29kZVdpbmRvdy5Db2RlMiBsaW5lcz17bGluZXMubGVuZ3RofT5cbiAgICAgICAgICAgICAge2xpbmVzLm1hcCgodG9rZW5zLCBsaW5lSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtsaW5lSW5kZXh9PlxuICAgICAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbi50eXBlc1t0b2tlbi50eXBlcy5sZW5ndGggLSAxXSA9PT0gJ2NsYXNzJyAmJlxuICAgICAgICAgICAgICAgICAgICAgIHVzZWRDbGFzc2VzLmluY2x1ZGVzKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rva2VuSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnY29kZS1oaWdobGlnaHQnLCBnZXRDbGFzc05hbWVGb3JUb2tlbih0b2tlbiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYW5pbWF0ZS1mbGFzaC1jb2RlLXNsb3cnOiBpblZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChEVVJBVElPTiAvIHVzZWRDbGFzc2VzLmxlbmd0aCkgKiB1c2VkQ2xhc3Nlcy5pbmRleE9mKHRva2VuLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9rZW4uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dG9rZW5JbmRleH0gY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVGb3JUb2tlbih0b2tlbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Rva2VuLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHsnXFxuJ31cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ29kZVdpbmRvdy5Db2RlMj5cbiAgICAgICAgICA8L0NvZGVXaW5kb3c+XG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9