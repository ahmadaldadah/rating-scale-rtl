module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(2);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.colorBackground,n=void 0===t?"#e4e5e9":t,l=e.colorRating,c=void 0===l?"#ffc107":l,u=e.rtl,s=void 0!==u&&u,f=a(Object(r.useState)(null),2),d=f[0],p=f[1],b=a(Object(r.useState)(null),2),m=b[0],v=b[1],h=a(Object(r.useState)(null),2),g=h[0],y=h[1],x=a(Object(r.useState)(null),2),w=x[0],S=x[1];Object(r.useEffect)((function(){console.log("input state is",g)}),[g]),Object(r.useEffect)((function(){console.log("input 2 state is",w)}),[w]);var j=function(e,t){3===(e=e.replace(/^\s*#|\s*$/g,"")).length&&(e=e.replace(/(.)/g,"$1$1"));var n=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16);return"#"+(0|256+n+(256-n)*t/100).toString(16).substr(1)+(0|256+r+(256-r)*t/100).toString(16).substr(1)+(0|256+o+(256-o)*t/100).toString(16).substr(1)}(g||c,75);return console.log(j),o.a.createElement("div",{style:{marginBottom:"15px"}},o.a.createElement("div",{className:"takeValue"},o.a.createElement("label",null,"Choose rating color",o.a.createElement("input",{type:"color",value:c,className:"inputClass",onChange:function(e){y(e.target.value)}})),o.a.createElement("label",null,"Choose background color",o.a.createElement("input",{type:"color",value:n,className:"inputClass",onChange:function(e){S(e.target.value)}}))),o.a.createElement("div",{className:!0===s?"rating_scaleRtl":"rating_scale"},i(Array(10)).map((function(e,t){var r=t+1;return o.a.createElement("div",{className:!0===s?"scaleRtl":"scale",key:t,onClick:function(){return p(r)},style:r<=d?{backgroundColor:g||c}:r<=m?{backgroundColor:j}:{backgroundColor:w||n},onMouseEnter:function(){return v(r)},onMouseLeave:function(){return v(null)}})}))))}},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var f=l(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var s=l(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,".rating_scale {\n    text-align: center;\n    font-size: 0;\n    font-weight: 500;\n    padding-bottom:10px ;\n  }\n  .scale{\n    line-height: 20px ;\n    width: 75px;\n    height: 20px;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: var(--span-color);\n    background: var(--basic-color);\n    border-top: solid 1px var(--white-color);\n    border-bottom: solid 1px var(--white-color);\n    border-right: solid 1px var(--white-color);\n    cursor: pointer;\n    transition: color 200ms;\n  }\n  .scale:first-child {\n    border-left: solid 1px var(--white-color);\n    border-top-left-radius: 0.25em;\n    border-bottom-left-radius: 0.25em;\n  }\n  \n   .scale:last-child {\n    border-top-right-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n  }\n  .rating_scaleRtl {\n    text-align: center;\n    font-size: 0;\n    font-weight: 500;\n    padding-bottom:10px ;\n    direction: rtl;\n  }\n  .rating_scaleRtl .scaleRtl{\n    line-height: 20px ;\n    width: 75px;\n    height: 20px;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: var(--span-color);\n    background: var(--basic-color);\n    border-top: solid 1px var(--white-color);\n    border-bottom: solid 1px var(--white-color);\n    border-right: solid 1px var(--white-color);\n    direction: rtl;\n    cursor: pointer;\n    transition: color 200ms;\n  }\n  .scaleRtl:first-child {\n    border-left: solid 1px var(--white-color);\n  \n    border-top-right-radius: 0.25em;\n    border-bottom-right-radius: 0.25em;\n  }\n  \n   .scaleRtl:last-child {\n    border-top-left-radius: 0.25em;\n    border-bottom-left-radius: 0.25em;\n   \n  }\n  \n  \n  .takeValue{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 1em;\n    margin-bottom:1em ;\n    font-size: 16px;\n  }\n  \n  .inputClass {\n    margin-left: 1em;\n  }",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}}]);