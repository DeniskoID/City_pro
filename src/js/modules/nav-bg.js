import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// import lenis from '../vendor/lenis';

function menuBgAnimation() {
  let mm = gsap.matchMedia();

  const header = document.querySelector('.header');
  const menu = document.querySelector('.header__row');

  mm.add('(min-width: 958px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top+=300',
        toggleActions: 'play none none reverse',
      },
    });
    tl.to(menu, {
      background: 'rgb(255 255 255 / 50%)',
      // duration: 1,
    });
    tl.to(
      header,
      {
        top: 0,
        duration: 0.5,
      },
      '<',
    );
  });
}

export default menuBgAnimation;
