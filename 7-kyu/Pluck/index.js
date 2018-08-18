/*
  Title:
    Pluck

  Description:
    Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

  Examples:
    pluck([{ a: 1 }, { a: 2 }], 'a') // -> [1,2]

  Notes:
    If an object is missing the property, you should just leave it as undefined in the output array.

  Kata Link:
    https://www.codewars.com/kata/pluck

  Discuss Link:
    https://www.codewars.com/kata/pluck/discuss

  Solutions Link:
    https://www.codewars.com/kata/pluck/solutions
*/

// Long Solution
const pluck = (objs, name) => objs.map(obj => obj[name])

// Lodash Solution
/*
const { pluck } = require('lodash')
*/

// Function Export
module.exports = pluck
