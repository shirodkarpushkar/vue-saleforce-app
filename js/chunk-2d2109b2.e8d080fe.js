(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2109b2"],{b938:function(o,s,e){"use strict";e.r(s);var t=function(){var o=this,s=o.$createElement,e=o._self._c||s;return e("div",[e("navbar"),e("v-container",[e("v-row",{staticClass:"mb-2"},[e("v-col",[e("h4",{staticClass:"title"},[o._v(" School Details")])]),e("v-col",[e("v-btn",{attrs:{to:{name:"schoolList"},tile:""}},[o._v("Close")])],1)],1),e("v-divider"),e("br"),o.school?e("div",[e("h5",[o._v("School Id")]),e("p",{staticClass:"body-1"},[o._v(o._s(o.school.Id))]),e("h5",[o._v("school Name")]),e("p",[o._v(o._s(o.school.Name))]),e("h5",[o._v("Phone Number")]),e("p",[o._v(o._s(o.school.School_Phone__c))]),e("h5",[o._v("Email")]),e("p",[o._v(o._s(o.school.School_Email__c))]),e("h5",[o._v("Address")]),e("p",[o._v(o._s(o.school.School_Address__c))]),e("h5",[o._v("Fees")]),e("p",[o._v("$"+o._s(o.school.Fees__c))])]):o._e()],1),e("app-footer")],1)},c=[],l=e("1da1"),a={page:{title:"Details",meta:[{name:"description",content:"Details"}]},components:{},data(){return{school:null}},created(){var o=this;return Object(l["a"])((function*(){yield o.getschool()}))()},methods:{getschool(){var o=this;return Object(l["a"])((function*(){try{const s=yield o.$jsforce.browser.connection.sobject("School__c").find({Id:o.$route.params.id});o.school=s[0]}catch(s){o.$toasted.show(s)}}))()}}},n=a,h=e("2877"),_=Object(h["a"])(n,t,c,!1,null,"5a9d8704",null);s["default"]=_.exports}}]);