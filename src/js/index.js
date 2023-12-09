// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import './vendor/lenis.js';

import swiper1 from './vendor/hero-swiper.js';
swiper1.init();

import initMobileSwiper from './vendor/services-swiper.js';
initMobileSwiper();

import mobileNav from './modules/mobile-nav.js';
mobileNav();

import textCollapser from './modules/text-collapser.js';
textCollapser('.text-collapser', '[collapsed]', '195px');

import servicesCardHover from './modules/gsap-interactions.js';
servicesCardHover();
