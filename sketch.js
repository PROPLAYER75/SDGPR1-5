var cricket_pitch_img,ball_img,bat_img;//images
var pitch,ball,bat,pitchingline,bat_limit,bat_limit2,stump1,stump2,stump3;//sprites
function preload(){
cricket_pitch_img=loadImage("ptch gif.jpg")
ball_img = loadImage("ball gif gif.gif")
bat_img = loadImage("batimage2.png")
}



function setup() {
  createCanvas(800,400);
  ball = createSprite(750,250,10,10)
  ball.addImage(ball_img);
  ball.scale=0.1;
  bat = createSprite(130,100,10,10)
  bat.addImage(bat_img);
  bat.debug=false;
  bat.setCollider("rectangle",0,0,40,350)
  bat.scale=0.177777;
  bat_limit=createSprite(250,230,10,190)
  bat_limit.visible=false;
  bat_limit2=createSprite(110,230,10,190)
  bat_limit2.visible=false;
  stump1=createSprite(70,250,7,100)
  stump1.shapeColor="red";
  stump2=createSprite(100,247,7,90)
  stump2.shapeColor="red";
  stump3=createSprite(85,249,7,96)
  stump3.shapeColor="red";
  //pitchingline = createSprite(100,200,300,5)
}



function draw() {
  background(cricket_pitch_img);  
  drawSprites();

if(keyDown(UP_ARROW)){
  ball.velocityX=random(-20,-5)
  ball.velocityY=0.8;

}

if(keyDown(DOWN_ARROW)){


}

if(keyDown(RIGHT_ARROW)){
  bat.x=bat.x+7;

}
if(ball.isTouching(stump1)){
  ball.velocityX=0;
  ball.velocityY=0;
fontSize(20)
  text("OUT",400,200)
}

if(keyDown(LEFT_ARROW)){
  bat.x=bat.x-7;

}

if(ball.isTouching(bat)){

  ball.velocityX=random(10,30);
  ball.velocityY=random(-0.8,15)
}
 bat.collide(bat_limit);
 bat.collide(bat_limit2);
}