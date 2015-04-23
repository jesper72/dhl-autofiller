/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false, options: false, popup: false */
/* Event listeners for popup.js from index.html */

$('document').ready(function () {
  popup.init();
});

$('#reload').on('click', function () {
  popup.loadCustomers();
});

$('#customers').on('change', function () {
  popup.populateCustomerData();
});

$('#send_info').on('click', function () {
  popup.fillDhlForm();
});
/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false */

var options =  {

  /**
    * @public
    *
    * Init the component
    */
  init: function () {
    this.load();
  },

  /**
  * @public
    *
    * Get the values from loacal storage and send them to setOptionsDOM
    *
    * @return {Object} An object with endpoint, headers, our reference and goods item read from localStorage
    */
  load: function () {
    var endpoint = localStorage.endpoint, headers = localStorage.headers, header_json = JSON.parse(headers), our_reference = localStorage.our_reference, goods_item = localStorage.goods_item;
    this.setOptionsDOM(endpoint, header_json, our_reference, goods_item);
    return {endpoint: endpoint, headers: headers, our_reference: our_reference, goods_item: goods_item};
  },

  /**
  * @public
  *
    * Store the value of the endpoint field in local storage
    *
    * @param {string} endpoint an url
    * @return {String} Endpoint value from localStorage
    */
  setEndpoint: function (endpoint) {
    localStorage.endpoint = endpoint;
    return localStorage.endpoint;
  },

  /**
  * @public
  *
    * Store the value of the headers field in local storage
    *
    * @param {jQueryDOMObjects} jquery compatible array och DOM objects
    * @return {String} Headers value from localStorage
    */
  setHeaders: function (header_fields) {
    var header_data = [], key, value, type, json;

    $(header_fields).each(function () {
      type = $(this).data('type');

      if (type === 'key') {
        key = $(this).val();
      } else {
        value = $(this).val();

        if (key.length > 0 && value.length > 0) {
          header_data.push({key: key, value: value});
        }
      }
    });

    json = JSON.stringify(header_data);
    localStorage.headers = json;

    return localStorage.headers;
  },

  /**
  * @public
  *
    * Store the value of the our_reference field in local storage
    *
    * @param {string} our reference a string value
    * @return {String} Our reference value from localStorage
    */
  setOurReference: function (our_reference) {
    localStorage.our_reference = our_reference;
    return localStorage.our_reference;
  },

  /**
  * @public
  *
    * Store the value of the goods item field in local storage
    *
    * @param {string}  goods item string value
    * @return {String}  goods item value from localStorage
    */
  setGoodsItem: function (goods_item) {
    localStorage.goods_item = goods_item;
    return localStorage.goods_item;
  },

  /**
  * @public
  *
    * Test the connection to the endpoint by sending an XHR
    * Calls this.testData on success
    */
  testConnection: function () {
    var endpoint = localStorage.endpoint, _this = this, request = new XMLHttpRequest(), headers = localStorage.headers, json_headers = JSON.parse(headers), i;
    this.testResult('');
    request.open("GET", endpoint, true);

    for (i = 0; i < json_headers.length; i++) {
      request.setRequestHeader(json_headers[i].key, json_headers[i].value);
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          _this.testResult('OK', true);
        } else {
          _this.testResult('Fail', true);
        }
      }
    };

    request.send(null);
  },

  /**
  * @private
  *
    * Set values in the DOM input fields
    *
    * @param {string} endpoint an url
    * @param {JSONArray} headers key value array
    * @param {string} name to be defaulted in the Our reference field
    * @param {string} type of goods that will be defaulted in the Type of goods field
    */
  setOptionsDOM: function (endpoint, headers, our_reference, goods_item) {

    var header_dom = $('.header-input'), endpoint_dom = $('#endpoint'), our_reference_dom = $('#our_reference'), goods_item_dom = $('#goods_item'), field_pair, i, key, value;

    if (endpoint) {
      endpoint_dom.val(endpoint);
    }

    if (headers) {
      field_pair = 0;

      for (i = 0; i < headers.length; i++) {
        key = headers[i].key;
        value = headers[i].value;

        header_dom[field_pair].value = key;
        header_dom[field_pair + 1].value = value;

        field_pair += 2;
      }
    }

    if (our_reference) {
      our_reference_dom.val(our_reference);
    }

    if (goods_item) {
      goods_item_dom.val(goods_item);
    }
  },

  /**
  * @private
  *
    * Display the test result in the test_result object
    *
    * @param {string} message, a message to display
    * @param {boolean} append, determines if the message shall be appended to the existing message or not
    */
  testResult: function (message, append) {
    if (append) {
      $('#test_result').append(message);
    } else {
      $('#test_result').html(message);
    }
  }

};




/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false, options: false, popup: false */
/* Event listeners  for options.js from options.html */

$('document').ready(function () {
  options.init();
});

$('#endpoint').on('keyup', function () {
  var endpoint = $(this).val();
  options.setEndpoint(endpoint);
});

$('#our_reference').on('keyup', function () {
  var our_reference = $(this).val();
  options.setOurReference(our_reference);
});

$('#goods_item').on('keyup', function () {
  var goods_item = $(this).val();
  options.setGoodsItem(goods_item);
});

$('#test_connection').on('click', function () {
  options.testConnection();
});

$('.header-input').on('keyup', function () {
  var header_fields = $('.header-input');
  options.setHeaders(header_fields);
});


/*global localStorage: false, console: false, $: false, chrome: false, XMLHttpRequest: false, window: false */

var popup = {

  /**
    * @private
    *
    * Variable to hold the JSONArray of customers
    */
  customers: null,

  /**
    * @private
    *
    * Variable to hold the current URL of the active tab
    */
  current_url: null,

  /**
    * @private
    *
    * Variable to hold the two URLs we need to identify which form we are filling
    */
  target_urls: {register_shipment: 'http://www.dhlmultishipping.se/transnet/register.do?method=view', add_address: 'http://www.dhlmultishipping.se/transnet/organisation.jsp?organisation=new'},

  /**
    * @private
    *
    * Variable to hold the congiguration for the different shippment types received from the json feed and
    * match them to DHL-ID:s
    */
  shippment_services: [{'name': 'DHL Paket', 'id': '182875'}, {'name': 'DHL Servicepoint', 'id': '182880'}],

  /**
    * @public
    *
    * Init the component
    */
  init: function () {
    this.getTabUrl();
    this.loadCustomers();
  },

  /**
  * @public
  *
  * Select service type in the DHL form
  * 
  */
  selectShippment: function (shippment_service) {

    var service = this.getShippingServiecByName(shippment_service);
    var code = 'if (document.getElementsByName("templatePK")[0].value != "' + service + '") {' +
        'document.getElementsByName("templatePK")[0].value = "' + service + '";' +
        'document.forms[0].submit();document.forms[0].templatePK.disabled=true;' +
        '}';

    chrome.tabs.executeScript(null, {code: code});
  },

  /**
  * @public
  *
  * Sends an XHR GET request to grab customers. The XHR's 'onload'
  * event is hooks up to the 'createCustomerOptions' method through bind.
  */
  loadCustomers: function () {

    var request = new XMLHttpRequest(), headers = localStorage.headers, json_headers = JSON.parse(headers), i;

    // Reset the input fields
    $('#id').val('');
    $('#name').val('');
    $('#address').val('');
    $('#zipcode').val('');
    $('#city').val('');
    $('#phone').val('');
    $('#email').val('');

    var endpoint = localStorage.endpoint;

    if (endpoint.length === 0) {
      var msg = chrome.i18n.getMessage("noEndpointConfiguredText");
      this.error(msg);
      return;
    }
    request.open("GET", endpoint, true);

    for (i = 0; i < json_headers.length; i++) {
      request.setRequestHeader(json_headers[i].key, json_headers[i].value);
    }

    request.onload = this.createCustomerOptions.bind(this);
    request.send(null);
  },

  /**
  * @public
  *
  * Populate the customer data in the related fields
  */
  populateCustomerData: function () {
    var customerId = $('#customers').val(), customer = this.getCustomerById(customerId);

    this.selectShippment(customer.shipping);
    $('#id').val(customer.id);
    $('#name').val(customer.name);
    $('#address').val(customer.address);
    $('#zipcode').val(customer.zipcode);
    $('#city').val(customer.city);
    $('#phone').val(customer.phone);
    $('#email').val(customer.email);
  },

  /**
  * public
  *
  * Get the data from the input fields, build a javascript string
  * and send them through chrome.tab.executeScript to the current
  * active tab
  */
  fillDhlForm: function () {

    var id = $('#id').val(), name = $('#name').val(), address = $('#address').val(), zipcode = $('#zipcode').val(), city = $('#city').val(), phone = $('#phone').val(), email = $('#email').val(), our_reference = localStorage.our_reference, goods_item = localStorage.goods_item, code;
    this.getTabUrl();

    if (this.target_urls.register_shipment === this.current_url) {
      code = 'var evt = document.createEvent("MouseEvents");' +
        'evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); ' +
        'var cb = document.getElementById("consignee_mode_other"); ' +
        'cb.dispatchEvent(evt);' +
        'document.getElementById("consignee_temp.id").value = "' + id + '";' +
        'document.getElementById("consignee_temp.name").value = "' + name + '";' +
        'document.getElementById("consignee_temp.addressline[0]").value = "' + address + '";' +
        'document.getElementById("consignee_temp.postcode").value = "' + zipcode + '";' +
        'document.getElementById("consignee_temp.city").value = "' + city + '";' +
        'document.getElementById("consignee_temp.contactPerson").value = "' + name + '";' +
        'document.getElementById("consignee_temp.mobile").value = "' + phone + '";' +
        'document.getElementById("consignee_temp.phone").value = "' + phone + '";' +
        'document.getElementById("consignee_temp.email").value = "' + email + '";' +
        'document.getElementsByName("consignee_temp_save")[0].checked = true;' +
        'document.getElementById("orderNo").value = "' + our_reference + '";' +
        'document.getElementById("consigneeReference").value = "' + name + '";' +
        'document.getElementById("goodsItemList.goodsItems[0].goodsItemReferences[1].value").value="' + goods_item + '";' +
        'var evt2 = document.createEvent("MouseEvents");' +
        'evt2.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); ' +
        'document.getElementsByName("notify")[0].dispatchEvent(evt2);' +
        'document.getElementById("notifySmsValue").value = "' + phone + '";';
    } else {
      code = 'document.getElementById("id").value = "' + id + '";' +
        'document.getElementById("name").value = "' + name + '";' +
        'document.getElementById("addressline.0").value = "' + address + '";' +
        'document.getElementById("postcode").value = "' + zipcode + '";' +
        'document.getElementById("city").value = "' + city + '";' +
        'document.getElementById("contactPerson").value = "' + name + '";' +
        'document.getElementById("phone").value = "' + phone + '";' +
        'document.getElementById("mobile").value = "' + phone + '";' +
        'document.getElementById("email").value = "' + email + '";' +
        'document.getElementById("type.consignee").checked = true;' +
        'document.getElementById("type.notify").checked = true;';
    }
    chrome.tabs.executeScript(null, {code: code});
  },

  /**
    * @private
    *
    * Get the Shipping Service ID based upon the name service name
    */
  getShippingServiecByName: function (shippment_service_name) {
    var service = '', i;
    for (i = 0; i < this.shippment_services.length; i++) {
      if (this.shippment_services[i].name === shippment_service_name) {
        service = this.shippment_services[i].id;
        break;
      }
    }
    return service;
  },

  /**
    * @private
    *
    * Go get the current tab URL and store it in this.current_url;
    */
  getTabUrl: function () {
    var _this = this;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      _this.current_url = tabs[0].url;
    });
  },

  /**
    * @private
    *
    * Search the 'customers' array for a customer with the passed customerId as id
    *
    * @param {number} customerId, a customer ID
    * @return {JSONobject} customer
    */
  getCustomerById: function (id) {
    return this.customers[id];
  },

  /**
   * @private
   *
   * Updates the #customers select input with new values based on the passed
   * customers object.
   *
   * @param {Object} customers, Customers objects with customer ids as keys
   * and the corresponding customer as value.
   * @param {Number|String} customers.id
   * @param {String} customers.name
   */
  updateCustomerOptionsDOM: function (customers) {
    var options, customer, select_customer_msg = chrome.i18n.getMessage("selectCustomerText");

    options = '<option value="">' + select_customer_msg + '</option>';

    Object.keys(customers).forEach(function (key) {
      customer = customers[key];
      options += '<option value="' + customer.id + '">' + customer.name + '</option>';
    });

    $('#customers').html(options);
  },

  /**
   * @private
   *
   * Parses event responseText into a customer object.
   *
   * @param {responseText} responseText, JSON encoded Array of customer objects.
   * @return {Object} An object with customer ids as keys and the corresponding
   * customer as value.
   */
  parseResposetextToCustomers: function (responseText) {
    var customerArray, customers;

    customerArray = JSON.parse(responseText);
    customers = {};

    customerArray.forEach(function (customer) {
      customers[customer.id] = customer;
    });

    return customers;
  },

  /**
   * @private
   *
   * Create the customer options in the 'customers' select object
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   */
  createCustomerOptions: function (event) {
    var responseText, customers;

    responseText = event.target.responseText;
    customers = this.parseResposetextToCustomers(responseText);
    this.updateCustomerOptionsDOM(customers);
    this.customers = customers;
  },

  /**
  * @private
  *
  * Display an error message in the error container
  *
  * @param {string} message, the message to be displayed
  */
  error: function (message) {
    var errorContainer = $('#error');
    errorContainer.html(message);
  }

};



/*
 *  replace the text attributes with strings from the translation resources
 *
 **/
$('[data-resource]').each(function() {
  var el = $(this);
  var resourceName = el.data('resource');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.text(resourceText);
});


/*
 *  replace the placeholder values with strings from the translation resources
 *
 **/
$('[data-placeholder]').each(function() {
  var el = $(this);
  var resourceName = el.data('placeholder');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.data('placeholder', resourceText);
});


/*
 *  replace the options values with text strings from the translation resources
 *
 **/
