let body = document.getElementsByName("body");
let timeSpent = 0;
function timeHere() {
  timeSpent++
  if(timeSpent>3600) { document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds.<br> It's time to leave."
} else {document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds."};
}
