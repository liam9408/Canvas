  //
  // HOVER EFFECT -------------------------
  //

  $('.brush-button').mouseover(function() {
    $(`#${event.target.id}`).animate({width: '35px', height: '35px'}, 80, 'linear');
    $(`#${event.target.id}`).css('font-size', '20px');
    $(`#${event.target.id}`).css('color', 'deepskyblue');
  })
  
  $('.brush-button').mouseleave(function() {
    $(`#${event.target.id}`).animate({width: '30px', height: '30px'}, 80, 'linear');
    $(`#${event.target.id}`).css('font-size', '15px');
    $(`#${event.target.id}`).css('color', 'black');
  })
  
  //
  // BRUSH PICKER -------------------------
  //
  
  $('#brush-picker').mouseover(function() {
    $('#brush-picker').animate({height: "150px", width: "50px"}, 300)
    $('.brush-button').slideDown()
    $('#brush-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.20)')
    $('#brush-picker').css('background-color', 'red')
    $('#fa-brush').slideUp()
  })
  
  $('#brush-picker').mouseleave(function() {
    $('#brush-picker').animate({height: "50px", width: "50px"}, 300)
    $('.brush-button').slideUp()
    $('#brush-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.60)')
    $('#fa-brush').slideDown()
  })
  
//
// SELECTING COLOR -------------------------
//

let currentBrushIcon = "fa fa-brush";

$('#brush-button-normal').click(function() {
    $('#fa-brush').removeClass(currentBrushIcon)
    $('#fa-brush').addClass("fa fa-paint-brush")
    currentBrushIcon = "fa fa-paint-brush";
  })

  $('#brush-button-spray').click(function() {
    $('#fa-brush').removeClass(currentBrushIcon)
    $('#fa-brush').addClass("fa fa-paint-roller")
    currentBrushIcon = "fa fa-paint-roller"
  })

  $('#brush-button-three').click(function() {
    $('#fa-brush').removeClass(currentBrushIcon)
    $('#fa-brush').addClass("fa fa-brush")
    currentBrushIcon = "fa fa-brush"
  })
    