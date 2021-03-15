var fixedRect, movingRect,fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect1 = createSprite(300,200,70,20);
  fixedRect1.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);    
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,fixedRect))
 {
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else if(isTouching(movingRect,fixedRect1)){
  fixedRect1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect1.shapeColor = "green";
  
}


  
  drawSprites();
}

function isTouching(movingRect,fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
  return false;
}


}