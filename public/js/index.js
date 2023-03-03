document.addEventListener(
  "DOMContentLoaded",
  function () {
    particleground(document.getElementById("particles"), {
      dotColor: "#8d99ae",
      lineColor: "#8d99ae",
      particleRadius: 0,
      proximity: 150,
    });
    var intro = document.getElementById("intro");
    intro.style.marginTop = -intro.offsetHeight / 2 + "px";
  },
  false
);
