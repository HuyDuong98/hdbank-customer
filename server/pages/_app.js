(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1223:
/***/ ((module) => {

// Exports
module.exports = {
	"tipIcon": "DialogTips_tipIcon__fW7C2",
	"active": "DialogTips_active__NKXlk",
	"overlay": "DialogTips_overlay__PnRw9",
	"tipsWrapper": "DialogTips_tipsWrapper__87whX",
	"tipsHeader": "DialogTips_tipsHeader__boDs2",
	"icon": "DialogTips_icon__p6lG1",
	"tabs": "DialogTips_tabs__AGBI_",
	"tabContent": "DialogTips_tabContent__y31HF",
	"phoneWrapper": "DialogTips_phoneWrapper__wZlzM",
	"formWrapper": "DialogTips_formWrapper__C8Sxj",
	"phoneInput": "DialogTips_phoneInput__cf0ne",
	"faqWrapper": "DialogTips_faqWrapper__Q0pbV",
	"iconSelect": "DialogTips_iconSelect__RjO8_",
	"faqItem": "DialogTips_faqItem__DPRXe",
	"message": "DialogTips_message__FZGkg"
};


/***/ }),

/***/ 4361:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__25dhc",
	"container": "Footer_container__hb8U8",
	"logo": "Footer_logo__AHqXD",
	"infoWrap": "Footer_infoWrap__1xJ5P",
	"contact": "Footer_contact__YwDZe",
	"quickLink": "Footer_quickLink__Kiamm",
	"bold": "Footer_bold__9AZYl",
	"padding": "Footer_padding__ZZSkE",
	"socialWrap": "Footer_socialWrap__uKjX7",
	"iconWrapper": "Footer_iconWrapper__1fRY7",
	"socialIcon": "Footer_socialIcon__oQv9K",
	"btnApp": "Footer_btnApp__WloRJ",
	"languageWrap": "Footer_languageWrap__GXXnt",
	"copyright": "Footer_copyright__DwVis",
	"languageItem": "Footer_languageItem__O9DdE"
};


/***/ }),

/***/ 1767:
/***/ ((module) => {

// Exports
module.exports = {
	"wapperLadding": "LandingPage_wapperLadding__RDJwG",
	"listControl": "LandingPage_listControl__ofaGY",
	"textBold": "LandingPage_textBold__72GeJ",
	"overlay": "LandingPage_overlay__AcOqh"
};


/***/ }),

/***/ 2169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_LayoutLandingPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/styles/layouts/LandingPage.module.scss
var LandingPage_module = __webpack_require__(1767);
var LandingPage_module_default = /*#__PURE__*/__webpack_require__.n(LandingPage_module);
// EXTERNAL MODULE: ./src/components/shared/Header.tsx + 1 modules
var Header = __webpack_require__(3000);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/components/shared/Footer.module.scss
var Footer_module = __webpack_require__(4361);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./src/utils/helpers/cookieHelpers.ts
var cookieHelpers = __webpack_require__(81);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./src/stores/sharedStores.ts
var sharedStores = __webpack_require__(7839);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/config/domain.ts
var domain = __webpack_require__(7128);
// EXTERNAL MODULE: ./src/utils/helpers/transportRequestor.ts + 1 modules
var transportRequestor = __webpack_require__(9653);
;// CONCATENATED MODULE: ./src/apis/footer.ts


const getFooterInfo = async (langCode)=>{
    const apiUrl = `${domain/* DOMAIN.hdbankBetaV1 */.y.hdbankBetaV1}/LandingPage/footer-info?langcode=${langCode}`;
    return (0,transportRequestor/* getAsync */.CH)(apiUrl);
};

// EXTERNAL MODULE: external "interweave"
var external_interweave_ = __webpack_require__(8445);
;// CONCATENATED MODULE: ./src/components/shared/Footer.tsx











