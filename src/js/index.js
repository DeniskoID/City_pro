import lenis from './vendor/lenis.js';
lenis.start();

import buttonToTop from './modules/to-top-button.js';
buttonToTop();

import swiper1 from './vendor/hero-swiper.js';
swiper1.init();

import initMobileSwiper from './vendor/services-swiper.js';
initMobileSwiper();

import portfolioSwiper from './vendor/portfolio-swiper.js';
portfolioSwiper.init();

import menuBgAnimation from './modules/nav-bg.js';
menuBgAnimation();

import mobileNav from './modules/mobile-nav.js';
mobileNav();

import textCollapser from './modules/text-collapser.js';
textCollapser('.text-collapser', '.about__description', '195px');
textCollapser('.portfolio__collapser', '.portfolio__collaps-helper', '500px');

import servicesCardHover from './modules/gsap-interactions.js';
servicesCardHover();
