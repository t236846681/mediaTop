(function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="7039")})({"016b":function(t,e){t.exports="/static/nav1_active.png"},1338:function(t,e){t.exports="/static/nav2_active.png"},"24fb":function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"===typeof btoa){var o=r(i),a=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=i(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"===typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},"3c1d":function(t,e){t.exports="/static/banner.jpg"},"3d38":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\u6bcf\u4e2a\u9875\u9762\u516c\u5171css */",""]),t.exports=e},"4e75":function(t,e,n){var i=n("3d38");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("7f7e").default;r("e613dbd0",i,!0,{sourceMap:!1,shadowMode:!1})},5104:function(t,e){t.exports="/static/white_line.png"},"5f33":function(t,e,n){var i=n("24fb"),r=n("b8d8"),o=n("915e"),a=n("a108"),s=n("e091"),c=n("016b"),u=n("1338"),l=n("caa5"),f=n("3c1d"),d=n("5104");e=i(!1);var p=r(o),v=r(a),_=r(s),b=r(c),g=r(u),x=r(l),m=r(f),h=r(d);e.push([t.i,".bottom-nav{position:fixed;left:0;bottom:0;height:88rpx;width:100%;background:#fff;box-shadow:0 1px 0 0 #d9d9d9;display:-webkit-box;display:-webkit-flex;display:flex;border-top:1px solid #d9d9d9}.bottom-nav__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.bottom-nav__item:nth-of-type(1) .bottom-nav__icon{background:url("+p+") no-repeat;background-size:100%}.bottom-nav__item:nth-of-type(2) .bottom-nav__icon{background:url("+v+") no-repeat;background-size:100%}.bottom-nav__item:nth-of-type(3) .bottom-nav__icon{background:url("+_+") no-repeat;background-size:100%}.bottom-nav__item.active .bottom-nav__txt{color:#f63636}.bottom-nav__item.active:nth-of-type(1) .bottom-nav__icon{background:url("+b+") no-repeat;background-size:100%}.bottom-nav__item.active:nth-of-type(2) .bottom-nav__icon{background:url("+g+") no-repeat;background-size:100%}.bottom-nav__item.active:nth-of-type(3) .bottom-nav__icon{background:url("+x+") no-repeat;background-size:100%}.bottom-nav__icon{width:45rpx;height:45rpx;margin:13rpx 0 12rpx 0}.bottom-nav__txt{font-size:20rpx;color:#999}.menu-list{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.menu-list__border{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.menu-list__item{width:50%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;padding:93rpx 0 93rpx;border-bottom:1px solid #f1f1f1}.menu-list__item:nth-of-type(odd) .menu-list__border{border-right:1rpx solid #f1f1f1}.menu-list__icon{width:109rpx;height:109rpx}.header-box{width:100%;margin:0;padding:0;background:url("+m+") no-repeat;background-size:cover;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header-box__title{font-size:36rpx;color:#333;margin-top:113rpx}.header-box__cash{color:#ff7d7d;font-size:74rpx;margin:30rpx 0 60rpx 0}.header-box__detail{color:#2d94fe;font-size:30rpx;margin-bottom:60rpx}.header-box__white-bg{background:url("+h+") no-repeat bottom;background-size:100%;height:140rpx;width:100%}",""]),t.exports=e},"6b03":function(t,e,n){"use strict";n.r(e);var i=n("4e75"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},7039:function(t,e,n){"use strict";function i(){function t(t){var e=n("6b03");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("7afd"),"undefined"!==typeof plus?i():document.addEventListener("plusready",i)},"7afd":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("a929").default)}))},"7f7e":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],s=o[1],c=o[2],u=o[3],l={id:t+":"+r,css:s,media:c,sourceMap:u};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}n.r(e),n.d(e,"default",(function(){return v}));var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,r){u=n,f=r||{};var a=i(t,e);return _(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r],c=o[s.id];c.refs--,n.push(c)}e?(a=i(t,e),_(a)):a=[];for(r=0;r<n.length;r++){c=n[r];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function _(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(g(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(g(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,i=document.querySelector("style["+d+'~="'+t.id+'"]');if(i){if(u)return l;i.parentNode.removeChild(i)}if(p){var r=c++;i=s||(s=b()),e=m.bind(null,i,r,!1),n=m.bind(null,i,r,!0)}else i=b(),e=h.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,i){var r=n?"":O(i.css);if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function h(t,e){var n=O(e.css),i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),f.ssrId&&t.setAttribute(d,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var w=/([+-]?\d+(\.\d+)?)[r|u]px/g,y=/var\(--status-bar-height\)/gi,k=/var\(--window-top\)/gi,C=/var\(--window-bottom\)/gi,$=!1;function O(t){if(!uni.canIUse("css.var")){!1===$&&($=plus.navigator.getStatusbarHeight());var e={statusBarHeight:$,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(y,e.statusBarHeight+"px").replace(k,e.top+"px").replace(C,e.bottom+"px")}return t.replace(/\{[\s\S]+?\}/g,(function(t){return t.replace(w,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"915e":function(t,e){t.exports="/static/nav1.png"},"9af8":function(t,e,n){var i=n("5f33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("7f7e").default;r("30d51936",i,!0,{sourceMap:!1,shadowMode:!1})},a108:function(t,e){t.exports="/static/nav2.png"},a929:function(t,e,n){"use strict";n.r(e);var i=n("ea5f"),r=n("d83c");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("bd71");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},b767:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{wxsProps:{}}},components:{}};e.default=i},b8d8:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):0===t.indexOf("/")?t.substr(1):t)}},bd71:function(t,e,n){"use strict";var i=n("9af8"),r=n.n(i);r.a},caa5:function(t,e){t.exports="/static/nav3_active.png"},d83c:function(t,e,n){"use strict";n.r(e);var i=n("b767"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},e091:function(t,e){t.exports="/static/nav3.png"},ea5f:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[n("v-uni-text",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[t._v("2018\u5e7411\u6708\u5de5\u8d44\u603b\u6536\u5165")]),n("v-uni-text",{staticClass:t._$g(3,"sc"),attrs:{_i:3}},[t._v("37345.00")]),n("v-uni-text",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[t._v("\u8be6\u7ec6\u5de5\u8d44\u5355>")]),n("v-uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}})],1),n("v-uni-view",{staticClass:t._$g(6,"sc"),attrs:{_i:6}},[n("v-uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[n("v-uni-view",{staticClass:t._$g(8,"sc"),attrs:{_i:8}},[n("v-uni-cover-image",{staticClass:t._$g(9,"sc"),attrs:{src:"/static/menu1.png",_i:9}}),n("v-uni-text",{attrs:{_i:10}},[t._v("\u4e2a\u7a0e\u7533\u62a5")])],1)],1),n("v-uni-view",{staticClass:t._$g(11,"sc"),attrs:{_i:11}},[n("v-uni-view",{staticClass:t._$g(12,"sc"),attrs:{_i:12}},[n("v-uni-cover-image",{staticClass:t._$g(13,"sc"),attrs:{src:"/static/menu2.png",_i:13}}),n("v-uni-text",{attrs:{_i:14}},[t._v("\u4e2a\u7a0e\u8ba1\u7b97\u5668")])],1)],1),n("v-uni-view",{staticClass:t._$g(15,"sc"),attrs:{_i:15}},[n("v-uni-view",{staticClass:t._$g(16,"sc"),attrs:{_i:16}},[n("v-uni-cover-image",{staticClass:t._$g(17,"sc"),attrs:{src:"/static/menu3.png",_i:17}}),n("v-uni-text",{attrs:{_i:18}},[t._v("\u7535\u5b50\u94b1\u5305")])],1)],1),n("v-uni-view",{staticClass:t._$g(19,"sc"),attrs:{_i:19}},[n("v-uni-view",{staticClass:t._$g(20,"sc"),attrs:{_i:20}},[n("v-uni-cover-image",{staticClass:t._$g(21,"sc"),attrs:{src:"/static/menu4.png",_i:21}}),n("v-uni-text",{attrs:{_i:22}},[t._v("\u7535\u5b50\u5408\u540c")])],1)],1)],1),n("v-uni-view",{staticClass:t._$g(23,"sc"),attrs:{_i:23}},[n("v-uni-view",{staticClass:t._$g(24,"sc"),attrs:{_i:24}},[n("v-uni-view",{staticClass:t._$g(25,"sc"),attrs:{_i:25}}),n("v-uni-text",{staticClass:t._$g(26,"sc"),attrs:{_i:26}},[t._v("\u9996\u9875")])],1),n("v-uni-view",{staticClass:t._$g(27,"sc"),attrs:{_i:27}},[n("v-uni-view",{staticClass:t._$g(28,"sc"),attrs:{_i:28}}),n("v-uni-text",{staticClass:t._$g(29,"sc"),attrs:{_i:29}},[t._v("\u6536\u5165")])],1),n("v-uni-view",{staticClass:t._$g(30,"sc"),attrs:{_i:30}},[n("v-uni-view",{staticClass:t._$g(31,"sc"),attrs:{_i:31}}),n("v-uni-text",{staticClass:t._$g(32,"sc"),attrs:{_i:32}},[t._v("\u6211\u7684")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s,c,u){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(f.components,p)&&(f.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))}});