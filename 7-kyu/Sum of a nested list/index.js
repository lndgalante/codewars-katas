/*
  Title:
    Sum of a nested list

  Description:
    Implement a function to calculate the sum of the numerical values in a nested list.

  Examples:
    sumNested([1, [2, [3, [4]]]]) => 10

  Kata Link:
    https://www.codewars.com/kata/sum-of-a-nested-list

  Discuss Link:
    https://www.codewars.com/kata/sum-of-a-nested-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-a-nested-list/solutions
*/

// Lodash Solution
/*
const _ = require('lodash')

const sumNested = arr => _.sum(_.flattenDeep(arr))
*/

// Short Solution

const sumNested = array => array.flat(Infinity).reduce((total, number) => total + number, 0)

// Function Export
module.exports = sumNested
