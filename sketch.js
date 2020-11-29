const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,50);
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 25; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 50));
  }

  for(var j = 25; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 150));
  }

  for(var j = 25; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 250));
  }

  for(var j = 25; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 350));
  }

  for(var j = 25; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 450));
  }
   
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");

  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10),10 ,10));
  } 

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }

  drawSprites();
}