(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{4906:function(a,e,n){"use strict";n.d(e,{Z:function(){return C}});var l=n(5893),i=n(9447),t=n(4002),s=n(8557),r=n(8262);function o(){return(o=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a}).apply(this,arguments)}var p={update:function(){var a=this,e=a.rtl,n=a.params.pagination;if(n.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var l,i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el,o=a.params.loop?Math.ceil((i-2*a.loopedSlides)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?((l=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup))>i-1-2*a.loopedSlides&&(l-=i-2*a.loopedSlides),l>o-1&&(l-=o),l<0&&"bullets"!==a.params.paginationType&&(l=o+l)):l="undefined"!==typeof a.snapIndex?a.snapIndex:a.activeIndex||0,"bullets"===n.type&&a.pagination.bullets&&a.pagination.bullets.length>0){var p,c,d,u=a.pagination.bullets;if(n.dynamicBullets&&(a.pagination.bulletSize=u.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",a.pagination.bulletSize*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==a.previousIndex&&(a.pagination.dynamicBulletIndex+=l-a.previousIndex,a.pagination.dynamicBulletIndex>n.dynamicMainBullets-1?a.pagination.dynamicBulletIndex=n.dynamicMainBullets-1:a.pagination.dynamicBulletIndex<0&&(a.pagination.dynamicBulletIndex=0)),p=l-a.pagination.dynamicBulletIndex,d=((c=p+(Math.min(u.length,n.dynamicMainBullets)-1))+p)/2),u.removeClass(n.bulletActiveClass+" "+n.bulletActiveClass+"-next "+n.bulletActiveClass+"-next-next "+n.bulletActiveClass+"-prev "+n.bulletActiveClass+"-prev-prev "+n.bulletActiveClass+"-main"),t.length>1)u.each((function(a){var e=(0,s.Z)(a),i=e.index();i===l&&e.addClass(n.bulletActiveClass),n.dynamicBullets&&(i>=p&&i<=c&&e.addClass(n.bulletActiveClass+"-main"),i===p&&e.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),i===c&&e.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next"))}));else{var g=u.eq(l),m=g.index();if(g.addClass(n.bulletActiveClass),n.dynamicBullets){for(var C=u.eq(p),b=u.eq(c),v=p;v<=c;v+=1)u.eq(v).addClass(n.bulletActiveClass+"-main");if(a.params.loop)if(m>=u.length-n.dynamicMainBullets){for(var h=n.dynamicMainBullets;h>=0;h-=1)u.eq(u.length-h).addClass(n.bulletActiveClass+"-main");u.eq(u.length-n.dynamicMainBullets-1).addClass(n.bulletActiveClass+"-prev")}else C.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),b.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next");else C.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),b.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next")}}if(n.dynamicBullets){var f=Math.min(u.length,n.dynamicMainBullets+4),x=(a.pagination.bulletSize*f-a.pagination.bulletSize)/2-d*a.pagination.bulletSize,y=e?"right":"left";u.css(a.isHorizontal()?y:"top",x+"px")}}if("fraction"===n.type&&(t.find((0,r.Wc)(n.currentClass)).text(n.formatFractionCurrent(l+1)),t.find((0,r.Wc)(n.totalClass)).text(n.formatFractionTotal(o))),"progressbar"===n.type){var _;_=n.progressbarOpposite?a.isHorizontal()?"vertical":"horizontal":a.isHorizontal()?"horizontal":"vertical";var j=(l+1)/o,B=1,I=1;"horizontal"===_?B=j:I=j,t.find((0,r.Wc)(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+B+") scaleY("+I+")").transition(a.params.speed)}"custom"===n.type&&n.renderCustom?(t.html(n.renderCustom(a,l+1,o)),a.emit("paginationRender",t[0])):a.emit("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](n.lockClass)}},render:function(){var a=this,e=a.params.pagination;if(e.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var n=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,l=a.pagination.$el,i="";if("bullets"===e.type){var t=a.params.loop?Math.ceil((n-2*a.loopedSlides)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&!a.params.loop&&t>n&&(t=n);for(var s=0;s<t;s+=1)e.renderBullet?i+=e.renderBullet.call(a,s,e.bulletClass):i+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";l.html(i),a.pagination.bullets=l.find((0,r.Wc)(e.bulletClass))}"fraction"===e.type&&(i=e.renderFraction?e.renderFraction.call(a,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',l.html(i)),"progressbar"===e.type&&(i=e.renderProgressbar?e.renderProgressbar.call(a,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',l.html(i)),"custom"!==e.type&&a.emit("paginationRender",a.pagination.$el[0])}},init:function(){var a=this;a.params.pagination=(0,r.Up)(a.$el,a.params.pagination,a.params.createElements,{el:"swiper-pagination"});var e=a.params.pagination;if(e.el){var n=(0,s.Z)(e.el);0!==n.length&&(a.params.uniqueNavElements&&"string"===typeof e.el&&n.length>1&&(n=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&n.addClass(e.clickableClass),n.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(n.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.addClass(e.progressbarOppositeClass),e.clickable&&n.on("click",(0,r.Wc)(e.bulletClass),(function(e){e.preventDefault();var n=(0,s.Z)(this).index()*a.params.slidesPerGroup;a.params.loop&&(n+=a.loopedSlides),a.slideTo(n)})),(0,r.l7)(a.pagination,{$el:n,el:n[0]}),a.enabled||n.addClass(e.lockClass))}},destroy:function(){var a=this,e=a.params.pagination;if(e.el&&a.pagination.el&&a.pagination.$el&&0!==a.pagination.$el.length){var n=a.pagination.$el;n.removeClass(e.hiddenClass),n.removeClass(e.modifierClass+e.type),a.pagination.bullets&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&n.off("click",(0,r.Wc)(e.bulletClass))}}},c={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(a){return a},formatFractionTotal:function(a){return a},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,r.cR)(this,{pagination:o({dynamicBulletIndex:0},p)})},on:{init:function(a){a.pagination.init(),a.pagination.render(),a.pagination.update()},activeIndexChange:function(a){(a.params.loop||"undefined"===typeof a.snapIndex)&&a.pagination.update()},snapIndexChange:function(a){a.params.loop||a.pagination.update()},slidesLengthChange:function(a){a.params.loop&&(a.pagination.render(),a.pagination.update())},snapGridLengthChange:function(a){a.params.loop||(a.pagination.render(),a.pagination.update())},destroy:function(a){a.pagination.destroy()},"enable disable":function(a){var e=a.pagination.$el;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)},click:function(a,e){var n=e.target;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!(0,s.Z)(n).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&n===a.navigation.nextEl||a.navigation.prevEl&&n===a.navigation.prevEl))return;!0===a.pagination.$el.hasClass(a.params.pagination.hiddenClass)?a.emit("paginationShow"):a.emit("paginationHide"),a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)}}}},d=n(172),u=(n(933),n(4394),n(4111)),g=n.n(u),m=n(253);d.Z.use([c]);var C=function(a){var e=a.listBanner,n=a.dotPosition,s=void 0===n?"under":n;return(0,l.jsx)(l.Fragment,{children:e&&(0,l.jsx)(i.t,{observer:!0,observeParents:!0,pagination:{clickable:!0},className:g().slide,children:e.map((function(a,e){return(0,l.jsxs)(t.o,{children:[(0,l.jsx)("img",{width:"100%",src:a,alt:""}),"under"===s&&(0,l.jsx)(m.Z,{className:g().emptySpacing})]},e)}))})})}},6128:function(a,e,n){"use strict";var l,i=n(5893),t=n(7294),s=n(6219),r=n.n(s),o=n(1749),p=n(7885),c=n(2318),d=n(6010),u=n(8121),g=n(1567),m=n(9370),C=n.n(m),b=n(1163),v=n(7338);function h(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}e.Z=function(a){var e=a.breadCrumbs,n=a.iconHome,s=void 0!==n&&n,m=(0,g.$)().t,f=(0,t.useState)(e[e.length-1])[0],x=(0,b.useRouter)();return(0,i.jsxs)(o.Z,{container:!0,className:r().container,alignItems:"center",children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C(),{onClick:function(a){a.preventDefault(),x.push(v.d.landingPage)}}),(0,i.jsx)(u.Z,{fontSize:"small",className:r().breadcrumbIconInHome})]}):(0,i.jsx)("div",{className:r().headingBar}),(0,i.jsx)(p.Z,{separator:(0,i.jsx)(u.Z,{fontSize:"small",className:r().breadcrumbIcon}),"aria-label":"breadcrumb",classes:{separator:r().rootseparator},children:e.map((function(a,e){return(0,i.jsx)(c.Z,{className:(0,d.Z)((l={},h(l,r().active,f.label===a.label),h(l,r().cursor,a.path),l)),onClick:function(e){return a.path&&function(a,e){a.preventDefault(),x.push(e)}(e,a.path)},children:m(a.label)},e)}))})]})}},388:function(a,e,n){"use strict";var l=n(5893),i=n(1749),t=n(253),s=n(2318),r=n(7294),o=n(1567),p=n(4384),c=n.n(p),d=n(6573),u=n(3597),g=n(6616),m=n(8168);e.Z=function(){var a=(0,o.$)().t,e=(0,r.useState)("#"),n=e[0],p=e[1];return(0,r.useEffect)((function(){p(window.location.href)}),[]),(0,l.jsx)(i.Z,{container:!0,children:(0,l.jsxs)(i.Z,{item:!0,children:[(0,l.jsx)(t.Z,{mb:1,children:(0,l.jsx)(s.Z,{children:(0,l.jsx)("strong",{children:a("share")})})}),(0,l.jsxs)(i.Z,{container:!0,justifyContent:"space-between",spacing:2,className:c().social,children:[(0,l.jsx)(i.Z,{item:!0,children:(0,l.jsx)("a",{href:"/",target:"_blank",children:(0,l.jsx)(d.Z,{url:n,children:(0,l.jsx)("img",{src:"/assets/socials/facebook.png",alt:""})})})}),(0,l.jsx)(i.Z,{item:!0,children:(0,l.jsx)("button",{"data-href":n,"data-oaid":"1148028551726591727",className:"zalo-share-button","data-customize":"true","data-layout":"4",children:(0,l.jsx)("img",{src:"/assets/socials/zalo_40x40.png",alt:""})})}),(0,l.jsx)(i.Z,{item:!0,children:(0,l.jsx)(u.Z,{url:n,children:(0,l.jsx)("img",{src:"/assets/socials/LinkedIn.png",alt:"Linked"})})}),(0,l.jsx)(i.Z,{item:!0,children:(0,l.jsx)(g.Z,{url:n,children:(0,l.jsx)("img",{src:"/assets/socials/Twitter.png",alt:"Twitter"})})}),(0,l.jsx)(i.Z,{item:!0,children:(0,l.jsx)(m.Z,{url:n,children:(0,l.jsx)("img",{src:"/assets/socials/Telegram.png",alt:"Telegram"})})})]})]})})}},4111:function(a){a.exports={container:"Banner_container__OITMe",bannerImage:"Banner_bannerImage__wwQMU",slide:"Banner_slide__M0fmg",emptySpacing:"Banner_emptySpacing__hTM4C"}},6219:function(a){a.exports={container:"PageHeading_container__7jf8l",headingBar:"PageHeading_headingBar__GJpag",active:"PageHeading_active__ju3dI",cursor:"PageHeading_cursor__0x_Mk",breadcrumbIcon:"PageHeading_breadcrumbIcon__3FuGa",breadcrumbIconInHome:"PageHeading_breadcrumbIconInHome__gKYlJ",rootseparator:"PageHeading_rootseparator__Md0MV"}},4384:function(a){a.exports={social:"SocialShare_social__Gtsmo"}},4394:function(){},933:function(){},9370:function(a,e,n){var l=n(7294);function i(a){return l.createElement("svg",a,l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.593077 6.65772C0.25 7.40364 0.25 8.25224 0.25 9.94943V15.2499C0.25 17.6069 0.25 18.7855 0.982233 19.5177C1.67456 20.21 2.76584 20.2477 4.875 20.2498V14C4.875 12.7574 5.88236 11.75 7.125 11.75H10.875C12.1176 11.75 13.125 12.7574 13.125 14V20.2498C15.2342 20.2477 16.3254 20.21 17.0178 19.5177C17.75 18.7855 17.75 17.6069 17.75 15.2499V9.94944C17.75 8.25224 17.75 7.40364 17.4069 6.65772C17.0638 5.91179 16.4195 5.35953 15.1309 4.25501L13.8809 3.18358C11.5518 1.18717 10.3872 0.188965 9 0.188965C7.61278 0.188965 6.44821 1.18717 4.11906 3.18358L2.86906 4.25501C1.58046 5.35953 0.936153 5.91179 0.593077 6.65772ZM11.125 20.2499V14C11.125 13.8619 11.0131 13.75 10.875 13.75H7.125C6.98693 13.75 6.875 13.8619 6.875 14V20.2499H11.125Z",fill:"#DA2128"}))}i.defaultProps={width:"18",height:"21",viewBox:"0 0 18 21",fill:"none"},a.exports=i,i.default=i}}]);