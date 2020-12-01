webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Testimonials.js":
/*!****************************************!*\
  !*** ./src/components/Testimonials.js ***!
  \****************************************/
/*! exports provided: Testimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return Testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\Testimonials.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var colors = {
  lightblue: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].lightblue[0], 'text-cyan-100', 'bg-cyan-100'],
  purple: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].purple[0], 'text-fuchsia-100', 'bg-fuchsia-100'],
  orange: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].orange[0], 'text-orange-100', 'bg-orange-100'],
  teal: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].teal[0], 'text-green-100', 'bg-green-100'],
  violet: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].violet[0], 'text-purple-100', 'bg-purple-100'],
  amber: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].amber[0], 'text-orange-100', 'bg-orange-100'],
  pink: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].pink[0], 'text-rose-100', 'bg-rose-100'],
  blue: [_utils_gradients__WEBPACK_IMPORTED_MODULE_2__["gradients"].blue[0], 'text-light-blue-100', 'bg-light-blue-100']
};
var rotation = [-2, 1, -1, 2, -1, 1];
var testimonials = [{
  content: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал Tailwind CSS.',
  tweetUrl: 'https://twitter.com/ryanflorence/status/1187951799442886656',
  author: {
    name: 'Ryan Florence',
    role: 'Remix & React Training',
    avatar: __webpack_require__(/*! @/img/avatars/ryan-florence.jpg */ "./src/img/avatars/ryan-florence.jpg").default
  }
}, {
  content: 'Если бы мне пришлось порекомендовать способ начать программирование сегодня, это был бы HTML + CSS с Tailwind CSS.',
  tweetUrl: 'https://twitter.com/rauchg/status/1225611926320738304',
  author: {
    name: 'Guillermo Rauch',
    role: 'Vercel',
    avatar: __webpack_require__(/*! @/img/avatars/guillermo-rauch.jpg */ "./src/img/avatars/guillermo-rauch.jpg").default
  }
}, {
  content: "\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432, \u0430 \u0441 Tailwind \u044F \u043C\u043E\u0433\u0443 \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B, \u0438 \u044D\u0442\u043E \u0432\u0441\u0435, \u0447\u0442\u043E \u044F \u043A\u043E\u0433\u0434\u0430-\u043B\u0438\u0431\u043E \u0445\u043E\u0442\u0435\u043B \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 CSS.",
  author: {
    name: 'Sara Vieira',
    role: 'CodeSandbox',
    avatar: __webpack_require__(/*! @/img/avatars/sara-vieira.jpg */ "./src/img/avatars/sara-vieira.jpg").default
  }
}, {
  content: "На днях я использовал Tailwind для редизайна сайта feelpresence.com. Это невероятно! Я дал себе всего несколько часов, чтобы собрать все вместе, и это имело огромное значение.",
  author: {
    name: 'Ryan Singer',
    role: 'Basecamp',
    avatar: __webpack_require__(/*! @/img/avatars/ryan-singer.jpg */ "./src/img/avatars/ryan-singer.jpg").default
  }
}, {
  content: "\u042F \u043D\u0430\u0447\u0430\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C @tailwindcss. \u042F \u0441\u0440\u0430\u0437\u0443 \u0432\u043B\u044E\u0431\u0438\u043B\u0441\u044F \u0432 \u0438\u0445 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B, \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u0438 \u0442\u043E, \u043A\u0430\u043A \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043F\u0430\u043B\u0438\u0442\u0440\u044B.",
  tweetUrl: 'https://twitter.com/dacey_nolan/status/1303744545587441666',
  author: {
    name: 'Dacey Nolan',
    role: 'Software Engineer',
    avatar: __webpack_require__(/*! @/img/avatars/dacey-nolan.jpg */ "./src/img/avatars/dacey-nolan.jpg").default
  }
}, {
  content: 'Мне он понравился в тот момент, когда я его использовать.',
  tweetUrl: 'Gilbert Rabut Tsurwa',
  author: {
    name: 'Gilbert Rabut Tsurwa',
    role: 'Web Developer',
    avatar: __webpack_require__(/*! @/img/avatars/gilbert-rabut-tsurwa.jpg */ "./src/img/avatars/gilbert-rabut-tsurwa.jpg").default
  }
}, {
  content: 'Я пришел на работу, задаваясь вопросом, почему последний разработчик когда-либо внедрил Tailwind в наши проекты, через несколько дней я был преобразован в Tailwind и использовал его для всех своих личных проектов.',
  tweetUrl: 'https://twitter.com/maddiexcampbell/status/1303752658029740032',
  author: {
    name: 'Madeline Campbell',
    role: 'Full-Stack Developer',
    avatar: __webpack_require__(/*! @/img/avatars/madeline-campbell.jpg */ "./src/img/avatars/madeline-campbell.jpg").default
  }
}, {
  content: 'В @tailwindcss есть одна неприятная вещь: после того, как вы использовали его в нескольких проектах, писать нормальный CSS снова становится настоящей головной болью.',
  tweetUrl: 'https://twitter.com/iamgraem_e/status/1322861404781748228?s=21',
  author: {
    name: 'Graeme Houston',
    role: 'JavaScript Developer',
    avatar: __webpack_require__(/*! @/img/avatars/graeme-houston.jpg */ "./src/img/avatars/graeme-houston.jpg").default
  }
}, {
  content: "\u0425\u043E\u0440\u043E\u0448\u043E, \u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E *\u0432\u0435\u0441\u044C* \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E \u0432 \u0448\u0443\u043C\u0438\u0445\u0435 @tailwindcss. \u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0434\u0443\u043C\u0430\u043B, \u0447\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u0430\u043A\u0438\u043C \u0441\u043C\u0435\u0445\u043E\u0442\u0432\u043E\u0440\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u044B\u043C \u0438 \u0433\u0438\u0431\u043A\u0438\u043C.",
  tweetUrl: 'https://twitter.com/lukeredpath/status/1316543571684663298?s=21',
  author: {
    name: 'Aaron Bushnell',
    role: 'Programmer @ TrendyMinds',
    avatar: __webpack_require__(/*! @/img/avatars/aaron-bushnell.jpg */ "./src/img/avatars/aaron-bushnell.jpg").default
  }
}, {
  content: 'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
  tweetUrl: 'https://twitter.com/debs_obrien/status/1243255468241420288',
  author: {
    name: "Head of Learning @ Nuxt.js",
    role: 'Full-Stack Developer',
    avatar: __webpack_require__(/*! @/img/avatars/debbie-obrien.jpg */ "./src/img/avatars/debbie-obrien.jpg").default
  }
}, {
  content: 'Okay, @tailwindcss just clicked for me and now I feel like a #!@%&$% idiot.',
  tweetUrl: 'https://twitter.com/ken_wheeler/status/1225373231139475458',
  author: {
    name: 'Ken Wheeler',
    role: "React Engineer",
    avatar: __webpack_require__(/*! @/img/avatars/ken-wheeler.jpg */ "./src/img/avatars/ken-wheeler.jpg").default
  }
}, {
  content: "I've been using @tailwindcss the past few months and it's amazing. I already used some utility classes before, but going utility-first... this is the way.",
  tweetUrl: 'https://twitter.com/JadLimcaco/status/1327417021915561984',
  author: {
    name: 'Jad Limcaco',
    role: 'Designer',
    avatar: __webpack_require__(/*! @/img/avatars/jad-limcaco.jpg */ "./src/img/avatars/jad-limcaco.jpg").default
  }
}, {
  content: "After finally getting to use @tailwindcss on a real client project in the last two weeks I never want to write CSS by hand again. I was a skeptic, but the hype is real.",
  tweetUrl: 'https://twitter.com/lukeredpath/status/1316543571684663298?s=21',
  author: {
    name: 'Luke Redpath',
    role: 'Ruby & iOS Developer',
    avatar: __webpack_require__(/*! @/img/avatars/luke-redpath.jpg */ "./src/img/avatars/luke-redpath.jpg").default
  }
}, {
  content: "I didn't think I was going to like @tailwindcss... spent a day using it for a POC, love it! I wish this had been around when we started our company design system, seriously considering a complete rebuild",
  tweetUrl: 'https://twitter.com/JonBloomer/status/1300923818622377984',
  author: {
    name: 'Jon Bloomer',
    role: 'Front-End Developer',
    avatar: __webpack_require__(/*! @/img/avatars/jon-bloomer.jpg */ "./src/img/avatars/jon-bloomer.jpg").default
  }
}, {
  content: '@tailwindcss looked unpleasant at first, but now I’m hooked on it.',
  tweetUrl: 'https://twitter.com/droidgilliland/status/1222733372855848961',
  author: {
    name: 'Andrew Gilliland',
    role: 'Front-End Developer',
    avatar: __webpack_require__(/*! @/img/avatars/andrew-gilliland.jpg */ "./src/img/avatars/andrew-gilliland.jpg").default
  }
}];

