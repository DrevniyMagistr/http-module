parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KKkz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeroView=void 0;const e=e=>{const{localized_name:o,roles:r}=e;return`\n  <div class="hero">\n    <h2>Hero name: ${o}</h2>\n    <div>Roles: ${r.join(", ")}</div>\n  </div>`};exports.HeroView=e;
},{}],"sb6G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHeroesList=void 0;var e=require("./heroView");const r=r=>r.map(r=>(0,e.HeroView)(r)).join("");exports.createHeroesList=r;
},{"./heroView":"KKkz"}],"gQD7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.apiService=void 0;const e=(e,t)=>fetch(e,t).then(e=>e.ok?e.json():e.json().then(e=>Promise.reject(e)));exports.apiService=e;
},{}],"VigO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHeroesList=exports.getHeroById=void 0;var e=require("./apiService");const r="https://api.opendota.com/api",t=()=>(0,e.apiService)(`${r}/heroes`);exports.getHeroesList=t;const o=t=>(0,e.apiService)(`${r}/heroes/${t}`);exports.getHeroById=o;
},{"./apiService":"gQD7"}],"krre":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./js/heroesList"),s=require("./js/api/dotaApi");require("./css/styles.css");const r=e=>{document.querySelector(".hero-list").innerHTML=e};(0,s.getHeroesList)().then(s=>{const t=(0,e.createHeroesList)(s);r(t)}).catch(e=>console.log(e));
},{"./js/heroesList":"sb6G","./js/api/dotaApi":"VigO","./css/styles.css":"krre"}]},{},["Focm"], null)
//# sourceMappingURL=/http-module/src.fa366606.js.map