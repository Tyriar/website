(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(t,e,n){},163:function(t,e,n){},167:function(t,e,n){},191:function(t,e,n){"use strict";n(162)},192:function(t,e,n){"use strict";n(163)},196:function(t,e,n){"use strict";n(167)},212:function(t,e,n){"use strict";var o=n(211);const s=o.a.mounted;o.a.mounted=function(){s&&s.call(o.a,...arguments),i(),c()};const a=o.a.updated;function i(){const t=document.location.hash;if(t.length>1){const e=t.substring(1),n=document.getElementById(e);n&&n.scrollIntoView()}}function c(){for(const t of document.querySelectorAll("div.language-editor")){const e=t.querySelector("code");if(!e)continue;const n=document.createElement("div");n.classList.add("editor-wrap");const o=document.createElement("a");o.classList.add("maximize"),o.addEventListener("click",t=>{l(n)}),o.innerText="◰",n.appendChild(o);const s=document.createElement("iframe"),a="/editor.html#"+btoa(e.innerText);s.setAttribute("title","Editor"),"complete"===document.readyState?s.setAttribute("src",a):(s.setAttribute("src","data:text/html;base64,"),document.addEventListener("readystatechange",t=>{"complete"===document.readyState&&s.setAttribute("src",a)})),n.appendChild(s),t.parentNode.replaceChild(n,t)}}o.a.updated=function(){a&&a.call(o.a,...arguments),c()};let r=!1;function l(t){(r=!r)?(t.classList.add("maximized"),document.body.style.overflow="hidden",t.querySelector("a.maximize").innerHTML="◲"):(t.classList.remove("maximized"),document.body.style.overflow="auto",t.scrollIntoView({block:"nearest",behavior:"smooth"}),t.querySelector("a.maximize").innerHTML="◰")}var d=o.a,u=(n(191),n(192),n(6)),m=Object(u.a)(d,void 0,void 0,!1,null,"bb3fd134",null);e.a=m.exports},216:function(t,e,n){"use strict";n.r(e);var o={components:{Layout:n(210).a}},s=(n(196),n(6)),a=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"footer",attrs:{slot:"page-bottom"},slot:"page-bottom"},[e("p",[e("span",{staticClass:"item"},[this._v("Apache-2.0 licensed")]),this._v(",\n      "),e("span",{staticClass:"item"},[this._v("Copyright © 2020-"+this._s((new Date).getFullYear()))]),this._v(" "),e("span",{staticClass:"item"},[this._v("The AssemblyScript Authors")])])])])}),[],!1,null,"7c0e63ba",null);e.default=a.exports}}]);