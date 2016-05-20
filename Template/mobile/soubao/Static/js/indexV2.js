define("api/address",["config/url"],function(e){return{getAddrList:{apiName:"miscGetaddrlist",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{action:"?",addr_id:"?"},method:"post"},adminAddr:{apiName:"miscAdminaddr",isOnlyData:1,post:{areaCode:"?",token:"?",body:"??"},body:{action:"?",need_know_support_offline_pay:"?",addr:"?"},method:"post"},setDefaultAddr:{url:e.sappsDomain+"citylist/defaultAddress",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{consignee_id:"?",consignee_default:"?"},method:"post"}}}),define("model/address",["lib/common","api/address"],function(e,t){function n(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{}};return t}function r(r,i){var s=n(),r=r||{};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.getAddrList,s),function(e){try{i&&i(e)}catch(t){throw t}})}function i(r,i){var s=n(),r=r||{};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.adminAddr,s),function(e){try{i&&i(e)}catch(t){throw t}})}function s(r,i){var s=n(),r=r||{};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.adminAddr,s),function(e){try{i&&i(e)}catch(t){throw t}})}function o(r,i){var s=n(),r=r||{};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.adminAddr,s),function(e){try{i&&i(e)}catch(t){throw t}})}function u(r,i){var s=n(),r=r||{};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.setDefaultAddr,s),function(e){try{i&&i(e)}catch(t){throw t}})}return{getAddrList:r,addAddress:i,delAddress:s,editAddress:o,setDefaultAddress:u}}),define("widget/gotoTopV2",["lib/common"],function(e){function n(){var e=document.body.scrollTop||document.documentElement.scrollTop;e<=0?t.hide():t.show()}function r(){var r='<p class="gotop J_goTop"></p>';e("body").append(r),t=e(".J_goTop"),n(),s(),e(window).on("scroll",function(){n()})}function i(e){var t=e||t;t.preventDefault(),window.scrollTo(0,0);var n={track_tag_name:"1012",result:"",page_content:"",track_type:"2",message:"-9"};typeof h5stat=="object"&&h5stat.shangbao(n)}function s(){e(".J_goTop").click(function(e){i(e)})}var t;return{init:s,goTop:i,initialize:r}}),function(e){function t(t){function n(){if(this.udid)return this.udid;var e="",t=this.getTime();return e+="H5_"+t+this.randomString(10),this.udid=e,e}t=t||{},this.ua=navigator.userAgent,this.udid="",this.env=null,this.resolution=e.screen.width+"|"+e.screen.height,this.cookieDomain=function(){var e=/m\.feiniu\.com/i.test(location.href);return e?".feiniu.com":location.hostname.split(".").slice(-2).join(".")},this.getTime=function(){return(new Date).getTime()},this.randomString=function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));var n="";for(var r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n},this.createUdid=typeof t.createUdid=="function"?t.createUdid:n,this.getcookie=function(e){var t=new RegExp("(^|;|\\s+)"+e+"=([^;]*)(;|$)"),n=document.cookie.match(t);return n?decodeURIComponent(n[2]):""},this.addcookie=function(e,t,n,r,i){var s=e+"="+encodeURIComponent(t)+"; path="+(n||"/")+(i?"; domain="+i:"");if(r>0){var o=new Date;o.setTime(o.getTime()+r*1e3),s+=";expires="+o.toGMTString()}document.cookie=s},this.delcookie=function(e,t,n){arguments.length==2&&(n=t,t="/"),document.cookie=e+"=;path="+t+";"+(n?"domain="+n+";":"")+"expires=Thu, 01-Jan-70 00:00:01 GMT"},this.getUdid=function(){var e="th5_stat_udid",t=this.getcookie(e);if(t)return t;var n=this.createUdid(),r=31536e3,i=/feiniu\.com/i.test(location.href),s=".feiniu.com";return i||(s=location.hostname.split(".").slice(-2).join(".")),this.addcookie(e,n,"/",r,s),n},this.getEnv=function(){if(this.env!=null)return this.env;var e=["m","preview","test","dev","dev1","local"],t="m",n=location.hostname.split(".");if(n[0])for(var r in e)if(e[r]==n[0]){t=n[0];continue}return this.setEnv(t),t},this.setEnv=function(e){this.env=e},this.getSystemType=function(){var e=this.ua;e=e.toLowerCase();var t="";return e.indexOf("android")>-1||e.indexOf("linux")>-1?t="android":e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||e.indexOf("itouch")>-1||e.indexOf("ipod")>-1||e.indexOf("mac")>-1?t="ios":e.indexOf("windows phone")>-1?t="wp":t="windows",t},this.mix=function(){var e={};for(var t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)r in e?n[r]!=undefined&&(e[r]=n[r]):e[r]=n[r]}return e},this.getUrlParam=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=location.search.substr(1).match(t);return n!=null?decodeURIComponent(n[2]):null},this.getMessage=function(){var e=this.getUrlParam("fromtype");return e==null&&(e=document.referrer?document.referrer:""),e},this.getRemarksCfg=function(){var e={terminal_os_ver:"",model:"",brand:"",resolution:this.resolution,browser_type:"",mac:""};return JSON.stringify(this.mix(e))},this.isClient=function(){var e="th5_stat_token",t=86400,n=this.getcookie("th5_token")||"",r=this.getcookie("th5_stat_token")||"";if(n&&r==n)return"";if(r=="-1")return n&&this.addcookie(e,n,"/",t,this.cookieDomain()),"";if(r!=n||!r){var n=n||"-1";this.addcookie(e,n,"/",t,this.cookieDomain())}return this.getRemarksCfg()};var r=this.getTime(),i=this.getcookie("th5_username")||"",s=this.getcookie("th5_sitename")||"",o=this.getcookie("th5_mem_guid")||"";!o&&i&&(o=i),this.getLandingUrl=function(){var t="th5_landing_url",n=this.getcookie(t)||"",r=1800;if(n)return this.addcookie(t,n,"/",r,this.cookieDomain()),n;var i=e.location.href;return this.addcookie(t,i,"/",r,this.cookieDomain()),i},this.getLandingSession=function(){var e="th5_landing_session",t=this.getcookie(e)||"",n=1800;if(t)return this.addcookie(e,t,"/",n,this.cookieDomain()),t;var r="";return r+="H5_"+this.getTime()+this.randomString(10),this.addcookie(e,r,"/",n,this.cookieDomain()),r},this.setLandingSession=function(e){var t="th5_landing_session",n=1800;this.addcookie(t,e,"/",n,this.cookieDomain())},this.getAppid=function(){var e=navigator.userAgent;e=e.toLowerCase();if(navigator.userAgent.indexOf("feiniuapp")>-1){var t=navigator.userAgent.split(" ");for(var n=0;n<t.length;n++)if(t[n].indexOf("feiniuapp")>-1){var r=t[n].split("/"),i=r[1].toLowerCase();if(i=="android")return 1;if(i=="iphone")return 2;if(i=="ipad")return 4;if(i=="winphone")return 5}}else{if(this.getUrlParam("osType")&&this.getUrlParam("osType")!="")return e.match(/MicroMessenger/i)=="micromessenger"?9:this.getUrlParam("osType");if(e.match(/MicroMessenger/i)=="micromessenger")return 9}return 3},this.statAppVal=function(){var e={},t=this.getcookie("th5_stat_app");if(t)try{e=JSON.parse(t)}catch(n){}if(typeof e=="undefined"||!e)e={};return e},this.urlConfigParam={udid:this.getUdid(),mem_guid:o,user_name:i,terminal_os:this.getSystemType(),track_code:this.getcookie("th5_channel_edm_code")||"",network:"",gps:"",city:s,track_tag_name:"",result:"",page_content:"",message:"",cur_req_url:location.href,landing_url:"",session_id:"",track_type:1,referer_url:document.referrer||"",startTime:r,endTime:r,abtest:0,remarks:"",ver:"",traffic_channel:"",dev_type:this.getAppid(),ref_page_id:"",client_type:0},this.shangbao=function(t,n,r){var i="",s=this.getEnv();s=="m"?i="http://flume.feiniu.com/AppCollectLogs/AddH5Log?v="+this.getTime():s=="preview"?i="/stat.php?env=preview&v="+this.getTime():i="/stat.php?env=test&v="+this.getTime(),i+=this.randomString(2);var t=t||{};t.message=="-9"&&(t.message=this.getMessage());var o=this.statAppVal();typeof o=="object"&&(t.client_type=o.client_type,t.ver=o.ver,t.traffic_channel=o.traffic_channel,t.gps=o.gps,t.network=o.network,o.session_id&&this.setLandingSession(o.session_id)),t.landing_url=this.getLandingUrl(),t.session_id=this.getLandingSession();var u=this.mix(this.urlConfigParam,t);for(j in u)u[j]=="-9"&&(u[j]="0"),i+="&"+j+"="+encodeURIComponent(u[j]);typeof n!="function"&&(n=function(){});if(navigator.sendBeacon)navigator.sendBeacon(i,""),n();else{var a=new Image,f;try{var l=new $.Deferred,c=function(){a.removeEventListener("load",c,!1),a.removeEventListener("error",c,!1),clearTimeout(f),n(),l.resolve()};a.addEventListener("load",c,!1),a.addEventListener("error",c,!1),f=setTimeout(c,r||1e3),a.src=i,e._deferRedirect=l}catch(h){a.src=i,n()}}}}var n={isObj:0,shangbao:function(e,n,r){var i="";if(this.isObj)i=this.isObj;else{i=new t(this.opt),this.isObj=i;if(e.h5_type=="edm"){if(i.getUrlParam("tracking_type")!="h5_edm")return"";var s=i.getUrlParam("type");(s=="h5_dev"||s=="h5_test"||s=="h5_beta")&&i.setEnv("test")}var o=i.isClient();if(o){var u={track_tag_name:"1000",result:"",page_content:"",message:"-9",track_type:"6",remarks:o};i.shangbao(u,n,r)}}i.shangbao(e,n,r)},getRemarksCfg:function(){var e="";return this.isObj?e=this.isObj:(e=new t,this.isObj=e),e.getRemarksCfg()}};e.h5stat=n;if(typeof define=="function"&&define.amd)define("widget/stat",["lib/common"],function(t){return e.h5stat});else if(typeof e.Zepto=="undefined"){var r=document.createElement("script");r.src=e.feiniu.url.jsBase+"/lib/zepto.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}(window),define("widget/popAlert",["lib/common"],function(e){function t(t,n,r){if(typeof t=="undefined")return"";var i=n?"popbg tmbg":"popbg",r=r||3e3;window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o=['<div class="'+i+'" id="'+s+'" >','<div class="popbox">','<p class="poptxt">'+t+"</p>","</div></div>"].join("");e("body").append(o);var u=e("#"+s);u.on("click",function(){u.remove()}),setTimeout(function(){u.remove()},r)}function n(t,n,r){if(typeof t=="undefined")return"";window.popAlertIndex=(window.popAlertIndex||0)+1;var i="popalert_"+window.popAlertIndex,s="close_popalert_"+window.popAlertIndex,o="fun_popalert_"+window.popAlertIndex,u=s,a="",f="";typeof n=="function"&&(u=o,a='<p id="'+s+'">取消</p>',f='<p class="poptip">提示</p>');var l=['<div class="popbg" id="'+i+'">','<div class="popbox">',f,'<p class="poptxt">'+t+"</p>",'<div class="popbtnbox">',a,'<p id="'+u+'">确定</p>',"</div></div></div>"].join("");e("body").append(l);var c=e("#"+i);e("#"+s).on("click",function(){c.remove()}),e("#"+o).on("click",function(){n(r),c.remove()})}function r(t,n,r,i){if(typeof t=="undefined")return"";if(typeof n=="undefined")return"";window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o="close_popalert_"+window.popAlertIndex,u="fun_popalert_"+window.popAlertIndex,a=o,f="",l="";typeof i=="function"&&(a=u,f='<p id="'+o+'">取消</p>',l='<p class="poptip">'+t+"</p>");var c=['<div class="popbg" id="'+s+'">','<div class="popbox">',l,'<input type="'+r+'" class="popinput" placeholder="'+n+'" />','<div class="popbtnbox">',f,'<p id="'+a+'">确定</p>',"</div></div></div>"].join("");e("body").append(c);var h=e("#"+s);e("#"+o).on("click",function(){h.remove()}),e("#"+u).on("click",function(){i(),h.remove()})}function i(t){if(typeof t.msg=="undefined")return"";if(typeof t.one=="undefined"||typeof t.one.name=="undefined")return"";var n="",r="";t.icon&&t.icon.isIcon&&(n=t.icon.iconClass?t.icon.iconClass:"situs",r='<i class="'+n+'"></i>');var i=t.tip?t.tip:"提示";window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o="one_popalert_"+window.popAlertIndex,u="two_popalert_"+window.popAlertIndex,a=t.popClass||"",f="";t.one&&(f+='<p id="'+o+'">'+t.one.name+"</p>"),t.two&&t.two.name!=""&&(f+='<p id="'+u+'">'+t.two.name+"</p>");var l=t.id||"",c=['<div class="popbg '+a+'" id="'+s+'">','<div class="popbox '+l+'">',r,'<p class="poptip">'+i+"</p>",'<p class="poptxt">'+t.msg+"</p>",'<div class="popbtnbox">',f,"</div></div></div>"].join("");e("body").append(c),typeof t.initFun=="function"&&t.initFun(s);var h=e("#"+s),p=function(){h.remove()},d=typeof t.one.fun=="function"?function(){var e=t.one.noClose?t.one.noClose:0;e||p(),t.one.fun()}:p;e("#"+o).on("click",d);if(t.two&&t.two.fun!=""){var v=typeof t.two.fun=="function"?function(){var e=t.two.noClose?t.two.noClose:0;e||p(),t.two.fun()}:p;e("#"+u).on("click",v)}}return{popalert:t,popconfirm:n,popinput:r,popdefine:i}}),define("widget/orderHelper",[],function(){function t(){return e.join(",")}var e=["addr","store_search","point","card","payment","invoice","ci","supportStore","defaultStoreInfo","useScore","useVvipCardNum","useVvipCardPhone","useShopPoint","from3010","makeInvoiceParamObj"];return{paramA:e,paramAstr:t,initPara:function(n){var n=n||"a",r={};r[n]=t();for(var i in e){var s=$.url.getParam(e[i])||"";r[e[i]]=s}return r},getParamStr:function(e){var t="";for(var n in e)t+=n+"="+encodeURIComponent(e[n])+"&";return t.substring(0,t.length-1)}}}),require(["lib/common","config/url","model/address","widget/gotoTopV2","widget/stat","widget/popAlert","widget/orderHelper"],function(e,t,n,r,i,s,o){"use strict";function c(e){return{name:e.data("name"),province:e.data("province"),city:e.data("city"),area:e.data("area"),town:e.data("town"),addr:e.data("addr"),zip:e.data("zip"),tel:e.data("tel"),cellPhone:e.data("cellphone"),addrId:e.data("addrid"),areaCode:e.data("areacode"),is_market:e.data("is_market"),cvs_type:"",cvs_no:"",cvs_name:"",cvs_tel:""}}function h(){var t={body:{}};n.getAddrList(t,function(t){u.supportStore==1?e(".J_showHideZt").show():e(".J_showHideZt").hide();if(t.errorCode==0){if(t.body.AddrList.length){t.body.addr=f,e.tplRender("tpl_addressList",t.body);var n;t.body.AddrList.forEach(function(e){e.is_default=="1"&&(n=e.addrId)}),n&&(e("input.J_checkbox[data-addrId='"+n+"']")[0].checked=!0)}else e(".J_blank").show();e(".J_addAddress").on("click",function(){if(t.body.AddrList.length>19)s.popconfirm("您的地址列表已达20条上限，请修改或删除不常用的地址以便建立新地址");else{var n={track_tag_name:"4025",result:"",page_content:"1",message:"",track_type:"2"};typeof h5stat=="object"&&h5stat.shangbao(n),v("5021",null,1,2,null);var r=o.getParamStr(u);e.url.redirect(e.url.getTouchBaseUrl()+"order/address/add.html?"+r)}})}else s.popalert(t.errorDesc||"网络错误");e(".J_noData").hide()})}function d(){e(".J_addressList").on("click",".J_selectAddress",function(){var t={track_tag_name:"4025",result:"",page_content:"4",message:"",track_type:"2"};typeof h5stat=="object"&&h5stat.shangbao(t),v("5021",null,2,2,null);var n=c(e(this)),r=o.getParamStr(u),i=r+"&addr="+encodeURIComponent(JSON.stringify(n));e.url.redirect(e.url.getTouchBaseUrl()+"order/index.html?"+i)}).on("click",".J_gotoEditAddr",function(){var t={track_tag_name:"4025",result:"",page_content:"2",message:"",track_type:"2"};typeof h5stat=="object"&&h5stat.shangbao(t);var n=c(e(this).parent().siblings(".J_selectOption").find("input"));setTimeout(function(){var t=o.getParamStr(u);e.url.redirect(e.url.getTouchBaseUrl()+"order/address/edit.html?"+t+"&addr="+JSON.stringify(n))},200)}).on("click",".J_gotoZt",function(){var t=o.getParamStr(u);v("4022",null,null,1,JSON.stringify(f)),e.url.redirect(e.url.getTouchBaseUrl()+"order/store/list.html?"+t+"&addr="+JSON.stringify(f))}).on("click",".r_checkbox",function(e){var t=+(new Date);if(t-p<100)return;p=t;var n={track_tag_name:"4025",result:"",page_content:"3",message:"",track_type:"2"};typeof h5stat=="object"&&h5stat.shangbao(n)}).on("change",".J_checkbox",function(){e(".J_loading_all").show();var t={body:{consignee_id:e(this).data("addrid"),consignee_default:"1"}};n.setDefaultAddress(t,function(t){t.errorCode==0?e(".J_loading_all").hide():s.popalert(data.errorDesc||"网络错误")})}),e(".J_ownback").click(function(){var t=e.url.getParam("isWindow"),n=navigator.userAgent.toLowerCase(),r=document.referrer;if(r&&r.indexOf("/order/address/index")&&t){var i=o.getParamStr(u);e.url.redirect(e.url.getTouchBaseUrl()+"order/index.html?"+i)}else history.go(-1)})}function v(e,t,n,r,s){var o={track_tag_name:e||"",result:t||"",page_content:n||"",track_type:r||1,message:s||""};i.shangbao(o)}e.url.options.ssKey=1,r.initialize();var u=o.initPara(),a=e.cookie.getH5("siteid")||"CS000016-0-0-0",f=e.isNull(u.addr)?{}:e.parseJSON(decodeURIComponent(u.addr));if(e.cookie.getH5("islogin")!=1){var l=location.href;e.url.redirect(e.url.getTouchBaseUrl()+"login/index.html?gotourl="+encodeURIComponent(l));return}var p=0;e.getToken(function(){d(),h()}),v("4014",null,null,null,null)}),define("controller/order/address/indexV2",function(){});