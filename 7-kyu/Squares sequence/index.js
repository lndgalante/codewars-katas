/*
  Title:
    Squares sequence

  Description:
    Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the previous number. If n is negative or zero, return an empty array/list.

  Examples:
    squares(2,5) = [2,4,16,256,65536]
    squares(3,3) = [3,9,81]

  Kata Link:
    https://www.codewars.com/kata/squares-sequence

  Discuss Link:
    https://www.codewars.com/kata/squares-sequence/discuss

  Solutions Link:
    https://www.codewars.com/kata/squares-sequence/solutions
*/

// Long Solution
/*
const squares = (x, n) => {
  if (n <= 0) return []

  const numbers = Array.from({ length: n }, (_, index) => (index === 0 ? x : 0))
  let previousNumber = x

  const squareSequence = numbers.map((num, index, arr) => {
    const result = index === 0 ? num : previousNumber
    previousNumber = previousNumber ** 2

    return result
  })

  return squareSequence
}
*/

// Short Solution
const squares = (x, n) => Array.from({ length: n }, (_, index) => x ** (2 ** index))

// Function Export
module.exports = squares
