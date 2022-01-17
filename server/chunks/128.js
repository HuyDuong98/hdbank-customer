"use strict";
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 6128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4257);
/* harmony import */ var _styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8001);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_ic_home_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9370);
/* harmony import */ var _assets_icons_ic_home_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_ic_home_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7338);










const PageHeading = ({ breadCrumbs , iconHome =false  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { 0: active  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(breadCrumbs[breadCrumbs.length - 1]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleClick = (e, path)=>{
        e.preventDefault();
        router.push(path);
    };
    const handleBackHome = (e)=>{
        e.preventDefault();
        router.push(_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_8__/* .pagePath.landingPage */ .d.landingPage);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        className: (_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
        alignItems: "center",
        children: [
            iconHome ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_assets_icons_ic_home_svg__WEBPACK_IMPORTED_MODULE_6___default()), {
                        onClick: handleBackHome
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default()), {
                        fontSize: "small",
                        className: (_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().breadcrumbIconInHome)
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headingBar)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, {
                separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_4___default()), {
                    fontSize: "small",
                    className: (_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().breadcrumbIcon)
                }),
                "aria-label": "breadcrumb",
                classes: {
                    separator: (_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().rootseparator)
                },
                children: breadCrumbs.map((breadCrum, idx)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({
                            [(_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active)]: active.label === breadCrum.label,
                            [(_styles_components_shared_PageHeading_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cursor)]: breadCrum.path
                        }),
                        onClick: (e)=>breadCrum.path && handleClick(e, breadCrum.path)
                        ,
                        children: t(breadCrum.label)
                    }, idx));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeading);


/***/ })

};
;