class TextBox extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
}


//initial rotation, just for test
//$(".wrapper").rotate(-45);
//let's add draggable functionality
// $( function() {
//     $( ".wrapper" ).draggable();
//   } );
//  //close button action
//  document.getElementById('close').onclick = function() {
//         this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
//         return false;
// };
// //rotate button action
// var rotate = $('#rotate')
// dragging = false;
// rotate.mousedown(function() {
//     dragging = true
// })
// $(document).mouseup(function() {
//     dragging = false
// })
// $(document).mousemove(function(e) {
//     if (dragging) {
//         var mouse_x = e.pageX / 2;
//         var mouse_y = e.pageY / 2;
//         var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
//         var degree = (radians * (180 / Math.PI) * -1) + 90;
//         $(".wrapper").rotate(degree);
//       }
//   })