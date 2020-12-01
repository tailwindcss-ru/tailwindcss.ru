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
  content: 'There’s one thing that sucks about @tailwindcss - once you’ve used it on a handful of projects it is a real pain in the ass to write normal CSS again.',
  tweetUrl: 'https://twitter.com/iamgraem_e/status/1322861404781748228?s=21',
  author: {
    name: 'Graeme Houston',
    role: 'JavaScript Developer',
    avatar: __webpack_require__(/*! @/img/avatars/graeme-houston.jpg */ "./src/img/avatars/graeme-houston.jpg").default
  }
}, {
  content: "Okay, I\u2019m officially *all* in on the @tailwindcss hype train. Never thought building websites could be so ridiculously fast and flexible.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0Ymx1ZSIsImdyYWRpZW50cyIsInB1cnBsZSIsIm9yYW5nZSIsInRlYWwiLCJ2aW9sZXQiLCJhbWJlciIsInBpbmsiLCJibHVlIiwicm90YXRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJjb250ZW50IiwidHdlZXRVcmwiLCJhdXRob3IiLCJuYW1lIiwicm9sZSIsImF2YXRhciIsInJlcXVpcmUiLCJkZWZhdWx0IiwiVGVzdGltb25pYWwiLCJ0ZXN0aW1vbmlhbCIsImJhc2UiLCJpbmRleCIsInRvdGFsIiwieCIsInVzZVRyYW5zZm9ybSIsInVzZVN0YXRlIiwic3RyYWlnaHQiLCJzZXRTdHJhaWdodCIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvdGF0ZSIsIlRlc3RpbW9uaWFscyIsInVzZU1vdGlvblZhbHVlIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImluVmlldyIsImluVmlld1JlZiIsInJlZiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJ1c2VFZmZlY3QiLCJjb250cm9scyIsImFuaW1hdGUiLCJ0eXBlIiwiZWFzZSIsImxvb3AiLCJJbmZpbml0eSIsInN0b3AiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRSxDQUFDQywwREFBUyxDQUFDRCxTQUFWLENBQW9CLENBQXBCLENBQUQsRUFBeUIsZUFBekIsRUFBMEMsYUFBMUMsQ0FERTtBQUViRSxRQUFNLEVBQUUsQ0FBQ0QsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQixDQUFqQixDQUFELEVBQXNCLGtCQUF0QixFQUEwQyxnQkFBMUMsQ0FGSztBQUdiQyxR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Q3lCQyxxRTs7O01BRnJCRixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiMGIyNmJiZTllMmI2ZWYzM2YyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgYW5pbWF0ZSwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgZ3JhZGllbnRzIH0gZnJvbSAnQC91dGlscy9ncmFkaWVudHMnXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgbGlnaHRibHVlOiBbZ3JhZGllbnRzLmxpZ2h0Ymx1ZVswXSwgJ3RleHQtY3lhbi0xMDAnLCAnYmctY3lhbi0xMDAnXSxcbiAgcHVycGxlOiBbZ3JhZGllbnRzLnB1cnBsZVswXSwgJ3RleHQtZnVjaHNpYS0xMDAnLCAnYmctZnVjaHNpYS0xMDAnXSxcbiAgb3JhbmdlOiBbZ3JhZGllbnRzLm9yYW5nZVswXSwgJ3RleHQtb3JhbmdlLTEwMCcsICdiZy1vcmFuZ2UtMTAwJ10sXG4gIHRlYWw6IFtncmFkaWVudHMudGVhbFswXSwgJ3RleHQtZ3JlZW4tMTAwJywgJ2JnLWdyZWVuLTEwMCddLFxuICB2aW9sZXQ6IFtncmFkaWVudHMudmlvbGV0WzBdLCAndGV4dC1wdXJwbGUtMTAwJywgJ2JnLXB1cnBsZS0xMDAnXSxcbiAgYW1iZXI6IFtncmFkaWVudHMuYW1iZXJbMF0sICd0ZXh0LW9yYW5nZS0xMDAnLCAnYmctb3JhbmdlLTEwMCddLFxuICBwaW5rOiBbZ3JhZGllbnRzLnBpbmtbMF0sICd0ZXh0LXJvc2UtMTAwJywgJ2JnLXJvc2UtMTAwJ10sXG4gIGJsdWU6IFtncmFkaWVudHMuYmx1ZVswXSwgJ3RleHQtbGlnaHQtYmx1ZS0xMDAnLCAnYmctbGlnaHQtYmx1ZS0xMDAnXSxcbn1cblxuY29uc3Qgcm90YXRpb24gPSBbLTIsIDEsIC0xLCAyLCAtMSwgMV1cblxuY29uc3QgdGVzdGltb25pYWxzID0gW1xuICB7XG4gICAgY29udGVudDogJ9CvINGH0YPQstGB0YLQstGD0Y4g0YHQtdCx0Y8g0LjQtNC40L7RgtC+0Lwg0LjQty3Qt9CwINGC0L7Qs9C+LCDRh9GC0L4g0LTQviDRgdC40YUg0L/QvtGAINC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQuyBUYWlsd2luZCBDU1MuJyxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vcnlhbmZsb3JlbmNlL3N0YXR1cy8xMTg3OTUxNzk5NDQyODg2NjU2JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdSeWFuIEZsb3JlbmNlJyxcbiAgICAgIHJvbGU6ICdSZW1peCAmIFJlYWN0IFRyYWluaW5nJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9yeWFuLWZsb3JlbmNlLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAn0JXRgdC70Lgg0LHRiyDQvNC90LUg0L/RgNC40YjQu9C+0YHRjCDQv9C+0YDQtdC60L7QvNC10L3QtNC+0LLQsNGC0Ywg0YHQv9C+0YHQvtCxINC90LDRh9Cw0YLRjCDQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtSDRgdC10LPQvtC00L3Rjywg0Y3RgtC+INCx0YvQuyDQsdGLIEhUTUwgKyBDU1Mg0YEgVGFpbHdpbmQgQ1NTLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL3JhdWNoZy9zdGF0dXMvMTIyNTYxMTkyNjMyMDczODMwNCcsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnR3VpbGxlcm1vIFJhdWNoJyxcbiAgICAgIHJvbGU6ICdWZXJjZWwnLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2d1aWxsZXJtby1yYXVjaC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiBg0KMg0LzQtdC90Y8g0L3QtdGCINC00LjQt9Cw0LnQvdC10YDRgdC60LjRhSDQvdCw0LLRi9C60L7Qsiwg0LAg0YEgVGFpbHdpbmQg0Y8g0LzQvtCz0YMg0YEg0LvQtdCz0LrQvtGB0YLRjNGOINGB0L7Qt9C00LDQstCw0YLRjCDQutGA0LDRgdC40LLRi9C1INCy0LXQsS3RgdCw0LnRgtGLLCDQuCDRjdGC0L4g0LLRgdC1LCDRh9GC0L4g0Y8g0LrQvtCz0LTQsC3Qu9C40LHQviDRhdC+0YLQtdC7INCyINGA0LDQvNC60LDRhSBDU1MuYCxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdTYXJhIFZpZWlyYScsXG4gICAgICByb2xlOiAnQ29kZVNhbmRib3gnLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL3NhcmEtdmllaXJhLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICBcItCd0LAg0LTQvdGP0YUg0Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQuyBUYWlsd2luZCDQtNC70Y8g0YDQtdC00LjQt9Cw0LnQvdCwINGB0LDQudGC0LAgZmVlbHByZXNlbmNlLmNvbS4g0K3RgtC+INC90LXQstC10YDQvtGP0YLQvdC+ISDQryDQtNCw0Lsg0YHQtdCx0LUg0LLRgdC10LPQviDQvdC10YHQutC+0LvRjNC60L4g0YfQsNGB0L7Qsiwg0YfRgtC+0LHRiyDRgdC+0LHRgNCw0YLRjCDQstGB0LUg0LLQvNC10YHRgtC1LCDQuCDRjdGC0L4g0LjQvNC10LvQviDQvtCz0YDQvtC80L3QvtC1INC30L3QsNGH0LXQvdC40LUuXCIsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnUnlhbiBTaW5nZXInLFxuICAgICAgcm9sZTogJ0Jhc2VjYW1wJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9yeWFuLXNpbmdlci5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiBg0K8g0L3QsNGH0LDQuyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgQHRhaWx3aW5kY3NzLiDQryDRgdGA0LDQt9GDINCy0LvRjtCx0LjQu9GB0Y8g0LIg0LjRhSDQsNC00LDQv9GC0LjQstC90YvQtSDQvNC+0LTQuNGE0LjQutCw0YLQvtGA0YssINC/0L7QtNGA0L7QsdC90YPRjiDQtNC+0LrRg9C80LXQvdGC0LDRhtC40Y4g0Lgg0YLQviwg0LrQsNC6INC70LXQs9C60L4g0L3QsNGB0YLRgNCw0LjQstCw0YLRjCDRhtCy0LXRgtC+0LLRi9C1INC/0LDQu9C40YLRgNGLLmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2RhY2V5X25vbGFuL3N0YXR1cy8xMzAzNzQ0NTQ1NTg3NDQxNjY2JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdEYWNleSBOb2xhbicsXG4gICAgICByb2xlOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2RhY2V5LW5vbGFuLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDogJ9Cc0L3QtSDQvtC9INC/0L7QvdGA0LDQstC40LvRgdGPINCyINGC0L7RgiDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAg0Y8g0LXQs9C+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjC4nLFxuICAgIHR3ZWV0VXJsOiAnR2lsYmVydCBSYWJ1dCBUc3Vyd2EnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0dpbGJlcnQgUmFidXQgVHN1cndhJyxcbiAgICAgIHJvbGU6ICdXZWIgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9naWxiZXJ0LXJhYnV0LXRzdXJ3YS5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAn0K8g0L/RgNC40YjQtdC7INC90LAg0YDQsNCx0L7RgtGDLCDQt9Cw0LTQsNCy0LDRj9GB0Ywg0LLQvtC/0YDQvtGB0L7QvCwg0L/QvtGH0LXQvNGDINC/0L7RgdC70LXQtNC90LjQuSDRgNCw0LfRgNCw0LHQvtGC0YfQuNC6INC60L7Qs9C00LAt0LvQuNCx0L4g0LLQvdC10LTRgNC40LsgVGFpbHdpbmQg0LIg0L3QsNGI0Lgg0L/RgNC+0LXQutGC0YssINGH0LXRgNC10Lcg0L3QtdGB0LrQvtC70YzQutC+INC00L3QtdC5INGPINCx0YvQuyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L0g0LIgVGFpbHdpbmQg0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQuyDQtdCz0L4g0LTQu9GPINCy0YHQtdGFINGB0LLQvtC40YUg0LvQuNGH0L3Ri9GFINC/0YDQvtC10LrRgtC+0LIuJyxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbWFkZGlleGNhbXBiZWxsL3N0YXR1cy8xMzAzNzUyNjU4MDI5NzQwMDMyJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdNYWRlbGluZSBDYW1wYmVsbCcsXG4gICAgICByb2xlOiAnRnVsbC1TdGFjayBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL21hZGVsaW5lLWNhbXBiZWxsLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDpcbiAgICAgICdUaGVyZeKAmXMgb25lIHRoaW5nIHRoYXQgc3Vja3MgYWJvdXQgQHRhaWx3aW5kY3NzIC0gb25jZSB5b3XigJl2ZSB1c2VkIGl0IG9uIGEgaGFuZGZ1bCBvZiBwcm9qZWN0cyBpdCBpcyBhIHJlYWwgcGFpbiBpbiB0aGUgYXNzIHRvIHdyaXRlIG5vcm1hbCBDU1MgYWdhaW4uJyxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vaWFtZ3JhZW1fZS9zdGF0dXMvMTMyMjg2MTQwNDc4MTc0ODIyOD9zPTIxJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdHcmFlbWUgSG91c3RvbicsXG4gICAgICByb2xlOiAnSmF2YVNjcmlwdCBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2dyYWVtZS1ob3VzdG9uLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDogYE9rYXksIEnigJltIG9mZmljaWFsbHkgKmFsbCogaW4gb24gdGhlIEB0YWlsd2luZGNzcyBoeXBlIHRyYWluLiBOZXZlciB0aG91Z2h0IGJ1aWxkaW5nIHdlYnNpdGVzIGNvdWxkIGJlIHNvIHJpZGljdWxvdXNseSBmYXN0IGFuZCBmbGV4aWJsZS5gLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sdWtlcmVkcGF0aC9zdGF0dXMvMTMxNjU0MzU3MTY4NDY2MzI5OD9zPTIxJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdBYXJvbiBCdXNobmVsbCcsXG4gICAgICByb2xlOiAnUHJvZ3JhbW1lciBAIFRyZW5keU1pbmRzJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9hYXJvbi1idXNobmVsbC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICAnSGF2ZSBiZWVuIHdvcmtpbmcgd2l0aCBDU1MgZm9yIG92ZXIgdGVuIHllYXJzIGFuZCBUYWlsd2luZCBqdXN0IG1ha2VzIG15IGxpZmUgZWFzaWVyLiBJdCBpcyBzdGlsbCBDU1MgYW5kIHlvdSB1c2UgZmxleCwgZ3JpZCwgZXRjLiBidXQganVzdCBxdWlja2VyIHRvIHdyaXRlIGFuZCBtYWludGFpbi4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9kZWJzX29icmllbi9zdGF0dXMvMTI0MzI1NTQ2ODI0MTQyMDI4OCcsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBgSGVhZCBvZiBMZWFybmluZyBAIE51eHQuanNgLFxuICAgICAgcm9sZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9kZWJiaWUtb2JyaWVuLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6ICdPa2F5LCBAdGFpbHdpbmRjc3MganVzdCBjbGlja2VkIGZvciBtZSBhbmQgbm93IEkgZmVlbCBsaWtlIGEgIyFAJSYkJSBpZGlvdC4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9rZW5fd2hlZWxlci9zdGF0dXMvMTIyNTM3MzIzMTEzOTQ3NTQ1OCcsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnS2VuIFdoZWVsZXInLFxuICAgICAgcm9sZTogYFJlYWN0IEVuZ2luZWVyYCxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9rZW4td2hlZWxlci5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiBgSSd2ZSBiZWVuIHVzaW5nIEB0YWlsd2luZGNzcyB0aGUgcGFzdCBmZXcgbW9udGhzIGFuZCBpdCdzIGFtYXppbmcuIEkgYWxyZWFkeSB1c2VkIHNvbWUgdXRpbGl0eSBjbGFzc2VzIGJlZm9yZSwgYnV0IGdvaW5nIHV0aWxpdHktZmlyc3QuLi4gdGhpcyBpcyB0aGUgd2F5LmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL0phZExpbWNhY28vc3RhdHVzLzEzMjc0MTcwMjE5MTU1NjE5ODQnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0phZCBMaW1jYWNvJyxcbiAgICAgIHJvbGU6ICdEZXNpZ25lcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvamFkLWxpbWNhY28uanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogYEFmdGVyIGZpbmFsbHkgZ2V0dGluZyB0byB1c2UgQHRhaWx3aW5kY3NzIG9uIGEgcmVhbCBjbGllbnQgcHJvamVjdCBpbiB0aGUgbGFzdCB0d28gd2Vla3MgSSBuZXZlciB3YW50IHRvIHdyaXRlIENTUyBieSBoYW5kIGFnYWluLiBJIHdhcyBhIHNrZXB0aWMsIGJ1dCB0aGUgaHlwZSBpcyByZWFsLmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1a2VyZWRwYXRoL3N0YXR1cy8xMzE2NTQzNTcxNjg0NjYzMjk4P3M9MjEnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0x1a2UgUmVkcGF0aCcsXG4gICAgICByb2xlOiAnUnVieSAmIGlPUyBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2x1a2UtcmVkcGF0aC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgXCJJIGRpZG4ndCB0aGluayBJIHdhcyBnb2luZyB0byBsaWtlIEB0YWlsd2luZGNzcy4uLiBzcGVudCBhIGRheSB1c2luZyBpdCBmb3IgYSBQT0MsIGxvdmUgaXQhIEkgd2lzaCB0aGlzIGhhZCBiZWVuIGFyb3VuZCB3aGVuIHdlIHN0YXJ0ZWQgb3VyIGNvbXBhbnkgZGVzaWduIHN5c3RlbSwgc2VyaW91c2x5IGNvbnNpZGVyaW5nIGEgY29tcGxldGUgcmVidWlsZFwiLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9Kb25CbG9vbWVyL3N0YXR1cy8xMzAwOTIzODE4NjIyMzc3OTg0JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdKb24gQmxvb21lcicsXG4gICAgICByb2xlOiAnRnJvbnQtRW5kIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvam9uLWJsb29tZXIuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ0B0YWlsd2luZGNzcyBsb29rZWQgdW5wbGVhc2FudCBhdCBmaXJzdCwgYnV0IG5vdyBJ4oCZbSBob29rZWQgb24gaXQuJyxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vZHJvaWRnaWxsaWxhbmQvc3RhdHVzLzEyMjI3MzMzNzI4NTU4NDg5NjEnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0FuZHJldyBHaWxsaWxhbmQnLFxuICAgICAgcm9sZTogJ0Zyb250LUVuZCBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2FuZHJldy1naWxsaWxhbmQuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuXVxuXG5mdW5jdGlvbiBUZXN0aW1vbmlhbCh7IHRlc3RpbW9uaWFsLCBiYXNlLCBpbmRleCwgdG90YWwgfSkge1xuICBjb25zdCB4ID0gdXNlVHJhbnNmb3JtKFxuICAgIGJhc2UsXG4gICAgWzAsICgxMDAgLyB0b3RhbCkgKiAoaW5kZXggKyAxKSwgKDEwMCAvIHRvdGFsKSAqIChpbmRleCArIDEpLCAxMDBdLFxuICAgIFsnMCUnLCBgJHsoaW5kZXggKyAxKSAqIC0xMDB9JWAsIGAke3RvdGFsICogMTAwIC0gKGluZGV4ICsgMSkgKiAxMDB9JWAsICcwJSddXG4gIClcbiAgY29uc3QgW3N0cmFpZ2h0LCBzZXRTdHJhaWdodF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBjb2xvciA9IGNvbG9yc1tPYmplY3Qua2V5cyhjb2xvcnMpW2luZGV4ICUgT2JqZWN0LmtleXMoY29sb3JzKS5sZW5ndGhdXVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5saVxuICAgICAgY2xhc3NOYW1lPVwicHgtMyBtZDpweC00IGZsZXgtbm9uZVwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFN0cmFpZ2h0KHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTdHJhaWdodChmYWxzZSl9XG4gICAgICBzdHlsZT17eyB4IH19XG4gICAgPlxuICAgICAgPG1vdGlvbi5maWd1cmVcbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIHJvdW5kZWQteGwgZmxleC1ub25lIHctODAgbWQ6dy14bFwiXG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBhbmltYXRlPXtzdHJhaWdodCA/IHsgcm90YXRlOiAwIH0gOiB7IHJvdGF0ZTogcm90YXRpb25baW5kZXggJSByb3RhdGlvbi5sZW5ndGhdIH19XG4gICAgICA+XG4gICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bCBiZy13aGl0ZSBweC02IHB5LTggbWQ6cC0xMCB0ZXh0LWxnIG1kOnRleHQteGwgbGVhZGluZy04IG1kOmxlYWRpbmctOCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDVcIiBoZWlnaHQ9XCIzNlwiIGNsYXNzTmFtZT17YG1iLTUgZmlsbC1jdXJyZW50ICR7Y29sb3JbMV19YH0+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjQxNS4wMDFDNi4wNyA1LjE4NS44ODcgMTMuNjgxLjg4NyAyMy4wNDFjMCA3LjYzMiA0LjYwOCAxMi4wOTYgOS45MzYgMTIuMDk2IDUuMDQgMCA4Ljc4NC00LjAzMiA4Ljc4NC04Ljc4NCAwLTQuNzUyLTMuMzEyLTguMjA4LTcuNjMyLTguMjA4LS44NjQgMC0yLjAxNi4xNDQtMi4zMDQuMjg4LjcyLTQuODk2IDUuMzI4LTEwLjY1NiA5LjkzNi0xMy41MzZMMTMuNDE1LjAwMXptMjQuNzY4IDBjLTcuMiA1LjE4NC0xMi4zODQgMTMuNjgtMTIuMzg0IDIzLjA0IDAgNy42MzIgNC42MDggMTIuMDk2IDkuOTM2IDEyLjA5NiA0Ljg5NiAwIDguNzg0LTQuMDMyIDguNzg0LTguNzg0IDAtNC43NTItMy40NTYtOC4yMDgtNy43NzYtOC4yMDgtLjg2NCAwLTEuODcyLjE0NC0yLjE2LjI4OC43Mi00Ljg5NiA1LjE4NC0xMC42NTYgOS43OTItMTMuNTM2TDM4LjE4My4wMDF6XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICB7dHlwZW9mIHRlc3RpbW9uaWFsLmNvbnRlbnQgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbC5jb250ZW50XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8ZmlnY2FwdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBwLTYgbWQ6cHgtMTAgbWQ6cHktNiBiZy1ncmFkaWVudC10by1iciByb3VuZGVkLWIteGwgbGVhZGluZy02IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSAke2NvbG9yWzBdfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSB3LTE0IGgtMTQgYmctd2hpdGUgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dGVzdGltb25pYWwuYXV0aG9yLmF2YXRhcn1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIHJvdW5kZWQtZnVsbCAke2NvbG9yWzJdfWB9XG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5hdXRob3Iucm9sZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjb2xvclsxXX0+e3Rlc3RpbW9uaWFsLmF1dGhvci5yb2xlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0ZXN0aW1vbmlhbC50d2VldFVybCAmJiAoXG4gICAgICAgICAgICA8Y2l0ZSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGVzdGltb25pYWwudHdlZXRVcmx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9yaWdpbmFsIHR3ZWV0IGJ5IHt0ZXN0aW1vbmlhbC5hdXRob3IubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMzXCIgaGVpZ2h0PVwiMzJcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyLjQxMSA2LjU4NGMtMS4xMTMuNDkzLTIuMzA5LjgyNi0zLjU2Ni45NzdhNi4yMjggNi4yMjggMCAwMDIuNzMtMy40MzcgMTIuNCAxMi40IDAgMDEtMy45NDQgMS41MDYgNi4yMTIgNi4yMTIgMCAwMC0xMC43NDQgNC4yNTNjMCAuNDg2LjA1Ni45NTguMTYgMS40MTRhMTcuNjM4IDE3LjYzOCAwIDAxLTEyLjgwMi02LjQ5IDYuMjA4IDYuMjA4IDAgMDAtLjg0IDMuMTIyIDYuMjEyIDYuMjEyIDAgMDAyLjc2MiA1LjE3IDYuMTk3IDYuMTk3IDAgMDEtMi44MTMtLjc3N3YuMDhjMCAzLjAxIDIuMTQgNS41MiA0Ljk4MyA2LjA5MWE2LjI1OCA2LjI1OCAwIDAxLTIuODA2LjEwNyA2LjIxNSA2LjIxNSAwIDAwNS44MDMgNC4zMTIgMTIuNDY0IDEyLjQ2NCAwIDAxLTcuNzE1IDIuNjZjLS41MDEgMC0uOTk2LS4wMy0xLjQ4Mi0uMDg3YTE3LjU2NiAxNy41NjYgMCAwMDkuNTIgMi43OWMxMS40MjYgMCAxNy42NzMtOS40NjMgMTcuNjczLTE3LjY3MSAwLS4yNjctLjAwNy0uNTM2LS4wMTktLjgwM2ExMi42MjcgMTIuNjI3IDAgMDAzLjA5OC0zLjIxM2wuMDAyLS4wMDR6XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9jaXRlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvbW90aW9uLmZpZ3VyZT5cbiAgICA8L21vdGlvbi5saT5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGVzdGltb25pYWxzKCkge1xuICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMClcbiAgY29uc3QgeyBpblZpZXcsIHJlZjogaW5WaWV3UmVmIH0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAsIHJvb3RNYXJnaW46ICcxMDBweCcgfSlcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgxNTApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWluVmlldykgcmV0dXJuXG5cbiAgICBjb25zdCBjb250cm9scyA9IGFuaW1hdGUoeCwgMTAwLCB7XG4gICAgICB0eXBlOiAndHdlZW4nLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnbGluZWFyJyxcbiAgICAgIGxvb3A6IEluZmluaXR5LFxuICAgIH0pXG5cbiAgICByZXR1cm4gY29udHJvbHMuc3RvcFxuICB9LCBbaW5WaWV3LCB4LCBkdXJhdGlvbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e2luVmlld1JlZn1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0RHVyYXRpb24oMjUwKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0RHVyYXRpb24oMTUwKX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgYm90dG9tLTEvMiBsZWZ0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktMTAwIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDYwNywgbWF4SGVpZ2h0OiAnNTB2aCcgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3ctaGlkZGVuIC1teS04XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHktOFwiPlxuICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaSkgPT4gKFxuICAgICAgICAgICAgPFRlc3RpbW9uaWFsXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgdGVzdGltb25pYWw9e3Rlc3RpbW9uaWFsfVxuICAgICAgICAgICAgICBiYXNlPXt4fVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgdG90YWw9e3Rlc3RpbW9uaWFscy5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=