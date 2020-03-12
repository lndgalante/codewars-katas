/*
  Title:
    String Scramble

  Description:
    Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

  Examples:
    scramble('abcd', [0,3,1,2]) -> 'acdb'
    The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corisponding numbers in the index array.

  Notes:
    In other words, put the first character in the string at the index described by the first element of the array

    You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

  Kata Link:
    https://www.codewars.com/kata/string-scramble

  Discuss Link:
    https://www.codewars.com/kata/string-scramble/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-scramble/solutions
*/

// Long Solution
/*
const scramble = (str, arr) =>
  [...str]
    .map((char, index) => ({ char, position: arr[index] }))
    .reduce((result, { char, position }) => ((result[position] = char), result), [])
    .join('')
*/

// Short Solution
const scramble = (string, array) => string.replace(/./g, (_, index) => string[array.indexOf(index)])

// Function Export
module.exports = scramble
