/*
  Title:
    Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

  Description:
    Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
    For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

  Examples:
    remove("Hi!") === "Hi!"
    remove("Hi!!!") === "Hi!"
    remove("!Hi") === "Hi!"
    remove("!Hi!") === "Hi!"
    remove("Hi! Hi!") === "Hi Hi!"
    remove("Hi") === "Hi!"

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string/solutions
*/

// Long Solution
const remove = s => `${s.replace(/!+/g, '')}!`

// Function Export
module.exports = remove
