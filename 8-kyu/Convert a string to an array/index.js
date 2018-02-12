/*
  Title:
    Convert a string to an array

  Description:
    Write a function to split a string and convert it into an array of words.

  Examples:
    string_to_array("Robin Singh") => ["Robin", "Singh"]

    string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]

  Notes:
    In Javascript the function is written in camelCase as 'stringToArray'

  Kata Link:
    https://www.codewars.com/kata/convert-a-string-to-an-array

  Discuss Link:
    https://www.codewars.com/kata/convert-a-string-to-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-a-string-to-an-array/solutions
*/

// Long Solution
const stringToArray = string => string.split(' ')

// Function Export
module.exports = stringToArray
