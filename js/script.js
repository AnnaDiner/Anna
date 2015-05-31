$(document).ready(function(){
	$('#menu-btn').click(function(e) {
		var menuWrap = $('#menu-wrap');
		console.log(menuWrap);
		
		if (!menuWrap.hasClass("open")) {
			menuWrap.addClass("open");
		} 
		else{
			menuWrap.removeClass("open");
		};
	});
});