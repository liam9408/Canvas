class Undo extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.color = currentColor;  
        this.lineWidth = lineWidth;   
                   
    }
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];

    }
    onDragging(coord,event){
        this.contextDraft.strokeStyle = currentColor;
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();   
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.strokeStyle = currentColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();   
    }
    onMouseLeave(){}
    onMouseEnter(){}

    // draw(x,y){
    //     this.contextDraft.lineTo(x,y);
    //     this.contextDraft.moveTo(x,y);
    //     this.contextDraft.closePath();
    //     this.contextDraft.stroke();    
    // }
}



