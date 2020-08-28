function reduceArray(array) {
  'use strict';
  let total = 0;
  if (array.length === 0) {
    return 0;
  } else
    for (let i = 0; i < array.length; i += 1) {
      total = total + array[i]; // переббираем масив, добавляем итый елемент к массиву
    }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
