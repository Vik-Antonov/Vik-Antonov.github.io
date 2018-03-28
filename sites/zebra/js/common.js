$(document).ready(function() {

  $(".owl-carousel").owlCarousel({
  	loop:true,
	 nav:true,
	 items:1,
	 navText: ['<img src="img/arrow_left.png" alt="" />', '<img src="img/arrow_right.png" alt="" />'],
  });

 $('.carousel_bg').each(function(){
 	var src = $(this).find('.img-bg').attr('src');
 	$(this).css('backgroundImage', 'url('+ src +')');
 	$(this).find('.img-bg').remove();
 });

$('.shopping').each(function(){
 	var src = $(this).find('.img-bg').attr('src');
 	$(this).css('backgroundImage', 'url('+ src +')');
 	$(this).find('.img-bg').remove();
 });
});

