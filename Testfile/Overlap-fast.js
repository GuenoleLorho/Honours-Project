var cutId ="" + 0 + 8;
var counter = 9;

window.addEventListener("load", setUp, false);

function setUp(){
	var video = document.getElementById('playedVideo');
	video.addEventListener("ended", replay);
	
	
	loadVid();
	play();
	slider();
}
function slider(){
	var slider = document.getElementById("myRange");
	slider.oninput = function() {
		cutId = this.value;
		var x = this.value;
		counter = +x + +1 ;
		if(cutId < 10){
			cutId = ""+ 0 + cutId;
		}
	play();
	}
}

function play(){
	document.getElementById("video-message").innerHTML = "";
	var count = document.getElementById("sequenceCount");
	count.innerHTML = "Clip no "+ counter+"";
	count.style.marginTop = "5px";
	var video = document.getElementById("playedVideo");
	video.src = 'videos/Group1_fast-video_short/'+cutId+'.mp4'
	video.currentTime = 0;
}

function replay(){
	var message = document.getElementById("video-message");
	message.style.top = "35%";
	message.innerHTML = "<img src='replay2.svg'>";
}

function validate(){
	console.log("saved frame = " + cutId);
	sessionStorage.setItem("fast-cut", cutId);
	window.location = "OverlapTest-slow.html";
}
/*
function loadVid(){
	for(i=0; i<16; i++){
		var x = i;
		if(x < 10){
			x = ""+ 0 + x;
		}
		var video = document.getElementById("BC_load");
		video.src = 'videos/Group1_fast-video_short/'+x+'.mp4'
		video.load();
	}
}*/