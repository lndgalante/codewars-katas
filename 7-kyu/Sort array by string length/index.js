/*
  Title:
    Sort array by string length

  Description:
    Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

    For example, if this array were passed as an argument:

    ["Telescopes", "Glasses", "Eyes", "Monocles"]

    Your function would return the following array:

    ["Eyes", "Glasses", "Monocles", "Telescopes"]

    All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

  Kata Link:
    https://www.codewars.com/kata/sort-array-by-string-length

  Discuss Link:
    https://www.codewars.com/kata/sort-array-by-string-length/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-array-by-string-length/solutions
*/

// Long Solution
const sortByLength = array => [...array].sort((a, b) => a.length - b.length)

// Function Export
module.exports = sortByLength
