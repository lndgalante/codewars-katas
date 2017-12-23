/*
  Title:
    Shortest Word

  Description:
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.

  Kata Link:
    https://www.codewars.com/kata/shortest-word

  Discuss Link:
    https://www.codewars.com/kata/shortest-word/discuss

  Solutions Link:
    https://www.codewars.com/kata/shortest-word/solutions
*/

// Long Solution
/*
function findShort(s) {
  const wordsArray = s.split(' ')
  const wordsLength = wordsArray.map(word => word.length)
  const minWordLength = Math.min(...wordsLength)

  return minWordLength
}
*/

// One-line Solution
const findShort = s => Math.min(...s.split(' ').map(word => word.length))

// Function Export
module.exports = findShort
