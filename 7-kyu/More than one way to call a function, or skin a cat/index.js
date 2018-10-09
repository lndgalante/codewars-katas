/*
  Title:
    More than one way to call a function, or skin a cat.

  Description:
    Write a single function that can be invoked by either:
      sum(2,3); //5
      sum(2)(3); //5

    Both of these examples should return the sum of the 2 numbers.

  Kata Link:
    https://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat

  Discuss Link:
    https://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat/discuss

  Solutions Link:
    https://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat/solutions
*/

// Long Solution
/*
const sum = (...args) =>
  args.length > 1
    ? [...args].reduce((total, value) => total + value, 0)
    : secondValue => args[0] + secondValue
*/

// Short Solution
const { curry } = require('ramda')

const sum = curry((a, b) => a + b)

// Function Export
module.exports = sum
