//
// CLICKING ON AND OFF (COLORS ONLY) -------------------------
//

var button = document.getElementsByClassName("button");

let count = 0;
for (var i = 0; i < button.length; i++) {
  $(button[i]).on("click", function() {
    if (count % 2 === 0) {
      $(`#${event.target.id}`).css("background-color", "deepskyblue");
      count++;
    } else if (count % 2 !== 0) {
      $(`#${event.target.id}`).css("background-color", "white");
      currentFunction = new PaintFunction(contextReal, contextDraft);
      count++;
    }
  });
}

//
// HOVER ON BUTTONS -------------------------
//

$('#drawing-rectangle').mouseover(function() {
    $('#title').html('Draw a fucking rectangle!')
    $('#body').html(`It's real simple: <br> <br> Drag that shit open like there is no tomorrow.`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

$('#drawing-line').mouseover(function() {
    $('#title').html('You crossed the line man!')
    $('#body').html(`Scribble some shit and Sotherby's might pay you for it.`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

$('#eraser').mouseover(function() {
    $('#title').html('Erase that shit! Now!')
    $('#body').html(`Here's your second chance. Don't waste it!`)
    $(this).mouseleave(function() {
        $('#title').html('Hello World! <br> Welcome to Paint!')
        $('#body').html(`This is where you can draw lots of cool stuff and have lots and lots of fun! Don't be afraid if it's shit! Beauty is in the eye of the beholder! <br> <br> Everybody's gotta start somewhere right! Just click one of the below icons to start drawing!`)
    })
})

//