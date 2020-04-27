var dataCheck = false;

window.onload = function sendData() {
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

		var database = firebase.database();
		var ref = database.ref('New times');	
		var questionnaire = {};
		var questionNo = sessionStorage["questionNo"];
		console.log("questionNo = " + questionNo);
		for(i = 0; i < (questionNo); i++) {
			var x = i + 1;
			//console.log("x = "+ x);
			var questionString = ""+"Question" +x;
			console.log(questionString +" and " + i);
			questionnaire[questionString] = sessionStorage[questionString];
		}
		x +=1;
		questionString = ""+"Question" +x;
		questionnaire[questionString] = sessionStorage["comments"];
		console.log("questionnaire = " + questionnaire);
		
		var data = {
			groupNo: sessionStorage["groupNo"],
			vidId: sessionStorage["vidId"],
			controleTime: sessionStorage["controlTest"],
			cutDetectionTime: sessionStorage["animationTest"],
			controleTimeV2: sessionStorage["controlTestV2"],
			cutDetectionTimeV2: sessionStorage["animationTestV2"]		
		}
		ref.push(data);
		dataCheck = true;
		checkData();
		
}

function checkData(){
    // do whatever you like here
	if(dataCheck == false){
		   setTimeout(checkData, 100);
	}else{
		document.getElementById("message").innerHTML = "Your answers have been sent, thank you for your time.<br>You may close the window now.";
		//document.getElementById("closeBtn").innerHTML = "<button onclick='closeTab()' type='next'>Close Window</button>";
		
	}
}