(()=>{var e={755:()=>{console.log("components")},524:()=>{var e,t,n,o,i,r,a,d;i=null===(e=document)||void 0===e?void 0:e.querySelector("[data-burger]"),r=null===(t=document)||void 0===t?void 0:t.querySelector("[data-menu]"),a=null===(n=document)||void 0===n?void 0:n.querySelectorAll("[data-menu-item]"),d=null===(o=document)||void 0===o?void 0:o.querySelector("[data-menu-overlay]"),null==i||i.addEventListener("click",(function(e){null==i||i.classList.toggle("burger--active"),null==r||r.classList.toggle("menu--active"),null!=r&&r.classList.contains("menu--active")?(null==i||i.setAttribute("aria-expanded","true"),null==i||i.setAttribute("aria-label","Закрыть меню"),disableScroll()):(null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"),enableScroll())})),null==d||d.addEventListener("click",(function(){null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"),i.classList.remove("burger--active"),r.classList.remove("menu--active"),enableScroll()})),null==a||a.forEach((function(e){e.addEventListener("click",(function(){null==i||i.setAttribute("aria-expanded","false"),null==i||i.setAttribute("aria-label","Открыть меню"),i.classList.remove("burger--active"),r.classList.remove("menu--active"),enableScroll()}))}))},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function u(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),u())}),!0),u(),e.addEventListener("focus",(function(e){var n,o,d;r(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(d=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===d&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t;function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n(524),console.log((t=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown")),n(755);var i,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,d=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return d=e.done,e},e:function(e){u=!0,a=e},f:function(){try{d||null==n.return||n.return()}finally{if(u)throw a}}}}(document.querySelectorAll('a[href^="#"]'));try{var a=function(){var e=i.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(r.s();!(i=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}})()})();