// Сумма элементов всех детей в родительском блоке, учитывая Margins

export function getSumOfChildHeights(parent) {
  const children = parent.children;
  let sum = 0;
  for (const child of children) {
    const height = child.offsetHeight;
    const marginBottom = parseInt(window.getComputedStyle(child).marginBottom);
    sum += height + marginBottom;
  }
  return sum;
}

// const sumHeight = getSumOfChildHeights(parent);
