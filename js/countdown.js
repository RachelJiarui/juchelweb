// global.func;

function submit() {
    var countdown_string = document.getElementById("input").value;
    var date = new Date(countdown_string).getTime();
    var func = setInterval(withDate(date), 1000);
}

function start() {
  document.getElementById("countdown-date").innerHTML = "[input a new date]";
}

function withDate(countDownDate) {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown-date").innerHTML = days + "d " + hours + "h " + minutes + "m";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-date").innerHTML = "[input a new date]";
  }
}
