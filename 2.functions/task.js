"use strict"

// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Сумма
    sum += arr[i];

    // Максимальное
    if(arr[i] > max) {
      max = arr[i];
    }
    // Минимальное 
    if(arr[i] < min) {
      min = arr[i];
    }
  }

  // Среднее
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams([-99, 99, 10])

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }

  return sum;
}

function makeWork(arrOfArr, worker, worker2) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = worker(arrOfArr[i]);

    if (max < sum) { 
      max = sum;
    }
  }

  return max;
}

// console.log(makeWork([[10,10,20],[20,19,10]],worker));

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } 
    if(arr[i] < min) {
      min = arr[i];
    }

    let difference = Math.abs(max - min);
    
    return difference;
  }
}

// console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30