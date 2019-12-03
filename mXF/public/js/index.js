// 控制根字体
function placeholderPic(){
var w = document.documentElement.offsetWidth; 
if(w>750){
	document.documentElement.style.fontSize=100+'px';
}else{
	document.documentElement.style.fontSize=w/7.5+'px';
}
}
placeholderPic();
window.onresize=function(){
placeholderPic();
}


