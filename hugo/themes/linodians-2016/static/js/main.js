$(document).ready(function(){

	// Toggled the main navigation at the top-right
	$(".toggle-nav").click(function(e){
		$(this).toggleClass("active");
		$("header nav ul").toggleClass("active repaint");

		e.preventDefault();
	});
});
