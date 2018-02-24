$(function(){
	var scale = 1 / window.devicePixelRatio
	$("meta").attr('content',"width=device-width,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no")
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
});