class Saviour{
    constructor(x,y,width){
        var options={
            friction:0.5,
      density:1
        }
        this.body=Bodies.rectangle(x,y,width,50,options);
        World.add(myworld,this.body);
        this.width=width;
        this.height=50;
        
        this.image=loadImage("Saviour.jpg")
    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY
        var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop()
    }
}