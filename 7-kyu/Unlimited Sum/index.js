/*
  Title:
    Unlimited Sum

  Description:
    Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

    The function should reject any arguments that are not integers, and sum the remaining integers.

  Examples:
    sum(1, 2, 3)   // -> 6
    sum(1, "2", 3) // -> 4


  Notes:

  Kata Link:
    https://www.codewars.com/kata/unlimited-sum

  Discuss Link:
    https://www.codewars.com/kata/unlimited-sum/discuss

  Solutions Link:
    https://www.codewars.com/kata/unlimited-sum/solutions
*/

// Long Solution
const sum = (...args) =>
  args
    .filter(arg => Number.isInteger(arg))
    .reduce((total, value) => total + value, 0)

// Function Export
module.exports = sum
