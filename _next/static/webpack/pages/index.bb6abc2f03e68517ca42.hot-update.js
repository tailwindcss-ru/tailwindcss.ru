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
  'Начало работы': [pages['installation'], {
    title: 'Установка',
    href: '/installation'
  }, {
    title: 'Release Notes',
    href: 'https://blog.tailwindcss.com/tailwindcss-v2'
  }, pages['upgrading-to-v2'], pages['using-with-preprocessors'], pages['optimizing-for-production'], pages['browser-support'], pages['intellisense']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2ZILEtBQUssQ0FBQyxjQUFELENBRFUsRUFFZjtBQUNFSSxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUZlLEVBTWY7QUFDRUQsU0FBSyxFQUFFLGVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FOZSxFQVVmTCxLQUFLLENBQUMsaUJBQUQsQ0FWVSxFQVdmQSxLQUFLLENBQUMsMEJBQUQsQ0FYVSxFQVlmQSxLQUFLLENBQUMsMkJBQUQsQ0FaVSxFQWFmQSxLQUFLLENBQUMsaUJBQUQsQ0FiVSxFQWNmQSxLQUFLLENBQUMsY0FBRCxDQWRVLENBRGE7QUFpQjlCLHdCQUFzQixDQUNwQkEsS0FBSyxDQUFDLGVBQUQsQ0FEZSxFQUVwQkEsS0FBSyxDQUFDLG1CQUFELENBRmUsRUFHcEJBLEtBQUssQ0FBQyw4QkFBRCxDQUhlLEVBSXBCQSxLQUFLLENBQUMsV0FBRCxDQUplLEVBS3BCQSxLQUFLLENBQUMsb0JBQUQsQ0FMZSxFQU1wQkEsS0FBSyxDQUFDLHVCQUFELENBTmUsRUFPcEJBLEtBQUss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c0s5QmtCLEtBQUcsRUFBRSxDQUFDbEIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBdEt5QjtBQXVLOUJtQixlQUFhLEVBQUUsQ0FBQ25CLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBdktlO0FBd0s5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF4S1UsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI2YWJjMmYwM2U2ODUxN2NhNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcblxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXG4gICdkb2NzJ1xuKVxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRhdGlvbk5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXG4gICAgcGFnZXNbJ2luc3RhbGxhdGlvbiddLFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvaW5zdGFsbGF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUmVsZWFzZSBOb3RlcycsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy12MicsXG4gICAgfSxcbiAgICBwYWdlc1sndXBncmFkaW5nLXRvLXYyJ10sXG4gICAgcGFnZXNbJ3VzaW5nLXdpdGgtcHJlcHJvY2Vzc29ycyddLFxuICAgIHBhZ2VzWydvcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJ10sXG4gICAgcGFnZXNbJ2Jyb3dzZXItc3VwcG9ydCddLFxuICAgIHBhZ2VzWydpbnRlbGxpc2Vuc2UnXSxcbiAgXSxcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXG4gIF0sXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiBbXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcbiAgICBwYWdlc1sndGhlbWUnXSxcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcbiAgICBwYWdlc1sncGx1Z2lucyddLFxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXG4gIF0sXG4gICdCYXNlIFN0eWxlcyc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxuICBMYXlvdXQ6IFtcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcbiAgICBwYWdlc1snZGlzcGxheSddLFxuICAgIHBhZ2VzWydmbG9hdCddLFxuICAgIHBhZ2VzWydjbGVhciddLFxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcbiAgXSxcbiAgRmxleGJveDogW1xuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcbiAgICBwYWdlc1snZmxleCddLFxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcbiAgICBwYWdlc1snb3JkZXInXSxcbiAgXSxcbiAgR3JpZDogW1xuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXG4gICAgcGFnZXNbJ2dhcCddLFxuICBdLFxuICAnQm94IEFsaWdubWVudCc6IFtcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcbiAgXSxcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxuICBTaXppbmc6IFtcbiAgICBwYWdlc1snd2lkdGgnXSxcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxuICAgIHBhZ2VzWydoZWlnaHQnXSxcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXG4gIF0sXG4gIFR5cG9ncmFwaHk6IFtcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxuICBdLFxuICBCYWNrZ3JvdW5kczogW1xuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcbiAgXSxcbiAgQm9yZGVyczogW1xuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcbiAgXSxcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcbiAgXSxcbiAgVHJhbnNmb3JtczogW1xuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxuICAgIHBhZ2VzWydzY2FsZSddLFxuICAgIHBhZ2VzWydyb3RhdGUnXSxcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXG4gICAgcGFnZXNbJ3NrZXcnXSxcbiAgXSxcbiAgSW50ZXJhY3Rpdml0eTogW1xuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXG4gICAgcGFnZXNbJ2N1cnNvciddLFxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxuICBdLFxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=