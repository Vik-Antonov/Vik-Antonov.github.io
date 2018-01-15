$(document).ready(function() {

	 $('.dropdown-menu_item').matchHeight();
	 $('.good_item').matchHeight();

  

  	  $(".owl-carousel").owlCarousel({
  	  	loop:true,
   		 nav:true,
   		 items:1,
   		 navText: ['<img src="img/arrow_left.png" alt="" />', '<img src="img/arrow_right.png" alt="" />'],

  	  });
});

