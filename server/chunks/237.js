exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 7795:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CustomTextField_container__GcJDk",
	"alert": "CustomTextField_alert__bgQ7h",
	"icon": "CustomTextField_icon__eVKew",
	"cursor": "CustomTextField_cursor__CIiuk",
	"success": "CustomTextField_success__Ufy5W",
	"error": "CustomTextField_error__QEr2_"
};


/***/ }),

/***/ 4237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7795);
/* harmony import */ var _styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);





const useFormTextHelperStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    error: {
        marginRight: 0,
        marginLeft: 0
    }
});
const CustomTextField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    const { value , label , placeholder , disabled , onChange , icon , rows , error , helperText , type , validation , isIconClick , onIconClick , isAlert , onFocus , onBlur , styleName , onKeyPress , outlined , onKeyUp ,  } = props;
    const handleOnChange = (e)=>{
        onChange(e.target.value);
    };
    const handleOnIconClick = ()=>{
        if (onIconClick) onIconClick();
    };
    const formHelperStyles = useFormTextHelperStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)} ${styleName}`,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                children: label
            }),
            isAlert && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                className: (_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().alert),
                children: "\xa0*"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                ref: ref,
                onFocus: onFocus,
                onBlur: onBlur,
                variant: outlined ? 'outlined' : 'standard',
                size: "small",
                fullWidth: true,
                placeholder: placeholder,
                value: value ?? '',
                disabled: disabled,
                onChange: handleOnChange,
                onKeyPress: onKeyPress,
                onKeyUp: onKeyUp,
                error: error,
                helperText: helperText,
                type: type ?? 'text',
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon), {
                            [(_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cursor)]: isIconClick
                        }),
                        onClick: ()=>isIconClick && handleOnIconClick()
                        ,
                        children: icon
                    })
                },
                multiline: rows ? true : false,
                rows: rows,
                FormHelperTextProps: {
                    classes: {
                        error: formHelperStyles.error
                    }
                },
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({
                    [(_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().success)]: !!validation && value && !error,
                    [(_styles_components_shared_CustomTextField_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error)]: !!validation && !!error
                })
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextField);


/***/ })

};
;