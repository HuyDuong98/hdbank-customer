"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 9640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zK": () => (/* binding */ getFilter),
/* harmony export */   "Im": () => (/* binding */ getSearchData),
/* harmony export */   "yu": () => (/* binding */ getSuggestion)
/* harmony export */ });
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);


const getFilter = async (keyword, langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/fillter-search?keyword=${keyword}&langcode=${langCode || 'vi'}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getSearchData = async (keyword, langCode, type, page, pageSize)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/search?keyword=${keyword}&langcode=${langCode || 'vi'}&type=${type}&page=${page}&pagesize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getSuggestion = async ()=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-search`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "Mz": () => (/* binding */ eraseCookie)
/* harmony export */ });
const setCookie = (name, value, days)=>{
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
const getCookie = (name, cookieString)=>{
    const nameEQ = name + "=";
    const ca = (cookieString || (document === null || document === void 0 ? void 0 : document.cookie) || "").split(";");
    for (const c of ca){
        let cookie = c;
        while(cookie.charAt(0) === " ")cookie = cookie.substring(1, c.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
};
const eraseCookie = (name)=>{
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};


/***/ })

};
;