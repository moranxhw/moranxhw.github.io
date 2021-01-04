//背景图片跟随鼠标移动
$(function() {
	var x, y;
	$("body").mousemove(function(e) {
		$("#text").text(e.pageX + " " + e.pageY);
		x = -e.pageX / 20;
		y = -e.pageY / 20;
		if(y<-160){
			y=-160;
		}
		var c = x + "px " + y + "px";
		$("#div1").css('background-position', c);
	})
})
//开场动画淡出
window.onload = function() {
	setTimeout("$('#spinner').fadeOut()", 3000);
}