function Testimonial(_ref) {
  _s();

  var testimonial = _ref.testimonial,
      base = _ref.base,
      index = _ref.index,
      total = _ref.total;
  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(base, [0, 100 / total * (index + 1), 100 / total * (index + 1), 100], ['0%', "".concat((index + 1) * -100, "%"), "".concat(total * 100 - (index + 1) * 100, "%"), '0%']);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      straight = _useState[0],
      setStraight = _useState[1];

  var color = colors[Object.keys(colors)[index % Object.keys(colors).length]];
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, {
    className: "px-3 md:px-4 flex-none",
    onMouseEnter: function onMouseEnter() {
      return setStraight(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setStraight(false);
    },
    style: {
      x: x
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].figure, {
    className: "shadow-lg rounded-xl flex-none w-80 md:w-xl",
    initial: false,
    animate: straight ? {
      rotate: 0
    } : {
      rotate: rotation[index % rotation.length]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx("blockquote", {
    className: "rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "45",
    height: "36",
    className: "mb-5 fill-current ".concat(color[1]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  })), typeof testimonial.content === 'string' ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, testimonial.content) : testimonial.content), __jsx("figcaption", {
    className: "flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white ".concat(color[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: testimonial.author.avatar,
    alt: "",
    className: "w-12 h-12 rounded-full ".concat(color[2]),
    loading: "lazy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "flex-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, testimonial.author.name, testimonial.author.role && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: color[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, testimonial.author.role))), testimonial.tweetUrl && __jsx("cite", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: testimonial.tweetUrl,
    className: "opacity-50 hover:opacity-75 transition-opacity duration-200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "sr-only",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, "Original tweet by ", testimonial.author.name), __jsx("svg", {
    width: "33",
    height: "32",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  })))))));
}

