/*
  Title:


  Description:
    Bob needs a fast way to calculate the volume of a cuboid with three values:
    length, width and the height of the cuboid. Write a function to help Bob with this calculation.

    Ruby: def get_volume_of_cuboid(length, width, height)
    Bash: bash run_shell length width height

  Kata Link:
    https://www.codewars.com/kata/volume-of-a-cuboid

  Discuss Link:
    https://www.codewars.com/kata/volume-of-a-cuboid/discuss

  Solutions Link:
    https://www.codewars.com/kata/volume-of-a-cuboid/solutions
*/

// Long Solution
/*
const Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = (length, width, height) => length * width * height

  return Kata
})()
*/

// Short Solution
class Kata {
  getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// Function Export
module.exports = Kata
