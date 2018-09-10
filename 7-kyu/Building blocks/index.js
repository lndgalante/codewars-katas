/*
  Title:
    Building blocks

  Description:
    Write a class Block that creates a block (Duh..)

    Requirements

    The constructor should take an array as an argument,
    this will contain 3 integers of the form [width, length, height] from which the Block should be created.

    Define these methods:
      `getWidth()` return the width of the `Block`

      `getLength()` return the length of the `Block`

      `getHeight()` return the height of the `Block`

      `getVolume()` return the volume of the `Block`

      `getSurfaceArea()` return the surface area of the `Block`

  Examples:
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2

    b.getLength() // -> 4

    b.getHeight() // -> 6

    b.getVolume() // -> 48

    b.getSurfaceArea() // -> 88

  Notes:
    No error checking is needed

  Kata Link:
    https://www.codewars.com/kata/building-blocks

  Discuss Link:
    https://www.codewars.com/kata/building-blocks/discuss

  Solutions Link:
    https://www.codewars.com/kata/building-blocks/solutions
*/

// Long Solution
class Block {
  constructor(data) {
    ;[this.width, this.length, this.height] = data
  }

  getWidth() {
    return this.width
  }

  getHeight() {
    return this.height
  }

  getLength() {
    return this.length
  }

  getVolume() {
    const { width, height, length } = this
    return width * height * length
  }

  getSurfaceArea() {
    const { width, height, length } = this
    return 2 * (length * width + length * height + height * width)
  }
}

// Function Export
module.exports = Block
