"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/articles/[id]/page",{

/***/ "(app-pages-browser)/./src/app/Components/ArticleHeader.tsx":
/*!**********************************************!*\
  !*** ./src/app/Components/ArticleHeader.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/logo.png */ \"(app-pages-browser)/./public/assets/logo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ArticleHeader() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hide, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleShow = ()=>{\n        setHide(true);\n        setShow(hide);\n    };\n    const handleHide = ()=>{\n        setShow(true);\n        setHide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full flex flex-col items-center mb-6 border-b border-[#676767] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden w-[90%] lg:flex flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"\",\n                        className: \"w-[98px] h-[45px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-row gap-3 text-[8px] lg:text-[14px] font-[300] mt-0 md:mt-0 items-center\",\n                            children: [\n                                Navcontent.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"lg:hover:underline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            href: item.link,\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 76\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 33\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"border rounded-[5px] p-[4px]\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-[black] text-white rounded-[5px] p-[4px]\",\n                                    children: \"Subscribe\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-between lg:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"\",\n                            className: \"h-[38px] w-[138.77px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex items-end\",\n                                onClick: handleShow,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mr-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-[10px] h-[2px] bg-[#000]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-[10px] h-[2px] bg-[#000] my-[2px]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-[10px] h-[2px] bg-[#000]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 18\n                            }, this),\n                            hide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: handleHide,\n                                className: \"mr-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-right font-[800] text-[24px] text-[black]\",\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex \",\n                children: hide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"grid grid-cols-2 gap-3 text-[8px] lg:text-[14px] font-[300] mt-0 md:mt-0 items-left\",\n                        children: [\n                            Navcontent.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"lg:hover:underline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        href: item.link,\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 76\n                                    }, this)\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border rounded-[5px] p-[4px]\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-[black] text-white rounded-[5px] p-[4px]\",\n                                children: \"Subscribe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 22\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(ArticleHeader, \"RhP7BXaiQwRG/tX4YPBSkOUSy+A=\");\n_c = ArticleHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleHeader);\nconst Navcontent = [\n    {\n        link: \"/\",\n        name: \"Home\"\n    },\n    {\n        link: \"\",\n        name: \"Latest News\"\n    },\n    {\n        link: \"\",\n        name: \"Advertise with us\"\n    },\n    {\n        link: \"\",\n        name: \"Privacy + T&Cs\"\n    },\n    {\n        link: \"\",\n        name: \"FAQs\"\n    },\n    {\n        link: \"\",\n        name: \"Contact\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"ArticleHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9BcnRpY2xlSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUM7QUFDVDtBQUNvQjtBQUN0QjtBQUc1QixTQUFTSzs7SUFDTCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1TLGFBQWE7UUFDZkQsUUFBUTtRQUNSRixRQUFRQztJQUNaO0lBRUEsTUFBTUcsYUFBYTtRQUNmSixRQUFRO1FBQ1JFLFFBQVE7SUFDWjtJQUNGLHFCQUNFLDhEQUFDRztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDWCxrREFBS0E7d0JBQUNhLEtBQUtaLCtEQUFJQTt3QkFBRWEsS0FBSTt3QkFBR0gsV0FBVTs7Ozs7O2tDQUNuQyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ0gsNEVBQUNJOzRCQUFHSixXQUFVOztnQ0FDVEssV0FBV0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLGtCQUNuQiw4REFBQ0M7d0NBQUdULFdBQVU7a0RBQTZCLDRFQUFDVCxpREFBSUE7NENBQUNtQixNQUFNSCxLQUFLSSxJQUFJO3NEQUFHSixLQUFLSyxJQUFJOzs7Ozs7dUNBQXBDSjs7Ozs7OENBRzVDLDhEQUFDSztvQ0FBT2IsV0FBVTs4Q0FBK0I7Ozs7Ozs4Q0FHakQsOERBQUNhO29DQUFPYixXQUFVOzhDQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVW5GLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2YsOERBQUNDO2tDQUNFLDRFQUFDWixrREFBS0E7NEJBQUNhLEtBQUtaLCtEQUFJQTs0QkFBRWEsS0FBSTs0QkFBR0gsV0FBVTs7Ozs7Ozs7Ozs7a0NBR3ZDLDhEQUFDQzs7NEJBQ0FSLHNCQUFRLDhEQUFDUTtnQ0FBSUQsV0FBVTtnQ0FBd0JjLFNBQVNqQjswQ0FFakQsNEVBQUNJO29DQUFJRCxXQUFVOztzREFDZiw4REFBQ0M7NENBQUlELFdBQVU7Ozs7OztzREFDZiw4REFBQ0M7NENBQUlELFdBQVU7Ozs7OztzREFDZiw4REFBQ0M7NENBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdsQkwsc0JBQVEsOERBQUNNO2dDQUFJYSxTQUFTaEI7Z0NBQVlFLFdBQVU7MENBQzdDLDRFQUFDZTtvQ0FBR2YsV0FBVTs4Q0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uRSw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBR1ZMLHNCQUFRLDhEQUFDTTtvQkFBSUQsV0FBVTs4QkFDWiw0RUFBQ0k7d0JBQUdKLFdBQVU7OzRCQUNUSyxXQUFXQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ25CLDhEQUFDQztvQ0FBR1QsV0FBVTs4Q0FBNkIsNEVBQUNULGlEQUFJQTt3Q0FBQ21CLE1BQU1ILEtBQUtJLElBQUk7a0RBQUdKLEtBQUtLLElBQUk7Ozs7OzttQ0FBcENKOzs7OzswQ0FHNUMsOERBQUNLO2dDQUFPYixXQUFVOzBDQUErQjs7Ozs7OzBDQUdqRCw4REFBQ2E7Z0NBQU9iLFdBQVU7MENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVGO0dBL0VTUjtLQUFBQTtBQWlGVCwrREFBZUEsYUFBYUEsRUFBQTtBQUU1QixNQUFNYSxhQUFhO0lBRWY7UUFDSU0sTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtJQUNBO1FBQ0lELE1BQU07UUFDTkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtJQUNBO1FBQ0lELE1BQU07UUFDTkMsTUFBTTtJQUNWO0NBSUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21wb25lbnRzL0FydGljbGVIZWFkZXIudHN4P2Q5M2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9sb2dvLnBuZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL21lbnUucG5nJ1xyXG5cclxuZnVuY3Rpb24gQXJ0aWNsZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCk9PiB7XHJcbiAgICAgICAgc2V0SGlkZSh0cnVlKVxyXG4gICAgICAgIHNldFNob3coaGlkZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVIaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3codHJ1ZSlcclxuICAgICAgICBzZXRIaWRlKGZhbHNlKVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi02IGJvcmRlci1iIGJvcmRlci1bIzY3Njc2N10gJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIHctWzkwJV0gbGc6ZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PScnIGNsYXNzTmFtZT0ndy1bOThweF0gaC1bNDVweF0nLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMyB0ZXh0LVs4cHhdIGxnOnRleHQtWzE0cHhdIGZvbnQtWzMwMF0gbXQtMCBtZDptdC0wIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TmF2Y29udGVudC5tYXAoKGl0ZW0sIGk6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xnOmhvdmVyOnVuZGVybGluZScga2V5PXtpfT48TGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLm5hbWV9PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYm9yZGVyIHJvdW5kZWQtWzVweF0gcC1bNHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLVtibGFja10gdGV4dC13aGl0ZSByb3VuZGVkLVs1cHhdIHAtWzRweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgey8qIG1vYmlsZSB2aWV3ICAqL31cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbGc6aGlkZGVuJz5cclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PScnIGNsYXNzTmFtZT0naC1bMzhweF0gdy1bMTM4Ljc3cHhdJy8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAge3Nob3cgJiYgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWVuZCcgb25DbGljaz17aGFuZGxlU2hvd30+XHJcbiAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17TWVudX0gYWx0PScnIGNsYXNzTmFtZT0ndy1bMzhweF0gaC1bMzhweF0nLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItMic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMTBweF0gaC1bMnB4XSBiZy1bIzAwMF0nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzEwcHhdIGgtWzJweF0gYmctWyMwMDBdIG15LVsycHhdJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVsxMHB4XSBoLVsycHhdIGJnLVsjMDAwXSc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7aGlkZSAmJiA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUhpZGV9IGNsYXNzTmFtZT0nbXItMic+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcmlnaHQgZm9udC1bODAwXSB0ZXh0LVsyNHB4XSB0ZXh0LVtibGFja10nPlg8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4ICc+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAge2hpZGUgJiYgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgdGV4dC1bOHB4XSBsZzp0ZXh0LVsxNHB4XSBmb250LVszMDBdIG10LTAgbWQ6bXQtMCBpdGVtcy1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtOYXZjb250ZW50Lm1hcCgoaXRlbSwgaTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGc6aG92ZXI6dW5kZXJsaW5lJyBrZXk9e2l9PjxMaW5rIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0ubmFtZX08L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXIgcm91bmRlZC1bNXB4XSBwLVs0cHhdJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctW2JsYWNrXSB0ZXh0LXdoaXRlIHJvdW5kZWQtWzVweF0gcC1bNHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUhlYWRlclxyXG5cclxuY29uc3QgTmF2Y29udGVudCA9IFtcclxuICAgXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJy8nLFxyXG4gICAgICAgIG5hbWU6ICdIb21lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBuYW1lOiAnTGF0ZXN0IE5ld3MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIG5hbWU6ICdBZHZlcnRpc2Ugd2l0aCB1cydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbmFtZTogJ1ByaXZhY3kgKyBUJkNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBuYW1lOiAnRkFRcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbmFtZTogJ0NvbnRhY3QnXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5dIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxvZ28iLCJMaW5rIiwiQXJ0aWNsZUhlYWRlciIsInNob3ciLCJzZXRTaG93IiwiaGlkZSIsInNldEhpZGUiLCJoYW5kbGVTaG93IiwiaGFuZGxlSGlkZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ1bCIsIk5hdmNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaSIsImxpIiwiaHJlZiIsImxpbmsiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/ArticleHeader.tsx\n"));

/***/ })

});