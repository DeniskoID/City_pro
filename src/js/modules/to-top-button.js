import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import lenis from '../vendor/lenis';

function buttonToTop() {
  const button = document.querySelector('.button-to-top');

  const x = window.matchMedia('(min-width: 767px)');

  let listener = false;

  function myFunction(x) {
    if (x.matches && !listener) {
      addListener();
      listener = true;
    } else {
      removeListener();
      listener = false;
    }
  }
  myFunction(x);
  x.addEventListener('change', function () {
    myFunction(x);
  });

  function addListener() {
    button.addEventListener('click', () => {
      lenis.scrollTo('top', {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    });
  }

  function removeListener() {
    button.removeEventListener('click', addListener);
  }

  // Gsap animation

  const tl = gsap.timeline();

  tl.to(button, {
    scale: 1,
    autoAlpha: 1,
  });

  tl.pause(0);

  lenis.on('scroll', (e) => {
    const pageHeight = document.documentElement.clientHeight;
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const direction = e.direction;
    const actualScroll = e.actualScroll;

    (direction < 0 && actualScroll > 1000) || scrollHeight - 300 <= pageHeight + actualScroll
      ? tl.play()
      : tl.reverse();
  });

  lenis.on('scroll', ScrollTrigger.update);
}

export default buttonToTop;
