$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
  	items: 1,
  	dots: true
  });

  $('.category-item').equalHeights();
  $('.equalHeight').equalHeights();
  $('.equal').equalHeights();
  $('.boutique-height').equalHeights();
  $('.dashboard').equalHeights();
  $('.service-item').equalHeights();
  $('.service-item__defination').equalHeights();
  $('.wrapper .foods .foods-by-profession .prof-item__header').equalHeights();
  
  $("#select-size").selecter({
  		customClass: "size",
        label: 'Select Size'
    });

  $("#select-color").selecter({
  		customClass: "color",
        label: 'Select Color'
    });

});
   


