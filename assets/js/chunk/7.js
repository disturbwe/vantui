(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"282":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));var a=n(281),o=n(280),i=n(31),l=n(27),c=(n(283),n(44));function Page(t){var n=t.title,r=t.children;return Object(l.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.pageScrollTo)({"scrollTop":0})})),Object(c.jsxs)(o.m,{"className":"demo-page","children":[Object(c.jsxs)(o.m,{"className":"demo-nav","children":[Object(c.jsx)(a.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(c.jsxs)(o.m,{"className":"demo-nav__title","children":[n," "]})]}),r]})}}).call(this,n(121))},"283":function(e,t,n){},"284":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(3),o=n.n(a),i=n(6),l=n.n(i),c=n(16),r=n.n(c),s=n(17),u=n.n(s),d=n(280),m=n(27),f=(n(285),n(44)),g=function(e){r()(Index,e);var t=u()(Index);function Index(){return o()(this,Index),t.call(this)}return l()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,a=e.card;return Object(f.jsxs)(d.m,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(f.jsx)(d.m,{"className":"demo-block__title","children":n}),a?Object(f.jsx)(d.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(m.Component)},"285":function(e,t,n){},"288":function(e,t,n){var a=n(18),o=n(15),i=n(76),l=o("species");e.exports=function(e){return i>=51||!a((function(){var t=[];return(t.constructor={})[l]=function(){return{"foo":1}},1!==t[e](Boolean).foo}))}},"291":function(e,t,n){"use strict";var a=n(35),o=n(301).map;a({"target":"Array","proto":!0,"forced":!n(288)("map")},{"map":function map(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"739":function(e,t){function getDate(e){return new Date(e)}function formatDate(e){if(e)return(e=getDate(e)).getMonth()+1+"/"+e.getDate()}e.exports={"formatDate":formatDate,"formatFullDate":function formatFullDate(e){if(e)return console.info(e),(e=getDate(e)).getFullYear()+"/"+formatDate(e)},"formatMultiple":function formatMultiple(e){if(e.length)return"选择了 "+e.length+"个日期"},"formatRange":function formatRange(e){if(e.length)return formatDate(e[0])+" - "+formatDate(e[1])}}},"740":function(e,t,n){},"790":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(5),o=n.n(a),i=n(3),l=n.n(i),c=n(6),r=n.n(c),s=n(24),u=n.n(s),d=n(16),m=n.n(d),f=n(17),g=n.n(f),p=n(9),x=n.n(p),h=(n(291),n(27)),D=n(281),k=n(282),C=n(284),j=n(739),b=n.n(j),w=(n(740),n(44)),v=function(e){m()(Index,e);var t=g()(Index);function Index(){var e;return l()(this,Index),e=t.call(this),x()(u()(e),"state",{"date":{"maxRange":[],"selectSingle":null,"selectRange":[],"selectMultiple":[],"quickSelect1":null,"quickSelect2":[],"customColor":[],"customConfirm":[],"customRange":null,"customDayText":[],"customPosition":null},"type":"single","round":!0,"color":void 0,"minDate":Date.now(),"maxDate":new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate()).getTime(),"maxRange":void 0,"position":void 0,"formatter":void 0,"showConfirm":!1,"showCalendar":!1,"tiledMinDate":new Date(2012,0,10).getTime(),"tiledMaxDate":new Date(2012,2,20).getTime(),"confirmText":void 0,"confirmDisabledText":void 0,"firstDayOfWeek":0}),x()(u()(e),"onConfirm",(function(t){console.log(t,"date.".concat(e.state.id)),e.setState({"showCalendar":!1}),e.setState({"date":o()(o()({},e.state.date),{},x()({},"".concat(e.state.id),Array.isArray(t.detail.value)?t.detail.value.map((function(e){return null==e?void 0:e.valueOf()})):t.detail.value.valueOf()))})})),x()(u()(e),"onSelect",(function(e){console.log(e)})),x()(u()(e),"onUnselect",(function(e){console.log(e)})),x()(u()(e),"onClose",(function(){e.setState({"showCalendar":!1})})),x()(u()(e),"onOpen",(function(){console.log("open")})),x()(u()(e),"onOpened",(function(){console.log("opened")})),x()(u()(e),"onClosed",(function(){console.log("closed")})),x()(u()(e),"resetSettings",(function(){e.setState({"round":!0,"color":null,"minDate":Date.now(),"maxDate":new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate()).getTime(),"maxRange":null,"position":"bottom","formatter":null,"showConfirm":!0,"confirmText":"确定","confirmDisabledText":null})})),x()(u()(e),"show",(function(t){e.resetSettings();var n=t.currentTarget.dataset,a=n.type,o=n.id,i={"id":o,"type":a,"showCalendar":!0};switch(o){case"quickSelect1":case"quickSelect2":i.showConfirm=!1;break;case"customColor":i.color="#07c160";break;case"customConfirm":i.confirmText="完成",i.confirmDisabledText="请选择结束时间";break;case"customRange":i.minDate=new Date(2010,0,1).getTime(),i.maxDate=new Date(2010,0,31).getTime();break;case"customDayText":i.minDate=new Date(2010,4,1).getTime(),i.maxDate=new Date(2010,4,31).getTime(),i.formatter=e.dayFormatter;break;case"customPosition":i.round=!1,i.position="right";break;case"maxRange":i.maxRange=3}e.setState(i)})),x()(u()(e),"dayFormatter",(function(e){var t=e.date.getMonth()+1,n=e.date.getDate();return 5===t&&(1===n?e.topInfo="劳动节":4===n?e.topInfo="五四青年节":11===n&&(e.text="今天")),"start"===e.type?e.bottomInfo="入店":"end"===e.type&&(e.bottomInfo="离店"),e})),e}return r()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.date,a=t.tiledMinDate,o=t.tiledMaxDate,i=t.firstDayOfWeek,l=t.showCalendar,c=t.type,r=t.color,s=t.round,u=t.position,d=t.minDate,m=t.maxDate,f=t.maxRange,g=t.formatter,p=t.showConfirm,x=t.confirmText,h=t.confirmDisabledText;return Object(w.jsx)(k.a,{"title":"Calendar 日历","children":Object(w.jsxs)(w.Fragment,{"children":[Object(w.jsxs)(C.a,{"title":"基础用法","children":[Object(w.jsx)(D.f,{"isLink":!0,"title":"选择单个日期","value":b.a.formatFullDate(n.selectSingle),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"single","id":"selectSingle"}},"target":{"dataset":{"type":"single","id":"selectSingle"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"选择多个日期","value":b.a.formatMultiple(n.selectMultiple),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"multiple","id":"selectMultiple"}},"target":{"dataset":{"type":"multiple","id":"selectMultiple"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"选择日期区间","value":b.a.formatRange(n.selectRange),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"selectRange"}},"target":{"dataset":{"type":"range","id":"selectRange"}}})}})]}),Object(w.jsxs)(C.a,{"title":"快捷选择","children":[Object(w.jsx)(D.f,{"isLink":!0,"title":"选择单个日期","value":b.a.formatFullDate(n.quickSelect1),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"single","id":"quickSelect1"}},"target":{"dataset":{"type":"single","id":"quickSelect1"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"选择日期区间","value":b.a.formatRange(n.quickSelect2),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"quickSelect2"}},"target":{"dataset":{"type":"range","id":"quickSelect2"}}})}})]}),Object(w.jsxs)(C.a,{"title":"自定义日历","children":[Object(w.jsx)(D.f,{"isLink":!0,"title":"自定义颜色","value":b.a.formatRange(n.customColor),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"customColor"}},"target":{"dataset":{"type":"range","id":"customColor"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"自定义日期范围","value":b.a.formatFullDate(n.customRange),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"single","id":"customRange"}},"target":{"dataset":{"type":"single","id":"customRange"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"自定义按钮文字","value":b.a.formatRange(n.customConfirm),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"customConfirm"}},"target":{"dataset":{"type":"range","id":"customConfirm"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"自定义日期文案","value":b.a.formatRange(n.customDayText),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"customDayText"}},"target":{"dataset":{"type":"range","id":"customDayText"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"自定义弹出位置","value":b.a.formatFullDate(n.customPosition),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"single","id":"customPosition"}},"target":{"dataset":{"type":"single","id":"customPosition"}}})}}),Object(w.jsx)(D.f,{"isLink":!0,"title":"日期区间最大范围","value":b.a.formatRange(n.maxRange),"onClick":function onClick(t){e.show({"detail":t.detail,"currentTarget":{"dataset":{"type":"range","id":"maxRange"}},"target":{"dataset":{"type":"range","id":"maxRange"}}})}})]}),Object(w.jsx)(C.a,{"title":"平铺展示","children":Object(w.jsx)(D.d,{"title":"日历","poppable":!1,"showConfirm":!1,"minDate":a,"maxDate":o,"firstDayOfWeek":i,"className":"tiled-calendar"})}),Object(w.jsx)(D.d,{"show":l,"type":c,"color":r,"round":s,"position":u,"minDate":d,"maxDate":m,"maxRange":f,"formatter":g,"showConfirm":p,"confirmText":x,"confirmDisabledText":h,"firstDayOfWeek":i,"onConfirm":this.onConfirm,"onSelect":this.onSelect,"onUnselect":this.onUnselect,"onOpen":this.onOpen,"onOpened":this.onOpened,"onClose":this.onClose,"onClosed":this.onClosed})]})})}}]),Index}(h.Component)}}]);