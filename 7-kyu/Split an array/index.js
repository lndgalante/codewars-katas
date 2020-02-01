/*
  Title:
    Split an array

  Description:
    Split an array of objects into 2 arrays based on truthiness of a provided property.
    The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

  Examples:
    var obj1 = { prop: true },
        obj2 = { prop: false };

    split([obj1, obj2], 'prop');
    // [[obj1], [obj2]]

  Kata Link:
    https://www.codewars.com/kata/split-an-array

  Discuss Link:
    https://www.codewars.com/kata/split-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/split-an-array/solutions
*/

// Long Solution - Better Performance
const split = (arr, prop) =>
  arr.reduce((acc, obj) => (obj[prop] ? [[...acc[0], obj], acc[1]] : [acc[0], [...acc[1], obj]]), [[], []])

// Short Solution - Bad performance
/*
const split = (arr, prop) => [arr.filter((obj) => obj[prop]), arr.filter((obj) => !obj[prop])]
*/

// Lodash Solution
/*
const { partition: split } = require('lodash')
*/

// Function Export
module.exports = split
