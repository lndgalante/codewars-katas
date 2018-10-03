/*
  Title:
    Summy

  Description:
    Write a function that takes a string which has integers inside it separated by spaces,
    and your task is to convert each integer in the string into an integer and return their sum.

  Examples:
    summy("1 2 3")  ==> 6

  Kata Link:
    https://www.codewars.com/kata/summy

  Discuss Link:
    https://www.codewars.com/kata/summy/discuss

  Solutions Link:
    https://www.codewars.com/kata/summy/solutions
*/

// Long Solution
const summy = stringOfInts =>
  stringOfInts.split(' ').reduce((total, value) => total + Number(value), 0)

// Function Export
module.exports = summy
