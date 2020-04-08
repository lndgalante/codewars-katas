/*
  Title:
    Odder Than the Rest

  Description:
    Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
    This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

  Examples:
    oddOne([2,4,6,7,10]) # => 3
    oddOne([2,16,98,10,13,78]) # => 4
    oddOne([4,-8,98,-12,-7,90,100]) # => 4
    oddOne([2,4,6,8]) # => -1

  Kata Link:
    https://www.codewars.com/kata/5983cba828b2f1fd55000114

  Discuss Link:
    https://www.codewars.com/kata/5983cba828b2f1fd55000114/discuss

  Solutions Link:
    https://www.codewars.com/kata/5983cba828b2f1fd55000114/solutions
*/

// Long Solution
const oddOne = (array) => array.findIndex((number) => number % 2)

// Function Export
module.exports = oddOne
