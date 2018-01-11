/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Array Helpers

  Description:
    This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

    * square() must return a copy of the array, containing all values squared, the original array must not be changed
    * cube() must return a copy of the array, containing all values cubed, the original array must not be changed
    * average() must return the average of all array values, average() on an empty array must return NaN
    * sum() must return the sum of all array values
    * even() must return an array of all even numbers, the original array must not be changed
    * odd() must return an array of all odd numbers, the original array must not be changed

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
Array.prototype.square = function() {
  return this.map(number => number ** 2)
}

Array.prototype.cube = function() {
  return this.map(number => number ** 3)
}

Array.prototype.average = function() {
  return this.sum() / this.length
}

Array.prototype.sum = function() {
  return this.reduce((total, actual) => total + actual, 0)
}

Array.prototype.even = function() {
  return this.filter(number => number % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(number => number % 2 !== 0)
}

// Function Export
module.exports = Array
