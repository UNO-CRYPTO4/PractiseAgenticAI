const slides = Array.from(document.querySelectorAll('.slide'));
const thumbs = Array.from(document.querySelectorAll('.thumb'));

if (slides.length > 0) {
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });

    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle('active', thumbIndex === index);
    });
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      currentIndex = Number(thumb.dataset.index);
      showSlide(currentIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 4000);

  showSlide(currentIndex);
}
