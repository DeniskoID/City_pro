// import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import swiper1 from './swiper';

// gsap.registerPlugin(ScrollToPlugin);

// export const gsapInteractions = function () {
//   swiper1.slides.forEach((slide) => {
//     let titles = slide.querySelector('.slide__title');
//     let button = slide.querySelector('.btn');
//     // let chars = SplitText.create(description, { type: 'chars' });
//     let tl = gsap.timeline({ paused: true });
//     tl.from(titles, { scale: 0, opacity: 0, ease: 'back', duration: 2 }).from(
//       button,
//       { opacity: 0, yPercent: 50, stagger: 0.02 },
//       '-=0.5',
//     );
//     slide.animation = tl;
//   });

//   swiper1.on('slideChange afterInit init', function () {
//     let currentSlide = this.realIndex + 1;
//     document.querySelector('.counter-current').innerHTML = `${currentSlide < 10 ? '0' + currentSlide : currentSlide}`;

//     let totalSlide = this.slides.length;
//     document.querySelector('.counter-total').innerHTML = `${totalSlide < 10 ? '0' + totalSlide : totalSlide}`;
//     console.log(swiper1.slides[0]);

//     swiper1.slides[1].animation.play();
//   });

//   swiper1.on('slideChange', function () {
//     swiper1.slides.forEach((slide, index) => {
//       console.log(`Active Index ${this.activeIndex}`);
//       console.log(`Real Index ${this.realIndex}`);
//       console.log(`Index ${index}`);
//       console.log('===================================');
//       slide.animation.pause(0);

//       if (slide.classList.contains('swiper-slide-active')) {
//         console.log('woow!');
//         slide.animation.restart();
//       } else {
//         slide.animation.pause(0);
//       }
//     });
//   });
//   // swiper1.slides[1].animation.play();
// };
