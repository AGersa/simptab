"use strict";function getQueryString(t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(o);return null!==n?unescape(n[2]):null}$(document).ready(function(){var t=navigator.language;"en"==t.split("-")[0]&&(t="en");var o=$.cookie("lang");void 0!==o&&(t=o),o=getQueryString("lang"),null!==o&&(t=o),t=t.toLowerCase(),"en"!=t&&"zh-cn"!==t&&"zh-tw"!==t&&(t="en"),$("body").css({"font-family":t.toLowerCase()}),"en"!==t&&$("body").css({"font-weight":"normal"});var n={load:"current",lng:t,lowerCaseLng:!0,fallbackLng:!1,cookieName:"lang",useCookie:!0,detectLngQS:"lang"};i18n.init(n,function(o){$($(".title div")[0]).html(o("title")),$($(".title div")[1]).html(o("desc")),$(".download .btn-download h3").html(o("download")),$(".download .smaller").html(o("or")),$(".download .btn-offline-download").html(o("offline")),$($(".top ul li a")[0]).text(o("nav3")),$($(".top ul li a")[1]).text(o("nav2")),$($(".top ul li a")[2]).text(o("nav4")),$($(".top ul li a")[6]).text(o("nav5")),"zh-tw"==t&&$($(".top ul li a")[1]).attr("href","http://ksria.com/simptab/docs/#/CHANGELOG.tw"),"en"==t&&$($(".top ul li a")[1]).attr("href","http://ksria.com/simptab/docs/#/CHANGELOG.en"),$.each($(".feature"),function(t,n){$(n).find(".desc").html(o("desc"+ ++t)),$(n).find(".content").attr("data-tooltip",o("feature"+t))}),$(".feature .learnmore").html(o("learn")),$(".middle a:nth-child(1)").html(o("middle1")),$(".footer li:nth-child(1) h2").html(o("support")),$(".footer li:nth-child(1) div p:nth-of-type(1)").html(o("feedback")),$(".footer li:nth-child(1) div p:nth-of-type(2) span:nth-of-type(1)").html(o("contact")),$(".footer li:nth-child(1) div p:nth-of-type(2) a:nth-of-type(2)").html(o("author").toLowerCase()),$(".footer li:nth-child(1) div p:nth-of-type(2) span:nth-of-type(2)").html(o("end").toLowerCase()),$(".footer li:nth-child(2) h2").html(o("author")),$(".footer li:nth-child(2) p:nth-child(2)").html(o("job")),$(".footer .copyright span:nth-child(1)").html(o("footer"))}),$(".btn-download").click(function(){window.location.href="https://chrome.google.com/webstore/detail/kbgmbmkhepchmmcnbdbclpkpegbgikjc?hl="+i18n.lng()}),$(".middle a:nth-child(1)").click(function(){var t=i18n.lng();t="en"===t?t:t.split("-")[1],t="cn"===t?"":"."+t,window.location.href="https://github.com/kenshin/simptab/blob/master/README"+t+".md"})});