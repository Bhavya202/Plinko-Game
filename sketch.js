const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

//create the arrays
var particles = [];
var plinkos = [];
var divisions =[];

//define the position of division in variable
var divisionHeight = 300;
var score = 0;

function setup() {
  //create the canvas
  createCanvas(800, 800);

  //create the engine and add it to the world
  engine = Engine.create();
  world = engine.world;

  //create the ground
  ground = new Ground(width/2, height, width, 20);

  //create division objects
  for (var k = 0; k <=width; k=k+100){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 75; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  //create the background
  background("black");

  //write the text
  textSize(20);
 
  //update the engine
  Engine.update(engine);

  //display the ground
  ground.display();

  //create particle objects
  if (frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10, 10));
  }  

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles
  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}