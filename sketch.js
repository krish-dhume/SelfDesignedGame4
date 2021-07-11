const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var backImg,ground;

var asteroid=[];
var saviour;
var GameState=1;
var END=0;
var restart,restartImg;
var asteroidOptions;
var asteroidImg;
function preload(){
backImg=loadImage("maxresdefault.jpg");
restartImg=loadImage("Restart.jpg");
asteroidImg=loadImage("Asteroids.jpg")
}


function setup(){

myengine=Engine.create();
myworld=myengine.world;
createCanvas(displayWidth,displayHeight);
ground=new Ground(displayHeight/2+40,displayHeight/2+300,displayWidth+500,20)
//ground1=new Ground(displayHeight-100,displayHeight/2-100,displayWidth/10+400,20)
//ground2=new Ground(displayHeight-800,displayHeight/2-100,displayWidth/20+400,20)
saviour=new Saviour(displayHeight/2+100,displayWidth/2-10,80);
console.log(displayHeight);
console.log(displayWidth);



restart=createSprite(displayWidth/2,displayHeight/2,20,20);
restart.addImage(restartImg);
restart.scale=0.5;
restart.visible=false;




}

function draw(){
    Engine.update(myengine)
background(backImg);
saviour.display();
ground.display();
//ground1.display();
//ground2.display();


   
      console.log(asteroid.y)//
      for(var i=0;i<asteroid.length;i++){
        asteroid[i].display();
    }
 
     
      //if(ground.y-asteroid.y<100){
      //restart.visible=true;
      //}

      if(frameCount%60===0){
        asteroid.push(new Asteroid(random(width/2+700,width/2-700,width/2+800,width/2-800,width/2+600,width/2-600),10,10))
          }
          
drawSprites();
}
//function createAsteroid(){
 // var asteroidOptions={
    //isStatic:false,
  //}
  //if(frameCount%60===0){
  //var asteroid=createSprite(random(width/2+700,width/2-700,width/2+800,width/2-800,width/2+600,width/2-600),20,40,asteroidOptions);
     //asteroid.addImage(asteroidImg);
     //asteroid.scale=0.1;
//}
//}
