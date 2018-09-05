/*
  Title:
    Sum of Triangular Numbers

  Description:
    Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

    Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

    [01]
    02 [03]
    04 05 [06]
    07 08 09 [10]
    11 12 13 14 [15]
    16 17 18 19 20 [21]

    e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

  Notes:
    Triangular Numbers cannot be negative so return 0 if a negative number is given.

  Kata Link:
    https://www.codewars.com/kata/sum-of-triangular-numbers

  Discuss Link:
    https://www.codewars.com/kata/sum-of-triangular-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-triangular-numbers/solutions
*/

// Long Solution
/*
const sumTriangularNumbers = n => {
  if (n <= 0) return 0

  return Array.from({ length: n }, (_, index) => index + 1)
    .map(
      (number, index, array) =>
        index === 0
          ? number
          : array.slice(0, index + 1).reduce((total, value) => total + value, 0)
    )
    .reduce((total, value) => total + value, 0)
}
*/

// Short Solution
const sumTriangularNumbers = n => (n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6)

// Function Export
module.exports = sumTriangularNumbers
