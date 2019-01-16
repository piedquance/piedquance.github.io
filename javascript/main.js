let body = document.getElementsByName("body");
let timeSpent = 0;
function whatTimeSeen() {
  let select = document.getElementById("selectDate").value;
  if (select === "now") {
    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
  } else if (select === "year") {
    let date1 = new Date();
    let year = date1.getFullYear() + 1;
    let date2 = new Date(year + '-01-01 00:00:00');
    document.getElementById("time").innerHTML =  Math.ceil((date2.getTime() - date1.getTime())/1000) - 1 + " seconds"
  }
}

function timeHere() {
  timeSpent++
  if(timeSpent>3600) { document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds.<br> It's time to leave."
} else {document.getElementById("youHere").innerHTML = "You have been here for " + timeSpent + " seconds."};
}
//body.addEventListener("load", setInterval(whatTimeSeen, 10));
