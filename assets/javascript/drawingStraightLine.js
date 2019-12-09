class DrawingStraightLine extends PaintFunction {
    constructor(contextReal,contextDraft,) {
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
     
    }
    onMouseDown(coord, event) {
        this.contextDraft.strokeStyle = currentColor;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        this.contextReal.strokeStyle = currentColor
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
        console.log(this.origX)
    }
    onDragging(coord, event) {
        
        this.contextDraft.beginPath(); 
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.lineTo(coord[0], coord[1]);   
        this.contextDraft.stroke();
        
    }
    onMouseMove() { }
    onMouseUp(coord, event) {
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
    }
    onMouseLeave() { }
    onMouseEnter() { }
    draw(x, y) {
        this.contextReal.lineTo(x, y);
        this.contextReal.moveTo(x, y);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
}
//1.pick a color
//2. apply it to every  other function, use a function
Collapse



