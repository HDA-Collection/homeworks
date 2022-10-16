"use strict"

// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = 0;
  let sum = 0;

  // Cумму всех элементов
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Максимальное и Минимальное значение
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 
    if(arr[i] < min) {
      min = arr[i];
    }
  }

  // Среднее арифметическое значение
  let count = ((sum / arr.length).toFixed(2));
  let avg = Number(count);

  return { min: min, max: max, avg: avg };
}

getArrayParams([5])

// Задание 2
const f = sum => {
  return sum.map(nums => nums.reduce((acc, v) => acc + v, 0));
}
  
const sum = [[5, 5, 11], [10, 10, 17], [10, 5]];
console.log(f(sum));

function makeWork(arrOfArr, func) { // Мясорубка
  let max = 0;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}