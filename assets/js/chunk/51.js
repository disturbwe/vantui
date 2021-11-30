(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"295":function(n,e,t){"use strict";t.d(e,"e",(function(){return isPlainObject})),t.d(e,"f",(function(){return isPromise})),t.d(e,"b",(function(){return isDef})),t.d(e,"d",(function(){return isObj})),t.d(e,"a",(function(){return isBoolean})),t.d(e,"c",(function(){return isImageUrl})),t.d(e,"g",(function(){return isVideoUrl}));var r=t(401),i=t.n(r);function isFunction(n){return"function"==typeof n}function isPlainObject(n){return null!==n&&"object"===i()(n)&&!Array.isArray(n)}function isPromise(n){return isPlainObject(n)&&isFunction(n.then)&&isFunction(n.catch)}function isDef(n){return null!=n}function isObj(n){var e=i()(n);return null!==n&&("object"===e||"function"===e)}function isBoolean(n){return"boolean"==typeof n}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,o=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(n){return c.test(n)}function isVideoUrl(n){return o.test(n)}},"299":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t(3),i=t.n(r),c=t(6),o=t.n(c),a=t(16),u=t.n(a),s=t(17),f=t.n(s),l=t(280),d=t(27),v=(t(301),t(44)),p=function(n){u()(Index,n);var e=f()(Index);function Index(){return i()(this,Index),e.call(this)}return o()(Index,[{"key":"render","value":function render(){var n=this.props,e=n.padding,t=n.title,r=n.card;return Object(v.jsxs)(l.n,{"className":"custom-class demo-block van-clearfix "+(e?"demo-block--padding":""),"children":[t&&Object(v.jsx)(l.n,{"className":"demo-block__title","children":t}),r?Object(v.jsx)(l.n,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(d.Component)},"301":function(n,e,t){},"310":function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"324":function(n,e,t){n.exports=t(339)},"326":function(n,e,t){"use strict";t.d(e,"g",(function(){return range})),t.d(e,"d",(function(){return getSystemInfoSync})),t.d(e,"a",(function(){return addUnit})),t.d(e,"h",(function(){return requestAnimationFrame})),t.d(e,"f",(function(){return pickExclude})),t.d(e,"c",(function(){return getRect})),t.d(e,"b",(function(){return getAllRect})),t.d(e,"i",(function(){return toPromise}));t(76);var r,i=t(324),c=t.n(i),o=t(282),a=t.n(o),u=t(344),s=t.n(u),f=t(345),l=t.n(f),d=t(31),v=t(295);t(351);function range(n,e,t){return Math.min(Math.max(n,e),t)}function getSystemInfoSync(){return null==r&&(r=Object(d.getSystemInfoSync)()),r}function addUnit(n){if(Object(v.b)(n))return/^-?\d+(\.\d+)?$/.test(""+n)?d.default.pxTransform(n):n}function requestAnimationFrame(n){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){n()}),33.333333333333336):Object(d.createSelectorQuery)().selectViewport().boundingClientRect().exec((function(){n()}))}function pickExclude(n,e){var t;return Object(v.e)(n)?c()(t=a()(n)).call(t,(function(t,r){return s()(e).call(e,r)||(t[r]=n[r]),t}),{}):{}}function getRect(n,e){return new l.a((function(t){var r=Object(d.createSelectorQuery)();n&&(r=r.in(n)),r.select(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function getAllRect(n,e){return new l.a((function(t){var r=Object(d.createSelectorQuery)();n&&(r=r.in(n)),r.selectAll(e).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t(n[0])}))}))}function toPromise(n){return Object(v.f)(n)?n:l.a.resolve(n)}t.d(e,"e",(function(){return v.b}))},"327":function(n,e,t){var r=t(328);n.exports=r},"328":function(n,e,t){var r=t(296),i=t(329),c=t(331),o=Array.prototype,a=String.prototype;n.exports=function(n){var e=n.includes;return n===o||r(o,n)&&e===o.includes?i:"string"==typeof n||n===a||r(a,n)&&e===a.includes?c:e}},"329":function(n,e,t){t(330);var r=t(292);n.exports=r("Array").includes},"330":function(n,e,t){"use strict";var r=t(281),i=t(416).includes,c=t(407);r({"target":"Array","proto":!0},{"includes":function includes(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),c("includes")},"331":function(n,e,t){t(332);var r=t(292);n.exports=r("String").includes},"332":function(n,e,t){"use strict";var r=t(281),i=t(297),c=t(333),o=t(320),a=t(302),u=t(335),s=i("".indexOf);r({"target":"String","proto":!0,"forced":!u("includes")},{"includes":function includes(n){return!!~s(a(o(this)),a(c(n)),arguments.length>1?arguments[1]:void 0)}})},"333":function(n,e,t){var r=t(290),i=t(334),c=r.TypeError;n.exports=function(n){if(i(n))throw c("The method doesn't accept regular expressions");return n}},"334":function(n,e,t){var r=t(317),i=t(406),c=t(291)("match");n.exports=function(n){var e;return r(n)&&(void 0!==(e=n[c])?!!e:"RegExp"==i(n))}},"335":function(n,e,t){var r=t(291)("match");n.exports=function(n){var e=/./;try{"/./"[n](e)}catch(t){try{return e[r]=!1,"/./"[n](e)}catch(n){}}return!1}},"337":function(n,e,t){n.exports=t(346)},"338":function(n,e,t){var r=t(297),i=t(320),c=t(302),o=t(310),a=r("".replace),u="["+o+"]",s=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),createMethod=function(n){return function(e){var t=c(i(e));return 1&n&&(t=a(t,s,"")),2&n&&(t=a(t,f,"")),t}};n.exports={"start":createMethod(1),"end":createMethod(2),"trim":createMethod(3)}},"339":function(n,e,t){var r=t(340);n.exports=r},"340":function(n,e,t){var r=t(296),i=t(341),c=Array.prototype;n.exports=function(n){var e=n.reduce;return n===c||r(c,n)&&e===c.reduce?i:e}},"341":function(n,e,t){t(342);var r=t(292);n.exports=r("Array").reduce},"342":function(n,e,t){"use strict";var r=t(281),i=t(343).left,c=t(403),o=t(405),a=t(421);r({"target":"Array","proto":!0,"forced":!c("reduce")||!a&&o>79&&o<83},{"reduce":function reduce(n){var e=arguments.length;return i(this,n,e,e>1?arguments[1]:void 0)}})},"343":function(n,e,t){var r=t(290),i=t(319),c=t(307),o=t(353),a=t(308),u=r.TypeError,createMethod=function(n){return function(e,t,r,s){i(t);var f=c(e),l=o(f),d=a(f),v=n?d-1:0,p=n?-1:1;if(r<2)for(;;){if(v in l){s=l[v],v+=p;break}if(v+=p,n?v<0:d<=v)throw u("Reduce of empty array with no initial value")}for(;n?v>=0:d>v;v+=p)v in l&&(s=t(s,l[v],v,f));return s}};n.exports={"left":createMethod(!1),"right":createMethod(!0)}},"344":function(n,e,t){n.exports=t(327)},"346":function(n,e,t){var r=t(347);n.exports=r},"347":function(n,e,t){t(348);var r=t(298);n.exports=r.parseInt},"348":function(n,e,t){var r=t(281),i=t(349);r({"global":!0,"forced":parseInt!=i},{"parseInt":i})},"349":function(n,e,t){var r=t(290),i=t(315),c=t(297),o=t(302),a=t(338).trim,u=t(310),s=r.parseInt,f=r.Symbol,l=f&&f.iterator,d=/^[+-]?0x/i,v=c(d.exec),p=8!==s(u+"08")||22!==s(u+"0x16")||l&&!i((function(){s(Object(l))}));n.exports=p?function parseInt(n,e){var t=a(o(n));return s(t,e>>>0||(v(d,t)?16:10))}:s},"351":function(n,e,t){"use strict";t.d(e,"a",(function(){return canIUseModel})),t.d(e,"b",(function(){return canIUseNextTick}));t(76),t(408);var r,i=t(337),c=t.n(i),o=t(31);function gte(n){return function compareVersion(n,e){n=n.split("."),e=e.split(".");for(var t=Math.max(n.length,e.length);n.length<t;)n.push("0");for(;e.length<t;)e.push("0");for(var r=0;r<t;r++){var i=c()(n[r],10),o=c()(e[r],10);if(i>o)return 1;if(i<o)return-1}return 0}(function getSystemInfoSync(){return null==r&&(r=Object(o.getSystemInfoSync)()),r}().SDKVersion,n)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(o.canIUse)("nextTick")}},"361":function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return c})),t.d(e,"e",(function(){return o})),t.d(e,"d",(function(){return a})),t.d(e,"f",(function(){return u}));var r=1010,i=1e3,c=805,o=805,a=800,u=600},"755":function(n,e,t){},"756":function(n,e,t){},"882":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return q}));t(478);var r=t(303),i=(t(293),t(305),t(309),t(755),t(282)),c=t.n(i),o=t(287),a=t.n(o),u=t(284),s=t.n(u),f=t(288),l=t.n(f),d=t(283),v=t.n(d),p=t(289),h=t.n(p),b=t(286),x=t.n(b),j=t(285),g=t.n(j),m=t(294),O=t.n(m),y=t(27),I=t(280),k=t(279),S=t(361),w=t(326),T=t(312);var _=t(44),A=["fixed","placeholder","border","zIndex","safeAreaInsetTop","leftArrow","leftText","title","rightText","renderTitle","renderLeft","renderRight","onClickLeft","onClickRight","style","className"];function ownKeys(n,e){var t=c()(n);if(a.a){var r=a()(n);e&&(r=s()(r).call(r,(function(e){return l()(n,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t,r=null!=arguments[e]?arguments[e]:{};if(e%2)v()(t=ownKeys(Object(r),!0)).call(t,(function(e){x()(n,e,r[e])}));else if(h.a)Object.defineProperties(n,h()(r));else{var i;v()(i=ownKeys(Object(r))).call(i,(function(e){Object.defineProperty(n,e,l()(r,e))}))}}return n}var C=function NavBar(n){var e,t=Object(y.useState)(46),i=O()(t,2),c=i[0],o=i[1],a=Object(y.useState)(44),u=O()(a,2),s=u[0],f=u[1],l=n.fixed,d=n.placeholder,v=n.border,p=void 0===v||v,h=n.zIndex,b=void 0===h?S.a:h,x=n.safeAreaInsetTop,j=void 0===x||x,m=n.leftArrow,C=n.leftText,R=n.title,N=n.rightText,U=n.renderTitle,E=n.renderLeft,P=n.renderRight,z=n.onClickLeft,B=n.onClickRight,F=n.style,L=n.className,M=g()(n,A),V=Object(y.useCallback)((function(){l&&d&&Object(w.c)(null,".van-nav-bar").then((function(n){n&&"height"in n&&o(n.height)}))}),[l,d]);return Object(y.useEffect)((function(){var n=Object(w.d)().statusBarHeight;o(46+n),f(n)}),[]),Object(y.useEffect)((function(){V()}),[V]),Object(_.jsxs)(I.a,{"children":[l&&d&&Object(_.jsx)(I.n,{"style":"height: "+c+"px;"}),Object(_.jsx)(I.n,_objectSpread(_objectSpread({"className":k.b("nav-bar",{"fixed":l})+"  "+(p?"van-hairline--bottom":"")+" ".concat(L||""),"style":k.c([(e={"zIndex":b,"statusBarHeight":s,"safeAreaInsetTop":j},Object(T.a)({"z-index":e.zIndex,"padding-top":e.safeAreaInsetTop?e.statusBarHeight+"px":e.fromTop+"px","height":e.height+"px"})+"; "+F)])},M),{},{"children":Object(_.jsxs)(I.n,{"className":"van-nav-bar__content","children":[Object(_.jsx)(I.n,{"className":"van-nav-bar__left","onClick":z,"children":m||C?Object(_.jsxs)(I.a,{"children":[m&&Object(_.jsx)(r.a,{"size":64,"name":"arrow-left","className":"van-nav-bar__arrow"}),C&&Object(_.jsx)(I.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":C})]}):E}),Object(_.jsx)(I.n,{"className":"van-nav-bar__title title-class van-ellipsis","children":R?Object(_.jsx)(I.a,{"children":R}):U}),Object(_.jsx)(I.n,{"className":"van-nav-bar__right","onClick":B,"children":N?Object(_.jsx)(I.n,{"className":"van-nav-bar__text","hoverClass":"van-nav-bar__text--hover","hoverStayTime":70,"children":N}):P})]})}))]})},R=t(3),N=t.n(R),U=t(6),E=t.n(U),P=t(24),z=t.n(P),B=t(16),F=t.n(B),L=t(17),M=t.n(L),V=t(9),K=t.n(V),D=t(31),H=t(323),Q=t(299),q=(t(756),function(n){F()(Index,n);var e=M()(Index);function Index(){var n;return N()(this,Index),n=e.call(this),K()(z()(n),"onClickLeft",(function(){Object(D.showToast)({"title":"点击返回","icon":"none"})})),K()(z()(n),"onClickRight",(function(){Object(D.showToast)({"title":"点击按钮","icon":"none"})})),n}return E()(Index,[{"key":"render","value":function render(){return Object(_.jsx)(H.a,{"title":"NavBar 导航栏","children":Object(_.jsxs)(_.Fragment,{"children":[Object(_.jsx)(Q.a,{"title":"基础用法","children":Object(_.jsx)(C,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight})}),Object(_.jsx)(Q.a,{"title":"高级用法","children":Object(_.jsx)(C,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(_.jsx)(_.Fragment,{"children":Object(_.jsx)(r.b,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(y.Component))}}]);