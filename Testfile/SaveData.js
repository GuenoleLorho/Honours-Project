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

window.addEventListener("load", setUp, false);

function setUp(){
	var firebaseConfig = {
    apiKey: "AIzaSyCcL95MzEo0b_hON2MyV9Gi1KGpRkjBIjY",
    authDomain: "honours-testing.firebaseapp.com",
    databaseURL: "https://honours-testing.firebaseio.com",
    projectId: "honours-testing",
    storageBucket: "honours-testing.appspot.com",
    messagingSenderId: "76525705127",
    appId: "1:76525705127:web:7cee113e1afea802584882",
    measurementId: "G-MH0B06BHL9"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  console.log("workin");
  
  var database = firebase.database();
  var ref = database.ref('Q1')
  
  var data = {
	  name: "name1",
	  answer: "awnswer1"
  }
  ref.push(data);
}

