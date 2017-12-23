/*
  Title:
    Bit Counting

  Description:
    Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

  Examples:
    The binary representation of 1234 is 10011010010, so the function should return 5 in this case

  Kata Link:
    https://www.codewars.com/kata/bit-counting

  Discuss Link:
    https://www.codewars.com/kata/bit-counting/discuss

  Solutions Link:
    https://www.codewars.com/kata/bit-counting/solutions
*/

// Long Solution
/*
function countBits(n) {
  return n
    .toString(2)
    .split('')
    .reduce((a, b) => (b === '1' ? ++a : a), 0)
}
*/

// Short Solution
const countBits = n =>
  n
    .toString(2)
    .split('')
    .reduce((a, b) => (b === '1' ? ++a : a), 0)

// Function Export
module.exports = countBits
