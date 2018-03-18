/*
  Title:
    Is integer safe to use?

  Description:
    Not all integers can be represented by JavaScript/TypeScript.
    It has space to to represent 53bit signed integers.
    In this Kata, we've to determine if it is safe to use the integer or not.
    Make use of the latest ES6 features to find this.

  Examples:
    SafeInteger(9007199254740990)
      // true
    SafeInteger(-90)
      // true
    SafeInteger(9007199254740992)
      // false

  Kata Link:
    https://www.codewars.com/kata/is-integer-safe-to-use

  Discuss Link:
    https://www.codewars.com/kata/is-integer-safe-to-use/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-integer-safe-to-use/solutions
*/

// Long Solution
const safeInteger = n => Number.isSafeInteger(n)

// Function Export
module.exports = safeInteger
