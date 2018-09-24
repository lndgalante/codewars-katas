/*
  Title:
    Enumerable Magic #25 - Take the First N Elements

  Description:
    Create a method take that accepts a list/array and a number n,
    and returns a list/array array of the first n elements from the list/array.

    If you need help, here's a reference:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

  Kata Link:
    https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements

  Discuss Link:
    https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/enumerable-magic-number-25-take-the-first-n-elements/solutions
*/

// Long Solution
const take = (arr, n) => arr.slice(0, n)

// Function Export
module.exports = take
