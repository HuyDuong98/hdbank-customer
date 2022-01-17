exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 2485:
/***/ ((module) => {

// Exports
module.exports = {
	"dialogWrapper": "CustomDialog_dialogWrapper__c3vH4",
	"dialogHeader": "CustomDialog_dialogHeader__r7Xg_",
	"icon": "CustomDialog_icon__3UNIy"
};


/***/ }),

/***/ 1629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2485);
/* harmony import */ var _styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_sharedStores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7839);






const CustomDialog = (props)=>{
    const { title , isOpen , handleClose , children  } = props;
    const isMobile = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_4__/* .isMobileState */ .lo);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
        onClose: handleClose,
        open: isOpen,
        maxWidth: "lg",
        scroll: isMobile ? 'paper' : 'body',
        classes: {
            paper: (_styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dialogWrapper)
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                className: (_styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dialogHeader),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        component: "h2",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: (_styles_components_shared_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
                        onClick: handleClose
                    })
                ]
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDialog);


/***/ })

};
;