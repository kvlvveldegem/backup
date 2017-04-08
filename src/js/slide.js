$(document).ready(function(){
	// HIDE ALL DIVS
	$('div.content').hide();
	
	// SHOW FIRST DIV
	$('.first').show();
	
	// SHOW DIV ON CLICK
	$('.trigger').click(function() {			
		// SHOW DIV
		$(this).next().next().slideToggle(400);
		 return false;
	});
});