"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useValidateForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useValidateForm = (form, schema, validatedKey)=>{
    const { 0: formErrors , 1: setFormErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const getFieldError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((field, validatedData)=>{
        var ref, ref1;
        const { error  } = schema.validate(validatedData, {
            abortEarly: false
        });
        const errorDetail = error === null || error === void 0 ? void 0 : (ref = error.details) === null || ref === void 0 ? void 0 : ref.filter((e)=>{
            return e.path[0] === field && e.type !== 'object.unknown';
        });
        return errorDetail && errorDetail.length !== 0 ? (ref1 = errorDetail[0]) === null || ref1 === void 0 ? void 0 : ref1.message : null;
    }, [
        schema
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!validatedKey) return;
        const fieldError = getFieldError(validatedKey, form);
        setFormErrors((errors)=>{
            if (errors) {
                const currentErrorIndex = errors === null || errors === void 0 ? void 0 : errors.findIndex((f)=>f.field === validatedKey
                );
                if (currentErrorIndex >= 0) errors.splice(currentErrorIndex, 1);
                if (fieldError) errors.push({
                    field: validatedKey,
                    message: fieldError
                });
                return [
                    ...errors
                ];
            }
            if (fieldError) return [
                {
                    field: validatedKey,
                    message: fieldError
                }
            ];
            return errors;
        });
    }, [
        form,
        getFieldError,
        schema,
        validatedKey
    ]);
    const validateAll = ()=>{
        const { error  } = schema.validate(form, {
            abortEarly: false
        });
        setFormErrors(error === null || error === void 0 ? void 0 : error.details.map((m)=>{
            return {
                field: m.path[0].toString(),
                message: m.message
            };
        }));
        if (!(error === null || error === void 0 ? void 0 : error.details.length)) return true;
        return false;
    };
    const eraseErrors = ()=>{
        setFormErrors(undefined);
    };
    return {
        errors: formErrors ?? null,
        validateAll,
        eraseErrors
    };
};


/***/ })

};
;