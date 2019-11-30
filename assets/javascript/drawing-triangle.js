class DrawingTriangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        console.log(coord)
        this.contextReal.fillStyle = "#f28";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "#f28";
        this.contextDraft.beginPath(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.moveTo(coord[0],coord[1]);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.beginPath(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fill(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}




// // hardcoded, but you would get those from user
// var AB = 40;
// var BC = 50;
// var AC = 30;

// var A = [0, 0]; // starting coordinates
// var B = [0, AB];
// var C = [];

// // calculate third point
// C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
// C[0] = Math.sqrt(AC * AC - C[1] * C[1]);
// console.log(A, B, C);

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(A[0], A[1]);
// ctx.lineTo(B[0], B[1]);
// ctx.lineTo(C[0], C[1]);
// ctx.fill();