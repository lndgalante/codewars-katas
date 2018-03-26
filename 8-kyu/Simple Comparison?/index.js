/* eslint eqeqeq: 0 */

/*
  Title:
    Simple Comparison?

  Description:
    Write a function that will compare two values, one will be a number and one will be a string.
    Return true if they are the same character (regardless of their different data types) and return false if they are not.

    To make this challange harder and to promp the challenger to read up about coersion I have disabled some of the built in methods including
    .toString(), .join(), .split(), parseInt and .Number().

  Kata Link:
    https://www.codewars.com/kata/simple-comparison

  Discuss Link:
    https://www.codewars.com/kata/simple-comparison/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-comparison/solutions
*/

// Long Solution
const add = (a, b) => a == b

// Function Export
module.exports = add
