webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/home/EditorTools.js":
/*!********************************************!*\
  !*** ./src/components/home/EditorTools.js ***!
  \********************************************/
/*! exports provided: EditorTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTools", function() { return EditorTools; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/common */ "./src/components/home/common.js");
/* harmony import */ var _components_GradientLockup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GradientLockup */ "./src/components/GradientLockup.js");
/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CodeWindow */ "./src/components/CodeWindow.js");
/* harmony import */ var _utils_gradients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/gradients */ "./src/utils/gradients.js");
/* harmony import */ var _EditorTools_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditorTools.module.css */ "./src/components/home/EditorTools.module.css");
/* harmony import */ var _EditorTools_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EditorTools_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _img_icons_home_editor_tools_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/img/icons/home/editor-tools.svg */ "./src/img/icons/home/editor-tools.svg");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tailwindcss/colors */ "./node_modules/tailwindcss/colors.js");
/* harmony import */ var tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dlv */ "./node_modules/dlv/dist/dlv.umd.js");
/* harmony import */ var dlv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dlv__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\projects\\tailwindcss\\tailwindcss.su\\src\\components\\home\\EditorTools.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var problems = [["'flex' applies the same CSS property as 'block'.", 'cssConflict [1, 20]'], ["'block' applies the same CSS property as 'flex'.", 'cssConflict [1, 54]']];
var completions = [//
['sm:', '@media (min-width: 640px)'], ['md:'], ['lg:'], ['xl:'], ['focus:'], ['group-hover:'], ['hover:'], ['container'], ['space-y-0'], ['space-x-0'], ['space-y-1'], ['space-x-1'], //
['bg-fixed', 'background-position: fixed;'], ['bg-local'], ['bg-scroll'], ['bg-clip-border'], ['bg-clip-padding'], ['bg-clip-content'], ['bg-clip-text'], ['bg-transparent', 'background-color: transparent;'], ['bg-current'], ['bg-black', '#000'], ['bg-white', '#fff'], ['bg-gray-50', tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.gray[50]], //
['bg-teal-50', "background-color: ".concat(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[50], ";"), tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[50]], ['bg-teal-100', "background-color: ".concat(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[100], ";"), tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[100]], ['bg-teal-200', "background-color: ".concat(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[200], ";"), tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[200]], ['bg-teal-300', "background-color: ".concat(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[300], ";"), tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[300]], ['bg-teal-400', "background-color: ".concat(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[400], ";"), tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[400]], ['bg-teal-500', undefined, tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[500]], ['bg-teal-600', undefined, tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[600]], ['bg-teal-700', undefined, tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[700]], ['bg-teal-800', undefined, tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[800]], ['bg-teal-900', undefined, tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a.teal[900]], ['bg-top']];
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
    "content": "__CONFLICT__"
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
    "content": "flex-1 truncate"
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
    "content": "flex items-center space-x-3"
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
    "content": "h3"
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
    "content": "text-gray-900 text-sm font-medium truncate"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": "Джейн Купер"
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "h3"
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
    "content": "span"
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
    "content": "__COMPLETION__"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": "Админ"
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "span"
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
    "content": "    "
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
    "content": "mt-1 text-gray-500 text-sm truncate"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": "Региональный техник парадигмы"
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
    "content": "  "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "img"
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
    "content": "w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "src"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "ixid=eyJhcHBfaWQiOjEyMDd9"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "auto=format"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "fit=facearea"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "facepad=4"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "w=256"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "h=256"
  }, {
    "types": ["tag", "attr-value", "entity"],
    "content": "&amp;"
  }, {
    "types": ["tag", "attr-value"],
    "content": "q=60"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "alt"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
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
    "content": ""
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
    "content": "border-t border-gray-200"
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
    "content": "-mt-px flex"
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
    "content": "w-0 flex-1 flex border-r border-gray-200"
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
    "content": "a"
  }, {
    "types": ["tag"],
    "content": " "
  }, {
    "types": ["tag", "attr-name"],
    "content": "href"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "#"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
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
    "content": "relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
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
    "content": "w-5 h-5 text-gray-400"
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
    "content": "          "
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
    "content": "d"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
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
    "content": "          "
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
    "content": "d"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "="
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "attr-value"],
    "content": "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
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
    "content": "        "
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
    "content": "        "
  }, {
    "types": ["tag", "punctuation"],
    "content": "<"
  }, {
    "types": ["tag"],
    "content": "span"
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
    "content": "ml-3"
  }, {
    "types": ["tag", "attr-value", "punctuation"],
    "content": "\""
  }, {
    "types": ["tag", "punctuation"],
    "content": ">"
  }, {
    "types": ["plain"],
    "content": "Эл. почта"
  }, {
    "types": ["tag", "punctuation"],
    "content": "</"
  }, {
    "types": ["tag"],
    "content": "span"
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
    "content": "a"
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
  }]]
},
    lines = _lines.lines;

function CompletionDemo() {
  _s();

  var _this = this;

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"])({
    threshold: 0.5,
    triggerOnce: true
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  return __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"].Code2, {
    ref: ref,
    lines: lines.length,
    overflow: false,
    className: "overflow-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, lines.map(function (tokens, lineIndex) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: lineIndex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, tokens.map(function (token, tokenIndex) {
      if (token.content === '__CONFLICT__') {
        return __jsx("span", {
          key: tokenIndex,
          className: Object(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["getClassNameForToken"])(token),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }
        }, "w-full", ' ', __jsx("span", {
          className: "inline-flex bg-squiggle bg-repeat-x bg-left-bottom",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 19
          }
        }, "flex"), ' ', "items-center justify-between", ' ', __jsx("span", {
          className: "inline-flex bg-squiggle bg-repeat-x bg-left-bottom",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 19
          }
        }, "block"), ' ', "p-6 space-x-6");
      }

      if (token.content === '__COMPLETION__') {
        return __jsx(Completion, {
          key: tokenIndex,
          inView: inView,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 22
          }
        });
      }

      if (token.types[token.types.length - 1] === 'attr-value' && tokens[tokenIndex - 3].content === 'class') {
        return __jsx("span", {
          key: tokenIndex,
          className: Object(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["getClassNameForToken"])(token),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 17
          }
        }, token.content.split(' ').map(function (c, i) {
          var space = i === 0 ? '' : ' ';

          if (/^(bg|text|border)-/.test(c)) {
            var color = dlv__WEBPACK_IMPORTED_MODULE_10___default()(tailwindcss_colors__WEBPACK_IMPORTED_MODULE_9___default.a, c.replace(/^(bg|text|border)-/, '').split('-'));

            if (color) {
              return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                key: i,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 27
                }
              }, space, __jsx("span", {
                className: "inline-flex w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm shadow-px relative top-px mr-0.5 md:mr-1",
                style: {
                  background: color
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 29
                }
              }), c);
            }
          }

          return space + c;
        }));
      }

      return __jsx("span", {
        key: tokenIndex,
        className: Object(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["getClassNameForToken"])(token),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 15
        }
      }, token.content);
    }), '\n');
  }));
}

