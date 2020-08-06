var speedx = 1.1;
var speedy = 1;
var x = 10;
var y = 10;
var z = 10;
var edgeCount = 0;
var edges = document.getElementById("cornerTouch");
function setup() {
  if(windowWidth < 950 || windowHeight < 300) { sketchS = 0;
  } else { sketchS = windowWidth/5.5;}
var myCanvas = createCanvas(sketchS, sketchS);
 myCanvas.parent('game');
 rectS = sketchS/20;
}
function draw() {
  if(windowWidth < 950|| windowHeight < 300) { sketchS = 0;
  } else { sketchS = windowWidth/5.5;}
  myCanvas = createCanvas(sketchS, sketchS);
clear();
noStroke();
fill(0, 153);
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
var a = 1;
var stuff = document.getElementsByClassName("stuff")[0].style;
var info = document.getElementsByClassName("info")[0].style;
var img = document.body.style;

document.getElementsByName("body").addEventListener("load", setInterval(() => {
   let date = new Date();
   if ( windowWidth > 950) {
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    stuff.width = "39.09090909%";
    stuff.left = "0.9090909%";
    info.width = "39.09090909%";
    info.right = "0.9090909%";
   } else {
    document.getElementById("time").innerHTML = "";
   stuff.width = "50%";
   stuff.left = "0";
   info.width = "50%";
   info.right = "0";
   } 
   if( windowHeight > 813) {
      img.backgroundSize = "auto " + windowHeight + "px";
   } else {
    img.backgroundSize = "auto";
   }
}, 100));