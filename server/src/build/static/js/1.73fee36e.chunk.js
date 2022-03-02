/*! For license information please see 1.73fee36e.chunk.js.LICENSE.txt */
(this["webpackJsonpanime-client"]=this["webpackJsonpanime-client"]||[]).push([[1],{126:function(t,n,a){"use strict";a.d(n,"a",(function(){return r})),a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"d",(function(){return c}));var e=a(0);function r(t){return Object(e.a)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}}]})(t)}function i(t){return Object(e.a)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}}]})(t)}function o(t){return Object(e.a)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"}}]})(t)}function c(t){return Object(e.a)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}}]})(t)}},127:function(t,n,a){"use strict";a.d(n,"a",(function(){return r})),a.d(n,"b",(function(){return i}));var e=a(0);function r(t){return Object(e.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"}}]})(t)}function i(t){return Object(e.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}},{tag:"path",attr:{d:"M13 7h-2v6h6v-2h-4z"}}]})(t)}},133:function(t,n,a){var e=a(1),r="undefined"===typeof window?{show:function(){},hide:function(){},config:function(){}}:a(158),i=0,o=function(t){return t.topbar||r};function c(t){return e.useEffect((function(){return 0===i&&o(t).show(),i++,function(){0===--i&&o(t).hide()}}),[]),null}c.config=r.config,t.exports=c},158:function(t,n,a){var e;(function(r,i){"use strict";!function(){for(var t=0,n=["ms","moz","webkit","o"],a=0;a<n.length&&!r.requestAnimationFrame;++a)r.requestAnimationFrame=r[n[a]+"RequestAnimationFrame"],r.cancelAnimationFrame=r[n[a]+"CancelAnimationFrame"]||r[n[a]+"CancelRequestAnimationFrame"];r.requestAnimationFrame||(r.requestAnimationFrame=function(n,a){var e=(new Date).getTime(),i=Math.max(0,16-(e-t)),o=r.setTimeout((function(){n(e+i)}),i);return t=e+i,o}),r.cancelAnimationFrame||(r.cancelAnimationFrame=function(t){clearTimeout(t)})}();var o,c,s,l,u,d={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},f=function(){o.width=r.innerWidth,o.height=5*d.barThickness;var t=o.getContext("2d");t.shadowBlur=d.shadowBlur,t.shadowColor=d.shadowColor;var n=t.createLinearGradient(0,0,o.width,0);for(var a in d.barColors)n.addColorStop(a,d.barColors[a]);t.lineWidth=d.barThickness,t.beginPath(),t.moveTo(0,d.barThickness/2),t.lineTo(Math.ceil(l*o.width),d.barThickness/2),t.strokeStyle=n,t.stroke()},h={config:function(t){for(var n in t)d.hasOwnProperty(n)&&(d[n]=t[n])},show:function(){u||(u=!0,null!==s&&r.cancelAnimationFrame(s),o||function(){var t,n,a,e=(o=i.createElement("canvas")).style;e.position="fixed",e.top=e.left=e.right=e.margin=e.padding=0,e.zIndex=100001,e.display="none",d.className&&o.classList.add(d.className),i.body.appendChild(o),n="resize",a=f,(t=r).addEventListener?t.addEventListener(n,a,!1):t.attachEvent?t.attachEvent("on"+n,a):t["on"+n]=a}(),o.style.opacity=1,o.style.display="block",h.progress(0),d.autoRun&&function t(){c=r.requestAnimationFrame(t),h.progress("+"+.05*Math.pow(1-Math.sqrt(l),2))}())},progress:function(t){return"undefined"===typeof t||("string"===typeof t&&(t=(t.indexOf("+")>=0||t.indexOf("-")>=0?l:0)+parseFloat(t)),l=t>1?1:t,f()),l},hide:function(){u&&(u=!1,null!=c&&(r.cancelAnimationFrame(c),c=null),function t(){if(h.progress("+.1")>=1&&(o.style.opacity-=.05,o.style.opacity<=.05))return o.style.display="none",void(s=null);s=r.requestAnimationFrame(t)}())}};"object"===typeof t.exports?t.exports=h:void 0===(e=function(){return h}.call(n,a,n,t))||(t.exports=e)}).call(this,window,document)}}]);
//# sourceMappingURL=1.73fee36e.chunk.js.map