/* eslint no-unused-vars: 0 */

/*
  Title:
    Grasshopper - Bug Squashing

  Description:
    You are creating a text-based terminal version of your favorite board game.
    In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

    You are using a library that already has the functions below. Create a function named that calls the functions in the proper order.

    - combat
    - buyHealth
    - getCoins
    - printStatus
    - rollDice
    - move

  Kata Link:
    https://www.codewars.com/kata/grasshopper-bug-squashing

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-bug-squashing/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-bug-squashing/solutions
*/

// Long Solution
/*
let health = 100
let position = 0
let coins = 0

const rollDice = () => 'rollDice'
const move = () => 'move'
const combat = () => 'combat'
const getCoins = () => 'getCoins'
const buyHealth = () => 'buyHealth'
const printStatus = () => 'printStatus'

const main = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}
*/

// Short Solution
const rollDice = () => 'rollDice'
const move = () => 'move'
const combat = () => 'combat'
const getCoins = () => 'getCoins'
const buyHealth = () => 'buyHealth'
const printStatus = () => 'printStatus'

const health = 100
const position = 0
const coins = 0

const main = () =>
  [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
    action()
  )

// Function Export
module.exports = main
