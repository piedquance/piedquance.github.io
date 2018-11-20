var speedx = 1.1;
var speedy = 1;
var x = 10;
var y = 10;
var edgeCount = 0;
var edges = document.getElementById("cornerTouch");
function setup() {
  
if(windowWidth < 450) { sketchS = windowWidth/1.5;
  } else { sketchS = windowWidth/4.2;}


var myCanvas = createCanvas(sketchS, sketchS);
 
 myCanvas.parent('game');
}

function draw() {

 rectS = sketchS/20;

 background(170)
 
 fill(0);
 
 rect(x, y, rectS, rectS);

if (y < 0) {
    speedy = random(1, 1.5);
  } else if (y > (sketchS - rectS)) {
    speedy = random(-1.5, -1)}
  if (x < 0) {
    speedx = random(1, 1.5);
  } else if (x > (sketchS - rectS)) {
    speedx = random(-1.5, -1);
}
  
  x = x + speedx;
  
  y = y + speedy;
  
if ((x == 0 && y == 0) ||
    (x == 0 && y == 380) ||
    (x == 380 && y == 0) ||
    (x == 380 && y == 380)) {
  edgeCount += 1;}
  edges.innerHTML = "The cube has touched the corner "+edgeCount+" times.";
}
