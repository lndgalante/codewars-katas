/*
  Title:
    Filter Long Words

  Description:
    Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

  Examples:
    * With input "The quick brown fox jumps over the lazy dog", 4
    * Return ['quick', 'brown', 'jumps']

  Kata Link:
    https://www.codewars.com/kata/5697fb83f41965761f000052

  Discuss Link:
    https://www.codewars.com/kata/5697fb83f41965761f000052/discuss

  Solutions Link:
    https://www.codewars.com/kata/5697fb83f41965761f000052/solutions
*/

// Long Solution
/* function filterLongWords(sentence, n) {
  const regex = new RegExp(`[^ ]{${n + 1},}`, 'gi')
  return sentence.match(regex) || []
} */

const filterLongWords = (sentence, n) => sentence.match(new RegExp(`[^ ]{${n + 1},}`, 'gi')) || []

// Function Export
module.exports = filterLongWords
