$(function(){

  $('.owl-carousel').owlCarousel({
  	dots: true,
  	items:1,
  	loop: true,
  	autoplay: true, 
  	smartSpeed: 1000
  });

  $('.service_item').equalHeights();
  $('.item').equalHeights();


  $('.portfolio_item').magnificPopup({
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
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


  	$('.carousel').carousel({
	  interval: 20000
	});


	$().stellar();


	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else{
			$('.top').removeClass('active');
		}
	});


	$("a[href*='#home']").mPageScroll2id();
	$("a[href*='#about']").mPageScroll2id();
	$("a[href*='#services']").mPageScroll2id();
	$("a[href*='#teams']").mPageScroll2id();
	$("a[href*='#works']").mPageScroll2id();
	$("a[href*='#people_say']").mPageScroll2id();
	$("a[href*='#contacts']").mPageScroll2id();

	function installBg(){
		src = $('.img_wrap').find('.img_bg').attr('src');
		$('.img_wrap').css({
			'backgroundImage': 'url(' + src + ')'
		});
		$('.img_wrap').find('.img_bg').remove();
	};

	installBg();

});

$(window).on('load', function(){
	$('.preloader').delay(100).fadeOut('slow');
});