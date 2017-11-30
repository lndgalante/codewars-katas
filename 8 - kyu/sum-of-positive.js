/* 
  Title:
    Sum of positive

  Description:
    You get an array of numbers, return the sum of all of the positives ones.

  Examples:
    [1,-4,7,12] => 1 + 7 + 12 = 20

  Notes:
    Array may be empty, in this case return 0.
  
  Link:
    https://www.codewars.com/kata/sum-of-positive
*/

// Long Solution
// function positiveSum(arr) {
//   return arr.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0)
// }

// Short Solution
const positiveSum = arr =>
  arr.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0)

// Test to pass
console.log(positiveSum([1, 2, 3, 4, 5]))
// => It should return 15
console.log(positiveSum([1, -2, 3, 4, 5]))
// => It should return 13
console.log(positiveSum([]))
// => It should return 0
console.log(positiveSum([-1, -2, -3, -4, -5]))
// => It should return 0
console.log(positiveSum([-1, 2, 3, 4, -5]))
// => It should return 9
