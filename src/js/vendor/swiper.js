import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
const swiper1 = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  // loop: true,
  init: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

swiper1.on('slideChange afterInit init', function () {
  let currentSlide = this.activeIndex + 1;
  document.querySelector('.counter-current').innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

  let totalSlide = this.slides.length;
  document.querySelector('.counter-total').innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
  console.log(totalSlide);
});

export default swiper1;
