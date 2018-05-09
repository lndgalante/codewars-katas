/*
  Title:
    Is n divisible by x and y?

  Description:
    Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

  Examples:
    isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
    isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
    isDivisible(100,5,3)--> false because 100 is not divisible by 3
    isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

  Kata Link:
    https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript/solutions
*/

// Long Solution
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

// Function Export
module.exports = isDivisible
