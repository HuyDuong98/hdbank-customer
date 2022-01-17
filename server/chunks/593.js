"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 5593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xH": () => (/* binding */ getListProduct),
/* harmony export */   "BF": () => (/* binding */ getListProductByFilter),
/* harmony export */   "Uu": () => (/* binding */ getFilterProduct),
/* harmony export */   "jn": () => (/* binding */ getProductDetail),
/* harmony export */   "fL": () => (/* binding */ getListCompare),
/* harmony export */   "OH": () => (/* binding */ getListOtherProduct),
/* harmony export */   "HI": () => (/* binding */ getProductForCustomerJourney),
/* harmony export */   "Zr": () => (/* binding */ getSelectItemCustomerJourney)
/* harmony export */ });
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);


const getListProduct = async (langCode, page, pageSize)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/product-list?langcode=${langCode}&page=${page}&pagesize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getListProductByFilter = async (langCode, page, pageSize, filterId)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/products-by-filter?langcode=${langCode}&listFilterId=${filterId}&page=${page}&pagesize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getFilterProduct = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/products-get-filter?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getProductDetail = async (langCode, id)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-product-detail?productId=${id}&langCode=${langCode || 'vi'}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getListCompare = async (langCode, lstCardID)=>{
    const getParam = lstCardID.length === 2 ? `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}` : `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}&Product3=${lstCardID[2]}`;
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/compare-products?Langcode=${langCode}&${getParam}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getListOtherProduct = async (langCode, lstCardID)=>{
    const getParam = lstCardID.length === 2 ? `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}` : `Product1=${lstCardID[0]}&Product2=${lstCardID[1]}&Product3=${lstCardID[2]}`;
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/other-products-compare?Langcode=${langCode}&${getParam}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getProductForCustomerJourney = async (langCode, monthlyincome, monthlyspent, demand, page, pageSize)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/customer-journey?langcode=${langCode}&monthlyincome=${monthlyincome}&monthlyspent=${monthlyspent}&demand=${demand}&page=${page}&pageSize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getSelectItemCustomerJourney = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/customer-journey/get-selected-item?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ })

};
;