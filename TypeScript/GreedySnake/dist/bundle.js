!function(){"use strict";var e={485:function(e,t,n){var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: skyblue;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid skyblue;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n',""]),t.Z=o},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e,t,n){var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,f="".concat(c," ").concat(l);n[c]=l+1;var u=a(f),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:f,updater:b(d,t),references:1}),i.push(f)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,p=0;function b(e,t){var n,i,o;if(t.singleton){var r=p++;n=h||(h=c(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=c(t),i=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);r[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var f=a(n[l]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}n=c}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){var e=n(379),t=n.n(e),i=n(485);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.element.getElementsByTagName("div")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHeadBody()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){if(this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHeadBody()}}},{key:"addBody",value:function(){this.element.insertAdjacentHTML("beforeend","<div></div>")}},{key:"moveBody",value:function(){for(var e=this.bodies.length-1;e>0;e--){var t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}},{key:"checkHeadBody",value:function(){for(var e=1;e<this.bodies.length;e++){var t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("撞到自己了！")}}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("food")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"change",value:function(){Math.round(29*Math.random());var e=10*Math.round(29*Math.random());this.element.style.left=e+"px",this.element.style.top=e+"px"}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;c(this,e),this.score=0,this.level=1,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level"),this.maxLevel=t,this.upScore=n}var t,n;return t=e,(n=[{key:"addScore",value:function(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=f;function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.isLive=!0,this.food=new s,this.snake=new r,this.scorePanel=new u,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()}},{key:"keydownHandler",value:function(e){this.direction=e.key}},{key:"run",value:function(){var e=this.snake.X,t=this.snake.Y;switch(console.log(this.direction),this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message+" GAME OVER!"),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))}},{key:"checkEat",value:function(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())}()}();