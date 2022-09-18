var blue, pink, orange, purple, white, yellow
var colors, choice, sprite1
var blue1, pink1, orange1, purple1, white1, yellow1
var answer
var lives=2
var c=1


function preload (){
    blue=loadImage("blue.jpg")
    pink=loadImage("pink.jpg")
    orange=loadImage("orange.jpg")
    purple=loadImage("purple.jpg")
    white=loadImage("white.png")
    yellow=loadImage("yellow.jpg")
}


function setup() {
	createCanvas(800, 500);
    colors=["blue", "pink", "orange", "purple", "white", "yellow"]
    choice=Math.round(random(0,5))
    sprite1= createSprite(400,150, 200,200)
    if(choice===0){
    sprite1.addImage(blue)
    }
    else if(choice===1){
    sprite1.addImage(pink)
    sprite1.scale=0.20
    }
    else if(choice===2){
    sprite1.addImage(orange)
    sprite1.scale=0.20
    }
    else if(choice===3){
    sprite1.addImage(purple)
    }
    else if(choice===4){
    sprite1.addImage(white)
    sprite1.scale=0.20
    }
    else if(choice===5){
    sprite1.addImage(yellow)
    sprite1.scale=0.20
    }
    
    blue1=createSprite(300,400,150,50)
    blue1.shapeColor="blue"
    pink1=createSprite(300,480,150,50)
    pink1.shapeColor="pink"
    orange1=createSprite(300,320,150,50)
    orange1.shapeColor="orange"
    purple1=createSprite(500,400,150,50)
    purple1.shapeColor="purple"
    white1=createSprite(500,480,150,50)
    white1.shapeColor="White"
    yellow1=createSprite(500,320,150,50)
    yellow1.shapeColor="Yellow"

    
}


	

function draw() {
 
  background("black");
  drawSprites()
  textSize(18)
  fill("black")
  textAlign(CENTER)
  text("Guess the color!", sprite1.x, sprite1.y)
  text(" Blue",blue1.x,blue1.y )
  text("pink", pink1.x,pink1.y)
  text("orange", orange1.x, orange1.y)
  text("purple",purple1.x, purple1.y)
  text("white",white1.x, white1.y)
  text("yellow", yellow1.x, yellow1.y)

if(lives>0){
  
  if(mousePressedOver(blue1) && c===1){
    answer="blue"
    console.log(answer)
    lives=lives-1
    c=0
  }
  if(mousePressedOver(pink1) && c===1){
    answer="pink"
    console.log(answer)
    lives=lives-1
    c=0
  }
  if(mousePressedOver(orange1) && c===1){
    answer="orange"
    console.log(answer)
    lives=lives-1
    c=0
  }
  if(mousePressedOver(purple1)&& c===1){
    answer="purple"
    console.log(answer)
    lives=lives-1
    c=0
  }
  if(mousePressedOver(white1)&& c===1){
    answer="white"
    console.log(answer)
    lives=lives-1
    c=0
  }
  if(mousePressedOver(yellow1) && c===1){
    answer="yellow"
    console.log(answer)
    lives=lives-1
    c=0
  }
  c=1
}
  if(colors[choice]===answer){
    console.log("YOU WIN!!")
    fill("red")
    stroke("white")
    text("YOU WIN!!", 400,250)
    
  }
  else if(answer!=undefined){
    console.log("YOU LOSE")
    fill("red")
    stroke("white")
    text("YOU LOSE", 400,250)
    
    
  }
  fill("white")
  text("Lives :"+lives, 700,100)
  


  
}
 


