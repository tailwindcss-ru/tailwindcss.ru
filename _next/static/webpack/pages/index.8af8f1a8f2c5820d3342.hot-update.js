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
  "tokens": [["tag", [["tag", [["punctuation", "<"], "figure"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "md:flex bg-gray-100 rounded-xl p-8 md:p-0", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "<"], "img"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto", ["punctuation", "\""]]], " ", ["attr-name", ["src"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "/sarah-dayan.jpg", ["punctuation", "\""]]], " ", ["attr-name", ["alt"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], ["punctuation", "\""]]], " ", ["attr-name", ["width"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "384", ["punctuation", "\""]]], " ", ["attr-name", ["height"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "512", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "pt-6 md:p-8 text-center md:text-left space-y-4", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "<"], "blockquote"]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "p"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-lg font-semibold", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        “Tailwind CSS - единственный фреймворк, который я видела масштабируемым в больших командах. Его легко настроить, адаптировать к любому дизайну, а размер сборки крошечный.”\n      ", ["tag", [["tag", [["punctuation", "</"], "p"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "</"], "blockquote"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "<"], "figcaption"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "font-medium", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-cyan-600", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        Сара Даян\n      ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n      ", ["tag", [["tag", [["punctuation", "<"], "div"]], " ", ["attr-name", ["class"]], ["attr-value", [["punctuation", "="], ["punctuation", "\""], "text-gray-500", ["punctuation", "\""]]], ["punctuation", ">"]]], "\n        Штатный инженер, Алголия\n      ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n    ", ["tag", [["tag", [["punctuation", "</"], "figcaption"]], ["punctuation", ">"]]], "\n  ", ["tag", [["tag", [["punctuation", "</"], "div"]], ["punctuation", ">"]]], "\n", ["tag", [["tag", [["punctuation", "</"], "figure"]], ["punctuation", ">"]]], "\n"],
  "code": "<figure class=\"md:flex bg-gray-100 rounded-xl p-8 md:p-0\">\n  <img class=\"w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto\" src=\"/sarah-dayan.jpg\" alt=\"\" width=\"384\" height=\"512\">\n  <div class=\"pt-6 md:p-8 text-center md:text-left space-y-4\">\n    <blockquote>\n      <p class=\"text-lg font-semibold\">\n        “Tailwind CSS - единственный фреймворк, который я видела масштабируемым в больших командах. Его легко настроить, адаптировать к любому дизайну, а размер сборки крошечный.”\n      </p>\n    </blockquote>\n    <figcaption class=\"font-medium\">\n      <div class=\"text-cyan-600\">\n        Сара Даян\n      </div>\n      <div class=\"text-gray-500\">\n        Штатный инженер, Алголия\n      </div>\n    </figcaption>\n  </div>\n</figure>\n"
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
    }, "\u0428\u0442\u0430\u0442\u043D\u044B\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440, \u0410\u043B\u0433\u043E\u043B\u0438\u044F"))))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9IZXJvLmpzIl0sIm5hbWVzIjpbIkNIQVJfREVMQVkiLCJHUk9VUF9ERUxBWSIsIlRSQU5TSVRJT04iLCJkdXJhdGlvbiIsInRva2VucyIsImNvZGUiLCJnZXRSYW5nZSIsInRleHQiLCJvcHRpb25zIiwic3RhcnQiLCJpbmRleE9mIiwiZW5kIiwibGVuZ3RoIiwicmFuZ2VzIiwiaW1tZWRpYXRlIiwiZ2V0UmFuZ2VJbmRleCIsImluZGV4IiwiaSIsInJhbmdlQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaiIsIldvcmRzIiwiY2hpbGRyZW4iLCJib2xkZXIiLCJsYXlvdXQiLCJ0cmFuc2l0aW9uIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiLCJhdWdtZW50IiwiX3R5cGUiLCJzdHIiLCJyZXN1bHQiLCJyYW5nZUluZGV4IiwiaW5kZXhJblJhbmdlIiwiaXNMYXN0IiwicHVzaCIsInNwbGljZSIsIkhlcm8iLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwiZ3JvdXAiLCJjaGFyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnNvckNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwid2lkZSIsInNldFdpZGUiLCJmaW5pc2hlZCIsInNldEZpbmlzaGVkIiwic3VwcG9ydHNNZCIsInVzZU1lZGlhIiwiaXNNZCIsInNldElzTWQiLCJjb250YWluZXJSZWN0Iiwic2V0Q29udGFpbmVyUmVjdCIsIm1kIiwibW91bnRlZCIsImluVmlld1JlZiIsImltYWdlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImNyZWF0ZUluVmlld1Byb21pc2UiLCJ0aHJlc2hvbGQiLCJpblZpZXdQcm9taXNlIiwicHJvbWlzZSIsImRpc2Nvbm5lY3QiLCJwcm9taXNlcyIsIndhaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIndpbmRvdyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY29tcGxldGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsIiwidGhlbiIsImlkIiwiY2xlYXJUaW1lb3V0IiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzY2FsZSIsImRlbGF5Iiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImRlYm91bmNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2JzZXJ2ZSIsInN0eWxlcyIsImNhcmQiLCJ3aWR0aCIsImNsc3giLCJmbGV4IiwiaW52aXNpYmxlIiwiZGVmYXVsdCIsImJvcmRlclJhZGl1cyIsInVuZGVmaW5lZCIsInJlcXVpcmUiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiZml0IiwiY29sb3IiLCJjb2RlV2luZG93IiwiSGVyb1Rva2VuIiwiY3VycmVudEdyb3VwIiwiY3VycmVudENoYXIiLCJvbkNoYXJDb21wbGV0ZSIsImNoYXJJbmRleCIsIm9uR3JvdXBDb21wbGV0ZSIsImdyb3VwSW5kZXgiLCJBbmltYXRlZFRva2VuIiwiaXNBY3RpdmVUb2tlbiIsIm9uQ29tcGxldGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInByb3BzIiwidG9rZW4iLCJzdGFydHNXaXRoIiwieCIsInBhcnNlSW50IiwiaW5kZXhJbkdyb3VwIiwiZW5kc1dpdGgiLCJMYXlvdXQiLCJyaWdodCIsInBpbiIsImNhcmRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUc7QUFBRUMsVUFBUSxFQUFFO0FBQVosQ0FBbkI7bUJBZkE7QUFBQyxZQUFTLENBQUMsQ0FBQyxLQUFELEVBQU8s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QUFqQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsdU1BQ1A2RyxHQUFHLEtBQUssTUFBUixHQUFpQiw0QkFBakIsR0FBZ0QsNEJBRHpDLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUssYUFBUyxFQUFDLG9JQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0U7QUFDRSxhQUFTLGlNQUNQQSxHQUFHLEtBQUssTUFBUixHQUFpQixNQUFqQixHQUEwQixNQURuQiw4RkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLFlBQUtyQyx3REFBTSxDQUFDc0MsYUFBWiw2REFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQzNCLElBQW5DLENBSEYsQ0FMRixDQVRGLEVBb0JFO0FBQUssYUFBUyxFQUFDLDBLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFEeUIsS0FBckQsQ0FERixDQXBCRixDQURGO0FBMEJEOztNQTNCUUQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWY4ZjFhOGYyYzU4MjBkMzM0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29kZVdpbmRvdyB9IGZyb20gJ0AvY29tcG9uZW50cy9Db2RlV2luZG93J1xuaW1wb3J0IHRva2VuaXplIGZyb20gJy4uLy4uL21hY3Jvcy90b2tlbml6ZS5tYWNybydcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvZGUnXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0LCBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBmaXQgfSBmcm9tICdAL3V0aWxzL2ZpdCdcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVyby5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlTWVkaWEgfSBmcm9tICdAL2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gJ0AvdXRpbHMvd2FpdCdcbmltcG9ydCB7IGNyZWF0ZUluVmlld1Byb21pc2UgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZUluVmlld1Byb21pc2UnXG5cbmNvbnN0IENIQVJfREVMQVkgPSA3NVxuY29uc3QgR1JPVVBfREVMQVkgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OID0geyBkdXJhdGlvbjogMC41IH1cblxuY29uc3QgeyB0b2tlbnMsIGNvZGUgfSA9IHRva2VuaXplLmh0bWwoXG4gIGA8ZmlndXJlIGNsYXNzPVwibWQ6ZmxleCBiZy1ncmF5LTEwMCByb3VuZGVkLXhsIHAtOCBtZDpwLTBcIj5cbiAgPGltZyBjbGFzcz1cInctMzIgaC0zMiBtZDp3LTQ4IG1kOmgtYXV0byBtZDpyb3VuZGVkLW5vbmUgcm91bmRlZC1mdWxsIG14LWF1dG9cIiBzcmM9XCIvc2FyYWgtZGF5YW4uanBnXCIgYWx0PVwiXCIgd2lkdGg9XCIzODRcIiBoZWlnaHQ9XCI1MTJcIj5cbiAgPGRpdiBjbGFzcz1cInB0LTYgbWQ6cC04IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBzcGFjZS15LTRcIj5cbiAgICA8YmxvY2txdW90ZT5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIOKAnFRhaWx3aW5kIENTUyAtINC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDRhNGA0LXQudC80LLQvtGA0LosINC60L7RgtC+0YDRi9C5INGPINCy0LjQtNC10LvQsCDQvNCw0YHRiNGC0LDQsdC40YDRg9C10LzRi9C8INCyINCx0L7Qu9GM0YjQuNGFINC60L7QvNCw0L3QtNCw0YUuINCV0LPQviDQu9C10LPQutC+INC90LDRgdGC0YDQvtC40YLRjCwg0LDQtNCw0L/RgtC40YDQvtCy0LDRgtGMINC6INC70Y7QsdC+0LzRgyDQtNC40LfQsNC50L3Rgywg0LAg0YDQsNC30LzQtdGAINGB0LHQvtGA0LrQuCDQutGA0L7RiNC10YfQvdGL0Lku4oCdXG4gICAgICA8L3A+XG4gICAgPC9ibG9ja3F1b3RlPlxuICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiZm9udC1tZWRpdW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWN5YW4tNjAwXCI+XG4gICAgICAgINCh0LDRgNCwINCU0LDRj9C9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgINCo0YLQsNGC0L3Ri9C5INC40L3QttC10L3QtdGALCDQkNC70LPQvtC70LjRj1xuICAgICAgPC9kaXY+XG4gICAgPC9maWdjYXB0aW9uPlxuICA8L2Rpdj5cbjwvZmlndXJlPlxuYCxcbiAgdHJ1ZVxuKVxuXG5mdW5jdGlvbiBnZXRSYW5nZSh0ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIHsgc3RhcnQ6IGNvZGUuaW5kZXhPZih0ZXh0KSwgZW5kOiBjb2RlLmluZGV4T2YodGV4dCkgKyB0ZXh0Lmxlbmd0aCwgLi4ub3B0aW9ucyB9XG59XG5cbmNvbnN0IHJhbmdlcyA9IFtcbiAgZ2V0UmFuZ2UoJyBwLTgnKSxcbiAgZ2V0UmFuZ2UoJyByb3VuZGVkLWZ1bGwnKSxcbiAgZ2V0UmFuZ2UoJyBteC1hdXRvJyksXG4gIGdldFJhbmdlKCcgZm9udC1zZW1pYm9sZCcpLFxuICBnZXRSYW5nZSgnIGNsYXNzPVwiZm9udC1tZWRpdW1cIicpLFxuICBnZXRSYW5nZSgnIGNsYXNzPVwidGV4dC1jeWFuLTYwMFwiJyksXG4gIGdldFJhbmdlKCcgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwXCInKSxcbiAgZ2V0UmFuZ2UoJyB0ZXh0LWNlbnRlcicpLFxuICBnZXRSYW5nZSgnbWQ6ZmxleCAnKSxcbiAgZ2V0UmFuZ2UoJyBtZDpwLTAnKSxcbiAgZ2V0UmFuZ2UoJyBtZDpwLTgnLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KSxcbiAgZ2V0UmFuZ2UoJyBtZDpyb3VuZGVkLW5vbmUnKSxcbiAgZ2V0UmFuZ2UoJyBtZDp3LTQ4JyksXG4gIGdldFJhbmdlKCcgbWQ6aC1hdXRvJyksXG4gIGdldFJhbmdlKCcgbWQ6dGV4dC1sZWZ0JyksXG4gIC8vIGdldFJhbmdlKCcgbWQ6LW0tOCBtZDptci04JyksXG4gIC8vIGdldFJhbmdlKCcgbWQ6cm91bmRlZC1ub25lJyksXG4gIC8vIGdldFJhbmdlKCcgbWQ6dy00OCcpLFxuICAvLyBnZXRSYW5nZSgnIG1kOmgtYXV0bycpLFxuXVxuXG5mdW5jdGlvbiBnZXRSYW5nZUluZGV4KGluZGV4LCByYW5nZXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5nZUFyciA9IEFycmF5LmlzQXJyYXkocmFuZ2VzW2ldKSA/IHJhbmdlc1tpXSA6IFtyYW5nZXNbaV1dXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByYW5nZUFyci5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGluZGV4ID49IHJhbmdlQXJyW2pdLnN0YXJ0ICYmIGluZGV4IDwgcmFuZ2VBcnJbal0uZW5kKSB7XG4gICAgICAgIHJldHVybiBbaSwgaW5kZXggLSByYW5nZUFycltqXS5zdGFydCwgaW5kZXggPT09IHJhbmdlQXJyW2pdLmVuZCAtIDFdXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbLTFdXG59XG5cbmZ1bmN0aW9uIFdvcmRzKHsgY2hpbGRyZW4sIGJvbGRlciA9IGZhbHNlLCBsYXlvdXQsIHRyYW5zaXRpb24gfSkge1xuICByZXR1cm4gY2hpbGRyZW4uc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGkpID0+IChcbiAgICA8bW90aW9uLnNwYW5cbiAgICAgIGtleT17aX1cbiAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggd2hpdGVzcGFjZS1wcmUgdGV4dC1sZ1wiXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxuICAgID5cbiAgICAgIHtib2xkZXIgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTBcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyBmb250V2VpZ2h0OiA0MDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgZm9udFdlaWdodDogNjAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3b3JkfXsnICd9XG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBvcGFjaXR5OiAwLCBmb250V2VpZ2h0OiA2MDAgfX0+e3dvcmR9IDwvc3Bhbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICB3b3JkICsgJyAnXG4gICAgICApfVxuICAgIDwvbW90aW9uLnNwYW4+XG4gICkpXG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQodG9rZW5zLCBpbmRleCA9IDApIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnNbaV0pKSB7XG4gICAgICBjb25zdCBfdHlwZSA9IHRva2Vuc1tpXVswXVxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0b2tlbnNbaV1bMV1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBpbmRleCA9IGF1Z21lbnQoY2hpbGRyZW4sIGluZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RyID0gY2hpbGRyZW5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBbcmFuZ2VJbmRleCwgaW5kZXhJblJhbmdlLCBpc0xhc3RdID0gZ2V0UmFuZ2VJbmRleChpbmRleCwgcmFuZ2VzKVxuICAgICAgICAgIGlmIChyYW5nZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtgY2hhcjoke3JhbmdlSW5kZXh9OiR7aW5kZXhJblJhbmdlfSR7aXNMYXN0ID8gJzpsYXN0JyA6ICcnfWAsIHN0cltqXV0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSArPSBzdHJbal1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN0cltqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHJlc3VsdFswXSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgdG9rZW5zW2ldLnNwbGljZSgxLCAxLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RyID0gdG9rZW5zW2ldXG4gICAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgW3JhbmdlSW5kZXgsIGluZGV4SW5SYW5nZSwgaXNMYXN0XSA9IGdldFJhbmdlSW5kZXgoaW5kZXgsIHJhbmdlcylcbiAgICAgICAgaWYgKHJhbmdlSW5kZXggPiAtMSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFtgY2hhcjoke3JhbmdlSW5kZXh9OiR7aW5kZXhJblJhbmdlfSR7aXNMYXN0ID8gJzpsYXN0JyA6ICcnfWAsIHN0cltqXV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSArPSBzdHJbal1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RyW2pdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgICB0b2tlbnMuc3BsaWNlKGksIDEsIC4uLnJlc3VsdClcbiAgICAgIGkgKz0gcmVzdWx0Lmxlbmd0aCAtIDFcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG5cbmF1Z21lbnQodG9rZW5zKVxuXG5leHBvcnQgZnVuY3Rpb24gSGVybygpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKClcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoLTEpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBncm91cDogLTEsIGNoYXI6IC0xIH0pXG4gIGNvbnN0IGN1cnNvckNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcbiAgY29uc3QgW3dpZGUsIHNldFdpZGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmaW5pc2hlZCwgc2V0RmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHN1cHBvcnRzTWQgPSB1c2VNZWRpYSgnKG1pbi13aWR0aDogNjQwcHgpJylcbiAgY29uc3QgW2lzTWQsIHNldElzTWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb250YWluZXJSZWN0LCBzZXRDb250YWluZXJSZWN0XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgbWQgPSBzdXBwb3J0c01kICYmIGlzTWRcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZih0cnVlKVxuICBjb25zdCBpblZpZXdSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZigpXG5cbiAgY29uc3QgbGF5b3V0ID0gIWZpbmlzaGVkXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4gKG1vdW50ZWQuY3VycmVudCA9IGZhbHNlKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gdHJ1ZVxuXG4gICAgY29uc3QgeyBwcm9taXNlOiBpblZpZXdQcm9taXNlLCBkaXNjb25uZWN0IH0gPSBjcmVhdGVJblZpZXdQcm9taXNlKGluVmlld1JlZi5jdXJyZW50LCB7XG4gICAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgICB9KVxuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICB3YWl0KDEwMDApLFxuICAgICAgaW5WaWV3UHJvbWlzZSxcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG4gICAgICAgICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2socmVzb2x2ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChyZXNvbHZlLCAwKVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZVJlZi5jdXJyZW50LmNvbXBsZXRlKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSlcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgXVxuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgc2V0U3RhdGUoeyBncm91cDogMCwgY2hhcjogMCB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY3VycmVudCA9IGZhbHNlXG4gICAgICBkaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0ZXAgPT09IDE0KSB7XG4gICAgICBsZXQgaWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEZpbmlzaGVkKHRydWUpXG4gICAgICB9LCAxMDAwKVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGVwXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZmluaXNoZWQpIHJldHVyblxuICAgIGxldCBjb3VudCA9IDBcbiAgICBjdXJzb3JDb250cm9scy5zdGFydCh7IG9wYWNpdHk6IDAuNSB9KVxuICAgIGNvbnN0IGlkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMikge1xuICAgICAgICByZXR1cm4gd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpXG4gICAgICB9XG4gICAgICBjb3VudCsrXG4gICAgICBjdXJzb3JDb250cm9scy5zdGFydCh7IG9wYWNpdHk6IDEsIHNjYWxlOiAwLjksIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMjUgfSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0V2lkZSgod2lkZSkgPT4gIXdpZGUpXG4gICAgICAgIGN1cnNvckNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgICAgICBvcGFjaXR5OiBjb3VudCA9PT0gMiA/IDAgOiAwLjUsXG4gICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yNSwgZGVsYXk6IDAuNiB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LCAyMDAwKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZClcbiAgICB9XG4gIH0sIFtmaW5pc2hlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc01kKHdpZGUpXG4gICAgICB9LCAyNTApXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dChpZClcbiAgICB9XG4gIH0sIFt3aWRlLCBmaW5pc2hlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIoXG4gICAgICBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIHNldENvbnRhaW5lclJlY3QoY29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXG4gICAgICAgIH1cbiAgICAgIH0sIDUwMClcbiAgICApXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXJSZWYuY3VycmVudClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGxlZnQ9e1xuICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJ4bDotbXItOFwiPlxuICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9IHJlbGF0aXZlIHotMTAgcm91bmRlZC1yLXhsIHNtOnJvdW5kZWQteGwgc2hhZG93LXhsIHRleHQtYmxhY2sgbXgtYXV0byBsZzpteC0wIHhsOm14LWF1dG9gfVxuICAgICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgY29udGFpbmVyUmVjdD8ud2lkdGhcbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAhc3VwcG9ydHNNZCB8fCB3aWRlID8gY29udGFpbmVyUmVjdC53aWR0aCA6IDM3NSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e1RSQU5TSVRJT059XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17VFJBTlNJVElPTn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ2JnLXdoaXRlIHJvdW5kZWQtci14bCBzbTpyb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbicsIHtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IHN0ZXAgPj0gOCAmJiBtZCxcbiAgICAgICAgICAgICAgICAgICdwLTgnOiBzdGVwID49IDAsXG4gICAgICAgICAgICAgICAgICAndGV4dC1jZW50ZXInOiAoc3RlcCA+PSA3ICYmICFtZCkgfHwgKHN0ZXAgPCAxNCAmJiBtZCksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICdhYnNvbHV0ZSB6LTIwIHRvcC0xLzIgcmlnaHQtMCB4bDpyaWdodC1hdXRvIHhsOmxlZnQtMCB0ZXh0LWJsYWNrIHJvdW5kZWQtZnVsbCAtbXQtNCAtbXItNCB4bDptci0wIHhsOi1tbC00IHBvaW50ZXItZXZlbnRzLW5vbmUnLFxuICAgICAgICAgICAgICAgICAgICB7IGludmlzaWJsZTogIXN1cHBvcnRzTWQgfVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17Y3Vyc29yQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlZmF1bHQ6IFRSQU5TSVRJT04sIG9wYWNpdHk6IHsgZHVyYXRpb246IDAuMjUgfSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaC04IHctOFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInJnYmEoMCwgMCwgMCwgMC41KVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLigoc3RlcCA+PSAxICYmIHN0ZXAgPCAxMSkgfHwgKHN0ZXAgPj0gMTEgJiYgIW1kICYmICFmaW5pc2hlZClcbiAgICAgICAgICAgICAgICAgICAgICA/IHsgYm9yZGVyUmFkaXVzOiA2NCB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB7IGJvcmRlclJhZGl1czogMCB9KSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAncmVsYXRpdmUgei0xMCBvdmVyZmxvdy1oaWRkZW4gZmxleC1ub25lJyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA+PSAxMCAmJiBtZCA/ICctbS04IG1yLTgnIDogc3RlcCA+PSAyID8gJ214LWF1dG8nIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBzdGVwID49IDEyICYmIG1kID8gJ3ctNDgnIDogJ3ctMzInLFxuICAgICAgICAgICAgICAgICAgICBzdGVwID49IDEzICYmIG1kID8gJ2gtYXV0bycgOiAnaC0zMidcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e1RSQU5TSVRJT059XG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZSgnQC9pbWcvc2FyYWgtZGF5YW4uanBnJykuZGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCdhYnNvbHV0ZSBtYXgtdy1ub25lIG9iamVjdC1jb3ZlciBiZy1ncmF5LTEwMCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAncm91bmRlZC1mdWxsJzogZmluaXNoZWQgJiYgIW1kLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgdG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0ZXAgPj0gMTMgJiYgbWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZml0KDE5MiwgY29udGFpbmVyUmVjdC5oZWlnaHQsIDM4NCwgNTEyKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGVwID49IDEyICYmIG1kXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZpdCgxOTIsIDEyOCwgMzg0LCA1MTIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZpdCgxMjgsIDEyOCwgMzg0LCA1MTIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RlcCA+PSAxMCAmJiBtZCA/ICcnIDogJ3B0LTYnfVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17VFJBTlNJVElPTn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQ9e2xheW91dH0gY2xhc3NOYW1lPVwibWItNFwiIHRyYW5zaXRpb249e1RSQU5TSVRJT059PlxuICAgICAgICAgICAgICAgICAgICA8V29yZHMgYm9sZGVyPXtzdGVwID49IDN9IGxheW91dD17bGF5b3V0fSB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfT5cbiAgICAgICAgICAgICAgICAgICAgICDigJxUYWlsd2luZCBDU1MgLSDQtdC00LjQvdGB0YLQstC10L3QvdGL0Lkg0YTRgNC10LnQvNCy0L7RgNC6LCDQutC+0YLQvtGA0YvQuSDRjyDQstC40LTQtdC70LAg0LzQsNGB0YjRgtCw0LHQuNGA0YPQtdC80YvQvCDQsiDQsdC+0LvRjNGI0LjRhSDQutC+0LzQsNC90LTQsNGFLiDQldCz0L4g0LvQtdCz0LrQviDQvdCw0YHRgtGA0L7QuNGC0YwsINCw0LTQsNC/0YLQuNGA0L7QstCw0YLRjCDQuiDQu9GO0LHQvtC80YMg0LTQuNC30LDQudC90YMsINCwINGA0LDQt9C80LXRgCDRgdCx0L7RgNC60Lgg0LrRgNC+0YjQtdGH0L3Ri9C5LuKAnVxuICAgICAgICAgICAgICAgICAgICA8L1dvcmRzPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAke1xuICAgICAgICAgICAgICAgICAgICAgIChzdGVwID49IDcgJiYgIW1kKSB8fCAoc3RlcCA8IDE0ICYmIG1kKSA/ICdpdGVtcy1jZW50ZXInIDogJ2l0ZW1zLXN0YXJ0J1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAuLi4oc3RlcCA+PSA0ID8geyBmb250V2VpZ2h0OiA1MDAgfSA6IHsgZm9udFdlaWdodDogNDAwIH0pLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oc3RlcCA+PSA1ID8geyBjb2xvcjogJyMwODkxYjInIH0gOiB7IGNvbG9yOiAnIzAwMCcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtUUkFOU0lUSU9OfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg0KHQsNGA0LAg0JTQsNGP0L1cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHN0ZXAgPj0gNiA/IHsgY29sb3I6ICcjNzE3MTdhJyB9IDogeyBjb2xvcjogJyMwMDAnIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17VFJBTlNJVElPTn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgINCo0YLQsNGC0L3Ri9C5INC40L3QttC10L3QtdGALCDQkNC70LPQvtC70LjRj1xuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVNoYXJlZExheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICByaWdodD17XG4gICAgICAgIDxDb2RlV2luZG93IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvZGVXaW5kb3d9IGJnLWxpZ2h0LWJsdWUtNTAwIHBiLTYgbWQ6cGItMGB9PlxuICAgICAgICAgIDxDb2RlV2luZG93LkNvZGVcbiAgICAgICAgICAgIHJlZj17aW5WaWV3UmVmfVxuICAgICAgICAgICAgdG9rZW5zPXt0b2tlbnN9XG4gICAgICAgICAgICB0b2tlbkNvbXBvbmVudD17SGVyb1Rva2VufVxuICAgICAgICAgICAgdG9rZW5Qcm9wcz17e1xuICAgICAgICAgICAgICBjdXJyZW50R3JvdXA6IHN0YXRlLmdyb3VwLFxuICAgICAgICAgICAgICBjdXJyZW50Q2hhcjogc3RhdGUuY2hhcixcbiAgICAgICAgICAgICAgb25DaGFyQ29tcGxldGUoY2hhckluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGNoYXI6IGNoYXJJbmRleCArIDEgfSkpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFzeW5jIG9uR3JvdXBDb21wbGV0ZShncm91cEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgICAgICAgIHNldFN0ZXAoZ3JvdXBJbmRleClcblxuICAgICAgICAgICAgICAgIGlmIChncm91cEluZGV4ID09PSA3KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzTWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgYXdhaXQgY3Vyc29yQ29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAwLjUsIHRyYW5zaXRpb246IHsgZGVsYXk6IDEgfSB9KVxuICAgICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkLmN1cnJlbnQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgc2V0V2lkZSh0cnVlKVxuICAgICAgICAgICAgICAgICAgc2V0SXNNZCh0cnVlKVxuICAgICAgICAgICAgICAgICAgYXdhaXQgY3Vyc29yQ29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjUgfSB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGlmIChyYW5nZXNbZ3JvdXBJbmRleCArIDFdICYmIHJhbmdlc1tncm91cEluZGV4ICsgMV0uaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGNoYXI6IDAsIGdyb3VwOiBncm91cEluZGV4ICsgMSB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUoeyBjaGFyOiAwLCBncm91cDogZ3JvdXBJbmRleCArIDEgfSlcbiAgICAgICAgICAgICAgICAgIH0sIEdST1VQX0RFTEFZKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2RlV2luZG93PlxuICAgICAgfVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQW5pbWF0ZWRUb2tlbih7IGlzQWN0aXZlVG9rZW4sIG9uQ29tcGxldGUsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgb25Db21wbGV0ZSgpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmVUb2tlbikge1xuICAgICAgbGV0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgICB9LCBDSEFSX0RFTEFZKVxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc0FjdGl2ZVRva2VuXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3Zpc2libGUgPyB1bmRlZmluZWQgOiAnaGlkZGVuJ30+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgIHtpc0FjdGl2ZVRva2VuICYmIDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlciAtbXgtcHhcIiBzdHlsZT17eyBoZWlnaHQ6ICcxLjEyNXJlbScgfX0gLz59XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSGVyb1Rva2VuKHsgY3VycmVudENoYXIsIG9uQ2hhckNvbXBsZXRlLCBjdXJyZW50R3JvdXAsIG9uR3JvdXBDb21wbGV0ZSwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IHRva2VuIH0gPSBwcm9wc1xuXG4gIGlmICh0b2tlblswXS5zdGFydHNXaXRoKCdjaGFyOicpKSB7XG4gICAgY29uc3QgWywgZ3JvdXBJbmRleCwgaW5kZXhJbkdyb3VwXSA9IHRva2VuWzBdLnNwbGl0KCc6JykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFuaW1hdGVkVG9rZW5cbiAgICAgICAgaXNBY3RpdmVUb2tlbj17Y3VycmVudEdyb3VwID09PSBncm91cEluZGV4ICYmIGN1cnJlbnRDaGFyID09PSBpbmRleEluR3JvdXB9XG4gICAgICAgIG9uQ29tcGxldGU9eygpID0+IHtcbiAgICAgICAgICBpZiAodG9rZW5bMF0uZW5kc1dpdGgoJzpsYXN0JykpIHtcbiAgICAgICAgICAgIG9uR3JvdXBDb21wbGV0ZShncm91cEluZGV4KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNoYXJDb21wbGV0ZShpbmRleEluR3JvdXApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiA8VG9rZW4gey4uLnByb3BzfSAvPlxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBsZWZ0LCByaWdodCwgcGluID0gJ2xlZnQnIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGdyaWQgJHtzdHlsZXMubGF5b3V0fWB9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb2wtc3RhcnQtMSBjb2wtZW5kLTIgc206Y29sLXN0YXJ0LTIgc206Y29sLWVuZC0zIGxnOmNvbC1zdGFydC0xIGxnOmNvbC1zcGFuLWZ1bGwgcm93LXN0YXJ0LTEgcm93LXNwYW4tZnVsbCB4bDpjb2wtc3RhcnQtMSB4bDpjb2wtZW5kLTUgeGw6cm93LXN0YXJ0LTIgeGw6cm93LWVuZC01IGxnOnB5LTEwIHhsOnB5LTE2IGZsZXggJHtcbiAgICAgICAgICBwaW4gPT09ICdsZWZ0JyA/ICctbWwtOCBwci00IHNtOm1sLTAgc206cHItMCcgOiAnLW1yLTggcGwtNCBzbTptci0wIHNtOnBsLTAnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHctZnVsbCBmbGV4LW5vbmUgcm91bmRlZC0zeGxcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LW5vbmUgLW1sLWZ1bGwgcm91bmRlZC0zeGwgdHJhbnNmb3JtIHNoYWRvdy1sZyBiZy1ncmFkaWVudC10by1iciBmcm9tLWN5YW4tNDAwIHRvLWxpZ2h0LWJsdWUtNTAwIC1yb3RhdGUtMSBzbTotcm90YXRlLTJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGNvbC1zdGFydC0xIGNvbC1lbmQtMiBzbTpjb2wtc3RhcnQtMiBzbTpjb2wtZW5kLTMgbGc6Y29sLXN0YXJ0LTEgbGc6Y29sLXNwYW4tZnVsbCB4bDpjb2wtc3RhcnQtMiB4bDpjb2wtZW5kLTMgcm93LXN0YXJ0LTIgcm93LWVuZC0zIHhsOnJvdy1zdGFydC0zIHhsOnJvdy1lbmQtNCBzZWxmLWNlbnRlciAke1xuICAgICAgICAgIHBpbiA9PT0gJ2xlZnQnID8gJ3ByLTgnIDogJ3BsLTgnXG4gICAgICAgIH0gc206cHgtNiBtZDpweC04IHBiLTYgbWQ6cGItOCBsZzpweC0wIGxnOnBiLTAgLW10LTYgc206LW10LTEwIG1kOi1tdC0xNiBsZzotbXQtMzIgeGw6bXQtMGB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkQ29udGFpbmVyfSBtYXgtdy14bCB4bDptYXgtdy1ub25lIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgtbm9uZVwiPntsZWZ0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtZDpweC04IGxnOnB4LTAgY29sLXN0YXJ0LTEgY29sLXNwYW4tZnVsbCBsZzpjb2wtc3RhcnQtMSB4bDpjb2wtc3RhcnQtMyB4bDpjb2wtZW5kLTQgcm93LXN0YXJ0LTEgcm93LWVuZC0yIHhsOnJvdy1zdGFydC0yIHhsOnJvdy1lbmQtNSBzZWxmLWNlbnRlciBwdC04IGxnOnB0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGxnOm1heC13LTJ4bCB4bDptYXgtdy1ub25lXCI+e3JpZ2h0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=