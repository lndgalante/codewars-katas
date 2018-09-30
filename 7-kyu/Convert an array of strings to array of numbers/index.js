/*
  Title:
    Convert an array of strings to array of numbers

  Description:
    Oh no!

    Some really funny web dev gave you an array of numbers from his API response as an array of strings!

    You need to cast the whole array to the correct type.

    Create the function

    that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

  Examples:
    ["1", "2", "3"] to [1, 2, 3]

  Notes:
    Note that you can receive floats as well.

  Kata Link:
    https://www.codewars.com/kata/convert-an-array-of-strings-to-array-of-numbers

  Discuss Link:
    https://www.codewars.com/kata/convert-an-array-of-strings-to-array-of-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-an-array-of-strings-to-array-of-numbers/solutions
*/

// Long Solution
const toNumberArray = stringarray => stringarray.map(Number)

// Function Export
module.exports = toNumberArray
