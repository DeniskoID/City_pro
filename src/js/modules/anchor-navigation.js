import lenis from '../vendor/lenis';

function toAnchor() {
  const links = document.querySelectorAll('.nav__link');

  links.forEach((link) => {
    let id = link.getAttribute('href');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lenis.scrollTo(id, { offset: -150 });
    });
  });
}

export default toAnchor;
