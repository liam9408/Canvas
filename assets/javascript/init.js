currentFunction = new PaintFunction(contextReal,contextDraft);

$('#drawing-line').on('click', function(){
    currentFunction = new DrawingLine(contextReal,contextDraft)
})

$('#drawing-rectangle').on('click', function(){
    currentFunction = new DrawingRectangle(contextReal,contextDraft)
})

$('#drawing-triangle').on('click', function(){
    currentFunction = new DrawingTriangle(contextReal,contextDraft)
})

$('#drawing-circle').on('click', function(){
    currentFunction = new DrawingCircle(contextReal,contextDraft)
})

$('#eraser').on('click', function(){
    currentFunction = new Eraser(contextReal,contextDraft)
})

$('#clear-canvas').on('click', function(){
    currentFunction = new ClearCanvas(contextReal,contextDraft)
})

$('#textbox').on('click', function(){
    currentFunction = new TextBox(contextReal,contextDraft)
})

$('#undo').on('click', function(){
    currentFunction = new Undo(contextReal,contextDraft)
})

$('#redo').on('click', function(){
    currentFunction = new Redo(contextReal,contextDraft)
})

$('#curve-line').on('click', function(){
    currentFunction = new CurveLine(contextReal,contextDraft)
})