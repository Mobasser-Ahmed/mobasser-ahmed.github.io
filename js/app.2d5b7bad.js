(function(t){function e(e){for(var n,a,s=e[0],u=e[1],l=e[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c5d24c82"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"acba6e53"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===n||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var d=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4430:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"headerDiv"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[r("img",{attrs:{src:"http://placehold.it/150x50?text=Logo",alt:""}})]),r("b-navbar-brand",{attrs:{to:"/"}},[t._v("FALAH")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/"}},[t._v("About Us")]),r("b-nav-item-dropdown",{attrs:{text:"Blog",right:""}},[r("b-dropdown-item",{attrs:{to:"/blog"}},[t._v("Social ")]),r("b-dropdown-item",{attrs:{to:"#"}},[t._v("Technical")]),r("b-dropdown-item",{attrs:{to:"#"}},[t._v("Food")]),r("b-dropdown-item",{attrs:{to:"#"}},[t._v("Life in Chemnitz")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},a=[]},4790:function(t,e,r){"use strict";var n=r("5859"),a=r.n(n);e["default"]=a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[t._v(" There is nothing ")]),r("router-view")],1)},o=[],i={name:"HeaderComponent"},s=i,u=r("2877"),l=Object(u["a"])(s,a,o,!1,null,null,null),c=l.exports,d=(r("d3b7"),r("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("vueheader")],1)},p=[],b=r("f983"),h={name:"Home",components:{vueheader:b["default"]}},m=h,v=Object(u["a"])(m,f,p,!1,null,null,null),g=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"singleBlog"}},[r("div",{staticClass:"img-thumbnail"},[r("b-card",{attrs:{overlay:"","img-src":"https://picsum.photos/900/250/?image=3","img-alt":"Card Image","text-variant":"white",title:"First blog of Falah","title-tag":"h1","sub-title":"Mobasser Ahmed"}})],1),r("div",{staticClass:"container"},[t._v(" This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg This is our first blg ")])])},_=[],w={component:{headerVue:b["default"]},name:"BlogSingle"},T=w,x=(r("9294"),Object(u["a"])(T,y,_,!1,null,"4d98d8f7",null)),C=x.exports;n["default"].use(d["a"]);var O=[{path:"/",name:"Home",component:g},{path:"/blog-single",name:"Editor",component:C},{path:"/blog",name:"Blog",component:function(){return r.e("about").then(r.bind(null,"fd3f"))}}],S=new d["a"]({mode:"history",routes:O}),E=S,j=r("2f62");n["default"].use(j["a"]);var A=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=r("5f5b"),k=(r("ab8b"),r("2dd8"),r("bc3a")),L=r.n(k),B=r("a7fe"),F=r.n(B);n["default"].use(F.a,L.a),n["default"].config.productionTip=!1,n["default"].use(P["a"]),new n["default"]({router:E,store:A,render:function(t){return t(c)}}).$mount("#app")},5859:function(t,e){},9294:function(t,e,r){"use strict";var n=r("98f2"),a=r.n(n);a.a},"98f2":function(t,e,r){},f983:function(t,e,r){"use strict";var n=r("4430"),a=r("4790"),o=r("2877"),i=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports}});
//# sourceMappingURL=app.2d5b7bad.js.map