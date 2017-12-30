/*
  Title:
    Triangular Treasure

  Description:
    Triangular numbers are so called because of the equilateral triangular shape
    that they occupy when laid out as dots. i.e.

    1st (1)   2nd (3)    3rd (6)
    *          **        ***
               *         **
                         *

  Examples:
    triangular(0)==0,
    triangular(2)==3,
    triangular(3)==6,
    triangular(-10)==0

  Kata Link:
    https://www.codewars.com/kata/triangular-treasure

  Discuss Link:
    https://www.codewars.com/kata/triangular-treasure/discuss

  Solutions Link:
    https://www.codewars.com/kata/triangular-treasure/solutions
*/

// Short Solution
const triangular = n => (Math.sign(n) === 1 ? n * (n + 1) / 2 : 0)

// Function Export
module.exports = triangular
