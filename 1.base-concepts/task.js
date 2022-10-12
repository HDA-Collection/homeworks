"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  // код для задачи №1 писать здесь
  let d = b * b - 4 * a * c;
  console.log(d);

  if(a == 0) {
    return "Ошибка: A = 0";
  } if(d == 0) {
    arr.push((-b) / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  //

  return arr;
}