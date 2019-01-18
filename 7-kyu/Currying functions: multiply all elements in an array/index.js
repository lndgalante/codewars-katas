/*
  Title:
    Currying functions: multiply all elements in an array

  Description:
    To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
    The returned array should consist of each of the elements from the first array multiplied by the integer.
    Example:
    multiplyAll([1, 2, 3])(2) = [2, 4, 6];

    multiply_all([1, 2, 3])(2); // => [2, 4, 6]

    Here's a nice Youtube video about currying, which might help you if this is new to you.


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/solutions
*/

// Long Solution
const multiplyAll = arr => int => arr.map(num => num * int)

// Function Export
module.exports = multiplyAll
