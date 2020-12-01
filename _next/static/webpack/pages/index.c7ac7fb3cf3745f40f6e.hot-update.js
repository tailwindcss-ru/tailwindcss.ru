webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/Hero.js":
/*!*************************************!*\
  !*** ./src/components/home/Hero.js ***!
  \*************************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CodeWindow */ "./src/components/CodeWindow.js");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Code */ "./src/components/Code.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_fit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/fit */ "./src/utils/fit.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Hero.module.css */ "./src/components/home/Hero.module.css");
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utils/wait */ "./src/utils/wait.js");
/* harmony import */ var _utils_createInViewPromise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/createInViewPromise */ "./src/utils/createInViewPromise.js");







var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\home\\Hero.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var CHAR_DELAY = 75;
var GROUP_DELAY = 1000;
var TRANSITION = {
  duration: 0.5
};
var _tokens$code = {
  "tokens": [["tag", [["tag", [["punctuation", "<"], "figure"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "md:flex bg-gray-100 rounded-xl p-8 md:p-0", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "<"], "img"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto", ["punctuation", "\""]]], " ", ["attr-name", ["src"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "/sarah-dayan.jpg", ["punctuation", "\""]]], " ", ["attr-name", ["alt"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], ["punctuation", "\""]]], " ", ["attr-name", ["width"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "384", ["punctuation", "\""]]], " ", ["attr-name", ["height"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "512", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "pt-6 md:p-8 text-center md:text-left space-y-4", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "<"], "blockquote"]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "p"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-lg font-semibold", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        “Tailwind CSS - единственный фреймворк, который я видела масштабируемым в больших командах. Его легко настроить, адаптировать к любому дизайну, а размер сборки крошечный.”\n      ", ["tag", [["tag", [["punctuation", "</"], "p"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "</"], "blockquote"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "<"], "figcaption"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "font-medium", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-cyan-600", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        Сара Даян\n      ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-gray-500", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        Staff Engineer, Algolia\n      ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "</"], "figcaption"]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n", ["tag", [["tag", [["punctuation", "</"], "figure"]], ["punctuation", ">"]]], "\n"],
  "code": "<figure class=\"md:flex bg-gray-100 rounded-xl p-8 md:p-0\">\n  <img class=\"w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto\" src=\"/sarah-dayan.jpg\" alt=\"\" width=\"384\" height=\"512\">\n  <div class=\"pt-6 md:p-8 text-center md:text-left space-y-4\">\n    <blockquote>\n      <p class=\"text-lg font-semibold\">\n        “Tailwind CSS - единственный фреймворк, который я видела масштабируемым в больших командах. Его легко настроить, адаптировать к любому дизайну, а размер сборки крошечный.”\n      </p>\n    </blockquote>\n    <figcaption class=\"font-medium\">\n      <div class=\"text-cyan-600\">\n        Сара Даян\n      </div>\n      <div class=\"text-gray-500\">\n        Staff Engineer, Algolia\n      </div>\n    </figcaption>\n  </div>\n</figure>\n"
},
    tokens = _tokens$code.tokens,
    code = _tokens$code.code;

function getRange(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({
    start: code.indexOf(text),
    end: code.indexOf(text) + text.length
  }, options);
}

var ranges = [getRange(' p-8'), getRange(' rounded-full'), getRange(' mx-auto'), getRange(' font-semibold'), getRange(' class="font-medium"'), getRange(' class="text-cyan-600"'), getRange(' class="text-gray-500"'), getRange(' text-center'), getRange('md:flex '), getRange(' md:p-0'), getRange(' md:p-8', {
  immediate: true
}), getRange(' md:rounded-none'), getRange(' md:w-48'), getRange(' md:h-auto'), getRange(' md:text-left') // getRange(' md:-m-8 md:mr-8'),
// getRange(' md:rounded-none'),
// getRange(' md:w-48'),
// getRange(' md:h-auto'),
];

function getRangeIndex(index, ranges) {
  for (var i = 0; i < ranges.length; i++) {
    var rangeArr = Array.isArray(ranges[i]) ? ranges[i] : [ranges[i]];

    for (var j = 0; j < rangeArr.length; j++) {
      if (index >= rangeArr[j].start && index < rangeArr[j].end) {
        return [i, index - rangeArr[j].start, index === rangeArr[j].end - 1];
      }
    }
  }

  return [-1];
}

function Words(_ref) {
  var _this = this;

  var children = _ref.children,
      _ref$bolder = _ref.bolder,
      bolder = _ref$bolder === void 0 ? false : _ref$bolder,
      layout = _ref.layout,
      transition = _ref.transition;
  return children.split(' ').map(function (word, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].span, {
      key: i,
      layout: layout,
      className: "relative inline-flex whitespace-pre text-lg",
      transition: transition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, bolder ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].span, {
      className: "absolute top-0 left-0",
      initial: {
        fontWeight: 400
      },
      animate: {
        fontWeight: 600
      },
      transition: transition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, word, ' '), __jsx("span", {
      style: {
        opacity: 0,
        fontWeight: 600
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, word, " ")) : word + ' ');
  });
}

_c = Words;

function augment(tokens) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  for (var i = 0; i < tokens.length; i++) {
    if (Array.isArray(tokens[i])) {
      var _type = tokens[i][0];
      var children = tokens[i][1];

      if (Array.isArray(children)) {
        index = augment(children, index);
      } else {
        var str = children;
        var result = [];

        for (var j = 0; j < str.length; j++) {
          var _getRangeIndex = getRangeIndex(index, ranges),
              _getRangeIndex2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_getRangeIndex, 3),
              rangeIndex = _getRangeIndex2[0],
              indexInRange = _getRangeIndex2[1],
              isLast = _getRangeIndex2[2];

          if (rangeIndex > -1) {
            result.push(["char:".concat(rangeIndex, ":").concat(indexInRange).concat(isLast ? ':last' : ''), str[j]]);
          } else {
            if (typeof result[result.length - 1] === 'string') {
              result[result.length - 1] += str[j];
            } else {
              result.push(str[j]);
            }
          }

          index++;
        }

        if (!(result.length === 1 && typeof result[0] === 'string')) {
          tokens[i].splice(1, 1, result);
        }
      }
    } else {
      var _str = tokens[i];
      var _result = [];

      for (var _j = 0; _j < _str.length; _j++) {
        var _getRangeIndex3 = getRangeIndex(index, ranges),
            _getRangeIndex4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_getRangeIndex3, 3),
            _rangeIndex = _getRangeIndex4[0],
            _indexInRange = _getRangeIndex4[1],
            _isLast = _getRangeIndex4[2];

        if (_rangeIndex > -1) {
          _result.push(["char:".concat(_rangeIndex, ":").concat(_indexInRange).concat(_isLast ? ':last' : ''), _str[_j]]);
        } else {
          if (typeof _result[_result.length - 1] === 'string') {
            _result[_result.length - 1] += _str[_j];
          } else {
            _result.push(_str[_j]);
          }
        }

        index++;
      }

      tokens.splice.apply(tokens, [i, 1].concat(_result));
      i += _result.length - 1;
    }
  }

  return index;
}

