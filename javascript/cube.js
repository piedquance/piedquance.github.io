var y = 0.001;
var x = 0.001;
function setup() {
  var myCanvas = createCanvas(windowWidth/3, windowWidth/3, WEBGL);
   myCanvas.parent('cube');
 }
function draw() {
    rotateX(x);
    rotateY(y);
    background(255);
    fill(0,255,100,100);
		stroke(5);
    box(windowWidth/6);
    x += random(0.001, 0.005);
    y += random(0.001, 0.005);
  }
