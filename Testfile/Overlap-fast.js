var endVideo;
var frameNo = 7;
var frameNoString = ""+0+7;

window.addEventListener("load", setUp, false);

function setUp(){
	var video = document.getElementById('videotest')
	video.src = 'videos/Group1_fast-video_short/07.mp4';
	video.currentTime = 0.2;
	video.addEventListener("ended", replay);
	checkFrame();

	
}

function timeline(frame){
	var selection = arguments[0];
	frameNo = arguments[0];
	if(selection < 10){
		selection = ""+ 0 + selection;
	}
	document.getElementById("video-message").innerHTML = "";
	var video = document.getElementById('videotest');
	video.src = 'videos/Group1_fast-video_short/'+selection+'.mp4';
	showHideBtn();
}

function checkFrame(){
	document.getElementById(frameNoString).checked = true;
}

function showHideBtn(){
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
}



function replay(){
	console.log("replay!!! yay");
	document.getElementById("video-message").innerHTML = "<img src='replay2.svg'>";
	var video = document.getElementById('videotest');
	var replayButton = document.getElementById('videotest');
	replayButton.addEventListener("click", function(){playVid();});
}
function playVid(){
	var video = document.getElementById('videotest');
	video.currentTime = 0.2;
	video.play();
	document.getElementById("video-message").innerHTML = "";
}

function shift(frame){
	console.log("ya shift " + arguments[0]);
	frameNo += arguments[0];
	console.log("frameNo = " + frameNo);
	document.getElementById("video-message").innerHTML = "";
	showHideBtn();
	if(frameNo < 10){
		frameNoString = ""+ 0 + frameNo;
	}else{
		frameNoString = frameNo;
	}
	console.log("frameNoString = "+ frameNoString);
	var video = document.getElementById('videotest');
	video.src = 'videos/Group1_fast-video_short/'+frameNoString+'.mp4';
	video.currentTime = 0.2;
	checkFrame();
}

function validate(){
	console.log("saved frame = " + frameNoString);
	sessionStorage.setItem("fast-cut", frameNoString);
	window.location = "OverlapTest-slow.html";
}