augment(tokens);
function Hero() {
  _s();

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(-1),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    group: -1,
    char: -1
  }),
      state = _useState2[0],
      setState = _useState2[1];

  var cursorControls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_9__["useAnimation"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      wide = _useState3[0],
      setWide = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      finished = _useState4[0],
      setFinished = _useState4[1];

  var supportsMd = Object(_hooks_useMedia__WEBPACK_IMPORTED_MODULE_14__["useMedia"])('(min-width: 640px)');

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isMd = _useState5[0],
      setIsMd = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      containerRect = _useState6[0],
      setContainerRect = _useState6[1];

  var md = supportsMd && isMd;
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(true);
  var inViewRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var layout = !finished;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    return function () {
      return mounted.current = false;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var current = true;

    var _createInViewPromise = Object(_utils_createInViewPromise__WEBPACK_IMPORTED_MODULE_16__["createInViewPromise"])(inViewRef.current, {
      threshold: 0.5
    }),
        inViewPromise = _createInViewPromise.promise,
        disconnect = _createInViewPromise.disconnect;

    var promises = [Object(_utils_wait__WEBPACK_IMPORTED_MODULE_15__["wait"])(1000), inViewPromise, new Promise(function (resolve) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(resolve);
      } else {
        window.setTimeout(resolve, 0);
      }
    }), new Promise(function (resolve) {
      if (imageRef.current.complete) {
        resolve();
      } else {
        imageRef.current.addEventListener('load', resolve);
      }
    })];
    Promise.all(promises).then(function () {
      if (current) {
        setState({
          group: 0,
          char: 0
        });
      }
    });
    return function () {
      current = false;
      disconnect();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (step === 14) {
      var id = window.setTimeout(function () {
        setFinished(true);
      }, 1000);
      return function () {
        window.clearTimeout(id);
      };
    }
  }, [step]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!finished) return;
    var count = 0;
    cursorControls.start({
      opacity: 0.5
    });
    var id = window.setInterval(function () {
      if (count === 2) {
        return window.clearInterval(id);
      }

      count++;
      cursorControls.start({
        opacity: 1,
        scale: 0.9,
        transition: {
          duration: 0.25
        }
      }).then(function () {
        setWide(function (wide) {
          return !wide;
        });
        cursorControls.start({
          opacity: count === 2 ? 0 : 0.5,
          scale: 1,
          transition: {
            duration: 0.25,
            delay: 0.6
          }
        });
      });
    }, 2000);
    return function () {
      window.clearInterval(id);
    };
  }, [finished]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (finished) {
      var id = window.setTimeout(function () {
        setIsMd(wide);
      }, 250);
      return function () {
        return window.clearTimeout(id);
      };
    }
  }, [wide, finished]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var observer = new window.ResizeObserver(Object(debounce__WEBPACK_IMPORTED_MODULE_12__["debounce"])(function () {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    }, 500));
    observer.observe(containerRef.current);
    return function () {
      observer.disconnect();
    };
  }, []);
  return __jsx(Layout, {
    left: __jsx("div", {
      ref: containerRef,
      className: "xl:-mr-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["AnimateSharedLayout"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      className: "".concat(_Hero_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.card, " relative z-10 rounded-r-xl sm:rounded-xl shadow-xl text-black mx-auto lg:mx-0 xl:mx-auto"),
      initial: false,
      animate: (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) ? {
        width: !supportsMd || wide ? containerRect.width : 375
      } : {},
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 13
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      transition: TRANSITION,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('bg-white rounded-r-xl sm:rounded-xl overflow-hidden', {
        flex: step >= 8 && md,
        'p-8': step >= 0,
        'text-center': step >= 7 && !md || step < 14 && md
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 15
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('absolute z-20 top-1/2 right-0 xl:right-auto xl:left-0 text-black rounded-full -mt-4 -mr-4 xl:mr-0 xl:-ml-4 pointer-events-none', {
        invisible: !supportsMd
      }),
      initial: {
        opacity: 0
      },
      animate: cursorControls,
      transition: {
        default: TRANSITION,
        opacity: {
          duration: 0.25
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 17
      }
    }, __jsx("svg", {
      className: "h-8 w-8",
      viewBox: "0 0 100 100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 19
      }
    }, __jsx("circle", {
      cx: "50",
      cy: "50",
      r: "40",
      stroke: "rgba(255, 255, 255, 0.5)",
      strokeWidth: "8",
      fill: "rgba(0, 0, 0, 0.5)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 21
      }
    }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      initial: false,
      animate: _objectSpread({}, step >= 1 && step < 11 || step >= 11 && !md && !finished ? {
        borderRadius: 64
      } : {
        borderRadius: 0
      }),
      transition: TRANSITION,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('relative z-10 overflow-hidden flex-none', step >= 10 && md ? '-m-8 mr-8' : step >= 2 ? 'mx-auto' : undefined, step >= 12 && md ? 'w-48' : 'w-32', step >= 13 && md ? 'h-auto' : 'h-32'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 17
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].img, {
      ref: imageRef,
      layout: layout,
      transition: TRANSITION,
      src: __webpack_require__(/*! @/img/sarah-dayan.jpg */ "./src/img/sarah-dayan.jpg").default,
      alt: "",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])('absolute max-w-none object-cover bg-gray-100', {
        'rounded-full': finished && !md
      }),
      style: finished ? {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      } : step >= 13 && md ? Object(_utils_fit__WEBPACK_IMPORTED_MODULE_11__["fit"])(192, containerRect.height, 384, 512) : step >= 12 && md ? Object(_utils_fit__WEBPACK_IMPORTED_MODULE_11__["fit"])(192, 128, 384, 512) : Object(_utils_fit__WEBPACK_IMPORTED_MODULE_11__["fit"])(128, 128, 384, 512),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 19
      }
    })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      className: step >= 10 && md ? '' : 'pt-6',
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 17
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      layout: layout,
      className: "mb-4",
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 19
      }
    }, __jsx(Words, {
      bolder: step >= 3,
      layout: layout,
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 21
      }
    }, "\u201CTailwind CSS - \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u044F \u0432\u0438\u0434\u0435\u043B\u0430 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043C\u044B\u043C \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0445. \u0415\u0433\u043E \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C, \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A \u043B\u044E\u0431\u043E\u043C\u0443 \u0434\u0438\u0437\u0430\u0439\u043D\u0443, \u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0441\u0431\u043E\u0440\u043A\u0438 \u043A\u0440\u043E\u0448\u0435\u0447\u043D\u044B\u0439.\u201D")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
      className: "flex flex-col ".concat(step >= 7 && !md || step < 14 && md ? 'items-center' : 'items-start'),
      style: _objectSpread({}, step >= 4 ? {
        fontWeight: 500
      } : {
        fontWeight: 400
      }),
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 19
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].p, {
      layout: layout,
      initial: false,
      animate: _objectSpread({}, step >= 5 ? {
        color: '#0891b2'
      } : {
        color: '#000'
      }),
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 21
      }
    }, "\u0421\u0430\u0440\u0430 \u0414\u0430\u044F\u043D"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].p, {
      layout: layout,
      initial: false,
      animate: _objectSpread({}, step >= 6 ? {
        color: '#71717a'
      } : {
        color: '#000'
      }),
      transition: TRANSITION,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 21
      }
    }, "Staff Engineer, Algolia"))))))),
    right: __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_7__["CodeWindow"], {
      className: "".concat(_Hero_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.codeWindow, " bg-light-blue-500 pb-6 md:pb-0"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 9
      }
    }, __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_7__["CodeWindow"].Code, {
      ref: inViewRef,
      tokens: tokens,
      tokenComponent: HeroToken,
      tokenProps: {
        currentGroup: state.group,
        currentChar: state.char,
        onCharComplete: function onCharComplete(charIndex) {
          if (!mounted.current) return;
          setState(function (state) {
            return _objectSpread(_objectSpread({}, state), {}, {
              char: charIndex + 1
            });
          });
        },
        onGroupComplete: function onGroupComplete(groupIndex) {
          return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (mounted.current) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    setStep(groupIndex);

                    if (!(groupIndex === 7)) {
                      _context.next = 14;
                      break;
                    }

                    if (supportsMd) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    _context.next = 8;
                    return cursorControls.start({
                      opacity: 0.5,
                      transition: {
                        delay: 1
                      }
                    });

                  case 8:
                    if (mounted.current) {
                      _context.next = 10;
                      break;
                    }

                    return _context.abrupt("return");

                  case 10:
                    setWide(true);
                    setIsMd(true);
                    _context.next = 14;
                    return cursorControls.start({
                      opacity: 0,
                      transition: {
                        delay: 0.5
                      }
                    });

                  case 14:
                    if (mounted.current) {
                      _context.next = 16;
                      break;
                    }

                    return _context.abrupt("return");

                  case 16:
                    if (ranges[groupIndex + 1] && ranges[groupIndex + 1].immediate) {
                      setState({
                        char: 0,
                        group: groupIndex + 1
                      });
                    } else {
                      window.setTimeout(function () {
                        if (!mounted.current) return;
                        setState({
                          char: 0,
                          group: groupIndex + 1
                        });
                      }, GROUP_DELAY);
                    }

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 11
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 5
    }
  });
}

