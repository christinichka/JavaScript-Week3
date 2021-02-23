//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinimumNum(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
// console.log(findMinimumNum(nums1));
// console.log(findMinimumNum(nums2));
// console.log(findMinimumNum(nums3));

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

//Your function here...
function sortIncreasingArr(arr) {
  let sortedArr = [];
  while (arr.length > 0) {
    let minimum = findMinimumNum(arr);
    sortedArr.push(minimum);
    arr.splice(arr.indexOf(minimum), 1);
  }
  return sortedArr;
}

console.log(sortIncreasingArr(nums1));
console.log(sortIncreasingArr(nums2));
console.log(sortIncreasingArr(nums3));
