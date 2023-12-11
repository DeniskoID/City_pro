import gsap from 'gsap';
import SplitType from 'split-type';

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
    nextEl: '.portfolio__button-next',
    prevEl: '.portfolio__button-prev',
  },
  on: {
    init: function () {
      contentAnimation(this);
      changeCounterMob(this);
      changeCounterDesk(this);
    },
    // resize: function () {
    //   contentAnimation(this);
    // },
    slideChange: function () {
      changeCounterMob(this);
      changeCounterDesk(this);
    },
    slideChangeTransitionStart: function () {
      this.slides[this.activeIndex].animation.restart();
    },
    slideChangeTransitionEnd: function () {
      this.slides[this.previousIndex].animation.pause(0);
    },
  },
});

// Gsap animation
function contentAnimation(slider) {
  slider.slides.forEach((slide) => {
    const title = slide.querySelector('.item__title');
    const text = slide.querySelectorAll('.item__text');
    const chars = new SplitType(title, { type: 'chars' });
    const words = chars.lines;
    const img = slide.querySelector('.item__image');

    let tl = gsap.timeline({ Defaults: { paused: false } });

    let mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      tl.from(words, {
        scaleY: 0,
        y: -20,
        transformOrigin: 'left top',
        stagger: 0.1,
        duration: 0.4,
        delay: 0.1,
      });

      tl.from(
        text,
        {
          scaleY: 0,
          autoAlpha: 0,
          transformOrigin: 'left top',
          stagger: 0.1,
          duration: 0.7,
        },
        '<',
      );

      tl.from(img, { duration: 0.8, opacity: 0, scale: 0.7, height: 0 }, '<');
    });
    mm.add('(max-width: 767px)', () => {
      tl.from(img, { duration: 0.8, opacity: 0, scale: 0.7, height: 0 });

      tl.from(
        words,
        {
          scaleY: 0,
          y: -20,
          transformOrigin: 'left top',
          stagger: 0.1,
          duration: 0.4,
          delay: 0.1,
        },
        '<',
      );

      tl.from(
        text,
        {
          scaleY: 0,
          autoAlpha: 0,
          transformOrigin: 'left top',
          stagger: 0.1,
          duration: 0.7,
        },
        '<',
      );
    });

    slide.animation = tl;
    slide.animation.pause(0);
  });

  // mm.add('(max-width: 767px)', () => {
  //   // mobile setup code here...
  // });

  slider.slides[0].animation.play();
}

//Change counter on mobile
function changeCounterMob(slider) {
  const counterElem = '.portfolio__slider-handler';
  let currentSlide = slider.activeIndex + 1;
  let currentCounter = document.querySelector(`${counterElem} .counter-current`);
  let totalCounter = document.querySelector(`${counterElem} .counter-total`);
  let totalSlide = slider.slides.length;

  currentCounter.innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

  totalCounter.innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
}

//Change counter on desktop
function changeCounterDesk(slider) {
  const counterElem = '.portfolio__counter';
  let currentSlide = slider.activeIndex + 1;
  let currentCounter = document.querySelector(`${counterElem} .portfolio__counter-current`);
  let totalCounter = document.querySelector(`${counterElem} .portfolio__counter-total`);
  let totalSlide = slider.slides.length;

  currentCounter.innerHTML = currentSlide;

  totalCounter.innerHTML = totalSlide;
}

export default portfolioSwiper;
