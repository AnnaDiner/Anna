$(document).ready(function(){

	// Script fot phone-menu
	$('#menu-btn').click(function(e) {
		var menuWrap = $('#menu-wrap');
		var pageTitle = $('.header__title-isu');
		
		if (!menuWrap.hasClass("open")) {
			menuWrap.addClass("open");
			pageTitle.addClass("header__title-isu--open-menu");
		} 
		else{
			menuWrap.removeClass("open");
			pageTitle.removeClass("header__title-isu--open-menu");
		};
	});
	
	// Script fot tablet dropdown menu
	$('.header-menu-item').click(function(e) {
		if (($(window).width()+15 <=1000) && ($(window).width()+15 >= 640)) {
			
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
			return false;
		};
	});
	$('.header-tablet-submenu-item').click(function(e) {
		var href = event.target.getAttribute('href');
		document.location.href = href;
	});

	// // Replace footer to bootom if page is to small
	// if (document.documentElement.clientHeight >= document.body.clientHeight) {
	// 	$('.footer').addClass("footer--fixed");
	// }

	//
	$('.dropdown-link').click(function(e) {
		$(this).toggleClass("active");
	});
});