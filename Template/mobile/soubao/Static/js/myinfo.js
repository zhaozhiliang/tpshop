define("api/account",["config/url"],function(e){return{login:{apiName:"miscLogin",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{username:"?",password:"?",captcha:"",osType:e.osType}},register:{apiName:"miscRegister",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",device_id:"?",body:"??"},body:{username:"?",password:"?",captcha:"?",osType:3,channel:"?",invitation:"?",inviteId:"?"}},register2:{apiName:"miscRegister2",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",device_id:"?",body:"??"},body:{username:"?",password:"?",captcha:"",img_captcha:"?",osType:3,channel:"?"}},getCaptcha:{apiName:"miscGetcaptcha",isOnlyData:1,get:{_:Date.now()},post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{username:"?",userType:"?",action:"?",requestSource:"?"},method:"post"},getCaptcha2:{apiName:"miscGetcaptcha2",isOnlyData:1,get:{_:Date.now()},post:{areaCode:"?",token:"?",body:"??"},body:{username:"?",img_captcha:"?",action:"?",userType:"?",requestSource:"?"},method:"post"},ValidateCaptcha:{apiName:"miscValidatecaptcha",isOnlyData:1,post:{areaCode:"?",token:"?",body:"??"},body:{username:"?",captcha:"?",isPic:"?",userType:"?",requestSource:"?"}},ResetPassword:{apiName:"miscResetpassword",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{username:"?",password:"",newPassword:"?",captcha:"?"}},CheckUser:{apiName:"miscCheckuser",isOnlyData:1,get:{_:Date.now()},post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{username:"?",osType:"?",captcha:""},method:"post"},qqLogin:{url:e.sappsDomain+"misc/QqLogin",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{url:"?",qqType:"?"}},getPointRemain:{apiName:"miscGetpointremain",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:""}},getBindPhone:{apiName:"userinfoGetbindphone",isOnlyData:1,post:{areaCode:"?",token:"?",body:""}},getUserBind:{apiName:"userinfoGetuserbind",isOnlyData:1,post:{areaCode:"?",token:"?",body:""}},sendCaptcha:{apiName:"userinfoSendcaptcha",isOnlyData:1,post:{token:"?",body:{cellphone:"?",isBindPhone:"?",requestSource:"?"}}},submitPayPassword:{apiName:"userinfoSubmitpaypassword",isOnlyData:1,post:{token:"?",body:{cellphone:"?",isBindPhone:"?",captcha:"?",password:"?"}}},isSetPayPassword:{apiName:"userinfoIssetpaypassword",isOnlyData:1,post:{token:"?",body:{}}},authCheck:{url:e.mDomain+"partner/api/index/inviteIdAuthCheck",isOnlyData:1,post:{body:"??"},body:{inviteCode:"?"}}}}),define("model/account/account",["lib/common","api/account","config/url"],function(e,t,n){function r(n,r){e.xsr(e.makeUrl(t.authCheck,n),function(e){try{r&&r(e)}catch(t){throw t}})}function i(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),device_id:e.cookie.getH5("stat_udid"),body:{username:"",password:"",captcha:"",osType:n.osType}};return e.log("城市编号："+e.cookie.getH5("siteid")),t}function s(r,s){if(r.body){var o=i();e.merge(o.body,r.body)}e.xsr(e.makeUrl(t.register,o),function(t){try{if(t.errorCode==0){var r=t.body.token;e.modelToken.setToken(r),e.cookie.addH5("islogin","1","/",31536e3,n.cookieDomain);var i=t.body.authcode?t.body.authcode:"";e.cookie.addH5("authcode",i,"/",31536e3,n.cookieDomain);var o=t.body.mem_guid?t.body.mem_guid:"";e.cookie.addH5("mem_guid",o,"/",31536e3,n.cookieDomain)}s&&s(t)}catch(u){throw u}})}function o(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),device_id:e.cookie.getH5("stat_udid"),body:{username:"",password:"",captcha:"",img_captcha:"",osType:n.osType}};return e.log("城市编号："+e.cookie.getH5("siteid")),t}function u(r,i){if(r.body){var s=o();e.merge(s.body,r.body)}e.xsr(e.makeUrl(t.register2,s),function(t){try{if(t.errorCode==0){var r=t.body.token;e.modelToken.setToken(r),e.cookie.addH5("islogin","1","/",31536e3,n.cookieDomain);var s=t.body.authcode?t.body.authcode:"";e.cookie.addH5("authcode",s,"/",31536e3,n.cookieDomain);var o=t.body.mem_guid?t.body.mem_guid:"";e.cookie.addH5("mem_guid",o,"/",31536e3,n.cookieDomain)}i&&i(t)}catch(u){throw u}})}function a(){var t={areaCode:e.cookie.getH5("siteid"),token:e.cookie.getH5("token"),body:{username:"",action:"",userType:"",requestSource:1}};return t}function f(n,r){if(n.body){var i=a();e.merge(i.body,n.body)}t.getCaptcha.get&&(t.getCaptcha.get._=Date.now()),e.xsr(e.makeUrl(t.getCaptcha,i),function(e){try{r&&r(e)}catch(t){throw t}})}function l(){var t={areaCode:e.cookie.getH5("siteid"),token:e.cookie.getH5("token"),body:{username:"",img_captcha:"",action:"",userType:"",requestSource:1}};return t}function c(n,r){if(n.body){var i=l();e.merge(i.body,n.body)}e.xsr(e.makeUrl(t.getCaptcha2,i),function(e){try{r&&r(e)}catch(t){throw t}})}function h(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{username:"",password:"",captcha:""}};return t}function p(r,i){if(r.body){var s=h();e.merge(s.body,r.body)}e.xsr(e.makeUrl(t.login,s),function(t){try{if(t.errorCode==0){var r=t.body.token;e.modelToken.setToken(r),e.cookie.addH5("islogin","1","/",31536e3,n.cookieDomain);var s=t.body.authcode?t.body.authcode:"";e.cookie.addH5("authcode",s,"/",31536e3,n.cookieDomain);var o=t.body.mem_guid?t.body.mem_guid:"";e.cookie.addH5("mem_guid",o,"/",31536e3,n.cookieDomain)}else t.errorCode==2001&&e.modelToken.delToken();i&&i(t)}catch(u){throw u}})}function d(r,i){var s={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{username:"",password:"",captcha:""}};r.body&&e.merge(s.body,r.body),e.xsr(e.makeUrl(t.login,s),function(t){try{if(t.errorCode==0){var r=t.body.token;e.modelToken.setToken(r)}e.cookie.addH5("islogin",0,"/",31536e3,n.cookieDomain),e.cookie.addH5("authcode","","/",31536e3,n.cookieDomain),e.cookie.addH5("mem_guid","","/",31536e3,n.cookieDomain),i&&i(t)}catch(s){throw s}})}function v(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{username:"",captcha:"",isPic:"",userType:"?",requestSource:1}};return t}function m(n,r){if(n.body){var i=v();e.merge(i.body,n.body)}e.xsr(e.makeUrl(t.ValidateCaptcha,i),function(e){try{r&&r(e)}catch(t){throw t}})}function g(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{username:"",password:"",newPassword:"",captcha:""}};return t}function y(n,r){if(n.body){var i=g();e.merge(i.body,n.body)}e.xsr(e.makeUrl(t.ResetPassword,i),function(e){try{e.errorCode==0,r&&r(e)}catch(t){throw t}})}function b(){var t={areaCode:e.cookie.getH5("siteid"),token:e.cookie.getH5("token"),body:{username:"",osType:"",captcha:""}};return t}function w(n,r){if(n.body){var i=b();e.merge(i.body,n.body)}t.CheckUser.get&&(t.CheckUser.get._=Date.now()),e.xsr(e.makeUrl(t.CheckUser,i),function(e){try{r&&r(e)}catch(t){throw t}})}function E(n,r){var i={areaCode:e.cookie.getH5("siteid"),token:e.cookie.getH5("token"),body:{url:""}};n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.qqLogin,i),function(t){try{e.log(decodeURIComponent(t.body.qq_url)),r&&r(t)}catch(n){throw n}})}function S(){var t={areaCode:e.cookie.getH5("siteid"),token:e.cookie.getH5("token"),body:{}};return t}function x(){return{token:e.cookie.getH5("token"),body:{}}}function T(){return{token:e.cookie.getH5("token"),body:{cellphone:"",isBindPhone:"",requestSource:1}}}function N(){return{token:e.cookie.getH5("token"),body:{cellphone:"",isBindPhone:"",captcha:"",password:""}}}function C(n,r){var i=S();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.getPointRemain,i),function(e){try{r&&r(e)}catch(t){throw t}})}function k(){if(e.cookie.getH5("islogin")!=1)return"";var t=e.cookie.getH5("username");if(!!t&&t!="")return t;C({},function(r){return r.errorCode==0?(t=r.body.username,t?(e.cookie.addH5("username",t,"/",31536e3,n.cookieDomain),t):""):""})}function L(n,r){var i=x();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.getBindPhone,i),function(e){try{r&&r(e)}catch(t){throw t}})}function A(n,r){var i=T();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.sendCaptcha,i),function(e){try{r&&r(e)}catch(t){throw t}})}function O(n,r){var i=N();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.submitPayPassword,i),function(e){try{r&&r(e)}catch(t){throw t}})}function M(n,r){n={token:e.cookie.getH5("token"),body:{}},e.xsr(e.makeUrl(t.isSetPayPassword,n),function(e){try{r&&r(e)}catch(t){throw t}})}function _(n,r){var i=x();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.getUserBind,i),function(e){try{r&&r(e)}catch(t){throw t}})}function r(n,r){e.xsr(e.makeUrl(t.authCheck,n),function(e){try{r&&r(e)}catch(t){throw t}})}return{register:s,register2:u,login:p,logout:d,getCaptcha:f,getCaptcha2:c,getBizRegisterObj:function(){return i()},ValidateCaptcha:m,ResetPassword:y,CheckUser:w,qqLogin:E,getBindPhone:L,getUserBind:_,sendCaptcha:A,submitPayPassword:O,isSetPayPassword:M,getPointRemain:C,getUsername:k,authCheck:r}}),define("api/myAccount",["config/url"],function(e){return{memberIndex:{apiName:"miscMemberindex",isOnlyData:1,post:{token:"?",body:"??"},body:{}},memberInfo:{apiName:"miscMemberInfo",isOnlyData:1,post:{apiVersion:e.apiVersion,token:"?",body:"??"},body:{}},choiceSex:{apiName:"miscUpdatememberinfo",isOnlyData:1,post:{apiVersion:e.apiVersion,token:"?",body:"??"},body:{sex:"?",nickName:"?"}},signin:{apiName:"miscSignin",isOnlyData:1,post:{apiVersion:e.apiVersion,token:"?",body:"??"},body:{}},signin_1:{apiName:"miscSignin",isOnlyData:1,post:{apiVersion:e.apiVersion,token:"?",body:"??"},body:{}},checkSigned:{url:e.sappsDomain+"misc/checkSigned",isOnlyData:1,post:{apiVersion:e.apiVersion,token:"?",body:"??"},body:{}},freeBuyForCard:{url:e.sappsDomain+"vvip/freeBuyForCard",isOnlyData:1,post:{apiVersion:e.apiVersion,areaCode:"?",token:"?",body:"??"},body:{}}}}),define("model/account/myAccount",["lib/common","api/myAccount","config/url"],function(e,t,n){function r(){var t={token:e.cookie.getH5("token"),body:{}};return t}function i(n,i){var s=r();n.body&&e.merge(s.body,n.body),e.xsr(e.makeUrl(t.memberIndex,s),function(e){try{i&&i(e)}catch(t){throw t}})}function s(){var t={token:e.cookie.getH5("token"),body:{}};return t}function o(n,r){var i=s();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.memberInfo,i),function(e){try{r&&r(e)}catch(t){throw t}})}function u(){var t={token:e.cookie.getH5("token"),body:{}};return t}function a(n,r){var i=u();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.choiceSex,i),function(e){try{r&&r(e)}catch(t){throw t}})}function f(){var t={token:e.cookie.getH5("token"),body:{}};return t}function l(n,r){var i=f();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.signin,i),function(e){try{r&&r(e)}catch(t){throw t}})}function c(n,r){var i=f();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.signin_1,i),function(e){try{r&&r(e)}catch(t){throw t}})}function h(){var t={token:e.cookie.getH5("token"),body:{}};return t}function p(n,r){var i=h();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.checkSigned,i),function(e){try{r&&r(e)}catch(t){throw t}})}function d(){var t={token:e.cookie.getH5("token"),areaCode:e.cookie.getH5("siteid"),body:{}};return t}function v(n,r){var i=d();n.body&&e.merge(i.body,n.body),e.xsr(e.makeUrl(t.freeBuyForCard,i),function(e){try{r&&r(e)}catch(t){throw t}})}return{memberIndex:i,memberInfo:o,choiceSex:a,signin:l,signin_1:c,checkSigned:p,freeBuyForCard:v}}),function(e){function t(t){function n(){if(this.udid)return this.udid;var e="",t=this.getTime();return e+="H5_"+t+this.randomString(10),this.udid=e,e}t=t||{},this.ua=navigator.userAgent,this.udid="",this.env=null,this.resolution=e.screen.width+"|"+e.screen.height,this.cookieDomain=function(){var e=/m\.feiniu\.com/i.test(location.href);return e?".feiniu.com":location.hostname.split(".").slice(-2).join(".")},this.getTime=function(){return(new Date).getTime()},this.randomString=function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));var n="";for(var r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n},this.createUdid=typeof t.createUdid=="function"?t.createUdid:n,this.getcookie=function(e){var t=new RegExp("(^|;|\\s+)"+e+"=([^;]*)(;|$)"),n=document.cookie.match(t);return n?decodeURIComponent(n[2]):""},this.addcookie=function(e,t,n,r,i){var s=e+"="+encodeURIComponent(t)+"; path="+(n||"/")+(i?"; domain="+i:"");if(r>0){var o=new Date;o.setTime(o.getTime()+r*1e3),s+=";expires="+o.toGMTString()}document.cookie=s},this.delcookie=function(e,t,n){arguments.length==2&&(n=t,t="/"),document.cookie=e+"=;path="+t+";"+(n?"domain="+n+";":"")+"expires=Thu, 01-Jan-70 00:00:01 GMT"},this.getUdid=function(){var e="th5_stat_udid",t=this.getcookie(e);if(t)return t;var n=this.createUdid(),r=31536e3,i=/feiniu\.com/i.test(location.href),s=".feiniu.com";return i||(s=location.hostname.split(".").slice(-2).join(".")),this.addcookie(e,n,"/",r,s),n},this.getEnv=function(){if(this.env!=null)return this.env;var e=["m","preview","test","dev","dev1","local"],t="m",n=location.hostname.split(".");if(n[0])for(var r in e)if(e[r]==n[0]){t=n[0];continue}return this.setEnv(t),t},this.setEnv=function(e){this.env=e},this.getSystemType=function(){var e=this.ua;e=e.toLowerCase();var t="";return e.indexOf("android")>-1||e.indexOf("linux")>-1?t="android":e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||e.indexOf("itouch")>-1||e.indexOf("ipod")>-1||e.indexOf("mac")>-1?t="ios":e.indexOf("windows phone")>-1?t="wp":t="windows",t},this.mix=function(){var e={};for(var t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)r in e?n[r]!=undefined&&(e[r]=n[r]):e[r]=n[r]}return e},this.getUrlParam=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=location.search.substr(1).match(t);return n!=null?decodeURIComponent(n[2]):null},this.getMessage=function(){var e=this.getUrlParam("fromtype");return e==null&&(e=document.referrer?document.referrer:""),e},this.getRemarksCfg=function(){var e={terminal_os_ver:"",model:"",brand:"",resolution:this.resolution,browser_type:"",mac:""};return JSON.stringify(this.mix(e))},this.isClient=function(){var e="th5_stat_token",t=86400,n=this.getcookie("th5_token")||"",r=this.getcookie("th5_stat_token")||"";if(n&&r==n)return"";if(r=="-1")return n&&this.addcookie(e,n,"/",t,this.cookieDomain()),"";if(r!=n||!r){var n=n||"-1";this.addcookie(e,n,"/",t,this.cookieDomain())}return this.getRemarksCfg()};var r=this.getTime(),i=this.getcookie("th5_username")||"",s=this.getcookie("th5_sitename")||"",o=this.getcookie("th5_mem_guid")||"";!o&&i&&(o=i),this.getLandingUrl=function(){var t="th5_landing_url",n=this.getcookie(t)||"",r=1800;if(n)return this.addcookie(t,n,"/",r,this.cookieDomain()),n;var i=e.location.href;return this.addcookie(t,i,"/",r,this.cookieDomain()),i},this.getLandingSession=function(){var e="th5_landing_session",t=this.getcookie(e)||"",n=1800;if(t)return this.addcookie(e,t,"/",n,this.cookieDomain()),t;var r="";return r+="H5_"+this.getTime()+this.randomString(10),this.addcookie(e,r,"/",n,this.cookieDomain()),r},this.setLandingSession=function(e){var t="th5_landing_session",n=1800;this.addcookie(t,e,"/",n,this.cookieDomain())},this.getAppid=function(){var e=navigator.userAgent;e=e.toLowerCase();if(navigator.userAgent.indexOf("feiniuapp")>-1){var t=navigator.userAgent.split(" ");for(var n=0;n<t.length;n++)if(t[n].indexOf("feiniuapp")>-1){var r=t[n].split("/"),i=r[1].toLowerCase();if(i=="android")return 1;if(i=="iphone")return 2;if(i=="ipad")return 4;if(i=="winphone")return 5}}else{if(this.getUrlParam("osType")&&this.getUrlParam("osType")!="")return e.match(/MicroMessenger/i)=="micromessenger"?9:this.getUrlParam("osType");if(e.match(/MicroMessenger/i)=="micromessenger")return 9}return 3},this.statAppVal=function(){var e={},t=this.getcookie("th5_stat_app");if(t)try{e=JSON.parse(t)}catch(n){}if(typeof e=="undefined"||!e)e={};return e},this.urlConfigParam={udid:this.getUdid(),mem_guid:o,user_name:i,terminal_os:this.getSystemType(),track_code:this.getcookie("th5_channel_edm_code")||"",network:"",gps:"",city:s,track_tag_name:"",result:"",page_content:"",message:"",cur_req_url:location.href,landing_url:"",session_id:"",track_type:1,referer_url:document.referrer||"",startTime:r,endTime:r,abtest:0,remarks:"",ver:"",traffic_channel:"",dev_type:this.getAppid(),ref_page_id:"",client_type:0},this.shangbao=function(t,n,r){var i="",s=this.getEnv();s=="m"?i="http://flume.feiniu.com/AppCollectLogs/AddH5Log?v="+this.getTime():s=="preview"?i="/stat.php?env=preview&v="+this.getTime():i="/stat.php?env=test&v="+this.getTime(),i+=this.randomString(2);var t=t||{};t.message=="-9"&&(t.message=this.getMessage());var o=this.statAppVal();typeof o=="object"&&(t.client_type=o.client_type,t.ver=o.ver,t.traffic_channel=o.traffic_channel,t.gps=o.gps,t.network=o.network,o.session_id&&this.setLandingSession(o.session_id)),t.landing_url=this.getLandingUrl(),t.session_id=this.getLandingSession();var u=this.mix(this.urlConfigParam,t);for(j in u)u[j]=="-9"&&(u[j]="0"),i+="&"+j+"="+encodeURIComponent(u[j]);typeof n!="function"&&(n=function(){});if(navigator.sendBeacon)navigator.sendBeacon(i,""),n();else{var a=new Image,f;try{var l=new $.Deferred,c=function(){a.removeEventListener("load",c,!1),a.removeEventListener("error",c,!1),clearTimeout(f),n(),l.resolve()};a.addEventListener("load",c,!1),a.addEventListener("error",c,!1),f=setTimeout(c,r||1e3),a.src=i,e._deferRedirect=l}catch(h){a.src=i,n()}}}}var n={isObj:0,shangbao:function(e,n,r){var i="";if(this.isObj)i=this.isObj;else{i=new t(this.opt),this.isObj=i;if(e.h5_type=="edm"){if(i.getUrlParam("tracking_type")!="h5_edm")return"";var s=i.getUrlParam("type");(s=="h5_dev"||s=="h5_test"||s=="h5_beta")&&i.setEnv("test")}var o=i.isClient();if(o){var u={track_tag_name:"1000",result:"",page_content:"",message:"-9",track_type:"6",remarks:o};i.shangbao(u,n,r)}}i.shangbao(e,n,r)},getRemarksCfg:function(){var e="";return this.isObj?e=this.isObj:(e=new t,this.isObj=e),e.getRemarksCfg()}};e.h5stat=n;if(typeof define=="function"&&define.amd)define("widget/stat",["lib/common"],function(t){return e.h5stat});else if(typeof e.Zepto=="undefined"){var r=document.createElement("script");r.src=e.feiniu.url.jsBase+"/lib/zepto.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}(window),define("widget/popAlert",["lib/common"],function(e){function t(t,n,r){if(typeof t=="undefined")return"";var i=n?"popbg tmbg":"popbg",r=r||3e3;window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o=['<div class="'+i+'" id="'+s+'" >','<div class="popbox">','<p class="poptxt">'+t+"</p>","</div></div>"].join("");e("body").append(o);var u=e("#"+s);u.on("click",function(){u.remove()}),setTimeout(function(){u.remove()},r)}function n(t,n,r){if(typeof t=="undefined")return"";window.popAlertIndex=(window.popAlertIndex||0)+1;var i="popalert_"+window.popAlertIndex,s="close_popalert_"+window.popAlertIndex,o="fun_popalert_"+window.popAlertIndex,u=s,a="",f="";typeof n=="function"&&(u=o,a='<p id="'+s+'">取消</p>',f='<p class="poptip">提示</p>');var l=['<div class="popbg" id="'+i+'">','<div class="popbox">',f,'<p class="poptxt">'+t+"</p>",'<div class="popbtnbox">',a,'<p id="'+u+'">确定</p>',"</div></div></div>"].join("");e("body").append(l);var c=e("#"+i);e("#"+s).on("click",function(){c.remove()}),e("#"+o).on("click",function(){n(r),c.remove()})}function r(t,n,r,i){if(typeof t=="undefined")return"";if(typeof n=="undefined")return"";window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o="close_popalert_"+window.popAlertIndex,u="fun_popalert_"+window.popAlertIndex,a=o,f="",l="";typeof i=="function"&&(a=u,f='<p id="'+o+'">取消</p>',l='<p class="poptip">'+t+"</p>");var c=['<div class="popbg" id="'+s+'">','<div class="popbox">',l,'<input type="'+r+'" class="popinput" placeholder="'+n+'" />','<div class="popbtnbox">',f,'<p id="'+a+'">确定</p>',"</div></div></div>"].join("");e("body").append(c);var h=e("#"+s);e("#"+o).on("click",function(){h.remove()}),e("#"+u).on("click",function(){i(),h.remove()})}function i(t){if(typeof t.msg=="undefined")return"";if(typeof t.one=="undefined"||typeof t.one.name=="undefined")return"";var n="",r="";t.icon&&t.icon.isIcon&&(n=t.icon.iconClass?t.icon.iconClass:"situs",r='<i class="'+n+'"></i>');var i=t.tip?t.tip:"提示";window.popAlertIndex=(window.popAlertIndex||0)+1;var s="popalert_"+window.popAlertIndex,o="one_popalert_"+window.popAlertIndex,u="two_popalert_"+window.popAlertIndex,a=t.popClass||"",f="";t.one&&(f+='<p id="'+o+'">'+t.one.name+"</p>"),t.two&&t.two.name!=""&&(f+='<p id="'+u+'">'+t.two.name+"</p>");var l=t.id||"",c=['<div class="popbg '+a+'" id="'+s+'">','<div class="popbox '+l+'">',r,'<p class="poptip">'+i+"</p>",'<p class="poptxt">'+t.msg+"</p>",'<div class="popbtnbox">',f,"</div></div></div>"].join("");e("body").append(c),typeof t.initFun=="function"&&t.initFun(s);var h=e("#"+s),p=function(){h.remove()},d=typeof t.one.fun=="function"?function(){var e=t.one.noClose?t.one.noClose:0;e||p(),t.one.fun()}:p;e("#"+o).on("click",d);if(t.two&&t.two.fun!=""){var v=typeof t.two.fun=="function"?function(){var e=t.two.noClose?t.two.noClose:0;e||p(),t.two.fun()}:p;e("#"+u).on("click",v)}}return{popalert:t,popconfirm:n,popinput:r,popdefine:i}}),define("widget/loadingV2",["lib/common"],function(e){function u(t,n,s,u){f();var l=e.extend(!0,{},o);typeof t=="object"?e.extend(!0,l,t):(l.off=t,l.topOn=typeof s=="boolean"?s:l.topOn,l.D_dom=u||l.D_dom,typeof n=="boolean"?(l.name=r,l.topOn=n):typeof n=="object"?(l.D_dom=n,l.name=i,l.topOn=!1):l.name=n||r),a(l)}function a(e){var n,r=0;n=t[e.name]||!1;if(n)return typeof e.off=="undefined"||typeof e.off=="string"?t[e.off||e.name].data("count")>>0:(r=n.data("count")>>0,e.off?(n.data("count",++r),r==1&&(e.D_dom.append(n),h(n,e),e.topOn&&e.name!="none"&&c(n,e.topOn))):(n.data("count",--r),r<=0&&(l(n,e),e.name!="none"&&c(n,!1))),name)}function f(){e("[data-load-name]").each(function(){var n=e(this);t[n.data("load-name")]=n})}function l(e,r){typeof e=="string"?e=t[e]:typeof e=="undefined"&&(e=t[r.name]),e.data("count",0),e.remove(),n.off("scroll.loading")}function c(t,r){var i=[],o=e(".top_nav");e.each(s,function(t,n){i=e(n);if(i.length)return!1}),r&&i.length?(n.off("scroll.loading").on("scroll.loading",function(){var e=i.height()+i.offset().top,r=e-n.scrollTop(),s=n.height()-r;t.css({"padding-top":r>0?r:0})}),h(i),i.addClass("z100")):(n.off("scroll.loading"),t.css({"padding-top":""}),i.removeClass("z100")),o.length&&(r?o.addClass("z100"):o.removeClass("z100"))}function h(e){e&&e.off("touchmove.preventDefault").on("touchmove.preventDefault",function(){event.preventDefault()})}var t={none:e("<div></div>"),p1:e('<p class="loading_pop all"><b></b></p>'),p2:e('<p class="loading_btm"><b></b><i>正在努力加载...</i></p>'),v2:e('<p class="loading_pop all"><b></b></p>')},n=e(window),r="p1",i="p2",s=["[data-loading-top]","header",".top_box"];(function(){var n=navigator.userAgent.toLowerCase();if(n.indexOf("qqbrowser")>-1||n.indexOf("ucbrowser")>-1){t.p2=e('<p class="loading_btm"><em></em><i>正在努力加载...</i></p>'),t.p1=e('<p class="loading_pop all"><em></em></p>'),t.v2=e('<p class="loading_pop all"><em></em></p>');var r=1;setInterval(function(){var n=r%18;e.each(t,function(){e(".loading_pop").find("em").css("background-position",-0.9*n+"rem 0")}),r++},40)}})();var o={off:r,name:r,topOn:!0,D_dom:e("body")};return{on:u,off:l}}),require(["lib/common","model/account/account","model/account/myAccount","config/url","widget/stat","widget/popAlert","widget/loadingV2"],function(e,t,n,r,i,s,o){function f(t){var n=e.url.getTouchBaseUrl();if(t.length==0)e(".phone span").html("点击绑定手机"),e(".phone").attr("href",n+"my/phone/bangding_phone.html");else{var r=t.substring(0,3)+"****"+t.substring(t.length-4,t.length);e(".phone span").html(r),e(".phone").attr("href",n+"my/phone/change_phone.html")}}function l(t){var n=t!==0?2:1;e.log("是否已设置支付密码：",n),n==2?e("#setPaypwd span").html("修改支付密码"):n==1&&e("#setPaypwd span").html("设置支付密码"),e("#setPaypwd").on("click",function(){var t={track_tag_name:"5066",result:"",page_content:"",message:"",remarks:n};return i.shangbao(t,function(){e.url.redirect(e.url.getTouchBaseUrl()+"my/payment/set_paypwd.html")}),!1})}function c(t){t==1?e(".sex span").html("男"):t==2?e(".sex span").html("女"):e(".sex span").html("")}function h(){e(".J_loading_pop").show(),$param={body:{}},n.memberInfo($param,function(t){e.log("api数据请求成功_会员信息"),e.log(t);if(t.errorCode==0&&t.body){e.tplRender("tpl_myInfo",t.body),e(".J_loading_pop").hide(),f(t.body.userCellphone),l(t.body.issetPassword),e(".username span").html(t.body.mem_name),e(".nickname span").html(t.body.nickname),c(t.body.sex);var n=t.body.head_portrait;n.length!==0&&e(".head span img").attr("src",n)}else s.popalert(t.errorDesc||"网络错误，请稍后再试",1,3e3);o.on(!1,"v2",1),e("div:first").show()})}var u=e.cookie.getH5("islogin");if(!u||u!=1){var a=e.url.getTouchBaseUrl()+"my/index.html";e.url.redirect(e.url.getTouchBaseUrl()+"login/index.html?gotourl="+encodeURIComponent(a));return}e(".shouye").on("click",function(){var t=e.url.getTouchBaseUrl();e.url.redirect(t)}),e(".mask").on("click",function(){e(this).parent().hide()}),e.getToken(function(){e.log("飞牛网--会员信息"),e(".J_loading_pop").show(),h(),e(".sex").on("click",function(){e(".popup").show()}),e.cookie.getH5("islogin")==1?(e(".J_logout").show(),e(".J_logout").on("click",function(){s.popconfirm("确定退出当前账户？",function(){var n={body:{username:"",password:"",captcha:""}};o.on(!0,"v2",!0),t.logout(n,function(t){o.on(!1,"v2"),e.cookie.delH5("islogin","/",r.cookieDomain),e.cookie.delH5("islogin","/","m.feiniu.com"),e.cookie.delH5("cartNum","/",r.cookieDomain),e.cookie.delH5("username","/",r.cookieDomain),e.cookie.delH5("username","/","m.feiniu.com"),e.cookie.delH5("mem_guid","/",r.cookieDomain),e.cookie.delH5("mem_guid","/","m.feiniu.com"),e.cookie.delH5("accountType","/",r.cookieDomain),e.cookie.delH5("accountType","/","m.feiniu.com"),e.cookie.delH5("update_vvipstatus","/",r.cookieDomain),e.cookie.delH5("update_vvipstatus","/","m.feiniu.com"),e.url.redirect(e.url.getTouchBaseUrl()+"login/")})})}),e(".choice_sex p").on("click",function(){var t=e(this).data("sex"),r=e(".nickname  span").html(),i=null;t==1&&(i="男"),t==2&&(i="女"),e(this).parent().parent().hide(),n.choiceSex({body:{nickName:r,sex:i}},function(e){location.reload()})})):e(".J_logout").hide()})}),define("controller/my/myinfo",function(){});