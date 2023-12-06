// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
// import { gsap } from 'gsap';

import './vendor/lenis.js';

import swiper1 from './vendor/hero-swiper.js';
swiper1.init();

import mobileNav from './modules/mobile-nav.js';
mobileNav();

import textCollapser from './modules/text-collapser.js';
textCollapser('.text-collapser', '[collapsed]', '195px');

// function getHeightWithDelay() {
//   setTimeout(function () {
//     var height = textContainer.offsetHeight;
//     console.log('Height after 1 second: ' + height + 'px');
//   }, 350);
// }

// getHeightWithDelay();
