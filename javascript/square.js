let stuff = document.querySelector(".stuff");
let info = document.querySelector(".info");
let stuffB = document.querySelector("#stuff");
let infoB =document.querySelector("#info");
let title = document.querySelector("#title");
let nav = document.querySelector("nav");
let onIt = false;
title.onmouseover = () => {onIt = true;};
title.onmouseout = () => {onIt = false;};
function disappear(icon, event) {
    if(icon.getBoundingClientRect().bottom-50 > event.pageY && icon.getBoundingClientRect().top+1 < event.pageY) {
      console.log(!onIt);
      icon.style.bottom = "0";
      icon.style.height = "20%";
    } else {
      icon.style.bottom = "100%";
      icon.style.height = "0";
  }
  console.log("fuck");
}
stuffB.onmouseover = () => {
  stuff.style.bottom = "0";
  stuff.style.height = "20%";
  info.style.bottom = "100%";
  info.style.height = "0";
  current = true;
};
infoB.onmouseover = () => {
  info.style.bottom = "0";
  info.style.height = "20%";
  stuff.style.bottom = "100%";
  stuff.style.height = "0";
    current = false;
};
nav.onmousemove = () => {
  disappear(stuff, event);
};
nav.onmousemove = () => {
  disappear(info, event);
}

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
fill(255, 70);
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
