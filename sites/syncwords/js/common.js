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
  
});
   


