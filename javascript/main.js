let body = document.getElementsByName("body");

function whatTimeSeen() {
  let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

body.addEventListener("load", setInterval(whatTimeSeen, 10))
