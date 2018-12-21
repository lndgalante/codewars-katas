/*
  Title:
    Exclamation marks series #3: Remove all exclamation marks from sentence except at the end

  Description:
     Remove all exclamation marks from sentence except at the end.

  Examples:
    remove("Hi!") == "Hi!"
    remove("Hi!!!") == "Hi!!!"
    remove("!Hi") == "Hi"
    remove("!Hi!") == "Hi!"
    remove("Hi! Hi!") == "Hi Hi!"
    remove("Hi") == "Hi"

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-3-remove-all-exclamation-marks-from-sentence-except-at-the-end

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-3-remove-all-exclamation-marks-from-sentence-except-at-the-end/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-3-remove-all-exclamation-marks-from-sentence-except-at-the-end/solutions
*/

// Long Solution - https://regexr.com/45clp
const remove = s => s.replace(/!+([^!])/g, '$1')

// Function Export
module.exports = remove
