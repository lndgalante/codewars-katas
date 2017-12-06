/* 
  Title:
    Square(n) Sum

  Description:
    Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

  Examples:
    squareSum([1, 2, 2]); // should return 9

  Link:
    https://www.codewars.com/kata/square-n-sum
*/

// Long Solution
/* 
function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0)
} 
*/

// Short Solution
const squareSum = numbers =>
  numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0)

// Function Export
module.exports = squareSum
