class DrawingLineStyle extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;   
        this.color = currentColor;            
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = currentColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.shadowBlur = 10;
        this.context.shadowColor = currentColor;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}