import { gsap } from 'gsap';
import { resizeWidthOnly } from '../utilits/resize-observer';

const textCollapser = function (collBtn, collContainer, minHeight) {
  const btnContainer = document.querySelector(collBtn);
  const collapseBtn = document.querySelector(`${collBtn} .text-collapser__btn`);
  const textContainer = document.querySelector(`${collContainer} .collapsed-container`);
  const collapsedContainer = document.querySelector(collContainer);

  function setStates() {
    setTimeout(function () {
      let sumHeight = textContainer.offsetHeight;

      btnContainer.style.setProperty('--scale', 1);

      //Gsap interactions

      let mm = gsap.matchMedia();

      let isOpen = false;

      const colapsTl = gsap.timeline({
        defaults: {
          ease: 'power4.inOut',
          duration: 1,
        },
      });

      mm.add('(max-width: 390px)', () => {
        gsap.set(collapsedContainer, { css: { height: minHeight } });
        gsap.set(collapseBtn, { transformPerspective: 500 });

        colapsTl.to(collapsedContainer, { css: { height: sumHeight } });
        // colapsTl.from(collapsedContainer, { css: { height: minHeight } });
        colapsTl.to(
          collapseBtn,
          {
            duration: 1,
            scale: 1.5,
            rotationX: 180,
            rotationY: 0,
            x: 0,
            y: 0,
            z: -200,
          },
          '<',
        );

        colapsTl.pause();
      });

      // ====================

      collapseBtn.addEventListener('click', () => {
        if (!isOpen) {
          collapsedContainer.classList.add('expanded');
          colapsTl.play();
          btnContainer.style.setProperty('--scale', 0);
          isOpen = true;
        } else {
          colapsTl.reverse();
          collapsedContainer.classList.remove('expanded');
          btnContainer.style.setProperty('--scale', 1);
          isOpen = false;
        }
      });

      resizeWidthOnly(() => {
        if (isOpen) {
          colapsTl.reverse();
          collapsedContainer.classList.remove('expanded');
          btnContainer.style.setProperty('--scale', 1);
          isOpen = false;
        }
      });
    }, 350);
  }

  setStates();
  resizeWidthOnly(() => {
    setStates();
  });
};

export default textCollapser;
