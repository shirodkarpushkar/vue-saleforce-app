(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)c=u[l],o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aad27":"e19721b3","chunk-2d0e5bdd":"86373e13","chunk-2d20f759":"d861883f","chunk-2d2109b2":"e8d080fe","chunk-df2f9db2":"1ee17f6d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e),a=function(t){s.onerror=s.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-saleforce-app/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"11c0":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return u})),n.d(t,"mutations",(function(){return s})),n.d(t,"getters",(function(){return i})),n.d(t,"actions",(function(){return l}));var r=n("1da1"),o=n("bc3a"),a=n.n(o);const c="https://path-to-api.com/",u={authToken:d("authToken")},s={SET_CURRENT_USER_AUTHTOKEN(e,t){e.authToken=t,f("authToken",t),p(e)}},i={loggedIn(e){return!!e.authToken},getAuthenticationToken(e){return e.authToken}},l={init(e){let t=e.state;e.dispatch;null!==t.authToken&&p(t)},logIn(e){var t=arguments;return Object(r["a"])((function*(){let n=e.commit,r=e.dispatch,o=e.getters,u=t.length>1&&void 0!==t[1]?t[1]:{},s=u.emailAddress,i=u.userPassword;if(o.loggedIn)return r("validate");try{const e=yield a()({method:"post",url:c+"user/signin",data:{emailAddress:s,userPassword:i}}),t=e.data;return n("SET_CURRENT_USER_AUTHTOKEN",t),t}catch(l){throw l}}))()},loginOAuth(e,t){return Object(r["a"])((function*(){let n=e.commit,r=t.accessToken;try{n("SET_CURRENT_USER_AUTHTOKEN",{accessToken:r})}catch(o){throw h(o)}}))()},logOut(e){let t=e.commit;t("SET_CURRENT_USER_AUTHTOKEN",null)},validate(e){e.commit;let t=e.state;return t.authToken?new Promise((e,t)=>{e(!0)}):Promise.resolve(null)}};function d(e){return JSON.parse(window.sessionStorage.getItem(e))}function f(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function p(e){a.a.defaults.headers.common["Authorization"]=e.authToken?"Bearer "+e.authToken.accessToken:""}function h(e){return m.apply(this,arguments)}function m(){return m=Object(r["a"])((function*(e){return e.message?e.message:e})),m.apply(this,arguments)}},2:function(e,t){},2883:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("Transition",{attrs:{appear:""}})],1)},o=[],a=n("444f"),c={page:{title:"Loading page...",meta:[{name:"description",content:"Loading page..."}]},components:{Layout:a["a"]}},u=c,s=n("46e4"),i=n("2877");function l(e){this["$style"]=s["default"].locals||s["default"]}var d=Object(i["a"])(u,r,o,!1,l,null,null);t["default"]=d.exports},"444f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e._v("\n  Loading..\n")])},o=[],a={data(){return{}},created(){},methods:{}},c=a,u=n("2877"),s=Object(u["a"])(c,r,o,!1,null,"e4ca9f8a",null);t["a"]=s.exports},"46e4":function(e,t,n){"use strict";var r=n("fc7c"),o=n.n(r);n.d(t,"default",(function(){return o.a}))},"4cc4":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return s})),n.d(t,"getters",(function(){return i})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));var r=n("1da1"),o=n("bc3a"),a=n.n(o);const c="https://home277-dev-ed.my.salesforce.com",u="v49.0",s={},i={},l={},d={triggerFlow(e,t){return Object(r["a"])((function*(){e.commit;let n=t.API,r=t.data;try{const e=yield a()({method:"post",url:`${c}/services/data/${u}/actions/custom/flow/${n}`,data:r}),t=e.data;return t}catch(o){throw f(o)}}))()}};function f(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])((function*(e){return e.message?e.message:e})),p.apply(this,arguments)}},"4d77":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));n("ac6a");var r=n("ade3"),o=n("2f62");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}c(c({},Object(o["d"])("auth",{currentUser:e=>e.currentUser})),Object(o["c"])("auth",["loggedIn"]));const u=Object(o["c"])("auth",["getAuthenticationToken","loggedIn"]),s=Object(o["b"])("auth",["loginOAuth","logOut"]),i=Object(o["b"])("school",["triggerFlow"])},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("RouterView",{key:e.$route.fullPath})],1)],1)],1)},a=[],c={name:"App",components:{},data:()=>({})},u=c,s=(n("5c0b"),n("2877")),i=Object(s["a"])(u,o,a,!1,null,null,null),l=i.exports,d=n("1da1"),f=n("8c4f"),p=n("58ca"),h=n("323e"),m=n.n(h),b=n("2f62"),v=(n("3846"),n("ade3")),g=(n("a481"),n("28a5"),n("ac6a"),n("bba4")),y=n.n(g);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const w={},_={modules:{}};function k(e,t){if(1===t.length)return e;const n=t.shift();return e.modules[n]=j({modules:{},namespaced:!0},e.modules[n]),k(e.modules[n],t)}(function(){const e=n("cfa9");e.keys().forEach(t=>{const n=e(t);if(w[t]===n)return;w[t]=n;const r=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(y.a),o=k(_,r),a=o.modules;a[r.pop()]=j({namespaced:!0},n)})})();var P=_.modules;function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.modules,r=void 0===n?P:n,o=t.modulePrefix,a=void 0===o?"":o,c=t.flags,u=void 0===c?{}:c;for(const s in r){const t=r[s];t.actions&&t.actions[e]&&(t.namespaced?S.dispatch(`${a}${s}/${e}`):u.dispatchGlobal=!0),t.modules&&E(e,{modules:t.modules,modulePrefix:a+s+"/",flags:u})}!a&&u.dispatchGlobal&&S.dispatch(e)}r["default"].use(b["a"]);const T=new b["a"].Store({modules:P,strict:!1});var S=T;E("init");var $=[{path:"/",redirect:{name:"studentList"}},{path:"/students",name:"studentList",component:()=>U(n.e("chunk-2d0e5bdd").then(n.bind(null,"967a")))},{path:"/students/:id",name:"studentDetails",component:()=>U(n.e("chunk-2d20f759").then(n.bind(null,"b45f")))},{path:"/schools",name:"schoolList",component:()=>U(n.e("chunk-2d0aad27").then(n.bind(null,"133b")))},{path:"/schools/:id",name:"schoolDetails",component:()=>U(n.e("chunk-2d2109b2").then(n.bind(null,"b938")))},{path:"/layout",name:"layout",component:()=>U(n.e("chunk-df2f9db2").then(n.bind(null,"659d")))},{path:"/404",name:"404",component:n("bdd2").default,props:!0},{path:"*",redirect:"404"}];function U(e){const t=()=>({component:e,loading:n("2883").default,delay:400,error:n("ef68").default,timeout:1e4});return Promise.resolve({functional:!0,render(e,n){let r=n.data,o=n.children;return e(t,r,o)}})}r["default"].use(f["a"]),r["default"].use(p["a"],{keyName:"metaInfo"});const x=new f["a"]({routes:$,base:"/vue-saleforce-app/",mode:"history",scrollBehavior(e,t,n){return n||{x:0,y:0}}});x.beforeEach((e,t,n)=>{null!==t.name&&m.a.start();const r=e.matched.some(e=>e.meta.authRequired);if(!r||"logout"===e.name)return n();if(S.getters["auth/loggedIn"])return S.dispatch("auth/validate").then(e=>{e?n():o()});function o(){n({name:"signin",query:{redirectFrom:e.fullPath}})}o()}),x.beforeResolve(function(){var e=Object(d["a"])((function*(e,t,n){try{for(const r of e.matched)yield new Promise((o,a)=>{r.meta&&r.meta.beforeResolve?r.meta.beforeResolve(e,t,(function(){for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];r.length?(t.name===r[0].name&&m.a.done(),n(...r),a(new Error("Redirected"))):o()})):o()})}catch(r){return}n()}));return function(t,n,r){return e.apply(this,arguments)}}()),x.afterEach((e,t)=>{m.a.done()});var R=x,A=n("1dce"),C=n.n(A),I=n("caf9"),D=n("a65d"),F=n.n(D),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{dense:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",{staticClass:"mr-10"},[e._v("\n      Education\n    ")]),n("v-toolbar-items",[n("v-tabs",[n("v-tab",{attrs:{to:{name:"studentList"}}},[e._v("Student ")]),n("v-tab",{attrs:{to:{name:"schoolList"}}},[e._v("Schools")]),n("v-tab",{attrs:{to:{name:"layout"}}},[e._v("Layout")])],1)],1),n("v-spacer"),n("v-switch",{staticClass:"mt-5",attrs:{"prepend-icon":e.$vuetify.theme.dark?"mdi-weather-night":"mdi-weather-sunny"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),e.loggedIn?e._e():n("v-btn",{staticClass:"mr-1",on:{click:e.authorise}},[e._v("Authorize")]),e.loggedIn?n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",[e._v("mdi-logout")])],1):e._e()],1)],1)},L=[],M=n("4d77");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Object(v["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={page:{title:"Navbar",meta:[{name:"description",content:"Navbar"}]},components:{},computed:J({},M["a"]),methods:J(J({},M["b"]),{},{authorise(){this.$jsforce.browser.login(),this.$jsforce.browser.on("connect",e=>{this.loginOAuth({accessToken:e.accessToken})})},logout(){var e=this;return Object(d["a"])((function*(){e.logOut(),yield e.$jsforce.browser.logout()}))()}})},B=K,q=Object(s["a"])(B,N,L,!1,null,"49feb164",null),G=q.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container"},[n("p",[e._v("© Saleforce Vue Integration "+e._s((new Date).getFullYear())+" ")])])},z=[],X={page:{title:"Footer",meta:[{name:"description",content:"Footer"}]},components:{}},Q=X,W=Object(s["a"])(Q,V,z,!1,null,"1d3f164f",null),Y=W.exports;r["default"].use(I["a"]),r["default"].use(C.a),r["default"].use(F.a),r["default"].component("navbar",G),r["default"].component("app-footer",Y);var Z=n("ce5b"),ee=n.n(Z);n("bf40");r["default"].use(ee.a);var te=new ee.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#2196f3",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),ne=n("c374"),re=n.n(ne);re.a.browser.init({clientId:"3MVG9fe4g9fhX0E6PXk.Rnb9BpGHna9PukWmKSwNNJe2knVk8StZJIM7ug8Un_REJyi99g95.EHd1zU2aUjso",redirectUri:"http://localhost:8080",version:"49.0"});var oe=re.a;n("d5e8"),n("5363");r["default"].prototype.$jsforce=oe,r["default"].config.productionTip=!0;new r["default"]({router:R,store:S,vuetify:te,render:e=>e(l)}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("5e27")},"5e27":function(e,t,n){},"93fe":function(e,t,n){e.exports={title:"_timeout_title_QmghM"}},9400:function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return o}));var r=n("2b0e");const o=new r["default"]},b20d:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return a})),n.d(t,"getters",(function(){return c})),n.d(t,"mutations",(function(){return u})),n.d(t,"actions",(function(){return s}));var r=n("bc3a"),o=n.n(r);const a={cached:[]},c={},u={CACHE_USER(e,t){e.cached.push(t)}},s={fetchUser(e,t){let n=e.commit,r=e.state,a=e.rootState,c=t.username;const u=a.auth.currentUser;if(u&&u.username===c)return Promise.resolve(u);const s=r.cached.find(e=>e.username===c);return s?Promise.resolve(u):o.a.get("/api/users/"+c).then(e=>{const t=e.data;return n("CACHE_USER",t),t})}}},bdd2:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  404\n")])},o=[],a={name:"FourOhFour",created(){this.$ssrContext&&this.$ssrContext.res.status(404)}},c=a,u=n("2877"),s=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=s.exports},cfa9:function(e,t,n){var r={"./auth.js":"11c0","./event-bus.js":"9400","./school.js":"4cc4","./users.js":"b20d"};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="cfa9"},d746:function(e,t,n){"use strict";var r=n("93fe"),o=n.n(r);n.d(t,"default",(function(){return o.a}))},ef68:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("h1",{class:e.$style.title},[e._v("\n    The page timed out while loading. Are you sure you're still connected to\n    the Internet?\n  ")])])},o=[],a=n("444f"),c={page:{title:"Page timeout",meta:[{name:"description",content:"The page timed out while loading."}]},components:{Layout:a["a"]}},u=c,s=n("d746"),i=n("2877");function l(e){this["$style"]=s["default"].locals||s["default"]}var d=Object(i["a"])(u,r,o,!1,l,null,null);t["default"]=d.exports},fc7c:function(e,t,n){e.exports={loadingIcon:"_loading_loadingIcon_2KEMq"}}});