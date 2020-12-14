const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var ground
var score = 0

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 500

function setup() {
  createCanvas(900, 1000);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(450,990,width)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var j = 60; j <= width; j += 70) {
    plinkos.push(new Plinkos(j, 75))
  }

  for (var j = 35;j <= width; j+=70){
    plinkos.push(new Plinkos(j,175))
  }

  for (var j = 60;j <= width; j += 70){
    plinkos.push(new Plinkos(j,275))
  }

  for (var j = 35; j <= width; j +=70){
    plinkos.push(new Plinkos(j,375))
  }

}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display();

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }

  for (var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if (frameCount%60===0){
    particles.push(new Particles(random(100,800),10,10))
    score++
  }
  for (var j = 0;j < particles.length;j++){
      particles[j].display();
  }

}

