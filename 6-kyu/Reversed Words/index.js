/*
  Title:
    Reversed Words

  Description:
    Complete the solution so that it reverses all of the words within the string passed in.

  Example:
    reverseWords("The greatest victory is that which requires no battle")
    Should return "battle no requires which that is victory greatest The"

  Kata Link:
    https://www.codewars.com/kata/reversed-words

  Discuss Link:
    https://www.codewars.com/kata/reversed-words/discuss

  Solutions Link:
    https://www.codewars.com/kata/reversed-words/solutions
*/

// Long Solution
/*
function reverseWords(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
}
*/

// Short Solution
const reserveWords = string =>
  string
    .split(' ')
    .reverse()
    .join(' ')

// Function Export
module.exports = reserveWords
