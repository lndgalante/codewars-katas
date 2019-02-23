/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Sum The Array

  Description:
    Your job is to add a method 'sum' to all array objects, which sums all the numbers in it.
    You should return 0 if the array is empty.

  Examples:
    var arr = [1,2,3,4];
    arr.sum();  //returns 10

  Kata Link:
    https://www.codewars.com/kata/sum-the-array

  Discuss Link:
    https://www.codewars.com/kata/sum-the-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-the-array/solutions
*/

// Long Solution
Array.prototype.sum = function() {
  return this.reduce((total, number) => total + number, 0)
}

// Function Export
module.exports = Array
