/*
  Title:
    Substring fun

  Description:
    Complete the function that takes an array of words.
    You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

  Examples:
    ["yoda", "best", "has"]  -->  "yes"
      ^        ^        ^
      n=0      n=1      n=2

  Notes:
    Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

  Kata Link:
    https://www.codewars.com/kata/565b112d09c1adfdd500019c

  Discuss Link:
    https://www.codewars.com/kata/565b112d09c1adfdd500019c/discuss

  Solutions Link:
    https://www.codewars.com/kata/565b112d09c1adfdd500019c/solutions
*/

// Long Solution
const nthChar = (words) => words.map((word, index) => word[index]).join('')

// Function Export
module.exports = nthChar
