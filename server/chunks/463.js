"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 8463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fh": () => (/* binding */ getPromotions),
/* harmony export */   "lS": () => (/* binding */ getPromotionsDetail),
/* harmony export */   "_D": () => (/* binding */ getPromotionFilter)
/* harmony export */ });
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);


const getPromotions = async (langCode, type, page, pageSize)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/promotes-list?langcode=${langCode}&categorypromote=${type}&page=${page}&pagesize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getPromotionsDetail = async (langCode, promotionsId)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-promotion-detail?promotionId=${promotionsId}&langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getPromotionFilter = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-promote-filter?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ })

};
;