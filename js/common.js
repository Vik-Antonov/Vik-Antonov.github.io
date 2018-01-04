$(function() {

	$('#my-menu').mmenu({
		extensions: ['closed', 'effect-menu-slide', 'pagedim-black'],
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


});

