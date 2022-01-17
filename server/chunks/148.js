exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 2225:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CustomAvatar_container__UMxkx",
	"large": "CustomAvatar_large__GEomV",
	"avatar": "CustomAvatar_avatar__ll3Jx",
	"medium": "CustomAvatar_medium__rn__7",
	"small": "CustomAvatar_small__U1Jm2"
};


/***/ }),

/***/ 2148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2225);
/* harmony import */ var _styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);




const CustomAvatar = (props)=>{
    const { src , alt , cssClass , size  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container), cssClass ? cssClass : '', {
            [(_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().small)]: size === 'small',
            [(_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().medium)]: size === 'medium' || !size,
            [(_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().large)]: size === 'large'
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            alt: alt,
            src: src,
            className: (_styles_components_shared_CustomAvatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().avatar),
            children: "B"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomAvatar);


/***/ })

};
;