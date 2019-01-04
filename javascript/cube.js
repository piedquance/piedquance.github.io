var y = 0.001;
var x = 0.001;
function setup() {
 if(windowWidth < 450) { sketchS = windowWidth/2;
 } else { sketchS = 300; }
  var myCanvas = createCanvas(sketchS, sketchS, WEBGL);
   myCanvas.parent('cube');
 }
function draw() {
    rotateX(x);
    rotateY(y);
    background(0, 0);
    fill(0,255,100,100);
		stroke(5);
    box(sketchS/2);
    x += random(0.001, 0.005);
    y += random(0.001, 0.005);
  }
