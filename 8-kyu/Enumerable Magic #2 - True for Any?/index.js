/*
  Title:
    Enumerable Magic #2 - True for Any?

  Description:
    Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

    Ruby: If you get stuck, you can read up here:

    http://www.rubycuts.com/enum-any

  Kata Link:
    https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any

  Discuss Link:
    https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any/discuss

  Solutions Link:
    https://www.codewars.com/kata/enumerable-magic-number-2-true-for-any/solutions
*/

// Long Solution
const any = (arr, fun) => arr.some(fun)

// Function Export
module.exports = any
