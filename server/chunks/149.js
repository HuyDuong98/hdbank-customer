exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 8118:
/***/ ((module) => {

// Exports
module.exports = {
	"dialogWrapper": "CustomDialogMessage_dialogWrapper__v5vMy",
	"bodyDialog": "CustomDialogMessage_bodyDialog__lbazv",
	"closeIcon": "CustomDialogMessage_closeIcon__r5fqv",
	"success": "CustomDialogMessage_success__o7cXt",
	"error": "CustomDialogMessage_error__Ezr81",
	"warning": "CustomDialogMessage_warning__BuHL3",
	"message": "CustomDialogMessage_message__4Uf6e",
	"action": "CustomDialogMessage_action__Npqyb"
};


/***/ }),

/***/ 6149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8118);
/* harmony import */ var _styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7501);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);






const IconSuccess = "/assets/icons/message_success.svg";
const IconWarning = "/assets/icons/message_warning.svg";
const IconFaild = "/assets/icons/message_faild.svg";
const CustomDialogMessage = ({ isOpen , handleClose , title , message , isSuccess , handleAgain ,  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            onClose: handleClose,
            open: isOpen,
            maxWidth: "sm",
            scroll: "body",
            classes: {
                paper: (_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dialogWrapper)
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    className: (_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeIcon),
                    size: "small",
                    onClick: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default()), {
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: (_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bodyDialog),
                    children: [
                        isSuccess === "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: IconSuccess
                        }) : isSuccess === "failed" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: IconFaild
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: IconWarning
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().success), {
                                [(_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().error)]: isSuccess === "failed",
                                [(_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().warning)]: isSuccess === "warning"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "h2",
                                children: title
                            })
                        }),
                        message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            className: (_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().message),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                children: message
                            })
                        })
                    ]
                }),
                isSuccess === "warning" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            className: (_styles_components_shared_CustomDialogMessage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().action),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                color: "secondary",
                                variant: "contained",
                                onClick: handleAgain,
                                children: t("Thực hiện lại")
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDialogMessage);


/***/ })

};
;