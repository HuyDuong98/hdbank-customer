exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 8813:
/***/ ((module) => {

// Exports
module.exports = {
	"pageWrap": "ListProductPage_pageWrap__5MLEq",
	"mobileTitle": "ListProductPage_mobileTitle__zpQHF",
	"filterWrap": "ListProductPage_filterWrap____azJ",
	"filterHeading": "ListProductPage_filterHeading__VktLz",
	"iconGroup": "ListProductPage_iconGroup__WkPLK",
	"icon": "ListProductPage_icon__qmI_B",
	"active": "ListProductPage_active__ydFcp",
	"listWrap": "ListProductPage_listWrap__Dh9Da",
	"group": "ListProductPage_group__Oo4KJ",
	"tags": "ListProductPage_tags__GCu99",
	"btnGroup": "ListProductPage_btnGroup__acmjS",
	"listProductWrap": "ListProductPage_listProductWrap__kbA8t",
	"itemWrap": "ListProductPage_itemWrap__kZioY",
	"stand": "ListProductPage_stand__MIY_5",
	"actionWrap": "ListProductPage_actionWrap__LgllH",
	"checkBox": "ListProductPage_checkBox__ustcU",
	"link": "ListProductPage_link__rvVt9",
	"textWrap": "ListProductPage_textWrap__mHrll",
	"groupInfo": "ListProductPage_groupInfo__PRbdh",
	"noneLine": "ListProductPage_noneLine__NSOoj",
	"oddLine": "ListProductPage_oddLine__ZJthx",
	"title": "ListProductPage_title__o8k2D",
	"ulGroup": "ListProductPage_ulGroup__hcsOI",
	"badgeWrap": "ListProductPage_badgeWrap__Tfp7a",
	"listCardWrap": "ListProductPage_listCardWrap__yJ738",
	"relative": "ListProductPage_relative__ijT6V",
	"badgeIcon": "ListProductPage_badgeIcon__V7tpO",
	"blackColor": "ListProductPage_blackColor__dva_F",
	"animate": "ListProductPage_animate__ag_iF",
	"cardItem": "ListProductPage_cardItem__Klwg0",
	"shadow": "ListProductPage_shadow__nfagc",
	"flex": "ListProductPage_flex__TEFOV",
	"cardImg": "ListProductPage_cardImg__8gakj",
	"cardName": "ListProductPage_cardName__Gj1cY",
	"closeIcon": "ListProductPage_closeIcon__JmU3T",
	"tagsFilter": "ListProductPage_tagsFilter__MgLIr",
	"tag": "ListProductPage_tag__KUFvi"
};


/***/ }),

/***/ 5551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8813);
/* harmony import */ var _styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8445);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interweave__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7338);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6617);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stores_sharedStores__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7839);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_helpers_commonHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3805);










//icons




