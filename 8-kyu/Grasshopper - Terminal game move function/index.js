/*
  Title:
    Grasshopper - Terminal game move function

  Description:
    In this game, the hero moves from left to right.
    The player rolls the dice and moves the number of spaces indicated by the dice two times.

    Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

  Examples:
    move(3, 6) should equal 15

  Kata Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-move-function

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-move-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-move-function/solutions
*/

// Long Solution
const move = (position, roll) => position + roll * 2

// Function Export
module.exports = move
