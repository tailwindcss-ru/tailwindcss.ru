webpackHotUpdate_N_E("pages/docs",{

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
    title: 'Установка',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQVRlLEVBYWY7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiZSxFQWlCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCZSxFQXFCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXJCZSxFQXlCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCZSxDQURhO0FBK0I5Qix3QkFBc0IsQ0FDcEJMLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMs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QUFLLENBQUMsU0FBRCxDQUhRLEVBSWJBLEtBQUssQ0FBQyxnQkFBRCxDQUpRLEVBS2JBLEtBQUssQ0FBQyxRQUFELENBTFEsRUFNYkEsS0FBSyxDQUFDLGFBQUQsQ0FOUSxDQTVLZTtBQW9MOUJrQixLQUFHLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQyxNQUFELENBQU4sRUFBZ0JBLEtBQUssQ0FBQyxRQUFELENBQXJCLEVBQWlDQSxLQUFLLENBQUMsY0FBRCxDQUF0QyxDQXBMeUI7QUFxTDlCbUIsZUFBYSxFQUFFLENBQUNuQixLQUFLLENBQUMsZ0JBQUQsQ0FBTixDQXJMZTtBQXNMOUIsc0JBQW9CLENBQUNBLEtBQUssQ0FBQyxtQkFBRCxDQUFOO0FBdExVLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvY3MuNTA0MTM1MjhmN2IyMGJmZGQwMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcblxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXG4gICdkb2NzJ1xuKVxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRhdGlvbk5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgaHJlZjogJy9kb2NzL2luc3RhbGxhdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlbGVhc2UgTm90ZXMnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgaHJlZjogJy9kb2NzL3VwZ3JhZGluZy10by12MicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXG4gICAgICBocmVmOiAnL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9vcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9icm93c2VyLXN1cHBvcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgaHJlZjogJy9kb2NzL2ludGVsbGlzZW5zZScsXG4gICAgfSxcbiAgXSxcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXG4gIF0sXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiBbXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcbiAgICBwYWdlc1sndGhlbWUnXSxcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcbiAgICBwYWdlc1sncGx1Z2lucyddLFxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXG4gIF0sXG4gICdCYXNlIFN0eWxlcyc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxuICBMYXlvdXQ6IFtcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcbiAgICBwYWdlc1snZGlzcGxheSddLFxuICAgIHBhZ2VzWydmbG9hdCddLFxuICAgIHBhZ2VzWydjbGVhciddLFxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcbiAgXSxcbiAgRmxleGJveDogW1xuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcbiAgICBwYWdlc1snZmxleCddLFxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcbiAgICBwYWdlc1snb3JkZXInXSxcbiAgXSxcbiAgR3JpZDogW1xuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXG4gICAgcGFnZXNbJ2dhcCddLFxuICBdLFxuICAnQm94IEFsaWdubWVudCc6IFtcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcbiAgXSxcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxuICBTaXppbmc6IFtcbiAgICBwYWdlc1snd2lkdGgnXSxcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxuICAgIHBhZ2VzWydoZWlnaHQnXSxcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXG4gIF0sXG4gIFR5cG9ncmFwaHk6IFtcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxuICBdLFxuICBCYWNrZ3JvdW5kczogW1xuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcbiAgXSxcbiAgQm9yZGVyczogW1xuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcbiAgXSxcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcbiAgXSxcbiAgVHJhbnNmb3JtczogW1xuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxuICAgIHBhZ2VzWydzY2FsZSddLFxuICAgIHBhZ2VzWydyb3RhdGUnXSxcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXG4gICAgcGFnZXNbJ3NrZXcnXSxcbiAgXSxcbiAgSW50ZXJhY3Rpdml0eTogW1xuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXG4gICAgcGFnZXNbJ2N1cnNvciddLFxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxuICBdLFxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=