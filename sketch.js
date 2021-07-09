var canvas,backgroundImg;
var iss_img, spacecraft1_Img, spacecraft2_Img, spacecraft3_Img, spacecraft4_Img;
var iss,spaceCraft,hasDocked;


function preload() {
  iss_Img = loadImage("Docking-undocking/iss.png");
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft1_Img = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2_Img = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3_Img = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4_Img = loadImage("Docking-undocking/spacecraft4.png");
  hasDocked = false;

}

function setup() {
  createCanvas(600,350);

  iss = createSprite(330,130);
  iss.addImage("iss",iss_Img);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240)
  spacecraft.addImage("spacecraft1",spacecraft1_Img);
  spacecraft.scale = 0.15;

}

function draw() {
  background(backgroundImg);
  
  if(!hasDocked){

    spacecraft.x = spacecraft.x+random(-1,1);
    
    if(keyDown("DOWN_ARROw")){
    spacecraft.addImage("spacecraft2",spacecraft2_Img);
    }

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
     spacecraft.addImage("spacecraft4",spacecraft4_Img);
     spacecraft.x = spacecraft.x-1;
    }

    if(keyDown("RIGHT_ARROW")){

      spacecraft.addImage("spacecraft3",spacecraft3_Img);
      spacecraft.x = spacecraft.x+1;
    }

  }

  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }

  drawSprites();
}