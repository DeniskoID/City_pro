import { gsap } from 'gsap';
import lenis from '../vendor/lenis';

const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const form = document.querySelector('.popup-call__dialog');

    const scroll = calcScroll();

    // Gsap animatiion

    let mm = gsap.matchMedia();

    const Tl = gsap.timeline({
      defaults: {
        ease: 'power4.inOut',
        duration: 1,
      },
    });

    Tl.from(modal, {
      autoAlpha: 0,
    });

    Tl.from(
      form,
      {
        y: -30,
      },
      '<',
    );

    mm.add('(max-width: 958px)', () => {});

    Tl.pause();
    //================

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.visibility = 'hidden';
        });
        lenis.stop();
        Tl.play();
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((item) => {
        item.style.visibility = 'hidden';
      });
      modal.style.visibility = 'hidden';
      lenis.start();
      Tl.reverse();
      document.body.style.marginRight = `0px`;
      // document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.visibility = 'hidden';
        });
        lenis.start();
        Tl.reverse();
        modal.style.visibility = 'hidden';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove('modal-open');
      }
    });
  }
  // Показать модальное окно через какое-то время

  // function showModalByTime(selector, time) {
  //   setTimeout(() => {
  //     document.querySelector(selector).style.display = 'block';
  //     document.body.style.overflow = 'hidden';
  //   }, time);
  // }

  // Определяем ширину скролла для фикса скачка при открытии и закрытии модалки
  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
  // ==========================

  bindModal('[data-modal-btn]', '.popup-call', '.popup-call__close');

  // Покаать модальное окно через 60сек
  // showModalByTime('.popup', 60000);
};

export default modals;
