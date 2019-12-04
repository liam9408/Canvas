currentFunction = new PaintFunction(contextReal,contextDraft);

$('#brush-button-normal').on('click', function(){
    currentFunction = new DrawingLine(contextReal,contextDraft, currentColor)
})

$('#drawing-rectangle').on('click', function(){
    currentFunction = new DrawingRectangle(contextReal,contextDraft, currentColor)
})

$('#drawing-triangle').on('click', function(){
    currentFunction = new DrawingTriangle(contextReal,contextDraft, currentColor)
})

$('#drawing-circle').on('click', function(){
    currentFunction = new DrawingCircle(contextReal,contextDraft, currentColor)
})

$('#eraser').on('click', function(){
    currentFunction = new Eraser(contextReal,contextDraft, currentColor)
})

$('#clear-canvas').on('click', function(){
    currentFunction = new ClearCanvas(contextReal,contextDraft, currentColor)
})

$('#textbox').on('click', function(){
    currentFunction = new TextBox(contextReal,contextDraft, currentColor)
})

$('#undo').on('click', function(){
    currentFunction = new Undo(contextReal,contextDraft, currentColor)
})

$('#redo').on('click', function(){
    currentFunction = new Redo(contextReal,contextDraft, currentColor)
})

$('#curve-line').on('click', function(){
    currentFunction = new CurveLine(contextReal,contextDraft, currentColor)
})

$('#curve-line').on('click', function(){
    currentFunction = new CurveLine(contextReal,contextDraft, currentColor)
})

$('#brush-button-spray').on('click', function(){
    currentFunction = new Spray(contextReal,contextDraft, currentColor)
})

