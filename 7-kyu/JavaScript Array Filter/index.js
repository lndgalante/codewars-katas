/*
  Title:
    JavaScript Array Filter

  Description:
    JavaScript Arrays support a filter function (starting in JavaScript 1.6).
    Use the filter functionality to complete the function given.

  Examples:
    getEvenNumbers([2,4,5,6]) // should == [2,4,6]

  Kata Link:
    https://www.codewars.com/kata/javascript-array-filter/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/javascript-array-filter/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/javascript-array-filter/train/javascript/solutions
*/

// Long Solution
const getEvenNumbers = numbersArray =>
  numbersArray.filter(number => number % 2 === 0)

// Function Export
module.exports = getEvenNumbers
