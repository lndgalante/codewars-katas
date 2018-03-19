/* eslint no-extend-native: 0 */

/*
  Title:
    Implement a Filter function

  Description:
    What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

    The usage is quite simple, like:

    [1,2,3,4].filter((num)=>{ return num > 3})

    should output [4]

  Kata Link:
    https://www.codewars.com/kata/implement-a-filter-function

  Discuss Link:
    https://www.codewars.com/kata/implement-a-filter-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/implement-a-filter-function/solutions
*/

// Long Solution
Array.prototype.filter = function(fn) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) newArray.push(this[i])
  }

  return newArray
}

// Function Export
module.exports = Array
