"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 6666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nZ": () => (/* binding */ getListFaq),
/* harmony export */   "oP": () => (/* binding */ getFaqDetail),
/* harmony export */   "lk": () => (/* binding */ sendQuestion),
/* harmony export */   "hv": () => (/* binding */ getCapchaImage)
/* harmony export */ });
/* unused harmony exports getTopics, getFAQTips */
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);


const getListFaq = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/faqs?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getFaqDetail = async (langCode, id)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/faqs/detail?id=${id}&langcode=${langCode}` //LandingPage/faqs/detail?id=1&langcode=vi
    ;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const sendQuestion = async (data)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/send-question`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .postAsync */ .Am)(apiUrl, data);
};
const getTopics = async ()=>{
    const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/gettopics`;
    return getAsync(apiUrl);
};
const getFAQTips = async (keyword)=>{
    const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/send-support-info?keyword=${encodeURI(keyword)}`;
    return getAsync(apiUrl);
};
const getCapchaImage = async ()=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/get-captcha`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ })

};
;