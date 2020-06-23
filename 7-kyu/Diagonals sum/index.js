/*
  Title:
    Diagonals sum

  Description:
    Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

  Examples:
    diagonals( [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ] );

    returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

  Notes:
    Matrix = array of n length whose elements are n length arrays of integers.

  Kata Link:
    https://www.codewars.com/kata/5592fc599a7f40adac0000a8

  Discuss Link:
    https://www.codewars.com/kata/5592fc599a7f40adac0000a8/discuss

  Solutions Link:
    https://www.codewars.com/kata/5592fc599a7f40adac0000a8/solutions
*/

// Long Solution
/*
function sum(matrix) {
  const mainDiagonal = matrix.reduce((acc, row, index) => acc + row[index], 0)
  const secondaryDiagonal = matrix.reduce((acc, row, index) => acc + row.reverse()[index], 0)

  return mainDiagonal + secondaryDiagonal
}
*/

// Short Solution
const sum = (matrix) => matrix.reduce((acc, row, index) => acc + row[index] + row[matrix.length - index - 1], 0)

// Function Export
module.exports = sum
