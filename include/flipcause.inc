<!-- // Flipcause Integration Code v3.1 // Flipcause Integration Instructions: Install the following code block ONCE in the website Header (after <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> tag) // This code is designed to launch standard integration buttons, floating integrations buttons, and direct embeds  // This code block only needs to be installed once to activate all integrations site wide // Begin Flipcause Integration Code //-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<style>

    #fc-direct-embed-loader-out{
	    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #eee;
    z-index: 9;
}

#fc-direct-embed-loader-out .fc-direct-embed-loader{
	top: 40%;
}

.fc-black_overlay{
display:none; position: fixed; z-index:1000001; top: 0%;left: 0%;width: 100%;height: 100%;
background-color: black; filter: alpha(opacity=50); cursor:pointer; opacity:0.5;
}

.fc-white_content {
opacity:1; display:none; margin-top: -320px; margin-left: -485px; width:970px; height:640px;
position:fixed; top:50%; left:50%; border: none;z-index:1000002;overflow: auto;
}

.fc-main-box{
opacity:1; display:none; margin:15px auto 0 auto; width:930px; position:relative; z-index:1000003;
}

.fc-widget_close{
opacity:1; background: url( https://www.flipcause.com/assets/close-icon.png);
position:absolute; z-index:1000004; right:-16px; top:-16px; display:block; cursor:pointer; width:49px; height:49px;
}

.floating_button{
display: block; margin-top: 0px; margin-left: 0px; width:auto ; height: auto;
position:fixed; z-index:999999; overflow: auto;
}

@keyframes backfadesin {
  from { opacity:0; }
  to {opacity:.5;}
}

@-moz-keyframes backfadesin {
   from { opacity:0; }
   to {opacity:.5;}
}

@-webkit-keyframes backfadesin {
   from { opacity:0; }
   to {opacity:.5;}
}

@-o-keyframes backfadesin {
   from { opacity:0; }
   to {opacity:.5;}
}

@-ms-keyframes backfadesin {
   from { opacity:0; }
   to {opacity:.5;}
}

@keyframes fadesin {
  0%{ opacity:0; }
  50%{ opacity:0; }
  75% {opacity: 0; transform: translateY(20px);}
  100% {opacity: 1; transform: translateY(0);}
}

@-moz-keyframes fadesin {
  0%{ opacity:0; }
  50%{ opacity:0; }
  75% {opacity: 0; -moz-transform: translateY(20px);}
  100% {opacity: 1; -moz-transform: translateY(0);}
}

@-webkit-keyframes fadesin {
  0%{ opacity:0; }
  50%{ opacity:0; }
  75% {opacity: 0; -webkit-transform: translateY(20px);}
  100% {opacity: 1; -webkit-transform: translateY(0);}
}

@-o-keyframes fadesin {
  0%{ opacity:0; }
  50%{ opacity:0; }
  75% {opacity: 0; -o-transform: translateY(20px);}
  100% {opacity: 1; -o-transform: translateY(0);}
}

@-ms-keyframes fadesin {
  0%{ opacity:0; }
  50%{ opacity:0; }
  75% {opacity: 0; -ms-transform: translateY(20px);}
  100% {opacity: 1; -ms-transform: translateY(0);}
}
/*css for small size screns like Iphone 5s/SE */
@media screen and (max-width: 414px) {
    .overlay-card{
        left: 0px !important;
    }
}
@media screen and (max-width: 320px) {
    .overlay-card{
        left: 0px !important;
    }
    #fc-embed-frame{
        width:270px !important;
    }
}
</style>

<style>
.fc-lightbox-loader {
 color: #EEEEEE; font-size: 90px; text-indent: -9999em; overflow: hidden; width: 1em; height: 1em; border-radius: 50%; position:absolute; float: right; right: 45.5%; top: 35%;  transform: translateZ(0); -moz-transform: translateZ(0); -webkit-transform: translateZ(0); -o-transform: translateZ(0);-ms-transform: translateZ(0); animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -moz-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -webkit-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease;  -o-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -ms-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease;
}

.fc-direct-embed-loader {
color: #777777; font-size: 90px; text-indent: -9999em; overflow: hidden; width: 1em; height: 1em; border-radius: 50%; position:relative; margin: 0 auto 0 auto; transform: translateZ(0); -moz-transform: translateZ(0); -webkit-transform: translateZ(0); -o-transform: translateZ(0);-ms-transform: translateZ(0); animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -moz-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -webkit-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease;  -o-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; -ms-animation: fcload6 1.7s infinite ease, fcround 1.7s infinite ease; z-index: 1; display:none;
}

.fc-embed-main-box {
opacity:1; display:none; margin: 0 auto 0 auto; width:100%; position:relative; z-index:2; top: 0px;
}

@keyframes fcload6 {
 0% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 5%,95% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 10%,59% {box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;}
 20% {box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;}
 38% {box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}
 100% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
}

