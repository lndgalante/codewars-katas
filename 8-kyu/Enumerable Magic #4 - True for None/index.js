/*
  Title:
    Enumerable Magic #4 - True for None?

  Description:
    Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

    Ruby: If you need help, here is a reference:

    http://www.rubycuts.com/enum-none

  Kata Link:
    https://www.codewars.com/kata/enumerable-magic-number-4-true-for-none

  Discuss Link:
    https://www.codewars.com/kata/enumerable-magic-number-4-true-for-none/discuss

  Solutions Link:
    https://www.codewars.com/kata/enumerable-magic-number-4-true-for-none/solutions
*/

// Long Solution
const none = (arr, fun) => !arr.some(fun)

// Function Export
module.exports = none
