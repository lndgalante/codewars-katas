/*
  Title:
    Convert Hash To An Array

  Description:
    Convert a hash into an array. Nothing more, Nothing less.
      {name: 'Jeremy', age: 24, role: 'Software Engineer'}

    should be converted into
      [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

  Notes:
    The output array should be sorted alphabetically.

  Kata Link:
    https://www.codewars.com/kata/convert-hash-to-an-array

  Discuss Link:
    https://www.codewars.com/kata/convert-hash-to-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-hash-to-an-array/solutions
*/

// Long Solution
const convertHashToArray = hash => Object.entries(hash).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))

// Function Export
module.exports = convertHashToArray
