/*
  Title:
    Find out whether the shape is a cube

  Description:
    To find the volume (centimeters cubed) of a cuboid you use the formula:
    volume = Length * Width * Height

    But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

    It's up to you to find out whether the cuboid has equal sides (= is a cube).

    Return true if the cuboid could have equal sides, return false otherwise.

    Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

  Notes:
    The sides must be integers

  Kata Link:
    https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube

  Discuss Link:
    https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-out-whether-the-shape-is-a-cube/solutions
*/

// Long Solution
const cubeChecker = (volume, side) =>
  volume > 0 ? volume === side ** 3 : false

// Function Export
module.exports = cubeChecker
