var i = 0;
images = [
  "sample-image-1.jpg",
  "sample-image-2.jpg",
  "sample-image-3.jpg",
  "sample-image-4.jpg",
  "sample-image-5.jpg",
];

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
