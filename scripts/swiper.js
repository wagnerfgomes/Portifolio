const swiper = new Swiper('.swiper', {
  // freeMode: true,
  // centeredSlides: true,
  // spaceBetween: 150,
  pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // speed: 200, 
});
