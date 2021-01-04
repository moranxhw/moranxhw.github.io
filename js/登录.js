var imgs,yzID,phone,phone_msg,yz,yz_msg;
var i = 0;
var phoneFlag = false,yzFlag = false;  //记录手机号与验证码是否正确
window.onload = function() {
	imgs = document.getElementById("imgs");
	yzID = document.getElementById("yzID");
	phone = document.getElementById("phone");
	phone_msg = document.getElementById("phone_msg");
	yz = document.getElementById("yz");
	yz_msg = document.getElementById("yz_msg");
	yzID.onclick = showYZID;  //click事件绑定函数showYZID
	login.onclick = loginTest;  //单击login按钮绑定loginTest函数
	changeImage();  //调用函数-图片变化
	show();  //调用函数-显示时间
	showYZID();  //调用函数-生成验证码
	phone.onblur = check;  //鼠标离开phone文本框时，调用check函数
	yz.onblur = yzCheck;  //鼠标离开yz文本框时，调用yzCheck函数
}

//1.图片变化<img id="imgs">
function changeImage() {
	var urls = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];
	if (i >= urls.length) {  //数组越界，下标从0开始
		i = 0;
	}
	imgs.src = urls[i];
	i++;
	setTimeout("changeImage()", 2000);  //计时器，只执行1次
}
//2.显示日期
function show() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	var second = d.getSeconds();
	if (min < 10) {
		min = "0" + min;
	}
	if (second < 10) {
		second = "0" + second;
	}
	document.getElementById("display").innerHTML =year + "年" + month + "月" + hour + ":" + min + ":" + second;
	//添加计时器 setTimeout("调用函数",间隔时间[毫秒])
	timer1 = setTimeout("show()", 1000);
}
//3.生成验证码
function showYZID(){
	var digit1 = Math.floor(Math.random()*10);  //第一个数字
	var letter1 = String.fromCharCode(Math.floor(Math.random()*26 + 65));  //第一个字母
	var digit2 = Math.floor(Math.random()*10);  //第二个数字
	var letter2 = String.fromCharCode(Math.floor(Math.random()*26 + 65));  //第二个字母
	yzID.innerHTML = digit1 + letter1 + digit2 + letter2;
}
//4.验证手机号码
function check(){  //验证输入的手机号是否符合正则表达式
	var phoneStr = phone.value;  //获取用户输入的手机号码
	var reg = /^1\d{10}$/;  //设置手机号码正则表达式				
	//验证方法，test方法，返回值true，false
	if(reg.test(phoneStr)){  //验证通过，显示绿色√号
		phone_msg.innerHTML = "√";
		phone_msg.style.color = "green";
		phoneFlag = true;
		return;
	}
	else{  //验证不通过，显示红色×号
		phone_msg.innerHTML = "×";
		phone_msg.style.color = "red";
		phoneFlag = false;
		return;
	}
}
//5.验证验证码
function yzCheck(){
	//文本框中值用value，span中值用innerHTML
	if(yz.value.toUpperCase() == yzID.innerHTML.toUpperCase()){  //验证通过，显示绿色√号
		yz_msg.innerHTML = "√";
		yz_msg.style.color = "green";
		yzFlag = true;
		return;
	}
	else{  //验证不通过，显示红色×号
		yz_msg.innerHTML = "×";
		yz_msg.style.color = "red";
		yzFlag = false;
		return;
	}
}
//6.登录提示
function loginTest(){
	if(phoneFlag && yzFlag){
		alert("登录成功！");
	}
	else{
		alert("登录失败！");
	}
}