$('[data-option]').each(function() {
  var el = $(this);
  var resourceName = el.data('option');
  var resourceText = chrome.i18n.getMessage(resourceName);
  el.text(resourceText);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcHRvanMuanMiLCJpbmRleF9ldmVudHMuanMiLCJvcHRpb25zLmpzIiwib3B0aW9uc19ldmVudHMuanMiLCJwb3B1cC5qcyIsInRyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFplcHRvIHYxLjEuNiAtIHplcHRvIGV2ZW50IGFqYXggZm9ybSBpZSAtIHplcHRvanMuY29tL2xpY2Vuc2UgKi9cbnZhciBaZXB0bz1mdW5jdGlvbigpe2Z1bmN0aW9uIEwodCl7cmV0dXJuIG51bGw9PXQ/U3RyaW5nKHQpOmpbUy5jYWxsKHQpXXx8XCJvYmplY3RcIn1mdW5jdGlvbiBaKHQpe3JldHVyblwiZnVuY3Rpb25cIj09TCh0KX1mdW5jdGlvbiBfKHQpe3JldHVybiBudWxsIT10JiZ0PT10LndpbmRvd31mdW5jdGlvbiAkKHQpe3JldHVybiBudWxsIT10JiZ0Lm5vZGVUeXBlPT10LkRPQ1VNRU5UX05PREV9ZnVuY3Rpb24gRCh0KXtyZXR1cm5cIm9iamVjdFwiPT1MKHQpfWZ1bmN0aW9uIE0odCl7cmV0dXJuIEQodCkmJiFfKHQpJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk9PU9iamVjdC5wcm90b3R5cGV9ZnVuY3Rpb24gUih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdC5sZW5ndGh9ZnVuY3Rpb24gayh0KXtyZXR1cm4gcy5jYWxsKHQsZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXR9KX1mdW5jdGlvbiB6KHQpe3JldHVybiB0Lmxlbmd0aD4wP24uZm4uY29uY2F0LmFwcGx5KFtdLHQpOnR9ZnVuY3Rpb24gRih0KXtyZXR1cm4gdC5yZXBsYWNlKC86Oi9nLFwiL1wiKS5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpdKS9nLFwiJDFfJDJcIikucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZyxcIiQxXyQyXCIpLnJlcGxhY2UoL18vZyxcIi1cIikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBxKHQpe3JldHVybiB0IGluIGY/Zlt0XTpmW3RdPW5ldyBSZWdFeHAoXCIoXnxcXFxccylcIit0K1wiKFxcXFxzfCQpXCIpfWZ1bmN0aW9uIEgodCxlKXtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgZXx8Y1tGKHQpXT9lOmUrXCJweFwifWZ1bmN0aW9uIEkodCl7dmFyIGUsbjtyZXR1cm4gdVt0XXx8KGU9YS5jcmVhdGVFbGVtZW50KHQpLGEuYm9keS5hcHBlbmRDaGlsZChlKSxuPWdldENvbXB1dGVkU3R5bGUoZSxcIlwiKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksXCJub25lXCI9PW4mJihuPVwiYmxvY2tcIiksdVt0XT1uKSx1W3RdfWZ1bmN0aW9uIFYodCl7cmV0dXJuXCJjaGlsZHJlblwiaW4gdD9vLmNhbGwodC5jaGlsZHJlbik6bi5tYXAodC5jaGlsZE5vZGVzLGZ1bmN0aW9uKHQpe3JldHVybiAxPT10Lm5vZGVUeXBlP3Q6dm9pZCAwfSl9ZnVuY3Rpb24gQihuLGkscil7Zm9yKGUgaW4gaSlyJiYoTShpW2VdKXx8QShpW2VdKSk/KE0oaVtlXSkmJiFNKG5bZV0pJiYobltlXT17fSksQShpW2VdKSYmIUEobltlXSkmJihuW2VdPVtdKSxCKG5bZV0saVtlXSxyKSk6aVtlXSE9PXQmJihuW2VdPWlbZV0pfWZ1bmN0aW9uIFUodCxlKXtyZXR1cm4gbnVsbD09ZT9uKHQpOm4odCkuZmlsdGVyKGUpfWZ1bmN0aW9uIEoodCxlLG4saSl7cmV0dXJuIFooZSk/ZS5jYWxsKHQsbixpKTplfWZ1bmN0aW9uIFgodCxlLG4pe251bGw9PW4/dC5yZW1vdmVBdHRyaWJ1dGUoZSk6dC5zZXRBdHRyaWJ1dGUoZSxuKX1mdW5jdGlvbiBXKGUsbil7dmFyIGk9ZS5jbGFzc05hbWV8fFwiXCIscj1pJiZpLmJhc2VWYWwhPT10O3JldHVybiBuPT09dD9yP2kuYmFzZVZhbDppOnZvaWQocj9pLmJhc2VWYWw9bjplLmNsYXNzTmFtZT1uKX1mdW5jdGlvbiBZKHQpe3RyeXtyZXR1cm4gdD9cInRydWVcIj09dHx8KFwiZmFsc2VcIj09dD8hMTpcIm51bGxcIj09dD9udWxsOit0K1wiXCI9PXQ/K3Q6L15bXFxbXFx7XS8udGVzdCh0KT9uLnBhcnNlSlNPTih0KTp0KTp0fWNhdGNoKGUpe3JldHVybiB0fX1mdW5jdGlvbiBHKHQsZSl7ZSh0KTtmb3IodmFyIG49MCxpPXQuY2hpbGROb2Rlcy5sZW5ndGg7aT5uO24rKylHKHQuY2hpbGROb2Rlc1tuXSxlKX12YXIgdCxlLG4saSxDLE4scj1bXSxvPXIuc2xpY2Uscz1yLmZpbHRlcixhPXdpbmRvdy5kb2N1bWVudCx1PXt9LGY9e30sYz17XCJjb2x1bW4tY291bnRcIjoxLGNvbHVtbnM6MSxcImZvbnQtd2VpZ2h0XCI6MSxcImxpbmUtaGVpZ2h0XCI6MSxvcGFjaXR5OjEsXCJ6LWluZGV4XCI6MSx6b29tOjF9LGw9L15cXHMqPChcXHcrfCEpW14+XSo+LyxoPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxwPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxkPS9eKD86Ym9keXxodG1sKSQvaSxtPS8oW0EtWl0pL2csZz1bXCJ2YWxcIixcImNzc1wiLFwiaHRtbFwiLFwidGV4dFwiLFwiZGF0YVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2Zmc2V0XCJdLHY9W1wiYWZ0ZXJcIixcInByZXBlbmRcIixcImJlZm9yZVwiLFwiYXBwZW5kXCJdLHk9YS5jcmVhdGVFbGVtZW50KFwidGFibGVcIikseD1hLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxiPXt0cjphLmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSx0Ym9keTp5LHRoZWFkOnksdGZvb3Q6eSx0ZDp4LHRoOngsXCIqXCI6YS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfSx3PS9jb21wbGV0ZXxsb2FkZWR8aW50ZXJhY3RpdmUvLEU9L15bXFx3LV0qJC8saj17fSxTPWoudG9TdHJpbmcsVD17fSxPPWEuY3JlYXRlRWxlbWVudChcImRpdlwiKSxQPXt0YWJpbmRleDpcInRhYkluZGV4XCIscmVhZG9ubHk6XCJyZWFkT25seVwiLFwiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsbWF4bGVuZ3RoOlwibWF4TGVuZ3RoXCIsY2VsbHNwYWNpbmc6XCJjZWxsU3BhY2luZ1wiLGNlbGxwYWRkaW5nOlwiY2VsbFBhZGRpbmdcIixyb3dzcGFuOlwicm93U3BhblwiLGNvbHNwYW46XCJjb2xTcGFuXCIsdXNlbWFwOlwidXNlTWFwXCIsZnJhbWVib3JkZXI6XCJmcmFtZUJvcmRlclwiLGNvbnRlbnRlZGl0YWJsZTpcImNvbnRlbnRFZGl0YWJsZVwifSxBPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgQXJyYXl9O3JldHVybiBULm1hdGNoZXM9ZnVuY3Rpb24odCxlKXtpZighZXx8IXR8fDEhPT10Lm5vZGVUeXBlKXJldHVybiExO3ZhciBuPXQud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHx0Lm1vek1hdGNoZXNTZWxlY3Rvcnx8dC5vTWF0Y2hlc1NlbGVjdG9yfHx0Lm1hdGNoZXNTZWxlY3RvcjtpZihuKXJldHVybiBuLmNhbGwodCxlKTt2YXIgaSxyPXQucGFyZW50Tm9kZSxvPSFyO3JldHVybiBvJiYocj1PKS5hcHBlbmRDaGlsZCh0KSxpPX5ULnFzYShyLGUpLmluZGV4T2YodCksbyYmTy5yZW1vdmVDaGlsZCh0KSxpfSxDPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLy0rKC4pPy9nLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU/ZS50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0sTj1mdW5jdGlvbih0KXtyZXR1cm4gcy5jYWxsKHQsZnVuY3Rpb24oZSxuKXtyZXR1cm4gdC5pbmRleE9mKGUpPT1ufSl9LFQuZnJhZ21lbnQ9ZnVuY3Rpb24oZSxpLHIpe3ZhciBzLHUsZjtyZXR1cm4gaC50ZXN0KGUpJiYocz1uKGEuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpKSksc3x8KGUucmVwbGFjZSYmKGU9ZS5yZXBsYWNlKHAsXCI8JDE+PC8kMj5cIikpLGk9PT10JiYoaT1sLnRlc3QoZSkmJlJlZ0V4cC4kMSksaSBpbiBifHwoaT1cIipcIiksZj1iW2ldLGYuaW5uZXJIVE1MPVwiXCIrZSxzPW4uZWFjaChvLmNhbGwoZi5jaGlsZE5vZGVzKSxmdW5jdGlvbigpe2YucmVtb3ZlQ2hpbGQodGhpcyl9KSksTShyKSYmKHU9bihzKSxuLmVhY2gocixmdW5jdGlvbih0LGUpe2cuaW5kZXhPZih0KT4tMT91W3RdKGUpOnUuYXR0cih0LGUpfSkpLHN9LFQuWj1mdW5jdGlvbih0LGUpe3JldHVybiB0PXR8fFtdLHQuX19wcm90b19fPW4uZm4sdC5zZWxlY3Rvcj1lfHxcIlwiLHR9LFQuaXNaPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgVC5afSxULmluaXQ9ZnVuY3Rpb24oZSxpKXt2YXIgcjtpZighZSlyZXR1cm4gVC5aKCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpaWYoZT1lLnRyaW0oKSxcIjxcIj09ZVswXSYmbC50ZXN0KGUpKXI9VC5mcmFnbWVudChlLFJlZ0V4cC4kMSxpKSxlPW51bGw7ZWxzZXtpZihpIT09dClyZXR1cm4gbihpKS5maW5kKGUpO3I9VC5xc2EoYSxlKX1lbHNle2lmKFooZSkpcmV0dXJuIG4oYSkucmVhZHkoZSk7aWYoVC5pc1ooZSkpcmV0dXJuIGU7aWYoQShlKSlyPWsoZSk7ZWxzZSBpZihEKGUpKXI9W2VdLGU9bnVsbDtlbHNlIGlmKGwudGVzdChlKSlyPVQuZnJhZ21lbnQoZS50cmltKCksUmVnRXhwLiQxLGkpLGU9bnVsbDtlbHNle2lmKGkhPT10KXJldHVybiBuKGkpLmZpbmQoZSk7cj1ULnFzYShhLGUpfX1yZXR1cm4gVC5aKHIsZSl9LG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gVC5pbml0KHQsZSl9LG4uZXh0ZW5kPWZ1bmN0aW9uKHQpe3ZhciBlLG49by5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJihlPXQsdD1uLnNoaWZ0KCkpLG4uZm9yRWFjaChmdW5jdGlvbihuKXtCKHQsbixlKX0pLHR9LFQucXNhPWZ1bmN0aW9uKHQsZSl7dmFyIG4saT1cIiNcIj09ZVswXSxyPSFpJiZcIi5cIj09ZVswXSxzPWl8fHI/ZS5zbGljZSgxKTplLGE9RS50ZXN0KHMpO3JldHVybiAkKHQpJiZhJiZpPyhuPXQuZ2V0RWxlbWVudEJ5SWQocykpP1tuXTpbXToxIT09dC5ub2RlVHlwZSYmOSE9PXQubm9kZVR5cGU/W106by5jYWxsKGEmJiFpP3I/dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHMpOnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6dC5xdWVyeVNlbGVjdG9yQWxsKGUpKX0sbi5jb250YWlucz1hLmRvY3VtZW50RWxlbWVudC5jb250YWlucz9mdW5jdGlvbih0LGUpe3JldHVybiB0IT09ZSYmdC5jb250YWlucyhlKX06ZnVuY3Rpb24odCxlKXtmb3IoO2UmJihlPWUucGFyZW50Tm9kZSk7KWlmKGU9PT10KXJldHVybiEwO3JldHVybiExfSxuLnR5cGU9TCxuLmlzRnVuY3Rpb249WixuLmlzV2luZG93PV8sbi5pc0FycmF5PUEsbi5pc1BsYWluT2JqZWN0PU0sbi5pc0VtcHR5T2JqZWN0PWZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihlIGluIHQpcmV0dXJuITE7cmV0dXJuITB9LG4uaW5BcnJheT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHIuaW5kZXhPZi5jYWxsKGUsdCxuKX0sbi5jYW1lbENhc2U9QyxuLnRyaW09ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpTdHJpbmcucHJvdG90eXBlLnRyaW0uY2FsbCh0KX0sbi51dWlkPTAsbi5zdXBwb3J0PXt9LG4uZXhwcj17fSxuLm1hcD1mdW5jdGlvbih0LGUpe3ZhciBuLHIsbyxpPVtdO2lmKFIodCkpZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyluPWUodFtyXSxyKSxudWxsIT1uJiZpLnB1c2gobik7ZWxzZSBmb3IobyBpbiB0KW49ZSh0W29dLG8pLG51bGwhPW4mJmkucHVzaChuKTtyZXR1cm4geihpKX0sbi5lYWNoPWZ1bmN0aW9uKHQsZSl7dmFyIG4saTtpZihSKHQpKXtmb3Iobj0wO248dC5sZW5ndGg7bisrKWlmKGUuY2FsbCh0W25dLG4sdFtuXSk9PT0hMSlyZXR1cm4gdH1lbHNlIGZvcihpIGluIHQpaWYoZS5jYWxsKHRbaV0saSx0W2ldKT09PSExKXJldHVybiB0O3JldHVybiB0fSxuLmdyZXA9ZnVuY3Rpb24odCxlKXtyZXR1cm4gcy5jYWxsKHQsZSl9LHdpbmRvdy5KU09OJiYobi5wYXJzZUpTT049SlNPTi5wYXJzZSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbih0LGUpe2pbXCJbb2JqZWN0IFwiK2UrXCJdXCJdPWUudG9Mb3dlckNhc2UoKX0pLG4uZm49e2ZvckVhY2g6ci5mb3JFYWNoLHJlZHVjZTpyLnJlZHVjZSxwdXNoOnIucHVzaCxzb3J0OnIuc29ydCxpbmRleE9mOnIuaW5kZXhPZixjb25jYXQ6ci5jb25jYXQsbWFwOmZ1bmN0aW9uKHQpe3JldHVybiBuKG4ubWFwKHRoaXMsZnVuY3Rpb24oZSxuKXtyZXR1cm4gdC5jYWxsKGUsbixlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gbihvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LHJlYWR5OmZ1bmN0aW9uKHQpe3JldHVybiB3LnRlc3QoYS5yZWFkeVN0YXRlKSYmYS5ib2R5P3Qobik6YS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7dChuKX0sITEpLHRoaXN9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQ/by5jYWxsKHRoaXMpOnRoaXNbZT49MD9lOmUrdGhpcy5sZW5ndGhdfSx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KCl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtudWxsIT10aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX0pfSxlYWNoOmZ1bmN0aW9uKHQpe3JldHVybiByLmV2ZXJ5LmNhbGwodGhpcyxmdW5jdGlvbihlLG4pe3JldHVybiB0LmNhbGwoZSxuLGUpIT09ITF9KSx0aGlzfSxmaWx0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIFoodCk/dGhpcy5ub3QodGhpcy5ub3QodCkpOm4ocy5jYWxsKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIFQubWF0Y2hlcyhlLHQpfSkpfSxhZGQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbihOKHRoaXMuY29uY2F0KG4odCxlKSkpKX0saXM6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubGVuZ3RoPjAmJlQubWF0Y2hlcyh0aGlzWzBdLHQpfSxub3Q6ZnVuY3Rpb24oZSl7dmFyIGk9W107aWYoWihlKSYmZS5jYWxsIT09dCl0aGlzLmVhY2goZnVuY3Rpb24odCl7ZS5jYWxsKHRoaXMsdCl8fGkucHVzaCh0aGlzKX0pO2Vsc2V7dmFyIHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/dGhpcy5maWx0ZXIoZSk6UihlKSYmWihlLml0ZW0pP28uY2FsbChlKTpuKGUpO3RoaXMuZm9yRWFjaChmdW5jdGlvbih0KXtyLmluZGV4T2YodCk8MCYmaS5wdXNoKHQpfSl9cmV0dXJuIG4oaSl9LGhhczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gRCh0KT9uLmNvbnRhaW5zKHRoaXMsdCk6bih0aGlzKS5maW5kKHQpLnNpemUoKX0pfSxlcTpmdW5jdGlvbih0KXtyZXR1cm4tMT09PXQ/dGhpcy5zbGljZSh0KTp0aGlzLnNsaWNlKHQsK3QrMSl9LGZpcnN0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1swXTtyZXR1cm4gdCYmIUQodCk/dDpuKHQpfSxsYXN0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1t0aGlzLmxlbmd0aC0xXTtyZXR1cm4gdCYmIUQodCk/dDpuKHQpfSxmaW5kOmZ1bmN0aW9uKHQpe3ZhciBlLGk9dGhpcztyZXR1cm4gZT10P1wib2JqZWN0XCI9PXR5cGVvZiB0P24odCkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gci5zb21lLmNhbGwoaSxmdW5jdGlvbihlKXtyZXR1cm4gbi5jb250YWlucyhlLHQpfSl9KToxPT10aGlzLmxlbmd0aD9uKFQucXNhKHRoaXNbMF0sdCkpOnRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFQucXNhKHRoaXMsdCl9KTpuKCl9LGNsb3Nlc3Q6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzWzBdLHI9ITE7Zm9yKFwib2JqZWN0XCI9PXR5cGVvZiB0JiYocj1uKHQpKTtpJiYhKHI/ci5pbmRleE9mKGkpPj0wOlQubWF0Y2hlcyhpLHQpKTspaT1pIT09ZSYmISQoaSkmJmkucGFyZW50Tm9kZTtyZXR1cm4gbihpKX0scGFyZW50czpmdW5jdGlvbih0KXtmb3IodmFyIGU9W10saT10aGlzO2kubGVuZ3RoPjA7KWk9bi5tYXAoaSxmdW5jdGlvbih0KXtyZXR1cm4odD10LnBhcmVudE5vZGUpJiYhJCh0KSYmZS5pbmRleE9mKHQpPDA/KGUucHVzaCh0KSx0KTp2b2lkIDB9KTtyZXR1cm4gVShlLHQpfSxwYXJlbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIFUoTih0aGlzLnBsdWNrKFwicGFyZW50Tm9kZVwiKSksdCl9LGNoaWxkcmVuOmZ1bmN0aW9uKHQpe3JldHVybiBVKHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFYodGhpcyl9KSx0KX0sY29udGVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gby5jYWxsKHRoaXMuY2hpbGROb2Rlcyl9KX0sc2libGluZ3M6ZnVuY3Rpb24odCl7cmV0dXJuIFUodGhpcy5tYXAoZnVuY3Rpb24odCxlKXtyZXR1cm4gcy5jYWxsKFYoZS5wYXJlbnROb2RlKSxmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWV9KX0pLHQpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLmlubmVySFRNTD1cIlwifSl9LHBsdWNrOmZ1bmN0aW9uKHQpe3JldHVybiBuLm1hcCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlW3RdfSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XCJub25lXCI9PXRoaXMuc3R5bGUuZGlzcGxheSYmKHRoaXMuc3R5bGUuZGlzcGxheT1cIlwiKSxcIm5vbmVcIj09Z2V0Q29tcHV0ZWRTdHlsZSh0aGlzLFwiXCIpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpJiYodGhpcy5zdHlsZS5kaXNwbGF5PUkodGhpcy5ub2RlTmFtZSkpfSl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmJlZm9yZSh0KS5yZW1vdmUoKX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgZT1aKHQpO2lmKHRoaXNbMF0mJiFlKXZhciBpPW4odCkuZ2V0KDApLHI9aS5wYXJlbnROb2RlfHx0aGlzLmxlbmd0aD4xO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obyl7bih0aGlzKS53cmFwQWxsKGU/dC5jYWxsKHRoaXMsbyk6cj9pLmNsb25lTm9kZSghMCk6aSl9KX0sd3JhcEFsbDpmdW5jdGlvbih0KXtpZih0aGlzWzBdKXtuKHRoaXNbMF0pLmJlZm9yZSh0PW4odCkpO2Zvcih2YXIgZTsoZT10LmNoaWxkcmVuKCkpLmxlbmd0aDspdD1lLmZpcnN0KCk7bih0KS5hcHBlbmQodGhpcyl9cmV0dXJuIHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbih0KXt2YXIgZT1aKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSl7dmFyIHI9bih0aGlzKSxvPXIuY29udGVudHMoKSxzPWU/dC5jYWxsKHRoaXMsaSk6dDtvLmxlbmd0aD9vLndyYXBBbGwocyk6ci5hcHBlbmQocyl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24odGhpcykucmVwbGFjZVdpdGgobih0aGlzKS5jaGlsZHJlbigpKX0pLHRoaXN9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xvbmVOb2RlKCEwKX0pfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgaT1uKHRoaXMpOyhlPT09dD9cIm5vbmVcIj09aS5jc3MoXCJkaXNwbGF5XCIpOmUpP2kuc2hvdygpOmkuaGlkZSgpfSl9LHByZXY6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5wbHVjayhcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIikpLmZpbHRlcih0fHxcIipcIil9LG5leHQ6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5wbHVjayhcIm5leHRFbGVtZW50U2libGluZ1wiKSkuZmlsdGVyKHR8fFwiKlwiKX0saHRtbDpmdW5jdGlvbih0KXtyZXR1cm4gMCBpbiBhcmd1bWVudHM/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBpPXRoaXMuaW5uZXJIVE1MO24odGhpcykuZW1wdHkoKS5hcHBlbmQoSih0aGlzLHQsZSxpKSl9KTowIGluIHRoaXM/dGhpc1swXS5pbm5lckhUTUw6bnVsbH0sdGV4dDpmdW5jdGlvbih0KXtyZXR1cm4gMCBpbiBhcmd1bWVudHM/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPUoodGhpcyx0LGUsdGhpcy50ZXh0Q29udGVudCk7dGhpcy50ZXh0Q29udGVudD1udWxsPT1uP1wiXCI6XCJcIitufSk6MCBpbiB0aGlzP3RoaXNbMF0udGV4dENvbnRlbnQ6bnVsbH0sYXR0cjpmdW5jdGlvbihuLGkpe3ZhciByO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHwxIGluIGFyZ3VtZW50cz90aGlzLmVhY2goZnVuY3Rpb24odCl7aWYoMT09PXRoaXMubm9kZVR5cGUpaWYoRChuKSlmb3IoZSBpbiBuKVgodGhpcyxlLG5bZV0pO2Vsc2UgWCh0aGlzLG4sSih0aGlzLGksdCx0aGlzLmdldEF0dHJpYnV0ZShuKSkpfSk6dGhpcy5sZW5ndGgmJjE9PT10aGlzWzBdLm5vZGVUeXBlPyEocj10aGlzWzBdLmdldEF0dHJpYnV0ZShuKSkmJm4gaW4gdGhpc1swXT90aGlzWzBdW25dOnI6dH0scmVtb3ZlQXR0cjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7MT09PXRoaXMubm9kZVR5cGUmJnQuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24odCl7WCh0aGlzLHQpfSx0aGlzKX0pfSxwcm9wOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9UFt0XXx8dCwxIGluIGFyZ3VtZW50cz90aGlzLmVhY2goZnVuY3Rpb24obil7dGhpc1t0XT1KKHRoaXMsZSxuLHRoaXNbdF0pfSk6dGhpc1swXSYmdGhpc1swXVt0XX0sZGF0YTpmdW5jdGlvbihlLG4pe3ZhciBpPVwiZGF0YS1cIitlLnJlcGxhY2UobSxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLHI9MSBpbiBhcmd1bWVudHM/dGhpcy5hdHRyKGksbik6dGhpcy5hdHRyKGkpO3JldHVybiBudWxsIT09cj9ZKHIpOnR9LHZhbDpmdW5jdGlvbih0KXtyZXR1cm4gMCBpbiBhcmd1bWVudHM/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3RoaXMudmFsdWU9Sih0aGlzLHQsZSx0aGlzLnZhbHVlKX0pOnRoaXNbMF0mJih0aGlzWzBdLm11bHRpcGxlP24odGhpc1swXSkuZmluZChcIm9wdGlvblwiKS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RlZH0pLnBsdWNrKFwidmFsdWVcIik6dGhpc1swXS52YWx1ZSl9LG9mZnNldDpmdW5jdGlvbih0KXtpZih0KXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIGk9bih0aGlzKSxyPUoodGhpcyx0LGUsaS5vZmZzZXQoKSksbz1pLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLHM9e3RvcDpyLnRvcC1vLnRvcCxsZWZ0OnIubGVmdC1vLmxlZnR9O1wic3RhdGljXCI9PWkuY3NzKFwicG9zaXRpb25cIikmJihzLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaS5jc3Mocyl9KTtpZighdGhpcy5sZW5ndGgpcmV0dXJuIG51bGw7dmFyIGU9dGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57bGVmdDplLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0LHRvcDplLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQsd2lkdGg6TWF0aC5yb3VuZChlLndpZHRoKSxoZWlnaHQ6TWF0aC5yb3VuZChlLmhlaWdodCl9fSxjc3M6ZnVuY3Rpb24odCxpKXtpZihhcmd1bWVudHMubGVuZ3RoPDIpe3ZhciByLG89dGhpc1swXTtpZighbylyZXR1cm47aWYocj1nZXRDb21wdXRlZFN0eWxlKG8sXCJcIiksXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIG8uc3R5bGVbQyh0KV18fHIuZ2V0UHJvcGVydHlWYWx1ZSh0KTtpZihBKHQpKXt2YXIgcz17fTtyZXR1cm4gbi5lYWNoKHQsZnVuY3Rpb24odCxlKXtzW2VdPW8uc3R5bGVbQyhlKV18fHIuZ2V0UHJvcGVydHlWYWx1ZShlKX0pLHN9fXZhciBhPVwiXCI7aWYoXCJzdHJpbmdcIj09TCh0KSlpfHwwPT09aT9hPUYodCkrXCI6XCIrSCh0LGkpOnRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoRih0KSl9KTtlbHNlIGZvcihlIGluIHQpdFtlXXx8MD09PXRbZV0/YSs9RihlKStcIjpcIitIKGUsdFtlXSkrXCI7XCI6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShGKGUpKX0pO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzLnN0eWxlLmNzc1RleHQrPVwiO1wiK2F9KX0saW5kZXg6ZnVuY3Rpb24odCl7cmV0dXJuIHQ/dGhpcy5pbmRleE9mKG4odClbMF0pOnRoaXMucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleE9mKHRoaXNbMF0pfSxoYXNDbGFzczpmdW5jdGlvbih0KXtyZXR1cm4gdD9yLnNvbWUuY2FsbCh0aGlzLGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRlc3QoVyh0KSl9LHEodCkpOiExfSxhZGRDbGFzczpmdW5jdGlvbih0KXtyZXR1cm4gdD90aGlzLmVhY2goZnVuY3Rpb24oZSl7aWYoXCJjbGFzc05hbWVcImluIHRoaXMpe2k9W107dmFyIHI9Vyh0aGlzKSxvPUoodGhpcyx0LGUscik7by5zcGxpdCgvXFxzKy9nKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe24odGhpcykuaGFzQ2xhc3ModCl8fGkucHVzaCh0KX0sdGhpcyksaS5sZW5ndGgmJlcodGhpcyxyKyhyP1wiIFwiOlwiXCIpK2kuam9pbihcIiBcIikpfX0pOnRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7aWYoXCJjbGFzc05hbWVcImluIHRoaXMpe2lmKGU9PT10KXJldHVybiBXKHRoaXMsXCJcIik7aT1XKHRoaXMpLEoodGhpcyxlLG4saSkuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbih0KXtpPWkucmVwbGFjZShxKHQpLFwiIFwiKX0pLFcodGhpcyxpLnRyaW0oKSl9fSl9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGUsaSl7cmV0dXJuIGU/dGhpcy5lYWNoKGZ1bmN0aW9uKHIpe3ZhciBvPW4odGhpcykscz1KKHRoaXMsZSxyLFcodGhpcykpO3Muc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihlKXsoaT09PXQ/IW8uaGFzQ2xhc3MoZSk6aSk/by5hZGRDbGFzcyhlKTpvLnJlbW92ZUNsYXNzKGUpfSl9KTp0aGlzfSxzY3JvbGxUb3A6ZnVuY3Rpb24oZSl7aWYodGhpcy5sZW5ndGgpe3ZhciBuPVwic2Nyb2xsVG9wXCJpbiB0aGlzWzBdO3JldHVybiBlPT09dD9uP3RoaXNbMF0uc2Nyb2xsVG9wOnRoaXNbMF0ucGFnZVlPZmZzZXQ6dGhpcy5lYWNoKG4/ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbFRvcD1lfTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsVG8odGhpcy5zY3JvbGxYLGUpfSl9fSxzY3JvbGxMZWZ0OmZ1bmN0aW9uKGUpe2lmKHRoaXMubGVuZ3RoKXt2YXIgbj1cInNjcm9sbExlZnRcImluIHRoaXNbMF07cmV0dXJuIGU9PT10P24/dGhpc1swXS5zY3JvbGxMZWZ0OnRoaXNbMF0ucGFnZVhPZmZzZXQ6dGhpcy5lYWNoKG4/ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbExlZnQ9ZX06ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbFRvKGUsdGhpcy5zY3JvbGxZKX0pfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpc1swXSxlPXRoaXMub2Zmc2V0UGFyZW50KCksaT10aGlzLm9mZnNldCgpLHI9ZC50ZXN0KGVbMF0ubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OmUub2Zmc2V0KCk7cmV0dXJuIGkudG9wLT1wYXJzZUZsb2F0KG4odCkuY3NzKFwibWFyZ2luLXRvcFwiKSl8fDAsaS5sZWZ0LT1wYXJzZUZsb2F0KG4odCkuY3NzKFwibWFyZ2luLWxlZnRcIikpfHwwLHIudG9wKz1wYXJzZUZsb2F0KG4oZVswXSkuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSl8fDAsci5sZWZ0Kz1wYXJzZUZsb2F0KG4oZVswXSkuY3NzKFwiYm9yZGVyLWxlZnQtd2lkdGhcIikpfHwwLHt0b3A6aS50b3Atci50b3AsbGVmdDppLmxlZnQtci5sZWZ0fX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLm9mZnNldFBhcmVudHx8YS5ib2R5O3QmJiFkLnRlc3QodC5ub2RlTmFtZSkmJlwic3RhdGljXCI9PW4odCkuY3NzKFwicG9zaXRpb25cIik7KXQ9dC5vZmZzZXRQYXJlbnQ7cmV0dXJuIHR9KX19LG4uZm4uZGV0YWNoPW4uZm4ucmVtb3ZlLFtcIndpZHRoXCIsXCJoZWlnaHRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgaT1lLnJlcGxhY2UoLy4vLGZ1bmN0aW9uKHQpe3JldHVybiB0WzBdLnRvVXBwZXJDYXNlKCl9KTtuLmZuW2VdPWZ1bmN0aW9uKHIpe3ZhciBvLHM9dGhpc1swXTtyZXR1cm4gcj09PXQ/XyhzKT9zW1wiaW5uZXJcIitpXTokKHMpP3MuZG9jdW1lbnRFbGVtZW50W1wic2Nyb2xsXCIraV06KG89dGhpcy5vZmZzZXQoKSkmJm9bZV06dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3M9bih0aGlzKSxzLmNzcyhlLEoodGhpcyxyLHQsc1tlXSgpKSl9KX19KSx2LmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgaT1lJTI7bi5mblt0XT1mdW5jdGlvbigpe3ZhciB0LG8scj1uLm1hcChhcmd1bWVudHMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9TChlKSxcIm9iamVjdFwiPT10fHxcImFycmF5XCI9PXR8fG51bGw9PWU/ZTpULmZyYWdtZW50KGUpfSkscz10aGlzLmxlbmd0aD4xO3JldHVybiByLmxlbmd0aDwxP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQsdSl7bz1pP3U6dS5wYXJlbnROb2RlLHU9MD09ZT91Lm5leHRTaWJsaW5nOjE9PWU/dS5maXJzdENoaWxkOjI9PWU/dTpudWxsO3ZhciBmPW4uY29udGFpbnMoYS5kb2N1bWVudEVsZW1lbnQsbyk7ci5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHMpdD10LmNsb25lTm9kZSghMCk7ZWxzZSBpZighbylyZXR1cm4gbih0KS5yZW1vdmUoKTtvLmluc2VydEJlZm9yZSh0LHUpLGYmJkcodCxmdW5jdGlvbih0KXtudWxsPT10Lm5vZGVOYW1lfHxcIlNDUklQVFwiIT09dC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpfHx0LnR5cGUmJlwidGV4dC9qYXZhc2NyaXB0XCIhPT10LnR5cGV8fHQuc3JjfHx3aW5kb3cuZXZhbC5jYWxsKHdpbmRvdyx0LmlubmVySFRNTCl9KX0pfSl9LG4uZm5baT90K1wiVG9cIjpcImluc2VydFwiKyhlP1wiQmVmb3JlXCI6XCJBZnRlclwiKV09ZnVuY3Rpb24oZSl7cmV0dXJuIG4oZSlbdF0odGhpcyksdGhpc319KSxULloucHJvdG90eXBlPW4uZm4sVC51bmlxPU4sVC5kZXNlcmlhbGl6ZVZhbHVlPVksbi56ZXB0bz1ULG59KCk7d2luZG93LlplcHRvPVplcHRvLHZvaWQgMD09PXdpbmRvdy4kJiYod2luZG93LiQ9WmVwdG8pLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGwodCl7cmV0dXJuIHQuX3ppZHx8KHQuX3ppZD1lKyspfWZ1bmN0aW9uIGgodCxlLG4saSl7aWYoZT1wKGUpLGUubnMpdmFyIHI9ZChlLm5zKTtyZXR1cm4oc1tsKHQpXXx8W10pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hKCF0fHxlLmUmJnQuZSE9ZS5lfHxlLm5zJiYhci50ZXN0KHQubnMpfHxuJiZsKHQuZm4pIT09bChuKXx8aSYmdC5zZWwhPWkpfSl9ZnVuY3Rpb24gcCh0KXt2YXIgZT0oXCJcIit0KS5zcGxpdChcIi5cIik7cmV0dXJue2U6ZVswXSxuczplLnNsaWNlKDEpLnNvcnQoKS5qb2luKFwiIFwiKX19ZnVuY3Rpb24gZCh0KXtyZXR1cm4gbmV3IFJlZ0V4cChcIig/Ol58IClcIit0LnJlcGxhY2UoXCIgXCIsXCIgLiogP1wiKStcIig/OiB8JClcIil9ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB0LmRlbCYmIXUmJnQuZSBpbiBmfHwhIWV9ZnVuY3Rpb24gZyh0KXtyZXR1cm4gY1t0XXx8dSYmZlt0XXx8dH1mdW5jdGlvbiB2KGUsaSxyLG8sYSx1LGYpe3ZhciBoPWwoZSksZD1zW2hdfHwoc1toXT1bXSk7aS5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihpKXtpZihcInJlYWR5XCI9PWkpcmV0dXJuIHQoZG9jdW1lbnQpLnJlYWR5KHIpO3ZhciBzPXAoaSk7cy5mbj1yLHMuc2VsPWEscy5lIGluIGMmJihyPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVsYXRlZFRhcmdldDtyZXR1cm4hbnx8biE9PXRoaXMmJiF0LmNvbnRhaW5zKHRoaXMsbik/cy5mbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfSkscy5kZWw9dTt2YXIgbD11fHxyO3MucHJveHk9ZnVuY3Rpb24odCl7aWYodD1qKHQpLCF0LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpe3QuZGF0YT1vO3ZhciBpPWwuYXBwbHkoZSx0Ll9hcmdzPT1uP1t0XTpbdF0uY29uY2F0KHQuX2FyZ3MpKTtyZXR1cm4gaT09PSExJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCkpLGl9fSxzLmk9ZC5sZW5ndGgsZC5wdXNoKHMpLFwiYWRkRXZlbnRMaXN0ZW5lclwiaW4gZSYmZS5hZGRFdmVudExpc3RlbmVyKGcocy5lKSxzLnByb3h5LG0ocyxmKSl9KX1mdW5jdGlvbiB5KHQsZSxuLGkscil7dmFyIG89bCh0KTsoZXx8XCJcIikuc3BsaXQoL1xccy8pLmZvckVhY2goZnVuY3Rpb24oZSl7aCh0LGUsbixpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RlbGV0ZSBzW29dW2UuaV0sXCJyZW1vdmVFdmVudExpc3RlbmVyXCJpbiB0JiZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZyhlLmUpLGUucHJveHksbShlLHIpKX0pfSl9ZnVuY3Rpb24gaihlLGkpe3JldHVybihpfHwhZS5pc0RlZmF1bHRQcmV2ZW50ZWQpJiYoaXx8KGk9ZSksdC5lYWNoKEUsZnVuY3Rpb24odCxuKXt2YXIgcj1pW3RdO2VbdF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tuXT14LHImJnIuYXBwbHkoaSxhcmd1bWVudHMpfSxlW25dPWJ9KSwoaS5kZWZhdWx0UHJldmVudGVkIT09bj9pLmRlZmF1bHRQcmV2ZW50ZWQ6XCJyZXR1cm5WYWx1ZVwiaW4gaT9pLnJldHVyblZhbHVlPT09ITE6aS5nZXRQcmV2ZW50RGVmYXVsdCYmaS5nZXRQcmV2ZW50RGVmYXVsdCgpKSYmKGUuaXNEZWZhdWx0UHJldmVudGVkPXgpKSxlfWZ1bmN0aW9uIFModCl7dmFyIGUsaT17b3JpZ2luYWxFdmVudDp0fTtmb3IoZSBpbiB0KXcudGVzdChlKXx8dFtlXT09PW58fChpW2VdPXRbZV0pO3JldHVybiBqKGksdCl9dmFyIG4sZT0xLGk9QXJyYXkucHJvdG90eXBlLnNsaWNlLHI9dC5pc0Z1bmN0aW9uLG89ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR9LHM9e30sYT17fSx1PVwib25mb2N1c2luXCJpbiB3aW5kb3csZj17Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGM9e21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIn07YS5jbGljaz1hLm1vdXNlZG93bj1hLm1vdXNldXA9YS5tb3VzZW1vdmU9XCJNb3VzZUV2ZW50c1wiLHQuZXZlbnQ9e2FkZDp2LHJlbW92ZTp5fSx0LnByb3h5PWZ1bmN0aW9uKGUsbil7dmFyIHM9MiBpbiBhcmd1bWVudHMmJmkuY2FsbChhcmd1bWVudHMsMik7aWYocihlKSl7dmFyIGE9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseShuLHM/cy5jb25jYXQoaS5jYWxsKGFyZ3VtZW50cykpOmFyZ3VtZW50cyl9O3JldHVybiBhLl96aWQ9bChlKSxhfWlmKG8obikpcmV0dXJuIHM/KHMudW5zaGlmdChlW25dLGUpLHQucHJveHkuYXBwbHkobnVsbCxzKSk6dC5wcm94eShlW25dLGUpO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RlZCBmdW5jdGlvblwiKX0sdC5mbi5iaW5kPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5vbih0LGUsbil9LHQuZm4udW5iaW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub2ZmKHQsZSl9LHQuZm4ub25lPWZ1bmN0aW9uKHQsZSxuLGkpe3JldHVybiB0aGlzLm9uKHQsZSxuLGksMSl9O3ZhciB4PWZ1bmN0aW9uKCl7cmV0dXJuITB9LGI9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sdz0vXihbQS1aXXxyZXR1cm5WYWx1ZSR8bGF5ZXJbWFldJCkvLEU9e3ByZXZlbnREZWZhdWx0OlwiaXNEZWZhdWx0UHJldmVudGVkXCIsc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOlwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWRcIixzdG9wUHJvcGFnYXRpb246XCJpc1Byb3BhZ2F0aW9uU3RvcHBlZFwifTt0LmZuLmRlbGVnYXRlPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5vbihlLHQsbil9LHQuZm4udW5kZWxlZ2F0ZT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMub2ZmKGUsdCxuKX0sdC5mbi5saXZlPWZ1bmN0aW9uKGUsbil7cmV0dXJuIHQoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUodGhpcy5zZWxlY3RvcixlLG4pLHRoaXN9LHQuZm4uZGllPWZ1bmN0aW9uKGUsbil7cmV0dXJuIHQoZG9jdW1lbnQuYm9keSkudW5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLGUsbiksdGhpc30sdC5mbi5vbj1mdW5jdGlvbihlLHMsYSx1LGYpe3ZhciBjLGwsaD10aGlzO3JldHVybiBlJiYhbyhlKT8odC5lYWNoKGUsZnVuY3Rpb24odCxlKXtoLm9uKHQscyxhLGUsZil9KSxoKToobyhzKXx8cih1KXx8dT09PSExfHwodT1hLGE9cyxzPW4pLChyKGEpfHxhPT09ITEpJiYodT1hLGE9biksdT09PSExJiYodT1iKSxoLmVhY2goZnVuY3Rpb24obixyKXtmJiYoYz1mdW5jdGlvbih0KXtyZXR1cm4geShyLHQudHlwZSx1KSx1LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLHMmJihsPWZ1bmN0aW9uKGUpe3ZhciBuLG89dChlLnRhcmdldCkuY2xvc2VzdChzLHIpLmdldCgwKTtyZXR1cm4gbyYmbyE9PXI/KG49dC5leHRlbmQoUyhlKSx7Y3VycmVudFRhcmdldDpvLGxpdmVGaXJlZDpyfSksKGN8fHUpLmFwcGx5KG8sW25dLmNvbmNhdChpLmNhbGwoYXJndW1lbnRzLDEpKSkpOnZvaWQgMH0pLHYocixlLHUsYSxzLGx8fGMpfSkpfSx0LmZuLm9mZj1mdW5jdGlvbihlLGkscyl7dmFyIGE9dGhpcztyZXR1cm4gZSYmIW8oZSk/KHQuZWFjaChlLGZ1bmN0aW9uKHQsZSl7YS5vZmYodCxpLGUpfSksYSk6KG8oaSl8fHIocyl8fHM9PT0hMXx8KHM9aSxpPW4pLHM9PT0hMSYmKHM9YiksYS5lYWNoKGZ1bmN0aW9uKCl7eSh0aGlzLGUscyxpKX0pKX0sdC5mbi50cmlnZ2VyPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGU9byhlKXx8dC5pc1BsYWluT2JqZWN0KGUpP3QuRXZlbnQoZSk6aihlKSxlLl9hcmdzPW4sdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZS50eXBlIGluIGYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXNbZS50eXBlXT90aGlzW2UudHlwZV0oKTpcImRpc3BhdGNoRXZlbnRcImluIHRoaXM/dGhpcy5kaXNwYXRjaEV2ZW50KGUpOnQodGhpcykudHJpZ2dlckhhbmRsZXIoZSxuKX0pfSx0LmZuLnRyaWdnZXJIYW5kbGVyPWZ1bmN0aW9uKGUsbil7dmFyIGkscjtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHMsYSl7aT1TKG8oZSk/dC5FdmVudChlKTplKSxpLl9hcmdzPW4saS50YXJnZXQ9YSx0LmVhY2goaChhLGUudHlwZXx8ZSksZnVuY3Rpb24odCxlKXtyZXR1cm4gcj1lLnByb3h5KGkpLGkuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKT8hMTp2b2lkIDB9KX0pLHJ9LFwiZm9jdXNpbiBmb2N1c291dCBmb2N1cyBibHVyIGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5mbltlXT1mdW5jdGlvbih0KXtyZXR1cm4gMCBpbiBhcmd1bWVudHM/dGhpcy5iaW5kKGUsdCk6dGhpcy50cmlnZ2VyKGUpfX0pLHQuRXZlbnQ9ZnVuY3Rpb24odCxlKXtvKHQpfHwoZT10LHQ9ZS50eXBlKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChhW3RdfHxcIkV2ZW50c1wiKSxpPSEwO2lmKGUpZm9yKHZhciByIGluIGUpXCJidWJibGVzXCI9PXI/aT0hIWVbcl06bltyXT1lW3JdO3JldHVybiBuLmluaXRFdmVudCh0LGksITApLGoobil9fShaZXB0byksZnVuY3Rpb24odCl7ZnVuY3Rpb24gaChlLG4saSl7dmFyIHI9dC5FdmVudChuKTtyZXR1cm4gdChlKS50cmlnZ2VyKHIsaSksIXIuaXNEZWZhdWx0UHJldmVudGVkKCl9ZnVuY3Rpb24gcCh0LGUsaSxyKXtyZXR1cm4gdC5nbG9iYWw/aChlfHxuLGkscik6dm9pZCAwfWZ1bmN0aW9uIGQoZSl7ZS5nbG9iYWwmJjA9PT10LmFjdGl2ZSsrJiZwKGUsbnVsbCxcImFqYXhTdGFydFwiKX1mdW5jdGlvbiBtKGUpe2UuZ2xvYmFsJiYhLS10LmFjdGl2ZSYmcChlLG51bGwsXCJhamF4U3RvcFwiKX1mdW5jdGlvbiBnKHQsZSl7dmFyIG49ZS5jb250ZXh0O3JldHVybiBlLmJlZm9yZVNlbmQuY2FsbChuLHQsZSk9PT0hMXx8cChlLG4sXCJhamF4QmVmb3JlU2VuZFwiLFt0LGVdKT09PSExPyExOnZvaWQgcChlLG4sXCJhamF4U2VuZFwiLFt0LGVdKX1mdW5jdGlvbiB2KHQsZSxuLGkpe3ZhciByPW4uY29udGV4dCxvPVwic3VjY2Vzc1wiO24uc3VjY2Vzcy5jYWxsKHIsdCxvLGUpLGkmJmkucmVzb2x2ZVdpdGgocixbdCxvLGVdKSxwKG4scixcImFqYXhTdWNjZXNzXCIsW2Usbix0XSkseChvLGUsbil9ZnVuY3Rpb24geSh0LGUsbixpLHIpe3ZhciBvPWkuY29udGV4dDtpLmVycm9yLmNhbGwobyxuLGUsdCksciYmci5yZWplY3RXaXRoKG8sW24sZSx0XSkscChpLG8sXCJhamF4RXJyb3JcIixbbixpLHR8fGVdKSx4KGUsbixpKX1mdW5jdGlvbiB4KHQsZSxuKXt2YXIgaT1uLmNvbnRleHQ7bi5jb21wbGV0ZS5jYWxsKGksZSx0KSxwKG4saSxcImFqYXhDb21wbGV0ZVwiLFtlLG5dKSxtKG4pfWZ1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gdCYmKHQ9dC5zcGxpdChcIjtcIiwyKVswXSksdCYmKHQ9PWY/XCJodG1sXCI6dD09dT9cImpzb25cIjpzLnRlc3QodCk/XCJzY3JpcHRcIjphLnRlc3QodCkmJlwieG1sXCIpfHxcInRleHRcIn1mdW5jdGlvbiBFKHQsZSl7cmV0dXJuXCJcIj09ZT90Oih0K1wiJlwiK2UpLnJlcGxhY2UoL1smP117MSwyfS8sXCI/XCIpfWZ1bmN0aW9uIGooZSl7ZS5wcm9jZXNzRGF0YSYmZS5kYXRhJiZcInN0cmluZ1wiIT10LnR5cGUoZS5kYXRhKSYmKGUuZGF0YT10LnBhcmFtKGUuZGF0YSxlLnRyYWRpdGlvbmFsKSksIWUuZGF0YXx8ZS50eXBlJiZcIkdFVFwiIT1lLnR5cGUudG9VcHBlckNhc2UoKXx8KGUudXJsPUUoZS51cmwsZS5kYXRhKSxlLmRhdGE9dm9pZCAwKX1mdW5jdGlvbiBTKGUsbixpLHIpe3JldHVybiB0LmlzRnVuY3Rpb24obikmJihyPWksaT1uLG49dm9pZCAwKSx0LmlzRnVuY3Rpb24oaSl8fChyPWksaT12b2lkIDApLHt1cmw6ZSxkYXRhOm4sc3VjY2VzczppLGRhdGFUeXBlOnJ9fWZ1bmN0aW9uIEMoZSxuLGkscil7dmFyIG8scz10LmlzQXJyYXkobiksYT10LmlzUGxhaW5PYmplY3Qobik7dC5lYWNoKG4sZnVuY3Rpb24obix1KXtvPXQudHlwZSh1KSxyJiYobj1pP3I6citcIltcIisoYXx8XCJvYmplY3RcIj09b3x8XCJhcnJheVwiPT1vP246XCJcIikrXCJdXCIpLCFyJiZzP2UuYWRkKHUubmFtZSx1LnZhbHVlKTpcImFycmF5XCI9PW98fCFpJiZcIm9iamVjdFwiPT1vP0MoZSx1LGksbik6ZS5hZGQobix1KX0pfXZhciBpLHIsZT0wLG49d2luZG93LmRvY3VtZW50LG89LzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2kscz0vXig/OnRleHR8YXBwbGljYXRpb24pXFwvamF2YXNjcmlwdC9pLGE9L14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL3htbC9pLHU9XCJhcHBsaWNhdGlvbi9qc29uXCIsZj1cInRleHQvaHRtbFwiLGM9L15cXHMqJC8sbD1uLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2wuaHJlZj13aW5kb3cubG9jYXRpb24uaHJlZix0LmFjdGl2ZT0wLHQuYWpheEpTT05QPWZ1bmN0aW9uKGkscil7aWYoIShcInR5cGVcImluIGkpKXJldHVybiB0LmFqYXgoaSk7dmFyIGYsaCxvPWkuanNvbnBDYWxsYmFjayxzPSh0LmlzRnVuY3Rpb24obyk/bygpOm8pfHxcImpzb25wXCIrICsrZSxhPW4uY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSx1PXdpbmRvd1tzXSxjPWZ1bmN0aW9uKGUpe3QoYSkudHJpZ2dlckhhbmRsZXIoXCJlcnJvclwiLGV8fFwiYWJvcnRcIil9LGw9e2Fib3J0OmN9O3JldHVybiByJiZyLnByb21pc2UobCksdChhKS5vbihcImxvYWQgZXJyb3JcIixmdW5jdGlvbihlLG4pe2NsZWFyVGltZW91dChoKSx0KGEpLm9mZigpLnJlbW92ZSgpLFwiZXJyb3JcIiE9ZS50eXBlJiZmP3YoZlswXSxsLGkscik6eShudWxsLG58fFwiZXJyb3JcIixsLGksciksd2luZG93W3NdPXUsZiYmdC5pc0Z1bmN0aW9uKHUpJiZ1KGZbMF0pLHU9Zj12b2lkIDB9KSxnKGwsaSk9PT0hMT8oYyhcImFib3J0XCIpLGwpOih3aW5kb3dbc109ZnVuY3Rpb24oKXtmPWFyZ3VtZW50c30sYS5zcmM9aS51cmwucmVwbGFjZSgvXFw/KC4rKT1cXD8vLFwiPyQxPVwiK3MpLG4uaGVhZC5hcHBlbmRDaGlsZChhKSxpLnRpbWVvdXQ+MCYmKGg9c2V0VGltZW91dChmdW5jdGlvbigpe2MoXCJ0aW1lb3V0XCIpfSxpLnRpbWVvdXQpKSxsKX0sdC5hamF4U2V0dGluZ3M9e3R5cGU6XCJHRVRcIixiZWZvcmVTZW5kOmIsc3VjY2VzczpiLGVycm9yOmIsY29tcGxldGU6Yixjb250ZXh0Om51bGwsZ2xvYmFsOiEwLHhocjpmdW5jdGlvbigpe3JldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0fSxhY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtamF2YXNjcmlwdFwiLGpzb246dSx4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsaHRtbDpmLHRleHQ6XCJ0ZXh0L3BsYWluXCJ9LGNyb3NzRG9tYWluOiExLHRpbWVvdXQ6MCxwcm9jZXNzRGF0YTohMCxjYWNoZTohMH0sdC5hamF4PWZ1bmN0aW9uKGUpe3ZhciBhLG89dC5leHRlbmQoe30sZXx8e30pLHM9dC5EZWZlcnJlZCYmdC5EZWZlcnJlZCgpO2ZvcihpIGluIHQuYWpheFNldHRpbmdzKXZvaWQgMD09PW9baV0mJihvW2ldPXQuYWpheFNldHRpbmdzW2ldKTtkKG8pLG8uY3Jvc3NEb21haW58fChhPW4uY3JlYXRlRWxlbWVudChcImFcIiksYS5ocmVmPW8udXJsLGEuaHJlZj1hLmhyZWYsby5jcm9zc0RvbWFpbj1sLnByb3RvY29sK1wiLy9cIitsLmhvc3QhPWEucHJvdG9jb2wrXCIvL1wiK2EuaG9zdCksby51cmx8fChvLnVybD13aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSksaihvKTt2YXIgdT1vLmRhdGFUeXBlLGY9L1xcPy4rPVxcPy8udGVzdChvLnVybCk7aWYoZiYmKHU9XCJqc29ucFwiKSxvLmNhY2hlIT09ITEmJihlJiZlLmNhY2hlPT09ITB8fFwic2NyaXB0XCIhPXUmJlwianNvbnBcIiE9dSl8fChvLnVybD1FKG8udXJsLFwiXz1cIitEYXRlLm5vdygpKSksXCJqc29ucFwiPT11KXJldHVybiBmfHwoby51cmw9RShvLnVybCxvLmpzb25wP28uanNvbnArXCI9P1wiOm8uanNvbnA9PT0hMT9cIlwiOlwiY2FsbGJhY2s9P1wiKSksdC5hamF4SlNPTlAobyxzKTt2YXIgQyxoPW8uYWNjZXB0c1t1XSxwPXt9LG09ZnVuY3Rpb24odCxlKXtwW3QudG9Mb3dlckNhc2UoKV09W3QsZV19LHg9L14oW1xcdy1dKzopXFwvXFwvLy50ZXN0KG8udXJsKT9SZWdFeHAuJDE6d2luZG93LmxvY2F0aW9uLnByb3RvY29sLFM9by54aHIoKSxUPVMuc2V0UmVxdWVzdEhlYWRlcjtpZihzJiZzLnByb21pc2UoUyksby5jcm9zc0RvbWFpbnx8bShcIlgtUmVxdWVzdGVkLVdpdGhcIixcIlhNTEh0dHBSZXF1ZXN0XCIpLG0oXCJBY2NlcHRcIixofHxcIiovKlwiKSwoaD1vLm1pbWVUeXBlfHxoKSYmKGguaW5kZXhPZihcIixcIik+LTEmJihoPWguc3BsaXQoXCIsXCIsMilbMF0pLFMub3ZlcnJpZGVNaW1lVHlwZSYmUy5vdmVycmlkZU1pbWVUeXBlKGgpKSwoby5jb250ZW50VHlwZXx8by5jb250ZW50VHlwZSE9PSExJiZvLmRhdGEmJlwiR0VUXCIhPW8udHlwZS50b1VwcGVyQ2FzZSgpKSYmbShcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGV8fFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpLG8uaGVhZGVycylmb3IociBpbiBvLmhlYWRlcnMpbShyLG8uaGVhZGVyc1tyXSk7aWYoUy5zZXRSZXF1ZXN0SGVhZGVyPW0sUy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT1TLnJlYWR5U3RhdGUpe1Mub25yZWFkeXN0YXRlY2hhbmdlPWIsY2xlYXJUaW1lb3V0KEMpO3ZhciBlLG49ITE7aWYoUy5zdGF0dXM+PTIwMCYmUy5zdGF0dXM8MzAwfHwzMDQ9PVMuc3RhdHVzfHwwPT1TLnN0YXR1cyYmXCJmaWxlOlwiPT14KXt1PXV8fHcoby5taW1lVHlwZXx8Uy5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSksZT1TLnJlc3BvbnNlVGV4dDt0cnl7XCJzY3JpcHRcIj09dT8oMSxldmFsKShlKTpcInhtbFwiPT11P2U9Uy5yZXNwb25zZVhNTDpcImpzb25cIj09dSYmKGU9Yy50ZXN0KGUpP251bGw6dC5wYXJzZUpTT04oZSkpfWNhdGNoKGkpe249aX1uP3kobixcInBhcnNlcmVycm9yXCIsUyxvLHMpOnYoZSxTLG8scyl9ZWxzZSB5KFMuc3RhdHVzVGV4dHx8bnVsbCxTLnN0YXR1cz9cImVycm9yXCI6XCJhYm9ydFwiLFMsbyxzKX19LGcoUyxvKT09PSExKXJldHVybiBTLmFib3J0KCkseShudWxsLFwiYWJvcnRcIixTLG8scyksUztpZihvLnhockZpZWxkcylmb3IociBpbiBvLnhockZpZWxkcylTW3JdPW8ueGhyRmllbGRzW3JdO3ZhciBOPVwiYXN5bmNcImluIG8/by5hc3luYzohMDtTLm9wZW4oby50eXBlLG8udXJsLE4sby51c2VybmFtZSxvLnBhc3N3b3JkKTtmb3IociBpbiBwKVQuYXBwbHkoUyxwW3JdKTtyZXR1cm4gby50aW1lb3V0PjAmJihDPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtTLm9ucmVhZHlzdGF0ZWNoYW5nZT1iLFMuYWJvcnQoKSx5KG51bGwsXCJ0aW1lb3V0XCIsUyxvLHMpfSxvLnRpbWVvdXQpKSxTLnNlbmQoby5kYXRhP28uZGF0YTpudWxsKSxTfSx0LmdldD1mdW5jdGlvbigpe3JldHVybiB0LmFqYXgoUy5hcHBseShudWxsLGFyZ3VtZW50cykpfSx0LnBvc3Q9ZnVuY3Rpb24oKXt2YXIgZT1TLmFwcGx5KG51bGwsYXJndW1lbnRzKTtyZXR1cm4gZS50eXBlPVwiUE9TVFwiLHQuYWpheChlKX0sdC5nZXRKU09OPWZ1bmN0aW9uKCl7dmFyIGU9Uy5hcHBseShudWxsLGFyZ3VtZW50cyk7cmV0dXJuIGUuZGF0YVR5cGU9XCJqc29uXCIsdC5hamF4KGUpfSx0LmZuLmxvYWQ9ZnVuY3Rpb24oZSxuLGkpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4gdGhpczt2YXIgYSxyPXRoaXMscz1lLnNwbGl0KC9cXHMvKSx1PVMoZSxuLGkpLGY9dS5zdWNjZXNzO3JldHVybiBzLmxlbmd0aD4xJiYodS51cmw9c1swXSxhPXNbMV0pLHUuc3VjY2Vzcz1mdW5jdGlvbihlKXtyLmh0bWwoYT90KFwiPGRpdj5cIikuaHRtbChlLnJlcGxhY2UobyxcIlwiKSkuZmluZChhKTplKSxmJiZmLmFwcGx5KHIsYXJndW1lbnRzKX0sdC5hamF4KHUpLHRoaXN9O3ZhciBUPWVuY29kZVVSSUNvbXBvbmVudDt0LnBhcmFtPWZ1bmN0aW9uKGUsbil7dmFyIGk9W107cmV0dXJuIGkuYWRkPWZ1bmN0aW9uKGUsbil7dC5pc0Z1bmN0aW9uKG4pJiYobj1uKCkpLG51bGw9PW4mJihuPVwiXCIpLHRoaXMucHVzaChUKGUpK1wiPVwiK1QobikpfSxDKGksZSxuKSxpLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX19KFplcHRvKSxmdW5jdGlvbih0KXt0LmZuLnNlcmlhbGl6ZUFycmF5PWZ1bmN0aW9uKCl7dmFyIGUsbixpPVtdLHI9ZnVuY3Rpb24odCl7cmV0dXJuIHQuZm9yRWFjaD90LmZvckVhY2gocik6dm9pZCBpLnB1c2goe25hbWU6ZSx2YWx1ZTp0fSl9O3JldHVybiB0aGlzWzBdJiZ0LmVhY2godGhpc1swXS5lbGVtZW50cyxmdW5jdGlvbihpLG8pe249by50eXBlLGU9by5uYW1lLGUmJlwiZmllbGRzZXRcIiE9by5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYhby5kaXNhYmxlZCYmXCJzdWJtaXRcIiE9biYmXCJyZXNldFwiIT1uJiZcImJ1dHRvblwiIT1uJiZcImZpbGVcIiE9biYmKFwicmFkaW9cIiE9biYmXCJjaGVja2JveFwiIT1ufHxvLmNoZWNrZWQpJiZyKHQobykudmFsKCkpfSksaX0sdC5mbi5zZXJpYWxpemU9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdGhpcy5zZXJpYWxpemVBcnJheSgpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlLm5hbWUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChlLnZhbHVlKSl9KSx0LmpvaW4oXCImXCIpfSx0LmZuLnN1Ym1pdD1mdW5jdGlvbihlKXtpZigwIGluIGFyZ3VtZW50cyl0aGlzLmJpbmQoXCJzdWJtaXRcIixlKTtlbHNlIGlmKHRoaXMubGVuZ3RoKXt2YXIgbj10LkV2ZW50KFwic3VibWl0XCIpO3RoaXMuZXEoMCkudHJpZ2dlcihuKSxuLmlzRGVmYXVsdFByZXZlbnRlZCgpfHx0aGlzLmdldCgwKS5zdWJtaXQoKX1yZXR1cm4gdGhpc319KFplcHRvKSxmdW5jdGlvbih0KXtcIl9fcHJvdG9fX1wiaW57fXx8dC5leHRlbmQodC56ZXB0byx7WjpmdW5jdGlvbihlLG4pe3JldHVybiBlPWV8fFtdLHQuZXh0ZW5kKGUsdC5mbiksZS5zZWxlY3Rvcj1ufHxcIlwiLGUuX19aPSEwLGV9LGlzWjpmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT10LnR5cGUoZSkmJlwiX19aXCJpbiBlfX0pO3RyeXtnZXRDb21wdXRlZFN0eWxlKHZvaWQgMCl9Y2F0Y2goZSl7dmFyIG49Z2V0Q29tcHV0ZWRTdHlsZTt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZT1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG4odCl9Y2F0Y2goZSl7cmV0dXJuIG51bGx9fX19KFplcHRvKTsiLCIvKmdsb2JhbCBsb2NhbFN0b3JhZ2U6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSwgJDogZmFsc2UsIGNocm9tZTogZmFsc2UsIFhNTEh0dHBSZXF1ZXN0OiBmYWxzZSwgd2luZG93OiBmYWxzZSwgb3B0aW9uczogZmFsc2UsIHBvcHVwOiBmYWxzZSAqL1xuLyogRXZlbnQgbGlzdGVuZXJzIGZvciBwb3B1cC5qcyBmcm9tIGluZGV4Lmh0bWwgKi9cblxuJCgnZG9jdW1lbnQnKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHBvcHVwLmluaXQoKTtcbn0pO1xuXG4kKCcjcmVsb2FkJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBwb3B1cC5sb2FkQ3VzdG9tZXJzKCk7XG59KTtcblxuJCgnI2N1c3RvbWVycycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gIHBvcHVwLnBvcHVsYXRlQ3VzdG9tZXJEYXRhKCk7XG59KTtcblxuJCgnI3NlbmRfaW5mbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcG9wdXAuZmlsbERobEZvcm0oKTtcbn0pOyIsIi8qZ2xvYmFsIGxvY2FsU3RvcmFnZTogZmFsc2UsIGNvbnNvbGU6IGZhbHNlLCAkOiBmYWxzZSwgY2hyb21lOiBmYWxzZSwgWE1MSHR0cFJlcXVlc3Q6IGZhbHNlLCB3aW5kb3c6IGZhbHNlICovXG5cbnZhciBvcHRpb25zID0gIHtcblxuICAvKipcbiAgICAqIEBwdWJsaWNcbiAgICAqXG4gICAgKiBJbml0IHRoZSBjb21wb25lbnRcbiAgICAqL1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICogQHB1YmxpY1xuICAgICpcbiAgICAqIEdldCB0aGUgdmFsdWVzIGZyb20gbG9hY2FsIHN0b3JhZ2UgYW5kIHNlbmQgdGhlbSB0byBzZXRPcHRpb25zRE9NXG4gICAgKlxuICAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBlbmRwb2ludCwgaGVhZGVycywgb3VyIHJlZmVyZW5jZSBhbmQgZ29vZHMgaXRlbSByZWFkIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgKi9cbiAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmRwb2ludCA9IGxvY2FsU3RvcmFnZS5lbmRwb2ludCwgaGVhZGVycyA9IGxvY2FsU3RvcmFnZS5oZWFkZXJzLCBoZWFkZXJfanNvbiA9IEpTT04ucGFyc2UoaGVhZGVycyksIG91cl9yZWZlcmVuY2UgPSBsb2NhbFN0b3JhZ2Uub3VyX3JlZmVyZW5jZSwgZ29vZHNfaXRlbSA9IGxvY2FsU3RvcmFnZS5nb29kc19pdGVtO1xuICAgIHRoaXMuc2V0T3B0aW9uc0RPTShlbmRwb2ludCwgaGVhZGVyX2pzb24sIG91cl9yZWZlcmVuY2UsIGdvb2RzX2l0ZW0pO1xuICAgIHJldHVybiB7ZW5kcG9pbnQ6IGVuZHBvaW50LCBoZWFkZXJzOiBoZWFkZXJzLCBvdXJfcmVmZXJlbmNlOiBvdXJfcmVmZXJlbmNlLCBnb29kc19pdGVtOiBnb29kc19pdGVtfTtcbiAgfSxcblxuICAvKipcbiAgKiBAcHVibGljXG4gICpcbiAgICAqIFN0b3JlIHRoZSB2YWx1ZSBvZiB0aGUgZW5kcG9pbnQgZmllbGQgaW4gbG9jYWwgc3RvcmFnZVxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCBhbiB1cmxcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gRW5kcG9pbnQgdmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAqL1xuICBzZXRFbmRwb2ludDogZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgbG9jYWxTdG9yYWdlLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5lbmRwb2ludDtcbiAgfSxcblxuICAvKipcbiAgKiBAcHVibGljXG4gICpcbiAgICAqIFN0b3JlIHRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVycyBmaWVsZCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgKlxuICAgICogQHBhcmFtIHtqUXVlcnlET01PYmplY3RzfSBqcXVlcnkgY29tcGF0aWJsZSBhcnJheSBvY2ggRE9NIG9iamVjdHNcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gSGVhZGVycyB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICovXG4gIHNldEhlYWRlcnM6IGZ1bmN0aW9uIChoZWFkZXJfZmllbGRzKSB7XG4gICAgdmFyIGhlYWRlcl9kYXRhID0gW10sIGtleSwgdmFsdWUsIHR5cGUsIGpzb247XG5cbiAgICAkKGhlYWRlcl9maWVsZHMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2tleScpIHtcbiAgICAgICAga2V5ID0gJCh0aGlzKS52YWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhlYWRlcl9kYXRhLnB1c2goe2tleToga2V5LCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAganNvbiA9IEpTT04uc3RyaW5naWZ5KGhlYWRlcl9kYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2UuaGVhZGVycyA9IGpzb247XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmhlYWRlcnM7XG4gIH0sXG5cbiAgLyoqXG4gICogQHB1YmxpY1xuICAqXG4gICAgKiBTdG9yZSB0aGUgdmFsdWUgb2YgdGhlIG91cl9yZWZlcmVuY2UgZmllbGQgaW4gbG9jYWwgc3RvcmFnZVxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvdXIgcmVmZXJlbmNlIGEgc3RyaW5nIHZhbHVlXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IE91ciByZWZlcmVuY2UgdmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAqL1xuICBzZXRPdXJSZWZlcmVuY2U6IGZ1bmN0aW9uIChvdXJfcmVmZXJlbmNlKSB7XG4gICAgbG9jYWxTdG9yYWdlLm91cl9yZWZlcmVuY2UgPSBvdXJfcmVmZXJlbmNlO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uub3VyX3JlZmVyZW5jZTtcbiAgfSxcblxuICAvKipcbiAgKiBAcHVibGljXG4gICpcbiAgICAqIFN0b3JlIHRoZSB2YWx1ZSBvZiB0aGUgZ29vZHMgaXRlbSBmaWVsZCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9ICBnb29kcyBpdGVtIHN0cmluZyB2YWx1ZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgZ29vZHMgaXRlbSB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICovXG4gIHNldEdvb2RzSXRlbTogZnVuY3Rpb24gKGdvb2RzX2l0ZW0pIHtcbiAgICBsb2NhbFN0b3JhZ2UuZ29vZHNfaXRlbSA9IGdvb2RzX2l0ZW07XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nb29kc19pdGVtO1xuICB9LFxuXG4gIC8qKlxuICAqIEBwdWJsaWNcbiAgKlxuICAgICogVGVzdCB0aGUgY29ubmVjdGlvbiB0byB0aGUgZW5kcG9pbnQgYnkgc2VuZGluZyBhbiBYSFJcbiAgICAqIENhbGxzIHRoaXMudGVzdERhdGEgb24gc3VjY2Vzc1xuICAgICovXG4gIHRlc3RDb25uZWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZHBvaW50ID0gbG9jYWxTdG9yYWdlLmVuZHBvaW50LCBfdGhpcyA9IHRoaXMsIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgaGVhZGVycyA9IGxvY2FsU3RvcmFnZS5oZWFkZXJzLCBqc29uX2hlYWRlcnMgPSBKU09OLnBhcnNlKGhlYWRlcnMpLCBpO1xuICAgIHRoaXMudGVzdFJlc3VsdCgnJyk7XG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVuZHBvaW50LCB0cnVlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBqc29uX2hlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihqc29uX2hlYWRlcnNbaV0ua2V5LCBqc29uX2hlYWRlcnNbaV0udmFsdWUpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIF90aGlzLnRlc3RSZXN1bHQoJ09LJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMudGVzdFJlc3VsdCgnRmFpbCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgfSxcblxuICAvKipcbiAgKiBAcHJpdmF0ZVxuICAqXG4gICAgKiBTZXQgdmFsdWVzIGluIHRoZSBET00gaW5wdXQgZmllbGRzXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IGFuIHVybFxuICAgICogQHBhcmFtIHtKU09OQXJyYXl9IGhlYWRlcnMga2V5IHZhbHVlIGFycmF5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0byBiZSBkZWZhdWx0ZWQgaW4gdGhlIE91ciByZWZlcmVuY2UgZmllbGRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIG9mIGdvb2RzIHRoYXQgd2lsbCBiZSBkZWZhdWx0ZWQgaW4gdGhlIFR5cGUgb2YgZ29vZHMgZmllbGRcbiAgICAqL1xuICBzZXRPcHRpb25zRE9NOiBmdW5jdGlvbiAoZW5kcG9pbnQsIGhlYWRlcnMsIG91cl9yZWZlcmVuY2UsIGdvb2RzX2l0ZW0pIHtcblxuICAgIHZhciBoZWFkZXJfZG9tID0gJCgnLmhlYWRlci1pbnB1dCcpLCBlbmRwb2ludF9kb20gPSAkKCcjZW5kcG9pbnQnKSwgb3VyX3JlZmVyZW5jZV9kb20gPSAkKCcjb3VyX3JlZmVyZW5jZScpLCBnb29kc19pdGVtX2RvbSA9ICQoJyNnb29kc19pdGVtJyksIGZpZWxkX3BhaXIsIGksIGtleSwgdmFsdWU7XG5cbiAgICBpZiAoZW5kcG9pbnQpIHtcbiAgICAgIGVuZHBvaW50X2RvbS52YWwoZW5kcG9pbnQpO1xuICAgIH1cblxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICBmaWVsZF9wYWlyID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0gaGVhZGVyc1tpXS5rZXk7XG4gICAgICAgIHZhbHVlID0gaGVhZGVyc1tpXS52YWx1ZTtcblxuICAgICAgICBoZWFkZXJfZG9tW2ZpZWxkX3BhaXJdLnZhbHVlID0ga2V5O1xuICAgICAgICBoZWFkZXJfZG9tW2ZpZWxkX3BhaXIgKyAxXS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGZpZWxkX3BhaXIgKz0gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3VyX3JlZmVyZW5jZSkge1xuICAgICAgb3VyX3JlZmVyZW5jZV9kb20udmFsKG91cl9yZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIGlmIChnb29kc19pdGVtKSB7XG4gICAgICBnb29kc19pdGVtX2RvbS52YWwoZ29vZHNfaXRlbSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAqIEBwcml2YXRlXG4gICpcbiAgICAqIERpc3BsYXkgdGhlIHRlc3QgcmVzdWx0IGluIHRoZSB0ZXN0X3Jlc3VsdCBvYmplY3RcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSwgYSBtZXNzYWdlIHRvIGRpc3BsYXlcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXBwZW5kLCBkZXRlcm1pbmVzIGlmIHRoZSBtZXNzYWdlIHNoYWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBleGlzdGluZyBtZXNzYWdlIG9yIG5vdFxuICAgICovXG4gIHRlc3RSZXN1bHQ6IGZ1bmN0aW9uIChtZXNzYWdlLCBhcHBlbmQpIHtcbiAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAkKCcjdGVzdF9yZXN1bHQnKS5hcHBlbmQobWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyN0ZXN0X3Jlc3VsdCcpLmh0bWwobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuXG4iLCIvKmdsb2JhbCBsb2NhbFN0b3JhZ2U6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSwgJDogZmFsc2UsIGNocm9tZTogZmFsc2UsIFhNTEh0dHBSZXF1ZXN0OiBmYWxzZSwgd2luZG93OiBmYWxzZSwgb3B0aW9uczogZmFsc2UsIHBvcHVwOiBmYWxzZSAqL1xuLyogRXZlbnQgbGlzdGVuZXJzICBmb3Igb3B0aW9ucy5qcyBmcm9tIG9wdGlvbnMuaHRtbCAqL1xuXG4kKCdkb2N1bWVudCcpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgb3B0aW9ucy5pbml0KCk7XG59KTtcblxuJCgnI2VuZHBvaW50Jykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuICB2YXIgZW5kcG9pbnQgPSAkKHRoaXMpLnZhbCgpO1xuICBvcHRpb25zLnNldEVuZHBvaW50KGVuZHBvaW50KTtcbn0pO1xuXG4kKCcjb3VyX3JlZmVyZW5jZScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91cl9yZWZlcmVuY2UgPSAkKHRoaXMpLnZhbCgpO1xuICBvcHRpb25zLnNldE91clJlZmVyZW5jZShvdXJfcmVmZXJlbmNlKTtcbn0pO1xuXG4kKCcjZ29vZHNfaXRlbScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdvb2RzX2l0ZW0gPSAkKHRoaXMpLnZhbCgpO1xuICBvcHRpb25zLnNldEdvb2RzSXRlbShnb29kc19pdGVtKTtcbn0pO1xuXG4kKCcjdGVzdF9jb25uZWN0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBvcHRpb25zLnRlc3RDb25uZWN0aW9uKCk7XG59KTtcblxuJCgnLmhlYWRlci1pbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWRlcl9maWVsZHMgPSAkKCcuaGVhZGVyLWlucHV0Jyk7XG4gIG9wdGlvbnMuc2V0SGVhZGVycyhoZWFkZXJfZmllbGRzKTtcbn0pO1xuXG4iLCIvKmdsb2JhbCBsb2NhbFN0b3JhZ2U6IGZhbHNlLCBjb25zb2xlOiBmYWxzZSwgJDogZmFsc2UsIGNocm9tZTogZmFsc2UsIFhNTEh0dHBSZXF1ZXN0OiBmYWxzZSwgd2luZG93OiBmYWxzZSAqL1xuXG52YXIgcG9wdXAgPSB7XG5cbiAgLyoqXG4gICAgKiBAcHJpdmF0ZVxuICAgICpcbiAgICAqIFZhcmlhYmxlIHRvIGhvbGQgdGhlIEpTT05BcnJheSBvZiBjdXN0b21lcnNcbiAgICAqL1xuICBjdXN0b21lcnM6IG51bGwsXG5cbiAgLyoqXG4gICAgKiBAcHJpdmF0ZVxuICAgICpcbiAgICAqIFZhcmlhYmxlIHRvIGhvbGQgdGhlIGN1cnJlbnQgVVJMIG9mIHRoZSBhY3RpdmUgdGFiXG4gICAgKi9cbiAgY3VycmVudF91cmw6IG51bGwsXG5cbiAgLyoqXG4gICAgKiBAcHJpdmF0ZVxuICAgICpcbiAgICAqIFZhcmlhYmxlIHRvIGhvbGQgdGhlIHR3byBVUkxzIHdlIG5lZWQgdG8gaWRlbnRpZnkgd2hpY2ggZm9ybSB3ZSBhcmUgZmlsbGluZ1xuICAgICovXG4gIHRhcmdldF91cmxzOiB7cmVnaXN0ZXJfc2hpcG1lbnQ6ICdodHRwOi8vd3d3LmRobG11bHRpc2hpcHBpbmcuc2UvdHJhbnNuZXQvcmVnaXN0ZXIuZG8/bWV0aG9kPXZpZXcnLCBhZGRfYWRkcmVzczogJ2h0dHA6Ly93d3cuZGhsbXVsdGlzaGlwcGluZy5zZS90cmFuc25ldC9vcmdhbmlzYXRpb24uanNwP29yZ2FuaXNhdGlvbj1uZXcnfSxcblxuICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKlxuICAgICogVmFyaWFibGUgdG8gaG9sZCB0aGUgY29uZ2lndXJhdGlvbiBmb3IgdGhlIGRpZmZlcmVudCBzaGlwcG1lbnQgdHlwZXMgcmVjZWl2ZWQgZnJvbSB0aGUganNvbiBmZWVkIGFuZFxuICAgICogbWF0Y2ggdGhlbSB0byBESEwtSUQ6c1xuICAgICovXG4gIHNoaXBwbWVudF9zZXJ2aWNlczogW3snbmFtZSc6ICdESEwgUGFrZXQnLCAnaWQnOiAnMTgyODc1J30sIHsnbmFtZSc6ICdESEwgU2VydmljZXBvaW50JywgJ2lkJzogJzE4Mjg4MCd9XSxcblxuICAvKipcbiAgICAqIEBwdWJsaWNcbiAgICAqXG4gICAgKiBJbml0IHRoZSBjb21wb25lbnRcbiAgICAqL1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nZXRUYWJVcmwoKTtcbiAgICB0aGlzLmxvYWRDdXN0b21lcnMoKTtcbiAgfSxcblxuICAvKipcbiAgKiBAcHVibGljXG4gICpcbiAgKiBTZWxlY3Qgc2VydmljZSB0eXBlIGluIHRoZSBESEwgZm9ybVxuICAqIFxuICAqL1xuICBzZWxlY3RTaGlwcG1lbnQ6IGZ1bmN0aW9uIChzaGlwcG1lbnRfc2VydmljZSkge1xuXG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLmdldFNoaXBwaW5nU2VydmllY0J5TmFtZShzaGlwcG1lbnRfc2VydmljZSk7XG4gICAgdmFyIGNvZGUgPSAnaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwidGVtcGxhdGVQS1wiKVswXS52YWx1ZSAhPSBcIicgKyBzZXJ2aWNlICsgJ1wiKSB7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInRlbXBsYXRlUEtcIilbMF0udmFsdWUgPSBcIicgKyBzZXJ2aWNlICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZm9ybXNbMF0uc3VibWl0KCk7ZG9jdW1lbnQuZm9ybXNbMF0udGVtcGxhdGVQSy5kaXNhYmxlZD10cnVlOycgK1xuICAgICAgICAnfSc7XG5cbiAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KG51bGwsIHtjb2RlOiBjb2RlfSk7XG4gIH0sXG5cbiAgLyoqXG4gICogQHB1YmxpY1xuICAqXG4gICogU2VuZHMgYW4gWEhSIEdFVCByZXF1ZXN0IHRvIGdyYWIgY3VzdG9tZXJzLiBUaGUgWEhSJ3MgJ29ubG9hZCdcbiAgKiBldmVudCBpcyBob29rcyB1cCB0byB0aGUgJ2NyZWF0ZUN1c3RvbWVyT3B0aW9ucycgbWV0aG9kIHRocm91Z2ggYmluZC5cbiAgKi9cbiAgbG9hZEN1c3RvbWVyczogZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgaGVhZGVycyA9IGxvY2FsU3RvcmFnZS5oZWFkZXJzLCBqc29uX2hlYWRlcnMgPSBKU09OLnBhcnNlKGhlYWRlcnMpLCBpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGlucHV0IGZpZWxkc1xuICAgICQoJyNpZCcpLnZhbCgnJyk7XG4gICAgJCgnI25hbWUnKS52YWwoJycpO1xuICAgICQoJyNhZGRyZXNzJykudmFsKCcnKTtcbiAgICAkKCcjemlwY29kZScpLnZhbCgnJyk7XG4gICAgJCgnI2NpdHknKS52YWwoJycpO1xuICAgICQoJyNwaG9uZScpLnZhbCgnJyk7XG4gICAgJCgnI2VtYWlsJykudmFsKCcnKTtcblxuICAgIHZhciBlbmRwb2ludCA9IGxvY2FsU3RvcmFnZS5lbmRwb2ludDtcblxuICAgIGlmIChlbmRwb2ludC5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBtc2cgPSBjaHJvbWUuaTE4bi5nZXRNZXNzYWdlKFwibm9FbmRwb2ludENvbmZpZ3VyZWRUZXh0XCIpO1xuICAgICAgdGhpcy5lcnJvcihtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgZW5kcG9pbnQsIHRydWUpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGpzb25faGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGpzb25faGVhZGVyc1tpXS5rZXksIGpzb25faGVhZGVyc1tpXS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vbmxvYWQgPSB0aGlzLmNyZWF0ZUN1c3RvbWVyT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgfSxcblxuICAvKipcbiAgKiBAcHVibGljXG4gICpcbiAgKiBQb3B1bGF0ZSB0aGUgY3VzdG9tZXIgZGF0YSBpbiB0aGUgcmVsYXRlZCBmaWVsZHNcbiAgKi9cbiAgcG9wdWxhdGVDdXN0b21lckRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VzdG9tZXJJZCA9ICQoJyNjdXN0b21lcnMnKS52YWwoKSwgY3VzdG9tZXIgPSB0aGlzLmdldEN1c3RvbWVyQnlJZChjdXN0b21lcklkKTtcblxuICAgIHRoaXMuc2VsZWN0U2hpcHBtZW50KGN1c3RvbWVyLnNoaXBwaW5nKTtcbiAgICAkKCcjaWQnKS52YWwoY3VzdG9tZXIuaWQpO1xuICAgICQoJyNuYW1lJykudmFsKGN1c3RvbWVyLm5hbWUpO1xuICAgICQoJyNhZGRyZXNzJykudmFsKGN1c3RvbWVyLmFkZHJlc3MpO1xuICAgICQoJyN6aXBjb2RlJykudmFsKGN1c3RvbWVyLnppcGNvZGUpO1xuICAgICQoJyNjaXR5JykudmFsKGN1c3RvbWVyLmNpdHkpO1xuICAgICQoJyNwaG9uZScpLnZhbChjdXN0b21lci5waG9uZSk7XG4gICAgJCgnI2VtYWlsJykudmFsKGN1c3RvbWVyLmVtYWlsKTtcbiAgfSxcblxuICAvKipcbiAgKiBwdWJsaWNcbiAgKlxuICAqIEdldCB0aGUgZGF0YSBmcm9tIHRoZSBpbnB1dCBmaWVsZHMsIGJ1aWxkIGEgamF2YXNjcmlwdCBzdHJpbmdcbiAgKiBhbmQgc2VuZCB0aGVtIHRocm91Z2ggY2hyb21lLnRhYi5leGVjdXRlU2NyaXB0IHRvIHRoZSBjdXJyZW50XG4gICogYWN0aXZlIHRhYlxuICAqL1xuICBmaWxsRGhsRm9ybTogZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGlkID0gJCgnI2lkJykudmFsKCksIG5hbWUgPSAkKCcjbmFtZScpLnZhbCgpLCBhZGRyZXNzID0gJCgnI2FkZHJlc3MnKS52YWwoKSwgemlwY29kZSA9ICQoJyN6aXBjb2RlJykudmFsKCksIGNpdHkgPSAkKCcjY2l0eScpLnZhbCgpLCBwaG9uZSA9ICQoJyNwaG9uZScpLnZhbCgpLCBlbWFpbCA9ICQoJyNlbWFpbCcpLnZhbCgpLCBvdXJfcmVmZXJlbmNlID0gbG9jYWxTdG9yYWdlLm91cl9yZWZlcmVuY2UsIGdvb2RzX2l0ZW0gPSBsb2NhbFN0b3JhZ2UuZ29vZHNfaXRlbSwgY29kZTtcbiAgICB0aGlzLmdldFRhYlVybCgpO1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0X3VybHMucmVnaXN0ZXJfc2hpcG1lbnQgPT09IHRoaXMuY3VycmVudF91cmwpIHtcbiAgICAgIGNvZGUgPSAndmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7JyArXG4gICAgICAgICdldnQuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTsgJyArXG4gICAgICAgICd2YXIgY2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNpZ25lZV9tb2RlX290aGVyXCIpOyAnICtcbiAgICAgICAgJ2NiLmRpc3BhdGNoRXZlbnQoZXZ0KTsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc2lnbmVlX3RlbXAuaWRcIikudmFsdWUgPSBcIicgKyBpZCArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc2lnbmVlX3RlbXAubmFtZVwiKS52YWx1ZSA9IFwiJyArIG5hbWUgKyAnXCI7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNpZ25lZV90ZW1wLmFkZHJlc3NsaW5lWzBdXCIpLnZhbHVlID0gXCInICsgYWRkcmVzcyArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc2lnbmVlX3RlbXAucG9zdGNvZGVcIikudmFsdWUgPSBcIicgKyB6aXBjb2RlICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25zaWduZWVfdGVtcC5jaXR5XCIpLnZhbHVlID0gXCInICsgY2l0eSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc2lnbmVlX3RlbXAuY29udGFjdFBlcnNvblwiKS52YWx1ZSA9IFwiJyArIG5hbWUgKyAnXCI7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnNpZ25lZV90ZW1wLm1vYmlsZVwiKS52YWx1ZSA9IFwiJyArIHBob25lICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25zaWduZWVfdGVtcC5waG9uZVwiKS52YWx1ZSA9IFwiJyArIHBob25lICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25zaWduZWVfdGVtcC5lbWFpbFwiKS52YWx1ZSA9IFwiJyArIGVtYWlsICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJjb25zaWduZWVfdGVtcF9zYXZlXCIpWzBdLmNoZWNrZWQgPSB0cnVlOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlck5vXCIpLnZhbHVlID0gXCInICsgb3VyX3JlZmVyZW5jZSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uc2lnbmVlUmVmZXJlbmNlXCIpLnZhbHVlID0gXCInICsgbmFtZSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZHNJdGVtTGlzdC5nb29kc0l0ZW1zWzBdLmdvb2RzSXRlbVJlZmVyZW5jZXNbMV0udmFsdWVcIikudmFsdWU9XCInICsgZ29vZHNfaXRlbSArICdcIjsnICtcbiAgICAgICAgJ3ZhciBldnQyID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTsnICtcbiAgICAgICAgJ2V2dDIuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTsgJyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIm5vdGlmeVwiKVswXS5kaXNwYXRjaEV2ZW50KGV2dDIpOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RpZnlTbXNWYWx1ZVwiKS52YWx1ZSA9IFwiJyArIHBob25lICsgJ1wiOyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZGUgPSAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZFwiKS52YWx1ZSA9IFwiJyArIGlkICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlID0gXCInICsgbmFtZSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzc2xpbmUuMFwiKS52YWx1ZSA9IFwiJyArIGFkZHJlc3MgKyAnXCI7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Rjb2RlXCIpLnZhbHVlID0gXCInICsgemlwY29kZSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKS52YWx1ZSA9IFwiJyArIGNpdHkgKyAnXCI7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RQZXJzb25cIikudmFsdWUgPSBcIicgKyBuYW1lICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZVwiKS52YWx1ZSA9IFwiJyArIHBob25lICsgJ1wiOycgK1xuICAgICAgICAnZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVcIikudmFsdWUgPSBcIicgKyBwaG9uZSArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWUgPSBcIicgKyBlbWFpbCArICdcIjsnICtcbiAgICAgICAgJ2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZS5jb25zaWduZWVcIikuY2hlY2tlZCA9IHRydWU7JyArXG4gICAgICAgICdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGUubm90aWZ5XCIpLmNoZWNrZWQgPSB0cnVlOyc7XG4gICAgfVxuICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwge2NvZGU6IGNvZGV9KTtcbiAgfSxcblxuICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKlxuICAgICogR2V0IHRoZSBTaGlwcGluZyBTZXJ2aWNlIElEIGJhc2VkIHVwb24gdGhlIG5hbWUgc2VydmljZSBuYW1lXG4gICAgKi9cbiAgZ2V0U2hpcHBpbmdTZXJ2aWVjQnlOYW1lOiBmdW5jdGlvbiAoc2hpcHBtZW50X3NlcnZpY2VfbmFtZSkge1xuICAgIHZhciBzZXJ2aWNlID0gJycsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2hpcHBtZW50X3NlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zaGlwcG1lbnRfc2VydmljZXNbaV0ubmFtZSA9PT0gc2hpcHBtZW50X3NlcnZpY2VfbmFtZSkge1xuICAgICAgICBzZXJ2aWNlID0gdGhpcy5zaGlwcG1lbnRfc2VydmljZXNbaV0uaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VydmljZTtcbiAgfSxcblxuICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKlxuICAgICogR28gZ2V0IHRoZSBjdXJyZW50IHRhYiBVUkwgYW5kIHN0b3JlIGl0IGluIHRoaXMuY3VycmVudF91cmw7XG4gICAgKi9cbiAgZ2V0VGFiVXJsOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHtjdXJyZW50V2luZG93OiB0cnVlLCBhY3RpdmU6IHRydWV9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgX3RoaXMuY3VycmVudF91cmwgPSB0YWJzWzBdLnVybDtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICAqIEBwcml2YXRlXG4gICAgKlxuICAgICogU2VhcmNoIHRoZSAnY3VzdG9tZXJzJyBhcnJheSBmb3IgYSBjdXN0b21lciB3aXRoIHRoZSBwYXNzZWQgY3VzdG9tZXJJZCBhcyBpZFxuICAgICpcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXN0b21lcklkLCBhIGN1c3RvbWVyIElEXG4gICAgKiBAcmV0dXJuIHtKU09Ob2JqZWN0fSBjdXN0b21lclxuICAgICovXG4gIGdldEN1c3RvbWVyQnlJZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tZXJzW2lkXTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogVXBkYXRlcyB0aGUgI2N1c3RvbWVycyBzZWxlY3QgaW5wdXQgd2l0aCBuZXcgdmFsdWVzIGJhc2VkIG9uIHRoZSBwYXNzZWRcbiAgICogY3VzdG9tZXJzIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGN1c3RvbWVycywgQ3VzdG9tZXJzIG9iamVjdHMgd2l0aCBjdXN0b21lciBpZHMgYXMga2V5c1xuICAgKiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgY3VzdG9tZXIgYXMgdmFsdWUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gY3VzdG9tZXJzLmlkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjdXN0b21lcnMubmFtZVxuICAgKi9cbiAgdXBkYXRlQ3VzdG9tZXJPcHRpb25zRE9NOiBmdW5jdGlvbiAoY3VzdG9tZXJzKSB7XG4gICAgdmFyIG9wdGlvbnMsIGN1c3RvbWVyLCBzZWxlY3RfY3VzdG9tZXJfbXNnID0gY2hyb21lLmkxOG4uZ2V0TWVzc2FnZShcInNlbGVjdEN1c3RvbWVyVGV4dFwiKTtcblxuICAgIG9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPicgKyBzZWxlY3RfY3VzdG9tZXJfbXNnICsgJzwvb3B0aW9uPic7XG5cbiAgICBPYmplY3Qua2V5cyhjdXN0b21lcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgY3VzdG9tZXIgPSBjdXN0b21lcnNba2V5XTtcbiAgICAgIG9wdGlvbnMgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgY3VzdG9tZXIuaWQgKyAnXCI+JyArIGN1c3RvbWVyLm5hbWUgKyAnPC9vcHRpb24+JztcbiAgICB9KTtcblxuICAgICQoJyNjdXN0b21lcnMnKS5odG1sKG9wdGlvbnMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBQYXJzZXMgZXZlbnQgcmVzcG9uc2VUZXh0IGludG8gYSBjdXN0b21lciBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7cmVzcG9uc2VUZXh0fSByZXNwb25zZVRleHQsIEpTT04gZW5jb2RlZCBBcnJheSBvZiBjdXN0b21lciBvYmplY3RzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGN1c3RvbWVyIGlkcyBhcyBrZXlzIGFuZCB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiBjdXN0b21lciBhcyB2YWx1ZS5cbiAgICovXG4gIHBhcnNlUmVzcG9zZXRleHRUb0N1c3RvbWVyczogZnVuY3Rpb24gKHJlc3BvbnNlVGV4dCkge1xuICAgIHZhciBjdXN0b21lckFycmF5LCBjdXN0b21lcnM7XG5cbiAgICBjdXN0b21lckFycmF5ID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgIGN1c3RvbWVycyA9IHt9O1xuXG4gICAgY3VzdG9tZXJBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjdXN0b21lcikge1xuICAgICAgY3VzdG9tZXJzW2N1c3RvbWVyLmlkXSA9IGN1c3RvbWVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1c3RvbWVycztcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQ3JlYXRlIHRoZSBjdXN0b21lciBvcHRpb25zIGluIHRoZSAnY3VzdG9tZXJzJyBzZWxlY3Qgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7UHJvZ3Jlc3NFdmVudH0gZSBUaGUgWEhSIFByb2dyZXNzRXZlbnQuXG4gICAqL1xuICBjcmVhdGVDdXN0b21lck9wdGlvbnM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciByZXNwb25zZVRleHQsIGN1c3RvbWVycztcblxuICAgIHJlc3BvbnNlVGV4dCA9IGV2ZW50LnRhcmdldC5yZXNwb25zZVRleHQ7XG4gICAgY3VzdG9tZXJzID0gdGhpcy5wYXJzZVJlc3Bvc2V0ZXh0VG9DdXN0b21lcnMocmVzcG9uc2VUZXh0KTtcbiAgICB0aGlzLnVwZGF0ZUN1c3RvbWVyT3B0aW9uc0RPTShjdXN0b21lcnMpO1xuICAgIHRoaXMuY3VzdG9tZXJzID0gY3VzdG9tZXJzO1xuICB9LFxuXG4gIC8qKlxuICAqIEBwcml2YXRlXG4gICpcbiAgKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGVycm9yIGNvbnRhaW5lclxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UsIHRoZSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZFxuICAqL1xuICBlcnJvcjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB2YXIgZXJyb3JDb250YWluZXIgPSAkKCcjZXJyb3InKTtcbiAgICBlcnJvckNvbnRhaW5lci5odG1sKG1lc3NhZ2UpO1xuICB9XG5cbn07XG5cblxuIiwiLypcbiAqICByZXBsYWNlIHRoZSB0ZXh0IGF0dHJpYnV0ZXMgd2l0aCBzdHJpbmdzIGZyb20gdGhlIHRyYW5zbGF0aW9uIHJlc291cmNlc1xuICpcbiAqKi9cbiQoJ1tkYXRhLXJlc291cmNlXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gIHZhciBlbCA9ICQodGhpcyk7XG4gIHZhciByZXNvdXJjZU5hbWUgPSBlbC5kYXRhKCdyZXNvdXJjZScpO1xuICB2YXIgcmVzb3VyY2VUZXh0ID0gY2hyb21lLmkxOG4uZ2V0TWVzc2FnZShyZXNvdXJjZU5hbWUpO1xuICBlbC50ZXh0KHJlc291cmNlVGV4dCk7XG59KTtcblxuXG4vKlxuICogIHJlcGxhY2UgdGhlIHBsYWNlaG9sZGVyIHZhbHVlcyB3aXRoIHN0cmluZ3MgZnJvbSB0aGUgdHJhbnNsYXRpb24gcmVzb3VyY2VzXG4gKlxuICoqL1xuJCgnW2RhdGEtcGxhY2Vob2xkZXJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgdmFyIGVsID0gJCh0aGlzKTtcbiAgdmFyIHJlc291cmNlTmFtZSA9IGVsLmRhdGEoJ3BsYWNlaG9sZGVyJyk7XG4gIHZhciByZXNvdXJjZVRleHQgPSBjaHJvbWUuaTE4bi5nZXRNZXNzYWdlKHJlc291cmNlTmFtZSk7XG4gIGVsLmRhdGEoJ3BsYWNlaG9sZGVyJywgcmVzb3VyY2VUZXh0KTtcbn0pO1xuXG5cbi8qXG4gKiAgcmVwbGFjZSB0aGUgb3B0aW9ucyB2YWx1ZXMgd2l0aCB0ZXh0IHN0cmluZ3MgZnJvbSB0aGUgdHJhbnNsYXRpb24gcmVzb3VyY2VzXG4gKlxuICoqL1xuJCgnW2RhdGEtb3B0aW9uXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gIHZhciBlbCA9ICQodGhpcyk7XG4gIHZhciByZXNvdXJjZU5hbWUgPSBlbC5kYXRhKCdvcHRpb24nKTtcbiAgdmFyIHJlc291cmNlVGV4dCA9IGNocm9tZS5pMThuLmdldE1lc3NhZ2UocmVzb3VyY2VOYW1lKTtcbiAgZWwudGV4dChyZXNvdXJjZVRleHQpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9