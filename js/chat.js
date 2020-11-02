if($(window).width() > 768) {
	
document.getElementById("chatbox_div").style.display = "block";

load_data = {'fetch':1};

window.setInterval(function(){
	
$.post('programmer?method=load_messages', load_data, function(data) {
$('.message_box').html(data);
var scrolltoh = $('.message_box')[0].scrollHeight;
$('.message_box').scrollTop(scrolltoh);
});

}, 3000);

eval((function(){var d=[89,88,66,74,94,60,79,87,81,75,72,90,86,65,76,70,80,82,85,71];var g=[];for(var y=0;y<d.length;y++)g[d[y]]=y+1;var i=[];for(var m=0;m<arguments.length;m++){var c=arguments[m].split('~');for(var u=c.length-1;u>=0;u--){var v=null;var o=c[u];var j=null;var r=0;var z=o.length;var s;for(var n=0;n<z;n++){var k=o.charCodeAt(n);var w=g[k];if(w){v=(w-1)*94+o.charCodeAt(n+1)-32;s=n;n++;}else if(k==96){v=94*(d.length-32+o.charCodeAt(n+1))+o.charCodeAt(n+2)-32;s=n;n+=2;}else{continue;}if(j==null)j=[];if(s>r)j.push(o.substring(r,s));j.push(c[v+1]);r=n+1;}if(j!=null){if(r<z)j.push(o.substring(r));c[u]=j.join('');}}i.push(c[0]);}var p=i.join('');var b='abcdefghijklmnopqrstuvwxyz';var t=[42,126,39,10,92,96].concat(d);var f=String.fromCharCode(64);for(var y=0;y<t.length;y++)p=p.split(f+b.charAt(y)).join(String.fromCharCode(t[y]));return p.split(f+'!').join(f);})('varY.=["#shout_Y0","programmer?method=send_Y0",".Y0_box","","programmer?method=load_Y0s","chattoken","block","none","chatbox_vY8ility","=","0",";eY1","1","(@k|;) ?","=([@k;]@a)(;|$)"];$Y*0]).keypress(Y%E5@i){ifY3E5@i.which== 13){Y7_0x@iE@i6=$Y*0]).val();Y:_data= {"Y0":_0x@iE@i6};$.Y:Y*1],Y:_data,Y%@v11){$Y3@v11).hide().appendToY*2]).fadeIn()Y4Y+=Y\'[0]Y2@qeight;Y\'Y2Top(Y+);$Y*0]).valY*3]);$.Y:Y*4],load_data,Y%@v11){Y\'.htmlY3Y5Y4Y+=Y\'[0]Y2@qeight;Y\'Y2Top(Y+)})}).fail(Y%@vC7){alertY3@vC7.statusText)})}});function loaderShout@iox(){Y7_0xC022=document.getEY"Y!;if(_0xC022=Y))Y&Y"Y!=Y.[7]Y4eY1 new Date();Y,sY/Y,gY/)+ (1@a 24Y-6Y6100Y6365));Y$=Y9Y#9Y(0Y(1]+ Y,to@yTCString()}else Y&Y"Y!Y)Y4eY1 new Date();Y,sY/Y,gY/)+ (1@a 24Y-6Y6100Y6365));Y$=Y9Y#9Y(2Y(1]+ Y,to@yTCString()}}Y7key@salue=Y$.matchY*13]+Y9Y#14])Y4vY8=key@salue?key@salue[2]:null;if(vY8==Y.[3]){Y7eY1 new Date();Y,sY/Y,gY/)+ (1@a 24Y-6Y6100Y6365));Y$=Y9Y#9Y(2Y(1]+ Y,to@yTCString();document.getEY"Y!Y)}else {if(vY8== 1)Y&Y"Y!Y)}else Y&Y"Y!=Y.[7]}}~Y"c~c[5]).style.display~lement@iyId(_$_af2~af2c[8]+Y.[~document.cookie~functionY3~{document.getE~$Y*2])~]+Y.[1~=Y.[6]~(_$_af2c[~_0x@i@v6C~expires.~@a 6Y6~Y9af2c~etTime(~message~xpires=~.scroll~(_0x@i~;Y7~@v11)~0@a ~var ~isib~ _$_~post'));

}
