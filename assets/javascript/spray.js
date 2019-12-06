class Spray extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;   
        this.color = currentColor;   
        this.lineWidth = lineWidth;          
    }
    
    onMouseDown(coord,event){
        console.log('hello');
        this.context.strokeStyle = 'black' //currentColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = 5//lineWidth;
        this.context.shadowBlur = 5//lineWidth;
        this.context.shadowColor = 'black' // currentColor;
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