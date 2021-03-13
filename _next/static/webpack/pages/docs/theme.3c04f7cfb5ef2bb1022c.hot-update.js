webpackHotUpdate_N_E("pages/docs/theme",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJMYXlvdXQiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxzQkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxlLEVBU2Y7QUFDRUQsU0FBSyxFQUFFLGtCQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVGUsRUFhZjtBQUNFRCxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiZSxFQWlCZjtBQUNFRCxTQUFLLEVBQUUsNEJBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQmUsRUFxQmY7QUFDRUQsU0FBSyxFQUFFLG9CQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBckJlLEVBeUJmO0FBQ0VELFNBQUssRUFBRSw2Q0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCZSxDQURhO0FBK0I5Qix3QkFBc0IsQ0FDcEJMLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFL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RUFHYkEsS0FBSyxDQUFDLFNBQUQsQ0FIUSxFQUliQSxLQUFLLENBQUMsZ0JBQUQsQ0FKUSxFQUtiQSxLQUFLLENBQUMsUUFBRCxDQUxRLEVBTWJBLEtBQUssQ0FBQyxhQUFELENBTlEsQ0E1S2U7QUFvTDlCa0IsS0FBRyxFQUFFLENBQUNsQixLQUFLLENBQUMsTUFBRCxDQUFOLEVBQWdCQSxLQUFLLENBQUMsUUFBRCxDQUFyQixFQUFpQ0EsS0FBSyxDQUFDLGNBQUQsQ0FBdEMsQ0FwTHlCO0FBcUw5Qm1CLGVBQWEsRUFBRSxDQUFDbkIsS0FBSyxDQUFDLGdCQUFELENBQU4sQ0FyTGU7QUFzTDlCLHNCQUFvQixDQUFDQSxLQUFLLENBQUMsbUJBQUQsQ0FBTjtBQXRMVSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2NzL3RoZW1lLjNjMDRmN2NmYjVlZjJiYjEwMjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQYWdlTGlzdCB9IGZyb20gJ0AvdXRpbHMvY3JlYXRlUGFnZUxpc3QnXHJcblxyXG5jb25zdCBwYWdlcyA9IGNyZWF0ZVBhZ2VMaXN0KFxyXG4gIHJlcXVpcmUuY29udGV4dChgLi4vcGFnZXMvZG9jcy8/bWV0YT10aXRsZSxzaG9ydFRpdGxlLHB1Ymxpc2hlZGAsIGZhbHNlLCAvXFwubWR4JC8pLFxyXG4gICdkb2NzJ1xyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZG9jdW1lbnRhdGlvbk5hdiA9IHtcclxuICAn0J3QsNGH0LDQu9C+INGA0LDQsdC+0YLRiyc6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAnLFxyXG4gICAgICBocmVmOiAnL2RvY3MvaW5zdGFsbGF0aW9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J/RgNC40LzQtdGH0LDQvdC40Y8g0Log0LLRi9C/0YPRgdC60YMnLFxyXG4gICAgICBocmVmOiAnaHR0cHM6Ly9ibG9nLnRhaWx3aW5kY3NzLmNvbS90YWlsd2luZGNzcy12MicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Ce0LHQvdC+0LLQu9C10L3QuNC1INC00L4gdjInLFxyXG4gICAgICBocmVmOiAnL2RvY3MvdXBncmFkaW5nLXRvLXYyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0YEg0L/RgNC10L/RgNC+0YbQtdGB0YHQvtGA0LDQvNC4JyxcclxuICAgICAgaHJlZjogJy9kb2NzL3VzaW5nLXdpdGgtcHJlcHJvY2Vzc29ycycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Ce0L/RgtC40LzQuNC30LDRhtC40Y8g0LTQu9GPINC/0YDQvtC00LDQutGI0LXQvdCwJyxcclxuICAgICAgaHJlZjogJy9kb2NzL29wdGltaXppbmctZm9yLXByb2R1Y3Rpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQn9C+0LTQtNC10YDQttC60LAg0LHRgNCw0YPQt9C10YDQsCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9icm93c2VyLXN1cHBvcnQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQmNC90YLQtdC70LvQtdC60YLRg9Cw0LvRjNC90YvQtSDQv9GA0LXQtNC70L7QttC10L3QuNGPINCw0LLRgtC+0LfQsNC/0L7Qu9C90LXQvdC40Y8nLFxyXG4gICAgICBocmVmOiAnL2RvY3MvaW50ZWxsaXNlbnNlJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICAn0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40LgnOiBbXHJcbiAgICBwYWdlc1sndXRpbGl0eS1maXJzdCddLFxyXG4gICAgcGFnZXNbJ3Jlc3BvbnNpdmUtZGVzaWduJ10sXHJcbiAgICBwYWdlc1snaG92ZXItZm9jdXMtYW5kLW90aGVyLXN0YXRlcyddLFxyXG4gICAgcGFnZXNbJ2RhcmstbW9kZSddLFxyXG4gICAgcGFnZXNbJ2FkZGluZy1iYXNlLXN0eWxlcyddLFxyXG4gICAgcGFnZXNbJ2V4dHJhY3RpbmctY29tcG9uZW50cyddLFxyXG4gICAgcGFnZXNbJ2FkZGluZy1uZXctdXRpbGl0aWVzJ10sXHJcbiAgICBwYWdlc1snZnVuY3Rpb25zLWFuZC1kaXJlY3RpdmVzJ10sXHJcbiAgXSxcclxuICAn0J3QsNGB0YLRgNC+0LnQutCwJzogW1xyXG4gICAgcGFnZXNbJ2NvbmZpZ3VyYXRpb24nXSxcclxuICAgIHBhZ2VzWyd0aGVtZSddLFxyXG4gICAgcGFnZXNbJ2JyZWFrcG9pbnRzJ10sXHJcbiAgICBwYWdlc1snY3VzdG9taXppbmctY29sb3JzJ10sXHJcbiAgICBwYWdlc1snY3VzdG9taXppbmctc3BhY2luZyddLFxyXG4gICAgcGFnZXNbJ2NvbmZpZ3VyaW5nLXZhcmlhbnRzJ10sXHJcbiAgICBwYWdlc1sncGx1Z2lucyddLFxyXG4gICAgcGFnZXNbJ3ByZXNldHMnXSxcclxuICBdLFxyXG4gICfQkdCw0LfQvtCy0YvQtSDRgdGC0LjQu9C4JzogW3BhZ2VzWydwcmVmbGlnaHQnXV0sXHJcbiAgTGF5b3V0OiBbXHJcbiAgICBwYWdlc1snY29udGFpbmVyJ10sXHJcbiAgICBwYWdlc1snYm94LXNpemluZyddLFxyXG4gICAgcGFnZXNbJ2Rpc3BsYXknXSxcclxuICAgIHBhZ2VzWydmbG9hdCddLFxyXG4gICAgcGFnZXNbJ2NsZWFyJ10sXHJcbiAgICBwYWdlc1snb2JqZWN0LWZpdCddLFxyXG4gICAgcGFnZXNbJ29iamVjdC1wb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ292ZXJmbG93J10sXHJcbiAgICBwYWdlc1snb3ZlcnNjcm9sbC1iZWhhdmlvciddLFxyXG4gICAgcGFnZXNbJ3Bvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1sndG9wLXJpZ2h0LWJvdHRvbS1sZWZ0J10sXHJcbiAgICBwYWdlc1sndmlzaWJpbGl0eSddLFxyXG4gICAgcGFnZXNbJ3otaW5kZXgnXSxcclxuICBdLFxyXG4gIEZsZXhib3g6IFtcclxuICAgIHBhZ2VzWydmbGV4LWRpcmVjdGlvbiddLFxyXG4gICAgcGFnZXNbJ2ZsZXgtd3JhcCddLFxyXG4gICAgcGFnZXNbJ2ZsZXgnXSxcclxuICAgIHBhZ2VzWydmbGV4LWdyb3cnXSxcclxuICAgIHBhZ2VzWydmbGV4LXNocmluayddLFxyXG4gICAgcGFnZXNbJ29yZGVyJ10sXHJcbiAgXSxcclxuICBHcmlkOiBbXHJcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1jb2x1bW4nXSxcclxuICAgIHBhZ2VzWydncmlkLXRlbXBsYXRlLXJvd3MnXSxcclxuICAgIHBhZ2VzWydncmlkLXJvdyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1mbG93J10sXHJcbiAgICBwYWdlc1snZ3JpZC1hdXRvLWNvbHVtbnMnXSxcclxuICAgIHBhZ2VzWydncmlkLWF1dG8tcm93cyddLFxyXG4gICAgcGFnZXNbJ2dhcCddLFxyXG4gIF0sXHJcbiAgJ0JveCBBbGlnbm1lbnQnOiBbXHJcbiAgICBwYWdlc1snanVzdGlmeS1jb250ZW50J10sXHJcbiAgICBwYWdlc1snanVzdGlmeS1pdGVtcyddLFxyXG4gICAgcGFnZXNbJ2p1c3RpZnktc2VsZiddLFxyXG4gICAgcGFnZXNbJ2FsaWduLWNvbnRlbnQnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1pdGVtcyddLFxyXG4gICAgcGFnZXNbJ2FsaWduLXNlbGYnXSxcclxuICAgIHBhZ2VzWydwbGFjZS1jb250ZW50J10sXHJcbiAgICBwYWdlc1sncGxhY2UtaXRlbXMnXSxcclxuICAgIHBhZ2VzWydwbGFjZS1zZWxmJ10sXHJcbiAgXSxcclxuICBTcGFjaW5nOiBbcGFnZXNbJ3BhZGRpbmcnXSwgcGFnZXNbJ21hcmdpbiddLCBwYWdlc1snc3BhY2UnXV0sXHJcbiAgU2l6aW5nOiBbXHJcbiAgICBwYWdlc1snd2lkdGgnXSxcclxuICAgIHBhZ2VzWydtaW4td2lkdGgnXSxcclxuICAgIHBhZ2VzWydtYXgtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydoZWlnaHQnXSxcclxuICAgIHBhZ2VzWydtaW4taGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbWF4LWhlaWdodCddLFxyXG4gIF0sXHJcbiAgVHlwb2dyYXBoeTogW1xyXG4gICAgcGFnZXNbJ2ZvbnQtZmFtaWx5J10sXHJcbiAgICBwYWdlc1snZm9udC1zaXplJ10sXHJcbiAgICBwYWdlc1snZm9udC1zbW9vdGhpbmcnXSxcclxuICAgIHBhZ2VzWydmb250LXN0eWxlJ10sXHJcbiAgICBwYWdlc1snZm9udC13ZWlnaHQnXSxcclxuICAgIHBhZ2VzWydmb250LXZhcmlhbnQtbnVtZXJpYyddLFxyXG4gICAgcGFnZXNbJ2xldHRlci1zcGFjaW5nJ10sXHJcbiAgICBwYWdlc1snbGluZS1oZWlnaHQnXSxcclxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXR5cGUnXSxcclxuICAgIHBhZ2VzWydsaXN0LXN0eWxlLXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItY29sb3InXSxcclxuICAgIHBhZ2VzWydwbGFjZWhvbGRlci1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sndGV4dC1hbGlnbiddLFxyXG4gICAgcGFnZXNbJ3RleHQtY29sb3InXSxcclxuICAgIHBhZ2VzWyd0ZXh0LW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWyd0ZXh0LWRlY29yYXRpb24nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LXRyYW5zZm9ybSddLFxyXG4gICAgcGFnZXNbJ3RleHQtb3ZlcmZsb3cnXSxcclxuICAgIHBhZ2VzWyd2ZXJ0aWNhbC1hbGlnbiddLFxyXG4gICAgcGFnZXNbJ3doaXRlc3BhY2UnXSxcclxuICAgIHBhZ2VzWyd3b3JkLWJyZWFrJ10sXHJcbiAgXSxcclxuICBCYWNrZ3JvdW5kczogW1xyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtYXR0YWNobWVudCddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY2xpcCddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtY29sb3InXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1yZXBlYXQnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLXNpemUnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWltYWdlJ10sXHJcbiAgICBwYWdlc1snZ3JhZGllbnQtY29sb3Itc3RvcHMnXSxcclxuICBdLFxyXG4gIEJvcmRlcnM6IFtcclxuICAgIHBhZ2VzWydib3JkZXItcmFkaXVzJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snYm9yZGVyLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydib3JkZXItc3R5bGUnXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtY29sb3InXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ2RpdmlkZS1zdHlsZSddLFxyXG4gICAgcGFnZXNbJ3Jpbmctd2lkdGgnXSxcclxuICAgIHBhZ2VzWydyaW5nLWNvbG9yJ10sXHJcbiAgICBwYWdlc1sncmluZy1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtd2lkdGgnXSxcclxuICAgIHBhZ2VzWydyaW5nLW9mZnNldC1jb2xvciddLFxyXG4gIF0sXHJcbiAgRWZmZWN0czogW3BhZ2VzWydib3gtc2hhZG93J10sIHBhZ2VzWydvcGFjaXR5J11dLFxyXG4gIFRhYmxlczogW3BhZ2VzWydib3JkZXItY29sbGFwc2UnXSwgcGFnZXNbJ3RhYmxlLWxheW91dCddXSxcclxuICAnVHJhbnNpdGlvbnMgYW5kIEFuaW1hdGlvbic6IFtcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXByb3BlcnR5J10sXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kdXJhdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10sXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1kZWxheSddLFxyXG4gICAgcGFnZXNbJ2FuaW1hdGlvbiddLFxyXG4gIF0sXHJcbiAgVHJhbnNmb3JtczogW1xyXG4gICAgcGFnZXNbJ3RyYW5zZm9ybSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zZm9ybS1vcmlnaW4nXSxcclxuICAgIHBhZ2VzWydzY2FsZSddLFxyXG4gICAgcGFnZXNbJ3JvdGF0ZSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zbGF0ZSddLFxyXG4gICAgcGFnZXNbJ3NrZXcnXSxcclxuICBdLFxyXG4gIEludGVyYWN0aXZpdHk6IFtcclxuICAgIHBhZ2VzWydhcHBlYXJhbmNlJ10sXHJcbiAgICBwYWdlc1snY3Vyc29yJ10sXHJcbiAgICBwYWdlc1snb3V0bGluZSddLFxyXG4gICAgcGFnZXNbJ3BvaW50ZXItZXZlbnRzJ10sXHJcbiAgICBwYWdlc1sncmVzaXplJ10sXHJcbiAgICBwYWdlc1sndXNlci1zZWxlY3QnXSxcclxuICBdLFxyXG4gIFNWRzogW3BhZ2VzWydmaWxsJ10sIHBhZ2VzWydzdHJva2UnXSwgcGFnZXNbJ3N0cm9rZS13aWR0aCddXSxcclxuICBBY2Nlc3NpYmlsaXR5OiBbcGFnZXNbJ3NjcmVlbi1yZWFkZXJzJ11dLFxyXG4gICdPZmZpY2lhbCBQbHVnaW5zJzogW3BhZ2VzWyd0eXBvZ3JhcGh5LXBsdWdpbiddXSxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9