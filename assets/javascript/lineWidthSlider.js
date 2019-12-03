let slider = document.getElementById("range");
var value = slider.value; // Display the default slider value// console.log(slider)

var lineWidth = 5;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  value = this.value;
  lineWidth = value;
  console.log(value)
}
