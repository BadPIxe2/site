(function(c){c.fn.Qnotify=function(e){var a=c.extend({title:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",text:"",speed:500,close:5E3,width:300,sound:""},e);c(this).append('<div class="qnotify"><div class="qnotify_title"></div><audio autoplay="" class="qplay"></audio><div class="qnotify_text"></div></div>');var b=c(".qnotify"),d;1<b.length&&c(".qnotify:first").remove();b.css({position:"fixed",display:"none","font-size":"16px",color:"#fff","z-index":"10",right:"17px",display:"inline-block","-moz-box-shadow":"0 0 3px rgba(0,0,0,0.2)","-webkit-box-shadow":"0 0 3px rgba(0,0,0,0.2)","-khtml-box-shadow":"0 0 3px rgba(0,0,0,0.2)","box-shadow":"0 0 3px rgba(0,0,0,0.2)"});c(".qnotify_title").css({color:"#fff","font-size":"16px",height:"30px",padding:"0px"});"error"==a.sound&&(d='<source src="theme/sound/error.ogg" ><source src="theme/sound/error.mp3" >'); c(".qplay").append(d);c(".qnotify_title").html(a.title);""==a.width?b.css({width:"auto"}):b.css({width:a.width+"px"});c(".qnotify_text").html(a.text).css({padding:"0px"});b.fadeIn(a.speed,function(){b.animate({},a.speed);b.show()});setTimeout(function(){b.animate({bottom:-b.height()-22},a.speed)},a.close);setTimeout(function(){b.remove()},a.close+1E3)}})(jQuery);