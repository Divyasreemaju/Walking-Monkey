
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var banana;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(1000,200);
  monkey=createSprite(80,160,20,20);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale=0.1;
  
  
  
  
  
  ground = createSprite(100,190,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
  


  
  
  
  

  
}


function draw() {
   background(180);
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,200,50);
  
  
  
  
  
  
  


  if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;
    monkey.velocityY = monkey.velocityY +0.8;
    
    
    
        
    }
  if( monkey.velocityY===monkey.velocityY +0.8){
    monkey.collide(ground);
  }
    
   
  
  
  
 
  
  
if (ground.x < 500){
      ground.x = ground.width/2;
    }
  bananaGroup = createGroup();
  
  
  
  spawnBanana()
  spawnObstacles()
  
  
  
  function spawnBanana(){
    if (frameCount % 80 === 0){
      banana=createSprite(600,100,10,40);
      var rand = Math.round(random(120,200));
      banana.x= Math.round(random(120,200));
      banana.addImage(bananaImage);
      banana.scale=0.10;
      banana.velocityX=-3;
      banana.lifetime=134;
      
      
      
      
      
    }
    
  }
  function spawnObstacles(){
    if (frameCount % 300 === 0){
      monkey=createSprite(400,165,10,40);
      var rand = Math.round(random(120,200));
      monkey.x= Math.round(random(120,200));
      monkey.addImage(obstaceImage);
      monkey.scale=0.10;
      monkey.velocityX=-3;
      monkey.lifetime=134;
      
      
      
      
      
    }
    
  }
  
  
  drawSprites();

  
}






