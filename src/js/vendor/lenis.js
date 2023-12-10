import Lenis from '@studio-freight/lenis';

const lenis = new Lenis();

lenis.stop();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;
