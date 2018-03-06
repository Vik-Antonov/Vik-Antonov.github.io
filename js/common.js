$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'closed', 'effect-menu-slide', 'pagedim-black'],
		offCanvas: {
			position: 'right'
		},
		navbar:{
			title: 'Меню'
		}
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


	new WOW().init();

	$(window).scroll(function(){
		var st = $(this).scrollTop();

		$(".bottom-head__wrap").css({
			"transform" : "translate(0%, " + st * 0.25 + "px"
		});
	});

	$("a[href*='#portfolio'], a[href*='#rezume'], a[href*='#contacts'], a[href*='#main']").mPageScroll2id();

});

$(window).on('load', function(){
	$('.preloader').delay(100).fadeOut('slow');
});
