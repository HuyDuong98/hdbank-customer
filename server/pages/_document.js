"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/styles"
const styles_namespaceObject = require("@material-ui/styles");
;// CONCATENATED MODULE: ./src/pages/_document.tsx





class MyDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new styles_namespaceObject.ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = ()=>originalRenderPage({
                enhanceApp: (App)=>(props)=>sheets.collect(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                            ...props
                        }))
            })
        ;
        const initialProps = await next_document["default"].getInitialProps(ctx);
        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...external_react_default().Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        };
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            dangerouslySetInnerHTML: {
                                __html: `
                            var chatbox = document.getElementById('fb-customer-chat');
                            chatbox.setAttribute("page_id", "267351840830499");
                            chatbox.setAttribute("attribution", "biz_inbox");
                            `
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            dangerouslySetInnerHTML: {
                                __html: `
                            window.fbAsyncInit = function () {
                                FB.init({
                                    xfbml: true,
                                    version: 'v12.0'
                                });
                            };
    
                            (function (d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s); js.id = id;
                                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                                fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));
                            `
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("noscript", {
                            children: "You need to enable JavaScript to run this app lala."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "zaloChat",
                            style: {
                                display: 'none'
                            },
                            className: "zalo-chat-widget",
                            "data-oaid": "1148028551726591727",
                            "data-welcome-message": "Rất vui khi được hỗ trợ bạn!",
                            "data-autopopup": "0",
                            "data-width": "",
                            "data-height": "",
                            "data-bottom": "300"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "fb-root",
                            style: {
                                display: 'none'
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "fb-customer-chat",
                            className: "fb-customerchat"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                            src: "https://sp.zalo.me/plugins/sdk.js"
                        })
                    ]
                })
            ]
        }));
    }
}



/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,859], () => (__webpack_exec__(7873)));
module.exports = __webpack_exports__;

})();