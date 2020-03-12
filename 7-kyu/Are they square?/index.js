/*
  Title:
    Are they square?

  Description:
    Write a function that checks whether all elements in an array are square numbers.
    The function should be able to take any number of array elements.

    Your function should return true if all elements in the array are square numbers and false if not.

    An empty array should return undefined. You can assume that all array elements will be positive integers.

  Examples:
    isSquare([1, 4, 9, 16]);
    //returns true

    isSquare([3, 4, 7, 9]);
    //returns false

    isSquare([]);
    //returns undefined

  Kata Link:
    https://www.codewars.com/kata/are-the-numbers-in-order

  Discuss Link:
    https://www.codewars.com/kata/are-the-numbers-in-order/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-the-numbers-in-order/solutions
*/

// Long Solution
const isSquare = array => (array.length > 0 ? array.every(number => Number.isInteger(Math.sqrt(number))) : undefined)

// Function Export
module.exports = isSquare
