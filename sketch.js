const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine,ground,ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  
  var options={
    isStatic:true
     }
     
  var option={
      restitution:10
       }
  engine=Engine.create();
  world=engine.world
  ground=Bodies.rectangle(200,390,1200,20,options)
  ball=Bodies.circle(200,100,20,option)
  World.add(world,ball)
  World.add(world,ground)

}

function draw() {
  background("yellow");
  Engine.update(engine)


  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20)
  console.log ("hello")

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}