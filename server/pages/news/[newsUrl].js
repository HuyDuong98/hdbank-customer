(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 9561:
/***/ ((module) => {

// Exports
module.exports = {
	"newsDetailPageWrap": "NewsDetail_newsDetailPageWrap__1Vey_",
	"contentWrap": "NewsDetail_contentWrap__Q2l5a",
	"bannerWrap": "NewsDetail_bannerWrap__i9fEu",
	"dateWrap": "NewsDetail_dateWrap__5c_Y_",
	"arrow": "NewsDetail_arrow__x_uHl",
	"innerArrow": "NewsDetail_innerArrow__q70Rx",
	"title": "NewsDetail_title__2lYGX",
	"time": "NewsDetail_time__paxQa",
	"mediaWrap": "NewsDetail_mediaWrap__xT_cf",
	"copylink": "NewsDetail_copylink__xM_A8",
	"relatedList": "NewsDetail_relatedList__VDSM7",
	"listOtherWrap": "NewsDetail_listOtherWrap__7X398",
	"content": "NewsDetail_content__LeXMU",
	"titleMobile": "NewsDetail_titleMobile__osVmg",
	"titlePC": "NewsDetail_titlePC__2DxdL",
	"bannerPage": "NewsDetail_bannerPage__jl54j",
	"imgWrap": "NewsDetail_imgWrap__huRRU",
	"icon": "NewsDetail_icon__1LbqD",
	"mobileMode": "NewsDetail_mobileMode__8_Gw7"
};


/***/ }),

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getBanner)
/* harmony export */ });
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);


const getBanner = async (langCode, screenId)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/get-banner?langcode=${langCode}&screenid=${screenId}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ }),

/***/ 6268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lh": () => (/* binding */ getAllNews),
/* harmony export */   "vG": () => (/* binding */ getNewsByCate),
/* harmony export */   "Jx": () => (/* binding */ getFilterNews),
/* harmony export */   "LA": () => (/* binding */ getNewsDetailPage)
/* harmony export */ });
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);


const getAllNews = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/getnews?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getNewsByCate = async (langCode, type, page, pageSize)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/getnews-by-category?categoryid=${type}&langcode=${langCode}&page=${page}&pagesize=${pageSize}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getFilterNews = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/getnews/filter-news?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const getNewsDetailPage = async (langCode, id)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/getnews/detail?id=${id}&langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ }),

/***/ 9777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8805);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4329);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6071);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__]);
i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




i18next__WEBPACK_IMPORTED_MODULE_0___default().use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__["default"]).use((i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3___default())).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    fallbackLng: 'vn',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((i18next__WEBPACK_IMPORTED_MODULE_0___default()));

});

/***/ }),

/***/ 2340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsDetailPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9561);
/* harmony import */ var _styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_sharedStores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7839);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8445);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(interweave__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7338);
/* harmony import */ var _apis_landing_page_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2536);
/* harmony import */ var _apis_landing_page_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6268);
/* harmony import */ var _config_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9777);
/* harmony import */ var _utils_helpers_cookieHelpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(81);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_shared_BannerSlide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7922);
/* harmony import */ var _components_shared_PageHeading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6128);
/* harmony import */ var _components_shared_SocialShare__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(388);
/* harmony import */ var _material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9434);
/* harmony import */ var _material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_i18next__WEBPACK_IMPORTED_MODULE_13__]);
_config_i18next__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

















//components



//icons


