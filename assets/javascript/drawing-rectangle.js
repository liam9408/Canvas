class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.color = currentColor;             
    }
    
    onMouseDown(coord,event){
        console.log(coord)
        this.contextReal.fillStyle = currentColor;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = currentColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.shadowBlur = 0;
        this.contextDraft.shadowColor = currentColor;
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.shadowBlur = 0;
        this.contextReal.shadowColor = currentColor;
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
      
    }
    onMouseLeave(){}
    onMouseEnter(){}
}