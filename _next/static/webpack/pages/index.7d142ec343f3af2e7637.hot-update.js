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
  content: "I used Tailwind to redesign feltpresence.com the other day. It's fantastic! I only gave myself a few hours to hack it together and it made a huge difference.",
  author: {
    name: 'Ryan Singer',
    role: 'Basecamp',
    avatar: __webpack_require__(/*! @/img/avatars/ryan-singer.jpg */ "./src/img/avatars/ryan-singer.jpg").default
  }
}, {
  content: "I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.",
  tweetUrl: 'https://twitter.com/dacey_nolan/status/1303744545587441666',
  author: {
    name: 'Dacey Nolan',
    role: 'Software Engineer',
    avatar: __webpack_require__(/*! @/img/avatars/dacey-nolan.jpg */ "./src/img/avatars/dacey-nolan.jpg").default
  }
}, {
  content: 'Loved it the very moment I used it.',
  tweetUrl: 'Gilbert Rabut Tsurwa',
  author: {
    name: 'Gilbert Rabut Tsurwa',
    role: 'Web Developer',
    avatar: __webpack_require__(/*! @/img/avatars/gilbert-rabut-tsurwa.jpg */ "./src/img/avatars/gilbert-rabut-tsurwa.jpg").default
  }
}, {
  content: 'I came into my job wondering why the last dev would ever implement Tailwind into our projects, within days I was a Tailwind convert and use it for all of my personal projects.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImxpZ2h0Ymx1ZSIsImdyYWRpZW50cyIsInB1cnBsZSIsIm9yYW5nZSIsInRlYWwiLCJ2aW9sZXQiLCJhbWJlciIsInBpbmsiLCJibHVlIiwicm90YXRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJjb250ZW50IiwidHdlZXRVcmwiLCJhdXRob3IiLCJuYW1lIiwicm9sZSIsImF2YXRhciIsInJlcXVpcmUiLCJkZWZhdWx0IiwiVGVzdGltb25pYWwiLCJ0ZXN0aW1vbmlhbCIsImJhc2UiLCJpbmRleCIsInRvdGFsIiwieCIsInVzZVRyYW5zZm9ybSIsInVzZVN0YXRlIiwic3RyYWlnaHQiLCJzZXRTdHJhaWdodCIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvdGF0ZSIsIlRlc3RpbW9uaWFscyIsInVzZU1vdGlvblZhbHVlIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImluVmlldyIsImluVmlld1JlZiIsInJlZiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJ1c2VFZmZlY3QiLCJjb250cm9scyIsImFuaW1hdGUiLCJ0eXBlIiwiZWFzZSIsImxvb3AiLCJJbmZpbml0eSIsInN0b3AiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFdBQVMsRUFBRSxDQUFDQywwREFBUyxDQUFDRCxTQUFWLENBQW9CLENBQXBCLENBQUQsRUFBeUIsZUFBekIsRUFBMEMsYUFBMUMsQ0FERTtBQUViRSxRQUFNLEVBQUUsQ0FBQ0QsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQixDQUFqQixDQUFELEVBQXNCLGtCQUF0QixFQUEwQyxnQkFBMUMsQ0FGSztBQUdiQyxR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eUJDLHFFOzs7TUFGckJGLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2QxNDJlYzM0M2YzYWYyZTc2MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCBhbmltYXRlLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcblxuY29uc3QgY29sb3JzID0ge1xuICBsaWdodGJsdWU6IFtncmFkaWVudHMubGlnaHRibHVlWzBdLCAndGV4dC1jeWFuLTEwMCcsICdiZy1jeWFuLTEwMCddLFxuICBwdXJwbGU6IFtncmFkaWVudHMucHVycGxlWzBdLCAndGV4dC1mdWNoc2lhLTEwMCcsICdiZy1mdWNoc2lhLTEwMCddLFxuICBvcmFuZ2U6IFtncmFkaWVudHMub3JhbmdlWzBdLCAndGV4dC1vcmFuZ2UtMTAwJywgJ2JnLW9yYW5nZS0xMDAnXSxcbiAgdGVhbDogW2dyYWRpZW50cy50ZWFsWzBdLCAndGV4dC1ncmVlbi0xMDAnLCAnYmctZ3JlZW4tMTAwJ10sXG4gIHZpb2xldDogW2dyYWRpZW50cy52aW9sZXRbMF0sICd0ZXh0LXB1cnBsZS0xMDAnLCAnYmctcHVycGxlLTEwMCddLFxuICBhbWJlcjogW2dyYWRpZW50cy5hbWJlclswXSwgJ3RleHQtb3JhbmdlLTEwMCcsICdiZy1vcmFuZ2UtMTAwJ10sXG4gIHBpbms6IFtncmFkaWVudHMucGlua1swXSwgJ3RleHQtcm9zZS0xMDAnLCAnYmctcm9zZS0xMDAnXSxcbiAgYmx1ZTogW2dyYWRpZW50cy5ibHVlWzBdLCAndGV4dC1saWdodC1ibHVlLTEwMCcsICdiZy1saWdodC1ibHVlLTEwMCddLFxufVxuXG5jb25zdCByb3RhdGlvbiA9IFstMiwgMSwgLTEsIDIsIC0xLCAxXVxuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gIHtcbiAgICBjb250ZW50OiAn0K8g0YfRg9Cy0YHRgtCy0YPRjiDRgdC10LHRjyDQuNC00LjQvtGC0L7QvCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQtNC+INGB0LjRhSDQv9C+0YAg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC7IFRhaWx3aW5kIENTUy4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9yeWFuZmxvcmVuY2Uvc3RhdHVzLzExODc5NTE3OTk0NDI4ODY2NTYnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ1J5YW4gRmxvcmVuY2UnLFxuICAgICAgcm9sZTogJ1JlbWl4ICYgUmVhY3QgVHJhaW5pbmcnLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL3J5YW4tZmxvcmVuY2UuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDpcbiAgICAgICfQldGB0LvQuCDQsdGLINC80L3QtSDQv9GA0LjRiNC70L7RgdGMINC/0L7RgNC10LrQvtC80LXQvdC00L7QstCw0YLRjCDRgdC/0L7RgdC+0LEg0L3QsNGH0LDRgtGMINC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1INGB0LXQs9C+0LTQvdGPLCDRjdGC0L4g0LHRi9C7INCx0YsgSFRNTCArIENTUyDRgSBUYWlsd2luZCBDU1MuJyxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vcmF1Y2hnL3N0YXR1cy8xMjI1NjExOTI2MzIwNzM4MzA0JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdHdWlsbGVybW8gUmF1Y2gnLFxuICAgICAgcm9sZTogJ1ZlcmNlbCcsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvZ3VpbGxlcm1vLXJhdWNoLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6IGDQoyDQvNC10L3RjyDQvdC10YIg0LTQuNC30LDQudC90LXRgNGB0LrQuNGFINC90LDQstGL0LrQvtCyLCDQsCDRgSBUYWlsd2luZCDRjyDQvNC+0LPRgyDRgSDQu9C10LPQutC+0YHRgtGM0Y4g0YHQvtC30LTQsNCy0LDRgtGMINC60YDQsNGB0LjQstGL0LUg0LLQtdCxLdGB0LDQudGC0YssINC4INGN0YLQviDQstGB0LUsINGH0YLQviDRjyDQutC+0LPQtNCwLdC70LjQsdC+INGF0L7RgtC10Lsg0LIg0YDQsNC80LrQsNGFIENTUy5gLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ1NhcmEgVmllaXJhJyxcbiAgICAgIHJvbGU6ICdDb2RlU2FuZGJveCcsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvc2FyYS12aWVpcmEuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDpcbiAgICAgIFwiSSB1c2VkIFRhaWx3aW5kIHRvIHJlZGVzaWduIGZlbHRwcmVzZW5jZS5jb20gdGhlIG90aGVyIGRheS4gSXQncyBmYW50YXN0aWMhIEkgb25seSBnYXZlIG15c2VsZiBhIGZldyBob3VycyB0byBoYWNrIGl0IHRvZ2V0aGVyIGFuZCBpdCBtYWRlIGEgaHVnZSBkaWZmZXJlbmNlLlwiLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ1J5YW4gU2luZ2VyJyxcbiAgICAgIHJvbGU6ICdCYXNlY2FtcCcsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvcnlhbi1zaW5nZXIuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogYEkgc3RhcnRlZCB1c2luZyBAdGFpbHdpbmRjc3MuIEkgaW5zdGFudGx5IGZlbGwgaW4gbG92ZSB3aXRoIHRoZWlyIHJlc3BvbnNpdmUgbW9kaWZpZXJzLCB0aG9yb3VnaCBkb2N1bWVudGF0aW9uLCBhbmQgaG93IGVhc3kgaXQgd2FzIGN1c3RvbWl6aW5nIGNvbG9yIHBhbGV0dGVzLmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2RhY2V5X25vbGFuL3N0YXR1cy8xMzAzNzQ0NTQ1NTg3NDQxNjY2JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdEYWNleSBOb2xhbicsXG4gICAgICByb2xlOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2RhY2V5LW5vbGFuLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDogJ0xvdmVkIGl0IHRoZSB2ZXJ5IG1vbWVudCBJIHVzZWQgaXQuJyxcbiAgICB0d2VldFVybDogJ0dpbGJlcnQgUmFidXQgVHN1cndhJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdHaWxiZXJ0IFJhYnV0IFRzdXJ3YScsXG4gICAgICByb2xlOiAnV2ViIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvZ2lsYmVydC1yYWJ1dC10c3Vyd2EuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJ0kgY2FtZSBpbnRvIG15IGpvYiB3b25kZXJpbmcgd2h5IHRoZSBsYXN0IGRldiB3b3VsZCBldmVyIGltcGxlbWVudCBUYWlsd2luZCBpbnRvIG91ciBwcm9qZWN0cywgd2l0aGluIGRheXMgSSB3YXMgYSBUYWlsd2luZCBjb252ZXJ0IGFuZCB1c2UgaXQgZm9yIGFsbCBvZiBteSBwZXJzb25hbCBwcm9qZWN0cy4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9tYWRkaWV4Y2FtcGJlbGwvc3RhdHVzLzEzMDM3NTI2NTgwMjk3NDAwMzInLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ01hZGVsaW5lIENhbXBiZWxsJyxcbiAgICAgIHJvbGU6ICdGdWxsLVN0YWNrIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvbWFkZWxpbmUtY2FtcGJlbGwuanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICBjb250ZW50OlxuICAgICAgJ1RoZXJl4oCZcyBvbmUgdGhpbmcgdGhhdCBzdWNrcyBhYm91dCBAdGFpbHdpbmRjc3MgLSBvbmNlIHlvdeKAmXZlIHVzZWQgaXQgb24gYSBoYW5kZnVsIG9mIHByb2plY3RzIGl0IGlzIGEgcmVhbCBwYWluIGluIHRoZSBhc3MgdG8gd3JpdGUgbm9ybWFsIENTUyBhZ2Fpbi4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pYW1ncmFlbV9lL3N0YXR1cy8xMzIyODYxNDA0NzgxNzQ4MjI4P3M9MjEnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0dyYWVtZSBIb3VzdG9uJyxcbiAgICAgIHJvbGU6ICdKYXZhU2NyaXB0IERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvZ3JhZW1lLWhvdXN0b24uanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICBjb250ZW50OiBgT2theSwgSeKAmW0gb2ZmaWNpYWxseSAqYWxsKiBpbiBvbiB0aGUgQHRhaWx3aW5kY3NzIGh5cGUgdHJhaW4uIE5ldmVyIHRob3VnaHQgYnVpbGRpbmcgd2Vic2l0ZXMgY291bGQgYmUgc28gcmlkaWN1bG91c2x5IGZhc3QgYW5kIGZsZXhpYmxlLmAsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1a2VyZWRwYXRoL3N0YXR1cy8xMzE2NTQzNTcxNjg0NjYzMjk4P3M9MjEnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0Fhcm9uIEJ1c2huZWxsJyxcbiAgICAgIHJvbGU6ICdQcm9ncmFtbWVyIEAgVHJlbmR5TWluZHMnLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2Fhcm9uLWJ1c2huZWxsLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgY29udGVudDpcbiAgICAgICdIYXZlIGJlZW4gd29ya2luZyB3aXRoIENTUyBmb3Igb3ZlciB0ZW4geWVhcnMgYW5kIFRhaWx3aW5kIGp1c3QgbWFrZXMgbXkgbGlmZSBlYXNpZXIuIEl0IGlzIHN0aWxsIENTUyBhbmQgeW91IHVzZSBmbGV4LCBncmlkLCBldGMuIGJ1dCBqdXN0IHF1aWNrZXIgdG8gd3JpdGUgYW5kIG1haW50YWluLicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2RlYnNfb2JyaWVuL3N0YXR1cy8xMjQzMjU1NDY4MjQxNDIwMjg4JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IGBIZWFkIG9mIExlYXJuaW5nIEAgTnV4dC5qc2AsXG4gICAgICByb2xlOiAnRnVsbC1TdGFjayBEZXZlbG9wZXInLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2RlYmJpZS1vYnJpZW4uanBnJykuZGVmYXVsdCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29udGVudDogJ09rYXksIEB0YWlsd2luZGNzcyBqdXN0IGNsaWNrZWQgZm9yIG1lIGFuZCBub3cgSSBmZWVsIGxpa2UgYSAjIUAlJiQlIGlkaW90LicsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2tlbl93aGVlbGVyL3N0YXR1cy8xMjI1MzczMjMxMTM5NDc1NDU4JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6ICdLZW4gV2hlZWxlcicsXG4gICAgICByb2xlOiBgUmVhY3QgRW5naW5lZXJgLFxuICAgICAgYXZhdGFyOiByZXF1aXJlKCdAL2ltZy9hdmF0YXJzL2tlbi13aGVlbGVyLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6IGBJJ3ZlIGJlZW4gdXNpbmcgQHRhaWx3aW5kY3NzIHRoZSBwYXN0IGZldyBtb250aHMgYW5kIGl0J3MgYW1hemluZy4gSSBhbHJlYWR5IHVzZWQgc29tZSB1dGlsaXR5IGNsYXNzZXMgYmVmb3JlLCBidXQgZ29pbmcgdXRpbGl0eS1maXJzdC4uLiB0aGlzIGlzIHRoZSB3YXkuYCxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vSmFkTGltY2Fjby9zdGF0dXMvMTMyNzQxNzAyMTkxNTU2MTk4NCcsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnSmFkIExpbWNhY28nLFxuICAgICAgcm9sZTogJ0Rlc2lnbmVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9qYWQtbGltY2Fjby5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiBgQWZ0ZXIgZmluYWxseSBnZXR0aW5nIHRvIHVzZSBAdGFpbHdpbmRjc3Mgb24gYSByZWFsIGNsaWVudCBwcm9qZWN0IGluIHRoZSBsYXN0IHR3byB3ZWVrcyBJIG5ldmVyIHdhbnQgdG8gd3JpdGUgQ1NTIGJ5IGhhbmQgYWdhaW4uIEkgd2FzIGEgc2tlcHRpYywgYnV0IHRoZSBoeXBlIGlzIHJlYWwuYCxcbiAgICB0d2VldFVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbHVrZXJlZHBhdGgvc3RhdHVzLzEzMTY1NDM1NzE2ODQ2NjMyOTg/cz0yMScsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnTHVrZSBSZWRwYXRoJyxcbiAgICAgIHJvbGU6ICdSdWJ5ICYgaU9TIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvbHVrZS1yZWRwYXRoLmpwZycpLmRlZmF1bHQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbnRlbnQ6XG4gICAgICBcIkkgZGlkbid0IHRoaW5rIEkgd2FzIGdvaW5nIHRvIGxpa2UgQHRhaWx3aW5kY3NzLi4uIHNwZW50IGEgZGF5IHVzaW5nIGl0IGZvciBhIFBPQywgbG92ZSBpdCEgSSB3aXNoIHRoaXMgaGFkIGJlZW4gYXJvdW5kIHdoZW4gd2Ugc3RhcnRlZCBvdXIgY29tcGFueSBkZXNpZ24gc3lzdGVtLCBzZXJpb3VzbHkgY29uc2lkZXJpbmcgYSBjb21wbGV0ZSByZWJ1aWxkXCIsXG4gICAgdHdlZXRVcmw6ICdodHRwczovL3R3aXR0ZXIuY29tL0pvbkJsb29tZXIvc3RhdHVzLzEzMDA5MjM4MTg2MjIzNzc5ODQnLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ0pvbiBCbG9vbWVyJyxcbiAgICAgIHJvbGU6ICdGcm9udC1FbmQgRGV2ZWxvcGVyJyxcbiAgICAgIGF2YXRhcjogcmVxdWlyZSgnQC9pbWcvYXZhdGFycy9qb24tYmxvb21lci5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb250ZW50OiAnQHRhaWx3aW5kY3NzIGxvb2tlZCB1bnBsZWFzYW50IGF0IGZpcnN0LCBidXQgbm93IEnigJltIGhvb2tlZCBvbiBpdC4nLFxuICAgIHR3ZWV0VXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9kcm9pZGdpbGxpbGFuZC9zdGF0dXMvMTIyMjczMzM3Mjg1NTg0ODk2MScsXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnQW5kcmV3IEdpbGxpbGFuZCcsXG4gICAgICByb2xlOiAnRnJvbnQtRW5kIERldmVsb3BlcicsXG4gICAgICBhdmF0YXI6IHJlcXVpcmUoJ0AvaW1nL2F2YXRhcnMvYW5kcmV3LWdpbGxpbGFuZC5qcGcnKS5kZWZhdWx0LFxuICAgIH0sXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIFRlc3RpbW9uaWFsKHsgdGVzdGltb25pYWwsIGJhc2UsIGluZGV4LCB0b3RhbCB9KSB7XG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oXG4gICAgYmFzZSxcbiAgICBbMCwgKDEwMCAvIHRvdGFsKSAqIChpbmRleCArIDEpLCAoMTAwIC8gdG90YWwpICogKGluZGV4ICsgMSksIDEwMF0sXG4gICAgWycwJScsIGAkeyhpbmRleCArIDEpICogLTEwMH0lYCwgYCR7dG90YWwgKiAxMDAgLSAoaW5kZXggKyAxKSAqIDEwMH0lYCwgJzAlJ11cbiAgKVxuICBjb25zdCBbc3RyYWlnaHQsIHNldFN0cmFpZ2h0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNvbG9yID0gY29sb3JzW09iamVjdC5rZXlzKGNvbG9ycylbaW5kZXggJSBPYmplY3Qua2V5cyhjb2xvcnMpLmxlbmd0aF1dXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmxpXG4gICAgICBjbGFzc05hbWU9XCJweC0zIG1kOnB4LTQgZmxleC1ub25lXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U3RyYWlnaHQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFN0cmFpZ2h0KGZhbHNlKX1cbiAgICAgIHN0eWxlPXt7IHggfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmZpZ3VyZVxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZC14bCBmbGV4LW5vbmUgdy04MCBtZDp3LXhsXCJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGFuaW1hdGU9e3N0cmFpZ2h0ID8geyByb3RhdGU6IDAgfSA6IHsgcm90YXRlOiByb3RhdGlvbltpbmRleCAlIHJvdGF0aW9uLmxlbmd0aF0gfX1cbiAgICAgID5cbiAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsIGJnLXdoaXRlIHB4LTYgcHktOCBtZDpwLTEwIHRleHQtbGcgbWQ6dGV4dC14bCBsZWFkaW5nLTggbWQ6bGVhZGluZy04IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCI0NVwiIGhlaWdodD1cIjM2XCIgY2xhc3NOYW1lPXtgbWItNSBmaWxsLWN1cnJlbnQgJHtjb2xvclsxXX1gfT5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuNDE1LjAwMUM2LjA3IDUuMTg1Ljg4NyAxMy42ODEuODg3IDIzLjA0MWMwIDcuNjMyIDQuNjA4IDEyLjA5NiA5LjkzNiAxMi4wOTYgNS4wNCAwIDguNzg0LTQuMDMyIDguNzg0LTguNzg0IDAtNC43NTItMy4zMTItOC4yMDgtNy42MzItOC4yMDgtLjg2NCAwLTIuMDE2LjE0NC0yLjMwNC4yODguNzItNC44OTYgNS4zMjgtMTAuNjU2IDkuOTM2LTEzLjUzNkwxMy40MTUuMDAxem0yNC43NjggMGMtNy4yIDUuMTg0LTEyLjM4NCAxMy42OC0xMi4zODQgMjMuMDQgMCA3LjYzMiA0LjYwOCAxMi4wOTYgOS45MzYgMTIuMDk2IDQuODk2IDAgOC43ODQtNC4wMzIgOC43ODQtOC43ODQgMC00Ljc1Mi0zLjQ1Ni04LjIwOC03Ljc3Ni04LjIwOC0uODY0IDAtMS44NzIuMTQ0LTIuMTYuMjg4LjcyLTQuODk2IDUuMTg0LTEwLjY1NiA5Ljc5Mi0xMy41MzZMMzguMTgzLjAwMXpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIHt0eXBlb2YgdGVzdGltb25pYWwuY29udGVudCA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICA8cD57dGVzdGltb25pYWwuY29udGVudH08L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRlc3RpbW9uaWFsLmNvbnRlbnRcbiAgICAgICAgICApfVxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDxmaWdjYXB0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHAtNiBtZDpweC0xMCBtZDpweS02IGJnLWdyYWRpZW50LXRvLWJyIHJvdW5kZWQtYi14bCBsZWFkaW5nLTYgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlICR7Y29sb3JbMF19YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctMTQgaC0xNCBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt0ZXN0aW1vbmlhbC5hdXRob3IuYXZhdGFyfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgcm91bmRlZC1mdWxsICR7Y29sb3JbMl19YH1cbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0b1wiPlxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLmF1dGhvci5yb2xlICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NvbG9yWzFdfT57dGVzdGltb25pYWwuYXV0aG9yLnJvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Rlc3RpbW9uaWFsLnR3ZWV0VXJsICYmIChcbiAgICAgICAgICAgIDxjaXRlIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXt0ZXN0aW1vbmlhbC50d2VldFVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3JpZ2luYWwgdHdlZXQgYnkge3Rlc3RpbW9uaWFsLmF1dGhvci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzNcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIuNDExIDYuNTg0Yy0xLjExMy40OTMtMi4zMDkuODI2LTMuNTY2Ljk3N2E2LjIyOCA2LjIyOCAwIDAwMi43My0zLjQzNyAxMi40IDEyLjQgMCAwMS0zLjk0NCAxLjUwNiA2LjIxMiA2LjIxMiAwIDAwLTEwLjc0NCA0LjI1M2MwIC40ODYuMDU2Ljk1OC4xNiAxLjQxNGExNy42MzggMTcuNjM4IDAgMDEtMTIuODAyLTYuNDkgNi4yMDggNi4yMDggMCAwMC0uODQgMy4xMjIgNi4yMTIgNi4yMTIgMCAwMDIuNzYyIDUuMTcgNi4xOTcgNi4xOTcgMCAwMS0yLjgxMy0uNzc3di4wOGMwIDMuMDEgMi4xNCA1LjUyIDQuOTgzIDYuMDkxYTYuMjU4IDYuMjU4IDAgMDEtMi44MDYuMTA3IDYuMjE1IDYuMjE1IDAgMDA1LjgwMyA0LjMxMiAxMi40NjQgMTIuNDY0IDAgMDEtNy43MTUgMi42NmMtLjUwMSAwLS45OTYtLjAzLTEuNDgyLS4wODdhMTcuNTY2IDE3LjU2NiAwIDAwOS41MiAyLjc5YzExLjQyNiAwIDE3LjY3My05LjQ2MyAxNy42NzMtMTcuNjcxIDAtLjI2Ny0uMDA3LS41MzYtLjAxOS0uODAzYTEyLjYyNyAxMi42MjcgMCAwMDMuMDk4LTMuMjEzbC4wMDItLjAwNHpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2NpdGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9tb3Rpb24uZmlndXJlPlxuICAgIDwvbW90aW9uLmxpPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XG4gIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICBjb25zdCB7IGluVmlldywgcmVmOiBpblZpZXdSZWYgfSA9IHVzZUluVmlldyh7IHRocmVzaG9sZDogMCwgcm9vdE1hcmdpbjogJzEwMHB4JyB9KVxuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDE1MClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5WaWV3KSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRyb2xzID0gYW5pbWF0ZSh4LCAxMDAsIHtcbiAgICAgIHR5cGU6ICd0d2VlbicsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdsaW5lYXInLFxuICAgICAgbG9vcDogSW5maW5pdHksXG4gICAgfSlcblxuICAgIHJldHVybiBjb250cm9scy5zdG9wXG4gIH0sIFtpblZpZXcsIHgsIGR1cmF0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17aW5WaWV3UmVmfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXREdXJhdGlvbigyNTApfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXREdXJhdGlvbigxNTApfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBib3R0b20tMS8yIGxlZnQtMCBiZy1ncmFkaWVudC10by10IGZyb20tZ3JheS0xMDAgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogNjA3LCBtYXhIZWlnaHQ6ICc1MHZoJyB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy1oaWRkZW4gLW15LThcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBweS04XCI+XG4gICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGVzdGltb25pYWxcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB0ZXN0aW1vbmlhbD17dGVzdGltb25pYWx9XG4gICAgICAgICAgICAgIGJhc2U9e3h9XG4gICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICB0b3RhbD17dGVzdGltb25pYWxzLmxlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==