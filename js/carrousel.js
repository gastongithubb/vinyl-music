const carousel = document.querySelector(".carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentSlide = 0;

function goToSlide(slide) {
  carousel.style.transform = `translateX(-${slide * 100}%)`;
  currentSlide = slide;
}

function nextSlide() {
  if (currentSlide === 2) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    goToSlide(2);
  } else {
    goToSlide(currentSlide - 1);
  }
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
