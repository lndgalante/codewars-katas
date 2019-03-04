/*
  Title:
    Series of integers from m to n

  Description:
    Write a function generateIntegers/generate_integers that accepts two arguments m/$m and n/$n and generates an array containing the integers from m to n inclusive.

  Examples:
    For example, generateIntegers(2, 5)/generate_integers(2, 5) should return [2, 3, 4, 5].

  Notes:
    m/$m and n/$n can be any integers greater than or equal to 0.
    n/$n will always be greater than or equal to m/$m.

  Kata Link:
    https://www.codewars.com/kata/series-of-integers-from-m-to-n

  Discuss Link:
    https://www.codewars.com/kata/series-of-integers-from-m-to-n/discuss

  Solutions Link:
    https://www.codewars.com/kata/series-of-integers-from-m-to-n/solutions
*/

// Long Solution
const generateIntegers = (m, n) => Array.from({ length: n - m + 1 }, (_, index) => index + m)

// Lodash Solution
/*
const { range } = require('lodash')
const generateIntegers = (m, n) => range(m, n + 1)
*/

// Function Export
module.exports = generateIntegers
