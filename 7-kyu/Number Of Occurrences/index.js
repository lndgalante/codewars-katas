/* eslint no-unused-vars: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */
/* eslint no-extend-native: 0 */

/*
  Title:
    Number Of Occurrences

  Description:
    Write a function that returns the number of occurrences of an element in an array.

  Examples:
    var arr = [0, 1, 2, 2, 3];

    arr.numberOfOccurrences(0) === 1;
    arr.numberOfOccurrences(4) === 0;
    arr.numberOfOccurrences(2) === 2;
    arr.numberOfOccurrences("a") === 0;

  Kata Link:
    https://www.codewars.com/kata/number-of-occurrences

  Discuss Link:
    https://www.codewars.com/kata/number-of-occurrences/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-of-occurrences/solutions
*/

// Long Solution
Array.prototype.numberOfOccurrences = function(ocurrence) {
  return this.reduce(
    (total, value) => (value === ocurrence ? total + 1 : total),
    0
  )
}

// Function Export
module.exports = Array
