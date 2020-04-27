/*function doFirst(){
	var SaveButton = document.getElelementById("SaveButton");
	window.addEventListener("click", saveData, false);
}
function saveData (){
	var form1 = document.getElelementById("form1").value;
	var form2 = document.getElelementById("form2").value;
	sessionStorage.setItem(form1, form2);
	
	display(form1);
}
function display (form1){
	var displaydata = document.getElelementById("displaysave");
	var form2 = sessionStorage.getItem(form1);
	displaydata.innerHTML = "Data :" + form1 + "<br />Value :" + form2;
}
window.addEventListener("load", doFirst, false);*/

var tInterval;
var savedTime;
var difference;
var startTime;

var step = 0;
var group = 1;
var timeData = [];
var clickNo = 0;
var persnoNo = 0;

var vidTime;
var vidTimeData = [];

window.onload = function centerText() {
    var video = document.getElementById('video-container');
    var customMessage = document.getElementById('video-message');
    var customMessageTop = video.offsetHeight / 2 - customMessage.offsetHeight / 2;
    var customMessageLeft = video.offsetWidth / 2 - customMessage.offsetWidth  / 2;
    customMessage.style.left = customMessageLeft + 'px';
    customMessage.style.top = customMessageTop + 'px';
};

window.addEventListener("load", setUp, false);

function setUp(){
	//assign group randomly
	/*var random = Math.floor(Math.random() * 10);
	if(random > 4){
		group = 1
	}else{
		group = 2;
	}*/
	sessionStorage.setItem('groupNo', group);
	console.log("da group is " + group);
	
	//check for key press
	var video = document.getElementById('videotest');
	vidTime = video.currentTime;
	console.log("vid time = " + vidTime);
	//var timer = setInterval(update, 100);
	document.onkeypress = function(e) {
		var clickFB = document.getElementById('videotest');
		if ( (e || window.event).keyCode === 32 /* enter key */ ) {
			if(video.paused == true){
				//play video and start timer
				video.play();
				document.getElementById("video-message").innerHTML = "";
				startTimer();
			}
			if(video.paused == false){
				//check timer
				getNowTime();
			}
			
			clickFB.style.background = 'blue';
		}
		
		setTimeout(function paint(){ clickFB.style.background = 'white'},100);
	}
	//check for end of video and start next step
	var video = document.getElementById('videotest');
	video.addEventListener("ended", nextStep);
}

function startTimer(){
	clearInterval (tInterval);
	startTime = new Date().getTime();
	
}

function getNowTime(){
	var video = document.getElementById('videotest');
	vidTime = video.currentTime;
	vidTimeData.push(vidTime);
	
	updatedTime = new Date().getTime();
	if(savedTime){
		difference = (updatedTime - startTime) + savedTime;
	}else{
		difference = updatedTime - startTime;
	}
	var seconds = Math.floor((difference % (1000*60))/1000);
	var milliseconds = Math.floor((difference % (1000*60)));
	milliseconds = milliseconds - seconds *1000;
	var time = "" + seconds +"."+ milliseconds;
	saveLocal(group, step, time);
}


function nextStep(){
	getNowTime();
	console.log("SAVE DATA = " + vidTimeData);
	if(clickNo < 3){
			console.log("please click somewhere at least once..");
			if(step = 0){
				document.getElementById("video-message").innerHTML = "<h2>Please do the exercice</h2><br><h1>Press the SPACE BAR as soon as the screen becomes WHITE</H1><br><h2>[Press the space bar to begin]</h2>";
			}else{
				document.getElementById("video-message").innerHTML = "<h2>Please do the exercice</h2><br><h1>Press the SPACE BAR whenever a cut happens</H1><br><h2>[Press the space bar to begin]</h2>";
			}
			
			timeData= [];
			vidTimeData = [];
			clickNo = 0;
		}else{
			if (step == 1){
				//save data and proceed to next page
				sessionStorage.setItem("animationTest", timeData);
				sessionStorage.setItem('animationTestV2', vidTimeData);
				window.location = "instruction2.html";
				console.log("yaya next exercice");
			}
			var vidString;
			if (step == 0){
				if(group == 1){
					var vidNo = Math.floor(Math.random() * 15);
					if(vidNo < 10){
						vidString = ""+ 0 + vidNo;
					}else{
						vidString = vidNo;
					}
					console.log("vidString = "+ vidString);
					document.getElementById('videotest').src = 'videos/Group1_fast-video/'+vidString+'.mp4';
				}else{
					var vidNo = Math.floor(Math.random() * 10);
					vidNo = vidNo*2;
					console.log("vidNo = " + vidNo);
					if(vidNo < 10){
						vidString = ""+ 0 + vidNo;
					}else{
						vidString = vidNo;
					}
					console.log("vidString = "+ vidString);
					document.getElementById('videotest').src = 'videos/Group2_Slow-video/'+vidString+'.mp4';
				}
				
				var vidId = "G"+group+"_"+vidString;
				sessionStorage.setItem('vidId', vidId);
				document.getElementById("video-message").innerHTML = "<h1>Press the SPACE BAR whenever a cut happens</H1><br><h2>[Press the space bar to begin]</h2>";
				clickNo = 0;
				console.log("timeData before storage = "+ timeData);
				sessionStorage.setItem('controlTest', timeData);
				sessionStorage.setItem('controlTestV2', vidTimeData);
				console.log("save1 = " + sessionStorage['controlTest']);
				step +=1;
			}
		}
}
function saveLocal(group, type, value){
	timeData[clickNo] = arguments[2];
	clickNo += 1;
	console.log("timeData = "+ timeData);
}