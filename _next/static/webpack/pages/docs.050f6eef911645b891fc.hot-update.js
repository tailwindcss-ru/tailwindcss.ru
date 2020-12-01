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
  'Начало работы': [pages['installation'], {
    title: 'Установка',
    slug: '/installation'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsInNsdWciLCJocmVmIiwiTGF5b3V0IiwiRmxleGJveCIsIkdyaWQiLCJTcGFjaW5nIiwiU2l6aW5nIiwiVHlwb2dyYXBoeSIsIkJhY2tncm91bmRzIiwiQm9yZGVycyIsIkVmZmVjdHMiLCJUYWJsZXMiLCJUcmFuc2Zvcm1zIiwiSW50ZXJhY3Rpdml0eSIsIlNWRyIsIkFjY2Vzc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsNEVBQWMsQ0FDMUJDLG9EQUQwQixFQUUxQixNQUYwQixDQUE1QjtBQUtPLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCLG1CQUFpQixDQUNmSCxLQUFLLENBQUMsY0FBRCxDQURVLEVBRWY7QUFDRUksU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FGZSxFQU1mO0FBQ0VELFNBQUssRUFBRSxlQURUO0FBRUVFLFFBQUksRUFBRTtBQUZSLEdBTmUsRUFVZk4sS0FBSyxDQUFDLGlCQUFELENBVlUsRUFXZkEsS0FBSyxDQUFDLDBCQUFELENBWFUsRUFZZkEsS0FBSyxDQUFDLDJCQUFELENBWlUsRUFhZkEsS0FBSyxDQUFDLGlCQUFELENBYlUsRUFjZkEsS0FBSyxDQUFDLGNBQUQsQ0FkVSxDQURhO0FBaUI5Qix3QkFBc0IsQ0FDcEJBLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMsOEJBQUQsQ0FIZSxFQUlwQkEsS0FBSyxDQUFDLFdBQUQsQ0FKZSxFQUtwQkEsS0FBSyxDQUFDLG9CQUFELENBTGUsRUFNcEJBLEtBQUssQ0FBQyx1QkFBRCxDQU5lLEVBT3BC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LENBOUplO0FBc0s5Qm1CLEtBQUcsRUFBRSxDQUFDbkIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBdEt5QjtBQXVLOUJvQixlQUFhLEVBQUUsQ0FBQ3BCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBdktlO0FBd0s5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF4S1UsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy4wNTBmNmVlZjkxMTY0NWI4OTFmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xuXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcbiAgJ2RvY3MnXG4pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcbiAgICBwYWdlc1snaW5zdGFsbGF0aW9uJ10sXG4gICAge1xuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxuICAgICAgc2x1ZzogJy9pbnN0YWxsYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHBhZ2VzWyd1cGdyYWRpbmctdG8tdjInXSxcbiAgICBwYWdlc1sndXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJ10sXG4gICAgcGFnZXNbJ29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nXSxcbiAgICBwYWdlc1snYnJvd3Nlci1zdXBwb3J0J10sXG4gICAgcGFnZXNbJ2ludGVsbGlzZW5zZSddLFxuICBdLFxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiBbXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcbiAgICBwYWdlc1snaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyddLFxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXG4gICAgcGFnZXNbJ2V4dHJhY3RpbmctY29tcG9uZW50cyddLFxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcbiAgXSxcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IFtcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0aGVtZSddLFxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcbiAgXSxcbiAgJ0Jhc2UgU3R5bGVzJzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXG4gIExheW91dDogW1xuICAgIHBhZ2VzWydjb250YWluZXInXSxcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxuICAgIHBhZ2VzWydkaXNwbGF5J10sXG4gICAgcGFnZXNbJ2Zsb2F0J10sXG4gICAgcGFnZXNbJ2NsZWFyJ10sXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcbiAgICBwYWdlc1snei1pbmRleCddLFxuICBdLFxuICBGbGV4Ym94OiBbXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxuICAgIHBhZ2VzWydmbGV4J10sXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxuICAgIHBhZ2VzWydvcmRlciddLFxuICBdLFxuICBHcmlkOiBbXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcbiAgICBwYWdlc1snZ2FwJ10sXG4gIF0sXG4gICdCb3ggQWxpZ25tZW50JzogW1xuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxuICBdLFxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXG4gIFNpemluZzogW1xuICAgIHBhZ2VzWyd3aWR0aCddLFxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXG4gICAgcGFnZXNbJ2hlaWdodCddLFxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcbiAgXSxcbiAgVHlwb2dyYXBoeTogW1xuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXG4gIF0sXG4gIEJhY2tncm91bmRzOiBbXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxuICBdLFxuICBCb3JkZXJzOiBbXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxuICBdLFxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxuICBdLFxuICBUcmFuc2Zvcm1zOiBbXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXG4gICAgcGFnZXNbJ3NjYWxlJ10sXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcbiAgICBwYWdlc1snc2tldyddLFxuICBdLFxuICBJbnRlcmFjdGl2aXR5OiBbXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcbiAgICBwYWdlc1snY3Vyc29yJ10sXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcbiAgICBwYWdlc1sncmVzaXplJ10sXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXG4gIF0sXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==