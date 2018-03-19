/*
  Title:
    Grasshopper - Terminal game combat function

  Description:
    Create a combat function that takes the player's current health and the amount of damage recieved,
    and returns the player's new health. Health can't be less than 0.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-combat-function-1/solutions
*/

// Long Solution
const combat = (health, damage) => Math.max(0, health - damage)

// Function Export
module.exports = combat
