(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{5593:function(e,t,n){"use strict";n.d(t,{xH:function(){return u},BF:function(){return l},Uu:function(){return d},jn:function(){return g},fL:function(){return p},OH:function(){return _},HI:function(){return m},Zr:function(){return f}});var a=n(8520),r=n.n(a),c=n(9653),o=n(7128);function i(e,t,n,a,r,c,o){try{var i=e[c](o),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){i(c,a,r,o,s,"next",e)}function s(e){i(c,a,r,o,s,"throw",e)}o(void 0)}))}}var u=s(r().mark((function e(t,n,a){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(o.y.hdbankBetaV1,"/LandingPage/product-list?langcode=").concat(t,"&page=").concat(n,"&pagesize=").concat(a),e.abrupt("return",(0,c.CH)(i));case 2:case"end":return e.stop()}}),e)}))),l=s(r().mark((function e(t,n,a,i){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(o.y.hdbankBetaV1,"/LandingPage/products-by-filter?langcode=").concat(t,"&listFilterId=").concat(i,"&page=").concat(n,"&pagesize=").concat(a),e.abrupt("return",(0,c.CH)(s));case 2:case"end":return e.stop()}}),e)}))),d=s(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o.y.hdbankBetaV1,"/LandingPage/products-get-filter?langcode=").concat(t),e.abrupt("return",(0,c.CH)(n));case 2:case"end":return e.stop()}}),e)}))),g=s(r().mark((function e(t,n){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(o.y.hdbankBetaV1,"/LandingPage/landingpage-product-detail?productId=").concat(n,"&langCode=").concat(t||"vi"),e.abrupt("return",(0,c.CH)(a));case 2:case"end":return e.stop()}}),e)}))),p=s(r().mark((function e(t,n){var a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=2===n.length?"Product1=".concat(n[0],"&Product2=").concat(n[1]):"Product1=".concat(n[0],"&Product2=").concat(n[1],"&Product3=").concat(n[2]),i="".concat(o.y.hdbankBetaV1,"/LandingPage/compare-products?Langcode=").concat(t,"&").concat(a),e.abrupt("return",(0,c.CH)(i));case 3:case"end":return e.stop()}}),e)}))),_=s(r().mark((function e(t,n){var a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=2===n.length?"Product1=".concat(n[0],"&Product2=").concat(n[1]):"Product1=".concat(n[0],"&Product2=").concat(n[1],"&Product3=").concat(n[2]),i="".concat(o.y.hdbankBetaV1,"/LandingPage/other-products-compare?Langcode=").concat(t,"&").concat(a),e.abrupt("return",(0,c.CH)(i));case 3:case"end":return e.stop()}}),e)}))),m=s(r().mark((function e(t,n,a,i,s,u){var l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="".concat(o.y.hdbankBetaV1,"/LandingPage/customer-journey?langcode=").concat(t,"&monthlyincome=").concat(n,"&monthlyspent=").concat(a,"&demand=").concat(i,"&page=").concat(s,"&pageSize=").concat(u),e.abrupt("return",(0,c.CH)(l));case 2:case"end":return e.stop()}}),e)}))),f=s(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o.y.hdbankBetaV1,"/LandingPage/customer-journey/get-selected-item?langcode=").concat(t),e.abrupt("return",(0,c.CH)(n));case 2:case"end":return e.stop()}}),e)})))},5551:function(e,t,n){"use strict";var a=n(5893),r=n(1749),c=n(2318),o=n(282),i=n(553),s=n(1736),u=n(9009),l=n(7294),d=n(1567),g=n(5277),p=n.n(g),_=n(3108),m=n(7338),f=n(6010),P=n(1664),h=n(1163),b=n(5996),x=n(7839),v=n(2804),j=n(3805);function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){L(e,t,n[t])}))}return e}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Z,y="/assets/mobile/landing/card-2.png";t.Z=function(e){var t=(0,h.useRouter)(),n=e.lstProduct,g=(0,d.$)().t,I=(0,v.sJ)(x.lo),w=(0,l.useState)({}),N=w[0],H=w[1],W=(0,l.useState)([]),S=W[0],O=W[1],V=S.length>1;(0,l.useEffect)((function(){var e=sessionStorage.getItem("cardCompare"),t=e&&JSON.parse(e);t&&(O(t.list),H(t.checked))}),[]);var B=function(e){var t=S;t.map((function(n,a){if(n.id===e.id){t.splice(a,1);var r=C({},N,L({},e.id,!1));O(t),H(r);var c={checked:r,list:t};sessionStorage.setItem("cardCompare",JSON.stringify(c))}}))},F=function(){V&&t.push(m.d.compareProductsPage)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{className:p().listProductWrap,children:n.map((function(e,n){var u=e.id,l=e.title,d=e.pc_mode,h=e.mobile_mode,b=e.criterias,x=e.hyperlink,v=I?h:d;return(0,a.jsxs)(r.Z,{container:!0,className:p().itemWrap,children:[(0,a.jsx)(P.default,{href:"".concat(m.d.productPage,"/").concat((0,j.IM)(l),".").concat(u),passHref:!0,children:(0,a.jsx)(c.Z,{color:"textPrimary",variant:"h5",children:g(l)})}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsx)(r.Z,{item:!0,lg:2,sm:4,xs:12,children:(0,a.jsxs)(r.Z,{container:!0,direction:"column",children:[(0,a.jsx)(P.default,{href:"".concat(m.d.productPage,"/").concat((0,j.IM)(l),".").concat(u),passHref:!0,children:(0,a.jsx)("img",{src:v||y,alt:""})}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(o.Z,{variant:"contained",color:"primary",onClick:function(){x&&(window.location.href=x)},children:g("openCard")})}),(0,a.jsxs)(r.Z,{className:p().actionWrap,children:[(0,a.jsx)(r.Z,{children:(0,a.jsx)("span",{className:p().link,onClick:function(){return t.push("".concat(m.d.productPage,"/").concat((0,j.IM)(l),".").concat(u))},children:g("seeDetail")})}),(0,a.jsx)(i.Z,{className:p().checkBox,control:(0,a.jsx)(s.Z,{checked:N[u]||!1,onChange:function(n){return function(e,n){var a=e.target.checked,r=S;if(a){var c=C({},N,L({},n.id,a));O(k(S).concat([n])),r.push(n),H(c);var o={checked:c,list:r};sessionStorage.setItem("cardCompare",JSON.stringify(o))}else B(n);3===r.length&&t.push(m.d.compareProductsPage)}(n,e)},color:"primary",disabled:!N[u]&&S.length>=3}),label:g("compareCards")})]})]})}),(0,a.jsx)(r.Z,{item:!0,lg:10,sm:8,xs:12,className:p().textWrap,children:(0,a.jsx)(r.Z,{container:!0,spacing:2,children:b.map((function(e,t){var n,o=e.criteria_name,i=e.content;return(0,a.jsx)(r.Z,{item:!0,lg:3,sm:6,xs:12,children:(0,a.jsxs)(r.Z,{container:!0,direction:"column",className:(0,f.Z)(p().groupInfo,(Z={},L(Z,p().noneLine,0===t),L(Z,p().oddLine,(n=t,!(1==Math.abs(n%2)))),Z)),children:[(0,a.jsx)(c.Z,{variant:"body1",className:p().title,children:o}),(0,a.jsx)(_.Lu,{content:i})]})},t)}))})})]})]},n)}))}),S.length>0&&(0,a.jsx)(r.Z,{className:p().badgeWrap,children:(0,a.jsxs)(r.Z,{className:p().relative,children:[(0,a.jsx)(r.Z,{className:(0,f.Z)(p().badgeIcon,L({},p().blackColor,!V)),onClick:F,children:(0,a.jsx)(u.Z,{badgeContent:"".concat(S.length,"/3"),color:"primary",children:(0,a.jsx)("img",{alt:"",src:V?"/assets/mobile/landing/compare-icon.svg":"/assets/mobile/landing/compare-icon-black.svg"})})}),(0,a.jsx)(r.Z,{className:p().listCardWrap,children:S.map((function(e,t){return(0,a.jsxs)(r.Z,{className:(0,f.Z)(p().cardItem,L({},p().shadow,!V)),children:[(0,a.jsxs)(r.Z,{className:p().flex,children:[(0,a.jsx)("img",{alt:"",src:e.img||y,className:p().cardImg}),(0,a.jsx)("span",{className:p().cardName,children:e.title})]}),(0,a.jsx)(b.Z,{className:p().closeIcon,onClick:function(){return B(e)}})]},t)}))})]})})]})}},8938:function(e,t,n){"use strict";var a=n(5893),r=n(1749),c=n(253),o=n(2318),i=n(2221),s=n(1567),u=n(2008),l=n(523),d=n.n(l);t.Z=function(e){var t=e.totalRecord,n=e.countPage,l=e.page,g=e.hanleChangePage,p=e.hanleChangePageSize,_=e.options,m=(0,s.$)().t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{container:!0,alignItems:"center",children:[(0,a.jsx)(r.Z,{item:!0,md:7,xs:12,children:(0,a.jsx)(i.Z,{count:Math.ceil(t/n),className:d().pagination,page:l,onChange:g,itemType:"ellipsis"})}),(0,a.jsx)(r.Z,{item:!0,md:5,xs:12,children:(0,a.jsxs)(c.Z,{className:d().pageSize,children:[(0,a.jsx)(o.Z,{children:m("show")}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(u.Z,{outlined:!0,value:n,onChange:function(e){return p(e)},options:_})})]})})]})})}},6128:function(e,t,n){"use strict";var a,r=n(5893),c=n(7294),o=n(6219),i=n.n(o),s=n(1749),u=n(7885),l=n(2318),d=n(6010),g=n(8121),p=n(1567),_=n(9370),m=n.n(_),f=n(1163),P=n(7338);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.breadCrumbs,n=e.iconHome,o=void 0!==n&&n,_=(0,p.$)().t,b=(0,c.useState)(t[t.length-1])[0],x=(0,f.useRouter)();return(0,r.jsxs)(s.Z,{container:!0,className:i().container,alignItems:"center",children:[o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m(),{onClick:function(e){e.preventDefault(),x.push(P.d.landingPage)}}),(0,r.jsx)(g.Z,{fontSize:"small",className:i().breadcrumbIconInHome})]}):(0,r.jsx)("div",{className:i().headingBar}),(0,r.jsx)(u.Z,{separator:(0,r.jsx)(g.Z,{fontSize:"small",className:i().breadcrumbIcon}),"aria-label":"breadcrumb",classes:{separator:i().rootseparator},children:t.map((function(e,t){return(0,r.jsx)(l.Z,{className:(0,d.Z)((a={},h(a,i().active,b.label===e.label),h(a,i().cursor,e.path),a)),onClick:function(t){return e.path&&function(e,t){e.preventDefault(),x.push(t)}(t,e.path)},children:_(e.label)},t)}))})]})}},3805:function(e,t,n){"use strict";n.d(t,{IM:function(){return a},OE:function(){return r}});n(381);var a=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,"")},r=function(e){return null===e||void 0===e?void 0:e.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0110/g,"D")}},523:function(e){e.exports={pagination:"CustomPagination_pagination__sg2tX",pageSize:"CustomPagination_pageSize__YIrJu"}},6219:function(e){e.exports={container:"PageHeading_container__7jf8l",headingBar:"PageHeading_headingBar__GJpag",active:"PageHeading_active__ju3dI",cursor:"PageHeading_cursor__0x_Mk",breadcrumbIcon:"PageHeading_breadcrumbIcon__3FuGa",breadcrumbIconInHome:"PageHeading_breadcrumbIconInHome__gKYlJ",rootseparator:"PageHeading_rootseparator__Md0MV"}},5277:function(e){e.exports={pageWrap:"ListProductPage_pageWrap__5MLEq",mobileTitle:"ListProductPage_mobileTitle__zpQHF",filterWrap:"ListProductPage_filterWrap____azJ",filterHeading:"ListProductPage_filterHeading__VktLz",iconGroup:"ListProductPage_iconGroup__WkPLK",icon:"ListProductPage_icon__qmI_B",active:"ListProductPage_active__ydFcp",listWrap:"ListProductPage_listWrap__Dh9Da",group:"ListProductPage_group__Oo4KJ",tags:"ListProductPage_tags__GCu99",btnGroup:"ListProductPage_btnGroup__acmjS",listProductWrap:"ListProductPage_listProductWrap__kbA8t",itemWrap:"ListProductPage_itemWrap__kZioY",stand:"ListProductPage_stand__MIY_5",actionWrap:"ListProductPage_actionWrap__LgllH",checkBox:"ListProductPage_checkBox__ustcU",link:"ListProductPage_link__rvVt9",textWrap:"ListProductPage_textWrap__mHrll",groupInfo:"ListProductPage_groupInfo__PRbdh",noneLine:"ListProductPage_noneLine__NSOoj",oddLine:"ListProductPage_oddLine__ZJthx",title:"ListProductPage_title__o8k2D",ulGroup:"ListProductPage_ulGroup__hcsOI",badgeWrap:"ListProductPage_badgeWrap__Tfp7a",listCardWrap:"ListProductPage_listCardWrap__yJ738",relative:"ListProductPage_relative__ijT6V",badgeIcon:"ListProductPage_badgeIcon__V7tpO",blackColor:"ListProductPage_blackColor__dva_F",animate:"ListProductPage_animate__ag_iF",cardItem:"ListProductPage_cardItem__Klwg0",shadow:"ListProductPage_shadow__nfagc",flex:"ListProductPage_flex__TEFOV",cardImg:"ListProductPage_cardImg__8gakj",cardName:"ListProductPage_cardName__Gj1cY",closeIcon:"ListProductPage_closeIcon__JmU3T",tagsFilter:"ListProductPage_tagsFilter__MgLIr",tag:"ListProductPage_tag__KUFvi"}},9370:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.593077 6.65772C0.25 7.40364 0.25 8.25224 0.25 9.94943V15.2499C0.25 17.6069 0.25 18.7855 0.982233 19.5177C1.67456 20.21 2.76584 20.2477 4.875 20.2498V14C4.875 12.7574 5.88236 11.75 7.125 11.75H10.875C12.1176 11.75 13.125 12.7574 13.125 14V20.2498C15.2342 20.2477 16.3254 20.21 17.0178 19.5177C17.75 18.7855 17.75 17.6069 17.75 15.2499V9.94944C17.75 8.25224 17.75 7.40364 17.4069 6.65772C17.0638 5.91179 16.4195 5.35953 15.1309 4.25501L13.8809 3.18358C11.5518 1.18717 10.3872 0.188965 9 0.188965C7.61278 0.188965 6.44821 1.18717 4.11906 3.18358L2.86906 4.25501C1.58046 5.35953 0.936153 5.91179 0.593077 6.65772ZM11.125 20.2499V14C11.125 13.8619 11.0131 13.75 10.875 13.75H7.125C6.98693 13.75 6.875 13.8619 6.875 14V20.2499H11.125Z",fill:"#DA2128"}))}r.defaultProps={width:"18",height:"21",viewBox:"0 0 18 21",fill:"none"},e.exports=r,r.default=r}}]);