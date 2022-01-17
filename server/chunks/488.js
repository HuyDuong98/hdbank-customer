exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 9418:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "ListFAQ_header__Ost7i",
	"faqWrapper": "ListFAQ_faqWrapper__3KinX",
	"pageTitle": "ListFAQ_pageTitle__skYBt",
	"container": "ListFAQ_container__TbqJl",
	"contentWrapper": "ListFAQ_contentWrapper__seons",
	"topicGroup": "ListFAQ_topicGroup__3AZCn",
	"topicItem": "ListFAQ_topicItem__YonN9",
	"name": "ListFAQ_name__oOJhQ",
	"qNumber": "ListFAQ_qNumber__k_G87",
	"active": "ListFAQ_active__ORrqY",
	"topicHeading": "ListFAQ_topicHeading__FuIAr",
	"questionWrapper": "ListFAQ_questionWrapper__pfdA_",
	"heading": "ListFAQ_heading__mOsa6",
	"icon": "ListFAQ_icon__tfdcH",
	"body": "ListFAQ_body__AeAMx",
	"line": "ListFAQ_line__iQWDl",
	"ratingWrapper": "ListFAQ_ratingWrapper___liUU",
	"reviewWrapper": "ListFAQ_reviewWrapper__82GXq",
	"progressWrapper": "ListFAQ_progressWrapper__o7N48",
	"rated": "ListFAQ_rated__Zxvt3",
	"listStar": "ListFAQ_listStar__kTeFd",
	"progress": "ListFAQ_progress__G_zeF",
	"progressItem": "ListFAQ_progressItem__GpDL2",
	"rootProgress": "ListFAQ_rootProgress__MW43N",
	"colorPrimary": "ListFAQ_colorPrimary__oNJ3c",
	"barColorPrimary": "ListFAQ_barColorPrimary__xSNk9",
	"iconStar": "ListFAQ_iconStar__7aTDU",
	"mediaWrapper": "ListFAQ_mediaWrapper__fH1_K",
	"mediaTitle": "ListFAQ_mediaTitle__YQMKo",
	"mediaImages": "ListFAQ_mediaImages__2xLNd",
	"mediaLink": "ListFAQ_mediaLink__99vYp",
	"sendQuestion": "ListFAQ_sendQuestion__1jH5F",
	"dialogWrapper": "ListFAQ_dialogWrapper__5eITv",
	"dialogBody": "ListFAQ_dialogBody__zYdah",
	"textFieldWrapper": "ListFAQ_textFieldWrapper__ZP4yz",
	"titleComplete": "ListFAQ_titleComplete__sJlE4",
	"completeIconWrapper": "ListFAQ_completeIconWrapper__VsdDG",
	"avatarWrapper": "ListFAQ_avatarWrapper__rLUFZ",
	"avatarImg": "ListFAQ_avatarImg__4M5_r",
	"captcha": "ListFAQ_captcha__dpOmU",
	"return": "ListFAQ_return__2cAY4",
	"imgCapcha": "ListFAQ_imgCapcha__rPbg2",
	"btnCapcha": "ListFAQ_btnCapcha__ghcwS"
};


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnClickOutside(ref, handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const listener = (event)=>{
            const el = ref === null || ref === void 0 ? void 0 : ref.current;
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);
        return ()=>{
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    // Reload only if ref or handler changes
    }, [
        ref,
        handler
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnClickOutside);


/***/ })

};
;