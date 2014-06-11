$(document).ready(function() {
  computedAngle(0);
  var maxVal = $(document).height() - $(window).height();
  $('.max').html(maxVal);    
  $(window).scroll(function () {
      var scrollTop = parseInt($(window).scrollTop());
      console.log(scrollTop);
      value = scrollTop;
      $('#ember213').attr("value", scrollTop);
      computedAngle(value);
    });

  function computedAngle(value) {
      var maxVal = $(document).height() - $(window).height();
      var percentValue = Math.floor( value/maxVal * 100 );
      var angle = Math.floor(180 * percentValue/100 - 90);
      if( value > maxVal ) { angle = 90; } 
      if ( value <= 0 ) { angle = -90; }
      $('.pointer').css("-webkit-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-2moz-transform", "rotate("+angle+"deg)");
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  
      var round = value.toString();
      round = round.slice(0, -1);
      $('.pointer .value').html(round);    

  }


});


