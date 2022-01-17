exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 642:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__4XBek",
	"headerMobile": "Header_headerMobile__PpWES",
	"menuWrapper": "Header_menuWrapper__U9u2J",
	"logo": "Header_logo__ZQrjN",
	"profileWrapper": "Header_profileWrapper__PcciG",
	"groButton": "Header_groButton__w9S_7",
	"login": "Header_login__ro90E",
	"searchIcon": "Header_searchIcon__fcXEq",
	"borderRound": "Header_borderRound__786Ax",
	"rightItem": "Header_rightItem__B_43_",
	"avatar": "Header_avatar__pSasx",
	"boxSuggest": "Header_boxSuggest__sU_66",
	"suggetItem": "Header_suggetItem__HxnMj",
	"overlay": "Header_overlay__yUm61",
	"wrapper": "Header_wrapper__G_F6Q",
	"searchBox": "Header_searchBox___luMG",
	"popperMenu": "Header_popperMenu__eZPLX",
	"selected": "Header_selected__7V54Y",
	"listMenu": "Header_listMenu__E9D21",
	"listItem": "Header_listItem__zjMx7"
};


/***/ }),

/***/ 5590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tn": () => (/* binding */ getHomePage),
/* harmony export */   "Xe": () => (/* binding */ getAdvertise),
/* harmony export */   "b8": () => (/* binding */ sendContact),
/* harmony export */   "BB": () => (/* binding */ getTopics)
/* harmony export */ });
/* unused harmony export sendOTP */
/* harmony import */ var _utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9653);
/* harmony import */ var _config_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7128);


const getHomePage = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-home?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const sendOTP = async (phone)=>{
    const apiUrl = `${DOMAIN.hdbankBetaV1}/LandingPage/sendOtp?phonenumber=${phone}`;
    return getAsync(apiUrl);
};
const getAdvertise = async (langCode)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/banner-home?langcode=${langCode}`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};
const sendContact = async (data)=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/landingpage-contact`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .postAsync */ .Am)(apiUrl, data);
};
const getTopics = async ()=>{
    const apiUrl = `${_config_domain__WEBPACK_IMPORTED_MODULE_0__/* .DOMAIN.hdbankBetaV1 */ .y.hdbankBetaV1}/LandingPage/gettopics?langcode=vi`;
    return (0,_utils_helpers_transportRequestor__WEBPACK_IMPORTED_MODULE_1__/* .getAsync */ .CH)(apiUrl);
};


/***/ }),

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shared_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/components/Shared/Header.module.scss
var Header_module = __webpack_require__(642);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: ./src/utils/constants/pagePath.ts
var pagePath = __webpack_require__(7338);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/hooks/useOnClickOutSide.ts
var useOnClickOutSide = __webpack_require__(866);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/apis/landing-page/search.ts
var search = __webpack_require__(9640);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/shared/CustomTextField.tsx
var CustomTextField = __webpack_require__(4237);
// EXTERNAL MODULE: ./src/styles/faq/ListFAQ.module.scss
var ListFAQ_module = __webpack_require__(9418);
var ListFAQ_module_default = /*#__PURE__*/__webpack_require__.n(ListFAQ_module);
// EXTERNAL MODULE: ./src/apis/landing-page/home.ts
var home = __webpack_require__(5590);
// EXTERNAL MODULE: ./src/components/shared/CustomSelect.tsx
var CustomSelect = __webpack_require__(2008);
// EXTERNAL MODULE: external "@material-ui/icons/Cached"
var Cached_ = __webpack_require__(1774);
var Cached_default = /*#__PURE__*/__webpack_require__.n(Cached_);
// EXTERNAL MODULE: ./src/components/shared/CustomDialog.tsx
var CustomDialog = __webpack_require__(1629);
// EXTERNAL MODULE: external "joi"
var external_joi_ = __webpack_require__(8506);
var external_joi_default = /*#__PURE__*/__webpack_require__.n(external_joi_);
// EXTERNAL MODULE: ./src/hooks/useValidateForm.ts
var useValidateForm = __webpack_require__(2741);
// EXTERNAL MODULE: ./src/apis/faq.ts
var faq = __webpack_require__(6666);
// EXTERNAL MODULE: ./src/components/shared/CustomDialogMessage.tsx
var CustomDialogMessage = __webpack_require__(6149);
;// CONCATENATED MODULE: ./src/components/Header/DialogContact.tsx









