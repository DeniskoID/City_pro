import { gsap } from 'gsap';

const textCollapser = function (collBtn, collContainer, minHeight) {
  const btnContainer = document.querySelector(collBtn);
  const collapseBtn = document.querySelector(`${collBtn} .text-collapser__btn`);
  const textContainer = document.querySelector(`${collContainer} .collapsed-container`);
  const collapsedContainer = document.querySelector(collContainer);

  function getHeight() {
    let height = gsap.getProperty(textContainer, 'height');
    return Math.round(height);
  }

  function callAfterResize(func, delay) {
    let dc = gsap.delayedCall(delay || 0.2, func).pause(),
      handler = () => dc.restart(true);
    window.addEventListener('resize', handler);
    return handler;
  }

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
    gsap.set(collapseBtn, { transformPerspective: 500 });
    colapsTl.from(collapsedContainer, { css: { height: minHeight } });

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

    callAfterResize(() => {
      resizeWidth();
      getHeight();
      gsap.delayedCall(0.3, getHeight);
    });
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

  function resizeWidth() {
    if (isOpen) {
      colapsTl.reverse();
      collapsedContainer.classList.remove('expanded');
      btnContainer.style.setProperty('--scale', 1);
      isOpen = false;
    }
  }
};

export default textCollapser;
