import { gsap } from 'gsap';
import lenis from '../vendor/lenis';

function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.header__nav');
  const menuIcon = document.querySelector('.nav-icon');
  // const menuItems = gsap.utils.toArray('.nav__link');
  // const socialItems = gsap.utils.toArray('.header__social .social__item');

  let mm = gsap.matchMedia();

  // Gsap effect
  let menuOpen = false;

  const navTl = gsap.timeline({
    defaults: {
      ease: 'power4.inOut',
      duration: 1,
    },
  });

  mm.add('(max-width: 958px)', () => {
    gsap.set(nav, {
      y: '-1000vh',
    });

    // gsap.set(socialItems, {
    //   scale: 0,
    // });

    // gsap.set(menuItems, {
    //   yPercent: 100,
    // });

    navTl.to(nav, {
      y: 0,
    });
    // .to(
    //   socialItems,
    //   {
    //     scale: 1,
    //     stagger: 0.1,
    //   },
    //   '-=0.5',
    // )
    // .to(
    //   menuItems,
    //   {
    //     yPercent: 0,
    //     stagger: 0.1,
    //     duration: 1.5,
    //     delay: 0.3,
    //   },
    //   '-=2',
    // );

    navTl.pause();
  });

  navBtn.addEventListener('click', () => {
    if (!menuOpen) {
      navTl.play();
      menuIcon.classList.add('nav-icon--active');
      // lenis.stop();
      menuOpen = true;
    } else {
      navTl.reverse();
      menuIcon.classList.remove('nav-icon--active');
      // lenis.start();
      menuOpen = false;
    }
  });

  // Close opened menu after starting scroll

  lenis.on('scroll', (e) => {
    const velocity = Math.abs(Math.round(e.velocity));

    if (menuOpen && velocity >= 10) {
      navTl.reverse();
      menuIcon.classList.remove('nav-icon--active');
      menuOpen = false;
    }
  });
}

export default mobileNav;
