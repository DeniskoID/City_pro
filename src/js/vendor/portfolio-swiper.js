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
    afterInit: function () {},
    resize: function () {
      // contentAnimation(this);
      // this.slides[this.activeIndex].animation.restart();
    },
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
    gsap.set(img, { transformOrigin: 'top', opacity: 0, scale: 0.9, height: 0 });
    gsap.set(text, { transformOrigin: 'left top', autoAlpha: 0, scaleY: 0.8 });

    mm.add('(min-width: 768px)', () => {
      tl.from(words, {
        scaleY: 0,
        y: -20,
        transformOrigin: 'left top',
        stagger: 0.1,
        duration: 0.4,
        delay: 0.1,
      });

      tl.to(
        text,
        {
          scaleY: 1,
          autoAlpha: 1,
          transformOrigin: 'left top',
          stagger: 0.1,
          duration: 0.7,
        },
        '<',
      );

      tl.to(img, { duration: 0.8, opacity: 1, scale: 1, height: '100%' }, '<');
    });
    mm.add('(max-width: 767px)', () => {
      tl.to(img, { duration: 0.8, opacity: 1, scale: 1, height: '100%' });

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

      tl.to(
        text,
        {
          scaleY: 1,
          autoAlpha: 1,
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
