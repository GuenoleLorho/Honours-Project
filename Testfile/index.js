function validate(){
	//check no of boxes and number of checked boxes
	var checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
	var checkNo = document.querySelectorAll('input[type="checkbox"]').length;
	//check if all boxes are selected
	if(checked == checkNo){
		//if yes, go to next page
		window.location = "instruction1.html";
	}else{
		//if no, show error message
		document.getElementById('error_message').innerHTML = "*Please read and validate the requirements before proceding.";
	}
}