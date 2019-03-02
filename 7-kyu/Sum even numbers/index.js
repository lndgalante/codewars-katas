/*
  Title:
    Sum even numbers

  Description:
    Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.

  Examples:
    Considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

  Kata Link:
    https://www.codewars.com/kata/sum-all-the-arrays

  Discuss Link:
    https://www.codewars.com/kata/sum-all-the-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-all-the-arrays/solutions
*/

// Long Solution
const sumEvenNumbers = input => input.reduce((total, number) => (number % 2 === 0 ? total + number : total), 0)

// Function Export
module.exports = sumEvenNumbers
