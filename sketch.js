
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,140,20,20);
 trex.addAnimation("running",trex_running)
 trex.scale=0.5;
 ground = createSprite(300,170,600,20);
}

function draw(){
  background("white");
  trex.collide(ground);
  drawSprites();
  if(keyDown("space")) {
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5;

}
