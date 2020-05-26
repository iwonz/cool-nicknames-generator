!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,u=o.length;i<u;i++,a++)r[a]=o[i];return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(1);var o=a(n(6)),i=a(n(7)),u=n(8),s=document.getElementById("result"),c=document.getElementById("copy"),l=document.getElementById("nickname"),f=window.location.hash.substr(1);f&&(l.value=f),setTimeout((function(){return l.focus()}),100);var d=Ya.share2(document.getElementById("share"),{theme:{services:"vkontakte,facebook,twitter,reddit,evernote,linkedin,lj,tumblr,viber,whatsapp,skype,telegram"}});function p(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=180,e.height=84,t.fillStyle="rebeccapurple",t.fillRect(0,0,e.width,e.height);var n=1e3;for(t.font=n+"px Tahoma";t.measureText(v.text).width>=.75*e.width;)n-=20,t.font=n+"px Tahoma";return t.fillStyle="#ffffff",t.fillText(v.text,e.width/2-t.measureText(v.text).width/2,e.height/1.5),e.toDataURL("image/webp",.01)}var h=u.debounce((function(){d.updateContent({url:window.location.origin+"/#"+l.value,title:"My nickname "+l.value+" looks like "+v.text+" if you write it in cool characters.",description:"Cool Nickname Generator transform my nickname "+l.value+" to "+v.text+" using cool characters. "+p(),image:p()})}),300);function m(){var e=[],t=r(s.querySelectorAll(".letter")).map((function(e){return e.innerHTML}));s.innerHTML="",v.letters.forEach((function(n,r){var a=document.createElement("span");a.classList.add("letter"),a.setAttribute("data-origin-letter",n.original),a.setAttribute("data-letter-index",String(n.index)),a.innerHTML=n.transformed,s.appendChild(a),t[r]&&t[r]===n.transformed||e.push(a)})),window.location.hash=l.value,h(),i.default({targets:e,translateY:[100,0],delay:i.default.stagger(50)})}var v=u.transform(l.value);m(),c.addEventListener("click",(function(){o.default(v.text),alert("Your cool nickname "+v.text+" was copied to the clipboard.")})),l.addEventListener("keyup",(function(){v.transform(l.value),m()})),s.addEventListener("click",(function(e){if(e.target.classList.contains("letter")){var t=Number(e.target.dataset.letterIndex);e.target.innerHTML=v.letters[t].nextTransformed,m()}})),s.addEventListener("wheel",(function(e){if(e.target.classList.contains("letter")){var t=e.deltaX>0||e.deltaY>0,n=Number(e.target.dataset.letterIndex),r=t?v.letters[n].nextTransformed:v.letters[n].prevTransformed;e.target.innerHTML=r,m()}}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(2)},function(e,t,n){var r=n(3),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],c=n[s]||0,l="".concat(s," ").concat(c);n[s]=c+1;var f=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:v(d,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=c(t)),r=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=u(n[r]);i[a].references--}for(var o=s(e,t),c=0;c<n.length;c++){var l=u(n[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Jost:wght@100&display=swap);"]),t.push([e.i,"*{box-sizing:border-box}body,html{padding:0;margin:0;width:100%;height:100%;overflow:hidden;font-family:Jost,sans-serif;font-weight:100}.form{height:100%;flex-direction:column;position:relative}.form,.form__input{display:flex;justify-content:center;align-items:center}.form__input{flex-basis:50%}input[type=text]{width:100%;font-size:8vw;border:none;outline:none;text-align:center;background:transparent;font-family:Jost,sans-serif;color:#639}#result{font-size:8vw;padding:25px;font-family:Tahoma,sans-serif;text-align:center;font-weight:700;color:#639;display:flex;justify-content:center;align-items:center;flex-basis:50%;background-color:#639;width:100%;overflow:hidden}#copy{display:none;border:none;outline:none;padding:10px;background-color:#639;color:#fff;cursor:pointer;transition:all .2s ease-in-out;top:50%;margin-left:-100px;margin-top:-30px;width:200px;height:60px}#copy,.ya-share2{position:absolute;left:50%}.ya-share2{bottom:25px;margin-left:-181px}#copy:hover{transform:scale(1.2)}#result:not(:empty)+#copy{display:block}.letter{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:15px;border:1px solid #fff;margin-right:15px;height:50%;color:#fff;display:flex;align-items:center;justify-content:center}.letter:hover{color:#639;background-color:#fff}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,u,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(e){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),i};e.exports=r,e.exports.default=r},function(e,t,n){"use strict";n.r(t);var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],i={CSS:{},springs:{}};function u(e,t,n){return Math.min(Math.max(e,t),n)}function s(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return s(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function f(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function d(e,t){var n=f(e),r=u(l.und(n[0])?1:n[0],.1,100),a=u(l.und(n[1])?100:n[1],.1,100),o=u(l.und(n[2])?10:n[2],.1,100),s=u(l.und(n[3])?0:n[3],.1,100),c=Math.sqrt(a/r),d=o/(2*Math.sqrt(a*r)),p=d<1?c*Math.sqrt(1-d*d):0,h=d<1?(d*c-s)/p:-s+c;function m(e){var n=t?t*e/1e3:e;return n=d<1?Math.exp(-n*d*c)*(1*Math.cos(p*n)+h*Math.sin(p*n)):(1+h*n)*Math.exp(-n*c),0===e||1===e?e:1-n}return t?m:function(){var t=i.springs[e];if(t)return t;for(var n=0,r=0;;)if(1===m(n+=1/6)){if(++r>=16)break}else r=0;var a=n*(1/6)*1e3;return i.springs[e]=a,a}}function p(e){return void 0===e&&(e=10),function(t){return Math.ceil(u(t,1e-6,1)*e)*(1/e)}}var h,m,v=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function n(e){return 3*e}function r(r,a,o){return((e(a,o)*r+t(a,o))*r+n(a))*r}function a(r,a,o){return 3*e(a,o)*r*r+2*t(a,o)*r+n(a)}return function(e,t,n,o){if(0<=e&&e<=1&&0<=n&&n<=1){var i=new Float32Array(11);if(e!==t||n!==o)for(var u=0;u<11;++u)i[u]=r(.1*u,e,n);return function(a){return e===t&&n===o||0===a||1===a?a:r(s(a),t,o)}}function s(t){for(var o=0,u=1;10!==u&&i[u]<=t;++u)o+=.1;--u;var s=o+.1*((t-i[u])/(i[u+1]-i[u])),c=a(s,e,n);return c>=.001?function(e,t,n,o){for(var i=0;i<4;++i){var u=a(t,n,o);if(0===u)return t;t-=(r(t,n,o)-e)/u}return t}(t,s,e,n):0===c?s:function(e,t,n,a,o){var i,u,s=0;do{(i=r(u=t+(n-t)/2,a,o)-e)>0?n=u:t=u}while(Math.abs(i)>1e-7&&++s<10);return u}(t,o,o+.1,e,n)}}}(),g=(h={linear:function(){return function(e){return e}}},m={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=u(e,1,10),r=u(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){m[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(m).forEach((function(e){var t=m[e];h["easeIn"+e]=t,h["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},h["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}}})),h);function y(e,t){if(l.fnc(e))return e;var n=e.split("(")[0],r=g[n],a=f(e);switch(n){case"spring":return d(e,t);case"cubicBezier":return c(v,a);case"steps":return c(p,a);default:return c(r,a)}}function b(e){try{return document.querySelectorAll(e)}catch(e){return}}function x(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function w(e){return e.reduce((function(e,t){return e.concat(l.arr(t)?w(t):t)}),[])}function M(e){return l.arr(e)?e:(l.str(e)&&(e=b(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function T(e,t){return e.some((function(e){return e===t}))}function I(e){var t={};for(var n in e)t[n]=e[n];return t}function k(e,t){var n=I(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function C(e,t){var n=I(e);for(var r in t)n[r]=l.und(e[r])?t[r]:e[r];return n}function O(e){return l.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:l.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):l.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;t=c(f,l,o+1/3),n=c(f,l,o),r=c(f,l,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0;var t,n}function j(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function E(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function L(e,t){return e.getAttribute(t)}function S(e,t,n){if(T([n,"deg","rad","turn"],j(t)))return t;var r=i.CSS[t+n];if(!l.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+n;var u=100/a.offsetWidth;o.removeChild(a);var s=u*parseFloat(t);return i.CSS[t+n]=s,s}function A(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?S(e,a,n):a}}function D(e,t){return l.dom(e)&&!l.inp(e)&&(L(e,t)||l.svg(e)&&e[t])?"attribute":l.dom(e)&&T(o,t)?"transform":l.dom(e)&&"transform"!==t&&A(e,t)?"css":null!=e[t]?"object":void 0}function N(e){if(l.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function P(e,t,n,r){var a=s(t,"scale")?1:0+function(e){return s(e,"translate")||"perspective"===e?"px":s(e,"rotate")||s(e,"skew")?"deg":void 0}(t),o=N(e).get(t)||a;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?S(e,o,r):o}function B(e,t,n,r){switch(D(e,t)){case"transform":return P(e,t,r,n);case"css":return A(e,t,n);case"attribute":return L(e,t);default:return e[t]||0}}function _(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=j(e)||0,a=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function R(e,t){if(l.col(e))return O(e);if(/\s/g.test(e))return e;var n=j(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function F(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function q(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var o=n.getItem(a);a>0&&(r+=F(t,o)),t=o}return r}function Y(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*L(e,"r")}(e);case"rect":return function(e){return 2*L(e,"width")+2*L(e,"height")}(e);case"line":return function(e){return F({x:L(e,"x1"),y:L(e,"y1")},{x:L(e,"x2"),y:L(e,"y2")})}(e);case"polyline":return q(e);case"polygon":return function(e){var t=e.points;return q(e)+F(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function U(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;l.svg(t)&&l.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),o=L(r,"viewBox"),i=a.width,u=a.height,s=n.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i/s[2],h:u/s[3]}}function H(e,t){function n(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var r=U(e.el,e.svg),a=n(),o=n(-1),i=n(1);switch(e.property){case"x":return(a.x-r.x)*r.w;case"y":return(a.y-r.y)*r.h;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function z(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=R(l.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(e)||t?r.split(n):[]}}function $(e){return x(e?w(l.arr(e)?e.map(M):M(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function J(e){var t=$(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:N(e)}}}))}function X(e,t){var n=I(t);if(/^spring/.test(n.easing)&&(n.duration=d(n.easing)),l.arr(e)){var r=e.length;2===r&&!l.obj(e[0])?e={value:e}:l.fnc(t.duration)||(n.duration=t.duration/r)}var a=l.arr(e)?e:[e];return a.map((function(e,n){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=n?0:t.delay),l.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return C(e,n)}))}function Q(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=C(function(e){for(var t=x(w(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)l.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)l.key(a)&&n.push({name:a,tweens:X(t[a],e)});return n}function Z(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=E(e[r],t);l.arr(a)&&1===(a=a.map((function(e){return E(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=a.value,i=l.arr(o)?o[1]:o,u=j(i),s=B(t.target,e.name,u,t),c=n?n.to.original:s,f=l.arr(o)?o[0]:c,d=j(f)||j(s),p=u||d;return l.und(i)&&(i=c),a.from=z(f,p),a.to=z(_(i,f),p),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(o),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var V={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function G(e,t){J(e).forEach((function(e){for(var n in t){var r=E(t[n],e),a=e.target,o=j(r),i=B(a,n,o,e),u=_(R(r,o||j(i)),i),s=D(a,n);V[s](a,n,u,e.transforms,!0)}}))}function W(e,t){return x(w(e.map((function(e){return t.map((function(t){return function(e,t){var n=D(e.target,t.name);if(n){var r=Z(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!l.und(e)}))}function K(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te,ne=[],re=[],ae=function(){function e(){te=requestAnimationFrame(t)}function t(t){var n=ne.length;if(n){for(var r=0;r<n;){var a=ne[r];if(a.paused){var o=ne.indexOf(a);o>-1&&(ne.splice(o,1),n=ne.length)}else a.tick(t);r++}e()}else te=cancelAnimationFrame(te)}return e}();function oe(e){void 0===e&&(e={});var t,n=0,o=0,i=0,s=0,c=null;function l(e){var t=window.Promise&&new Promise((function(e){return c=e}));return e.finished=t,t}var f=function(e){var t=k(r,e),n=k(a,e),o=Q(n,e),i=J(e.targets),u=W(i,o),s=K(u,n),c=ee;return ee++,C(t,{id:c,children:[],animatables:i,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);l(f);function d(){var e=f.direction;"alternate"!==e&&(f.direction="normal"!==e?"normal":"reverse"),f.reversed=!f.reversed,t.forEach((function(e){return e.reversed=f.reversed}))}function p(e){return f.reversed?f.duration-e:e}function h(){n=0,o=p(f.currentTime)*(1/oe.speed)}function m(e,t){t&&t.seek(e-t.timelineOffset)}function v(e){for(var t=0,n=f.animations,r=n.length;t<r;){var a=n[t],o=a.animatable,i=a.tweens,s=i.length-1,c=i[s];s&&(c=x(i,(function(t){return e<t.end}))[0]||c);for(var l=u(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(l)?1:c.easing(l),p=c.to.strings,h=c.round,m=[],v=c.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,w=c.to.numbers[y],M=c.from.numbers[y]||0;b=c.isPath?H(c.value,d*w):M+d*(w-M),h&&(c.isColor&&y>2||(b=Math.round(b*h)/h)),m.push(b)}var T=p.length;if(T){g=p[0];for(var I=0;I<T;I++){p[I];var k=p[I+1],C=m[I];isNaN(C)||(g+=k?C+k:C+" ")}}else g=m[0];V[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,t++}}function g(e){f[e]&&!f.passThrough&&f[e](f)}function y(e){var r=f.duration,a=f.delay,h=r-f.endDelay,y=p(e);f.progress=u(y/r*100,0,100),f.reversePlayback=y<f.currentTime,t&&function(e){if(f.reversePlayback)for(var n=s;n--;)m(e,t[n]);else for(var r=0;r<s;r++)m(e,t[r])}(y),!f.began&&f.currentTime>0&&(f.began=!0,g("begin")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,g("loopBegin")),y<=a&&0!==f.currentTime&&v(0),(y>=h&&f.currentTime!==r||!r)&&v(r),y>a&&y<h?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,g("changeComplete")),f.currentTime=u(y,0,r),f.began&&g("update"),e>=r&&(o=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(n=i,g("loopComplete"),f.loopBegan=!1,"alternate"===f.direction&&d()):(f.paused=!0,f.completed||(f.completed=!0,g("loopComplete"),g("complete"),!f.passThrough&&"Promise"in window&&(c(),l(f)))))}return f.reset=function(){var e=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed="reverse"===e,f.remaining=f.loop,t=f.children;for(var n=s=t.length;n--;)f.children[n].reset();(f.reversed&&!0!==f.loop||"alternate"===e&&1===f.loop)&&f.remaining++,v(f.reversed?f.duration:0)},f.set=function(e,t){return G(e,t),f},f.tick=function(e){i=e,n||(n=i),y((i+(o-n))*oe.speed)},f.seek=function(e){y(p(e))},f.pause=function(){f.paused=!0,h()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,ne.push(f),h(),te||ae())},f.reverse=function(){d(),f.completed=!f.reversed,h()},f.restart=function(){f.reset(),f.play()},f.reset(),f.autoplay&&f.play(),f}function ie(e,t){for(var n=t.length;n--;)T(e,t[n].animatable.target)&&t.splice(n,1)}"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){document.hidden?(ne.forEach((function(e){return e.pause()})),re=ne.slice(0),oe.running=ne=[]):re.forEach((function(e){return e.play()}))})),oe.version="3.2.0",oe.speed=1,oe.running=ne,oe.remove=function(e){for(var t=$(e),n=ne.length;n--;){var r=ne[n],a=r.animations,o=r.children;ie(t,a);for(var i=o.length;i--;){var u=o[i],s=u.animations;ie(t,s),s.length||u.children.length||o.splice(i,1)}a.length||o.length||r.pause()}},oe.get=B,oe.set=G,oe.convertPx=S,oe.path=function(e,t){var n=l.str(e)?b(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:U(n),totalLength:Y(n)*(r/100)}}},oe.setDashoffset=function(e){var t=Y(e);return e.setAttribute("stroke-dasharray",t),t},oe.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,o=t.axis,i=t.from||0,u="first"===i,s="center"===i,c="last"===i,f=l.arr(e),d=f?parseFloat(e[0]):parseFloat(e),p=f?parseFloat(e[1]):0,h=j(f?e[1]:e)||0,m=t.start||0+(f?d:0),v=[],g=0;return function(e,t,l){if(u&&(i=0),s&&(i=(l-1)/2),c&&(i=l-1),!v.length){for(var y=0;y<l;y++){if(a){var b=s?(a[0]-1)/2:i%a[0],x=s?(a[1]-1)/2:Math.floor(i/a[0]),w=b-y%a[0],M=x-Math.floor(y/a[0]),T=Math.sqrt(w*w+M*M);"x"===o&&(T=-w),"y"===o&&(T=-M),v.push(T)}else v.push(Math.abs(i-y));g=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/g)*g}))),"reverse"===n&&(v=v.map((function(e){return o?e<0?-1*e:-e:Math.abs(g-e)})))}return m+(f?(p-d)/g:d)*(Math.round(100*v[t])/100)+h}},oe.timeline=function(e){void 0===e&&(e={});var t=oe(e);return t.duration=0,t.add=function(n,r){var o=ne.indexOf(t),i=t.children;function u(e){e.passThrough=!0}o>-1&&ne.splice(o,1);for(var s=0;s<i.length;s++)u(i[s]);var c=C(n,k(a,e));c.targets=c.targets||e.targets;var f=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=l.und(r)?f:_(r,f),u(t),t.seek(c.timelineOffset);var d=oe(c);u(d),i.push(d);var p=K(i,e);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},oe.easing=y,oe.penner=g,oe.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t.default=oe},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canvasToDataUrlDebug=t.debounce=t.transform=t.getLetter=void 0;var r=n(9);function a(e,t){var n,a={original:e,index:t,transformed:e,transformedIndex:0,get prevTransformed(){var e=r.DICTIONARY[this.original.toLowerCase()];return e?(0===this.transformedIndex?this.transformedIndex=e.length-1:this.transformedIndex--,this.transformed=e[this.transformedIndex],e[this.transformedIndex]):this.original},get nextTransformed(){var e=r.DICTIONARY[this.original.toLowerCase()];return e?(this.transformedIndex===e.length-1?this.transformedIndex=0:this.transformedIndex++,this.transformed=e[this.transformedIndex],e[this.transformedIndex]):this.original}};try{var o=r.DICTIONARY[e.toLowerCase()];if(!o)return a;var i=(n=o.length,Math.round(Math.random()*(n-1))),u=o[i],s=e.toUpperCase()===e;return a.original=e,a.index=t,a.transformed=s?u.toUpperCase():u,a.transformedIndex=i,a}catch(e){return a}}t.getLetter=a,t.transform=function(e){for(var t={get text(){return this.letters.map((function(e){return e.transformed})).join("")},letters:[],transform:function(e){for(var t=[],n=0;n<e.length;n++)this.letters[n]&&this.letters[n].original===e[n]?t.push(this.letters[n]):t.push(a(e[n],n));this.letters=t}},n=0;n<e.length;n++)t.letters.push(a(e[n],n));return t},t.debounce=function(e,t){var n;return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){e.apply(void 0,r)}),t)}},t.canvasToDataUrlDebug=function(e){var t=["apng","bmp","gif","x-icon","jpeg","png","svg+xml","tiff","webp"].reduce((function(e,t){for(var n=.01;n<1;n+=.01)e.push({format:t,quality:+n.toFixed(2)});return e}),[]),n=[];t.forEach((function(t,r,a){setTimeout((function(){var o=e.toDataURL("image/"+t.format,t.quality);n.push({format:t.format,quality:t.quality,length:o.length,data:o}),r===a.length-1&&(n.sort((function(e,t){return e.length-t.length})),console.log(n))}),r+10)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DICTIONARY=void 0,t.DICTIONARY={a:["Ꭿ","∀","₳","Ǻ","ǻ","α","ά","Ǡ","Ắ","ắ","Ằ","ằ","ẳ","Ẵ","ẵ","Ä","ª","ä","Å","À","Á","Â","å","ã","â","à","á","Ã","ᗩ","@","Ⱥ","Ǟ"],b:["ℬ","Ᏸ","β","฿","ß","Ђ","ᗷ","ᗽ","ᗾ","ᗿ","Ɓ","ƀ","ხ","␢","Ᏸ","ᗸ","ᗹ","ᛔ"],c:["☾","ℭ","ℂ","Ç","¢","ç","Č","ċ","Ċ","ĉ","ς","Ĉ","ć","Ć","č","Ḉ","ḉ","⊂","Ꮸ","₡","¢","Ⴚ"],d:["ᗫ","Ɗ","Ď","ď","Đ","đ","ð","∂","₫","ȡ","ᚦ","ᚧ"],e:["ℰ","ℯ","ໂ","६","£","Ē","℮","ē","Ė","ė","Ę","ě","Ě","ę","Έ","ê","ξ","Ê","È","€","É","∑","Ế","Ề","Ể","Ễ","é","è","عЄ","є","έ","ε","Ҿ","ҿ"],f:["ℱ","₣","ƒ","∮","Ḟ","ḟ","ჶ","ᶂ","φ","ᚨ","ᚩ","ᚪ","ᚫ"],g:["Ꮹ","Ꮆ","ℊ","Ǥ","ǥ","Ĝ","ĝ","Ğ","ğ","Ġ","ġ","Ģ","ģ","פ","ᶃ","₲"],h:["ℍ","ℋ","ℎ","ℌ","ℏ","ዙ","Ꮵ","Ĥ","Ħ","ħ","Ή","廾","Ћ","ђ","Ḩ","Һ","ḩ","♄","ਮ"],i:["ℐ","ί","ι","Ï","Ί","Î","ì","Ì","í","Í","î","ϊ","ΐ","Ĩ","ĩ","Ī","ī","Ĭ","ĭ","İ","į","Į","Ꭵ"],j:["ჟ","Ĵ","ĵ","ᶖ","ɉ","ℑ"],k:["₭","Ꮶ","Ќ","k","ќ","ķ","Ķ","Ҝ","ҝ","ᶄ","Ҡ","ҡ"],l:["ℒ","ℓ","Ŀ","ŀ","Ĺ","ĺ","Ļ","ļ","λ","₤","Ł","ł","ľ","Ľ","Ḽ","ḽ","ȴ","Ꮭ"],m:["ℳ","ʍ","ᶆ","Ḿ","ḿ","ᗰ","ᙢ","爪","₥","ጠ","ᛖ"],n:["ℕ","η","ñ","ח","Ñ","ή","ŋ","Ŋ","Ń","ń","Ņ","ņ","Ň","ň","ŉ","ȵ","ℵ","₦","ห","ກ","⋒","Ӈ","ӈ"],o:["ტ","ó","ό","σ","ǿ","Ǿ","Θ","ò","Ó","Ò","Ô","ô","Ö","ö","Õ","õ","ờ","ớ","ọ","Ọ","ợ","Ợ","ø","Ø","Ό","Ở","Ờ","Ớ","Ổ","Ợ","Ō","ō","Ő"],p:["ℙ","℘","ρ","Ꭾ","Ꮅ","尸","Ҏ","ҏ","ᶈ","₱","☧","ᖘ","ק","₽","թ","Ƿ","Ҏ","ҏ"],q:["ℚ","q","Q","ᶐ","Ǭ","ǭ","ჹ","૧"],r:["ℝ","ℜ","ℛ","℟","ჩ","ᖇ","ř","Ř","ŗ","Ŗ","ŕ","Ŕ","ᶉ","Ꮢ","尺","ᚱ"],s:["Ꮥ","Ṧ","ṧ","ȿ","§","Ś","ś","š","Š","ş","Ş","ŝ","Ŝ","₰","∫","$","ֆ","Տ","క"],t:["₸","†","T","t","τ","Ţ","ţ","Ť","ť","ŧ","Ŧ","干","Ṫ","ṫ","ナ","Ꮏ","Ꮖ","テ","₮","⍡"],u:["∪","ᙀ","Ũ","Ủ","Ừ","Ử","Ữ","Ự","ύ","ϋ","ú","Ú","ΰ","ù","Û","û","Ü","ử","ữ","ự","ü","ừ","Ũ","ũ","Ū","ū","Ŭ","ŭ","ų","Ų","ű","Ű","ů","Ů","น","Ա"],v:["✔","✓","∨","√","Ꮙ","Ṽ","ṽ","ᶌ","/","℣"],w:["₩","ẃ","Ẃ","ẁ","Ẁ","ẅ","ώ","ω","ŵ","Ŵ","Ꮤ","Ꮃ","ฬ","ᗯ","ᙡ","Ẅ","ѡ","ಎ","ಭ","Ꮚ","Ꮗ","ผ","ฝ","พ","ฟ"],x:["χ","×","✗","✘","᙭","ჯ","Ẍ","ẍ","ᶍ","א"],y:["ɣ","Ꭹ","Ꮍ","Ẏ","ẏ","ϒ","ɤ","￥","ע","௶","Ⴘ"],z:["ℤ","乙","Ẑ","ẑ","ɀ","Ꮓ"],"а":["Ꭿ","₳","Ǻ","ǻ","α","ά","Ǡ","ẫ","Ắ","ắ","Ằ","ằ","ẳ","Ẵ","ẵ","Ä","ª","ä","Å","À","Á","Â","å","ã","â","à","á","Ã","ᗩ","@","Ⱥ","Ǟ"],"б":["Ҕ","ҕ","Ϭ","ϭ","চ","ঢ়","ƃ","ɓ"],"в":["ℬ","Ᏸ","β","฿","ß","ᗷ","ᗽ","ᗾ","ᗿ","Ɓ","Ᏸ","ᗸ","ᗹ","ᛔ"],"г":["୮","┍","ℾ"],"д":["ℊ","∂"],"е":["ℰ","ℯ","ໂ","६","Ē","℮","ē","Ė","ė","Ę","ě","Ě","ę","Έ","ê","Ê","È","€","É","Ế","Ề","Ể","Ễ","é","è","عЄ","є","έ","ε","Ҿ","ҿ"],"ж":["ᛤ","♅","Җ","җ","Ӝ","ӝ","Ӂ","ӂ"],"з":["Յ","ℨ","ჳ"],"и":["น","ự","Ӥ","ӥ","Ũ","ũ","Ū","ū","Ŭ","ŭ","Ù","ú","Ú","ù","Ҋ","ҋ"],"к":["ᛕ","₭","Ꮶ","Ќ","k","ќ","ķ","Ķ","Ҝ","ҝ","ᶄ","Ҡ","ҡ"],"л":["ለ","ሉ","ሊ","ሌ","ል","ሎ","Ꮧ","Ꮑ"],"м":["ጠ","ᛖ","ℳ","ʍ","ᶆ","Ḿ","ḿ","ᗰ","ᙢ","爪","₥"],"н":["ਮ","ዘ","ዙ","ዚ","ዛ","ዜ","ዝ","ዞ","ዟ","ℍ","ℋ","ℎ","ℌ","ℏ","ዙ","Ꮵ","Ĥ","Ħ","Ή","Ḩ","Ӈ","ӈ"],"о":["ტ","ó","ό","σ","ǿ","Ǿ","Θ","ò","Ó","Ò","Ô","ô","Ö","ö","Õ","õ","ờ","ớ","ọ","Ọ","ợ","Ợ","ø","Ø","Ό","Ở","Ờ","Ớ","Ổ","Ợ","Ō","ō","Ő"],"п":["Ո","ग","ກ","⋒","Ҧ","ҧ"],"р":["թ","ℙ","℘","ρ","Ꭾ","Ꮅ","尸","Ҏ","ҏ","ᶈ","₱","☧","ᖘ","ק","₽","Ƿ","Ҏ","ҏ"],"с":["Ⴚ","☾","ℭ","ℂ","Ç","¢","ç","Č","ċ","Ċ","ĉ","ς","Ĉ","ć","Ć","č","Ḉ","ḉ","⊂","Ꮸ","₡","¢"],"т":["⍑","⍡","T","t","τ","Ţ","Ť","Ŧ","Ṫ","₮"],"у":["ע","ɣ","Ꭹ","Ꮍ","Ẏ","ẏ","ϒ","ɤ","￥","௶","Ⴘ"],"ф":["Փ","փ","Ⴔ","ቁ","ቂ","ቃ","ቄ","ቅ","ቆ","ቇ","ቈ","ᛄ"],"х":["א","χ","×","✗","✘","᙭","ჯ","Ẍ","ẍ","ᶍ"],"ц":["Ա","ų"],"ч":["Կ","կ","੫","Ⴁ","Ӵ","ӵ","Ҹ","ҹ"],"ш":["ש","ᗯ","ᙡ","ω"],"щ":["պ","ખ"],"ъ":["Ѣ","ѣ","৮"],"ы":["Ӹ","ӹ"],"ь":["Ѣ","ѣ","৮"],"э":["∋","∌","∍","ヨ","Ӭ","ӭ","℈"],"ю":["ਠ"]}}]);