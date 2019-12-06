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
    $(`.wrapper`).toggle();
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

$('#selector').on('click', function(){
    currentFunction = new Selecting(contextReal,contextDraft, currentColor)
})

$('#selector-button').click(() => {
    currentFunction = new Selecting(contextReal,contextDraft);
});


/*============================================================================
*                               REDO UNDO
============================================================================*/
$('#undo').on('click', function(){
    console.log('undo yes') ; 
  undoI();
})
$('#redo').on('click', function(){
    console.log('redo yes') ; 
  redoI();
})


function saveMe(){ 

    console.log(canvasReal)
    let dataURL = canvasReal.toDataURL(); //why this.dataURL does not work? 
    data.push(dataURL);
    console.log(data)
}

function undoI(){
    console.log(data.length);
    if(data.length === 0){
        return;
        // stop the function if data[] is empty
    }

    if(data.length === 1){
        contextReal.fillStyle = '#ebe0df';
        contextReal.fillRect(0,0,canvasReal.width, canvasReal.height);
        redoData.push(data.pop()); 
    }else{ 
    let poppedData = data.pop();
    let lastItemUndo = data[data.length-1];
    canvasPic.src = lastItemUndo ;
    redoData.push(poppedData);

    canvasPic.onload = function () { 

        contextReal.drawImage(canvasPic, 0, 0); }

    } if(data.length === 0){
        return;
    }
}

function redoI(){
    
    if(redoData.length === 0){
        return;
    }  // stop the function if redodata[] is empty

    let poppedRedo = redoData.pop();
    data.push(poppedRedo);
    let lastItemRedo = redoData[redoData.length-1];
    canvasPic.src = poppedRedo;
    canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
}