const img = document.getElementById("image");

img.addEventListener("click", function() {
  if (img.src.endsWith("img/log.png")) {
    img.src = "img/duo.jpg";
  } else {
    img.src = "img/log.png";
  }
});

const header = document.getElementById("header");
const clickMeButton = document.getElementById("clickMeButton");

clickMeButton.addEventListener("click", function() {
    const name = prompt("Enter your name: ");
    if (name !== null) {
        header.textContent = "Hi, " + name;
    }
});