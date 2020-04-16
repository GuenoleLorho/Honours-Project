var endVideo;
var frameNo = 12;
var frameNoString = 12;

window.addEventListener("load", setUp, false);

function setUp(){
	var video = document.getElementById('videotest')
	video.src = 'videos/Group2_Slow-video_short/12.mp4';
	video.currentTime = 0.4;
	video.addEventListener("ended", replay);
	
}

function replay(){
	document.getElementById("video-message").innerHTML = "<img src='replay2.svg'>";
	var video = document.getElementById('videotest');
	var replayButton = document.getElementById('videotest');
	replayButton.addEventListener("click", function(){playVid();});
}
function playVid(){
	var video = document.getElementById('videotest');
	video.currentTime = 0.4;
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
	if(frameNo == 18){
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
	var video = document.getElementById('videotest')
	video.src = 'videos/Group2_Slow-video_short/'+frameNoString+'.mp4';
	video.currentTime = 0.4;
}

function validate(){
	console.log("saved frame = " + frameNoString);
	sessionStorage.setItem("slow-cut", frameNoString);
	window.location = "Questionnaire.html";
}