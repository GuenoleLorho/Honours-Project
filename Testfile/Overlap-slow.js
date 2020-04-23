var cutId = 10;


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

		if(this.value == 15){
			cutId = 16;
		}
		if(this.value ==16){
			cutId = 18
		}
		if(this.value == 3){
			cutId = 2
		}
		if(this.value == 2){
			cutId = 0
		}
				if(cutId < 10){
			cutId = ""+ 0 + cutId;
		}
		console.log("saved frame = " + cutId);
	play();
	}
}

function play(){
	document.getElementById("video-message").innerHTML = "";
	var video = document.getElementById("playedVideo");
	video.src = 'videos/Group2_Slow-video_short/'+cutId+'.mp4'
	video.currentTime = 0;
}

function replay(){
	document.getElementById("video-message").innerHTML = "<img src='replay2.svg'>";
}

function validate(){
	console.log("saved frame = " + cutId);
	sessionStorage.setItem("slow-cut", cutId);
	window.location = "Questionnaire.html";
}

function loadVid(){
	for(i=0; i<10; i++){
		var x = i*2;
		if(x < 10){
			x = ""+ 0 + x;
		}
		var video = document.getElementById("BC_load");
		video.src = 'videos/Group2_Slow-video_short/'+x+'.mp4'
		video.load();
	}
}