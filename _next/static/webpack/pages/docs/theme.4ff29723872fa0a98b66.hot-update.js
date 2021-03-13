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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdnMvZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlcyIsImNyZWF0ZVBhZ2VMaXN0IiwicmVxdWlyZSIsImRvY3VtZW50YXRpb25OYXYiLCJ0aXRsZSIsImhyZWYiLCJGbGV4Ym94IiwiR3JpZCIsIlNwYWNpbmciLCJTaXppbmciLCJUeXBvZ3JhcGh5IiwiQmFja2dyb3VuZHMiLCJCb3JkZXJzIiwiRWZmZWN0cyIsIlRhYmxlcyIsIlRyYW5zZm9ybXMiLCJJbnRlcmFjdGl2aXR5IiwiU1ZHIiwiQWNjZXNzaWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw0RUFBYyxDQUMxQkMsb0RBRDBCLEVBRTFCLE1BRjBCLENBQTVCO0FBS08sSUFBTUMsZ0JBQWdCLEdBQUc7QUFDOUIsbUJBQWlCLENBQ2Y7QUFDRUMsU0FBSyxFQUFFLFdBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEZSxFQUtmO0FBQ0VELFNBQUssRUFBRSxzQkFEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxlLEVBU2Y7QUFDRUQsU0FBSyxFQUFFLGtCQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBVGUsRUFhZjtBQUNFRCxTQUFLLEVBQUUsaUNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FiZSxFQWlCZjtBQUNFRCxTQUFLLEVBQUUsNEJBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FqQmUsRUFxQmY7QUFDRUQsU0FBSyxFQUFFLG9CQURUO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBckJlLEVBeUJmO0FBQ0VELFNBQUssRUFBRSw2Q0FEVDtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQXpCZSxDQURhO0FBK0I5Qix3QkFBc0IsQ0FDcEJMLEtBQUssQ0FBQyxlQUFELENBRGUsRUFFcEJBLEtBQUssQ0FBQyxtQkFBRCxDQUZlLEVBR3BCQSxLQUFLLENBQUMsOEJB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QUFELENBSFEsRUFJYkEsS0FBSyxDQUFDLGdCQUFELENBSlEsRUFLYkEsS0FBSyxDQUFDLFFBQUQsQ0FMUSxFQU1iQSxLQUFLLENBQUMsYUFBRCxDQU5RLENBNUtlO0FBb0w5QmlCLEtBQUcsRUFBRSxDQUFDakIsS0FBSyxDQUFDLE1BQUQsQ0FBTixFQUFnQkEsS0FBSyxDQUFDLFFBQUQsQ0FBckIsRUFBaUNBLEtBQUssQ0FBQyxjQUFELENBQXRDLENBcEx5QjtBQXFMOUJrQixlQUFhLEVBQUUsQ0FBQ2xCLEtBQUssQ0FBQyxnQkFBRCxDQUFOLENBckxlO0FBc0w5QixzQkFBb0IsQ0FBQ0EsS0FBSyxDQUFDLG1CQUFELENBQU47QUF0TFUsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jcy90aGVtZS40ZmYyOTcyMzg3MmZhMGE5OGI2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFnZUxpc3QgfSBmcm9tICdAL3V0aWxzL2NyZWF0ZVBhZ2VMaXN0J1xyXG5cclxuY29uc3QgcGFnZXMgPSBjcmVhdGVQYWdlTGlzdChcclxuICByZXF1aXJlLmNvbnRleHQoYC4uL3BhZ2VzL2RvY3MvP21ldGE9dGl0bGUsc2hvcnRUaXRsZSxwdWJsaXNoZWRgLCBmYWxzZSwgL1xcLm1keCQvKSxcclxuICAnZG9jcydcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50YXRpb25OYXYgPSB7XHJcbiAgJ9Cd0LDRh9Cw0LvQviDRgNCw0LHQvtGC0YsnOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2luc3RhbGxhdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9Cf0YDQuNC80LXRh9Cw0L3QuNGPINC6INCy0YvQv9GD0YHQutGDJyxcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vYmxvZy50YWlsd2luZGNzcy5jb20vdGFpbHdpbmRjc3MtdjInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQntCx0L3QvtCy0LvQtdC90LjQtSDQtNC+IHYyJyxcclxuICAgICAgaHJlZjogJy9kb2NzL3VwZ3JhZGluZy10by12MicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ9CY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INGBINC/0YDQtdC/0YDQvtGG0LXRgdGB0L7RgNCw0LzQuCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy91c2luZy13aXRoLXByZXByb2Nlc3NvcnMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfQntC/0YLQuNC80LjQt9Cw0YbQuNGPINC00LvRjyDQv9GA0L7QtNCw0LrRiNC10L3QsCcsXHJcbiAgICAgIGhyZWY6ICcvZG9jcy9vcHRpbWl6aW5nLWZvci1wcm9kdWN0aW9uJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0J/QvtC00LTQtdGA0LbQutCwINCx0YDQsNGD0LfQtdGA0LAnLFxyXG4gICAgICBocmVmOiAnL2RvY3MvYnJvd3Nlci1zdXBwb3J0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn0JjQvdGC0LXQu9C70LXQutGC0YPQsNC70YzQvdGL0LUg0L/RgNC10LTQu9C+0LbQtdC90LjRjyDQsNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuICAgICAgaHJlZjogJy9kb2NzL2ludGVsbGlzZW5zZScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgJ9Ce0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4JzogW1xyXG4gICAgcGFnZXNbJ3V0aWxpdHktZmlyc3QnXSxcclxuICAgIHBhZ2VzWydyZXNwb25zaXZlLWRlc2lnbiddLFxyXG4gICAgcGFnZXNbJ2hvdmVyLWZvY3VzLWFuZC1vdGhlci1zdGF0ZXMnXSxcclxuICAgIHBhZ2VzWydkYXJrLW1vZGUnXSxcclxuICAgIHBhZ2VzWydhZGRpbmctYmFzZS1zdHlsZXMnXSxcclxuICAgIHBhZ2VzWydleHRyYWN0aW5nLWNvbXBvbmVudHMnXSxcclxuICAgIHBhZ2VzWydhZGRpbmctbmV3LXV0aWxpdGllcyddLFxyXG4gICAgcGFnZXNbJ2Z1bmN0aW9ucy1hbmQtZGlyZWN0aXZlcyddLFxyXG4gIF0sXHJcbiAgJ9Cd0LDRgdGC0YDQvtC50LrQsCc6IFtcclxuICAgIHBhZ2VzWydjb25maWd1cmF0aW9uJ10sXHJcbiAgICBwYWdlc1sndGhlbWUnXSxcclxuICAgIHBhZ2VzWydicmVha3BvaW50cyddLFxyXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLWNvbG9ycyddLFxyXG4gICAgcGFnZXNbJ2N1c3RvbWl6aW5nLXNwYWNpbmcnXSxcclxuICAgIHBhZ2VzWydjb25maWd1cmluZy12YXJpYW50cyddLFxyXG4gICAgcGFnZXNbJ3BsdWdpbnMnXSxcclxuICAgIHBhZ2VzWydwcmVzZXRzJ10sXHJcbiAgXSxcclxuICAn0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuCc6IFtwYWdlc1sncHJlZmxpZ2h0J11dLFxyXG4gICfQnNCw0LrQtdGCJzogW1xyXG4gICAgcGFnZXNbJ2NvbnRhaW5lciddLFxyXG4gICAgcGFnZXNbJ2JveC1zaXppbmcnXSxcclxuICAgIHBhZ2VzWydkaXNwbGF5J10sXHJcbiAgICBwYWdlc1snZmxvYXQnXSxcclxuICAgIHBhZ2VzWydjbGVhciddLFxyXG4gICAgcGFnZXNbJ29iamVjdC1maXQnXSxcclxuICAgIHBhZ2VzWydvYmplY3QtcG9zaXRpb24nXSxcclxuICAgIHBhZ2VzWydvdmVyZmxvdyddLFxyXG4gICAgcGFnZXNbJ292ZXJzY3JvbGwtYmVoYXZpb3InXSxcclxuICAgIHBhZ2VzWydwb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RvcC1yaWdodC1ib3R0b20tbGVmdCddLFxyXG4gICAgcGFnZXNbJ3Zpc2liaWxpdHknXSxcclxuICAgIHBhZ2VzWyd6LWluZGV4J10sXHJcbiAgXSxcclxuICBGbGV4Ym94OiBbXHJcbiAgICBwYWdlc1snZmxleC1kaXJlY3Rpb24nXSxcclxuICAgIHBhZ2VzWydmbGV4LXdyYXAnXSxcclxuICAgIHBhZ2VzWydmbGV4J10sXHJcbiAgICBwYWdlc1snZmxleC1ncm93J10sXHJcbiAgICBwYWdlc1snZmxleC1zaHJpbmsnXSxcclxuICAgIHBhZ2VzWydvcmRlciddLFxyXG4gIF0sXHJcbiAgR3JpZDogW1xyXG4gICAgcGFnZXNbJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtY29sdW1uJ10sXHJcbiAgICBwYWdlc1snZ3JpZC10ZW1wbGF0ZS1yb3dzJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1yb3cnXSxcclxuICAgIHBhZ2VzWydncmlkLWF1dG8tZmxvdyddLFxyXG4gICAgcGFnZXNbJ2dyaWQtYXV0by1jb2x1bW5zJ10sXHJcbiAgICBwYWdlc1snZ3JpZC1hdXRvLXJvd3MnXSxcclxuICAgIHBhZ2VzWydnYXAnXSxcclxuICBdLFxyXG4gICdCb3ggQWxpZ25tZW50JzogW1xyXG4gICAgcGFnZXNbJ2p1c3RpZnktY29udGVudCddLFxyXG4gICAgcGFnZXNbJ2p1c3RpZnktaXRlbXMnXSxcclxuICAgIHBhZ2VzWydqdXN0aWZ5LXNlbGYnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1jb250ZW50J10sXHJcbiAgICBwYWdlc1snYWxpZ24taXRlbXMnXSxcclxuICAgIHBhZ2VzWydhbGlnbi1zZWxmJ10sXHJcbiAgICBwYWdlc1sncGxhY2UtY29udGVudCddLFxyXG4gICAgcGFnZXNbJ3BsYWNlLWl0ZW1zJ10sXHJcbiAgICBwYWdlc1sncGxhY2Utc2VsZiddLFxyXG4gIF0sXHJcbiAgU3BhY2luZzogW3BhZ2VzWydwYWRkaW5nJ10sIHBhZ2VzWydtYXJnaW4nXSwgcGFnZXNbJ3NwYWNlJ11dLFxyXG4gIFNpemluZzogW1xyXG4gICAgcGFnZXNbJ3dpZHRoJ10sXHJcbiAgICBwYWdlc1snbWluLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snbWF4LXdpZHRoJ10sXHJcbiAgICBwYWdlc1snaGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbWluLWhlaWdodCddLFxyXG4gICAgcGFnZXNbJ21heC1oZWlnaHQnXSxcclxuICBdLFxyXG4gIFR5cG9ncmFwaHk6IFtcclxuICAgIHBhZ2VzWydmb250LWZhbWlseSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtc2l6ZSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtc21vb3RoaW5nJ10sXHJcbiAgICBwYWdlc1snZm9udC1zdHlsZSddLFxyXG4gICAgcGFnZXNbJ2ZvbnQtd2VpZ2h0J10sXHJcbiAgICBwYWdlc1snZm9udC12YXJpYW50LW51bWVyaWMnXSxcclxuICAgIHBhZ2VzWydsZXR0ZXItc3BhY2luZyddLFxyXG4gICAgcGFnZXNbJ2xpbmUtaGVpZ2h0J10sXHJcbiAgICBwYWdlc1snbGlzdC1zdHlsZS10eXBlJ10sXHJcbiAgICBwYWdlc1snbGlzdC1zdHlsZS1wb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ3BsYWNlaG9sZGVyLWNvbG9yJ10sXHJcbiAgICBwYWdlc1sncGxhY2Vob2xkZXItb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ3RleHQtYWxpZ24nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LWNvbG9yJ10sXHJcbiAgICBwYWdlc1sndGV4dC1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1sndGV4dC1kZWNvcmF0aW9uJ10sXHJcbiAgICBwYWdlc1sndGV4dC10cmFuc2Zvcm0nXSxcclxuICAgIHBhZ2VzWyd0ZXh0LW92ZXJmbG93J10sXHJcbiAgICBwYWdlc1sndmVydGljYWwtYWxpZ24nXSxcclxuICAgIHBhZ2VzWyd3aGl0ZXNwYWNlJ10sXHJcbiAgICBwYWdlc1snd29yZC1icmVhayddLFxyXG4gIF0sXHJcbiAgQmFja2dyb3VuZHM6IFtcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNsaXAnXSxcclxuICAgIHBhZ2VzWydiYWNrZ3JvdW5kLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1wb3NpdGlvbiddLFxyXG4gICAgcGFnZXNbJ2JhY2tncm91bmQtcmVwZWF0J10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1zaXplJ10sXHJcbiAgICBwYWdlc1snYmFja2dyb3VuZC1pbWFnZSddLFxyXG4gICAgcGFnZXNbJ2dyYWRpZW50LWNvbG9yLXN0b3BzJ10sXHJcbiAgXSxcclxuICBCb3JkZXJzOiBbXHJcbiAgICBwYWdlc1snYm9yZGVyLXJhZGl1cyddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci13aWR0aCddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci1jb2xvciddLFxyXG4gICAgcGFnZXNbJ2JvcmRlci1vcGFjaXR5J10sXHJcbiAgICBwYWdlc1snYm9yZGVyLXN0eWxlJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLXdpZHRoJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLWNvbG9yJ10sXHJcbiAgICBwYWdlc1snZGl2aWRlLW9wYWNpdHknXSxcclxuICAgIHBhZ2VzWydkaXZpZGUtc3R5bGUnXSxcclxuICAgIHBhZ2VzWydyaW5nLXdpZHRoJ10sXHJcbiAgICBwYWdlc1sncmluZy1jb2xvciddLFxyXG4gICAgcGFnZXNbJ3Jpbmctb3BhY2l0eSddLFxyXG4gICAgcGFnZXNbJ3Jpbmctb2Zmc2V0LXdpZHRoJ10sXHJcbiAgICBwYWdlc1sncmluZy1vZmZzZXQtY29sb3InXSxcclxuICBdLFxyXG4gIEVmZmVjdHM6IFtwYWdlc1snYm94LXNoYWRvdyddLCBwYWdlc1snb3BhY2l0eSddXSxcclxuICBUYWJsZXM6IFtwYWdlc1snYm9yZGVyLWNvbGxhcHNlJ10sIHBhZ2VzWyd0YWJsZS1sYXlvdXQnXV0sXHJcbiAgJ1RyYW5zaXRpb25zIGFuZCBBbmltYXRpb24nOiBbXHJcbiAgICBwYWdlc1sndHJhbnNpdGlvbi1wcm9wZXJ0eSddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSxcclxuICAgIHBhZ2VzWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddLFxyXG4gICAgcGFnZXNbJ3RyYW5zaXRpb24tZGVsYXknXSxcclxuICAgIHBhZ2VzWydhbmltYXRpb24nXSxcclxuICBdLFxyXG4gIFRyYW5zZm9ybXM6IFtcclxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0nXSxcclxuICAgIHBhZ2VzWyd0cmFuc2Zvcm0tb3JpZ2luJ10sXHJcbiAgICBwYWdlc1snc2NhbGUnXSxcclxuICAgIHBhZ2VzWydyb3RhdGUnXSxcclxuICAgIHBhZ2VzWyd0cmFuc2xhdGUnXSxcclxuICAgIHBhZ2VzWydza2V3J10sXHJcbiAgXSxcclxuICBJbnRlcmFjdGl2aXR5OiBbXHJcbiAgICBwYWdlc1snYXBwZWFyYW5jZSddLFxyXG4gICAgcGFnZXNbJ2N1cnNvciddLFxyXG4gICAgcGFnZXNbJ291dGxpbmUnXSxcclxuICAgIHBhZ2VzWydwb2ludGVyLWV2ZW50cyddLFxyXG4gICAgcGFnZXNbJ3Jlc2l6ZSddLFxyXG4gICAgcGFnZXNbJ3VzZXItc2VsZWN0J10sXHJcbiAgXSxcclxuICBTVkc6IFtwYWdlc1snZmlsbCddLCBwYWdlc1snc3Ryb2tlJ10sIHBhZ2VzWydzdHJva2Utd2lkdGgnXV0sXHJcbiAgQWNjZXNzaWJpbGl0eTogW3BhZ2VzWydzY3JlZW4tcmVhZGVycyddXSxcclxuICAnT2ZmaWNpYWwgUGx1Z2lucyc6IFtwYWdlc1sndHlwb2dyYXBoeS1wbHVnaW4nXV0sXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==