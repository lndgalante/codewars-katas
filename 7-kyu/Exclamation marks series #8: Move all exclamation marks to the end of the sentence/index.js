/*
  Title:
    Exclamation marks series #8: Move all exclamation marks to the end of the sentence

  Description:
    Move all exclamation marks to the end of the sentence

  Examples:
    remove("Hi!") === "Hi!"
    remove("Hi! Hi!") === "Hi Hi!!"
    remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
    remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
    remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"Note

  Kata Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-8-move-all-exclamation-marks-to-the-end-of-the-sentence

  Discuss Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-8-move-all-exclamation-marks-to-the-end-of-the-sentence/discuss

  Solutions Link:
    https://www.codewars.com/kata/exclamation-marks-series-number-8-move-all-exclamation-marks-to-the-end-of-the-sentence/solutions
*/

// Long Solution
/*
 const remove = s => {
  const exclamationMarks = (s.match(/!/g) || []).join('')
  return `${s.replace(/!/g, '')}${exclamationMarks}`
}
*/

// Short Solution - https://regexr.com/4fg7h
const remove = s => `${s.replace(/!/g, '')}${s.replace(/[^!]/g, '')}`

// Function Export
module.exports = remove
