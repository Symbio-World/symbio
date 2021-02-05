/* eslint-disable no-useless-escape */
export const link =
  'https://www.selver.ee/et/aedviljapuree-kanafileega-6-ponn-190-g'

export const html = `
<!doctype html>
<html>
<head>
<meta charset="utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"ee3f37d5a3",applicationID:"50841773"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1169.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
<link rel="dns-prefetch" href="//m1.selver.ee" />


<title>Aedviljapüree kanafileega 6+, PÕNN, 190 g - Lastetoidud - Lastekaubad</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Aedviljapürees kanafileega kasutame ainult parimaid kodumaised tooraineid – Eesti porgand, kartul ja kanaliha. Lihaga püreedes leidub lapsele vajalikku valku ja rauda ning nendes kasutatav liha on kvaliteetne ja vähese rasvasisaldusega tailiha. Aedviljapü" />
<meta name="robots" content="INDEX,FOLLOW" />
<meta property="og:title" content="Aedviljapüree kanafileega 6+, PÕNN, 190 g - Lastetoidud - Lastekaubad" />
<meta property="og:description" content="Aedviljapürees kanafileega kasutame ainult parimaid kodumaised tooraineid – Eesti porgand, kartul ja kanaliha. Lihaga püreedes leidub lapsele vajalikku valku ja rauda ning nendes kasutatav liha on kvaliteetne ja vähese rasvasisaldusega tailiha. Aedviljapü" />
<meta property="og:image" content="//m1.selver.ee/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/4/7/4740073071359.jpg" />
<meta name="author" content="Selver">
<link rel="shortcut icon" href="" type="image/x-icon" />
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/favicon-128.png" sizes="128x128" />
<meta name="application-name" content="e-Selver"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="https://www.selver.ee/skin/frontend/carbon/selver/images/favicon/mstile-310x310.png" /><script type="text/javascript">
//<![CDATA[
    var BASE_URL = 'https://www.selver.ee/';
    var BLANK_URL = 'https://www.selver.ee/js/blank.html';
    var BLANK_IMG = 'https://www.selver.ee/js/spacer.gif';
    var SKIN_URL = 'https://www.selver.ee/skin/frontend/carbon/selver/';
//]]>
</script>
<!--<script src="https://browser.plumbr.io/pa.js" data-plumbr='{"accountId":"5o0mtrnd50f9lu98d5i7jjbpv0","serverUrl":"https://bdr.plumbr.io","compat":["bind"]}'></script>-->
<link rel="stylesheet" type="text/css" href="https://www.selver.ee/media/css_secure/2bb1dbb616540cab797440ca491814ce.css" media="all" />
<link rel="stylesheet" type="text/css" href="https://www.selver.ee/media/css_secure/cb2582531fad034ca604cad75e68cacc.css" formmanager />
<link rel="stylesheet" type="text/css" href="https://www.selver.ee/media/css_secure/e6059e3d1d7cdd54270bcd754cba8bb6.css" storelocator />
<script type="text/javascript" src="//www.selver.ee/media/js/cfef4df9293477148ae88de3855189fd.js"></script>
<script type="text/javascript" src="//m1.selver.ee/media/js/0e2a5ad6e7a3a89fc14819579a37eef3.js" formmanager></script>
<script type="text/javascript" src="//www.selver.ee/media/js/a7019a077c8ed669c4f5fecdd1a41a7a.js" regio></script>
<script type="text/javascript" src="//m1.selver.ee/media/js/eb24012facf12794067c0b225501465d.js" product></script>
<link rel="canonical" href="https://www.selver.ee/aedviljapuree-kanafileega-6-ponn-190-g" />
<!--[if lt IE 7]>
<script type="text/javascript" src="//www.selver.ee/media/js/6f6a9ca69b8b3633afc88b4cc4b71b5e.js"></script>
<![endif]-->
<!--[if lt IE 9]>
<script type="text/javascript" src="//m1.selver.ee/media/js/a12382d3cf49a9cf7942dc9610a3a0ee.js"></script>
<![endif]-->

<script type="text/javascript">
//<![CDATA[
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = '.selver.ee';
//]]>
</script>
<!-- Facebook Ads Extension for Magento -->
<!-- NO Pixel ID is configured, please goto Admin -->
<script>
 console.log('No facebook pixel is configured, please log in as a admin and then visit Facebook Ads Extension -> Get Started');
</script>

<script type="text/javascript">
//<![CDATA[
optionalZipCountries = ["HK","IE","MO","PA"];
//]]>
</script>
<script src="//www.selver.ee/js/vaimo/regio/gcadmin.min.js"></script><script>Regio.jQuery = jQuery.noConflict(true);</script><link type="text/css" rel="stylesheet" media="all" href="//www.selver.ee/skin/frontend/base/default/regio/css/gcadmin.min.css" /><script src="//use.typekit.net/hfh5yym.js"></script><script>try{Typekit.load({active: function (){jQuery(document).trigger('fonts_active')},});}catch(e){}</script>
                    <script type="text/javascript">//<![CDATA[
        var Translator = new Translate({"Please select an option.":"Palun tee valik","This is a required field.":"See v\u00e4li on kohustuslik.","Please enter a valid number in this field.":"Palun sisesta sellele v\u00e4ljale kehtiv number","Please use letters only (a-z or A-Z) in this field.":"Palun kasuta siin v\u00e4ljas ainult (a-z v\u00f5i A-Z) t\u00e4hti.","Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.":"Palun kasutage sellel v\u00e4ljal ainult t\u00e4hti (a-z), numbreid (0-9) v\u00f5i alakriipsu(_), esimene m\u00e4rk peab olema t\u00e4ht.","Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.":"Palun kasuta sellel v\u00e4ljal ainult t\u00e4hti (a-z v\u00f5i A-Z) v\u00f5i numbreid (0-9). T\u00fchikud ja muud m\u00e4rgid pole lubatud.","Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.":"Palun sisesta kehtiv telefoni number.","Please enter a valid date.":"Palun sisesta korrektne kuup\u00e4ev.","Please enter a valid email address. For example johndoe@domain.com.":"Palun sisesta kehtiv e-kirja aadress. N\u00e4iteks: tiittamm@domeeninimi.ee","Please make sure your passwords match.":"Palun taga et salas\u00f5nad \u00fchtivad","Please enter a valid URL. For example http:\/\/www.example.com or www.example.com":"Palun sisesta kehtiv URL. N\u00e4iteks http:\/\/www.domeeninimi.ee","Please enter a valid social security number. For example 123-45-6789.":"Palun sisesta kehtiv sotsiaalkindlustuse number","Please enter a valid zip code. For example 90602 or 90602-1234.":"Palun sisesta kehtiv postiindeks.","Please enter a valid zip code.":"Palun sisesta korrektne postiindeks.","Please use this date format: dd\/mm\/yyyy. For example 17\/03\/2006 for the 17th of March, 2006.":"Palun kasutage seda kuup\u00e4eva formaati: pp\/kk\/aaaa. N\u00e4iteks 26\/05\/2008.","Please enter a valid $ amount. For example $100.00.":"Palun sisesta kehtiv kr summa. N\u00e4iteks 100 kr.","Please select one of the above options.":"Palun tee \u00fcks valikutest \u00fclalpool","Please select one of the options.":"Palun vali \u00fcks","Please select State\/Province.":"Palun vali maakond","Please enter a number greater than 0 in this field.":"Palun sisesta siia 0-st suurem number","Please enter a valid credit card number.":"Palun sisesta kehtiv krediitkaardi number","Please select a file":"Palun valige fail","Please wait, loading...":"Palun oota, laen...","Complete":"T\u00e4idetud","Please choose to register or to checkout as a guest":"Palun valige kas registreerida v\u00f5i vormistada ost k\u00fclalisena","Please specify shipping method.":"Palun m\u00e4\u00e4rake kohaletoimetamise viis.","Please specify payment method.":"Palun m\u00e4\u00e4rake makseviis.","Wishlist Name":"Soovikorvi nimi","Save":"Salvesta","Cancel":"T\u00fchista","Create New Wishlist":"Loo uus soovikorv","Edit Wishlist":"Muuda soovikorvi","Add to Wishlist":"Lisa soovikorvi","Loading...":"Laeme infot...","Loading next step...":"Laeme j\u00e4rgmist sammu...","Place Order":"Esita tellimus","Placing your order...":"Tellimuse t\u00f6\u00f6tlemine...","Address missing\/Incorrect address":"Aadress puudub v\u00f5i pole sobiv","Search for address":"Sisesta oma address","Search":"Otsi","Clear":"Puhasta","You need to enter a address":"Valesti sisestatud aadress, palun valige aadress avanevast nimekirjast","Incorrect address, please confirm that you have entered your address correctly":"Valesti sisestatud aadress, palun valige aadress avanevast nimekirjast","Flat":"Korter","Check postal code":"Kahjuks teie sisestatud aadressile me veel tellimusi ei toimeta","In wishlist":"Soovikorvis","Remove from wishlist":"Eemalda soovikorvist","Please fill in Partnerkaart PIN code":"Palun sisesta Partner Kuukaardi PIN-kood","Yes, we deliver to your chosen address.":"Jah, Teie valitud aadressile me toimetame kaupa","You can not have Home Delivery for the address you entered":"Teie valitud aadressile me veel kaupa ei toimeta"});
        //]]></script><script>
var klevu_priceInterval=5;
var klevu_imageNotFoundPlaceHolderUrl='//m1.selver.ee/media/catalog/product/placeholder/default/placeholder-big_1.jpg';

function klevu_uc_productCustomizations(product) {
  if (product.product_disable_discount_show && product.product_disable_discount_show.toLowerCase() === 'yes') {
    product.price = product.salePrice;
    product.productPrice = product.salePrice;
  }
  return product;
};
</script><!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]--></head>
<body class=" catalog-product-view catalog-product-view product-aedviljapuree-kanafileega-6-ponn-190-g categorypath-lastetoidud category-lastetoidud" ontouchstart>

    <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KHXZQQ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KHXZQQ');</script>
    <!-- End Google Tag Manager -->
    <noscript>
        <div class="global-site-notice noscript">
            <div class="notice-inner">
                <p>
                    <strong>JavaScript seems to be disabled in your browser.</strong><br />
                    You must have JavaScript enabled in your browser to utilize the functionality of this website.                </p>
            </div>
        </div>
    </noscript>



<header class="header" id="header" data-home-url="https://www.selver.ee/">
    <div class="top header__pc-login">
        <div class="container">
            <div class="clearfix">
                <div class="welcome-msg hidden-xs hidden-sm"><p>Osta Selveri e-poest - telli koju v&otilde;i tule ise j&auml;rele!</p></div>
                <div id="js-header-topLinks"></div>
                
<div class="switch switcher-language">
    <div class="switch-wrapper" id="languageSelect">
        <span class="switcher-holder">
            <span onclick="popUpMenu(this);" class="switcher">
                <i data-icon="flag-et"></i>est<i data-icon="arrow-down"></i>
            </span>
        </span>
        <ul style="display:none" id="popId-languageSelect" class="dropdown">
                                            <li class="language-et active">
                    <a href="https://www.selver.ee/aedviljapuree-kanafileega-6-ponn-190-g">
                        <i data-icon="flag-et"></i>
                        <span class="language-code">est</span>
                        <i data-icon="accept"></i>                    </a>
                </li>
                                            <li class="language-ru">
                    <a href="https://www.selver.ee/ru/aedviljapuree-kanafileega-6-ponn-190-g?___from_store=et">
                        <i data-icon="flag-ru"></i>
                        <span class="language-code">rus</span>
                                            </a>
                </li>
                    </ul>
    </div>
</div>

            </div>
        </div>
    </div>
    <div class="header__container container">
            <div class="middle">
                <div class="clearfix header__wrapper">
                    <a href="https://www.selver.ee/" title="Selver" class="logo header__logo">
	                    <div class="header__logo-image-wrapper ">
                            <img src="https://www.selver.ee/skin/frontend/carbon/selver/images/logo.svg"
                                 class="header__logo-image">
                            <img src="https://www.selver.ee/skin/frontend/carbon/selver/images/selver-logo-mobile.svg"
                                 class="header__logo-image--mobile">
	                    </div>
                    </a>
	                <a href="https://www.selver.ee/customer/account/login/" title="account" class="header__account">
		               <div class="header__account-logo">
			               <i data-icon="member"></i>
		               </div>
	                </a>
                    <form class="top-search" id="search_mini_form" action="https://www.selver.ee/catalogsearch/result/" method="get">
    <div class="form-search clearfix">
        <input id="search" type="search" name="q" placeholder="Otsi toodet" value="" class="input-text input-search" maxlength="128" />
        <button class="button btn-search" type="submit"><i data-icon="search"></i></button>
    </div>
</form>
                    <div id="js-header-headerWishlist" class="header__wishlist"></div>
	                <span class="js-toggle-nav header__nav-mobile hidden-md hidden-lg">
		                <span class="hamburger">
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                            <span class="line line-3"></span>
                        </span>
	                </span>
                    <div id="js-header-headerCart" class="header__headercart"></div>
                </div>
            </div>
	    <div class="header__mobile-search">
            <form class="top-search-touch" id="search_mini_form_touch" action="https://www.selver.ee/catalogsearch/result/" method="get">
    <div class="clearfix">
        <input id="search-touch" type="search" name="q"
               class="input-text input-search" maxlength="128"
               placeholder="Otsi toodet"/>
        <button class="button btn-search" type="submit"><i data-icon="search"></i></button>
                    <span class="scandit-start-button" onclick="vaimoScanditBarcodePicker.startScanner();">
                <i data-icon="scan-barcode"></i>
            </span>
            <span class="scandit-stop-button" onclick="vaimoScanditBarcodePicker.stopScanner();"
                  style="display: none"><i data-icon="delete2"></i></span>
            </div>
</form>

    <div id="scandit-barcode-picker" class="scanner"></div>
    <script>
        //<![CDATA[
        var vaimoScanditBarcodePicker;

        (function ($) {
            vaimoScanditBarcodePicker = $.vaimo.scanditBarcodePicker();

            if (typeof vaimoScanditBarcodePicker !== undefined) {

                vaimoScanditBarcodePicker.setConfig({
                    licenseKey: 'Ad2dT6uBP4isMlwANi70PRkA+TCXH2KMOU8BV1NVX/jSVrZ06Uf9ngR0uFFxA/o7dXaLY7VYAxXHZ0Y9PEc0FnZnrwa2bjnSjS9Cmwpb03CNa9SHlwAOPkM+o3YLEfu1lUjVoCmq/ZLA5TT6FEfkgHU+uTM1u/qyivnf3gPFKjMhIhV/Em6yUfm0GH1jAIMdJ0IkUVEvM1kp4C8WsASK4gbEkV58CsUJFMNGJxVarZDF59ENjbSYCFuunQZ/Bx5WMbuPbWiiNA8kGCnqybRVEksraLF7dcembk9zmgdnMGfzU2GXOYPIto3CltlDpGdUmF3+j5x9Hfh9rd7q7lx8rpr3azEUC1VY2viJqY7Cqz8HYEgW+wjseTxAjUN+ew+cZqNXgZrmwUjyKhSFCEdMjoYiSKb46Fg/vBkCBDuo66c2alayNCTNf+mBaTwptwhJJw2LYEBnBNDeqYxAdOqLZh+sq/wMCFmwaQ7sa8dJZNxrbSvCt376tutmHDU21rOGL8fYh98T5g4kJ5mRVSE56BnLAfc3N9+XC6rajtHFcbu9v5goIx1g8nOe7oHmSYfY2ObEckAGj7TvuFkMnfM52BmA2O0M73WmuoezKr/I4Qvlmmi5sPoocB85R+NIfq1AU7pnjcM1bqebqnOm0thetI1walsfSclD3SDRa84/h4PFReZM2hUQfni4Q51hCMDZAvQ/ihmd4n1HoHGXHalkpZ8INy+M/SpwD9F4yXaPTr+YNRrkrQKMcCT2Et5Jf8ZnnHgqfHtpw9EJ4+xdf53bWSksBtv3wbZk76lD3kwYb2So',
                    engineLocation: BASE_URL + 'js/vaimo/scandit_sdk/build',
                    picker: {
                        accessCamera: false,
                        singleImageMode: {
                            desktop: {always: false, allowFallback: true},
                            mobile: {always: false, allowFallback: true}
                        },
                        visible: false,
                        playSoundOnScan: false,
                        vibrateOnScan: false
                    },
                    cameraErrorMessage: 'No camera available.'
                });
                vaimoScanditBarcodePicker.setScanSettings({
                    enabledSymbologies: ["ean13", "ean8"],
                    codeDuplicateFilter: 1000
                });
                vaimoScanditBarcodePicker.setHtmlElements({
                    scannerWrapper: document.getElementById('scandit-barcode-picker'),
                    searchInput: $('input#search-touch'),
                    startButton: $('.scandit-start-button'),
                    searchForm: $('#search_mini_form_touch'),
                    stopButton: $('.scandit-stop-button'),
                    scannerBg: 'scanner-open'
                });
                vaimoScanditBarcodePicker.create();
            }
        })(jQuery);
        //]]>
    </script>
	    </div>
            <div class="top-tools">
                
    <nav>
        <ul class="topnav clearfix">
            <li  class="level0 top-item nav-1 expand-submenu first active"><a data-back-txt="Tagasi" href="https://www.selver.ee/" class="top-link level0 ">e-Selver</a><div id="top-navigation-clone"></div></li><li  class="level0 top-item nav-2"><a data-back-txt="Tagasi" href="https://tellimine.selver.ee/" class="top-link level0 ">Selveri Köök</a></li><li  class="level0 top-item nav-3"><a data-back-txt="Tagasi" href="https://veeb.selver.ee/retseptid" class="top-link level0 ">Retseptid</a></li><li  class="level0 top-item nav-4"><a data-back-txt="Tagasi" href="https://veeb.selver.ee/kampaaniad" class="top-link level0 ">Kampaaniad</a></li><li  class="level0 top-item nav-5"><a data-back-txt="Tagasi" href="https://www.selver.ee/kauplused/" class="top-link level0 ">Kauplused</a></li><li  class="level0 top-item nav-6"><a data-back-txt="Tagasi" href="/selveekspress" class="top-link level0 ">SelveEkspress</a></li><li  class="level0 top-item nav-7"><a data-back-txt="Tagasi" href="/vabad-ametikohad" class="top-link level0 ">Tule tööle</a></li><li  class="level0 top-item nav-8 last"><a data-back-txt="Tagasi" href="/uudised" class="top-link level0 ">Uudised</a></li>        </ul>
    </nav>
<script type="text/javascript">
    selverMenuHandler(jQuery);
</script>            </div>
    </div>
</header>
<!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 <script>
//<![CDATA[
    (function($) {
        if (typeof selverAddToCart != 'undefined') {
            selverAddToCart.setAddToCartUrl('https://www.selver.ee/selver/cart/addToCart/', {"form_key":"GQqsMdiRQRjQ1UWo"});
        }

        var items = {"topLinks":"<p class=\"partnercard-notice hidden hidden-md hidden-lg\">Logi sisse, et kasutada soovikorvi<\/p>\n<div class=\"partnercard-header-login\">\n    <form action=\"https:\/\/www.selver.ee\/customer\/account\/loginPost\/\" method=\"post\">\n        <input name=\"form_key\" type=\"hidden\" value=\"GQqsMdiRQRjQ1UWo\" \/>\n        <button type=\"submit\" class=\"partnercard-btn\"><i data-icon=\"partnercard-star\"><\/i>Logi sisse e-Selverisse<\/button>\n        <a class=\"partnercard-info fancybox\" href=\"#partnercard-login-info\"><i data-icon=\"question\"><\/i><\/a>\n    <\/form>\n    <div id=\"partnercard-login-info\" class=\"partnercard-login-info std\" style=\"display: none\">\n                    <h3><strong>e-Selverisse sisse logimiseks peate omama kehtivat Partnerkaarti<\/strong><\/h3>\r\n<p>Partnerkaardi kliendina sisse logimisel on mitu eelist:<\/p>\r\n<ul>\r\n<li>Kogute igalt kulutatult eurolt ostuboonust<\/li>\r\n<li>Saate s&uuml;nnip&auml;eval ning sellele eelneval ja j&auml;rgneval viiel p&auml;eval 10% soodustust k&otilde;ikidelt Selveri K&ouml;&ouml;gi toodetelt, Selveri Pagarite toodetelt, tortidelt, kookidelt, kringlitelt, stritslitelt ja jookidelt (v.a Selveri K&ouml;&ouml;gi internetilehe tellimused)<\/li>\r\n<li>N&auml;ete oma tellimuste staatust ja ajalugu<\/li>\r\n<li>Saate vormistada tellimused kiirelt ja mugavalt, kuna Teie andmed on Partnerkaardi s&uuml;steemis juba salvestatud<\/li>\r\n<li>Saate m&auml;rgistada lemmiktooteid soovikorvi<\/li>\r\n<li>Teie ostukorvi sisu s&auml;ilib s&otilde;ltumata sellest, kas sooritate ostu v&otilde;i mitte. J&auml;rgmisel sisselogimisel on k&otilde;ik varasemalt lisatud tooted ostukorvis olemas<\/li>\r\n<\/ul>\r\n<p>Partnerkaardi saad endale tellida <a href=\"https:\/\/www.partnerkaart.ee\/join\">siit<\/a>.<\/p>            <\/div>\n<\/div>\n","headerCart":"    \n <div class=\"headercart\" id=\"headercart-disabled\">\n    <div class=\"top\">\n        <a class=\"headercart-info\" href=\"https:\/\/www.selver.ee\/checkout\/cart\/\" title=\"Ostukorv\">\n\n            <div class=\"headercart-price\">\n\t            <span class=\"headercart__price-no-shipping\">0,00\u00a0\u20ac<\/span>\n                            <\/div>\n            <button class=\"button btn-smaller headercart__button\">\n\t            <span class=\"headercart__button-text\">Ostukorv<\/span>\n\t            <span class=\"headercart-items\">\n                <i data-icon=\"cart\"><\/i>\n                <b class=\"qty\">0<\/b>\n                <\/span>\n            <\/button>\n        <\/a>\n    <\/div>\n<\/div>\n\n","topToolsTouch":"\n<ul class=\"top-tools-touch\">\n    <li class=\"top-tools-touch__language-switcher\">\n        \n        <a class=\"langselect\" href=\"#\">\n            <i data-icon=\"flag-et\"><\/i>\n        <\/a>\n        <div class=\"langdropdown\">\n                                            <a href=\"https:\/\/www.selver.ee\/ru\/aedviljapuree-kanafileega-6-ponn-190-g?___store=et&amp;___from_store=et\"\n                class=\"active-language \">\n                    <i data-icon=\"flag-et\"><\/i>\n                    <span class=\"txt\">est<\/span>\n                <\/a>\n                                            <a href=\"https:\/\/www.selver.ee\/ru\/ru\/aedviljapuree-kanafileega-6-ponn-190-g?___from_store=et\"\n                class=\"\">\n                    <i data-icon=\"flag-ru\"><\/i>\n                    <span class=\"txt\">rus<\/span>\n                <\/a>\n                    <\/div>\n\n    <\/li>\n\t<li class=\"top-tools-touch__info\">\n\t\t<a class=\"partnercard-info fancybox\" href=\"#partnercard-login-info\">\n\t\t\t<i data-icon=\"question\"><\/i>\n\t\t\t<span class=\"txt\">Info<\/span>\n\t\t<\/a>\n\t<\/li>\n                        <li class=\"partnercard-login top-tools-touch__login-log-out\">\n                <form action=\"https:\/\/www.selver.ee\/customer\/account\/loginPost\/\" method=\"post\" name=\"login_form_touch\">\n                    <input name=\"form_key\" type=\"hidden\" value=\"GQqsMdiRQRjQ1UWo\" \/>\n                    <button type=\"submit\" class=\"partnercard-btn\"><i data-icon=\"partnercard-star\"><\/i>Logi sisse e-Selverisse<\/button>\n                <\/form>\n            <\/li>\n            <\/ul>","headerWishlist":"\n<a class=\"wishlist \" href=\"https:\/\/www.selver.ee\/wishlist\/\" title=\"Soovikorv\">\n    <i data-icon=\"heart\"><\/i>\n<\/a>"}, prefix = '#js-header-';
        $.each(items, function(id, html) {
            $(prefix + id).html(html);
        });
        if (typeof tkmLogoutSession != 'undefined') {
            $(function() {
                                tkmLogoutSession.checkCookieState();
                            });
        }
    })(jQuery);
    klevu_sessionId = 'e72110d0fd173b03a86005691c9e3632';
//]]>
</script>
<script>
(function () {
if (typeof timeslotReservation != 'undefined') {
    timeslotReservation.setIsLoggedIn(0);
}
if (typeof selverAddToCart != 'undefined') {
    selverAddToCart.itemsInCart([]);
}
if (typeof selverRemoveFromCart != 'undefined') {
    selverRemoveFromCart.setItemRemoveHtmlTemplate("<div class=\"item-remove-section\"><a class=\"delete-item\" data-item-id=\"%%ITEM_ID%%\" href=\"#\"><span data-icon=\"delete2\"><\/span>Eemalda<\/a><\/div>");
}
if (typeof tkmAddToWishlist!='undefined') {
    tkmAddToWishlist.setRemoveFromWishlistUrl('https://www.selver.ee/tkmg/wishlist/remove/');
    tkmAddToWishlist.setIsLoggedIn(0);
    tkmAddToWishlist.setMessageNotLoggedIn("Pole sisse logitud");
    tkmAddToWishlist.itemsInWishlist([]);
            tkmAddToWishlist.setMultipleWishlist(1);
        //tkmAddToWishlist.setMultipleWishlistItems();
        tkmAddToWishlist.setTemplate("<div class=\"multiple-wishlist-container\"><p class=\"title\">Vali soovikorv<\/p><ul><% _.each(lists,function(item){ %><% var wishlistItem = item.name; %><li data-wishlist-id=\"<%= item.id %>\" class=\"multiple-wishlist-item <%= item.class %>\"><%= item.name %><\/li><% }); %><\/ul><a href=\"https:\/\/www.selver.ee\/wishlist\/\"><p class=\"note\">Loo uus soovikorv<\/p><\/a><\/div>");
    }

})();
</script> 
<!-- ESI END DUMMY COMMENT [] -->
<div id="merged-cart-product-note" class="merged-cart-product-note" style="display: none">
    <p class="merged-cart-product-note__text">Sinu personaalses ostukorvis olid juba mõned tooted, liitsime need Sinu praeguse ostukorviga.</p>
</div>

<script>
//<![CDATA[
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
var priceFormatSeparator = {"pattern":"%s\u00a0\u20ac","precision":2,"requiredPrecision":2,"decimalSymbol":",","groupSymbol":"\u00a0","groupLength":3,"integerRequired":1};
//]]>
</script><div class="main-container col2-left-layout">
    <div class="container container-white">
        <div class="row">
            <div class="sidebar col-left col-md-3 col-lg-3 hidden-xs hidden-sm">
                <nav role="navigation">
    <ul class="leftnav vertnav" style="display: block;">
        <li class="item level0 nav-minu-tooted even first nav-1 ph-a-1488 "> <a href="https://www.selver.ee/minu-tooted"> <span class="link"> Minu tooted <span class="amount">0</span> </span> </a> </li><li class="item level0 nav-uudistooted odd nav-2 ph-a-1459 "> <a href="https://www.selver.ee/uudistooted"> <span class="link"> Uudistooted <span class="amount">565</span> </span> </a> </li><li class="item level0 nav-soodushinnaga-tooted even nav-3 ph-a-1446 "> <a href="https://www.selver.ee/soodushinnaga-tooted"> <span class="link"> Soodushinnaga tooted <span class="amount">1364</span> </span> </a> </li><li class="item level0 nav-eritooted odd parent nav-4 ph-a-1504 ph-b-1504 "> <a href="https://www.selver.ee/eritooted"> <span class="link"> Eritooted </span> </a> <ul> <li class="item level1 nav-laktoosivaba even first nav-4-1 ph-a-1505 ph-s-1505 "> <a href="https://www.selver.ee/eritooted/laktoosivaba"> <span class="link"> Laktoosivaba <span class="amount">191</span> </span> </a> </li><li class="item level1 nav-gluteenivaba odd nav-4-2 ph-a-1506 ph-s-1506 "> <a href="https://www.selver.ee/eritooted/gluteenivaba"> <span class="link"> Gluteenivaba <span class="amount">151</span> </span> </a> </li><li class="item level1 nav-suhkruvaba even nav-4-3 ph-a-1509 ph-s-1509 "> <a href="https://www.selver.ee/eritooted/suhkruvaba"> <span class="link"> Suhkruvaba <span class="amount">34</span> </span> </a> </li><li class="item level1 nav-vegan odd nav-4-4 ph-a-1507 ph-s-1507 "> <a href="https://www.selver.ee/eritooted/vegan"> <span class="link"> Vegan <span class="amount">113</span> </span> </a> </li><li class="item level1 nav-oko even nav-4-5 ph-a-1508 ph-s-1508 "> <a href="https://www.selver.ee/eritooted/oko"> <span class="link"> Öko <span class="amount">192</span> </span> </a> </li><li class="item level1 nav-mahe odd last nav-4-6 ph-a-1510 ph-s-1510 "> <a href="https://www.selver.ee/eritooted/mahe"> <span class="link"> Mahe <span class="amount">40</span> </span> </a> </li> </ul> </li><li class="item level0 nav-puu-ja-koogiviljad even parent nav-5 ph-a-1114 ph-b-1114 "> <a href="https://www.selver.ee/puu-ja-koogiviljad"> <span class="link"> Puu- ja köögiviljad </span> </a> <ul> <li class="item level1 nav-ounad-pirnid even first nav-5-1 ph-a-1159 ph-s-1159 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/ounad-pirnid"> <span class="link"> Õunad, pirnid <span class="amount">13</span> </span> </a> </li><li class="item level1 nav-troopilised-eksootilised-viljad odd nav-5-2 ph-a-1161 ph-s-1161 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/troopilised-eksootilised-viljad"> <span class="link"> Troopilised, eksootilised viljad <span class="amount">48</span> </span> </a> </li><li class="item level1 nav-koogiviljad-juurviljad even nav-5-3 ph-a-1162 ph-s-1162 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/koogiviljad-juurviljad"> <span class="link"> Köögiviljad, juurviljad <span class="amount">103</span> </span> </a> </li><li class="item level1 nav-seened odd nav-5-4 ph-a-1163 ph-s-1163 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/seened"> <span class="link"> Seened <span class="amount">9</span> </span> </a> </li><li class="item level1 nav-maitsetaimed-varsked-saltid-piprad even nav-5-5 ph-a-1164 ph-s-1164 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/maitsetaimed-varsked-saltid-piprad"> <span class="link"> Maitsetaimed, värsked salatid, piprad <span class="amount">47</span> </span> </a> </li><li class="item level1 nav-smuutid-varsked-mahlad odd nav-5-6 ph-a-1165 ph-s-1165 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/smuutid-varsked-mahlad"> <span class="link"> Smuutid, värsked mahlad <span class="amount">88</span> </span> </a> </li><li class="item level1 nav-puuviljasalatid even nav-5-7 ph-a-1457 ph-s-1457 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/puuviljasalatid"> <span class="link"> Puuviljasalatid <span class="amount">11</span> </span> </a> </li><li class="item level1 nav-marjad odd last nav-5-8 ph-a-1458 ph-s-1458 "> <a href="https://www.selver.ee/puu-ja-koogiviljad/marjad"> <span class="link"> Marjad <span class="amount">5</span> </span> </a> </li> </ul> </li><li class="item level0 nav-liha-ja-kalatooted odd parent nav-6 ph-a-1115 ph-b-1115 "> <a href="https://www.selver.ee/liha-ja-kalatooted"> <span class="link"> Liha- ja kalatooted </span> </a> <ul> <li class="item level1 nav-sealiha even first nav-6-1 ph-a-1166 ph-s-1166 "> <a href="https://www.selver.ee/liha-ja-kalatooted/sealiha"> <span class="link"> Sealiha <span class="amount">69</span> </span> </a> </li><li class="item level1 nav-linnuliha odd nav-6-2 ph-a-1167 ph-s-1167 "> <a href="https://www.selver.ee/liha-ja-kalatooted/linnuliha"> <span class="link"> Linnuliha <span class="amount">52</span> </span> </a> </li><li class="item level1 nav-veise-lamba-ja-ulukiliha even nav-6-3 ph-a-1168 ph-s-1168 "> <a href="https://www.selver.ee/liha-ja-kalatooted/veise-lamba-ja-ulukiliha"> <span class="link"> Veise-, lamba- ja ulukiliha <span class="amount">14</span> </span> </a> </li><li class="item level1 nav-hakkliha odd nav-6-4 ph-a-1169 ph-s-1169 "> <a href="https://www.selver.ee/liha-ja-kalatooted/hakkliha"> <span class="link"> Hakkliha <span class="amount">11</span> </span> </a> </li><li class="item level1 nav-keedu-ja-suitsuvorstid-viinerid even nav-6-5 ph-a-1170 ph-s-1170 "> <a href="https://www.selver.ee/liha-ja-kalatooted/keedu-ja-suitsuvorstid-viinerid"> <span class="link"> Keedu- ja suitsuvorstid, viinerid <span class="amount">138</span> </span> </a> </li><li class="item level1 nav-singid-rulaadid odd nav-6-6 ph-a-1171 ph-s-1171 "> <a href="https://www.selver.ee/liha-ja-kalatooted/singid-rulaadid"> <span class="link"> Singid, rulaadid <span class="amount">79</span> </span> </a> </li><li class="item level1 nav-muud-lihatooted even nav-6-7 ph-a-1172 ph-s-1172 "> <a href="https://www.selver.ee/liha-ja-kalatooted/muud-lihatooted"> <span class="link"> Muud lihatooted <span class="amount">140</span> </span> </a> </li><li class="item level1 nav-grillvorstid-verivorstid odd nav-6-8 ph-a-1173 ph-s-1173 "> <a href="https://www.selver.ee/liha-ja-kalatooted/grillvorstid-verivorstid"> <span class="link"> Grillvorstid, verivorstid <span class="amount">52</span> </span> </a> </li><li class="item level1 nav-gurmee-lihatooted even nav-6-9 ph-a-1174 ph-s-1174 "> <a href="https://www.selver.ee/liha-ja-kalatooted/gurmee-lihatooted"> <span class="link"> Gurmee lihatooted <span class="amount">20</span> </span> </a> </li><li class="item level1 nav-varske-kala-mereannid odd nav-6-10 ph-a-1175 ph-s-1175 "> <a href="https://www.selver.ee/liha-ja-kalatooted/varske-kala-mereannid"> <span class="link"> Värske kala, mereannid <span class="amount">6</span> </span> </a> </li><li class="item level1 nav-soolatud-ja-suitsutatud-kalatooted even nav-6-11 ph-a-1176 ph-s-1176 "> <a href="https://www.selver.ee/liha-ja-kalatooted/soolatud-ja-suitsutatud-kalatooted"> <span class="link"> Soolatud ja suitsutatud kalatooted <span class="amount">28</span> </span> </a> </li><li class="item level1 nav-toodeldud-mereannid odd nav-6-12 ph-a-1177 ph-s-1177 "> <a href="https://www.selver.ee/liha-ja-kalatooted/toodeldud-mereannid"> <span class="link"> Töödeldud mereannid <span class="amount">28</span> </span> </a> </li><li class="item level1 nav-muud-kalatooted even last nav-6-13 ph-a-1178 ph-s-1178 "> <a href="https://www.selver.ee/liha-ja-kalatooted/muud-kalatooted"> <span class="link"> Muud kalatooted <span class="amount">187</span> </span> </a> </li> </ul> </li><li class="item level0 nav-piimatooted-munad-void even parent nav-7 ph-a-1116 ph-b-1116 "> <a href="https://www.selver.ee/piimatooted-munad-void"> <span class="link"> Piimatooted, munad, võid </span> </a> <ul> <li class="item level1 nav-piimad-koored even first nav-7-1 ph-a-1180 ph-s-1180 "> <a href="https://www.selver.ee/piimatooted-munad-void/piimad-koored"> <span class="link"> Piimad, koored <span class="amount">76</span> </span> </a> </li><li class="item level1 nav-kohupiimad-kodujuustud odd nav-7-2 ph-a-1181 ph-s-1181 "> <a href="https://www.selver.ee/piimatooted-munad-void/kohupiimad-kodujuustud"> <span class="link"> Kohupiimad, kodujuustud <span class="amount">84</span> </span> </a> </li><li class="item level1 nav-jogurtid-jogurtijoogid even nav-7-3 ph-a-1182 ph-s-1182 "> <a href="https://www.selver.ee/piimatooted-munad-void/jogurtid-jogurtijoogid"> <span class="link"> Jogurtid, jogurtijoogid <span class="amount">121</span> </span> </a> </li><li class="item level1 nav-kohukesed odd nav-7-4 ph-a-1183 ph-s-1183 "> <a href="https://www.selver.ee/piimatooted-munad-void/kohukesed"> <span class="link"> Kohukesed <span class="amount">25</span> </span> </a> </li><li class="item level1 nav-muud-magustoidud even nav-7-5 ph-a-1184 ph-s-1184 "> <a href="https://www.selver.ee/piimatooted-munad-void/muud-magustoidud"> <span class="link"> Muud magustoidud <span class="amount">27</span> </span> </a> </li><li class="item level1 nav-munad odd nav-7-6 ph-a-1185 ph-s-1185 "> <a href="https://www.selver.ee/piimatooted-munad-void/munad"> <span class="link"> Munad <span class="amount">19</span> </span> </a> </li><li class="item level1 nav-void-margariinid even last nav-7-7 ph-a-1186 ph-s-1186 "> <a href="https://www.selver.ee/piimatooted-munad-void/void-margariinid"> <span class="link"> Võid, margariinid <span class="amount">43</span> </span> </a> </li> </ul> </li><li class="item level0 nav-juustud odd parent nav-8 ph-a-1117 ph-b-1117 "> <a href="https://www.selver.ee/juustud"> <span class="link"> Juustud </span> </a> <ul> <li class="item level1 nav-juustud even first nav-8-1 ph-a-1188 ph-s-1188 "> <a href="https://www.selver.ee/juustud/juustud"> <span class="link"> Juustud <span class="amount">102</span> </span> </a> </li><li class="item level1 nav-maardejuustud odd nav-8-2 ph-a-1189 ph-s-1189 "> <a href="https://www.selver.ee/juustud/maardejuustud"> <span class="link"> Määrdejuustud <span class="amount">60</span> </span> </a> </li><li class="item level1 nav-delikatessjuustud even nav-8-3 ph-a-1190 ph-s-1190 "> <a href="https://www.selver.ee/juustud/delikatessjuustud"> <span class="link"> Delikatessjuustud <span class="amount">103</span> </span> </a> </li> </ul> </li><li class="item level0 nav-leivad-saiad-kondiitritooted even parent nav-9 ph-a-1118 ph-b-1118 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted"> <span class="link"> Leivad, saiad, kondiitritooted </span> </a> <ul> <li class="item level1 nav-leivad even first nav-9-1 ph-a-1192 ph-s-1192 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/leivad"> <span class="link"> Leivad <span class="amount">64</span> </span> </a> </li><li class="item level1 nav-saiad odd nav-9-2 ph-a-1193 ph-s-1193 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/saiad"> <span class="link"> Saiad <span class="amount">40</span> </span> </a> </li><li class="item level1 nav-sepikud-kuklid-lavassid even nav-9-3 ph-a-1194 ph-s-1194 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/sepikud-kuklid-lavassid"> <span class="link"> Sepikud, kuklid, lavašid <span class="amount">13</span> </span> </a> </li><li class="item level1 nav-nakileivad odd nav-9-4 ph-a-1195 ph-s-1195 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/nakileivad"> <span class="link"> Näkileivad <span class="amount">30</span> </span> </a> </li><li class="item level1 nav-selveri-pagarid even nav-9-5 ph-a-1196 ph-s-1196 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/selveri-pagarid"> <span class="link"> Selveri Pagarid <span class="amount">13</span> </span> </a> </li><li class="item level1 nav-tordid odd nav-9-6 ph-a-1197 ph-s-1197 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/tordid"> <span class="link"> Tordid <span class="amount">28</span> </span> </a> </li><li class="item level1 nav-koogid-rullbiskviidid even nav-9-7 ph-a-1198 ph-s-1198 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/koogid-rullbiskviidid"> <span class="link"> Koogid, rullbiskviidid, tainad <span class="amount">98</span> </span> </a> </li><li class="item level1 nav-saiakesed-stritslid-kringlid odd last nav-9-8 ph-a-1199 ph-s-1199 "> <a href="https://www.selver.ee/leivad-saiad-kondiitritooted/saiakesed-stritslid-kringlid"> <span class="link"> Saiakesed, stritslid, kringlid <span class="amount">32</span> </span> </a> </li> </ul> </li><li class="item level0 nav-valmistoidud odd parent nav-10 ph-a-1119 ph-b-1119 "> <a href="https://www.selver.ee/valmistoidud"> <span class="link"> Valmistoidud </span> </a> <ul> <li class="item level1 nav-salatid even first nav-10-1 ph-a-1200 ph-s-1200 "> <a href="https://www.selver.ee/valmistoidud/salatid"> <span class="link"> Salatid <span class="amount">34</span> </span> </a> </li><li class="item level1 nav-jahutatud-valmistoidud odd nav-10-2 ph-a-1201 ph-s-1201 "> <a href="https://www.selver.ee/valmistoidud/jahutatud-valmistoidud"> <span class="link"> Jahutatud valmistoidud <span class="amount">113</span> </span> </a> </li><li class="item level1 nav-magustoidud even nav-10-3 ph-a-1203 ph-s-1203 "> <a href="https://www.selver.ee/valmistoidud/magustoidud"> <span class="link"> Magustoidud <span class="amount">22</span> </span> </a> </li> </ul> </li><li class="item level0 nav-kuivained-hoidised even parent nav-11 ph-a-1102 ph-b-1102 "> <a href="https://www.selver.ee/kuivained-hoidised"> <span class="link"> Kuiv- ja maitseained, hoidised </span> </a> <ul> <li class="item level1 nav-kuivained-hommikusoogid even first parent nav-11-1 ph-a-1120 ph-b-1120 ph-s-1120 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid"> <span class="link" data-showall-txt="Näita kõiki"> Kuivained, hommikusöögid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-jahud even first nav-11-1-1 ph-a-1205 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/jahud"> <span class="link"> Jahud <span class="amount">56</span> </span> </a> </li><li class="item level2 nav-makaronid odd nav-11-1-2 ph-a-1206 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/makaronid"> <span class="link"> Makaronid <span class="amount">96</span> </span> </a> </li><li class="item level2 nav-tangained even nav-11-1-3 ph-a-1207 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/tangained"> <span class="link"> Tangained <span class="amount">48</span> </span> </a> </li><li class="item level2 nav-riisid odd nav-11-1-4 ph-a-1208 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/riisid"> <span class="link"> Riisid <span class="amount">24</span> </span> </a> </li><li class="item level2 nav-hommikuhelbed-muslid-kiirpudrud odd nav-11-1-6 ph-a-1210 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/hommikuhelbed-muslid-kiirpudrud"> <span class="link"> Hommikuhelbed, müslid, kiirpudrud <span class="amount">165</span> </span> </a> </li><li class="item level2 nav-kuivsupid-ja-kastmed even nav-11-1-7 ph-a-1211 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/kuivsupid-ja-kastmed"> <span class="link"> Kuivsupid ja -kastmed <span class="amount">34</span> </span> </a> </li><li class="item level2 nav-paja-ja-nuudliroad odd last nav-11-1-8 ph-a-1212 "> <a href="https://www.selver.ee/kuivained-hoidised/kuivained-hommikusoogid/paja-ja-nuudliroad"> <span class="link"> Paja- ja nuudliroad <span class="amount">31</span> </span> </a> </li> </ul> </li><li class="item level1 nav-maitseained-ja-puljongid odd parent nav-11-2 ph-a-1121 ph-b-1121 ph-s-1121 "> <a href="https://www.selver.ee/kuivained-hoidised/maitseained-ja-puljongid"> <span class="link" data-showall-txt="Näita kõiki"> Maitseained ja puljongid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/kuivained-hoidised/maitseained-ja-puljongid"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-maitseained even first nav-11-2-1 ph-a-1213 "> <a href="https://www.selver.ee/kuivained-hoidised/maitseained-ja-puljongid/maitseained"> <span class="link"> Maitseained <span class="amount">308</span> </span> </a> </li><li class="item level2 nav-maailma-kook odd nav-11-2-2 ph-a-1214 "> <a href="https://www.selver.ee/kuivained-hoidised/maitseained-ja-puljongid/maailma-kook"> <span class="link"> Maailma köök <span class="amount">163</span> </span> </a> </li><li class="item level2 nav-puljongid even last nav-11-2-3 ph-a-1493 "> <a href="https://www.selver.ee/kuivained-hoidised/maitseained-ja-puljongid/puljongid"> <span class="link"> Puljongid <span class="amount">28</span> </span> </a> </li> </ul> </li><li class="item level1 nav-hoidised even parent nav-11-3 ph-a-1123 ph-b-1123 ph-s-1123 "> <a href="https://www.selver.ee/kuivained-hoidised/hoidised"> <span class="link" data-showall-txt="Näita kõiki"> Hoidised </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/kuivained-hoidised/hoidised"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-magusad-hoidised even first nav-11-3-1 ph-a-1215 "> <a href="https://www.selver.ee/kuivained-hoidised/hoidised/magusad-hoidised"> <span class="link"> Magusad hoidised <span class="amount">75</span> </span> </a> </li><li class="item level2 nav-hoidised odd nav-11-3-2 ph-a-1216 "> <a href="https://www.selver.ee/kuivained-hoidised/hoidised/hoidised"> <span class="link"> Hoidised <span class="amount">160</span> </span> </a> </li><li class="item level2 nav-valmistoidud-purgis even nav-11-3-3 ph-a-1217 "> <a href="https://www.selver.ee/kuivained-hoidised/hoidised/valmistoidud-purgis"> <span class="link"> Valmistoidud purgis <span class="amount">59</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kohv-tee-kakao odd last parent nav-11-4 ph-a-1440 ph-b-1440 ph-s-1440 "> <a href="https://www.selver.ee/kuivained-hoidised/kohv-tee-kakao"> <span class="link" data-showall-txt="Näita kõiki"> Kohv, tee, kakao </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/kuivained-hoidised/kohv-tee-kakao"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-kohvid even first nav-11-4-1 ph-a-1441 "> <a href="https://www.selver.ee/kuivained-hoidised/kohv-tee-kakao/kohvid"> <span class="link"> Kohvid <span class="amount">124</span> </span> </a> </li><li class="item level2 nav-teed odd nav-11-4-2 ph-a-1442 "> <a href="https://www.selver.ee/kuivained-hoidised/kohv-tee-kakao/teed"> <span class="link"> Teed <span class="amount">109</span> </span> </a> </li><li class="item level2 nav-kakaod-kakaojoogid even last nav-11-4-3 ph-a-1443 "> <a href="https://www.selver.ee/kuivained-hoidised/kohv-tee-kakao/kakaod-kakaojoogid"> <span class="link"> Kakaod, kakaojoogid <span class="amount">7</span> </span> </a> </li> </ul> </li> </ul> </li><li class="item level0 nav-kastmed-olid odd parent nav-12 ph-a-1124 ph-b-1124 "> <a href="https://www.selver.ee/kastmed-olid"> <span class="link"> Kastmed, õlid </span> </a> <ul> <li class="item level1 nav-olid-aadikad even first nav-12-1 ph-a-1222 ph-s-1222 "> <a href="https://www.selver.ee/kastmed-olid/olid-aadikad"> <span class="link"> Õlid, äädikad <span class="amount">76</span> </span> </a> </li><li class="item level1 nav-majoneesid-sinepid odd nav-12-2 ph-a-1223 ph-s-1223 "> <a href="https://www.selver.ee/kastmed-olid/majoneesid-sinepid"> <span class="link"> Majoneesid, sinepid <span class="amount">51</span> </span> </a> </li><li class="item level1 nav-ketsupid-tomatipastad-kastmed even nav-12-3 ph-a-1224 ph-s-1224 "> <a href="https://www.selver.ee/kastmed-olid/ketsupid-tomatipastad-kastmed"> <span class="link"> Ketšupid, tomatipastad, kastmed <span class="amount">121</span> </span> </a> </li> </ul> </li><li class="item level0 nav-maiustused-kupsised-naksid even parent nav-13 ph-a-1125 ph-b-1125 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid"> <span class="link"> Maiustused, küpsised, näksid </span> </a> <ul> <li class="item level1 nav-kommipakid even first nav-13-1 ph-a-1226 ph-s-1226 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/kommipakid"> <span class="link"> Kommipakid <span class="amount">129</span> </span> </a> </li><li class="item level1 nav-kommikarbid odd nav-13-2 ph-a-1450 ph-s-1450 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/kommikarbid"> <span class="link"> Kommikarbid <span class="amount">60</span> </span> </a> </li><li class="item level1 nav-sokolaadid even nav-13-3 ph-a-1451 ph-s-1451 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/sokolaadid"> <span class="link"> Šokolaadid <span class="amount">116</span> </span> </a> </li><li class="item level1 nav-natsud-pastillid odd nav-13-4 ph-a-1227 ph-s-1227 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/natsud-pastillid"> <span class="link"> Nätsud, pastillid <span class="amount">49</span> </span> </a> </li><li class="item level1 nav-muud-maiustused even nav-13-5 ph-a-1228 ph-s-1228 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/muud-maiustused"> <span class="link"> Muud maiustused <span class="amount">32</span> </span> </a> </li><li class="item level1 nav-kupsised odd nav-13-6 ph-a-1229 ph-s-1229 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/kupsised"> <span class="link"> Küpsised <span class="amount">184</span> </span> </a> </li><li class="item level1 nav-nakileivad even nav-13-7 ph-a-1230 ph-s-1230 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/nakileivad"> <span class="link"> Näkileivad <span class="amount">51</span> </span> </a> </li><li class="item level1 nav-pahklid-ja-kuivatatud-puuviljad odd nav-13-8 ph-a-1231 ph-s-1231 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/pahklid-ja-kuivatatud-puuviljad"> <span class="link"> Pähklid ja kuivatatud puuviljad <span class="amount">112</span> </span> </a> </li><li class="item level1 nav-sipsid even nav-13-9 ph-a-1232 ph-s-1232 "> <a href="https://www.selver.ee/maiustused-kupsised-naksid/sipsid"> <span class="link"> Sipsid <span class="amount">72</span> </span> </a> </li> </ul> </li><li class="item level0 nav-kulmutatud-toidukaubad odd parent nav-14 ph-a-1126 ph-b-1126 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad"> <span class="link"> Külmutatud toidukaubad </span> </a> <ul> <li class="item level1 nav-kulmutatud-liha-ja-kalatooted even first nav-14-1 ph-a-1234 ph-s-1234 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad/kulmutatud-liha-ja-kalatooted"> <span class="link"> Külmutatud liha- ja kalatooted <span class="amount">97</span> </span> </a> </li><li class="item level1 nav-kulmutatud-valmistooted odd nav-14-2 ph-a-1235 ph-s-1235 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad/kulmutatud-valmistooted"> <span class="link"> Külmutatud valmistooted <span class="amount">42</span> </span> </a> </li><li class="item level1 nav-kulmutatud-koogiviljad-marjad-puuviljad even nav-14-3 ph-a-1236 ph-s-1236 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad/kulmutatud-koogiviljad-marjad-puuviljad"> <span class="link"> Külmutatud köögiviljad, marjad, puuviljad <span class="amount">80</span> </span> </a> </li><li class="item level1 nav-kulmutatud-taignad-ja-kondiitritooted odd nav-14-4 ph-a-1237 ph-s-1237 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad/kulmutatud-taignad-ja-kondiitritooted"> <span class="link"> Külmutatud tainad ja kondiitritooted <span class="amount">33</span> </span> </a> </li><li class="item level1 nav-jaatised even last nav-14-5 ph-a-1238 ph-s-1238 "> <a href="https://www.selver.ee/kulmutatud-toidukaubad/jaatised"> <span class="link"> Jäätised <span class="amount">141</span> </span> </a> </li> </ul> </li><li class="item level0 nav-joogid even parent nav-15 ph-a-1106 ph-b-1106 "> <a href="https://www.selver.ee/joogid"> <span class="link"> Joogid </span> </a> <ul> <li class="item level1 nav-veed-mahlad-siirupid-smuutid even first parent nav-15-1 ph-a-1130 ph-b-1130 ph-s-1130 "> <a href="https://www.selver.ee/joogid/veed-mahlad-siirupid-smuutid"> <span class="link" data-showall-txt="Näita kõiki"> Veed, mahlad, siirupid, smuutid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/veed-mahlad-siirupid-smuutid"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-veed even first nav-15-1-1 ph-a-1258 "> <a href="https://www.selver.ee/joogid/veed-mahlad-siirupid-smuutid/veed"> <span class="link"> Veed <span class="amount">109</span> </span> </a> </li><li class="item level2 nav-mahlad-ja-kontsentraadid-siirupid odd nav-15-1-2 ph-a-1259 "> <a href="https://www.selver.ee/joogid/veed-mahlad-siirupid-smuutid/mahlad-ja-kontsentraadid-siirupid"> <span class="link"> Mahlad ja -kontsentraadid, siirupid <span class="amount">200</span> </span> </a> </li><li class="item level2 nav-smuutid-varsked-mahlad even last nav-15-1-3 ph-a-1260 "> <a href="https://www.selver.ee/joogid/veed-mahlad-siirupid-smuutid/smuutid-varsked-mahlad"> <span class="link"> Smuutid, värsked mahlad <span class="amount">88</span> </span> </a> </li> </ul> </li><li class="item level1 nav-karastus-ja-energiajoogid-toonikud odd parent nav-15-2 ph-a-1131 ph-b-1131 ph-s-1131 "> <a href="https://www.selver.ee/joogid/karastus-ja-energiajoogid-toonikud"> <span class="link" data-showall-txt="Näita kõiki"> Karastus- ja energiajoogid, toonikud </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/karastus-ja-energiajoogid-toonikud"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-karastusjoogid-toonikud even first nav-15-2-1 ph-a-1261 "> <a href="https://www.selver.ee/joogid/karastus-ja-energiajoogid-toonikud/karastusjoogid-toonikud"> <span class="link"> Karastusjoogid, toonikud <span class="amount">106</span> </span> </a> </li><li class="item level2 nav-energiajoogid odd nav-15-2-2 ph-a-1262 "> <a href="https://www.selver.ee/joogid/karastus-ja-energiajoogid-toonikud/energiajoogid"> <span class="link"> Energiajoogid <span class="amount">28</span> </span> </a> </li><li class="item level2 nav-alkoholivabad-joogid even last nav-15-2-3 ph-a-1263 "> <a href="https://www.selver.ee/joogid/karastus-ja-energiajoogid-toonikud/alkoholivabad-joogid"> <span class="link"> Alkoholivabad joogid <span class="amount">40</span> </span> </a> </li> </ul> </li><li class="item level1 nav-spordijoogid-pulbrid-batoonid even parent nav-15-3 ph-a-1132 ph-b-1132 ph-s-1132 "> <a href="https://www.selver.ee/joogid/spordijoogid-pulbrid-batoonid"> <span class="link" data-showall-txt="Näita kõiki"> Spordijoogid, pulbrid, batoonid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/spordijoogid-pulbrid-batoonid"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-spordijoogid even first nav-15-3-1 ph-a-1264 "> <a href="https://www.selver.ee/joogid/spordijoogid-pulbrid-batoonid/spordijoogid"> <span class="link"> Spordijoogid <span class="amount">12</span> </span> </a> </li><li class="item level2 nav-toidulisandid odd last nav-15-3-2 ph-a-1265 "> <a href="https://www.selver.ee/joogid/spordijoogid-pulbrid-batoonid/toidulisandid"> <span class="link"> Toidulisandid <span class="amount">5</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kohv-tee-kakao odd parent nav-15-4 ph-a-1129 ph-b-1129 ph-s-1129 "> <a href="https://www.selver.ee/joogid/kohv-tee-kakao"> <span class="link" data-showall-txt="Näita kõiki"> Kohv, tee, kakao </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/kohv-tee-kakao"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-kohvid even first nav-15-4-1 ph-a-1254 "> <a href="https://www.selver.ee/joogid/kohv-tee-kakao/kohvid"> <span class="link"> Kohvid <span class="amount">124</span> </span> </a> </li><li class="item level2 nav-teed odd nav-15-4-2 ph-a-1255 "> <a href="https://www.selver.ee/joogid/kohv-tee-kakao/teed"> <span class="link"> Teed <span class="amount">109</span> </span> </a> </li><li class="item level2 nav-kakaod-kakaojoogid even last nav-15-4-3 ph-a-1256 "> <a href="https://www.selver.ee/joogid/kohv-tee-kakao/kakaod-kakaojoogid"> <span class="link"> Kakaod, kakaojoogid <span class="amount">7</span> </span> </a> </li> </ul> </li><li class="item level1 nav-lahja-alkohol even parent nav-15-5 ph-a-1127 ph-b-1127 ph-s-1127 "> <a href="https://www.selver.ee/joogid/lahja-alkohol"> <span class="link" data-showall-txt="Näita kõiki"> Lahja alkohol </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/lahja-alkohol"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-olled-siidrid-segud-kokteilid even first nav-15-5-1 ph-a-1239 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/olled-siidrid-segud-kokteilid"> <span class="link"> Õlled, siidrid, segud, kokteilid <span class="amount">271</span> </span> </a> </li><li class="item level2 nav-punased-veinid odd nav-15-5-2 ph-a-1240 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/punased-veinid"> <span class="link"> Punased veinid <span class="amount">227</span> </span> </a> </li><li class="item level2 nav-valged-veinid even nav-15-5-3 ph-a-1241 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/valged-veinid"> <span class="link"> Valged veinid <span class="amount">205</span> </span> </a> </li><li class="item level2 nav-roosad-veinid odd nav-15-5-4 ph-a-1242 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/roosad-veinid"> <span class="link"> Roosad veinid <span class="amount">26</span> </span> </a> </li><li class="item level2 nav-likoorveinid even nav-15-5-5 ph-a-1243 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/likoorveinid"> <span class="link"> Liköörveinid <span class="amount">8</span> </span> </a> </li><li class="item level2 nav-shampanjad-vahuveinid odd nav-15-5-6 ph-a-1244 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/shampanjad-vahuveinid"> <span class="link"> Šampanjad, vahuveinid <span class="amount">78</span> </span> </a> </li><li class="item level2 nav-sommeljee-soovitab even last nav-15-5-7 ph-a-1245 "> <a href="https://www.selver.ee/joogid/lahja-alkohol/sommeljee-soovitab"> <span class="link"> Sommeljee soovitab <span class="amount">7</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kange-alkohol odd parent nav-15-6 ph-a-1128 ph-b-1128 ph-s-1128 "> <a href="https://www.selver.ee/joogid/kange-alkohol"> <span class="link" data-showall-txt="Näita kõiki"> Kange alkohol </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/kange-alkohol"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-viinad even first nav-15-6-1 ph-a-1246 "> <a href="https://www.selver.ee/joogid/kange-alkohol/viinad"> <span class="link"> Viinad <span class="amount">74</span> </span> </a> </li><li class="item level2 nav-dzinnid odd nav-15-6-2 ph-a-1247 "> <a href="https://www.selver.ee/joogid/kange-alkohol/dzinnid"> <span class="link"> Džinnid <span class="amount">26</span> </span> </a> </li><li class="item level2 nav-viskid even nav-15-6-3 ph-a-1248 "> <a href="https://www.selver.ee/joogid/kange-alkohol/viskid"> <span class="link"> Viskid <span class="amount">40</span> </span> </a> </li><li class="item level2 nav-konjakid-brandid odd nav-15-6-4 ph-a-1249 "> <a href="https://www.selver.ee/joogid/kange-alkohol/konjakid-brandid"> <span class="link"> Konjakid, brändid <span class="amount">74</span> </span> </a> </li><li class="item level2 nav-rummid even nav-15-6-5 ph-a-1250 "> <a href="https://www.selver.ee/joogid/kange-alkohol/rummid"> <span class="link"> Rummid <span class="amount">36</span> </span> </a> </li><li class="item level2 nav-aperitiiviid odd nav-15-6-6 ph-a-1251 "> <a href="https://www.selver.ee/joogid/kange-alkohol/aperitiiviid"> <span class="link"> Aperitiiviid <span class="amount">12</span> </span> </a> </li><li class="item level2 nav-likoorid even nav-15-6-7 ph-a-1252 "> <a href="https://www.selver.ee/joogid/kange-alkohol/likoorid"> <span class="link"> Liköörid <span class="amount">59</span> </span> </a> </li><li class="item level2 nav-muud-kanged-alkohoolsed-joogid odd last nav-15-6-8 ph-a-1253 "> <a href="https://www.selver.ee/joogid/kange-alkohol/muud-kanged-alkohoolsed-joogid"> <span class="link"> Muud kanged alkohoolsed joogid <span class="amount">8</span> </span> </a> </li> </ul> </li><li class="item level1 nav-valgumihklid-ja-tikud even last parent nav-15-7 ph-a-1133 ph-b-1133 ph-s-1133 "> <a href="https://www.selver.ee/joogid/valgumihklid-ja-tikud"> <span class="link" data-showall-txt="Näita kõiki"> Välgumihklid ja tikud </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/joogid/valgumihklid-ja-tikud"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-valgumihklid-ja-tikud even first nav-15-7-1 ph-a-1268 "> <a href="https://www.selver.ee/joogid/valgumihklid-ja-tikud/valgumihklid-ja-tikud"> <span class="link"> Välgumihklid ja tikud <span class="amount">4</span> </span> </a> </li> </ul> </li> </ul> </li><li class="item level0 nav-lastekaubad odd parent nav-16 active open "> <a href="https://www.selver.ee/lastekaubad"> <span class="link"> Lastekaubad </span> </a> <ul> <li class="item level1 nav-lastetoidud even first nav-16-1 active show-all "> <a href="https://www.selver.ee/lastekaubad/lastetoidud"> <span class="link"> Lastetoidud <span class="amount">169</span> </span> </a> </li><li class="item level1 nav-mahkmed odd nav-16-2 ph-a-1283 ph-s-1283 "> <a href="https://www.selver.ee/lastekaubad/mahkmed"> <span class="link"> Mähkmed <span class="amount">105</span> </span> </a> </li><li class="item level1 nav-beebi-hooldusvahendid even nav-16-3 ph-a-1284 ph-s-1284 "> <a href="https://www.selver.ee/lastekaubad/beebi-hooldusvahendid"> <span class="link"> Beebi hooldusvahendid <span class="amount">53</span> </span> </a> </li><li class="item level1 nav-tarvikud odd nav-16-4 ph-a-1285 ph-s-1285 "> <a href="https://www.selver.ee/lastekaubad/tarvikud"> <span class="link"> Tarvikud <span class="amount">29</span> </span> </a> </li><li class="item level1 nav-laste-sokid-sukad-pesu even last nav-16-5 ph-a-1288 ph-s-1288 "> <a href="https://www.selver.ee/lastekaubad/laste-sokid-sukad-pesu"> <span class="link"> Laste sokid, sukad, pesu <span class="amount">11</span> </span> </a> </li> </ul> </li><li class="item level0 nav-lemmiklooma-kaubad even parent nav-17 ph-a-1137 ph-b-1137 "> <a href="https://www.selver.ee/lemmiklooma-kaubad"> <span class="link"> Lemmikloomakaubad </span> </a> <ul> <li class="item level1 nav-kassitoidud even first nav-17-1 ph-a-1289 ph-s-1289 "> <a href="https://www.selver.ee/lemmiklooma-kaubad/kassitoidud"> <span class="link"> Kassitoidud <span class="amount">89</span> </span> </a> </li><li class="item level1 nav-koeratoidud odd nav-17-2 ph-a-1290 ph-s-1290 "> <a href="https://www.selver.ee/lemmiklooma-kaubad/koeratoidud"> <span class="link"> Koeratoidud <span class="amount">46</span> </span> </a> </li><li class="item level1 nav-vaikeloomatoidud even nav-17-3 ph-a-1291 ph-s-1291 "> <a href="https://www.selver.ee/lemmiklooma-kaubad/vaikeloomatoidud"> <span class="link"> Väikeloomatoidud <span class="amount">5</span> </span> </a> </li><li class="item level1 nav-kala-ja-linnutoidud odd nav-17-4 ph-a-1292 ph-s-1292 "> <a href="https://www.selver.ee/lemmiklooma-kaubad/kala-ja-linnutoidud"> <span class="link"> Kala- ja linnutoidud <span class="amount">3</span> </span> </a> </li><li class="item level1 nav-lemmikloomatarbed even last nav-17-5 ph-a-1293 ph-s-1293 "> <a href="https://www.selver.ee/lemmiklooma-kaubad/lemmikloomatarbed"> <span class="link"> Lemmikloomatarbed <span class="amount">16</span> </span> </a> </li> </ul> </li><li class="item level0 nav-enesehooldustarbed odd parent nav-18 ph-a-1111 ph-b-1111 "> <a href="https://www.selver.ee/enesehooldustarbed"> <span class="link"> Enesehooldustarbed </span> </a> <ul> <li class="item level1 nav-suuhooldus even first parent nav-18-1 ph-a-1138 ph-b-1138 ph-s-1138 "> <a href="https://www.selver.ee/enesehooldustarbed/suuhooldus"> <span class="link" data-showall-txt="Näita kõiki"> Suuhooldus </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/suuhooldus"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-hambapastad-suuveed even first nav-18-1-1 ph-a-1294 "> <a href="https://www.selver.ee/enesehooldustarbed/suuhooldus/hambapastad-suuveed"> <span class="link"> Hambapastad, suuveed <span class="amount">103</span> </span> </a> </li><li class="item level2 nav-hambaharjad-hambaniidid odd last nav-18-1-2 ph-a-1453 "> <a href="https://www.selver.ee/enesehooldustarbed/suuhooldus/hambaharjad-hambaniidid"> <span class="link"> Hambaharjad, hambaniidid <span class="amount">41</span> </span> </a> </li> </ul> </li><li class="item level1 nav-naohooldus odd parent nav-18-2 ph-a-1139 ph-b-1139 ph-s-1139 "> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus"> <span class="link" data-showall-txt="Näita kõiki"> Näohooldus </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-naokreemid even first nav-18-2-1 ph-a-1295 "> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus/naokreemid"> <span class="link"> Näokreemid <span class="amount">54</span> </span> </a> </li><li class="item level2 nav-naopuhastus odd nav-18-2-2 ph-a-1296 "> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus/naopuhastus"> <span class="link"> Näopuhastus <span class="amount">39</span> </span> </a> </li><li class="item level2 nav-hugieenilised-salvratikud-vatid even nav-18-2-3 ph-a-1297 "> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus/hugieenilised-salvratikud-vatid"> <span class="link"> Hügieenilised salvrätikud, vatid <span class="amount">15</span> </span> </a> </li><li class="item level2 nav-meeste-naohooldus odd last nav-18-2-4 ph-a-1438 "> <a href="https://www.selver.ee/enesehooldustarbed/naohooldus/meeste-naohooldus"> <span class="link"> Meeste näohooldus <span class="amount">35</span> </span> </a> </li> </ul> </li><li class="item level1 nav-juuksehooldus even parent nav-18-3 ph-a-1140 ph-b-1140 ph-s-1140 "> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus"> <span class="link" data-showall-txt="Näita kõiki"> Juuksehooldus </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-shampoonid-palsamid-maskid even first nav-18-3-1 ph-a-1299 "> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus/shampoonid-palsamid-maskid"> <span class="link"> Šampoonid, palsamid, maskid <span class="amount">146</span> </span> </a> </li><li class="item level2 nav-soengutugevdajad odd nav-18-3-2 ph-a-1300 "> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus/soengutugevdajad"> <span class="link"> Soengutugevdajad <span class="amount">17</span> </span> </a> </li><li class="item level2 nav-juuksevarvid even nav-18-3-3 ph-a-1301 "> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus/juuksevarvid"> <span class="link"> Juuksevärvid <span class="amount">73</span> </span> </a> </li><li class="item level2 nav-juukseharjad-kammid-kummid odd last nav-18-3-4 ph-a-1302 "> <a href="https://www.selver.ee/enesehooldustarbed/juuksehooldus/juukseharjad-kammid-kummid"> <span class="link"> Juukseharjad, kammid, kummid <span class="amount">3</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kehahooldus odd parent nav-18-4 ph-a-1141 ph-b-1141 ph-s-1141 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus"> <span class="link" data-showall-txt="Näita kõiki"> Kehahooldus </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-dushigeelid-seebid even first nav-18-4-1 ph-a-1303 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/dushigeelid-seebid"> <span class="link"> Dušigeelid, seebid <span class="amount">109</span> </span> </a> </li><li class="item level2 nav-kehakreemid-ihupiimad odd nav-18-4-2 ph-a-1304 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/kehakreemid-ihupiimad"> <span class="link"> Kehakreemid, ihupiimad <span class="amount">34</span> </span> </a> </li><li class="item level2 nav-paevituskosmeetika even nav-18-4-3 ph-a-1305 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/paevituskosmeetika"> <span class="link"> Päevituskosmeetika <span class="amount">14</span> </span> </a> </li><li class="item level2 nav-raseerimis-ja-epileerimistarbed odd nav-18-4-4 ph-a-1306 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/raseerimis-ja-epileerimistarbed"> <span class="link"> Raseerimis- ja epileerimistarbed <span class="amount">13</span> </span> </a> </li><li class="item level2 nav-manikuuri-ja-pedikuuri-vahendid even nav-18-4-5 ph-a-1307 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/manikuuri-ja-pedikuuri-vahendid"> <span class="link"> Maniküüri ja pediküüri vahendid <span class="amount">2</span> </span> </a> </li><li class="item level2 nav-higistamisvastased-tarbed odd nav-18-4-6 ph-a-1308 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/higistamisvastased-tarbed"> <span class="link"> Higistamisvastased tarbed <span class="amount">52</span> </span> </a> </li><li class="item level2 nav-hugieenilised-salvratikud-vatid even nav-18-4-7 ph-a-1309 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/hugieenilised-salvratikud-vatid"> <span class="link"> Hügieenilised salvrätikud, vatid <span class="amount">30</span> </span> </a> </li><li class="item level2 nav-plaastrid odd nav-18-4-8 ph-a-1310 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/plaastrid"> <span class="link"> Plaastrid <span class="amount">5</span> </span> </a> </li><li class="item level2 nav-intiimhugieen even nav-18-4-9 ph-a-1311 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/intiimhugieen"> <span class="link"> Intiimhügieen <span class="amount">83</span> </span> </a> </li><li class="item level2 nav-lohnad-tualettveed odd nav-18-4-10 ph-a-1316 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/lohnad-tualettveed"> <span class="link"> Lõhnad, tualettveed <span class="amount">8</span> </span> </a> </li><li class="item level2 nav-meeste-kehahooldus even last nav-18-4-11 ph-a-1439 "> <a href="https://www.selver.ee/enesehooldustarbed/kehahooldus/meeste-kehahooldus"> <span class="link"> Meeste kehahooldus <span class="amount">15</span> </span> </a> </li> </ul> </li><li class="item level1 nav-dekoratiivkosmeetikatooted even parent nav-18-5 ph-a-1142 ph-b-1142 ph-s-1142 "> <a href="https://www.selver.ee/enesehooldustarbed/dekoratiivkosmeetikatooted"> <span class="link" data-showall-txt="Näita kõiki"> Dekoratiivkosmeetikatooted </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/dekoratiivkosmeetikatooted"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-huule-ja-silmavarvid even first nav-18-5-1 ph-a-1312 "> <a href="https://www.selver.ee/enesehooldustarbed/dekoratiivkosmeetikatooted/huule-ja-silmavarvid"> <span class="link"> Huule- ja silmavärvid <span class="amount">5</span> </span> </a> </li><li class="item level2 nav-kosmeetika-abivahendid odd nav-18-5-4 ph-a-1315 "> <a href="https://www.selver.ee/enesehooldustarbed/dekoratiivkosmeetikatooted/kosmeetika-abivahendid"> <span class="link"> Kosmeetika abivahendid <span class="amount">3</span> </span> </a> </li><li class="item level2 nav-hugieenilised-salvratikud-vatid even last nav-18-5-5 ph-a-1317 "> <a href="https://www.selver.ee/enesehooldustarbed/dekoratiivkosmeetikatooted/hugieenilised-salvratikud-vatid"> <span class="link"> Hügieenilised salvrätikud, vatid <span class="amount">15</span> </span> </a> </li> </ul> </li><li class="item level1 nav-tervisekaubad odd last parent nav-18-6 ph-a-1122 ph-b-1122 ph-s-1122 "> <a href="https://www.selver.ee/enesehooldustarbed/tervisekaubad"> <span class="link" data-showall-txt="Näita kõiki"> Tervisekaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/enesehooldustarbed/tervisekaubad"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-tervisekaubad even first nav-18-6-1 ph-a-1219 "> <a href="https://www.selver.ee/enesehooldustarbed/tervisekaubad/tervisekaubad"> <span class="link"> Tervisekaubad <span class="amount">88</span> </span> </a> </li><li class="item level2 nav-apteegikaubad odd last nav-18-6-2 ph-a-1220 "> <a href="https://www.selver.ee/enesehooldustarbed/tervisekaubad/apteegikaubad"> <span class="link"> Apteegikaubad <span class="amount">61</span> </span> </a> </li> </ul> </li> </ul> </li><li class="item level0 nav-majapidamis-ja-kodukaubad even parent nav-19 ph-a-1112 ph-b-1112 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad"> <span class="link"> Majapidamis- ja kodukaubad </span> </a> <ul> <li class="item level1 nav-paberitooted even first parent nav-19-1 ph-a-1143 ph-b-1143 ph-s-1143 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/paberitooted"> <span class="link" data-showall-txt="Näita kõiki"> Paberitooted </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/paberitooted"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-majapidamispaberid even first nav-19-1-1 ph-a-1318 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/paberitooted/majapidamispaberid"> <span class="link"> Majapidamispaberid <span class="amount">25</span> </span> </a> </li><li class="item level2 nav-tualettpaberid odd nav-19-1-2 ph-a-1319 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/paberitooted/tualettpaberid"> <span class="link"> Tualettpaberid <span class="amount">30</span> </span> </a> </li><li class="item level2 nav-salvratikud-laudlinad even last nav-19-1-3 ph-a-1320 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/paberitooted/salvratikud-laudlinad"> <span class="link"> Salvrätikud, laudlinad <span class="amount">9</span> </span> </a> </li> </ul> </li><li class="item level1 nav-puhastus-ja-koristusvahendid odd parent nav-19-2 ph-a-1144 ph-b-1144 ph-s-1144 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid"> <span class="link" data-showall-txt="Näita kõiki"> Puhastus-ja koristusvahendid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-noudepesuvahendid even first nav-19-2-1 ph-a-1323 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid/noudepesuvahendid"> <span class="link"> Nõudepesuvahendid <span class="amount">73</span> </span> </a> </li><li class="item level2 nav-svammid-harjad odd nav-19-2-2 ph-a-1324 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid/svammid-harjad"> <span class="link"> Svammid, harjad <span class="amount">44</span> </span> </a> </li><li class="item level2 nav-universaalsed-puhastusvahendid even nav-19-2-3 ph-a-1325 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid/universaalsed-puhastusvahendid"> <span class="link"> Universaalsed puhastusvahendid <span class="amount">13</span> </span> </a> </li><li class="item level2 nav-eriotstarbelised-puhastusvahendid odd nav-19-2-4 ph-a-1326 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid/eriotstarbelised-puhastusvahendid"> <span class="link"> Eriotstarbelised puhastusvahendid <span class="amount">176</span> </span> </a> </li><li class="item level2 nav-prugikotid-tolmukotid even last nav-19-2-5 ph-a-1327 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/puhastus-ja-koristusvahendid/prugikotid-tolmukotid"> <span class="link"> Prügikotid, tolmukotid <span class="amount">21</span> </span> </a> </li> </ul> </li><li class="item level1 nav-roivaste-ja-jalatsite-hooldus even parent nav-19-3 ph-a-1145 ph-b-1145 ph-s-1145 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/roivaste-ja-jalatsite-hooldus"> <span class="link" data-showall-txt="Näita kõiki"> Rõivaste ja jalatsite hooldus </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/roivaste-ja-jalatsite-hooldus"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-pesupesemisvahendid even first nav-19-3-1 ph-a-1328 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/roivaste-ja-jalatsite-hooldus/pesupesemisvahendid"> <span class="link"> Pesupesemisvahendid <span class="amount">136</span> </span> </a> </li><li class="item level2 nav-roivaste-hoolduse-abivahendid odd nav-19-3-2 ph-a-1329 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/roivaste-ja-jalatsite-hooldus/roivaste-hoolduse-abivahendid"> <span class="link"> Rõivaste hoolduse abivahendid <span class="amount">7</span> </span> </a> </li><li class="item level2 nav-jalatsihooldusvahendid even last nav-19-3-3 ph-a-1330 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/roivaste-ja-jalatsite-hooldus/jalatsihooldusvahendid"> <span class="link"> Jalatsihooldusvahendid <span class="amount">11</span> </span> </a> </li> </ul> </li><li class="item level1 nav-muud-majapidamise-kaubad odd parent nav-19-4 ph-a-1146 ph-b-1146 ph-s-1146 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/muud-majapidamise-kaubad"> <span class="link" data-showall-txt="Näita kõiki"> Muud majapidamise kaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/muud-majapidamise-kaubad"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-parasiitide-torjevahendid odd nav-19-4-2 ph-a-1333 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/muud-majapidamise-kaubad/parasiitide-torjevahendid"> <span class="link"> Parasiitide tõrjevahendid <span class="amount">24</span> </span> </a> </li><li class="item level2 nav-elektripirnid-pikendusjuhtmed even nav-19-4-3 ph-a-1334 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/muud-majapidamise-kaubad/elektripirnid-pikendusjuhtmed"> <span class="link"> Elektripirnid, pikendusjuhtmed <span class="amount">38</span> </span> </a> </li><li class="item level2 nav-patareid odd last nav-19-4-4 ph-a-1335 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/muud-majapidamise-kaubad/patareid"> <span class="link"> Patareid <span class="amount">16</span> </span> </a> </li> </ul> </li><li class="item level1 nav-koogitarbed even parent nav-19-5 ph-a-1147 ph-b-1147 ph-s-1147 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed"> <span class="link" data-showall-txt="Näita kõiki"> Köögitarbed </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-potid-pannid-koogivormid odd nav-19-5-2 ph-a-1336 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/potid-pannid-koogivormid"> <span class="link"> Potid, pannid, koogivormid <span class="amount">1</span> </span> </a> </li><li class="item level2 nav-muud-koogitarbed odd nav-19-5-4 ph-a-1338 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/muud-koogitarbed"> <span class="link"> Muud köögitarbed <span class="amount">2</span> </span> </a> </li><li class="item level2 nav-fooliumid-kiled-kupsetuspaberid even nav-19-5-5 ph-a-1339 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/fooliumid-kiled-kupsetuspaberid"> <span class="link"> Fooliumid, kiled, küpsetuspaberid <span class="amount">35</span> </span> </a> </li><li class="item level2 nav-grillimistarvikud odd nav-19-5-6 ph-a-1340 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/grillimistarvikud"> <span class="link"> Grillimistarvikud <span class="amount">21</span> </span> </a> </li><li class="item level2 nav-taldrikud-vaagnad-tassid-klaasid even nav-19-5-7 ph-a-1341 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/taldrikud-vaagnad-tassid-klaasid"> <span class="link"> Taldrikud, vaagnad, tassid, klaasid <span class="amount">2</span> </span> </a> </li><li class="item level2 nav-peokaubad even nav-19-5-9 ph-a-1343 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/peokaubad"> <span class="link"> Peokaubad <span class="amount">26</span> </span> </a> </li><li class="item level2 nav-uhekordsed-noud odd nav-19-5-10 ph-a-1344 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/uhekordsed-noud"> <span class="link"> Ühekordsed nõud <span class="amount">40</span> </span> </a> </li><li class="item level2 nav-sailitamise-ja-hoidistamisetarbed even last nav-19-5-11 ph-a-1345 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/koogitarbed/sailitamise-ja-hoidistamisetarbed"> <span class="link"> Säilitamise- ja hoidistamisetarbed <span class="amount">6</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kodutehnika odd parent nav-19-6 ph-a-1148 ph-b-1148 ph-s-1148 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika"> <span class="link" data-showall-txt="Näita kõiki"> Kodutehnika </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-elektrilised-hambaharjad even first nav-19-6-1 ph-a-1348 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/elektrilised-hambaharjad"> <span class="link"> Elektrilised hambaharjad <span class="amount">27</span> </span> </a> </li><li class="item level2 nav-koogitehnika odd nav-19-6-2 ph-a-1346 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/koogitehnika"> <span class="link"> Köögitehnika <span class="amount">51</span> </span> </a> </li><li class="item level2 nav-ilutooted even nav-19-6-3 ph-a-1349 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/ilutooted"> <span class="link"> Ilutooted <span class="amount">24</span> </span> </a> </li><li class="item level2 nav-vaike-kodutehnika odd nav-19-6-4 ph-a-1350 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/vaike-kodutehnika"> <span class="link"> Väike kodutehnika <span class="amount">19</span> </span> </a> </li><li class="item level2 nav-patareid even nav-19-6-5 ph-a-1352 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/patareid"> <span class="link"> Patareid <span class="amount">15</span> </span> </a> </li><li class="item level2 nav-kodumasinad odd nav-19-6-6 ph-a-1501 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/kodumasinad"> <span class="link"> Kodumasinad <span class="amount">78</span> </span> </a> </li><li class="item level2 nav-konsoolid-ja-mangud even last nav-19-6-7 ph-a-1502 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/kodutehnika/konsoolid-ja-mangud"> <span class="link"> Konsoolid ja mängud <span class="amount">35</span> </span> </a> </li> </ul> </li><li class="item level1 nav-vannitoa-ja-saunatarvikud even parent nav-19-7 ph-a-1149 ph-b-1149 ph-s-1149 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/vannitoa-ja-saunatarvikud"> <span class="link" data-showall-txt="Näita kõiki"> Vannitoa- ja saunatarvikud </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/vannitoa-ja-saunatarvikud"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-saunatarbed even first nav-19-7-1 ph-a-1353 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/vannitoa-ja-saunatarvikud/saunatarbed"> <span class="link"> Saunatarbed <span class="amount">4</span> </span> </a> </li><li class="item level2 nav-pesemistarbed even nav-19-7-3 ph-a-1355 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/vannitoa-ja-saunatarvikud/pesemistarbed"> <span class="link"> Pesemistarbed <span class="amount">2</span> </span> </a> </li> </ul> </li><li class="item level1 nav-tekid-padjad-tekstiil odd parent nav-19-8 ph-a-1150 ph-b-1150 ph-s-1150 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil"> <span class="link" data-showall-txt="Näita kõiki"> Tekid, padjad, tekstiil </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-voodipesu odd nav-19-8-2 ph-a-1358 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil/voodipesu"> <span class="link"> Voodipesu <span class="amount">17</span> </span> </a> </li><li class="item level2 nav-voodikatted-dekoratiivpadjad even nav-19-8-3 ph-a-1359 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil/voodikatted-dekoratiivpadjad"> <span class="link"> Voodikatted, dekoratiivpadjad <span class="amount">1</span> </span> </a> </li><li class="item level2 nav-koogitekstiil odd nav-19-8-4 ph-a-1360 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil/koogitekstiil"> <span class="link"> Köögitekstiil <span class="amount">2</span> </span> </a> </li><li class="item level2 nav-froteeratikud even last nav-19-8-5 ph-a-1361 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/tekid-padjad-tekstiil/froteeratikud"> <span class="link"> Froteerätikud <span class="amount">15</span> </span> </a> </li> </ul> </li><li class="item level1 nav-sisustuskaubad even parent nav-19-9 ph-a-1151 ph-b-1151 ph-s-1151 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/sisustuskaubad"> <span class="link" data-showall-txt="Näita kõiki"> Sisustuskaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/sisustuskaubad"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-kuunlad-lambiolid odd nav-19-9-4 ph-a-1365 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/sisustuskaubad/kuunlad-lambiolid"> <span class="link"> Küünlad, lambiõlid <span class="amount">10</span> </span> </a> </li> </ul> </li><li class="item level1 nav-aiakaubad odd last parent nav-19-10 ph-a-1402 ph-b-1402 ph-s-1402 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/aiakaubad"> <span class="link" data-showall-txt="Näita kõiki"> Aiakaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/aiakaubad"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-poti-ja-loikelilled even first nav-19-10-1 ph-a-1423 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/aiakaubad/poti-ja-loikelilled"> <span class="link"> Poti- ja lõikelilled <span class="amount">8</span> </span> </a> </li><li class="item level2 nav-vaetised-mullad-murgid odd nav-19-10-2 ph-a-1424 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/aiakaubad/vaetised-mullad-murgid"> <span class="link"> Väetised, mullad, mürgid <span class="amount">30</span> </span> </a> </li><li class="item level2 nav-aiatooriistad odd last nav-19-10-4 ph-a-1427 "> <a href="https://www.selver.ee/majapidamis-ja-kodukaubad/aiakaubad/aiatooriistad"> <span class="link"> Aiatööriistad <span class="amount">76</span> </span> </a> </li> </ul> </li> </ul> </li><li class="item level0 nav-vabaajakaubad odd parent nav-20 ph-a-1113 ph-b-1113 "> <a href="https://www.selver.ee/vabaajakaubad"> <span class="link"> Vabaajakaubad </span> </a> <ul> <li class="item level1 nav-autokaubad even first parent nav-20-1 ph-a-1398 ph-b-1398 ph-s-1398 "> <a href="https://www.selver.ee/vabaajakaubad/autokaubad-1"> <span class="link" data-showall-txt="Näita kõiki"> Autokaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/autokaubad-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-autokaubad even first nav-20-1-1 ph-a-1407 "> <a href="https://www.selver.ee/vabaajakaubad/autokaubad-1/autokaubad"> <span class="link"> Autokaubad <span class="amount">12</span> </span> </a> </li><li class="item level2 nav-auto-klaasipesuvedelikud odd last nav-20-1-2 ph-a-1409 "> <a href="https://www.selver.ee/vabaajakaubad/autokaubad-1/auto-klaasipesuvedelikud"> <span class="link"> Auto klaasipesuvedelikud <span class="amount">2</span> </span> </a> </li> </ul> </li><li class="item level1 nav-garderoobikaubad odd parent nav-20-2 ph-a-1399 ph-b-1399 ph-s-1399 "> <a href="https://www.selver.ee/vabaajakaubad/garderoobikaubad-1"> <span class="link" data-showall-txt="Näita kõiki"> Garderoobikaubad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/garderoobikaubad-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-naiste-sokid-sukad even first nav-20-2-1 ph-a-1411 "> <a href="https://www.selver.ee/vabaajakaubad/garderoobikaubad-1/naiste-sokid-sukad"> <span class="link"> Naiste sokid, sukad <span class="amount">62</span> </span> </a> </li><li class="item level2 nav-meeste-sokid-pesu odd nav-20-2-2 ph-a-1413 "> <a href="https://www.selver.ee/vabaajakaubad/garderoobikaubad-1/meeste-sokid-pesu"> <span class="link"> Meeste sokid, pesu <span class="amount">13</span> </span> </a> </li><li class="item level2 nav-laste-sokid-sukad-pesu even last nav-20-2-3 ph-a-1415 "> <a href="https://www.selver.ee/vabaajakaubad/garderoobikaubad-1/laste-sokid-sukad-pesu"> <span class="link"> Laste sokid, sukad, pesu <span class="amount">6</span> </span> </a> </li> </ul> </li><li class="item level1 nav-manguasjad even parent nav-20-3 ph-a-1400 ph-b-1400 ph-s-1400 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1"> <span class="link" data-showall-txt="Näita kõiki"> Mänguasjad </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-lego even first nav-20-3-1 ph-a-1462 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1/lego"> <span class="link"> LEGO <span class="amount">1</span> </span> </a> </li><li class="item level2 nav-tudrukute-manguasjad odd nav-20-3-2 ph-a-1419 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1/tudrukute-manguasjad"> <span class="link"> Tüdrukute mänguasjad <span class="amount">13</span> </span> </a> </li><li class="item level2 nav-poiste-manguasjad odd nav-20-3-4 ph-a-1426 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1/poiste-manguasjad"> <span class="link"> Poiste mänguasjad <span class="amount">5</span> </span> </a> </li><li class="item level2 nav-sport-ja-hooajamangud even nav-20-3-5 ph-a-1429 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1/sport-ja-hooajamangud"> <span class="link"> Sport- ja hooajamängud <span class="amount">40</span> </span> </a> </li><li class="item level2 nav-lauamangud-pusled-kleepsud odd nav-20-3-6 ph-a-1430 "> <a href="https://www.selver.ee/vabaajakaubad/manguasjad-1/lauamangud-pusled-kleepsud"> <span class="link"> Lauamängud, pusled, kleepsud <span class="amount">33</span> </span> </a> </li> </ul> </li><li class="item level1 nav-kontori-ja-koolitarbed odd parent nav-20-4 ph-a-1401 ph-b-1401 ph-s-1401 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1"> <span class="link" data-showall-txt="Näita kõiki"> Kontori- ja koolitarbed </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-vihikud-markmikud-kirjutustarbed even first nav-20-4-1 ph-a-1431 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1/vihikud-markmikud-kirjutustarbed"> <span class="link"> Vihikud, märkmikud, kirjutustarbed <span class="amount">83</span> </span> </a> </li><li class="item level2 nav-kasitootarbed-hobikunst odd nav-20-4-2 ph-a-1433 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1/kasitootarbed-hobikunst"> <span class="link"> Käsitöötarbed, hobikunst <span class="amount">20</span> </span> </a> </li><li class="item level2 nav-burootehnika even nav-20-4-3 ph-a-1435 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1/burootehnika"> <span class="link"> Bürootehnika <span class="amount">6</span> </span> </a> </li><li class="item level2 nav-burootarbed odd nav-20-4-4 ph-a-1436 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1/burootarbed"> <span class="link"> Bürootarbed <span class="amount">32</span> </span> </a> </li><li class="item level2 nav-arvuti-ja-koolikotid-pinalid even last nav-20-4-5 ph-a-1437 "> <a href="https://www.selver.ee/vabaajakaubad/kontori-ja-koolitarbed-1/arvuti-ja-koolikotid-pinalid"> <span class="link"> Arvuti- ja koolikotid, pinalid <span class="amount">3</span> </span> </a> </li> </ul> </li><li class="item level1 nav-sportimisevahendid even parent nav-20-5 ph-a-1403 ph-b-1403 ph-s-1403 "> <a href="https://www.selver.ee/vabaajakaubad/sportimisevahendid-1"> <span class="link" data-showall-txt="Näita kõiki"> Sportimisevahendid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/sportimisevahendid-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-sisespordivahendid odd nav-20-5-2 ph-a-1417 "> <a href="https://www.selver.ee/vabaajakaubad/sportimisevahendid-1/sisespordivahendid"> <span class="link"> Sisespordivahendid <span class="amount">10</span> </span> </a> </li><li class="item level2 nav-toidulisandid even last nav-20-5-3 ph-a-1418 "> <a href="https://www.selver.ee/vabaajakaubad/sportimisevahendid-1/toidulisandid"> <span class="link"> Toidulisandid <span class="amount">21</span> </span> </a> </li> </ul> </li><li class="item level1 nav-reisi-ja-matkatarbed odd parent nav-20-6 ph-a-1404 ph-b-1404 ph-s-1404 "> <a href="https://www.selver.ee/vabaajakaubad/reisi-ja-matkatarbed-1"> <span class="link" data-showall-txt="Näita kõiki"> Reisi- ja matkatarbed </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/reisi-ja-matkatarbed-1"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-rannatarbed-ujumistarbed even first nav-20-6-1 ph-a-1406 "> <a href="https://www.selver.ee/vabaajakaubad/reisi-ja-matkatarbed-1/rannatarbed-ujumistarbed"> <span class="link"> Rannatarbed, ujumistarbed <span class="amount">1</span> </span> </a> </li><li class="item level2 nav-matkatarbed odd nav-20-6-2 ph-a-1408 "> <a href="https://www.selver.ee/vabaajakaubad/reisi-ja-matkatarbed-1/matkatarbed"> <span class="link"> Matkatarbed <span class="amount">8</span> </span> </a> </li><li class="item level2 nav-harrastustarbed-ja-tehnika odd last nav-20-6-4 ph-a-1410 "> <a href="https://www.selver.ee/vabaajakaubad/reisi-ja-matkatarbed-1/harrastustarbed-ja-tehnika"> <span class="link"> Harrastustarbed ja -tehnika <span class="amount">1</span> </span> </a> </li> </ul> </li><li class="item level1 nav-raamatud-ajakirjad even parent nav-20-7 ph-a-1454 ph-b-1454 ph-s-1454 "> <a href="https://www.selver.ee/vabaajakaubad/raamatud-ajakirjad"> <span class="link" data-showall-txt="Näita kõiki"> Raamatud, ajalehed, ajakirjad ja kõnekaardid </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/raamatud-ajakirjad"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-ajakirjad even first nav-20-7-1 ph-a-1455 "> <a href="https://www.selver.ee/vabaajakaubad/raamatud-ajakirjad/ajakirjad"> <span class="link"> Ajalehed ja ajakirjad <span class="amount">20</span> </span> </a> </li> </ul> </li><li class="item level1 nav-meedia odd last parent nav-20-8 ph-a-1489 ph-b-1489 ph-s-1489 "> <a href="https://www.selver.ee/vabaajakaubad/meedia"> <span class="link" data-showall-txt="Näita kõiki"> Meedia </span> </a> <ul> <li class="item level2 show-all-desktop"> <a href="https://www.selver.ee/vabaajakaubad/meedia"> <span class="link bold">Näita kõiki<i data-icon="roundedarrow-right"></i></span> </a> </li> <li class="item level2 nav-audiotehnika even first nav-20-8-1 ph-a-1490 "> <a href="https://www.selver.ee/vabaajakaubad/meedia/audiotehnika"> <span class="link"> Audiotehnika <span class="amount">11</span> </span> </a> </li><li class="item level2 nav-arvutitehnika odd last nav-20-8-2 ph-a-1491 "> <a href="https://www.selver.ee/vabaajakaubad/meedia/arvutitehnika"> <span class="link"> Arvutitehnika <span class="amount">8</span> </span> </a> </li> </ul> </li> </ul> </li><li class="item level0 nav-hooaja-ja-puhadekaubad odd last parent nav-22 ph-a-1467 ph-b-1467 "> <a href="https://www.selver.ee/hooaja-ja-puhadekaubad"> <span class="link"> Hooaja- ja pühadekaubad </span> </a> <ul> <li class="item level1 nav-kevadekaubad even first nav-22-1 ph-a-1480 ph-s-1480 "> <a href="https://www.selver.ee/hooaja-ja-puhadekaubad/kevadekaubad"> <span class="link"> Kevadekaubad <span class="amount">89</span> </span> </a> </li> </ul> </li>    </ul>
</nav>            </div>
            <div class="col-main col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <nav id="breadcrumbs" class="hidden-xs">
        <ul class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
                                        <li class="home" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                    <a href="https://www.selver.ee/" title="Mine avalehele" itemprop="item"><span>Avaleht</span></a>
                                    <meta itemprop="name" content="Avaleht" />
                    <meta itemprop="position" content="1" />
                </li>
                                                        <li class="category1136" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                    <a href="https://www.selver.ee/lastekaubad" title="" itemprop="item"><span>Lastekaubad</span></a>
                                    <meta itemprop="name" content="Lastekaubad" />
                    <meta itemprop="position" content="2" />
                </li>
                                                        <li class="category1282" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                    <a href="https://www.selver.ee/lastekaubad/lastetoidud" title="" itemprop="item"><span>Lastetoidud</span></a>
                                    <meta itemprop="name" content="Lastetoidud" />
                    <meta itemprop="position" content="3" />
                </li>
                                                        <li class="product" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                                    <strong>Aedviljapüree kanafileega 6+, PÕNN, 190 g</strong>
                                    <meta itemprop="name" content="Aedviljapüree kanafileega 6+, PÕNN, 190 g" />
                    <meta itemprop="position" content="4" />
                </li>
                                    </ul>
    </nav>
                <!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

  
<!-- ESI END DUMMY COMMENT [] -->
                


<script type="text/javascript">
    var optionsPrice = new Product.OptionsPrice([]);
</script>
<div id="simple-product-wrapper" class="product_view_wrapper product-type-simple" data-product-id="17523">
<div class="product-essential row" itemscope itemtype="http://schema.org/Product">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="product-media">
    <div class="product-image-wrapper">
        <p class="product-image" id="main-image-default">
            <a href="//m1.selver.ee/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740073071359.jpg" rel="group">
                                        <span class="product-image__badge product-image__badge--0" style="width:20%; height:20%;text-align: center; line-height: 60px;">
                    <span class="product-image__badge--label" style=""></span>
                    <img alt="" src="//www.selver.ee/media/amlabel/10Pysivalt_soodne_595x595.gif"/>
                </span>
                                                    <img src="//www.selver.ee/media/catalog/product/cache/1/image/409x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740073071359.jpg" alt="Aedviljapüree kanafileega 6+, PÕNN, 190 g" title="Aedviljapüree kanafileega 6+, PÕNN, 190 g" itemprop="image" />            </a>
        </p>
            </div>
    </div>                                <div class="hidden-xs"><p><span>Pilt on illustreeriv. Tegelik pakend, v&auml;rv ja vorm v&otilde;ivad erineda. Piltide kasutamine Selver ASi n&otilde;usolekuta keelatud.</span></p></div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 product-shop ">
        <div class="page-title" itemprop="name">
            <h1>Aedviljapüree kanafileega 6+, PÕNN, 190 g</h1>
        </div>
                            <div class="add-to-box">
                                    <form action="https://www.selver.ee/checkout/cart/add/" method="post" id="product_addtocart_form">
                                                <div class="no-display">
                            <input type="hidden" name="product" value="17523" />
                            <input type="hidden" name="related_product" id="related-products-field" value="" />
                            <input name="form_key" type="hidden" value="GQqsMdiRQRjQ1UWo" />
                        </div>
                                                <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                

    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    <div class="price-box">
                                                    <span class="regular-price left price" id="product-price-17523">
            <span itemprop="priceCurrency" content="EUR"></span>            <span itemprop="price" content="1.29">                    <span class="price">1,29 €</span>                </span>
            <span class="unit-price">6,79 €/kg</span>
        </span>
        
                    </div>

    </div>
                                                                
                                                                
<ul class="add-to-wishlist">
            <li class="js-wishlist-container" data-product-id="17523">
            <div class="wishlist-popup hidden"></div>
            <span class="wishlist-button__link" data-bind-id="17523">
                <i data-icon="heart"></i>
            </span>
        </li>
    </ul>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div class="add-to-cart" data-product-id="17523">
        <div class="inner clearfix">
                                                                    <div class="product-add-qty-container">
                        <div class="product-add-qty">
                            <span class="remove-item pointer"></span>
                            <input name="qty" id="qty" type="text" class="item-total-qty item-qty" name="item-17523" data-qty-step="1" data-qty-min="1" value="1" />
                            <span class="qty-info" data-unit-text="tk">
                                1                            </span>
                            <span class="add-item pointer"></span>
                        </div>
                    </div>
                                        <button type="button" title="Osta" id="product-addtocart-button" class="button btn-cart" onclick="productAddToCartForm.submit(this)">Osta</button>
        </div>
    </div>
                            </div>
                        </div>
                    </form>
                            </div>
                            


                    <div class="product-attributes-box">
        <table class="product-attributes" id="product-attribute-specs-table">
                            <tr>
                    <th class="label">Ribakood</th>
                    <td class="data">4740073071359</td>
                </tr>
                            <tr>
                    <th class="label">Tootja</th>
                    <td class="data">SALVEST</td>
                </tr>
                            <tr>
                    <th class="label">Päritolumaa</th>
                    <td class="data">Eesti</td>
                </tr>
                    </table>
    </div>
                <ul class="product-badges dietary-badges">
                    <li class="first">
                <a class="fancybox" href="#product-badges-info"><img src="//www.selver.ee/media/wysiwyg/gluteenivaba_40x40.jpg" alt="" /></a>
            </li>
                        <li>
                <a class="fancybox" href="#product-badges-info"><img src="//m1.selver.ee/media/wysiwyg/laktoosivaba_40x40.jpg" alt="" /></a>
            </li>
                    </ul>
        <div id="product-badges-info" class="product-badges-info std" style="display: none;">
            <p class="p1"><span>&nbsp;</span></p>
<table border="0">
<tbody>
<tr>
<td style="width: 50px;">
<p><strong><img alt="" src="//www.selver.ee/media/wysiwyg/gluteenivaba_40x40.jpg" /><br /></strong></p>
</td>
<td><strong>Gluteenivaba</strong>.&nbsp; Gluteen on nisus, rukkis, odras ja kaeras v&otilde;i nende ristandites ning nimetatud teraviljasaadustes olev valgufraktsioon, mida osa inimestest ei talu. Gluteenivabaks toiduks saab pidada k&otilde;iki toite, mis ei sisalda gluteeni v&otilde;i gluteenisisaldus on v&auml;iksem kui 20 mg/kg.</td>
</tr>
<tr>
<td>
<p><strong><img alt="" src="//m1.selver.ee/media/wysiwyg/laktoosivaba_40.jpg" /><br /></strong></p>
</td>
<td><strong>Laktoosivaba.</strong>&nbsp;Laktoos on piimasuhkur, mida osa inimestest ei talu. Laktoosivabad on tooted, milles laktoos on l&otilde;hustatud kaheks lihtsuhkruks - gl&uuml;koosiks ja galaktoosiks. Seet&otilde;ttu on need tooted veidi magusama maitsega.</td>
</tr>
<tr>
<td>
<p><img alt="" height="40" src="//www.selver.ee/media/wysiwyg/suhkruvaba_40x40.jpg" width="40" /></p>
</td>
<td><strong>Suhkruvaba.</strong>&nbsp;Suhkruvaba on toode, millest saadav energiasisaldus on m&auml;rkimisv&auml;&auml;rselt v&auml;iksem v&otilde;rreldes sama toote tavalise energiasisaldusega. Suhkruvaba toode ei sisalda &uuml;le 0,5 g suhkruid 100 g v&otilde;i 100 ml kohta.</td>
</tr>
<tr>
<td>
<p><strong><img alt="" src="//m1.selver.ee/media/wysiwyg/mahetoode_40x40.jpg" /></strong></p>
</td>
<td><strong>Mahe.</strong>&nbsp;Mahetoodetes ei ole kasutatud kunstlikke mineraalv&auml;etisi, taimekaitsevahendeid, s&auml;ilitusaineid ega toiduv&auml;rve. Liha- ja piimatoodetele antakse mahem&auml;rk, kui loomad saavad vabalt v&auml;ljas k&auml;ia ja v&auml;hemalt pool nende s&ouml;&ouml;dast on kasvatatud kunstv&auml;etisteta ja -kahjurit&otilde;rjevahenditeta.</td>
</tr>
<tr>
<td>
<p><img alt="" height="40" src="//www.selver.ee/media/wysiwyg/okotoode_40x40.jpg" width="40" /></p>
</td>
<td><strong>&Ouml;ko.</strong>&nbsp;&Ouml;ko-m&auml;rgistus antakse keskkonnas&otilde;bralikele toodetele ja teenustele.</td>
</tr>
<tr>
<td>
<p><strong><img alt="" src="//m1.selver.ee/media/wysiwyg/vegan_40.jpg" /></strong></p>
</td>
<td><strong>Vegan.&nbsp;</strong>Vegantoode ei sisalda liha-, muna- ja piimatooteid ega teisi loomseid saadusi (nagu n&auml;iteks želatiin ja mesi). Toode sobib taimetoitlastele.</td>
</tr>
</tbody>
</table>
<p class="p1"><span class="s1">&nbsp;</span></p>
<table border="0">
<tbody>
<tr>
<td style="width: 50px;">
<p><img src="//www.selver.ee/media/wysiwyg/tunnustatud_eesti_maitse.jpg" /></p>
</td>
<td><strong>Tunnustatud Eesti Maitse</strong> p&auml;ritolu- ja kvaliteedim&auml;rk ehk p&auml;&auml;sukesem&auml;rk antakse tootele, mille p&otilde;hitooraine on 100% eestimaise p&auml;ritoluga ning mis on edukalt l&auml;binud laboratoorse ja sensoorse hindamise.</td>
</tr>
<tr>
<td style="width: 50px;">
<p><img src="//m1.selver.ee/media/wysiwyg/t_istera-m_rgis.jpg" title="t&auml;istera" /></p>
</td>
<td><strong>T&auml;istera.</strong> Kasutatud teraviljast v&auml;hemalt 50% on t&auml;istera.</td>
</tr>
<tr>
<td>
<p><img src="//www.selver.ee/media/wysiwyg/e-poe_margid_saaremaa.jpg" title="saaremaa" /></p>
</td>
<td>
<p><strong>Tehtud Saaremaal.</strong></p>
</td>
</tr>
<tr>
<td>
<p><img src="//m1.selver.ee/media/wysiwyg/eesti_parim_toiduaine_40x40.jpg" /></p>
</td>
<td>
<p><strong>&nbsp;Eesti Parim Toiduaine </strong></p>
</td>
</tr>
<tr>
<td>
<p><img src="//www.selver.ee/media/wysiwyg/CMS/parim_lihatoode_2019.jpg" /></p>
</td>
<td>
<p><strong>Eesti Parim Lihatoode 2019</strong></p>
</td>
</tr>
</tbody>
</table>        </div>
        <div class="product-info-box">
                            <div class="item">
                    <h5 class="label active">
                        Tootekirjeldus                        <i data-icon="bigarrow-down"></i>
                    </h5>
                    <div class="data" style="display: block;">
                        <div class="cms-content"><span itemprop="description">
                            Aedviljapürees kanafileega kasutame ainult parimaid kodumaised tooraineid – Eesti porgand, kartul ja kanaliha. Lihaga püreedes leidub lapsele vajalikku valku ja rauda ning nendes kasutatav liha on kvaliteetne ja vähese rasvasisaldusega tailiha. Aedviljapüree kanafileega on gluteeni- ja laktoosivaba, samuti ei sisalda lisatud suhkrut või soola. Soovitame imikutele peale 6. elukuud.<br>                        </span></div>
                    </div>
                </div>
                                        <div class="item">
                    <h5 class="label">
                        Koostis                        <i data-icon="bigarrow-down"></i>
                    </h5>
                    <div class="data">
                        <div class="cms-content">
                            Vesi, porgand, kartul, suhkrumais, kanafilee 9%, sibul, rapsiõli, till. Aedviljade osakaal 61%.  <br>                        </div>
                    </div>
                </div>
                                        <div class="item">
        <h5 class="label">
            Toitumisalane teave            <i data-icon="bigarrow-down"></i>
        </h5>
        <div class="data">
            <table class="nutrition-table">
                                    <tr>
                        <th colspan="2" class="title">  100 grammi kohta:</th>
                    </tr>
                                                    <tr>
                        <th>Energiasisaldus (KJ/Kcal)</th>
                        <td>255,2kJ/61kcal</td>
                    </tr>
                                    <tr>
                        <th>Rasvad (g)</th>
                        <td>2,10</td>
                    </tr>
                                    <tr>
                        <th>Millest küllastunud rasvhapped (g)</th>
                        <td>0,20</td>
                    </tr>
                                    <tr>
                        <th>Süsivesikud (g)</th>
                        <td>7,40</td>
                    </tr>
                                    <tr>
                        <th>Millest suhkrud (g)</th>
                        <td>3,80</td>
                    </tr>
                                    <tr>
                        <th>Valgud (g)</th>
                        <td>3,10</td>
                    </tr>
                                    <tr>
                        <th>Sool (g)</th>
                        <td>0,06</td>
                    </tr>
                            </table>
            <div class="nutr-info"></div>
        </div>
    </div>
                            <div class="item">
                    <h5 class="label">
                        Säilitamine ja kasutamine                        <i data-icon="bigarrow-down"></i>
                    </h5>
                    <div class="data">
                        <div class="cms-content">
                            Avamata purki hoida 0...+20 °C. Avatud purki hoida kaanetatult külmikus ja tarbida ära 3 päeva jooksul. Segage toodet ning soojendage vajalik kogus ca 40°C-ni. Soovitame imikutele peale 6.elukuud. Alustada 1-2 tl päevas, kogust järk-järgult suurendades.                        </div>
                    </div>
                </div>
                                            </div>
    </div>
</div>

<div class="product-collateral">
    <h4>Sarnased tooted:</h4>
    <ol class="row products-grid" id="block-related">
                                                                <li class="col-lg-3 col-md-3 col-sm-4 col-xs-6 item " data-product-id="10088">
                 <div class="wishlist-popup hidden"></div> <a href="https://www.selver.ee/puree-ouna-porgandi-pastinaa-oko-ella-s-kitchen-120-g" title="Püree õuna-porgandi-pastinaa öko, ELLA'S KITCHEN, 120 g" class="product-image"> <img src="//m1.selver.ee/media/catalog/product/cache/1/small_image/228x/9df78eab33525d08d6e5fb8d27136e95/5/0/5060107330214.jpg" alt="Püree õuna-porgandi-pastinaa öko, ELLA'S KITCHEN, 120 g" /> </a> <div class="price-box"> <span class="regular-price left price" id="product-price-10088-related"> <span> <span class="price">1,99 €</span> </span> <span class="unit-price">16,58 €/kg</span> </span> </div> <h5 class="product-name"> <a href="//www.selver.ee/puree-ouna-porgandi-pastinaa-oko-ella-s-kitchen-120-g">Püree õuna-porgandi-pastinaa öko, ELLA'S KITCHEN, 120 g</a> </h5> <div class="actions clearfix"> <div class="product-add-qty-container"> <div class="product-add-qty"> <span class="remove-item pointer"></span> <input type="text" class="item-total-qty item-qty" name="item-10088" data-qty-step="1" data-qty-min="1" value="1" /> <span class="qty-info" data-unit-text="tk"> 1 </span> <span class="add-item pointer"></span> </div> </div> <div class="add-to-wishlist js-wishlist-container col-xs-2 col-md-3 col-lg-2" data-product-id="10088"> <span class="wishlist-button__link" data-bind-id="10088"> <i data-icon="heart"></i> </span> </div> <button type="button" title="Osta" class="button btn-cart simple-product col-xs-9 col-md-9 col-lg-10"> <i data-icon="cart"></i>Osta </button> </div>            </li>
                                                                    <li class="col-lg-3 col-md-3 col-sm-4 col-xs-6 item " data-product-id="10089">
                 <div class="wishlist-popup hidden"></div> <a href="https://www.selver.ee/brokkoli-pirni-hernepuree-oko-ella-s-kitchen-120-g" title="Brokkoli-pirni-hernepüree öko, ELLA'S KITCHEN, 120 g" class="product-image"> <img src="//m1.selver.ee/media/catalog/product/cache/1/small_image/228x/9df78eab33525d08d6e5fb8d27136e95/5/0/5060107330245.jpg" alt="Brokkoli-pirni-hernepüree öko, ELLA'S KITCHEN, 120 g" /> </a> <div class="price-box"> <span class="regular-price left price" id="product-price-10089-related"> <span> <span class="price">1,99 €</span> </span> <span class="unit-price">16,58 €/kg</span> </span> </div> <h5 class="product-name"> <a href="//www.selver.ee/brokkoli-pirni-hernepuree-oko-ella-s-kitchen-120-g">Brokkoli-pirni-hernepüree öko, ELLA'S KITCHEN, 120 g</a> </h5> <div class="actions clearfix"> <div class="product-add-qty-container"> <div class="product-add-qty"> <span class="remove-item pointer"></span> <input type="text" class="item-total-qty item-qty" name="item-10089" data-qty-step="1" data-qty-min="1" value="1" /> <span class="qty-info" data-unit-text="tk"> 1 </span> <span class="add-item pointer"></span> </div> </div> <div class="add-to-wishlist js-wishlist-container col-xs-2 col-md-3 col-lg-2" data-product-id="10089"> <span class="wishlist-button__link" data-bind-id="10089"> <i data-icon="heart"></i> </span> </div> <button type="button" title="Osta" class="button btn-cart simple-product col-xs-9 col-md-9 col-lg-10"> <i data-icon="cart"></i>Osta </button> </div>            </li>
                                                                    <li class="col-lg-3 col-md-3 col-sm-4 col-xs-6 item " data-product-id="7378">
                 <div class="wishlist-popup hidden"></div> <a href="https://www.selver.ee/veiselihapuree-bio-hipp-125-g" title="Veiselihapüree BIO, HIPP, 125 g" class="product-image"> <img src="//www.selver.ee/media/catalog/product/cache/1/small_image/228x/9df78eab33525d08d6e5fb8d27136e95/4/0/4062300266346.jpg" alt="Veiselihapüree BIO, HIPP, 125 g" /> </a> <div class="price-box"> <span class="regular-price left price" id="product-price-7378-related"> <span> <span class="price">2,69 €</span> </span> <span class="unit-price">21,52 €/kg</span> </span> </div> <h5 class="product-name"> <a href="//www.selver.ee/veiselihapuree-bio-hipp-125-g">Veiselihapüree BIO, HIPP, 125 g</a> </h5> <div class="actions clearfix"> <div class="product-add-qty-container"> <div class="product-add-qty"> <span class="remove-item pointer"></span> <input type="text" class="item-total-qty item-qty" name="item-7378" data-qty-step="1" data-qty-min="1" value="1" /> <span class="qty-info" data-unit-text="tk"> 1 </span> <span class="add-item pointer"></span> </div> </div> <div class="add-to-wishlist js-wishlist-container col-xs-2 col-md-3 col-lg-2" data-product-id="7378"> <span class="wishlist-button__link" data-bind-id="7378"> <i data-icon="heart"></i> </span> </div> <button type="button" title="Osta" class="button btn-cart simple-product col-xs-9 col-md-9 col-lg-10"> <i data-icon="cart"></i>Osta </button> </div>            </li>
                                                                    <li class="col-lg-3 col-md-3 col-sm-4 col-xs-6 item " data-product-id="14762">
                 <div class="wishlist-popup hidden"></div> <a href="https://www.selver.ee/koogiviljapuree-veiselihaga-6-ponn-110-g" title="Köögiviljapüree veiselihaga öko 6+, PÕNN, 110 g" class="product-image"> <img src="//www.selver.ee/media/catalog/product/cache/1/small_image/228x/9df78eab33525d08d6e5fb8d27136e95/4/7/4740073071083.jpg" alt="Köögiviljapüree veiselihaga öko 6+, PÕNN, 110 g" /> </a> <div class="price-box"> <span class="regular-price left price" id="product-price-14762-related"> <span> <span class="price">1,59 €</span> </span> <span class="unit-price">14,45 €/kg</span> </span> </div> <h5 class="product-name"> <a href="//www.selver.ee/koogiviljapuree-veiselihaga-6-ponn-110-g">Köögiviljapüree veiselihaga öko 6+, PÕNN, 110 g</a> </h5> <div class="actions clearfix"> <div class="product-add-qty-container"> <div class="product-add-qty"> <span class="remove-item pointer"></span> <input type="text" class="item-total-qty item-qty" name="item-14762" data-qty-step="1" data-qty-min="1" value="1" /> <span class="qty-info" data-unit-text="tk"> 1 </span> <span class="add-item pointer"></span> </div> </div> <div class="add-to-wishlist js-wishlist-container col-xs-2 col-md-3 col-lg-2" data-product-id="14762"> <span class="wishlist-button__link" data-bind-id="14762"> <i data-icon="heart"></i> </span> </div> <button type="button" title="Osta" class="button btn-cart simple-product col-xs-9 col-md-9 col-lg-10"> <i data-icon="cart"></i>Osta </button> </div>            </li>
                        </ol>


    </div>
</div>
<script type="text/javascript">
    //<![CDATA[
    var productAddToCartForm = new VarienForm('product_addtocart_form');
    productAddToCartForm.submit = function(button, url) {
        if (this.validator.validate()) {
            var form = this.form;
            var oldUrl = form.action;

            if (button && button != 'undefined') {
                selverAddToCart.onProductViewClick(button, form);
                return;
            }
            if (url) {
                form.action = url;
            }
            var e = null;
            try {
                this.form.submit();
            } catch (e) {
            }
            this.form.action = oldUrl;
            if (e) {
                throw e;
            }

            if (button && button != 'undefined') {
                button.disabled = true;
            }
        }
    }.bind(productAddToCartForm);

    productAddToCartForm.submitLight = function(button, url){
        if(this.validator) {
            var nv = Validation.methods;
            delete Validation.methods['required-entry'];
            delete Validation.methods['validate-one-required'];
            delete Validation.methods['validate-one-required-by-name'];
            // Remove custom datetime validators
            for (var methodName in Validation.methods) {
                if (methodName.match(/^validate-datetime-.*/i)) {
                    delete Validation.methods[methodName];
                }
            }

            if (this.validator.validate()) {
                if (url) {
                    this.form.action = url;
                }
                this.form.submit();
            }
            Object.extend(Validation.methods, nv);
        }
    }.bind(productAddToCartForm);
        //]]>
</script>            </div>
        </div>
    </div>
</div>
<div class="container-bottom">
    <div class="container">
        <footer id="footer" class="footer">
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                                            <h5 class="heading">
                            e-Selveri info                        </h5>
                        <div class="content">
                            <ul>
<li><a href="/kuidas-osta-e-selverist">Kuidas osta e-Selverist?</a></li>
<li><a href="/tarneviisid">Kojuvedu ja v&auml;ljastuspunkt</a></li>
<li><a href="/maksevoimalused">Maksev&otilde;imalused</a></li>
<li><a href="/e-selveri-tingimused/">e-Selveri m&uuml;&uuml;gitingimused</a></li>
<li><a href="/kkk">Korduma kippuvad k&uuml;simused</a></li>
<li><a href="/kontakt">e-Selveri klienditeenindus</a></li>
<li><a href="/arikliendile">&Auml;rikliendile</a></li>
<li><a href="https://www.selver.ee/b2bcustomer/account/login/" target="_self">Logi sisse lepingulise &auml;rikliendina</a></li>
</ul>
<p><a href="https://e-kaubanduseliit.ee/usaldusmargised/" target="_blank"><img alt="turvaline-ostukoht" src="//m1.selver.ee/media/wysiwyg/CMS/turvaline_ostukoht_must_94x94.jpg" style="margin: 20px 40px; float: left;" title="turvaline ostukoht" /></a></p>                        </div>
                                                        </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                                            <h5 class="heading">
                            Ettevõtte info                        </h5>
                        <div class="content">
                            <ul>
<li><a href="/selverist">Selveri ajalugu</a></li>
<li><a href="/valdkondade-juhid">Valdkondade juhid</a></li>
<li><a href="/partnerid">Selveri partnerid</a></li>
<li><a href="/juriidilised-andmed">Juriidilised andmed</a></li>
<li><a href="/sponsorlus">Sponsorlus</a></li>
<li><a href="/heategevus">Heategevus</a></li>
<li><a href="/kauplused" target="_self">Kauplused</a></li>
<li><a href="/tagasiside" target="_self">Tagasiside</a></li>
</ul>                        </div>
                                                        </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                                            <h5 class="heading">
                            Partnerile                        </h5>
                        <div class="content">
                            <ul>
<li><a href="/tugiteenuste-kontaktid">Tugiteenuste kontaktid</a></li>
<li><a href="/toidukaupade-ostujuhid">Toidukaupade ostujuhid</a></li>
<li><a href="/toostuskaupade-ostujuhid">T&ouml;&ouml;stuskaupade ostujuhid</a></li>
<li><a href="/reklaami-hinnakiri">Reklaami hinnakiri</a></li>
<li><a href="https://veeb.selver.ee/uuripinnad">&Uuml;&uuml;ripinnad</a></li>
<li><a href="https://www.tkmgroup.ee/investor/tallinna-kaubamaja-grupp-hea-aritava">Tallinna Kaubamaja Grupi hea &auml;ritava</a></li>
<li><a href="https://www.tkmgroup.ee/tallinna-kaubamaja-grupp-privaatsuspoliitika">Tallinna Kaubamaja Grupi privaatsuspoliitika</a></li>
</ul>                        </div>
                                                                <h5 class="heading">
                            Hea teada                        </h5>
                        <div class="content">
                            <ul>
<li><a href="/garantii-ja-pretensiooni-esitamine">Garantii ja pretensiooni esitamine</a></li>
<li><a href="/hinnasiltide-tahised">Hinnasiltide t&auml;hised kauplustes</a></li>
</ul>                        </div>
                                    </div>
                <div class="col-sm-3 col-md-3 col-lg-3 col-newsletter">
                                            <h5 class="heading">
                            Partnerkaart                        </h5>
                        <div class="content">
                            <ul>
<li><a href="https://www.partnerkaart.ee/et/mis-partnerprogramm" target="_blank">Miks on hea omada Partnerkaarti?</a></li>
<li><a href="https://www.partnerkaart.ee/et/partnerprogrammi-tingimused" target="_blank">Partnerprogrammi tingimused</a></li>
<li><a href="http://www.partnerkaart.ee/iseteenindus/">Partnerkaardi iseteenindus</a></li>
<li><a href="https://www.partnerkaart.ee/join" target="_blank">Telli endale Partnerkaart!</a></li>
<li><a href="http://www.partnerkaart.ee/iseteenindus/" target="_blank">Minu e-t&scaron;ekid</a></li>
<li><a href="http://www.partnerkaart.ee/iseteenindus/" target="_blank">Minu boonuspunktid</a></li>
</ul>                        </div>
                                                                <h5 class="heading">
                            Jälgi meid                        </h5>
                        <div class="content">
                            <ul>
<li><a href="https://www.facebook.com/selvereesti" target="_blank">Facebook</a></li>
<li><a href="https://www.instagram.com/selvereesti/" target="_blank">Instagram</a></li>
<li><a href="https://www.youtube.com/channel/UCJWEZjkNDr4ChJM7zakShHw" target="_blank">Youtube</a></li>
</ul>                        </div>
                                    </div>
            </div>
                            <div class="copyright"><p style="text-align: center;"><a href="https://www.selver.ee/" rel="nofollow">www.selver.ee</a><span>. K&otilde;ik &otilde;igused kaitstud.&nbsp;</span>Selver AS P&auml;rnu mnt. 238, Tallinn 11624, tel. 667 3800, faks 667 3801, <a href="/cdn-cgi/l/email-protection#80f3e5ecf6e5f2c0f3e5ecf6e5f2aee5e5"><span class="__cf_email__" data-cfemail="15667079637067556670796370673b7070">[email&#160;protected]</span></a>.<br /></p></div>
                                        <div class="footer_brands">
                    <div class="brand_image_container"><p><a title="Kaubamaja" href="http://www.kaubamaja.ee" target="_blank"><img title="Kaubamaja" alt="Kaubamaja" src="//www.selver.ee/media/wysiwyg/logo-kaubamaja_1_.png" /></a><a title="Selver" href="https://www.selver.ee" target="_blank"><img title="Selver" alt="Selver" src="//m1.selver.ee/media/wysiwyg/logo-selver_1_.png" /></a><a title="I.L.U." href="http://www.ilu.ee" target="_blank"><img title="I.L.U." alt="I.L.U." src="//www.selver.ee/media/wysiwyg/logo-ilu_1_.png" /></a><a title="ABC King" href="http://www.abcking.ee" target="_blank"><img title="ABC King" alt="ABC King" src="//m1.selver.ee/media/wysiwyg/logo-abcKing_1_.png" /></a>&nbsp; &nbsp; &nbsp;<a title="Shu" href="http://www.shu.ee" target="_blank"><img title="Shu" alt="Shu" src="//www.selver.ee/media/wysiwyg/logo-shu_1_.png" /></a><a title="Selveri K&ouml;&ouml;k" href="http://tellimine.selver.ee" target="_blank"><img title="Selveri K&ouml;&ouml;k" alt="Selveri K&ouml;&ouml;k" src="//m1.selver.ee/media/wysiwyg/logo-selverik66k_1_.png" /></a>&nbsp; &nbsp; &nbsp;<a title="Gurmee Catering" href="http://www.gurmeecatering.ee/" target="_blank"><img alt="" src="//www.selver.ee/media/wysiwyg/logo-gurmee_1_.png" /></a>&nbsp; &nbsp; &nbsp;<a title="Tartu Kaubamaja" href="http://www.tartukaubamaja.ee/" target="_blank"><img alt="" src="//m1.selver.ee/media/wysiwyg/logo-tartu.png" /></a><a title="Viimsi Keskus" href="http://viimsikeskus.ee/" target="_blank"><img alt="" src="//www.selver.ee/media/wysiwyg/logo-viimsi.png" /></a>&nbsp; &nbsp; &nbsp;<a title="Viking Motors" href="http://vikingmotors.ee/" target="_blank"><img alt="" src="//m1.selver.ee/media/wysiwyg/logo-vm.png" /></a><a title="Kia Tallinn" href="http://kiatallinn.ee/" target="_blank"><img alt="" src="//www.selver.ee/media/wysiwyg/logo-kia.png" /></a><a title="Viking Security" href="http://vikingsecurity.ee/2015/" target="_blank"><img alt="" src="//m1.selver.ee/media/wysiwyg/logo-viking.png" /></a></p></div>
                </div>
                    </footer>
    </div>
</div><!-- ESI START DUMMY COMMENT [] -->
<!-- ESI URL DUMMY COMMENT -->

 <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript">
    //<![CDATA[
    Enterprise.Wishlist.list = [];
    if (!Enterprise.Wishlist.url) {
        Enterprise.Wishlist.url = {};
    }
    Enterprise.Wishlist.url.create = 'https://www.selver.ee/wishlist/index/createwishlist/';
    Enterprise.Wishlist.canCreate = false;

    if (typeof tkmAddToWishlist!='undefined') {
        tkmAddToWishlist.setMultipleWishlistItems(Enterprise.Wishlist.list);
    }
    //]]>
</script>
 
<!-- ESI END DUMMY COMMENT [] -->
<script type="text/javascript">
        var allInputs = document.getElementsByTagName( 'input' );
    var klevu_current_version = '1.2.15';
    		(function () {
			// Remove Magento event observers from the search box
			// default magetno layout landing page 
			for( i = 0, len = allInputs.length; i < len; i++ ){
				if( allInputs[i].type === "text" || allInputs[i].type === "search" ){
					if( allInputs[i].name === "q" ||  allInputs[i].id === "search" ){
						var search_input = allInputs[i];
						search_input.stopObserving('click');
						search_input.stopObserving('keydown');
					}
				}
			}
		})();
		var klevu_storeLandingPageUrl = 'https://www.selver.ee/catalogsearch/result/'; 
		var klevu_showQuickSearchOnEnter=false;
    		// call store js
		var klevu_apiKey = 'klevu-14410928010151845',
			searchTextBoxName = 'search',
			klevu_lang = 'et',
			klevu_result_top_margin = '',
			klevu_result_left_margin = '';
		(function () { var ws = document.createElement('script'),kl_protocol =("https:"===document.location.protocol?"https://":"http://"); ws.type = 'text/javascript'; ws.async = true; ws.src = kl_protocol+'js.klevu.com/klevu-js-v1/js/klevu-webstore.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ws, s); })();
</script>
<script type="text/javascript">
    var klevu_cms_module_enabled=true;
</script>
<script type="text/javascript">
// Enable cms for klevu template
        var klevu_cmsSearchEnabled = false;
          
</script>            <div class="share-cart-container">
        <div id="share-cart-popup"  class="share-cart-popup-overlay">
            <div class="share-cart-popup share-cart-email-popup" style="width: 30%">
                <span id="share-cart-popup-close" class="close">&times;</span>
                <div class="content">
                    <div class="top-actions">
                        <button type="button" id="share-cart-email-btn" title="Jaga e-posti kaudu" class="button button2" value="Jaga e-posti kaudu">
                            <span>
                                <span>Jaga e-posti kaudu</span>
                            </span>
                        </button>
                                                <span class="seperator">OR</span>
                        <button type="button" id="share-cart-link-btn"  title="Jaga ostukorv" class="button button2" value="Jaga ostukorv">
                            <span>
                                <span>Jaga ostukorv</span>
                            </span>
                        </button>
                    </div>
                    <form id="share-cart-email-form" class="share-cart-form" action="https://www.selver.ee/sharecart/action/shareEmail/" method="post">
                        <ul class="form-list">
                            <li>
                                <label for="recipient_email">Saaja e-posti aadress</label>
                                <div class="input-box">
                                    <input class="input-text required-entry validate-email" id="recipient_email" name="recipient_email" placeholder="Enter Email Address" value="" />
                                </div>
                            </li>
                            <li>
                                <label for="message">Sisu (valikuline)</label>
                                <div class="input-box">
                                    <textarea class="input-text" id="message" name="message"></textarea>
                                </div>
                            </li>
                        </ul>
                        <div class="buttons-set">
                            <button type="submit" title="Jaga" class="button button2" value="Jaga"><span><span>Jaga</span></span></button>
                        </div>
                    </form>
                                                                <form id="share-cart-link-form" class="share-cart-form" action="https://www.selver.ee/sharecart/action/getLink/"" method="post">
                        <ul class="form-list">
                            <li>
                                <label for="sender_name">Sinu nimi</label>
                                <div class="input-box">
                                    <input class="input-text required-entry" id="sender_name" name="sender_name" placeholder="Enter Your Name" value="" />
                                </div>
                            </li>
                            <li>
                                <label for="sender_email">Sinu e-posti aadress</label>
                                <div class="input-box">
                                    <input class="input-text required-entry validate-email  " id="sender_email" name="sender_email" placeholder="Enter Your Email" value="" />
                                </div>
                            </li>
                        </ul>
                        <div class="buttons-set">
                            <button type="submit" title="Jaga ostukorv" class="button button2" value="Jaga ostukorv"><span><span>Jaga ostukorv</span></span></button>
                        </div>
                        </form>
                                    </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        //<![CDATA[
        // Get the modal
        var shareCartPop = document.getElementById('share-cart-popup');


        // Get the <span> element that closes the modal
        var shareCartPopClose = document.getElementById("share-cart-popup-close");


        // When the user clicks on <span> (x), close the modal
        shareCartPopClose.onclick = function() {
            shareCartPop.style.display = "none";
            resetBodyScroll();
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == shareCartPop) {
                shareCartPop.style.display = "none";
                resetBodyScroll();

            }
        };

        var shareCartEmailForm = new VarienForm('share-cart-email-form');

                var shareCartLinkForm = new VarienForm('share-cart-link-form');
        

        
        $("share-cart-email-btn").observe('click',function (event) {
            activate(this);
            if(typeof shareCartSmsForm !== 'undefined')
                Effect.SlideUp('share-cart-sms-form', { duration: 0.3 });
            if(typeof shareCartLinkForm !== 'undefined')
                Effect.SlideUp('share-cart-link-form', { duration: 0.3 });
            Effect.SlideDown('share-cart-email-form', { duration: 0.3 });
        });

        $("share-cart-email-btn").click();

        $("share-cart-link-btn").observe('click',function (event) {
            activate(this);
            if(typeof shareCartSmsForm !== 'undefined')
                Effect.SlideUp('share-cart-sms-form', { duration: 0.3 });
            Effect.SlideUp('share-cart-email-form', { duration: 0.3 });
            if(typeof shareCartLinkForm !== 'undefined')
                Effect.SlideDown('share-cart-link-form', { duration: 0.3 });
        });

        function activate(elem) {
            $$('.share-cart-popup .top-actions button').each(function(button, index) {
                button.removeClassName('active');
            });
            elem.addClassName('active');
        }
        function resetBodyScroll() {
            $$('body')[0].removeClassName('stop-scroll');
        }
        //]]>
    </script>
<script>
    if (typeof dataLayer!='undefined') {
        dataLayer.push({
            'ecomm_prodid' : ['T000036383'],
            'ecomm_totalvalue': '1.29',
            'ecomm_pagetype' : 'product'
        });
    }
</script>
<div class="session_warning_box_container">
<div class="session_warning_box notification_logout">
    <i data-icon="clock"></i>
    <div class="warning_box_top">
        <div class="title">Sessioon aegus.</div>
        <p>Sessioon lõpetati. Ostukorv salvestatud.</p>
    </div>
    <div class="warning_box_bottom">
        <a href="javascript:;" class="continue white">Jätka</a>
        <button type="button" class="button clearfix login" onclick="location.href='https://www.selver.ee/customer/account/login/';">Sisene uuesti</button>
    </div>
</div>

<div class="session_warning_box_container_bg"></div>
</div><div class="timeslot_warning_box_container">
    <div class="timeslot_warning_box warning">
        <i data-icon="clock"></i>
        <div class="warning_box_top">
            <div class="title">Aeg saab otsa!</div>
            <p>Teie reserveeritud aeg saab otsa <span>5</span> minuti pärast.</p>
        </div>
        <div class="warning_box_bottom">
            <a href="https://www.selver.ee/timeslot/shipping/select/" class="logout">Reserveeri uus kohaletoimetamise aeg</a>
            <button type="button" class="button clearfix continue" onclick="location.href='https://www.selver.ee/checkout/cart/';">Osta kohe</button>
        </div>
    </div>

    <div class="timeslot_warning_box removed">
        <i data-icon="clock"></i>
        <div class="warning_box_top">
            <div class="title">Reserveeritud aeg sai otsa</div>
            <p>Reserveering eemaldati</p>
        </div>
        <div class="warning_box_bottom">
            <a href="javascript:;" class="continue">Jätka</a>
            <button type="button" class="button clearfix login" onclick="location.href='https://www.selver.ee/timeslot/shipping/select/';">Reserveeri uus kohaletoimetamise aeg</button>
        </div>
    </div>

    <div class="timeslot_warning_box_container_bg"></div>
</div><script type="text/javascript">
    (function() {
        var referrer, search_term, klevu_search_product_tracking;
        referrer = document.referrer;
        search_term = referrer.toQueryParams().q;
        if (referrer.indexOf('catalogsearch/result') > -1 && search_term) {
            klevu_search_product_tracking = {"klevu_apiKey":"klevu-14410928010151845","klevu_term":"","klevu_type":"clicked","klevu_productId":"17523","klevu_productName":"Aedviljap\u00fcree kanafileega 6+, P\u00d5NN, 190 g","klevu_productUrl":"https:\/\/www.selver.ee\/aedviljapuree-kanafileega-6-ponn-190-g","klevu_sessionId":"htbrj36a4l0cv8bep29280vdk2","Klevu_typeOfRecord":"KLEVU_PRODUCT"};
            klevu_search_product_tracking.klevu_term = search_term;

            // Send the ajax request
            new Ajax.Request('//stats.klevu.co/analytics/productTracking', {
                method: "GET",
                parameters: klevu_search_product_tracking,

                // We need to remove the AJAX headers so the request does not get preflighted and break cross-origin request policy
                onCreate: function(response) {
                    var t = response.transport;
                    t.setRequestHeader = t.setRequestHeader.wrap(function(original, k, v) {
                        if (/^(accept|accept-language|content-language)$/i.test(k))
                            return original(k, v);
                        if (/^content-type$/i.test(k) &&
                            /^(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)(;.+)?$/i.test(v))
                            return original(k, v);
                        return;
                    });
                }
            });
        }
    })();
</script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"ee3f37d5a3","applicationID":"50841773","transactionName":"b1dSMkBZWkFZBkFbVlYdcQVGUVtcFwZURlhUXVdJQkpbVk0GQR1PUVdH","queueTime":0,"applicationTime":359,"atts":"QxBRRAhDSU8=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
`
