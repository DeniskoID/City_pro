import { gsap } from 'gsap';

import SplitType from 'split-type';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollToPlugin);

// Services-section

const serviceCard = gsap.utils.toArray('.services__item');

export default function servicesCardHover() {
  serviceCard.forEach((card) => {
    const serviceBtn = card.querySelector('.services__button');
    const serviceBtnText = card.querySelector('.services__button-text');

    let chars = new SplitType(serviceBtnText, { type: 'chars' });

    let words = chars.lines;

    const btnTl = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
        // ease: 'back.out',
        duration: 1,
      },
    });

    gsap.set(serviceBtnText, {
      y: -75,
    });

    gsap.set(serviceBtn, {
      '--btn-bottom': '-200%',
      '--btn-radius': '0px',
      '--btn-rotate': '180deg',
    });

    gsap.set(card, {
      '--grad-opacity': 0,
    });

    btnTl.to(serviceBtn, {
      '--btn-bottom': 0,
      duration: 0.1,
    });

    btnTl.to(
      serviceBtn,
      {
        '--btn-radius': '100px',
        duration: 0.3,
        ease: 'circ.inOut',
      },
      '-=0.09',
    );

    btnTl.to(
      serviceBtn,
      {
        '--btn-rotate': '0deg',
        duration: 0.3,
        ease: 'back.out',
      },
      '<',
    );

    btnTl.from(
      words,
      {
        scaleY: 0,
        y: -10,
        transformOrigin: 'left top',
        stagger: 0.1,
        duration: 0.4,
        ease: 'circ.out',
        // ease: 'back.out',
        delay: 0.1,
      },
      '<',
    );

    btnTl.to(
      card,
      {
        '--grad-opacity': 1,
        duration: 0.5,
        ease: 'back.out',
      },
      '<',
    );

    btnTl.pause();

    serviceBtn.addEventListener('mouseenter', () => {
      btnTl.play();
    });

    serviceBtn.addEventListener('mouseleave', () => {
      btnTl.reverse();
    });
  });
}