//images
const FacebookIcon = "/assets/socials/facebook.png";
const YoutubeIcon = "/assets/socials/youtube.png";
const Twitter = "/assets/socials/Twitter.png";
const LinkedIn = "/assets/socials/LinkedIn.png";
const Logo = "/assets/Logo.png";
const Adroid = "/assets/images/QRGooglePlay.png";
const Ios = "/assets/images/QRAppStore.png";
const Vietnamese = "/assets/icons/ic_vietnamese.png";
const English = "/assets/icons/icon_english.png";
const MBAppStore = "/assets/images/mbAppStore.png";
const MBGgPlay = "/assets/images/mbGooglePlay.png";
const Footer = ()=>{
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    const isMobile = (0,external_recoil_.useRecoilValue)(sharedStores/* isMobileState */.lo);
    const { 0: language , 1: setLanguage  } = (0,external_react_.useState)("vn");
    (0,external_react_.useEffect)(()=>{
        setLanguage(i18n.language);
    }, [
        i18n.language
    ]);
    const langCode = i18n.language === "vn" || i18n.language === "vi-VN" ? "vi" : "en";
    const { data  } = (0,external_react_query_.useQuery)([
        "footerInfoQuery",
        langCode
    ], ()=>getFooterInfo(langCode)
    );
    const handleChange = (event)=>{
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
        (0,cookieHelpers/* setCookie */.d8)("UserLanguage", event.target.value, 330);
    };
    const renderFooter = ()=>{
        if (isMobile) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: Logo,
                            className: (Footer_module_default()).logo
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                        className: (Footer_module_default()).downloadAppStore,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: MBAppStore,
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                        className: (Footer_module_default()).downloadGgPlay,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: MBGgPlay,
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                            light: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            container: true,
                            justifyContent: "space-between",
                            className: (Footer_module_default()).infoWrap,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_interweave_.Markup, {
                                    content: data === null || data === void 0 ? void 0 : data.item
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                            light: true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            item: true,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Footer_module_default()).padding,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        variant: "body1",
                                        className: (Footer_module_default()).bold,
                                        children: t("followUs")
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                    container: true,
                                    justifyContent: "space-between",
                                    className: (Footer_module_default()).iconWrapper,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: FacebookIcon,
                                            className: (Footer_module_default()).socialIcon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: Twitter,
                                            className: (Footer_module_default()).socialIcon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: YoutubeIcon,
                                            className: (Footer_module_default()).socialIcon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: LinkedIn,
                                            className: (Footer_module_default()).socialIcon
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                            light: true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            spacing: 3,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    sm: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: t("termsOfUse")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    sm: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: t("safetyAndSecurity")
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Footer_module_default()).padding,
                            children: t("sidemap")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Footer_module_default()).padding
                        })
                    ]
                })
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: Logo,
                            className: (Footer_module_default()).logo
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            justifyContent: "space-between",
                            className: (Footer_module_default()).infoWrap,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_interweave_.Markup, {
                                            content: data === null || data === void 0 ? void 0 : data.item
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            container: true,
                                            className: (Footer_module_default()).quickLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: t("termsOfUse")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: t("safetyAndSecurity")
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                        container: true,
                                        justifyContent: "space-between",
                                        className: (Footer_module_default()).socialWrap,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    container: true,
                                                    justifyContent: "center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        md: 8,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                variant: "body1",
                                                                className: (Footer_module_default()).bold,
                                                                children: t("followUs")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                                container: true,
                                                                className: (Footer_module_default()).iconWrapper,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: FacebookIcon,
                                                                        className: (Footer_module_default()).socialIcon
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: Twitter,
                                                                        className: (Footer_module_default()).socialIcon
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: YoutubeIcon,
                                                                        className: (Footer_module_default()).socialIcon
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: LinkedIn,
                                                                        className: (Footer_module_default()).socialIcon
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Select, {
                                                                value: language || "vn",
                                                                onChange: handleChange,
                                                                displayEmpty: true,
                                                                inputProps: {
                                                                    "aria-label": "Without label"
                                                                },
                                                                disableUnderline: true,
                                                                className: (Footer_module_default()).languageWrap,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MenuItem, {
                                                                        classes: {
                                                                            root: (Footer_module_default()).languageItem
                                                                        },
                                                                        value: "vn",
                                                                        className: (Footer_module_default()).languageItem,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: Vietnamese
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: t("vi")
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MenuItem, {
                                                                        classes: {
                                                                            root: (Footer_module_default()).languageItem
                                                                        },
                                                                        value: "en",
                                                                        className: (Footer_module_default()).languageItem,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: English
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: t("en")
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                item: true,
                                                xs: 6,
                                                md: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    container: true,
                                                    justifyContent: "center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                        item: true,
                                                        md: 10,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                variant: "body1",
                                                                className: (Footer_module_default()).bold,
                                                                children: t("mobileApp")
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                                container: true,
                                                                className: (Footer_module_default()).iconWrapper,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: Adroid
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: Ios
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    container: true,
                    justifyContent: "center",
                    className: (Footer_module_default()).copyright,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: t("coppyRight")
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
            container: true,
            className: (Footer_module_default()).footer,
            children: renderFooter()
        })
    }));
};
/* harmony default export */ const shared_Footer = (Footer);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/styles/components/shared/DialogTips.module.scss
var DialogTips_module = __webpack_require__(1223);
var DialogTips_module_default = /*#__PURE__*/__webpack_require__.n(DialogTips_module);
;// CONCATENATED MODULE: ./src/components/shared/DialogTips.tsx






