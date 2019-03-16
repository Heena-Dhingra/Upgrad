function deleteBlog(){
	var modal = document.getElementById('deleteId');
	var btn1 = document.getElementById('deletePost1');
	var btn2 = document.getElementById('deletePost2');
	var btn3 = document.getElementById('deletePost3');
	var btn4 = document.getElementById('deletePost4');
	var btn5 = document.getElementById('deletePost5');
	var nobtn = document.getElementById('noButton');
	btn1.onclick = function() {
	  modal.style.display = "block";
	}
	btn2.onclick = function() {
	  modal.style.display = "block";
	}
	btn3.onclick = function() {
	  modal.style.display = "block";
	}
	btn4.onclick = function() {
	  modal.style.display = "block";
	}
	btn5.onclick = function() {
	  modal.style.display = "block";
	}
	nobtn.onclick = function() {
	  modal.style.display = "none";
	}
}