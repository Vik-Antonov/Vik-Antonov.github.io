$(document).ready(function() {

	$('.tizer_item').equalHeights();


	$('.image-link').magnificPopup({type:'image'});


	$("a[href*='#about'], a[href*='#portfolio'], a[href*='#home'], a[href*='#contacts']").mPageScroll2id();

	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else{
			$('.top').removeClass('active');
		}
	});


	$().stellar();

});

 

