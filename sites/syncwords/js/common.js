$(function(){

  $('#hamburger').click(function(){
    $('.mobile-menu').slideToggle();

    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
    }else{
      $(this).addClass('is-active');
    }
  });

  $('.js-btn-try').click(function(){
    $('#popup').show();
    $('body').css('overflow', 'hidden');
  });

  $('#close').click(function(){
    $('#popup').hide();
    $('body').css('overflow', '');
  });

   $(".popup__overlay").on("click", function(e) {
    var x = $(e.target);
    if (x.is(this)) {
      $('#popup').hide();
      $(this).find("input").not("input[type=submit]").val("");
      $(this).find(".error").fadeOut(300);
      $('body').css('overflow', '');
    }
  });

  function installBg(a){
    var block = $(a);
    var src = block.find('.bg-img').attr('src');
    block.css({
      'backgroundImage':'url('+ src +')'
    });
    block.find('.bg-img').remove();
  };

  installBg('.sCaption-top');
  installBg('.sTop');
  installBg('.sMotivation');
  installBg('.footer');
  
  
  $(window).on('scroll', function(){
    if($(this).scrollTop() > $(this).height()){
      $('.btn-up').addClass('active');
    }else{
      $('.btn-up').removeClass('active');
    }
  });

  $('.btn-up').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000)
  })


});
   


