/*
  Title:
    Grasshopper - Summation

  Description:
    Write a program that finds the summation of every number between 1 and num.
    The number will always be a positive integer greater than 0.

  Examples:
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

  Kata Link:
    https://www.codewars.com/kata/grasshopper-summation

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-summation/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-summation/solutions
*/

// Long Solution
/*
function summation(num) {
  let result = 0
  for (let i = 1; i <= num; i++) result += i

  return result
}
*/

// Short Solution
const summation = n => n * (n + 1) / 2

// Function Export
module.exports = summation
