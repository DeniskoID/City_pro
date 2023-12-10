import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const portfolioSwiper = new Swiper('.portfolio-swiper', {
  modules: [Navigation, Pagination, Autoplay],
  wrapperClass: 'portfolio-swiper-wrapper',
  slideClass: 'portfolio-swiper-slide',
  spaceBetween: 30,
  slidesPerView: 1,
  loop: false,
  init: false,
  longSwipes: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  // speed: 600,
  pagination: {
    el: '.portfolio-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      changeCounter(this);
    },
    slideChange: function () {
      changeCounter(this);
    },
  },
});

function changeCounter(slider) {
  const counterElem = '.portfolio__slider-handler';
  let currentSlide = slider.activeIndex + 1;
  let currentCounter = document.querySelector(`${counterElem} .counter-current`);
  let totalCounter = document.querySelector(`${counterElem} .counter-total`);
  let totalSlide = slider.slides.length;

  currentCounter.innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

  totalCounter.innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
}

export default portfolioSwiper;
