let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slider img').length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 1000);