const DialogTips = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { 0: boxChat , 1: setBoxChat  } = (0,external_react_.useState)(true);
    const handleDialog = (event)=>{
        setAnchorEl(event.currentTarget);
        setIsOpen(!isOpen);
    };
    const handleMessage = ()=>{
        const messenger = document.getElementById('fb-root');
        if (messenger) {
            messenger.style.display = 'block';
            setBoxChat(false);
        }
    };
    const handleZalo = ()=>{
        const zalo = document.getElementById('zaloChat');
        if (zalo) {
            zalo.style.display = 'block';
            setBoxChat(false);
        }
    };
    const renderDialogTip = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Popper, {
            open: isOpen,
            anchorEl: anchorEl,
            placement: "top-end",
            className: (DialogTips_module_default()).tipsWrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    className: (DialogTips_module_default()).tipsHeader,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: t('supportVia')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.List, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                            alignItems: "center",
                            onClick: handleMessage,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemAvatar, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/icons/icon fb mess.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        children: t('Facebook')
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                            alignItems: "center",
                            onClick: handleZalo,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemAvatar, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/icons/ic zalo.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                        children: t('Zalo')
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: boxChat && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()('', {
                        [(DialogTips_module_default()).overlay]: isOpen
                    }),
                    onClick: ()=>setIsOpen(!isOpen)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Tooltip, {
                    title: "Chat",
                    placement: "left",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "../../assets/icons/chatbox.svg",
                        className: external_clsx_default()((DialogTips_module_default()).tipIcon, {
                            [(DialogTips_module_default()).active]: isOpen
                        }),
                        onClick: handleDialog
                    })
                }),
                renderDialogTip()
            ]
        })
    }));
};
/* harmony default export */ const shared_DialogTips = (DialogTips);

;// CONCATENATED MODULE: ./src/components/layouts/LayoutLandingPage.tsx






const LayoutLandingPage = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                className: (LandingPage_module_default()).wapperLadding,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared_DialogTips, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const layouts_LayoutLandingPage = (LayoutLandingPage);


/***/ }),

/***/ 7686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ colour)
/* harmony export */ });
const colour = {
    white: '#ffffff',
    black: '#000000',
    gray: '#899296',
    primary01: '#da2128',
    primary02: '#ee9b31',
    complementary01: '#12b54a',
    bg01: '#d8d8d8',
    hover: 'rgba(218, 33, 40, 0.04)',
    connectorLine: '#eaeaf0',
    blue: '#2BBBE7',
    border: 'rgba(0, 0, 0, 0.23)'
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

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);


