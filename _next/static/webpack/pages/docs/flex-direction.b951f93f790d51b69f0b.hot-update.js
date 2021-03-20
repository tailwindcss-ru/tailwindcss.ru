webpackHotUpdate_N_E("pages/docs/flex-direction",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJHcmlkIiwiU3BhY2luZyIsIlNpemluZyIsIlR5cG9ncmFwaHkiLCJCYWNrZ3JvdW5kcyIsIkJvcmRlcnMiLCJFZmZlY3RzIiwiVGFibGVzIiwiVHJhbnNmb3JtcyIsIkludGVyYWN0aXZpdHkiLCJTVkciLCJBY2Nlc3NpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDRFQUFjLENBQzFCQyxvREFEMEIsRUFFMUIsTUFGMEIsQ0FBNUI7QUFLTyxJQUFNQyxnQkFBZ0IsR0FBRztBQUM5QixtQkFBaUIsQ0FDZjtBQUNFQyxTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURlLEVBS2Y7QUFDRUQsU0FBSyxFQUFFLHNCQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGUsRUFTZjtBQUNFRCxTQUFLLEVBQUUsa0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUZSxFQWFmO0FBQ0VELFNBQUssRUFBRSxpQ0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWJlLEVBaUJmO0FBQ0VELFNBQUssRUFBRSw0QkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQWpCZSxFQXFCZjtBQUNFRCxTQUFLLEVBQUUsb0JBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FyQmUsRUF5QmY7QUFDRUQsU0FBSyxFQUFFLDZDQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBekJlLENBRGE7QUErQjlCLHdCQUFzQixDQUNwQkwsS0FBSyxDQUFDLGVBQUQsQ0FEZSxFQUVwQkEsS0FBSyxDQUFDLG1CQUFELENBRmUsRUFHcEJBLEtBQUssQ0FBQyw4QkFBRCxDQUhlLEVB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SyxDQUFDLGdCQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLFFBQUQsQ0FMUSxFQU1iQSxLQUFLLENBQUMsYUFBRCxDQU5RLENBNUtlO0FBb0w5QmdCLEtBQUcsRUFBRSxDQUFDaEIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBcEx5QjtBQXFMOUJpQixlQUFhLEVBQUUsQ0FBQ2pCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBckxlO0FBc0w5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF0TFUsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9mbGV4LWRpcmVjdGlvbi5iOTUxZjkzZjc5MGQ1MWI2OWYwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xyXG5cclxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcclxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcclxuICAnZG9jcydcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XHJcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2luc3RhbGxhdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cf0YDQuNC80LXRh9Cw0L3QuNGPINC6INCy0YvQv9GD0YHQutGDJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQntCx0L3QvtCy0LvQtdC90LjQtSDQtNC+IHYyJyxcclxuICAgICAgaHJlZjogJy9kb2NzL3VwZ3JhZGluZy10by12MicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9CY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INGBINC/0YDQtdC/0YDQvtGG0LXRgdGB0L7RgNCw0LzQuCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy91c2luZy13aXRoLXByZXByb2Nlc3NvcnMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQntC/0YLQuNC80LjQt9Cw0YbQuNGPINC00LvRjyDQv9GA0L7QtNCw0LrRiNC10L3QsCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9vcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J/QvtC00LTQtdGA0LbQutCwINCx0YDQsNGD0LfQtdGA0LAnLFxyXG4gICAgICBocmVmOiAnL2RvY3MvYnJvd3Nlci1zdXBwb3J0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0JjQvdGC0LXQu9C70LXQutGC0YPQsNC70YzQvdGL0LUg0L/RgNC10LTQu9C+0LbQtdC90LjRjyDQsNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2ludGVsbGlzZW5zZScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xyXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcclxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxyXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcclxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcclxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcclxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcclxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxyXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxyXG4gIF0sXHJcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IFtcclxuICAgIHBhZ2VzWydjb25maWd1cmF0aW9uJ10sXHJcbiAgICBwYWdlc1sndGhlbWUnXSxcclxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxyXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLWNvbG9ycyddLFxyXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcclxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxyXG4gICAgcGFnZXNbJ3BsdWdpbnMnXSxcclxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXHJcbiAgXSxcclxuICAn0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuCc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxyXG4gICfQnNCw0LrQtdGCJzogW1xyXG4gICAgcGFnZXNbJ2NvbnRhaW5lciddLFxyXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcclxuICAgIHBhZ2VzWydkaXNwbGF5J10sXHJcbiAgICBwYWdlc1snZmxvYXQnXSxcclxuICAgIHBhZ2VzWydjbGVhciddLFxyXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcclxuICAgIHBhZ2VzWydvYmplY3QtcG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxyXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcclxuICAgIHBhZ2VzWydwb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxyXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcclxuICAgIHBhZ2VzWyd6LWluZGV4J10sXHJcbiAgXSxcclxuICAnRmxleGJveCc6IFtcclxuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxyXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxyXG4gICAgcGFnZXNbJ2ZsZXgnXSxcclxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcclxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxyXG4gICAgcGFnZXNbJ29yZGVyJ10sXHJcbiAgXSxcclxuICBHcmlkOiBbXHJcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcclxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcclxuICAgIHBhZ2VzWydncmlkLXJvdyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXHJcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcclxuICAgIHBhZ2VzWydncmlkLWF1dG8tcm93cyddLFxyXG4gICAgcGFnZXNbJ2dhcCddLFxyXG4gIF0sXHJcbiAgJ0JveCBBbGlnbm1lbnQnOiBbXHJcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXHJcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxyXG4gICAgcGFnZXNbJ2p1c3RpZnktc2VsZiddLFxyXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxyXG4gICAgcGFnZXNbJ2FsaWduLXNlbGYnXSxcclxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXHJcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcclxuICAgIHBhZ2VzWydwbGFjZS1zZWxmJ10sXHJcbiAgXSxcclxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXHJcbiAgU2l6aW5nOiBbXHJcbiAgICBwYWdlc1snd2lkdGgnXSxcclxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcclxuICAgIHBhZ2VzWydtYXgtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydoZWlnaHQnXSxcclxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbWF4LWhlaWdodCddLFxyXG4gIF0sXHJcbiAgVHlwb2dyYXBoeTogW1xyXG4gICAgcGFnZXNbJ2ZvbnQtZmFtaWx5J10sXHJcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXHJcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcclxuICAgIHBhZ2VzWydmb250LXN0eWxlJ10sXHJcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcclxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxyXG4gICAgcGFnZXNbJ2xldHRlci1zcGFjaW5nJ10sXHJcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcclxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcclxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcclxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sndGV4dC1hbGlnbiddLFxyXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcclxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWyd0ZXh0LWRlY29yYXRpb24nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxyXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcclxuICAgIHBhZ2VzWyd2ZXJ0aWNhbC1hbGlnbiddLFxyXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcclxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXHJcbiAgXSxcclxuICBCYWNrZ3JvdW5kczogW1xyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY2xpcCddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWltYWdlJ10sXHJcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcclxuICBdLFxyXG4gIEJvcmRlcnM6IFtcclxuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ2RpdmlkZS1zdHlsZSddLFxyXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcclxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXHJcbiAgICBwYWdlc1sncmluZy1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxyXG4gIF0sXHJcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxyXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcclxuICAnVHJhbnNpdGlvbnMgYW5kIEFuaW1hdGlvbic6IFtcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10sXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxyXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxyXG4gIF0sXHJcbiAgVHJhbnNmb3JtczogW1xyXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zZm9ybS1vcmlnaW4nXSxcclxuICAgIHBhZ2VzWydzY2FsZSddLFxyXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zbGF0ZSddLFxyXG4gICAgcGFnZXNbJ3NrZXcnXSxcclxuICBdLFxyXG4gIEludGVyYWN0aXZpdHk6IFtcclxuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXHJcbiAgICBwYWdlc1snY3Vyc29yJ10sXHJcbiAgICBwYWdlc1snb3V0bGluZSddLFxyXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXHJcbiAgICBwYWdlc1sncmVzaXplJ10sXHJcbiAgICBwYWdlc1sndXNlci1zZWxlY3QnXSxcclxuICBdLFxyXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcclxuICBBY2Nlc3NpYmlsaXR5OiBbcGFnZXNbJ3NjcmVlbi1yZWFkZXJzJ11dLFxyXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9