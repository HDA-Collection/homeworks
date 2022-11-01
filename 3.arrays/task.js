// Задача 1
function compareArrays(arr1, arr2) {
  let result = arr1.length == arr2.length && arr1.every((e, i) => arr2[i] == e);
  return result;
}

// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения


// Задача 2
function advancedFilter(arr) {
  let resultArr = arr.filter((e, i) => arr[i] >= 0 && arr[i] % 3 == 0).map(res => res * 10);
  return resultArr;
}

// advancedFilter([-1, 6, -9, 3]); // [60, 30]