_s(CompletionDemo, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function () {
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["useInView"]];
});

_c = CompletionDemo;

function Completion(_ref) {
  _s2();

  var _this2 = this;

  var inView = _ref.inView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      typed = _useState[0],
      setTyped = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      selectedCompletionIndex = _useState2[0],
      setSelectedCompletionIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      stage = _useState3[0],
      setStage = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (inView) {
      setStage(0);
    }
  }, [inView]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typed === ' bg-t') {
      var i = 0;
      var id = window.setInterval(function () {
        if (i === 5) {
          setStage(1);
          setTyped('');
          setSelectedCompletionIndex(0);
          return window.clearInterval(id);
        }

        i++;
        setSelectedCompletionIndex(i);
      }, 300);
      return function () {
        return window.clearInterval(id);
      };
    }
  }, [typed]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id;

    if (stage === 1) {
      id = window.setTimeout(function () {
        setStage(2);
      }, 2000);
    } else if (stage === 2 || stage === 3 || stage === 4 || stage === 5) {
      id = window.setTimeout(function () {
        setStage(stage + 1);
      }, 300);
    } else if (stage === 6) {
      id = window.setTimeout(function () {
        setStage(-1);
        setStage(0);
      }, 2000);
    }

    return function () {
      window.clearTimeout(id);
    };
  }, [stage]);
  return __jsx("span", {
    className: "text-code-attr-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, "text-teal-600", stage >= 0 && stage < 2 && ' bg-t'.split('').map(function (char, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].span, {
      key: i,
      initial: {
        display: 'none'
      },
      animate: {
        display: 'inline'
      },
      transition: {
        delay: (i + 1) * 0.3
      },
      onAnimationComplete: function onAnimationComplete() {
        return setTyped(typed + char);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, char);
  }), stage === 1 && 'eal-400', (stage < 2 || stage === 6) && __jsx("span", {
    className: "border -mx-px h-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 38
    }
  }), stage >= 2 && stage <= 5 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: stage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, stage < 5 && ' ', stage >= 4 && __jsx("span", {
    className: "relative border -mx-px h-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 26
    }
  }), stage === 5 && __jsx("span", {
    className: "inline-flex",
    style: {
      background: 'rgba(81, 92, 126, 0.4)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, "\xA0"), __jsx("span", {
    className: "inline-flex",
    style: {
      background: stage >= 4 ? 'rgba(81, 92, 126, 0.4)' : undefined
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, "bg-"), stage === 3 && __jsx("span", {
    className: "relative border -mx-px h-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 27
    }
  }), __jsx("span", {
    className: "inline-flex",
    style: {
      background: stage >= 3 ? 'rgba(81, 92, 126, 0.4)' : undefined
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, "teal-"), stage === 2 && __jsx("span", {
    className: "relative border -mx-px h-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  }), __jsx("span", {
    className: "inline-flex",
    style: {
      background: stage >= 2 ? 'rgba(81, 92, 126, 0.4)' : undefined
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, "400")), typed && __jsx("span", {
    className: "relative z-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "absolute top-full left-full m-0.5 -ml-16 sm:ml-0.5 rounded-md shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative w-96 bg-light-blue-800 border border-black overflow-hidden rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-black bg-opacity-75 absolute inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }), __jsx("ul", {
    className: "relative leading-5 text-white py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }, completions.filter(function (completion) {
    return completion[0].startsWith(typed.trim());
  }).slice(0, 12).map(function (completion, i) {
    return __jsx("li", {
      key: completion[0],
      className: "pl-2.5 pr-3 flex items-center space-x-1.5 ".concat(i === selectedCompletionIndex ? 'bg-white bg-opacity-10' : ''),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "w-4 flex-none flex justify-center",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 23
      }
    }, completion[2] ? __jsx("span", {
      className: "flex-none w-3 h-3 rounded-sm shadow-px",
      style: {
        background: completion[2]
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }) : __jsx("svg", {
      width: "16",
      height: "10",
      fill: "none",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 27
      }
    }, __jsx("rect", {
      x: ".5",
      y: ".5",
      width: "15",
      height: "9",
      rx: "1.5",
      stroke: "#9FA6B2",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 29
      }
    }), __jsx("path", {
      fill: "#9FA6B2",
      d: "M4 3h8v1H4zM4 6h8v1H4z",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 29
      }
    }))), __jsx("span", {
      className: "flex-none",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 23
      }
    }, completion[0].split(new RegExp("(^".concat(typed.trim(), ")"))).map(function (part, j) {
      return part ? j % 2 === 0 ? part : __jsx("span", {
        key: j,
        className: "text-teal-300",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 31
        }
      }, part) : null;
    })), i === selectedCompletionIndex && completion[1] ? __jsx("span", {
      className: "hidden sm:block flex-auto text-right text-gray-500 truncate pl-4",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 25
      }
    }, completion[1]) : null);
  }))))));
}

_s2(Completion, "BhWsqDqAt1DpMh0tq9vMqeRS10k=");

