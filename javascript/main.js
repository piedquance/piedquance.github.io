let body = document.getElementsByName("body");
let timeSpent = 0;
function whatTimeSeen() {
  let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
function timeHere() {
  timeSpent++
  if(timeSpent>3600) { document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds.<br> It's time to leave."
} else {document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds."};
}
body.addEventListener("load", setInterval(whatTimeSeen, 10));
