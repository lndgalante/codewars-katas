/*
  Title:
    Array element parity

  Description:
    In this Kata, you will be given an array of integers whose elements have both a negative and a positive value,
    except for one integer that is either only negative or only positive. Your task will be to find that integer.

  Examples:
    solve[1,-1,2,-2,3] = 3  --> 3 only has a positive ocurrence.
    solve([-3,1,2,3,-1,-4,-2]) = -4  --> -4 only has a negative occurence
    solve([1,-1,2,-2,3,3]) = 3  --> the integer that is only positive or only negative my appear more than once.

  Kata Link:
    https://www.codewars.com/kata/array-element-parity

  Discuss Link:
    https://www.codewars.com/kata/array-element-parity/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-element-parity/solutions
*/

// Long Solution
const solve = arr => arr.find(number => !arr.includes(-number))

// Lodash Solution
/*
const _ = require('lodash')
const solve = _.flow(_.uniq, _.sum)
*/

// Function Export
module.exports = solve
