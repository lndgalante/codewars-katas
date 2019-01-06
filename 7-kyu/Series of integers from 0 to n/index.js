/*
  Title:
    Series of integers from 0 to n

  Description:
    Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.
    For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].
    n/$n can be any integer greater than or equal to 0.


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/series-of-integers-from-0-to-n

  Discuss Link:
    https://www.codewars.com/kata/series-of-integers-from-0-to-n/discuss

  Solutions Link:
    https://www.codewars.com/kata/series-of-integers-from-0-to-n/solutions
*/

// Long Solution
/*
const generateIntegers = n => Array.from({ length: n + 1 }, (_, index) => index)
*/

// Short Solution
const generateIntegers = n => [...new Array(n + 1).keys()]

// Function Export
module.exports = generateIntegers
