/*
  Title:
    Sum of array singles

  Description:
    In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
    Your task will be to return the sum of the numbers that occur only once.

  Examples:
    For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

  Kata Link:
    https://www.codewars.com/kata/sum-of-array-singles

  Discuss Link:
    https://www.codewars.com/kata/sum-of-array-singles/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-array-singles/solutions
*/

// Long Solution
const repeats = array =>
  array
    .filter(number => array.indexOf(number) === array.lastIndexOf(number))
    .reduce((total, number) => total + number, 0)

// Function Export
module.exports = repeats
