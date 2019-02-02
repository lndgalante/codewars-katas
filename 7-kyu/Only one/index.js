/*
  Title:
    Only one

  Description:
    Given any number of boolean flags function should return true if and only if one of them is true while others are false.
    If function is called without arguments it should return false.

  Examples:
    onlyOne() --> false
    onlyOne(true, false, false) --> true
    onlyOne(true, false, false, true) --> false
    onlyOne(false, false, false, false) --> false

  Kata Link:
    https://www.codewars.com/kata/only-one

  Discuss Link:
    https://www.codewars.com/kata/only-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/only-one/solutions
*/

// Long Solution
const onlyOne = (...booleans) => booleans.filter(Boolean).length === 1

// Function Export
module.exports = onlyOne
