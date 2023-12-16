import lenis from '../vendor/lenis';

let YaMapsShown = false;
function showLazyMap() {
  lenis.on('scroll', (e) => {
    if (!YaMapsShown && e.actualScroll > 1000) {
      showYaMaps();
      YaMapsShown = true;
    }
  });
}

function showYaMaps() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae4cd471be184e80a0cb7b3af1dd5384ba5ffd07df51b480cde26f455bc58f148&amp;width=100%25&amp;height=411&amp;lang=ru_RU&amp;scroll=true';
  document.getElementById('map').appendChild(script);
}

export default showLazyMap;
