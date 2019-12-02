//
// CLICKING ON AND OFF (COLORS ONLY) -------------------------
//

// var button = document.getElementsByClassName("button");

// let count = 0;
// for (var i = 0; i < button.length; i++) {
//   $(button[i]).on("click", function() {
//     if (count % 2 === 0) {
//       $(`#${event.target.id}`).css("background-color", "deepskyblue");
//       count++;
//     } else if (count % 2 !== 0) {
//       $(`#${event.target.id}`).css("background-color", "white");
//       currentFunction = new PaintFunction(contextReal, contextDraft);
//       count++;
//     }
//   });
// }

//
// HOVER ON BUTTONS -------------------------
//

$('#drawing-rectangle').mouseover(function() {
    $('#title').html('Rectangle Tool')
    $('#body').html(`It's real simple: <br> <br> Drag that shit open like there is no tomorrow.`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

$('#drawing-triangle').mouseover(function() {
  $('#title').html('Triangle Tool')
  $('#body').html(`A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry. A triangle with vertices A, B, and C is denoted. <br> <br> In Euclidean geometry any three points, when non-collinear, determine a unique triangle and simultaneously, a unique plane (i.e. a two-dimensional Euclidean space)`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#drawing-circle').mouseover(function() {
  $('#title').html('Ellipse Tool')
  $('#body').html(`In mathematics, an ellipse is a plane curve surrounding two focal points, such that for all points on the curve, the sum of the two distances to the focal points is a constant. <br> <br> As such, it generalizes a circle, which is the special type of ellipse in which the two focal points are the same. `)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#drawing-line').mouseover(function() {
    $('#title').html('Line Tool')
    $('#body').html(`Don't know how to explain this... <br> <br> Just click and drag on the canvas to start drawing man.`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

$('#eraser').mouseover(function() {
    $('#title').html('Eraser')
    $('#body').html(`This tool is used to remove parts of the active layer or selection. It can be useful when working with multi-layered images as portions of an upper layer erased will allow lower layers to show through.`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

$('#clear-canvas').mouseover(function() {
  $('#title').html('Clear Canvas')
  $('#body').html(`Enough of this? Start a new page here. Don't forget to save! <br> <br> LOL just kidding ... there is no save button here.`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#textbox').mouseover(function() {
  $('#title').html('Create Textbox')
  $('#body').html(`A text box, text field or text entry box is a graphical control element intended to enable the user to input text information to be used by the program.`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#curve-line').mouseover(function() {
  $('#title').html('Bezier Curve')
  $('#body').html(`A Bézier curve is a parametric curve used in computer graphics and related fields. <br> <br> The curve, which is related to the Bernstein polynomial, is named after Pierre Bézier, who used it in the 1960s for designing curves for the bodywork of Renault cars.`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#undo').mouseover(function() {
  $('#title').html('Undo')
  $('#body').html(`If only this works in real life too.`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

$('#redo').mouseover(function() {
  $('#title').html('Redo')
  $('#body').html(`Because regret once is not enough.`)
  $(this).mouseleave(function() {
      $('#title').html('Hello World! <br> Welcome to Paint!')
      $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
  })
})

