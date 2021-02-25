//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Original function
// function findMinimumNum(arr){
//   let min = arr[0];
//   for (i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }

// Recursion function
function minimumRecursion (arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    if (arr[0] > arr[1]) {
      arr = arr.slice(1);
    } else {
      arr = [arr[0]].concat(arr.slice(2));
    }
    return minimumRecursion(arr);
  }
}


//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

// Without recursion
//Your function here...
// function sortIncreasingArr(arr) {
//   let sortedArr = [];
//   while (arr.length > 0) {
//     let minimum = findMinimumNum(arr);
//     sortedArr.push(minimum);
//     arr.splice(arr.indexOf(minimum), 1);
//   }
//   return sortedArr;
// }

// Using recursion
function sortIncreasingArr(arr) {
  let sortedArr = [];
  while (arr.length > 0) {
    let minimum = minimumRecursion(arr);
    sortedArr.push(minimum);
    arr.splice(arr.indexOf(minimum), 1);
  }
  return sortedArr;
}

console.log(sortIncreasingArr(nums1));
console.log(sortIncreasingArr(nums2));
console.log(sortIncreasingArr(nums3));
