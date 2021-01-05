
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,box1, ground;

function preload() {

}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,375,70)	
	
    box1 = new Box(810,305,130,130);
	
	ground = new Ground(600,380,1200,20);
   
	Matter.Engine.run(engine)
}


function draw(){
  background(255);
  Engine.update(engine);

  paper.display();
  box1.display();
  ground.display();


}


function keyPressed() {

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x: 850, y:-850});

}
}
