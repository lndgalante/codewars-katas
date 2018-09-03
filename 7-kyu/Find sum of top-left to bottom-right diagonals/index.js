/*
  Title:
    Find sum of top-left to bottom-right diagonals

  Description:
    Given a "square" array of subarrays, find the sum of values from the first value of the first array,
    the second value of the second array, the third value of the third array, and so on...

  Examples:
    const exampleArray = [[1, 0, 0, 0],
                      [0, 1, 0, 0],
                      [0, 0, 1, 0],
                      [0, 0, 0, 1]]

    diagonalSum(exampleArray) // => 4

    const exampleArray = [[1, 0, 0, 0, 0],
                      [0, 1, 0, 0, 0],
                      [0, 0, 1, 0, 0],
                      [0, 0, 0, 1, 0],
                      [0, 0, 0, 0, 1]]

    diagonalSum(exampleArray) // => 5

  Kata Link:
    https://www.codewars.com/kata/find-sum-of-top-left-to-bottom-right-diagonals

  Discuss Link:
    https://www.codewars.com/kata/find-sum-of-top-left-to-bottom-right-diagonals/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-sum-of-top-left-to-bottom-right-diagonals/solutions
*/

// Long Solution
/*
const diagonalSum = matrix =>
  matrix
    .reduce((array, row, index) => array.concat(row[index]), [])
    .reduce((total, value) => total + value, 0)
*/

// Short Solution
const diagonalSum = matrix =>
  matrix.reduce((total, row, index) => total + row[index], 0)

// Function Export
module.exports = diagonalSum
