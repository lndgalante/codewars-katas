/*
  Title:
    Product of the main diagonal of a square matrix.

  Description:
    Given a list of rows of a square matrix, find the product of the main diagonal.

  Examples:
    mainDiagonalProduct([[1,0],[0,1]]) => 1

    mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45

  Kata Link:
    https://www.codewars.com/kata/product-of-the-main-diagonal-of-a-square-matrix

  Discuss Link:
    https://www.codewars.com/kata/product-of-the-main-diagonal-of-a-square-matrix/discuss

  Solutions Link:
    https://www.codewars.com/kata/product-of-the-main-diagonal-of-a-square-matrix/solutions
*/

// Long Solution
const mainDiagonalProduct = mat =>
  mat.reduce((total, row, index) => total * row[index], 1)

// Function Export
module.exports = mainDiagonalProduct
