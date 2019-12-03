// var slider = document.getElementById("range");

let slider = document.getElementById("range");


var lineWidth = slider.value; // Display the default slider value

console.log(slider)



// // Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  lineWidth = this.value;
  console.log(lineWidth)
}

