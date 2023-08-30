// Set the date we're counting down to
var countDownDate = new Date("Sep 24, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  document.getElementById("days1").innerHTML = days + " D"
  document.getElementById("hours1").innerHTML = hours + " H"
  document.getElementById("mins1").innerHTML = minutes + " M"
  document.getElementById("secs1").innerHTML = seconds + " S"

  document.getElementById("days2").innerHTML = days + " D"
  document.getElementById("hours2").innerHTML = hours + " H"
  document.getElementById("mins2").innerHTML = minutes + " M"
  document.getElementById("secs2").innerHTML = seconds + " S" 

  document.getElementById("days3").innerHTML = days + " D"
  document.getElementById("hours3").innerHTML = hours + " H"
  document.getElementById("mins3").innerHTML = minutes + " M"
  document.getElementById("secs3").innerHTML = seconds + " S"
  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown1").innerHTML = "<h6> EXPIRED ! </h6>";
    document.getElementById("countdown2").innerHTML = "<h6> EXPIRED ! </h6>";
    document.getElementById("countdown3").innerHTML = "<h6> EXPIRED ! </h6>";
  }
}, 1000);