//image
const NewsImg = '/assets/mobile/landing/news-page.png';
const lstBreadCrumb = [
    {
        label: 'news',
        path: _utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_10__/* .pagePath.news */ .d.news
    },
    {
        label: 'newsDetail'
    }
];
const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
};
const breakpointsValues = {
    breakpoints: {
        values: BREAKPOINTS
    }
};
const myTheme = {
    other: 'stuff'
};
const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.createTheme)({
    ...myTheme,
    ...breakpointsValues
});
function NewsDetailPage({ bannerData , data  }) {
    var ref, ref1;
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const isMobile = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_4__/* .isMobileState */ .lo);
    const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language;
    const isXsSize = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { 0: showBanner , 1: setShowBanner  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const contentPage = data;
    const handleCopyLink = ()=>{
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default()(window.location.href, {
            debug: true,
            message: 'Press #{key} to copy'
        });
    };
    const handleChangePage = (id)=>{
        router.push(`/news/${id}`);
    };
    // if (isFetching) return <></>
    const renderCopyLink = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().mediaWrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_SocialShare__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        container: true,
                        alignItems: "center",
                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().copylink),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    children: t('copyLink')
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                    onClick: handleCopyLink,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_FileCopyOutlined__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        }));
    };
    const renderRelatedList = (listNews)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().relatedList),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "h6",
                    align: "center",
                    children: t('relatedNews')
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    spacing: 3,
                    className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().listOtherWrap),
                    children: listNews === null || listNews === void 0 ? void 0 : listNews.map((item, idx)=>{
                        const { content , title , createdDate , pc_mode , mobile_mode , id , type_text  } = item;
                        const image = !isMobile ? pc_mode : mobile_mode;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            sm: 4,
                            children: [
                                isXsSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "body1",
                                    className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().titleMobile),
                                    onClick: ()=>handleChangePage(id)
                                    ,
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    container: true,
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            item: true,
                                            sm: 12,
                                            xs: 6,
                                            onClick: ()=>handleChangePage(id)
                                            ,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: image || NewsImg
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            item: true,
                                            sm: 12,
                                            xs: 6,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                container: true,
                                                direction: "column",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                        container: true,
                                                        alignItems: "center",
                                                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().dateWrap),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().arrow),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().innerArrow),
                                                                    children: type_text
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                                variant: "body2",
                                                                children: createdDate
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                        variant: "body1",
                                                        className: clsx__WEBPACK_IMPORTED_MODULE_9___default()((_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().title), {
                                                            [(_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().titlePC)]: isXsSize
                                                        }),
                                                        onClick: ()=>handleChangePage(id)
                                                        ,
                                                        children: title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().content),
                                                        children: content
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, idx));
                    })
                })
            ]
        }));
    };
    const renderBannerPage = ()=>{
        const image = !isMobile ? bannerData.pc_mode : bannerData.mobile_mode;
        return showBanner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            className: clsx__WEBPACK_IMPORTED_MODULE_9___default()((_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().bannerPage), {
                [(_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().mobileMode)]: isMobile
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().imgWrap),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_19___default()), {
                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().icon),
                        onClick: ()=>setShowBanner(false)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: image
                    })
                ]
            })
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().newsDetailPageWrap),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
                children: [
                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_PageHeading__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        breadCrumbs: lstBreadCrumb,
                        iconHome: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().contentWrap),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().bannerWrap),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_BannerSlide__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    listBanner: !isMobile ? contentPage === null || contentPage === void 0 ? void 0 : (ref = contentPage.banners) === null || ref === void 0 ? void 0 : ref.pc_Mode : contentPage === null || contentPage === void 0 ? void 0 : (ref1 = contentPage.banners) === null || ref1 === void 0 ? void 0 : ref1.mobile_Mode
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                container: true,
                                alignItems: "center",
                                className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().dateWrap),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().arrow),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().innerArrow),
                                            children: contentPage === null || contentPage === void 0 ? void 0 : contentPage.type_text
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        variant: "body2",
                                        children: contentPage === null || contentPage === void 0 ? void 0 : contentPage.createdDate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h4",
                                className: (_styles_news_NewsDetail_module_scss__WEBPACK_IMPORTED_MODULE_20___default().title),
                                children: t(contentPage === null || contentPage === void 0 ? void 0 : contentPage.title)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(interweave__WEBPACK_IMPORTED_MODULE_6__.Markup, {
                                content: contentPage === null || contentPage === void 0 ? void 0 : contentPage.content
                            }),
                            renderCopyLink()
                        ]
                    }),
                    renderRelatedList(contentPage === null || contentPage === void 0 ? void 0 : contentPage.relatedNews)
                ]
            }),
            bannerData && renderBannerPage()
        ]
    }));
};
async function getServerSideProps(context) {
    var ref;
    const param = (ref = context.params) === null || ref === void 0 ? void 0 : ref.newsUrl;
    const id = param.slice(param.indexOf(".") + 1);
    let langCode = (0,_utils_helpers_cookieHelpers__WEBPACK_IMPORTED_MODULE_21__/* .getCookie */ .ej)("UserLanguage", context.req.headers.cookie) || 'vi';
    langCode = langCode === 'vn' || _config_i18next__WEBPACK_IMPORTED_MODULE_13__/* ["default"].language */ .Z.language === 'vi-VN' ? 'vi' : 'en';
    const bannerData = await (0,_apis_landing_page_banner__WEBPACK_IMPORTED_MODULE_11__/* .getBanner */ .E)(langCode, 2);
    const data = await (0,_apis_landing_page_news__WEBPACK_IMPORTED_MODULE_12__/* .getNewsDetailPage */ .LA)(langCode, id);
    return {
        props: {
            bannerData,
            data
        }
    };
}

});

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 7501:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 9434:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/FileCopyOutlined");

/***/ }),

/***/ 8001:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 8887:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 8805:
/***/ ((module) => {

"use strict";
module.exports = require("i18next");

/***/ }),

/***/ 6071:
/***/ ((module) => {

"use strict";
module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ 8445:
/***/ ((module) => {

"use strict";
module.exports = require("interweave");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 6158:
/***/ ((module) => {

"use strict";
module.exports = require("react-share");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 2770:
/***/ ((module) => {

"use strict";
module.exports = require("swiper");

/***/ }),

/***/ 3630:
/***/ ((module) => {

"use strict";
module.exports = require("swiper/react");

/***/ }),

/***/ 4329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [338,999,597,128,388,922], () => (__webpack_exec__(2340)));
module.exports = __webpack_exports__;

})();