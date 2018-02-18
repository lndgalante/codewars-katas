/*
  Title:
    Find numbers which are divisible by given number

  Description:
    Write a function which takes two arguments and returns all numbers which are divisible by given divisor.
    First argument is array of numbers and the second is divisor.

  Examples:
    divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]

  Kata Link:
    https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number

  Discuss Link:
    https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/solutions
*/

// Long Solution
const divisibleBy = (numbers, divisor) =>
  numbers.filter(num => num % divisor === 0)

// Function Export
module.exports = divisibleBy
