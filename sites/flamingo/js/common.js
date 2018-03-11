$(function() {



  //img for background

  $(".tpslider__item").each(function() {
      var imgSrc = $(this).find(".js-img-bg").attr("src");
      $(this).css({
        'background' : 'url('+imgSrc+') no-repeat',
        'backgroundSize' : "cover"
      });
      $(this).find(".js-img-bg").remove();
  });


  $('.carousel').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    autoplaySpeed: 5000,
    arrows: false
  });


  //прилипание header к верху

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.header-top').fadeOut();
      $('.header-bottom').addClass('full');
      // $('.full').show(200);
    } else{
      $('.header-top').fadeIn();
      $('.header-bottom').removeClass('full');
      // $('.full').hide(200);
    }
  });
  

  //раскрытие поиск

  if($(window).width() > 768){
    $('#search-icon').click(function(){
        $('.header-bottom__form').show();
       $('.search-label__text').addClass('active');
       $(this).hide();
       $('#btnCloseSearch').show();
       $('#btnSearch').show();
       if($(window).width() > 992){
        $('.header-bottom__hidden').hide();
        }
      });
  }else
       $('#search-icon').click(function(){
        $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")){
      if ($(window).scrollTop() <= 100){
        $('.header').animate({
           top: '-60px'
         }, 300)
      }else{
        $('.header').animate({
           top: '0px'
         }, 300)
      }
      
      $('#mobile-search').slideDown(300);
      $('.header-bottom').addClass('full');
      $('body').css('overflow', 'hidden');
      $('#mobile-menu').slideUp();
    }else{
      $('#mobile-search').slideUp(300);
      $('.header').animate({
        top: '0'
      },300);
      if ($(window).scrollTop() <= 100){
       $('.header-bottom').removeClass('full');
      }
      $('body').css('overflow', '');
    } 
  });


  $('#btnCloseSearch').click(function(){
    $('.header-bottom__form').hide();
    $('.header-bottom__hidden').show();
    $('.search-label__text').removeClass('active');
    $(this).hide();
    $('#search-icon').show();
    $('#btnSearch').hide();

    if($(window).width() > 992){
      $('.header-bottom__hidden').show();
    }else
    $('.header-bottom__hidden').hide();
  });


  //адаптивное меню

  $('#hamburger').click(function(){
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")){
      if ($(window).scrollTop() <= 100){
        $('.header').animate({
           top: '-60px'
         }, 300)
      }else{
        $('.header').animate({
           top: '0px'
         }, 300)
      }
      $('#mobile-menu').slideDown(300);
      $('.header-bottom').addClass('full');
      $('body').css('overflow', 'hidden');
      $('#mobile-search').slideUp();
    }else{
      $('#mobile-menu').slideUp(300);
      $('.header').animate({
        top: '0'
      },300);
      if ($(window).scrollTop() <= 100){
       $('.header-bottom').removeClass('full');
      }
      $('body').css('overflow', '');
    } 
  });


  //модальное окно

  $('#footerBtn').click(function(){
    $('.modal').fadeIn();
    $('body').css('overflow-y', 'hidden');
  });


  $('#btn-close').click(function(){
    $('.modal').fadeOut();
    $('body').css('overflow-y', '');
  });


  $(".modal").on("click", function(e) {
    var x = $(e.target);
    if (x.is(this)) {
      $(this).css("display", "none");
      $(this).find("input").not("input[type=submit]").val("");
      $(this).find(".error").fadeOut(300);
      $('body').css('overflow', '');
    }
  });

});
   


