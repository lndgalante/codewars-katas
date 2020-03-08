/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Adding useful functional functionality to JavaScript arrays

  Description:
    The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum.
     Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

    Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count'
    Example: Array.range(0, 3) returns [0, 1, 2]

    Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3
    Example: Array.range(-1,4).sum() should return 2

    While not forbidden try to write both function without using a for loop

  Kata Link:
    https://www.codewars.com/kata/adding-useful-functional-functionality-to-javascript-arrays

  Discuss Link:
    https://www.codewars.com/kata/adding-useful-functional-functionality-to-javascript-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/adding-useful-functional-functionality-to-javascript-arrays/solutions
*/

// Long Solution
Array.range = (start, count) =>{
  return Array.from({ length: count }, (_, index) => start + index)
}

Array.prototype.sum = function() {
  return this.reduce((total, value) => total + value, 0)
}

// Function Export
module.exports = Array
