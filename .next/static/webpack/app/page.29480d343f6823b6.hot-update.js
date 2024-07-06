"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Components/Media.tsx":
/*!**************************************!*\
  !*** ./src/app/Components/Media.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _data_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/article */ \"(app-pages-browser)/./src/app/Components/data/article.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ITEMS_PER_PAGE = 6; // Adjust this number to set items per page\nconst ArticlesGrid = ()=>{\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Filter articles based on the selected category and search query\n    const filteredArticles = _data_article__WEBPACK_IMPORTED_MODULE_4__.articles.filter((article)=>{\n        const matchesCategory = selectedCategory === \"All\" || article.category === selectedCategory;\n        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.description.toLowerCase().includes(searchQuery.toLowerCase());\n        return matchesCategory && matchesSearch;\n    });\n    // Calculate the total number of pages for the filtered articles\n    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);\n    // Determine the articles to display for the current page\n    const currentArticles = filteredArticles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);\n    // Function to change page\n    const changePage = (page)=>{\n        if (page > 0 && page <= totalPages) {\n            setCurrentPage(page);\n        }\n    };\n    // Get unique categories from articles\n    const categories = [\n        \"All\",\n        ...Array.from(new Set(_data_article__WEBPACK_IMPORTED_MODULE_4__.articles.map((article)=>article.category)))\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full items-center justify-center p-4 flex flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[85%] mt-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-4 w-full md:w-[50%]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: searchQuery,\n                        onChange: (e)=>{\n                            setSearchQuery(e.target.value);\n                            setCurrentPage(1); // Reset to first page on search change\n                        },\n                        placeholder: \"Search articles...\",\n                        className: \"p-2 border border-[#D0D5DD] rounded w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 flex flex-wrap gap-2\",\n                    children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                setSelectedCategory(category);\n                                setCurrentPage(1); // Reset to first page on category change\n                            },\n                            className: \"p-2 cursor-pointer  text-[14px] \".concat(selectedCategory === category ? \" text-[#235784] underline\" : \"bg-white text-[#667085]\"),\n                            children: category\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full grid grid-cols-1 md:grid-cols-3 gap-6\",\n                    children: currentArticles.length > 0 ? currentArticles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/articles/\".concat(article.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: article.imageUrl,\n                                        alt: article.title,\n                                        width: 400,\n                                        height: 250,\n                                        className: \"w-full h-auto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4 px-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-[#000] text-[12px] font-[600] flex justify-between items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"bg-[#f2f2f2] p-[3px]\",\n                                                        children: [\n                                                            article.date,\n                                                            \" | \",\n                                                            article.category\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            article.time,\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-[#000] text-[24px] font-[700] mt-2\",\n                                                children: article.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-[#000] text-[14px] font-[400] mt-2\",\n                                                children: article.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"/articles/\".concat(article.id),\n                                                className: \"text-[#000] mt-4 text-[16px] font-[600] inline-block\",\n                                                children: \"Read more >\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#000] text-[18px] font-[600]\",\n                        children: \"No articles found\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                }, undefined),\n                filteredArticles.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Pagination, {\n                    currentPage: currentPage,\n                    totalPages: totalPages,\n                    onPageChange: changePage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArticlesGrid, \"5UagoqUSg849TJQkmYDsAJcE6rE=\");\n_c = ArticlesGrid;\nconst Pagination = (param)=>{\n    let { currentPage, totalPages, onPageChange } = param;\n    const getVisiblePages = ()=>{\n        const pageNumbers = [];\n        if (totalPages <= 5) {\n            // Show all page numbers if there are 5 or less\n            for(let i = 1; i <= totalPages; i++){\n                pageNumbers.push(i);\n            }\n        } else {\n            // Show the first and last 2 pages, and ellipsis in between\n            if (currentPage <= 3) {\n                pageNumbers.push(1, 2, 3, \"...\", totalPages);\n            } else if (currentPage >= totalPages - 2) {\n                pageNumbers.push(1, \"...\", totalPages - 2, totalPages - 1, totalPages);\n            } else {\n                pageNumbers.push(1, \"...\", currentPage - 1, currentPage, currentPage + 1, \"...\", totalPages);\n            }\n        }\n        return pageNumbers;\n    };\n    const visiblePages = getVisiblePages();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[90%] flex flex-row justify-between items-center mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onPageChange(currentPage - 1),\n                className: \"p-2 rounded border text-[14px] border-[#D0D5DD] \".concat(currentPage === 1 ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                disabled: currentPage === 1,\n                children: \"< Previous\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mx-4\",\n                children: visiblePages.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>typeof page === \"number\" && onPageChange(page),\n                        className: \"p-2 rounded text-[14px] \".concat(currentPage === page ? \"border border-[#D0D5DD]\" : \"\", \" \").concat(page === \"...\" ? \"cursor-default\" : \"\"),\n                        disabled: page === \"...\",\n                        children: page\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onPageChange(currentPage + 1),\n                className: \"p-2 rounded border text-[14px] border-[#D0D5DD] \".concat(currentPage === totalPages ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                disabled: currentPage === totalPages,\n                children: \"Next >\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Moshood\\\\Desktop\\\\react\\\\asteric\\\\towncrier\\\\src\\\\app\\\\Components\\\\Media.tsx\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesGrid);\nvar _c, _c1;\n$RefreshReg$(_c, \"ArticlesGrid\");\n$RefreshReg$(_c1, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9NZWRpYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2lDO0FBQ0Y7QUFDRjtBQUNhO0FBRTFDLE1BQU1JLGlCQUFpQixHQUFHLDJDQUEyQztBQUVyRSxNQUFNQyxlQUFlOztJQUNuQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0Msa0VBQWtFO0lBQ2xFLE1BQU1ZLG1CQUFtQlQsbURBQVFBLENBQUNVLE1BQU0sQ0FBQ0MsQ0FBQUE7UUFDdkMsTUFBTUMsa0JBQWtCUCxxQkFBcUIsU0FBU00sUUFBUUUsUUFBUSxLQUFLUjtRQUMzRSxNQUFNUyxnQkFBZ0JILFFBQVFJLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNWLFlBQVlTLFdBQVcsT0FDNURMLFFBQVFPLFdBQVcsQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNWLFlBQVlTLFdBQVc7UUFDeEYsT0FBT0osbUJBQW1CRTtJQUM1QjtJQUVBLGdFQUFnRTtJQUNoRSxNQUFNSyxhQUFhQyxLQUFLQyxJQUFJLENBQUNaLGlCQUFpQmEsTUFBTSxHQUFHckI7SUFFdkQseURBQXlEO0lBQ3pELE1BQU1zQixrQkFBa0JkLGlCQUFpQmUsS0FBSyxDQUM1QyxDQUFDckIsY0FBYyxLQUFLRixnQkFDcEJFLGNBQWNGO0lBR2hCLDBCQUEwQjtJQUMxQixNQUFNd0IsYUFBYSxDQUFDQztRQUNsQixJQUFJQSxPQUFPLEtBQUtBLFFBQVFQLFlBQVk7WUFDbENmLGVBQWVzQjtRQUNqQjtJQUNGO0lBRUEsc0NBQXNDO0lBQ3RDLE1BQU1DLGFBQWE7UUFBQztXQUFVQyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsSUFBSTlCLG1EQUFRQSxDQUFD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LEdBQUcsT0FBT2dCO1lBQ25GO1FBQ0Y7UUFFQSxPQUFPc0M7SUFDVDtJQUVBLE1BQU1HLGVBQWVKO0lBRXJCLHFCQUNFLDhEQUFDeEI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM0QjtnQkFDQ25CLFNBQVMsSUFBTWEsYUFBYXBELGNBQWM7Z0JBQzFDOEIsV0FBVyxtREFBNEcsT0FBekQ5QixnQkFBZ0IsSUFBSSxrQ0FBa0M7Z0JBQ3BIMkQsVUFBVTNELGdCQUFnQjswQkFDM0I7Ozs7OzswQkFHRCw4REFBQzZCO2dCQUFJQyxXQUFVOzBCQUNaMkIsYUFBYTdCLEdBQUcsQ0FBQyxDQUFDTCxNQUFNZSxzQkFDdkIsOERBQUNvQjt3QkFFQ25CLFNBQVMsSUFBTSxPQUFPaEIsU0FBUyxZQUFZNkIsYUFBYTdCO3dCQUN4RE8sV0FBVywyQkFBb0ZQLE9BQXpEdkIsZ0JBQWdCdUIsT0FBTyw0QkFBNEIsSUFBRyxLQUEwQyxPQUF2Q0EsU0FBUyxRQUFRLG1CQUFtQjt3QkFDbklvQyxVQUFVcEMsU0FBUztrQ0FFbEJBO3VCQUxJZTs7Ozs7Ozs7OzswQkFTWCw4REFBQ29CO2dCQUNDbkIsU0FBUyxJQUFNYSxhQUFhcEQsY0FBYztnQkFDMUM4QixXQUFXLG1EQUFxSCxPQUFsRTlCLGdCQUFnQmdCLGFBQWEsa0NBQWtDO2dCQUM3SDJDLFVBQVUzRCxnQkFBZ0JnQjswQkFDM0I7Ozs7Ozs7Ozs7OztBQUtQO01BdkRNbUM7QUF5RE4sK0RBQWVwRCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ29tcG9uZW50cy9NZWRpYS50c3g/YWEwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGFydGljbGVzIH0gZnJvbSAnLi9kYXRhL2FydGljbGUnO1xyXG5cclxuY29uc3QgSVRFTVNfUEVSX1BBR0UgPSA2OyAvLyBBZGp1c3QgdGhpcyBudW1iZXIgdG8gc2V0IGl0ZW1zIHBlciBwYWdlXHJcblxyXG5jb25zdCBBcnRpY2xlc0dyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnQWxsJyk7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIEZpbHRlciBhcnRpY2xlcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkgYW5kIHNlYXJjaCBxdWVyeVxyXG4gIGNvbnN0IGZpbHRlcmVkQXJ0aWNsZXMgPSBhcnRpY2xlcy5maWx0ZXIoYXJ0aWNsZSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVzQ2F0ZWdvcnkgPSBzZWxlY3RlZENhdGVnb3J5ID09PSAnQWxsJyB8fCBhcnRpY2xlLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgY29uc3QgbWF0Y2hlc1NlYXJjaCA9IGFydGljbGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHJldHVybiBtYXRjaGVzQ2F0ZWdvcnkgJiYgbWF0Y2hlc1NlYXJjaDtcclxuICB9KTtcclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgZm9yIHRoZSBmaWx0ZXJlZCBhcnRpY2xlc1xyXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZmlsdGVyZWRBcnRpY2xlcy5sZW5ndGggLyBJVEVNU19QRVJfUEFHRSk7XHJcblxyXG4gIC8vIERldGVybWluZSB0aGUgYXJ0aWNsZXMgdG8gZGlzcGxheSBmb3IgdGhlIGN1cnJlbnQgcGFnZVxyXG4gIGNvbnN0IGN1cnJlbnRBcnRpY2xlcyA9IGZpbHRlcmVkQXJ0aWNsZXMuc2xpY2UoXHJcbiAgICAoY3VycmVudFBhZ2UgLSAxKSAqIElURU1TX1BFUl9QQUdFLFxyXG4gICAgY3VycmVudFBhZ2UgKiBJVEVNU19QRVJfUEFHRVxyXG4gICk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGNoYW5nZSBwYWdlXHJcbiAgY29uc3QgY2hhbmdlUGFnZSA9IChwYWdlOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChwYWdlID4gMCAmJiBwYWdlIDw9IHRvdGFsUGFnZXMpIHtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0IHVuaXF1ZSBjYXRlZ29yaWVzIGZyb20gYXJ0aWNsZXNcclxuICBjb25zdCBjYXRlZ29yaWVzID0gWydBbGwnLCAuLi5BcnJheS5mcm9tKG5ldyBTZXQoYXJ0aWNsZXMubWFwKGFydGljbGUgPT4gYXJ0aWNsZS5jYXRlZ29yeSkpKV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGZsZXggZmxleC1jb2xcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4NSVdIG10LTYnPlxyXG4gICAgICB7LyogU2VhcmNoIEZpZWxkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgdy1mdWxsIG1kOnctWzUwJV1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKDEpOyAvLyBSZXNldCB0byBmaXJzdCBwYWdlIG9uIHNlYXJjaCBjaGFuZ2VcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlcy4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1bI0QwRDVERF0gcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBDYXRlZ29yeSBGaWx0ZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKDEpOyAvLyBSZXNldCB0byBmaXJzdCBwYWdlIG9uIGNhdGVnb3J5IGNoYW5nZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgY3Vyc29yLXBvaW50ZXIgIHRleHQtWzE0cHhdICR7c2VsZWN0ZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnkgPyAnIHRleHQtWyMyMzU3ODRdIHVuZGVybGluZScgOiAnYmctd2hpdGUgdGV4dC1bIzY2NzA4NV0nfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgey8qIEFydGljbGVzIEdyaWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cclxuICAgICAgICB7Y3VycmVudEFydGljbGVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBjdXJyZW50QXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZXMvJHthcnRpY2xlLmlkfWB9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZVVybH0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQwMH0gXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCIgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyMwMDBdIHRleHQtWzEycHhdIGZvbnQtWzYwMF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bI2YyZjJmMl0gcC1bM3B4XSc+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5kYXRlfSB8IHthcnRpY2xlLmNhdGVnb3J5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLnRpbWV9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bIzAwMF0gdGV4dC1bMjRweF0gZm9udC1bNzAwXSBtdC0yXCI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyMwMDBdIHRleHQtWzE0cHhdIGZvbnQtWzQwMF0gbXQtMlwiPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZXMvJHthcnRpY2xlLmlkfWB9IGNsYXNzTmFtZT1cInRleHQtWyMwMDBdIG10LTQgdGV4dC1bMTZweF0gZm9udC1bNjAwXSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgUmVhZCBtb3JlICZndDtcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+PC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzAwMF0gdGV4dC1bMThweF0gZm9udC1bNjAwXVwiPk5vIGFydGljbGVzIGZvdW5kPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFBhZ2luYXRpb24gKi99XHJcbiAgICAgIHtmaWx0ZXJlZEFydGljbGVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfVxyXG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXtjaGFuZ2VQYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMsIG9uUGFnZUNoYW5nZSB9OiB7IGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlciwgb25QYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyKSA9PiB2b2lkIH0pID0+IHtcclxuICBjb25zdCBnZXRWaXNpYmxlUGFnZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyczogKG51bWJlciB8IHN0cmluZylbXSA9IFtdO1xyXG5cclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IDUpIHtcclxuICAgICAgLy8gU2hvdyBhbGwgcGFnZSBudW1iZXJzIGlmIHRoZXJlIGFyZSA1IG9yIGxlc3NcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2hvdyB0aGUgZmlyc3QgYW5kIGxhc3QgMiBwYWdlcywgYW5kIGVsbGlwc2lzIGluIGJldHdlZW5cclxuICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDMpIHtcclxuICAgICAgICBwYWdlTnVtYmVycy5wdXNoKDEsIDIsIDMsICcuLi4nLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIC0gMikge1xyXG4gICAgICAgIHBhZ2VOdW1iZXJzLnB1c2goMSwgJy4uLicsIHRvdGFsUGFnZXMgLSAyLCB0b3RhbFBhZ2VzIC0gMSwgdG90YWxQYWdlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZU51bWJlcnMucHVzaCgxLCAnLi4uJywgY3VycmVudFBhZ2UgLSAxLCBjdXJyZW50UGFnZSwgY3VycmVudFBhZ2UgKyAxLCAnLi4uJywgdG90YWxQYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmlzaWJsZVBhZ2VzID0gZ2V0VmlzaWJsZVBhZ2VzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzkwJV0gZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTIwXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgLSAxKX1cclxuICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZCBib3JkZXIgdGV4dC1bMTRweF0gYm9yZGVyLVsjRDBENUREXSAke2N1cnJlbnRQYWdlID09PSAxID8gJ29wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkJyA6ICcnfWB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG4gICAgICA+XHJcbiAgICAgICAgJmx0OyBQcmV2aW91c1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBteC00XCI+XHJcbiAgICAgICAge3Zpc2libGVQYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5cGVvZiBwYWdlID09PSAnbnVtYmVyJyAmJiBvblBhZ2VDaGFuZ2UocGFnZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkIHRleHQtWzE0cHhdICR7Y3VycmVudFBhZ2UgPT09IHBhZ2UgPyAnYm9yZGVyIGJvcmRlci1bI0QwRDVERF0nIDogJyd9ICR7cGFnZSA9PT0gJy4uLicgPyAnY3Vyc29yLWRlZmF1bHQnIDogJyd9YH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09ICcuLi4nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSArIDEpfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YHAtMiByb3VuZGVkIGJvcmRlciB0ZXh0LVsxNHB4XSBib3JkZXItWyNEMEQ1RERdICR7Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXMgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJyd9YH1cclxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgID5cclxuICAgICAgICBOZXh0ICZndDtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNHcmlkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJhcnRpY2xlcyIsIklURU1TX1BFUl9QQUdFIiwiQXJ0aWNsZXNHcmlkIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZpbHRlcmVkQXJ0aWNsZXMiLCJmaWx0ZXIiLCJhcnRpY2xlIiwibWF0Y2hlc0NhdGVnb3J5IiwiY2F0ZWdvcnkiLCJtYXRjaGVzU2VhcmNoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJjdXJyZW50QXJ0aWNsZXMiLCJzbGljZSIsImNoYW5nZVBhZ2UiLCJwYWdlIiwiY2F0ZWdvcmllcyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJpbmRleCIsIm9uQ2xpY2siLCJocmVmIiwiaWQiLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0ZSIsInRpbWUiLCJoMiIsInAiLCJQYWdpbmF0aW9uIiwib25QYWdlQ2hhbmdlIiwiZ2V0VmlzaWJsZVBhZ2VzIiwicGFnZU51bWJlcnMiLCJpIiwicHVzaCIsInZpc2libGVQYWdlcyIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Media.tsx\n"));

/***/ })

});