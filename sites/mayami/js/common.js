$(window).ready(function(){

$( "#slider" ).slider({
    value: 200,
    min: 200,
    max: 1000,
    step: 10,
    slide: function( event, ui ) {
      var x = ui.value;
      $( "#result" ).text(x);
      $( "#clients" ).text(x * 1.5);

      $("#turnover").text(x * 1.5 * 300);
      var turnover = $('#turnover').text();

      $("#wages").text(x * 112.5);
      var wages = $("#wages").text();

      $("#rent").text(x * 75);
      var rent = $("#rent").text();

      $("#royalty").text(x * 22.5);
      var royalty = $("#royalty").text();

      $("#other").text(x * 45);
      var other = $("#other").text();

      var profit = turnover  - wages - rent - royalty - other + '';
      var profitBefore = profit.substring(0, profit.length-3);
      var profitAfter = profit.substring(profit.length-3, profit.length);
      profit = profitBefore + '.' + profitAfter;
      $('#profit').text(profit);

    }
  });
  $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );

  $(".ui-slider-handle").prepend("<span class='outcome'><span id='result'>200</span><span>m2</span></span>");
  $(".ui-slider").prepend("<div class='loader'></div>");



  new WOW().init();

  function timeCounter(){
    var minutes = $('#minutes');
    var secounds = $('#secounds');
    var minutesText = $('#minutes-text');
    var secoundsText = $('#secounds-text');
    var currentSecounds = 0;
    var currentMinutes = 0;

    function counter(){
      if(currentSecounds == 59){
        currentSecounds = 0;
        currentMinutes++;
        if(currentMinutes == 1){
          minutesText.text('минуту');
        }else if(currentMinutes >=2 && currentMinutes <=4){
          minutesText.text('минуты');
        }else{
           minutesText.text('минут');
        } 
      }
      else{
        ++currentSecounds;
        // if(currentSecounds == 1){
        //     secoundsText.text('секунду');
        // }else if(currentSecounds >= 2 & currentSecounds <=4 ){
        //   secoundsText.text('секунды');
        // }else if(currentSecounds >= 5){
        //   secoundsText.text('секунд');
        // }
      }
      minutes.text(parseInt(currentMinutes));
      secounds.text(parseInt(currentSecounds));
    };

    setInterval(counter, 1000);
  };

  timeCounter();

  function moneyCounter(){
    var sum = $('#sum');
    currentSum = 0;

    function money(){
      sum.text(parseFloat( (currentSum += 0.0453).toFixed(2) ));
    };

    setInterval(money, 1000);
  };

  moneyCounter();

  $('.header__btn').click(function(){
    $('.discount-overlay').fadeIn(300);
  });

  $('.btn-close').click(function(){
    $('.discount-overlay').fadeOut(300);
    $(".discount-overlay").find(".error").fadeOut();
    $(".discount-overlay input").not("input[type=submit]").val("");
  });

  $(".discount-overlay").on("click", function(e) {
    var x = $(e.target);
    if (x.is(this)) {
      $(this).css("display", "none");
      $(this).find("input").not("input[type=submit]").val("");
      $(this).find(".error").fadeOut(300);
    }
  });


      if ($("#ss-form").length) {
        
        //validation name
        $("#ss-form #entry_154507241").keyup(function() {
            var input = $(this).val();
            if (input === "") {
                $(this).removeClass("ready");
                $(this).parent().find(".error").eq(0).css("display", "block");
                $(this).parent().find(".error").eq(1).css("display", "none");
            } else {
                $(this).parent().find(".error").eq(0).css("display", "none");
                var pattern = new RegExp("^[a-z, а-я, і, ї, є, ']+$", "i");
                var isValid = this.value.search(pattern) >= 0;
                if (!(isValid)) {
                    $(this).parent().find(".error").eq(1).css("display", "block");
                    $(this).removeClass("ready");
                } else {
                    $(this).parent().find(".error").eq(1).css("display", "none");
                    $(this).addClass("ready");
                }
            }
        });
        
        //validation phone
        $("#ss-form #entry_1275345737").keyup(function() {
            var input = $(this).val();
            if (input === "") {
                $(this).removeClass("ready");
                $(this).parent().find(".error").eq(0).css("display", "block");
                $(this).parent().find(".error").eq(1).css("display", "none");
            } else {
                $(this).parent().find(".error").eq(0).css("display", "none");
                var pattern = new RegExp("^[- +()0-9]+$");
                var isValid = this.value.search(pattern) >= 0;
                if (!(isValid)) {
                    $(this).parent().find(".error").eq(1).css("display", "block");
                    $(this).removeClass("ready");
                } else {
                    $(this).parent().find(".error").eq(1).css("display", "none");
                    $(this).addClass("ready");
                }
            }
        });
        
        //validation phone
        $("#ss-form #entry_1771024270").focusout(function() {
            var input = $(this).val();
            if (input === "") {
                $(this).removeClass("ready");
                $(this).parent().find(".error").eq(0).css("display", "block");
                $(this).parent().find(".error").eq(1).css("display", "none");
            } else {
                $(this).parent().find(".error").eq(0).css("display", "none");
                var pattern = new RegExp("^[-a-z0-9~!$%^&*_=+}{'?]+(.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(.[-a-z0-9_]+)*.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))(:[0-9]{1,5})?$", "i");
                var isValid = this.value.search(pattern) >= 0;
                if (!(isValid)) {
                    $(this).parent().find(".error").eq(1).css("display", "block");
                    $(this).removeClass("ready");
                } else {
                    $(this).parent().find(".error").eq(1).css("display", "none");
                    $(this).addClass("ready");
                }
            }
        });

        $('#ss-form').disabled = true;


        //filling the form
        $("#ss-form input[type=submit]").click(function() {
            var name = $("#ss-form #entry_154507241");
            var phone = $("#ss-form #entry_1275345737");
            var mail = $("#ss-form #entry_1771024270");
            if ((name.hasClass("ready") && phone.hasClass("ready")) || (name.hasClass("ready") && mail.hasClass("ready")) || (name.hasClass("ready") && phone.hasClass("ready") && mail.hasClass("ready"))) {
                $('#ss-form').disabled = false;
                
            } else { 
                $('#ss-form').disabled = true;
                if (!name.hasClass("ready")) {
                    name.parent().find(".error").eq(0).css("display", "block");
                }
                if (!phone.hasClass("ready")) {
                    phone.parent().find(".error").eq(0).css("display", "block");
                }
                if (!mail.hasClass("ready")) {
                    mail.parent().find(".error").eq(0).css("display", "block");
                }
                return false;
            }
        });
    }
})
  
