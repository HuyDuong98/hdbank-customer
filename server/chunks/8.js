exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 1741:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CustomSelect_container___KL9X",
	"title": "CustomSelect_title__Vrl4n",
	"optionItem": "CustomSelect_optionItem__Wdjde",
	"shorthand": "CustomSelect_shorthand__heUlT",
	"searchOption": "CustomSelect_searchOption__bLNfu",
	"icon": "CustomSelect_icon__C67nS",
	"selectError": "CustomSelect_selectError__Y8Bcr",
	"placeholder": "CustomSelect_placeholder__jbb67"
};


/***/ }),

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1741);
/* harmony import */ var _styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4202);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);







const CustomSelect = (props)=>{
    var ref1;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { label , options , onChange , value , placeholder , isCustomDisplayValue , error , helperText , isSearch , outlined , onKeyUp ,  } = props;
    const { 0: display , 1: setDiplay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ref1 = options === null || options === void 0 ? void 0 : options.filter((e)=>e.value === value
    ).shift()) === null || ref1 === void 0 ? void 0 : ref1.renderItem);
    const handleOnChange = (event)=>{
        onChange(event.target.value);
        if (isCustomDisplayValue) {
            var ref;
            setDiplay((ref = options === null || options === void 0 ? void 0 : options.filter((e)=>e.value === event.target.value
            ).shift()) === null || ref === void 0 ? void 0 : ref.renderItem);
        }
    };
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const renderSearchBox = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClickCapture: (e)=>{
                e.stopPropagation();
                e.preventDefault();
            },
            onKeyDown: (e)=>e.stopPropagation()
            ,
            className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchOption),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                variant: "outlined",
                size: "small",
                fullWidth: true,
                placeholder: t('t\xecm kiếm'),
                value: search,
                onChange: (e)=>setSearch(e.target.value)
                ,
                InputProps: {
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon)
                    })
                }
            })
        }));
    };
    const renderSelectItem = ()=>{
        return options === null || options === void 0 ? void 0 : options.map((option)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                value: option.value,
                onMouseUp: onKeyUp,
                className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().optionItem),
                children: option.renderItem ? option.renderItem : !option.shorthand ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: option.name || option.item
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shorthand),
                            children: option.shorthand
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: option.name || option.item
                        })
                    ]
                })
            }, option.value));
        });
    };
    const renderPlaceholder = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().placeholder),
            children: placeholder || t('--chọn--')
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "body1",
                className: (_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                variant: outlined ? 'outlined' : 'standard',
                size: "small",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_5___default()('', {
                            [(_styles_components_shared_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().selectError)]: error
                        }),
                        color: "primary",
                        value: value || '',
                        onChange: handleOnChange,
                        MenuProps: {
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left'
                            },
                            getContentAnchorEl: null
                        },
                        displayEmpty: true,
                        renderValue: display ? ()=>display
                         : value ? ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: value
                            })
                         : ()=>renderPlaceholder()
                        ,
                        children: [
                            isSearch && renderSearchBox(),
                            options && renderSelectItem()
                        ]
                    }),
                    error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormHelperText, {
                        error: true,
                        children: [
                            " ",
                            helperText
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSelect);


/***/ })

};
;