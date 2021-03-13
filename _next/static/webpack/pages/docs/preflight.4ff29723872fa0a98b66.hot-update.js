webpackHotUpdate_N_E("pages/docs/preflight",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxzQkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxlLEVBU2Y7QUFDRUQsU0FBSyxFQUFFLGtCQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVGUsRUFhZjtBQUNFRCxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiZSxFQWlCZjtBQUNFRCxTQUFLLEVBQUUsNEJBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQmUsRUFxQmY7QUFDRUQsU0FBSyxFQUFFLG9CQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBckJlLEVBeUJmO0FBQ0VELFNBQUssRUFBRSw2Q0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCZSxDQURhO0FBK0I5Qix3QkFBc0IsQ0FDcEJMLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMsOEJB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QUFELENBSFEsRUFJYkEsS0FBSyxDQUFDLGdCQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLFFBQUQsQ0FMUSxFQU1iQSxLQUFLLENBQUMsYUFBRCxDQU5RLENBNUtlO0FBb0w5QmlCLEtBQUcsRUFBRSxDQUFDakIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBcEx5QjtBQXFMOUJrQixlQUFhLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBckxlO0FBc0w5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF0TFUsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy9wcmVmbGlnaHQuNGZmMjk3MjM4NzJmYTBhOThiNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVBhZ2VMaXN0IH0gZnJvbSAnQC91dGlscy9jcmVhdGVQYWdlTGlzdCdcclxuXHJcbmNvbnN0IHBhZ2VzID0gY3JlYXRlUGFnZUxpc3QoXHJcbiAgcmVxdWlyZS5jb250ZXh0KGAuLi9wYWdlcy9kb2NzLz9tZXRhPXRpdGxlLHNob3J0VGl0bGUscHVibGlzaGVkYCwgZmFsc2UsIC9cXC5tZHgkLyksXHJcbiAgJ2RvY3MnXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uTmF2ID0ge1xyXG4gICfQndCw0YfQsNC70L4g0YDQsNCx0L7RgtGLJzogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnN0YWxsYXRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQn9GA0LjQvNC10YfQsNC90LjRjyDQuiDQstGL0L/Rg9GB0LrRgycsXHJcbiAgICAgIGhyZWY6ICdodHRwczovL2Jsb2cudGFpbHdpbmRjc3MuY29tL3RhaWx3aW5kY3NzLXYyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J7QsdC90L7QstC70LXQvdC40LUg0LTQviB2MicsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy91cGdyYWRpbmctdG8tdjInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSDRgSDQv9GA0LXQv9GA0L7RhtC10YHRgdC+0YDQsNC80LgnLFxyXG4gICAgICBocmVmOiAnL2RvY3MvdXNpbmctd2l0aC1wcmVwcm9jZXNzb3JzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J7Qv9GC0LjQvNC40LfQsNGG0LjRjyDQtNC70Y8g0L/RgNC+0LTQsNC60YjQtdC90LAnLFxyXG4gICAgICBocmVmOiAnL2RvY3Mvb3B0aW1pemluZy1mb3ItcHJvZHVjdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cf0L7QtNC00LXRgNC20LrQsCDQsdGA0LDRg9C30LXRgNCwJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2Jyb3dzZXItc3VwcG9ydCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9CY0L3RgtC10LvQu9C10LrRgtGD0LDQu9GM0L3Ri9C1INC/0YDQtdC00LvQvtC20LXQvdC40Y8g0LDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9pbnRlbGxpc2Vuc2UnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gICfQntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuCc6IFtcclxuICAgIHBhZ2VzWyd1dGlsaXR5LWZpcnN0J10sXHJcbiAgICBwYWdlc1sncmVzcG9uc2l2ZS1kZXNpZ24nXSxcclxuICAgIHBhZ2VzWydob3Zlci1mb2N1cy1hbmQtb3RoZXItc3RhdGVzJ10sXHJcbiAgICBwYWdlc1snZGFyay1tb2RlJ10sXHJcbiAgICBwYWdlc1snYWRkaW5nLWJhc2Utc3R5bGVzJ10sXHJcbiAgICBwYWdlc1snZXh0cmFjdGluZy1jb21wb25lbnRzJ10sXHJcbiAgICBwYWdlc1snYWRkaW5nLW5ldy11dGlsaXRpZXMnXSxcclxuICAgIHBhZ2VzWydmdW5jdGlvbnMtYW5kLWRpcmVjdGl2ZXMnXSxcclxuICBdLFxyXG4gICfQndCw0YHRgtGA0L7QudC60LAnOiBbXHJcbiAgICBwYWdlc1snY29uZmlndXJhdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RoZW1lJ10sXHJcbiAgICBwYWdlc1snYnJlYWtwb2ludHMnXSxcclxuICAgIHBhZ2VzWydjdXN0b21pemluZy1jb2xvcnMnXSxcclxuICAgIHBhZ2VzWydjdXN0b21pemluZy1zcGFjaW5nJ10sXHJcbiAgICBwYWdlc1snY29uZmlndXJpbmctdmFyaWFudHMnXSxcclxuICAgIHBhZ2VzWydwbHVnaW5zJ10sXHJcbiAgICBwYWdlc1sncHJlc2V0cyddLFxyXG4gIF0sXHJcbiAgJ9CR0LDQt9C+0LLRi9C1INGB0YLQuNC70LgnOiBbcGFnZXNbJ3ByZWZsaWdodCddXSxcclxuICAn0JzQsNC60LXRgic6IFtcclxuICAgIHBhZ2VzWydjb250YWluZXInXSxcclxuICAgIHBhZ2VzWydib3gtc2l6aW5nJ10sXHJcbiAgICBwYWdlc1snZGlzcGxheSddLFxyXG4gICAgcGFnZXNbJ2Zsb2F0J10sXHJcbiAgICBwYWdlc1snY2xlYXInXSxcclxuICAgIHBhZ2VzWydvYmplY3QtZml0J10sXHJcbiAgICBwYWdlc1snb2JqZWN0LXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1snb3ZlcmZsb3cnXSxcclxuICAgIHBhZ2VzWydvdmVyc2Nyb2xsLWJlaGF2aW9yJ10sXHJcbiAgICBwYWdlc1sncG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWyd0b3AtcmlnaHQtYm90dG9tLWxlZnQnXSxcclxuICAgIHBhZ2VzWyd2aXNpYmlsaXR5J10sXHJcbiAgICBwYWdlc1snei1pbmRleCddLFxyXG4gIF0sXHJcbiAgRmxleGJveDogW1xyXG4gICAgcGFnZXNbJ2ZsZXgtZGlyZWN0aW9uJ10sXHJcbiAgICBwYWdlc1snZmxleC13cmFwJ10sXHJcbiAgICBwYWdlc1snZmxleCddLFxyXG4gICAgcGFnZXNbJ2ZsZXgtZ3JvdyddLFxyXG4gICAgcGFnZXNbJ2ZsZXgtc2hyaW5rJ10sXHJcbiAgICBwYWdlc1snb3JkZXInXSxcclxuICBdLFxyXG4gIEdyaWQ6IFtcclxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSxcclxuICAgIHBhZ2VzWydncmlkLWNvbHVtbiddLFxyXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtcm93cyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtcm93J10sXHJcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWZsb3cnXSxcclxuICAgIHBhZ2VzWydncmlkLWF1dG8tY29sdW1ucyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1yb3dzJ10sXHJcbiAgICBwYWdlc1snZ2FwJ10sXHJcbiAgXSxcclxuICAnQm94IEFsaWdubWVudCc6IFtcclxuICAgIHBhZ2VzWydqdXN0aWZ5LWNvbnRlbnQnXSxcclxuICAgIHBhZ2VzWydqdXN0aWZ5LWl0ZW1zJ10sXHJcbiAgICBwYWdlc1snanVzdGlmeS1zZWxmJ10sXHJcbiAgICBwYWdlc1snYWxpZ24tY29udGVudCddLFxyXG4gICAgcGFnZXNbJ2FsaWduLWl0ZW1zJ10sXHJcbiAgICBwYWdlc1snYWxpZ24tc2VsZiddLFxyXG4gICAgcGFnZXNbJ3BsYWNlLWNvbnRlbnQnXSxcclxuICAgIHBhZ2VzWydwbGFjZS1pdGVtcyddLFxyXG4gICAgcGFnZXNbJ3BsYWNlLXNlbGYnXSxcclxuICBdLFxyXG4gIFNwYWNpbmc6IFtwYWdlc1sncGFkZGluZyddLCBwYWdlc1snbWFyZ2luJ10sIHBhZ2VzWydzcGFjZSddXSxcclxuICBTaXppbmc6IFtcclxuICAgIHBhZ2VzWyd3aWR0aCddLFxyXG4gICAgcGFnZXNbJ21pbi13aWR0aCddLFxyXG4gICAgcGFnZXNbJ21heC13aWR0aCddLFxyXG4gICAgcGFnZXNbJ2hlaWdodCddLFxyXG4gICAgcGFnZXNbJ21pbi1oZWlnaHQnXSxcclxuICAgIHBhZ2VzWydtYXgtaGVpZ2h0J10sXHJcbiAgXSxcclxuICBUeXBvZ3JhcGh5OiBbXHJcbiAgICBwYWdlc1snZm9udC1mYW1pbHknXSxcclxuICAgIHBhZ2VzWydmb250LXNpemUnXSxcclxuICAgIHBhZ2VzWydmb250LXNtb290aGluZyddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtc3R5bGUnXSxcclxuICAgIHBhZ2VzWydmb250LXdlaWdodCddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtdmFyaWFudC1udW1lcmljJ10sXHJcbiAgICBwYWdlc1snbGV0dGVyLXNwYWNpbmcnXSxcclxuICAgIHBhZ2VzWydsaW5lLWhlaWdodCddLFxyXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtdHlwZSddLFxyXG4gICAgcGFnZXNbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1jb2xvciddLFxyXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWyd0ZXh0LWFsaWduJ10sXHJcbiAgICBwYWdlc1sndGV4dC1jb2xvciddLFxyXG4gICAgcGFnZXNbJ3RleHQtb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ3RleHQtZGVjb3JhdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RleHQtdHJhbnNmb3JtJ10sXHJcbiAgICBwYWdlc1sndGV4dC1vdmVyZmxvdyddLFxyXG4gICAgcGFnZXNbJ3ZlcnRpY2FsLWFsaWduJ10sXHJcbiAgICBwYWdlc1snd2hpdGVzcGFjZSddLFxyXG4gICAgcGFnZXNbJ3dvcmQtYnJlYWsnXSxcclxuICBdLFxyXG4gIEJhY2tncm91bmRzOiBbXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1hdHRhY2htZW50J10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jbGlwJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1jb2xvciddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXJlcGVhdCddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtc2l6ZSddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSxcclxuICAgIHBhZ2VzWydncmFkaWVudC1jb2xvci1zdG9wcyddLFxyXG4gIF0sXHJcbiAgQm9yZGVyczogW1xyXG4gICAgcGFnZXNbJ2JvcmRlci1yYWRpdXMnXSxcclxuICAgIHBhZ2VzWydib3JkZXItd2lkdGgnXSxcclxuICAgIHBhZ2VzWydib3JkZXItY29sb3InXSxcclxuICAgIHBhZ2VzWydib3JkZXItb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci1zdHlsZSddLFxyXG4gICAgcGFnZXNbJ2RpdmlkZS13aWR0aCddLFxyXG4gICAgcGFnZXNbJ2RpdmlkZS1jb2xvciddLFxyXG4gICAgcGFnZXNbJ2RpdmlkZS1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1snZGl2aWRlLXN0eWxlJ10sXHJcbiAgICBwYWdlc1sncmluZy13aWR0aCddLFxyXG4gICAgcGFnZXNbJ3JpbmctY29sb3InXSxcclxuICAgIHBhZ2VzWydyaW5nLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC13aWR0aCddLFxyXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LWNvbG9yJ10sXHJcbiAgXSxcclxuICBFZmZlY3RzOiBbcGFnZXNbJ2JveC1zaGFkb3cnXSwgcGFnZXNbJ29wYWNpdHknXV0sXHJcbiAgVGFibGVzOiBbcGFnZXNbJ2JvcmRlci1jb2xsYXBzZSddLCBwYWdlc1sndGFibGUtbGF5b3V0J11dLFxyXG4gICdUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uJzogW1xyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tcHJvcGVydHknXSxcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10sXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSxcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLWRlbGF5J10sXHJcbiAgICBwYWdlc1snYW5pbWF0aW9uJ10sXHJcbiAgXSxcclxuICBUcmFuc2Zvcm1zOiBbXHJcbiAgICBwYWdlc1sndHJhbnNmb3JtJ10sXHJcbiAgICBwYWdlc1sndHJhbnNmb3JtLW9yaWdpbiddLFxyXG4gICAgcGFnZXNbJ3NjYWxlJ10sXHJcbiAgICBwYWdlc1sncm90YXRlJ10sXHJcbiAgICBwYWdlc1sndHJhbnNsYXRlJ10sXHJcbiAgICBwYWdlc1snc2tldyddLFxyXG4gIF0sXHJcbiAgSW50ZXJhY3Rpdml0eTogW1xyXG4gICAgcGFnZXNbJ2FwcGVhcmFuY2UnXSxcclxuICAgIHBhZ2VzWydjdXJzb3InXSxcclxuICAgIHBhZ2VzWydvdXRsaW5lJ10sXHJcbiAgICBwYWdlc1sncG9pbnRlci1ldmVudHMnXSxcclxuICAgIHBhZ2VzWydyZXNpemUnXSxcclxuICAgIHBhZ2VzWyd1c2VyLXNlbGVjdCddLFxyXG4gIF0sXHJcbiAgU1ZHOiBbcGFnZXNbJ2ZpbGwnXSwgcGFnZXNbJ3N0cm9rZSddLCBwYWdlc1snc3Ryb2tlLXdpZHRoJ11dLFxyXG4gIEFjY2Vzc2liaWxpdHk6IFtwYWdlc1snc2NyZWVuLXJlYWRlcnMnXV0sXHJcbiAgJ09mZmljaWFsIFBsdWdpbnMnOiBbcGFnZXNbJ3R5cG9ncmFwaHktcGx1Z2luJ11dLFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=