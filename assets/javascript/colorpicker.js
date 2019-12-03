//
// COLOR PICKER -------------------------
//

$('#color-picker').mouseover(function() {
  $('#color-picker').animate({height: "100px", width: "400px"}, 300)
  // $('.slider').slideDown()
  $('.color-button').slideDown()
  $('#color-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.20)')
  $('.fa-palette').slideUp()
})

$('#color-picker').mouseleave(function() {
  $('#color-picker').animate({height: "50px", width: "50px"}, 300)
  // $('.slider').slideDown()
  $('.color-button').slideUp()
  $('#color-picker').css('box-shadow', '0px 0px 40px -15px rgba(0,0,0,0.60)')
  $('.fa-palette').slideDown()
})

//
// SELECTING COLOR -------------------------
//

var currentColor = "Black";

// var colorButtons = document.getElementsByClassName("color-button")

// var colorCodes = ["#DC143C", "#FF4500", "#3CB371", "#4169E1", "#8B008B"]

// for (var i = 0; i < colorButtons.length; i++) {
//   colorButtons[i].click(function() {
//     currentColor = colorCodes[i];
//     console.log(colorCodes[i])
//   })
// }

$('#color-button-red').click(function() {
  currentColor = "#DC143C";
  // $(this).css('border-style', 'double')
})
  
$('#color-button-orange').click(function() {
  currentColor = "#FF4500";
  // $(this).css('border-style', 'double')
})

$('#color-button-green').click(function() {
  currentColor = "#3CB371";
  // $(this).css('border-style', 'double')
})

$('#color-button-blue').click(function() {
  currentColor = "#4169E1";
  // $(this).css('border-style', 'double')
})

$('#color-button-purple').click(function() {
  currentColor = "#8B008B";
  // $(this).css('border-style', 'double')
})

$('#color-button-black').click(function() {
  currentColor = "#000";
  // $(this).css('border-style', 'double')
})

$('#color-button-yellow').click(function() {
  currentColor = "#FFFF00";
  // $(this).css('border-style', 'double')
})



$( function() {
  $( "#slider" ).slider();
} );
