/* eslint no-extend-native: 0 */

/*
  Title:
    Array arithmetic

  Description:
    Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements.

  Examples:
    [1,2,3] + 4 = 10
    [1,1,1] - 3 = 0
    ['a','b'] + 'c' = 'abc'

  Notes:
    Due to intrinsic uncertainty of empty arrays, in this kata an empty array is treated as 0. For hints see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

  Kata Link:
    https://www.codewars.com/kata/5645fda2956e462b5100005e

  Discuss Link:
    https://www.codewars.com/kata/5645fda2956e462b5100005e/discuss

  Solutions Link:
    https://www.codewars.com/kata/5645fda2956e462b5100005e/solutions
*/

// Long Solution
/*
Array.prototype.valueOf = function () {
  const [array, firstElement] = [this, this[0]]
  const initialValue = typeof firstElement === 'string' ? '' : 0

  return array.reduce((acc, element) => acc + element, initialValue)
}
*/

// Short Solution
Array.prototype.valueOf = function () {
  return this.length > 0 ? this.reduce((acc, element) => acc + element) : 0
}

// Function Export
module.exports = Array
