/*
  Title:
    Powers of i

  Description:
    i is the imaginary unit, it is defined by i² = -1, therefore it is a solution to x²+1=0.

    Your Task is to write a function pofi that returns i to the power of a given non-negative integer in its simplest form as a string (answer may contain i).

  Kata Link:
    https://www.codewars.com/kata/powers-of-i

  Discuss Link:
    https://www.codewars.com/kata/powers-of-i/discuss

  Solutions Link:
    https://www.codewars.com/kata/powers-of-i/solutions
*/

// Long Solution
/*
const results = {
  0: '1',
  1: 'i',
  2: '-1',
  3: '-i',
}

const pofi = n => results[n % 4]
*/

// Short Solution
const pofi = n => ['1', 'i', '-1', '-i'][n % 4]

// Function Export
module.exports = pofi
