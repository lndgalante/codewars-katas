/*
  Title:
    Simple multiplication

  Description:
    This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

  Kata Link:
    https://www.codewars.com/kata/simple-multiplication

  Discuss Link:
    https://www.codewars.com/kata/simple-multiplication/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-multiplication/solutions
*/

// Long Solution
const simpleMultiplication = number => number * (number % 2 === 0 ? 8 : 9)

// Function Export
module.exports = simpleMultiplication
