
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,dustbin;
var ground1;
var ball1;

function preload()
{
dustbin	= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new wall(1000,650,300,20);
	wall2 = new wall(850,580,20,150);
	wall3 = new wall(1150,580,20,150);

	ground1 = new ground(600,680,1200,20);

	ball1 = new ball(130,670,40,40);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightgreen");
  
  wall1.display();
 wall2.display(); 
wall3.display();

ground1.display();
  ball1.display();
  image(dustbin,825,500,350,180);
keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:3,y:-7});
	}
}

