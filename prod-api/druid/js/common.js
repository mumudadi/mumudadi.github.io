"use strict";function replace(e){return e&&void 0!==e?format(e):""}function format(e){return(e+="").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}$.namespace("druid.common"),druid.common=function(){var r="",o="",d="asc",u=!1;return{init:function(){this.buildFooter(),druid.lang.init()},buildHead:function(t){$.get("header.html",function(e){$(document.body).prepend(e),druid.lang.trigger(),$(".navbar .nav li").eq(t).addClass("active")},"html")},buildFooter:function(){$(document.body).append('<footer class="footer">    \t\t<div class="container">\t\t\t\t</div> </footer>')},ajaxRequestForReset:function(){confirm("Are you sure to reset all stat? It'll clear all stat data !")&&$.ajax({type:"POST",url:"reset-all.json",success:function(e){1==e.ResultCode&&alert("already reset all stat")},dataType:"json"})},ajaxRequestForLogAndReset:function(){confirm("Are you sure to reset data source stat? It'll clear and log all stat data !")&&$.ajax({type:"POST",url:"log-and-reset.json",success:function(e){1==e.ResultCode&&alert("already reset all stat")},dataType:"json"})},getAjaxUrl:function(e){var t=e;return null!=r&&(t+="orderBy="+r+"&"),null!=d&&(t+="orderType="+d+"&"),t+="page=1&",t+="perPageCount=1000000&"},resetSortMark:function(){var e=document.getElementById("th-"+r),t=document.getElementById("th-"+o),n="";if(t){var a=t.innerHTML;0<o.indexOf("[")&&(n="-"),a=(a=a.replace("▲",n)).replace("▼",n),t.innerHTML=a}if(e){a=e.innerHTML;0<r.indexOf("[")&&(a=""),"asc"==d?a+="▲":"desc"==d&&(a+="▼"),e.innerHTML=a}return u=!0,this.ajaxRequestForBasicInfo(),!1},setOrderBy:function(e){if(r!=e)return o=r,r=e,d="desc",void druid.common.resetSortMark();o=r,d="asc"==d?"desc":"asc",druid.common.resetSortMark()},ajaxuri:"",handleCallback:null,handleAjaxResult:function(e){druid.common.handleCallback(e),u||druid.lang.trigger()},ajaxRequestForBasicInfo:function(){$.ajax({type:"POST",url:druid.common.getAjaxUrl(druid.common.ajaxuri),success:function(e){druid.common.handleAjaxResult(e)},dataType:"json"})},subSqlString:function(e,t){return null==e||null==e?"":e.length<=t?e:e.substr(0,t)+"..."},stripes:function(){$("#dataTable tbody tr").each(function(){$(this).removeClass("striped")}),$("#dataTable tbody tr:even").each(function(){$(this).addClass("striped")})},getUrlVar:function(e){var a={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,n){a[t]=n});return a[e]}}}(),$(document).ready(function(){druid.common.init()});