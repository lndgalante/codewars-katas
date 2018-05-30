/*
  Title:
    Find the vowels

  Description:
    We want to know the index of the vowels in a given word, for example,
    there are two vowels in the word super (the second and fourth letters).
    So given a string "super", we should return a list of [2, 4].

  Examples:
    Mmmm  => []
    Super => [2,4]
    Apple => [1,5]
    YoMama -> [1,2,4,6]

  Notes:
    Vowels in this context refers to English Language Vowels - a e i o u y
    This is indexed from [1..n] (not zero indexed!)

  Kata Link:
    https://www.codewars.com/kata/find-the-vowels

  Discuss Link:
    https://www.codewars.com/kata/find-the-vowels/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-vowels/solutions
*/

// Long Solution
const vowelIndices = word =>
  word
    .split('')
    .map((char, index) => (/[aeiouy]/gi.test(char) ? index + 1 : 0))
    .filter(Boolean)

// Function Export
module.exports = vowelIndices
