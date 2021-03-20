webpackHotUpdate_N_E("pages/docs/flex-wrap",{

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
    title: 'Примечания к выпуску',
    href: 'https://blog.tailwindcss.com/tailwindcss-v2'
  }, {
    title: 'Обновление до v2',
    href: '/docs/upgrading-to-v2'
  }, {
    title: 'Использование с препроцессорами',
    href: '/docs/using-with-preprocessors'
  }, {
    title: 'Оптимизация для продакшена',
    href: '/docs/optimizing-for-production'
  }, {
    title: 'Поддержка браузера',
    href: '/docs/browser-support'
  }, {
    title: 'Интеллектуальные предложения автозаполнения',
    href: '/docs/intellisense'
  }],
  'Основные концепции': [pages['utility-first'], pages['responsive-design'], pages['hover-focus-and-other-states'], pages['dark-mode'], pages['adding-base-styles'], pages['extracting-components'], pages['adding-new-utilities'], pages['functions-and-directives']],
  'Настройка': [pages['configuration'], pages['theme'], pages['breakpoints'], pages['customizing-colors'], pages['customizing-spacing'], pages['configuring-variants'], pages['plugins'], pages['presets']],
  'Базовые стили': [pages['preflight']],
  'Макет': [pages['container'], pages['box-sizing'], pages['display'], pages['float'], pages['clear'], pages['object-fit'], pages['object-position'], pages['overflow'], pages['overscroll-behavior'], pages['position'], pages['top-right-bottom-left'], pages['visibility'], pages['z-index']],
  'Flexbox': [pages['flex-direction'], pages['flex-wrap'], pages['flex'], pages['flex-grow'], pages['flex-shrink'], pages['order']],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJHcmlkIiwiU3BhY2luZyIsIlNpemluZyIsIlR5cG9ncmFwaHkiLCJCYWNrZ3JvdW5kcyIsIkJvcmRlcnMiLCJFZmZlY3RzIiwiVGFibGVzIiwiVHJhbnNmb3JtcyIsIkludGVyYWN0aXZpdHkiLCJTVkciLCJBY2Nlc3NpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDRFQUFjLENBQzFCQyxvREFEMEIsRUFFMUIsTUFGMEIsQ0FBNUI7QUFLTyxJQUFNQyxnQkFBZ0IsR0FBRztBQUM5QixtQkFBaUIsQ0FDZjtBQUNFQyxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURlLEVBS2Y7QUFDRUQsU0FBSyxFQUFFLHNCQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxTQUFLLEVBQUUsa0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUZSxFQWFmO0FBQ0VELFNBQUssRUFBRSxpQ0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWJlLEVBaUJmO0FBQ0VELFNBQUssRUFBRSw0QkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCZSxFQXFCZjtBQUNFRCxTQUFLLEVBQUUsb0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQmUsRUF5QmY7QUFDRUQsU0FBSyxFQUFFLDZDQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBekJlLENBRGE7QUErQjlCLHdCQUFzQixDQUNwQkwsS0FBSyxDQUFDLGVBQUQsQ0FEZSxFQUVwQkEsS0FBSyxDQUFDLG1CQUFELENBRmUsRUFHcEJBLEtBQUssQ0FBQyw4QkFBRCxDQUhlLEVB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SyxDQUFDLGdCQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLFFBQUQsQ0FMUSxFQU1iQSxLQUFLLENBQUMsYUFBRCxDQU5RLENBNUtlO0FBb0w5QmdCLEtBQUcsRUFBRSxDQUFDaEIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBcEx5QjtBQXFMOUJpQixlQUFhLEVBQUUsQ0FBQ2pCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBckxlO0FBc0w5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF0TFUsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9mbGV4LXdyYXAuYjk1MWY5M2Y3OTBkNTFiNjlmMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcclxuXHJcbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXHJcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXHJcbiAgJ2RvY3MnXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xyXG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnN0YWxsYXRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQn9GA0LjQvNC10YfQsNC90LjRjyDQuiDQstGL0L/Rg9GB0LrRgycsXHJcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J7QsdC90L7QstC70LXQvdC40LUg0LTQviB2MicsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy91cGdyYWRpbmctdG8tdjInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDRgSDQv9GA0LXQv9GA0L7RhtC10YHRgdC+0YDQsNC80LgnLFxyXG4gICAgICBocmVmOiAnL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J7Qv9GC0LjQvNC40LfQsNGG0LjRjyDQtNC70Y8g0L/RgNC+0LTQsNC60YjQtdC90LAnLFxyXG4gICAgICBocmVmOiAnL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cf0L7QtNC00LXRgNC20LrQsCDQsdGA0LDRg9C30LXRgNCwJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2Jyb3dzZXItc3VwcG9ydCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9CY0L3RgtC10LvQu9C10LrRgtGD0LDQu9GM0L3Ri9C1INC/0YDQtdC00LvQvtC20LXQvdC40Y8g0LDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnRlbGxpc2Vuc2UnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IFtcclxuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXHJcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcclxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXHJcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXHJcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXHJcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXHJcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcclxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcclxuICBdLFxyXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiBbXHJcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RoZW1lJ10sXHJcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcclxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcclxuICAgIHBhZ2VzWydjdXN0b21pemluZy1zcGFjaW5nJ10sXHJcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcclxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXHJcbiAgICBwYWdlc1sncHJlc2V0cyddLFxyXG4gIF0sXHJcbiAgJ9CR0LDQt9C+0LLRi9C1INGB0YLQuNC70LgnOiBbcGFnZXNbJ3ByZWZsaWdodCddXSxcclxuICAn0JzQsNC60LXRgic6IFtcclxuICAgIHBhZ2VzWydjb250YWluZXInXSxcclxuICAgIHBhZ2VzWydib3gtc2l6aW5nJ10sXHJcbiAgICBwYWdlc1snZGlzcGxheSddLFxyXG4gICAgcGFnZXNbJ2Zsb2F0J10sXHJcbiAgICBwYWdlc1snY2xlYXInXSxcclxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXHJcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1snb3ZlcmZsb3cnXSxcclxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXHJcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWyd0b3AtcmlnaHQtYm90dG9tLWxlZnQnXSxcclxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXHJcbiAgICBwYWdlc1snei1pbmRleCddLFxyXG4gIF0sXHJcbiAgJ0ZsZXhib3gnOiBbXHJcbiAgICBwYWdlc1snZmxleC1kaXJlY3Rpb24nXSxcclxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcclxuICAgIHBhZ2VzWydmbGV4J10sXHJcbiAgICBwYWdlc1snZmxleC1ncm93J10sXHJcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcclxuICAgIHBhZ2VzWydvcmRlciddLFxyXG4gIF0sXHJcbiAgR3JpZDogW1xyXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtY29sdW1uJ10sXHJcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcclxuICAgIHBhZ2VzWydncmlkLWF1dG8tZmxvdyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcclxuICAgIHBhZ2VzWydnYXAnXSxcclxuICBdLFxyXG4gICdCb3ggQWxpZ25tZW50JzogW1xyXG4gICAgcGFnZXNbJ2p1c3RpZnktY29udGVudCddLFxyXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcclxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1jb250ZW50J10sXHJcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXHJcbiAgICBwYWdlc1sncGxhY2UtY29udGVudCddLFxyXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXHJcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxyXG4gIF0sXHJcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxyXG4gIFNpemluZzogW1xyXG4gICAgcGFnZXNbJ3dpZHRoJ10sXHJcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXHJcbiAgICBwYWdlc1snaGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxyXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcclxuICBdLFxyXG4gIFR5cG9ncmFwaHk6IFtcclxuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtc2l6ZSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXHJcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtd2VpZ2h0J10sXHJcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcclxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxyXG4gICAgcGFnZXNbJ2xpbmUtaGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXHJcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLWNvbG9yJ10sXHJcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LWNvbG9yJ10sXHJcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXHJcbiAgICBwYWdlc1sndGV4dC10cmFuc2Zvcm0nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXHJcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcclxuICAgIHBhZ2VzWyd3aGl0ZXNwYWNlJ10sXHJcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxyXG4gIF0sXHJcbiAgQmFja2dyb3VuZHM6IFtcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcmVwZWF0J10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxyXG4gICAgcGFnZXNbJ2dyYWRpZW50LWNvbG9yLXN0b3BzJ10sXHJcbiAgXSxcclxuICBCb3JkZXJzOiBbXHJcbiAgICBwYWdlc1snYm9yZGVyLXJhZGl1cyddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcclxuICAgIHBhZ2VzWydyaW5nLXdpZHRoJ10sXHJcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxyXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LXdpZHRoJ10sXHJcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcclxuICBdLFxyXG4gIEVmZmVjdHM6IFtwYWdlc1snYm94LXNoYWRvdyddLCBwYWdlc1snb3BhY2l0eSddXSxcclxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXHJcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1wcm9wZXJ0eSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZGVsYXknXSxcclxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcclxuICBdLFxyXG4gIFRyYW5zZm9ybXM6IFtcclxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcclxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXHJcbiAgICBwYWdlc1snc2NhbGUnXSxcclxuICAgIHBhZ2VzWydyb3RhdGUnXSxcclxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcclxuICAgIHBhZ2VzWydza2V3J10sXHJcbiAgXSxcclxuICBJbnRlcmFjdGl2aXR5OiBbXHJcbiAgICBwYWdlc1snYXBwZWFyYW5jZSddLFxyXG4gICAgcGFnZXNbJ2N1cnNvciddLFxyXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcclxuICAgIHBhZ2VzWydwb2ludGVyLWV2ZW50cyddLFxyXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxyXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXHJcbiAgXSxcclxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXHJcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcclxuICAnT2ZmaWNpYWwgUGx1Z2lucyc6IFtwYWdlc1sndHlwb2dyYXBoeS1wbHVnaW4nXV0sXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==