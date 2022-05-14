var time = new Date();

setInterval(function () {
  this.time = new Date();
  hours = time.getHours().toString();
  minutes = time.getMinutes().toString();

  if (hours.length == 1) hours = "0" + hours;
  if (minutes.length == 1) minutes = "0" + minutes;

  document.getElementById("weekDay").innerHTML = time.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
    }
  );
  document.getElementById("day").innerHTML = time.getDate();
  document.getElementById("month").innerHTML = time.toLocaleDateString(
    "en-US",
    {
      month: "long",
    }
  );
  document.getElementById("year").innerHTML = time.getUTCFullYear();

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
}, 500);
