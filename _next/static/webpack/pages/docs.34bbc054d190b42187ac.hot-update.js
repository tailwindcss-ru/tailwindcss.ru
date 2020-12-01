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
  'Core Concepts': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
  Customization: [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJDdXN0b21pemF0aW9uIiwiTGF5b3V0IiwiRmxleGJveCIsIkdyaWQiLCJTcGFjaW5nIiwiU2l6aW5nIiwiVHlwb2dyYXBoeSIsIkJhY2tncm91bmRzIiwiQm9yZGVycyIsIkVmZmVjdHMiLCJUYWJsZXMiLCJUcmFuc2Zvcm1zIiwiSW50ZXJhY3Rpdml0eSIsIlNWRyIsIkFjY2Vzc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsNEVBQWMsQ0FDMUJDLG9EQUQwQixFQUUxQixNQUYwQixDQUE1QjtBQUtPLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCLG1CQUFpQixDQUNmSCxLQUFLLENBQUMsY0FBRCxDQURVLEVBRWY7QUFDRUksU0FBSyxFQUFFLGVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FGZSxFQU1mTCxLQUFLLENBQUMsaUJBQUQsQ0FOVSxFQU9mQSxLQUFLLENBQUMsMEJBQUQsQ0FQVSxFQVFmQSxLQUFLLENBQUMsMkJBQUQsQ0FSVSxFQVNmQSxLQUFLLENBQUMsaUJBQUQsQ0FUVSxFQVVmQSxLQUFLLENBQUMsY0FBRCxDQVZVLENBRGE7QUFhOUIsbUJBQWlCLENBQ2ZBLEtBQUssQ0FBQyxlQUFELENBRFUsRUFFZkEsS0FBSyxDQUFDLG1CQUFELENBRlUsRUFHZkEsS0FBSyxDQUFDLDhCQUFELENBSFUsRUFJZkEsS0FBSyxDQUFDLFdBQUQsQ0FKVSxFQUtmQSxLQUFLLENBQUMsb0JBQUQsQ0FMVSxFQU1mQSxLQUFLLENBQUMsdUJBQUQsQ0FOVSxFQU9mQSxLQUFLLENBQUMsc0JBQUQsQ0FQVSxFQVFmQSxLQUFLLENBQUMsMEJBQUQsQ0FSVSxD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Q0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBbEt5QjtBQW1LOUJvQixlQUFhLEVBQUUsQ0FBQ3BCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBbktlO0FBb0s5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUFwS1UsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy4zNGJiYzA1NGQxOTBiNDIxODdhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xuXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcbiAgJ2RvY3MnXG4pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcbiAgICBwYWdlc1snaW5zdGFsbGF0aW9uJ10sXG4gICAge1xuICAgICAgdGl0bGU6ICdSZWxlYXNlIE5vdGVzJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcbiAgICB9LFxuICAgIHBhZ2VzWyd1cGdyYWRpbmctdG8tdjInXSxcbiAgICBwYWdlc1sndXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJ10sXG4gICAgcGFnZXNbJ29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nXSxcbiAgICBwYWdlc1snYnJvd3Nlci1zdXBwb3J0J10sXG4gICAgcGFnZXNbJ2ludGVsbGlzZW5zZSddLFxuICBdLFxuICAnQ29yZSBDb25jZXB0cyc6IFtcbiAgICBwYWdlc1sndXRpbGl0eS1maXJzdCddLFxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXG4gICAgcGFnZXNbJ2RhcmstbW9kZSddLFxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1uZXctdXRpbGl0aWVzJ10sXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxuICBdLFxuICBDdXN0b21pemF0aW9uOiBbXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcbiAgICBwYWdlc1sndGhlbWUnXSxcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcbiAgICBwYWdlc1sncGx1Z2lucyddLFxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXG4gIF0sXG4gICdCYXNlIFN0eWxlcyc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxuICBMYXlvdXQ6IFtcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcbiAgICBwYWdlc1snZGlzcGxheSddLFxuICAgIHBhZ2VzWydmbG9hdCddLFxuICAgIHBhZ2VzWydjbGVhciddLFxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcbiAgXSxcbiAgRmxleGJveDogW1xuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcbiAgICBwYWdlc1snZmxleCddLFxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcbiAgICBwYWdlc1snb3JkZXInXSxcbiAgXSxcbiAgR3JpZDogW1xuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXG4gICAgcGFnZXNbJ2dhcCddLFxuICBdLFxuICAnQm94IEFsaWdubWVudCc6IFtcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcbiAgXSxcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxuICBTaXppbmc6IFtcbiAgICBwYWdlc1snd2lkdGgnXSxcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxuICAgIHBhZ2VzWydoZWlnaHQnXSxcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXG4gIF0sXG4gIFR5cG9ncmFwaHk6IFtcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxuICBdLFxuICBCYWNrZ3JvdW5kczogW1xuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcbiAgXSxcbiAgQm9yZGVyczogW1xuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcbiAgXSxcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcbiAgXSxcbiAgVHJhbnNmb3JtczogW1xuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxuICAgIHBhZ2VzWydzY2FsZSddLFxuICAgIHBhZ2VzWydyb3RhdGUnXSxcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXG4gICAgcGFnZXNbJ3NrZXcnXSxcbiAgXSxcbiAgSW50ZXJhY3Rpdml0eTogW1xuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXG4gICAgcGFnZXNbJ2N1cnNvciddLFxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxuICBdLFxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=