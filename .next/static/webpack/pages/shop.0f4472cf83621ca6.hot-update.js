/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./components/product-card.js":
/*!************************************!*\
  !*** ./components/product-card.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/product-card */ \"./components/product-card.js\");\n/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_product_card__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Adjust the path as needed\nconst shop = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl px-4 py-6 sm:px-6 lg:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-8 text-center\",\n                style: {\n                    fontFamily: \"Manrope, sans-serif\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-wrap gap-4 pt-8\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_product_card__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        productName: \"Polenia 6 Pack\",\n                        description: \"High-quality wireless headphones with noise cancellation and superior sound.\",\n                        price: \"$299.99\",\n                        imageUrl: \"\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n                        lineNumber: 14,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_product_card__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        productName: \"Polenia 24 pack\",\n                        description: \"A stylish smartwatch with health tracking features.\",\n                        price: \"$199.99\",\n                        imageUrl: \"\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n                        lineNumber: 20,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_product_card__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        productName: \"Polenia 12 pack\",\n                        description: \"Portable Bluetooth speaker with excellent sound quality.\",\n                        price: \"$149.99\",\n                        imageUrl: \"\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n                        lineNumber: 26,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n                lineNumber: 13,\n                columnNumber: 2\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/poleniamx.github.io/pages/shop.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (shop);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaG9wLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3lCLENBQUUsNEJBQTRCO0FBR2pGLE1BQU1FLE9BQU87SUFDWCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFHRCxXQUFVO2dCQUFzQ0UsT0FBTztvQkFBRUMsWUFBWTtnQkFBc0I7Ozs7OzswQkFJcEcsOERBQUNKO2dCQUFJQyxXQUFVOztvQkFBMkM7a0NBQ3pELDhEQUFDSCxpRUFBV0E7d0JBQ1ZPLGFBQVk7d0JBQ1pDLGFBQVk7d0JBQ1pDLE9BQU07d0JBQ05DLFVBQVM7Ozs7OztrQ0FFWCw4REFBQ1YsaUVBQVdBO3dCQUNWTyxhQUFZO3dCQUNaQyxhQUFZO3dCQUNaQyxPQUFNO3dCQUNOQyxVQUFTOzs7Ozs7a0NBRVgsOERBQUNWLGlFQUFXQTt3QkFDVk8sYUFBWTt3QkFDWkMsYUFBWTt3QkFDWkMsT0FBTTt3QkFDTkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7QUFFQSwrREFBZVQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaG9wLmpzP2I1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQnOyAgLy8gQWRqdXN0IHRoZSBwYXRoIGFzIG5lZWRlZFxuXG5cbmNvbnN0IHNob3AgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgcHgtNCBweS02IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgey8qIFRpdGxlIHdpdGggbGFyZ2UgZm9udCBzaXplICovfVxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBtYi04IHRleHQtY2VudGVyXCIgc3R5bGU9e3sgZm9udEZhbWlseTogJ01hbnJvcGUsIHNhbnMtc2VyaWYnIH19PlxuICAgICAgPC9oMT5cbiAgICAgIFxuICAgICAgey8qIENlbnRlcmluZyBQcm9kdWN0IENhcmRzICovfVxuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTQgcHQtOFwiPiAgey8qIEFkZGVkIG10LTggKi99XG4gIDxQcm9kdWN0Q2FyZFxuICAgIHByb2R1Y3ROYW1lPVwiUG9sZW5pYSA2IFBhY2tcIlxuICAgIGRlc2NyaXB0aW9uPVwiSGlnaC1xdWFsaXR5IHdpcmVsZXNzIGhlYWRwaG9uZXMgd2l0aCBub2lzZSBjYW5jZWxsYXRpb24gYW5kIHN1cGVyaW9yIHNvdW5kLlwiXG4gICAgcHJpY2U9XCIkMjk5Ljk5XCJcbiAgICBpbWFnZVVybD1cIlwiXG4gIC8+XG4gIDxQcm9kdWN0Q2FyZFxuICAgIHByb2R1Y3ROYW1lPVwiUG9sZW5pYSAyNCBwYWNrXCJcbiAgICBkZXNjcmlwdGlvbj1cIkEgc3R5bGlzaCBzbWFydHdhdGNoIHdpdGggaGVhbHRoIHRyYWNraW5nIGZlYXR1cmVzLlwiXG4gICAgcHJpY2U9XCIkMTk5Ljk5XCJcbiAgICBpbWFnZVVybD1cIlwiXG4gIC8+XG4gIDxQcm9kdWN0Q2FyZFxuICAgIHByb2R1Y3ROYW1lPVwiUG9sZW5pYSAxMiBwYWNrXCJcbiAgICBkZXNjcmlwdGlvbj1cIlBvcnRhYmxlIEJsdWV0b290aCBzcGVha2VyIHdpdGggZXhjZWxsZW50IHNvdW5kIHF1YWxpdHkuXCJcbiAgICBwcmljZT1cIiQxNDkuOTlcIlxuICAgIGltYWdlVXJsPVwiXCJcbiAgLz5cbjwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG9wO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdENhcmQiLCJzaG9wIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJwcm9kdWN0TmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});