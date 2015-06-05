$(document).ready(function(){
	$('#menu-btn').click(function(e) {
		var menuWrap = $('#menu-wrap');
		var pageTitle = $('.header__title-isu');
		console.log(menuWrap);
		
		if (!menuWrap.hasClass("open")) {
			menuWrap.addClass("open");
			pageTitle.addClass("header__title-isu--open-menu");
		} 
		else{
			menuWrap.removeClass("open");
			pageTitle.removeClass("header__title-isu--open-menu");
		};
	});

	$('.header-menu-item').click(function(e) {

	});
});