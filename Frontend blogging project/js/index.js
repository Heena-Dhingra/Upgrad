function createMod()
{
	var modal = document.getElementById('createPostModal');
	var btn = document.getElementById('create');
	var span = document.getElementsByClassName("close")[2];
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