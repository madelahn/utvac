// This is because it takes a while to load DOM.
setTimeout(() => {
  addListener();
}, 1000);

function addListener() {
  var miniImages = document.getElementById("mini-images");

  miniImages.addEventListener("click", function (event) {
    replaceImage(event.target);
  });
}

function replaceImage(clickedImage) {
  var clickedImageSource = clickedImage.src;
  var selectedImage = document.getElementById("selected-image");
  selectedImage.src = clickedImageSource;
  console.log(`You clicked ${clickedImageSource}`);
}
