exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 8383:
/***/ ((module) => {

// Exports
module.exports = {
	"mainWrapper": "LoginForm_mainWrapper__bCpNt",
	"wrapper": "LoginForm_wrapper__IG4tr",
	"logo": "LoginForm_logo__0jjls",
	"headingWrapper": "LoginForm_headingWrapper__0RycJ",
	"captchaWrapper": "LoginForm_captchaWrapper__h9oWC",
	"buttonWrapper": "LoginForm_buttonWrapper__Sz1Kc",
	"alertText": "LoginForm_alertText__tat72",
	"forgotPasswordWrapper": "LoginForm_forgotPasswordWrapper__eg2CD",
	"registerWrapper": "LoginForm_registerWrapper__fHX0_",
	"titleWrapper": "LoginForm_titleWrapper__mR9SE",
	"alert": "LoginForm_alert__zapMb",
	"inputTitle": "LoginForm_inputTitle__pHcbf",
	"dialogWrapper": "LoginForm_dialogWrapper__qvhoU",
	"dialogWrapper__img": "LoginForm_dialogWrapper__img___N1Fw",
	"dialogWrapper__text": "LoginForm_dialogWrapper__text__R_s9h",
	"closeDialog": "LoginForm_closeDialog__pZFWh",
	"icon": "LoginForm_icon__3vnJE",
	"otpInputWrapper": "LoginForm_otpInputWrapper__tQFgF"
};


/***/ }),

/***/ 2302:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Slideshow_container__t0Hjt",
	"hiddenSlide": "Slideshow_hiddenSlide__imUjb",
	"fade": "Slideshow_fade__Jvbjp",
	"slideDotWrapper": "Slideshow_slideDotWrapper__FUZla",
	"slideDot": "Slideshow_slideDot__nfE_g",
	"active": "Slideshow_active__YYHTs"
};


/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2302);
/* harmony import */ var _styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Slide1 = '/assets/slides/slide-3.png';
const Slide2 = '/assets/slides/slide-2.png';
const Slide3 = '/assets/slides/slide-3.png';
const slideImageSources = [
    {
        id: 1,
        source: Slide1
    },
    {
        id: 2,
        source: Slide2
    },
    {
        id: 3,
        source: Slide3
    }, 
];
const Slideshow = ()=>{
    const { 0: currentSlide , 1: setCurrentSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const getSlideClasses = (slide)=>{
        if (slide !== currentSlide) return `${(_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hiddenSlide)} ${(_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fade)}`;
        return (_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fade);
    };
    const getSlideDotClasses = (slide)=>{
        if (slide === currentSlide) return `${(_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active)} ${(_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slideDot)}`;
        return (_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slideDot);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        className: (_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            slideImageSources.map((f)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: f.source,
                    className: getSlideClasses(f.id)
                }, f.id));
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                justifyContent: "center",
                className: (_styles_account_Slideshow_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slideDotWrapper),
                children: slideImageSources.map((f)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: getSlideDotClasses(f.id),
                        onClick: ()=>setCurrentSlide(f.id)
                    }, f.id));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);


/***/ })

};
;