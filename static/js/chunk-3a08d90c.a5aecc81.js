"use strict";(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3a08d90c"],{"1e8b":function(e,t,r){r.r(t);var u=r("c0c7"),n={props:{user:{type:Object}},data:function(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var t=this;this.$refs.form.validate(function(e){e&&Object(u.k)(t.user).then(function(e){200===e.code?t.msgSuccess("修改成功"):t.msgError(e.msg)})})},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/index"})}}},s=r("2877"),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.user,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{model:{value:t.user.nickName,callback:function(e){t.$set(t.user,"nickName",e)},expression:"user.nickName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{attrs:{maxlength:"11"},model:{value:t.user.phonenumber,callback:function(e){t.$set(t.user,"phonenumber",e)},expression:"user.phonenumber"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:t.user.sex,callback:function(e){t.$set(t.user,"sex",e)},expression:"user.sex"}},[r("el-radio",{attrs:{label:"0"}},[t._v("男")]),t._v(" "),r("el-radio",{attrs:{label:"1"}},[t._v("女")])],1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submit}},[t._v("保存")]),t._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.close}},[t._v("关闭")])],1)],1)},[],!1,null,null,null);t.default=a.exports},c0c7:function(e,t,r){r.d(t,"h",function(){return s}),r.d(t,"e",function(){return a}),r.d(t,"a",function(){return o}),r.d(t,"j",function(){return i}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return c}),r.d(t,"i",function(){return m}),r.d(t,"b",function(){return d}),r.d(t,"f",function(){return p}),r.d(t,"k",function(){return f}),r.d(t,"l",function(){return b}),r.d(t,"m",function(){return h}),r.d(t,"g",function(){return g});var u=r("b775"),n=r("c38a");function s(e){return Object(u.a)({url:"/system/user/list.json",method:"get",params:e})}function a(e){return Object(u.a)({url:"/system/user/"+Object(n.d)(e),method:"get"})}function o(e){return Object(u.a)({url:"/system/user",method:"post",data:e})}function i(e){return Object(u.a)({url:"/system/user",method:"put",data:e})}function l(e){return Object(u.a)({url:"/system/user/"+e,method:"delete"})}function c(e){return Object(u.a)({url:"/system/user/export",method:"get",params:e})}function m(e,t){var r={userId:e,password:t};return Object(u.a)({url:"/system/user/resetPwd",method:"put",data:r})}function d(e,t){var r={userId:e,status:t};return Object(u.a)({url:"/system/user/changeStatus",method:"put",data:r})}function p(){return Object(u.a)({url:"/system/user/profile.json",method:"get"})}function f(e){return Object(u.a)({url:"/system/user/profile",method:"put",data:e})}function b(e,t){var r={oldPassword:e,newPassword:t};return Object(u.a)({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(e){return Object(u.a)({url:"/system/user/profile/avatar",method:"post",data:e})}function g(){return Object(u.a)({url:"/system/user/importTemplate",method:"get"})}}}]);