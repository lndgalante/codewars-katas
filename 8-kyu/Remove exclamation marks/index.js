/*
  Title:
    Remove exclamation marks

  Description:
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  Kata Link:
    https://www.codewars.com/kata/remove-exclamation-marks

  Discuss Link:
    https://www.codewars.com/kata/remove-exclamation-marks/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-exclamation-marks/solutions
*/

// Long Solution
const removeExclamationMarks = s => s.replace(/!/g, '')

// Function Export
module.exports = removeExclamationMarks
