/*
  Title:
    String chunks

  Description:
    You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array.
    It is ok for the last element to have less than n characters.
    If n is not a valid size (> 0) (or is absent), you should return an empty array.
    If n is greater than the length of the string, you should return an array with the only element being the same string.

  Examples:
    stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
    stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
    stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
    stringChunk('sunny day', 0) // []

  Kata Link:
    https://www.codewars.com/kata/string-chunks

  Discuss Link:
    https://www.codewars.com/kata/string-chunks/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-chunks/solutions
*/

// Long Solution
/*
const stringChunk = (str, n) => (n > 0 && str.match(new RegExp(`.{1,${n}}`, 'gi'))) || []
*/

// Short Solution
const stringChunk = (str, n) => str.match(new RegExp(`.{1,${(n / n) * n}}`, 'gi')) || []

// Function Export
module.exports = stringChunk
