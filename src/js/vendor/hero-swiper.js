import { gsap } from 'gsap';

import SplitType from 'split-type';

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// init Swiper:
const swiper1 = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
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
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  on: {
    init: function () {
      contentAnimation(this);
      changeBg(this);
    },
    afterInit: function () {},
    slideChange: function () {
      changeCounter(this);
      changeBg(this);
    },
    slideChangeTransitionStart: function () {
      circlesScaleInit.restart();
      this.slides[this.activeIndex].animation.restart();
    },
    slideChangeTransitionEnd: function () {
      this.slides[this.previousIndex].animation.pause(0);
    },
  },
});

// Content animation

function contentAnimation(slider) {
  slider.slides.forEach((slide) => {
    let title = slide.querySelector('.slide__title-helper');
    let chars = new SplitType(title, { type: 'chars' });
    let words = chars.lines;
    let button = slide.querySelector('.btn');
    let img = slide.querySelector('.slide__image');

    let tl = gsap.timeline({ Defaults: { paused: false } });

    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.set(button, { opacity: 0, yPercent: -10, xPercent: 0, scale: 0 });
      tl.to(button, {
        transformOrigin: 'center',
        opacity: 1,
        yPercent: 0,
        xPercent: 0,
        scale: 1,
        duration: 0.5,
        delay: 0.1,
      });
      tl.from(
        words,
        {
          scaleY: 0,
          y: -20,
          transformOrigin: 'left top',
          stagger: 0.1,
          duration: 0.3,
          delay: 0.1,
        },
        '<',
      );
      tl.from(img, { duration: 0.8, opacity: 0, scale: 0.8 }, '<');
    });

    mm.add('(max-width: 1023.9px)', () => {
      // tl.from(img, { duration: 0.8, opacity: 1, scale: 0.8 });
    });

    slide.animation = tl;
    slide.animation.pause(0);
  });
  slider.slides[0].animation.play();
}

// Change counter

function changeCounter(slider) {
  let currentSlide = slider.realIndex + 1;
  let currentCounter = document.querySelector('.counter-current');
  let totalCounter = document.querySelector('.counter-total');
  let totalSlide = slider.slides.length;

  currentCounter.innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

  totalCounter.innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
}

// Circles animation

let circles = document.querySelectorAll('.circle');
const circlesScale = gsap.timeline();
let circlesScaleInit = circlesScale.from(circles, {
  delay: 0,
  duration: 1.2,
  opacity: 0,
  scale: 0,
  stagger: 0.1,
  ease: 'elastic.out(1.5,0.75)',
});

// Change BG on hero-section

function changeBg(slider) {
  const section = document.querySelector('.hero');
  const slideIndex = slider.activeIndex;
  const bgArr = ['bg1', 'bg2', 'bg3'];
  section.removeAttribute('style');
  bgArr.forEach((bg, i) => {
    if (slideIndex === i) {
      section.setAttribute('data-bg', bg);
      section.style.setProperty(`--${bg}-opacity`, '0.1');
    } else {
      // section.style.setProperty('--bg-opacity', '0');
    }
  });
}

export default swiper1;
