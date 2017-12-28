$(function() {

	

	$(".marketing-platform .marketing-item .marketing-item-wrap").matchHeight();
	$(".advantag .advantag-item").matchHeight();
	$(".key-facts .key-facts-item p").matchHeight();
	$(".partners .partners-logos .logo-wrap").matchHeight();
	$(".case .case-items .case-item .item-text p").matchHeight();
	$(".potential-item").matchHeight();
	$(".isMarkPlat-inner .platform-description .platform-description-top .desc-item").matchHeight();
	$(".isCases-inner .platform-description .platform-description-top .desc-item").matchHeight();
	$(".isCustomers .customers-reviews .customers-items .cust-item p").matchHeight();



	$('.case .case-carousel .owl-carousel').owlCarousel({
	    loop: true,
	    margin: 50,
	    responsive:{
	        320:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    },
		nav: true,
		dots: false,
		navText: ['<span class="glyphicon glyphicon-menu-left"></span>','<span class="glyphicon glyphicon-menu-right"></span>']
	});	

	$('.isMarkPlat-inner .carousel-description .owl-carousel').owlCarousel({
	    loop: true,
	    items: 1,
		dots: true
	});	


	$(".tab").click(function(){
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active");


    $(".isMarketingPlatform .selection .advertising").selecter({
    	label: 'Тип рекламоносителя',
    	customClass: 'advertis'
    });

    $("select.platform-type").selecter({
    	label: 'Тип площадки',
    	customClass: 'platform'
    });

    $('.popup-btn').magnificPopup();
    $('.btn-red').magnificPopup();

    

});

