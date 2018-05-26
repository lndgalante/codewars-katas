/*
  Title:
    Averages of numbers

  Description:
    Get the averages of these numbers

    Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

  Examples:
    Input:  [ 1, 3, 5, 1, -10]
    Output:  [ 2, 4, 3, -4.5]

  Notes:
      If the array has 0 or 1 values or is null or None, your method should return an empty array.

  Kata Link:
    https://www.codewars.com/kata/averages-of-numbers

  Discuss Link:
    https://www.codewars.com/kata/averages-of-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/averages-of-numbers/solutions
*/

// Long Solution
const averages = numbers =>
  numbers
    ? numbers
        .map((number, index, array) => (number + array[index + 1]) / 2)
        .slice(0, -1)
    : []

// Function Export
module.exports = averages
