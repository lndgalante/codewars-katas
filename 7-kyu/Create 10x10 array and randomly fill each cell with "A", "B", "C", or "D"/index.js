/*
  Title:
    Create 10x10 array and randomly fill each cell with "A", "B", "C", or "D"

  Description:
    Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D'.
    Ensure that each row contain at least one occurance of each letter.

  Examples:
    [
    ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'],
    ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'],
    ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'],
    ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'],
    ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'],
    ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'],
    ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'],
    ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'],
    ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'],
    ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'],
    ]


  Kata Link:
    https://www.codewars.com/kata/56aea73c2283945da300004b

  Discuss Link:
    https://www.codewars.com/kata/56aea73c2283945da300004b/discuss

  Solutions Link:
    https://www.codewars.com/kata/56aea73c2283945da300004b/solutions
*/

// Long Solution
/*
const { random } = require('lodash')

const letters = ['A', 'B', 'C', 'D']

const getRandomLetter = () => letters[random(0, 3)]
const getMatrixRow = () => {
  return Array.from({ length: 10 }, (_, index) => ([0, 1, 2, 3].includes(index) ? letters[index] : getRandomLetter()))
}

const array10 = () => Array.from({ length: 10 }, getMatrixRow)
*/

// Short Solution
const { random } = require('lodash')

const getRandomLetter = () => 'ABCD'[random(0, 3)]

const array10 = () => Array.from({ length: 10 }, () => [...'ABCD', ...Array.from({ length: 6 }, getRandomLetter)])

// Function Export
module.exports = array10
