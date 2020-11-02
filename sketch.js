var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,800);

speed=random(55,90);
weight=random(400,1500);

car=createSprite(50,200,50,50);
car.shapeColor=color(255);
car.velocityX=speed;

wall=createSprite(700,100,60,height/2);
wall.shapeColor=color("white");

}

function draw() {
  background(0);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
   car.velocityX=0;
   var deformation=0.5* weight +speed*speed/22509;
if(deformation>180)
  {
    car.shapeColor=color(52,244,0);
  }
  else

if(deformation<180 && deformation>100)
{
  car.shapeColor=color(255,255,0);
}
else

if(deformation<180)
{
  car.shapeColor=color(255,0,0);
}


  }
  drawSprites();
}