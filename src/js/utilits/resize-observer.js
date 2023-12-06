/* Отслеживает только ресайз ширины  window.innerWidth  */

export function resizeWidthOnly(a, b) {
  var c = [window.innerWidth];
  return (
    (onresize = function () {
      var d = window.innerWidth,
        e = c.length;
      c.push(d);
      if (c[e] !== c[e - 1]) {
        clearTimeout(b);
        b = setTimeout(a, 50);
      }
    }),
    a
  );
}

// Использование

// resizeWidthOnly(function () {
//   textCollapser('.text-collapser', '[collapsed]', '195px');
// });
