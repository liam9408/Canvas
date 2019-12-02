class CurveLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    onMouseDown(coord, event){
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.bezierCurveTo(coord[0], coord[1], coord[0], coord[1], (this.origX+500), (this.origY));
        this.contextDraft.lineWidth = 5;
        this.contextDraft.strokeStyle = '#00BFFF';
        this.contextDraft.stroke();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.bezierCurveTo(coord[0], coord[1], coord[0], coord[1], (this.origX+500), (this.origY));
        this.contextReal.lineWidth = 5;
        this.contextReal.strokeStyle = '#00BFFF';
        this.contextReal.stroke();
     }
    onMouseLeave(){}
    onMouseEnter(){}
}
