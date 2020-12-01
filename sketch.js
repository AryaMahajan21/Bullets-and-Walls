var bullet,wall;
var speed,weight, thickness;





function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(150,200,150,25);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);


}
  function draw() {
  background(255,255,255);

if (hasCollided(bullet,wall)){
  bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
if (deformation>10){
  wall.shapeColor = color(255,0,0);

}

if (deformation<10){
  wall.shapeColor = color(0,255,0);
}
}

  drawSprites();

  textSize(20);
  fill("Cyan");
  text("Deformation : " + deformation, 50 ,50);
  
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}
