currentFunction = new DrawingRectangle(contextReal,contextDraft);

$('#drawing-line').on('click', function(){
    currentFunction = new DrawingLine(contextReal,contextDraft)
})

$('#drawing-rectangle').on('click', function(){
    currentFunction = new DrawingRectangle(contextReal,contextDraft)
})

$('#eraser').on('click', function(){
    currentFunction = new Eraser(contextReal,contextDraft)
})