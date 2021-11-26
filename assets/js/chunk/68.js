(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"772":function(e,n,a){},"894":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return G}));a(293),a(305),a(309),a(410),a(583),a(772);var c=a(286),t=a.n(c),l=a(294),o=a.n(l),r=a(285),i=a.n(r),s=a(316),d=a.n(s),u=a(282),h=a.n(u),b=a(287),f=a.n(b),j=a(284),p=a.n(j),v=a(288),x=a.n(v),g=a(283),O=a.n(g),C=a(289),m=a.n(C),I=a(27),y=a(280),S=a(279),w=a(608),k=a(44),_=["value","defaultValue","label","focus","error","disabled","readonly","inputAlign","showAction","leftIcon","rightIcon","placeholder","placeholderStyle","actionText","background","maxlength","shape","clearable","clearTrigger","clearIcon","renderLabel","renderLeftIcon","renderRightIcon","renderAction","onFocus","onBlur","onChange","onClear","onClickInput","onSearch","onCancel","style","className"];function ownKeys(e,n){var a=h()(e);if(f.a){var c=f()(e);n&&(c=p()(c).call(c,(function(n){return x()(e,n).enumerable}))),a.push.apply(a,c)}return a}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var a,c=null!=arguments[n]?arguments[n]:{};if(n%2)O()(a=ownKeys(Object(c),!0)).call(a,(function(n){t()(e,n,c[n])}));else if(m.a)Object.defineProperties(e,m()(c));else{var l;O()(l=ownKeys(Object(c))).call(l,(function(n){Object.defineProperty(e,n,x()(c,n))}))}}return e}var T=function Search(e){var n,a=e.value,c=e.defaultValue,t=void 0===c?"":c,l=e.label,r=e.focus,s=e.error,u=e.disabled,h=e.readonly,b=e.inputAlign,f=e.showAction,j=e.leftIcon,p=void 0===j?"search":j,v=e.rightIcon,x=e.placeholder,g=e.placeholderStyle,O=e.actionText,C=void 0===O?"取消":O,m=e.background,T=void 0===m?"#ffffff":m,A=e.maxlength,N=void 0===A?-1:A,V=e.shape,F=void 0===V?"square":V,L=e.clearable,B=void 0===L||L,K=e.clearTrigger,P=void 0===K?"focus":K,R=e.clearIcon,J=void 0===R?"clear":R,q=e.renderLabel,E=e.renderLeftIcon,M=e.renderRightIcon,z=e.renderAction,D=e.onFocus,G=e.onBlur,H=e.onChange,Q=e.onClear,U=e.onClickInput,W=e.onSearch,X=e.onCancel,Y=e.style,Z=e.className,$=i()(e,_),ee=Object(I.useMemo)((function(){return void 0===a}),[a]),ne=Object(I.useState)(ee?t:a),ae=o()(ne,2),ce=ae[0],te=ae[1];Object(I.useEffect)((function(){te(a)}),[a]);var le=ee?ce:a;return Object(k.jsxs)(y.m,_objectSpread(_objectSpread({"className":d()(n="".concat(S.b("search",{"withaction":f||!!z}),"  ")).call(n,Z),"style":S.c([{"background":T},Y])},$),{},{"children":[Object(k.jsxs)(y.m,{"className":S.b("search__content",[F]),"children":[l?Object(k.jsx)(y.m,{"className":"van-search__label","children":l}):q,Object(k.jsx)(w.a,{"type":"text","leftIcon":E?"":p,"rightIcon":M?"":v,"focus":r,"error":s,"border":!1,"confirmType":"search","className":"van-search__field field-class","value":le,"disabled":u,"readonly":h,"clearable":B,"clearTrigger":P,"clearIcon":J,"maxlength":N,"inputAlign":b,"placeholder":x,"placeholder-style":g,"renderLeftIcon":E,"renderRightIcon":M,"style":"padding: 5px 10px 5px 0; background-color: transparent;","onBlur":G,"onFocus":D,"onChange":function _change(e){ee&&te(e.detail),null==H||H(e)},"onConfirm":W,"onClear":Q,"onClickInput":U})]}),(f||z)&&Object(k.jsx)(y.m,{"className":"van-search__action","hoverClass":"van-search__action--hover","hoverStayTime":70,"children":z||Object(k.jsx)(y.m,{"onClick":function _cancel(e){setTimeout((function(){te(""),null==X||X(),Object.defineProperty(e,"detail",{"value":""}),null==H||H(e)}),200)},"className":"cancel-class","children":C})})]}))},A=a(3),N=a.n(A),V=a(6),F=a.n(V),L=a(24),B=a.n(L),K=a(16),P=a.n(K),R=a(17),J=a.n(R),q=a(9),E=a.n(q),M=a(31),z=a(323),D=a(299),G=function(e){P()(Index,e);var n=J()(Index);function Index(){var e;return N()(this,Index),e=n.call(this),E()(B()(e),"state",{"value":""}),E()(B()(e),"onChange",(function(n){e.setState({"value":n.detail})})),E()(B()(e),"onSearch",(function(){e.state.value&&Object(M.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),E()(B()(e),"onClick",(function(){e.state.value&&Object(M.showToast)({"title":"搜索："+e.state.value,"icon":"none"})})),E()(B()(e),"onCancel",(function(){Object(M.showToast)({"title":"取消","icon":"none"})})),E()(B()(e),"onClear",(function(){Object(M.showToast)({"title":"清空","icon":"none"})})),e}return F()(Index,[{"key":"render","value":function render(){var e=this.state.value;return Object(k.jsx)(z.a,{"title":"Search 搜索","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsx)(D.a,{"title":"基本用法","children":Object(k.jsx)(T,{"defaultValue":e,"placeholder":"请输入搜索关键词","onSearch":this.onSearch})}),Object(k.jsx)(D.a,{"title":"事件监听","children":Object(k.jsx)(T,{"defaultValue":e,"showAction":!0,"placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onCancel":this.onCancel,"onClear":this.onClear})}),Object(k.jsx)(D.a,{"title":"搜索框内容对齐","children":Object(k.jsx)(T,{"defaultValue":e,"inputAlign":"center","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(D.a,{"title":"禁用搜索框","children":Object(k.jsx)(T,{"disabled":!0,"defaultValue":e,"placeholder":"请输入搜索关键词"})}),Object(k.jsx)(D.a,{"title":"自定义背景色","children":Object(k.jsx)(T,{"defaultValue":e,"shape":"round","background":"#4fc08d","placeholder":"请输入搜索关键词"})}),Object(k.jsx)(D.a,{"title":"自定义按钮","children":Object(k.jsx)(T,{"value":e,"label":"地址","shape":"round","placeholder":"请输入搜索关键词","onSearch":this.onSearch,"onChange":this.onChange,"renderAction":Object(k.jsx)(k.Fragment,{"children":Object(k.jsx)(y.m,{"onClick":this.onClick,"children":"搜索"})})})})]})})}}]),Index}(I.Component)}}]);