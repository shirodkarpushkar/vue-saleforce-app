(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5bdd"],{"967a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar"),r("v-container",[r("div",{staticClass:"d-flex justify-end mb-2"},[r("v-btn",{attrs:{color:"primary"},on:{click:e.openEmailDialog}},[e._v(" Send Email")])],1),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.records},scopedSlots:e._u([{key:"item.Name",fn:function(t){var n=t.item;return[r("div",[r("router-link",{attrs:{to:{name:"studentDetails",params:{id:n.Id}}}},[e._v(e._s(n.Name))])],1)]}}])})],1),r("v-dialog",{attrs:{"content-class":"rounded-0",persistent:"","max-width":"500px"},model:{value:e.emailDialog,callback:function(t){e.emailDialog=t},expression:"emailDialog"}},[r("v-card",{attrs:{tile:""}},[r("v-card-title",[e._v("\n        Send Email\n      ")]),r("v-card-text",[r("v-text-field",{attrs:{label:"Email Address",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{disabled:e.btnLoader,color:"blue darken-1",text:""},on:{click:function(t){e.emailDialog=!1}}},[e._v("\n          Close\n        ")]),r("v-btn",{attrs:{loading:e.btnLoader,disabled:e.btnLoader,color:"primary"},on:{click:e.sendEmailTrigger}},[e._v("\n          send\n        ")])],1)],1)],1),r("app-footer")],1)},a=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=(r("96cf"),r("3b8d")),s=r("4d77");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={page:{title:"StudentList",meta:[{name:"description",content:"StudentList"}]},components:{},data:function(){return{headers:[{text:"Record",value:"Name"},{text:"Name",value:"Student_Name__c"}],records:[],email:"",emailDialog:!1,btnLoader:!1}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getRecords();case 2:this.subscribeEvents();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:l(l({},s["c"]),{},{getRecords:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$jsforce.browser.connection.query("select Id, Name, Student_Name__c from Student__c order by Id DESC");case 2:t=e.sent,this.records=t.records;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),subscribeEvents:function(){var e=this;this.$jsforce.browser.on("connect",(function(t){e.getRecords()}))},openEmailDialog:function(){this.emailDialog=!0,this.email=""},sendEmailTrigger:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.btnLoader=!0,t="AutoLaunchEmailFlow",r={inputs:[{email:this.email}]},e.next=6,this.triggerFlow({API:t,data:r});case 6:e.sent,this.btnLoader=!1,this.emailDialog=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),this.$toasted.show(e.t0),this.btnLoader=!1;case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()})},d=u,m=r("2877"),p=Object(m["a"])(d,n,a,!1,null,null,null);t["default"]=p.exports}}]);