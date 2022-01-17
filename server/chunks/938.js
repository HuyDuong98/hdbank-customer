exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 9442:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "CustomPagination_pagination__sg2tX",
	"pageSize": "CustomPagination_pageSize__YIrJu"
};


/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4116);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2008);
/* harmony import */ var _styles_components_shared_CustomPagination_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9442);
/* harmony import */ var _styles_components_shared_CustomPagination_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomPagination_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const CustomPagination = ({ totalRecord , countPage , page , hanleChangePage , hanleChangePageSize , options ,  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            alignItems: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 7,
                    xs: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
                        count: Math.ceil(totalRecord / countPage),
                        className: (_styles_components_shared_CustomPagination_module_scss__WEBPACK_IMPORTED_MODULE_5___default().pagination),
                        page: page,
                        onChange: hanleChangePage,
                        itemType: "ellipsis"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    md: 5,
                    xs: 12,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: (_styles_components_shared_CustomPagination_module_scss__WEBPACK_IMPORTED_MODULE_5___default().pageSize),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                children: t('show')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    outlined: true,
                                    value: countPage,
                                    onChange: (value)=>hanleChangePageSize(value)
                                    ,
                                    options: options
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPagination);


/***/ })

};
;