_s(Hero, "5qqBxg9wWRZEPngVdu4VckPQw2Y=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_9__["useAnimation"], _hooks_useMedia__WEBPACK_IMPORTED_MODULE_14__["useMedia"]];
});

_c2 = Hero;

function AnimatedToken(_ref2) {
  _s2();

  var isActiveToken = _ref2.isActiveToken,
      onComplete = _ref2.onComplete,
      children = _ref2.children;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      visible = _useState7[0],
      setVisible = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (visible) {
      onComplete();
    }
  }, [visible]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (isActiveToken) {
      var id = window.setTimeout(function () {
        setVisible(true);
      }, CHAR_DELAY);
      return function () {
        window.clearTimeout(id);
      };
    }
  }, [isActiveToken]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("span", {
    className: visible ? undefined : 'hidden',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 7
    }
  }, children), isActiveToken && __jsx("span", {
    className: "border -mx-px",
    style: {
      height: '1.125rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 25
    }
  }));
}

_s2(AnimatedToken, "tdih875XgMxQefzip/l/Dhpbgoo=");

_c3 = AnimatedToken;

function HeroToken(_ref3) {
  var currentChar = _ref3.currentChar,
      onCharComplete = _ref3.onCharComplete,
      currentGroup = _ref3.currentGroup,
      onGroupComplete = _ref3.onGroupComplete,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["currentChar", "onCharComplete", "currentGroup", "onGroupComplete"]);

  var token = props.token;

  if (token[0].startsWith('char:')) {
    var _token$0$split$map = token[0].split(':').map(function (x) {
      return parseInt(x, 10);
    }),
        _token$0$split$map2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_token$0$split$map, 3),
        groupIndex = _token$0$split$map2[1],
        indexInGroup = _token$0$split$map2[2];

    return __jsx(AnimatedToken, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      isActiveToken: currentGroup === groupIndex && currentChar === indexInGroup,
      onComplete: function onComplete() {
        if (token[0].endsWith(':last')) {
          onGroupComplete(groupIndex);
        } else {
          onCharComplete(indexInGroup);
        }
      }
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 7
      }
    }));
  }

  return __jsx(_components_Code__WEBPACK_IMPORTED_MODULE_8__["Token"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 10
    }
  }));
}

_c4 = HeroToken;

