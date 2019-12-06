let slider = document.getElementById("range");
var value = slider.value; // Display the default slider value// console.log(slider)

var lineWidth = 5;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  value = this.value;
  lineWidth = value;
  console.log(value)
  $('#linewidthIndicator').html(`LW:<br>${lineWidth}px`);
}


//
// PICKER -------------------------
//

  $('#lineWidth-picker').mouseover(function() {
    $('#range').slideDown()
    $('#lineWidth-picker').animate({height: "200px", width: "50px"}, 300)
    $('#linewidthIndicator').css('display', 'none');
  })
  
  $('#lineWidth-picker').mouseleave(function() {
    $('#range').slideUp()
    $('#lineWidth-picker').animate({height: "50px", width: "50px"}, 300)
    $('#linewidthIndicator').css('display', '');
  })