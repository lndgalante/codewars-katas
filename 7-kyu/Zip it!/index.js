/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Zip it!

  Description:
    Writev Array.prototype.zip = function (arr, fn) {}

    that merges the corresponding elements of two sequences using a specified selector function fn (a block in Ruby)

    Examples:
      const a = [1, 2, 3, 4, 5];
      const b = ['a','b'];
      a.zip(b, (a, b) => a + b) === ['1a', '2b']

      const a = [1, 2, 3, 4, 5];
      const b = ['a','b','c','d','e'];
      a.zip(b, (a, b) => a + b.charCodeAt(0)) === [98, 100, 102, 104, 106]

  Kata Link:
    https://www.codewars.com/kata/zip-it

  Discuss Link:
    https://www.codewars.com/kata/zip-it/discuss

  Solutions Link:
    https://www.codewars.com/kata/zip-it/solutions
*/

// Long Solution
Array.prototype.zip = function(arr, fn) {
  return arr.slice(0, this.length).map((element, index) => fn(this[index], element))
}

// Function Export
module.exports = Array
