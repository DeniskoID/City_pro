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
      longSwipes: true,
      speed: 600,
      pagination: {
        el: '.service-pagination',
        clickable: true,
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
  }

  function changeCounter(slider) {
    const counterElem = '.services__slider-handler';
    let currentSlide = slider.activeIndex + 1;
    let currentCounter = document.querySelector(`${counterElem} .counter-current`);
    let totalCounter = document.querySelector(`${counterElem} .counter-total`);
    let totalSlide = slider.slides.length;

    currentCounter.innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

    totalCounter.innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
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
      } else {
        mySwiper.update();
      }
    } else {
      destroySwiper();
    }
  }

  // Вызываем handleResize при инициализации и при каждом изменении размеров окна
  handleResize();
  window.addEventListener('resize', handleResize);
}

export default initMobileSwiper;
