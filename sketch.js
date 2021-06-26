var king;
var kingImage,backgroundImg;
var obstacle1,obstacle2,obstacle3,obstaclesGroup
var score = 0;


function preload(){
    kingImage = loadAnimation("images/king1.png","images/king2.png","images/king3.png")
    backgroundImg = loadImage("images/bg3.jpg")
    obstacle1 = loadImage("images/obstacle1.png")
    obstacle2 = loadImage("images/obstacle2.png")
    obstacle3 = loadImage("images/obstacle3.png")
}

function setup(){
    createCanvas(displayWidth-100,displayHeight-100)
    
    
    king = createSprite(200,530,250,200)
    king.addAnimation("running",kingImage)
    obstaclesGroup = new Group()
    
    
}
function draw(){
    
    background(backgroundImg)
    spawnObstacles()
    
    fill("white")
    textSize(30)
    text("Score "+score,100,100)
    if(king.isTouching(obstaclesGroup)){
        score = score+1;
        obstaclesGroup[0].destroy()
    }
    if(keyDown(UP_ARROW)){
        king.velocityY=-2
    }
    if(keyDown(DOWN_ARROW)){
        king.velocityY=2
    }
  
    drawSprites()
}
function spawnObstacles(){
    if(frameCount%60===0){
        obstacle = createSprite(displayWidth,random(100,700),10,10)
        obstacle.velocityX=(-5)
        var rand = Math.round(random(1,3))
        console.log(rand)
        switch(rand){
            case 1: obstacle.addImage(obstacle1)
            break;
            case 2: obstacle.addImage(obstacle2)
            break;
            case 3: obstacle.addImage(obstacle3)
            break
            default: break
        }
        obstacle.lifetime=displayWidth*1
        obstaclesGroup.add(obstacle)
    }
}