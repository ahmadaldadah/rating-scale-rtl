module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=require("react")},function(t,e,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function l(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var f=l(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:h(d,e),references:1}),r.push(s)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var b=null,m=0;function h(t,e){var n,r,o;if(e.singleton){var i=m++;n=b||(b=u(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(t,e),u=0;u<n.length;u++){var s=l(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".rating_scale {\n    text-align: center;\n    font-size: 0;\n    font-weight: 500;\n    padding-bottom:10px ;\n  }\n  .scale{\n    line-height: 20px ;\n    width: 75px;\n    height: 20px;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: var(--span-color);\n    background: var(--basic-color);\n    border-top: solid 1px var(--white-color);\n    border-bottom: solid 1px var(--white-color);\n    border-right: solid 1px var(--white-color);\n    cursor: pointer;\n    transition: color 200ms;\n  }\n  .scale:first-child {\n    border-left: solid 1px var(--white-color);\n    border-top-left-radius: 0.25em;\n    border-bottom-left-radius: 0.25em;\n  }\n  \n   .scale:last-child {\n    border-top-right-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n  }\n  .rating_scaleRtl {\n    text-align: center;\n    font-size: 0;\n    font-weight: 500;\n    padding-bottom:10px ;\n    direction: rtl;\n  }\n  .rating_scaleRtl .scaleRtl{\n    line-height: 20px ;\n    width: 75px;\n    height: 20px;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: var(--span-color);\n    background: var(--basic-color);\n    border-top: solid 1px var(--white-color);\n    border-bottom: solid 1px var(--white-color);\n    border-right: solid 1px var(--white-color);\n    direction: rtl;\n    cursor: pointer;\n    transition: color 200ms;\n  }\n  .scaleRtl:first-child {\n    border-left: solid 1px var(--white-color);\n  \n    border-top-right-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n  }\n  \n   .scaleRtl:last-child {\n    border-top-left-radius: 0.25em;\n    border-bottom-left-radius: 0.25em;\n   \n  }\n  \n  \n  .takeValue{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 1em;\n    margin-bottom:1em ;\n    font-size: 16px;\n  }\n  \n  .inputClass {\n    margin-left: 1em;\n  }",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){var e=i(Object(r.useState)(""),2),n=e[0],o=e[1];return[n,function(t){o(t.target.value)}]},c=function(t,e){3===(t=t.replace(/^\s*#|\s*$/g,"")).length&&(t=t.replace(/(.)/g,"$1$1"));var n=parseInt(t.substr(0,2),16),r=parseInt(t.substr(2,2),16),o=parseInt(t.substr(4,2),16);return"#"+(0|256+n+(256-n)*e/100).toString(16).substr(1)+(0|256+r+(256-r)*e/100).toString(16).substr(1)+(0|256+o+(256-o)*e/100).toString(16).substr(1)};n(1);function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){var e=t.colorBackground,n=void 0===e?"#e4e5e9":e,i=t.colorRating,a=void 0===i?"#ffc107":i,f=t.rtl,d=void 0!==f&&f,p=t.width,b=void 0===p?"75px":p,m=t.height,h=void 0===m?"20px":m,v=s(Object(r.useState)(null),2),g=v[0],y=v[1],x=s(Object(r.useState)(null),2),w=x[0],S=x[1],j=s(l(null),2),C=j[0],A=j[1],O=s(l(null),2),E=O[0],M=O[1],k=c(C||a,60),I={backgroundColor:C||a,width:"".concat(b,"px"),height:"".concat(h,"px")},R={backgroundColor:k,width:"".concat(b,"px"),height:"".concat(h,"px")},_={backgroundColor:E||n,width:"".concat(b,"px"),height:"".concat(h,"px")};return o.a.createElement("div",{style:{marginBottom:"15px"}},o.a.createElement("div",{className:"takeValue"},o.a.createElement("label",null,"Choose rating color",o.a.createElement("input",{type:"color",value:C||a,className:"inputClass",onChange:A})),o.a.createElement("label",null,"Choose background color",o.a.createElement("input",{type:"color",value:E||n,className:"inputClass",onChange:M}))),o.a.createElement("div",{className:!0===d?"rating_scaleRtl":"rating_scale"},u(Array(10)).map((function(t,e){var n=e+1;return o.a.createElement("div",{className:!0===d?"scaleRtl":"scale",key:e,onClick:function(){return y(n)},style:n<=g?I:n<=w?R:_,onMouseEnter:function(){return S(n)},onMouseLeave:function(){return S(null)}})}))))}}]);