function Layout(_ref4) {
  var left = _ref4.left,
      right = _ref4.right,
      _ref4$pin = _ref4.pin,
      pin = _ref4$pin === void 0 ? 'left' : _ref4$pin;
  return __jsx("div", {
    className: "grid ".concat(_Hero_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.layout),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full row-start-1 row-span-full xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-5 lg:py-10 xl:py-16 flex ".concat(pin === 'left' ? '-ml-8 pr-4 sm:ml-0 sm:pr-0' : '-mr-8 pl-4 sm:mr-0 sm:pl-0'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bg-gray-100 w-full flex-none rounded-3xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-light-blue-500 -rotate-1 sm:-rotate-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "relative col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full xl:col-start-2 xl:col-end-3 row-start-2 row-end-3 xl:row-start-3 xl:row-end-4 self-center ".concat(pin === 'left' ? 'pr-8' : 'pl-8', " sm:px-6 md:px-8 pb-6 md:pb-8 lg:px-0 lg:pb-0 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "".concat(_Hero_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.cardContainer, " max-w-xl xl:max-w-none flex items-center justify-center"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-full flex-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 11
    }
  }, left))), __jsx("div", {
    className: "relative md:px-8 lg:px-0 col-start-1 col-span-full lg:col-start-1 xl:col-start-3 xl:col-end-4 row-start-1 row-end-2 xl:row-start-2 xl:row-end-5 self-center pt-8 lg:pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mx-auto lg:max-w-2xl xl:max-w-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 9
    }
  }, right)));
}

