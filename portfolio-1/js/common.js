$(document).ready(function() {

	$('.sect_services .serv_item').equalHeights();
	

	$(".owl-carousel").owlCarousel({
		items: 1,
		navText : ['< PREVIOUS PROJECT','NEXT PROJECT >'],
		loop: true
	});

	$(".isProject .owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		smartSpeed: 1000
	});

	$('.work_item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	$('.isProject .car_wrap_left').equalHeights();

});
