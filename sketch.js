var ground;
var gameState;
var dora, doraimg, doraImage;
var gameState, PLAY, END;
var doraGroup,obstacleGroup;

function preload(){
  
  //loading animation and images
  doraimg = loadImage( "doraeat.png")
  
  doraImage = loadImage("doracake.png");
  obstacleImage = loadImage("obstacle.png");
  //bgroundImg=loadImage("heidibg2.jpeg");
  doraimg2=loadImage("sadora.jpeg");
}


function setup() {
 createCanvas(displayWidth-30, displayHeight-130); 

  score=0;

  dora= createSprite(displayWidth/4, displayHeight-200);
  dora.addImage(doraimg);
  dora.scale=0.2;

  ground= createSprite(displayWidth-600, displayHeight-150, 1500,10);
  
  doraGroup= new Group();
  obstacleGroup= new Group();
  PLAY=1;
  END=0;
  gameState=1;
  
}


function draw() {
background("darkGreen");
  
  textSize(20);
text("Score: "+score,50,18);
text("Press up arrow key to jump", 180,18);

dora.velocityY= dora.velocityY+1;
dora.collide(ground);


if(gameState===PLAY){

  Score();
Dora();
Obstacle();
    //monkey jumps when space key is pressed
  if (keyDown("UP_ARROW") && dora.y>=100 ){
    dora.velocityY=-10;
    dora.velocityx=0;
  }

    

  if(doraGroup.isTouching(dora)){
    doraGroup.destroyEach();
    score= score+7;
  }
   

if (obstacleGroup.isTouching(dora)){
  gameState=END;
  dora.addImage(doraimg2);
  dora.scale=0.7;
}
}
 if(gameState===END){
 
  //gamestate end
  
obstacleGroup.setLifetimeEach(-1);
doraGroup.setLifetimeEach(-1);

obstacleGroup.destroyEach();
doraGroup.destroyEach();
  
}


ground.visible= false;

//camera.position.x= displayWidth/2;
  

drawSprites();  
}


function Dora(){
  
  if(frameCount % 80 ===0){
var dorame= createSprite(displayWidth,displayHeight,5,5);    
dorame.y= Math.round(random(100,displayHeight-250));
dorame.addImage(doraImage);
dorame.lifetime=210;
dorame.velocityX=-6;
dorame.scale=0.1;
    
doraGroup.add(dorame);   
  } 
}

function Score(){
  
  switch (score){
  
  case 30: dora.scale=0.24;
          break;
  case 60: dora.scale=0.26; 
          break;
  case 90: dora.scale=0.28;  
          break;
  case 120: dora.scale=0.30; 
          break;
   default : break;
    
  }    
}



function Obstacle(){
  
  if(frameCount % 100 ===0){
var obstacle =createSprite(displayWidth-50,displayHeight-200,5,5);    
obstacle.y=Math.round(random(100, displayHeight-250));
obstacle.addImage(obstacleImage);
obstacle.lifetime=250;    
obstacle.velocityX=-10;    
obstacle.scale=0.2;    
    
obstacleGroup.add(obstacle);   
  }
}
