var spacecraftImg, spacecraftAirImg, spacecraftLImg, spacecraftRImg
var spacecraft, spacecraftAir, spacecraftL, spacecraftR

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  issImg=loadImage("Images/iss.png")
  spacecraftImg=loadImage("Images/spacecraft1.png")
  spacecraftAirImg=loadImage("Images/spacecraft2.png")
  spacecraftLImg=loadImage("Images/spacecraft3.png")
  spacecraftRImg=loadImage("Images/spacecraft4.png")
}

function draw() {
  background(255,255,255); 
  spacecraft.addImage(spacecraftImg)
  spacecraft.x = spacecraft.x + random(-1, 1)
  drawSprites();
}