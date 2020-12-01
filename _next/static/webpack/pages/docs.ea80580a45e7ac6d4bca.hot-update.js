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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJDdXN0b21pemF0aW9uIiwiTGF5b3V0IiwiRmxleGJveCIsIkdyaWQiLCJTcGFjaW5nIiwiU2l6aW5nIiwiVHlwb2dyYXBoeSIsIkJhY2tncm91bmRzIiwiQm9yZGVycyIsIkVmZmVjdHMiLCJUYWJsZXMiLCJUcmFuc2Zvcm1zIiwiSW50ZXJhY3Rpdml0eSIsIlNWRyIsIkFjY2Vzc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsNEVBQWMsQ0FDMUJDLG9EQUQwQixFQUUxQixNQUYwQixDQUE1QjtBQUtPLElBQU1DLGdCQUFnQixHQUFHO0FBQzlCLG1CQUFpQixDQUNmSCxLQUFLLENBQUMsY0FBRCxDQURVLEVBRWY7QUFDRUksU0FBSyxFQUFFLGVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FGZSxFQU1mTCxLQUFLLENBQUMsaUJBQUQsQ0FOVSxFQU9mQSxLQUFLLENBQUMsMEJBQUQsQ0FQVSxFQVFmQSxLQUFLLENBQUMsMkJBQUQsQ0FSVSxFQVNmQSxLQUFLLENBQUMsaUJBQUQsQ0FUVSxFQVVmQSxLQUFLLENBQUMsY0FBRCxDQVZVLENBRGE7QUFhOUIsd0JBQXNCLENBQ3BCQSxLQUFLLENBQUMsZUFBRCxDQURlLEVBRXBCQSxLQUFLLENBQUMsbUJBQUQsQ0FGZSxFQUdwQkEsS0FBSyxDQUFDLDhCQUFELENBSGUsRUFJcEJBLEtBQUssQ0FBQyxXQUFELENBSmUsRUFLcEJBLEtBQUssQ0FBQyxvQkFBRCxDQUxlLEVBTXBCQSxLQUFLLENBQUMsdUJBQUQsQ0FOZSxFQU9wQkEsS0FBSyxDQUFDLHNCQUFELENBUGUsRUFRcEJBLEtBQUssQ0FBQywwQkFB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QUMsTUFBRCxDQUFOLEVBQWdCQSxLQUFLLENBQUMsUUFBRCxDQUFyQixFQUFpQ0EsS0FBSyxDQUFDLGNBQUQsQ0FBdEMsQ0FsS3lCO0FBbUs5Qm9CLGVBQWEsRUFBRSxDQUFDcEIsS0FBSyxDQUFDLGdCQUFELENBQU4sQ0FuS2U7QUFvSzlCLHNCQUFvQixDQUFDQSxLQUFLLENBQUMsbUJBQUQsQ0FBTjtBQXBLVSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzLmVhODA1ODBhNDVlN2FjNmQ0YmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYWdlTGlzdCB9IGZyb20gJ0AvdXRpbHMvY3JlYXRlUGFnZUxpc3QnXG5cbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXG4gIHJlcXVpcmUuY29udGV4dChgLi4vcGFnZXMvZG9jcy8/bWV0YT10aXRsZSxzaG9ydFRpdGxlLHB1Ymxpc2hlZGAsIGZhbHNlLCAvXFwubWR4JC8pLFxuICAnZG9jcydcbilcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xuICAgIHBhZ2VzWydpbnN0YWxsYXRpb24nXSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1JlbGVhc2UgTm90ZXMnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxuICAgIH0sXG4gICAgcGFnZXNbJ3VwZ3JhZGluZy10by12MiddLFxuICAgIHBhZ2VzWyd1c2luZy13aXRoLXByZXByb2Nlc3NvcnMnXSxcbiAgICBwYWdlc1snb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbiddLFxuICAgIHBhZ2VzWydicm93c2VyLXN1cHBvcnQnXSxcbiAgICBwYWdlc1snaW50ZWxsaXNlbnNlJ10sXG4gIF0sXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IFtcbiAgICBwYWdlc1sndXRpbGl0eS1maXJzdCddLFxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXG4gICAgcGFnZXNbJ2RhcmstbW9kZSddLFxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXG4gICAgcGFnZXNbJ2FkZGluZy1uZXctdXRpbGl0aWVzJ10sXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxuICBdLFxuICBDdXN0b21pemF0aW9uOiBbXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcbiAgICBwYWdlc1sndGhlbWUnXSxcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcbiAgICBwYWdlc1sncGx1Z2lucyddLFxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXG4gIF0sXG4gICdCYXNlIFN0eWxlcyc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxuICBMYXlvdXQ6IFtcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcbiAgICBwYWdlc1snZGlzcGxheSddLFxuICAgIHBhZ2VzWydmbG9hdCddLFxuICAgIHBhZ2VzWydjbGVhciddLFxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcbiAgXSxcbiAgRmxleGJveDogW1xuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcbiAgICBwYWdlc1snZmxleCddLFxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcbiAgICBwYWdlc1snb3JkZXInXSxcbiAgXSxcbiAgR3JpZDogW1xuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXG4gICAgcGFnZXNbJ2dhcCddLFxuICBdLFxuICAnQm94IEFsaWdubWVudCc6IFtcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcbiAgXSxcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxuICBTaXppbmc6IFtcbiAgICBwYWdlc1snd2lkdGgnXSxcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxuICAgIHBhZ2VzWydoZWlnaHQnXSxcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXG4gIF0sXG4gIFR5cG9ncmFwaHk6IFtcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxuICBdLFxuICBCYWNrZ3JvdW5kczogW1xuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcbiAgXSxcbiAgQm9yZGVyczogW1xuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcbiAgXSxcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcbiAgXSxcbiAgVHJhbnNmb3JtczogW1xuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxuICAgIHBhZ2VzWydzY2FsZSddLFxuICAgIHBhZ2VzWydyb3RhdGUnXSxcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXG4gICAgcGFnZXNbJ3NrZXcnXSxcbiAgXSxcbiAgSW50ZXJhY3Rpdml0eTogW1xuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXG4gICAgcGFnZXNbJ2N1cnNvciddLFxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxuICBdLFxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=