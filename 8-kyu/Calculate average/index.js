/*
  Title:
    Calculate average

  Description:
    Write function avg which calculates average of numbers in given list.

  Kata Link:
    https://www.codewars.com/kata/calculate-average

  Discuss Link:
    https://www.codewars.com/kata/calculate-average/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculate-average/solutions
*/

// Long Solution
/*
function find_average(array) {
  const result = array.reduce((a, b) => a + b, 0)
  const totalItems = array.length
  return result / totalItems
}
*/

// Short Solution
const findAverage = array => array.reduce((a, b) => a + b, 0) / array.length

// Function Export
module.exports = findAverage
