var i = 0;
images = ["vac-logo.png", "sample-img.jpg"];

function navigateRight() {
  if (i >= images.length - 1) {
    alert("You're all the way at the right already.");
  } else {
    i++;
    document.getElementById("currentDisplay").src = `../assets/${images[i]}`;
  }
}

function navigateLeft() {
  if (i <= 0) {
    alert("You're all the way at the left already.");
  } else {
    i--;
    document.getElementById("currentDisplay").src = `../assets/${images[i]}`;
  }
}
