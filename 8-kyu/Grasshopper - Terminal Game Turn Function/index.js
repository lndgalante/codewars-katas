/*
  Title:
    Grasshopper - Terminal Game Turn Function

  Description:
    You are creating a text-based terminal version of your favorite board game.
    In the board game, each turn has six steps that must happen in this order:
      1. roll the dice
      2. move
      3. combat
      4. get coins
      5. buy more health
      6. print status

    You are using a library (Game.Logic in C#) that already has the functions below.
    Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.
      - combat
      - buyHealth
      - getCoins
      - printStatus
      - rollDice
      - move

  Kata Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-turn-function

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-turn-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-terminal-game-turn-function/solutions
*/

// These functions are already defined in CodeWars
const rollDice = () => 'rollDice'
const move = () => 'move'
const combat = () => 'combat'
const getCoins = () => 'getCoins'
const buyHealth = () => 'buyHealth'
const printStatus = () => 'printStatus'

// Long Solution
const doTurn = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

// Function Export
module.exports = doTurn
