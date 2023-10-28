const slider = document.getElementById("slider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const images = document.querySelectorAll("#slider img");
let currentImageIndex = 0;

function showCurrentImage() {
  slider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showCurrentImage();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showCurrentImage();
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

showCurrentImage();
