/*
  Title:
    Count the Ones

  Description:
    The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used.
    There are several algorithms for efficient computing of the Hamming weight for numbers.
    In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

  Examples:
    hammingWeight(10) // 1010  => 2
    hammingWeight(21) // 10101 => 3

  Notes:
    The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

  Kata Link:
    https://www.codewars.com/kata/count-the-ones

  Discuss Link:
    https://www.codewars.com/kata/count-the-ones/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-the-ones/solutions
*/

// Long Solution
/*
const decimalToBinary = number => {
  const binary = []

  while (number > 0) {
    binary.unshift(number % 2)
    number >>= 1
  }

  return binary
}

const hammingWeight = x =>
  decimalToBinary(x).reduce((total, value) => total + Number(value), 0)
*/

// Recursive Solution
const hammingWeight = x => (x ? (x % 2) + hammingWeight(x >> 1) : x)

// Function Export
module.exports = hammingWeight
