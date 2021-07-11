class Asteroid{
  constructor(x,y){
    var options={
      
      friction:0.5,
      density:1
    }
    this.body=Bodies.circle(x,y,40,options);
    World.add(myworld,this.body);
    this.radius=40;
    this.image=loadImage("Asteroids.jpg")
    this.visiblity=100;
  }

  
  
  

  display(){
  if(this.body.position.x-asteroid.position.x)
    var pos=this.body.position;
    var angle=this.body.angle;
    

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    
      

  
  
  }
}
