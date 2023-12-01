import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SplitType from 'split-type';

gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);

// gsap.registerPlugin(ExpoScaleEase);

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// init Swiper:
const swiper1 = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 30,
  slidesPerView: 1,
  loop: false,
  init: false,
  longSwipes: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
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
    },
    afterInit: function () {},
    slideChange: function () {
      // this.slides[this.previousIndex].animation.pause(0);
      this.slides[this.activeIndex].animation.restart();
      changeCounter(this);
    },
    slideChangeTransitionStart: function () {
      circlesScaleInit.restart();
    },
    slideChangeTransitionEnd: function () {
      this.slides[this.previousIndex].animation.pause(0);
    },
  },
});

swiper1.on('slideChange', function () {});

// Content animation

function contentAnimation(slider) {
  slider.slides.forEach((slide) => {
    let title = slide.querySelector('.slide__title');
    let chars = new SplitType(title, { type: 'chars' });
    let words = chars.lines;
    let button = slide.querySelector('.btn');
    let img = slide.querySelector('.slide__image');
    let tl = gsap.timeline({ Defaults: { paused: false } });
    gsap.set(button, { opacity: 0.7, yPercent: -10, xPercent: 0, scale: 0.97 });
    tl.to(button, { opacity: 1, yPercent: 0, xPercent: 0, scale: 1, duration: 0.5, delay: 0.4 });
    tl.from(
      words,
      {
        scaleY: 0,
        y: -20,
        transformOrigin: 'left top',
        stagger: 0.1,
        duration: 0.3,
        // rotate: 0,
        // ease: 'back.out',
        delay: 0.2,
      },
      '<',
    );
    tl.from(img, { duration: 1, scale: 0.98 }, '<');
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

export default swiper1;
