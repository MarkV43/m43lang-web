(()=>{"use strict";var e,t,n,r,o,a,i,s,d,c,l={402:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&family=Roboto:wght@300;400&display=swap);"]),i.push([e.id,"html, body {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(24, 26, 27);\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    max-height: 100vh;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n}\n\n.debug-bar {\n    background-color: white;\n    height: 4rem;\n    z-index: 2;\n}\n\n.sidebar {\n    background-color: rgb(24, 26, 27);\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5rem;\n    max-height: 100vh;\n    /* z-index: 100; */\n    filter: drop-shadow(0px 0px 10px black);\n}\n\n.sidebar h1 {\n    font-size: 1.5rem;\n    margin: 1rem auto;\n    padding: 0;\n    color: rgb(255, 255, 255);\n}\n\n.sidebar > .create {\n    width: 100%;\n}\n\n.sidebar  button {\n    font-size: 1rem;\n    background: rgb(24, 26, 27);\n    color: #eee;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 0px;\n    border-radius: 5px;\n    padding: 0.3rem 0.8rem;\n    margin: 0.3rem;\n    filter: drop-shadow(0 0 0.75rem black);\n    cursor: pointer;\n    transition: 150ms ease-in-out;\n    transform-origin: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n}\n\n.sidebar button:hover {\n    background: rgb(20, 22, 23);\n    transform: scale(1.05);\n}\n\n.sidebar > .config {\n    width: 100%;\n}\n\n.sidebar #compile {\n    background:rgb(24, 26, 50);\n}\n\n.sidebar #compile:hover {\n    background: rgb(20, 22, 45);\n}\n\n.sidebar #run {\n    background:rgb(24, 50, 27);\n}\n\n.sidebar #run:hover {\n    background: rgb(20, 45, 23);\n}\n\n.sidebar #test {\n    background:rgb(50, 50, 27);\n}\n\n.sidebar #test:hover {\n    background: rgb(45, 45, 23);\n}\n\n.sidebar #debug {\n    background-color:rgb(40, 20, 20);\n}\n\n.sidebar #debug:hover {\n    background-color:rgb(35, 16, 17);\n}\n\n.sidebar .spacer {\n    flex-grow: 1;\n}\n\n.sidebar .files {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.sidebar .files .two-column {\n    grid-column: span 2;\n}\n\n.sidebar .console {\n    display: flex;\n    align-items: center;\n}\n\n.sidebar .console #console {\n    flex-grow: 1;\n    background: rgb(24, 26, 27);\n    color: #eee;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 0px;\n    border-radius: 5px;\n    padding: 0.3rem 0.8rem;\n    margin: 0.3rem;\n    box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);\n    cursor: text;\n    transition: 150ms ease-in-out;\n    transform-origin: center;\n    font-family: 'Roboto Mono', sans-serif;\n    font-weight: 200;\n    min-height: 5em;\n}\n\n.sidebar .console .buttons {\n    display: grid;\n    width: 50%;\n}\n\n.sidebar .console #clear-all {\n    background-color:rgb(40, 20, 20);\n}\n\n.sidebar .console #clear-all:hover {\n    background-color:rgb(35, 16, 17);\n}","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,cAAc;IACd,sCAAsC;IACtC,eAAe;IACf,6BAA6B;IAC7B,wBAAwB;IACxB,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,cAAc;IACd,+CAA+C;IAC/C,YAAY;IACZ,6BAA6B;IAC7B,wBAAwB;IACxB,sCAAsC;IACtC,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&family=Roboto:wght@300;400&display=swap');\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgb(24, 26, 27);\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    max-height: 100vh;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n}\n\n.debug-bar {\n    background-color: white;\n    height: 4rem;\n    z-index: 2;\n}\n\n.sidebar {\n    background-color: rgb(24, 26, 27);\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0.5rem;\n    max-height: 100vh;\n    /* z-index: 100; */\n    filter: drop-shadow(0px 0px 10px black);\n}\n\n.sidebar h1 {\n    font-size: 1.5rem;\n    margin: 1rem auto;\n    padding: 0;\n    color: rgb(255, 255, 255);\n}\n\n.sidebar > .create {\n    width: 100%;\n}\n\n.sidebar  button {\n    font-size: 1rem;\n    background: rgb(24, 26, 27);\n    color: #eee;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 0px;\n    border-radius: 5px;\n    padding: 0.3rem 0.8rem;\n    margin: 0.3rem;\n    filter: drop-shadow(0 0 0.75rem black);\n    cursor: pointer;\n    transition: 150ms ease-in-out;\n    transform-origin: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n}\n\n.sidebar button:hover {\n    background: rgb(20, 22, 23);\n    transform: scale(1.05);\n}\n\n.sidebar > .config {\n    width: 100%;\n}\n\n.sidebar #compile {\n    background:rgb(24, 26, 50);\n}\n\n.sidebar #compile:hover {\n    background: rgb(20, 22, 45);\n}\n\n.sidebar #run {\n    background:rgb(24, 50, 27);\n}\n\n.sidebar #run:hover {\n    background: rgb(20, 45, 23);\n}\n\n.sidebar #test {\n    background:rgb(50, 50, 27);\n}\n\n.sidebar #test:hover {\n    background: rgb(45, 45, 23);\n}\n\n.sidebar #debug {\n    background-color:rgb(40, 20, 20);\n}\n\n.sidebar #debug:hover {\n    background-color:rgb(35, 16, 17);\n}\n\n.sidebar .spacer {\n    flex-grow: 1;\n}\n\n.sidebar .files {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.sidebar .files .two-column {\n    grid-column: span 2;\n}\n\n.sidebar .console {\n    display: flex;\n    align-items: center;\n}\n\n.sidebar .console #console {\n    flex-grow: 1;\n    background: rgb(24, 26, 27);\n    color: #eee;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 0px;\n    border-radius: 5px;\n    padding: 0.3rem 0.8rem;\n    margin: 0.3rem;\n    box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);\n    cursor: text;\n    transition: 150ms ease-in-out;\n    transform-origin: center;\n    font-family: 'Roboto Mono', sans-serif;\n    font-weight: 200;\n    min-height: 5em;\n}\n\n.sidebar .console .buttons {\n    display: grid;\n    width: 50%;\n}\n\n.sidebar .console #clear-all {\n    background-color:rgb(40, 20, 20);\n}\n\n.sidebar .console #clear-all:hover {\n    background-color:rgb(35, 16, 17);\n}"],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},962:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(795),i=n.n(a),s=n(569),d=n.n(s),c=n(565),l=n.n(c),u=n(216),p=n.n(u),g=n(589),f=n.n(g),A=n(402),w={};w.styleTagTransform=f(),w.setAttributes=l(),w.insert=d().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=p(),o()(A.Z,w),A.Z&&A.Z.locals&&A.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var f=o(g,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},287:()=>{function e(e,n,r){const o=e.cells[[n,r]];if(!o)return;const a=e.types.blockTypes[o.type];fill(a.color),noStroke(),square(n*e.size,r*e.size,e.size),fill(a.textColor),textSize(a.textSize),["val","ind"].some((e=>a.data.includes(e)))?(textAlign(CENTER,TOP),text(a.display,(n+.5)*e.size,(r+.05)*e.size)):(textAlign(CENTER,CENTER),text(a.display,(n+.5)*e.size,(r+.5)*e.size));for(let i=0;i<a.data.length;i++)switch(a.data[i]){case"dir":t(e,n,r,o.data[i],e.types.arrowColors[i]);break;case"ind":case"val":textAlign(CENTER,CENTER),fill(a.textColor);const s=o.data[i].toString(),d=s.length;d<3?textSize(.4*e.size):textSize(.9/d*e.size),text(s,(n+.5)*e.size,(r+.55)*e.size)}}function t(e,t,n,r,o){switch(fill(o),stroke(0),strokeWeight(1),r){case"U":triangle((t+.5)*e.size,n*e.size,(t+.4)*e.size,(n+.1)*e.size,(t+.6)*e.size,(n+.1)*e.size);break;case"L":triangle(t*e.size,(n+.5)*e.size,(t+.1)*e.size,(n+.4)*e.size,(t+.1)*e.size,(n+.6)*e.size);break;case"R":triangle((t+1)*e.size,(n+.5)*e.size,(t+.9)*e.size,(n+.4)*e.size,(t+.9)*e.size,(n+.6)*e.size);break;default:triangle((t+.5)*e.size,(n+1)*e.size,(t+.4)*e.size,(n+.9)*e.size,(t+.6)*e.size,(n+.9)*e.size)}}function n(e,t,n){stroke(255,0,0),strokeWeight(1),fill(0,0,0,.1),rectMode(CORNER),square(t*e.size,n*e.size,e.size)}const r=JSON.parse('{"blockTypes":{"Start":{"display":"Start","color":"#00FF00","textColor":"#000000","textSize":30,"data":["dir"]},"Redirect":{"display":"Redirect","color":"#FF0000","textColor":"#000000","textSize":20,"data":["dir"]},"Store":{"display":"Store","color":"#FFFF00","textColor":"#000000","textSize":30,"data":[]},"Load":{"display":"Load","color":"#00FFFF","textColor":"#000000","textSize":30,"data":[]},"Set":{"display":"Set","color":"#FF00FF","textColor":"#000000","textSize":20,"data":["val"]},"Save":{"display":"Save","color":"#00FF00","textColor":"#000000","textSize":20,"data":["val"]},"Swap":{"display":"Swap","color":"#FF00FF","textColor":"#000000","textSize":30,"data":[]},"Increment":{"display":"Increment","color":"#FF0000","textColor":"#000000","textSize":20,"data":["val"]},"Decrement":{"display":"Decrement","color":"#FFFF00","textColor":"#000000","textSize":20,"data":["val"]},"MoveRight":{"display":"--\x3e","color":"#FF00FF","textColor":"#000000","textSize":20,"data":["ind"]},"MoveLeft":{"display":"<--","color":"#FF00FF","textColor":"#000000","textSize":20,"data":["ind"]},"Goto":{"display":"Goto","color":"#FF00FF","textColor":"#000000","textSize":20,"data":["ind"]},"OpAdd":{"display":"+","color":"#00FF00","textColor":"#000000","textSize":30,"data":[]},"OpSub":{"display":"-","color":"#FF0000","textColor":"#000000","textSize":30,"data":[]},"OpMul":{"display":"*","color":"#FFFF00","textColor":"#000000","textSize":30,"data":[]},"OpDiv":{"display":"/","color":"#00FFFF","textColor":"#000000","textSize":30,"data":[]},"CompLarger":{"display":">","color":"#FF00FF","textColor":"#000000","textSize":30,"data":[]},"CompSmaller":{"display":"<","color":"#00FF00","textColor":"#000000","textSize":30,"data":[]},"CompEqual":{"display":"==","color":"#FF0000","textColor":"#000000","textSize":30,"data":[]},"Conditional":{"display":"?","color":"#FFFF00","textColor":"#000000","textSize":30,"data":["dir","dir"]},"Display":{"display":"Display","color":"#00FFFF","textColor":"#000000","textSize":24,"data":[]},"Print":{"display":"Print","color":"#FF00FF","textColor":"#000000","textSize":30,"data":[]},"Break":{"display":"Break","color":"#FF00FF","textColor":"#000000","textSize":30,"data":[]},"Input":{"display":"Input","color":"#00FF00","textColor":"#000000","textSize":30,"data":[]},"End":{"display":"End","color":"#FF0000","textColor":"#000000","textSize":30,"data":[]}},"dirTypes":{"values":["Up","Down","Left","Right"],"default":"Down"},"arrowColors":["#000000","#FFFFFF"]}'),o=localStorage.getItem("configuration"),a=o&&JSON.parse(o)||{spacing:20,debugSize:4,canvas:null,scale:1,position:{x:0,y:0},drag:{is:!1,x:0,y:0,px:0,py:0},window:{min:{x:0,y:0},max:{x:1,y:1},cmin:{x:0,y:0},cmax:{x:1,y:1},cdx:1,cdy:1},size:100,weight:1,ncells:0,cells:{},selected:null,saves:{},breaks:{},debug:null};function i(){a.window.min.x=-a.position.x,a.window.max.x=a.window.min.x+width/a.scale,a.window.min.y=-a.position.y,a.window.max.y=a.window.min.y+height/a.scale,a.window.cmin.x=Math.floor(a.window.min.x/a.size),a.window.cmax.x=Math.floor(a.window.max.x/a.size),a.window.cmin.y=Math.floor(a.window.min.y/a.size),a.window.cmax.y=Math.floor(a.window.max.y/a.size),a.window.cdx=a.window.cmax.x-a.window.cmin.x+1,a.window.cdy=a.window.cmax.y-a.window.cmin.y+1;const e={...a};e.canvas=null,e.debug=null,localStorage.setItem("configuration",JSON.stringify(e))}function s(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}function d(){let e=document.querySelector(".sidebar > .config");if(e.textContent="",null==a.selected)return;let[t,n]=[a.selected.x,a.selected.y],r=a.cells[[t,n]];if(!r)return;let o=r.type,s=a.types.blockTypes[o].data;for(let o=0;o<s.length;o++){const c=s[o];let l=document.createElement("div");switch(c){case"dir":let e=document.createElement("select");e.classList.add("dir"),e.addEventListener("change",(r=>{a.selected&&(a.cells[[t,n]].data[o]=e.value,i(),redraw())}));let s=["Up","Down","Left","Right"];for(let t=0;t<s.length;t++){let n=document.createElement("option");n.value=s[t][0],n.innerHTML=s[t],e.appendChild(n)}a.cells[[t,n]].data[o]=a.cells[[t,n]].data[o]??a.types.dirTypes.default[0],e.value=a.cells[[t,n]].data[o],l.append(e);break;case"ind":case"val":let c=document.createElement("input");c.classList.add("ind"),c.type="number",c.min=0,r.data[o]=r.data[o]??0,c.value=r.data[o],c.addEventListener("change",(()=>{a.selected&&(a.cells[[t,n]].data[o]=c.value,d(),i(),redraw())})),l.append(c)}e.appendChild(l)}}function c(){!function(){for(let e in a.cells)a.cells[e]&&e.match(/-?\d+, ?-?\d+/g)||delete a.cells[e]}();const[e,t,n,r]=function(e){let t=1/0,n=1/0,r=-1/0,o=-1/0;for(let a in e){const[e,i]=a.split(",").map((e=>parseInt(e)));e<t&&(t=e),i<n&&(n=i),e>r&&(r=e),i>o&&(o=i)}return[t,n,r,o]}(a.cells),o=n-e+1,i=r-t+1;let s="";for(let n=0;n<i;n++){n>0&&(s+="\n");for(let r=0;r<o;r++){r>0&&(s+=" ");const o=a.cells[[r+e,n+t]];o?(s+=`${o.type}`,o.data.length>0&&(s+=`(${o.data.join(",")})`)):s+="_"}}return s}window.setup=function(){a.canvas=createCanvas(windowWidth-s(a.spacing),windowHeight),i();for(let e of document.getElementsByClassName("p5Canvas"))e.addEventListener("contextmenu",(e=>e.preventDefault()));!function(){a.types=r;for(const e in a.types.blockTypes){let t=document.createElement("button");t.classList.add("block"),t.innerHTML=e,t.addEventListener("click",(()=>{a.selected&&(a.cells[[a.selected.x,a.selected.y]]={type:e,data:[]},d(),i(),redraw())})),document.querySelector(".sidebar > .create").appendChild(t)}}(),noLoop(),redraw()},window.draw=function(){if(background(24,26,27),scale(a.scale),translate(a.position.x,a.position.y),rectMode(CORNER),a.ncells<200&&a.window.cdx*a.window.cdy>a.ncells)for(const t in a.cells){const[n,r]=t.split(",").map((e=>parseInt(e)));n<a.window.cmin.x||n>a.window.cmax.x||r<a.window.cmin.y||r>a.window.cmax.y||e(a,n,r)}else for(let t=a.window.cmin.x;t<=a.window.cmax.x;t++)for(let n=a.window.cmin.y;n<=a.window.cmax.y;n++){const r=[t,n];a.cells[r]&&e(a,t,n)}stroke(255),strokeWeight(a.weight);for(let e=a.window.cmin.x;e<=a.window.cmax.x;e+=1)line(e*a.size,a.window.min.y,e*a.size,a.window.max.y);for(let e=a.window.cmin.y;e<=a.window.cmax.y;e+=1)line(a.window.min.x,e*a.size,a.window.max.x,e*a.size);if(a.selected?(noFill(),stroke(255),strokeWeight(4),rectMode(CORNER),square(a.selected.x*a.size,a.selected.y*a.size,a.size)):a.area&&(noFill(),stroke(255),strokeWeight(4),rectMode(CORNERS),rect(a.area.x1*a.size,a.area.y1*a.size,(a.area.x2+1)*a.size,(a.area.y2+1)*a.size)),a.breaks)for(const e in a.breaks){const[t,r]=e.split(",").map((e=>parseInt(e)));t<a.window.cmin.x||t>a.window.cmax.x||r<a.window.cmin.y||r>a.window.cmax.y||n(a,t,r)}if(null!==a.debug){a.debug.debugger;const e=a.debug.state,t=e.get_coords_x(),n=e.get_coords_y(),r=e.get_storage();new BigUint64Array(wasm_memory.buffer,r,e.get_storage_size()),e.dir,e.pos,e.val,fill(255,255,255,100),noStroke(),square(t*a.size,n*a.size,a.size)}},window.mousePressed=function(e){if(e.target==a.canvas.elt){if(1==e.which){const e=Math.floor((mouseX/a.scale-a.position.x)/a.size),t=Math.floor((mouseY/a.scale-a.position.y)/a.size);a.selected&&a.selected.x==e&&a.selected.y==t?a.selected=null:(a.selected={x:e,y:t},a.area=null,d()),i(),redraw()}else 2==e.which?(a.drag.x=mouseX,a.drag.y=mouseY,a.drag.px=a.position.x,a.drag.py=a.position.y,a.drag.is=!0,i(),redraw()):e.which;return redraw(),!1}},window.mouseDragged=function(e){if(loop(),2==e.which)a.drag.is||(a.drag.is=!0,a.drag.x=mouseX,a.drag.y=mouseY,a.drag.px=a.position.x,a.drag.py=a.position.y),a.position.x=a.drag.px+(mouseX-a.drag.x)/a.scale,a.position.y=a.drag.py+(mouseY-a.drag.y)/a.scale,i();else if(1==e.which){const e=Math.floor((mouseX/a.scale-a.position.x)/a.size),t=Math.floor((mouseY/a.scale-a.position.y)/a.size);a.selected=null,a.drag.is||(a.drag.is=!0,a.drag.px=e,a.drag.py=t),a.drag.x=e,a.drag.y=t,a.area={x1:Math.min(a.drag.px,a.drag.x),y1:Math.min(a.drag.py,a.drag.y),x2:Math.max(a.drag.px,a.drag.x),y2:Math.max(a.drag.py,a.drag.y)},i()}else if(3==e.which){const e=Math.floor((mouseX/a.scale-a.position.x)/a.size),t=Math.floor((mouseY/a.scale-a.position.y)/a.size);if(a.area){if(a.drag.is){if(e!=a.drag.x||t!=a.drag.y){const n=e-a.drag.x,r=t-a.drag.y,o={};for(let e=a.area.x1;e<=a.area.x2;e++)for(let t=a.area.y1;t<=a.area.y2;t++){const i=[e,t];a.cells[i]&&(o[[e+n,t+r]]=a.cells[i],delete a.cells[i])}for(const e in o)a.cells[e]=o[e];a.area.x1+=n,a.area.y1+=r,a.area.x2+=n,a.area.y2+=r}}else a.drag.is=!0;a.drag.x=e,a.drag.y=t}else if(a.selected){if(a.drag.is){if(e!=a.drag.x||t!=a.drag.y){const n=e-a.drag.x,r=t-a.drag.y;a.cells[[a.selected.x+n,a.selected.y+r]]=a.cells[[a.selected.x,a.selected.y]],delete a.cells[[a.selected.x,a.selected.y]],a.selected.x+=n,a.selected.y+=r}}else loop(),a.drag.is=!0;a.drag.x=e,a.drag.y=t}i()}},window.mouseReleased=function(e){const t=a.drag.is;if(a.drag.is=!1,noLoop(),1==e.which&&a.area){const e=Math.min(a.area.x1,a.area.x2),t=Math.min(a.area.y1,a.area.y2),n=Math.max(a.area.x1,a.area.x2),r=Math.max(a.area.y1,a.area.y2);e==n&&t==r?(a.selected={x:e,y:t},a.area=null):a.area={x1:e,y1:t,x2:n,y2:r}}else if(3==e.which&&!t){const e=Math.floor((mouseX/a.scale-a.position.x)/a.size),t=Math.floor((mouseY/a.scale-a.position.y)/a.size);a.breaks||(a.breaks={}),a.breaks[[e,t]]?delete a.breaks[[e,t]]:a.breaks[[e,t]]=!0,console.log(a),i(),redraw()}i()},window.mouseMoved=function(){a.drag.is&&(a.position.x=a.drag.px+mouseX-a.drag.x,a.position.y=a.drag.py+mouseY-a.drag.y,i())},window.mouseWheel=function(e){if(e.target!=a.canvas.elt)return;const t=mouseX/a.scale,n=mouseY/a.scale,r=Math.pow(1.1,-e.delta/100);a.scale*=r,a.position.x+=t*(1-r),a.position.y+=n*(1-r),i(),redraw()},window.windowResized=function(){null!==a.debug?resizeCanvas(windowWidth-s(a.spacing),windowHeight-s(a.debugSize)):resizeCanvas(windowWidth-s(a.spacing),windowHeight),i(),redraw()},window.keyPressed=function(){let e=!1;if(keyCode!=UP_ARROW&&"w"!=key||(a.selected.y-=1,e=!0),keyCode!=DOWN_ARROW&&"s"!=key||(a.selected.y+=1,e=!0),keyCode!=LEFT_ARROW&&"a"!=key||(a.selected.x-=1,e=!0),keyCode!=RIGHT_ARROW&&"d"!=key||(a.selected.x+=1,e=!0),e){const e=a.selected.x*a.size,t=e+a.size,n=a.selected.y*a.size,r=n+a.size;return e<a.window.min.x&&(a.position.x+=a.window.min.x-e),t>a.window.max.x&&(a.position.x+=a.window.max.x-t),n<a.window.min.y&&(a.position.y+=a.window.min.y-n),r>a.window.max.y&&(a.position.y+=a.window.max.y-r),i(),!1}if(keyCode==DELETE){if(a.selected)delete a.cells[[a.selected.x,a.selected.y]];else if(a.area)for(let e=a.area.x1;e<=a.area.x2;e++)for(let t=a.area.y1;t<=a.area.y2;t++){const n=[e,t];a.cells[n]&&delete a.cells[n]}return d(),i(),!1}},window.compile_code=function(){alert("Not Implemented")},window.run_code=function(){clear_console();const e=c();console.log(e),wasm.execute_code(e)},window.test_code=function(){const e=c();console.log(wasm.get_code_str(e))},window.print_to_console=function(e){document.querySelector("#console").textContent+=e},window.clear_console=function(){document.querySelector("#console").textContent=""},window.clear_all=function(){clear_console(),a.cells={},a.selected=null,d(),i()},window.saveas=function(){const e=prompt("Save as:","name");e&&(a.saves=a.saves??{},a.saves[e]={cells:{...a.cells},position:{...a.position},scale:a.scale},i())},window.load=function(){const e=prompt("Load:","name");e&&a.saves[e]&&(a.cells={...a.saves[e].cells},a.position={...a.saves[e].position},a.scale=a.saves[e].scale,a.selected=null,d(),i())},window.show_saves=function(){clear_console(),print_to_console("Saves:\n"),print_to_console(Object.keys(a.saves).join("\n"))},window.debug_code=function(){clear_console();const e=c(),t=wasm.M43Debugger.new(e,function(){let e=[];for(const t in a.breaks){const[n,r]=t.split(",").map((e=>parseInt(e)));e.push(n,r)}return e}());a.debug={debugger:t,state:t.get_state()},document.querySelector(".debug-bar").style.display="block",windowResized()}},971:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(481),o=n(914),a=(n(287),n(962),e([r,o]));[r,o]=a.then?(await a)():a,n.e(35).then(n.t.bind(n,35,23)),window.wasm=r,window.wasm_memory=o.memory,o.XQ(),t()}catch(e){t(e)}}))},481:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{M43Debugger:()=>o.l9,M43State:()=>o.Rf,__wbg_error_09919627ac0992f5:()=>o.gk,__wbg_new_693216e109162396:()=>o.Ih,__wbg_printtoconsole_02b8612803eacabe:()=>o.Mp,__wbg_prompt_19dfb477cd0de5d2:()=>o.ij,__wbg_stack_0ddaca5d1abfb52f:()=>o.yq,__wbindgen_number_new:()=>o.pT,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_throw:()=>o.Or,debug_mode:()=>o.XQ,execute_code:()=>o.H3,get_code_str:()=>o.BT,run:()=>o.KH});var o=n(914),a=e([o]);o=(a.then?(await a)():a)[0],r()}catch(e){r(e)}}))},914:(e,t,n)=>{n.a(e,(async(r,o)=>{try{n.d(t,{BT:()=>k,H3:()=>B,Ih:()=>N,KH:()=>I,Mp:()=>O,Or:()=>P,Rf:()=>T,XQ:()=>v,gk:()=>W,ij:()=>j,l9:()=>R,pT:()=>L,ug:()=>Y,yq:()=>U});var a=n(789);e=n.hmd(e);var i=r([a]);a=(i.then?(await i)():i)[0];const s=new Array(32).fill(void 0);s.push(void 0,null,!0,!1);let d=s.length;function c(e){d===s.length&&s.push(s.length+1);const t=d;if(d=s[t],"number"!=typeof d)throw new Error("corrupt heap");return s[t]=e,t}function l(e){return s[e]}function u(e){e<36||(s[e]=d,d=e)}function p(e){const t=l(e);return u(e),t}let g=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});g.decode();let f=null;function A(){return null!==f&&f.buffer===a.memory.buffer||(f=new Uint8Array(a.memory.buffer)),f}function w(e,t){return g.decode(A().subarray(e,e+t))}let m=0,b=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const h="function"==typeof b.encodeInto?function(e,t){return b.encodeInto(e,t)}:function(e,t){const n=b.encode(e);return t.set(n),{read:e.length,written:n.length}};function y(e,t,n){if("string"!=typeof e)throw new Error("expected a string argument");if(void 0===n){const n=b.encode(e),r=t(n.length);return A().subarray(r,r+n.length).set(n),m=n.length,r}let r=e.length,o=t(r);const a=A();let i=0;for(;i<r;i++){const t=e.charCodeAt(i);if(t>127)break;a[o+i]=t}if(i!==r){0!==i&&(e=e.slice(i)),o=n(o,r,r=i+3*e.length);const t=A().subarray(o+i,o+r),a=h(e,t);if(a.read!==e.length)throw new Error("failed to pass whole string");i+=a.written}return m=i,o}let _=null;function x(){return null!==_&&_.buffer===a.memory.buffer||(_=new Int32Array(a.memory.buffer)),_}function C(e,t){try{return e.apply(this,t)}catch(e){let t=function(){try{return e instanceof Error?`${e.message}\n\nStack:\n${e.stack}`:e.toString()}catch(e){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",t),e}}function v(){a.debug_mode()}function I(){a.run()}function B(e){const t=y(e,a.__wbindgen_malloc,a.__wbindgen_realloc),n=m;a.execute_code(t,n)}function k(e){try{const r=a.__wbindgen_add_to_stack_pointer(-16),o=y(e,a.__wbindgen_malloc,a.__wbindgen_realloc),i=m;a.get_code_str(r,o,i);var t=x()[r/4+0],n=x()[r/4+1];return w(t,n)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(t,n)}}function z(e){if("number"!=typeof e)throw new Error("expected a number argument")}const E=new Uint32Array(2),S=new BigUint64Array(E.buffer);let F=null;function M(e,t){const n=t(4*e.length);return(null!==F&&F.buffer===a.memory.buffer||(F=new Uint32Array(a.memory.buffer)),F).set(e,n/4),m=e.length,n}class R{constructor(){throw new Error("cannot invoke `new` directly")}static __wrap(e){const t=Object.create(R.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();a.__wbg_m43debugger_free(e)}static new(e,t){const n=y(e,a.__wbindgen_malloc,a.__wbindgen_realloc),r=m,o=M(t,a.__wbindgen_malloc),i=m,s=a.m43debugger_new(n,r,o,i);return R.__wrap(s)}step(){try{if(0==this.ptr)throw new Error("Attempt to use a moved value");const t=a.__wbindgen_add_to_stack_pointer(-16);z(this.ptr),a.m43debugger_step(t,this.ptr);var e=x()[t/4+0];if(x()[t/4+1])throw p(e)}finally{a.__wbindgen_add_to_stack_pointer(16)}}run(){try{if(0==this.ptr)throw new Error("Attempt to use a moved value");const t=a.__wbindgen_add_to_stack_pointer(-16);z(this.ptr),a.m43debugger_run(t,this.ptr);var e=x()[t/4+0];if(x()[t/4+1])throw p(e)}finally{a.__wbindgen_add_to_stack_pointer(16)}}get_state(){if(0==this.ptr)throw new Error("Attempt to use a moved value");z(this.ptr);const e=a.m43debugger_get_state(this.ptr);return T.__wrap(e)}}class T{constructor(){throw new Error("cannot invoke `new` directly")}static __wrap(e){const t=Object.create(T.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();a.__wbg_m43state_free(e)}get dir(){if(0==this.ptr)throw new Error("Attempt to use a moved value");z(this.ptr);const e=a.__wbg_get_m43state_dir(this.ptr);return String.fromCodePoint(e)}set dir(e){if(0==this.ptr)throw new Error("Attempt to use a moved value");z(this.ptr),a.__wbg_set_m43state_dir(this.ptr,e.codePointAt(0))}get pos(){if(0==this.ptr)throw new Error("Attempt to use a moved value");return z(this.ptr),a.__wbg_get_m43state_pos(this.ptr)>>>0}set pos(e){if(0==this.ptr)throw new Error("Attempt to use a moved value");z(this.ptr),z(e),a.__wbg_set_m43state_pos(this.ptr,e)}get val(){try{if(0==this.ptr)throw new Error("Attempt to use a moved value");const n=a.__wbindgen_add_to_stack_pointer(-16);z(this.ptr),a.__wbg_get_m43state_val(n,this.ptr);var e=x()[n/4+0],t=x()[n/4+1];return E[0]=e,E[1]=t,S[0]}finally{a.__wbindgen_add_to_stack_pointer(16)}}set val(e){if(0==this.ptr)throw new Error("Attempt to use a moved value");z(this.ptr),S[0]=e;const t=E[0],n=E[1];a.__wbg_set_m43state_val(this.ptr,t,n)}get_storage(){if(0==this.ptr)throw new Error("Attempt to use a moved value");return z(this.ptr),a.m43state_get_storage(this.ptr)}get_coords_x(){if(0==this.ptr)throw new Error("Attempt to use a moved value");return z(this.ptr),a.m43state_get_coords_x(this.ptr)>>>0}get_coords_y(){if(0==this.ptr)throw new Error("Attempt to use a moved value");return z(this.ptr),a.m43state_get_coords_y(this.ptr)>>>0}get_storage_size(){if(0==this.ptr)throw new Error("Attempt to use a moved value");return z(this.ptr),a.m43state_get_storage_size(this.ptr)>>>0}}function j(){return C((function(e,t,n){const r=y(prompt(w(t,n)),a.__wbindgen_malloc,a.__wbindgen_realloc),o=m;x()[e/4+1]=o,x()[e/4+0]=r}),arguments)}function O(){return C((function(e,t){try{print_to_console(w(e,t))}finally{a.__wbindgen_free(e,t)}}),arguments)}function L(e){return c(e)}function W(){return C((function(e,t){try{console.error(w(e,t))}finally{a.__wbindgen_free(e,t)}}),arguments)}function N(){return C((function(){return c(new Error)}),arguments)}function U(){return C((function(e,t){const n=y(l(t).stack,a.__wbindgen_malloc,a.__wbindgen_realloc),r=m;x()[e/4+1]=r,x()[e/4+0]=n}),arguments)}function Y(e){p(e)}function P(e,t){throw new Error(w(e,t))}o()}catch(D){o(D)}}))},789:(e,t,n)=>{n.a(e,(async(r,o)=>{try{var a,i=r([a=n(914)]),[a]=i.then?(await i)():i;await n.v(t,e.id,"c949dd660c36f407b1d0",{"./inner_bg.js":{__wbg_prompt_19dfb477cd0de5d2:a.ij,__wbg_printtoconsole_02b8612803eacabe:a.Mp,__wbindgen_number_new:a.pT,__wbg_error_09919627ac0992f5:a.gk,__wbg_new_693216e109162396:a.Ih,__wbg_stack_0ddaca5d1abfb52f:a.yq,__wbindgen_object_drop_ref:a.ug,__wbindgen_throw:a.Or}}),o()}catch(e){o(e)}}),1)}},u={};function p(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={id:e,loaded:!1,exports:{}};return l[e](n,n.exports,p),n.loaded=!0,n.exports}p.m=l,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},o=e=>!--e.r&&e(),a=(e,t)=>e?e.push(t):o(t),p.a=(i,s,d)=>{var c,l,u,p=d&&[],g=i.exports,f=!0,A=!1,w=(t,n,r)=>{A||(A=!0,n.r+=t.length,t.map(((t,o)=>t[e](n,r))),A=!1)},m=new Promise(((e,t)=>{u=t,l=()=>(e(g),r(p),p=0)}));m[t]=g,m[e]=(e,t)=>{if(f)return o(e);c&&w(c,e,t),a(p,e),m.catch(t)},i.exports=m,s((i=>{var s;c=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var s=[];i.then((e=>{d[t]=e,r(s),s=0}),(e=>{d[n]=e,r(s),s=0}));var d={};return d[e]=(e,t)=>(a(s,e),i.catch(t)),d}}var c={};return c[e]=e=>o(e),c[t]=i,c})))(i);var d=()=>c.map((e=>{if(e[n])throw e[n];return e[t]})),l=new Promise(((e,t)=>{(s=()=>e(d)).r=0,w(c,s,t)}));return s.r?l:d()}),(e=>(e&&u(m[n]=e),l()))),f=!1},p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);p.r(n);var r={};i=i||[null,s({}),s([]),s(s)];for(var o=2&t&&e;"object"==typeof o&&!~i.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,p.d(n,r),n},p.d=(e,t)=>{for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((t,n)=>(p.f[n](e,t),t)),[])),p.u=e=>e+".bundle.js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d={},c="m43lang-web:",p.l=(e,t,n,r)=>{if(d[e])d[e].push(t);else{var o,a;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var l=i[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+n){o=l;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.setAttribute("data-webpack",c+n),o.src=e),d[e]=[t];var u=(t,n)=>{o.onerror=o.onload=null,clearTimeout(g);var r=d[e];if(delete d[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),a&&document.head.appendChild(o)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.v=(e,t,n,r)=>{var o=fetch(p.p+""+n+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),(()=>{var e={179:0};p.f.j=(t,n)=>{var r=p.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=p.p+p.u(t),i=new Error;p.l(a,(n=>{if(p.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,i,s]=n,d=0;if(a.some((t=>0!==e[t]))){for(r in i)p.o(i,r)&&(p.m[r]=i[r]);s&&s(p)}for(t&&t(n);d<a.length;d++)o=a[d],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkm43lang_web=self.webpackChunkm43lang_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),p(971)})();
//# sourceMappingURL=bundle.js.map