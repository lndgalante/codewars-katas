/*
  Title:
    Exclamation marks series #1: Remove a exclamation mark from the end of string

  Description:
    Remove a exclamation mark from the end of string.
    For a beginner kata, you can assume that the input data is always a string, no need to verify it.

  Examples:
    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi!!"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi! Hi"
    remove("Hi") === "Hi"

  Notes:
    Please don't post issue about difficulty or duplicate.

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-exclamation-mark-from-the-end-of-string

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-exclamation-mark-from-the-end-of-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-exclamation-mark-from-the-end-of-string/solutions
*/

// Short Solution
const remove = s => s.replace(/!$/, '')

// Function Export
module.exports = remove
