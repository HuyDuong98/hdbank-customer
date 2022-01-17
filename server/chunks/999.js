"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 7128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ DOMAIN)
/* harmony export */ });
const DOMAIN = {
    hdbankBetaV1: 'https://hdbank-beta-api.bizbank.vn/api/v1'
};


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CH": () => (/* binding */ getAsync),
  "Am": () => (/* binding */ postAsync)
});

// UNUSED EXPORTS: deleteAsync, putAsync

;// CONCATENATED MODULE: ./src/utils/helpers/accessTokenHandler.ts
const requestAccessToken = async ()=>{
    return '';
};

;// CONCATENATED MODULE: ./src/utils/helpers/transportRequestor.ts

const handleResponse = async (response, method)=>{
    if (!response.ok) return handleErrorResponse(response, method);
    return handleSuccessResponse(response, method);
};
const handleSuccessResponse = async (response, method)=>{
    if (method === 'GET') return response.json();
    const data = await response.json();
    return {
        isSuccessful: true,
        responseCode: null,
        responseMessage: null,
        status: response.status,
        successData: data
    };
};
const handleErrorResponse = async (response, method)=>{
    // const hashHistory = createHashHistory({ basename: '' })
    // const isUnauthorizedRequest = response.status === 401 || response.status === 403
    // if (isUnauthorizedRequest) hashHistory.push(pagePath.error401)
    // if (method !== 'GET') {
    const error = await response.json();
    return {
        isSuccessful: false,
        responseCode: error.responseCode,
        responseMessage: error.responseMessage,
        status: response.status,
        successData: null
    };
// }
// switch (response.status) {
//   case 500:
//     hashHistory.push(pagePath.error500)
//     break
//   case 404:
//     hashHistory.push(pagePath.error404)
//     break
//   case 400:
//     hashHistory.push(pagePath.error400)
//     break
//   default:
//     hashHistory.push(pagePath.error500)
// }
};
const headersWithToken = (token)=>{
    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
};
const getAsync = async (apiUrl)=>{
    const token = await requestAccessToken();
    const response = await fetch(apiUrl, {
        headers: headersWithToken(token)
    });
    return handleResponse(response, 'GET');
};
const postAsync = async (apiUrl, data)=>{
    return handleRequestAsync(apiUrl, data, 'POST');
};
const putAsync = async (apiUrl, data)=>{
    return handleRequestAsync(apiUrl, data, 'PUT');
};
const deleteAsync = async (apiUrl, data)=>{
    return handleRequestAsync(apiUrl, data, 'DELETE');
};
const handleRequestAsync = async (apiUrl, data, method)=>{
    const token = await requestAccessToken();
    const response = await fetch(apiUrl, {
        headers: headersWithToken(token),
        method: method,
        body: JSON.stringify(data)
    });
    return handleResponse(response, method);
};



/***/ })

};
;