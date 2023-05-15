"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PopularSection.js":
/*!******************************************!*\
  !*** ./src/components/PopularSection.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pokedex_promise_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pokedex-promise-v2 */ \"./node_modules/pokedex-promise-v2/dist/src/index.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst pokedex = new pokedex_promise_v2__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst PopularSection = ()=>{\n    _s();\n    const [popularPokemons, setPopularPokemons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPopularPokemons = ()=>{\n        pokedex.getPokemonsList().then((res)=>{\n            // Get all the pokemon names\n            const pokemonNames = res.results.map((pokemon)=>pokemon.name);\n            // Randomly select three of them\n            const selectedPokemonNames = [];\n            while(selectedPokemonNames.length < 3){\n                const randomIndex = Math.floor(Math.random() * pokemonNames.length);\n                const randomPokemonName = pokemonNames[randomIndex];\n                if (!selectedPokemonNames.includes(randomPokemonName)) {\n                    selectedPokemonNames.push(randomPokemonName);\n                }\n            }\n            // Fetch the selected pokemons' details\n            const promises = selectedPokemonNames.map((name)=>pokedex.getPokemonByName(name));\n            Promise.all(promises).then((pokemons)=>setPopularPokemons(pokemons));\n        }).catch((err)=>console.log(err));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPopularPokemons();\n        const interval = setInterval(()=>{\n            fetchPopularPokemons();\n        }, 10000); // 10 seconds\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-8 pb-16 px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"py-4 text-2xl text-white\",\n                    children: \"Popular Pokemon\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hussa\\\\Desktop\\\\2023-coding-projects\\\\pokedex-ct-main\\\\src\\\\components\\\\PopularSection.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[400px] md:w-[100%] mx-auto\",\n                    children: popularPokemons.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            img: p.sprites.front_default,\n                            name: p.name,\n                            types: p.types\n                        }, p.name, false, {\n                            fileName: \"C:\\\\Users\\\\hussa\\\\Desktop\\\\2023-coding-projects\\\\pokedex-ct-main\\\\src\\\\components\\\\PopularSection.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hussa\\\\Desktop\\\\2023-coding-projects\\\\pokedex-ct-main\\\\src\\\\components\\\\PopularSection.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hussa\\\\Desktop\\\\2023-coding-projects\\\\pokedex-ct-main\\\\src\\\\components\\\\PopularSection.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hussa\\\\Desktop\\\\2023-coding-projects\\\\pokedex-ct-main\\\\src\\\\components\\\\PopularSection.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PopularSection, \"qF8uL6UQXuS2cqPvZyRlSZCLIRs=\");\n_c = PopularSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularSection);\nvar _c;\n$RefreshReg$(_c, \"PopularSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3B1bGFyU2VjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDVjtBQUNmO0FBRTFCLE1BQU1LLFVBQVUsSUFBSUYsMERBQU9BO0FBRTNCLE1BQU1HLGlCQUFpQixJQUFNOztJQUMzQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTVEsdUJBQXVCLElBQU07UUFDakNKLFFBQ0dLLGVBQWUsR0FDZkMsSUFBSSxDQUFDLENBQUNDLE1BQVE7WUFDYiw0QkFBNEI7WUFDNUIsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsSUFBSTtZQUM5RCxnQ0FBZ0M7WUFDaEMsTUFBTUMsdUJBQXVCLEVBQUU7WUFDL0IsTUFBT0EscUJBQXFCQyxNQUFNLEdBQUcsRUFBRztnQkFDdEMsTUFBTUMsY0FBY0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtWLGFBQWFNLE1BQU07Z0JBQ2xFLE1BQU1LLG9CQUFvQlgsWUFBWSxDQUFDTyxZQUFZO2dCQUNuRCxJQUFJLENBQUNGLHFCQUFxQk8sUUFBUSxDQUFDRCxvQkFBb0I7b0JBQ3JETixxQkFBcUJRLElBQUksQ0FBQ0Y7Z0JBQzVCLENBQUM7WUFDSDtZQUNBLHVDQUF1QztZQUN2QyxNQUFNRyxXQUFXVCxxQkFBcUJILEdBQUcsQ0FBQyxDQUFDRSxPQUN6Q1osUUFBUXVCLGdCQUFnQixDQUFDWDtZQUUzQlksUUFBUUMsR0FBRyxDQUFDSCxVQUFVaEIsSUFBSSxDQUFDLENBQUNvQixXQUFhdkIsbUJBQW1CdUI7UUFDOUQsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEM7SUFFQS9CLGdEQUFTQSxDQUFDLElBQU07UUFDZE87UUFDQSxNQUFNMkIsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDNUI7UUFDRixHQUFHLFFBQVEsYUFBYTtRQUN4QixPQUFPLElBQU02QixjQUFjRjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEyQjs7Ozs7OzhCQUN6Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pqQyxnQkFBZ0JRLEdBQUcsQ0FBQyxDQUFDMkIsa0JBQ3BCLDhEQUFDdEMsNkNBQUlBOzRCQUVIdUMsS0FBS0QsRUFBRUUsT0FBTyxDQUFDQyxhQUFhOzRCQUM1QjVCLE1BQU15QixFQUFFekIsSUFBSTs0QkFDWjZCLE9BQU9KLEVBQUVJLEtBQUs7MkJBSFRKLEVBQUV6QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekI7R0FwRE1YO0tBQUFBO0FBc0ROLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvcHVsYXJTZWN0aW9uLmpzP2RiOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBva2VkZXggZnJvbSBcInBva2VkZXgtcHJvbWlzZS12MlwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5jb25zdCBwb2tlZGV4ID0gbmV3IFBva2VkZXgoKTtcclxuXHJcbmNvbnN0IFBvcHVsYXJTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3B1bGFyUG9rZW1vbnMsIHNldFBvcHVsYXJQb2tlbW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUG9wdWxhclBva2Vtb25zID0gKCkgPT4ge1xyXG4gICAgcG9rZWRleFxyXG4gICAgICAuZ2V0UG9rZW1vbnNMaXN0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIEdldCBhbGwgdGhlIHBva2Vtb24gbmFtZXNcclxuICAgICAgICBjb25zdCBwb2tlbW9uTmFtZXMgPSByZXMucmVzdWx0cy5tYXAoKHBva2Vtb24pID0+IHBva2Vtb24ubmFtZSk7XHJcbiAgICAgICAgLy8gUmFuZG9tbHkgc2VsZWN0IHRocmVlIG9mIHRoZW1cclxuICAgICAgICBjb25zdCBzZWxlY3RlZFBva2Vtb25OYW1lcyA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChzZWxlY3RlZFBva2Vtb25OYW1lcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBva2Vtb25OYW1lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgY29uc3QgcmFuZG9tUG9rZW1vbk5hbWUgPSBwb2tlbW9uTmFtZXNbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgICAgaWYgKCFzZWxlY3RlZFBva2Vtb25OYW1lcy5pbmNsdWRlcyhyYW5kb21Qb2tlbW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQb2tlbW9uTmFtZXMucHVzaChyYW5kb21Qb2tlbW9uTmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZldGNoIHRoZSBzZWxlY3RlZCBwb2tlbW9ucycgZGV0YWlsc1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gc2VsZWN0ZWRQb2tlbW9uTmFtZXMubWFwKChuYW1lKSA9PlxyXG4gICAgICAgICAgcG9rZWRleC5nZXRQb2tlbW9uQnlOYW1lKG5hbWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigocG9rZW1vbnMpID0+IHNldFBvcHVsYXJQb2tlbW9ucyhwb2tlbW9ucykpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9wdWxhclBva2Vtb25zKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgZmV0Y2hQb3B1bGFyUG9rZW1vbnMoKTtcclxuICAgIH0sIDEwMDAwKTsgLy8gMTAgc2Vjb25kc1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBwYi0xNiBweC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTQgdGV4dC0yeGwgdGV4dC13aGl0ZVwiPlBvcHVsYXIgUG9rZW1vbjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC0xMCB3LVs0MDBweF0gbWQ6dy1bMTAwJV0gbXgtYXV0b1wiPlxyXG4gICAgICAgICAge3BvcHVsYXJQb2tlbW9ucy5tYXAoKHApID0+IChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBrZXk9e3AubmFtZX1cclxuICAgICAgICAgICAgICBpbWc9e3Auc3ByaXRlcy5mcm9udF9kZWZhdWx0fVxyXG4gICAgICAgICAgICAgIG5hbWU9e3AubmFtZX1cclxuICAgICAgICAgICAgICB0eXBlcz17cC50eXBlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyU2VjdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQb2tlZGV4IiwiQ2FyZCIsInBva2VkZXgiLCJQb3B1bGFyU2VjdGlvbiIsInBvcHVsYXJQb2tlbW9ucyIsInNldFBvcHVsYXJQb2tlbW9ucyIsImZldGNoUG9wdWxhclBva2Vtb25zIiwiZ2V0UG9rZW1vbnNMaXN0IiwidGhlbiIsInJlcyIsInBva2Vtb25OYW1lcyIsInJlc3VsdHMiLCJtYXAiLCJwb2tlbW9uIiwibmFtZSIsInNlbGVjdGVkUG9rZW1vbk5hbWVzIiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Qb2tlbW9uTmFtZSIsImluY2x1ZGVzIiwicHVzaCIsInByb21pc2VzIiwiZ2V0UG9rZW1vbkJ5TmFtZSIsIlByb21pc2UiLCJhbGwiLCJwb2tlbW9ucyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW1nIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJ0eXBlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PopularSection.js\n"));

/***/ })

});