//icons






const schema = external_joi_default().object({
    name: external_joi_default().string().empty(null).required().pattern(new RegExp(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$/)).max(50).messages({
        "any.required": "nameNotBlank",
        "string.max": "limitName",
        "string.pattern.base": "nameNotValid"
    }),
    phone: external_joi_default().string().empty(null).required().length(10).pattern(new RegExp(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/)).messages({
        "any.required": "phoneNotBlank",
        "string.pattern.base": "phoneNotValid",
        "string.length": "phoneNotValid"
    }),
    email: external_joi_default().string().empty(null).email({
        tlds: {
            allow: false
        }
    }).messages({
        "string.email": "emailNotValid"
    }),
    topic: external_joi_default().string().empty(null).required().messages({
        "any.required": "topicNotBlank"
    }),
    content: external_joi_default().string().empty(null).required().pattern(new RegExp(/^[^#@,.?/{}!^*()$]+$/)).messages({
        "any.required": "contentNotBlank",
        "string.pattern.base": "contentNotValid"
    }),
    capcha: external_joi_default().string().empty(null).required().messages({
        "any.required": "captchaNotBlank"
    })
});
const simpleSchema = external_joi_default().object({
    topic: external_joi_default().string().empty(null).required().messages({
        "any.required": "topicNotBlank"
    }),
    content: external_joi_default().string().empty(null).pattern(new RegExp(/^[^#@,.?/{}!^*()$]+$/)).required().messages({
        "any.required": "contentNotBlank",
        "string.pattern.base": "contentNotValid"
    }),
    capcha: external_joi_default().string().empty(null).required().messages({
        "any.required": "captchaNotBlank"
    })
});
const DialogContact = (props)=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { isOpen , handleClose  } = props;
    const { 0: validatedKey , 1: setValidatedKey  } = (0,external_react_.useState)();
    const { 0: isLogin  } = (0,external_react_.useState)(false);
    const { 0: disabledSubmit , 1: setDisabledSubmit  } = (0,external_react_.useState)(true);
    const { 0: listTopic , 1: setListTopic  } = (0,external_react_.useState)([]);
    const { 0: hiddenDialog , 1: setHiddenDialog  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)({
        isOpen: false,
        message: null,
        title: null,
        isSuccess: false
    });
    const { 0: form , 1: setForm  } = (0,external_react_.useState)({
        name: null,
        phone: null,
        email: null,
        topic: null,
        content: null,
        capcha: null
    });
    const { 0: capchaMessage , 1: setCapchaMessage  } = (0,external_react_.useState)(null);
    const { data: topicData , isFetching: topicFetching  } = (0,external_react_query_.useQuery)("topicQuery", home/* getTopics */.BB, {
    });
    const { data: capchaData , refetch  } = (0,external_react_query_.useQuery)("capchaQuery", faq/* getCapchaImage */.hv);
    const refetchCapcha = ()=>{
        refetch();
    };
    (0,external_react_.useEffect)(()=>{
        if (!topicData) return;
        const temp = topicData.map((topic)=>{
            return {
                name: topic.item,
                value: topic.value,
                renderItem: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: topic.item
                })
            };
        });
        setListTopic(temp);
    }, [
        topicData
    ]);
    const { errors , validateAll , eraseErrors  } = (0,useValidateForm/* useValidateForm */.D)(form, isLogin ? simpleSchema : schema, validatedKey);
    const handleForm = (value, key)=>{
        setValidatedKey(key);
        setForm({
            ...form,
            [key]: value
        });
    };
    const getErrorMessage = (field)=>{
        const error = errors === null || errors === void 0 ? void 0 : errors.find((f)=>f.field === field
        );
        return error ? t(error.message) : "";
    };
    const hasErrors = (field)=>{
        const error = getErrorMessage(field);
        return !!error;
    };
    const { mutateAsync  } = (0,external_react_query_.useMutation)(home/* sendContact */.b8);
    const handleSendRequest = async ()=>{
        if (validateAll()) {
            const response = await mutateAsync({
                customerName: form.name,
                phoneNumber: form.phone,
                email: form.email,
                topicId: form.topic,
                question: form.content,
                captcha: form.capcha,
                captchaId: capchaData.capchaId,
                islogin: isLogin ? "1" : "0"
            });
            if (response.isSuccessful) {
                setHiddenDialog(true);
                setMessage({
                    ...message,
                    isOpen: true,
                    message: response.successData.message,
                    title: t("Gửi th\xe0nh c\xf4ng"),
                    isSuccess: "success"
                });
            } else if (response.responseCode === -1) {
                setCapchaMessage(`Capcha ${t("MESS04")}`);
            } else {
                setHiddenDialog(true);
                setMessage({
                    ...message,
                    isOpen: true,
                    message: t("MESS28"),
                    title: t("Gửi th\xe2́t bại"),
                    isSuccess: "warning"
                });
            }
        }
    };
    const onCloseDialog = ()=>{
        setForm({
            name: null,
            phone: null,
            email: null,
            topic: null,
            content: null,
            captcha: null
        });
        setCapchaMessage(null);
        setHiddenDialog(false);
        setDisabledSubmit(true);
        eraseErrors();
        handleClose();
    };
    const onCloseDialogMessage = ()=>{
        setMessage({
            ...message,
            isOpen: false
        });
        onCloseDialog();
    };
    const checkSubmitEnable = ()=>{
        if (form.name && form.phone && form.capcha && form.content && form.topic && validateAll()) {
            setDisabledSubmit(false);
        } else {
            setDisabledSubmit(true);
        }
    };
    const renderForm = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                isLogin ? renderLogin() : renderNoneLogin(),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    fullWidth: true,
                    onClick: handleSendRequest,
                    disabled: disabledSubmit,
                    children: t("submit")
                })
            ]
        }));
    };
    const renderNoneLogin = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                        placeholder: `${t("firstAndLastName")} *`,
                        value: form.name,
                        error: hasErrors("name"),
                        helperText: getErrorMessage("name"),
                        onChange: (value)=>{
                            handleForm(value || null, "name");
                        },
                        onKeyUp: checkSubmitEnable
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                        placeholder: `${t("phoneNumber")} *`,
                        value: form.phone,
                        error: hasErrors("phone"),
                        helperText: getErrorMessage("phone"),
                        onChange: (value)=>{
                            handleForm(value || null, "phone");
                        },
                        onKeyUp: checkSubmitEnable
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                        placeholder: t("email"),
                        value: form.email,
                        error: hasErrors("email"),
                        helperText: getErrorMessage("email"),
                        onChange: (value)=>{
                            handleForm(value || null, "email");
                        },
                        onKeyUp: checkSubmitEnable
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
                        placeholder: t("selectAnOption"),
                        isCustomDisplayValue: true,
                        value: form.topic,
                        options: listTopic,
                        onChange: (value)=>{
                            handleForm(value || null, "topic");
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                        placeholder: `${t("content")} *`,
                        value: form.content,
                        error: hasErrors("content"),
                        helperText: getErrorMessage("content"),
                        onChange: (value)=>{
                            handleForm(value || null, "content");
                        },
                        outlined: true,
                        rows: 4,
                        onKeyUp: checkSubmitEnable
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                        container: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                item: true,
                                xs: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                                        placeholder: `${t("captchaCode")} *`,
                                        value: form.capcha,
                                        error: hasErrors("capcha"),
                                        helperText: getErrorMessage("capcha"),
                                        onChange: (value)=>{
                                            handleForm(value || null, "capcha");
                                        },
                                        onFocus: ()=>setCapchaMessage(null)
                                        ,
                                        onKeyUp: checkSubmitEnable
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.FormHelperText, {
                                        error: true,
                                        children: capchaMessage
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                    container: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                            item: true,
                                            xs: 10,
                                            className: (ListFAQ_module_default()).imgCapcha,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: capchaData === null || capchaData === void 0 ? void 0 : capchaData.captchBase64Data,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                            item: true,
                                            xs: 2,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                onClick: refetchCapcha,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Cached_default()), {
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        }));
    };
    const renderLogin = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ListFAQ_module_default()).avatarWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                            alt: "Remy Sharp",
                            src: "https://mui.com/static/images/avatar/1.jpg",
                            className: (ListFAQ_module_default()).avatarImg
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Nguyễn Phạm Thuỳ Anh"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
                        placeholder: t("selectAnOption"),
                        value: form.topic,
                        options: listTopic,
                        isCustomDisplayValue: true,
                        onChange: (value)=>{
                            handleForm(value || null, "topic");
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                        placeholder: `${t("content")} *`,
                        value: form.content,
                        error: hasErrors("content"),
                        helperText: getErrorMessage("content"),
                        onChange: (value)=>{
                            handleForm(value || null, "content");
                        },
                        outlined: true,
                        rows: 4,
                        onKeyUp: checkSubmitEnable
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListFAQ_module_default()).textFieldWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        container: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            lg: 6,
                            md: 12,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                container: true,
                                className: (ListFAQ_module_default()).captcha,
                                justifyContent: "space-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                                                    placeholder: `${t("captchaCode")} *`,
                                                    value: form.capcha,
                                                    error: hasErrors("capcha"),
                                                    helperText: getErrorMessage("capcha"),
                                                    onChange: (value)=>{
                                                        handleForm(value || null, "capcha");
                                                    },
                                                    onFocus: ()=>setCapchaMessage(null)
                                                    ,
                                                    onKeyUp: checkSubmitEnable
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.FormHelperText, {
                                                    error: true,
                                                    children: capchaMessage
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                        item: true,
                                        xs: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                            container: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    item: true,
                                                    xs: 10,
                                                    className: (ListFAQ_module_default()).imgCapcha,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: capchaData === null || capchaData === void 0 ? void 0 : capchaData.captchBase64Data,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                                    item: true,
                                                    xs: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                                        onClick: refetchCapcha,
                                                        className: (ListFAQ_module_default()).btnCapcha,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Cached_default()), {
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        }));
    };
    if (topicFetching) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            !hiddenDialog && /*#__PURE__*/ jsx_runtime_.jsx(CustomDialog/* default */.Z, {
                isOpen: isOpen,
                handleClose: onCloseDialog,
                title: t("submitAQuestion"),
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                    className: (ListFAQ_module_default()).dialogWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        className: (ListFAQ_module_default()).dialogBody,
                        children: renderForm()
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CustomDialogMessage/* default */.Z, {
                isSuccess: message.isSuccess,
                isOpen: message.isOpen,
                handleClose: onCloseDialogMessage,
                title: message.title,
                message: message.message
            })
        ]
    }));
};
/* harmony default export */ const Header_DialogContact = (DialogContact);

