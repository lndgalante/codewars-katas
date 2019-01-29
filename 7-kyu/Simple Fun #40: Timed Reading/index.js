/*
  Title:
    Simple Fun #40: Timed Reading

  Description:
    Timed Reading is an educational tool used in many schools to improve and advance reading skills.
    A young elementary student has just finished his very first timed reading exercise.
     Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

    Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.

    Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

  Examples:
    For maxLength = 4 and text = "The Fox asked the stork, 'How is the soup?'", the output should be 7
    The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".

  Notes:
    [input] integer maxLength
     A positive integer, the maximum length of the word the boy can read.
     Constraints: 1 ≤ maxLength ≤ 10.

    [input] string text
     A non-empty string of English letters and punctuation marks.

    [output] an integer
     The number of words the boy has read.

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-40-timed-reading

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-40-timed-reading/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-40-timed-reading/solutions
*/

// Long Solution
/*
const timedReading = (maxLength, text) =>
  text
    .split(' ')
    .map(word => word.replace(/\W/gi, ''))
    .filter(word => /[a-z]/gi.test(word))
    .reduce((total, word) => (word.length <= maxLength ? total + 1 : total), 0)
*/

// Short Solution - Regex https://regexr.com/47c2b
const timedReading = (maxLength, text) =>
  (text.match(/\b\w+\b/g) || []).filter(({ length }) => length <= maxLength).length

// Function Export
module.exports = timedReading
