window.onload = function firebaseSetUp() {
	var firebaseConfig = {
		apiKey: "AIzaSyCcL95MzEo0b_hON2MyV9Gi1KGpRkjBIjY",
		authDomain: "honours-testing.firebaseapp.com",
		databaseURL: "https://honours-testing.firebaseio.com",
		projectId: "honours-testing",
		storageBucket: "honours-testing.appspot.com",
		messagingSenderId: "76525705127",
		appId: "1:76525705127:web:9c99ef1e84c1008c584882",
		measurementId: "G-0GNW5Y41YP"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  firebase.analytics();
	  
	  readTextArea();
}
function readTextArea(){
	var text = document.getElementById("comments");
	console.log("text = " + text.value);
	sessionStorage.setItem('comments', text.value);
}
function submit(){
	readTextArea();
	//var questionNo = document.getElementById("form").count;
	var answerNo = 0;
	var questionNo = document.querySelectorAll('#form').length;
	console.log("questionNo = "+ questionNo);
	for (i = 1; i < questionNo+1; i++) {		
		var checkVal = document.querySelector('input[name="question'+i+'"]:checked');
		var errorId = ""+"error"+i;
		if(checkVal != null){
			checkVal = checkVal.value;
			var questionString = ""+"Question" +i;
			//console.log("questionString = "+ questionString);
			sessionStorage.setItem(questionString, checkVal);
			//console.log(i + "da value is " + checkVal);
			document.getElementById(errorId).innerHTML = "";
			document.getElementById('error_message').innerHTML = "";
			answerNo +=1;
		}else{
			//console.log("i = " + i)
			document.getElementById(errorId).innerHTML = "*Please select one of the values";
			
		}
		
	}
	console.log("answerNo = "+answerNo+"  ;  questionNo = "+questionNo);
	if(answerNo == (questionNo)){
		console.log("finnish page!!!");
		sessionStorage.setItem('questionNo', questionNo);
		//sendData (questionNo);
		//setTimeout(nextPage, 1000);
		window.location = "Submit.html";
		
	}else{
		console.log("pleae answer all the questions");
		document.getElementById('error_message').innerHTML = "<p>*Please answer the form in it's entirety.</p>";
	}
	


}
function nextPage(){
	window.location = "Submit.html";
}
function sendData (questionNo){
		var database = firebase.database();
		var ref = database.ref('test');	
		var questionnaire = {};
		for(i = 1; i < (arguments[0]+1); i++) {
			var questionString = ""+"Question" +i;
			console.log(questionString +" and " + i);
			questionnaire[questionString] = sessionStorage[questionString];
		}
		
		var data = {
			groupNo: sessionStorage["groupNo"],
			vidId: sessionStorage["vidId"],
			controleTime: sessionStorage["controlTest"],
			cutDetectionTime: sessionStorage["animationTest"],
			smoothCutFast: sessionStorage["fast-cut"],
			smoothCutSlow: sessionStorage["slow-cut"],
			questionnaire: questionnaire
			
		}
		//ref.push(questionnaire);
		//data += {questionnaire};
		ref.push(data);
		console.log("DATA  PUUUUSHHHHED");
}

