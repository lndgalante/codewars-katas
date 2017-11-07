/* 
  Title:
    Return Negative

  Description:
    In this simple assignment you are given a number and have to make it negative.
    But maybe the number is already negative?

  Examples:
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0

  Notes:
    The number can be negative already, in which case no change is required.
    Zero (0) can't be negative, see examples above.
  
  Link:
    https://www.codewars.com/kata/return-negative
*/

// Long Solution

function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num
}

// Short Solution
const makeNegative = num => (Math.sign(num) === 1 ? -num : num)

// Test to pass
console.log(makeNegative(42))
// => It should return -42
console.log(makeNegative(1))
// => It should return -1
console.log(makeNegative(-5))
// => It should return -5
console.log(makeNegative(0))
// => It should return 0
