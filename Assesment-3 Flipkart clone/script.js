const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;

let slideIndex = 0;

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
});

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
