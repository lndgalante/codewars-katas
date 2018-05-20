/*
  Title:
    Anagram Detection

  Description:
    An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

    Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

  Examples:
    "foefet" is an anagram of "toffee"
    "Buckethead" is an anagram of "DeathCubeK"

  Notes:
    Anagrams are case insensitive

  Kata Link:
    https://www.codewars.com/kata/anagram-detection

  Discuss Link:
    https://www.codewars.com/kata/anagram-detection/discuss

  Solutions Link:
    https://www.codewars.com/kata/anagram-detection/solutions
*/

// Long Solution
/*
const charCodeSum = string =>
  string
    .toLowerCase()
    .split('')
    .reduce((total, char) => total + char.charCodeAt(0), 0)

const isAnagram = (test, original) =>
  charCodeSum(test) === charCodeSum(original)
*/

// Alternative Solution
const sortWord = string =>
  string
    .toLowerCase()
    .split('')
    .sort()
    .join()

const isAnagram = (test, original) => sortWord(test) === sortWord(original)

// Function Export
module.exports = isAnagram
