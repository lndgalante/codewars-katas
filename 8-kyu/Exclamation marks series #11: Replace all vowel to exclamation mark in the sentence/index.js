/*
  Title:
    Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

  Description:
    Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

  Examples:
    replace("Hi!") === "H!!"
    replace("!Hi! Hi!") === "!H!! H!!"
    replace("aeiou") === "!!!!!"
    replace("ABCDE") === "!BCD!"

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/solutions
*/

// Long Solution
const replace = s => s.replace(/[aeiou]/gi, '!')

// Function Export
module.exports = replace
