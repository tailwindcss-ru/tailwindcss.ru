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
    title: 'Release Notes',
    href: 'https://blog.tailwindcss.com/tailwindcss-v2'
  }, pages['upgrading-to-v2'], pages['using-with-preprocessors'], pages['optimizing-for-production'], pages['browser-support'], pages['intellisense']],
  'Основные концепции': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
  Настройка: [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCLQndCw0YHRgtGA0L7QudC60LAiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2ZILEtBQUssQ0FBQyxjQUFELENBRFUsRUFFZjtBQUNFSSxTQUFLLEVBQUUsZUFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUZlLEVBTWZMLEtBQUssQ0FBQyxpQkFBRCxDQU5VLEVBT2ZBLEtBQUssQ0FBQywwQkFBRCxDQVBVLEVBUWZBLEtBQUssQ0FBQywyQkFBRCxDQVJVLEVBU2ZBLEtBQUssQ0FBQyxpQkFBRCxDQVRVLEVBVWZBLEtBQUssQ0FBQyxjQUFELENBVlUsQ0FEYTtBQWE5Qix3QkFBc0IsQ0FDcEJBLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMsOEJBQUQsQ0FIZSxFQUlwQkEsS0FBSyxDQUFDLFdBQUQsQ0FKZSxFQUtwQkEsS0FBSyxDQUFDLG9CQUFELENBTGUsRUFNcEJBLEtBQUssQ0FBQyx1QkFBRCxDQU5lLEVBT3BCQSxLQUFLLENBQUMsc0JBQUQsQ0FQZSxFQVFwQkEsS0FBSyxDQUFD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QUFLLENBQUMsTUFBRCxDQUFOLEVBQWdCQSxLQUFLLENBQUMsUUFBRCxDQUFyQixFQUFpQ0EsS0FBSyxDQUFDLGNBQUQsQ0FBdEMsQ0FsS3lCO0FBbUs5Qm9CLGVBQWEsRUFBRSxDQUFDcEIsS0FBSyxDQUFDLGdCQUFELENBQU4sQ0FuS2U7QUFvSzlCLHNCQUFvQixDQUFDQSxLQUFLLENBQUMsbUJBQUQsQ0FBTjtBQXBLVSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLjQ3YjM2YjdmNmI4Y2YxMjBiODAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYWdlTGlzdCB9IGZyb20gJ0AvdXRpbHMvY3JlYXRlUGFnZUxpc3QnXG5cbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXG4gIHJlcXVpcmUuY29udGV4dChgLi4vcGFnZXMvZG9jcy8/bWV0YT10aXRsZSxzaG9ydFRpdGxlLHB1Ymxpc2hlZGAsIGZhbHNlLCAvXFwubWR4JC8pLFxuICAnZG9jcydcbilcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xuICAgIHBhZ2VzWydpbnN0YWxsYXRpb24nXSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlbGVhc2UgTm90ZXMnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIH0sXG4gICAgcGFnZXNbJ3VwZ3JhZGluZy10by12MiddLFxuICAgIHBhZ2VzWyd1c2luZy13aXRoLXByZXByb2Nlc3NvcnMnXSxcbiAgICBwYWdlc1snb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbiddLFxuICAgIHBhZ2VzWydicm93c2VyLXN1cHBvcnQnXSxcbiAgICBwYWdlc1snaW50ZWxsaXNlbnNlJ10sXG4gIF0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IFtcbiAgICBwYWdlc1sndXRpbGl0eS1maXJzdCddLFxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXG4gICAgcGFnZXNbJ2RhcmstbW9kZSddLFxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1uZXctdXRpbGl0aWVzJ10sXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxuICBdLFxuICDQndCw0YHRgtGA0L7QudC60LA6IFtcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0aGVtZSddLFxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcbiAgXSxcbiAgJ0Jhc2UgU3R5bGVzJzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXG4gIExheW91dDogW1xuICAgIHBhZ2VzWydjb250YWluZXInXSxcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxuICAgIHBhZ2VzWydkaXNwbGF5J10sXG4gICAgcGFnZXNbJ2Zsb2F0J10sXG4gICAgcGFnZXNbJ2NsZWFyJ10sXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcbiAgICBwYWdlc1snei1pbmRleCddLFxuICBdLFxuICBGbGV4Ym94OiBbXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxuICAgIHBhZ2VzWydmbGV4J10sXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxuICAgIHBhZ2VzWydvcmRlciddLFxuICBdLFxuICBHcmlkOiBbXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcbiAgICBwYWdlc1snZ2FwJ10sXG4gIF0sXG4gICdCb3ggQWxpZ25tZW50JzogW1xuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxuICBdLFxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXG4gIFNpemluZzogW1xuICAgIHBhZ2VzWyd3aWR0aCddLFxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXG4gICAgcGFnZXNbJ2hlaWdodCddLFxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcbiAgXSxcbiAgVHlwb2dyYXBoeTogW1xuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXG4gIF0sXG4gIEJhY2tncm91bmRzOiBbXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxuICBdLFxuICBCb3JkZXJzOiBbXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxuICBdLFxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxuICBdLFxuICBUcmFuc2Zvcm1zOiBbXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXG4gICAgcGFnZXNbJ3NjYWxlJ10sXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcbiAgICBwYWdlc1snc2tldyddLFxuICBdLFxuICBJbnRlcmFjdGl2aXR5OiBbXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcbiAgICBwYWdlc1snY3Vyc29yJ10sXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcbiAgICBwYWdlc1sncmVzaXplJ10sXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXG4gIF0sXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==