(() => {
var exports = {};
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 9967:
/***/ ((module) => {

// Exports
module.exports = {
	"pageWrap": "ProductDetail_pageWrap__3Mv8o",
	"desc": "ProductDetail_desc__xMuov",
	"detailWrap": "ProductDetail_detailWrap__WsSj0",
	"mainDetailWrap": "ProductDetail_mainDetailWrap__5en8g",
	"bottomImage": "ProductDetail_bottomImage__DrY08",
	"groupInfo": "ProductDetail_groupInfo__yU8_B",
	"checkBox": "ProductDetail_checkBox__xftDf",
	"actionWrap": "ProductDetail_actionWrap__NOXLj",
	"btnDiv": "ProductDetail_btnDiv__8COIS",
	"link": "ProductDetail_link__lwpiU",
	"mainInfo": "ProductDetail_mainInfo__OBM8X",
	"benefit": "ProductDetail_benefit__0hSPx",
	"listPromotion": "ProductDetail_listPromotion__XLLK2",
	"promoteTitle": "ProductDetail_promoteTitle__8WkxC",
	"promotionWrap": "ProductDetail_promotionWrap__KI0qC",
	"promoteImg": "ProductDetail_promoteImg__lL299",
	"noti": "ProductDetail_noti__29DTs",
	"title": "ProductDetail_title__DtzA3",
	"titleMobile": "ProductDetail_titleMobile____FoD",
	"titlePC": "ProductDetail_titlePC__JPPLa",
	"time": "ProductDetail_time__F_ebp",
	"info": "ProductDetail_info__bRvvO",
	"textContent": "ProductDetail_textContent__WQ1Mi",
	"copyLink": "ProductDetail_copyLink__YFVat",
	"mediaItem": "ProductDetail_mediaItem__82luF",
	"linkWrap": "ProductDetail_linkWrap__xrK0j",
	"offerWrap": "ProductDetail_offerWrap__JVQyp",
	"headingWrap": "ProductDetail_headingWrap__nUmbQ",
	"sliderWrap": "ProductDetail_sliderWrap___JFod",
	"swiperWrap": "ProductDetail_swiperWrap__ys_ik",
	"slideItem": "ProductDetail_slideItem__k3e11",
	"productInfo": "ProductDetail_productInfo__Fz1ez",
	"content": "ProductDetail_content__sh_M_",
	"nav": "ProductDetail_nav__ae1MT",
	"customerReviewWrap": "ProductDetail_customerReviewWrap__9FyCt",
	"navNext": "ProductDetail_navNext__YEZDp",
	"navPrev": "ProductDetail_navPrev__PktaP",
	"fqaWrap": "ProductDetail_fqaWrap__E_Yrb",
	"listFqa": "ProductDetail_listFqa__rzCCz",
	"bgColor": "ProductDetail_bgColor__yBpSt",
	"comments": "ProductDetail_comments__L3esA",
	"itemWrap": "ProductDetail_itemWrap__ooOlx",
	"padding": "ProductDetail_padding__zwXpw",
	"avatarImg": "ProductDetail_avatarImg__9FpQ1",
	"contentColor": "ProductDetail_contentColor__uEuNk",
	"FAQItem": "ProductDetail_FAQItem__UgGDU",
	"icon": "ProductDetail_icon__y99KW",
	"badgeWrap": "ProductDetail_badgeWrap__3mhs_",
	"listCardWrap": "ProductDetail_listCardWrap__wf0l0",
	"relative": "ProductDetail_relative__USsTj",
	"badgeIcon": "ProductDetail_badgeIcon__jXROi",
	"blackColor": "ProductDetail_blackColor__NB7Gx",
	"animate": "ProductDetail_animate__0ZrIn",
	"cardItem": "ProductDetail_cardItem__px96f",
	"shadow": "ProductDetail_shadow__zidFc",
	"flex": "ProductDetail_flex__QrvNg",
	"cardImg": "ProductDetail_cardImg__ul66E",
	"cardName": "ProductDetail_cardName__4b423",
	"closeIcon": "ProductDetail_closeIcon__EkQb_"
};


/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductDetailPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/product/ProductDetail.module.scss
var ProductDetail_module = __webpack_require__(9967);
var ProductDetail_module_default = /*#__PURE__*/__webpack_require__.n(ProductDetail_module);
// EXTERNAL MODULE: ./src/components/shared/PageHeading.tsx
var PageHeading = __webpack_require__(6128);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: ./src/stores/sharedStores.ts
var sharedStores = __webpack_require__(7839);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: external "copy-to-clipboard"
var external_copy_to_clipboard_ = __webpack_require__(8887);
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_);
// EXTERNAL MODULE: ./src/utils/constants/pagePath.ts
var pagePath = __webpack_require__(7338);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/icons/FileCopyOutlined"
var FileCopyOutlined_ = __webpack_require__(9434);
var FileCopyOutlined_default = /*#__PURE__*/__webpack_require__.n(FileCopyOutlined_);
// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__(6617);
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);
// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__(9615);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: external "interweave"
var external_interweave_ = __webpack_require__(8445);
// EXTERNAL MODULE: ./src/components/shared/SocialShare.tsx
var SocialShare = __webpack_require__(388);
// EXTERNAL MODULE: ./src/utils/helpers/commonHelpers.ts
var commonHelpers = __webpack_require__(3805);
;// CONCATENATED MODULE: ./src/components/product/Detail.tsx















//icons


//image
const CompareIcon = "/assets/mobile/landing/compare-icon.svg";
const CompareIconBlack = "/assets/mobile/landing/compare-icon-black.svg";
const PromoteImage = "/assets/mobile/landing/news-page.png";
const Card2 = "/assets/mobile/landing/card-2.png";
const Detail = (props)=>{
    const { title: title1 , id: id1 , short_description , prod_description , pc_mode: pc_mode1 , mobile_mode: mobile_mode1 , lstPromote , hyperlink ,  } = props;
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const isMobile = (0,external_recoil_.useRecoilValue)(sharedStores/* isMobileState */.lo);
    const { 0: lstCompare , 1: setLstCompare  } = (0,external_react_.useState)([]);
    const { 0: checked , 1: setChecked  } = (0,external_react_.useState)({
    });
    const image = !isMobile ? pc_mode1 : mobile_mode1;
    const isLength = lstCompare.length > 1;
    (0,external_react_.useEffect)(()=>{
        const sessionStorageeData = sessionStorage.getItem("cardCompare");
        const cardCompare = sessionStorageeData && JSON.parse(sessionStorageeData);
        if (cardCompare) {
            setLstCompare(cardCompare.list);
            setChecked(cardCompare.checked);
        }
    // const script = document.createElement('script')
    // script.src = 'https://sp.zalo.me/plugins/sdk.js'
    // script.async = true
    // document.body.appendChild(script)
    // return () => {
    //   document.body.removeChild(script)
    // }
    }, []);
    const handleCopyLink = ()=>{
        external_copy_to_clipboard_default()(window.location.href, {
            debug: true,
            message: "Press #{key} to copy"
        });
    };
    const remove = (card)=>{
        const temp = lstCompare;
        temp.map((item, idx)=>{
            if (item.id === card.id) {
                temp.splice(idx, 1); //remove card
                const newChecked = {
                    ...checked,
                    [card.id]: false
                };
                setLstCompare(temp);
                setChecked(newChecked);
                const cardCompare = {
                    checked: newChecked,
                    list: temp
                };
                sessionStorage.setItem("cardCompare", JSON.stringify(cardCompare));
            }
        });
    };
    const onChooseCard = (e, card)=>{
        const isChecked = e.target.checked;
        const temp = lstCompare;
        if (isChecked) {
            // add card into compare list
            const newChecked = {
                ...checked,
                [card.id]: isChecked
            };
            setLstCompare([
                ...lstCompare,
                card
            ]);
            temp.push(card);
            setChecked(newChecked);
            const cardCompare = {
                checked: newChecked,
                list: temp
            };
            sessionStorage.setItem("cardCompare", JSON.stringify(cardCompare));
        } else {
            remove(card);
        }
    // if (temp.length === 3) history.push(pagePath.compareProductsPage)
    };
    const renderCopyLink = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
            item: true,
            sm: 5,
            xs: 12,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                container: true,
                alignItems: "flex-end",
                justifyContent: "space-between",
                className: (ProductDetail_module_default()).copyLink,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        item: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialShare/* default */.Z, {
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        item: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                            container: true,
                            alignItems: "center",
                            className: (ProductDetail_module_default()).linkWrap,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: t("copyLink")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                        onClick: ()=>handleCopyLink()
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FileCopyOutlined_default()), {
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        }));
    };
    const renderBody = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
            className: (ProductDetail_module_default()).detailWrap,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                    variant: "h1",
                    children: t(`${title1}`)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                    container: true,
                    className: (ProductDetail_module_default()).mainDetailWrap,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            sm: 5,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                container: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 12,
                                        justifyContent: "center",
                                        container: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: image || Card2
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            className: (ProductDetail_module_default()).bottomImage,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                        container: true,
                                                        direction: "column",
                                                        className: (ProductDetail_module_default()).groupInfo,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: (ProductDetail_module_default()).desc,
                                                            children: short_description
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                    className: (ProductDetail_module_default()).actionWrap,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                            className: (ProductDetail_module_default()).btnDiv,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                                variant: "contained",
                                                                color: "primary",
                                                                onClick: ()=>window.location.href = hyperlink
                                                                ,
                                                                children: t("openCard")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.FormControlLabel, {
                                                            className: (ProductDetail_module_default()).checkBox,
                                                            control: /*#__PURE__*/ jsx_runtime_.jsx(core_.Checkbox, {
                                                                checked: checked[id1] || false,
                                                                onChange: (e)=>onChooseCard(e, {
                                                                        ...props
                                                                    })
                                                                ,
                                                                color: "primary",
                                                                disabled: lstCompare.length === 3 || false
                                                            }),
                                                            label: t("compareCards")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            sm: 7,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                container: true,
                                className: (ProductDetail_module_default()).mainInfo,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_interweave_.Markup, {
                                            content: prod_description
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            container: true,
                                            className: (ProductDetail_module_default()).listPromotion,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                    variant: "h6",
                                                    className: (ProductDetail_module_default()).promoteTitle,
                                                    children: t("cardIncentiveProgram")
                                                }),
                                                lstPromote.map((promote, idx)=>{
                                                    const { id , title , content , pc_mode , mobile_mode , finish_date , start_date ,  } = promote;
                                                    const promoteImage = !isMobile ? pc_mode : mobile_mode;
                                                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                        container: true,
                                                        direction: "column",
                                                        className: (ProductDetail_module_default()).promotionWrap,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: `${pagePath/* pagePath.promotion */.d.promotion}/${(0,commonHelpers/* convertUrltoSlug */.IM)(title)}.${id}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                    className: (ProductDetail_module_default()).titleMobile,
                                                                    children: t(title)
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                                container: true,
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                                        item: true,
                                                                        md: 4,
                                                                        sm: 5,
                                                                        className: (ProductDetail_module_default()).promoteImg,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                            href: `${pagePath/* pagePath.promotion */.d.promotion}/${(0,commonHelpers/* convertUrltoSlug */.IM)(title)}.${id}`,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: promoteImage || PromoteImage
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                                                        className: (ProductDetail_module_default()).noti,
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            children: t("new")
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                                        item: true,
                                                                        md: 8,
                                                                        sm: 7,
                                                                        className: (ProductDetail_module_default()).info,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                                            container: true,
                                                                            direction: "column",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: `${pagePath/* pagePath.promotion */.d.promotion}/${(0,commonHelpers/* convertUrltoSlug */.IM)(title)}.${id}`,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                                                        className: (ProductDetail_module_default()).titlePC,
                                                                                        children: t(title)
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                                                                    className: (ProductDetail_module_default()).time,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((AccessTime_default()), {
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                                                                            children: [
                                                                                                start_date,
                                                                                                " - ",
                                                                                                finish_date
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: (ProductDetail_module_default()).textContent,
                                                                                    children: t(content)
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, idx));
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                renderCopyLink()
            ]
        }));
    };
    const renderBadge = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
            className: (ProductDetail_module_default()).badgeWrap,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                className: (ProductDetail_module_default()).relative,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        //className={Style.badgeIcon}
                        className: external_clsx_default()((ProductDetail_module_default()).badgeIcon, {
                            [(ProductDetail_module_default()).blackColor]: !isLength
                        }),
                        onClick: ()=>{
                        // if (isLength) history.push(pagePath.compareProductsPage)
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Badge, {
                            badgeContent: `${lstCompare.length}/3`,
                            color: "primary",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: isLength ? CompareIcon : CompareIconBlack
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        className: (ProductDetail_module_default()).listCardWrap,
                        children: lstCompare.map((card, idx)=>{
                            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                className: external_clsx_default()((ProductDetail_module_default()).cardItem, {
                                    [(ProductDetail_module_default()).shadow]: !isLength
                                }),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                        className: (ProductDetail_module_default()).flex,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: card.image || Card2,
                                                className: (ProductDetail_module_default()).cardImg
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (ProductDetail_module_default()).cardName,
                                                children: card.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Clear_default()), {
                                        className: (ProductDetail_module_default()).closeIcon,
                                        onClick: ()=>remove(card)
                                    })
                                ]
                            }, idx));
                        })
                    })
                ]
            })
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            renderBody(),
            lstCompare.length > 0 && renderBadge()
        ]
    }));
};
/* harmony default export */ const product_Detail = (Detail);

// EXTERNAL MODULE: ./src/styles/faq/ListFAQ.module.scss
var ListFAQ_module = __webpack_require__(9418);
var ListFAQ_module_default = /*#__PURE__*/__webpack_require__.n(ListFAQ_module);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: ./src/hooks/useOnClickOutSide.ts
var useOnClickOutSide = __webpack_require__(866);
;// CONCATENATED MODULE: ./src/components/faq/FAQItem.tsx





//icons


const FAQItem = ({ question , content  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const ref = (0,external_react_.useRef)(null);
    (0,useOnClickOutSide/* default */.Z)(ref, ()=>setIsOpen(false)
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        className: (ListFAQ_module_default()).questionWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(ListFAQ_module_default()).heading} ${isOpen && (ListFAQ_module_default()).active}`,
                onClick: ()=>setIsOpen(!isOpen)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronRight, {
                        className: (ListFAQ_module_default()).icon,
                        style: {
                            transform: `rotate(${isOpen ? '90' : '0'}deg)`,
                            transition: 'all 200ms linear'
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: question
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Collapse, {
                in: isOpen,
                timeout: "auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).body,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_interweave_.Markup, {
                        content: content
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const faq_FAQItem = (FAQItem);

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/apis/faq.ts
var faq = __webpack_require__(6666);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/product/ListFAQ.tsx










const ListFQA = (props)=>{
    const { lstFQA  } = props;
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language;
    const { 0: desc , 1: setDesc  } = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    let faqID = '';
    const { data: faqDetail , refetch  } = (0,external_react_query_.useQuery)([
        'faqDetailQuery',
        langCode,
        faqID
    ], ()=>(0,faq/* getFaqDetail */.oP)(langCode, faqID)
    , {
        enabled: false
    });
    (0,external_react_.useEffect)(()=>{
        if (!faqDetail) return;
        setDesc(faqDetail.description);
    }, [
        faqDetail
    ]);
    const handleGetFaqDetail = (id)=>{
        faqID = id;
        refetch();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
        className: (ProductDetail_module_default()).fqaWrap,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                container: true,
                direction: "column",
                className: (ProductDetail_module_default()).headingWrap,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    container: true,
                    direction: "column",
                    className: (ProductDetail_module_default()).title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        variant: "h3",
                        children: t('faq')
                    })
                })
            }),
            lstFQA.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    onClick: ()=>handleGetFaqDetail(item.id)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(faq_FAQItem, {
                        question: item.title,
                        content: desc
                    })
                }, idx)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (ProductDetail_module_default()).link,
                onClick: ()=>{
                    router.push(pagePath/* pagePath.faq */.d.faq);
                },
                children: t('seeMore')
            })
        ]
    }));
};
/* harmony default export */ const ListFAQ = (ListFQA);

