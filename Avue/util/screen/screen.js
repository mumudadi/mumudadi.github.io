"use strict";function util(){this.flag=!0;var t=document.body,e=this;this.setBody=function(){t.innerHTML='<div class="el-tip el-tip--warning" id="tip"><div class="el-tip_content"><span class="el-tip__title">您乘坐的浏览器版本太低了,你可以把浏览器从兼容模式调到极速模式<br /> 实在不行就换浏览器吧;</span><div class="el-tip_img"><img src="/util/screen/huohu.png" alt=""><img src="/util/screen/guge.png" alt=""></div></div></div>'+t.innerHTML},this.init=function(){var t,i;return t=navigator.appName,"WOW64"==(i=navigator.appVersion.split(";")[1].replace(/[ ]/g,""))?e.flag=!1:"Microsoft Internet Explorer"==t&&"MSIE6.0"==i?e.flag=!1:"Microsoft Internet Explorer"==t&&"MSIE7.0"==i?e.flag=!1:"Microsoft Internet Explorer"==t&&"MSIE8.0"==i?e.flag=!1:"Microsoft Internet Explorer"==t&&"MSIE9.0"==i&&(e.flag=!1),this}}var creen=(new util).init(),flag=creen.flag;flag||creen.setBody();