/*
  Title:
    Keep Hydrated!

  Description:
    Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

  Examples:
    time = 3 ----> litres = 1

    time = 6.7---> litres = 3

    time = 11.8--> litres = 5

  Kata Link:
    https://www.codewars.com/kata/keep-hydrated-1

  Discuss Link:
    https://www.codewars.com/kata/keep-hydrated-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/keep-hydrated-1/solutions
*/

// Short Solution
const litres = time => Math.floor(time * 0.5)

// Function Export
module.exports = litres