// EXTERNAL MODULE: ./src/apis/landing-page/product.ts
var product = __webpack_require__(5593);
;// CONCATENATED MODULE: ./src/pages/product/[productUrl].tsx













function ProductDetailPage({ id  }) {
    const { i18n  } = (0,external_react_i18next_.useTranslation)();
    const langCode = i18n.language === 'vn' || i18n.language === 'vi-VN' ? 'vi' : i18n.language;
    const lstBreadCrumb = [
        {
            label: 'productList',
            path: pagePath/* pagePath.productPage */.d.productPage
        },
        {
            label: 'cardDetails'
        }
    ];
    const { 0: content , 1: setContent  } = (0,external_react_.useState)({
        faQs: [],
        feedback: [],
        info: {
            id: '',
            hyperlink: ''
        },
        promotes: []
    });
    const isMobile = (0,external_recoil_.useRecoilValue)(sharedStores/* isMobileState */.lo);
    const { data , isFetching  } = (0,external_react_query_.useQuery)([
        'detailQuery',
        langCode,
        id
    ], ()=>(0,product/* getProductDetail */.jn)(langCode, id)
    );
    (0,external_react_.useEffect)(()=>{
        if (!data) return;
        setContent(data);
    }, [
        data
    ]);
    if (isFetching) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
            className: (ProductDetail_module_default()).pageWrap,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                className: (ProductDetail_module_default()).paddingPage,
                children: [
                    !isMobile && /*#__PURE__*/ jsx_runtime_.jsx(PageHeading/* default */.Z, {
                        breadCrumbs: lstBreadCrumb,
                        iconHome: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_Detail, {
                        ...content.info,
                        lstPromote: content.promotes
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ListFAQ, {
                        lstFQA: content.faQs
                    })
                ]
            })
        })
    }));
};
async function getServerSideProps(context) {
    var ref;
    const param = (ref = context.params) === null || ref === void 0 ? void 0 : ref.productUrl;
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

/***/ 6617:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Clear");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,338,999,597,805,128,666,488,593,388], () => (__webpack_exec__(7413)));
module.exports = __webpack_exports__;

})();