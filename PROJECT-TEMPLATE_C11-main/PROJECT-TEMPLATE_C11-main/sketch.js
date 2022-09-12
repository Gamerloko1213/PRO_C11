var ship, shipanim
var sea, seaimg

function preload(){

shipanim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400)
  sea.addImage("sea", seaimg)
  ship = createSprite(50,300,50,50)
  ship.addAnimation("ship", shipanim)
  ship.scale = 0.2
}

function draw() {
  background("white");
    drawSprites();

    sea.velocityX = -6

 if(sea.x < 0)
  sea.x = sea.width/2


}