// EXTERNAL MODULE: ./src/stores/sharedStores.ts
var sharedStores = __webpack_require__(7839);
// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(4202);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__(9615);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(9556);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: ./src/utils/helpers/cookieHelpers.ts
var cookieHelpers = __webpack_require__(81);
;// CONCATENATED MODULE: ./src/components/shared/Header.tsx













//component



//icons






const MenuIcon = "/assets/icons/menu.svg";
const FaqIcon = "/assets/icons/faq-outline.svg";
const SearchMenuIcon = "/assets/icons/search.svg";
const HomeIcon = "/assets/icons/home_outline.svg";
const CardIcon = "/assets/icons/card-outline.svg";
const GiftIcon = "/assets/icons/gift-outline.svg";
const NewsIcon = "/assets/icons/news-outline.svg";
const CardForYouIcon = "/assets/icons/card-for-you.svg";
const ContactIcon = "/assets/icons/email-outline.svg";
//img
const LogoMobile = "/assets/Logo-2.png";
const Logo = "/assets/Logo.png";
const menus = [
    {
        label: "home",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: HomeIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.landingPage */.d.landingPage
    },
    {
        label: "product",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: CardIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.productPage */.d.productPage
    },
    {
        label: "promotion",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: GiftIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.promotion */.d.promotion
    },
    {
        label: "news",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: NewsIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.news */.d.news
    },
    {
        label: "cardForYou",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: CardForYouIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.customerJourney */.d.customerJourney
    },
    {
        label: "contact",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: ContactIcon,
            alt: ""
        }),
        path: "contact",
        isContact: true
    },
    {
        label: "FAQ",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: FaqIcon,
            alt: ""
        }),
        path: pagePath/* pagePath.faq */.d.faq
    }, 
];
const Header = ()=>{
    const cookieName = "searchValue";
    const offsetTop = (0,external_recoil_.useRecoilValue)(sharedStores/* homeContactRef */.oT);
    const inputSearchRef = (0,external_react_.useRef)(null);
    const { 0: isLogin  } = (0,external_react_.useState)(false);
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)();
    const { 0: valueSearch , 1: setValueSearch  } = (0,external_react_.useState)(null);
    const { 0: isOpenSuggest , 1: setIsOpenSuggest  } = (0,external_react_.useState)(false);
    const { 0: anchorElMenu , 1: setAnchorElMenu  } = (0,external_react_.useState)(null);
    const { 0: searchBox , 1: setSearchBox  } = (0,external_react_.useState)(false);
    const { 0: searchHistory , 1: setSearchHistory  } = (0,external_react_.useState)([]);
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: isDialogRegister , 1: setIsDialogRegister  } = (0,external_react_.useState)(false);
    const { data , isFetching  } = (0,external_react_query_.useQuery)("suggestionQuery", search/* getSuggestion */.yu);
    const getNumb = (str)=>{
        const newString = str.slice(0, 15);
        const numbStr = newString.split(cookieName).join("").split("=").join("").split("{").join("");
        const parseNumb = parseInt(numbStr);
        const numb = parseNumb > 9 ? 3 : parseNumb > 99 ? 4 : 2;
        return numb;
    };
    const router = (0,router_.useRouter)();
    const handleGetValue = (d)=>{
        setIsOpenSuggest(false);
        setValueSearch(d);
        router.push(pagePath/* pagePath.search */.d.search + "?keyword=" + d);
    };
    (0,external_react_.useEffect)(()=>{
        const activePage = menus.find((f)=>f.path === router.pathname
        );
        if (activePage) setActiveMenu(activePage.path);
    }, [
        router.pathname
    ]);
    const handleDialog = ()=>setIsOpen(!isOpen)
    ;
    const handleDialogRegister = ()=>setIsDialogRegister(!isDialogRegister)
    ;
    const openMenu = Boolean(anchorElMenu);
    const id = openMenu ? "simple-popper" : undefined;
    (0,useOnClickOutSide/* default */.Z)(inputSearchRef, ()=>setIsOpenSuggest(false)
    );
    const { t , i18n  } = (0,external_react_i18next_.useTranslation)();
    const isMobile = (0,external_recoil_.useRecoilValue)(sharedStores/* isMobileState */.lo);
    const changeLanguage = ()=>{
        i18n.changeLanguage(i18n.language === "vn" ? "en" : "vn");
        (0,cookieHelpers/* setCookie */.d8)("UserLanguage", i18n.language === "vn" ? "vi" : "en", 330);
    };
    const handleShowMenu = (event)=>{
        var ref;
        const anchorEl = event === null || event === void 0 ? void 0 : (ref = event.currentTarget) === null || ref === void 0 ? void 0 : ref.closest("#headerMobile");
        setAnchorElMenu(anchorElMenu ? null : anchorEl);
    };
    const hadleSearchBox = (event)=>{
        setSearchBox(!searchBox);
        if (isMobile) handleShowMenu(event);
    };
    const handleSubmitSearch = ()=>{
        if (valueSearch && valueSearch.trim() !== "") {
            setIsOpenSuggest(false);
            router.push(pagePath/* pagePath.search */.d.search + "?keyword=" + (valueSearch === null || valueSearch === void 0 ? void 0 : valueSearch.trim().normalize("NFC")));
            if (isMobile) {
                setAnchorElMenu(null);
                setSearchBox(!searchBox);
            }
        }
    };
    const handleSubmitSearchEnter = (event)=>{
        if (event.key === "Enter") {
            handleSubmitSearch();
        }
    };
    const onContactClick = ()=>{
        if (router.pathname === "/home") {
            offsetTop === null || offsetTop === void 0 ? void 0 : offsetTop.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            offsetTop === null || offsetTop === void 0 ? void 0 : offsetTop.current.scrollIntoView(true);
            window.scrollBy({
                top: -90,
                behavior: "smooth"
            });
        } else {
            handleDialog();
        }
    };
    const mobileMenuClick = (item)=>{
        if (item.isContact) {
            onContactClick();
        } else {
            router.push(item.path);
        }
        handleShowMenu({
        });
    };
    const handleOpenSuggest = ()=>{
        const temp = [];
        for(let i = 0; i < 5; i++){
            const cookieData = (0,cookieHelpers/* getCookie */.ej)(`${cookieName}${i}`);
            if (cookieData) {
                temp.push(JSON.parse(cookieData));
            }
        }
        setSearchHistory(temp.sort((a, b)=>{
            const timeA = new Date(a.time).getTime();
            const timeB = new Date(b.time).getTime();
            return timeB > timeA ? 1 : -1;
        }));
        setIsOpenSuggest(true);
    };
    const renderMobileHeader = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                className: (Header_module_default()).headerMobile,
                id: "headerMobile",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        container: true,
                        className: (Header_module_default()).wrapper,
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: !searchBox ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                    onClick: handleShowMenu,
                                    "aria-describedby": "simple-popper",
                                    children: openMenu ? /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                        color: "primary"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "",
                                        src: MenuIcon
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: LogoMobile,
                                    alt: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                    onClick: hadleSearchBox,
                                    children: !openMenu && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: SearchMenuIcon,
                                        alt: ""
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                        onClick: hadleSearchBox,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                            color: "primary"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    xs: 11,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                                        placeholder: t("search"),
                                        value: valueSearch,
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                        }),
                                        onChange: (v)=>setValueSearch(v)
                                        ,
                                        onFocus: handleOpenSuggest,
                                        styleName: (Header_module_default()).searchBox,
                                        isIconClick: true,
                                        onIconClick: ()=>handleSubmitSearch()
                                        ,
                                        onKeyPress: (event)=>handleSubmitSearchEnter(event)
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Popper, {
                        id: id,
                        open: openMenu,
                        anchorEl: anchorElMenu,
                        transition: true,
                        className: (Header_module_default()).popperMenu,
                        popperOptions: {
                            modifiers: {
                                preventOverflow: {
                                    padding: 0,
                                    enabled: icons_.TrendingUpOutlined,
                                    boundariesElement: "scrollParent"
                                },
                                flip: {
                                    enabled: false
                                },
                                arrow: {
                                    enabled: true
                                }
                            }
                        },
                        children: !searchBox ? renderMenu() : renderSuggestSearch()
                    })
                ]
            })
        }));
    };
    if (isFetching) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
    const renderDialog = ()=>{
        const dProps = {
            isOpen,
            handleClose: ()=>handleDialog()
        };
        return(/*#__PURE__*/ jsx_runtime_.jsx(Header_DialogContact, {
            ...dProps
        }));
    };
    const renderMenu = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
            className: (Header_module_default()).menuWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                    container: true,
                    className: (Header_module_default()).login,
                    justifyContent: "center",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                variant: "contained",
                                color: "primary",
                                disableElevation: true,
                                onClick: ()=>router.push(pagePath/* pagePath.login */.d.login)
                                ,
                                children: t("loginNow")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                variant: "outlined",
                                color: "primary",
                                className: (Header_module_default()).rightItem,
                                onClick: ()=>router.push(pagePath/* pagePath.register */.d.register)
                                ,
                                children: t("register")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.List, {
                        component: "nav",
                        className: (Header_module_default()).listMenu,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                button: true,
                                divider: true,
                                className: (Header_module_default()).listItem,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                    container: true,
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            children: t("language")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                                            display: "flex",
                                            alignItems: "center",
                                            onClick: changeLanguage,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                                    children: t("curentLanguage")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            menus.map((menu, idx)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ListItem, {
                                    button: true,
                                    divider: true,
                                    className: external_clsx_default()((Header_module_default()).listItem, {
                                        [(Header_module_default()).selected]: activeMenu === menu.path
                                    }),
                                    onClick: ()=>mobileMenuClick(menu)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemIcon, {
                                            children: menu.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItemText, {
                                            primary: t(menu.label)
                                        })
                                    ]
                                }, idx));
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ListItem, {
                                className: (Header_module_default()).listItem,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Typography, {
                                    variant: "body1",
                                    children: [
                                        "Hotline: ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                                            color: "primary",
                                            children: "1900 6060"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        }));
    };
    const renderSuggestSearch = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
            className: (Header_module_default()).menuWrapper,
            children: /*#__PURE__*/ jsx_runtime_.jsx(SuggestSearch, {
                onClick: handleGetValue,
                suggestionList: data.suggestions,
                historySearch: searchHistory
            })
        }));
    };
    const renderPcHeader = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
            container: true,
            className: (Header_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${isOpenSuggest && (Header_module_default()).overlay}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    item: true,
                    sm: 6,
                    md: 7,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                        container: true,
                        alignItems: "center",
                        className: (Header_module_default()).menuWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.landingPage */.d.landingPage,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: Logo,
                                    className: (Header_module_default()).logo,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.productPage */.d.productPage,
                                children: t("product")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.promotion */.d.promotion,
                                children: t("promotion")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.news */.d.news,
                                children: t("news")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.customerJourney */.d.customerJourney,
                                children: t("cardForYou")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: onContactClick,
                                    children: t("contact")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: pagePath/* pagePath.faq */.d.faq,
                                children: t("FAQ")
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    item: true,
                    md: 5,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                        container: true,
                        justifyContent: "flex-end",
                        alignItems: "center",
                        className: (Header_module_default()).profileWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                item: true,
                                md: 5,
                                children: searchBox ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    ref: inputSearchRef,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomTextField/* default */.Z, {
                                            placeholder: t("search"),
                                            value: valueSearch,
                                            icon: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                            }),
                                            onChange: (v)=>setValueSearch(v)
                                            ,
                                            onFocus: handleOpenSuggest,
                                            styleName: (Header_module_default()).searchBox,
                                            isIconClick: true,
                                            onIconClick: ()=>handleSubmitSearch()
                                            ,
                                            onKeyPress: (event)=>handleSubmitSearchEnter(event)
                                        }),
                                        isOpenSuggest && /*#__PURE__*/ jsx_runtime_.jsx(SuggestSearch, {
                                            onClick: handleGetValue,
                                            suggestionList: data.suggestions,
                                            historySearch: searchHistory
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    container: true,
                                    justifyContent: "flex-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                        onClick: hadleSearchBox,
                                        className: (Header_module_default()).borderRound,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                className: (Header_module_default()).groButton,
                                children: isLogin || /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: pagePath/* pagePath.login */.d.login,
                                    passHref: true,
                                    children: t("login")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                variant: "contained",
                                color: "primary",
                                className: (Header_module_default()).rightItem,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: pagePath/* pagePath.register */.d.register,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: t("register")
                                        })
                                    })
                                })
                            }),
                            isLogin && /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                                className: (Header_module_default()).avatar,
                                alt: "Remy Sharp",
                                src: "https://mui.com/static/imgs/avatar/1.jpg"
                            })
                        ]
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isMobile ? renderMobileHeader() : renderPcHeader(),
            renderDialog()
        ]
    }));
};
/* harmony default export */ const shared_Header = (Header);
const SuggestSearch = ({ onClick , suggestionList , historySearch  })=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        className: (Header_module_default()).boxSuggest,
        children: [
            historySearch && /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                mb: 2,
                children: historySearch.map((d, i)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                        variant: "text",
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((AccessTime_default()), {
                        }),
                        onClick: ()=>onClick(d.value)
                        ,
                        children: d.value
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                        component: "p",
                        color: "primary",
                        children: t("keywordSuggestions")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                        mt: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                            container: true,
                            spacing: 1,
                            children: suggestionList.map((d, i)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                        onClick: ()=>onClick(d)
                                        ,
                                        className: (Header_module_default()).suggetItem,
                                        children: d
                                    })
                                }, i)
                            )
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;