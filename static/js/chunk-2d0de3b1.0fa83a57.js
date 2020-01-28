"use strict";(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0de3b1"],{8586:function(e,t,l){l.r(t);var o={name:"BasicInfoForm",props:{info:{type:Object,default:null}},data:function(){return{rules:{tplCategory:[{required:!0,message:"请选择生成模板",trigger:"blur"}],packageName:[{required:!0,message:"请输入生成包路径",trigger:"blur"}],moduleName:[{required:!0,message:"请输入生成模块名",trigger:"blur"}],businessName:[{required:!0,message:"请输入生成业务名",trigger:"blur"}],functionName:[{required:!0,message:"请输入生成功能名",trigger:"blur"}]}}},created:function(){}},a=l("2877"),n=Object(a.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-form",{ref:"genInfoForm",attrs:{model:t.info,rules:t.rules,"label-width":"150px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"tplCategory"}},[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("生成模板")]),t._v(" "),l("el-select",{model:{value:t.info.tplCategory,callback:function(e){t.$set(t.info,"tplCategory",e)},expression:"info.tplCategory"}},[l("el-option",{attrs:{label:"单表（增删改查）",value:"crud"}}),t._v(" "),l("el-option",{attrs:{label:"树表（增删改查）",value:"tree",disabled:""}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"packageName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          生成包路径\n          "),l("el-tooltip",{attrs:{content:"生成在哪个java包下，例如 com.ruoyi.system",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-input",{model:{value:t.info.packageName,callback:function(e){t.$set(t.info,"packageName",e)},expression:"info.packageName"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"moduleName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          生成模块名\n          "),l("el-tooltip",{attrs:{content:"可理解为子系统名，例如 system",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-input",{model:{value:t.info.moduleName,callback:function(e){t.$set(t.info,"moduleName",e)},expression:"info.moduleName"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"businessName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          生成业务名\n          "),l("el-tooltip",{attrs:{content:"可理解为功能英文名，例如 user",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-input",{model:{value:t.info.businessName,callback:function(e){t.$set(t.info,"businessName",e)},expression:"info.businessName"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"functionName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          生成功能名\n          "),l("el-tooltip",{attrs:{content:"用作类描述，例如 用户",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-input",{model:{value:t.info.functionName,callback:function(e){t.$set(t.info,"functionName",e)},expression:"info.functionName"}})],1)],1)],1),t._v(" "),l("el-row",{directives:[{name:"show",rawName:"v-show",value:"tree"==t.info.tplCategory,expression:"info.tplCategory == 'tree'"}]},[l("h4",{staticClass:"form-header"},[t._v("其他信息")]),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          树编码字段\n          "),l("el-tooltip",{attrs:{content:"树显示的编码字段名， 如：dept_id",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.info.treeCode,callback:function(e){t.$set(t.info,"treeCode",e)},expression:"info.treeCode"}},t._l(t.info.columns,function(e){return l("el-option",{key:e.columnName,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          树父编码字段\n          "),l("el-tooltip",{attrs:{content:"树显示的父编码字段名， 如：parent_Id",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.info.treeParentCode,callback:function(e){t.$set(t.info,"treeParentCode",e)},expression:"info.treeParentCode"}},t._l(t.info.columns,function(e){return l("el-option",{key:e.columnName,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})}),1)],1)],1),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          树名称字段\n          "),l("el-tooltip",{attrs:{content:"树节点的显示名称字段名， 如：dept_name",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),t._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.info.treeName,callback:function(e){t.$set(t.info,"treeName",e)},expression:"info.treeName"}},t._l(t.info.columns,function(e){return l("el-option",{key:e.columnName,attrs:{label:e.columnName+"："+e.columnComment,value:e.columnName}})}),1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=n.exports}}]);