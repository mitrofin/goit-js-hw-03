const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line

  let result = ''; // переменная для результата
  let maxTasks = 0; // переменная для сравнения результата + значение по умолчанию
  const entries = Object.entries(employees);
  for (const [key, value] of entries) {
    // перебираем ключи и значения масива
    if (value > maxTasks) {
      maxTasks = value; // если значение больше - переназначаем
      result = key; //выводим наибольшее значение по ключу
    }
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
