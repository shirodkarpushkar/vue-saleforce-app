(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad27"],{"133b":function(e,o,c){"use strict";c.r(o);var t=function(){var e=this,o=e.$createElement,c=e._self._c||o;return c("div",[c("navbar"),c("v-container",[c("div",{staticClass:"d-flex justify-end mb-2"},[c("v-btn",{attrs:{color:"primary"},on:{click:e.addNew}},[e._v(" Add New")])],1),c("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.records},scopedSlots:e._u([{key:"item.Name",fn:function(o){var t=o.item;return[c("div",[c("router-link",{attrs:{to:{name:"schoolDetails",params:{id:t.Id}}}},[e._v(e._s(t.Name))])],1)]}}])})],1),c("v-dialog",{attrs:{"content-class":"rounded-0",persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(o){e.dialog=o},expression:"dialog"}},[c("v-card",{attrs:{tile:""}},[c("v-card-title",[e._v("\n        Add School\n      ")]),c("v-card-text",[c("v-container",[c("v-row",[c("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[c("v-text-field",{attrs:{label:"School Name",required:""},model:{value:e.school.Name,callback:function(o){e.$set(e.school,"Name",o)},expression:"school.Name"}})],1),c("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[c("v-text-field",{attrs:{label:"School Email",required:""},model:{value:e.school.School_Email__c,callback:function(o){e.$set(e.school,"School_Email__c",o)},expression:"school.School_Email__c"}})],1),c("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[c("v-textarea",{attrs:{rows:"3",label:"School Address",required:""},model:{value:e.school.School_Address__c,callback:function(o){e.$set(e.school,"School_Address__c",o)},expression:"school.School_Address__c"}})],1),c("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[c("v-text-field",{attrs:{label:"School Phone",required:""},model:{value:e.school.School_Phone__c,callback:function(o){e.$set(e.school,"School_Phone__c",o)},expression:"school.School_Phone__c"}})],1),c("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[c("v-text-field",{attrs:{label:"School Fees ($)",required:""},model:{value:e.school.Fees__c,callback:function(o){e.$set(e.school,"Fees__c",o)},expression:"school.Fees__c"}})],1)],1)],1),c("small",[e._v("*indicates required field")])],1),c("v-card-actions",[c("v-spacer"),c("v-btn",{attrs:{disabled:e.btnLoader,color:"blue darken-1",text:""},on:{click:function(o){e.dialog=!1}}},[e._v("\n          Close\n        ")]),c("v-btn",{attrs:{loading:e.btnLoader,disabled:e.btnLoader,color:"primary"},on:{click:e.createResource}},[e._v("\n          Save\n        ")])],1)],1)],1),c("app-footer")],1)},s=[],l=c("1da1"),a={page:{title:"SchoolList",meta:[{name:"description",content:"StudentList"}]},components:{},data(){return{headers:[{text:"Id",value:"Id"},{text:"Name",value:"Name"}],records:[],dialog:!1,btnLoader:!1,school:{Name:"",School_Phone__c:"",School_Address__c:"",Fees__c:"",School_Email__c:""}}},created(){var e=this;return Object(l["a"])((function*(){yield e.getRecords(),e.subscribeEvents()}))()},methods:{getRecords(){var e=this;return Object(l["a"])((function*(){const o=yield e.$jsforce.browser.connection.query("select Id, Name from School__c order by Id DESC");e.records=o.records}))()},subscribeEvents(){this.$jsforce.browser.on("connect",e=>{this.getRecords()})},addNew(){this.dialog=!0,this.school={Name:"",School_Phone__c:"",School_Address__c:"",Fees__c:"",School_Email__c:""}},createResource(){var e=this;return Object(l["a"])((function*(){try{e.btnLoader=!0;yield e.$jsforce.browser.connection.sobject("School__c").create(e.school);e.getRecords(),e.btnLoader=!1,e.dialog=!1}catch(o){e.$toasted.show(o),e.btnLoader=!1}}))()}}},r=a,d=c("2877"),n=Object(d["a"])(r,t,s,!1,null,null,null);o["default"]=n.exports}}]);