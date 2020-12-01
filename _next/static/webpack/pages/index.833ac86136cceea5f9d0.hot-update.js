webpackHotUpdate_N_E("pages/index",{

/***/ "./src/navs/documentation.js":
/*!***********************************!*\
  !*** ./src/navs/documentation.js ***!
  \***********************************/
/*! exports provided: documentationNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentationNav", function() { return documentationNav; });
/* harmony import */ var _utils_createPageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/createPageList */ "./src/utils/createPageList.js");

var pages = Object(_utils_createPageList__WEBPACK_IMPORTED_MODULE_0__["createPageList"])(__webpack_require__("./src/pages/docs sync \\.mdx$"), 'docs');
var documentationNav = {
  'Начало работы': [{
    title: 'Установка',
    href: '/docs/installation'
  }, {
    title: 'Release Notes',
    href: 'https://blog.tailwindcss.com/tailwindcss-v2'
  }, {
    title: 'Обновление до v2',
    href: '/docs/upgrading-to-v2'
  }, {
    title: 'Установка',
    href: '/docs/using-with-preprocessors'
  }, {
    title: 'Установка',
    href: '/docs/optimizing-for-production'
  }, {
    title: 'Установка',
    href: '/docs/browser-support'
  }, {
    title: 'Установка',
    href: '/docs/intellisense'
  }],
  'Основные концепции': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
  'Настройка': [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
  'Base Styles': [pages['preflight']],
  Layout: [pages['container'], pages['box-sizing'], pages['display'], pages['float'], pages['clear'], pages['object-fit'], pages['object-position'], pages['overflow'], pages['overscroll-behavior'], pages['position'], pages['top-right-bottom-left'], pages['visibility'], pages['z-index']],
  Flexbox: [pages['flex-direction'], pages['flex-wrap'], pages['flex'], pages['flex-grow'], pages['flex-shrink'], pages['order']],
  Grid: [pages['grid-template-columns'], pages['grid-column'], pages['grid-template-rows'], pages['grid-row'], pages['grid-auto-flow'], pages['grid-auto-columns'], pages['grid-auto-rows'], pages['gap']],
  'Box Alignment': [pages['justify-content'], pages['justify-items'], pages['justify-self'], pages['align-content'], pages['align-items'], pages['align-self'], pages['place-content'], pages['place-items'], pages['place-self']],
  Spacing: [pages['padding'], pages['margin'], pages['space']],
  Sizing: [pages['width'], pages['min-width'], pages['max-width'], pages['height'], pages['min-height'], pages['max-height']],
  Typography: [pages['font-family'], pages['font-size'], pages['font-smoothing'], pages['font-style'], pages['font-weight'], pages['font-variant-numeric'], pages['letter-spacing'], pages['line-height'], pages['list-style-type'], pages['list-style-position'], pages['placeholder-color'], pages['placeholder-opacity'], pages['text-align'], pages['text-color'], pages['text-opacity'], pages['text-decoration'], pages['text-transform'], pages['text-overflow'], pages['vertical-align'], pages['whitespace'], pages['word-break']],
  Backgrounds: [pages['background-attachment'], pages['background-clip'], pages['background-color'], pages['background-opacity'], pages['background-position'], pages['background-repeat'], pages['background-size'], pages['background-image'], pages['gradient-color-stops']],
  Borders: [pages['border-radius'], pages['border-width'], pages['border-color'], pages['border-opacity'], pages['border-style'], pages['divide-width'], pages['divide-color'], pages['divide-opacity'], pages['divide-style'], pages['ring-width'], pages['ring-color'], pages['ring-opacity'], pages['ring-offset-width'], pages['ring-offset-color']],
  Effects: [pages['box-shadow'], pages['opacity']],
  Tables: [pages['border-collapse'], pages['table-layout']],
  'Transitions and Animation': [pages['transition-property'], pages['transition-duration'], pages['transition-timing-function'], pages['transition-delay'], pages['animation']],
  Transforms: [pages['transform'], pages['transform-origin'], pages['scale'], pages['rotate'], pages['translate'], pages['skew']],
  Interactivity: [pages['appearance'], pages['cursor'], pages['outline'], pages['pointer-events'], pages['resize'], pages['user-select']],
  SVG: [pages['fill'], pages['stroke'], pages['stroke-width']],
  Accessibility: [pages['screen-readers']],
  'Official Plugins': [pages['typography-plugin']]
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxTQUFLLEVBQUUsa0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUZSxFQWFmO0FBQ0VELFNBQUssRUFBRSxXQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYmUsRUFpQmY7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQmUsRUFxQmY7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQmUsRUF5QmY7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0F6QmUsQ0FEYTtBQStCOUIsd0JBQXNCLENBQ3BCTCxLQUFLLENBQUMsZUFBRCxDQURlLEVBRXBCQSxLQUFLLENBQUMsbUJBQUQsQ0FGZSxFQUdwQkEsS0FBSyxDQUFD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S0FBSyxDQUFDLFNBQUQsQ0FIUSxFQUliQSxLQUFLLENBQUMsZ0JBQUQsQ0FKUSxFQUtiQSxLQUFLLENBQUMsUUFBRCxDQUxRLEVBTWJBLEtBQUssQ0FBQyxhQUFELENBTlEsQ0E1S2U7QUFvTDlCa0IsS0FBRyxFQUFFLENBQUNsQixLQUFLLENBQUMsTUFBRCxDQUFOLEVBQWdCQSxLQUFLLENBQUMsUUFBRCxDQUFyQixFQUFpQ0EsS0FBSyxDQUFDLGNBQUQsQ0FBdEMsQ0FwTHlCO0FBcUw5Qm1CLGVBQWEsRUFBRSxDQUFDbkIsS0FBSyxDQUFDLGdCQUFELENBQU4sQ0FyTGU7QUFzTDlCLHNCQUFvQixDQUFDQSxLQUFLLENBQUMsbUJBQUQsQ0FBTjtBQXRMVSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MzNhYzg2MTM2Y2NlZWE1ZjlkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xuXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcbiAgJ2RvY3MnXG4pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXG4gICAgICBocmVmOiAnL2RvY3MvaW5zdGFsbGF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUmVsZWFzZSBOb3RlcycsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy12MicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Ce0LHQvdC+0LLQu9C10L3QuNC1INC00L4gdjInLFxuICAgICAgaHJlZjogJy9kb2NzL3VwZ3JhZGluZy10by12MicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXG4gICAgICBocmVmOiAnL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9vcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9icm93c2VyLXN1cHBvcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgaHJlZjogJy9kb2NzL2ludGVsbGlzZW5zZScsXG4gICAgfSxcbiAgXSxcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXG4gIF0sXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiBbXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcbiAgICBwYWdlc1sndGhlbWUnXSxcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcbiAgICBwYWdlc1sncGx1Z2lucyddLFxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXG4gIF0sXG4gICdCYXNlIFN0eWxlcyc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxuICBMYXlvdXQ6IFtcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcbiAgICBwYWdlc1snZGlzcGxheSddLFxuICAgIHBhZ2VzWydmbG9hdCddLFxuICAgIHBhZ2VzWydjbGVhciddLFxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcbiAgXSxcbiAgRmxleGJveDogW1xuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcbiAgICBwYWdlc1snZmxleCddLFxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcbiAgICBwYWdlc1snb3JkZXInXSxcbiAgXSxcbiAgR3JpZDogW1xuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXG4gICAgcGFnZXNbJ2dhcCddLFxuICBdLFxuICAnQm94IEFsaWdubWVudCc6IFtcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcbiAgXSxcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxuICBTaXppbmc6IFtcbiAgICBwYWdlc1snd2lkdGgnXSxcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxuICAgIHBhZ2VzWydoZWlnaHQnXSxcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXG4gIF0sXG4gIFR5cG9ncmFwaHk6IFtcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxuICBdLFxuICBCYWNrZ3JvdW5kczogW1xuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcbiAgXSxcbiAgQm9yZGVyczogW1xuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcbiAgXSxcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcbiAgXSxcbiAgVHJhbnNmb3JtczogW1xuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxuICAgIHBhZ2VzWydzY2FsZSddLFxuICAgIHBhZ2VzWydyb3RhdGUnXSxcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXG4gICAgcGFnZXNbJ3NrZXcnXSxcbiAgXSxcbiAgSW50ZXJhY3Rpdml0eTogW1xuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXG4gICAgcGFnZXNbJ2N1cnNvciddLFxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxuICBdLFxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=