(() => {
var exports = {};
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 9737:
/***/ ((module) => {

// Exports
module.exports = {
	"cardPromotion": "CardPromotionOther_cardPromotion__mQpQW",
	"noti": "CardPromotionOther_noti__EVyaa",
	"padding": "CardPromotionOther_padding__l20_O",
	"productInfo": "CardPromotionOther_productInfo__idY6h",
	"time": "CardPromotionOther_time__09ctV"
};


/***/ }),

/***/ 3431:
/***/ ((module) => {

// Exports
module.exports = {
	"detailPromotion": "DetailPromotion_detailPromotion__BQ5RY",
	"banner": "DetailPromotion_banner__yF78Y",
	"contentDetail": "DetailPromotion_contentDetail__J_SIR",
	"description": "DetailPromotion_description__Ce_ve",
	"time": "DetailPromotion_time__208r5",
	"paginationActiveStyle": "DetailPromotion_paginationActiveStyle__PRgsP",
	"sliderSpacingBottom": "DetailPromotion_sliderSpacingBottom___l__h",
	"card": "DetailPromotion_card__hPJLt",
	"detailCard": "DetailPromotion_detailCard__JM7tE",
	"prmotionContent": "DetailPromotion_prmotionContent__8FFWM",
	"promotionsOther": "DetailPromotion_promotionsOther__F4c__",
	"subTitle": "DetailPromotion_subTitle__mfpb_",
	"sliderOther": "DetailPromotion_sliderOther__U5kCm",
	"swiperOther": "DetailPromotion_swiperOther__AJYZZ",
	"slideItem": "DetailPromotion_slideItem__Djcgu",
	"itemWrap": "DetailPromotion_itemWrap__goBWb",
	"nav": "DetailPromotion_nav__RYMrQ",
	"navNext": "DetailPromotion_navNext__rJSIu",
	"navPrev": "DetailPromotion_navPrev__iMDDX"
};


/***/ }),

/***/ 2395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DetailPromotion),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./src/components/shared/PageHeading.tsx
var PageHeading = __webpack_require__(6128);
// EXTERNAL MODULE: ./src/styles/promotion/DetailPromotion.module.scss
var DetailPromotion_module = __webpack_require__(3431);
var DetailPromotion_module_default = /*#__PURE__*/__webpack_require__.n(DetailPromotion_module);
// EXTERNAL MODULE: external "@material-ui/icons/FileCopyOutlined"
var FileCopyOutlined_ = __webpack_require__(9434);
var FileCopyOutlined_default = /*#__PURE__*/__webpack_require__.n(FileCopyOutlined_);
// EXTERNAL MODULE: external "copy-to-clipboard"
var external_copy_to_clipboard_ = __webpack_require__(8887);
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/apis/landing-page/promotion.ts
var promotion = __webpack_require__(8463);
// EXTERNAL MODULE: external "interweave"
var external_interweave_ = __webpack_require__(8445);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: ./src/styles/components/CardPromotionOther.module.scss
var CardPromotionOther_module = __webpack_require__(9737);
var CardPromotionOther_module_default = /*#__PURE__*/__webpack_require__.n(CardPromotionOther_module);
;// CONCATENATED MODULE: ./src/components/promotion/CardPromotionOther.tsx




const CardPromotionOther = (props)=>{
    const { image , title , content , startDate , endDate , label  } = props;
    const { t  } = (0,external_react_i18next_.useTranslation)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
            className: (CardPromotionOther_module_default()).cardPromotion,
            children: [
                label && /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                    className: (CardPromotionOther_module_default()).noti,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: label
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: "100%",
                    src: image
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                    container: true,
                    direction: "column",
                    className: (CardPromotionOther_module_default()).productInfo,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                            variant: "body1",
                            className: (CardPromotionOther_module_default()).padding,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (CardPromotionOther_module_default()).padding,
                            children: content
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: `${(CardPromotionOther_module_default()).time} ${(CardPromotionOther_module_default()).padding}`,
                            children: [
                                startDate,
                                " - ",
                                endDate
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const promotion_CardPromotionOther = (CardPromotionOther);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__(4992);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);
// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__(7749);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: ./src/utils/constants/pagePath.ts
var pagePath = __webpack_require__(7338);
// EXTERNAL MODULE: ./src/stores/sharedStores.ts
var sharedStores = __webpack_require__(7839);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/components/shared/BannerSlide.tsx
var BannerSlide = __webpack_require__(7922);
// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__(9615);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: ./src/utils/helpers/commonHelpers.ts
var commonHelpers = __webpack_require__(3805);
// EXTERNAL MODULE: ./src/components/shared/SocialShare.tsx
var SocialShare = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/promotion/[promotionUrl].tsx






















function DetailPromotion({ id  }) {
    var ref, ref1, ref2, ref3, ref4;
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    const isMobile = (0,external_recoil_.useRecoilValue)(sharedStores/* isMobileState */.lo);
    const lstBreadCrumb = [
        {
            label: t("promotion"),
            path: pagePath/* pagePath.promotion */.d.promotion
        },
        {
            label: t("promotionDetails")
        }, 
    ];
    const langCode = i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : i18n.language;
    const { data: promotionDetail  } = (0,external_react_query_.useQuery)([
        "promotionDetailQuery",
        langCode,
        id
    ], ()=>(0,promotion/* getPromotionsDetail */.lS)(langCode, id)
    );
    const handleCopyLink = ()=>{
        external_copy_to_clipboard_default()(window.location.href, {
            debug: true,
            message: "Press #{key} to copy"
        });
    };
    const handleChangePage = (title, id)=>{
    // history.push(`${pagePath.productPage}/${convertUrltoSlug(title)}.${id}`)
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
        className: (DetailPromotion_module_default()).detailPromotion,
        children: [
            !isMobile && /*#__PURE__*/ jsx_runtime_.jsx(PageHeading/* default */.Z, {
                breadCrumbs: lstBreadCrumb,
                iconHome: true
            }),
            promotionDetail && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    (promotionDetail === null || promotionDetail === void 0 ? void 0 : promotionDetail.banners) && /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        className: (DetailPromotion_module_default()).banner,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BannerSlide/* default */.Z, {
                            listBanner: isMobile ? promotionDetail === null || promotionDetail === void 0 ? void 0 : (ref = promotionDetail.banners) === null || ref === void 0 ? void 0 : ref.mobile_Mode : promotionDetail === null || promotionDetail === void 0 ? void 0 : (ref1 = promotionDetail.banners) === null || ref1 === void 0 ? void 0 : ref1.pc_Mode
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        className: (DetailPromotion_module_default()).contentDetail,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                component: "h1",
                                color: "primary",
                                children: promotionDetail.promotionName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                container: true,
                                className: (DetailPromotion_module_default()).description,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                    item: true,
                                    md: 12,
                                    xs: 12,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                            className: (DetailPromotion_module_default()).time,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((AccessTime_default()), {
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                                    children: [
                                                        promotionDetail.createdDate,
                                                        "-",
                                                        promotionDetail.finishDate
                                                    ]
                                                })
                                            ]
                                        }),
                                        (promotionDetail === null || promotionDetail === void 0 ? void 0 : promotionDetail.applicable) && (promotionDetail === null || promotionDetail === void 0 ? void 0 : promotionDetail.applicable.length) > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                            mt: 3,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                    component: "h6",
                                                    children: t("appliedCards")
                                                }),
                                                !isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    container: true,
                                                    spacing: 3,
                                                    children: promotionDetail === null || promotionDetail === void 0 ? void 0 : (ref2 = promotionDetail.applicable) === null || ref2 === void 0 ? void 0 : ref2.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                            item: true,
                                                            md: 2,
                                                            sm: 4,
                                                            xs: 6,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                                                className: (DetailPromotion_module_default()).card,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: isMobile ? item.mobile_mode : item.pc_mode,
                                                                        alt: item.title,
                                                                        onClick: ()=>handleChangePage(item.title, item.id)
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                                                        className: (DetailPromotion_module_default()).detailCard,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                                    onClick: ()=>handleChangePage(item.title, item.id)
                                                                                    ,
                                                                                    children: item.title
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                                                variant: "contained",
                                                                                color: "primary",
                                                                                size: "small",
                                                                                onClick: ()=>window.location.href = item.url
                                                                                ,
                                                                                children: t("register")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }, index)
                                                    )
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                                                    slidesPerView: 2,
                                                    spaceBetween: 30,
                                                    observeParents: true,
                                                    pagination: {
                                                        clickable: true,
                                                        bulletActiveClass: `${(DetailPromotion_module_default()).paginationActiveStyle}`
                                                    },
                                                    children: promotionDetail === null || promotionDetail === void 0 ? void 0 : (ref3 = promotionDetail.applicable) === null || ref3 === void 0 ? void 0 : ref3.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SwiperSlide, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                                                    className: (DetailPromotion_module_default()).card,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: isMobile ? item.mobile_mode : item.pc_mode,
                                                                            alt: item.title,
                                                                            onClick: ()=>handleChangePage(item.title, item.id)
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                                onClick: ()=>handleChangePage(item.title, item.id)
                                                                                ,
                                                                                children: item.title
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                                            variant: "contained",
                                                                            color: "primary",
                                                                            size: "small",
                                                                            onClick: ()=>window.location.href = item.url
                                                                            ,
                                                                            children: t("Đăng ký")
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                                    className: (DetailPromotion_module_default()).sliderSpacingBottom
                                                                })
                                                            ]
                                                        }, index)
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                mt: 3,
                                className: (DetailPromotion_module_default()).prmotionContent,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_interweave_.Markup, {
                                    content: promotionDetail.content
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        component: "section",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    md: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(SocialShare/* default */.Z, {
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    md: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                        mt: isMobile ? 3 : 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            container: true,
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    item: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                        children: t("copyLink")
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    item: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        className: (DetailPromotion_module_default()).copyLink,
                                                        onClick: ()=>handleCopyLink()
                                                        ,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FileCopyOutlined_default()), {
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                        component: "section",
                        className: (DetailPromotion_module_default()).promotionsOther,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                component: "h2",
                                align: "center",
                                children: t("discoverMoreOffers")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                align: "center",
                                className: (DetailPromotion_module_default()).subTitle,
                                children: t("countlessCreditCardOffersForYou")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                className: (DetailPromotion_module_default()).sliderOther,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
                                        breakpoints: {
                                            300: {
                                                slidesPerView: "auto"
                                            },
                                            640: {
                                                slidesPerView: 2
                                            },
                                            // when window width is >= 768px
                                            1280: {
                                                slidesPerView: 3
                                            }
                                        },
                                        navigation: !isMobile ? {
                                            prevEl: "#navPrev",
                                            nextEl: "#navNext"
                                        } : false,
                                        className: (DetailPromotion_module_default()).swiperOther,
                                        children: promotionDetail && ((ref4 = promotionDetail.otherPromotions) === null || ref4 === void 0 ? void 0 : ref4.map((data)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                                                className: (DetailPromotion_module_default()).slideItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: `${pagePath/* pagePath.promotion */.d.promotion}/${(0,commonHelpers/* convertUrltoSlug */.IM)(data.propotionName)}.${data.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                        className: (DetailPromotion_module_default()).itemWrap,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(promotion_CardPromotionOther, {
                                                            image: isMobile ? data.mobile_mode : data.pc_mode,
                                                            title: data.propotionName,
                                                            content: data.content,
                                                            startDate: data.start,
                                                            endDate: data.end,
                                                            label: data.label_text
                                                        })
                                                    })
                                                })
                                            }, data.id));
                                        }))
                                    }),
                                    !isMobile && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                id: "navPrev",
                                                className: (DetailPromotion_module_default()).navPrev,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                id: "navNext",
                                                className: (DetailPromotion_module_default()).navNext,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getServerSideProps(context) {
    var ref;
    const param = (ref = context.params) === null || ref === void 0 ? void 0 : ref.promotionUrl;
    const id = param.slice(param.indexOf(".") + 1);
    return {
        props: {
            id
        }
    };
}


/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 9615:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/AccessTime");

/***/ }),

/***/ 4992:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ 7749:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ChevronRight");

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

/***/ 8445:
/***/ ((module) => {

"use strict";
module.exports = require("interweave");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,338,999,597,805,128,388,922,463], () => (__webpack_exec__(2395)));
module.exports = __webpack_exports__;

})();