//img
const CompareIcon = '/assets/mobile/landing/compare-icon.svg';
const CompareIconBlack = '/assets/mobile/landing/compare-icon-black.svg';
const Card2 = '/assets/mobile/landing/card-2.png';
function isOdd(n) {
    return Math.abs(n % 2) == 1;
}
const ProductItem = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { lstProduct  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const isMobile = (0,recoil__WEBPACK_IMPORTED_MODULE_11__.useRecoilValue)(_stores_sharedStores__WEBPACK_IMPORTED_MODULE_10__/* .isMobileState */ .lo);
    const { 0: checked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    });
    const { 0: lstCompare , 1: setLstCompare  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const isLength = lstCompare.length > 1;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const sessionStorageData = sessionStorage.getItem('cardCompare');
        const cardCompare = sessionStorageData && JSON.parse(sessionStorageData);
        if (cardCompare) {
            setLstCompare(cardCompare.list);
            setChecked(cardCompare.checked);
        }
    }, []);
    const remove = (card)=>{
        const temp = lstCompare;
        temp.map((item, idx)=>{
            if (item.id === card.id) {
                temp.splice(idx, 1) //remove card
                ;
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
                sessionStorage.setItem('cardCompare', JSON.stringify(cardCompare));
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
            sessionStorage.setItem('cardCompare', JSON.stringify(cardCompare));
        } else {
            remove(card);
        }
        if (temp.length === 3) router.push(_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__/* .pagePath.compareProductsPage */ .d.compareProductsPage);
    };
    const handleChangePage = ()=>{
        if (isLength) router.push(_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__/* .pagePath.compareProductsPage */ .d.compareProductsPage);
    };
    const renderListProduct = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().listProductWrap),
            children: lstProduct.map((product, idx1)=>{
                const { id , title , pc_mode , mobile_mode , criterias , hyperlink  } = product;
                const img = !isMobile ? pc_mode : mobile_mode;
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().itemWrap),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            href: `${_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__/* .pagePath.productPage */ .d.productPage}/${(0,_utils_helpers_commonHelpers__WEBPACK_IMPORTED_MODULE_12__/* .convertUrltoSlug */ .IM)(title)}.${id}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                color: "textPrimary",
                                variant: "h5",
                                children: t(title)
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            container: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 2,
                                    sm: 4,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        container: true,
                                        direction: "column",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                href: `${_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__/* .pagePath.productPage */ .d.productPage}/${(0,_utils_helpers_commonHelpers__WEBPACK_IMPORTED_MODULE_12__/* .convertUrltoSlug */ .IM)(title)}.${id}`,
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: img || Card2,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                    variant: "contained",
                                                    color: "primary",
                                                    onClick: ()=>{
                                                        if (hyperlink) {
                                                            window.location.href = hyperlink;
                                                        }
                                                        return;
                                                    },
                                                    children: t('openCard')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actionWrap),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().link),
                                                            onClick: ()=>router.push(`${_utils_constants_pagePath__WEBPACK_IMPORTED_MODULE_5__/* .pagePath.productPage */ .d.productPage}/${(0,_utils_helpers_commonHelpers__WEBPACK_IMPORTED_MODULE_12__/* .convertUrltoSlug */ .IM)(title)}.${id}`)
                                                            ,
                                                            children: t('seeDetail')
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {
                                                        className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().checkBox),
                                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                                                            checked: checked[id] || false,
                                                            onChange: (e)=>onChooseCard(e, product)
                                                            ,
                                                            color: "primary",
                                                            disabled: !checked[id] && lstCompare.length >= 3
                                                        }),
                                                        label: t('compareCards')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    lg: 10,
                                    sm: 8,
                                    xs: 12,
                                    className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().textWrap),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        container: true,
                                        spacing: 2,
                                        children: criterias.map((criteria, idx)=>{
                                            const { criteria_name , content  } = criteria;
                                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                item: true,
                                                lg: 3,
                                                sm: 6,
                                                xs: 12,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                                    container: true,
                                                    direction: "column",
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()((_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().groupInfo), {
                                                        [(_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().noneLine)]: idx === 0,
                                                        [(_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().oddLine)]: !isOdd(idx)
                                                    }),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                            variant: "body1",
                                                            className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                                                            children: criteria_name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(interweave__WEBPACK_IMPORTED_MODULE_4__.Markup, {
                                                            content: content
                                                        })
                                                    ]
                                                })
                                            }, idx));
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }, idx1));
            })
        }));
    };
    const renderBadge = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().badgeWrap),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().relative),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        //className={Style.badgeIcon}
                        className: clsx__WEBPACK_IMPORTED_MODULE_6___default()((_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().badgeIcon), {
                            [(_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().blackColor)]: !isLength
                        }),
                        onClick: handleChangePage,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                            badgeContent: `${lstCompare.length}/3`,
                            color: "primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "",
                                src: isLength ? CompareIcon : CompareIconBlack
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().listCardWrap),
                        children: lstCompare.map((card, idx)=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                className: clsx__WEBPACK_IMPORTED_MODULE_6___default()((_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardItem), {
                                    [(_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shadow)]: !isLength
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().flex),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                alt: "",
                                                src: card.img || Card2,
                                                className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardImg)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cardName),
                                                children: card.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        className: (_styles_product_ListProductPage_module_scss__WEBPACK_IMPORTED_MODULE_13___default().closeIcon),
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            renderListProduct(),
            lstCompare.length > 0 && renderBadge()
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);


/***/ })

};
;