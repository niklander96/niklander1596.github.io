// Swiper
let slider = document.querySelector('.swiper');
let display = document.documentElement.clientWidth;

if (display <= '768') {
  const swiperBrands = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
  });
} else {
  slider.classList.remove('swiper');
}




