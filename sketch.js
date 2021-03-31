
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinObj2;
var groundObject;
var world;
var paper, paperImg;

function preload(){
	paperImg = loadImage('paper.png');
}


function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,600,width,20);
	dustbinObj = new dustbin(500,580);
	dustbinObj2 = new dustbin(1130,580);
	paper = new Paper(100,400,30);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(255);

	fill(255,0,0);
	textSize(20);
	text("Press Right arrow to go forwed. Press Left Arrow to go backward. Press Down Arrow to move down. Press Up arrow to move up", 60, 50)

	groundObject.display();
	dustbinObj.display();
	dustbinObj2.display();
	paper.display();

	drawSprites();
} 

function keyPressed()
{
  if (keyCode === RIGHT_ARROW)
  {
     Matter.Body.applyForce(paper.body, paper.body.position, {x: 200, y: -300});
  }
  if (keyCode === LEFT_ARROW)
  {
     Matter.Body.applyForce(paper.body, paper.body.position, {x: -200, y: -300});
  }
  if (keyCode === UP_ARROW)
  {
     Matter.Body.applyForce(paper.body, paper.body.position, {x: -0, y: -300});
  }
  if (keyCode === DOWN_ARROW)
  {
     Matter.Body.applyForce(paper.body, paper.body.position, {x: 0, y: 300});
  }
}