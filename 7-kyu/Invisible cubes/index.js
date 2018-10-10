/*
  Title:
    Invisible cubes

  Description:
    Imagine there's a big cube consisting of n^3 small cubes.
    Calculate, how many small cubes are not visible from outside.

    For example, if we have a cube which has 4 cubes in a row, then the function should return 8,
    because there are 8 cubes inside our cube (2 cubes in each dimension)

  Kata Link:
    https://www.codewars.com/kata/invisible-cubes

  Discuss Link:
    https://www.codewars.com/kata/invisible-cubes/discuss

  Solutions Link:
    https://www.codewars.com/kata/invisible-cubes/solutions
*/

// Long Solution
const notVisibleCubes = n => (n < 3 ? 0 : (n - 2) ** 3)

// Function Export
module.exports = notVisibleCubes
