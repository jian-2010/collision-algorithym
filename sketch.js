var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect = createSprite(700, 100, 80, 50);
  fixedRect.shapeColor="green"

  //movingRect.debug=true;
  //fixedRect.debug=true;
}

function draw() {
  background("blue");  
  
  movingRect.x= World.mouseX
  movingRect.y= World.mouseY

  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"

  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  
  drawSprites();
}