@-moz-keyframes fcload6 {
 0% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 5%,95% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 10%,59% {box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;}
 20% {box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;}
 38% {box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}
 100% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
}

@-webkit-keyframes fcload6 {
 0% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 5%,95% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 10%,59% {box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;}
 20% {box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;}
 38% {box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}
 100% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
}

@-o-keyframes fcload6 {
 0% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 5%,95% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 10%,59% {box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;}
 20% {box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;}
 38% {box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}
 100% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
}

@-ms-keyframes fcload6 {
 0% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 5%,95% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
 10%,59% {box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;}
 20% {box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;}
 38% {box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}
 100% {box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;}
}

@keyframes fcround {
 0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
 100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}

@-moz-keyframes fcround {
 0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
 100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}

@-webkit-keyframes fcround {
 0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
 100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}

@-o-keyframes fcround {
 0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
 100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}

@-ms-keyframes fcround {
 0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
 100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
}
</style>
<script>
function open_window(cause_id,domain_link) {
var  protocol=String(document.location.protocol);
var new_url;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

//new_url="https://www."+ domain_link +"/widget/"+cause_id
new_url="https://"+ domain_link +"/widget/"+cause_id

window.open(new_url);
}
else {
document.getElementById("fc-lightbox-loader").style.display="block";
document.getElementById("fc-fade").style.display="block";
document.getElementById("fc-fade").style.webkitAnimation="backfadesin .5s";
document.getElementById("fc-fade").style.animation="backfadesin .5s";
document.getElementById("fc-fade").style.mozAnimation="backfadesin .5s";
document.getElementById("fc-light").style.display="block";
document.getElementById("fc-light").style.webkitAnimation="fadesin 0s";
document.getElementById("fc-light").style.animation="fadesin 0s";
document.getElementById("fc-light").style.mozAnimation="fadesin 0s";
document.getElementById("fc-main").style.display="block";
document.getElementById("fc-main").style.webkitAnimation="fadesin 2.2s";
document.getElementById("fc-main").style.animation="fadesin 2.2s";
document.getElementById("fc-main").style.mozAnimation="fadesin 2.2s";
document.getElementById("fc-close").style.display="block";
document.getElementById("fc-close").style.webkitAnimation="fadesin 2.2s";
document.getElementById("fc-close").style.animation="fadesin 2.2s";
document.getElementById("fc-close").style.mozAnimation="fadesin 2.2s";
document.getElementById("fc-myFrame").style.display="block";
document.getElementById("fc-myFrame").style.webkitAnimation="fadesin 2.2s";
document.getElementById("fc-myFrame").style.animation="fadesin 2.2s";
document.getElementById("fc-myFrame").style.mozAnimation="fadesin 2.2s";
//document.getElementById("fc-myFrame").src="https://www."+ domain_link +"/widget/"+cause_id;
document.getElementById("fc-myFrame").src="https://"+ domain_link +"/widget/"+cause_id;
}
}

function close_window() {
document.getElementById("fc-lightbox-loader").style.display="none";
document.getElementById("fc-fade").style.display="none";
document.getElementById("fc-light").style.display="none";
document.getElementById("fc-main").style.display="none";
document.getElementById("fc-close").style.display="none";
document.getElementById("fc-myFrame").style.display="none";
}

function embed_frame(cause_id,domain_link) {
document.getElementById("fc-embed-loader").style.display="block";
document.getElementById("fc-embed-main-box").style.display="block";
document.getElementById("fc-embed-main-box").style.webkitAnimation="fadesin 2s";
document.getElementById("fc-embed-main-box").style.animation="fadesin 2s";
document.getElementById("fc-embed-main-box").style.mozAnimation="fadesin 2s";
document.getElementById("fc-embed-frame").style.display="block";
document.getElementById("fc-embed-frame").style.webkitAnimation="fadesin 2s";
document.getElementById("fc-embed-frame").style.animation="fadesin 2s";
document.getElementById("fc-embed-frame").style.mozAnimation="fadesin 2s";
//document.getElementById("fc-embed-frame").src="https://www."+ domain_link +"/widget/"+cause_id;
document.getElementById("fc-embed-frame").src="https://"+ domain_link +"/widget/"+cause_id;
}
</script>

<div id="fc-fade" class="fc-black_overlay" onclick="close_window()"></div>
<div id="fc-light" class="fc-white_content"><div id="fc-lightbox-loader" class="fc-lightbox-loader"></div>
<div id="fc-main" class="fc-main-box"><div id="fc-close" class="fc-widget_close" onclick="close_window()"></div>
<iframe id="fc-myFrame" iframe height="580" width="925" style="border: 0;border-radius:5px 5px 5px 5px; box-shadow:0 0 8px rgba(0, 0, 0, 0.5);background:#fff;" scrolling="no" src=""></iframe>
</div></div>

<!--END Flipcause Main Integration Code-->
