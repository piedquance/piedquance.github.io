var speedx = 1.1;
var speedy = 1;
var x = 10;
var y = 10;
var z = 10;
var edgeCount = 0;
var edges = document.getElementById("cornerTouch");
function setup() {
if(windowWidth < 450) { sketchS = windowWidth/1.5;
} else { sketchS = 300;}
var myCanvas = createCanvas(sketchS, sketchS);
 myCanvas.parent('game');
 rectS = sketchS/20;
}
function draw() {
clear();
noStroke();
fill(0, 160);
rect(0, 0, sketchS, y);
rect(0, y, x, rectS);
rect(x + rectS, y, sketchS, rectS);
rect(0, y + rectS, sketchS, sketchS);
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
