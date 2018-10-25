/*
  Title:
    Sum of integers in string

  Description:
    Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

  Examples:
    For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

  Notes:
    Note: only positive integers will be tested.

  Kata Link:
    https://www.codewars.com/kata/sum-of-integers-in-string

  Discuss Link:
    https://www.codewars.com/kata/sum-of-integers-in-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-integers-in-string/solutions
*/

// Long Solution
/*
const sumOfIntegersInString = s =>
  (s.match(/\d+/g) || []).map(Number).reduce((total, value) => total + value, 0)
*/

// Short Solution
const sumOfIntegersInString = s =>
  (s.match(/\d+/g) || []).reduce((total, value) => total + Number(value), 0)

// Function Export
module.exports = sumOfIntegersInString
