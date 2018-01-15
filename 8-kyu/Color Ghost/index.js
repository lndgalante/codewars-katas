/*
  Title:
    Color Ghost

  Description:
    Create a class Ghost

    Ghost objects are instantiated without any arguments.

    Ghost objects are given a random color attribute
    of "white" or "yellow" or "purple" or "red" when instantiated

  Examples:
    ghost = new Ghost();
    ghost.color //=> "white" or "yellow" or "purple" or "red"

  Kata Link:
    https://www.codewars.com/kata/color-ghost

  Discuss Link:
    https://www.codewars.com/kata/color-ghost/discuss

  Solutions Link:
    https://www.codewars.com/kata/color-ghost/solutions
*/

// Long Solution
class Ghost {
  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red']
  }

  get color() {
    const randomPosition = Math.trunc(Math.random() * this.colors.length)
    return this.colors[randomPosition]
  }
}

// Function Export
module.exports = Ghost