_c2 = Completion;
function EditorTools() {
  var _this3 = this;

  return __jsx("section", {
    id: "editor-tools",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }
  }, __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["IconContainer"], {
    className: "".concat(_utils_gradients__WEBPACK_IMPORTED_MODULE_4__["gradients"].lightblue[0], " mb-8"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, __jsx(_img_icons_home_editor_tools_svg__WEBPACK_IMPORTED_MODULE_7__["ReactComponent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  })), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Caption"], {
    as: "h2",
    className: "text-light-blue-600 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }, "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430"), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["BigText"], {
    className: "mb-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F IDE \u043C\u0438\u0440\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430."), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    as: "div",
    className: "mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, "\u0411\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u0435\u0441\u044C \u043E \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u044D\u0442\u0438 \u0438\u043C\u0435\u043D\u0430 \u043A\u043B\u0430\u0441\u0441\u043E\u0432? \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 Tailwind CSS IntelliSense \u0434\u043B\u044F VS Code \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u043C."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 11
    }
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F, \u043B\u0438\u043D\u0442\u0438\u043D\u0433, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u043E\u0432 \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u0432 \u0412\u0430\u0448\u0435\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435 \u0438 \u0431\u0435\u0437 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438.")), __jsx(_components_home_common__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/docs/intellisense",
    className: "text-light-blue-600 hover:text-light-blue-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 ->")), __jsx(_components_GradientLockup__WEBPACK_IMPORTED_MODULE_2__["GradientLockup"], {
    color: "lightblue",
    rotate: 2,
    left: __jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_3__["CodeWindow"], {
      className: "bg-light-blue-500 ".concat(_EditorTools_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.code),
      lineNumbersBackground: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "flex-auto flex min-h-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-none w-14 bg-white bg-opacity-10 flex flex-col items-center justify-between pt-3.5 pb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 15
      }
    }, __jsx("svg", {
      width: "24",
      height: "216",
      fill: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 17
      }
    }, __jsx("path", {
      d: "M3 69l6-6m-2-5a7 7 0 1014 0 7 7 0 00-14 0z",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      opacity: ".5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 19
      }
    }), __jsx("path", {
      d: "M8 7H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-3m3.707-10.293l-3.414-3.414A1 1 0 0015.586 3H9a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7.414a1 1 0 00-.293-.707zM7 103a2 2 0 100-4 2 2 0 000 4zm0 0v10m10-6a2 2 0 100-4 2 2 0 000 4zm0 0a3 3 0 01-3 3h-4a3 3 0 00-3 3m0 0a2 2 0 100 4 2 2 0 000-4z",
      stroke: "#fff",
      strokeWidth: "1.5",
      opacity: ".5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 19
      }
    }), __jsx("path", {
      d: "M11.5 160.031a.75.75 0 00-1-1.118l1 1.118zm-8-1.118a.75.75 0 00-1 1.118l1-1.118zm6.972 6.149a.75.75 0 10.993-1.124l-.993 1.124zm-7.937-1.124a.75.75 0 10.993 1.124l-.993-1.124zm7.022-.368l-.64-.393.64.393zm-5.114 0l.64-.393-.64.393zM3 161.25a.75.75 0 000 1.5v-1.5zm8 1.5a.75.75 0 000-1.5v1.5zM8 147l.372-.651A.75.75 0 007.25 147H8zm14 8l.372.651a.75.75 0 000-1.302L22 155zm-14.75 0a.75.75 0 001.5 0h-1.5zm5.378 4.492a.75.75 0 10.744 1.302l-.744-1.302zM7 157.75A2.25 2.25 0 019.25 160h1.5A3.75 3.75 0 007 156.25v1.5zm0-1.5A3.75 3.75 0 003.25 160h1.5A2.25 2.25 0 017 157.75v-1.5zm2.624 3.298A5.225 5.225 0 017 160.25v1.5a6.73 6.73 0 003.376-.903l-.752-1.299zM9.25 160v.197h1.5V160h-1.5zm0 .197V162h1.5v-1.803h-1.5zM7 160.25a5.225 5.225 0 01-2.624-.702l-.752 1.299A6.73 6.73 0 007 161.75v-1.5zM4.75 162v-1.803h-1.5V162h1.5zm0-1.803V160h-1.5v.197h1.5zm5.75-1.284a5.209 5.209 0 01-.876.635l.752 1.299c.403-.234.78-.507 1.124-.816l-1-1.118zm-6.124.635a5.21 5.21 0 01-.876-.635l-1 1.118c.344.309.721.582 1.124.816l.752-1.299zm4.86 4.701c.451.212.867.487 1.236.813l.993-1.124a6.77 6.77 0 00-1.588-1.046l-.64 1.357zM9.25 162c0 .433-.122.835-.332 1.177l1.277.787A3.737 3.737 0 0010.75 162h-1.5zm-.332 1.177A2.247 2.247 0 017 164.25v1.5a3.748 3.748 0 003.195-1.786l-1.277-.787zm-5.39 1.885a5.25 5.25 0 011.235-.813l-.64-1.357a6.77 6.77 0 00-1.588 1.046l.993 1.124zM7 164.25c-.81 0-1.52-.427-1.918-1.073l-1.277.787A3.748 3.748 0 007 165.75v-1.5zm-1.918-1.073A2.235 2.235 0 014.75 162h-1.5c0 .719.203 1.392.555 1.964l1.277-.787zM4 161.25H3v1.5h1v-1.5zm7 0h-1v1.5h1v-1.5zm-3.372-13.599l14 8 .744-1.302-14-8-.744 1.302zM8.75 155v-8h-1.5v8h1.5zm12.878-.651l-9 5.143.744 1.302 9-5.143-.744-1.302z",
      fill: "#fff",
      opacity: ".5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 19
      }
    }), __jsx("path", {
      d: "M3 205h8m-8 0v7a1 1 0 001 1h7m-8-8v-7a1 1 0 011-1h6a1 1 0 011 1v7m0 0v8m0-8h7a1 1 0 011 1v6a1 1 0 01-1 1h-7m4-11h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1z",
      stroke: "#fff",
      strokeWidth: "1.5",
      opacity: ".5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 19
      }
    })), __jsx("svg", {
      width: "24",
      height: "72",
      fill: "none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 17
      }
    }, __jsx("path", {
      d: "M10.325 52.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      stroke: "#fff",
      strokeOpacity: ".5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 19
      }
    }), __jsx("path", {
      d: "M15 60a3 3 0 11-6 0 3 3 0 016 0zM5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      stroke: "#fff",
      strokeOpacity: ".5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 19
      }
    }))), __jsx("div", {
      className: "flex-auto flex flex-col min-w-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 15
      }
    }, __jsx(CompletionDemo, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "border-t border-white border-opacity-10 font-mono text-xs text-white p-4 space-y-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 19
      }
    }, "Problems"), __jsx("ul", {
      className: "leading-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 19
      }
    }, problems.map(function (problem, i) {
      return __jsx("li", {
        key: i,
        className: "flex min-w-0",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 23
        }
      }, __jsx("svg", {
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        className: "flex-none text-amber-400",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 25
        }
      }, __jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 27
        }
      })), __jsx("p", {
        className: "truncate ml-1",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 25
        }
      }, problem[0]), __jsx("p", {
        className: "hidden sm:block flex-none opacity-50",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 25
        }
      }, "\xA0", problem[1]));
    })))))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }
  }));
}
_c3 = EditorTools;

