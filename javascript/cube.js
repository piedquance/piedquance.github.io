var y = 0.001;
var x = 0.001;
function setup() {
/*  if(windowWidth < 450) { sketchS = windowWidth/2;
  } else { sketchS = windowWidth/4;}
  var myCanvas = createCanvas(sketchS, sketchS, WEBGL);*/
  var myCanvas = createCanvas(350, 350, WEBGL);
   myCanvas.parent('cube');
 }
function draw() {
    rotateX(x);
    rotateY(y);
    background(255);
    fill(0,255,100,100);
		stroke(5);
    box(150);
    x += random(0.001, 0.005);
    y += random(0.001, 0.005);
  }
