var BGImg;
var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var catAnimation, catAnimation2;


function preload() {
    //load the images here
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    BGImg = loadImage("images/garden.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
    catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    catAnimation2 = loadAnimation("images/cat1.png");
    
}
    


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 660, 10, 10);
    cat.addAnimation("cat", catImg1);
    
    cat.scale = 0.2;

    mouse = createSprite(170, 660, 10, 10);
    mouse.addAnimation("mouse1", mouseImg1);
    mouse.scale = 0.17;
}

function draw() {

    background(BGImg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(isTouching(cat, mouse)){
      mouse.changeImage("mouse1", mouseImg4);
      cat.changeImage("cat", catImg4);
      cat.velocity.X = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    cat.x = cat.x - 5;
   
  }


}

function isTouching(object1,object2){

  if((object1.x - object2.x < object1.width/2 + object2.width/2)&&
  (object2.x - object1.x < object1.width/2 + object2.width/2)&&
  (object1.y - object2.y < object1.height/2 + object2.height/2)&&
  (object2.y - object1.y < object1.height/2 + object2.height/2)){
    return true;
  } else {
    return false;
  }
} 

