$(document).ready(function() {


	$(".owl-carousel").owlCarousel({
		items: 8,
		margin: 30,
		loop: true,
		navText: ['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>'],
		responsive: {
			1000:{
				items: 8
			},
			900:{
				items: 7
			},
			800:{
				items: 6
			},
			600:{
				items: 5
			},
			480:{
				items: 4
			},
			320:{
				items: 3
			}
		}
	});

	$("a[href*='#home'], a[href*='#about'], a[href*='#services'], a[href*='#works'], a[href*='#partners'], a[href*='#contacts'], a[href*='#map']").mPageScroll2id();


	$('.popup-btn').magnificPopup();

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.mc_item').matchHeight();
	$('.hi_item').matchHeight();




	function installBackground(){
		var src = $('.header').find('.bg-img').attr('src');
		console.log(src);
		$('.header').css({
			'background': 'url('+ src +') no-repeat',
			'backgroundSize': 'cover',
			'backgroundPosition': 'top center'
		});
		$('.header').find('.bg-img').remove();
	};
	installBackground();
});
