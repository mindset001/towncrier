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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/logo.png */ \"(app-pages-browser)/./public/assets/logo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _public_assets_menu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/menu.png */ \"(app-pages-browser)/./public/assets/menu.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ArticleHeader() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [hide, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleShow = ()=>{\n        setHide(true);\n        setShow(hide);\n    };\n    const handleHide = ()=>{\n        setShow(true);\n        setHide(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full flex flex-col items-center mb-6 border-b border-[#676767] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden w-[90%] lg:flex flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"\",\n                        className: \"w-[98px] h-[45px]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-row gap-3 text-[8px] lg:text-[14px] font-[300] mt-0 md:mt-0 items-center\",\n                            children: [\n                                Navcontent.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"lg:hover:underline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            href: item.link,\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 76\n                                        }, this)\n                                    }, i, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 33\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"border rounded-[5px] p-[4px]\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-[black] text-white rounded-[5px] p-[4px]\",\n                                    children: \"Subscribe\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-between lg:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"\",\n                            className: \"h-[38px] w-[138.77px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex items-end\",\n                                onClick: handleShow,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: _public_assets_menu_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\",\n                                        className: \"w-[38px] h-[38px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-[5px] h-[2px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 18\n                            }, this),\n                            hide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: handleHide,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-right font-[800] text-[28px] text-[white]\",\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 44,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-end items-end\",\n                children: hide && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[white] w-[70%]  px-2 py-4 rounded-2xl z-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"text-[#EF3133] flex flex-col gap-4 font-[400] text-[16px] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"cursor-pointer\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"EventCalendar\",\n                                    children: \"Calendar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 48\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"cursor-pointer\",\n                                children: \"National\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"cursor-pointer\",\n                                children: \"Result\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"flex items-center gap-[2px] cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    href: \"Livestream\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-[#EF3133] h-[6px] w-[6px] rounded-[50px]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Live\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 22\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\ArticleHeader.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(ArticleHeader, \"RhP7BXaiQwRG/tX4YPBSkOUSy+A=\");\n_c = ArticleHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleHeader);\nconst Navcontent = [\n    {\n        link: \"/\",\n        name: \"Home\"\n    },\n    {\n        link: \"\",\n        name: \"Latest News\"\n    },\n    {\n        link: \"\",\n        name: \"Advertise with us\"\n    },\n    {\n        link: \"\",\n        name: \"Privacy + T&Cs\"\n    },\n    {\n        link: \"\",\n        name: \"FAQs\"\n    },\n    {\n        link: \"\",\n        name: \"Contact\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"ArticleHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9BcnRpY2xlSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VDO0FBQ1Q7QUFDb0I7QUFDdEI7QUFDc0I7QUFFbEQsU0FBU007O0lBQ0wsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNVSxhQUFhO1FBQ2ZELFFBQVE7UUFDUkYsUUFBUUM7SUFDWjtJQUVBLE1BQU1HLGFBQWE7UUFDZkosUUFBUTtRQUNSRSxRQUFRO0lBQ1o7SUFDRixxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ1osa0RBQUtBO3dCQUFDYyxLQUFLYiwrREFBSUE7d0JBQUVjLEtBQUk7d0JBQUdILFdBQVU7Ozs7OztrQ0FDbkMsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNILDRFQUFDSTs0QkFBR0osV0FBVTs7Z0NBQ1RLLFdBQVdDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDbkIsOERBQUNDO3dDQUFHVCxXQUFVO2tEQUE2Qiw0RUFBQ1YsaURBQUlBOzRDQUFDb0IsTUFBTUgsS0FBS0ksSUFBSTtzREFBR0osS0FBS0ssSUFBSTs7Ozs7O3VDQUFwQ0o7Ozs7OzhDQUc1Qyw4REFBQ0s7b0NBQU9iLFdBQVU7OENBQStCOzs7Ozs7OENBR2pELDhEQUFDYTtvQ0FBT2IsV0FBVTs4Q0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVuRiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FDRSw0RUFBQ2Isa0RBQUtBOzRCQUFDYyxLQUFLYiwrREFBSUE7NEJBQUVjLEtBQUk7NEJBQUdILFdBQVU7Ozs7Ozs7Ozs7O2tDQUd2Qyw4REFBQ0M7OzRCQUNBUixzQkFBUSw4REFBQ1E7Z0NBQUlELFdBQVU7Z0NBQXdCYyxTQUFTakI7O2tEQUNqRCw4REFBQ1Qsa0RBQUtBO3dDQUFDYyxLQUFLWCwrREFBSUE7d0NBQUVZLEtBQUk7d0NBQUdILFdBQVU7Ozs7OztrREFDbkMsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7NEJBRWxCTCxzQkFBUSw4REFBQ007Z0NBQUlhLFNBQVNoQjswQ0FDdkIsNEVBQUNpQjtvQ0FBR2YsV0FBVTs4Q0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uRSw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBR1ZMLHNCQUFRLDhEQUFDTTtvQkFBSUQsV0FBVTs4QkFFeEIsNEVBQUNJO3dCQUFHSixXQUFVOzswQ0FDViw4REFBQ1M7Z0NBQUdULFdBQVU7MENBQWlCOzs7Ozs7MENBQy9CLDhEQUFDUztnQ0FBR1QsV0FBVTswQ0FBaUIsNEVBQUNWLGlEQUFJQTtvQ0FBQ29CLE1BQUs7OENBQWdCOzs7Ozs7Ozs7OzswQ0FDMUQsOERBQUNEO2dDQUFHVCxXQUFVOzBDQUFpQjs7Ozs7OzBDQUMvQiw4REFBQ1M7Z0NBQUdULFdBQVU7MENBQWlCOzs7Ozs7MENBQy9CLDhEQUFDUztnQ0FBR1QsV0FBVTswQ0FDViw0RUFBQ1YsaURBQUlBO29DQUFDb0IsTUFBSzs7c0RBQ1gsOERBQUNUOzRDQUFJRCxXQUFVOzs7Ozs7c0RBQ2YsOERBQUNnQjtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0dBekVTeEI7S0FBQUE7QUEyRVQsK0RBQWVBLGFBQWFBLEVBQUE7QUFFNUIsTUFBTWEsYUFBYTtJQUVmO1FBQ0lNLE1BQU07UUFDTkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtJQUNBO1FBQ0lELE1BQU07UUFDTkMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxNQUFNO1FBQ05DLE1BQU07SUFDVjtDQUlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cy9BcnRpY2xlSGVhZGVyLnRzeD9kOTNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvbG9nby5wbmcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9tZW51LnBuZydcclxuXHJcbmZ1bmN0aW9uIEFydGljbGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpPT4ge1xyXG4gICAgICAgIHNldEhpZGUodHJ1ZSlcclxuICAgICAgICBzZXRTaG93KGhpZGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSGlkZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICAgICAgc2V0SGlkZShmYWxzZSlcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWItNiBib3JkZXItYiBib3JkZXItWyM2NzY3NjddICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiB3LVs5MCVdIGxnOmZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD0nJyBjbGFzc05hbWU9J3ctWzk4cHhdIGgtWzQ1cHhdJy8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTMgdGV4dC1bOHB4XSBsZzp0ZXh0LVsxNHB4XSBmb250LVszMDBdIG10LTAgbWQ6bXQtMCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge05hdmNvbnRlbnQubWFwKChpdGVtLCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsZzpob3Zlcjp1bmRlcmxpbmUnIGtleT17aX0+PExpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS5uYW1lfTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JvcmRlciByb3VuZGVkLVs1cHhdIHAtWzRweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1bYmxhY2tdIHRleHQtd2hpdGUgcm91bmRlZC1bNXB4XSBwLVs0cHhdJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YnNjcmliZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIHsvKiBtb2JpbGUgdmlldyAgKi99XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGxnOmhpZGRlbic+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD0nJyBjbGFzc05hbWU9J2gtWzM4cHhdIHctWzEzOC43N3B4XScvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIHtzaG93ICYmIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBpdGVtcy1lbmQnIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TWVudX0gYWx0PScnIGNsYXNzTmFtZT0ndy1bMzhweF0gaC1bMzhweF0nLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs1cHhdIGgtWzJweF0nPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtoaWRlICYmIDxkaXYgb25DbGljaz17aGFuZGxlSGlkZX0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcmlnaHQgZm9udC1bODAwXSB0ZXh0LVsyOHB4XSB0ZXh0LVt3aGl0ZV0nPlg8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmQnPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHtoaWRlICYmIDxkaXYgY2xhc3NOYW1lPSdiZy1bd2hpdGVdIHctWzcwJV0gIHB4LTIgcHktNCByb3VuZGVkLTJ4bCB6LTEwJz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0ZXh0LVsjRUYzMTMzXSBmbGV4IGZsZXgtY29sIGdhcC00IGZvbnQtWzQwMF0gdGV4dC1bMTZweF0gJz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz5BYm91dDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcic+PExpbmsgaHJlZj0nRXZlbnRDYWxlbmRhcic+Q2FsZW5kYXI8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz5OYXRpb25hbDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcic+UmVzdWx0PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC1bMnB4XSBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nTGl2ZXN0cmVhbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLVsjRUYzMTMzXSBoLVs2cHhdIHctWzZweF0gcm91bmRlZC1bNTBweF0nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxpdmU8L3A+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUhlYWRlclxyXG5cclxuY29uc3QgTmF2Y29udGVudCA9IFtcclxuICAgXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJy8nLFxyXG4gICAgICAgIG5hbWU6ICdIb21lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBuYW1lOiAnTGF0ZXN0IE5ld3MnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIG5hbWU6ICdBZHZlcnRpc2Ugd2l0aCB1cydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbmFtZTogJ1ByaXZhY3kgKyBUJkNzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBuYW1lOiAnRkFRcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgbmFtZTogJ0NvbnRhY3QnXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5dIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxvZ28iLCJMaW5rIiwiTWVudSIsIkFydGljbGVIZWFkZXIiLCJzaG93Iiwic2V0U2hvdyIsImhpZGUiLCJzZXRIaWRlIiwiaGFuZGxlU2hvdyIsImhhbmRsZUhpZGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwidWwiLCJOYXZjb250ZW50IiwibWFwIiwiaXRlbSIsImkiLCJsaSIsImhyZWYiLCJsaW5rIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/ArticleHeader.tsx\n"));

/***/ })

});