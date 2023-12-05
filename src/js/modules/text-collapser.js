import { gsap } from 'gsap';

const textCollapser = function (collBtn, collContainer, minHeight) {
  const btnContainer = document.querySelector(collBtn);
  const collapseBtn = document.querySelector(`${collBtn} .text-collapser__btn`);
  const collapseContainer = document.querySelector(collContainer);

  const elHeight = collapseContainer.clientHeight;

  btnContainer.style.setProperty('--scale', 1);
  collapseContainer.style.setProperty('--mb', 0);

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
    gsap.set(collapseContainer, { css: { height: minHeight } });
    gsap.set(collapseBtn, { transformPerspective: 500 });

    colapsTl.to(collapseContainer, { css: { height: elHeight } });
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
      collapseContainer.classList.add('expanded');
      collapseContainer.style.setProperty('--mb', '20px');
      colapsTl.play();
      btnContainer.style.setProperty('--scale', 0);
      isOpen = true;
    } else {
      colapsTl.reverse();
      collapseContainer.classList.remove('expanded');
      collapseContainer.style.setProperty('--mb', 0);
      btnContainer.style.setProperty('--scale', 1);
      isOpen = false;
    }
  });
};

export default textCollapser;