var _c, _c2, _c3;

$RefreshReg$(_c, "CompletionDemo");
$RefreshReg$(_c2, "Completion");
$RefreshReg$(_c3, "EditorTools");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9FZGl0b3JUb29scy5qcyJdLCJuYW1lcyI6WyJwcm9ibGVtcyIsImNvbXBsZXRpb25zIiwiY29sb3JzIiwiZ3JheSIsInRlYWwiLCJ1bmRlZmluZWQiLCJsaW5lcyIsIkNvbXBsZXRpb25EZW1vIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwidHJpZ2dlck9uY2UiLCJyZWYiLCJpblZpZXciLCJsZW5ndGgiLCJtYXAiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJjb250ZW50IiwiZ2V0Q2xhc3NOYW1lRm9yVG9rZW4iLCJ0eXBlcyIsInNwbGl0IiwiYyIsImkiLCJzcGFjZSIsInRlc3QiLCJjb2xvciIsImRsdiIsInJlcGxhY2UiLCJiYWNrZ3JvdW5kIiwiQ29tcGxldGlvbiIsInVzZVN0YXRlIiwidHlwZWQiLCJzZXRUeXBlZCIsInNlbGVjdGVkQ29tcGxldGlvbkluZGV4Iiwic2V0U2VsZWN0ZWRDb21wbGV0aW9uSW5kZXgiLCJzdGFnZSIsInNldFN0YWdlIiwidXNlRWZmZWN0IiwiaWQiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hhciIsImRpc3BsYXkiLCJkZWxheSIsImZpbHRlciIsImNvbXBsZXRpb24iLCJzdGFydHNXaXRoIiwidHJpbSIsInNsaWNlIiwiUmVnRXhwIiwicGFydCIsImoiLCJFZGl0b3JUb29scyIsImdyYWRpZW50cyIsImxpZ2h0Ymx1ZSIsInN0eWxlcyIsImNvZGUiLCJwcm9ibGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2YsQ0FBQyxrREFBRCxFQUFxRCxxQkFB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QXJCRixDQURGO0FBOEdEO01BL0dlTCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5MmQ3MmMyM2ExNzdmOGZmYTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQ29udGFpbmVyLCBDYXB0aW9uLCBCaWdUZXh0LCBQYXJhZ3JhcGgsIExpbmsgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9jb21tb24nXG5pbXBvcnQgeyBHcmFkaWVudExvY2t1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9HcmFkaWVudExvY2t1cCdcbmltcG9ydCB7IENvZGVXaW5kb3csIGdldENsYXNzTmFtZUZvclRva2VuIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvZGVXaW5kb3cnXG5pbXBvcnQgeyBncmFkaWVudHMgfSBmcm9tICdAL3V0aWxzL2dyYWRpZW50cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FZGl0b3JUb29scy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdG9rZW5pemVXaXRoTGluZXMgfSBmcm9tICcuLi8uLi9tYWNyb3MvdG9rZW5pemUubWFjcm8nXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEljb24gfSBmcm9tICdAL2ltZy9pY29ucy9ob21lL2VkaXRvci10b29scy5zdmcnXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXG5pbXBvcnQgY29sb3JzIGZyb20gJ3RhaWx3aW5kY3NzL2NvbG9ycydcbmltcG9ydCBkbHYgZnJvbSAnZGx2J1xuXG5jb25zdCBwcm9ibGVtcyA9IFtcbiAgW1wiJ2ZsZXgnIGFwcGxpZXMgdGhlIHNhbWUgQ1NTIHByb3BlcnR5IGFzICdibG9jaycuXCIsICdjc3NDb25mbGljdCBbMSwgMjBdJ10sXG4gIFtcIidibG9jaycgYXBwbGllcyB0aGUgc2FtZSBDU1MgcHJvcGVydHkgYXMgJ2ZsZXgnLlwiLCAnY3NzQ29uZmxpY3QgWzEsIDU0XSddLFxuXVxuXG5jb25zdCBjb21wbGV0aW9ucyA9IFtcbiAgLy9cbiAgWydzbTonLCAnQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSddLFxuICBbJ21kOiddLFxuICBbJ2xnOiddLFxuICBbJ3hsOiddLFxuICBbJ2ZvY3VzOiddLFxuICBbJ2dyb3VwLWhvdmVyOiddLFxuICBbJ2hvdmVyOiddLFxuICBbJ2NvbnRhaW5lciddLFxuICBbJ3NwYWNlLXktMCddLFxuICBbJ3NwYWNlLXgtMCddLFxuICBbJ3NwYWNlLXktMSddLFxuICBbJ3NwYWNlLXgtMSddLFxuICAvL1xuICBbJ2JnLWZpeGVkJywgJ2JhY2tncm91bmQtcG9zaXRpb246IGZpeGVkOyddLFxuICBbJ2JnLWxvY2FsJ10sXG4gIFsnYmctc2Nyb2xsJ10sXG4gIFsnYmctY2xpcC1ib3JkZXInXSxcbiAgWydiZy1jbGlwLXBhZGRpbmcnXSxcbiAgWydiZy1jbGlwLWNvbnRlbnQnXSxcbiAgWydiZy1jbGlwLXRleHQnXSxcbiAgWydiZy10cmFuc3BhcmVudCcsICdiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsnXSxcbiAgWydiZy1jdXJyZW50J10sXG4gIFsnYmctYmxhY2snLCAnIzAwMCddLFxuICBbJ2JnLXdoaXRlJywgJyNmZmYnXSxcbiAgWydiZy1ncmF5LTUwJywgY29sb3JzLmdyYXlbNTBdXSxcbiAgLy9cbiAgWydiZy10ZWFsLTUwJywgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnRlYWxbNTBdfTtgLCBjb2xvcnMudGVhbFs1MF1dLFxuICBbJ2JnLXRlYWwtMTAwJywgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnRlYWxbMTAwXX07YCwgY29sb3JzLnRlYWxbMTAwXV0sXG4gIFsnYmctdGVhbC0yMDAnLCBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMudGVhbFsyMDBdfTtgLCBjb2xvcnMudGVhbFsyMDBdXSxcbiAgWydiZy10ZWFsLTMwMCcsIGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy50ZWFsWzMwMF19O2AsIGNvbG9ycy50ZWFsWzMwMF1dLFxuICBbJ2JnLXRlYWwtNDAwJywgYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLnRlYWxbNDAwXX07YCwgY29sb3JzLnRlYWxbNDAwXV0sXG4gIFsnYmctdGVhbC01MDAnLCB1bmRlZmluZWQsIGNvbG9ycy50ZWFsWzUwMF1dLFxuICBbJ2JnLXRlYWwtNjAwJywgdW5kZWZpbmVkLCBjb2xvcnMudGVhbFs2MDBdXSxcbiAgWydiZy10ZWFsLTcwMCcsIHVuZGVmaW5lZCwgY29sb3JzLnRlYWxbNzAwXV0sXG4gIFsnYmctdGVhbC04MDAnLCB1bmRlZmluZWQsIGNvbG9ycy50ZWFsWzgwMF1dLFxuICBbJ2JnLXRlYWwtOTAwJywgdW5kZWZpbmVkLCBjb2xvcnMudGVhbFs5MDBdXSxcbiAgWydiZy10b3AnXSxcbl1cblxuY29uc3QgeyBsaW5lcyB9ID0gdG9rZW5pemVXaXRoTGluZXMuaHRtbChgPGRpdiBjbGFzcz1cIl9fQ09ORkxJQ1RfX1wiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC0xIHRydW5jYXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgPGgzIGNsYXNzPVwidGV4dC1ncmF5LTkwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRydW5jYXRlXCI+0JTQttC10LnQvSDQmtGD0L/QtdGAPC9oMz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiX19DT01QTEVUSU9OX19cIj7QkNC00LzQuNC9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwibXQtMSB0ZXh0LWdyYXktNTAwIHRleHQtc20gdHJ1bmNhdGVcIj7QoNC10LPQuNC+0L3QsNC70YzQvdGL0Lkg0YLQtdGF0L3QuNC6INC/0LDRgNCw0LTQuNCz0LzRizwvcD5cbiAgPC9kaXY+XG4gIDxpbWcgY2xhc3M9XCJ3LTEwIGgtMTAgYmctZ3JheS0zMDAgcm91bmRlZC1mdWxsIGZsZXgtc2hyaW5rLTBcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5NDc5MDEwODM3Ny1iZTljMjliMjkzMzA/aXhsaWI9cmItMS4yLjEmYW1wO2l4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYW1wO2F1dG89Zm9ybWF0JmFtcDtmaXQ9ZmFjZWFyZWEmYW1wO2ZhY2VwYWQ9NCZhbXA7dz0yNTYmYW1wO2g9MjU2JmFtcDtxPTYwXCIgYWx0PVwiXCI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgPGRpdiBjbGFzcz1cIi1tdC1weCBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cInctMCBmbGV4LTEgZmxleCBib3JkZXItciBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyZWxhdGl2ZSAtbXItcHggdy0wIGZsZXgtMSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLWJsLWxnIGhvdmVyOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lLWJsdWUgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIGZvY3VzOnotMTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTBcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cInctNSBoLTUgdGV4dC1ncmF5LTQwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMi4wMDMgNS44ODRMMTAgOS44ODJsNy45OTctMy45OThBMiAyIDAgMDAxNiA0SDRhMiAyIDAgMDAtMS45OTcgMS44ODR6XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE4IDguMTE4bC04IDQtOC00VjE0YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjguMTE4elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTNcIj7QrdC7LiDQv9C+0YfRgtCwPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmApXG5cbmZ1bmN0aW9uIENvbXBsZXRpb25EZW1vKCkge1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAuNSwgdHJpZ2dlck9uY2U6IHRydWUgfSlcblxuICByZXR1cm4gKFxuICAgIDxDb2RlV2luZG93LkNvZGUyIHJlZj17cmVmfSBsaW5lcz17bGluZXMubGVuZ3RofSBvdmVyZmxvdz17ZmFsc2V9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAge2xpbmVzLm1hcCgodG9rZW5zLCBsaW5lSW5kZXgpID0+IChcbiAgICAgICAgPEZyYWdtZW50IGtleT17bGluZUluZGV4fT5cbiAgICAgICAgICB7dG9rZW5zLm1hcCgodG9rZW4sIHRva2VuSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50ID09PSAnX19DT05GTElDVF9fJykge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dG9rZW5JbmRleH0gY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVGb3JUb2tlbih0b2tlbil9PlxuICAgICAgICAgICAgICAgICAgdy1mdWxseycgJ31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJnLXNxdWlnZ2xlIGJnLXJlcGVhdC14IGJnLWxlZnQtYm90dG9tXCI+ZmxleDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBiZy1zcXVpZ2dsZSBiZy1yZXBlYXQteCBiZy1sZWZ0LWJvdHRvbVwiPmJsb2NrPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICBwLTYgc3BhY2UteC02XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50ID09PSAnX19DT01QTEVUSU9OX18nKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8Q29tcGxldGlvbiBrZXk9e3Rva2VuSW5kZXh9IGluVmlldz17aW5WaWV3fSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRva2VuLnR5cGVzW3Rva2VuLnR5cGVzLmxlbmd0aCAtIDFdID09PSAnYXR0ci12YWx1ZScgJiZcbiAgICAgICAgICAgICAgdG9rZW5zW3Rva2VuSW5kZXggLSAzXS5jb250ZW50ID09PSAnY2xhc3MnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3Rva2VuSW5kZXh9IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lRm9yVG9rZW4odG9rZW4pfT5cbiAgICAgICAgICAgICAgICAgIHt0b2tlbi5jb250ZW50LnNwbGl0KCcgJykubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gaSA9PT0gMCA/ICcnIDogJyAnXG4gICAgICAgICAgICAgICAgICAgIGlmICgvXihiZ3x0ZXh0fGJvcmRlciktLy50ZXN0KGMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBkbHYoY29sb3JzLCBjLnJlcGxhY2UoL14oYmd8dGV4dHxib3JkZXIpLS8sICcnKS5zcGxpdCgnLScpKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NwYWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCB3LTIuNSBoLTIuNSBtZDp3LTMgbWQ6aC0zIHJvdW5kZWQtc20gc2hhZG93LXB4IHJlbGF0aXZlIHRvcC1weCBtci0wLjUgbWQ6bXItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzcGFjZSArIGNcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e3Rva2VuSW5kZXh9IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lRm9yVG9rZW4odG9rZW4pfT5cbiAgICAgICAgICAgICAgICB7dG9rZW4uY29udGVudH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHsnXFxuJ31cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvQ29kZVdpbmRvdy5Db2RlMj5cbiAgKVxufVxuXG5mdW5jdGlvbiBDb21wbGV0aW9uKHsgaW5WaWV3IH0pIHtcbiAgY29uc3QgW3R5cGVkLCBzZXRUeXBlZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlbGVjdGVkQ29tcGxldGlvbkluZGV4LCBzZXRTZWxlY3RlZENvbXBsZXRpb25JbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbc3RhZ2UsIHNldFN0YWdlXSA9IHVzZVN0YXRlKC0xKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgc2V0U3RhZ2UoMClcbiAgICB9XG4gIH0sIFtpblZpZXddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVkID09PSAnIGJnLXQnKSB7XG4gICAgICBsZXQgaSA9IDBcbiAgICAgIGxldCBpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgICAgc2V0U3RhZ2UoMSlcbiAgICAgICAgICBzZXRUeXBlZCgnJylcbiAgICAgICAgICBzZXRTZWxlY3RlZENvbXBsZXRpb25JbmRleCgwKVxuICAgICAgICAgIHJldHVybiB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZClcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICAgICAgc2V0U2VsZWN0ZWRDb21wbGV0aW9uSW5kZXgoaSlcbiAgICAgIH0sIDMwMClcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZClcbiAgICB9XG4gIH0sIFt0eXBlZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaWRcbiAgICBpZiAoc3RhZ2UgPT09IDEpIHtcbiAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTdGFnZSgyKVxuICAgICAgfSwgMjAwMClcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSAyIHx8IHN0YWdlID09PSAzIHx8IHN0YWdlID09PSA0IHx8IHN0YWdlID09PSA1KSB7XG4gICAgICBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3RhZ2Uoc3RhZ2UgKyAxKVxuICAgICAgfSwgMzAwKVxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IDYpIHtcbiAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTdGFnZSgtMSlcbiAgICAgICAgc2V0U3RhZ2UoMClcbiAgICAgIH0sIDIwMDApXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKVxuICAgIH1cbiAgfSwgW3N0YWdlXSlcblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29kZS1hdHRyLXZhbHVlXCI+XG4gICAgICB0ZXh0LXRlYWwtNjAwXG4gICAgICB7c3RhZ2UgPj0gMCAmJlxuICAgICAgICBzdGFnZSA8IDIgJiZcbiAgICAgICAgJyBiZy10Jy5zcGxpdCgnJykubWFwKChjaGFyLCBpKSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBpbml0aWFsPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBkaXNwbGF5OiAnaW5saW5lJyB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogKGkgKyAxKSAqIDAuMyB9fVxuICAgICAgICAgICAgb25BbmltYXRpb25Db21wbGV0ZT17KCkgPT4gc2V0VHlwZWQodHlwZWQgKyBjaGFyKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hhcn1cbiAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICApKX1cbiAgICAgIHtzdGFnZSA9PT0gMSAmJiAnZWFsLTQwMCd9XG4gICAgICB7KHN0YWdlIDwgMiB8fCBzdGFnZSA9PT0gNikgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyIC1teC1weCBoLTVcIiAvPn1cbiAgICAgIHtzdGFnZSA+PSAyICYmIHN0YWdlIDw9IDUgJiYgKFxuICAgICAgICA8RnJhZ21lbnQga2V5PXtzdGFnZX0+XG4gICAgICAgICAge3N0YWdlIDwgNSAmJiAnICd9XG4gICAgICAgICAge3N0YWdlID49IDQgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyIC1teC1weCBoLTVcIiAvPn1cbiAgICAgICAgICB7c3RhZ2UgPT09IDUgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiYSg4MSwgOTIsIDEyNiwgMC40KScgfX0+XG4gICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHN0YWdlID49IDQgPyAncmdiYSg4MSwgOTIsIDEyNiwgMC40KScgOiB1bmRlZmluZWQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBiZy1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3N0YWdlID09PSAzICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlciAtbXgtcHggaC01XCIgLz59XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHN0YWdlID49IDMgPyAncmdiYSg4MSwgOTIsIDEyNiwgMC40KScgOiB1bmRlZmluZWQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB0ZWFsLVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7c3RhZ2UgPT09IDIgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgYm9yZGVyIC1teC1weCBoLTVcIiAvPn1cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogc3RhZ2UgPj0gMiA/ICdyZ2JhKDgxLCA5MiwgMTI2LCAwLjQpJyA6IHVuZGVmaW5lZCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDQwMFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7dHlwZWQgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LWZ1bGwgbS0wLjUgLW1sLTE2IHNtOm1sLTAuNSByb3VuZGVkLW1kIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTk2IGJnLWxpZ2h0LWJsdWUtODAwIGJvcmRlciBib3JkZXItYmxhY2sgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTc1IGFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgbGVhZGluZy01IHRleHQtd2hpdGUgcHktMlwiPlxuICAgICAgICAgICAgICAgIHtjb21wbGV0aW9uc1xuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoY29tcGxldGlvbikgPT4gY29tcGxldGlvblswXS5zdGFydHNXaXRoKHR5cGVkLnRyaW0oKSkpXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTIpXG4gICAgICAgICAgICAgICAgICAubWFwKChjb21wbGV0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tcGxldGlvblswXX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwbC0yLjUgcHItMyBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEuNSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9PT0gc2VsZWN0ZWRDb21wbGV0aW9uSW5kZXggPyAnYmctd2hpdGUgYmctb3BhY2l0eS0xMCcgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy00IGZsZXgtbm9uZSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGxldGlvblsyXSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LW5vbmUgdy0zIGgtMyByb3VuZGVkLXNtIHNoYWRvdy1weFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29tcGxldGlvblsyXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTBcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIuNVwiIHk9XCIuNVwiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCI5XCIgcng9XCIxLjVcIiBzdHJva2U9XCIjOUZBNkIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzlGQTZCMlwiIGQ9XCJNNCAzaDh2MUg0ek00IDZoOHYxSDR6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21wbGV0aW9uWzBdLnNwbGl0KG5ldyBSZWdFeHAoYCheJHt0eXBlZC50cmltKCl9KWApKS5tYXAoKHBhcnQsIGopID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAlIDIgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17an0gY2xhc3NOYW1lPVwidGV4dC10ZWFsLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7aSA9PT0gc2VsZWN0ZWRDb21wbGV0aW9uSW5kZXggJiYgY29tcGxldGlvblsxXSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBmbGV4LWF1dG8gdGV4dC1yaWdodCB0ZXh0LWdyYXktNTAwIHRydW5jYXRlIHBsLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBsZXRpb25bMV19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRWRpdG9yVG9vbHMoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJlZGl0b3ItdG9vbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IG1kOnB4LTggbWItMTAgc206bWItMTYgbWQ6bWItMjBcIj5cbiAgICAgICAgPEljb25Db250YWluZXIgY2xhc3NOYW1lPXtgJHtncmFkaWVudHMubGlnaHRibHVlWzBdfSBtYi04YH0+XG4gICAgICAgICAgPEljb24gLz5cbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICA8Q2FwdGlvbiBhcz1cImgyXCIgY2xhc3NOYW1lPVwidGV4dC1saWdodC1ibHVlLTYwMCBtYi0zXCI+XG4gICAgICAgICAg0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDRgNC10LTQsNC60YLQvtGA0LBcbiAgICAgICAgPC9DYXB0aW9uPlxuICAgICAgICA8QmlnVGV4dCBjbGFzc05hbWU9XCJtYi04XCI+0JjQvdGC0LXQs9GA0LDRhtC40Y8gSURFINC80LjRgNC+0LLQvtCz0L4g0LrQu9Cw0YHRgdCwLjwvQmlnVGV4dD5cbiAgICAgICAgPFBhcmFncmFwaCBhcz1cImRpdlwiIGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINCR0LXRgdC/0L7QutC+0LjRgtC10YHRjCDQviDRgtC+0LwsINGH0YLQvtCx0Ysg0LfQsNC/0L7QvNC90LjRgtGMINCy0YHQtSDRjdGC0Lgg0LjQvNC10L3QsCDQutC70LDRgdGB0L7Qsj8g0KDQsNGB0YjQuNGA0LXQvdC40LUgVGFpbHdpbmQgQ1NTIEludGVsbGlTZW5zZSDQtNC70Y8gVlMgQ29kZSDQv9C+0LzQvtC20LXRgiDQktCw0LwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAg0J/QvtC70YPRh9Cw0LnRgtC1INC40L3RgtC10LvQu9C10LrRgtGD0LDQu9GM0L3Ri9C1INC/0YDQtdC00LvQvtC20LXQvdC40Y8g0LDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjRjywg0LvQuNC90YLQuNC90LMsINC+0L/RgNC10LTQtdC70LXQvdC40Y8g0LrQu9Cw0YHRgdC+0LIg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtSDQsiDQktCw0YjQtdC8INGA0LXQtNCw0LrRgtC+0YDQtSDQuCDQsdC10Lcg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L3QsNGB0YLRgNC+0LnQutC4LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9pbnRlbGxpc2Vuc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LWJsdWUtNjAwIGhvdmVyOnRleHQtbGlnaHQtYmx1ZS04MDBcIj5cbiAgICAgICAgICDQo9C30L3QsNGC0Ywg0LHQvtC70YzRiNC1IC0mZ3Q7XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEdyYWRpZW50TG9ja3VwXG4gICAgICAgIGNvbG9yPVwibGlnaHRibHVlXCJcbiAgICAgICAgcm90YXRlPXsyfVxuICAgICAgICBsZWZ0PXtcbiAgICAgICAgICA8Q29kZVdpbmRvdyBjbGFzc05hbWU9e2BiZy1saWdodC1ibHVlLTUwMCAke3N0eWxlcy5jb2RlfWB9IGxpbmVOdW1iZXJzQmFja2dyb3VuZD17ZmFsc2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gZmxleCBtaW4taC0wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctMTQgYmctd2hpdGUgYmctb3BhY2l0eS0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtMy41IHBiLTRcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDY5bDYtNm0tMi01YTcgNyAwIDEwMTQgMCA3IDcgMCAwMC0xNCAwelwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCA3SDVhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDAwMSAxaDEwYTEgMSAwIDAwMS0xdi0zbTMuNzA3LTEwLjI5M2wtMy40MTQtMy40MTRBMSAxIDAgMDAxNS41ODYgM0g5YTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgxMGExIDEgMCAwMDEtMVY3LjQxNGExIDEgMCAwMC0uMjkzLS43MDd6TTcgMTAzYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0em0wIDB2MTBtMTAtNmEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHptMCAwYTMgMyAwIDAxLTMgM2gtNGEzIDMgMCAwMC0zIDNtMCAwYTIgMiAwIDEwMCA0IDIgMiAwIDAwMC00elwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMS41IDE2MC4wMzFhLjc1Ljc1IDAgMDAtMS0xLjExOGwxIDEuMTE4em0tOC0xLjExOGEuNzUuNzUgMCAwMC0xIDEuMTE4bDEtMS4xMTh6bTYuOTcyIDYuMTQ5YS43NS43NSAwIDEwLjk5My0xLjEyNGwtLjk5MyAxLjEyNHptLTcuOTM3LTEuMTI0YS43NS43NSAwIDEwLjk5MyAxLjEyNGwtLjk5My0xLjEyNHptNy4wMjItLjM2OGwtLjY0LS4zOTMuNjQuMzkzem0tNS4xMTQgMGwuNjQtLjM5My0uNjQuMzkzek0zIDE2MS4yNWEuNzUuNzUgMCAwMDAgMS41di0xLjV6bTggMS41YS43NS43NSAwIDAwMC0xLjV2MS41ek04IDE0N2wuMzcyLS42NTFBLjc1Ljc1IDAgMDA3LjI1IDE0N0g4em0xNCA4bC4zNzIuNjUxYS43NS43NSAwIDAwMC0xLjMwMkwyMiAxNTV6bS0xNC43NSAwYS43NS43NSAwIDAwMS41IDBoLTEuNXptNS4zNzggNC40OTJhLjc1Ljc1IDAgMTAuNzQ0IDEuMzAybC0uNzQ0LTEuMzAyek03IDE1Ny43NUEyLjI1IDIuMjUgMCAwMTkuMjUgMTYwaDEuNUEzLjc1IDMuNzUgMCAwMDcgMTU2LjI1djEuNXptMC0xLjVBMy43NSAzLjc1IDAgMDAzLjI1IDE2MGgxLjVBMi4yNSAyLjI1IDAgMDE3IDE1Ny43NXYtMS41em0yLjYyNCAzLjI5OEE1LjIyNSA1LjIyNSAwIDAxNyAxNjAuMjV2MS41YTYuNzMgNi43MyAwIDAwMy4zNzYtLjkwM2wtLjc1Mi0xLjI5OXpNOS4yNSAxNjB2LjE5N2gxLjVWMTYwaC0xLjV6bTAgLjE5N1YxNjJoMS41di0xLjgwM2gtMS41ek03IDE2MC4yNWE1LjIyNSA1LjIyNSAwIDAxLTIuNjI0LS43MDJsLS43NTIgMS4yOTlBNi43MyA2LjczIDAgMDA3IDE2MS43NXYtMS41ek00Ljc1IDE2MnYtMS44MDNoLTEuNVYxNjJoMS41em0wLTEuODAzVjE2MGgtMS41di4xOTdoMS41em01Ljc1LTEuMjg0YTUuMjA5IDUuMjA5IDAgMDEtLjg3Ni42MzVsLjc1MiAxLjI5OWMuNDAzLS4yMzQuNzgtLjUwNyAxLjEyNC0uODE2bC0xLTEuMTE4em0tNi4xMjQuNjM1YTUuMjEgNS4yMSAwIDAxLS44NzYtLjYzNWwtMSAxLjExOGMuMzQ0LjMwOS43MjEuNTgyIDEuMTI0LjgxNmwuNzUyLTEuMjk5em00Ljg2IDQuNzAxYy40NTEuMjEyLjg2Ny40ODcgMS4yMzYuODEzbC45OTMtMS4xMjRhNi43NyA2Ljc3IDAgMDAtMS41ODgtMS4wNDZsLS42NCAxLjM1N3pNOS4yNSAxNjJjMCAuNDMzLS4xMjIuODM1LS4zMzIgMS4xNzdsMS4yNzcuNzg3QTMuNzM3IDMuNzM3IDAgMDAxMC43NSAxNjJoLTEuNXptLS4zMzIgMS4xNzdBMi4yNDcgMi4yNDcgMCAwMTcgMTY0LjI1djEuNWEzLjc0OCAzLjc0OCAwIDAwMy4xOTUtMS43ODZsLTEuMjc3LS43ODd6bS01LjM5IDEuODg1YTUuMjUgNS4yNSAwIDAxMS4yMzUtLjgxM2wtLjY0LTEuMzU3YTYuNzcgNi43NyAwIDAwLTEuNTg4IDEuMDQ2bC45OTMgMS4xMjR6TTcgMTY0LjI1Yy0uODEgMC0xLjUyLS40MjctMS45MTgtMS4wNzNsLTEuMjc3Ljc4N0EzLjc0OCAzLjc0OCAwIDAwNyAxNjUuNzV2LTEuNXptLTEuOTE4LTEuMDczQTIuMjM1IDIuMjM1IDAgMDE0Ljc1IDE2MmgtMS41YzAgLjcxOS4yMDMgMS4zOTIuNTU1IDEuOTY0bDEuMjc3LS43ODd6TTQgMTYxLjI1SDN2MS41aDF2LTEuNXptNyAwaC0xdjEuNWgxdi0xLjV6bS0zLjM3Mi0xMy41OTlsMTQgOCAuNzQ0LTEuMzAyLTE0LTgtLjc0NCAxLjMwMnpNOC43NSAxNTV2LThoLTEuNXY4aDEuNXptMTIuODc4LS42NTFsLTkgNS4xNDMuNzQ0IDEuMzAyIDktNS4xNDMtLjc0NC0xLjMwMnpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDIwNWg4bS04IDB2N2ExIDEgMCAwMDEgMWg3bS04LTh2LTdhMSAxIDAgMDExLTFoNmExIDEgMCAwMTEgMXY3bTAgMHY4bTAtOGg3YTEgMSAwIDAxMSAxdjZhMSAxIDAgMDEtMSAxaC03bTQtMTFoNmExIDEgMCAwMDEtMXYtNmExIDEgMCAwMC0xLTFoLTZhMSAxIDAgMDAtMSAxdjZhMSAxIDAgMDAxIDF6XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIi41XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiNzJcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC4zMjUgNTIuMzE3Yy40MjYtMS43NTYgMi45MjQtMS43NTYgMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAyLjU3MyAxLjA2NmMxLjU0My0uOTQgMy4zMS44MjYgMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAxLjA2NSAyLjU3MmMxLjc1Ni40MjYgMS43NTYgMi45MjQgMCAzLjM1YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjYgMi41NzNjLjk0IDEuNTQzLS44MjYgMy4zMS0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMC0yLjU3MiAxLjA2NWMtLjQyNiAxLjc1Ni0yLjkyNCAxLjc1Ni0zLjM1IDBhMS43MjQgMS43MjQgMCAwMC0yLjU3My0xLjA2NmMtMS41NDMuOTQtMy4zMS0uODI2LTIuMzctMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTEuMDY1LTIuNTcyYy0xLjc1Ni0uNDI2LTEuNzU2LTIuOTI0IDAtMy4zNWExLjcyNCAxLjcyNCAwIDAwMS4wNjYtMi41NzNjLS45NC0xLjU0My44MjYtMy4zMSAyLjM3LTIuMzcuOTk2LjYwOCAyLjI5Ni4wNyAyLjU3Mi0xLjA2NXpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT1cIi41XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDYwYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpNNS4xMjEgMTcuODA0QTEzLjkzNiAxMy45MzYgMCAwMTEyIDE2YzIuNSAwIDQuODQ3LjY1NSA2Ljg3OSAxLjgwNE0xNSAxMGEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT1cIi41XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4IGZsZXgtY29sIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICA8Q29tcGxldGlvbkRlbW8gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci13aGl0ZSBib3JkZXItb3BhY2l0eS0xMCBmb250LW1vbm8gdGV4dC14cyB0ZXh0LXdoaXRlIHAtNCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Qcm9ibGVtczwvaDM+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGVhZGluZy01XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9ibGVtcy5tYXAoKHByb2JsZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJmbGV4IG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ub25lIHRleHQtYW1iZXItNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDl2Mm0wIDRoLjAxbS02LjkzOCA0aDEzLjg1NmMxLjU0IDAgMi41MDItMS42NjcgMS43MzItM0wxMy43MzIgNGMtLjc3LTEuMzMzLTIuNjk0LTEuMzMzLTMuNDY0IDBMMy4zNCAxNmMtLjc3IDEuMzMzLjE5MiAzIDEuNzMyIDN6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgbWwtMVwiPntwcm9ibGVtWzBdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9jayBmbGV4LW5vbmUgb3BhY2l0eS01MFwiPiZuYnNwO3twcm9ibGVtWzFdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2RlV2luZG93PlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==