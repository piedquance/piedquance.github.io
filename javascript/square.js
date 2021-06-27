var speedx = 1.1;
var speedy = 1;
var x = 10;
var y = 10;
var z = 10;
var edgeCount = 0;
var edges = document.getElementById("cornerTouch");
function setup() {
  sketchS = (windowWidth+windowHeight)/5.5; 
var myCanvas = createCanvas(sketchS, sketchS);
 myCanvas.parent('game');
 rectS = sketchS/20;
}
function draw() {
  sketchS = (windowWidth+windowHeight)/5.5;
  myCanvas = createCanvas(sketchS, sketchS);
clear();
noStroke();
fill(0);
//This is the top-left rectangle
rect(
  0, 
  0, 
  round(x + rectS), 
  round(y));
//top-right rectangle
rect(
  round(x+ rectS), 
  0, 
  round(sketchS - x - rectS) , 
  round(y + rectS));
//bottom-left rectangle
rect(
  0, 
  round(y),
  round(x), 
  round(sketchS - y));
//bottom-right rectangle
rect(
  round(x), 
  round(y + rectS), 
  round(sketchS - x), 
  round(sketchS));
if (y < 0) {
    speedy = random(1, 1.5);
  } else if (y > (sketchS - rectS)) {
    speedy = random(-1.5, -1)}
  if (x < 0) {
    speedx = random(1, 1.5);
  } else if (x > (sketchS - rectS)) {
    speedx = random(-1.5, -1);
}
  x = round((x + speedx) *z) /z;
  y = round((y + speedy)*z) /z;
}