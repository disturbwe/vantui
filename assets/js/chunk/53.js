(window.webpackJsonp=window.webpackJsonp||[]).push([[53,1],{"297":function(n,e,t){"use strict";t.d(e,"a",(function(){return b.a})),t.d(e,"b",(function(){return v})),t.d(e,"c",(function(){return j.a}));t(376);var r=t(335),c=t.n(r),i=t(317),a=t.n(i),o=t(300),u=t.n(o),s=t(346),l=t(349);var f=t(425),d=t.n(f);function call(n,e){return 2===e.length?n(e[0],e[1]):1===e.length?n(e[0]):n()}function serializer(n){if(1===n.length&&function isPrimitive(n){var e=c()(n);return"boolean"===e||"number"===e||"string"===e||"undefined"===e||null===n}(n[0]))return n[0];for(var e={},t=0;t<n.length;t++)e["key"+t]=n[t];return d()(e)}var b=t(311),j=t(312),v=function memoize(n){var e={};return function(){var t=serializer(arguments);return void 0===e[t]&&(e[t]=call(n,arguments)),e[t]}}((function _bem(n,e){var t=[];return function traversing(n,e){if(e)if("string"==typeof e||"number"==typeof e)n.push(e);else if(s.a(e))u()(e).call(e,(function(e){traversing(n,e)}));else if("object"===c()(e)){var t;u()(t=l.a(e)).call(t,(function(t){e[t]&&n.push(t)}))}}(t,e),function join(n,e){return n="van-"+n,(e=a()(e).call(e,(function(e){return n+"--"+e}))).unshift(n),e.join(" ")}(n,t)}))},"307":function(n,e,t){},"309":function(n,e,t){"use strict";t.d(e,"e",(function(){return isPlainObject})),t.d(e,"f",(function(){return isPromise})),t.d(e,"b",(function(){return isDef})),t.d(e,"d",(function(){return isObj})),t.d(e,"a",(function(){return isBoolean})),t.d(e,"c",(function(){return isImageUrl})),t.d(e,"g",(function(){return isVideoUrl}));var r=t(335),c=t.n(r);function isFunction(n){return"function"==typeof n}function isPlainObject(n){return null!==n&&"object"===c()(n)&&!Array.isArray(n)}function isPromise(n){return isPlainObject(n)&&isFunction(n.then)&&isFunction(n.catch)}function isDef(n){return null!=n}function isObj(n){var e=c()(n);return null!==n&&("object"===e||"function"===e)}function isBoolean(n){return"boolean"==typeof n}var i=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,a=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(n){return i.test(n)}function isVideoUrl(n){return a.test(n)}},"311":function(n,e,t){"use strict";t.d(e,"a",(function(){return addUnit}));var r=t(34);function addUnit(n){if(null!=n)return/^-?\d+(\.\d+)?$/.test(""+n)?r.a.pxTransform(n):n}},"312":function(n,e,t){"use strict";t.d(e,"a",(function(){return style}));t(75),t(121),t(452),t(448),t(376);var r=t(317),c=t.n(r),i=t(301),a=t.n(i),o=t(346),u=t(349);function style(n){var e,t,r;return o.a(n)?c()(e=a()(n).call(n,(function(n){return null!=n&&""!==n}))).call(e,(function(n){return style(n)})).join(";"):"[object Object]"===toString.call(n)?c()(t=a()(r=u.a(n)).call(r,(function(e){return null!=n[e]&&""!==n[e]}))).call(t,(function(e){return[(t=e,null===(r=t.replace(new RegExp("[A-Z]","g"),(function(n){return"-"+n})))||void 0===r?void 0:r.toLowerCase()),[n[e]]].join(":");var t,r})).join(";"):n}},"315":function(n,e,t){"use strict";t.d(e,"a",(function(){return Icon}));var r=t(299),c=t.n(r),i=t(302),a=t.n(i),o=t(301),u=t.n(o),s=t(303),l=t.n(s),f=t(300),d=t.n(f),b=t(304),j=t.n(b),v=t(305),h=t.n(v),m=t(306),p=t.n(m),x=t(298),g=t(297),O=t(420),y=(t(376),t(365)),_=t.n(y),I=t(312),k=t(311);function isImage(n){return-1!==_()(n).call(n,"/")}function rootStyle(n){return Object(I.a)([{"color":n.color,"font-size":Object(k.a)(n.size)}])}var N=t(44),w=["classPrefix","name","color","size","dot","info","style","className"];function ownKeys(n,e){var t=c()(n);if(a.a){var r=a()(n);e&&(r=u()(r).call(r,(function(e){return l()(n,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,r=null!=arguments[e]?arguments[e]:{};if(e%2)d()(t=ownKeys(Object(r),!0)).call(t,(function(e){h()(n,e,r[e])}));else if(j.a)Object.defineProperties(n,j()(r));else{var c;d()(c=ownKeys(Object(r))).call(c,(function(e){Object.defineProperty(n,e,l()(r,e))}))}}return n}function Icon(n){var e,t,r=n.classPrefix,c=void 0===r?"van-icon":r,i=n.name,a=n.color,o=n.size,u=n.dot,s=n.info,l=n.style,f=n.className,d=p()(n,w);return Object(N.jsxs)(x.n,_objectSpread(_objectSpread({"className":(e={"classPrefix":c,"name":i},t=[],null!=e.classPrefix&&t.push(e.classPrefix),isImage(e.name)?t.push("van-icon--image"):null!=e.classPrefix&&t.push(e.classPrefix+"-"+e.name),t.join(" ")+" ".concat(f||"")),"style":g.c([rootStyle({"color":a,"size":o}),l])},d),{},{"children":[(s||0===s||u)&&Object(N.jsx)(O.a,{"dot":u,"info":s,"className":"van-icon__info"}),isImage(i)&&Object(N.jsx)(x.f,{"src":i,"mode":"aspectFit","className":"van-icon__image"})]}))}e.b=Icon},"316":function(n,e,t){},"319":function(n,e,t){},"321":function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var r=t(5),c=t.n(r),i=t(6),a=t.n(i),o=t(14),u=t.n(o),s=t(15),l=t.n(s),f=t(298),d=t(26),b=(t(322),t(44)),j=function(n){u()(Index,n);var e=l()(Index);function Index(){return c()(this,Index),e.call(this)}return a()(Index,[{"key":"render","value":function render(){var n=this.props,e=n.padding,t=n.title,r=n.card;return Object(b.jsxs)(f.n,{"className":"custom-class demo-block van-clearfix "+(e?"demo-block--padding":""),"children":[t&&Object(b.jsx)(f.n,{"className":"demo-block__title","children":t}),r?Object(b.jsx)(f.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(d.Component)},"322":function(n,e,t){},"333":function(n,e,t){"use strict";t.d(e,"g",(function(){return range})),t.d(e,"d",(function(){return getSystemInfoSync})),t.d(e,"a",(function(){return addUnit})),t.d(e,"h",(function(){return requestAnimationFrame})),t.d(e,"f",(function(){return pickExclude})),t.d(e,"c",(function(){return getRect})),t.d(e,"b",(function(){return getAllRect})),t.d(e,"i",(function(){return toPromise}));t(75);var r,c=t(402),i=t.n(c),a=t(299),o=t.n(a),u=t(339),s=t.n(u),l=t(329),f=t.n(l),d=(t(296),t(924)),b=(t(927),t(34)),j=t(693),v=(t(31),t(309));t(343);function range(n,e,t){return Math.min(Math.max(n,e),t)}function getSystemInfoSync(){return null==r&&(r=Object(d.a)()),r}function addUnit(n){if(Object(v.b)(n))return/^-?\d+(\.\d+)?$/.test(""+n)?b.a.pxTransform(n):n}function requestAnimationFrame(n){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){n()}),33.333333333333336):Object(j.a)().selectViewport().boundingClientRect().exec((function(){n()}))}function pickExclude(n,e){var t;return Object(v.e)(n)?i()(t=o()(n)).call(t,(function(t,r){return s()(e).call(e,r)||(t[r]=n[r]),t}),{}):{}}function getRect(n,e){return new f.a((function(t){var r=Object(j.a)();n&&(r=r.in(n)),r.select(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function getAllRect(n,e){return new f.a((function(t){var r=Object(j.a)();n&&(r=r.in(n)),r.selectAll(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function toPromise(n){return Object(v.f)(n)?n:f.a.resolve(n)}t.d(e,"e",(function(){return v.b}))},"336":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return Page}));t(427);var r=t(315),c=t(298),i=t(34),a=t(446),o=t(31),u=t(26),s=(t(467),t(44));function Page(e){var t=e.title,l=e.className,f=void 0===l?"":l,d=e.children,b=i.a.useRouter().path;return Object(u.useEffect)((function(){"react"===n.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(a.a)({"scrollTop":0})}),[b]),i.a.useShareAppMessage((function(){return{"title":"AntM 组件库演示","path":b}})),Object(s.jsxs)(c.n,{"className":"demo-page ".concat(f),"children":[Object(s.jsxs)(c.n,{"className":"demo-nav","children":[Object(s.jsx)(r.b,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return Object(o.d)()}}),Object(s.jsxs)(c.n,{"className":"demo-nav__title","children":[t," "]})]}),d]})}}).call(this,t(126))},"338":function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return i})),t.d(e,"e",(function(){return a})),t.d(e,"d",(function(){return o})),t.d(e,"f",(function(){return u}));var r=1010,c=1e3,i=805,a=805,o=800,u=600},"343":function(n,e,t){"use strict";t.d(e,"a",(function(){return canIUseModel})),t.d(e,"b",(function(){return canIUseNextTick}));t(75),t(353);var r,c=t(408),i=t.n(c),a=t(924),o=t(925);t(926);function gte(n){return function compareVersion(n,e){n=n.split("."),e=e.split(".");for(var t=Math.max(n.length,e.length);n.length<t;)n.push("0");for(;e.length<t;)e.push("0");for(var r=0;r<t;r++){var c=i()(n[r],10),a=i()(e[r],10);if(c>a)return 1;if(c<a)return-1}return 0}(function getSystemInfoSync(){return null==r&&(r=Object(a.a)()),r}().SDKVersion,n)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(o.a)("nextTick")}},"346":function(n,e,t){"use strict";function isArray(n){return n&&"[object Array]"===toString.call(n)}t.d(e,"a",(function(){return isArray}))},"349":function(n,e,t){"use strict";t.d(e,"a",(function(){return keys}));t(452),t(75),t(448),t(353),t(121);var r=t(317),c=t.n(r),i=t(425),a=t.n(i),o=new RegExp('{|}|"',"g");function keys(n){var e;return c()(e=a()(n).replace(o,"").split(",")).call(e,(function(n){return n.split(":")[0]}))}},"420":function(n,e,t){"use strict";t.d(e,"a",(function(){return Info}));var r=t(299),c=t.n(r),i=t(302),a=t.n(i),o=t(301),u=t.n(o),s=t(303),l=t.n(s),f=t(300),d=t.n(f),b=t(304),j=t.n(b),v=t(305),h=t.n(v),m=t(306),p=t.n(m),x=t(298),g=t(297),O=t(44),y=["dot","info","style","className"];function ownKeys(n,e){var t=c()(n);if(a.a){var r=a()(n);e&&(r=u()(r).call(r,(function(e){return l()(n,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,r=null!=arguments[e]?arguments[e]:{};if(e%2)d()(t=ownKeys(Object(r),!0)).call(t,(function(e){h()(n,e,r[e])}));else if(j.a)Object.defineProperties(n,j()(r));else{var c;d()(c=ownKeys(Object(r))).call(c,(function(e){Object.defineProperty(n,e,l()(r,e))}))}}return n}function Info(n){var e=n.dot,t=n.info,r=void 0===t?null:t,c=n.style,i=n.className,a=p()(n,y);return Object(O.jsx)(O.Fragment,{"children":(r||0===r||e)&&Object(O.jsx)(x.n,_objectSpread(_objectSpread({"className":"van-info "+g.b("info",{"dot":e})+"  "+i,"style":g.c([c])},a),{},{"children":e?"":r}))})}e.b=Info},"427":function(n,e,t){"use strict";t(307),t(316),t(319)},"467":function(n,e,t){},"829":function(n,e,t){},"830":function(n,e,t){},"960":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return J}));t(427);var r=t(315),c=(t(307),t(316),t(319),t(829),t(299)),i=t.n(c),a=t(302),o=t.n(a),u=t(301),s=t.n(u),l=t(303),f=t.n(l),d=t(300),b=t.n(d),j=t(304),v=t.n(j),h=t(305),m=t.n(h),p=t(306),x=t.n(p),g=t(308),O=t.n(g),y=t(26),_=t(298),I=t(297),k=t(338),N=t(333),w=t(312);var S=t(44),T=["fixed","placeholder","border","zIndex","safeAreaInsetTop","leftArrow","leftText","title","rightText","renderTitle","renderLeft","renderRight","onClickLeft","onClickRight","style","className"];function ownKeys(n,e){var t=i()(n);if(o.a){var r=o()(n);e&&(r=s()(r).call(r,(function(e){return f()(n,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,r=null!=arguments[e]?arguments[e]:{};if(e%2)b()(t=ownKeys(Object(r),!0)).call(t,(function(e){m()(n,e,r[e])}));else if(v.a)Object.defineProperties(n,v()(r));else{var c;b()(c=ownKeys(Object(r))).call(c,(function(e){Object.defineProperty(n,e,f()(r,e))}))}}return n}var C=function NavBar(n){var e,t=Object(y.useState)(46),c=O()(t,2),i=c[0],a=c[1],o=Object(y.useState)(44),u=O()(o,2),s=u[0],l=u[1],f=n.fixed,d=n.placeholder,b=n.border,j=void 0===b||b,v=n.zIndex,h=void 0===v?k.a:v,m=n.safeAreaInsetTop,p=void 0===m||m,g=n.leftArrow,C=n.leftText,P=n.title,A=n.rightText,R=n.renderTitle,z=n.renderLeft,U=n.renderRight,K=n.onClickLeft,E=n.onClickRight,F=n.style,L=n.className,B=x()(n,T),M=Object(y.useCallback)((function(){f&&d&&Object(N.c)(null,".van-nav-bar").then((function(n){n&&"height"in n&&a(n.height)}))}),[f,d]);return Object(y.useEffect)((function(){var n=Object(N.d)().statusBarHeight;a(46+n),l(n)}),[]),Object(y.useEffect)((function(){M()}),[M]),Object(S.jsxs)(_.a,{"children":[f&&d&&Object(S.jsx)(_.n,{"style":"height: "+i+"px;"}),Object(S.jsx)(_.n,_objectSpread(_objectSpread({"className":I.b("nav-bar",{"fixed":f})+"  "+(j?"van-hairline--bottom":"")+" ".concat(L||""),"style":I.c([(e={"zIndex":h,"statusBarHeight":s,"safeAreaInsetTop":p},Object(w.a)({"z-index":e.zIndex,"padding-top":e.safeAreaInsetTop?e.statusBarHeight+"px":e.fromTop+"px","height":e.height+"px"})+"; "+F)])},B),{},{"children":Object(S.jsxs)(_.n,{"className":"van-nav-bar__content","children":[Object(S.jsx)(_.n,{"className":"van-nav-bar__left","onClick":K,"children":g||C?Object(S.jsxs)(_.a,{"children":[g&&Object(S.jsx)(r.a,{"size":64,"name":"arrow-left","className":"van-nav-bar__arrow"}),C&&Object(S.jsx)(_.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":C})]}):z}),Object(S.jsx)(_.n,{"className":"van-nav-bar__title title-class van-ellipsis","children":P?Object(S.jsx)(_.a,{"children":P}):R}),Object(S.jsx)(_.n,{"className":"van-nav-bar__right","onClick":E,"children":A?Object(S.jsx)(_.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":A}):U})]})}))]})},P=t(5),A=t.n(P),R=t(6),z=t.n(R),U=t(22),K=t.n(U),E=t(14),F=t.n(E),L=t(15),B=t.n(L),M=t(20),V=t.n(M),D=t(966),H=t(336),q=t(321),J=(t(830),function(n){F()(Index,n);var e=B()(Index);function Index(){var n;return A()(this,Index),n=e.call(this),V()(K()(n),"onClickLeft",(function(){Object(D.c)({"title":"点击返回","icon":"none"})})),V()(K()(n),"onClickRight",(function(){Object(D.c)({"title":"点击按钮","icon":"none"})})),n}return z()(Index,[{"key":"render","value":function render(){return Object(S.jsx)(H.a,{"title":"NavBar 导航栏","children":Object(S.jsxs)(S.Fragment,{"children":[Object(S.jsx)(q.a,{"title":"基础用法","children":Object(S.jsx)(C,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight})}),Object(S.jsx)(q.a,{"title":"高级用法","children":Object(S.jsx)(C,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(S.jsx)(S.Fragment,{"children":Object(S.jsx)(r.b,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(y.Component))}}]);