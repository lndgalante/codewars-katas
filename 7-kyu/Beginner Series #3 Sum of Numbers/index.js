/*
  Title:
    Beginner Series #3 Sum of Numbers

  Description:
    Given two integers a and b, which can be positive or negative,
    find the sum of all the numbers between including them too and return it.
    If the two numbers are equal return a or b.

  Examples:
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

  Notes:
    a and b are not ordered!

  Kata Link:
    https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers

  Discuss Link:
    https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/solutions
*/

// Long Solution
function getSum(...range) {
  const rangeSort = range.sort((a, b) => a - b)
  if (rangeSort[0] === rangeSort[1]) return rangeSort[0]

  let result = 0
  for (let i = rangeSort[0]; i <= rangeSort[1]; i++) result += i

  return result
}

// Function Export
module.exports = getSum
