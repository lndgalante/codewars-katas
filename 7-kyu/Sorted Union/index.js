/*
  Title:
    Sorted Union

  Description:
    Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.
    In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
    The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
    Check the assertion tests for examples.
    Courtesy of FreeCodeCamp, a great place to learn web-dev; plus, its founder Quincy Larson is pretty cool and amicable. I made the original one slightly more tricky ;)

  Kata Link:
    https://www.codewars.com/kata/sorted-union

  Discuss Link:
    https://www.codewars.com/kata/sorted-union/discuss

  Solutions Link:
    https://www.codewars.com/kata/sorted-union/solutions
*/

// Long Solution
/*
const uniteUnique = (...arrays) => [...new Set(arrays.reduce((totalArray, array) => totalArray.concat(...array), []))]
*/

// Short Solution
/*
const uniteUnique = (...arrays) => [...new Set([].concat(...arrays))]
*/

// Lodash Solution
const _ = require('lodash')

const uniteUnique = (...arrays) => _.uniq(_.flatten(arrays))

// Function Export
module.exports = uniteUnique
