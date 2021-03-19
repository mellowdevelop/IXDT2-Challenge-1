function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    hour = checkTime(hour);
    document.getElementById('time').innerHTML =
    "It's " + hour + ":" + minute + ":" + second + " on Earth" ;

    var t = setTimeout(startTime, 500); //Makes the clock tick.

    if (hour > 07 && hour < 18) { //When hour is greater than 07 o clock and less than 18 o clock its day time.
      document.getElementById("welcome-photo").src="images/day.png";
    }
    else if (hour > 18 && hour < 23) {//When hour is greater than 18 o clock and less than 23 o clock its evening time.
      document.getElementById("welcome-photo").src="images/space-view.png";
    }
    else if (hour >= 0 && hour < 08)  {//When hour is greater than 0 o clock and less than 08 o clock its night time.
      document.getElementById("welcome-photo").src="images/night.png";
    }
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  