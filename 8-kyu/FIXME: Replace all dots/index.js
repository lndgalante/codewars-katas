/*
  Title:
    FIXME: Replace all dots

  Description:
    The code provided is supposed replace all the dots . in the specified String str with dashes -
    But it's not working properly.
    Fix the bug so we can all go home early.

  Notes:
    String str will never be null.

  Kata Link:
    https://www.codewars.com/kata/fixme-replace-all-dots

  Discuss Link:
    https://www.codewars.com/kata/fixme-replace-all-dots/discuss

  Solutions Link:
    https://www.codewars.com/kata/fixme-replace-all-dots/solutions
*/

// Long Solution
const replaceDots = str => str.replace(/\./g, '-')

// Function Export
module.exports = replaceDots
