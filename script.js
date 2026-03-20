let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  let currentSlide = slides[current];
  currentSlide.classList.remove("active");

  current = (index + slides.length) % slides.length;

  let nextSlide = slides[current];
  nextSlide.classList.add("active");
}

/* Buttons */
document.getElementById("next").onclick = () => showSlide(current + 1);
document.getElementById("prev").onclick = () => showSlide(current - 1);

/* Keyboard */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") showSlide(current + 1);
  if (e.key === "ArrowLeft") showSlide(current - 1);
});

/* Click anywhere to go next */
document.addEventListener("click", () => {
  showSlide(current + 1);
});

/* Mobile swipe support */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) showSlide(current + 1);
  if (endX - startX > 50) showSlide(current - 1);
});