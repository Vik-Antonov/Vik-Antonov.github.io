$(function(){

  $(".slider-item").each(function() {
      var imgSrc = $(this).find(".js-img-bg").attr("src");
      $(this).css({
        'backgroundImage' : 'url('+imgSrc+')',
        'backgroundSize' : 'cover',
        'backgroundRepeate' : 'no-repeate'
      });
      $(this).find(".js-img-bg").remove();
  });

  $(".banner").each(function() {
      var imgSrc = $(this).find(".js-img-bg").attr("src");
      $(this).css({
        'backgroundImage' : 'url('+imgSrc+')',
        'backgroundSize' : 'cover',
        'backgroundRepeate' : 'no-repeate'
      });
      $(this).find(".js-img-bg").remove();
  });

  $(".register-bg").each(function() {
      var imgSrc = $(this).find(".js-img-bg").attr("src");
      $(this).css({
        'backgroundImage' : 'url('+imgSrc+')',
        'backgroundSize' : 'cover',
        'backgroundRepeate' : 'no-repeate'
      });
      $(this).find(".js-img-bg").remove();
  });
  

   $('.slider').slick({
    'dots': true,
    'dotsClass': 'slider__dots',
    'nextArrow': '<svg class="slider__arrow"><use xlink:href="#arrow"></use></svg>'
  });

   $("#country").selecter({
    label : 'Country',
    customClass : 'reg__sel'
   });

   $(".selecter-options").niceScroll();


});
   


