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
		if (($(window).width()+15 <=1000) && ($(window).width()+15 >= 640)) {
			e.preventDefault();
			var menuItem = $('.header-menu-item');

			if (!$(this).hasClass("active")) {
				for (var i = 0; i <= menuItem.length-1; i++) {
					menuItem[i].classList.remove("active");
				};
				$(this).addClass("active");
				$('.header-tablet-menu').addClass("active");
			} 
			else{
				for (var i = 0; i <= menuItem.length-1; i++) {
					menuItem[i].classList.remove("active");
				};
				$('.header-tablet-menu').removeClass("active");
			};
		};
	});
});