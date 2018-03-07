/*
  Title:
    Exclamation marks series #2: Remove all exclamation marks from the end of sentence

  Description:
    Remove all exclamation marks from the end of sentence.

  Examples:
    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi! Hi"
    remove("Hi") === "Hi"

  Notes:
    Please don't post issue about difficulty or duplicate.

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/solutions
*/

// Long Solution
const remove = s => s.replace(/!*$/g, '')

// Function Export
module.exports = remove
