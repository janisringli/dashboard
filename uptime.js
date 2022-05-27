function portfolioRequest() {
  fetch("https://ja.nisringli.ch", { mode: "no-cors" })
    .then((response) => {
      if (response.status == 0) {
        document.getElementById("uptimeLightPortfolio").style.background =
          "#8DEA97";
      }
    })
    .catch((err) => {
      document.getElementById("uptimeLight").style.background = "#EB5151";
    });
}

function youtubeRequest() {
  fetch("https://youtube.com", { mode: "no-cors" })
    .then((response) => {
      if (response.status == 0) {
        document.getElementById("uptimeLightYoutube").style.background =
          "#8DEA97";
      }
    })
    .catch((err) => {
      document.getElementById("uptimeLight").style.background = "#EB5151";
    });
}
function trailyRequest() {
  fetch("https://traily.ch", { mode: "no-cors" })
    .then((response) => {
      if (response.status == 0) {
        document.getElementById("uptimeLightTraily").style.background =
          "#8DEA97";
      }
    })
    .catch((err) => {
      document.getElementById("uptimeLight").style.background = "#EB5151";
    });
}
    function calcRequest() {
      fetch("https://calc.nisringli.ch", { mode: "no-cors" })
        .then((response) => {
          if (response.status == 0) {
            document.getElementById("uptimeLightCalc").style.background =
              "#8DEA97";
          }
        })
        .catch((err) => {
          document.getElementById("uptimeLightCalc").style.background = "#EB5151";
        });
}
youtubeRequest();
portfolioRequest();
trailyRequest();
calcRequest()
setInterval(function () {
  youtubeRequest();
  portfolioRequest();
  trailyRequest();
}, 3000);
