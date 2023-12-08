import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

function initMobileSwiper() {
  let mySwiper;

  function initSwiper() {
    mySwiper = new Swiper('.services-swiper', {
      wrapperClass: 'services-swiper-wraper',
      slideClass: 'services-swiper-slide',
      modules: [Pagination],
      spaceBetween: 20,
      slidesPerView: 1,
      loop: false,
      // init: false,
      longSwipes: true,
      speed: 600,
      pagination: {
        el: '.service-pagination',
        clickable: true,
      },
    });
  }

  function destroySwiper() {
    if (mySwiper) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }

  function handleResize() {
    if (window.innerWidth <= 500) {
      if (!mySwiper) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  // Вызываем handleResize при инициализации и при каждом изменении размеров окна
  handleResize();
  window.addEventListener('resize', handleResize);
}

// Вызываем функцию инициализации Swiper
export default initMobileSwiper;
