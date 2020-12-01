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
    href: 'installation'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2ZILEtBQUssQ0FBQyxjQUFELENBRFUsRUFFZjtBQUNFSSxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUZlLEVBTWY7QUFDRUQsU0FBSyxFQUFFLGVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FOZSxFQVVmTCxLQUFLLENBQUMsaUJBQUQsQ0FWVSxFQVdmQSxLQUFLLENBQUMsMEJBQUQsQ0FYVSxFQVlmQSxLQUFLLENBQUMsMkJBQUQsQ0FaVSxFQWFmQSxLQUFLLENBQUMsaUJBQUQsQ0FiVSxFQWNmQSxLQUFLLENBQUMsY0FBRCxDQWRVLENBRGE7QUFpQjlCLHdCQUFzQixDQUNwQkEsS0FBSyxDQUFDLGVBQUQsQ0FEZSxFQUVwQkEsS0FBSyxDQUFDLG1CQUFELENBRmUsRUFHcEJBLEtBQUssQ0FBQyw4QkFBRCxDQUhlLEVBSXBCQSxLQUFLLENBQUMsV0FBRCxDQUplLEVBS3BCQSxLQUFLLENBQUMsb0JBQUQsQ0FMZSxFQU1wQkEsS0FBSyxDQUFDLHVCQUFELENBTmUsRUFPcEJBLEtBQUss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c0s5QmtCLEtBQUcsRUFBRSxDQUFDbEIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBdEt5QjtBQXVLOUJtQixlQUFhLEVBQUUsQ0FBQ25CLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBdktlO0FBd0s5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF4S1UsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI5M2Q1ZjI0ZmNjMDQ2YjBmMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcblxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXG4gICdkb2NzJ1xuKVxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRhdGlvbk5hdiA9IHtcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXG4gICAgcGFnZXNbJ2luc3RhbGxhdGlvbiddLFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcbiAgICAgIGhyZWY6ICdpbnN0YWxsYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHBhZ2VzWyd1cGdyYWRpbmctdG8tdjInXSxcbiAgICBwYWdlc1sndXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJ10sXG4gICAgcGFnZXNbJ29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nXSxcbiAgICBwYWdlc1snYnJvd3Nlci1zdXBwb3J0J10sXG4gICAgcGFnZXNbJ2ludGVsbGlzZW5zZSddLFxuICBdLFxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiBbXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcbiAgICBwYWdlc1snaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyddLFxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXG4gICAgcGFnZXNbJ2V4dHJhY3RpbmctY29tcG9uZW50cyddLFxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcbiAgXSxcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IFtcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0aGVtZSddLFxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcbiAgXSxcbiAgJ0Jhc2UgU3R5bGVzJzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXG4gIExheW91dDogW1xuICAgIHBhZ2VzWydjb250YWluZXInXSxcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxuICAgIHBhZ2VzWydkaXNwbGF5J10sXG4gICAgcGFnZXNbJ2Zsb2F0J10sXG4gICAgcGFnZXNbJ2NsZWFyJ10sXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcbiAgICBwYWdlc1snei1pbmRleCddLFxuICBdLFxuICBGbGV4Ym94OiBbXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxuICAgIHBhZ2VzWydmbGV4J10sXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxuICAgIHBhZ2VzWydvcmRlciddLFxuICBdLFxuICBHcmlkOiBbXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcbiAgICBwYWdlc1snZ2FwJ10sXG4gIF0sXG4gICdCb3ggQWxpZ25tZW50JzogW1xuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxuICBdLFxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXG4gIFNpemluZzogW1xuICAgIHBhZ2VzWyd3aWR0aCddLFxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXG4gICAgcGFnZXNbJ2hlaWdodCddLFxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcbiAgXSxcbiAgVHlwb2dyYXBoeTogW1xuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXG4gIF0sXG4gIEJhY2tncm91bmRzOiBbXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxuICBdLFxuICBCb3JkZXJzOiBbXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxuICBdLFxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxuICBdLFxuICBUcmFuc2Zvcm1zOiBbXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXG4gICAgcGFnZXNbJ3NjYWxlJ10sXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcbiAgICBwYWdlc1snc2tldyddLFxuICBdLFxuICBJbnRlcmFjdGl2aXR5OiBbXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcbiAgICBwYWdlc1snY3Vyc29yJ10sXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcbiAgICBwYWdlc1sncmVzaXplJ10sXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXG4gIF0sXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==