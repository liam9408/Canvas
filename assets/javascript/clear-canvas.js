class ClearCanvas extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;      
        contextReal.fillStyle = '#ebe0df';
    contextReal.fillRect(0,0,canvasReal.width, canvasReal.height);    
    saveMe(); 
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){ }
    onMouseLeave(){}
    onMouseEnter(){}
}

