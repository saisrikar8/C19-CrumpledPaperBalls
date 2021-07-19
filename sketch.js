
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

var ball;
var ground;
var leftSide;
var rightSide;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS);
	rectMode(CENTER);

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};
	ground = new Ground(500, 680, 1000, 10);
	ball = Bodies.circle(200, 50, 10, ball_options);
	leftSide = new Ground(650, 630, 10, 100);
	rightSide = new Ground(850, 630, 10, 100);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  push();
  fill("white");
  ellipse(ball.position.x, ball.position.y, 10);
  pop();
  leftSide.display();
  rightSide.display();
  ground.display();

  drawSprites();
  console.log(frameRate());
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(ball, {x:750, y:680}, {x:10, y: 3});
	}
}