_c5 = Layout;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Words");
$RefreshReg$(_c2, "Hero");
$RefreshReg$(_c3, "AnimatedToken");
$RefreshReg$(_c4, "HeroToken");
$RefreshReg$(_c5, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9IZXJvLmpzIl0sIm5hbWVzIjpbIkNIQVJfREVMQVkiLCJHUk9VUF9ERUxBWSIsIlRSQU5TSVRJT04iLCJkdXJhdGlvbiIsInRva2VucyIsImNvZGUiLCJnZXRSYW5nZSIsInRleHQiLCJvcHRpb25zIiwic3RhcnQiLCJpbmRleE9mIiwiZW5kIiwibGVuZ3RoIiwicmFuZ2VzIiwiaW1tZWRpYXRlIiwiZ2V0UmFuZ2VJbmRleCIsImluZGV4IiwiaSIsInJhbmdlQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaiIsIldvcmRzIiwiY2hpbGRyZW4iLCJib2xkZXIiLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiLCJhdWdtZW50IiwiX3R5cGUiLCJzdHIiLCJyZXN1bHQiLCJyYW5nZUluZGV4IiwiaW5kZXhJblJhbmdlIiwiaXNMYXN0IiwicHVzaCIsInNwbGljZSIsIkhlcm8iLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwiZ3JvdXAiLCJjaGFyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnNvckNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwid2lkZSIsInNldFdpZGUiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwic3VwcG9ydHNNZCIsInVzZU1lZGlhIiwiaXNNZCIsInNldElzTWQiLCJjb250YWluZXJSZWN0Iiwic2V0Q29udGFpbmVyUmVjdCIsIm1kIiwibW91bnRlZCIsImluVmlld1JlZiIsImltYWdlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNyZWF0ZUluVmlld1Byb21pc2UiLCJ0aHJlc2hvbGQiLCJpblZpZXdQcm9taXNlIiwicHJvbWlzZSIsImRpc2Nvbm5lY3QiLCJwcm9taXNlcyIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY29tcGxldGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsIiwidGhlbiIsImlkIiwiY2xlYXJUaW1lb3V0IiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY2FsZSIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImRlYm91bmNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2JzZXJ2ZSIsInN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsImNsc3giLCJmbGV4IiwiaW52aXNpYmxlIiwiZGVmYXVsdCIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsInJlcXVpcmUiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiZml0IiwiY29sb3IiLCJjb2RlV2luZG93IiwiSGVyb1Rva2VuIiwiY3VycmVudEdyb3VwIiwiY3VycmVudENoYXIiLCJvbkNoYXJDb21wbGV0ZSIsImNoYXJJbmRleCIsIm9uR3JvdXBDb21wbGV0ZSIsImdyb3VwSW5kZXgiLCJBbmltYXRlZFRva2VuIiwiaXNBY3RpdmVUb2tlbiIsIm9uQ29tcGxldGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInByb3BzIiwidG9rZW4iLCJzdGFydHNXaXRoIiwieCIsInBhcnNlSW50IiwiaW5kZXhJbkdyb3VwIiwiZW5kc1dpdGgiLCJMYXlvdXQiLCJyaWdodCIsInBpbiIsImNhcmRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUc7QUFBRUMsVUFBUSxFQUFFO0FBQVosQ0FBbkI7bUJBZkE7QUFBQyxZQUFTLENBQUMsQ0FBQyxLQUFELEVBQU8s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QUFqQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsdU1BQ1A2RyxHQUFHLEtBQUssTUFBUixHQUFpQiw0QkFBakIsR0FBZ0QsNEJBRHpDLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLG9JQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0U7QUFDRSxhQUFTLGlNQUNQQSxHQUFHLEtBQUssTUFBUixHQUFpQixNQUFqQixHQUEwQixNQURuQiw4RkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLFlBQUtyQyx3REFBTSxDQUFDc0MsYUFBWiw2REFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQzNCLElBQW5DLENBSEYsQ0FMRixDQVRGLEVBb0JFO0FBQUssYUFBUyxFQUFDLDBLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFEeUIsS0FBckQsQ0FERixDQXBCRixDQURGO0FBMEJEOztNQTNCUUQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2FjN2ZiM2NmMzc0NWY0MGY2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29kZVdpbmRvdyB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlV2luZG93J1xuaW1wb3J0IHRva2VuaXplIGZyb20gJy4uLy4uL21hY3Jvcy90b2tlbml6ZS5tYWNybydcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvZGUnXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBmaXQgfSBmcm9tICdAL3V0aWxzL2ZpdCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVyby5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlTWVkaWEgfSBmcm9tICdAL2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gJ0AvdXRpbHMvd2FpdCdcbmltcG9ydCB7IGNyZWF0ZUluVmlld1Byb21pc2UgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZUluVmlld1Byb21pc2UnXG5cbmNvbnN0IENIQVJfREVMQVkgPSA3NVxuY29uc3QgR1JPVVBfREVMQVkgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OID0geyBkdXJhdGlvbjogMC41IH1cblxuY29uc3QgeyB0b2tlbnMsIGNvZGUgfSA9IHRva2VuaXplLmh0bWwoXG4gIGA8ZmlndXJlIGNsYXNzPVwibWQ6ZmxleCBiZy1ncmF5LTEwMCByb3VuZGVkLXhsIHAtOCBtZDpwLTBcIj5cbiAgPGltZyBjbGFzcz1cInctMzIgaC0zMiBtZDp3LTQ4IG1kOmgtYXV0byBtZDpyb3VuZGVkLW5vbmUgcm91bmRlZC1mdWxsIG14LWF1dG9cIiBzcmM9XCIvc2FyYWgtZGF5YW4uanBnXCIgYWx0PVwiXCIgd2lkdGg9XCIzODRcIiBoZWlnaHQ9XCI1MTJcIj5cbiAgPGRpdiBjbGFzcz1cInB0LTYgbWQ6cC04IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBzcGFjZS15LTRcIj5cbiAgICA8YmxvY2txdW90ZT5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIOKAnFRhaWx3aW5kIENTUyAtINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDRhNGA0LXQudC80LLQvtGA0LosINC60L7RgtC+0YDRi9C5INGPINCy0LjQtNC10LvQsCDQvNCw0YHRiNGC0LDQsdC40YDRg9C10LzRi9C8INCyINCx0L7Qu9GM0YjQuNGFINC60L7QvNCw0L3QtNCw0YUuINCV0LPQviDQu9C10LPQutC+INC90LDRgdGC0YDQvtC40YLRjCwg0LDQtNCw0L/RgtC40YDQvtCy0LDRgtGMINC6INC70Y7QsdC+0LzRgyDQtNC40LfQsNC50L3Rgywg0LAg0YDQsNC30LzQtdGAINGB0LHQvtGA0LrQuCDQutGA0L7RiNC10YfQvdGL0Lku4oCdXG4gICAgICA8L3A+XG4gICAgPC9ibG9ja3F1b3RlPlxuICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiZm9udC1tZWRpdW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWN5YW4tNjAwXCI+XG4gICAgICAgINCh0LDRgNCwINCU0LDRj9C9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgIFN0YWZmIEVuZ2luZWVyLCBBbGdvbGlhXG4gICAgICA8L2Rpdj5cbiAgICA8L2ZpZ2NhcHRpb24+XG4gIDwvZGl2PlxuPC9maWd1cmU+XG5gLFxuICB0cnVlXG4pXG5cbmZ1bmN0aW9uIGdldFJhbmdlKHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4geyBzdGFydDogY29kZS5pbmRleE9mKHRleHQpLCBlbmQ6IGNvZGUuaW5kZXhPZih0ZXh0KSArIHRleHQubGVuZ3RoLCAuLi5vcHRpb25zIH1cbn1cblxuY29uc3QgcmFuZ2VzID0gW1xuICBnZXRSYW5nZSgnIHAtOCcpLFxuICBnZXRSYW5nZSgnIHJvdW5kZWQtZnVsbCcpLFxuICBnZXRSYW5nZSgnIG14LWF1dG8nKSxcbiAgZ2V0UmFuZ2UoJyBmb250LXNlbWlib2xkJyksXG4gIGdldFJhbmdlKCcgY2xhc3M9XCJmb250LW1lZGl1bVwiJyksXG4gIGdldFJhbmdlKCcgY2xhc3M9XCJ0ZXh0LWN5YW4tNjAwXCInKSxcbiAgZ2V0UmFuZ2UoJyBjbGFzcz1cInRleHQtZ3JheS01MDBcIicpLFxuICBnZXRSYW5nZSgnIHRleHQtY2VudGVyJyksXG4gIGdldFJhbmdlKCdtZDpmbGV4ICcpLFxuICBnZXRSYW5nZSgnIG1kOnAtMCcpLFxuICBnZXRSYW5nZSgnIG1kOnAtOCcsIHsgaW1tZWRpYXRlOiB0cnVlIH0pLFxuICBnZXRSYW5nZSgnIG1kOnJvdW5kZWQtbm9uZScpLFxuICBnZXRSYW5nZSgnIG1kOnctNDgnKSxcbiAgZ2V0UmFuZ2UoJyBtZDpoLWF1dG8nKSxcbiAgZ2V0UmFuZ2UoJyBtZDp0ZXh0LWxlZnQnKSxcbiAgLy8gZ2V0UmFuZ2UoJyBtZDotbS04IG1kOm1yLTgnKSxcbiAgLy8gZ2V0UmFuZ2UoJyBtZDpyb3VuZGVkLW5vbmUnKSxcbiAgLy8gZ2V0UmFuZ2UoJyBtZDp3LTQ4JyksXG4gIC8vIGdldFJhbmdlKCcgbWQ6aC1hdXRvJyksXG5dXG5cbmZ1bmN0aW9uIGdldFJhbmdlSW5kZXgoaW5kZXgsIHJhbmdlcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJhbmdlQXJyID0gQXJyYXkuaXNBcnJheShyYW5nZXNbaV0pID8gcmFuZ2VzW2ldIDogW3Jhbmdlc1tpXV1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJhbmdlQXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaW5kZXggPj0gcmFuZ2VBcnJbal0uc3RhcnQgJiYgaW5kZXggPCByYW5nZUFycltqXS5lbmQpIHtcbiAgICAgICAgcmV0dXJuIFtpLCBpbmRleCAtIHJhbmdlQXJyW2pdLnN0YXJ0LCBpbmRleCA9PT0gcmFuZ2VBcnJbal0uZW5kIC0gMV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFstMV1cbn1cblxuZnVuY3Rpb24gV29yZHMoeyBjaGlsZHJlbiwgYm9sZGVyID0gZmFsc2UsIGxheW91dCwgdHJhbnNpdGlvbiB9KSB7XG4gIHJldHVybiBjaGlsZHJlbi5zcGxpdCgnICcpLm1hcCgod29yZCwgaSkgPT4gKFxuICAgIDxtb3Rpb24uc3BhblxuICAgICAga2V5PXtpfVxuICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCB3aGl0ZXNwYWNlLXByZSB0ZXh0LWxnXCJcbiAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XG4gICAgPlxuICAgICAge2JvbGRlciA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMFwiXG4gICAgICAgICAgICBpbml0aWFsPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBmb250V2VpZ2h0OiA2MDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3dvcmR9eycgJ31cbiAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IDAsIGZvbnRXZWlnaHQ6IDYwMCB9fT57d29yZH0gPC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIHdvcmQgKyAnICdcbiAgICAgICl9XG4gICAgPC9tb3Rpb24uc3Bhbj5cbiAgKSlcbn1cblxuZnVuY3Rpb24gYXVnbWVudCh0b2tlbnMsIGluZGV4ID0gMCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRva2Vuc1tpXSkpIHtcbiAgICAgIGNvbnN0IF90eXBlID0gdG9rZW5zW2ldWzBdXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRva2Vuc1tpXVsxXVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGluZGV4ID0gYXVnbWVudChjaGlsZHJlbiwgaW5kZXgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdHIgPSBjaGlsZHJlblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0ci5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IFtyYW5nZUluZGV4LCBpbmRleEluUmFuZ2UsIGlzTGFzdF0gPSBnZXRSYW5nZUluZGV4KGluZGV4LCByYW5nZXMpXG4gICAgICAgICAgaWYgKHJhbmdlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goW2BjaGFyOiR7cmFuZ2VJbmRleH06JHtpbmRleEluUmFuZ2V9JHtpc0xhc3QgPyAnOmxhc3QnIDogJyd9YCwgc3RyW2pdXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdICs9IHN0cltqXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RyW2pdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgcmVzdWx0WzBdID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICB0b2tlbnNbaV0uc3BsaWNlKDEsIDEsIHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHIgPSB0b2tlbnNbaV1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0ci5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBbcmFuZ2VJbmRleCwgaW5kZXhJblJhbmdlLCBpc0xhc3RdID0gZ2V0UmFuZ2VJbmRleChpbmRleCwgcmFuZ2VzKVxuICAgICAgICBpZiAocmFuZ2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goW2BjaGFyOiR7cmFuZ2VJbmRleH06JHtpbmRleEluUmFuZ2V9JHtpc0xhc3QgPyAnOmxhc3QnIDogJyd9YCwgc3RyW2pdXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdICs9IHN0cltqXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChzdHJbal0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICAgIHRva2Vucy5zcGxpY2UoaSwgMSwgLi4ucmVzdWx0KVxuICAgICAgaSArPSByZXN1bHQubGVuZ3RoIC0gMVxuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cblxuYXVnbWVudCh0b2tlbnMpXG5cbmV4cG9ydCBmdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgtMSlcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGdyb3VwOiAtMSwgY2hhcjogLTEgfSlcbiAgY29uc3QgY3Vyc29yQ29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuICBjb25zdCBbd2lkZSwgc2V0V2lkZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ZpbmlzaGVkLCBzZXRGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc3VwcG9ydHNNZCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA2NDBweCknKVxuICBjb25zdCBbaXNNZCwgc2V0SXNNZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbnRhaW5lclJlY3QsIHNldENvbnRhaW5lclJlY3RdID0gdXNlU3RhdGUoKVxuICBjb25zdCBtZCA9IHN1cHBvcnRzTWQgJiYgaXNNZFxuICBjb25zdCBtb3VudGVkID0gdXNlUmVmKHRydWUpXG4gIGNvbnN0IGluVmlld1JlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKClcblxuICBjb25zdCBsYXlvdXQgPSAhZmluaXNoZWRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiAobW91bnRlZC5jdXJyZW50ID0gZmFsc2UpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0cnVlXG5cbiAgICBjb25zdCB7IHByb21pc2U6IGluVmlld1Byb21pc2UsIGRpc2Nvbm5lY3QgfSA9IGNyZWF0ZUluVmlld1Byb21pc2UoaW5WaWV3UmVmLmN1cnJlbnQsIHtcbiAgICAgIHRocmVzaG9sZDogMC41LFxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgIHdhaXQoMTAwMCksXG4gICAgICBpblZpZXdQcm9taXNlLFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0SWRsZUNhbGxiYWNrJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhyZXNvbHZlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIDApXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGltYWdlUmVmLmN1cnJlbnQuY29tcGxldGUpIHtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZVJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICBdXG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBzZXRTdGF0ZSh7IGdyb3VwOiAwLCBjaGFyOiAwIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjdXJyZW50ID0gZmFsc2VcbiAgICAgIGRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RlcCA9PT0gMTQpIHtcbiAgICAgIGxldCBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RmluaXNoZWQodHJ1ZSlcbiAgICAgIH0sIDEwMDApXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3N0ZXBdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFmaW5pc2hlZCkgcmV0dXJuXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGN1cnNvckNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMC41IH0pXG4gICAgY29uc3QgaWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZClcbiAgICAgIH1cbiAgICAgIGNvdW50KytcbiAgICAgIGN1cnNvckNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMSwgc2NhbGU6IDAuOSwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yNSB9IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRXaWRlKCh3aWRlKSA9PiAhd2lkZSlcbiAgICAgICAgY3Vyc29yQ29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIG9wYWNpdHk6IGNvdW50ID09PSAyID8gMCA6IDAuNSxcbiAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjI1LCBkZWxheTogMC42IH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sIDIwMDApXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGlkKVxuICAgIH1cbiAgfSwgW2ZpbmlzaGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgY29uc3QgaWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldElzTWQod2lkZSlcbiAgICAgIH0sIDI1MClcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKVxuICAgIH1cbiAgfSwgW3dpZGUsIGZpbmlzaGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcihcbiAgICAgIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgc2V0Q29udGFpbmVyUmVjdChjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcbiAgICAgICAgfVxuICAgICAgfSwgNTAwKVxuICAgIClcbiAgICBvYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lclJlZi5jdXJyZW50KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgbGVmdD17XG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cInhsOi1tci04XCI+XG4gICAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gcmVsYXRpdmUgei0xMCByb3VuZGVkLXIteGwgc206cm91bmRlZC14bCBzaGFkb3cteGwgdGV4dC1ibGFjayBteC1hdXRvIGxnOm14LTAgeGw6bXgtYXV0b2B9XG4gICAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICBjb250YWluZXJSZWN0Py53aWR0aFxuICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICFzdXBwb3J0c01kIHx8IHdpZGUgPyBjb250YWluZXJSZWN0LndpZHRoIDogMzc1LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17VFJBTlNJVElPTn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgnYmctd2hpdGUgcm91bmRlZC1yLXhsIHNtOnJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuJywge1xuICAgICAgICAgICAgICAgICAgZmxleDogc3RlcCA+PSA4ICYmIG1kLFxuICAgICAgICAgICAgICAgICAgJ3AtOCc6IHN0ZXAgPj0gMCxcbiAgICAgICAgICAgICAgICAgICd0ZXh0LWNlbnRlcic6IChzdGVwID49IDcgJiYgIW1kKSB8fCAoc3RlcCA8IDE0ICYmIG1kKSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICAgICAgJ2Fic29sdXRlIHotMjAgdG9wLTEvMiByaWdodC0wIHhsOnJpZ2h0LWF1dG8geGw6bGVmdC0wIHRleHQtYmxhY2sgcm91bmRlZC1mdWxsIC1tdC00IC1tci00IHhsOm1yLTAgeGw6LW1sLTQgcG9pbnRlci1ldmVudHMtbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHsgaW52aXNpYmxlOiAhc3VwcG9ydHNNZCB9XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXtjdXJzb3JDb250cm9sc31cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVmYXVsdDogVFJBTlNJVElPTiwgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4yNSB9IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoLTggdy04XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICByPVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwicmdiYSgwLCAwLCAwLCAwLjUpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4uKChzdGVwID49IDEgJiYgc3RlcCA8IDExKSB8fCAoc3RlcCA+PSAxMSAmJiAhbWQgJiYgIWZpbmlzaGVkKVxuICAgICAgICAgICAgICAgICAgICAgID8geyBib3JkZXJSYWRpdXM6IDY0IH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHsgYm9yZGVyUmFkaXVzOiAwIH0pLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e1RSQU5TSVRJT059XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICdyZWxhdGl2ZSB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4LW5vbmUnLFxuICAgICAgICAgICAgICAgICAgICBzdGVwID49IDEwICYmIG1kID8gJy1tLTggbXItOCcgOiBzdGVwID49IDIgPyAnbXgtYXV0bycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPj0gMTIgJiYgbWQgPyAndy00OCcgOiAndy0zMicsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgPj0gMTMgJiYgbWQgPyAnaC1hdXRvJyA6ICdoLTMyJ1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17VFJBTlNJVElPTn1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKCdAL2ltZy9zYXJhaC1kYXlhbi5qcGcnKS5kZWZhdWx0fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2Fic29sdXRlIG1heC13LW5vbmUgb2JqZWN0LWNvdmVyIGJnLWdyYXktMTAwJywge1xuICAgICAgICAgICAgICAgICAgICAgICdyb3VuZGVkLWZ1bGwnOiBmaW5pc2hlZCAmJiAhbWQsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogc3RlcCA+PSAxMyAmJiBtZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmaXQoMTkyLCBjb250YWluZXJSZWN0LmhlaWdodCwgMzg0LCA1MTIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0ZXAgPj0gMTIgJiYgbWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZml0KDE5MiwgMTI4LCAzODQsIDUxMilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZml0KDEyOCwgMTI4LCAzODQsIDUxMilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGVwID49IDEwICYmIG1kID8gJycgOiAncHQtNid9XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dD17bGF5b3V0fSBjbGFzc05hbWU9XCJtYi00XCIgdHJhbnNpdGlvbj17VFJBTlNJVElPTn0+XG4gICAgICAgICAgICAgICAgICAgIDxXb3JkcyBib2xkZXI9e3N0ZXAgPj0gM30gbGF5b3V0PXtsYXlvdXR9IHRyYW5zaXRpb249e1RSQU5TSVRJT059PlxuICAgICAgICAgICAgICAgICAgICAgIOKAnFRhaWx3aW5kIENTUyAtINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDRhNGA0LXQudC80LLQvtGA0LosINC60L7RgtC+0YDRi9C5INGPINCy0LjQtNC10LvQsCDQvNCw0YHRiNGC0LDQsdC40YDRg9C10LzRi9C8INCyINCx0L7Qu9GM0YjQuNGFINC60L7QvNCw0L3QtNCw0YUuINCV0LPQviDQu9C10LPQutC+INC90LDRgdGC0YDQvtC40YLRjCwg0LDQtNCw0L/RgtC40YDQvtCy0LDRgtGMINC6INC70Y7QsdC+0LzRgyDQtNC40LfQsNC50L3Rgywg0LAg0YDQsNC30LzQtdGAINGB0LHQvtGA0LrQuCDQutGA0L7RiNC10YfQvdGL0Lku4oCdXG4gICAgICAgICAgICAgICAgICAgIDwvV29yZHM+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sICR7XG4gICAgICAgICAgICAgICAgICAgICAgKHN0ZXAgPj0gNyAmJiAhbWQpIHx8IChzdGVwIDwgMTQgJiYgbWQpID8gJ2l0ZW1zLWNlbnRlcicgOiAnaXRlbXMtc3RhcnQnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIC4uLihzdGVwID49IDQgPyB7IGZvbnRXZWlnaHQ6IDUwMCB9IDogeyBmb250V2VpZ2h0OiA0MDAgfSksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e1RSQU5TSVRJT059XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzdGVwID49IDUgPyB7IGNvbG9yOiAnIzA4OTFiMicgfSA6IHsgY29sb3I6ICcjMDAwJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e1RSQU5TSVRJT059XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDQodCw0YDQsCDQlNCw0Y/QvVxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oc3RlcCA+PSA2ID8geyBjb2xvcjogJyM3MTcxN2EnIH0gOiB7IGNvbG9yOiAnIzAwMCcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU3RhZmYgRW5naW5lZXIsIEFsZ29saWFcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgcmlnaHQ9e1xuICAgICAgICA8Q29kZVdpbmRvdyBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb2RlV2luZG93fSBiZy1saWdodC1ibHVlLTUwMCBwYi02IG1kOnBiLTBgfT5cbiAgICAgICAgICA8Q29kZVdpbmRvdy5Db2RlXG4gICAgICAgICAgICByZWY9e2luVmlld1JlZn1cbiAgICAgICAgICAgIHRva2Vucz17dG9rZW5zfVxuICAgICAgICAgICAgdG9rZW5Db21wb25lbnQ9e0hlcm9Ub2tlbn1cbiAgICAgICAgICAgIHRva2VuUHJvcHM9e3tcbiAgICAgICAgICAgICAgY3VycmVudEdyb3VwOiBzdGF0ZS5ncm91cCxcbiAgICAgICAgICAgICAgY3VycmVudENoYXI6IHN0YXRlLmNoYXIsXG4gICAgICAgICAgICAgIG9uQ2hhckNvbXBsZXRlKGNoYXJJbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBjaGFyOiBjaGFySW5kZXggKyAxIH0pKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhc3luYyBvbkdyb3VwQ29tcGxldGUoZ3JvdXBJbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgICAgICBzZXRTdGVwKGdyb3VwSW5kZXgpXG5cbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gNykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c01kKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgIGF3YWl0IGN1cnNvckNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMC41LCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAxIH0gfSlcbiAgICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgICAgICAgIHNldFdpZGUodHJ1ZSlcbiAgICAgICAgICAgICAgICAgIHNldElzTWQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGN1cnNvckNvbnRyb2xzLnN0YXJ0KHsgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkZWxheTogMC41IH0gfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQuY3VycmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VzW2dyb3VwSW5kZXggKyAxXSAmJiByYW5nZXNbZ3JvdXBJbmRleCArIDFdLmltbWVkaWF0ZSkge1xuICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoeyBjaGFyOiAwLCBncm91cDogZ3JvdXBJbmRleCArIDEgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQuY3VycmVudCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgY2hhcjogMCwgZ3JvdXA6IGdyb3VwSW5kZXggKyAxIH0pXG4gICAgICAgICAgICAgICAgICB9LCBHUk9VUF9ERUxBWSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29kZVdpbmRvdz5cbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmZ1bmN0aW9uIEFuaW1hdGVkVG9rZW4oeyBpc0FjdGl2ZVRva2VuLCBvbkNvbXBsZXRlLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIG9uQ29tcGxldGUoKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlVG9rZW4pIHtcbiAgICAgIGxldCBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgfSwgQ0hBUl9ERUxBWSlcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNBY3RpdmVUb2tlbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2aXNpYmxlID8gdW5kZWZpbmVkIDogJ2hpZGRlbid9PntjaGlsZHJlbn08L3NwYW4+XG4gICAgICB7aXNBY3RpdmVUb2tlbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJib3JkZXIgLW14LXB4XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMS4xMjVyZW0nIH19IC8+fVxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEhlcm9Ub2tlbih7IGN1cnJlbnRDaGFyLCBvbkNoYXJDb21wbGV0ZSwgY3VycmVudEdyb3VwLCBvbkdyb3VwQ29tcGxldGUsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gcHJvcHNcblxuICBpZiAodG9rZW5bMF0uc3RhcnRzV2l0aCgnY2hhcjonKSkge1xuICAgIGNvbnN0IFssIGdyb3VwSW5kZXgsIGluZGV4SW5Hcm91cF0gPSB0b2tlblswXS5zcGxpdCgnOicpLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCwgMTApKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbmltYXRlZFRva2VuXG4gICAgICAgIGlzQWN0aXZlVG9rZW49e2N1cnJlbnRHcm91cCA9PT0gZ3JvdXBJbmRleCAmJiBjdXJyZW50Q2hhciA9PT0gaW5kZXhJbkdyb3VwfVxuICAgICAgICBvbkNvbXBsZXRlPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHRva2VuWzBdLmVuZHNXaXRoKCc6bGFzdCcpKSB7XG4gICAgICAgICAgICBvbkdyb3VwQ29tcGxldGUoZ3JvdXBJbmRleClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFyQ29tcGxldGUoaW5kZXhJbkdyb3VwKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gPFRva2VuIHsuLi5wcm9wc30gLz5cbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgbGVmdCwgcmlnaHQsIHBpbiA9ICdsZWZ0JyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BncmlkICR7c3R5bGVzLmxheW91dH1gfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY29sLXN0YXJ0LTEgY29sLWVuZC0yIHNtOmNvbC1zdGFydC0yIHNtOmNvbC1lbmQtMyBsZzpjb2wtc3RhcnQtMSBsZzpjb2wtc3Bhbi1mdWxsIHJvdy1zdGFydC0xIHJvdy1zcGFuLWZ1bGwgeGw6Y29sLXN0YXJ0LTEgeGw6Y29sLWVuZC01IHhsOnJvdy1zdGFydC0yIHhsOnJvdy1lbmQtNSBsZzpweS0xMCB4bDpweS0xNiBmbGV4ICR7XG4gICAgICAgICAgcGluID09PSAnbGVmdCcgPyAnLW1sLTggcHItNCBzbTptbC0wIHNtOnByLTAnIDogJy1tci04IHBsLTQgc206bXItMCBzbTpwbC0wJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB3LWZ1bGwgZmxleC1ub25lIHJvdW5kZWQtM3hsXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC1ub25lIC1tbC1mdWxsIHJvdW5kZWQtM3hsIHRyYW5zZm9ybSBzaGFkb3ctbGcgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1jeWFuLTQwMCB0by1saWdodC1ibHVlLTUwMCAtcm90YXRlLTEgc206LXJvdGF0ZS0yXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBjb2wtc3RhcnQtMSBjb2wtZW5kLTIgc206Y29sLXN0YXJ0LTIgc206Y29sLWVuZC0zIGxnOmNvbC1zdGFydC0xIGxnOmNvbC1zcGFuLWZ1bGwgeGw6Y29sLXN0YXJ0LTIgeGw6Y29sLWVuZC0zIHJvdy1zdGFydC0yIHJvdy1lbmQtMyB4bDpyb3ctc3RhcnQtMyB4bDpyb3ctZW5kLTQgc2VsZi1jZW50ZXIgJHtcbiAgICAgICAgICBwaW4gPT09ICdsZWZ0JyA/ICdwci04JyA6ICdwbC04J1xuICAgICAgICB9IHNtOnB4LTYgbWQ6cHgtOCBwYi02IG1kOnBiLTggbGc6cHgtMCBsZzpwYi0wIC1tdC02IHNtOi1tdC0xMCBtZDotbXQtMTYgbGc6LW10LTMyIHhsOm10LTBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZENvbnRhaW5lcn0gbWF4LXcteGwgeGw6bWF4LXctbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LW5vbmVcIj57bGVmdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWQ6cHgtOCBsZzpweC0wIGNvbC1zdGFydC0xIGNvbC1zcGFuLWZ1bGwgbGc6Y29sLXN0YXJ0LTEgeGw6Y29sLXN0YXJ0LTMgeGw6Y29sLWVuZC00IHJvdy1zdGFydC0xIHJvdy1lbmQtMiB4bDpyb3ctc3RhcnQtMiB4bDpyb3ctZW5kLTUgc2VsZi1jZW50ZXIgcHQtOCBsZzpwdC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBsZzptYXgtdy0yeGwgeGw6bWF4LXctbm9uZVwiPntyaWdodH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9