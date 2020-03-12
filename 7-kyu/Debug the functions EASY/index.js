/*
  Title:
    Debug the functions EASY

  Description:
    Debug the functions

    Should be easy, begin by looking at the code. Debug the code and the functions should work.
    There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

  Kata Link:
    https://www.codewars.com/kata/debug-the-functions-easy

  Discuss Link:
    https://www.codewars.com/kata/debug-the-functions-easy/discuss

  Solutions Link:
    https://www.codewars.com/kata/debug-the-functions-easy/solutions
*/

// Long Solution
const multi = array => array.reduce((total, number) => total * number, 1)

const add = array => array.reduce((total, number) => total + number, 0)

const reverse = string => [...string].reverse().join('')

// Function Export
module.exports = { multi, add, reverse }
