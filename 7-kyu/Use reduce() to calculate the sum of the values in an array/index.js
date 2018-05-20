/*
  Title:
    Use reduce() to calculate the sum of the values in an array

  Description:
    Make the sum() function return the sum of the values in the passed in array.
    Your solution must use the reduce() function of the built-in javascript Array object.
    If you're not familiar with reduce(), reading over the documentation may help.

  Examples:
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];

    sum(someNumbers); // should return 55

  Kata Link:
    https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array/solutions
*/

// Long Solution
const sum = array => array.reduce((total, value) => total + value, 0)

// Function Export
module.exports = sum
