/*
  Title:
    Difference Of Squares

  Description:
    Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

  Examples:
    For example, when n = 10:

        The square of the sum of the numbers is:

        (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

        The sum of the squares of the numbers is:

        12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

    Hence the difference between square of the sum of the first ten natural numbers
    and the sum of the squares of those numbes is: 3025 - 385 = 2640

  Kata Link:
    https://www.codewars.com/kata/difference-of-squares

  Discuss Link:
    https://www.codewars.com/kata/difference-of-squares/discuss

  Solutions Link:
    https://www.codewars.com/kata/difference-of-squares/solutions
*/

// Long Solution
/*
const differenceOfSquares = n => {
  const naturalNumbers = Array.from({ length: n }, (_, index) => index + 1)

  const squareSum =
    naturalNumbers.reduce((total, number) => total + number, 0) ** 2

  const sumSquare = naturalNumbers.reduce(
    (total, number) => total + number ** 2,
    0
  )

  return squareSum - sumSquare
}
*/

// Short Solution
const differenceOfSquares = n => (n * (n * n - 1) * (3 * n + 2)) / 12

// Function Export
module.exports = differenceOfSquares