const commonRootBorder = {
    root: {
        padding: "0.875rem 0",
        "& .MuiInput-underline": {
            "&:before": {
                borderColor: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.border */ .Y.border
            }
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.primary01 */ .Y.primary01,
                borderLeftWidth: 1
            },
            "&.Mui-focused fieldset": {
                borderColor: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.primary01 */ .Y.primary01,
                borderWidth: ".0625rem"
            }
        }
    }
};
// A custom theme for this app
const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "Be Vietnam",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif", 
        ].join(",")
    },
    palette: {
        primary: {
            main: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.primary01 */ .Y.primary01
        },
        secondary: {
            main: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.primary02 */ .Y.primary02
        },
        error: {
            main: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.primary01 */ .Y.primary01
        },
        background: {
            default: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.white */ .Y.white
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: "6rem",
                padding: "0.625rem 2rem"
            },
            containedSizeSmall: {
                padding: "0.25rem 1rem"
            },
            outlined: {
                padding: "0.625rem 2rem"
            },
            label: {
                fontSize: "1rem",
                textTransform: "none"
            },
            containedSecondary: {
                color: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.white */ .Y.white
            }
        },
        MuiTextField: {
            ...commonRootBorder
        },
        MuiFormControl: {
            ...commonRootBorder
        },
        MuiTypography: {
            body1: {
                fontWeight: 500
            },
            body2: {
                fontWeight: 400,
                color: _colours__WEBPACK_IMPORTED_MODULE_1__/* .colour.gray */ .Y.gray
            }
        },
        MuiIconButton: {
            root: {
                borderRadius: "0",
                padding: "0.625rem"
            }
        },
        // MuiDataGrid: {
        //   cell: {
        //     borderBottom: 0,
        //   },
        // },
        MuiSelect: {
            root: {
                display: "flex",
                alignItems: "center"
            }
        },
        MuiFormHelperText: {
            contained: {
                marginLeft: 0,
                marginRight: 0
            }
        }
    },
    props: {
        MuiTypography: {
            variantMapping: {
                body1: "span",
                body2: "span"
            }
        },
        MuiButton: {
            disableElevation: true
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(300);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3033);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stores_sharedStores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7839);
/* harmony import */ var _config_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9777);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9076);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var interweave_ssr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(902);
/* harmony import */ var interweave_ssr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(interweave_ssr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layouts_LayoutLandingPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_i18next__WEBPACK_IMPORTED_MODULE_9__]);
_config_i18next__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
















(0,interweave_ssr__WEBPACK_IMPORTED_MODULE_11__.polyfill)();
const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
const breakpoint = 768;
const xs = 600;
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Project Execution Portal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/logo192.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preload",
                        href: "/fonts/SVN-FRIENDSFOREVER.OTF",
                        as: "font",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "HDBank"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
                theme: _config_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
                        client: queryClient,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                                Component: Component,
                                pageProps: pageProps
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
function Wrapper({ Component , pageProps  }) {
    const setIsMobile = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_8__/* .isMobileState */ .lo);
    const setIsXs = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_8__/* .isXsState */ .gE);
    const setMobileDevice = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_8__/* .mobileDevice */ .Sr);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        handleTypeOfDevice();
        window.addEventListener('resize', ()=>handleTypeOfDevice()
        );
        window.removeEventListener('resize', ()=>handleTypeOfDevice()
        );
    }, []);
    const handleTypeOfDevice = ()=>{
        const widthScreen = window.innerWidth;
        const heightScreen = window.innerHeight;
        if (widthScreen < breakpoint) {
            setIsMobile(true);
            setMobileDevice({
                width: widthScreen,
                height: heightScreen
            });
        } else setIsMobile(false);
        if (widthScreen < xs) {
            setIsXs(true);
        } else setIsXs(false);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_LayoutLandingPage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
}

});

/***/ }),

/***/ 7839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lo": () => (/* binding */ isMobileState),
/* harmony export */   "Sr": () => (/* binding */ mobileDevice),
/* harmony export */   "oT": () => (/* binding */ homeContactRef),
/* harmony export */   "gE": () => (/* binding */ isXsState)
/* harmony export */ });
/* unused harmony export sampleState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const sampleState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'sampleState',
    default: 1
});
const isMobileState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'isMobileState',
    default: false
});
const mobileDevice = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'mobileDevice',
    default: {
        width: 0,
        height: 0
    }
});
const homeContactRef = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'homeContactRef',
    default: {
    },
    dangerouslyAllowMutability: true
});
const isXsState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'isXsSize',
    default: false
});


/***/ }),

/***/ 9076:
/***/ (() => {



/***/ }),

/***/ 8130:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 3033:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 2105:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ 9615:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/AccessTime");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Cached");

/***/ }),

/***/ 7501:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 9556:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ 4202:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

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

/***/ 902:
/***/ ((module) => {

"use strict";
module.exports = require("interweave-ssr");

/***/ }),

/***/ 8506:
/***/ ((module) => {

"use strict";
module.exports = require("joi");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 4329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,338,999,8,237,741,629,666,149,488,175,0], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();