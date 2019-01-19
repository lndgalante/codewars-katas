/*
  Title:
    Spacify

  Description:
    Modify the spacify function so that it returns the given string with spaces between each letter.
    In this exercise, you can assume that only strings will be passed to your function.

  Examples:
    spacify('hello world') // h e l l o  w o r l d

  Kata Link:
    https://www.codewars.com/kata/spacify

  Discuss Link:
    https://www.codewars.com/kata/spacify/discuss

  Solutions Link:
    https://www.codewars.com/kata/spacify/solutions
*/

// Long Solution
const spacify = str => [...str].join(' ')

// Function Export
module.exports = spacify
