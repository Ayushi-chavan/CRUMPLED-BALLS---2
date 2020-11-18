
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground;
var Paper;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground = new ground(width/2,670,width,20)
Paper = new paper(200,450,100)
     box1=new dustbin(1200,510,300,300)
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();
  Paper.display()
  Ground.display()
  box1.display()
  

}
function keyPressed(){
  if(keyCode===UP_ARROW){
  
  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  }
  }
