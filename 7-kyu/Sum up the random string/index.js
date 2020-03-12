/*
  Title:
    Sum up the random string

  Description:
    Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

  Examples:
    str = "In 2015, I want to know how much does iPhone 6+ cost?"

    The numbers are 2015, 6

    Sum is 2021.

  Notes:
    - Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers

    - All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14.
      Same as 3.14, should be treated as two numbers 3 and 14

    - If no number was given in the string, it should return 0

  Kata Link:
    https://www.codewars.com/kata/sum-up-the-random-string

  Discuss Link:
    https://www.codewars.com/kata/sum-up-the-random-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-up-the-random-string/solutions
*/

// Long Solution
const sumFromString = string =>
  (string.match(/\d+/g) || []).reduce((total, value) => total + Number(value), 0)

// Function Export
module.exports = sumFromString
