/*
  Title:
    Surface Area and Volume of a Box

  Description:
    Write a function that returns the total surface area and volume of a box as an array: [area, volume].

  Kata Link:
    https://www.codewars.com/kata/surface-area-and-volume-of-a-box

  Discuss Link:
    https://www.codewars.com/kata/surface-area-and-volume-of-a-box/discuss

  Solutions Link:
    https://www.codewars.com/kata/surface-area-and-volume-of-a-box/solutions
*/

// Long Solution
/*
const getSize = (width, height, depth) => {
  const area = (depth * width + depth * height + width * height) * 2
  const volume = width * height * depth

  return [area, volume]
}
*/

// Short Solution
const getSize = (width, height, depth) => [
  (depth * width + depth * height + width * height) * 2,
  width * height * depth,
]

// Function Export
module.exports = getSize
