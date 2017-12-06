/* 
  Title:
    Reversed Words
    
  Description:
    Complete the solution so that it reverses all of the words within the string passed in.

  Example:
    reverseWords("The greatest victory is that which requires no battle")
    Should return "battle no requires which that is victory greatest The"

  Link:
    https://www.codewars.com/kata/51c8991dee245d7ddf00000e
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
const reserveWords = str =>
  str
    .split(' ')
    .reverse()
    .join(' ')

// Function Export
module.exports = reserveWords
