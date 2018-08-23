/*
  Title:
    Use map() to double the values in an array

  Description:
    Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array.
    Your solution must use the map() function of the built-in javascript Array object.
    If you're not familiar with map(), reading over the documentation may help.

  Examples:
    var someNumbers = [1,2,10,57];
    double(someNumbers); // should return [2,4,20,114]

  Kata Link:
    https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array/solutions
*/

// Long Solution
const double = array => array.map(number => number * 2)

// Function Export
module.exports = double
