/*
  Title:
    Find the next perfect square!

  Description:
    You might know some pretty large perfect squares. But what about the NEXT one?

    Complete the findNextSquare method that finds the next integral perfect square
    after the one passed as a parameter. Recall that an integral perfect square
    is an integer n such that sqrt(n) is also an integer.

    If the parameter is itself not a perfect square, than -1 should be returned.
    You may assume the parameter is positive.

  Examples:
    findNextSquare(121) --> returns 144
    findNextSquare(625) --> returns 676
    findNextSquare(114) --> returns -1 since 114 is not a perfect

  Kata Link:
    https://www.codewars.com/kata/find-the-next-perfect-square

  Discuss Link:
    https://www.codewars.com/kata/find-the-next-perfect-square/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-next-perfect-square/solutions
*/

// Long Solution
const isSquare = n => Number.isInteger(Math.sqrt(n))

const findNextSquare = sq => {
  if (!isSquare(sq)) return -1

  let number = sq + 1
  while (!isSquare(number)) number++

  return number
}

// Function Export
module.exports = findNextSquare
