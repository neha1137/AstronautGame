var bath,bathImage;
var brush,brushImage;
var drink,drinkImage;
var eat,eatImage;
var gym,gymImage;
var bg,bgImage;
var move,moveImage;
var sleepImage;
var astronaut;

function preload(){
  bgImage=loadImage("iss.png");
  sleepImage=loadAnimation("sleep.png");
  brushImage=loadAnimation("brush.png");
  bathImage=loadAnimation("bath1.png","bath2.png");
  drinkImage=loadAnimation("drink1.png","drink2.png");
  eatImage=loadAnimation("eat1.png","eat2.png");
  gymImage=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  moveImage=loadAnimation("move.png","move1.png");

}

function setup() {
  createCanvas(600,500);
  
  astronaut=createSprite(300, 250, 50, 50);
  astronaut.addAnimation("sleep.png",sleepImage);
  astronaut.scale=0.1;
  
  


}

function draw() {
  background(bgImage);
  text("INSTRUCTIONS ",200,200);
  text("UP ARROW=BRUSHING",200,390);
  text("DOWN ARROW=GYMMING",200,380);
  text("LEFT ARROW=EATING",200,370);
  text("RIGHT ARROW=BATHING",200,360);
  text("m key=Moving",200,350);
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bathImage);
    astronaut.changeAnimation("bathing");
    astronaut.x=30;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eatImage);
    astronaut.changeAnimation("eating");
    astronaut.x=330;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brushImage);
    astronaut.changeAnimation("brushing");
    astronaut.x=100;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gymImage);
    astronaut.changeAnimation("gymming");
    astronaut.x=330;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImage);
    astronaut.changeAnimation("moving");
    astronaut.x=120;
    astronaut.velocityX=2;
    astronaut.velocityY=0;
  }
  drawSprites();
}