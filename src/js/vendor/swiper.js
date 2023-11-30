import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import SplitType from 'split-type';

gsap.registerPlugin(ExpoScaleEase, ScrollTrigger);

// gsap.registerPlugin(ExpoScaleEase);

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// init Swiper:
const swiper1 = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 30,
  slidesPerView: 1,
  // loop: true,
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
    clickable: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper1.on('init', function () {
  swiper1.slides.forEach((slide) => {
    let titles = slide.querySelector('.slide__title');
    let button = slide.querySelector('.btn');
    let tl = gsap.timeline({ Defaults: { paused: true } });
    tl.from(titles, { xPercent: -50, opacity: 0, ease: 'expoScale(0.5,7,none)', duration: 1 }).from(
      button,
      { xPercent: -50, stagger: 0.02 },
      '-=0.5',
    );
    slide.animation = tl;
    slide.animation.pause(0);
  });
  swiper1.slides[0].animation.play();
});

swiper1.on('slideChange afterInit init', function () {
  let currentSlide = this.realIndex + 1;
  document.querySelector('.counter-current').innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

  let totalSlide = this.slides.length;
  document.querySelector('.counter-total').innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
});

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

// =====================

swiper1.on('slideChange', function () {
  this.slides[this.realIndex].animation.restart();
});
swiper1.on('slideChangeTransitionStart', function () {
  circlesScaleInit.restart();
});

export default swiper1;

// //tweens
// // gsap.to('.bg-first', {
// //   scale: 1.1,
// //   duration: 2,
// //   repeat: -1,
// //   yoyo: true,
// //   ease: 'power1.inOut',
// // });

// // const splittedText = new SplitType('.split', { type: 'chars' });
// // const chars = splittedText.chars;

// // gsap.from(chars, {
// //   yPercent: 450,
// //   stagger: {
// //     each: 0.05,
// //     from: 'random',
// //   },
// //   ease: 'back.out',
// // });

// /*
// gsap.from([chars[2], chars[12]], {
//   rotation: 360,
//   duration: 2,
//   delay: 3,
//   repeat: -1,
// })
// */

// // const tl = gsap.timeline({ repeat: -1, duration: 2, delay: 2, yoyo: true });
// // tl.to(chars[2], { rotation: 360 });
// // tl.to(chars[12], { rotation: 360 });

// // const horizontalPanels = gsap.utils.toArray('.horizontal .panel');
// // const scrollTween = gsap.to(horizontalPanels, {
// //   xPercent: -100 * (horizontalPanels.length - 1),
// //   ease: 'none',
// //   scrollTrigger: {
// //     trigger: '.horizontal',
// //     pin: true,
// //     scrub: 1,
// //     snap: 1 / (horizontalPanels.length - 1),
// //     end: '+=3500',
// //   },
// // });
