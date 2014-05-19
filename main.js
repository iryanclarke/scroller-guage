var App = Em.Application.create();
var something1, something2;
var value;
App.ApplicationController = Em.ObjectController.extend({
  
  something1: 375,
  something2: 500
  
});

App.MyGaugeComponent = Em.Component.extend({
  classNames: ['gauge'],
  classNameBindings: ['isMaxValueExceeded:exceeded'],

  isMaxValueExceeded: function(){
    var value = parseInt(this.get('value'), 10);
    var maxValue = parseInt(this.get('maxValue'), 10);
    return (value > maxValue);
  }.property('value', 'maxValue'),

  computedAngle: function(){
    //var value = this.get('value');
    var maxValue = this.get('maxValue');
      var value = parseInt($(window).scrollTop());
      var maxValue = this.get('maxValue');
    

    var percentValue = Math.floor( value/maxValue * 100 );
    var angle = Math.floor(180 * percentValue/100 - 90);
    var styles = ( this.get('isMaxValueExceeded') ) ? 
                  '-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg);' : 
                  '-webkit-transform: rotate('+angle+'deg); -2moz-transform: rotate('+angle+'deg); -ms-transform: rotate('+angle+'deg); transform: rotate('+angle+'deg);';

    return styles;
  }.property('value', 'maxValue')
});


$(document).ready(function() {

  $(window).scroll(function () {
      var scrollTop = parseInt($(window).scrollTop());
      console.log(scrollTop);
      value = scrollTop;
      $('#ember213').attr("value", scrollTop);
      computedAngle(value);
    });

  function computedAngle(value) {
      var maxVal = 500;
      var percentValue = Math.floor( value/maxVal * 100 );
      var angle = Math.floor(180 * percentValue/100 - 90);
      if( value > maxVal ) { angle = 90; } 
      if ( value <= 0 ) { angle = -90; }
      $('.pointer').css("-webkit-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-2moz-transform", "rotate("+angle+"deg)");
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  
      $('.pointer').css("-ms-transform", "rotate("+angle+"deg)");  
      $('.pointer .value').html(value);           
  }


});


