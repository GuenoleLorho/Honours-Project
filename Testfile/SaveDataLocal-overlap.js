var endVideo;
var frameNo = 7;
var frameNoString = ""+0+7;
/*
window.onload = function centerText() {
    var video = document.getElementById('video-container');
    var customMessage = document.getElementById('video-message');
    var customMessageTop = video.offsetHeight / 2 - customMessage.offsetHeight / 2;
    var customMessageLeft = video.offsetWidth / 2 - customMessage.offsetWidth  / 2;
    customMessage.style.left = customMessageLeft + 'px';
	customMessageTop -= video.offsetHeight/10;
    customMessage.style.top = customMessageTop + 'px';
};*/

window.addEventListener("load", setUp, false);

function setUp(){
	//assign group randomly
	var random = Math.floor(Math.random() * 10);
	if(random > 4){
		group = 1
	}else{
		group = 2;
	}
	console.log("da group is " + group);
	var video = document.getElementById('videotest')
	video.src = 'videos/Group1_fast-video_short/07.mp4';
	
	video.addEventListener("ended", replay);
	
	//document.getElementById('videotest').play();
	//check for key press
	//var video = document.getElementById('videotest');
	//var timer = setInterval(update, 100);
	//check for end of video and start next step
	//var video = document.getElementById('videotest');
	//video.addEventListener("ended", nextStep);
}

function replay(){
	console.log("replay!!! yay");
	document.getElementById("video-message").innerHTML = "<img src='replay2.svg'>";
	var video = document.getElementById('videotest');
	var replayButton = document.getElementById('videotest');
	replayButton.addEventListener("click", function(){playVid();});
	//video.play();
}
function playVid(){
	var video = document.getElementById('videotest');
	video.play();
	document.getElementById("video-message").innerHTML = "";
}

function shift(frame){
	console.log("ya shift " + arguments[0]);
	frameNo += arguments[0];
	console.log("frameNo = " + frameNo);
	document.getElementById("video-message").innerHTML = "";
	if(frameNo == 00){
		document.getElementById("button-left").style.display = "none";
	}else{
		document.getElementById("button-left").style.display = "inline";
	}
	if(frameNo == 15){
		document.getElementById("button-right").style.display = "none";
	}else{
		document.getElementById("button-right").style.display = "inline";
	}
	if(frameNo < 10){
		frameNoString = ""+ 0 + frameNo;
	}else{
		frameNoString = frameNo;
	}
	console.log("frameNoString = "+ frameNoString);
	document.getElementById('videotest').src = 'videos/Group1_fast-video_short/'+frameNoString+'.mp4';
	//if(arguments[0])
}

function validate(){
	console.log("saved frame = " + frameNoString);
	sessionStorage.setItem("fast-cut", frameNoString);
}