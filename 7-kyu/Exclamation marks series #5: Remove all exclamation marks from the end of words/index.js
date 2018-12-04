/*
  Title:
    Exclamation marks series #5: Remove all exclamation marks from the end of words

  Description:
    Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.

  Examples:
    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi Hi"
    remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-5-remove-all-exclamation-marks-from-the-end-of-words

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-5-remove-all-exclamation-marks-from-the-end-of-words/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-5-remove-all-exclamation-marks-from-the-end-of-words/solutions
*/

// Long Solution
/*
const remove = s =>
  s
    .split(' ')
    .map(string => string.replace(/!+$/gi, ''))
    .join(' ')
*/

// Short Solution - https://regexr.com/449qq
const remove = s => s.replace(/\b!+/g, '')

// Function Export
module.exports = remove
