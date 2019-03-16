
function signIn()
{
	var modal = document.getElementById('signInModal');
	var btn = document.getElementById('signIn');
	var span = document.getElementsByClassName("close")[1];
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}



function signUp(){
	var modal = document.getElementById('signUpModal');
	var btn = document.getElementById('signUp');
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

function openDialog()
{
	var upmodal = document.getElementById('signUpModal');
	var inmodal = document.getElementById('signInModal');
	inmodal.style.display = "none";
	upmodal.style.display = "block";

	var span = document.getElementsByClassName("close")[0];
	
	span.onclick = function() {
	  upmodal.style.display = "none";
	}

	window.onclick = function(event) {
  	if (event.target == modal) {
    upmodal.style.display = "none";
  }
} 
}

