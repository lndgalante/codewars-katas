/*
  Title:
    Grasshopper - If/else syntax debug

  Description:
    While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive.
    Unfortunately, Greg made some errors while creating the function.

    checkAlive/CheckAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

    checkAlive receives one parameter health which will always be a whole number between -10 and 10.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-if-slash-else-syntax-debug

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-if-slash-else-syntax-debug/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-if-slash-else-syntax-debug/solutions
*/

// Long Solution
const checkAlive = health => health > 0

// Function Export
module.exports = checkAlive