_s(Testimonial, "Y2K4lkSUanse/A8N+rDS98CWK/k=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"]];
});

_c = Testimonial;
function Testimonials() {
  _s2();

  var _this = this;

  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useMotionValue"])(0);

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])({
    threshold: 0,
    rootMargin: '100px'
  }),
      inView = _useInView.inView,
      inViewRef = _useInView.ref;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(150),
      duration = _useState2[0],
      setDuration = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!inView) return;
    var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["animate"])(x, 100, {
      type: 'tween',
      duration: duration,
      ease: 'linear',
      loop: Infinity
    });
    return controls.stop;
  }, [inView, x, duration]);
  return __jsx("div", {
    ref: inViewRef,
    className: "relative",
    onMouseEnter: function onMouseEnter() {
      return setDuration(250);
    },
    onMouseLeave: function onMouseLeave() {
      return setDuration(150);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none",
    style: {
      height: 607,
      maxHeight: '50vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex overflow-hidden -my-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "flex items-center w-full py-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, testimonials.map(function (testimonial, i) {
    return __jsx(Testimonial, {
      key: i,
      testimonial: testimonial,
      base: x,
      index: i,
      total: testimonials.length,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }
    });
  }))));
}

_s2(Testimonials, "rajuGvNA+b1hgLdbE97WfCgeZTw=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__["useMotionValue"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

_c2 = Testimonials;

var _c, _c2;

$RefreshReg$(_c, "Testimonial");
$RefreshReg$(_c2, "Testimonials");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0Ymx1ZSIsImdyYWRpZW50cyIsInB1cnBsZSIsIm9yYW5nZSIsInRlYWwiLCJ2aW9sZXQiLCJhbWJlciIsInBpbmsiLCJibHVlIiwicm90YXRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJjb250ZW50IiwidHdlZXRVcmwiLCJhdXRob3IiLCJuYW1lIiwicm9sZSIsImF2YXRhciIsInJlcXVpcmUiLCJkZWZhdWx0IiwiVGVzdGltb25pYWwiLCJ0ZXN0aW1vbmlhbCIsImJhc2UiLCJpbmRleCIsInRvdGFsIiwieCIsInVzZVRyYW5zZm9ybSIsInVzZVN0YXRlIiwic3RyYWlnaHQiLCJzZXRTdHJhaWdodCIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvdGF0ZSIsIlRlc3RpbW9uaWFscyIsInVzZU1vdGlvblZhbHVlIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImluVmlldyIsImluVmlld1JlZiIsInJlZiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJ1c2VFZmZlY3QiLCJjb250cm9scyIsImFuaW1hdGUiLCJ0eXBlIiwiZWFzZSIsImxvb3AiLCJJbmZpbml0eSIsInN0b3AiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRSxDQUFDQywwREFBUyxDQUFDRCxTQUFWLENBQW9CLENBQXBCLENBQUQsRUFBeUIsZUFBekIsRUFBMEMsYUFBMUMsQ0FERTtBQUViRSxRQUFNLEVBQUUsQ0FBQ0QsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQixDQUFqQixDQUFELEVBQXNCLGtCQUF0QixFQUEwQyxnQkFBMUMsQ0FGSztBQUdiQyxR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QUN5QkMscUU7OztNQUZyQkYsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjM4ZmUzYmI0YjRkOTQxZDAzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIGFuaW1hdGUsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IGdyYWRpZW50cyB9IGZyb20gJ0AvdXRpbHMvZ3JhZGllbnRzJ1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGxpZ2h0Ymx1ZTogW2dyYWRpZW50cy5saWdodGJsdWVbMF0sICd0ZXh0LWN5YW4tMTAwJywgJ2JnLWN5YW4tMTAwJ10sXG4gIHB1cnBsZTogW2dyYWRpZW50cy5wdXJwbGVbMF0sICd0ZXh0LWZ1Y2hzaWEtMTAwJywgJ2JnLWZ1Y2hzaWEtMTAwJ10sXG4gIG9yYW5nZTogW2dyYWRpZW50cy5vcmFuZ2VbMF0sICd0ZXh0LW9yYW5nZS0xMDAnLCAnYmctb3JhbmdlLTEwMCddLFxuICB0ZWFsOiBbZ3JhZGllbnRzLnRlYWxbMF0sICd0ZXh0LWdyZWVuLTEwMCcsICdiZy1ncmVlbi0xMDAnXSxcbiAgdmlvbGV0OiBbZ3JhZGllbnRzLnZpb2xldFswXSwgJ3RleHQtcHVycGxlLTEwMCcsICdiZy1wdXJwbGUtMTAwJ10sXG4gIGFtYmVyOiBbZ3JhZGllbnRzLmFtYmVyWzBdLCAndGV4dC1vcmFuZ2UtMTAwJywgJ2JnLW9yYW5nZS0xMDAnXSxcbiAgcGluazogW2dyYWRpZW50cy5waW5rWzBdLCAndGV4dC1yb3NlLTEwMCcsICdiZy1yb3NlLTEwMCddLFxuICBibHVlOiBbZ3JhZGllbnRzLmJsdWVbMF0sICd0ZXh0LWxpZ2h0LWJsdWUtMTAwJywgJ2JnLWxpZ2h0LWJsdWUtMTAwJ10sXG59XG5cbmNvbnN0IHJvdGF0aW9uID0gWy0yLCAxLCAtMSwgMiwgLTEsIDFdXG5cbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcbiAge1xuICAgIGNvbnRlbnQ6ICfQryDRh9GD0LLRgdGC0LLRg9GOINGB0LXQsdGPINC40LTQuNC+0YLQvtC8INC40Lct0LfQsCDRgtC+0LPQviwg0YfRgtC+INC00L4g0YHQuNGFINC/0L7RgCDQvdC1INC40YHQv9C+0LvRjNC30L7QstCw0LsgVGFpbHdpbmQgQ1NTLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL3J5YW5mbG9yZW5jZS9zdGF0dXMvMTE4Nzk1MTc5OTQ0Mjg4NjY1NicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnUnlhbiBGbG9yZW5jZScsXG4gICAgICByb2xlOiAnUmVtaXggJiBSZWFjdCBUcmFpbmluZycsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvcnlhbi1mbG9yZW5jZS5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJ9CV0YHQu9C4INCx0Ysg0LzQvdC1INC/0YDQuNGI0LvQvtGB0Ywg0L/QvtGA0LXQutC+0LzQtdC90LTQvtCy0LDRgtGMINGB0L/QvtGB0L7QsSDQvdCw0YfQsNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUg0YHQtdCz0L7QtNC90Y8sINGN0YLQviDQsdGL0Lsg0LHRiyBIVE1MICsgQ1NTINGBIFRhaWx3aW5kIENTUy4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9yYXVjaGcvc3RhdHVzLzEyMjU2MTE5MjYzMjA3MzgzMDQnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0d1aWxsZXJtbyBSYXVjaCcsXG4gICAgICByb2xlOiAnVmVyY2VsJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9ndWlsbGVybW8tcmF1Y2guanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogYNCjINC80LXQvdGPINC90LXRgiDQtNC40LfQsNC50L3QtdGA0YHQutC40YUg0L3QsNCy0YvQutC+0LIsINCwINGBIFRhaWx3aW5kINGPINC80L7Qs9GDINGBINC70LXQs9C60L7RgdGC0YzRjiDRgdC+0LfQtNCw0LLQsNGC0Ywg0LrRgNCw0YHQuNCy0YvQtSDQstC10LEt0YHQsNC50YLRiywg0Lgg0Y3RgtC+INCy0YHQtSwg0YfRgtC+INGPINC60L7Qs9C00LAt0LvQuNCx0L4g0YXQvtGC0LXQuyDQsiDRgNCw0LzQutCw0YUgQ1NTLmAsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnU2FyYSBWaWVpcmEnLFxuICAgICAgcm9sZTogJ0NvZGVTYW5kYm94JyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9zYXJhLXZpZWlyYS5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgXCLQndCwINC00L3Rj9GFINGPINC40YHQv9C+0LvRjNC30L7QstCw0LsgVGFpbHdpbmQg0LTQu9GPINGA0LXQtNC40LfQsNC50L3QsCDRgdCw0LnRgtCwIGZlZWxwcmVzZW5jZS5jb20uINCt0YLQviDQvdC10LLQtdGA0L7Rj9GC0L3QviEg0K8g0LTQsNC7INGB0LXQsdC1INCy0YHQtdCz0L4g0L3QtdGB0LrQvtC70YzQutC+INGH0LDRgdC+0LIsINGH0YLQvtCx0Ysg0YHQvtCx0YDQsNGC0Ywg0LLRgdC1INCy0LzQtdGB0YLQtSwg0Lgg0Y3RgtC+INC40LzQtdC70L4g0L7Qs9GA0L7QvNC90L7QtSDQt9C90LDRh9C10L3QuNC1LlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ1J5YW4gU2luZ2VyJyxcbiAgICAgIHJvbGU6ICdCYXNlY2FtcCcsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvcnlhbi1zaW5nZXIuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogYNCvINC90LDRh9Cw0Lsg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIEB0YWlsd2luZGNzcy4g0K8g0YHRgNCw0LfRgyDQstC70Y7QsdC40LvRgdGPINCyINC40YUg0LDQtNCw0L/RgtC40LLQvdGL0LUg0LzQvtC00LjRhNC40LrQsNGC0L7RgNGLLCDQv9C+0LTRgNC+0LHQvdGD0Y4g0LTQvtC60YPQvNC10L3RgtCw0YbQuNGOINC4INGC0L4sINC60LDQuiDQu9C10LPQutC+INC90LDRgdGC0YDQsNC40LLQsNGC0Ywg0YbQstC10YLQvtCy0YvQtSDQv9Cw0LvQuNGC0YDRiy5gLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9kYWNleV9ub2xhbi9zdGF0dXMvMTMwMzc0NDU0NTU4NzQ0MTY2NicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnRGFjZXkgTm9sYW4nLFxuICAgICAgcm9sZTogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9kYWNleS1ub2xhbi5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIGNvbnRlbnQ6ICfQnNC90LUg0L7QvSDQv9C+0L3RgNCw0LLQuNC70YHRjyDQsiDRgtC+0YIg0LzQvtC80LXQvdGCLCDQutC+0LPQtNCwINGPINC10LPQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwuJyxcbiAgICB0d2VldFVybDogJ0dpbGJlcnQgUmFidXQgVHN1cndhJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdHaWxiZXJ0IFJhYnV0IFRzdXJ3YScsXG4gICAgICByb2xlOiAnV2ViIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvZ2lsYmVydC1yYWJ1dC10c3Vyd2EuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJ9CvINC/0YDQuNGI0LXQuyDQvdCwINGA0LDQsdC+0YLRgywg0LfQsNC00LDQstCw0Y/RgdGMINCy0L7Qv9GA0L7RgdC+0LwsINC/0L7Rh9C10LzRgyDQv9C+0YHQu9C10LTQvdC40Lkg0YDQsNC30YDQsNCx0L7RgtGH0LjQuiDQutC+0LPQtNCwLdC70LjQsdC+INCy0L3QtdC00YDQuNC7IFRhaWx3aW5kINCyINC90LDRiNC4INC/0YDQvtC10LrRgtGLLCDRh9C10YDQtdC3INC90LXRgdC60L7Qu9GM0LrQviDQtNC90LXQuSDRjyDQsdGL0Lsg0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC9INCyIFRhaWx3aW5kINC4INC40YHQv9C+0LvRjNC30L7QstCw0Lsg0LXQs9C+INC00LvRjyDQstGB0LXRhSDRgdCy0L7QuNGFINC70LjRh9C90YvRhSDQv9GA0L7QtdC60YLQvtCyLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL21hZGRpZXhjYW1wYmVsbC9zdGF0dXMvMTMwMzc1MjY1ODAyOTc0MDAzMicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnTWFkZWxpbmUgQ2FtcGJlbGwnLFxuICAgICAgcm9sZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9tYWRlbGluZS1jYW1wYmVsbC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAn0JIgQHRhaWx3aW5kY3NzINC10YHRgtGMINC+0LTQvdCwINC90LXQv9GA0LjRj9GC0L3QsNGPINCy0LXRidGMOiDQv9C+0YHQu9C1INGC0L7Qs9C+LCDQutCw0Log0LLRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNC70Lgg0LXQs9C+INCyINC90LXRgdC60L7Qu9GM0LrQuNGFINC/0YDQvtC10LrRgtCw0YUsINC/0LjRgdCw0YLRjCDQvdC+0YDQvNCw0LvRjNC90YvQuSBDU1Mg0YHQvdC+0LLQsCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQvdCw0YHRgtC+0Y/RidC10Lkg0LPQvtC70L7QstC90L7QuSDQsdC+0LvRjNGOLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2lhbWdyYWVtX2Uvc3RhdHVzLzEzMjI4NjE0MDQ3ODE3NDgyMjg/cz0yMScsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnR3JhZW1lIEhvdXN0b24nLFxuICAgICAgcm9sZTogJ0phdmFTY3JpcHQgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9ncmFlbWUtaG91c3Rvbi5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIGNvbnRlbnQ6IGDQpdC+0YDQvtGI0L4sINGPINC+0YTQuNGG0LjQsNC70YzQvdC+ICrQstC10YHRjCog0YPRh9Cw0YHRgtCy0YPRjiDQsiDRiNGD0LzQuNGF0LUgQHRhaWx3aW5kY3NzLiDQndC40LrQvtCz0LTQsCDQvdC1INC00YPQvNCw0LssINGH0YLQviDRgdC+0LfQtNCw0L3QuNC1INCy0LXQsS3RgdCw0LnRgtC+0LIg0LzQvtC20LXRgiDQsdGL0YLRjCDRgtCw0LrQuNC8INGB0LzQtdGF0L7RgtCy0L7RgNC90L4g0LHRi9GB0YLRgNGL0Lwg0Lgg0LPQuNCx0LrQuNC8LmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1a2VyZWRwYXRoL3N0YXR1cy8xMzE2NTQzNTcxNjg0NjYzMjk4P3M9MjEnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0Fhcm9uIEJ1c2huZWxsJyxcbiAgICAgIHJvbGU6ICdQcm9ncmFtbWVyIEAgVHJlbmR5TWluZHMnLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2Fhcm9uLWJ1c2huZWxsLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDpcbiAgICAgICdIYXZlIGJlZW4gd29ya2luZyB3aXRoIENTUyBmb3Igb3ZlciB0ZW4geWVhcnMgYW5kIFRhaWx3aW5kIGp1c3QgbWFrZXMgbXkgbGlmZSBlYXNpZXIuIEl0IGlzIHN0aWxsIENTUyBhbmQgeW91IHVzZSBmbGV4LCBncmlkLCBldGMuIGJ1dCBqdXN0IHF1aWNrZXIgdG8gd3JpdGUgYW5kIG1haW50YWluLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2RlYnNfb2JyaWVuL3N0YXR1cy8xMjQzMjU1NDY4MjQxNDIwMjg4JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IGBIZWFkIG9mIExlYXJuaW5nIEAgTnV4dC5qc2AsXG4gICAgICByb2xlOiAnRnVsbC1TdGFjayBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2RlYmJpZS1vYnJpZW4uanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ09rYXksIEB0YWlsd2luZGNzcyBqdXN0IGNsaWNrZWQgZm9yIG1lIGFuZCBub3cgSSBmZWVsIGxpa2UgYSAjIUAlJiQlIGlkaW90LicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2tlbl93aGVlbGVyL3N0YXR1cy8xMjI1MzczMjMxMTM5NDc1NDU4JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdLZW4gV2hlZWxlcicsXG4gICAgICByb2xlOiBgUmVhY3QgRW5naW5lZXJgLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2tlbi13aGVlbGVyLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6IGBJJ3ZlIGJlZW4gdXNpbmcgQHRhaWx3aW5kY3NzIHRoZSBwYXN0IGZldyBtb250aHMgYW5kIGl0J3MgYW1hemluZy4gSSBhbHJlYWR5IHVzZWQgc29tZSB1dGlsaXR5IGNsYXNzZXMgYmVmb3JlLCBidXQgZ29pbmcgdXRpbGl0eS1maXJzdC4uLiB0aGlzIGlzIHRoZSB3YXkuYCxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vSmFkTGltY2Fjby9zdGF0dXMvMTMyNzQxNzAyMTkxNTU2MTk4NCcsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnSmFkIExpbWNhY28nLFxuICAgICAgcm9sZTogJ0Rlc2lnbmVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9qYWQtbGltY2Fjby5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiBgQWZ0ZXIgZmluYWxseSBnZXR0aW5nIHRvIHVzZSBAdGFpbHdpbmRjc3Mgb24gYSByZWFsIGNsaWVudCBwcm9qZWN0IGluIHRoZSBsYXN0IHR3byB3ZWVrcyBJIG5ldmVyIHdhbnQgdG8gd3JpdGUgQ1NTIGJ5IGhhbmQgYWdhaW4uIEkgd2FzIGEgc2tlcHRpYywgYnV0IHRoZSBoeXBlIGlzIHJlYWwuYCxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbHVrZXJlZHBhdGgvc3RhdHVzLzEzMTY1NDM1NzE2ODQ2NjMyOTg/cz0yMScsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnTHVrZSBSZWRwYXRoJyxcbiAgICAgIHJvbGU6ICdSdWJ5ICYgaU9TIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvbHVrZS1yZWRwYXRoLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICBcIkkgZGlkbid0IHRoaW5rIEkgd2FzIGdvaW5nIHRvIGxpa2UgQHRhaWx3aW5kY3NzLi4uIHNwZW50IGEgZGF5IHVzaW5nIGl0IGZvciBhIFBPQywgbG92ZSBpdCEgSSB3aXNoIHRoaXMgaGFkIGJlZW4gYXJvdW5kIHdoZW4gd2Ugc3RhcnRlZCBvdXIgY29tcGFueSBkZXNpZ24gc3lzdGVtLCBzZXJpb3VzbHkgY29uc2lkZXJpbmcgYSBjb21wbGV0ZSByZWJ1aWxkXCIsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL0pvbkJsb29tZXIvc3RhdHVzLzEzMDA5MjM4MTg2MjIzNzc5ODQnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0pvbiBCbG9vbWVyJyxcbiAgICAgIHJvbGU6ICdGcm9udC1FbmQgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9qb24tYmxvb21lci5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnQHRhaWx3aW5kY3NzIGxvb2tlZCB1bnBsZWFzYW50IGF0IGZpcnN0LCBidXQgbm93IEnigJltIGhvb2tlZCBvbiBpdC4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9kcm9pZGdpbGxpbGFuZC9zdGF0dXMvMTIyMjczMzM3Mjg1NTg0ODk2MScsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnQW5kcmV3IEdpbGxpbGFuZCcsXG4gICAgICByb2xlOiAnRnJvbnQtRW5kIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvYW5kcmV3LWdpbGxpbGFuZC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIFRlc3RpbW9uaWFsKHsgdGVzdGltb25pYWwsIGJhc2UsIGluZGV4LCB0b3RhbCB9KSB7XG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oXG4gICAgYmFzZSxcbiAgICBbMCwgKDEwMCAvIHRvdGFsKSAqIChpbmRleCArIDEpLCAoMTAwIC8gdG90YWwpICogKGluZGV4ICsgMSksIDEwMF0sXG4gICAgWycwJScsIGAkeyhpbmRleCArIDEpICogLTEwMH0lYCwgYCR7dG90YWwgKiAxMDAgLSAoaW5kZXggKyAxKSAqIDEwMH0lYCwgJzAlJ11cbiAgKVxuICBjb25zdCBbc3RyYWlnaHQsIHNldFN0cmFpZ2h0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNvbG9yID0gY29sb3JzW09iamVjdC5rZXlzKGNvbG9ycylbaW5kZXggJSBPYmplY3Qua2V5cyhjb2xvcnMpLmxlbmd0aF1dXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmxpXG4gICAgICBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTQgZmxleC1ub25lXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U3RyYWlnaHQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFN0cmFpZ2h0KGZhbHNlKX1cbiAgICAgIHN0eWxlPXt7IHggfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmZpZ3VyZVxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC14bCBmbGV4LW5vbmUgdy04MCBtZDp3LXhsXCJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e3N0cmFpZ2h0ID8geyByb3RhdGU6IDAgfSA6IHsgcm90YXRlOiByb3RhdGlvbltpbmRleCAlIHJvdGF0aW9uLmxlbmd0aF0gfX1cbiAgICAgID5cbiAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsIGJnLXdoaXRlIHB4LTYgcHktOCBtZDpwLTEwIHRleHQtbGcgbWQ6dGV4dC14bCBsZWFkaW5nLTggbWQ6bGVhZGluZy04IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjM2XCIgY2xhc3NOYW1lPXtgbWItNSBmaWxsLWN1cnJlbnQgJHtjb2xvclsxXX1gfT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuNDE1LjAwMUM2LjA3IDUuMTg1Ljg4NyAxMy42ODEuODg3IDIzLjA0MWMwIDcuNjMyIDQuNjA4IDEyLjA5NiA5LjkzNiAxMi4wOTYgNS4wNCAwIDguNzg0LTQuMDMyIDguNzg0LTguNzg0IDAtNC43NTItMy4zMTItOC4yMDgtNy42MzItOC4yMDgtLjg2NCAwLTIuMDE2LjE0NC0yLjMwNC4yODguNzItNC44OTYgNS4zMjgtMTAuNjU2IDkuOTM2LTEzLjUzNkwxMy40MTUuMDAxem0yNC43NjggMGMtNy4yIDUuMTg0LTEyLjM4NCAxMy42OC0xMi4zODQgMjMuMDQgMCA3LjYzMiA0LjYwOCAxMi4wOTYgOS45MzYgMTIuMDk2IDQuODk2IDAgOC43ODQtNC4wMzIgOC43ODQtOC43ODQgMC00Ljc1Mi0zLjQ1Ni04LjIwOC03Ljc3Ni04LjIwOC0uODY0IDAtMS44NzIuMTQ0LTIuMTYuMjg4LjcyLTQuODk2IDUuMTg0LTEwLjY1NiA5Ljc5Mi0xMy41MzZMMzguMTgzLjAwMXpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIHt0eXBlb2YgdGVzdGltb25pYWwuY29udGVudCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICA8cD57dGVzdGltb25pYWwuY29udGVudH08L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRlc3RpbW9uaWFsLmNvbnRlbnRcbiAgICAgICAgICApfVxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDxmaWdjYXB0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHAtNiBtZDpweC0xMCBtZDpweS02IGJnLWdyYWRpZW50LXRvLWJyIHJvdW5kZWQtYi14bCBsZWFkaW5nLTYgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlICR7Y29sb3JbMF19YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctMTQgaC0xNCBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt0ZXN0aW1vbmlhbC5hdXRob3IuYXZhdGFyfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgcm91bmRlZC1mdWxsICR7Y29sb3JbMl19YH1cbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0b1wiPlxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLmF1dGhvci5yb2xlICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbG9yWzFdfT57dGVzdGltb25pYWwuYXV0aG9yLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Rlc3RpbW9uaWFsLnR3ZWV0VXJsICYmIChcbiAgICAgICAgICAgIDxjaXRlIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXt0ZXN0aW1vbmlhbC50d2VldFVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3JpZ2luYWwgdHdlZXQgYnkge3Rlc3RpbW9uaWFsLmF1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzNcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIuNDExIDYuNTg0Yy0xLjExMy40OTMtMi4zMDkuODI2LTMuNTY2Ljk3N2E2LjIyOCA2LjIyOCAwIDAwMi43My0zLjQzNyAxMi40IDEyLjQgMCAwMS0zLjk0NCAxLjUwNiA2LjIxMiA2LjIxMiAwIDAwLTEwLjc0NCA0LjI1M2MwIC40ODYuMDU2Ljk1OC4xNiAxLjQxNGExNy42MzggMTcuNjM4IDAgMDEtMTIuODAyLTYuNDkgNi4yMDggNi4yMDggMCAwMC0uODQgMy4xMjIgNi4yMTIgNi4yMTIgMCAwMDIuNzYyIDUuMTcgNi4xOTcgNi4xOTcgMCAwMS0yLjgxMy0uNzc3di4wOGMwIDMuMDEgMi4xNCA1LjUyIDQuOTgzIDYuMDkxYTYuMjU4IDYuMjU4IDAgMDEtMi44MDYuMTA3IDYuMjE1IDYuMjE1IDAgMDA1LjgwMyA0LjMxMiAxMi40NjQgMTIuNDY0IDAgMDEtNy43MTUgMi42NmMtLjUwMSAwLS45OTYtLjAzLTEuNDgyLS4wODdhMTcuNTY2IDE3LjU2NiAwIDAwOS41MiAyLjc5YzExLjQyNiAwIDE3LjY3My05LjQ2MyAxNy42NzMtMTcuNjcxIDAtLjI2Ny0uMDA3LS41MzYtLjAxOS0uODAzYTEyLjYyNyAxMi42MjcgMCAwMDMuMDk4LTMuMjEzbC4wMDItLjAwNHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2NpdGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9tb3Rpb24uZmlndXJlPlxuICAgIDwvbW90aW9uLmxpPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XG4gIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICBjb25zdCB7IGluVmlldywgcmVmOiBpblZpZXdSZWYgfSA9IHVzZUluVmlldyh7IHRocmVzaG9sZDogMCwgcm9vdE1hcmdpbjogJzEwMHB4JyB9KVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDE1MClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5WaWV3KSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRyb2xzID0gYW5pbWF0ZSh4LCAxMDAsIHtcbiAgICAgIHR5cGU6ICd0d2VlbicsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdsaW5lYXInLFxuICAgICAgbG9vcDogSW5maW5pdHksXG4gICAgfSlcblxuICAgIHJldHVybiBjb250cm9scy5zdG9wXG4gIH0sIFtpblZpZXcsIHgsIGR1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17aW5WaWV3UmVmfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREdXJhdGlvbigyNTApfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXREdXJhdGlvbigxNTApfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBib3R0b20tMS8yIGxlZnQtMCBiZy1ncmFkaWVudC10by10IGZyb20tZ3JheS0xMDAgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogNjA3LCBtYXhIZWlnaHQ6ICc1MHZoJyB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy1oaWRkZW4gLW15LThcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBweS04XCI+XG4gICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB0ZXN0aW1vbmlhbD17dGVzdGltb25pYWx9XG4gICAgICAgICAgICAgIGJhc2U9e3h9XG4gICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICB0b3RhbD17dGVzdGltb25pYWxzLmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==