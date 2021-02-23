
//  JavaScript syntax for numerical sorting is arrayName.sort(function(a, b){return a-b});.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending/increasing order.
function sortAscending(numArr) {
  numArr.sort(function(a, b){return a-b});
  return numArr;
}
console.log(sortAscending(nums1));
console.log(sortAscending(nums2));
console.log(sortAscending(nums3));

//Sort each array in decending order.
function sortDescending(numArr) {
  numArr.sort(function(a, b){return b-a});
  return numArr;
}

console.log(sortDescending(nums1));
console.log(sortDescending(nums2));
console.log(sortDescending(nums3));

