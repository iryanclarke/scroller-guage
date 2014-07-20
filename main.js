$(document).ready(function() {
  var maxVal = $(document).height() - $(window).height();
  $('.max').html(maxVal); 

  var ticks = 12;
  var currentTick = 1;

  computedAngle(0);
  console.log("Ticks: " + ticks);

  // Scroll handler   
  $(window).scroll(function () {
      var scrollTop = parseInt($(window).scrollTop());
      console.log(scrollTop);
      value = scrollTop;
      $('#ember213').attr("value", scrollTop);
      computedAngle(value);
    });

  // Function to calculate angle pointer should be at
  function computedAngle(value) {

      // Get window height
      var maxVal = $(document).height() - $(window).height();

      // Convert current position to percentage down the page
      var percentValue = Math.floor( value/maxVal * 100 );

      if (ticks != 0) {
          var newAngle = 180 / ticks;
          var breakpointVal = Math.floor( maxVal / ticks); 
      }

      var angle = (newAngle * (currentTick - 1)) - 90;

      if(value >= (breakpointVal * currentTick))
      {
          // Compute angle (out of 180 or 360)
          angle = Math.floor(180 * percentValue/100 - 90);

          console.log("Triggeredmore");
          currentTick++;
          angle = (newAngle * (currentTick)) - 90;
      }

      if(value <= (breakpointVal * currentTick))
      {
          // Compute angle (out of 180 or 360)
          angle = Math.floor(180 * percentValue/100 - 90);

          console.log("Triggeredless");
          currentTick--;
          angle = (newAngle * (currentTick)) - 90;
      }

      console.log("New Angle: " + newAngle + ". Breakpoint Value: " + breakpointVal + ". Angle Point 2: " + angle + ". Current Tick:" + currentTick);

      // If your value is greater than page length (For OSX 'bounce')
      if( value > maxVal ) { angle = 90; } 

      // If your value is negative (of or page, for OSX 'bounce')
      if ( value <= 0 ) { angle = -90; }

      // Rotating the needle
      $('.pointer').css("-webkit-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-2moz-transform", "rotate("+angle+"deg)");
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  

      // Rounding
      var round = value.toString();
      round = round.slice(0, -2);
      $('.pointer .value').html(round);    

  }
});


