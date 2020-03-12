/*
  Title:
    Sum ALL the arrays!

  Description:
    You are given an array of values.
    Sum every number value in the array, and any nested arrays (to any depth).
    Ignore all other types of values.

  Kata Link:
    https://www.codewars.com/kata/sum-all-the-arrays

  Discuss Link:
    https://www.codewars.com/kata/sum-all-the-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-all-the-arrays/solutions
*/

// Long Solution
/*
const _ = require('lodash')

const totalSum = arr =>
  arr.reduce((total, el) => {
    if (typeof el !== 'number') return total
    return total + el
  }, 0)

const arraySum = arr =>
  arr.reduce((total, el) => {
    if (Array.isArray(el)) return total + totalSum(_.flattenDeep(el))
    if (typeof el !== 'number') return total

    return total + el
  }, 0)
*/

// Short Solution
const _ = require('lodash')

const arraySum = array => _.flattenDeep(array).reduce((total, element) => (typeof element === 'number' ? total + element : total), 0)

// Function Export
module.exports = arraySum
