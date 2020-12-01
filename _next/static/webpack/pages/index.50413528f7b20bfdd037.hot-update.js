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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQVRlLEVBYWY7QUFDRUQsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiZSxFQWlCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCZSxFQXFCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXJCZSxFQXlCZjtBQUNFRCxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCZSxDQURhO0FBK0I5Qix3QkFBc0IsQ0FDcEJMLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMs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QUFLLENBQUMsU0FBRCxDQUhRLEVBSWJBLEtBQUssQ0FBQyxnQkFBRCxDQUpRLEVBS2JBLEtBQUssQ0FBQyxRQUFELENBTFEsRUFNYkEsS0FBSyxDQUFDLGFBQUQsQ0FOUSxDQTVLZTtBQW9MOUJrQixLQUFHLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQyxNQUFELENBQU4sRUFBZ0JBLEtBQUssQ0FBQyxRQUFELENBQXJCLEVBQWlDQSxLQUFLLENBQUMsY0FBRCxDQUF0QyxDQXBMeUI7QUFxTDlCbUIsZUFBYSxFQUFFLENBQUNuQixLQUFLLENBQUMsZ0JBQUQsQ0FBTixDQXJMZTtBQXNMOUIsc0JBQW9CLENBQUNBLEtBQUssQ0FBQyxtQkFBRCxDQUFOO0FBdExVLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwNDEzNTI4ZjdiMjBiZmRkMDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYWdlTGlzdCB9IGZyb20gJ0AvdXRpbHMvY3JlYXRlUGFnZUxpc3QnXG5cbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXG4gIHJlcXVpcmUuY29udGV4dChgLi4vcGFnZXMvZG9jcy8/bWV0YT10aXRsZSxzaG9ydFRpdGxlLHB1Ymxpc2hlZGAsIGZhbHNlLCAvXFwubWR4JC8pLFxuICAnZG9jcydcbilcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnN0YWxsYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy91cGdyYWRpbmctdG8tdjInLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgaHJlZjogJy9kb2NzL3VzaW5nLXdpdGgtcHJlcHJvY2Vzc29ycycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXG4gICAgICBocmVmOiAnL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXG4gICAgICBocmVmOiAnL2RvY3MvYnJvd3Nlci1zdXBwb3J0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnRlbGxpc2Vuc2UnLFxuICAgIH0sXG4gIF0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IFtcbiAgICBwYWdlc1sndXRpbGl0eS1maXJzdCddLFxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXG4gICAgcGFnZXNbJ2RhcmstbW9kZSddLFxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1uZXctdXRpbGl0aWVzJ10sXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxuICBdLFxuICAn0J3QsNGB0YLRgNC+0LnQutCwJzogW1xuICAgIHBhZ2VzWydjb25maWd1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RoZW1lJ10sXG4gICAgcGFnZXNbJ2JyZWFrcG9pbnRzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLWNvbG9ycyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2NvbmZpZ3VyaW5nLXZhcmlhbnRzJ10sXG4gICAgcGFnZXNbJ3BsdWdpbnMnXSxcbiAgICBwYWdlc1sncHJlc2V0cyddLFxuICBdLFxuICAnQmFzZSBTdHlsZXMnOiBbcGFnZXNbJ3ByZWZsaWdodCddXSxcbiAgTGF5b3V0OiBbXG4gICAgcGFnZXNbJ2NvbnRhaW5lciddLFxuICAgIHBhZ2VzWydib3gtc2l6aW5nJ10sXG4gICAgcGFnZXNbJ2Rpc3BsYXknXSxcbiAgICBwYWdlc1snZmxvYXQnXSxcbiAgICBwYWdlc1snY2xlYXInXSxcbiAgICBwYWdlc1snb2JqZWN0LWZpdCddLFxuICAgIHBhZ2VzWydvYmplY3QtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1snb3ZlcnNjcm9sbC1iZWhhdmlvciddLFxuICAgIHBhZ2VzWydwb3NpdGlvbiddLFxuICAgIHBhZ2VzWyd0b3AtcmlnaHQtYm90dG9tLWxlZnQnXSxcbiAgICBwYWdlc1sndmlzaWJpbGl0eSddLFxuICAgIHBhZ2VzWyd6LWluZGV4J10sXG4gIF0sXG4gIEZsZXhib3g6IFtcbiAgICBwYWdlc1snZmxleC1kaXJlY3Rpb24nXSxcbiAgICBwYWdlc1snZmxleC13cmFwJ10sXG4gICAgcGFnZXNbJ2ZsZXgnXSxcbiAgICBwYWdlc1snZmxleC1ncm93J10sXG4gICAgcGFnZXNbJ2ZsZXgtc2hyaW5rJ10sXG4gICAgcGFnZXNbJ29yZGVyJ10sXG4gIF0sXG4gIEdyaWQ6IFtcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtY29sdW1uJ10sXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtcm93cyddLFxuICAgIHBhZ2VzWydncmlkLXJvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tZmxvdyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWF1dG8tcm93cyddLFxuICAgIHBhZ2VzWydnYXAnXSxcbiAgXSxcbiAgJ0JveCBBbGlnbm1lbnQnOiBbXG4gICAgcGFnZXNbJ2p1c3RpZnktY29udGVudCddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2p1c3RpZnktc2VsZiddLFxuICAgIHBhZ2VzWydhbGlnbi1jb250ZW50J10sXG4gICAgcGFnZXNbJ2FsaWduLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ2FsaWduLXNlbGYnXSxcbiAgICBwYWdlc1sncGxhY2UtY29udGVudCddLFxuICAgIHBhZ2VzWydwbGFjZS1pdGVtcyddLFxuICAgIHBhZ2VzWydwbGFjZS1zZWxmJ10sXG4gIF0sXG4gIFNwYWNpbmc6IFtwYWdlc1sncGFkZGluZyddLCBwYWdlc1snbWFyZ2luJ10sIHBhZ2VzWydzcGFjZSddXSxcbiAgU2l6aW5nOiBbXG4gICAgcGFnZXNbJ3dpZHRoJ10sXG4gICAgcGFnZXNbJ21pbi13aWR0aCddLFxuICAgIHBhZ2VzWydtYXgtd2lkdGgnXSxcbiAgICBwYWdlc1snaGVpZ2h0J10sXG4gICAgcGFnZXNbJ21pbi1oZWlnaHQnXSxcbiAgICBwYWdlc1snbWF4LWhlaWdodCddLFxuICBdLFxuICBUeXBvZ3JhcGh5OiBbXG4gICAgcGFnZXNbJ2ZvbnQtZmFtaWx5J10sXG4gICAgcGFnZXNbJ2ZvbnQtc2l6ZSddLFxuICAgIHBhZ2VzWydmb250LXNtb290aGluZyddLFxuICAgIHBhZ2VzWydmb250LXN0eWxlJ10sXG4gICAgcGFnZXNbJ2ZvbnQtd2VpZ2h0J10sXG4gICAgcGFnZXNbJ2ZvbnQtdmFyaWFudC1udW1lcmljJ10sXG4gICAgcGFnZXNbJ2xldHRlci1zcGFjaW5nJ10sXG4gICAgcGFnZXNbJ2xpbmUtaGVpZ2h0J10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtdHlwZSddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1hbGlnbiddLFxuICAgIHBhZ2VzWyd0ZXh0LWNvbG9yJ10sXG4gICAgcGFnZXNbJ3RleHQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWRlY29yYXRpb24nXSxcbiAgICBwYWdlc1sndGV4dC10cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndGV4dC1vdmVyZmxvdyddLFxuICAgIHBhZ2VzWyd2ZXJ0aWNhbC1hbGlnbiddLFxuICAgIHBhZ2VzWyd3aGl0ZXNwYWNlJ10sXG4gICAgcGFnZXNbJ3dvcmQtYnJlYWsnXSxcbiAgXSxcbiAgQmFja2dyb3VuZHM6IFtcbiAgICBwYWdlc1snYmFja2dyb3VuZC1hdHRhY2htZW50J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY2xpcCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcmVwZWF0J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtc2l6ZSddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWltYWdlJ10sXG4gICAgcGFnZXNbJ2dyYWRpZW50LWNvbG9yLXN0b3BzJ10sXG4gIF0sXG4gIEJvcmRlcnM6IFtcbiAgICBwYWdlc1snYm9yZGVyLXJhZGl1cyddLFxuICAgIHBhZ2VzWydib3JkZXItd2lkdGgnXSxcbiAgICBwYWdlc1snYm9yZGVyLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JvcmRlci1zdHlsZSddLFxuICAgIHBhZ2VzWydkaXZpZGUtd2lkdGgnXSxcbiAgICBwYWdlc1snZGl2aWRlLWNvbG9yJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2RpdmlkZS1zdHlsZSddLFxuICAgIHBhZ2VzWydyaW5nLXdpZHRoJ10sXG4gICAgcGFnZXNbJ3JpbmctY29sb3InXSxcbiAgICBwYWdlc1sncmluZy1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LXdpZHRoJ10sXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LWNvbG9yJ10sXG4gIF0sXG4gIEVmZmVjdHM6IFtwYWdlc1snYm94LXNoYWRvdyddLCBwYWdlc1snb3BhY2l0eSddXSxcbiAgVGFibGVzOiBbcGFnZXNbJ2JvcmRlci1jb2xsYXBzZSddLCBwYWdlc1sndGFibGUtbGF5b3V0J11dLFxuICAnVHJhbnNpdGlvbnMgYW5kIEFuaW1hdGlvbic6IFtcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1wcm9wZXJ0eSddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZGVsYXknXSxcbiAgICBwYWdlc1snYW5pbWF0aW9uJ10sXG4gIF0sXG4gIFRyYW5zZm9ybXM6IFtcbiAgICBwYWdlc1sndHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RyYW5zZm9ybS1vcmlnaW4nXSxcbiAgICBwYWdlc1snc2NhbGUnXSxcbiAgICBwYWdlc1sncm90YXRlJ10sXG4gICAgcGFnZXNbJ3RyYW5zbGF0ZSddLFxuICAgIHBhZ2VzWydza2V3J10sXG4gIF0sXG4gIEludGVyYWN0aXZpdHk6IFtcbiAgICBwYWdlc1snYXBwZWFyYW5jZSddLFxuICAgIHBhZ2VzWydjdXJzb3InXSxcbiAgICBwYWdlc1snb3V0bGluZSddLFxuICAgIHBhZ2VzWydwb2ludGVyLWV2ZW50cyddLFxuICAgIHBhZ2VzWydyZXNpemUnXSxcbiAgICBwYWdlc1sndXNlci1zZWxlY3QnXSxcbiAgXSxcbiAgU1ZHOiBbcGFnZXNbJ2ZpbGwnXSwgcGFnZXNbJ3N0cm9rZSddLCBwYWdlc1snc3Ryb2tlLXdpZHRoJ11dLFxuICBBY2Nlc3NpYmlsaXR5OiBbcGFnZXNbJ3NjcmVlbi1yZWFkZXJzJ11dLFxuICAnT2ZmaWNpYWwgUGx1Z2lucyc6IFtwYWdlc1sndHlwb2dyYXBoeS1wbHVnaW4nXV0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9