/*
  Title:
    Magic Sum of 3s

  Description:
    The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.
    Write a function magic_sum which accepts an array of integers and returns the sum.

  Examples:
    [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

  Notes:
    If the sum cannot be calculated, 0 should be returned.

  Kata Link:
    https://www.codewars.com/kata/magic-sum-of-3s

  Discuss Link:
    https://www.codewars.com/kata/magic-sum-of-3s/discuss

  Solutions Link:
    https://www.codewars.com/kata/magic-sum-of-3s/solutions
*/

// Long Solution
const magicSum = numbers =>
  Array.isArray(numbers) && numbers.length
    ? numbers.reduce((total, number) => (number % 2 !== 0 && String(number).includes('3') ? total + number : total), 0)
    : 0

// Function Export
module.exports = magicSum
