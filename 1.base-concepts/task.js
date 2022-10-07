"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  // код для задачи №1 писать здесь
  if(a == 0)
    return "Ошибка: A = 0";
  
  let d = b * b - 4 * a * c; // 1
  console.log((d));

  if(d < 0) // 2
    return "Корней нет"
  if(d == 0) // 3
    arr["quadratic roots"] = -b / (2 * a);
  else if (d > 0) {
    let tmp = [] // 4
      arr.push((-b + Math.sqrt(d)) / (2 * a));
      arr.push((-b - Math.sqrt(d)) / (2 * a));
    arr["quadratic roots"] = tmp;
  }
  //

  return arr; // array
}

// Результат []
// 1. D = b^2-4*a*c | Math.pow() +
// 2. D < 0 = [корней нет (пустой массив)]
// 3. D = 0 [1 корень]| Вычислить и вернуть из функции | -b/(2*a)
// 4. D > 0 [2 кореня]| Вычислить и вернуть из функции | (-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a)