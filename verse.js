const updateVerse = new Date();
verseHour = updateVerse.getHours();
verseMinute = updateVerse.getMinutes();

setInterval(function () {
  fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=daily", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      this.verse = response.verse.details.text;
      this.reference = response.verse.details.reference;
      document.getElementById("verse").innerHTML = response.verse.details.text;
      document.getElementById("reference").innerHTML =
        response.verse.details.reference;
    })

    .catch((err) => {
      document.getElementById("verse").innerHTML =
        "Jam a man of Fortune, and J must seek my fortune";
      document.getElementById("reference").innerHTML = "- Henry Avery, 1694";
    });
}, 500);
