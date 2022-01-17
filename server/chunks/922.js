exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 3674:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Banner_container__OITMe",
	"bannerImage": "Banner_bannerImage__wwQMU",
	"slide": "Banner_slide__M0fmg",
	"emptySpacing": "Banner_emptySpacing__hTM4C"
};


/***/ }),

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3630);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2770);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8722);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9984);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_components_shared_Banner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3674);
/* harmony import */ var _styles_components_shared_Banner_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_Banner_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);

// Import Swiper React components

// import Swiper core and required modules





// install Swiper modules
swiper__WEBPACK_IMPORTED_MODULE_2___default().use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
]);
const BannerSlide = ({ listBanner , dotPosition ='under'  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: listBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            observer: true,
            observeParents: true,
            pagination: {
                clickable: true
            },
            className: (_styles_components_shared_Banner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slide),
            children: listBanner.map((d, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            width: "100%",
                            src: d,
                            alt: ""
                        }),
                        dotPosition === 'under' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
                            className: (_styles_components_shared_Banner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptySpacing)
                        })
                    ]
                }, i)
            )
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSlide);


/***/ }),

/***/ 9984:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;